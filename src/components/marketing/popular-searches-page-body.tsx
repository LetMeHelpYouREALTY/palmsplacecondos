import Link from "next/link";
import { RelatedPages } from "@/components/seo/related-pages";
import { relatedLinksForPath } from "@/lib/internal-links";
import { getRealScoutSharedSearchUrl } from "@/lib/realscout";

type PopularSearchLink = {
  href: string;
  label: string;
  description: string;
  external?: boolean;
};

const staticLinks: PopularSearchLink[] = [
  { href: "/condos", label: "Palms Place & high-rise condos", description: "Strip-adjacent towers" },
  { href: "/high-rises", label: "Las Vegas high-rises", description: "Urban towers & amenities" },
  { href: "/homes", label: "Homes for sale in Las Vegas", description: "Single-family & attached" },
  {
    href: "/luxury-homes",
    label: "Luxury homes in Summerlin & Henderson",
    description: "Estates & luxury single-family",
  },
  { href: "/under-500k", label: "Under $500K", description: "Starter & move-up bands" },
  { href: "/featured", label: "Featured listings", description: "Spotlight inventory" },
  { href: "/sell", label: "Sell with the Palms Place team", description: "Listing specialist" },
  { href: "/communities", label: "Neighborhoods & communities", description: "West side & valley" },
];

/** Expanded /popular-searches — curated internal links + RealScout. */
export function PopularSearchesPageBody() {
  const related = relatedLinksForPath("/popular-searches");
  const searchUrl = getRealScoutSharedSearchUrl();

  return (
    <article className="mx-auto max-w-3xl px-6 py-12 md:py-16">
      <h1 className="font-display text-3xl font-semibold tracking-tight text-palms-cream md:text-4xl">
        Popular searches
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-palms-cream/85">
        High-intent shortcuts to Palms Place, Strip high-rises, and valley homes—each page expands
        topic context without duplicating the homepage FAQ.
      </p>

      <section className="mt-10">
        <h2 className="font-display text-xl font-semibold text-palms-cream">On this site</h2>
        <ul className="mt-6 space-y-4">
          {staticLinks.map((item) => (
            <li key={item.href}>
              <Link className="font-medium text-palms-gold underline-offset-4 hover:underline" href={item.href}>
                {item.label}
              </Link>
              <span className="text-palms-cream/65"> — {item.description}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-xl font-semibold text-palms-cream">Live MLS search</h2>
        <p className="mt-4 leading-relaxed text-palms-cream/85">
          <a
            className="font-medium text-palms-gold underline-offset-4 hover:underline"
            href={searchUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            Open RealScout search
          </a>{" "}
          for filters, saved searches, and alerts managed with your agent.
        </p>
      </section>

      <RelatedPages links={related} />
    </article>
  );
}
