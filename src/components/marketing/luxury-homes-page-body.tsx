import Link from "next/link";
import { RelatedPages } from "@/components/seo/related-pages";
import { relatedLinksForPath } from "@/lib/internal-links";
import { siteContact } from "@/lib/site-contact";

/** Expanded /luxury-homes — estates & high-rise contrast. */
export function LuxuryHomesPageBody() {
  const related = relatedLinksForPath("/luxury-homes");

  return (
    <article className="mx-auto max-w-3xl px-6 py-12 md:py-16">
      <h1 className="font-display text-3xl font-semibold tracking-tight text-palms-cream md:text-4xl">
        Luxury homes in Summerlin, Henderson &amp; Las Vegas
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-palms-cream/85">
        Buyer tours with {siteContact.buyerSpecialistName}, {siteContact.buyerSpecialistTitle}, and
        the Palms Place team—{siteContact.brokerage}.
      </p>

      <section className="mt-12">
        <h2 className="font-display text-2xl font-semibold text-palms-cream">
          Estates vs high-rise condos
        </h2>
        <p className="mt-4 leading-relaxed text-palms-cream/85">
          Luxury single-family and estate product in Summerlin or Henderson often trades on land,
          schools, and outdoor space. By contrast, Las Vegas high-rise condos and Palms Place
          condos for sale emphasize vertical living, HOA amenities, and Strip proximity. Many
          clients compare both before they commit—your agent can align showings with your lifestyle
          goals.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl font-semibold text-palms-cream">
          Also explore high-rises &amp; Palms Place
        </h2>
        <p className="mt-4 leading-relaxed text-palms-cream/85">
          If a tower might fit better than a yard, review{" "}
          <Link className="text-palms-gold underline-offset-4 hover:underline" href="/condos">
            Las Vegas high-rise &amp; Palms Place condos
          </Link>{" "}
          and{" "}
          <Link className="text-palms-gold underline-offset-4 hover:underline" href="/high-rises">
            Strip-area high-rises
          </Link>
          .
        </p>
      </section>

      <RelatedPages links={related} />
    </article>
  );
}
