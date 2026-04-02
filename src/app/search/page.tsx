import type { Metadata } from "next";
import { RelatedPages } from "@/components/seo/related-pages";
import { ButtonAnchor } from "@/components/shared/button-link";
import { SectionEyebrow } from "@/components/shared/section-heading";
import { relatedLinksForPath } from "@/lib/internal-links";
import { canonicalMetadata } from "@/lib/metadata-helpers";
import { formatTeamPhrase, siteContact } from "@/lib/site-contact";
import { getRealScoutSharedSearchUrl } from "@/lib/realscout";

export const metadata: Metadata = {
  title: "Palms Place & Las Vegas condo search (RealScout)",
  description: `Curated home search for Palms Place condos for sale and Las Vegas-area listings (${formatTeamPhrase()})—${siteContact.primaryServiceArea}.`,
  ...canonicalMetadata("/search"),
};

export default function SearchPage() {
  const sharedSearchUrl = getRealScoutSharedSearchUrl();
  const related = relatedLinksForPath("/search");

  return (
    <div className="border-b border-palms-gold/10 bg-linear-to-b from-palms-charcoal to-palms-charcoal-muted/30">
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        <SectionEyebrow>Property search</SectionEyebrow>
        <h1 className="font-display mt-6 text-3xl font-semibold tracking-tight text-palms-cream md:text-4xl">
          Palms Place & Las Vegas home search
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-palms-cream/85">
          Run the team&apos;s saved RealScout search to filter by price, property type, and more—buyer
          questions often start with {siteContact.buyerSpecialistName} ({siteContact.buyerSpecialistTitle}
          ); listing context with {siteContact.agentName} around {siteContact.primaryServiceArea}.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
          <ButtonAnchor
            aria-label="Open the Palms Place team curated home search on RealScout in a new tab"
            href={sharedSearchUrl}
            variant="primary"
          >
            Open curated home search
          </ButtonAnchor>
          <p className="text-sm text-palms-cream/55">
            Opens in a new tab · RealScout
          </p>
        </div>
        <p className="mt-10 max-w-2xl text-sm leading-relaxed text-palms-cream/60">
          Listing disclaimer: Information deemed reliable but not guaranteed. Verify listing details with
          your agent and official sources. Not intended as legal or tax advice.
        </p>
        <RelatedPages links={related} />
      </div>
    </div>
  );
}
