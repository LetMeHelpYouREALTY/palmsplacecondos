import type { FaqItem } from "@/lib/schema";

/**
 * Homepage FAQ — visible copy and FAQPage JSON-LD must stay in sync (single source).
 * Answers are general guidance, not legal/tax advice.
 */
export const homeFaqItems: FaqItem[] = [
  {
    question: "What is Palms Place?",
    answer:
      "Palms Place is a high-rise residential tower near the Las Vegas Strip offering condo ownership with resort-adjacent access. Listing availability, pricing, and HOA details change often—confirm anything important with your agent and official disclosures.",
  },
  {
    question: "How do I search for homes with the Palms Place team?",
    answer:
      "Use the curated RealScout home search linked from this site to filter by price, property type, and status (managed with Dr. Jan Duffy, listing specialist and team leader). You can also browse featured office listings on this page; MLS-backed details should always be verified before you make an offer.",
  },
  {
    question: "Who helps buyers vs. sellers at Palms Place?",
    answer:
      "Dr. Jan Duffy, Realtor, is the listing specialist and team leader for Palms Place. Chance Fuller is the buyers specialist—buyers often start with Chance for showings and offer strategy; listing and marketing conversations typically route through Dr. Jan. This is general guidance, not legal or tax advice.",
  },
  {
    question: "Where does listing information come from?",
    answer:
      "Listing widgets on this site are provided through the brokerage’s listing tools. Information is deemed reliable but not guaranteed. Verify price, square footage, HOA fees, and status with your agent and official sources.",
  },
];
