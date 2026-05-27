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

/** `/buyers` — must mirror visible FAQ on that page. */
export const buyersPageFaq: FaqItem[] = [
  {
    question: "Who should start on the Palms Place buyer guide?",
    answer:
      "Buyers comparing Strip high-rises or targeting Palms Place specifically. Use this hub for search entry, calculators, and team contacts—then read the buying field guide before your first tower tour.",
  },
  {
    question: "Does Chance Fuller handle all Palms Place buyer tours?",
    answer:
      "Chance Fuller is the Palms Place Buyers Specialist for showings, HOA questions, and offer strategy. Listing and marketing conversations typically route through Dr. Jan Duffy as listing lead.",
  },
  {
    question: "Where do I search live Palms Place inventory?",
    answer:
      "Use the on-site search page or the team’s RealScout link from this hub. Inventory changes daily—confirm status and HOA documents with your agent before you write.",
  },
];

/** `/communities` — must mirror visible FAQ on that page. */
export const communitiesPageFaq: FaqItem[] = [
  {
    question: "How do Las Vegas communities compare to Palms Place?",
    answer:
      "Master-planned and guard-gated neighborhoods emphasize yards, schools, and drive times. Palms Place is a Strip-adjacent high-rise with HOA amenities and lock-and-leave living—compare both product types before you tour.",
  },
  {
    question: "Should I tour communities and high-rises in the same weekend?",
    answer:
      "Only if you are genuinely open to both lifestyles. HOA rules, noise, parking, and monthly carry differ sharply—your agent can sequence tours so you compare like-for-like monthly costs.",
  },
  {
    question: "Where do Summerlin and Henderson fit this hub?",
    answer:
      "Use the luxury homes page for estate and single-family context in Summerlin and Henderson, then contrast with Strip condos on the high-rises and Palms Place building guides.",
  },
];

/** `/high-rises` — must mirror visible FAQ on that page. */
export const highRisesPageFaq: FaqItem[] = [
  {
    question: "Is Palms Place the only Strip high-rise on this page?",
    answer:
      "No. Buyers often cross-shop multiple towers. This page explains how to compare HOAs and tours, with Palms Place–specific detail on the building guide and comparison field guide.",
  },
  {
    question: "What should I compare besides list price?",
    answer:
      "HOA dues, parking, rental caps, reserve studies, and assessment history. List price alone rarely predicts monthly carry in Las Vegas towers.",
  },
  {
    question: "Can I search all Strip towers in one MLS filter?",
    answer:
      "Live search can filter by area and property type, but each building’s rules still require disclosure review. Use RealScout for inventory and your agent for tower-specific due diligence.",
  },
];

/** `/homes` — must mirror visible FAQ on that page. */
export const homesPageFaq: FaqItem[] = [
  {
    question: "Does this team sell single-family homes beyond Palms Place?",
    answer:
      "Yes—buyers often compare valley single-family homes with Strip high-rises. This page covers Las Vegas houses; use the condos and Palms Place guides if a tower might fit better.",
  },
  {
    question: "When should I choose a house instead of Palms Place?",
    answer:
      "When schools, yard space, or neighborhood character matter more than resort-style amenities and Strip proximity. Monthly payment comparisons should include HOA vs maintenance, not list price alone.",
  },
  {
    question: "How do I search Las Vegas homes for sale here?",
    answer:
      "Open the team’s RealScout search for live MLS inventory, or browse popular searches for price-band shortcuts and topic hubs before you schedule tours.",
  },
];

/** `/guide/buying-palms-place` — must mirror visible FAQ on that page. */
export const buyingGuidePageFaq: FaqItem[] = [
  {
    question: "Is this guide official Palms Place or HOA documentation?",
    answer:
      "No. It is a brokerage field guide based on tours and transactions—always verify rental rules, fees, and assessments in HOA resale certificates and listing disclosures.",
  },
  {
    question: "What is the first document to request before an offer?",
    answer:
      "HOA resale package and governing documents, plus a clear picture of parking, storage, and any special assessments. Your agent coordinates timing so you are not guessing from marketing copy alone.",
  },
  {
    question: "Who handles buyer tours versus listing marketing?",
    answer:
      "Buyer tours and offer strategy often start with Chance Fuller, Palms Place Buyers Specialist. Listing preparation and marketing typically route through Dr. Jan Duffy as listing lead.",
  },
];

/** `/guide/compare-strip-high-rises` — must mirror visible FAQ on that page. */
export const compareStripGuidePageFaq: FaqItem[] = [
  {
    question: "Should I tour Palms Place first or another Strip tower?",
    answer:
      "Tour order depends on your must-haves—noise, parking, furnished inventory, and HOA rental rules. This guide suggests a comparison framework; your agent sequences buildings to match your criteria.",
  },
  {
    question: "Are HOA fees comparable across Strip high-rises?",
    answer:
      "Rarely. Amenities, reserves, and assessment history differ by tower. Compare monthly carry with disclosures side by side, not marketing averages from third-party sites.",
  },
  {
    question: "Does comparing towers replace the Palms Place building guide?",
    answer:
      "No. Use the building guide for Palms Place–specific address, amenities, and inventory context. This comparison guide helps you evaluate multiple towers on the same tour weekend.",
  },
];

/** `/guide/palms-place-unit-types` — must mirror visible FAQ on that page. */
export const unitTypesGuidePageFaq: FaqItem[] = [
  {
    question: "Are published square-footage ranges exact for every unit?",
    answer:
      "No. Marketing ranges are starting points—confirm square footage, storage, and parking on each listing record and during your tour.",
  },
  {
    question: "Do studios and one-bedrooms have the same HOA rules?",
    answer:
      "They are in the same association, but furnished inventory, views, and parking assignments still vary by unit. Read the resale certificate for the specific unit you are buying.",
  },
  {
    question: "Where do penthouses fit a first-time Palms Place tour?",
    answer:
      "Tour studios or one-bedrooms first if budget and lifestyle match. Penthouse layouts differ in ceiling height, outdoor space, and carry—confirm on listing data, not building averages.",
  },
];

/** `/guide/selling-palms-place` — must mirror visible FAQ on that page. */
export const sellingGuidePageFaq: FaqItem[] = [
  {
    question: "When should a Palms Place seller order HOA documents?",
    answer:
      "Early in listing prep so marketing, pricing, and buyer questions reflect accurate rental rules, reserves, and assessments. Delays in HOA packets can slow escrow—not just marketing.",
  },
  {
    question: "Does furnished staging change how buyers evaluate HOA rules?",
    answer:
      "Furnished presentation can highlight lifestyle but does not replace disclosures. Buyers still underwrite rental caps, fees, and sound issues from official documents.",
  },
  {
    question: "Who leads Palms Place listing strategy?",
    answer:
      "Dr. Jan Duffy leads listing marketing and positioning; buyer inquiries on active listings are coordinated per brokerage workflow. Use the sell page for valuation conversations.",
  },
];
