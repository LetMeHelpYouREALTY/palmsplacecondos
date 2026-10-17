import { headers } from "next/headers";
import { absoluteAmpUrl, normalizeCanonicalPath } from "@/lib/amp/paths";
import { hasAmpPage } from "@/lib/amp/catalog";

/**
 * Emits `<link rel="amphtml">` for canonical pages that have an AMP alternate.
 * Path comes from middleware `x-pathname` so each route stays a static metadata export.
 */
export async function AmpHtmlLinkFromRequest() {
  const headerList = await headers();
  const pathname = normalizeCanonicalPath(headerList.get("x-pathname") ?? "/");
  if (!hasAmpPage(pathname)) return null;
  return <link href={absoluteAmpUrl(pathname)} rel="amphtml" />;
}
