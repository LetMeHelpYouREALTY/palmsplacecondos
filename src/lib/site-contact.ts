/**
 * Single source of truth for agent/brokerage facts shown on pages and JSON-LD.
 * Add phone, full street address, and hours from Google Business Profile when verified for this domain.
 * Optional NAP fields must match visible on-page copy and GBP before use in schema.
 */

import { getPalmsPlaceBuildingForSchema } from "@/lib/content/palms-place-building";

/** Verified tower facts for schema.org `ApartmentComplex` — do not fabricate. */
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
   * Google Business Profile business name — must match GBP exactly for LocalBusiness JSON-LD
   * and primary on-page brand (header/footer).
   */
  gbpBusinessName: string;
  /**
   * Public-facing team name for marketing (who clients work with—not the GBP listing name alone).
   */
  teamBrandName: string;
  /** Primary licensee — listing lead and Palms Place buyers specialist. */
  agentName: string;
  agentTitle: string;
  license: string;
  brokerage: string;
  /** GBP service area — keep aligned with profile “Service area”. */
  primaryServiceArea: string;
  /**
   * Buyers-specialist display name/title/license — same person as `agentName` (Dr. Jan Duffy).
   * Kept as fields so buyer-facing pages can emphasize the buyers role without a second agent.
   */
  buyerSpecialistName: string;
  buyerSpecialistTitle: string;
  buyerSpecialistLicense: string;
  /** Office phone — single NAP line for this site; must match GBP. */
  phone?: string;
  /** General office / agent inquiries — must match visible copy and GBP. */
  emailGeneral?: string;
  /** Listing-focused inbox (Dr. Jan). */
  emailListings?: string;
  /** Buyer inquiries (Dr. Jan). */
  emailBuyers?: string;
  streetAddress?: string;
  addressLocality?: string;
  addressRegion?: string;
  postalCode?: string;
  addressCountry?: string;
  /**
   * Visible office hours — must match Google Business Profile (pending/live).
   * If you change this line, update `openingHoursSpecification` in `lib/schema.ts` to match (opens/closes, days).
   */
  officeHoursLine?: string;
  /** Optional override for JSON-LD `RealEstateAgent` / `LocalBusiness` description (must match GBP + on-site). */
  schemaAgentDescription?: string;
  /** Optional `priceRange` for LocalBusiness JSON-LD (e.g. "$$$$"). */
  schemaPriceRange?: string;
  /** Office latitude for JSON-LD `geo` — must match Google Maps / GBP pin for the office address. */
  officeLatitude?: number;
  /** Office longitude for JSON-LD `geo` — must match Google Maps / GBP pin. */
  officeLongitude?: number;
  /**
   * Palms Place tower address + coordinates for JSON-LD `ApartmentComplex`.
   * Sourced from palms-place-building.ts (public tower address + listing map pin).
   */
  palmsPlaceBuilding?: PalmsPlaceBuilding;
  /**
   * Google My Maps (or Maps) iframe embed URL for the contact page.
   * Example: https://www.google.com/maps/d/embed?mid=...
   */
  contactMapEmbedUrl?: string;
  /** Official Palms Place Facebook page — merged into JSON-LD `sameAs` when set. */
  facebookUrl?: string;
  /** Dr. Jan Duffy YouTube channel — footer/connect + JSON-LD `sameAs`. */
  youtubeUrl?: string;
  /**
   * Google Business Profile / Maps share URL — visible “View Google Reviews” link and JSON-LD `sameAs`.
   * Prefer the stable share link from GBP (share.google) or a Maps place URL.
   */
  googleBusinessProfileUrl?: string;
};

export const siteContact: SiteContact = {
  /** Must match Google Business Profile business name exactly. */
  gbpBusinessName: "Palms Place Condos",
  teamBrandName: "Dr. Jan Duffy Palms Place Team",
  agentName: "Dr. Jan Duffy",
  agentTitle: "Realtor, Listing Specialist, Team Leader & Palms Place Buyers Specialist",
  license: "S.0197614.LLC",
  brokerage: "Berkshire Hathaway HomeServices Nevada Properties",
  /** Must match visible copy, meta descriptions, and GBP — sole office line for this site. */
  phone: "(702) 837-4544",
  emailGeneral: "DrDuffy@PalmsPlaceCondos.com",
  emailListings: "DrDuffySells@PalmsPlaceCondos.com",
  /** Buyer inquiries go to Dr. Jan (same agent). */
  emailBuyers: "DrDuffy@PalmsPlaceCondos.com",
  /** GBP service area: Las Vegas Strip, NV, USA */
  primaryServiceArea: "Las Vegas Strip, NV",
  buyerSpecialistName: "Dr. Jan Duffy",
  buyerSpecialistTitle: "Palms Place Buyers Specialist",
  buyerSpecialistLicense: "S.0197614.LLC",
  /** Office — must match Google Business Profile (“3651 S Lindell Rd suite d”). */
  streetAddress: "3651 S Lindell Rd Suite D",
  addressLocality: "Las Vegas",
  addressRegion: "NV",
  postalCode: "89103",
  addressCountry: "US",
  /** Matches GBP pending hours: Mon–Fri 9:00 AM–5:00 PM; Sat–Sun closed. */
  officeHoursLine: "Monday–Friday, 9:00 AM–5:00 PM · Saturday–Sunday closed",
  // Office pin from Google Maps place result for this address (matches embed).
  officeLatitude: 36.1233904,
  officeLongitude: -115.2171723,
  // contactMapEmbedUrl intentionally unset: Google My Maps `/maps/d/embed?mid=…`
  // URLs 404 with “404. That’s an error” when the map is unpublished. Do not set
  // NEXT_PUBLIC_CONTACT_MAP_EMBED_URL to a My Maps mid. Contact uses the stable
  // Google place embed (or Maps Embed API when NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY
  // is set). See src/lib/maps-embed.ts.
  facebookUrl: "https://www.facebook.com/palmsplace",
  youtubeUrl: "https://www.youtube.com/@DrDuffy",
  /** GBP share link for Palms Place Condos (Maps / knowledge panel). */
  googleBusinessProfileUrl: "https://share.google/6cQL7oQ9T88LIQfbC",
  /** Tower entity for GEO — address + geo from palms-place-building.ts */
  palmsPlaceBuilding: getPalmsPlaceBuildingForSchema(),
  /** Must match Google Business Profile description. */
  schemaAgentDescription:
    "Palms Place Condos for Sale — Las Vegas Strip High-Rise Residences",
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
  return `${c.agentName}, ${c.agentTitle}`;
}
