import type { Metadata } from "next";
import { Under500kPageBody } from "@/components/marketing/under-500k-page-body";
import { canonicalMetadata } from "@/lib/metadata-helpers";

export const metadata: Metadata = {
  title: "Homes & condos under $500K",
  description:
    "Las Vegas homes and condos under $500,000—starter and move-up inventory near the Strip and Palms Place.",
  ...canonicalMetadata("/under-500k"),
};

export default function Under500kPage() {
  return <Under500kPageBody />;
}
