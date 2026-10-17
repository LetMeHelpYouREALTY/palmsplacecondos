import { canonicalPath as canonicalUrlForPath } from "@/lib/metadata-helpers";
import { getSiteUrl } from "@/lib/site-url";

/** Home AMP document. Nested routes use `/amp` + the canonical path. */
export const AMP_HOME_PATH = "/amp";

export function normalizeCanonicalPath(path: string): string {
  if (path === "" || path === "/") return "/";
  const withSlash = path.startsWith("/") ? path : `/${path}`;
  return withSlash.length > 1 && withSlash.endsWith("/")
    ? withSlash.slice(0, -1)
    : withSlash;
}

export function ampPathForCanonical(canonicalPath: string): string {
  const path = normalizeCanonicalPath(canonicalPath);
  if (path === "/") return AMP_HOME_PATH;
  return `${AMP_HOME_PATH}${path}`;
}

export function absoluteAmpUrl(canonicalPath: string): string {
  return `${getSiteUrl().replace(/\/$/, "")}${ampPathForCanonical(canonicalPath)}`;
}

export function absoluteCanonicalUrl(canonicalPath: string): string {
  return canonicalUrlForPath(normalizeCanonicalPath(canonicalPath));
}

/** Map `/amp` and `/amp/...` segments to a canonical path, or null when malformed. */
export function canonicalPathFromAmpSegments(segments: string[] | undefined): string | null {
  if (!segments || segments.length === 0) return "/";
  if (segments.some((segment) => segment.length === 0 || segment === "." || segment === "..")) {
    return null;
  }
  return normalizeCanonicalPath(`/${segments.join("/")}`);
}
