import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/layouts/page-placeholder";

export const metadata: Metadata = {
  title: "Sell",
  description: "Sell your Las Vegas or Palms Place property with a strategic marketing plan.",
};

export default function SellPage() {
  return (
    <PagePlaceholder
      description="Listing strategy, pricing, and marketing resources for sellers."
      title="SELL"
    />
  );
}
