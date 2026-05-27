import type { FaqItem } from "@/lib/schema";

/** `/featured` — must mirror visible FAQ on that page. */
export const featuredPageFaq: FaqItem[] = [
  {
    question: "Why are there no static listing cards on the featured page?",
    answer:
      "MLS inventory changes daily. This page explains how spotlight and new-to-market homes are shared through live RealScout search and agent-curated lists—not a frozen grid that can go stale or misstate availability.",
  },
  {
    question: "How do I get alerts for new Palms Place listings?",
    answer:
      "Open the team’s RealScout search, set your price and property filters, and save the search with your agent. You can also contact the office to discuss building-specific criteria before you tour.",
  },
  {
    question: "Can I see furnished or investor-ready units in featured inventory?",
    answer:
      "Yes, when they are actively listed. Furnished and rental-policy questions depend on HOA documents—review disclosures with your agent rather than assuming every featured unit allows the same use.",
  },
];

/** `/connect` — must mirror visible FAQ on that page. */
export const connectPageFaq: FaqItem[] = [
  {
    question: "How is the connect page different from contact?",
    answer:
      "Connect focuses on staying in touch—office NAP, social channels, and follow-up paths. Contact is where you schedule calls, tours, and buyer or seller conversations with the Palms Place team.",
  },
  {
    question: "Will I get spam if I follow Palms Place on social?",
    answer:
      "Social posts highlight building context, tours, and market notes for Las Vegas high-rise buyers. For private listing conversations, use phone or email on the contact page rather than public comments.",
  },
  {
    question: "Does the office address match Google Business Profile?",
    answer:
      "Yes—the same office NAP shown here should match GBP and visible footer copy. If you see a discrepancy after a GBP update, tell the team so the site and profile stay aligned.",
  },
];

/** `/under-500k` — must mirror visible FAQ on that page. */
export const under500kPageFaq: FaqItem[] = [
  {
    question: "Are there Palms Place condos under $500,000?",
    answer:
      "Sometimes, depending on market conditions, floor plan, and furnishing. List price is only one line item—HOA dues, assessments, and parking can change monthly carry. Search live inventory and tour with an agent before you assume a band is available.",
  },
  {
    question: "Should I compare HOA fees when shopping under $500K?",
    answer:
      "Yes. Two condos near the same list price can have very different HOA stacks, reserves, and rental rules. High-rise buyers should model PITI plus HOA, not list price alone.",
  },
  {
    question: "Is single-family or condo better under $500K in Las Vegas?",
    answer:
      "It depends on lifestyle, commute, and how much you value lock-and-leave amenities versus yard space. Compare high-rise options on the condos hub with single-family inventory on the homes page before you narrow tours.",
  },
];

/** `/buyers/calculators` — must mirror visible FAQ on that page. */
export const buyerCalculatorsPageFaq: FaqItem[] = [
  {
    question: "Does this site provide live mortgage rate quotes?",
    answer:
      "No. Rates and loan programs change with markets and borrower profile. Use this page to prepare questions, then confirm numbers with a licensed lender before you remove financing contingencies.",
  },
  {
    question: "What HOA costs should Palms Place buyers model?",
    answer:
      "Monthly HOA, any parking or storage fees, and potential special assessments shown in resale certificates. Your agent can help you request HOA packets early—see the buying field guide for due diligence steps.",
  },
  {
    question: "When should I get pre-approved before touring?",
    answer:
      "Before writing offers on competitive Strip inventory. Pre-approval clarifies your price band and helps you compare monthly carry across studios, one-bedrooms, and furnished resales realistically.",
  },
];

/** `/popular-searches` — must mirror visible FAQ on that page. */
export const popularSearchesPageFaq: FaqItem[] = [
  {
    question: "What is the popular searches page for?",
    answer:
      "It groups high-intent topics—Palms Place, Strip towers, luxury homes, and price bands—into descriptive internal links so you can jump to the right guide without searching the whole site.",
  },
  {
    question: "Should I use popular searches or RealScout first?",
    answer:
      "Start here if you are exploring topics. Open RealScout when you are ready to filter live MLS inventory, save searches, and work with the team on alerts.",
  },
  {
    question: "Do these links replace the Palms Place building guide?",
    answer:
      "No. The building guide explains address, amenities, and buying context. Popular searches are shortcuts to topic pages and live search—not a substitute for tower-specific due diligence.",
  },
];
