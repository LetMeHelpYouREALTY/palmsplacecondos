import type { Metadata } from "next";
import { getSiteUrl } from "@/lib/site-url";

/**
 * Absolute canonical URL for a path (leading slash). Root uses `""` or `"/"`.
 */
export function canonicalPath(path: string): string {
  const base = getSiteUrl().replace(/\/$/, "");
  if (path === "" || path === "/") {
    return `${base}/`;
  }
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}

/** Spread into `export const metadata` for `alternates.canonical`. */
export function canonicalMetadata(path: string): Pick<Metadata, "alternates"> {
  return {
    alternates: {
      canonical: canonicalPath(path),
    },
  };
}
