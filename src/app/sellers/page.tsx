import type { Metadata } from "next";
import { SellersPageBody } from "@/components/marketing/sellers-page-body";
import { canonicalMetadata } from "@/lib/metadata-helpers";
import { siteContact } from "@/lib/site-contact";

export const metadata: Metadata = {
  title: "Sell Palms Place & Las Vegas condos | Seller guide",
  description: `Listing prep, valuation conversations, and the Palms Place selling field guide with ${siteContact.agentName}, ${siteContact.agentTitle}. ${siteContact.brokerage}.`,
  ...canonicalMetadata("/sellers"),
};

export default function SellersPage() {
  return <SellersPageBody />;
}
