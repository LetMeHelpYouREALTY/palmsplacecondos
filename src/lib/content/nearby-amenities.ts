/**
 * Hyperlocal amenity map config for Palms Place (Strip-adjacent high-rise).
 * Center coordinates reuse palmsPlaceTower (4381 W Flamingo Rd — MLS map pin).
 * Curated places include sourceUrl to a primary business or government page.
 */

import {
  formatPalmsPlaceTowerAddressLine,
  palmsPlaceTower,
} from "@/lib/content/palms-place-building";

export const nearbyAmenitiesPagePath = "/amenities";

export type AmenityCategoryId =
  | "restaurants"
  | "attractions"
  | "cafes"
  | "parking"
  | "grocery"
  | "fitness"
  | "shopping"
  | "parks"
  | "golf"
  | "healthcare"
  | "pharmacies"
  | "schools";

export type AmenityCategory = {
  id: AmenityCategoryId;
  label: string;
  /** Google Places API (New) includedPrimaryTypes for searchNearby */
  placeTypes: string[];
  /** Screen-reader label for the filter control */
  ariaLabel: string;
};

/** Condo / high-rise order — dining & Strip corridor first; schools last. */
export const amenityCategories: AmenityCategory[] = [
  {
    id: "restaurants",
    label: "Restaurants",
    placeTypes: ["restaurant"],
    ariaLabel: "Show restaurants near Palms Place",
  },
  {
    id: "attractions",
    label: "Attractions",
    placeTypes: ["tourist_attraction", "casino"],
    ariaLabel: "Show attractions and entertainment near Palms Place",
  },
  {
    id: "cafes",
    label: "Cafes",
    placeTypes: ["cafe", "bakery"],
    ariaLabel: "Show cafes near Palms Place",
  },
  {
    id: "parking",
    label: "Parking",
    placeTypes: ["parking"],
    ariaLabel: "Show parking near Palms Place",
  },
  {
    id: "grocery",
    label: "Grocery",
    placeTypes: ["grocery_store", "supermarket"],
    ariaLabel: "Show grocery stores near Palms Place",
  },
  {
    id: "fitness",
    label: "Fitness",
    placeTypes: ["gym", "fitness_center"],
    ariaLabel: "Show fitness centers near Palms Place",
  },
  {
    id: "shopping",
    label: "Shopping",
    placeTypes: ["shopping_mall", "department_store"],
    ariaLabel: "Show shopping near Palms Place",
  },
  {
    id: "parks",
    label: "Parks",
    placeTypes: ["park"],
    ariaLabel: "Show parks near Palms Place",
  },
  {
    id: "golf",
    label: "Golf",
    placeTypes: ["golf_course"],
    ariaLabel: "Show golf courses near Palms Place",
  },
  {
    id: "healthcare",
    label: "Healthcare",
    placeTypes: ["hospital", "doctor"],
    ariaLabel: "Show hospitals and clinics near Palms Place",
  },
  {
    id: "pharmacies",
    label: "Pharmacies",
    placeTypes: ["pharmacy", "drugstore"],
    ariaLabel: "Show pharmacies near Palms Place",
  },
  {
    id: "schools",
    label: "Schools",
    placeTypes: ["school", "university"],
    ariaLabel: "Show schools near Palms Place",
  },
];

export type CuratedNearbyPlace = {
  id: string;
  name: string;
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  /** Primary source used to verify name and mailing address */
  sourceUrl: string;
  /** schema.org type for JSON-LD ItemList entries */
  schemaType:
    | "Restaurant"
    | "CafeOrCoffeeShop"
    | "GroceryStore"
    | "Park"
    | "GolfCourse"
    | "Hospital"
    | "Pharmacy"
    | "ShoppingCenter"
    | "ParkingFacility"
    | "ExerciseGym"
    | "School"
    | "TouristAttraction"
    | "Casino"
    | "ApartmentComplex";
  categories: AmenityCategoryId[];
  /** Optional map pin when Places search is unavailable */
  latitude?: number;
  longitude?: number;
};

export const communityMapCenter = {
  name: palmsPlaceTower.name,
  latitude: palmsPlaceTower.latitude,
  longitude: palmsPlaceTower.longitude,
  addressLine: formatPalmsPlaceTowerAddressLine(),
};

/**
 * Nearby destinations verified against each sourceUrl (no invented ratings or distances).
 */
