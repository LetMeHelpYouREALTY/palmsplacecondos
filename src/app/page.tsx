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
  "Palms Place at 4381 W Flamingo Road—studio to penthouse Strip-adjacent condos. Local guidance from Dr. Jan Duffy, Palms Place listing specialist.";

export const metadata: Metadata = {
  title: "Palms Place Condos for Sale | 4381 W Flamingo | Dr. Jan Duffy",
  description: `Palms Place condos for sale at 4381 W Flamingo Road, Las Vegas. Studio, 1-bedroom & penthouse high-rise residences. Call listing specialist Dr. Jan Duffy ${siteContact.phone} — ${siteContact.brokerage}.`,
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
  openGraph: {
    title: "Palms Place Condos for Sale | 4381 W Flamingo Road",
    description: ogDescription,
    url: canonicalPath("/"),
    siteName: "Palms Place Condos",
    locale: "en_US",
    type: "website",
    images: getDefaultOgImages(),
  },
  twitter: {
    card: "summary_large_image",
    title: "Palms Place Condos for Sale | 4381 W Flamingo | Dr. Jan Duffy",
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
