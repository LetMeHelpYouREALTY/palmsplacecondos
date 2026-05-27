import type { Metadata } from "next";
import { GuidePalmsPlaceUnitTypesPageBody } from "@/components/marketing/guide-palms-place-unit-types-page-body";
import { canonicalMetadata } from "@/lib/metadata-helpers";

const path = "/guide/palms-place-unit-types";

export const metadata: Metadata = {
  title: "Palms Place studios vs one-bedroom | Buyer guide",
  description:
    "Choose Palms Place studios vs one-bedroom layouts—square footage, HOA, and tour questions—with a buyer decision guide for the Las Vegas tower.",
  ...canonicalMetadata(path),
};

export default function GuidePalmsPlaceUnitTypesPage() {
  return <GuidePalmsPlaceUnitTypesPageBody />;
}
