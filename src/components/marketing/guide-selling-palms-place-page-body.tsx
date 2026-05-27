import { MarketingGuidePageShell } from "@/components/marketing/marketing-guide-page-shell";
import { sellingGuidePageFaq } from "@/lib/content/discoverability-page-faqs";
import {
  palmsPlaceSellerGuideIntro,
  palmsPlaceSellerGuideMeta,
  palmsPlaceSellerGuideSections,
  palmsPlaceSellerPrepChecklist,
} from "@/lib/content/palms-place-seller-guide";
import { relatedLinksForPath } from "@/lib/internal-links";
import { siteContact } from "@/lib/site-contact";

const path = "/guide/selling-palms-place";

export function GuideSellingPalmsPlacePageBody() {
  return (
    <MarketingGuidePageShell
      path={path}
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Sellers", path: "/sellers" },
        { name: "Selling guide", path },
      ]}
      eyebrow="Seller field guide"
      headline={palmsPlaceSellerGuideIntro.headline}
      lede={palmsPlaceSellerGuideIntro.lede}
      meta={palmsPlaceSellerGuideMeta}
      authorName={siteContact.agentName}
      authorJobTitle={siteContact.agentTitle}
      related={relatedLinksForPath(path)}
      checklist={{
        title: "Listing prep checklist (Palms Place sellers)",
        items: palmsPlaceSellerPrepChecklist,
      }}
      sections={palmsPlaceSellerGuideSections}
      faqItems={sellingGuidePageFaq}
      faqHeading="Selling guide FAQ"
      footerCtas={[
        { href: "/sell", label: "Sell with the team" },
        { href: "/contact", label: "Schedule a seller consult" },
      ]}
    />
  );
}
