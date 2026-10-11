import type { Metadata } from "next";
import { InsightsHubPageBody } from "@/components/marketing/insights-hub-page-body";
import { PalmsPlaceListingAuthority } from "@/components/seo/palms-place-listing-authority";
import { fieldNotesHubMeta } from "@/lib/content/field-notes";
import { buildPageMetadata } from "@/lib/metadata-helpers";

export const metadata: Metadata = buildPageMetadata({
  path: "/insights",
  title: "Palms Place field notes | Las Vegas high-rise tours",
  description: fieldNotesHubMeta.description,
});

export default function InsightsPage() {
  return (
    <>
      <InsightsHubPageBody />
      <PalmsPlaceListingAuthority pathname="/insights" />
    </>
  );
}
