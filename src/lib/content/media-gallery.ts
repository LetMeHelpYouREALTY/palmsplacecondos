import { getCloudflareImageUrl } from "@/lib/cloudflare-images";
import { featuredListing } from "@/lib/content/featured-listing";
import { palmsPlaceTower } from "@/lib/content/palms-place-building";
import { siteContact } from "@/lib/site-contact";

/**
 * SEO / GEO / AEO media catalog — titles, descriptions, and alt text for galleries.
 * Prefer local `src` under /public; optional `cloudflareImageId` overrides when CF Images is configured.
 */

export type GalleryPhoto = {
  id: string;
  /** Path under /public or absolute CDN URL. */
  src: string;
  /** Optional Cloudflare Images hosted id — wins over `src` when account hash is set. */
  cloudflareImageId?: string;
  title: string;
  description: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  category: "unit" | "building" | "amenity";
  /** "contain" keeps the whole image visible (floor plans); default crops to fill. */
  fit?: "cover" | "contain";
};

export type PhotoGallery = {
  slug: string;
  path: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lede: string;
  photos: GalleryPhoto[];
};

function resolvePhotoSrc(photo: GalleryPhoto): string {
  if (photo.cloudflareImageId) {
    const cf = getCloudflareImageUrl(photo.cloudflareImageId);
    if (cf) return cf;
  }
  return photo.src;
}

/** Resolve delivery URL (Cloudflare Images when configured, else local/CDN src). */
export function getGalleryPhotoSrc(photo: GalleryPhoto): string {
  return resolvePhotoSrc(photo);
}

