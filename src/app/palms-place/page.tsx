import type { Metadata } from "next";
import { PalmsPlacePageBody } from "@/components/marketing/palms-place-page-body";
import { canonicalMetadata } from "@/lib/metadata-helpers";
import { formatTeamPhrase, siteContact } from "@/lib/site-contact";

export const metadata: Metadata = {
  title: "Palms Place Las Vegas | Building guide & condos for sale",
  description: `Palms Place is a 47-story tower at 4381 W Flamingo Rd, west of the Las Vegas Strip. Location, residences, amenities & buying with ${formatTeamPhrase()} — ${siteContact.brokerage}.`,
  ...canonicalMetadata("/palms-place"),
};

export default function PalmsPlacePage() {
  return <PalmsPlacePageBody />;
}
