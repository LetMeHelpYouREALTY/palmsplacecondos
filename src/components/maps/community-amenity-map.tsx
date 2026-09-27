"use client";

import Script from "next/script";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  amenityCategories,
  communityMapCenter,
  curatedPlacesForCategory,
  formatPlaceAddress,
  type AmenityCategoryId,
  type CuratedNearbyPlace,
} from "@/lib/content/nearby-amenities";
import {
  buildGoogleMapsJavaScriptApiUrl,
  communityKeylessMapEmbedUrl,
  getGoogleMapsApiKey,
  getGoogleMapsMapId,
  googleMapsDirectionsUrlForQuery,
} from "@/lib/google-maps-js";
import { cn } from "@/lib/utils";

type CommunityAmenityMapProps = {
  /** Initial category when the map loads */
  defaultCategory?: AmenityCategoryId;
  /** Shorter height on homepage embeds */
  variant?: "full" | "compact";
  className?: string;
};

type MapStatus = "idle" | "loading-script" | "ready" | "fallback";

const SEARCH_RADIUS_METERS = 3500;
const MAP_HEIGHT_CLASS = {
  full: "min-h-[420px] md:min-h-[480px]",
  compact: "min-h-[360px] md:min-h-[400px]",
} as const;

function formatAddressLine(place: CuratedNearbyPlace): string {
  return formatPlaceAddress(place);
}

