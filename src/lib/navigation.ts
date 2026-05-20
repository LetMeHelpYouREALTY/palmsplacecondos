import { getRealScoutSharedSearchUrl } from "@/lib/realscout";

export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

const facebookHref =
  process.env.NEXT_PUBLIC_FACEBOOK_URL ?? "https://www.facebook.com/palmsplace";
const youtubeHref = process.env.NEXT_PUBLIC_YOUTUBE_URL ?? "https://www.youtube.com/";
const realScoutSharedSearchHref = getRealScoutSharedSearchUrl();

/** Top utility links (Connect + Facebook + YouTube) */
export const utilityNav: NavItem[] = [
  { label: "Connect", href: "/connect" },
  { label: "Facebook", href: facebookHref, external: true },
  { label: "YouTube", href: youtubeHref, external: true },
];

/** Sticky header — high-intent routes visible without scrolling to footer */
export const headerNav: NavItem[] = [
  { label: "Palms Place", href: "/palms-place" },
  { label: "Condos", href: "/condos" },
  { label: "Sell", href: "/sell" },
  { label: "Contact", href: "/contact" },
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
  { label: "Palms Place guide", href: "/palms-place" },
  { label: "Buyers", href: "/buyers" },
  { label: "Sellers", href: "/sellers" },
  { label: "Buying guide", href: "/guide/buying-palms-place" },
  { label: "Selling guide", href: "/guide/selling-palms-place" },
  { label: "Unit types", href: "/guide/palms-place-unit-types" },
  { label: "Compare towers", href: "/guide/compare-strip-high-rises" },
  { label: "Field notes", href: "/insights" },
  { label: "Team", href: "/team" },
  { label: "Buyer Calculators", href: "/buyers/calculators" },
  { label: "FAQ", href: "/faq" },
  { label: "Popular Searches", href: "/popular-searches" },
  { label: "Featured", href: "/featured" },
  { label: "Under $500K", href: "/under-500k" },
  { label: "Homes", href: "/homes" },
  { label: "High Rises", href: "/high-rises" },
  { label: "Luxury Homes", href: "/luxury-homes" },
];
