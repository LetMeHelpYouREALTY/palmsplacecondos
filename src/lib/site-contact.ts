/**
 * Single source of truth for agent/brokerage facts shown on pages and JSON-LD.
 * Add phone, full street address, and hours from Google Business Profile when verified for this domain.
 * Optional NAP fields must match visible on-page copy and GBP before use in schema.
 */
export type SiteContact = {
  /** Listing lead / primary licensee on this site. */
  agentName: string;
  agentTitle: string;
  license: string;
  brokerage: string;
  primaryServiceArea: string;
  /** Buyer-side specialist (name + role for copy and schema). */
  buyerSpecialistName: string;
  buyerSpecialistTitle: string;
  phone?: string;
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
};

export const siteContact: SiteContact = {
  agentName: "Dr. Jan Duffy",
  agentTitle: "Realtor, Listing Specialist & Team Leader for Palms Place",
  license: "S.0197614.LLC",
  brokerage: "Berkshire Hathaway HomeServices Nevada Properties",
  /** Must match visible copy, meta descriptions, and GBP. */
  phone: "702-222-1964",
  primaryServiceArea: "Las Vegas — Palms Place and surrounding communities",
  buyerSpecialistName: "Chance Fuller",
  buyerSpecialistTitle: "Buyers Specialist",
  /** Office — must match Google Business Profile and JSON-LD. */
  streetAddress: "3651 Lindell Rd Suite D",
  addressLocality: "Las Vegas",
  addressRegion: "NV",
  postalCode: "89103",
  addressCountry: "US",
  officeHoursLine: "Monday through Friday, 9:00 AM to 5:00 PM",
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
