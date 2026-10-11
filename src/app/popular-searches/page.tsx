import type { Metadata } from "next";
import { PopularSearchesPageBody } from "@/components/marketing/popular-searches-page-body";
import { PalmsPlaceListingAuthority } from "@/components/seo/palms-place-listing-authority";
import { buildPageMetadata } from "@/lib/metadata-helpers";

export const metadata: Metadata = buildPageMetadata({
  path: "/popular-searches",
  title: "Popular Palms Place & Las Vegas real estate searches",
  description: "Shortcuts to Palms Place condos, Strip high-rises, luxury homes, and price bands—curated links plus live RealScout search with the local team.",
});

export default function PopularSearchesPage() {
  return (
    <>
      <PopularSearchesPageBody />
      <PalmsPlaceListingAuthority pathname="/popular-searches" />
    </>
  );
}
