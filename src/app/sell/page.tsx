import type { Metadata } from "next";
import { SellPageBody } from "@/components/marketing/sell-page-body";
import { canonicalMetadata } from "@/lib/metadata-helpers";

export const metadata: Metadata = {
  title: "Sell your Palms Place or Las Vegas condo",
  description:
    "Request a free seller valuation conversation with Dr. Jan Duffy, listing specialist and team leader—pricing strategy and marketing for Palms Place and Las Vegas listings. Not an automated appraisal; details confirmed in your consult.",
  ...canonicalMetadata("/sell"),
};

export default function SellPage() {
  return <SellPageBody />;
}
