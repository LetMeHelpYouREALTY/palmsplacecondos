import Link from "next/link";
import { RelatedPages } from "@/components/seo/related-pages";
import { relatedLinksForPath } from "@/lib/internal-links";
import { siteContact } from "@/lib/site-contact";

/** Expanded /high-rises — Strip towers & Palms Place bridge page. */
export function HighRisesPageBody() {
  const related = relatedLinksForPath("/high-rises");

  return (
    <article className="mx-auto max-w-3xl px-6 py-12 md:py-16">
      <h1 className="font-display text-3xl font-semibold tracking-tight text-palms-cream md:text-4xl">
        Las Vegas high-rises
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-palms-cream/85">
        Strip and urban towers—amenities, HOA structures, and floor-plan variety differ by
        building. {siteContact.agentName} and {siteContact.buyerSpecialistName} help buyers compare
        options with {siteContact.brokerage}.
      </p>

      <section className="mt-12">
        <h2 className="font-display text-2xl font-semibold text-palms-cream">
          Palms Place &amp; nearby inventory
        </h2>
        <p className="mt-4 leading-relaxed text-palms-cream/85">
          For Palms Place-specific context—residences, resort-style amenities, and how listings
          present in the current market—start with{" "}
          <Link className="text-palms-gold underline-offset-4 hover:underline" href="/condos">
            Las Vegas high-rise &amp; Palms Place condos
          </Link>
          . That page ties together building positioning and search entry points without duplicating
          the homepage FAQ.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl font-semibold text-palms-cream">
          What to compare across towers
        </h2>
        <p className="mt-4 leading-relaxed text-palms-cream/85">
          HOA fees, parking, rental restrictions, and reserve studies affect value and monthly
          carry. Your agent reviews disclosures with you and coordinates tours that match your
          timeline—not a generic list of every high-rise on the Strip.
        </p>
      </section>

      <RelatedPages links={related} />
    </article>
  );
}
