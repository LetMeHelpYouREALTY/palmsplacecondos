import { MarketingGuidePageShell } from "@/components/marketing/marketing-guide-page-shell";
import {
  palmsPlaceMortgageChecklist,
  palmsPlaceMortgageGuideMeta,
  palmsPlaceMortgageIntro,
  palmsPlaceMortgageSections,
} from "@/lib/content/palms-place-mortgage-guide";
import { relatedLinksForPath } from "@/lib/internal-links";
import { siteContact } from "@/lib/site-contact";

const path = "/guide/palms-place-mortgage-and-financing";

export function GuidePalmsPlaceMortgagePageBody() {
  return (
    <MarketingGuidePageShell
      path={path}
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Buyers", path: "/buyers" },
        { name: "Mortgage & financing", path },
      ]}
      eyebrow="Buying"
      headline={palmsPlaceMortgageIntro.headline}
      lede={palmsPlaceMortgageIntro.lede}
      meta={palmsPlaceMortgageGuideMeta}
      authorName={siteContact.agentName}
      authorJobTitle={siteContact.agentTitle}
      related={relatedLinksForPath(path)}
      checklist={palmsPlaceMortgageChecklist}
      sections={palmsPlaceMortgageSections}
      footerCtas={[
        { href: "/guide/buying-palms-place", label: "Buying a Palms Place condo — field guide" },
        { href: "/guide/palms-place-hoa-and-monthly-costs", label: "Palms Place HOA and monthly costs" },
      ]}
    />
  );
}
