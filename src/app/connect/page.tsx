import type { Metadata } from "next";
import { ConnectPageBody } from "@/components/marketing/connect-page-body";
import { canonicalMetadata } from "@/lib/metadata-helpers";

export const metadata: Metadata = {
  title: "Connect",
  description:
    "Connect with Dr. Jan Duffy and Chance Fuller for Palms Place, Las Vegas high-rise condos, and Strip-area real estate updates.",
  ...canonicalMetadata("/connect"),
};

export default function ConnectPage() {
  return <ConnectPageBody />;
}
