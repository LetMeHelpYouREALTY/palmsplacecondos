/**
 * JSON-LD builders for GEO/SEO. NAP fields (telephone, address) are added only when
 * present in siteContact—must match visible copy and GBP (see site-contact.ts).
 */
import { siteContact } from "@/lib/site-contact";
import { getSiteUrl } from "@/lib/site-url";

const CONTEXT = "https://schema.org" as const;

export type JsonLdGraph = {
  "@context": typeof CONTEXT;
  "@graph": Record<string, unknown>[];
};

function id(siteUrl: string, fragment: string): string {
  return `${siteUrl.replace(/\/$/, "")}#${fragment}`;
}

/** Optional profile URLs (YouTube, GBP, etc.) — same as visible links only. */
function getSameAs(): string[] | undefined {
  const raw = process.env.NEXT_PUBLIC_SAME_AS_URLS?.trim();
  if (!raw) return undefined;
  const urls = raw
    .split(",")
    .map((s) => s.trim())
    .filter((s) => s.startsWith("http"));
  return urls.length > 0 ? urls : undefined;
}

function applyOfficeNapAndHours(
  entity: Record<string, unknown>,
  brokerageId: string,
  postalAddress: Record<string, unknown> | undefined,
  hoursSpec: Record<string, unknown> | undefined,
  includePhone: boolean,
): void {
  entity.worksFor = { "@id": brokerageId };
  entity.areaServed = [
    { "@type": "City", name: "Las Vegas", containedInPlace: { "@type": "State", name: "Nevada" } },
    { "@type": "AdministrativeArea", name: "Clark County" },
  ];
  if (includePhone && siteContact.phone) {
    entity.telephone = siteContact.phone;
  }
  if (postalAddress) {
    entity.address = postalAddress;
  }
  if (hoursSpec) {
    entity.openingHoursSpecification = hoursSpec;
  }
}

/**
 * Core entities: WebSite, brokerage RealEstateOffice, two RealEstateAgent profiles (listing + buyers).
 */
export function getBaseJsonLd(): JsonLdGraph {
  const siteUrl = getSiteUrl();
  const webId = id(siteUrl, "website");
  const brokerageId = id(siteUrl, "brokerage");
  const listingAgentId = id(siteUrl, "dr-jan-duffy");
  const buyersAgentId = id(siteUrl, "chance-fuller");

  const brokerage: Record<string, unknown> = {
    "@type": "RealEstateOffice",
    "@id": brokerageId,
    name: siteContact.brokerage,
    url: siteUrl,
    employee: [{ "@id": listingAgentId }, { "@id": buyersAgentId }],
  };

  const postalAddress =
    siteContact.streetAddress &&
    siteContact.addressLocality &&
    siteContact.addressRegion &&
    siteContact.postalCode
      ? {
          "@type": "PostalAddress",
          streetAddress: siteContact.streetAddress,
          addressLocality: siteContact.addressLocality,
          addressRegion: siteContact.addressRegion,
          postalCode: siteContact.postalCode,
          addressCountry: siteContact.addressCountry ?? "US",
        }
      : undefined;

  const hoursSpec = siteContact.officeHoursLine
    ? {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      }
    : undefined;

  if (postalAddress) {
    brokerage.address = postalAddress;
  }
  if (hoursSpec) {
    brokerage.openingHoursSpecification = hoursSpec;
  }

  const listingAgent: Record<string, unknown> = {
    "@type": "RealEstateAgent",
    "@id": listingAgentId,
    name: siteContact.agentName,
    jobTitle: siteContact.agentTitle,
    url: siteUrl,
    identifier: siteContact.license,
    colleague: { "@id": buyersAgentId },
  };

  const sameAs = getSameAs();
  if (sameAs) {
    listingAgent.sameAs = sameAs;
  }

  applyOfficeNapAndHours(listingAgent, brokerageId, postalAddress, hoursSpec, true);

  const buyersAgent: Record<string, unknown> = {
    "@type": "RealEstateAgent",
    "@id": buyersAgentId,
    name: siteContact.buyerSpecialistName,
    jobTitle: siteContact.buyerSpecialistTitle,
    url: siteUrl,
    colleague: { "@id": listingAgentId },
  };

  applyOfficeNapAndHours(buyersAgent, brokerageId, postalAddress, hoursSpec, true);

  const website: Record<string, unknown> = {
    "@type": "WebSite",
    "@id": webId,
    url: siteUrl,
    name: "Palms Place Condos",
    inLanguage: "en-US",
    publisher: { "@id": listingAgentId },
    about: [{ "@id": listingAgentId }, { "@id": buyersAgentId }, { "@id": brokerageId }],
  };

  return {
    "@context": CONTEXT,
    "@graph": [website, brokerage, listingAgent, buyersAgent],
  };
}

export type FaqItem = { question: string; answer: string };

/** FAQPage for use on the homepage only — must mirror visible FAQ copy. */
export function getHomeFaqPageJsonLd(items: FaqItem[]): JsonLdGraph {
  const siteUrl = getSiteUrl();
  const faqPage: Record<string, unknown> = {
    "@type": "FAQPage",
    "@id": `${siteUrl.replace(/\/$/, "")}#faq`,
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return {
    "@context": CONTEXT,
    "@graph": [faqPage],
  };
}
