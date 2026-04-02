import type { Metadata } from "next";
import { FeaturedPageBody } from "@/components/marketing/featured-page-body";
import { canonicalMetadata } from "@/lib/metadata-helpers";

export const metadata: Metadata = {
  title: "Featured listings",
  description:
    "Featured Las Vegas and Palms Place listings—spotlight properties and new inventory highlights.",
  ...canonicalMetadata("/featured"),
};

export default function FeaturedPage() {
  return <FeaturedPageBody />;
}
