import { amenityCategories, type AmenityCategoryId } from "@/lib/content/nearby-amenities";

const SEARCH_RADIUS_METERS = 5000;

/** One Places searchNearby per category per page session. */
const cache = new Map<string, Promise<google.maps.places.Place[]>>();

export function searchCategory(
  center: google.maps.LatLngLiteral,
  categoryId: AmenityCategoryId,
): Promise<google.maps.places.Place[]> {
  const category = amenityCategories.find((c) => c.id === categoryId);
  if (!category) {
    return Promise.resolve([]);
  }

  let p = cache.get(categoryId);
  if (!p) {
    p = (async () => {
      const { Place } = (await google.maps.importLibrary("places")) as google.maps.PlacesLibrary;
      const { places } = await Place.searchNearby({
        fields: ["displayName", "location", "formattedAddress", "googleMapsURI"],
        locationRestriction: { center, radius: SEARCH_RADIUS_METERS },
        includedPrimaryTypes: category.placeTypes,
        maxResultCount: 10,
        rankPreference: "POPULARITY" as google.maps.places.SearchNearbyRankPreference,
      });
      return places;
    })();
    p.catch(() => cache.delete(categoryId));
    cache.set(categoryId, p);
  }
  return p;
}
