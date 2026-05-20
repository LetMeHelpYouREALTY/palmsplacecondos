import type { Metadata } from "next";
import { InsightsHubPageBody } from "@/components/marketing/insights-hub-page-body";
import { fieldNotesHubMeta } from "@/lib/content/field-notes";
import { canonicalMetadata } from "@/lib/metadata-helpers";

export const metadata: Metadata = {
  title: "Palms Place field notes | Team insights",
  description: fieldNotesHubMeta.description,
  ...canonicalMetadata("/insights"),
};

export default function InsightsPage() {
  return <InsightsHubPageBody />;
}
