import type { Metadata } from "next";
import { CommunitiesPageBody } from "@/components/marketing/communities-page-body";
import { canonicalMetadata } from "@/lib/metadata-helpers";

export const metadata: Metadata = {
  title: "Las Vegas communities & guard-gated neighborhoods",
  description:
    "Strip-adjacent corridors, guard-gated communities, Summerlin and Henderson context—orient your search before you tour, including Palms Place and west-side condos.",
  ...canonicalMetadata("/communities"),
};

export default function CommunitiesPage() {
  return <CommunitiesPageBody />;
}
