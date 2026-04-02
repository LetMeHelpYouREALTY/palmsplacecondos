import type { Metadata } from "next";
import { CommunitiesPageBody } from "@/components/marketing/communities-page-body";
import { canonicalMetadata } from "@/lib/metadata-helpers";

export const metadata: Metadata = {
  title: "Las Vegas condo communities overview",
  description:
    "Neighborhoods and communities near the Las Vegas Strip, Palms Place, and the west side—local context for buyers and sellers.",
  ...canonicalMetadata("/communities"),
};

export default function CommunitiesPage() {
  return <CommunitiesPageBody />;
}