const unit8322Photos: GalleryPhoto[] = [
  {
    id: "unit-8322-living-twilight-strip-view",
    src: "/images/listings/unit-8322/palms-place-8322-living-room-twilight-strip-view.jpg",
    title: "Palms Place #8322 living room at twilight with Strip view",
    description: `Corner living room in Palms Place unit #8322 at dusk: floor-to-ceiling glass, see-through fireplace, sectional sofa, and city lights beyond the balcony. MLS #${featuredListing.mlsNumber}.`,
    alt: "Palms Place unit 8322 living room at twilight with see-through fireplace, sectional sofa, and floor-to-ceiling windows showing city lights",
    caption: "Living room at dusk. Two walls of glass, a fireplace, and the balcony door just off the seating area.",
    width: 1600,
    height: 1067,
    category: "unit",
  },
  {
    id: "unit-8322-balcony-twilight-strip-view",
    src: "/images/listings/unit-8322/palms-place-8322-balcony-twilight-strip-view.jpg",
    title: "Palms Place #8322 balcony at twilight facing the Strip",
    description: `Covered balcony at Palms Place unit #8322 with a glass railing and a twilight view toward the Strip skyline and Palms Casino Resort. MLS #${featuredListing.mlsNumber}.`,
    alt: "Palms Place unit 8322 covered balcony with glass railing and twilight view of the Las Vegas Strip skyline and Palms Casino Resort tower",
    caption: "The larger of two balconies, looking toward the Strip at dusk.",
    width: 1600,
    height: 1067,
    category: "unit",
  },
  {
    id: "unit-8322-living-fireplace-strip-view",
    src: "/images/listings/unit-8322/palms-place-8322-living-room-fireplace-strip-view.jpg",
    title: "Palms Place #8322 living room fireplace and Strip view",
    description: `Living room in Palms Place unit #8322 with a fireplace, wall-mounted TV, and Strip towers framed by corner windows. MLS #${featuredListing.mlsNumber}.`,
    alt: "Palms Place unit 8322 living room with sectional sofa, glass coffee table, fireplace, and Las Vegas Strip towers through corner windows",
    caption: "Sofa, fireplace, and Strip towers through the corner windows.",
    width: 1600,
    height: 1067,
    category: "unit",
  },
  {
    id: "unit-8322-living-desk-twilight",
    src: "/images/listings/unit-8322/palms-place-8322-living-room-desk-fireplace-twilight.jpg",
    title: "Palms Place #8322 work desk and fireplace",
    description: `Glass work desk in the Palms Place unit #8322 living room, beside the glass-framed fireplace, with city views at dusk. MLS #${featuredListing.mlsNumber}.`,
    alt: "Glass desk and chair in Palms Place unit 8322 living room beside a glass-framed fireplace with city skyline views at twilight",
    caption: "A desk nook in the living room, next to the fireplace.",
    width: 1600,
    height: 1067,
    category: "unit",
  },
  {
    id: "unit-8322-living-sectional",
    src: "/images/listings/unit-8322/palms-place-8322-living-room-sectional-fireplace.jpg",
    title: "Palms Place #8322 living room toward the kitchen",
    description: `Daytime view of the Palms Place unit #8322 living room: sectional sofa, wood-panel accent wall, fireplace, and the kitchen beyond. MLS #${featuredListing.mlsNumber}.`,
    alt: "Palms Place unit 8322 living room in daylight with gray sectional sofa, wood-panel wall, fireplace, and open kitchen in the background",
    caption: "Open layout from the living room to the kitchen and dining bar.",
    width: 1600,
    height: 1067,
    category: "unit",
  },
  {
    id: "unit-8322-kitchen-island",
    src: "/images/listings/unit-8322/palms-place-8322-kitchen-island-living-room.jpg",
    title: "Palms Place #8322 kitchen island and open living area",
    description: `Stainless kitchen island in Palms Place unit #8322 with cooktop, sink, and bar seating, open to the living room and windows. MLS #${featuredListing.mlsNumber}.`,
    alt: "Palms Place unit 8322 stainless steel kitchen island with cooktop, sink, and bar stools, open to the living room and city view",
    caption: "Kitchen island with cooktop and sink, open to the living room.",
    width: 1600,
    height: 1067,
    category: "unit",
  },
  {
    id: "unit-8322-kitchen-refrigerator",
    src: "/images/listings/unit-8322/palms-place-8322-kitchen-built-in-refrigerator.jpg",
    title: "Palms Place #8322 kitchen built-in refrigerator",
    description: `Built-in stainless refrigerator, microwave, and under-counter fridge in the Palms Place unit #8322 kitchen. MLS #${featuredListing.mlsNumber}.`,
    alt: "Palms Place unit 8322 kitchen with built-in stainless refrigerator, microwave, under-counter fridge, and induction cooktop",
    caption: "Built-in stainless refrigerator, microwave, and a second under-counter fridge.",
    width: 1600,
    height: 1067,
    category: "unit",
  },
  {
    id: "unit-8322-dining-bar",
    src: "/images/listings/unit-8322/palms-place-8322-dining-bar-kitchen-entry.jpg",
    title: "Palms Place #8322 dining bar and entry",
    description: `Dining bar with four seats beside the kitchen in Palms Place unit #8322, with crystal pendant lights and the front entry beyond. MLS #${featuredListing.mlsNumber}.`,
    alt: "Palms Place unit 8322 dining bar with four gray chairs, crystal pendant lights, stainless kitchen, and front entry door",
    caption: "Dining bar for four next to the kitchen, steps from the front door.",
    width: 1600,
    height: 1067,
    category: "unit",
  },
  {
    id: "unit-8322-bedroom-twilight",
    src: "/images/listings/unit-8322/palms-place-8322-bedroom-twilight-strip-view.jpg",
    title: "Palms Place #8322 bedroom at twilight with Strip view",
    description: `Bedroom in Palms Place unit #8322 at dusk with a king bed, sliding doors to the long balcony, and a freestanding tub by the windows. MLS #${featuredListing.mlsNumber}.`,
    alt: "Palms Place unit 8322 bedroom at twilight with king bed, sliding glass doors to the balcony, Strip skyline, and freestanding soaking tub",
    caption: "The bedroom opens to the long balcony. The soaking tub sits by the windows.",
    width: 1600,
    height: 1067,
    category: "unit",
  },
  {
    id: "unit-8322-bedroom-tub",
    src: "/images/listings/unit-8322/palms-place-8322-bedroom-soaking-tub.jpg",
    title: "Palms Place #8322 freestanding soaking tub",
    description: `Freestanding soaking tub on marble tile inside the Palms Place unit #8322 bedroom, next to the balcony doors. MLS #${featuredListing.mlsNumber}.`,
    alt: "White freestanding soaking tub on marble tile in Palms Place unit 8322 bedroom next to sliding balcony doors",
    caption: "Freestanding soaking tub on marble floors, next to the balcony doors.",
    width: 1600,
    height: 1065,
    category: "unit",
  },
  {
    id: "unit-8322-bedroom-sitting-area",
    src: "/images/listings/unit-8322/palms-place-8322-bedroom-sitting-area-strip-view.jpg",
    title: "Palms Place #8322 bedroom sitting area with Strip view",
    description: `Corner sitting area in the Palms Place unit #8322 bedroom with two lounge chairs and a daytime view of the Strip skyline. MLS #${featuredListing.mlsNumber}.`,
    alt: "Palms Place unit 8322 bedroom sitting area with leather lounge chair, white armchair, and daytime Las Vegas Strip skyline view",
    caption: "A reading corner in the bedroom with a daytime Strip view.",
    width: 1600,
    height: 1067,
    category: "unit",
  },
  {
    id: "unit-8322-powder-room",
    src: "/images/listings/unit-8322/palms-place-8322-powder-room-marble-vanity.jpg",
    title: "Palms Place #8322 guest powder room",
    description: `Guest half bath in Palms Place unit #8322 with a marble vanity, vessel sink, and pendant lights. MLS #${featuredListing.mlsNumber}.`,
    alt: "Palms Place unit 8322 guest powder room with marble vanity, round vessel sink, wall mirror, and globe pendant lights",
    caption: "Guest half bath by the entry, with a marble vanity.",
    width: 1600,
    height: 1067,
    category: "unit",
  },
  {
    id: "unit-8322-balcony-daytime",
    src: "/images/listings/unit-8322/palms-place-8322-balcony-daytime-strip-view.jpg",
    title: "Palms Place #8322 balcony in daylight",
    description: `Daytime view from the Palms Place unit #8322 balcony toward the Strip skyline and mountains, with a glass railing and palm trees below. MLS #${featuredListing.mlsNumber}.`,
    alt: "Palms Place unit 8322 covered balcony in daylight with glass railing, palm trees, and Las Vegas Strip skyline with mountains behind",
    caption: "The same balcony by day, with the Strip and mountains in view.",
    width: 1600,
    height: 1067,
    category: "unit",
  },
  {
    id: "palms-place-tower-entrance",
    src: "/images/listings/unit-8322/palms-place-tower-entrance-4381-w-flamingo.jpg",
    title: "Palms Place tower entrance at 4381 W Flamingo Road",
    description: `Front drive and entrance of the Palms Place tower at 4381 W Flamingo Road, with the parking garage on the left. MLS #${featuredListing.mlsNumber}.`,
    alt: "Palms Place high-rise tower and front entrance sign at 4381 W Flamingo Road in Las Vegas with palm trees and blue sky",
    caption: "Palms Place front entrance and drive at 4381 W Flamingo Road.",
    width: 1600,
    height: 1066,
    category: "building",
  },
  {
    id: "palms-place-aerial-strip-distance",
    src: "/images/listings/unit-8322/palms-place-tower-aerial-strip-distance.jpg",
    title: "Palms Place tower aerial view with the Las Vegas Strip",
    description: `Aerial photo of the Palms Place tower next to Palms Casino Resort, with the Las Vegas Strip in the distance about 1.5 miles away (photographer's label). MLS #${featuredListing.mlsNumber}.`,
    alt: "Aerial view of Palms Place tower beside Palms Casino Resort with a label marking the Las Vegas Strip about 1.5 miles away",
    caption: "Aerial view. The photographer's label marks the Strip at about 1.5 miles.",
    width: 1600,
    height: 900,
    category: "building",
  },
  {
    id: "palms-place-aerial-palms-resort",
    src: "/images/listings/unit-8322/palms-place-tower-aerial-palms-casino-resort.jpg",
    title: "Palms Place tower and Palms Casino Resort from above",
    description: `Aerial photo of the Palms Place tower beside Palms Casino Resort, looking east toward the Strip skyline and mountains. MLS #${featuredListing.mlsNumber}.`,
    alt: "Aerial view of Palms Place tower next to Palms Casino Resort towers and garage, with the Las Vegas Strip skyline and mountains beyond",
    caption: "Palms Place sits next to Palms Casino Resort, west of the Strip.",
    width: 1600,
    height: 900,
    category: "building",
  },
  {
    id: "unit-8322-floor-plan",
    src: "/images/listings/unit-8322/palms-place-8322-floor-plan.jpg",
    title: "Palms Place #8322 floor plan",
    description: `Floor plan drawing of Palms Place unit #8322: living room, dining area, kitchen, one bedroom, a full bath, a half bath, and two balconies. MLS #${featuredListing.mlsNumber}.`,
    alt: "Floor plan of Palms Place unit 8322 showing living room, dining area, kitchen, one bedroom, full bath, half bath, foyer, and two balconies",
    caption: "Room sizes are approximate. Confirm square footage in the listing disclosures.",
    width: 1600,
    height: 1200,
    category: "unit",
    fit: "contain",
  },
];

