import type { Metadata } from "next";
import { LuxuryHomesPageBody } from "@/components/marketing/luxury-homes-page-body";
import { canonicalMetadata } from "@/lib/metadata-helpers";

export const metadata: Metadata = {
  title: "Luxury homes in Summerlin, Henderson & Las Vegas",
  description:
    "Luxury homes and estates in Las Vegas, Summerlin, and Henderson—buyer representation with Chance Fuller and the Palms Place team.",
  ...canonicalMetadata("/luxury-homes"),
};

export default function LuxuryHomesPage() {
  return <LuxuryHomesPageBody />;
}
