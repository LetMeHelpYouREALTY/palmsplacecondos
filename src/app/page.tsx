import type { Metadata } from "next";
import { HeroPalmsPlace } from "@/components/sections/hero-palms-place";
import { HomeFaqSection } from "@/components/sections/home-faq-section";
import { PalmsBridgeSection } from "@/components/sections/palms-bridge-section";
import { StaySection } from "@/components/sections/stay-section";
import { UnwindSection } from "@/components/sections/unwind-section";
import { canonicalMetadata, canonicalPath } from "@/lib/metadata-helpers";
import { formatTeamPhrase, siteContact } from "@/lib/site-contact";

export const metadata: Metadata = {
  title: "Las Vegas Strip high-rise condos at Palms Place",
  description: `Palms Place high-rise condos near the Las Vegas Strip. ${siteContact.primaryServiceArea}. ${formatTeamPhrase()}. ${siteContact.brokerage}.`,
  openGraph: {
    title: "Palms Place Condos | Las Vegas Strip high-rise real estate",
    description: `Strip-adjacent Palms Place condos and Las Vegas high-rise real estate. ${formatTeamPhrase()}.`,
    url: canonicalPath("/"),
  },
  ...canonicalMetadata("/"),
};

export default function HomePage() {
  return (
    <>
      <HeroPalmsPlace />
      <StaySection />
      <UnwindSection />
      <PalmsBridgeSection />
      <HomeFaqSection />
    </>
  );
}
