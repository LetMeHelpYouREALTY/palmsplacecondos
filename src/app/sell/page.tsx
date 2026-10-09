import type { Metadata } from "next";
import { SellPageBody } from "@/components/marketing/sell-page-body";
import { PalmsPlaceListingAuthority } from "@/components/seo/palms-place-listing-authority";
import { buildPageMetadata } from "@/lib/metadata-helpers";
import { siteContact } from "@/lib/site-contact";

export const metadata: Metadata = buildPageMetadata({
  path: "/sell",
  title: "Sell your Palms Place or Las Vegas condo",
  description: `Request a seller valuation conversation with ${siteContact.agentName}. Call ${siteContact.phone} for pricing strategy and marketing—not an automated appraisal.`,
});

export default function SellPage() {
  return (
    <>
      <SellPageBody />
      <PalmsPlaceListingAuthority pathname="/sell" />
    </>
  );
}
