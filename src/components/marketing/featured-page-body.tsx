import Link from "next/link";
import { RelatedPages } from "@/components/seo/related-pages";
import { relatedLinksForPath } from "@/lib/internal-links";
import { getRealScoutSharedSearchUrl } from "@/lib/realscout";
import { siteContact } from "@/lib/site-contact";

/** Expanded /featured — spotlight inventory without fabricating listing rows. */
export function FeaturedPageBody() {
  const related = relatedLinksForPath("/featured");
  const searchUrl = getRealScoutSharedSearchUrl();

  return (
    <article className="mx-auto max-w-3xl px-6 py-12 md:py-16">
      <h1 className="font-display text-3xl font-semibold tracking-tight text-palms-cream md:text-4xl">
        Featured listings
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-palms-cream/85">
        Highlights rotate with market activity—{siteContact.buyerSpecialistName} and{" "}
        {siteContact.agentName} curate search experiences rather than a static grid of fake listing rows
        on this marketing page.
      </p>

      <section className="mt-12">
        <h2 className="font-display text-2xl font-semibold text-palms-cream">
          See current inventory
        </h2>
        <p className="mt-4 leading-relaxed text-palms-cream/85">
          Open{" "}
          <a
            className="font-medium text-palms-gold underline-offset-4 hover:underline"
            href={searchUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            Dr. Jan Duffy&apos;s RealScout search
          </a>{" "}
          for live Palms Place and Las Vegas listings with filters you control. For building-specific
          context first, see{" "}
          <Link className="text-palms-gold underline-offset-4 hover:underline" href="/condos">
            Las Vegas high-rise &amp; Palms Place condos
          </Link>
          .
        </p>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl font-semibold text-palms-cream">
          Want a private list?
        </h2>
        <p className="mt-4 leading-relaxed text-palms-cream/85">
          <Link className="text-palms-gold underline-offset-4 hover:underline" href="/contact">
            Contact the office
          </Link>{" "}
          for tours and off-market conversations appropriate to your price band and timeline.
        </p>
      </section>

      <RelatedPages links={related} />
    </article>
  );
}
