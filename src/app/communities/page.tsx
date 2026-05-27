import type { Metadata } from "next";
import { CommunitiesPageBody } from "@/components/marketing/communities-page-body";
import { canonicalMetadata } from "@/lib/metadata-helpers";

export const metadata: Metadata = {
  title: "Las Vegas communities & neighborhoods | Palms Place area guide",
  description:
    "Compare Strip-adjacent corridors, guard-gated neighborhoods, and Summerlin or Henderson with Palms Place high-rise living before you tour.",
  ...canonicalMetadata("/communities"),
};

export default function CommunitiesPage() {
  return <CommunitiesPageBody />;
}
