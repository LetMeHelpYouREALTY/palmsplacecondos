/**
 * RealScout URLs for this site (shared search, widgets). Override via env on Vercel when needed.
 */
const DEFAULT_SHARED_SEARCH =
  "https://drjanduffy.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay0yMDQzMg==";

export function getRealScoutSharedSearchUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_REALSCOUT_SHARED_SEARCH_URL?.trim();
  return fromEnv || DEFAULT_SHARED_SEARCH;
}
