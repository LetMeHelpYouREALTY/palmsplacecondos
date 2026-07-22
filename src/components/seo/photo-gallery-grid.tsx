import Image from "next/image";
import type { GalleryPhoto } from "@/lib/content/media-gallery";
import { getGalleryPhotoSrc } from "@/lib/content/media-gallery";
import { isRemoteImageSrc } from "@/lib/cloudflare-images";
import { cn } from "@/lib/utils";

type PhotoGalleryGridProps = {
  photos: GalleryPhoto[];
  className?: string;
};

/** Accessible photo grid with SEO title/alt/caption per image. */
export function PhotoGalleryGrid({ photos, className }: PhotoGalleryGridProps) {
  if (photos.length === 0) return null;

  return (
    <ul
      className={cn(
        "mt-8 grid list-none gap-8 sm:grid-cols-2",
        className,
      )}
    >
      {photos.map((photo, index) => {
        const src = getGalleryPhotoSrc(photo);
        const remote = isRemoteImageSrc(src);
        return (
          <li key={photo.id} className="space-y-3">
            <figure>
              <div className="relative aspect-[3/2] overflow-hidden rounded-lg border border-palms-gold/20 bg-palms-charcoal-muted">
                <Image
                  alt={photo.alt}
                  className="object-cover"
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  src={src}
                  title={photo.title}
                  priority={index === 0}
                  unoptimized={remote}
                />
              </div>
              <figcaption className="mt-3 space-y-1">
                <p className="font-medium text-palms-cream">{photo.title}</p>
                <p className="text-sm leading-relaxed text-palms-cream/70">{photo.caption}</p>
              </figcaption>
            </figure>
          </li>
        );
      })}
    </ul>
  );
}
