import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/layouts/page-placeholder";
import { canonicalMetadata } from "@/lib/metadata-helpers";

export const metadata: Metadata = {
  title: "Las Vegas high-rises",
  description:
    "High-rise condos and towers on and near the Las Vegas Strip, including Palms Place—floor plans, amenities, and listings context.",
  ...canonicalMetadata("/high-rises"),
};

export default function HighRisesPage() {
  return (
    <PagePlaceholder
      description="Strip and urban high-rise inventory and building notes will live here."
      path="/high-rises"
      title="High Rises"
    />
  );
}
