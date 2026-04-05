import type { Metadata } from "next";
import { HighRisesPageBody } from "@/components/marketing/high-rises-page-body";
import { canonicalMetadata } from "@/lib/metadata-helpers";

export const metadata: Metadata = {
  title: "Las Vegas Strip & high-rise condos for sale | Towers near the Strip",
  description:
    "Vegas high-rise condos for sale on and near the Las Vegas Strip—luxury condos, tower amenities, HOA context, and how Palms Place compares to other Strip-area high-rises. Search live inventory with your agent.",
  ...canonicalMetadata("/high-rises"),
};

export default function HighRisesPage() {
  return <HighRisesPageBody />;
}
