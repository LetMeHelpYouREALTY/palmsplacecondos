#!/usr/bin/env node
/**
 * Rendered-HTML SEO / GEO / AEO audit (layer 2 of the self-improve loop).
 *
 * `seo-geo-aeo-audit.mjs` reads source files. This script checks what crawlers
 * and answer engines actually receive: it boots the production build
 * (`next start`), reads `/sitemap.xml` from it, then fetches every URL with the
 * canonical `www` Host header (so middleware treats it as production) and checks
 * the server-rendered HTML.
 *
 * Checks per sitemap URL:
 *  1. HTTP 200 (no redirect, no 404) — sitemap URLs must be final URLs.
 *  2. Exactly one <title> and a non-empty meta description.
 *  3. <link rel="canonical"> is absolute, on the sitemap host, and equals the URL.
 *  4. No `noindex` robots meta (sitemap URLs must be indexable).
 *  5. Exactly one <h1> (clear primary topic for Google + answer engines).
 *  6. Every JSON-LD block parses and has @context/@type or @graph.
 *  7. og:title and og:image present (link previews / AI citation cards).
 *  8. Office phone from site-contact.ts appears on the page (NAP consistency).
 *  9. Nevada license S.0197614.LLC appears in the rendered HTML.
 * Sitewide:
 * 10. /robots.txt references the same sitemap host; /llms.txt is 200.
 *
 * Usage (after `npm run build`):
 *   node scripts/rendered-seo-audit.mjs [--port 3123] [--out report.md] [--strict]
 * Requires NEXT_PUBLIC_SITE_URL at build time (e.g. https://www.palmsplacecondos.com).
 * No external network calls — everything is fetched from localhost.
 */

import { spawn } from "node:child_process";
import http from "node:http";
import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

const args = process.argv.slice(2);
const argValue = (name, fallback) => {
  const i = args.indexOf(name);
  return i >= 0 && args[i + 1] ? args[i + 1] : fallback;
};
const PORT = Number(argValue("--port", "3123"));
const OUT = argValue("--out", "");
const STRICT = args.includes("--strict");

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.palmsplacecondos.com").replace(/\/$/, "");
const SITE_HOST = new URL(SITE_URL).host;
const LICENSE = "S.0197614.LLC";

const siteContactSrc = readFileSync(path.join(ROOT, "src/lib/site-contact.ts"), "utf8");
const phoneMatch = siteContactSrc.match(/^\s*phone:\s*"([^"]+)"/m);
const PHONE_DIGITS = phoneMatch ? phoneMatch[1].replace(/\D/g, "") : "";

/** GET via node:http so we can set the Host header (fetch forbids it). */
function get(pathname) {
  return new Promise((resolve, reject) => {
    const req = http.request(
      {
        host: "127.0.0.1",
        port: PORT,
        path: pathname || "/",
        method: "GET",
        headers: { host: SITE_HOST, "x-forwarded-proto": "https", "user-agent": "rendered-seo-audit" },
      },
      (res) => {
        let body = "";
        res.setEncoding("utf8");
        res.on("data", (c) => (body += c));
        res.on("end", () => resolve({ status: res.statusCode, headers: res.headers, body }));
      },
    );
    req.on("error", reject);
    req.setTimeout(30000, () => req.destroy(new Error(`timeout ${pathname}`)));
    req.end();
  });
}

async function waitForServer(timeoutMs = 60000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const r = await get("/robots.txt");
      if (r.status) return;
    } catch {
      /* not up yet */
    }
    await new Promise((r) => setTimeout(r, 500));
  }
  throw new Error(`next start did not answer on :${PORT} within ${timeoutMs}ms`);
}

const count = (html, re) => (html.match(re) || []).length;
const attr = (tag, name) => {
  const m = tag.match(new RegExp(`${name}=["']([^"']*)["']`, "i"));
  return m ? m[1] : null;
};
const findMeta = (html, key, keyAttr = "name") => {
  for (const tag of html.match(/<meta\b[^>]*>/gi) || []) {
    if ((attr(tag, keyAttr) || "").toLowerCase() === key) return attr(tag, "content");
  }
  return null;
};
const stripTags = (html) => html.replace(/<script[\s\S]*?<\/script>/gi, " ").replace(/<[^>]+>/g, " ");

