import { headers } from "next/headers";
import { getSiteUrl } from "@/lib/site-url";

/**
 * Origin for sitemap/robots that matches how the user reached the site (e.g. www custom domain),
 * avoiding baked-in `*.vercel.app` URLs when `NEXT_PUBLIC_SITE_URL` was missing at build time.
 */
export async function getPublicSiteOrigin(): Promise<string> {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (fromEnv) {
    return fromEnv.replace(/\/$/, "");
  }

  try {
    const h = await headers();
    const rawHost = h.get("x-forwarded-host") ?? h.get("host");
    const host = rawHost?.split(",")[0]?.trim();
    if (host && !host.includes("127.0.0.1")) {
      const isLocalhost = /^localhost(:\d+)?$/i.test(host);
      if (!isLocalhost) {
        const proto = (h.get("x-forwarded-proto") ?? "https").split(",")[0]?.trim() ?? "https";
        const hostname = host.split(":")[0];
        return `${proto}://${hostname}`.replace(/\/$/, "");
      }
    }
  } catch {
    /* No request context */
  }
  return getSiteUrl();
}

/** Homepage uses trailing slash; paths are absolute on that origin (Google / GSC friendly). */
export function absoluteUrlForSitemap(base: string, path: string): string {
  const b = base.replace(/\/$/, "");
  if (path === "" || path === "/") {
    return `${b}/`;
  }
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${b}${p}`;
}
