import type { FaqItem } from "@/lib/schema";
import { siteContact } from "@/lib/site-contact";

/**
 * Homepage FAQ — visible copy and FAQPage JSON-LD must stay in sync (single source).
 * Answers lead with a direct response (AEO); general guidance only — not legal/tax advice.
 */
export const homeFaqItems: FaqItem[] = [
  {
    question: "Are there Palms Place condos for sale?",
    answer:
      "Yes—active Palms Place condos for sale are listed through the brokerage search tools on this site and change daily. Use the curated RealScout search or featured office listings, then confirm status, price, and HOA fees with your agent and official listing records before you make an offer.",
  },
  {
    question: "Is Palms Place on the Las Vegas Strip?",
    answer:
      "Palms Place is a residential high-rise near the Las Vegas Strip, adjacent to Palms Casino Resort—not inside the resort corridor itself. Driving directions, parking, and guest-access rules can differ from hotel guest flows; verify current HOA and management materials with your agent.",
  },
  {
    question: "What types of Palms Place condos are for sale?",
    answer:
      "Inventory typically includes efficient studios and larger one-bedroom layouts, with select upper-floor and penthouse-style residences when available. Floor plans, views, and HOA assessments vary by unit—compare live listings and disclosures with Dr. Jan Duffy before touring or writing an offer.",
  },
  {
    question: "Where is Palms Place in Las Vegas?",
    answer:
      "Palms Place is a high-rise near the Las Vegas Strip, adjacent to Palms Casino Resort in Las Vegas, Nevada. For tours and paperwork, use the team's office address shown in the site footer and contact page—it must match the Google Business Profile for this Palms Place practice.",
  },
  {
    question: "What is Palms Place?",
    answer:
      "Palms Place is a high-rise residential tower near the Las Vegas Strip offering condo ownership with resort-adjacent access. Listing availability, pricing, and HOA details change often—confirm anything important with your agent and official disclosures.",
  },
  {
    question: "How do I search Palms Place condos for sale?",
    answer:
      "Start with the curated RealScout home search linked from this site to filter by price, property type, and status (managed with Dr. Jan Duffy, listing specialist and team leader). You can also browse featured office listings on the homepage; verify every field with your agent before you make an offer.",
  },
  {
    question: "Who helps buyers vs. sellers at Palms Place?",
    answer:
      "Dr. Jan Duffy, Realtor, is the listing specialist, team leader, and Palms Place Buyers Specialist. Buyers and sellers both work with Dr. Jan for showings, offer strategy, listing, and marketing. This is general guidance, not legal or tax advice.",
  },
  {
    question: "How do I contact the Palms Place real estate team?",
    answer: siteContact.phone
      ? `Call ${siteContact.phone} or email ${siteContact.emailGeneral ?? siteContact.emailListings ?? "the team"} for Palms Place tours and listing questions. Office hours: ${siteContact.officeHoursLine ?? "see the contact page"}. ${siteContact.brokerage}.`
      : "Use the contact page on this site for Palms Place tours and listing questions. Office hours and phone are listed there and must match this site's Google Business Profile.",
  },
  {
    question: "Where does listing information come from?",
    answer:
      "Listing widgets on this site are provided through the brokerage's listing tools. Information is deemed reliable but not guaranteed. Verify price, square footage, HOA fees, and status with your agent and official sources.",
  },
];
