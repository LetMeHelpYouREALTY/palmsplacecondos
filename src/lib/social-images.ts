import type { Metadata } from "next";

/** Open Graph / Twitter card dimensions (Facebook, LinkedIn, X). */
export const OG_IMAGE_SIZE = { width: 1200, height: 630 } as const;

export const OG_IMAGE_ALT =
  "Palms Place condos for sale — Las Vegas Strip high-rise residences with Dr. Jan Duffy";

/**
 * Default share preview image. Override with a production JPG/PNG URL via
 * `NEXT_PUBLIC_OG_IMAGE_URL` when a licensed tower or agent photo is available.
 */
export function getDefaultOgImages(): NonNullable<Metadata["openGraph"]>["images"] {
  const custom = process.env.NEXT_PUBLIC_OG_IMAGE_URL?.trim();
  if (custom) {
    return [{ url: custom, ...OG_IMAGE_SIZE, alt: OG_IMAGE_ALT }];
  }
  return [{ url: "/opengraph-image", ...OG_IMAGE_SIZE, alt: OG_IMAGE_ALT, type: "image/png" }];
}

export function getDefaultTwitterImages(): NonNullable<Metadata["twitter"]>["images"] {
  const custom = process.env.NEXT_PUBLIC_OG_IMAGE_URL?.trim();
  if (custom) return [custom];
  return ["/opengraph-image"];
}
