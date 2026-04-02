import Link from "next/link";
import { SectionEyebrow } from "@/components/shared/section-heading";
import { siteContact } from "@/lib/site-contact";

/**
 * Commercial-intent section — avoid fabricated stats; align with MLS/brokerage disclaimers.
 */
export function WhyBuySection() {
  return (
    <section
      aria-labelledby="why-buy-heading"
      className="border-t border-palms-gold/15 bg-palms-charcoal-muted/30 px-6 py-20 md:py-28"
    >
      <div className="mx-auto max-w-3xl">
        <SectionEyebrow>Why buy</SectionEyebrow>
        <h2
          className="font-display mt-6 text-3xl font-semibold tracking-tight text-palms-cream md:text-4xl"
          id="why-buy-heading"
        >
          Why Buy a Palms Place Condo?
        </h2>
        <div className="mt-8 space-y-6 text-lg leading-relaxed text-palms-cream/88">
          <p>
            Buyers choose Palms Place condos for sale when they want Strip-adjacent residences with
            HOA amenities Palms Place is known for—pool and outdoor living, concierge-style
            convenience, and a lock-and-leave Las Vegas condo lifestyle. Many owners also view the
            tower as a condo investment Las Vegas buyers use for a second home or long-term hold;
            always confirm numbers with your lender and your agent.
          </p>
          <p>
            Palms Place floor plans range from efficient studios to larger one-bedroom layouts. Work
            with {siteContact.agentName} ({siteContact.agentTitle}) and{" "}
            {siteContact.buyerSpecialistName}, {siteContact.buyerSpecialistTitle}, at{" "}
            {siteContact.brokerage} to compare Las Vegas high-rise condos, review disclosures, and
            tour Palms Casino Resort residences access and HOA rules before you write an offer.
          </p>
          <p>
            <Link className="font-medium text-palms-gold underline-offset-4 hover:underline" href="/condos">
              Browse all Las Vegas high-rise condos
            </Link>{" "}
            to compare inventory, review{" "}
            <Link className="font-medium text-palms-gold underline-offset-4 hover:underline" href="/luxury-homes">
              Luxury homes in Summerlin and Henderson
            </Link>{" "}
            for contrast, and read the{" "}
            <Link className="font-medium text-palms-gold underline-offset-4 hover:underline" href="/communities">
              Las Vegas condo communities overview
            </Link>
            . When you are ready to tour,{" "}
            <Link className="font-medium text-palms-gold underline-offset-4 hover:underline" href="/contact">
              Schedule a Palms Place showing with Dr. Jan
            </Link>
            . Thinking about selling? See{" "}
            <Link className="font-medium text-palms-gold underline-offset-4 hover:underline" href="/sell">
              Sell your Palms Place condo — free valuation
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