export function CommunityAmenityMap({
  defaultCategory = "restaurants",
  variant = "full",
  className,
}: CommunityAmenityMapProps) {
  const apiKey = getGoogleMapsApiKey();
  const mapId = getGoogleMapsMapId();
  const hostRef = useRef<HTMLDivElement>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<google.maps.Map | null>(null);
  const markersRef = useRef<google.maps.Marker[]>([]);
  const infoWindowRef = useRef<google.maps.InfoWindow | null>(null);

  const [shouldLoad, setShouldLoad] = useState(false);
  const [scriptReady, setScriptReady] = useState(false);
  const [status, setStatus] = useState<MapStatus>(apiKey ? "idle" : "fallback");
  const [activeCategory, setActiveCategory] = useState<AmenityCategoryId>(defaultCategory);
  const [livePlaces, setLivePlaces] = useState<
    { name: string; address: string; rating?: number; mapsUri?: string }[]
  >([]);

  useEffect(() => {
    const host = hostRef.current;
    if (!host || shouldLoad) return;

    if (typeof IntersectionObserver === "undefined") {
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "240px 0px", threshold: 0.01 },
    );
    observer.observe(host);
    return () => observer.disconnect();
  }, [shouldLoad]);

  const clearMarkers = useCallback(() => {
    for (const marker of markersRef.current) {
      marker.setMap(null);
    }
    markersRef.current = [];
  }, []);

  const openInfo = useCallback(
    (title: string, address: string, rating?: number, mapsUri?: string) => {
      const iw = infoWindowRef.current;
      const map = mapRef.current;
      if (!iw || !map) return;

      const ratingLine =
        rating !== undefined && rating > 0
          ? `<p style="margin:4px 0 0;font-size:13px;">Rating: ${rating.toFixed(1)}</p>`
          : "";
      const directionsQuery = mapsUri ?? address;
      const directionsHref = googleMapsDirectionsUrlForQuery(directionsQuery);

      iw.setContent(
        `<div style="max-width:220px;font-family:system-ui,sans-serif;line-height:1.35;">
          <strong>${title}</strong>
          <p style="margin:6px 0 0;font-size:13px;">${address}</p>
          ${ratingLine}
          <p style="margin:8px 0 0;"><a href="${directionsHref}" target="_blank" rel="noopener noreferrer">Directions</a></p>
        </div>`,
      );
    },
    [],
  );

  const addMarker = useCallback(
    (
      map: google.maps.Map,
      position: google.maps.LatLngLiteral,
      title: string,
      address: string,
      isCommunity: boolean,
      rating?: number,
      mapsUri?: string,
    ) => {
      const marker = new google.maps.Marker({
        map,
        position,
        title,
        zIndex: isCommunity ? 1000 : undefined,
      });
      marker.addListener("click", () => {
        openInfo(title, address, rating, mapsUri);
        infoWindowRef.current?.open({ map, anchor: marker });
      });
      markersRef.current.push(marker);
      return marker;
    },
    [openInfo],
  );

  const renderCuratedMarkers = useCallback(
    (map: google.maps.Map, categoryId: AmenityCategoryId) => {
      clearMarkers();
      addMarker(
        map,
        { lat: communityMapCenter.latitude, lng: communityMapCenter.longitude },
        communityMapCenter.name,
        communityMapCenter.addressLine,
        true,
      );

      const curated = curatedPlacesForCategory(categoryId).filter(
        (place) => place.id !== "palms-place-tower",
      );
      for (const place of curated) {
        if (place.latitude === undefined || place.longitude === undefined) continue;
        addMarker(
          map,
          { lat: place.latitude, lng: place.longitude },
          place.name,
          formatAddressLine(place),
          false,
        );
      }
    },
    [addMarker, clearMarkers],
  );

  const searchNearby = useCallback(
    async (map: google.maps.Map, categoryId: AmenityCategoryId) => {
      const category = amenityCategories.find((c) => c.id === categoryId);
      if (!category) return;

      clearMarkers();
      addMarker(
        map,
        { lat: communityMapCenter.latitude, lng: communityMapCenter.longitude },
        communityMapCenter.name,
        communityMapCenter.addressLine,
        true,
      );

      try {
        const placesLib = (await google.maps.importLibrary("places")) as google.maps.PlacesLibrary;
        const PlaceCtor = placesLib.Place;
        if (!PlaceCtor?.searchNearby) {
          renderCuratedMarkers(map, categoryId);
          setLivePlaces([]);
          return;
        }

        const center = new google.maps.LatLng(
          communityMapCenter.latitude,
          communityMapCenter.longitude,
        );
        const { places } = await PlaceCtor.searchNearby({
          fields: ["displayName", "formattedAddress", "location", "rating", "googleMapsURI"],
          locationRestriction: {
            center,
            radius: SEARCH_RADIUS_METERS,
          },
          includedPrimaryTypes: category.placeTypes,
          maxResultCount: 12,
        });

        const summarized: { name: string; address: string; rating?: number; mapsUri?: string }[] =
          [];

        for (const place of places) {
          const loc = place.location;
          if (!loc) continue;
          const name = place.displayName ?? "Place";
          const address = place.formattedAddress ?? name;
          const rating = place.rating ?? undefined;
          const mapsUri = place.googleMapsURI ?? undefined;
          summarized.push({ name, address, rating, mapsUri });
          addMarker(
            map,
            { lat: loc.lat(), lng: loc.lng() },
            name,
            address,
            false,
            rating,
            mapsUri,
          );
        }

        setLivePlaces(summarized);
        if (places.length === 0) {
          renderCuratedMarkers(map, categoryId);
        }
      } catch {
        renderCuratedMarkers(map, categoryId);
        setLivePlaces([]);
      }
    },
    [addMarker, clearMarkers, renderCuratedMarkers],
  );

  const initMap = useCallback(async () => {
    if (!mapContainerRef.current || mapRef.current) return;
    if (!apiKey || typeof google === "undefined") {
      setStatus("fallback");
      return;
    }

    try {
      const { Map } = (await google.maps.importLibrary("maps")) as google.maps.MapsLibrary;
      const mapOptions: google.maps.MapOptions = {
        center: { lat: communityMapCenter.latitude, lng: communityMapCenter.longitude },
        zoom: 14,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: true,
      };
      if (mapId) {
        mapOptions.mapId = mapId;
      }

      const map = new Map(mapContainerRef.current, mapOptions);
      mapRef.current = map;
      infoWindowRef.current = new google.maps.InfoWindow();
      setStatus("ready");
      await searchNearby(map, activeCategory);
    } catch {
      setStatus("fallback");
    }
  }, [activeCategory, apiKey, mapId, searchNearby]);

  useEffect(() => {
    if (!shouldLoad || !scriptReady || status === "fallback") return;
    void initMap();
  }, [shouldLoad, scriptReady, status, initMap]);

  useEffect(() => {
    const map = mapRef.current;
    if (!map || status !== "ready") return;
    void searchNearby(map, activeCategory);
  }, [activeCategory, searchNearby, status]);

  const handleScriptReady = () => {
    setScriptReady(true);
    if (apiKey) {
      setStatus("loading-script");
    }
  };

  const showInteractiveMap = shouldLoad && Boolean(apiKey) && status !== "fallback";
  const showEmbedFallback = shouldLoad && (!apiKey || status === "fallback");
  const curatedForList = curatedPlacesForCategory(activeCategory);

  return (
    <div className={cn("w-full", className)} ref={hostRef}>
      <div
        aria-label="Amenity category filters"
        className="flex flex-wrap gap-2"
        role="toolbar"
      >
        {amenityCategories.map((category) => {
          const selected = category.id === activeCategory;
          return (
            <button
              aria-label={category.ariaLabel}
              aria-pressed={selected}
              className={cn(
                "rounded-full border px-3 py-1.5 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-palms-gold",
                selected
                  ? "border-palms-gold bg-palms-gold/15 text-palms-cream"
                  : "border-palms-gold/25 bg-palms-charcoal-muted/40 text-palms-cream/85 hover:border-palms-gold/50",
              )}
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              type="button"
            >
              {category.label}
            </button>
          );
        })}
      </div>

      <div
        className={cn(
          "mt-4 overflow-hidden rounded-xl border border-palms-gold/20 bg-palms-charcoal-muted/20",
          MAP_HEIGHT_CLASS[variant],
        )}
      >
        {showInteractiveMap ? (
          <>
            <Script
              onError={() => setStatus("fallback")}
              onReady={handleScriptReady}
              src={buildGoogleMapsJavaScriptApiUrl(apiKey!)}
              strategy="lazyOnload"
            />
            <div
              aria-label={`Map of amenities near ${communityMapCenter.name}`}
              className="h-full min-h-[inherit] w-full"
              ref={mapContainerRef}
              role="region"
            />
          </>
        ) : showEmbedFallback ? (
          <iframe
            allowFullScreen
            className="h-full min-h-[inherit] w-full border-0"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            src={communityKeylessMapEmbedUrl()}
            title={`Map near ${communityMapCenter.name} at ${communityMapCenter.addressLine}`}
          />
        ) : (
          <p className="sr-only">Map loads when this section is near the viewport.</p>
        )}
      </div>

      <div className="mt-6">
        <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-palms-gold-muted">
          Curated nearby places
        </h3>
        <ul className="mt-3 list-none space-y-3 text-sm text-palms-cream/85">
          {curatedForList.map((place) => (
            <li key={place.id}>
              <p className="font-medium text-palms-cream">{place.name}</p>
              <p className="text-palms-cream/75">{formatAddressLine(place)}</p>
              <a
                className="mt-1 inline-block text-palms-gold underline-offset-4 hover:underline"
                href={googleMapsDirectionsUrlForQuery(formatAddressLine(place))}
                rel="noopener noreferrer"
                target="_blank"
              >
                Directions
              </a>
            </li>
          ))}
        </ul>
        {livePlaces.length > 0 ? (
          <p className="mt-4 text-xs text-palms-cream/55">
            Map pins also include live Google Places results for {activeCategory}; ratings come from
            Google when available.
          </p>
        ) : null}
      </div>
    </div>
  );
}
