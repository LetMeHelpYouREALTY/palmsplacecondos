import type { Metadata } from "next";
import { FeaturedListingBanner } from "@/components/sections/featured-listing-banner";
import { HeroPalmsPlace } from "@/components/sections/hero-palms-place";
import { HomeFaqSection } from "@/components/sections/home-faq-section";
import { StaySection } from "@/components/sections/stay-section";
import { UnwindSection } from "@/components/sections/unwind-section";
import { WhyBuySection } from "@/components/sections/why-buy-section";
import { StructuredData } from "@/components/seo/structured-data";
import { canonicalMetadata, canonicalPath } from "@/lib/metadata-helpers";
import { getDefaultOgImages, getDefaultTwitterImages } from "@/lib/social-images";
import { siteContact } from "@/lib/site-contact";
import { getHomeWebPageJsonLd } from "@/lib/schema";

const ogDescription =
  "Studio to penthouse high-rise condos steps from the Las Vegas Strip. Expert guidance from Dr. Jan Duffy, 35+ years Vegas real estate.";

export const metadata: Metadata = {
  title: "Palms Place Condos for Sale | Las Vegas Strip High-Rise | Dr. Jan Duffy",
  description: `Browse Palms Place condos for sale on the Las Vegas Strip. Studio, 1-bedroom & penthouse residences with resort amenities. Call Dr. Jan Duffy ${siteContact.phone} — ${siteContact.brokerage}.`,
  keywords: [
    "Palms Place condos for sale",
    "Palms Place Las Vegas",
    "Las Vegas Strip condos for sale",
    "high-rise condos Las Vegas",
    "Las Vegas luxury penthouses for sale",
    "luxury condo Las Vegas",
    "Palms Place floor plans",
    "Las Vegas condo investment",
    "Palms Place real estate",
    "strip adjacent condos Las Vegas",
  ],
  openGraph: {
    title: "Palms Place Condos for Sale | Las Vegas Strip",
    description: ogDescription,
    url: canonicalPath("/"),
    siteName: "Palms Place Condos",
    locale: "en_US",
    type: "website",
    images: getDefaultOgImages(),
  },
  twitter: {
    card: "summary_large_image",
    title: "Palms Place Condos for Sale | Las Vegas Strip High-Rise | Dr. Jan Duffy",
    description: ogDescription,
    images: getDefaultTwitterImages(),
  },
  ...canonicalMetadata("/"),
};

export default function HomePage() {
  return (
    <>
      <StructuredData data={getHomeWebPageJsonLd()} />
      <HeroPalmsPlace />
      <FeaturedListingBanner />
      <StaySection />
      <WhyBuySection />
      <UnwindSection />
      <HomeFaqSection />
    </>
  );
}
