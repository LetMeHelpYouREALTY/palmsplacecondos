"use client";

import { usePathname } from "next/navigation";
import { PalmsPlaceListingAuthority } from "@/components/seo/palms-place-listing-authority";

/**
 * Client wrapper keyed on `usePathname()` so the root layout stays static.
 * Reading `headers()` in the layout opted every route into on-demand rendering
 * (no CDN-cached HTML); this still renders the section into the prerendered HTML.
 */
export function PalmsPlaceListingAuthorityFromRequest() {
  const pathname = usePathname() ?? "/";
  return <PalmsPlaceListingAuthority pathname={pathname} />;
}
