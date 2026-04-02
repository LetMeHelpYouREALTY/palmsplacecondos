import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/layouts/page-placeholder";
import { canonicalMetadata } from "@/lib/metadata-helpers";

export const metadata: Metadata = {
  title: "Las Vegas communities",
  description:
    "Neighborhoods and communities near the Las Vegas Strip, Palms Place, and the west side—local context for buyers and sellers.",
  ...canonicalMetadata("/communities"),
};

export default function CommunitiesPage() {
  return (
    <PagePlaceholder
      description="Community guides and lifestyle context will be expanded here."
      path="/communities"
      title="Communities"
    />
  );
}
