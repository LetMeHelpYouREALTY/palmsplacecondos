import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/layouts/page-placeholder";
import { canonicalMetadata } from "@/lib/metadata-helpers";

export const metadata: Metadata = {
  title: "Popular searches",
  description:
    "High-intent Las Vegas real estate searches—Palms Place, Strip high-rises, condos, and price bands.",
  ...canonicalMetadata("/popular-searches"),
};

export default function PopularSearchesPage() {
  return (
    <PagePlaceholder
      description="Curated shortcuts to high-intent searches will be listed here."
      path="/popular-searches"
      title="Popular Searches"
    />
  );
}
