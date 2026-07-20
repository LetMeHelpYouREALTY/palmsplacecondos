import { palmsPlaceTower } from "@/lib/content/palms-place-building";

/**
 * Homepage “just listed” spotlight — update when the featured unit changes.
 * Override with NEXT_PUBLIC_FEATURED_LISTING_URL in Vercel when the listing URL changes.
 */
export const featuredListing = {
  price: "$387,777",
  status: "For Sale (Active)",
  addressLine: `${palmsPlaceTower.streetAddress} #8322 • Palms Place • ${palmsPlaceTower.addressLocality}, ${palmsPlaceTower.addressRegion} ${palmsPlaceTower.postalCode}`,
  badges: ["STR Permitted", "HOA Covers All Utilities", "8th Floor Corner"] as const,
  beds: "1 bed",
  baths: "1.5 baths",
  squareFeet: "1,220 SF",
  highlights: "1 Bed • 1.5 Baths • Strip Views • Turnkey Investor Play",
  ctaLabel: "View Full Details",
  detailsUrl:
    "https://drjanduffy.realscout.com/homesearch/listings/p-4381-w-flamingo-road-8322-las-vegas-89103-glvartrestle-932",
} as const;

export function getFeaturedListingDetailsUrl(): string {
  const url = process.env.NEXT_PUBLIC_FEATURED_LISTING_URL?.trim();
  if (url) return url;
  return featuredListing.detailsUrl;
}

export function isFeaturedListingExternalUrl(): boolean {
  const url = getFeaturedListingDetailsUrl();
  return url.startsWith("http://") || url.startsWith("https://");
}
