import { getRealScoutSharedSearchUrl } from "@/lib/realscout";

/**
 * Contextual internal links for SEO topic clusters — descriptive anchor text, not “click here.”
 */
export type RelatedLink = {
  href: string;
  label: string;
  description?: string;
  external?: boolean;
};

/** Paths that should not link to themselves. */
export function relatedLinksForPath(pathname: string): RelatedLink[] {
  const normalized = pathname === "" ? "/" : pathname.startsWith("/") ? pathname : `/${pathname}`;
  const searchUrl = getRealScoutSharedSearchUrl();
  const pool: RelatedLink[] = [
    {
      href: "/",
      label: "Palms Place condos for sale — Las Vegas Strip high-rise",
      description: "Homepage overview and search",
    },
    { href: "/homes", label: "Homes for sale in Las Vegas", description: "Single-family and attached" },
    {
      href: "/condos",
      label: "Las Vegas Strip & high-rise condos for sale",
      description: "Including Palms Place and near-Strip towers",
    },
    {
      href: "/high-rises",
      label: "Strip high-rise condos & tower comparison",
      description: "HOA context and search entry points",
    },
    {
      href: searchUrl,
      label: "Search homes",
      description: "Dr. Jan Duffy’s curated RealScout search",
      external: true,
    },
    { href: "/sell", label: "Sell with the Palms Place team", description: "Listing specialist & marketing" },
    { href: "/contact", label: "Schedule a conversation", description: "Buy or sell" },
    { href: "/connect", label: "Connect & YouTube", description: "Stay in touch" },
    { href: "/communities", label: "Neighborhoods & communities", description: "Near the Strip" },
    {
      href: "/luxury-homes",
      label: "Las Vegas luxury homes for sale",
      description: "Summerlin, Henderson & valley estates",
    },
    { href: "/featured", label: "Featured listings", description: "Spotlight inventory" },
    { href: "/under-500k", label: "Homes & condos under $500K", description: "Price band shortcut" },
    { href: "/popular-searches", label: "Popular buyer searches", description: "Shortcuts by topic" },
    {
      href: "/faq",
      label: "Palms Place Las Vegas FAQ",
      description: "Building, location, amenities, booking",
    },
    { href: "/buyers/calculators", label: "Buyer calculators", description: "Payments and affordability" },
  ];

  const filtered = pool.filter((item) => {
    if (item.href === normalized) return false;
    if (normalized === "/search" && item.external && item.href === searchUrl) return false;
    return true;
  });
  return filtered.slice(0, 5);
}
