/**
 * Cloudflare Images delivery helpers.
 *
 * Upload via dashboard/API (Cloudflare Images), then set:
 * - NEXT_PUBLIC_CLOUDFLARE_IMAGES_ACCOUNT_HASH
 * - Optional per-image IDs in media catalog `cloudflareImageId`
 *
 * Delivery URL shape (public variant):
 * https://imagedelivery.net/<ACCOUNT_HASH>/<IMAGE_ID>/<VARIANT>
 *
 * @see https://developers.cloudflare.com/images/manage-images/get-url/
 */

const DEFAULT_VARIANT = "public";

export function getCloudflareImagesAccountHash(): string | undefined {
  const hash = process.env.NEXT_PUBLIC_CLOUDFLARE_IMAGES_ACCOUNT_HASH?.trim();
  return hash || undefined;
}

/** Build a Cloudflare Images delivery URL when account hash + image id are set. */
export function getCloudflareImageUrl(
  imageId: string,
  variant: string = DEFAULT_VARIANT,
): string | undefined {
  const accountHash = getCloudflareImagesAccountHash();
  const id = imageId.trim();
  if (!accountHash || !id) return undefined;
  return `https://imagedelivery.net/${accountHash}/${id}/${variant}`;
}

/** True when `src` is an absolute http(s) URL (CDN / Cloudflare / third-party). */
export function isRemoteImageSrc(src: string): boolean {
  return src.startsWith("http://") || src.startsWith("https://");
}
