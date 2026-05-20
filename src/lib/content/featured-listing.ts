import { palmsPlaceTower } from "@/lib/content/palms-place-building";

/**
 * Homepage “just listed” spotlight — update when the featured unit changes.
 * Set NEXT_PUBLIC_FEATURED_LISTING_URL to the live listing detail page (RealScout / MLS).
 */
export const featuredListing = {
  price: "$437,777",
  addressLine: `${palmsPlaceTower.streetAddress} #822 • Palms Place • ${palmsPlaceTower.addressLocality}, ${palmsPlaceTower.addressRegion} ${palmsPlaceTower.postalCode}`,
  badges: ["STR Permitted", "HOA Covers All Utilities", "8th Floor Corner"] as const,
  squareFeet: "1,220 SF",
  highlights: "Strip Views • High-Rise Condo • Turnkey Investor Play",
  ctaLabel: "View Full Details",
} as const;

export function getFeaturedListingDetailsUrl(): string {
  const url = process.env.NEXT_PUBLIC_FEATURED_LISTING_URL?.trim();
  if (url) return url;
  return "/search";
}

export function isFeaturedListingExternalUrl(): boolean {
  const url = getFeaturedListingDetailsUrl();
  return url.startsWith("http://") || url.startsWith("https://");
}
