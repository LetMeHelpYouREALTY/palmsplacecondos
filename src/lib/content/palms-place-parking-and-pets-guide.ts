/**
 * Parking and pet rules at Palms Place — verification guide, not a published rulebook.
 * Do not invent stall counts, weight limits, breed bans, or HOA dollar amounts.
 */

export const palmsPlaceParkingAndPetsGuideMeta = {
  title: "Palms Place parking and pets — what to verify before you offer",
  description:
    "How Dr. Jan Duffy checks Palms Place parking assignments and pet rules in the resale certificate at 4381 W Flamingo Road—before you waive a document contingency.",
  datePublished: "2026-10-12",
  dateModified: "2026-10-12",
};

export const palmsPlaceParkingAndPetsIntro = {
  headline: "Palms Place parking and pet rules — read the packet, not a slogan",
  lede:
    "Buyers ask two questions this site did not answer on its own page: what parking comes with the condo, and whether pets are allowed. Both answers live in the HOA packet for that unit. This guide is the check Dr. Jan Duffy runs on Palms Place tours so a listing remark is not treated as the rule.",
};

export const palmsPlaceParkingAndPetsChecklist: string[] = [
  "Write down any parking space number that appears in the listing remarks.",
  "Match that number to the HOA assignment letter or deed exhibit in the resale package.",
  "Ask whether valet, self-park, and guest parking are included or billed apart from the assessment.",
  "Read the pet rules in the same packet, including board minutes that change them.",
  "Keep the document contingency until those pages match what the listing claimed.",
];

export const palmsPlaceParkingAndPetsSections: { id: string; question: string; answer: string }[] = [
  {
    id: "parking-unit-specific",
    question: "What parking comes with a Palms Place condo?",
    answer:
      "It depends on the unit. Palms Place parking can be a deeded stall, an assigned space, valet only, or a mix, and two residences on the same floor can differ. Start with the listing remarks, then the resale certificate. The check is whether the space number on the flyer appears on the assignment letter. If it does not, the remark is not the document you will close on. Guest and valet lines may sit outside the monthly assessment.",
  },
  {
    id: "pets-in-the-packet",
    question: "Does Palms Place allow pets?",
    answer:
      "Only the governing documents for the unit you are buying can answer that. Do not rely on a Facebook thread, a hotel pet fee, or a competitor page that names a weight or breed. Those limits change, and this site will not invent them. Dr. Jan Duffy reads the pet section of the resale certificate with you before an offer.",
  },
  {
    id: "assistance-animals",
    question: "Where do assistance-animal questions belong?",
    answer:
      "With the association and your attorney. An assistance animal is a legal question, separate from a general pet rule in the house regulations. This page does not grant or deny that request, and it is not legal advice.",
  },
  {
    id: "remarks-vs-letter",
    question: "Why can the listing and the assignment letter disagree?",
    answer:
      "Marketing copy often says valet is included because a prior owner used valet. The assignment letter is the page that names a space. Bring both to the tour at 4381 W Flamingo Road and reconcile them before you write. The same habit applies to pet rules copied from a neighbor’s closing.",
  },
];
