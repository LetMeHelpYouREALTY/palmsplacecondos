import type { Metadata } from "next";
import { PhotosUnit8322PageBody } from "@/components/marketing/photos-unit-8322-page-body";
import {
  getFeaturedListingHeroPhoto,
  getGalleryPhotoSrc,
  unit8322Gallery,
} from "@/lib/content/media-gallery";
import { canonicalMetadata, canonicalPath } from "@/lib/metadata-helpers";

const hero = getFeaturedListingHeroPhoto();
const heroSrc = getGalleryPhotoSrc(hero);

export const metadata: Metadata = {
  title: unit8322Gallery.metaTitle,
  description: unit8322Gallery.metaDescription,
  openGraph: {
    title: unit8322Gallery.metaTitle,
    description: unit8322Gallery.metaDescription,
    url: canonicalPath(unit8322Gallery.path),
    images: [
      {
        url: heroSrc,
        width: hero.width,
        height: hero.height,
        alt: hero.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: unit8322Gallery.metaTitle,
    description: unit8322Gallery.metaDescription,
    images: [heroSrc],
  },
  ...canonicalMetadata(unit8322Gallery.path),
};

export default function PhotosUnit8322Page() {
  return <PhotosUnit8322PageBody />;
}