export const curatedNearbyPlaces: CuratedNearbyPlace[] = [
  {
    id: "palms-place-tower",
    name: "Palms Place",
    streetAddress: palmsPlaceTower.streetAddress,
    addressLocality: palmsPlaceTower.addressLocality,
    addressRegion: palmsPlaceTower.addressRegion,
    postalCode: palmsPlaceTower.postalCode,
    sourceUrl: "https://www.palmsplacecondos.com/palms-place",
    schemaType: "ApartmentComplex",
    categories: ["parking", "fitness"],
    latitude: palmsPlaceTower.latitude,
    longitude: palmsPlaceTower.longitude,
  },
  {
    id: "palms-casino",
    name: "Palms Casino Resort",
    streetAddress: "4321 W Flamingo Rd",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89103",
    sourceUrl: "https://www.palms.com/",
    schemaType: "Casino",
    categories: ["restaurants", "attractions", "parking"],
    latitude: 36.1149,
    longitude: -115.1964,
  },
  {
    id: "gold-coast",
    name: "Gold Coast Hotel & Casino",
    streetAddress: "4000 W Flamingo Rd",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89103",
    sourceUrl: "https://www.goldcoastcasino.com/",
    schemaType: "Casino",
    categories: ["restaurants", "attractions", "parking"],
    latitude: 36.1163,
    longitude: -115.1941,
  },
  {
    id: "whole-foods-lvb",
    name: "Whole Foods Market",
    streetAddress: "6689 Las Vegas Blvd S",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89119",
    sourceUrl: "https://www.wholefoodsmarket.com/stores/lvb",
    schemaType: "GroceryStore",
    categories: ["grocery"],
    latitude: 36.0709,
    longitude: -115.1722,
  },
  {
    id: "smiths-charleston",
    name: "Smith's Food and Drug",
    streetAddress: "9851 W Charleston Blvd",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89117",
    sourceUrl: "https://www.smithsfoodanddrug.com/stores/grocery/nv/las-vegas/9851-w-charleston-blvd/00647",
    schemaType: "GroceryStore",
    categories: ["grocery", "pharmacies"],
    latitude: 36.1592,
    longitude: -115.2944,
  },
  {
    id: "spring-valley-hospital",
    name: "Spring Valley Hospital Medical Center",
    streetAddress: "5400 S Rainbow Blvd",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89118",
    sourceUrl: "https://www.springvalleyhospital.com/",
    schemaType: "Hospital",
    categories: ["healthcare"],
    latitude: 36.0905,
    longitude: -115.2423,
  },
  {
    id: "cvs-rainbow",
    name: "CVS Pharmacy",
    streetAddress: "3755 S Rainbow Blvd",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89103",
    sourceUrl: "https://www.cvs.com/store-locator/cvs-pharmacy-address/Las+Vegas-NV-89103/3755-S-Rainbow-Blvd.html",
    schemaType: "Pharmacy",
    categories: ["pharmacies"],
    latitude: 36.1215,
    longitude: -115.2434,
  },
  {
    id: "fashion-show",
    name: "Fashion Show Las Vegas",
    streetAddress: "3200 S Las Vegas Blvd",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89109",
    sourceUrl: "https://www.fashionshowlv.com/",
    schemaType: "ShoppingCenter",
    categories: ["shopping", "attractions"],
    latitude: 36.1247,
    longitude: -115.1722,
  },
  {
    id: "forum-shops",
    name: "The Forum Shops at Caesars",
    streetAddress: "3500 S Las Vegas Blvd",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89109",
    sourceUrl: "https://www.caesars.com/caesars-palace/things-to-do/forum-shops",
    schemaType: "ShoppingCenter",
    categories: ["shopping", "attractions"],
    latitude: 36.1177,
    longitude: -115.1755,
  },
  {
    id: "bali-hai-golf",
    name: "Bali Hai Golf Club",
    streetAddress: "5160 S Las Vegas Blvd",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89119",
    sourceUrl: "https://www.balihaigolf.com/",
    schemaType: "GolfCourse",
    categories: ["golf"],
    latitude: 36.0958,
    longitude: -115.1725,
  },
  {
    id: "sunset-park",
    name: "Sunset Park",
    streetAddress: "2601 E Sunset Rd",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89120",
    sourceUrl: "https://www.clarkcountynv.gov/government/departments/parks___recreation/special_use_parks/sunset_park.php",
    schemaType: "Park",
    categories: ["parks"],
    latitude: 36.0717,
    longitude: -115.1182,
  },
  {
    id: "24-hour-flamingo",
    name: "24 Hour Fitness",
    streetAddress: "4275 S Rainbow Blvd",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89103",
    sourceUrl: "https://www.24hourfitness.com/gyms/las-vegas-nv/south-rainbow-sport",
    schemaType: "ExerciseGym",
    categories: ["fitness"],
    latitude: 36.1098,
    longitude: -115.2436,
  },
  {
    id: "unlv",
    name: "University of Nevada, Las Vegas",
    streetAddress: "4505 S Maryland Pkwy",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89154",
    sourceUrl: "https://www.unlv.edu/",
    schemaType: "School",
    categories: ["schools"],
    latitude: 36.1075,
    longitude: -115.1436,
  },
];

export function formatPlaceAddress(place: CuratedNearbyPlace): string {
  return `${place.streetAddress}, ${place.addressLocality}, ${place.addressRegion} ${place.postalCode}`;
}

export function curatedPlacesForCategory(categoryId: AmenityCategoryId): CuratedNearbyPlace[] {
  return curatedNearbyPlaces.filter((place) => place.categories.includes(categoryId));
}

export const nearbyAmenitiesPageMeta = {
  path: nearbyAmenitiesPagePath,
  title: "Nearby Amenities in Palms Place, Las Vegas | Map & Local Guide",
  description:
    "Interactive map of restaurants, grocery, healthcare, shopping, and Strip-adjacent destinations near Palms Place at 4381 W Flamingo Road—with hyperlocal buyer FAQs.",
  h1: "Nearby Amenities in Palms Place, Las Vegas",
};