function auditPage(url, res) {
  const issues = [];
  const html = res.body;
  if (res.status !== 200) {
    issues.push({ level: "error", msg: `HTTP ${res.status}${res.headers.location ? ` → ${res.headers.location}` : ""}` });
    return issues;
  }
  const titles = count(html, /<title\b[^>]*>/gi);
  if (titles !== 1) issues.push({ level: "error", msg: `${titles} <title> tags (expected 1)` });
  const desc = findMeta(html, "description");
  if (!desc) issues.push({ level: "error", msg: "missing meta description" });

  const canonTag = (html.match(/<link\b[^>]*rel=["']canonical["'][^>]*>/i) || [])[0];
  const canon = canonTag ? attr(canonTag, "href") : null;
  const norm = (u) => u.replace(/\/$/, "");
  if (!canon) issues.push({ level: "error", msg: "missing canonical" });
  else if (norm(canon) !== norm(url)) issues.push({ level: "error", msg: `canonical ${canon} ≠ sitemap URL` });

  const robots = findMeta(html, "robots") || "";
  if (/noindex/i.test(robots)) issues.push({ level: "error", msg: `robots meta "${robots}" on a sitemap URL` });

  const h1 = count(html, /<h1\b/gi);
  if (h1 !== 1) issues.push({ level: "warn", msg: `${h1} <h1> elements (expected 1)` });

  const blocks = [...html.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
  if (blocks.length === 0) issues.push({ level: "warn", msg: "no JSON-LD" });
  blocks.forEach((b, i) => {
    try {
      const data = JSON.parse(b[1]);
      const items = Array.isArray(data) ? data : [data];
      for (const d of items) {
        if (!d["@context"] || !(d["@type"] || d["@graph"])) {
          issues.push({ level: "warn", msg: `JSON-LD block ${i + 1} lacks @context/@type` });
        }
      }
    } catch (e) {
      issues.push({ level: "error", msg: `JSON-LD block ${i + 1} does not parse: ${e.message}` });
    }
  });

  if (!findMeta(html, "og:title", "property")) issues.push({ level: "warn", msg: "missing og:title" });
  if (!findMeta(html, "og:image", "property")) issues.push({ level: "warn", msg: "missing og:image" });

  const text = stripTags(html);
  if (PHONE_DIGITS && !text.replace(/\D/g, "").includes(PHONE_DIGITS)) {
    issues.push({ level: "warn", msg: "office phone from site-contact.ts not in visible HTML" });
  }
  if (!html.includes(LICENSE)) issues.push({ level: "warn", msg: `license ${LICENSE} not in HTML` });
  return issues;
}

async function main() {
  const server = spawn(process.execPath, [path.join(ROOT, "node_modules/next/dist/bin/next"), "start", "-p", String(PORT)], {
    cwd: ROOT,
    env: { ...process.env, NODE_ENV: "production" },
    stdio: ["ignore", "ignore", "inherit"],
  });
  const results = [];
  const sitewide = [];
  try {
    await waitForServer();

    const sm = await get("/sitemap.xml");
    if (sm.status !== 200) throw new Error(`/sitemap.xml returned ${sm.status}`);
    const urls = [...sm.body.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
    if (urls.length === 0) throw new Error("sitemap.xml has no <loc> entries");

    const robots = await get("/robots.txt");
    if (!robots.body.includes(`${SITE_URL}/sitemap.xml`)) {
      sitewide.push({ level: "error", msg: `robots.txt does not reference ${SITE_URL}/sitemap.xml` });
    }
    const llms = await get("/llms.txt");
    if (llms.status !== 200) sitewide.push({ level: "error", msg: `/llms.txt returned ${llms.status}` });

    for (const url of urls) {
      const u = new URL(url);
      if (u.host !== SITE_HOST) {
        results.push({ url, issues: [{ level: "error", msg: `sitemap host ${u.host} ≠ ${SITE_HOST}` }] });
        continue;
      }
      const res = await get(u.pathname + u.search);
      results.push({ url, issues: auditPage(url, res) });
    }
  } finally {
    server.kill("SIGTERM");
  }

  const all = [...sitewide, ...results.flatMap((r) => r.issues)];
  const errors = all.filter((i) => i.level === "error").length;
  const warns = all.filter((i) => i.level === "warn").length;
  const lines = [
    "# Rendered-HTML SEO / GEO / AEO audit",
    "",
    `Generated ${new Date().toISOString().slice(0, 10)} · ${results.length} sitemap URL(s) · ${errors} error(s) · ${warns} warning(s)`,
    "",
  ];
  if (sitewide.length) {
    lines.push("## Sitewide", "", ...sitewide.map((i) => `- **${i.level}** ${i.msg}`), "");
  }
  const failing = results.filter((r) => r.issues.length);
  lines.push("## Pages", "");
  if (!failing.length) lines.push("All sitemap URLs passed. 🎉");
  for (const r of failing) {
    lines.push(`### ${r.url}`, ...r.issues.map((i) => `- **${i.level}** ${i.msg}`), "");
  }
  const report = lines.join("\n") + "\n";
  process.stdout.write(report);
  if (OUT) writeFileSync(OUT, report);
  process.exit(errors > 0 || (STRICT && warns > 0) ? 1 : 0);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
