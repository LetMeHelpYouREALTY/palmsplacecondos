import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/layouts/page-placeholder";
import { canonicalMetadata } from "@/lib/metadata-helpers";

export const metadata: Metadata = {
  title: "Homes & condos under $500K",
  description:
    "Las Vegas homes and condos under $500,000—starter and move-up inventory near the Strip and Palms Place.",
  ...canonicalMetadata("/under-500k"),
};

export default function Under500kPage() {
  return (
    <PagePlaceholder
      description="Price-filtered search results will be wired to your IDX or search provider."
      path="/under-500k"
      title="Under $500K"
    />
  );
}
