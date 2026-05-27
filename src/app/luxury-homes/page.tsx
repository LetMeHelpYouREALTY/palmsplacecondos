import type { Metadata } from "next";
import { LuxuryHomesPageBody } from "@/components/marketing/luxury-homes-page-body";
import { canonicalMetadata } from "@/lib/metadata-helpers";
import { siteContact } from "@/lib/site-contact";

export const metadata: Metadata = {
  title: "Las Vegas luxury homes for sale | Summerlin & Henderson",
  description: `Luxury homes and estates in Summerlin, Henderson, and the Las Vegas valley—compare with Palms Place high-rises. ${siteContact.buyerSpecialistName}, ${siteContact.brokerage}.`,
  ...canonicalMetadata("/luxury-homes"),
};

export default function LuxuryHomesPage() {
  return <LuxuryHomesPageBody />;
}
