import { ampCallToActionUrls } from "@/lib/amp/catalog";
import { absoluteAmpUrl, absoluteCanonicalUrl } from "@/lib/amp/paths";
import { getAmpStructuredData } from "@/lib/amp/structured-data";
import type { AmpFaqGroup, AmpImage, AmpPage, AmpSection, AmpVideo } from "@/lib/amp/types";
import { formatPalmsPlaceTowerAddressLine, palmsPlaceTower } from "@/lib/content/palms-place-building";
import {
  GOOGLE_SITES_CITATION_PATH,
  getUniqueGoogleMaps,
  type UniqueGoogleMap,
} from "@/lib/content/maps-page";
import { relatedLinksForPath } from "@/lib/internal-links";
import { googleMapsDirectionsUrl, resolveMapEmbedSrc } from "@/lib/maps-embed";
import {
  formatOfficeAddressLine,
  formatOfficeHoursWithSpecial,
  getTelHref,
  siteContact,
} from "@/lib/site-contact";
import { getSiteUrl } from "@/lib/site-url";

const AMP_BOILERPLATE =
  "body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}";

const AMP_NOSCRIPT_BOILERPLATE =
  "body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}";

const AMP_CUSTOM_CSS = `
body{margin:0;background:#0d0d0d;color:#f5f0e6;font-family:Georgia,serif;line-height:1.55}
a{color:#e4c98a}
.wrap{max-width:40rem;margin:0 auto;padding:1.25rem 1.25rem 3rem}
.brand{font-size:.85rem;letter-spacing:.08em;text-transform:uppercase;margin:0 0 1rem}
h1{font-size:1.85rem;line-height:1.15;margin:0 0 .75rem}
h2{font-size:1.25rem;line-height:1.25;margin:1.75rem 0 .5rem}
h3{font-size:1.1rem;line-height:1.3;margin:1.25rem 0 .4rem}
p,li{font-size:1.05rem}
.byline,.note{color:rgba(245,240,230,.72);font-size:.95rem}
.actions{display:flex;flex-wrap:wrap;gap:.75rem;margin:1.25rem 0}
.actions a{display:inline-block;min-height:44px;padding:.65rem 1rem;border:1px solid #c5a35a;border-radius:.5rem;text-decoration:none}
.actions a.primary{background:#c5a35a;color:#0d0d0d}
ol,ul{padding-left:1.25rem}
li{margin:.4rem 0}
footer{margin-top:2.5rem;padding-top:1rem;border-top:1px solid rgba(197,163,90,.35);font-size:.95rem}
amp-img,amp-video,amp-iframe{margin:1rem 0}
`.trim();

const MAP_PLACEHOLDER = {
  src: "/images/hero-tower-dusk.webp",
  width: 1536,
  height: 1024,
  alt: "Palms Place condo tower at dusk on the Las Vegas Strip — real building photo",
} as const;

type LocationHtml = {
  afterHeadingId: Record<string, string>;
  fallback: string;
  needsIframe: boolean;
};

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function absoluteAsset(src: string): string {
  if (src.startsWith("http://") || src.startsWith("https://")) return src;
  const origin = getSiteUrl().replace(/\/$/, "");
  return `${origin}${src.startsWith("/") ? src : `/${src}`}`;
}

function renderJsonLdScripts(canonicalPath: string): string {
  return getAmpStructuredData(canonicalPath)
    .map((graph) => {
      const json = JSON.stringify(graph).replaceAll("<", "\\u003c");
      return `<script type="application/ld+json">${json}</script>`;
    })
    .join("");
}

function renderImage(image: AmpImage): string {
  return `<amp-img src="${escapeHtml(absoluteAsset(image.src))}" width="${image.width}" height="${image.height}" layout="responsive" alt="${escapeHtml(image.alt)}"></amp-img>`;
}

function renderVideo(video: AmpVideo): string {
  const caption = video.caption
    ? `<figcaption class="note">${escapeHtml(video.caption)}</figcaption>`
    : "";
  return `<figure><amp-video width="${video.width}" height="${video.height}" layout="responsive" poster="${escapeHtml(absoluteAsset(video.poster))}" controls><source src="${escapeHtml(absoluteAsset(video.src))}" type="video/mp4" /></amp-video>${caption}</figure>`;
}

