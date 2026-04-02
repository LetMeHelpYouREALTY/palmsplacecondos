import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/layouts/page-placeholder";
import { canonicalMetadata } from "@/lib/metadata-helpers";

export const metadata: Metadata = {
  title: "Homes for sale",
  description:
    "Browse single-family and attached homes for sale in Las Vegas and near Palms Place with Dr. Jan Duffy and Chance Fuller, Berkshire Hathaway HomeServices Nevada Properties.",
  ...canonicalMetadata("/homes"),
};

export default function HomesPage() {
  return (
    <PagePlaceholder
      description="Single-family and attached homes across the Las Vegas Valley."
      path="/homes"
      title="Homes"
    />
  );
}
