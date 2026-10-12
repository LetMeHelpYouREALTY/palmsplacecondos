import { ampCanonicalPaths } from "@/lib/amp/catalog";
import {
  amenitiesGuidePageFaq,
  areaPalmsPlacePageFaq,
  buyingGuidePageFaq,
  condosVsHotelGuidePageFaq,
  furnishedGuidePageFaq,
  getContactPageFaq,
  getMapsPageFaq,
  getTeamPageFaq,
  hoaGuidePageFaq,
  palmsPlacePageFaq,
  photosHubPageFaq,
  searchPageFaq,
  sellingGuidePageFaq,
  shortTermRentalGuidePageFaq,
  stripViewGuidePageFaq,
  unitTypesGuidePageFaq,
} from "@/lib/content/discoverability-page-faqs";
import { homeFaqItems } from "@/lib/content/home-faq";
import { getUniqueGoogleMaps, mapsPage } from "@/lib/content/maps-page";
import { photoGalleries } from "@/lib/content/media-gallery";
import {
  palmsPlaceAmenitiesGuideMeta,
  palmsPlaceAmenitiesIntro,
} from "@/lib/content/palms-place-amenities-guide";
import {
  palmsPlaceBuyerGuideIntro,
  palmsPlaceBuyerGuideMeta,
  palmsPlaceTourChecklist,
} from "@/lib/content/palms-place-buyer-guide";
import {
  palmsPlaceCondosVsHotelGuideMeta,
  palmsPlaceCondosVsHotelIntro,
} from "@/lib/content/palms-place-condos-vs-hotel-guide";
import { palmsPlaceFaqAllAsFaqItems, palmsPlaceFaqIntro } from "@/lib/content/palms-place-faq";
import {
  palmsPlaceFurnishedGuideMeta,
  palmsPlaceFurnishedIntro,
} from "@/lib/content/palms-place-furnished-guide";
import { palmsPlaceHoaGuideMeta, palmsPlaceHoaIntro } from "@/lib/content/palms-place-hoa-guide";
import {
  palmsPlaceSellerGuideIntro,
  palmsPlaceSellerGuideMeta,
  palmsPlaceSellerPrepChecklist,
} from "@/lib/content/palms-place-seller-guide";
import {
  palmsPlaceShortTermRentalGuideMeta,
  palmsPlaceShortTermRentalIntro,
} from "@/lib/content/palms-place-short-term-rental-guide";
import {
  palmsPlaceStripViewGuideMeta,
  palmsPlaceStripViewIntro,
} from "@/lib/content/palms-place-strip-view-guide";
import {
  palmsPlaceUnitTypesGuideMeta,
  palmsPlaceUnitTypesIntro,
} from "@/lib/content/palms-place-unit-types-guide";
import { videoPageFaq } from "@/lib/content/video-page-faq";
import {
  type BreadcrumbItem,
  type FaqItem,
  type JsonLdGraph,
  getAgentVideoObjectJsonLd,
  getArticleJsonLdForPath,
  getBaseJsonLd,
  getBreadcrumbListJsonLd,
  getCurrentFeaturedListingJsonLd,
  getFaqPageJsonLdForPath,
  getHomeFaqPageJsonLd,
  getHomeWebPageJsonLd,
  getHowToJsonLdForPath,
  getItemListJsonLd,
  getTeamPersonsJsonLd,
  getWebPageJsonLdForPath,
} from "@/lib/schema";
import { siteContact } from "@/lib/site-contact";
import { getSiteUrl } from "@/lib/site-url";

const AMP_SCHEMA_PATHS = [
  "/",
  "/palms-place",
  "/area/palms-place-las-vegas",
  "/faq",
  "/contact",
  "/team",
  "/search",
  "/photos",
  "/video",
  "/maps",
  "/guide/buying-palms-place",
  "/guide/selling-palms-place",
  "/guide/palms-place-hoa-and-monthly-costs",
  "/guide/furnished-palms-place-condos",
  "/guide/palms-place-amenities-and-resort-access",
  "/guide/palms-place-condos-vs-hotel",
  "/guide/palms-place-strip-view-condos",
  "/guide/palms-place-unit-types",
  "/guide/palms-place-short-term-rentals",
] as const;

