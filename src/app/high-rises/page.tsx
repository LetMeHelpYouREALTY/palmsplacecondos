import type { Metadata } from "next";
import { HighRisesPageBody } from "@/components/marketing/high-rises-page-body";
import { canonicalMetadata } from "@/lib/metadata-helpers";

export const metadata: Metadata = {
  title: "Las Vegas Strip high-rise condos for sale | Tower comparison",
  description:
    "Compare Strip high-rise condos and HOA context—including Palms Place—with live search, field guides, and tours with the local Las Vegas team.",
  ...canonicalMetadata("/high-rises"),
};

export default function HighRisesPage() {
  return <HighRisesPageBody />;
}
