import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/layouts/page-placeholder";
import { canonicalMetadata } from "@/lib/metadata-helpers";

export const metadata: Metadata = {
  title: "Featured listings",
  description:
    "Featured Las Vegas and Palms Place listings—spotlight properties and new inventory highlights.",
  ...canonicalMetadata("/featured"),
};

export default function FeaturedPage() {
  return (
    <PagePlaceholder
      description="Featured homes and condos will display here when connected to your feed."
      path="/featured"
      title="Featured"
    />
  );
}
