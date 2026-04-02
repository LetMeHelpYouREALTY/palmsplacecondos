import type { Metadata } from "next";
import { CondosPageBody } from "@/components/marketing/condos-page-body";
import { canonicalMetadata } from "@/lib/metadata-helpers";
import { siteContact } from "@/lib/site-contact";

export const metadata: Metadata = {
  title: "Las Vegas high-rise & Palms Place condos for sale",
  description: `Compare Las Vegas high-rise condos and Palms Place inventory with Dr. Jan Duffy (listing specialist) and ${siteContact.buyerSpecialistName} (${siteContact.buyerSpecialistTitle})—Strip-adjacent residences and HOA context.`,
  ...canonicalMetadata("/condos"),
};

export default function CondosPage() {
  return <CondosPageBody />;
}
