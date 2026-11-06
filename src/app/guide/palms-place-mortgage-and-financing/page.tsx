import type { Metadata } from "next";
import { GuidePalmsPlaceMortgagePageBody } from "@/components/marketing/guide-palms-place-mortgage-page-body";
import { palmsPlaceMortgageGuideMeta } from "@/lib/content/palms-place-mortgage-guide";
import { buildPageMetadata } from "@/lib/metadata-helpers";

const path = "/guide/palms-place-mortgage-and-financing";

export const metadata: Metadata = buildPageMetadata({
  path,
  title: "Can I get a mortgage at Palms Place? | Condo-hotel financing",
  description: palmsPlaceMortgageGuideMeta.description,
});

export default function GuidePalmsPlaceMortgagePage() {
  return <GuidePalmsPlaceMortgagePageBody />;
}
