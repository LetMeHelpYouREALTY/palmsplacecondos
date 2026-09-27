import type { Metadata } from "next";
import { FeaturedListingBanner } from "@/components/sections/featured-listing-banner";
import { HeroPalmsPlace } from "@/components/sections/hero-palms-place";
import { HomeFaqSection } from "@/components/sections/home-faq-section";
import { StaySection } from "@/components/sections/stay-section";
import { NearbyAmenitiesSection } from "@/components/sections/nearby-amenities-section";
import { UnwindSection } from "@/components/sections/unwind-section";
import { WhyBuySection } from "@/components/sections/why-buy-section";
import { StructuredData } from "@/components/seo/structured-data";
import { buildPageMetadata } from "@/lib/metadata-helpers";
import {
  getBreadcrumbListJsonLd,
  getCurrentFeaturedListingJsonLd,
  getHomeWebPageJsonLd,
} from "@/lib/schema";

const homeTitle = "Palms Place Condos for Sale | 4381 W Flamingo | Dr. Jan Duffy";
const homeDescription =
  "Palms Place at 4381 W Flamingo Road—studio to penthouse Strip-adjacent condos. Local guidance from Dr. Jan Duffy, Palms Place listing specialist.";
const ogDescription = homeDescription;

export const metadata: Metadata = buildPageMetadata({
  path: "/",
  title: homeTitle,
  description: homeDescription,
  ogTitle: "Palms Place Condos for Sale | 4381 W Flamingo Road",
  ogDescription,
  extras: {
    keywords: [
      "Palms Place condos for sale",
      "Palms Place Las Vegas",
      "4381 W Flamingo Road condos",
      "Palms Place HOA",
      "Las Vegas Strip condos for sale",
      "high-rise condos Las Vegas",
      "Palms Place floor plans",
      "Palms Place real estate agent",
      "buy Palms Place condo",
      "sell Palms Place condo",
    ],
  },
});

export default function HomePage() {
  const homeBreadcrumbJsonLd = getBreadcrumbListJsonLd("/", [{ name: "Home", path: "/" }]);

  return (
    <>
      <StructuredData data={getHomeWebPageJsonLd()} />
      <StructuredData data={homeBreadcrumbJsonLd} />
      <StructuredData data={getCurrentFeaturedListingJsonLd()} />
      <HeroPalmsPlace />
      <FeaturedListingBanner />
      <StaySection />
      <WhyBuySection />
      <UnwindSection />
      <NearbyAmenitiesSection headingId="home-nearby-amenities-heading" />
      <HomeFaqSection />
    </>
  );
}
