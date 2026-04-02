import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/layouts/page-placeholder";
import { canonicalMetadata } from "@/lib/metadata-helpers";

export const metadata: Metadata = {
  title: "Sell your home",
  description:
    "Sell your Las Vegas or Palms Place condo or home with pricing strategy and marketing from Dr. Jan Duffy, listing specialist and team leader for Palms Place.",
  ...canonicalMetadata("/sell"),
};

export default function SellPage() {
  return (
    <PagePlaceholder
      description="Listing strategy, pricing, and marketing resources for sellers."
      path="/sell"
      title="SELL"
    />
  );
}
