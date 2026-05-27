import type { Metadata } from "next";
import { CondosPageBody } from "@/components/marketing/condos-page-body";
import { canonicalMetadata } from "@/lib/metadata-helpers";
import { siteContact } from "@/lib/site-contact";

export const metadata: Metadata = {
  title: "Las Vegas Strip condos & high-rises for sale | Palms Place",
  description: `Strip and west-of-Strip condos for sale—including Palms Place—with HOA guides and live search. ${siteContact.buyerSpecialistName}, ${siteContact.brokerage}.`,
  ...canonicalMetadata("/condos"),
};

export default function CondosPage() {
  return <CondosPageBody />;
}
