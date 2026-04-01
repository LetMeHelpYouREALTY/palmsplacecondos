/**
 * Factual outbound link to the Palms Casino Resort (hotel) site—not affiliated with this brokerage site.
 */
export function PalmsBridgeSection() {
  return (
    <section
      aria-labelledby="palms-bridge-heading"
      className="border-t border-palms-gold/20 bg-palms-charcoal-muted px-6 py-16 md:py-20"
    >
      <div className="mx-auto max-w-5xl md:flex md:items-center md:justify-between md:gap-12">
        <div>
          <p className="font-display text-sm font-semibold uppercase tracking-[0.35em] text-palms-gold">
            Palms
          </p>
          <h2
            className="font-display mt-2 text-3xl font-semibold tracking-tight text-palms-cream md:text-4xl"
            id="palms-bridge-heading"
          >
            Casino Resort
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-palms-cream/85">
            Gaming, dining, and entertainment are steps away at Palms Casino Resort—separate from
            condominium ownership and HOA rules.
          </p>
        </div>
        <div className="mt-8 shrink-0 md:mt-0">
          <a
            className="inline-flex items-center justify-center rounded-md bg-palms-gold px-6 py-3 text-sm font-semibold text-palms-charcoal transition-colors hover:bg-palms-gold-hover"
            href="https://www.palms.com/stay/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Palms resort stays
          </a>
        </div>
      </div>
    </section>
  );
}
