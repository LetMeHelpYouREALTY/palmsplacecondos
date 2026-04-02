import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/layouts/page-placeholder";
import { canonicalMetadata } from "@/lib/metadata-helpers";

export const metadata: Metadata = {
  title: "Luxury homes",
  description:
    "Luxury homes and estates in Las Vegas, Summerlin, and Henderson—buyer representation with Chance Fuller and the Palms Place team.",
  ...canonicalMetadata("/luxury-homes"),
};

export default function LuxuryHomesPage() {
  return (
    <PagePlaceholder
      description="Luxury segment landing content and featured estates will be added here."
      path="/luxury-homes"
      title="Luxury Homes"
    />
  );
}
