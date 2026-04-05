import type { Metadata } from "next";
import { CondosPageBody } from "@/components/marketing/condos-page-body";
import { canonicalMetadata } from "@/lib/metadata-helpers";
import { siteContact } from "@/lib/site-contact";

export const metadata: Metadata = {
  title: "Condos for sale on the Las Vegas Strip & high-rises | Palms Place",
  description: `Luxury condos and high-rise condos on and near the Las Vegas Strip, including Palms Place for sale—plus how Strip-adjacent towers differ from downtown Las Vegas condos. Dr. Jan Duffy (listing) and ${siteContact.buyerSpecialistName} (${siteContact.buyerSpecialistTitle}), ${siteContact.brokerage}.`,
  ...canonicalMetadata("/condos"),
};

export default function CondosPage() {
  return <CondosPageBody />;
}
