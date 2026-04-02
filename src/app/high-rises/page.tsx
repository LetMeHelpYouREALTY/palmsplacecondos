import type { Metadata } from "next";
import { HighRisesPageBody } from "@/components/marketing/high-rises-page-body";
import { canonicalMetadata } from "@/lib/metadata-helpers";

export const metadata: Metadata = {
  title: "Las Vegas Strip high-rise condos & towers",
  description:
    "High-rise condos on and near the Las Vegas Strip, including Palms Place—amenities, floor-plan context, and how to search live inventory.",
  ...canonicalMetadata("/high-rises"),
};

export default function HighRisesPage() {
  return <HighRisesPageBody />;
}
