import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/layouts/page-placeholder";

export const metadata: Metadata = {
  title: "Connect",
  description: "Connect with Dr. Jan Duffy for Palms Place and Las Vegas real estate.",
};

export default function ConnectPage() {
  return (
    <PagePlaceholder
      description="Social links and ways to connect will be added here alongside your Google Business Profile details."
      title="Connect"
    />
  );
}
