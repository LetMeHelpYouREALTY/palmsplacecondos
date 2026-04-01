/**
 * RealScout office listings web component. Script is loaded once in root layout.
 * @see https://support.realscout.com — widget and agent ID configuration.
 */
const DEFAULT_AGENT = "QWdlbnQtMjI1MDUw";

function safeAgentEncodedId(value: string): string {
  return value.replace(/["'<>]/g, "").trim() || DEFAULT_AGENT;
}

export function RealScoutOfficeListingsEmbed() {
  const agentId = safeAgentEncodedId(
    process.env.NEXT_PUBLIC_REALSCOUT_AGENT_ENCODED_ID ?? DEFAULT_AGENT,
  );

  const markup = `<realscout-office-listings agent-encoded-id="${agentId}" sort-order="PRICE_HIGH" listing-status="For Sale" property-types=",TC"></realscout-office-listings>`;

  return (
    <section
      aria-labelledby="listings-heading"
      className="border-t border-palms-gold/15 bg-palms-charcoal py-12 md:py-16"
      id="listings"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 max-w-2xl">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-palms-gold">
            Office listings
          </p>
          <h2
            className="font-display mt-2 text-3xl font-semibold tracking-tight text-palms-cream md:text-4xl"
            id="listings-heading"
          >
            Featured listings
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-palms-cream/70">
            Availability and details are provided by the listing service.
          </p>
        </div>

        <div
          className="min-h-[240px] w-full"
          dangerouslySetInnerHTML={{ __html: markup }}
        />

        <p className="mt-6 max-w-3xl text-xs leading-relaxed text-palms-cream/55">
          MLS disclaimer: Information deemed reliable but not guaranteed. Listing details (price,
          status, HOA, square footage) must be verified with your agent and official sources. Not
          intended as legal or tax advice.
        </p>
      </div>
    </section>
  );
}
