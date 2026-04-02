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
  /**
   * Vercel: primary production hostname when assigned (helps sitemap/robots at build if set).
   * @see https://vercel.com/docs/projects/environment-variables/system-environment-variables
   */
  const vercelProd = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (vercelProd) {
    try {
      const withProto = vercelProd.startsWith("http") ? vercelProd : `https://${vercelProd}`;
      return new URL(withProto).origin.replace(/\/$/, "");
    } catch {
      /* fall through */
    }
  }
  /* Vercel sets VERCEL_URL on preview/production deployments (no protocol). */
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL.replace(/\/$/, "")}`;
  }
  return "http://localhost:3000";
}
