import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/layouts/page-placeholder";

export const metadata: Metadata = {
  title: "Buyer Calculators",
  description: "Mortgage and buyer calculators for Las Vegas home purchases.",
};

export default function BuyerCalculatorsPage() {
  return (
    <PagePlaceholder
      description="Payment, affordability, and closing-cost tools will be embedded here."
      title="Buyer Calculators"
    />
  );
}
