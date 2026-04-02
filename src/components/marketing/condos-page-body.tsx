import Link from "next/link";
import { RelatedPages } from "@/components/seo/related-pages";
import { ButtonAnchor } from "@/components/shared/button-link";
import { relatedLinksForPath } from "@/lib/internal-links";
import { getRealScoutSharedSearchUrl } from "@/lib/realscout";
import { siteContact } from "@/lib/site-contact";

/**
 * Expanded /condos — unique copy (not a duplicate of the homepage FAQ block).
 */
export function CondosPageBody() {
  const related = relatedLinksForPath("/condos");
  const searchUrl = getRealScoutSharedSearchUrl();

  return (
    <article className="mx-auto max-w-3xl px-6 py-12 md:py-16">
      <h1 className="font-display text-3xl font-semibold tracking-tight text-palms-cream md:text-4xl">
        Las Vegas high-rise &amp; Palms Place condos
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-palms-cream/85">
        Compare inventory and HOA context with {siteContact.agentName} (listing specialist) and{" "}
        {siteContact.buyerSpecialistName} (buyers)—{siteContact.brokerage}.
      </p>

      <section className="mt-12">
        <h2 className="font-display text-2xl font-semibold text-palms-cream">
          Why buyers start with high-rise inventory
        </h2>
        <p className="mt-4 leading-relaxed text-palms-cream/85">
          Strip-adjacent residences and west-side towers each offer different HOA fee structures,
          parking rules, and rental caps. Whether you want a lock-and-leave Las Vegas condo or a
          larger layout for hosting, narrow your search early by price band, HOA tolerance, and
          commute—and verify every material fact in disclosures.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl font-semibold text-palms-cream">
          Palms Place condos for sale — what to compare first
        </h2>
        <p className="mt-4 leading-relaxed text-palms-cream/85">
          Review Palms Place floor plans (studio vs one-bedroom), HOA amenities Palms Place
          documents describe, and how Palms Casino Resort residences access differs from hotel guest
          programs. For a wider luxury baseline, see{" "}
          <Link className="text-palms-gold underline-offset-4 hover:underline" href="/luxury-homes">
            luxury homes in Summerlin and Henderson
          </Link>{" "}
          and{" "}
          <Link className="text-palms-gold underline-offset-4 hover:underline" href="/high-rises">
            Las Vegas Strip high-rise condos &amp; towers
          </Link>
          .
        </p>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl font-semibold text-palms-cream">
          Search live listings
        </h2>
        <p className="mt-4 leading-relaxed text-palms-cream/85">
          Run the team&apos;s curated search to filter by price, property type, and status. You can
          also jump to the{" "}
          <Link className="text-palms-gold underline-offset-4 hover:underline" href="/search">
            dedicated search page
          </Link>{" "}
          or return to the{" "}
          <Link className="text-palms-gold underline-offset-4 hover:underline" href="/">
            homepage overview
          </Link>
          .
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <ButtonAnchor href={searchUrl} variant="primary">
            Open curated home search
          </ButtonAnchor>
          <Link
            className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-palms-gold/45 px-6 py-3 text-sm font-semibold text-palms-cream transition-colors hover:border-palms-gold hover:bg-palms-gold/10"
            href="/contact"
          >
            Schedule a Palms Place showing with Dr. Jan
          </Link>
        </div>
      </section>

      <section className="mt-12 rounded-xl border border-palms-gold/15 bg-palms-charcoal-muted/30 p-6">
        <h2 className="font-display text-xl font-semibold text-palms-cream">Listing data disclaimer</h2>
        <p className="mt-3 text-sm leading-relaxed text-palms-cream/70">
          Information is deemed reliable but not guaranteed. Verify price, square footage, HOA
          fees, and status with your agent and official sources—not intended as legal or tax advice.
        </p>
      </section>

      <RelatedPages links={related} />
    </article>
  );
}
