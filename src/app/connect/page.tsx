import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/layouts/page-placeholder";
import { canonicalMetadata } from "@/lib/metadata-helpers";

export const metadata: Metadata = {
  title: "Connect",
  description:
    "Connect with Dr. Jan Duffy and Chance Fuller for Palms Place, Las Vegas high-rise condos, and Strip-area real estate updates.",
  ...canonicalMetadata("/connect"),
};

export default function ConnectPage() {
  return (
    <PagePlaceholder
      description="Social links and ways to connect will be added here alongside your Google Business Profile details."
      path="/connect"
      title="Connect"
    />
  );
}