type AmpSchemaPath = (typeof AMP_SCHEMA_PATHS)[number];

type GuideSchemaInput = {
  path: string;
  meta: { title: string; description: string; datePublished: string; dateModified: string };
  headline: string;
  authorName: string;
  authorJobTitle: string;
  breadcrumbs: BreadcrumbItem[];
  faqs: FaqItem[];
  howTo?: { name: string; description: string; steps: readonly string[] };
};

function isAmpSchemaPath(path: string): path is AmpSchemaPath {
  return (AMP_SCHEMA_PATHS as readonly string[]).includes(path);
}

function guideGraphs(input: GuideSchemaInput): JsonLdGraph[] {
  const graphs: JsonLdGraph[] = [
    getWebPageJsonLdForPath(
      input.path,
      { name: input.meta.title, description: input.meta.description },
      {
        aboutPalmsPlace: true,
        hasFaq: input.faqs.length > 0,
        hasHowTo: Boolean(input.howTo && input.howTo.steps.length > 0),
      },
    ),
    getBreadcrumbListJsonLd(input.path, input.breadcrumbs),
    getArticleJsonLdForPath({
      pathname: input.path,
      headline: input.headline,
      description: input.meta.description,
      datePublished: input.meta.datePublished,
      dateModified: input.meta.dateModified,
      authorName: input.authorName,
      authorJobTitle: input.authorJobTitle,
      aboutPalmsPlace: true,
    }),
  ];
  if (input.howTo && input.howTo.steps.length > 0) {
    graphs.push(
      getHowToJsonLdForPath(input.path, {
        name: input.howTo.name,
        description: input.howTo.description,
        steps: [...input.howTo.steps],
      }),
    );
  }
  if (input.faqs.length > 0) {
    graphs.push(getFaqPageJsonLdForPath(input.path, input.faqs));
  }
  return graphs;
}

