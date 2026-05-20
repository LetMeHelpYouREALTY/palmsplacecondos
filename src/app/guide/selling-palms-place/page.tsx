import type { Metadata } from "next";
import { GuideSellingPalmsPlacePageBody } from "@/components/marketing/guide-selling-palms-place-page-body";
import { palmsPlaceSellerGuideMeta } from "@/lib/content/palms-place-seller-guide";
import { canonicalMetadata } from "@/lib/metadata-helpers";
import { formatTeamPhrase, siteContact } from "@/lib/site-contact";

const path = "/guide/selling-palms-place";

export const metadata: Metadata = {
  title: "Selling a Palms Place condo | Team field guide",
  description: `${palmsPlaceSellerGuideMeta.description} ${formatTeamPhrase()} — ${siteContact.brokerage}.`,
  ...canonicalMetadata(path),
};

export default function GuideSellingPalmsPlacePage() {
  return <GuideSellingPalmsPlacePageBody />;
}
