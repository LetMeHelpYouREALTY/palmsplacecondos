/**
 * RealScout office listings web component. Script is loaded once in root layout.
 * @see https://support.realscout.com — widget and agent ID configuration.
 */
import { ButtonAnchor } from "@/components/shared/button-link";
import { SectionEyebrow } from "@/components/shared/section-heading";
import { getRealScoutSharedSearchUrl } from "@/lib/realscout";
import { siteContact } from "@/lib/site-contact";

const DEFAULT_AGENT = "QWdlbnQtMjI1MDUw";

function safeAgentEncodedId(value: string): string {
  return value.replace(/["'<>]/g, "").trim() || DEFAULT_AGENT;
}

export function RealScoutOfficeListingsEmbed() {
  const sharedSearchUrl = getRealScoutSharedSearchUrl();
  const agentId = safeAgentEncodedId(
    process.env.NEXT_PUBLIC_REALSCOUT_AGENT_ENCODED_ID ?? DEFAULT_AGENT,
  );

  const markup = `<realscout-office-listings agent-encoded-id="${agentId}" sort-order="PRICE_HIGH" listing-status="For Sale" property-types=",TC"></realscout-office-listings>`;

  return (
    <section
      aria-labelledby="listings-heading"
      className="border-t border-palms-gold/15 bg-linear-to-b from-palms-charcoal via-palms-charcoal to-palms-charcoal-elevated py-16 md:py-20"
      id="listings"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionEyebrow>Office listings</SectionEyebrow>
        <h2
          className="font-display mt-6 text-3xl font-semibold tracking-tight text-palms-cream md:text-4xl"
          id="listings-heading"
        >
          Featured listings
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-palms-cream/70">
          Availability and details are provided by the listing service. For filters and saved
          criteria, use the curated RealScout search ({siteContact.agentName}, listing specialist and
          team leader for Palms Place).
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
          <ButtonAnchor
            aria-label="Open Dr. Jan Duffy’s curated home search on RealScout in a new tab"
            href={sharedSearchUrl}
            variant="primary"
          >
            Open curated home search
          </ButtonAnchor>
          <p className="text-xs text-palms-cream/50 sm:max-w-xs">
            Opens RealScout in a new tab. Same URL is linked from the footer as &quot;Search homes.&quot;
          </p>
        </div>

        <div className="mt-10 rounded-2xl border border-palms-gold/10 bg-palms-charcoal-muted/40 p-4 shadow-inner shadow-black/20 backdrop-blur-sm md:p-6">
          <div
            className="min-h-[240px] w-full"
            dangerouslySetInnerHTML={{ __html: markup }}
          />
        </div>

        <p className="mt-6 max-w-3xl text-xs leading-relaxed text-palms-cream/55">
          MLS disclaimer: Information deemed reliable but not guaranteed. Listing details (price,
          status, HOA, square footage) must be verified with your agent and official sources. Not
          intended as legal or tax advice.
        </p>
      </div>
    </section>
  );
}