function graphsForPath(path: AmpSchemaPath): Array<JsonLdGraph | Record<string, unknown>> {
  const agent = siteContact.agentName;
  const agentTitle = siteContact.agentTitle;
  const buyer = siteContact.buyerSpecialistName;
  const buyerTitle = siteContact.buyerSpecialistTitle;

  switch (path) {
    case "/":
      return [
        getHomeWebPageJsonLd(),
        getBreadcrumbListJsonLd("/", [{ name: "Home", path: "/" }]),
        getCurrentFeaturedListingJsonLd(),
        getHomeFaqPageJsonLd(homeFaqItems),
      ];
    case "/palms-place":
      return [
        getWebPageJsonLdForPath(
          "/palms-place",
          {
            name: "Palms Place Las Vegas — building guide & condos for sale",
            description:
              "Palms Place is a 47-story tower west of the Las Vegas Strip at 4381 W Flamingo Road. Guide to location, residences, amenities, and buying with the Palms Place real estate team.",
          },
          { aboutPalmsPlace: true, mainEntity: "palms-place", hasFaq: true },
        ),
        getBreadcrumbListJsonLd("/palms-place", [
          { name: "Home", path: "/" },
          { name: "Palms Place", path: "/palms-place" },
        ]),
        getFaqPageJsonLdForPath("/palms-place", palmsPlacePageFaq),
      ];
    case "/area/palms-place-las-vegas":
      return [
        getWebPageJsonLdForPath(
          "/area/palms-place-las-vegas",
          {
            name: "Palms Place location — West Flamingo & Paradise, Las Vegas NV",
            description:
              "Where Palms Place sits on the Las Vegas Strip corridor—4381 W Flamingo Rd, Paradise 89103, directions, and how the tower relates to resort and high-rise living.",
          },
          { aboutPalmsPlace: true, mainEntity: "palms-place", hasFaq: true },
        ),
        getBreadcrumbListJsonLd("/area/palms-place-las-vegas", [
          { name: "Home", path: "/" },
          { name: "Palms Place area", path: "/area/palms-place-las-vegas" },
        ]),
        getFaqPageJsonLdForPath("/area/palms-place-las-vegas", areaPalmsPlacePageFaq),
      ];
    case "/faq":
      return [
        getFaqPageJsonLdForPath("/faq", palmsPlaceFaqAllAsFaqItems()),
        getWebPageJsonLdForPath(
          "/faq",
          {
            name: palmsPlaceFaqIntro.title,
            description: palmsPlaceFaqIntro.description,
          },
          {
            aboutPalmsPlace: true,
            mainEntity: "faq",
            speakableSelectors: ["h1", "#faq-common-heading", "#faq-planning-heading", "h3"],
            hasFaq: true,
          },
        ),
        getBreadcrumbListJsonLd("/faq", [
          { name: "Home", path: "/" },
          { name: "FAQ", path: "/faq" },
        ]),
      ];
    case "/contact":
      return [
        getWebPageJsonLdForPath(
          "/contact",
          {
            name: `Contact ${siteContact.gbpBusinessName} — Las Vegas office`,
            description:
              "Office NAP, hours, map, and call/directions for Dr. Jan Duffy at Berkshire Hathaway HomeServices Nevada Properties.",
          },
          {
            aboutListingAgent: true,
            mainEntity: "listing-agent",
            pageType: "ContactPage",
            hasFaq: true,
          },
        ),
        getBreadcrumbListJsonLd("/contact", [
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]),
        getFaqPageJsonLdForPath("/contact", getContactPageFaq()),
      ];
    case "/team":
      return [
        getWebPageJsonLdForPath(
          "/team",
          {
            name: "Palms Place real estate team — Dr. Jan Duffy",
            description:
              "Meet Dr. Jan Duffy, Realtor — listing specialist, team leader, and Palms Place Buyers Specialist at Berkshire Hathaway HomeServices Nevada Properties.",
          },
          {
            aboutListingAgent: true,
            mainEntity: "listing-agent",
            pageType: "ProfilePage",
            hasFaq: true,
          },
        ),
        getBreadcrumbListJsonLd("/team", [
          { name: "Home", path: "/" },
          { name: "Team", path: "/team" },
        ]),
        getTeamPersonsJsonLd(),
        getFaqPageJsonLdForPath("/team", getTeamPageFaq()),
      ];
    case "/search":
      return [
        getWebPageJsonLdForPath(
          "/search",
          {
            name: "Search Palms Place & Las Vegas listings",
            description: `Search live Palms Place and Las Vegas condo listings. Filter by price and status, then call ${siteContact.phone} — ${siteContact.agentName}.`,
          },
          { aboutPalmsPlace: true, pageType: "SearchResultsPage", hasFaq: true },
        ),
        getBreadcrumbListJsonLd("/search", [
          { name: "Home", path: "/" },
          { name: "Search", path: "/search" },
        ]),
        getFaqPageJsonLdForPath("/search", searchPageFaq),
      ];
    case "/photos":
      return [
        getWebPageJsonLdForPath(
          "/photos",
          {
            name: "Palms Place condo photos — Las Vegas Strip high-rise galleries",
            description:
              "Photo galleries for Palms Place condos for sale on the Las Vegas Strip—unit interiors, Strip views, and listing photography with Dr. Jan Duffy.",
          },
          {
            aboutPalmsPlace: true,
            pageType: "CollectionPage",
            hasFaq: true,
            hasItemList: true,
          },
        ),
        getBreadcrumbListJsonLd("/photos", [
          { name: "Home", path: "/" },
          { name: "Photos", path: "/photos" },
        ]),
        getItemListJsonLd("/photos", {
          name: "Palms Place photo galleries",
          description:
            "Photo galleries for Palms Place condos for sale on the Las Vegas Strip—unit interiors, Strip views, and listing photography with Dr. Jan Duffy.",
          items: photoGalleries.map((gallery) => ({
            name: gallery.h1,
            path: gallery.path,
            description: gallery.lede,
          })),
        }),
        getFaqPageJsonLdForPath("/photos", photosHubPageFaq),
      ];
    case "/video":
      return [
        getWebPageJsonLdForPath(
          "/video",
          {
            name: "Dr. Jan Duffy Palms Place listing specialist video",
            description:
              "First-party Palms Place video: Dr. Jan Duffy, listing specialist and team leader, with tower and unit #8322 photography at 4381 W Flamingo Road.",
          },
          { aboutListingAgent: true, aboutPalmsPlace: true, hasFaq: true },
        ),
        getBreadcrumbListJsonLd("/video", [
          { name: "Home", path: "/" },
          { name: "Video", path: "/video" },
        ]),
        getAgentVideoObjectJsonLd("/video"),
        getFaqPageJsonLdForPath("/video", videoPageFaq),
      ];
    case "/maps": {
      const origin = getSiteUrl().replace(/\/$/, "");
      const embedPlaces = getUniqueGoogleMaps().filter((place) => place.embed);
      return [
        getWebPageJsonLdForPath(
          mapsPage.path,
          { name: mapsPage.h1, description: mapsPage.description },
          { aboutPalmsPlace: true, aboutListingAgent: true, hasFaq: true },
        ),
        getBreadcrumbListJsonLd(mapsPage.path, [
          { name: "Home", path: "/" },
          { name: "Maps", path: mapsPage.path },
        ]),
        {
          "@context": "https://schema.org",
          "@graph": embedPlaces.map((place) => ({
            "@type": "Map",
            "@id": `${origin}${mapsPage.path}#${place.id}`,
            name: place.title,
            description: place.description,
            url: place.mapsUrl,
          })),
        },
        getFaqPageJsonLdForPath(mapsPage.path, getMapsPageFaq()),
      ];
    }
    case "/guide/buying-palms-place":
      return guideGraphs({
        path: "/guide/buying-palms-place",
        meta: palmsPlaceBuyerGuideMeta,
        headline: palmsPlaceBuyerGuideIntro.headline,
        authorName: agent,
        authorJobTitle: agentTitle,
        breadcrumbs: [
          { name: "Home", path: "/" },
          { name: "Buyers", path: "/buyers" },
          { name: "Buying guide", path: "/guide/buying-palms-place" },
        ],
        faqs: buyingGuidePageFaq,
        howTo: {
          name: "What should you ask on a Palms Place condo tour?",
          description:
            "Use this checklist on every Palms Place showing—especially furnished or rental-history units.",
          steps: palmsPlaceTourChecklist,
        },
      });
    case "/guide/selling-palms-place":
      return guideGraphs({
        path: "/guide/selling-palms-place",
        meta: palmsPlaceSellerGuideMeta,
        headline: palmsPlaceSellerGuideIntro.headline,
        authorName: agent,
        authorJobTitle: agentTitle,
        breadcrumbs: [
          { name: "Home", path: "/" },
          { name: "Sellers", path: "/sellers" },
          { name: "Selling guide", path: "/guide/selling-palms-place" },
        ],
        faqs: sellingGuidePageFaq,
        howTo: {
          name: "What listing prep should Palms Place sellers finish first?",
          description: palmsPlaceSellerGuideIntro.lede,
          steps: palmsPlaceSellerPrepChecklist,
        },
      });
    case "/guide/palms-place-hoa-and-monthly-costs":
      return guideGraphs({
        path: "/guide/palms-place-hoa-and-monthly-costs",
        meta: palmsPlaceHoaGuideMeta,
        headline: palmsPlaceHoaIntro.headline,
        authorName: buyer,
        authorJobTitle: buyerTitle,
        breadcrumbs: [
          { name: "Home", path: "/" },
          { name: "Buyers", path: "/buyers" },
          { name: "HOA & monthly costs", path: "/guide/palms-place-hoa-and-monthly-costs" },
        ],
        faqs: hoaGuidePageFaq,
      });
    case "/guide/furnished-palms-place-condos":
      return guideGraphs({
        path: "/guide/furnished-palms-place-condos",
        meta: palmsPlaceFurnishedGuideMeta,
        headline: palmsPlaceFurnishedIntro.headline,
        authorName: buyer,
        authorJobTitle: buyerTitle,
        breadcrumbs: [
          { name: "Home", path: "/" },
          { name: "Buyers", path: "/buyers" },
          { name: "Furnished condos", path: "/guide/furnished-palms-place-condos" },
        ],
        faqs: furnishedGuidePageFaq,
      });
    case "/guide/palms-place-amenities-and-resort-access":
      return guideGraphs({
        path: "/guide/palms-place-amenities-and-resort-access",
        meta: palmsPlaceAmenitiesGuideMeta,
        headline: palmsPlaceAmenitiesIntro.headline,
        authorName: agent,
        authorJobTitle: agentTitle,
        breadcrumbs: [
          { name: "Home", path: "/" },
          { name: "Palms Place", path: "/palms-place" },
          { name: "Amenities", path: "/guide/palms-place-amenities-and-resort-access" },
        ],
        faqs: amenitiesGuidePageFaq,
      });
    case "/guide/palms-place-condos-vs-hotel":
      return guideGraphs({
        path: "/guide/palms-place-condos-vs-hotel",
        meta: palmsPlaceCondosVsHotelGuideMeta,
        headline: palmsPlaceCondosVsHotelIntro.headline,
        authorName: agent,
        authorJobTitle: agentTitle,
        breadcrumbs: [
          { name: "Home", path: "/" },
          { name: "FAQ", path: "/faq" },
          { name: "Condos vs hotel", path: "/guide/palms-place-condos-vs-hotel" },
        ],
        faqs: condosVsHotelGuidePageFaq,
      });
    case "/guide/palms-place-strip-view-condos":
      return guideGraphs({
        path: "/guide/palms-place-strip-view-condos",
        meta: palmsPlaceStripViewGuideMeta,
        headline: palmsPlaceStripViewIntro.headline,
        authorName: buyer,
        authorJobTitle: buyerTitle,
        breadcrumbs: [
          { name: "Home", path: "/" },
          { name: "Buyers", path: "/buyers" },
          { name: "Strip view condos", path: "/guide/palms-place-strip-view-condos" },
        ],
        faqs: stripViewGuidePageFaq,
      });
    case "/guide/palms-place-unit-types":
      return guideGraphs({
        path: "/guide/palms-place-unit-types",
        meta: palmsPlaceUnitTypesGuideMeta,
        headline: palmsPlaceUnitTypesIntro.headline,
        authorName: buyer,
        authorJobTitle: buyerTitle,
        breadcrumbs: [
          { name: "Home", path: "/" },
          { name: "Buyers", path: "/buyers" },
          { name: "Unit types", path: "/guide/palms-place-unit-types" },
        ],
        faqs: unitTypesGuidePageFaq,
      });
    case "/guide/palms-place-short-term-rentals":
      return guideGraphs({
        path: "/guide/palms-place-short-term-rentals",
        meta: palmsPlaceShortTermRentalGuideMeta,
        headline: palmsPlaceShortTermRentalIntro.headline,
        authorName: buyer,
        authorJobTitle: buyerTitle,
        breadcrumbs: [
          { name: "Home", path: "/" },
          { name: "Buyers", path: "/buyers" },
          { name: "Short-term rentals", path: "/guide/palms-place-short-term-rentals" },
        ],
        faqs: shortTermRentalGuidePageFaq,
      });
    default: {
      const exhaustive: never = path;
      return exhaustive;
    }
  }
}

/**
 * Same JSON-LD graphs the canonical HTML page emits, including the sitewide
 * graph from the root layout. AMP route handlers do not use that layout.
 */
export function getAmpStructuredData(
  canonicalPath: string,
): Array<JsonLdGraph | Record<string, unknown>> {
  if (!isAmpSchemaPath(canonicalPath)) {
    throw new Error(`No AMP structured data for ${canonicalPath}`);
  }
  return [getBaseJsonLd(), ...graphsForPath(canonicalPath)];
}

for (const path of ampCanonicalPaths()) {
  if (!isAmpSchemaPath(path)) {
    throw new Error(`AMP catalog path missing structured data: ${path}`);
  }
}
