import type { Metadata } from "next";
import { GuideCompareStripHighRisesPageBody } from "@/components/marketing/guide-compare-strip-high-rises-page-body";
import { compareStripHighRisesGuideMeta } from "@/lib/content/compare-strip-high-rises-guide";
import { canonicalMetadata } from "@/lib/metadata-helpers";
import { formatTeamPhrase, siteContact } from "@/lib/site-contact";

const path = "/guide/compare-strip-high-rises";

export const metadata: Metadata = {
  title: "Palms Place vs Strip high-rises | Comparison guide",
  description: `${compareStripHighRisesGuideMeta.description} ${formatTeamPhrase()} — ${siteContact.brokerage}.`,
  ...canonicalMetadata(path),
};

export default function GuideCompareStripHighRisesPage() {
  return <GuideCompareStripHighRisesPageBody />;
}
