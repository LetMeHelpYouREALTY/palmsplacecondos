import type { Metadata } from "next";
import { HomesPageBody } from "@/components/marketing/homes-page-body";
import { canonicalMetadata } from "@/lib/metadata-helpers";
import { siteContact } from "@/lib/site-contact";

export const metadata: Metadata = {
  title: "Las Vegas homes for sale | Compare with Palms Place condos",
  description: `Browse Las Vegas single-family and attached homes for sale—compare valley neighborhoods with Palms Place with ${siteContact.buyerSpecialistName}, ${siteContact.brokerage}.`,
  ...canonicalMetadata("/homes"),
};

export default function HomesPage() {
  return <HomesPageBody />;
}
