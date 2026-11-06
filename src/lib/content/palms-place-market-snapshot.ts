/**
 * Palms Place closed-sales snapshot from Las Vegas REALTORS® MLS (via Rechat),
 * pulled 2026-11-05 by Dr. Jan Duffy's office. Real figures only: no estimates,
 * no unit numbers or addresses of other agents' sales. Replace the whole object
 * (figures + asOf) when a new pull is available; do not edit numbers piecemeal.
 */

export const palmsPlaceMarketSnapshot = {
  asOf: "2026-11-05",
  asOfLabel: "November 5, 2026",
  periodLabel: "November 2025 to November 5, 2026",
  source: "Las Vegas REALTORS® MLS via Rechat",
  building: "Palms Place, 4381 W Flamingo Rd",
  summary: [
    { label: "Closed sales", value: "42" },
    { label: "Median sold price", value: "$210,500" },
    { label: "Median price per square foot", value: "$318" },
    { label: "Median days on market", value: "51" },
  ],
  oneBedroomPlan: {
    title: "Recent closed sales: one-bedroom, 1,220 sq ft floor plan",
    note: "Same floor plan as Palms Place #8322, which is listed at $339,900.",
    sales: [
      { closed: "Oct 9, 2026", price: "$320,000" },
      { closed: "Oct 9, 2026", price: "$320,000" },
      { closed: "Sep 1, 2026", price: "$355,000" },
      { closed: "Jul 20, 2026", price: "$490,000" },
      { closed: "Jul 9, 2026", price: "$340,000" },
      { closed: "Apr 30, 2026", price: "$388,000" },
    ],
  },
  disclaimer:
    "Based on information from Las Vegas REALTORS® MLS for the period shown, as of November 5, 2026. Information is deemed reliable but not guaranteed. Closed-sale figures describe past sales in the building, not the value of any one unit. Unit numbers and addresses of other sales are not shown.",
} as const;
