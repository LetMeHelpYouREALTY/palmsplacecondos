/**
 * Google Maps JavaScript API helpers (amenity map).
 * Keys are public env vars — restrict by HTTP referrer in Google Cloud Console.
 */

import { communityMapCenter } from "@/lib/content/nearby-amenities";

export function getGoogleMapsApiKey(): string | undefined {
  return process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY?.trim() || undefined;
}

export function getGoogleMapsMapId(): string | undefined {
  return process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID?.trim() || undefined;
}

export function buildGoogleMapsJavaScriptApiUrl(apiKey: string): string {
  const params = new URLSearchParams({
    key: apiKey,
    libraries: "places",
    v: "weekly",
    loading: "async",
  });
  return `https://maps.googleapis.com/maps/api/js?${params.toString()}`;
}

/** Keyless embed centered on the community (spec fallback). */
export function googleMapsKeylessEmbedUrl(latitude: number, longitude: number, zoom = 14): string {
  return `https://www.google.com/maps?q=${latitude},${longitude}&z=${zoom}&output=embed`;
}

export function communityKeylessMapEmbedUrl(): string {
  return googleMapsKeylessEmbedUrl(communityMapCenter.latitude, communityMapCenter.longitude);
}

export function googleMapsDirectionsUrlForQuery(query: string): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(query.trim())}`;
}
