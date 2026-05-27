import type { Metadata } from "next";
import { GuideCompareStripHighRisesPageBody } from "@/components/marketing/guide-compare-strip-high-rises-page-body";
import { canonicalMetadata } from "@/lib/metadata-helpers";

const path = "/guide/compare-strip-high-rises";

export const metadata: Metadata = {
  title: "Palms Place vs Strip high-rises | Comparison guide",
  description:
    "Compare Palms Place with other Las Vegas Strip high-rises—HOA, tours, and monthly carry—with a field guide from the local listing team.",
  ...canonicalMetadata(path),
};

export default function GuideCompareStripHighRisesPage() {
  return <GuideCompareStripHighRisesPageBody />;
}
