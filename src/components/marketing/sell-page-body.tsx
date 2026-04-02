import Link from "next/link";
import { RelatedPages } from "@/components/seo/related-pages";
import { relatedLinksForPath } from "@/lib/internal-links";
import { siteContact } from "@/lib/site-contact";

/**
 * Expanded /sell — seller journey; complements homepage CTA without copying FAQ schema.
 */
export function SellPageBody() {
  const related = relatedLinksForPath("/sell");
  const phone = siteContact.phone;
  const tel = phone ? `tel:${phone.replace(/\D/g, "")}` : undefined;

  return (
    <article className="mx-auto max-w-3xl px-6 py-12 md:py-16">
      <h1 className="font-display text-3xl font-semibold tracking-tight text-palms-cream md:text-4xl">
        Sell your Palms Place or Las Vegas condo
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-palms-cream/85">
        Listing conversations with {siteContact.agentName}, {siteContact.agentTitle}, and{" "}
        {siteContact.brokerage} focus on pricing strategy, presentation, and exposure—not a
        guaranteed sale price.
      </p>

      <section className="mt-12">
        <h2 className="font-display text-2xl font-semibold text-palms-cream">
          Complimentary valuation discussion
        </h2>
        <p className="mt-4 leading-relaxed text-palms-cream/85">
          Sellers often begin with a free valuation conversation: we review recent comps, active
          competition, and how Palms Place condos for sale are positioned in the current market.
          This is not an automated appraisal—your agent explains methodology and limitations.
        </p>
        {phone && tel ? (
          <p className="mt-4 text-palms-cream/85">
            Call or text{" "}
            <a className="font-medium text-palms-gold underline-offset-4 hover:underline" href={tel}>
              {phone}
            </a>{" "}
            to schedule.
          </p>
        ) : null}
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl font-semibold text-palms-cream">
          Listing strategy &amp; marketing
        </h2>
        <p className="mt-4 leading-relaxed text-palms-cream/85">
          Plans can include professional media, syndication to major listing sites, and targeted outreach appropriate to
          your building and price band. HOA rules and tenant-occupied units add steps—your listing
          team coordinates timelines with disclosures and association requirements.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl font-semibold text-palms-cream">
          Buyers still searching? Cross-links
        </h2>
        <p className="mt-4 leading-relaxed text-palms-cream/85">
          Share{" "}
          <Link className="text-palms-gold underline-offset-4 hover:underline" href="/condos">
            Las Vegas high-rise &amp; Palms Place condos
          </Link>{" "}
          or{" "}
          <Link className="text-palms-gold underline-offset-4 hover:underline" href="/homes">
            Las Vegas homes for sale
          </Link>{" "}
          with co-buyers or tenants who need context on the broader market.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl font-semibold text-palms-cream">Get started</h2>
        <p className="mt-4 leading-relaxed text-palms-cream/85">
          <Link className="font-medium text-palms-gold underline-offset-4 hover:underline" href="/contact">
            Contact the team
          </Link>{" "}
          for a seller consult, or return to the{" "}
          <Link className="text-palms-gold underline-offset-4 hover:underline" href="/">
            homepage
          </Link>{" "}
          for Palms Place buyer resources.
        </p>
      </section>

      <RelatedPages links={related} />
    </article>
  );
}
