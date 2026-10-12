import { canonicalPathFromAmpSegments } from "@/lib/amp/paths";
import type { AmpPage, AmpSection } from "@/lib/amp/types";
import { getCalendlyUrl } from "@/lib/calendly";
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
import { featuredListing } from "@/lib/content/featured-listing";
import { homeFaqItems } from "@/lib/content/home-faq";
import { mapsPage } from "@/lib/content/maps-page";
import { unit8322Gallery } from "@/lib/content/media-gallery";
import { palmsPlaceAmenitiesGuideMeta, palmsPlaceAmenitiesIntro, palmsPlaceAmenitiesSections } from "@/lib/content/palms-place-amenities-guide";
import { formatPalmsPlaceTowerAddressLine, palmsPlaceTower } from "@/lib/content/palms-place-building";
import {
  palmsPlaceBuyerGuideIntro,
  palmsPlaceBuyerGuideMeta,
  palmsPlaceBuyerGuideSections,
  palmsPlaceTourChecklist,
} from "@/lib/content/palms-place-buyer-guide";
import {
  palmsPlaceCondosVsHotelGuideMeta,
  palmsPlaceCondosVsHotelIntro,
  palmsPlaceCondosVsHotelSections,
} from "@/lib/content/palms-place-condos-vs-hotel-guide";
import {
  palmsPlaceFaqAllAsFaqItems,
  palmsPlaceFaqIntro,
  palmsPlaceFaqPlanningIntro,
  palmsPlaceFaqPlanningStay,
  palmsPlaceFaqPrimary,
} from "@/lib/content/palms-place-faq";
import {
  palmsPlaceFurnishedGuideMeta,
  palmsPlaceFurnishedIntro,
  palmsPlaceFurnishedSections,
} from "@/lib/content/palms-place-furnished-guide";
import { palmsPlaceHoaGuideMeta, palmsPlaceHoaIntro, palmsPlaceHoaSections } from "@/lib/content/palms-place-hoa-guide";
import {
  palmsPlaceSellerGuideIntro,
  palmsPlaceSellerGuideMeta,
  palmsPlaceSellerGuideSections,
  palmsPlaceSellerPrepChecklist,
} from "@/lib/content/palms-place-seller-guide";
import {
  palmsPlaceShortTermRentalGuideMeta,
  palmsPlaceShortTermRentalIntro,
  palmsPlaceShortTermRentalSections,
} from "@/lib/content/palms-place-short-term-rental-guide";
import {
  palmsPlaceStripViewGuideMeta,
  palmsPlaceStripViewIntro,
  palmsPlaceStripViewSections,
} from "@/lib/content/palms-place-strip-view-guide";
import {
  palmsPlaceUnitSizeNotes,
  palmsPlaceUnitTypesGuideMeta,
  palmsPlaceUnitTypesIntro,
  palmsPlaceUnitTypesSections,
} from "@/lib/content/palms-place-unit-types-guide";
import { videoPageFaq } from "@/lib/content/video-page-faq";
import { getRealScoutSharedSearchUrl } from "@/lib/realscout";
import { formatTeamPhrase, getGbpDescription, siteContact } from "@/lib/site-contact";

const HERO_IMAGE = {
  src: "/images/hero-tower-dusk.webp",
  width: 1536,
  height: 1024,
  alt: "Palms Place condo tower at dusk on the Las Vegas Strip — real building photo",
} as const;

const GUIDE_NOTE =
  "General real estate guidance—not legal, tax, or HOA interpretation. Confirm rules in official documents with licensed professionals.";

type GuideInput = {
  canonicalPath: string;
  title: string;
  description: string;
  h1: string;
  lede: string;
  byline: string;
  sections: { question: string; answer: string }[];
  faqs: { question: string; answer: string }[];
  checklist?: AmpSection;
};

function guidePage(input: GuideInput): AmpPage {
  const sections: AmpSection[] = [];
  if (input.checklist) sections.push(input.checklist);
  for (const section of input.sections) {
    sections.push({ heading: section.question, paragraphs: [section.answer] });
  }
  return {
    canonicalPath: input.canonicalPath,
    title: input.title,
    description: input.description,
    h1: input.h1,
    lede: input.lede,
    byline: input.byline,
    sections,
    faqs: input.faqs,
  };
}

