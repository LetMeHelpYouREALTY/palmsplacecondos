import type { Metadata } from "next";
import { GuideSellingPalmsPlacePageBody } from "@/components/marketing/guide-selling-palms-place-page-body";
import { canonicalMetadata } from "@/lib/metadata-helpers";

const path = "/guide/selling-palms-place";

export const metadata: Metadata = {
  title: "Selling a Palms Place condo | Team field guide",
  description:
    "Sell a Palms Place condo with HOA packet timing, furnished resale prep, and listing strategy from Dr. Jan Duffy's Las Vegas Strip team.",
  ...canonicalMetadata(path),
};

export default function GuideSellingPalmsPlacePage() {
  return <GuideSellingPalmsPlacePageBody />;
}
