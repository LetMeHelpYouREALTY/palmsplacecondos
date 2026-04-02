"use client";

import dynamic from "next/dynamic";
import type { FadeCarouselProps } from "@/components/sections/fade-carousel";

const FadeCarouselDynamic = dynamic(
  () =>
    import("@/components/sections/fade-carousel").then((mod) => ({
      default: mod.FadeCarousel,
    })),
  {
    ssr: false,
    loading: () => (
      <div
        aria-hidden
        className="min-h-[280px] rounded-2xl bg-palms-charcoal-muted/40"
      />
    ),
  },
);

/** Client-only carousel chunk so the main bundle stays smaller for mobile PSI. */
export function StayCarousel(props: FadeCarouselProps) {
  return <FadeCarouselDynamic {...props} />;
}
