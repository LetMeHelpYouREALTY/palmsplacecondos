import type { Metadata } from "next";
import { GuideBuyingPalmsPlacePageBody } from "@/components/marketing/guide-buying-palms-place-page-body";
import { palmsPlaceBuyerGuideMeta } from "@/lib/content/palms-place-buyer-guide";
import { canonicalMetadata } from "@/lib/metadata-helpers";
import { formatTeamPhrase, siteContact } from "@/lib/site-contact";

const path = "/guide/buying-palms-place";

export const metadata: Metadata = {
  title: "Buying a Palms Place condo | Team field guide",
  description: `${palmsPlaceBuyerGuideMeta.description} ${formatTeamPhrase()} — ${siteContact.brokerage}.`,
  ...canonicalMetadata(path),
};

export default function GuideBuyingPalmsPlacePage() {
  return <GuideBuyingPalmsPlacePageBody />;
}