function externalAnchor(href: string, label: string): string {
  return `<a href="${escapeHtml(href)}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)}</a>`;
}

function pageAnchor(href: string, label: string): string {
  if (href.startsWith("http://") || href.startsWith("https://") || href.startsWith("mailto:") || href.startsWith("tel:")) {
    const external = href.startsWith("http");
    const attrs = external ? ` target="_blank" rel="noopener noreferrer"` : "";
    return `<a href="${escapeHtml(href)}"${attrs}>${escapeHtml(label)}</a>`;
  }
  return `<a href="${escapeHtml(absoluteCanonicalUrl(href))}">${escapeHtml(label)}</a>`;
}

function renderAmpIframe(src: string, title: string): string {
  return `<amp-iframe width="600" height="400" layout="responsive" sandbox="allow-scripts allow-same-origin allow-popups" frameborder="0" src="${escapeHtml(src)}" title="${escapeHtml(title)}"><amp-img src="${escapeHtml(absoluteAsset(MAP_PLACEHOLDER.src))}" width="${MAP_PLACEHOLDER.width}" height="${MAP_PLACEHOLDER.height}" layout="fill" placeholder alt="${escapeHtml(MAP_PLACEHOLDER.alt)}"></amp-img></amp-iframe>`;
}

function mapLinkLine(place: UniqueGoogleMap): string {
  return `<p class="map-links">${externalAnchor(place.mapsUrl, "Open in Google Maps")} · ${externalAnchor(place.directionsUrl, "Directions")}</p>`;
}

function embedApiKey(): string | undefined {
  return process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY?.trim() || undefined;
}

function officeEmbedSrc(): string {
  const officeLine = formatOfficeAddressLine() || "Las Vegas, NV";
  const officeCoords =
    typeof siteContact.officeLatitude === "number" && typeof siteContact.officeLongitude === "number"
      ? { latitude: siteContact.officeLatitude, longitude: siteContact.officeLongitude }
      : undefined;
  return resolveMapEmbedSrc({
    query: officeLine,
    coords: officeCoords,
    overrideUrl:
      process.env.NEXT_PUBLIC_CONTACT_MAP_EMBED_URL?.trim() || siteContact.contactMapEmbedUrl?.trim(),
    embedApiKey: embedApiKey(),
  });
}

function towerEmbedSrc(): string {
  return resolveMapEmbedSrc({
    query: formatPalmsPlaceTowerAddressLine(),
    coords: {
      latitude: palmsPlaceTower.latitude,
      longitude: palmsPlaceTower.longitude,
    },
    embedApiKey: embedApiKey(),
  });
}

function renderEmbeddedPlace(place: UniqueGoogleMap, heading: string, headingId: string): string {
  const embed = place.embed
    ? renderAmpIframe(
        resolveMapEmbedSrc({
          query: place.query,
          coords: place.coords,
          embedApiKey: embedApiKey(),
        }),
        place.title,
      )
    : "";
  return `<section><h2 id="${escapeHtml(headingId)}">${escapeHtml(heading)}</h2><p>${escapeHtml(place.description)}</p>${embed}${mapLinkLine(place)}</section>`;
}