function reviewedByline(name: string, title: string, dateModified: string): string {
  return `By ${name}, ${title}. Last reviewed ${dateModified}. ${GUIDE_NOTE}`;
}

function buildHome(): AmpPage {
  const description = getGbpDescription();
  return {
    canonicalPath: "/",
    title: "Palms Place Condos for Sale | 4381 W Flamingo | Dr. Jan Duffy",
    description:
      "Palms Place at 4381 W Flamingo Road—studio to penthouse Strip-adjacent condos. Local guidance from Dr. Jan Duffy, Palms Place listing specialist.",
    h1: "Palms Place Condos for Sale in Las Vegas",
    h1Id: "hero-heading",
    lede: `${siteContact.gbpBusinessName} is a high-rise at ${palmsPlaceTower.streetAddress}, west of the Las Vegas Strip. ${description}`,
    images: [HERO_IMAGE],
    sections: [
      {
        heading: "Which Palms Place condo is featured right now?",
        headingId: "featured-listing-heading",
        paragraphs: [
          `${featuredListing.addressLine}. ${featuredListing.status}. ${featuredListing.price} (prior ask ${featuredListing.previousPrice}). ${featuredListing.beds}, ${featuredListing.baths}, ${featuredListing.squareFeet}, ${featuredListing.entryLevel}. MLS #${featuredListing.mlsNumber}.`,
          featuredListing.overview,
        ],
      },
      {
        heading: "Which Palms Place condos are for sale near the Las Vegas Strip?",
        headingId: "stay-heading",
        paragraphs: [
          `Palms Place inventory at ${palmsPlaceTower.streetAddress} typically includes studio and one-bedroom Las Vegas high-rise condos near Palms Casino Resort. Compare floor plans on the full page, then search live listings or ask ${siteContact.agentName} for current HOA details.`,
        ],
      },
      {
        heading: "Why buy a Palms Place condo in Las Vegas?",
        headingId: "why-buy-heading",
        paragraphs: [
          "Buyers choose Palms Place for Strip-adjacent high-rise living with HOA amenities such as pool and outdoor space, concierge-style convenience, and a lock-and-leave lifestyle—often as a primary home, second home, or long-term hold. Confirm HOA rules, fees, and rental restrictions with your agent and official disclosures before you write an offer.",
          `Palms Place floor plans range from efficient studios to larger one-bedroom layouts. Work with ${siteContact.agentName} (${siteContact.agentTitle}) and ${siteContact.buyerSpecialistName}, ${siteContact.buyerSpecialistTitle}, at ${siteContact.brokerage} to compare Las Vegas high-rise condos, review disclosures, and tour Palms Casino Resort residences access and HOA rules before you write an offer.`,
        ],
      },
      {
        heading: "Which Palms Place amenities do Las Vegas owners actually get?",
        headingId: "unwind-heading",
        paragraphs: [
          "HOA amenities Palms Place documents describe can include resort-style pool and outdoor spaces. Strip-adjacent residences do not automatically include every hotel pool program—verify hours, guest policies, and fees with disclosures and your agent.",
        ],
      },
      {
        heading: "Do Palms Place owners get the same pool and cabana access as hotel guests?",
        headingId: "unwind-pool-heading",
        headingLevel: 3,
        paragraphs: [
          "Hotel-adjacent pool experiences may be available through the resort; ownership benefits differ. Ask your agent what applies to residents versus hotel guests for Palms Casino Resort residences access.",
          "For resort pool and cabana programs operated by the Palms, see the official resort site.",
        ],
      },
      {
        heading: "What do Palms Place HOA fees cover in Las Vegas?",
        headingId: "unwind-hoa-heading",
        headingLevel: 3,
        paragraphs: [
          "HOA fees, special assessments, rental caps, and parking rules change. Review the latest HOA packet and resale package with your agent and a qualified professional before you rely on any summary.",
        ],
      },
      {
        heading: "How close is Palms Place to Palms Casino Resort?",
        headingId: "unwind-resort-heading",
        headingLevel: 3,
        paragraphs: [
          "Gaming, dining, and entertainment are steps away at Palms Casino Resort—separate from condominium ownership and HOA rules.",
        ],
      },
      {
        heading: "Which Palms Place listings are for sale right now?",
        headingId: "listings-heading",
        paragraphs: [
          `Browse Palms Place condos for sale and nearby Las Vegas high-rise listings on the full page. Availability and details are provided by the listing service. For filters and saved criteria, use the curated RealScout search (${siteContact.agentName}, listing specialist and team leader for Palms Place).`,
        ],
      },
    ],
    faqGroups: [
      {
        heading: "What do Palms Place buyers in Las Vegas ask first?",
        headingId: "home-faq-heading",
        intro:
          "Direct answers about Palms Place condos for sale—not hotel booking—plus inventory and how to tour with the local listing specialist.",
        items: homeFaqItems,
      },
    ],
    faqs: homeFaqItems,
  };
}

