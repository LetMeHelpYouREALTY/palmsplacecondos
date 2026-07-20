import { MARKETING_ROUTES, marketingPathHref } from "@/lib/marketing-routes";
import { siteContact } from "@/lib/site-contact";
import { getSiteUrl } from "@/lib/site-url";

/** Curated Markdown index for LLM ingestion (`/llms.txt`). */
export function buildLlmsTxt(): string {
  const origin = getSiteUrl().replace(/\/$/, "");
  const lines = [
    `# ${siteContact.teamBrandName}`,
    "",
    `> Hyperlocal Palms Place / Las Vegas Strip high-rise condo site for ${siteContact.agentName} and ${siteContact.buyerSpecialistName} at ${siteContact.brokerage}.`,
    "",
    `Office: ${siteContact.streetAddress}, ${siteContact.addressLocality}, ${siteContact.addressRegion} ${siteContact.postalCode}`,
    `Phone: ${siteContact.phone ?? ""}`,
    `Licenses: ${siteContact.agentName} ${siteContact.license}; ${siteContact.buyerSpecialistName} ${siteContact.buyerSpecialistLicense}`,
    "",
    "## Primary pages",
    "",
  ];

  for (const route of MARKETING_ROUTES) {
    const href = marketingPathHref(route.path);
    const url = href === "/" ? `${origin}/` : `${origin}${href}`;
    lines.push(`- [${route.summary}](${url})`);
  }

  lines.push(
    "",
    "## Optional",
    "",
    `- [Full content index](${origin}/llms-full.txt): longer Markdown summaries of the same public pages.`,
    `- [XML sitemap](${origin}/sitemap.xml)`,
    "",
  );

  return `${lines.join("\n")}\n`;
}

/** Longer Markdown digest for `/llms-full.txt` (summaries only — no fabricated stats). */
export function buildLlmsFullTxt(): string {
  const origin = getSiteUrl().replace(/\/$/, "");
  const parts = [
    `# ${siteContact.teamBrandName} — full page index`,
    "",
    `Canonical host: ${origin}`,
    `NAP: ${siteContact.streetAddress}, ${siteContact.addressLocality}, ${siteContact.addressRegion} ${siteContact.postalCode} · ${siteContact.phone}`,
    "",
    "Quantitative listing prices, HOA dues, and inventory counts change daily. Verify in live search and official disclosures.",
    "",
  ];

  for (const route of MARKETING_ROUTES) {
    const href = marketingPathHref(route.path);
    const url = href === "/" ? `${origin}/` : `${origin}${href}`;
    parts.push(`## ${href === "/" ? "Home" : href}`, "", route.summary, "", url, "");
  }

  return `${parts.join("\n")}\n`;
}
