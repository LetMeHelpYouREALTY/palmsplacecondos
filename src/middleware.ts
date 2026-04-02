import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

/**
 * When `NEXT_PUBLIC_SITE_URL` uses the **www** hostname, redirect apex (bare domain) requests to the www origin.
 * Keeps Search Console, sitemap, and metadataBase aligned on one primary host.
 */
export function middleware(request: NextRequest) {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!raw) {
    return NextResponse.next();
  }

  let canonical: URL;
  try {
    canonical = new URL(raw.replace(/\/$/, ""));
  } catch {
    return NextResponse.next();
  }

  const canonicalHost = canonical.hostname.toLowerCase();
  if (!canonicalHost.startsWith("www.")) {
    return NextResponse.next();
  }

  const apexHost = canonicalHost.slice(4);
  const host = request.headers.get("host")?.split(":")[0]?.toLowerCase();
  if (!host || host === canonicalHost) {
    return NextResponse.next();
  }

  if (host !== apexHost) {
    return NextResponse.next();
  }

  const destination = new URL(
    `${request.nextUrl.pathname}${request.nextUrl.search}`,
    `${canonical.protocol}//${canonicalHost}`,
  );
  return NextResponse.redirect(destination, 308);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)"],
};
