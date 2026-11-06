/**
 * Canonical marketing routes for sitemap, llms.txt, IndexNow, and internal SEO tooling.
 * Keep in sync with public App Router page.tsx routes under src/app.
 *
 * GSC Sitemaps (2026-08-20): 33 URLs discovered on
 * `https://www.palmsplacecondos.com/sitemap.xml` (Success). After this deploy the
 * marketing catalog is 40 URLs (added `/maps` for GBP/Google Maps citations;
 * GSC count was already behind this array). Count must stay aligned with this array.
 * 2026-11-06: 5 off-topic hubs moved to NOINDEX_SECONDARY_ROUTES (noindex, follow)
 * and `/guide/palms-place-mortgage-and-financing` added — catalog is 36 URLs.
 */

export type MarketingRoute = {
  path: string;
  /** One-line summary for llms.txt / AEO indexes */
  summary: string;
  changeFrequency: "weekly" | "monthly";
  priority: number;
};

export const MARKETING_ROUTES: MarketingRoute[] = [
  {
    path: "",
    summary: "Palms Place condos for sale — Las Vegas Strip high-rise overview and live search.",
    changeFrequency: "weekly",
    priority: 1,
  },
  {
    path: "/palms-place",
    summary: "Building guide: address, tower facts, amenities, buying and selling at Palms Place.",
    changeFrequency: "weekly",
    priority: 0.95,
  },
  {
    path: "/buyers",
    summary: "Buyer hub for Palms Place and Las Vegas high-rise condo tours and due diligence.",
    changeFrequency: "monthly",
    priority: 0.88,
  },
  {
    path: "/sellers",
    summary: "Seller hub for Palms Place listing prep, valuation conversations, and marketing.",
    changeFrequency: "monthly",
    priority: 0.88,
  },
  {
    path: "/guide/buying-palms-place",
    summary: "Field guide: buying a Palms Place condo — tours, HOA packets, and offer readiness.",
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    path: "/guide/selling-palms-place",
    summary: "Field guide: selling a Palms Place condo — HOA packets, furnished resale, prep.",
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    path: "/guide/palms-place-unit-types",
    summary: "Studios vs one-bedroom Palms Place floor plans — decision framework for buyers.",
    changeFrequency: "monthly",
    priority: 0.86,
  },
  {
    path: "/guide/compare-strip-high-rises",
    summary: "Compare Palms Place with other Strip-adjacent high-rises before you tour.",
    changeFrequency: "monthly",
    priority: 0.86,
  },
  {
    path: "/guide/palms-place-hoa-and-monthly-costs",
    summary: "Palms Place HOA fees, assessments, and true monthly carry — verify in disclosures.",
    changeFrequency: "monthly",
    priority: 0.87,
  },
  {
    path: "/guide/furnished-palms-place-condos",
    summary: "Furnished Palms Place resales — what conveys and rental-rule checks.",
    changeFrequency: "monthly",
    priority: 0.86,
  },
  {
    path: "/guide/palms-place-amenities-and-resort-access",
    summary: "Amenities and resort access at Palms Place — owner verification before you buy.",
    changeFrequency: "monthly",
    priority: 0.86,
  },
  {
    path: "/guide/palms-place-condos-vs-hotel",
    summary: "Palms Place condos for sale vs Palms.com hotel booking — which URL to cite.",
    changeFrequency: "monthly",
    priority: 0.84,
  },
  {
    path: "/guide/palms-place-strip-view-condos",
    summary: "Strip view vs mountain view Palms Place condos — verify orientation on tour.",
    changeFrequency: "monthly",
    priority: 0.86,
  },
  {
    path: "/guide/palms-place-short-term-rentals",
    summary: "Palms Place short-term rentals — HOA rules vs Airbnb video claims.",
    changeFrequency: "monthly",
    priority: 0.86,
  },
  {
    path: "/guide/palms-place-mortgage-and-financing",
    summary:
      "Can I get a mortgage at Palms Place? Condo-hotel financing basics — usually cash or a portfolio lender.",
    changeFrequency: "monthly",
    priority: 0.86,
  },
  {
    path: "/area/palms-place-las-vegas",
    summary: "Location page: West Flamingo / Paradise map context for Palms Place.",
    changeFrequency: "monthly",
    priority: 0.88,
  },
  {
    path: "/insights",
    summary: "Field notes hub — first-hand Palms Place tour and listing insights.",
    changeFrequency: "monthly",
    priority: 0.84,
  },
  {
    path: "/insights/palms-place-tour-red-flags",
    summary: "Field note: tour red flags buyers miss at Palms Place.",
    changeFrequency: "monthly",
    priority: 0.82,
  },
  {
    path: "/insights/why-we-request-hoa-packets-early",
    summary: "Field note: why the team requests HOA packets early in Palms Place deals.",
    changeFrequency: "monthly",
    priority: 0.82,
  },
  {
    path: "/insights/furnished-resale-inventory-surprises",
    summary: "Field note: furnished resale inventory surprises at Palms Place.",
    changeFrequency: "monthly",
    priority: 0.82,
  },
  {
    path: "/insights/palms-place-corner-unit-listing-campaign",
    summary: "Field note: how Palms Place #8322 was listed as a corner-unit campaign.",
    changeFrequency: "monthly",
    priority: 0.82,
  },
  {
    path: "/team",
    summary: "Dr. Jan Duffy — Palms Place listing lead and buyers specialist NAP.",
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    path: "/condos",
    summary: "Las Vegas high-rise and Palms Place condos hub with live search paths.",
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    path: "/search",
    summary: "Curated RealScout search for Palms Place and Las Vegas-area listings.",
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    path: "/sell",
    summary: "Sell your Palms Place or Las Vegas condo — valuation conversation and listing prep.",
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    path: "/contact",
    summary: "Contact the Palms Place team — office NAP, hours, map, call and directions.",
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    path: "/maps",
    summary:
      "Unique Google Maps for the Palms Place office GBP pin, tower, nearby landmarks, and Google Sites embed.",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/connect",
    summary: "Connect — social channels, office NAP, and follow-up paths.",
    changeFrequency: "monthly",
    priority: 0.75,
  },
  {
    path: "/faq",
    summary: "Palms Place FAQ — amenities, buying, selling, and tower questions.",
    changeFrequency: "monthly",
    priority: 0.78,
  },
  {
    path: "/featured",
    summary: "Featured and spotlight inventory paths via live RealScout search.",
    changeFrequency: "weekly",
    priority: 0.75,
  },
  {
    path: "/photo-use",
    summary:
      "Listing photo credit, copyright, and how to request reuse — ImageObject license page.",
    changeFrequency: "monthly",
    priority: 0.4,
  },
  {
    path: "/photos",
    summary: "Palms Place condo photo galleries — Strip-view listing photography hub.",
    changeFrequency: "weekly",
    priority: 0.86,
  },
  {
    path: "/photos/unit-8322",
    summary: "Photos of Palms Place #8322 for sale — living room and balcony Strip views.",
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    path: "/video",
    summary:
      "Dr. Jan Duffy Palms Place listing-specialist video — first-party tower and #8322 photography.",
    changeFrequency: "monthly",
    priority: 0.82,
  },
  {
    path: "/high-rises",
    summary: "Las Vegas high-rise condo hub — towers buyers cross-shop with Palms Place.",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/buyers/calculators",
    summary: "Buyer calculators hub — prepare questions; confirm rates with a licensed lender.",
    changeFrequency: "monthly",
    priority: 0.7,
  },
];

/**
 * Off-topic hub pages (general Las Vegas homes, luxury estates, price bands,
 * valley communities, search shortcuts). They stay live for visitors and keep
 * passing link value, but carry `noindex, follow` and stay out of sitemap.xml,
 * llms.txt, and IndexNow so Google focuses on the Palms Place pages
 * (Search Console "Discovered / Crawled – currently not indexed", 2026-11-06).
 * The SEO audit reads this list to skip its orphan-page warning.
 */
export const NOINDEX_SECONDARY_ROUTES = [
  "/homes",
  "/communities",
  "/luxury-homes",
  "/popular-searches",
  "/under-500k",
] as const;

export function marketingPathHref(path: string): string {
  return path === "" ? "/" : path;
}
