import type { Metadata } from "next";
import { BuyerCalculatorsPageBody } from "@/components/marketing/buyer-calculators-page-body";
import { canonicalMetadata } from "@/lib/metadata-helpers";

export const metadata: Metadata = {
  title: "Buyer calculators",
  description:
    "Mortgage payment, affordability, and closing-cost planning for Las Vegas and Palms Place home purchases.",
  ...canonicalMetadata("/buyers/calculators"),
};

export default function BuyerCalculatorsPage() {
  return <BuyerCalculatorsPageBody />;
}
