/**
 * Single source of truth for agent/brokerage facts shown on pages and JSON-LD.
 * Add phone, full street address, and hours from Google Business Profile when verified for this domain.
 * Optional NAP fields must match visible on-page copy and GBP before use in schema.
 */

/** Verified building facts for schema.org `Apartment` — do not fabricate. */
export type PalmsPlaceBuilding = {
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  latitude: number;
  longitude: number;
};

export type SiteContact = {
  /**
   * Public-facing team name for marketing (who clients work with—not the building name alone).
   * Align with Google Business Profile / team branding when published.
   */
  teamBrandName: string;
  /** Listing lead / primary licensee on this site. */
  agentName: string;
  agentTitle: string;
  license: string;
  brokerage: string;
  primaryServiceArea: string;
  /** Buyer-side specialist (name + role for copy and schema). */
  buyerSpecialistName: string;
  buyerSpecialistTitle: string;
  /** Nevada real estate license for the buyers specialist — must match GBP / REC when published. */
  buyerSpecialistLicense: string;
  /** Office phone — single NAP line for this site; must match GBP. */
  phone?: string;
  /** General office / agent inquiries — must match visible copy and GBP. */
  emailGeneral?: string;
  /** Listing-focused inbox (Dr. Jan). */
  emailListings?: string;
  /** Buyer inquiries (Chance). */
  emailBuyers?: string;
  streetAddress?: string;
  addressLocality?: string;
  addressRegion?: string;
  postalCode?: string;
  addressCountry?: string;
  /**
   * Visible office hours — must match Google Business Profile.
   * If you change this line, update `openingHoursSpecification` in `lib/schema.ts` to match (opens/closes, days).
   */
  officeHoursLine?: string;
  /** Optional override for JSON-LD `RealEstateAgent` / `LocalBusiness` description (must match on-site claims). */
  schemaAgentDescription?: string;
  /** Optional `priceRange` for LocalBusiness JSON-LD (e.g. "$$$$"). */
  schemaPriceRange?: string;
  /** Office latitude for JSON-LD `geo` — must match Google Maps / GBP pin for the office address. */
  officeLatitude?: number;
  /** Office longitude for JSON-LD `geo` — must match Google Maps / GBP pin. */
  officeLongitude?: number;
  /**
   * Palms Place tower address + coordinates for JSON-LD `Apartment` when fully verified (HOA / public records).
   * Omit to emit a minimal `Place` only.
   */
  palmsPlaceBuilding?: PalmsPlaceBuilding;
  /**
   * Google My Maps (or Maps) iframe embed URL for the contact page.
   * Example: https://www.google.com/maps/d/embed?mid=...
   */
  contactMapEmbedUrl?: string;
  /** Official Palms Place Facebook page — merged into JSON-LD `sameAs` when set. */
  facebookUrl?: string;
};

export const siteContact: SiteContact = {
  teamBrandName: "Dr. Jan Duffy Palms Place Team",
  agentName: "Dr. Jan Duffy",
  agentTitle: "Realtor, Listing Specialist & Team Leader for Palms Place",
  license: "S.0197614.LLC",
  brokerage: "Berkshire Hathaway HomeServices Nevada Properties",
  /** Must match visible copy, meta descriptions, and GBP — sole office line for this site. */
  phone: "(702) 837-4544",
  emailGeneral: "DrDuffy@PalmsPlaceCondos.com",
  emailListings: "DrDuffySells@PalmsPlaceCondos.com",
  emailBuyers: "ChanceSells@PalmsPlaceCondos.com",
  primaryServiceArea: "Las Vegas — Palms Place and surrounding communities",
  buyerSpecialistName: "Chance Fuller, Realtor",
  buyerSpecialistTitle: "Palms Place Buyers Specialist",
  buyerSpecialistLicense: "S.204454",
  /** Office — must match Google Business Profile and JSON-LD. */
  streetAddress: "3651 Lindell Rd Suite D",
  addressLocality: "Las Vegas",
  addressRegion: "NV",
  postalCode: "89103",
  addressCountry: "US",
  officeHoursLine: "Monday through Friday, 9:00 AM to 5:00 PM",
  contactMapEmbedUrl:
    "https://www.google.com/maps/d/embed?mid=1fl048P0dAxnuNvwqHLrJU4i4zZmkwpE&hl=en&ehbc=2E312F",
  facebookUrl: "https://www.facebook.com/palmsplace",
};

/** Single-line office address for visible copy (footer, contact). */
export function formatOfficeAddressLine(): string {
  const c = siteContact;
  if (!c.streetAddress || !c.addressLocality || !c.addressRegion || !c.postalCode) {
    return "";
  }
  return `${c.streetAddress}, ${c.addressLocality}, ${c.addressRegion} ${c.postalCode}`;
}

/** Concise team line for meta descriptions (SEO / entity clarity). */
export function formatTeamPhrase(): string {
  const c = siteContact;
  return `${c.agentName}, ${c.agentTitle}; ${c.buyerSpecialistName}, ${c.buyerSpecialistTitle}`;
}
