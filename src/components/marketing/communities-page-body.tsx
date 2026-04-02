import Link from "next/link";
import { RelatedPages } from "@/components/seo/related-pages";
import { relatedLinksForPath } from "@/lib/internal-links";
import { siteContact } from "@/lib/site-contact";

/**
 * Expanded /communities — neighborhood context without duplicating homepage FAQ JSON-LD.
 */
export function CommunitiesPageBody() {
  const related = relatedLinksForPath("/communities");

  return (
    <article className="mx-auto max-w-3xl px-6 py-12 md:py-16">
      <h1 className="font-display text-3xl font-semibold tracking-tight text-palms-cream md:text-4xl">
        Las Vegas condo communities overview
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-palms-cream/85">
        Use this hub to orient your search before you tour. {siteContact.agentName} and{" "}
        {siteContact.buyerSpecialistName} help buyers compare corridors across{" "}
        {siteContact.primaryServiceArea}.
      </p>

      <section className="mt-12">
        <h2 className="font-display text-2xl font-semibold text-palms-cream">
          Strip-adjacent and west Las Vegas corridors
        </h2>
        <p className="mt-4 leading-relaxed text-palms-cream/85">
          Luxury condos West Las Vegas and near the Strip can offer shorter drives to entertainment
          and employment centers—but HOA rules, noise, and parking differ by tower. Palms Place
          condos for sale attract buyers who want resort-adjacent living with a private residential
          tower experience; always compare HOA packets side by side.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl font-semibold text-palms-cream">
          Summerlin, Henderson, and the broader valley
        </h2>
        <p className="mt-4 leading-relaxed text-palms-cream/85">
          If you are weighing master-planned communities against high-rise life, browse{" "}
          <Link className="text-palms-gold underline-offset-4 hover:underline" href="/luxury-homes">
            luxury homes in Summerlin and Henderson
          </Link>{" "}
          for single-family and estate inventory, then contrast with{" "}
          <Link className="text-palms-gold underline-offset-4 hover:underline" href="/condos">
            Las Vegas high-rise &amp; Palms Place condos
          </Link>{" "}
          for vertical living and HOA amenities Palms Place and similar towers provide.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl font-semibold text-palms-cream">
          Next steps with the Palms Place team
        </h2>
        <p className="mt-4 leading-relaxed text-palms-cream/85">
          Narrow your must-haves, pull comparable sales with your agent, and schedule showings when
          you are ready. Start from the{" "}
          <Link className="text-palms-gold underline-offset-4 hover:underline" href="/">
            Palms Place condos homepage
          </Link>{" "}
          or{" "}
          <Link className="text-palms-gold underline-offset-4 hover:underline" href="/contact">
            contact the office
          </Link>{" "}
          for a conversation about timing and financing—not legal or tax advice.
        </p>
      </section>

      <RelatedPages links={related} />
    </article>
  );
}
