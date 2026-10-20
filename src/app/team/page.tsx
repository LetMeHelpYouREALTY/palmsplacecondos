import type { Metadata } from "next";
import { TeamPageBody } from "@/components/marketing/team-page-body";
import { PalmsPlaceListingAuthority } from "@/components/seo/palms-place-listing-authority";
import { buildPageMetadata } from "@/lib/metadata-helpers";
import { siteContact } from "@/lib/site-contact";

export const metadata: Metadata = buildPageMetadata({
  path: "/team",
  title: "Palms Place real estate team | Dr. Jan Duffy",
  description: `Meet ${siteContact.agentName}, Palms Place listing and buyers specialist. Call ${siteContact.phone} — ${siteContact.brokerage}.`,
});

export default function TeamPage() {
  return (
    <>
      <TeamPageBody />
      <PalmsPlaceListingAuthority pathname="/team" />
    </>
  );
}
