import { MarketingGuidePageShell } from "@/components/marketing/marketing-guide-page-shell";
import { parkingAndPetsGuidePageFaq } from "@/lib/content/discoverability-page-faqs";
import {
  palmsPlaceParkingAndPetsChecklist,
  palmsPlaceParkingAndPetsGuideMeta,
  palmsPlaceParkingAndPetsIntro,
  palmsPlaceParkingAndPetsSections,
} from "@/lib/content/palms-place-parking-and-pets-guide";
import { relatedLinksForPath } from "@/lib/internal-links";
import { getRealScoutSharedSearchUrl } from "@/lib/realscout";
import { siteContact } from "@/lib/site-contact";

const path = "/guide/palms-place-parking-and-pets";

export function GuidePalmsPlaceParkingAndPetsPageBody() {
  return (
    <MarketingGuidePageShell
      path={path}
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Buyers", path: "/buyers" },
        { name: "Parking and pets", path },
      ]}
      eyebrow="Buyer due diligence"
      headline={palmsPlaceParkingAndPetsIntro.headline}
      lede={palmsPlaceParkingAndPetsIntro.lede}
      meta={palmsPlaceParkingAndPetsGuideMeta}
      authorName={siteContact.buyerSpecialistName}
      authorJobTitle={siteContact.buyerSpecialistTitle}
      related={relatedLinksForPath(path)}
      searchUrl={getRealScoutSharedSearchUrl()}
      checklist={{
        title: "What should you verify about Palms Place parking and pets before you offer?",
        items: palmsPlaceParkingAndPetsChecklist,
      }}
      sections={palmsPlaceParkingAndPetsSections}
      faqItems={parkingAndPetsGuidePageFaq}
      faqHeading="What should Palms Place buyers verify about parking and pets?"
      footerCtas={[
        { href: "/guide/palms-place-hoa-and-monthly-costs", label: "HOA and monthly costs" },
        { href: "/guide/buying-palms-place", label: "Buying field guide" },
        { href: getRealScoutSharedSearchUrl(), label: "Search live listings", external: true },
      ]}
    />
  );
}
