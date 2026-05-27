import type { Metadata } from "next";
import { ConnectPageBody } from "@/components/marketing/connect-page-body";
import { canonicalMetadata } from "@/lib/metadata-helpers";
import { siteContact } from "@/lib/site-contact";

export const metadata: Metadata = {
  title: "Connect with the Palms Place team | Las Vegas Strip condos",
  description: `Follow Palms Place updates, office NAP, and social channels for Las Vegas Strip high-rise condos—with ${siteContact.agentName} and ${siteContact.buyerSpecialistName}, ${siteContact.brokerage}.`,
  ...canonicalMetadata("/connect"),
};

export default function ConnectPage() {
  return <ConnectPageBody />;
}
