import type { Metadata } from "next";
import { PopularSearchesPageBody } from "@/components/marketing/popular-searches-page-body";
import { canonicalMetadata } from "@/lib/metadata-helpers";

export const metadata: Metadata = {
  title: "Popular Palms Place & Las Vegas real estate searches",
  description:
    "Shortcuts to Palms Place condos, Strip high-rises, luxury homes, and price bands—curated links plus live RealScout search with the local team.",
  ...canonicalMetadata("/popular-searches"),
};

export default function PopularSearchesPage() {
  return <PopularSearchesPageBody />;
}
