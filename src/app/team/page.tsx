import type { Metadata } from "next";
import { TeamPageBody } from "@/components/marketing/team-page-body";
import { canonicalMetadata } from "@/lib/metadata-helpers";
import { formatTeamPhrase, siteContact } from "@/lib/site-contact";

export const metadata: Metadata = {
  title: "Palms Place real estate team | Dr. Jan Duffy",
  description: `${formatTeamPhrase()} at ${siteContact.brokerage}. Palms Place listing specialist and buyers specialist — office NAP matches Google Business Profile.`,
  ...canonicalMetadata("/team"),
};

export default function TeamPage() {
  return <TeamPageBody />;
}