export const unit8322Gallery: PhotoGallery = {
  slug: "unit-8322",
  path: "/photos/unit-8322",
  title: `Palms Place #8322 photos — ${featuredListing.price} condo for sale`,
  metaTitle: "Palms Place #8322 photos | Strip-view condo for sale Las Vegas",
  metaDescription: `Photos of Palms Place unit #8322 at ${palmsPlaceTower.streetAddress}, Las Vegas — living room, kitchen, bedroom, balconies, building, and floor plan. ${featuredListing.beds}, ${featuredListing.baths}, ${featuredListing.squareFeet}. Listed by ${siteContact.agentName}.`,
  h1: "Palms Place #8322 photos — Las Vegas Strip-view condo",
  lede: `${featuredListing.status} · ${featuredListing.price} · ${featuredListing.beds} · ${featuredListing.baths} · ${featuredListing.squareFeet}. Professional listing photos of the furnished corner residence at ${palmsPlaceTower.streetAddress}. Schedule a tour with ${siteContact.agentName}.`,
  photos: unit8322Photos,
};

export const photoGalleries: PhotoGallery[] = [unit8322Gallery];

export function getPhotoGalleryBySlug(slug: string): PhotoGallery | undefined {
  return photoGalleries.find((g) => g.slug === slug);
}

/** Primary featured-listing hero image for homepage banner / OG. */
export function getFeaturedListingHeroPhoto(): GalleryPhoto {
  return unit8322Photos[0];
}

export function getAllGalleryPhotos(): GalleryPhoto[] {
  return photoGalleries.flatMap((g) => g.photos);
}
