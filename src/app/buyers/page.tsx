import type { Metadata } from "next";
import { BuyersPageBody } from "@/components/marketing/buyers-page-body";
import { canonicalMetadata } from "@/lib/metadata-helpers";
import { siteContact } from "@/lib/site-contact";

export const metadata: Metadata = {
  title: "Buy Palms Place & Las Vegas high-rise condos | Buyer guide",
  description: `Search Palms Place condos for sale, use buyer calculators, and tour with ${siteContact.buyerSpecialistName}, ${siteContact.buyerSpecialistTitle}. ${siteContact.brokerage}.`,
  ...canonicalMetadata("/buyers"),
};

export default function BuyersPage() {
  return <BuyersPageBody />;
}
