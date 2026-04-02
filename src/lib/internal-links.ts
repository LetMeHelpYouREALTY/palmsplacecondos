/**
 * Contextual internal links for SEO topic clusters — descriptive anchor text, not “click here.”
 */
export type RelatedLink = {
  href: string;
  label: string;
  description?: string;
};

/** Paths that should not link to themselves. */
export function relatedLinksForPath(pathname: string): RelatedLink[] {
  const normalized = pathname === "" ? "/" : pathname.startsWith("/") ? pathname : `/${pathname}`;
  const pool: RelatedLink[] = [
    { href: "/homes", label: "Homes for sale in Las Vegas", description: "Single-family and attached" },
    { href: "/condos", label: "Condos & high-rise living", description: "Including Palms Place" },
    { href: "/high-rises", label: "Las Vegas high-rises", description: "Strip towers and amenities" },
    { href: "/search", label: "Search homes", description: "Filters and curated search" },
    { href: "/sell", label: "Sell with the Palms Place team", description: "Listing specialist & marketing" },
    { href: "/contact", label: "Schedule a conversation", description: "Buy or sell" },
    { href: "/communities", label: "Neighborhoods & communities", description: "Near the Strip" },
    { href: "/popular-searches", label: "Popular buyer searches", description: "Shortcuts by topic" },
    { href: "/buyers/calculators", label: "Buyer calculators", description: "Payments and affordability" },
  ];

  const filtered = pool.filter((item) => item.href !== normalized);
  return filtered.slice(0, 5);
}
