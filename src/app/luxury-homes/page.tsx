import type { Metadata } from "next";
import { LuxuryHomesPageBody } from "@/components/marketing/luxury-homes-page-body";
import { canonicalMetadata } from "@/lib/metadata-helpers";
import { siteContact } from "@/lib/site-contact";

export const metadata: Metadata = {
  title: "Las Vegas luxury homes for sale | Summerlin, Henderson & estates",
  description: `Las Vegas luxury homes for sale—estates, executive homes, and guard-gated neighborhoods in Summerlin, Henderson, and the valley. Buyer tours with ${siteContact.buyerSpecialistName} and the Palms Place team, ${siteContact.brokerage}.`,
  ...canonicalMetadata("/luxury-homes"),
};

export default function LuxuryHomesPage() {
  return <LuxuryHomesPageBody />;
}
