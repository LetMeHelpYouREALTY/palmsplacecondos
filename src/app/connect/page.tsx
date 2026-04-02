import type { Metadata } from "next";
import { ConnectPageBody } from "@/components/marketing/connect-page-body";
import { canonicalMetadata } from "@/lib/metadata-helpers";
import { siteContact } from "@/lib/site-contact";

export const metadata: Metadata = {
  title: "Connect",
  description: `Connect with Dr. Jan Duffy and ${siteContact.buyerSpecialistName} for Palms Place, Las Vegas high-rise condos, and Strip-area real estate updates.`,
  ...canonicalMetadata("/connect"),
};

export default function ConnectPage() {
  return <ConnectPageBody />;
}