function renderMapsBody(): string {
  const places = getUniqueGoogleMaps();
  const embedPlaces = places.filter((place) => place.embed);
  const nearbyPlaces = places.filter((place) => !place.embed);
  const officeLine = formatOfficeAddressLine();
  const origin = getSiteUrl().replace(/\/$/, "");
  const citationUrl = `${origin}${GOOGLE_SITES_CITATION_PATH}`;
  const gbpHref = siteContact.googleBusinessProfileUrl?.trim();
  const reviewHref = siteContact.googleWriteReviewUrl?.trim();
  const phone = siteContact.phone ?? "";

  const embeds = embedPlaces
    .map((place) =>
      renderEmbeddedPlace(
        place,
        place.id === "gbp-office"
          ? "Where is the Palms Place Condos office on Google Maps?"
          : "Where is the Palms Place tower on Google Maps?",
        `map-${place.id}-heading`,
      ),
    )
    .join("");

  const gbpLine = gbpHref ? `Google Business Profile: ${externalAnchor(gbpHref, "open the GBP map listing")}` : "";
  const reviewLine = reviewHref ? externalAnchor(reviewHref, "Write a Google review") : "";
  const gbpReview =
    gbpLine || reviewLine
      ? `<p>${[gbpLine, reviewLine].filter(Boolean).join(" · ")}. License ${escapeHtml(siteContact.license)}. ${escapeHtml(siteContact.brokerage)}.</p>`
      : `<p>License ${escapeHtml(siteContact.license)}. ${escapeHtml(siteContact.brokerage)}.</p>`;

  const citation = `<section><h2 id="maps-citation-heading">What NAP should a map citation and backlink use?</h2><p>Use the office NAP—not the tower—when you cite ${escapeHtml(siteContact.gbpBusinessName)} on Google Maps, Google Sites, or another directory. Name, address, and phone must match the Google Business Profile.</p><ul><li>Name: ${escapeHtml(siteContact.gbpBusinessName)}</li><li>Address: ${escapeHtml(officeLine)}</li>${phone ? `<li>Phone: ${escapeHtml(phone)}</li>` : ""}<li>Hours: ${escapeHtml(siteContact.officeHoursLine ?? "")}</li><li>Website backlink: ${pageAnchor("/", `Palms Place condos for sale — ${siteContact.agentName}`)}</li></ul>${gbpReview}</section>`;

  const sites = `<section><h2 id="google-sites-heading">How do I embed the GBP map on a Google Site?</h2><p>Publish one Google Site (sites.google.com) as a Google-property citation. Do not clone it 150 times. The embed is the office GBP map, the office NAP, and a follow link back to this website.</p><ol><li>Create a site at Google Sites.</li><li>Insert, Embed, URL, and paste ${externalAnchor(citationUrl, citationUrl)}.</li><li>Or Insert, Map and search ${escapeHtml(siteContact.gbpBusinessName)}, ${escapeHtml(officeLine)}.</li><li>Add a text box with the NAP above and a link to ${pageAnchor("/", `${origin}/`)} using the anchor “Palms Place condos for sale — ${escapeHtml(siteContact.agentName)}.”</li><li>Publish the Google Site and keep NAP identical to this page.</li></ol><p class="note">Preview the citation file: ${pageAnchor(GOOGLE_SITES_CITATION_PATH, "GBP map citation for Google Sites")}.</p></section>`;

  const nearbyItems = nearbyPlaces
    .map(
      (place) =>
        `<li><h3>${escapeHtml(place.title)}</h3><p>${escapeHtml(place.description)}</p>${mapLinkLine(place)}</li>`,
    )
    .join("");
  const nearby = `<section><h2 id="nearby-maps-heading">Which unique Google Maps sit near Palms Place?</h2><p>Each landmark below is a different Google Maps query—not a second copy of the office pin. Use them to explain drive patterns. They are not Palms Place amenities and not extra GBP listings.</p><ul>${nearbyItems}</ul></section>`;

  const whyNot = `<section><h2 id="why-not-150-heading">Why not 150 unique Google Sites with the same map?</h2><p>Scaled pages that repeat one Google Map, one NAP, and one backlink are doorway-style content. Google can ignore or demote them, and they can put the Business Profile at risk. This site ships unique maps (office vs tower vs landmarks) and one Google Sites embed kit with a real citation and a follow backlink to palmsplacecondos.com.</p></section>`;

  return `${embeds}${citation}${sites}${nearby}${whyNot}`;
}

