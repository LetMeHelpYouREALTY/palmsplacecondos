/**
 * Single source of truth for agent/brokerage facts shown on pages and (later) JSON-LD.
 * Add phone, full street address, and hours from Google Business Profile when verified for this domain.
 */
export const siteContact = {
  agentName: "Dr. Jan Duffy",
  license: "S.0197614.LLC",
  brokerage: "Berkshire Hathaway HomeServices Nevada Properties",
  primaryServiceArea: "Las Vegas — Palms Place and surrounding communities",
} as const;
