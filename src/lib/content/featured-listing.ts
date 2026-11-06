import { palmsPlaceTower } from "@/lib/content/palms-place-building";

/**
 * Homepage featured-unit spotlight — update when the listing changes.
 * Facts below mirror the active RealScout / GLVAR listing (verify before offers).
 * Override with NEXT_PUBLIC_FEATURED_LISTING_URL in Vercel when the listing URL changes.
 *
 * Relisted 2026-08-24 as MLS #2810666 at $374,500 after the prior MLS #2782527
 * campaign ($387,777 last ask; originally $437,777). Price reduced to $339,900 on
 * 2026-11-03 (GLVAR via RealScout listing history, checked 2026-11-06). Confirm live price before offers.
 */
export const featuredListing = {
  price: "$339,900",
  /** Numeric offer price for RealEstateListing JSON-LD — keep in sync with `price`. */
  priceUsd: 339900,
  /** Last ask on the prior MLS campaign — display as a price-drop reference only. */
  previousPrice: "$374,500",
  previousPriceUsd: 374500,
  status: "For Sale (Active)",
  mlsNumber: "2810666",
  unitNumber: "8322",
  /** GLVAR list date for this spotlight (schema `datePosted`). */
  datePosted: "2026-08-24",
  addressLine: `${palmsPlaceTower.streetAddress} #8322 • Palms Place • ${palmsPlaceTower.addressLocality}, ${palmsPlaceTower.addressRegion} ${palmsPlaceTower.postalCode}`,
  beds: "1 bed",
  baths: "1.5 baths",
  squareFeet: "1,220 SF",
  bedsCount: 1,
  bathsCount: 1.5,
  livingAreaSqFt: 1220,
  lot: "—",
  propertyType: "High Rise",
  entryLevel: "8th floor",
  hoaMonthly: "$1,638 / mo HOA",
  annualTax: "$4,612 taxes / yr",
  badges: [
    "Price Drop",
    "STR Permitted",
    "Fully Furnished",
    "HOA Covers Utilities",
    "8th Floor Corner",
    "Strip Views",
  ] as const,
  overview:
    "Now $339,900 after a price drop from $374,500 on November 3, 2026. Eighth-floor corner unit at Palms Place with two east-facing walls of floor-to-ceiling glass and Strip views. Short-term rentals permitted. 1,220 SF, fully furnished—new carpet, new dryer, Sub-Zero refrigerator, custom kitchenette, marble bath with jetted tub. HOA includes power, water, gas, cable, valet parking, and 24/7 concierge. Sky Tube connects to Palms Casino Resort.",
  ctaLabel: "View Full Details",
  tourLabel: "View Virtual / 3D Tour",
  // PropertyPanorama Instaview for MLS #2810666 (unit #8322).
  virtualTourUrl: "https://www.propertypanorama.com/instaview/las/2810666#tour",
  detailsUrl:
    "https://drjanduffy.realscout.com/homesearch/listings/p-4381-w-flamingo-road-8322-las-vegas-89103-glvartrestle-558",
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
