import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/layouts/page-placeholder";

export const metadata: Metadata = {
  title: "Homes",
  description: "Browse homes for sale in Las Vegas and near Palms Place.",
};

export default function HomesPage() {
  return (
    <PagePlaceholder
      description="Single-family and attached homes across the Las Vegas Valley."
      title="Homes"
    />
  );
}
