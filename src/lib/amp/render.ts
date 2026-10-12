import { ampCallToActionUrls } from "@/lib/amp/catalog";
import { absoluteAmpUrl, absoluteCanonicalUrl } from "@/lib/amp/paths";
import type { AmpImage, AmpPage, AmpSection, AmpVideo } from "@/lib/amp/types";
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
p,li{font-size:1.05rem}
.byline,.note{color:rgba(245,240,230,.72);font-size:.95rem}
.actions{display:flex;flex-wrap:wrap;gap:.75rem;margin:1.25rem 0}
.actions a{display:inline-block;min-height:44px;padding:.65rem 1rem;border:1px solid #c5a35a;border-radius:.5rem;text-decoration:none}
.actions a.primary{background:#c5a35a;color:#0d0d0d}
ol,ul{padding-left:1.25rem}
li{margin:.4rem 0}
footer{margin-top:2.5rem;padding-top:1rem;border-top:1px solid rgba(197,163,90,.35);font-size:.95rem}
amp-img,amp-video{margin:1rem 0}
`.trim();

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

function renderImage(image: AmpImage): string {
  return `<amp-img src="${escapeHtml(absoluteAsset(image.src))}" width="${image.width}" height="${image.height}" layout="responsive" alt="${escapeHtml(image.alt)}"></amp-img>`;
}

function renderVideo(video: AmpVideo): string {
  const caption = video.caption
    ? `<figcaption class="note">${escapeHtml(video.caption)}</figcaption>`
    : "";
  return `<figure><amp-video width="${video.width}" height="${video.height}" layout="responsive" poster="${escapeHtml(absoluteAsset(video.poster))}" controls><source src="${escapeHtml(absoluteAsset(video.src))}" type="video/mp4" /></amp-video>${caption}</figure>`;
}

function renderSection(section: AmpSection): string {
  const paragraphs = section.paragraphs
    .filter((paragraph) => paragraph.trim().length > 0)
    .map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`)
    .join("");
  const items = section.items ?? [];
  const list =
    items.length > 0
      ? `<${section.ordered ? "ol" : "ul"}>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</${section.ordered ? "ol" : "ul"}>`
      : "";
  return `<section><h2>${escapeHtml(section.heading)}</h2>${paragraphs}${list}</section>`;
}

function renderNap(): string {
  const phone = siteContact.phone ?? "";
  const tel = phone ? getTelHref(phone) : undefined;
  const address = formatOfficeAddressLine();
  const hours = formatOfficeHoursWithSpecial();
  const phoneLine = tel
    ? `<a href="${escapeHtml(tel)}">${escapeHtml(phone)}</a>`
    : escapeHtml(phone);
  return `<footer><h2>Office</h2><p>${escapeHtml(siteContact.gbpBusinessName)}</p><p>${escapeHtml(siteContact.agentName)}, ${escapeHtml(siteContact.agentTitle)}</p><p>Nevada license ${escapeHtml(siteContact.license)}</p><p>${escapeHtml(siteContact.brokerage)}</p><p>${escapeHtml(address)}</p><p>${phoneLine}</p><p>${escapeHtml(hours)}</p><p>${escapeHtml(siteContact.primaryServiceArea)}</p></footer>`;
}

/** Valid AMP HTML for one paired marketing page. */
export function renderAmpDocument(page: AmpPage): string {
  const canonical = absoluteCanonicalUrl(page.canonicalPath);
  const actions = ampCallToActionUrls();
  const phone = siteContact.phone ?? "";
  const tel = phone ? getTelHref(phone) : undefined;
  const images = (page.images ?? []).map(renderImage).join("");
  const video = page.video ? renderVideo(page.video) : "";
  const sections = page.sections.map(renderSection).join("");
  const faqs = page.faqs
    .map(
      (item) =>
        `<section><h2>${escapeHtml(item.question)}</h2><p>${escapeHtml(item.answer)}</p></section>`,
    )
    .join("");
  const byline = page.byline ? `<p class="byline">${escapeHtml(page.byline)}</p>` : "";
  const call = tel
    ? `<a class="primary" href="${escapeHtml(tel)}">Call ${escapeHtml(phone)}</a>`
    : "";

  return `<!doctype html>
<html amp lang="en">
<head>
<meta charset="utf-8">
<script async src="https://cdn.ampproject.org/v0.js"></script>
<title>${escapeHtml(page.title)}</title>
<link rel="canonical" href="${escapeHtml(canonical)}">
<meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">
<meta name="description" content="${escapeHtml(page.description)}">
${page.video ? '<script async custom-element="amp-video" src="https://cdn.ampproject.org/v0/amp-video-0.1.js"></script>' : ""}
<style amp-boilerplate>${AMP_BOILERPLATE}</style><noscript><style amp-boilerplate>${AMP_NOSCRIPT_BOILERPLATE}</style></noscript>
<style amp-custom>${AMP_CUSTOM_CSS}</style>
</head>
<body>
<main class="wrap">
<p class="brand"><a href="${escapeHtml(absoluteAmpUrl("/"))}">${escapeHtml(siteContact.gbpBusinessName)}</a></p>
<h1>${escapeHtml(page.h1)}</h1>
<p>${escapeHtml(page.lede)}</p>
${byline}
<div class="actions">
<a class="primary" href="${escapeHtml(canonical)}">Full page</a>
${call}
<a href="${escapeHtml(actions.schedule)}">Schedule an appointment</a>
<a href="${escapeHtml(actions.search)}">Browse listings</a>
</div>
${images}
${video}
${sections}
${faqs}
${renderNap()}
</main>
</body>
</html>
`;
}
