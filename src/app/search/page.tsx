import type { Metadata } from "next";
import { ButtonAnchor } from "@/components/shared/button-link";
import { SectionEyebrow } from "@/components/shared/section-heading";
import { siteContact } from "@/lib/site-contact";
import { getRealScoutSharedSearchUrl } from "@/lib/realscout";

export const metadata: Metadata = {
  title: "Search homes",
  description: `Search active Las Vegas area listings with Dr. Jan Duffy’s curated RealScout filters. ${siteContact.primaryServiceArea}.`,
};

export default function SearchPage() {
  const sharedSearchUrl = getRealScoutSharedSearchUrl();

  return (
    <div className="border-b border-palms-gold/10 bg-linear-to-b from-palms-charcoal to-palms-charcoal-muted/30">
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        <SectionEyebrow>Property search</SectionEyebrow>
        <h1 className="font-display mt-6 text-3xl font-semibold tracking-tight text-palms-cream md:text-4xl">
          Search homes
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-palms-cream/85">
          Run Dr. Jan Duffy&apos;s saved RealScout search to filter by price, property type, and
          more—aligned with how we work with buyers around {siteContact.primaryServiceArea}.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
          <ButtonAnchor
            aria-label="Open Dr. Jan Duffy’s curated home search on RealScout in a new tab"
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
          MLS disclaimer: Information deemed reliable but not guaranteed. Verify listing details with
          your agent and official sources. Not intended as legal or tax advice.
        </p>
      </div>
    </div>
  );
}
