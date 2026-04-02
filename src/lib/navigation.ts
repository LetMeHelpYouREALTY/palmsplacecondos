import { getRealScoutSharedSearchUrl } from "@/lib/realscout";

export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

const youtubeHref = process.env.NEXT_PUBLIC_YOUTUBE_URL ?? "https://www.youtube.com/";
const realScoutSharedSearchHref = getRealScoutSharedSearchUrl();

/** Top utility links (Connect + YouTube) */
export const utilityNav: NavItem[] = [
  { label: "Connect", href: "/connect" },
  { label: "YouTube", href: youtubeHref, external: true },
];

/** Primary site navigation */
export const primaryNav: NavItem[] = [
  { label: "Homes", href: "/homes" },
  { label: "Condos", href: "/condos" },
  { label: "Communities", href: "/communities" },
  { label: "SELL", href: "/sell" },
  { label: "Search homes", href: realScoutSharedSearchHref, external: true },
  { label: "Contact", href: "/contact" },
];

/** Secondary “popular searches / buyer” shortcuts */
export const popularNav: NavItem[] = [
  { label: "Buyer Calculators", href: "/buyers/calculators" },
  { label: "Popular Searches", href: "/popular-searches" },
  { label: "Featured", href: "/featured" },
  { label: "Under $500K", href: "/under-500k" },
  { label: "Homes", href: "/homes" },
  { label: "High Rises", href: "/high-rises" },
  { label: "Luxury Homes", href: "/luxury-homes" },
];
