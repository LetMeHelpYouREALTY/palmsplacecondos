import Link from "next/link";
import { RelatedPages } from "@/components/seo/related-pages";
import { ButtonAnchor } from "@/components/shared/button-link";
import { relatedLinksForPath } from "@/lib/internal-links";
import { getRealScoutSharedSearchUrl } from "@/lib/realscout";
import { siteContact } from "@/lib/site-contact";

/** Expanded /high-rises — Strip towers & Palms Place bridge page. */
export function HighRisesPageBody() {
  const related = relatedLinksForPath("/high-rises");
  const searchUrl = getRealScoutSharedSearchUrl();

  return (
    <article className="mx-auto max-w-3xl px-6 py-12 md:py-16">
      <h1 className="font-display text-3xl font-semibold tracking-tight text-palms-cream md:text-4xl">
        Las Vegas Strip high-rise condos for sale
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-palms-cream/85">
        Condos on the Strip and just west of it—luxury high-rise towers where amenities, HOA
        structures, and floor-plan variety differ by building. {siteContact.agentName} and{" "}
        {siteContact.buyerSpecialistName} help buyers compare options with {siteContact.brokerage}.
      </p>

      <section className="mt-12">
        <h2 className="font-display text-2xl font-semibold text-palms-cream">
          Palms Place &amp; nearby inventory
        </h2>
        <p className="mt-4 leading-relaxed text-palms-cream/85">
          For Palms Place-specific context—residences, resort-style amenities, and how listings
          present in the current market—start with the{" "}
          <Link className="text-palms-gold underline-offset-4 hover:underline" href="/palms-place">
            Palms Place Las Vegas building guide
          </Link>{" "}
          or{" "}
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
          timeline—not a generic list of every high-rise on the Strip. For a Palms Place–first
          framework, read our{" "}
          <Link
            className="text-palms-gold underline-offset-4 hover:underline"
            href="/guide/compare-strip-high-rises"
          >
            Strip high-rise comparison guide
          </Link>
          .
        </p>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl font-semibold text-palms-cream">
          Other Strip and near-Strip high-rises buyers compare
        </h2>
        <p className="mt-4 leading-relaxed text-palms-cream/85">
          Depending on budget and lifestyle, buyers often cross-shop multiple towers—examples include
          Panorama Towers, Turnberry Towers, Trump Tower Las Vegas, Veer Towers, Waldorf Astoria
          Residences Las Vegas, The Signature, Metropolis, One Las Vegas, Newport Lofts, Allure, and
          Regency Towers. Rules, fees, and finishes are not interchangeable; your agent aligns tours
          and listing data with what you see in official disclosures—not third-party summaries alone.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <ButtonAnchor href={searchUrl} variant="primary">
            Open curated home search
          </ButtonAnchor>
          <Link
            className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-palms-gold/45 px-6 py-3 text-sm font-semibold text-palms-cream transition-colors hover:border-palms-gold hover:bg-palms-gold/10"
            href="/contact"
          >
            Ask about Strip high-rises
          </Link>
        </div>
      </section>

      <RelatedPages links={related} />
    </article>
  );
}