function buildLocationHtml(canonicalPath: string): LocationHtml {
  if (canonicalPath === "/maps") {
    return { afterHeadingId: {}, fallback: renderMapsBody(), needsIframe: true };
  }
  if (canonicalPath === "/contact") {
    const office = getUniqueGoogleMaps().find((place) => place.id === "gbp-office");
    const officeLine = formatOfficeAddressLine() || "Las Vegas, NV";
    const links = office ? mapLinkLine(office) : "";
    return {
      afterHeadingId: {
        "contact-map-heading": `${renderAmpIframe(officeEmbedSrc(), `Map — office at ${officeLine}`)}${links}`,
      },
      fallback: "",
      needsIframe: true,
    };
  }
  if (canonicalPath === "/area/palms-place-las-vegas") {
    const tower = getUniqueGoogleMaps().find((place) => place.id === "tower");
    const links = tower ? mapLinkLine(tower) : "";
    return {
      afterHeadingId: {
        "area-map-heading": `${renderAmpIframe(towerEmbedSrc(), `Map of Palms Place at ${formatPalmsPlaceTowerAddressLine()}`)}${links}`,
      },
      fallback: "",
      needsIframe: true,
    };
  }
  return { afterHeadingId: {}, fallback: "", needsIframe: false };
}

function renderSection(section: AmpSection, afterHeadingId: Record<string, string>): string {
  const level = section.headingLevel === 3 ? "h3" : "h2";
  const id = section.headingId ? ` id="${escapeHtml(section.headingId)}"` : "";
  const paragraphs = section.paragraphs
    .filter((paragraph) => paragraph.trim().length > 0)
    .map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`)
    .join("");
  const items = section.items ?? [];
  const list =
    items.length > 0
      ? `<${section.ordered ? "ol" : "ul"}>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</${section.ordered ? "ol" : "ul"}>`
      : "";
  const extra = section.headingId ? (afterHeadingId[section.headingId] ?? "") : "";
  return `<section><${level}${id}>${escapeHtml(section.heading)}</${level}>${paragraphs}${list}${extra}</section>`;
}

function renderFaqItem(question: string, answer: string, level: "h2" | "h3"): string {
  return `<section><${level}>${escapeHtml(question)}</${level}><p>${escapeHtml(answer)}</p></section>`;
}

function renderFaqGroup(group: AmpFaqGroup): string {
  const id = group.headingId ? ` id="${escapeHtml(group.headingId)}"` : "";
  const intro = group.intro ? `<p>${escapeHtml(group.intro)}</p>` : "";
  const items = group.items.map((item) => renderFaqItem(item.question, item.answer, "h3")).join("");
  return `<section><h2${id}>${escapeHtml(group.heading)}</h2>${intro}${items}</section>`;
}

function renderFaqs(page: AmpPage): string {
  if (page.faqGroups && page.faqGroups.length > 0) {
    return page.faqGroups.map(renderFaqGroup).join("");
  }
  return page.faqs.map((item) => renderFaqItem(item.question, item.answer, "h2")).join("");
}

function renderRelated(canonicalPath: string): string {
  const links = relatedLinksForPath(canonicalPath);
  if (links.length === 0) return "";
  const items = links
    .map((link) => {
      const description = link.description
        ? `<p class="note">${escapeHtml(link.description)}</p>`
        : "";
      return `<li>${pageAnchor(link.href, link.label)}${description}</li>`;
    })
    .join("");
  return `<section><h2>Where should you go next?</h2><ul>${items}</ul></section>`;
}

function renderNap(): string {
  const phone = siteContact.phone ?? "";
  const tel = phone ? getTelHref(phone) : undefined;
  const address = formatOfficeAddressLine();
  const hours = formatOfficeHoursWithSpecial();
  const phoneLine = tel ? pageAnchor(tel, phone) : escapeHtml(phone);
  const emails = [siteContact.emailGeneral, siteContact.emailListings].filter(
    (email): email is string => Boolean(email),
  );
  const emailLine =
    emails.length > 0
      ? `<p>${emails.map((email) => pageAnchor(`mailto:${email}`, email)).join(" · ")}</p>`
      : "";
  return `<footer><h2>Office</h2><p>${escapeHtml(siteContact.gbpBusinessName)}</p><p>${escapeHtml(siteContact.agentName)}, ${escapeHtml(siteContact.agentTitle)}</p><p>Nevada license ${escapeHtml(siteContact.license)}</p><p>${escapeHtml(siteContact.brokerage)}</p><p>${escapeHtml(address)}</p><p>${phoneLine}</p>${emailLine}<p>${escapeHtml(hours)}</p><p>${escapeHtml(siteContact.primaryServiceArea)}</p></footer>`;
}

function renderActions(page: AmpPage, canonical: string): string {
  const actions = ampCallToActionUrls();
  const phone = siteContact.phone ?? "";
  const tel = phone ? getTelHref(phone) : undefined;
  const officeLine = formatOfficeAddressLine() || "Las Vegas, NV";
  const links: string[] = [
    `<a class="primary" href="${escapeHtml(canonical)}">Full page</a>`,
  ];
  if (tel) {
    links.push(`<a class="primary" href="${escapeHtml(tel)}">Call ${escapeHtml(phone)}</a>`);
  }
  if (siteContact.emailGeneral) {
    links.push(pageAnchor(`mailto:${siteContact.emailGeneral}`, "Email the office"));
  }
  if (siteContact.emailListings) {
    links.push(pageAnchor(`mailto:${siteContact.emailListings}`, "Email listings"));
  }
  links.push(pageAnchor(actions.schedule, "Schedule an appointment"));
  links.push(externalAnchor(actions.search, "Browse listings"));
  links.push(externalAnchor(googleMapsDirectionsUrl(officeLine), "Office directions"));
  if (
    page.canonicalPath === "/area/palms-place-las-vegas" ||
    page.canonicalPath === "/maps" ||
    page.canonicalPath === "/"
  ) {
    links.push(
      externalAnchor(googleMapsDirectionsUrl(formatPalmsPlaceTowerAddressLine()), "Tower directions"),
    );
  }
  if (page.canonicalPath === "/contact" || page.canonicalPath === "/maps") {
    const gbp = siteContact.googleBusinessProfileUrl?.trim();
    const review = siteContact.googleWriteReviewUrl?.trim();
    if (gbp) links.push(externalAnchor(gbp, "Google Business Profile"));
    if (review) links.push(externalAnchor(review, "Write a Google review"));
  }
  if (page.canonicalPath === "/contact" || page.canonicalPath === "/photos") {
    links.push(pageAnchor("/photo-use", "Photo use terms"));
  }
  return `<div class="actions">${links.join("")}</div>`;
}

/** Valid AMP HTML for one paired marketing page. */
export function renderAmpDocument(page: AmpPage): string {
  const canonical = absoluteCanonicalUrl(page.canonicalPath);
  const location = buildLocationHtml(page.canonicalPath);
  const images = (page.images ?? []).map(renderImage).join("");
  const video = page.video ? renderVideo(page.video) : "";
  const sections = page.sections.map((section) => renderSection(section, location.afterHeadingId)).join("");
  const byline = page.byline ? `<p class="byline">${escapeHtml(page.byline)}</p>` : "";
  const h1Id = page.h1Id ? ` id="${escapeHtml(page.h1Id)}"` : "";
  const extensions = [
    page.video
      ? '<script async custom-element="amp-video" src="https://cdn.ampproject.org/v0/amp-video-0.1.js"></script>'
      : "",
    location.needsIframe
      ? '<script async custom-element="amp-iframe" src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"></script>'
      : "",
  ]
    .filter(Boolean)
    .join("");

  return `<!doctype html>
<html amp lang="en">
<head>
<meta charset="utf-8">
<script async src="https://cdn.ampproject.org/v0.js"></script>
<title>${escapeHtml(page.title)}</title>
<link rel="canonical" href="${escapeHtml(canonical)}">
<meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">
<meta name="description" content="${escapeHtml(page.description)}">
${extensions}
${renderJsonLdScripts(page.canonicalPath)}
<style amp-boilerplate>${AMP_BOILERPLATE}</style><noscript><style amp-boilerplate>${AMP_NOSCRIPT_BOILERPLATE}</style></noscript>
<style amp-custom>${AMP_CUSTOM_CSS}</style>
</head>
<body>
<main class="wrap">
<p class="brand"><a href="${escapeHtml(absoluteAmpUrl("/"))}">${escapeHtml(siteContact.gbpBusinessName)}</a></p>
<h1${h1Id}>${escapeHtml(page.h1)}</h1>
<p>${escapeHtml(page.lede)}</p>
${byline}
${renderActions(page, canonical)}
${images}
${video}
${sections}
${location.fallback}
${renderFaqs(page)}
${renderRelated(page.canonicalPath)}
${renderNap()}
</main>
</body>
</html>
`;
}