function buildPages(): AmpPage[] {
  const buyer = siteContact.buyerSpecialistName;
  const buyerTitle = siteContact.buyerSpecialistTitle;
  const agent = siteContact.agentName;
  const agentTitle = siteContact.agentTitle;
  const towerLine = formatPalmsPlaceTowerAddressLine();

  const pages: AmpPage[] = [
    buildHome(),
    {
      canonicalPath: "/palms-place",
      title: "Palms Place Las Vegas | Building guide & condos for sale",
      description: `Palms Place is a ${palmsPlaceTower.floors}-story tower at 4381 W Flamingo Rd, west of the Las Vegas Strip. Location, residences, amenities & buying with ${formatTeamPhrase()} — ${siteContact.brokerage}.`,
      h1: "Palms Place Las Vegas — building guide & condos for sale",
      lede: `Palms Place is a ${palmsPlaceTower.floors}-story residential tower at ${towerLine}, connected to Palms Casino Resort and west of the Las Vegas Strip. It opened in ${palmsPlaceTower.openedYear}. This page summarizes location, residences, and how to buy or sell with ${siteContact.teamBrandName} at ${siteContact.brokerage}.`,
      images: [HERO_IMAGE],
      sections: [],
      faqs: palmsPlacePageFaq,
    },
    {
      canonicalPath: "/area/palms-place-las-vegas",
      title: "Palms Place location | West Flamingo & Paradise, Las Vegas NV",
      description:
        "Palms Place at 4381 W Flamingo Rd, Paradise 89103—Strip-adjacent tower location, map, directions, and links to buying guides for Las Vegas high-rise condos.",
      h1: "Palms Place location — West Flamingo & Paradise, Las Vegas",
      lede: `Palms Place is a ${palmsPlaceTower.floors}-story residential tower at ${towerLine}, west of the Las Vegas Strip in the Paradise area (ZIP ${palmsPlaceTower.postalCode}). This page orients buyers and sellers on geography and access. The team office NAP is on the contact page and is a different pin from the tower.`,
      sections: [
        {
          heading: "Is Palms Place on the Las Vegas Strip?",
          headingId: "area-strip-heading",
          paragraphs: [
            "Palms Place is Strip-adjacent on West Flamingo Road—close to resort and entertainment corridors without being the same product as a hotel room on Las Vegas Boulevard. Commute, noise, and walk time depend on which venue you visit most; tour at the hours you expect to use the home.",
          ],
        },
        {
          heading: "What is the Paradise / 89103 context for buyers?",
          headingId: "area-paradise-heading",
          paragraphs: [
            "Paradise is the broader Las Vegas valley address many Strip-adjacent towers use. Compare communities and valley homes on the full page before assuming a high-rise fits daily life.",
          ],
        },
        {
          heading: "Where is Palms Place on the map at 4381 W Flamingo Road?",
          headingId: "area-map-heading",
          paragraphs: [
            "Use the map for directions to the building. Listing tours and office meetings may use different addresses—confirm with your agent which pin applies to your appointment.",
          ],
        },
      ],
      faqs: areaPalmsPlacePageFaq,
    },
    {
      canonicalPath: "/faq",
      title: "Palms Place Las Vegas FAQ | Location, condos, and ownership",
      description: palmsPlaceFaqIntro.description,
      h1: palmsPlaceFaqIntro.title,
      lede: palmsPlaceFaqIntro.description,
      sections: [],
      faqGroups: [
        {
          heading: "What are the most common Palms Place condo questions?",
          headingId: "faq-common-heading",
          items: palmsPlaceFaqPrimary,
        },
        {
          heading: palmsPlaceFaqPlanningIntro.heading,
          headingId: "faq-planning-heading",
          intro: palmsPlaceFaqPlanningIntro.description,
          items: palmsPlaceFaqPlanningStay,
        },
      ],
      faqs: palmsPlaceFaqAllAsFaqItems(),
    },
    {
      canonicalPath: "/contact",
      title: "Contact Palms Place Condos — Las Vegas office",
      description: `Call ${siteContact.phone} for Palms Place tours and Las Vegas high-rise questions. ${siteContact.agentName}, ${siteContact.brokerage}.`,
      h1: `Contact ${siteContact.gbpBusinessName} — Las Vegas office`,
      lede: getGbpDescription() || `${formatTeamPhrase()}. ${siteContact.brokerage}.`,
      sections: [
        {
          heading: "How do I get directions to the Palms Place Condos office?",
          headingId: "contact-map-heading",
          paragraphs: [
            "Use the map for the team office NAP—not the Palms Place tower at 4381 W Flamingo Road. Confirm which pin applies to your appointment before you drive.",
          ],
        },
        {
          heading: "How do I request permission to reuse listing photos?",
          headingId: "contact-photos-heading",
          paragraphs: [
            "Email or call this office and name the unit and file. Photos are not Creative Commons. Full terms are on the photo-use page.",
          ],
        },
      ],
      faqs: getContactPageFaq(),
    },
    {
      canonicalPath: "/team",
      title: "Palms Place real estate team | Dr. Jan Duffy",
      description: `Meet ${siteContact.agentName}, Palms Place listing and buyers specialist. Call ${siteContact.phone} — ${siteContact.brokerage}.`,
      h1: "Palms Place real estate team — Las Vegas Strip high-rises",
      lede: `${siteContact.teamBrandName} helps buyers and sellers with Palms Place and Las Vegas high-rise condos at ${siteContact.brokerage}. Visible contact details match this site's Google Business Profile.`,
      sections: [],
      faqs: getTeamPageFaq(),
    },
    {
      canonicalPath: "/search",
      title: "Search Palms Place Listings | Live Condo Inventory",
      description: `Search live Palms Place and Las Vegas condo listings. Filter by price and status, then call ${siteContact.phone} — ${siteContact.agentName}.`,
      h1: "Search Palms Place & Las Vegas listings",
      lede: "Palms Place and Las Vegas high-rise inventory is searched through the team's curated RealScout link. Filter by price, property type, and status, then confirm every field with Dr. Jan Duffy before you tour or offer.",
      sections: [
        {
          heading: "Open the curated search",
          paragraphs: [
            "The live search opens in RealScout. This accelerated page does not embed the listing widget. Use the full search page when you need filters and saved alerts.",
          ],
        },
      ],
      faqs: searchPageFaq,
    },
    {
      canonicalPath: "/photos",
      title: "Palms Place high-rise condo tour photos | Las Vegas galleries",
      description:
        "First-party Palms Place condo tour photos—Strip views, interiors, and listing galleries with Dr. Jan Duffy at 4381 W Flamingo Road. Not competitor YouTube walkthroughs.",
      h1: "Palms Place condo photos in Las Vegas",
      lede: `Listing photography for Palms Place residences at ${palmsPlaceTower.streetAddress}—Strip views, furnished interiors, and balcony context. This is the first-party high-rise condo tour hub. Galleries support buyers researching ${siteContact.gbpBusinessName} inventory before a showing with ${siteContact.agentName}. Competitor YouTube walkthroughs are not this brokerage's listings.`,
      images: unit8322Gallery.photos.map((photo) => ({
        src: photo.src,
        width: photo.width,
        height: photo.height,
        alt: photo.alt,
      })),
      sections: [
        {
          heading: `Palms Place #${featuredListing.unitNumber} photos`,
          paragraphs: [unit8322Gallery.lede],
        },
      ],
      faqs: photosHubPageFaq,
    },
    {
      canonicalPath: "/video",
      title: "Dr. Jan Duffy Palms Place listing specialist video | Las Vegas",
      description: `${siteContact.agentName} is the Palms Place listing specialist in Las Vegas. Watch the first-party tower video, then call ${siteContact.phone} to tour 4381 W Flamingo Road.`,
      h1: "Dr. Jan Duffy Palms Place listing specialist — Las Vegas video",
      lede: `${siteContact.agentName} is the listing specialist for Palms Place at ${palmsPlaceTower.streetAddress}. This 48-second cut uses first-party building and listing photos. Call ${siteContact.phone ?? "the office"} to tour.`,
      video: {
        src: "/videos/dr-jan-duffy-palms-place-listing-specialist-youtube.mp4",
        width: 1920,
        height: 1080,
        poster: HERO_IMAGE.src,
        caption: "16:9 cut for YouTube and this page. Captions are on screen.",
      },
      sections: [
        {
          heading: "Where is the vertical Reels cut?",
          paragraphs: [
            "Use the 9:16 file on the full video page for Google Business Profile, Instagram Reels, and YouTube Shorts. Same captions. Same first-party photos.",
          ],
        },
      ],
      faqs: videoPageFaq,
    },
    {
      canonicalPath: "/maps",
      title: mapsPage.title,
      description: mapsPage.description,
      h1: mapsPage.h1,
      lede: "Two pins matter for Palms Place condos: the Google Business Profile office on Lindell, and the tower at 4381 W Flamingo Road. This page publishes those maps as unique citations with follow backlinks—not 150 duplicate Google Sites sharing one iframe.",
      sections: [],
      faqGroups: [
        {
          heading: "Palms Place Google Maps and Google Sites — short answers",
          headingId: "maps-faq-heading",
          intro: `${siteContact.agentName} · ${siteContact.brokerage} · ${siteContact.primaryServiceArea}.`,
          items: getMapsPageFaq(),
        },
      ],
      faqs: getMapsPageFaq(),
    },
    guidePage({
      canonicalPath: "/guide/buying-palms-place",
      title: "Buying a Palms Place condo | Team field guide",
      description: palmsPlaceBuyerGuideMeta.description,
      h1: palmsPlaceBuyerGuideIntro.headline,
      lede: palmsPlaceBuyerGuideIntro.lede,
      byline: `Last updated ${palmsPlaceBuyerGuideMeta.dateModified}. ${GUIDE_NOTE}`,
      checklist: {
        heading: "What should you ask on a Palms Place condo tour?",
        paragraphs: [
          `Use this checklist on every Palms Place showing—especially furnished or rental-history units. ${buyer} typically walks buyers through it before an offer deadline.`,
        ],
        items: palmsPlaceTourChecklist,
        ordered: true,
      },
      sections: palmsPlaceBuyerGuideSections,
      faqs: buyingGuidePageFaq,
    }),
    guidePage({
      canonicalPath: "/guide/selling-palms-place",
      title: "Selling a Palms Place condo | Team field guide",
      description: palmsPlaceSellerGuideMeta.description,
      h1: palmsPlaceSellerGuideIntro.headline,
      lede: palmsPlaceSellerGuideIntro.lede,
      byline: reviewedByline(agent, agentTitle, palmsPlaceSellerGuideMeta.dateModified),
      checklist: {
        heading: "What listing prep should Palms Place sellers finish first?",
        paragraphs: [
          "Work this Palms Place checklist first so photography, remarks, and HOA packets match the unit you are listing or touring. Confirm every item in official documents.",
        ],
        items: palmsPlaceSellerPrepChecklist,
        ordered: true,
      },
      sections: palmsPlaceSellerGuideSections,
      faqs: sellingGuidePageFaq,
    }),
    guidePage({
      canonicalPath: "/guide/palms-place-hoa-and-monthly-costs",
      title: "Palms Place HOA fees in Las Vegas | Buyer monthly cost guide",
      description: palmsPlaceHoaGuideMeta.description,
      h1: palmsPlaceHoaIntro.headline,
      lede: palmsPlaceHoaIntro.lede,
      byline: reviewedByline(buyer, buyerTitle, palmsPlaceHoaGuideMeta.dateModified),
      sections: palmsPlaceHoaSections,
      faqs: hoaGuidePageFaq,
    }),
    guidePage({
      canonicalPath: "/guide/furnished-palms-place-condos",
      title: "Furnished Palms Place condos in Las Vegas | Buyer guide",
      description: palmsPlaceFurnishedGuideMeta.description,
      h1: palmsPlaceFurnishedIntro.headline,
      lede: palmsPlaceFurnishedIntro.lede,
      byline: reviewedByline(buyer, buyerTitle, palmsPlaceFurnishedGuideMeta.dateModified),
      sections: palmsPlaceFurnishedSections,
      faqs: furnishedGuidePageFaq,
    }),
    guidePage({
      canonicalPath: "/guide/palms-place-amenities-and-resort-access",
      title: "Palms Place amenities in Las Vegas | Owner verification guide",
      description: palmsPlaceAmenitiesGuideMeta.description,
      h1: palmsPlaceAmenitiesIntro.headline,
      lede: palmsPlaceAmenitiesIntro.lede,
      byline: reviewedByline(agent, agentTitle, palmsPlaceAmenitiesGuideMeta.dateModified),
      sections: palmsPlaceAmenitiesSections,
      faqs: amenitiesGuidePageFaq,
    }),
    guidePage({
      canonicalPath: "/guide/palms-place-condos-vs-hotel",
      title: "Palms Place condos vs Palms.com hotel | Dr. Jan Duffy",
      description: palmsPlaceCondosVsHotelGuideMeta.description,
      h1: palmsPlaceCondosVsHotelIntro.headline,
      lede: palmsPlaceCondosVsHotelIntro.lede,
      byline: reviewedByline(agent, agentTitle, palmsPlaceCondosVsHotelGuideMeta.dateModified),
      sections: palmsPlaceCondosVsHotelSections,
      faqs: condosVsHotelGuidePageFaq,
    }),
    guidePage({
      canonicalPath: "/guide/palms-place-strip-view-condos",
      title: "Palms Place Strip view condos | Las Vegas high-rise outlooks",
      description: palmsPlaceStripViewGuideMeta.description,
      h1: palmsPlaceStripViewIntro.headline,
      lede: palmsPlaceStripViewIntro.lede,
      byline: reviewedByline(buyer, buyerTitle, palmsPlaceStripViewGuideMeta.dateModified),
      sections: palmsPlaceStripViewSections,
      faqs: stripViewGuidePageFaq,
    }),
    guidePage({
      canonicalPath: "/guide/palms-place-unit-types",
      title: "Palms Place studios vs one-bedroom condos in Las Vegas | Buyer guide",
      description: palmsPlaceUnitTypesGuideMeta.description,
      h1: palmsPlaceUnitTypesIntro.headline,
      lede: palmsPlaceUnitTypesIntro.lede,
      byline: reviewedByline(buyer, buyerTitle, palmsPlaceUnitTypesGuideMeta.dateModified),
      sections: [
        {
          question: "What square footage should you verify on each listing?",
          answer: `Public marketing often cites studios around ${palmsPlaceUnitSizeNotes.studioApproxSqFt} sq ft and one-bedroom layouts in the ${palmsPlaceUnitSizeNotes.oneBedApproxSqFt} sq ft range, but ${palmsPlaceUnitSizeNotes.penthouseNote} Always confirm on the listing record and during your tour—do not rely on building averages alone.`,
        },
        ...palmsPlaceUnitTypesSections,
      ],
      faqs: unitTypesGuidePageFaq,
    }),
    guidePage({
      canonicalPath: "/guide/palms-place-short-term-rentals",
      title: "Palms Place short-term rentals | HOA rules vs Airbnb videos",
      description: palmsPlaceShortTermRentalGuideMeta.description,
      h1: palmsPlaceShortTermRentalIntro.headline,
      lede: palmsPlaceShortTermRentalIntro.lede,
      byline: reviewedByline(buyer, buyerTitle, palmsPlaceShortTermRentalGuideMeta.dateModified),
      sections: palmsPlaceShortTermRentalSections,
      faqs: shortTermRentalGuidePageFaq,
    }),
  ];

  return pages;
}

const AMP_PAGES: Map<string, AmpPage> = new Map(
  buildPages().map((page) => [page.canonicalPath, page]),
);

/** Canonical paths that publish an AMP alternate. Unique AEO answer URLs only. */
export function ampCanonicalPaths(): string[] {
  return [...AMP_PAGES.keys()];
}

export function hasAmpPage(canonicalPath: string): boolean {
  return AMP_PAGES.has(canonicalPath);
}

export function getAmpPage(canonicalPath: string): AmpPage | undefined {
  return AMP_PAGES.get(canonicalPath);
}

export function getAmpPageBySegments(segments: string[] | undefined): AmpPage | undefined {
  const canonicalPath = canonicalPathFromAmpSegments(segments);
  if (!canonicalPath) return undefined;
  return getAmpPage(canonicalPath);
}

export function ampCallToActionUrls(): { search: string; schedule: string } {
  return {
    search: getRealScoutSharedSearchUrl(),
    schedule: getCalendlyUrl(),
  };
}
