/**
 * "Can I get a mortgage at Palms Place?" — plain-language financing overview.
 * General information only: names no lenders, quotes no rates or terms, and is
 * not lending or legal advice. Sources: Fannie Mae Selling Guide B4-2.1-03
 * (projects that operate as hotels), Freddie Mac Guide 5701.3(b) (condominium
 * hotels), FHA condo rules (condotels ineligible) — checked 2026-11-06.
 */

export const palmsPlaceMortgageGuideMeta = {
  title: "Can I get a mortgage at Palms Place? Financing a condo-hotel unit",
  description:
    "Palms Place is a condo-hotel, so most standard mortgages do not fit. Buyers usually pay cash or use a portfolio lender. What to ask before you write an offer.",
  datePublished: "2026-11-06",
  dateModified: "2026-11-06",
};

export const palmsPlaceMortgageIntro = {
  headline: "Can I get a mortgage at Palms Place?",
  lede:
    "Usually not a standard one. Palms Place is a condo-hotel: the units are individually owned, but the tower runs with hotel-style services and a rental program. Most conventional, FHA, and VA loans do not lend in buildings like that. Buyers typically pay cash or work with a portfolio lender that keeps the loan on its own books. This page explains why, in plain terms. It is general information, not lending advice.",
};

export const palmsPlaceMortgageSections: {
  id: string;
  question: string;
  answer: string;
}[] = [
  {
    id: "non-warrantable",
    question: "What does non-warrantable mean for a Palms Place condo?",
    answer:
      "A warrantable condo meets the building rules that Fannie Mae and Freddie Mac set for the loans they buy. Both list condo-hotels as ineligible. Their guides point to hotel-style operation: a front desk, daily housekeeping, a rental program, or a management company that runs units like hotel rooms. A building with those features is called non-warrantable. The rule is about the building, not about your credit or income.",
  },
  {
    id: "fha-va",
    question: "Can I use an FHA or VA loan at Palms Place?",
    answer:
      "Generally no. FHA condo rules exclude condo-hotels and buildings managed as hotels. VA loans also depend on the building qualifying. If someone tells you a government-backed loan will work here, ask them to confirm in writing that the building is eligible before you rely on it.",
  },
  {
    id: "how-buyers-pay",
    question: "How do most Palms Place buyers pay?",
    answer:
      "Most pay cash. The other common path is a portfolio lender, meaning a bank or lender that keeps the loan instead of selling it to Fannie Mae or Freddie Mac. Some investors also look at loans that qualify on the unit's rental income. Each lender sets its own down payment, rate, and terms, so compare written quotes. We do not recommend a specific lender on this site.",
  },
  {
    id: "before-offer",
    question: "What should I confirm before I write an offer?",
    answer:
      "Get a written statement from your lender that it will lend in this specific building. Ask what it needs from the HOA: budget, reserves, insurance, and the rental program agreement. Ask how it counts the HOA dues in your monthly payment. If you are paying cash, have proof of funds ready. A clean, fast close often matters to sellers in this building.",
  },
  {
    id: "appraisal-timing",
    question: "Does the condo-hotel status affect appraisal or closing time?",
    answer:
      "It can. Fewer lenders work in condo-hotels, so lender review of the building can add time. Plan your inspection, HOA document review, and financing deadlines with that in mind. Your agent can build those dates into the offer.",
  },
];

export const palmsPlaceMortgageChecklist = {
  title: "Questions to ask a lender about a Palms Place unit",
  items: [
    "Will you lend on a condo-hotel unit at Palms Place, 4381 W Flamingo Rd? Please confirm in writing.",
    "What down payment and reserves do you require for this building?",
    "Which HOA documents do you need, and how long does your building review take?",
    "Does the rental program or hotel management agreement change your terms?",
    "How do you count HOA dues and any rental income when you qualify me?",
  ],
};
