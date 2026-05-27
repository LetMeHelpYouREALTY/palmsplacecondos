import type { Metadata } from "next";
import { FeaturedPageBody } from "@/components/marketing/featured-page-body";
import { canonicalMetadata } from "@/lib/metadata-helpers";

export const metadata: Metadata = {
  title: "Featured Palms Place & Las Vegas listings | Spotlight inventory",
  description:
    "Spotlight Palms Place and Las Vegas high-rise listings—live RealScout search, new inventory, and private tour lists with Dr. Jan Duffy's team.",
  ...canonicalMetadata("/featured"),
};

export default function FeaturedPage() {
  return <FeaturedPageBody />;
}
