import type { Metadata } from "next";
import { PopularSearchesPageBody } from "@/components/marketing/popular-searches-page-body";
import { canonicalMetadata } from "@/lib/metadata-helpers";

export const metadata: Metadata = {
  title: "Popular searches",
  description:
    "High-intent Las Vegas real estate searches—Palms Place, Strip high-rises, condos, and price bands.",
  ...canonicalMetadata("/popular-searches"),
};

export default function PopularSearchesPage() {
  return <PopularSearchesPageBody />;
}
