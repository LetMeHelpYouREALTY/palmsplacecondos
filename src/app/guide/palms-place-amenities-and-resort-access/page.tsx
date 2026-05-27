import type { Metadata } from "next";
import { GuidePalmsPlaceAmenitiesPageBody } from "@/components/marketing/guide-palms-place-amenities-page-body";
import { canonicalMetadata } from "@/lib/metadata-helpers";

const path = "/guide/palms-place-amenities-and-resort-access";

export const metadata: Metadata = {
  title: "Palms Place amenities & resort access | Owner guide",
  description:
    "Palms Place pool, fitness, and resort-adjacent access—what owners should verify in HOA documents before buying on West Flamingo near the Las Vegas Strip.",
  ...canonicalMetadata(path),
};

export default function GuidePalmsPlaceAmenitiesPage() {
  return <GuidePalmsPlaceAmenitiesPageBody />;
}
