/**
 * Canonical origin for metadataBase, sitemap, and robots (must match Google Search Console property).
 * Production primary host is **www** — set `NEXT_PUBLIC_SITE_URL` to `https://www.yourdomain.com` (no trailing slash).
 * Apex → www redirect is handled in `middleware.ts` when this URL uses a `www.` hostname.
 */
export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (fromEnv) {
    return fromEnv.replace(/\/$/, "");
  }
  /* Vercel sets VERCEL_URL on preview/production deployments (no protocol). */
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL.replace(/\/$/, "")}`;
  }
  return "http://localhost:3000";
}
