import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/layouts/page-placeholder";
import { canonicalMetadata } from "@/lib/metadata-helpers";

export const metadata: Metadata = {
  title: "Buyer calculators",
  description:
    "Mortgage payment, affordability, and closing-cost planning for Las Vegas and Palms Place home purchases.",
  ...canonicalMetadata("/buyers/calculators"),
};

export default function BuyerCalculatorsPage() {
  return (
    <PagePlaceholder
      description="Payment, affordability, and closing-cost tools will be embedded here."
      path="/buyers/calculators"
      title="Buyer Calculators"
    />
  );
}
