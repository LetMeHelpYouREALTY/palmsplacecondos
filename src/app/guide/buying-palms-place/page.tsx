import type { Metadata } from "next";
import { GuideBuyingPalmsPlacePageBody } from "@/components/marketing/guide-buying-palms-place-page-body";
import { canonicalMetadata } from "@/lib/metadata-helpers";

const path = "/guide/buying-palms-place";

export const metadata: Metadata = {
  title: "Buying a Palms Place condo | Team field guide",
  description:
    "Palms Place buyer field guide—tour checklist, HOA due diligence, and team roles for Las Vegas Strip high-rise purchases with Dr. Jan Duffy's team.",
  ...canonicalMetadata(path),
};

export default function GuideBuyingPalmsPlacePage() {
  return <GuideBuyingPalmsPlacePageBody />;
}
