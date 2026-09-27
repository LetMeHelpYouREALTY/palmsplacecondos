"use client";

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
  communityKeylessMapEmbedUrl,
  getGoogleMapsApiKey,
  getGoogleMapsMapId,
  googleMapsDirectionsUrlForQuery,
} from "@/lib/google-maps-js";
import { loadGoogleMaps, mapsAuthFailed } from "@/lib/google-maps-loader";
import { searchCategory } from "@/lib/google-maps-places-search";
import { cn } from "@/lib/utils";

type CommunityAmenityMapProps = {
  /** Initial category when the map loads */
  defaultCategory?: AmenityCategoryId;
  /** Shorter height on homepage embeds */
  variant?: "full" | "compact";
  className?: string;
};

type MapStatus = "idle" | "loading" | "ready" | "fallback";

type LivePlaceSummary = {
  name: string;
  address: string;
  mapsUri?: string;
};

const MAP_HEIGHT_CLASS = {
  full: "min-h-[420px] md:min-h-[480px]",
  compact: "min-h-[360px] md:min-h-[400px]",
} as const;

const mapCenterLiteral: google.maps.LatLngLiteral = {
  lat: communityMapCenter.latitude,
  lng: communityMapCenter.longitude,
};

function formatAddressLine(place: CuratedNearbyPlace): string {
  return formatPlaceAddress(place);
}

function buildInfoWindowContent(
  title: string,
  address: string,
  mapsUri?: string,
): HTMLElement {
  const wrap = document.createElement("div");
  wrap.style.maxWidth = "220px";
  wrap.style.fontFamily = "system-ui, sans-serif";
  wrap.style.lineHeight = "1.35";

  const strong = document.createElement("strong");
  strong.textContent = title;
  wrap.appendChild(strong);

  const addr = document.createElement("p");
  addr.style.margin = "6px 0 0";
  addr.style.fontSize = "13px";
  addr.textContent = address;
  wrap.appendChild(addr);

  const linkPara = document.createElement("p");
  linkPara.style.margin = "8px 0 0";
  const link = document.createElement("a");
  link.href = googleMapsDirectionsUrlForQuery(mapsUri ?? address);
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.textContent = "Directions";
  linkPara.appendChild(link);
  wrap.appendChild(linkPara);

  return wrap;
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
  const [status, setStatus] = useState<MapStatus>(() =>
    !apiKey || mapsAuthFailed ? "fallback" : "idle",
  );
  const [activeCategory, setActiveCategory] = useState<AmenityCategoryId>(defaultCategory);
  const [livePlaces, setLivePlaces] = useState<LivePlaceSummary[]>([]);
  const [placesFromApi, setPlacesFromApi] = useState(false);

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

  const enterFallback = useCallback(() => {
    clearMarkers();
    mapRef.current = null;
    infoWindowRef.current = null;
    setLivePlaces([]);
    setPlacesFromApi(false);
    setStatus("fallback");
  }, [clearMarkers]);

  useEffect(() => {
    const onAuthFailure = () => {
      enterFallback();
    };
    window.addEventListener("gmaps:auth-failure", onAuthFailure);
    return () => window.removeEventListener("gmaps:auth-failure", onAuthFailure);
  }, [enterFallback]);

  const openInfo = useCallback((title: string, address: string, mapsUri?: string) => {
    const iw = infoWindowRef.current;
    const map = mapRef.current;
    if (!iw || !map) return;
    iw.setContent(buildInfoWindowContent(title, address, mapsUri));
  }, []);

  const addMarker = useCallback(
    (
      map: google.maps.Map,
      position: google.maps.LatLngLiteral,
      title: string,
      address: string,
      isCommunity: boolean,
      mapsUri?: string,
    ) => {
      const marker = new google.maps.Marker({
        map,
        position,
        title,
        zIndex: isCommunity ? 1000 : undefined,
      });
      marker.addListener("click", () => {
        openInfo(title, address, mapsUri);
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
      addMarker(map, mapCenterLiteral, communityMapCenter.name, communityMapCenter.addressLine, true);

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

  const loadPlacesForCategory = useCallback(
    async (map: google.maps.Map, categoryId: AmenityCategoryId) => {
      clearMarkers();
      addMarker(map, mapCenterLiteral, communityMapCenter.name, communityMapCenter.addressLine, true);

      try {
        const places = await searchCategory(mapCenterLiteral, categoryId);
        const summarized: LivePlaceSummary[] = [];

        for (const place of places) {
          const loc = place.location;
          if (!loc) continue;
          const name = place.displayName ?? "Place";
          const address = place.formattedAddress ?? name;
          const mapsUri = place.googleMapsURI ?? undefined;
          summarized.push({ name, address, mapsUri });
          const json = loc.toJSON();
          addMarker(map, { lat: json.lat, lng: json.lng }, name, address, false, mapsUri);
        }

        setLivePlaces(summarized);
        setPlacesFromApi(summarized.length > 0);
        if (places.length === 0) {
          renderCuratedMarkers(map, categoryId);
        }
      } catch {
        renderCuratedMarkers(map, categoryId);
        setLivePlaces([]);
        setPlacesFromApi(false);
      }
    },
    [addMarker, clearMarkers, renderCuratedMarkers],
  );

  const initMap = useCallback(async () => {
    if (!mapContainerRef.current || mapRef.current || status === "fallback") return;
    if (!apiKey || mapsAuthFailed) {
      enterFallback();
      return;
    }

    try {
      const { Map } = (await google.maps.importLibrary("maps")) as google.maps.MapsLibrary;
      const mapOptions: google.maps.MapOptions = {
        center: mapCenterLiteral,
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
      await loadPlacesForCategory(map, activeCategory);
    } catch {
      enterFallback();
    }
  }, [activeCategory, apiKey, enterFallback, loadPlacesForCategory, mapId, status]);

  useEffect(() => {
    if (!shouldLoad) return;
    if (!apiKey || mapsAuthFailed) {
      setStatus("fallback");
      return;
    }
    if (status !== "idle") return;

    if (mapsAuthFailed) {
      enterFallback();
      return;
    }

    setStatus("loading");
    loadGoogleMaps(apiKey)
      .then(() => {
        if (mapsAuthFailed) {
          enterFallback();
          return;
        }
        void initMap();
      })
      .catch(() => {
        enterFallback();
      });
  }, [apiKey, enterFallback, initMap, shouldLoad, status]);

  useEffect(() => {
    const map = mapRef.current;
    if (!map || status !== "ready") return;
    void loadPlacesForCategory(map, activeCategory);
  }, [activeCategory, loadPlacesForCategory, status]);

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
          <div
            aria-label={`Map of amenities near ${communityMapCenter.name}`}
            className="h-full min-h-[inherit] w-full"
            ref={mapContainerRef}
            role="region"
          />
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
        {placesFromApi && livePlaces.length > 0 ? (
          <p className="mt-4 text-xs text-palms-cream/55">
            Map pins also include live Google Places results for {activeCategory}.
          </p>
        ) : null}
      </div>
    </div>
  );
}
