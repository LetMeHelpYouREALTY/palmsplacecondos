/**
 * JSON-LD builders for GEO/SEO. NAP fields (telephone, address) are added only when
 * present in siteContact—must match visible copy and GBP (see site-contact.ts).
 */
import { formatOfficeAddressLine, siteContact } from "@/lib/site-contact";
import { getSiteUrl } from "@/lib/site-url";

const CONTEXT = "https://schema.org" as const;

export type JsonLdGraph = {
  "@context": typeof CONTEXT;
  "@graph": Record<string, unknown>[];
};

function id(siteUrl: string, fragment: string): string {
  return `${siteUrl.replace(/\/$/, "")}#${fragment}`;
}

/** E.164-style telephone for structured data when digits are US-based. */
function toTelE164(phone: string): string {
  const d = phone.replace(/\D/g, "");
  if (d.length === 10) return `+1${d}`;
  if (d.length === 11 && d.startsWith("1")) return `+${d}`;
  return phone;
}

function googleMapsSearchUrlForAddress(addressLine: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addressLine)}`;
}

/** Absolute agent/team photo URL for JSON-LD — set NEXT_PUBLIC_AGENT_IMAGE_URL in production when ready. */
function getAgentImageUrlForSchema(): string | undefined {
  const env = process.env.NEXT_PUBLIC_AGENT_IMAGE_URL?.trim();
  if (env) return env;
  return undefined;
}

/** Office pin for JSON-LD — site-contact first, then NEXT_PUBLIC_OFFICE_LAT/LNG (must match GBP). */
function getOfficeLatitude(): number | undefined {
  if (siteContact.officeLatitude != null) return siteContact.officeLatitude;
  const e = process.env.NEXT_PUBLIC_OFFICE_LAT?.trim();
  if (e) {
    const n = Number.parseFloat(e);
    return Number.isFinite(n) ? n : undefined;
  }
  return undefined;
}

function getOfficeLongitude(): number | undefined {
  if (siteContact.officeLongitude != null) return siteContact.officeLongitude;
  const e = process.env.NEXT_PUBLIC_OFFICE_LNG?.trim();
  if (e) {
    const n = Number.parseFloat(e);
    return Number.isFinite(n) ? n : undefined;
  }
  return undefined;
}

function defaultListingAgentDescription(): string {
  return (
    siteContact.schemaAgentDescription ??
    `Licensed Nevada Realtor specializing in Palms Place and Las Vegas high-rise condos. 35+ years Las Vegas market experience. ${siteContact.brokerage}.`
  );
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

function buildPalmsPlaceEntity(siteUrl: string): Record<string, unknown> {
  const placePalmsId = id(siteUrl, "place-palms-place");
  const b = siteContact.palmsPlaceBuilding;

  if (b) {
    return {
      "@type": "Apartment",
      "@id": placePalmsId,
      name: "Palms Place",
      description:
        "Las Vegas high-rise condominium residences near the Strip. Verify unit details, HOA rules, and amenities with your agent and official building disclosures.",
      address: {
        "@type": "PostalAddress",
        streetAddress: b.streetAddress,
        addressLocality: b.addressLocality,
        addressRegion: b.addressRegion,
        postalCode: b.postalCode,
        addressCountry: siteContact.addressCountry ?? "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: b.latitude,
        longitude: b.longitude,
      },
      containedInPlace: {
        "@type": "City",
        name: "Las Vegas",
        containedInPlace: { "@type": "State", name: "Nevada" },
      },
    };
  }

  return {
    "@type": "Place",
    "@id": placePalmsId,
    name: "Palms Place",
    containedInPlace: {
      "@type": "City",
      name: "Las Vegas",
      containedInPlace: { "@type": "State", name: "Nevada" },
    },
  };
}

/**
 * Core entities: WebSite, brokerage RealEstateOffice (+ LocalBusiness), two RealEstateAgent profiles,
 * Place or Apartment for Palms Place. Listing lead agent also typed as LocalBusiness when enriched.
 */
export function getBaseJsonLd(): JsonLdGraph {
  const siteUrl = getSiteUrl();
  const webId = id(siteUrl, "website");
  const brokerageId = id(siteUrl, "brokerage");
  const listingAgentId = id(siteUrl, "dr-jan-duffy");
  const buyersAgentId = id(siteUrl, "chance-fuller");

  const brokerage: Record<string, unknown> = {
    "@type": ["RealEstateOffice", "LocalBusiness"],
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
  if (siteContact.emailGeneral) {
    brokerage.email = siteContact.emailGeneral;
  }
  if (siteContact.phone) {
    brokerage.telephone = toTelE164(siteContact.phone);
  }

  const listingAgent: Record<string, unknown> = {
    "@type": ["RealEstateAgent", "LocalBusiness"],
    "@id": listingAgentId,
    name: siteContact.agentName,
    alternateName: siteContact.teamBrandName,
    description: defaultListingAgentDescription(),
    jobTitle: siteContact.agentTitle,
    url: siteUrl,
    identifier: siteContact.license,
    colleague: { "@id": buyersAgentId },
    priceRange: siteContact.schemaPriceRange ?? "$$$$",
  };

  const officeLine = formatOfficeAddressLine();
  if (officeLine) {
    listingAgent.hasMap = googleMapsSearchUrlForAddress(officeLine);
  }

  const lat = getOfficeLatitude();
  const lng = getOfficeLongitude();
  if (lat != null && lng != null) {
    listingAgent.geo = {
      "@type": "GeoCoordinates",
      latitude: lat,
      longitude: lng,
    };
  }

  const agentImage = getAgentImageUrlForSchema();
  if (agentImage) {
    listingAgent.image = agentImage;
  }

  const sameAs = getSameAs();
  if (sameAs) {
    listingAgent.sameAs = sameAs;
  }

  applyOfficeNapAndHours(listingAgent, brokerageId, postalAddress, hoursSpec, true);
  if (siteContact.emailListings) {
    listingAgent.email = siteContact.emailListings;
  }
  if (siteContact.phone) {
    listingAgent.telephone = toTelE164(siteContact.phone);
  }

  const buyersAgent: Record<string, unknown> = {
    "@type": "RealEstateAgent",
    "@id": buyersAgentId,
    name: siteContact.buyerSpecialistName,
    jobTitle: siteContact.buyerSpecialistTitle,
    url: siteUrl,
    colleague: { "@id": listingAgentId },
  };

  applyOfficeNapAndHours(buyersAgent, brokerageId, postalAddress, hoursSpec, true);
  if (siteContact.emailBuyers) {
    buyersAgent.email = siteContact.emailBuyers;
  }
  if (siteContact.phone) {
    buyersAgent.telephone = toTelE164(siteContact.phone);
  }

  const palmsPlace = buildPalmsPlaceEntity(siteUrl);
  const placePalmsId = id(siteUrl, "place-palms-place");

  listingAgent.knowsAbout = [{ "@id": placePalmsId }];

  const website: Record<string, unknown> = {
    "@type": "WebSite",
    "@id": webId,
    url: siteUrl,
    name: "Palms Place Condos",
    inLanguage: "en-US",
    publisher: { "@id": listingAgentId },
    about: [
      { "@id": placePalmsId },
      { "@id": listingAgentId },
      { "@id": buyersAgentId },
      { "@id": brokerageId },
    ],
  };

  return {
    "@context": CONTEXT,
    "@graph": [website, brokerage, listingAgent, buyersAgent, palmsPlace],
  };
}

/** Homepage WebPage entity — emit on `/` only. */
export function getHomeWebPageJsonLd(): JsonLdGraph {
  const siteUrl = getSiteUrl();
  const webId = id(siteUrl, "website");
  const placePalmsId = id(siteUrl, "place-palms-place");
  const pageUrl = `${siteUrl.replace(/\/$/, "")}/`;
  const webPage: Record<string, unknown> = {
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: "Palms Place Condos for Sale — Las Vegas Strip High-Rise Residences",
    isPartOf: { "@id": webId },
    about: { "@id": placePalmsId },
  };

  return {
    "@context": CONTEXT,
    "@graph": [webPage],
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
