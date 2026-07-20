"use client";

import Image from "next/image";
import { useState } from "react";
import {
  youtubeEmbedUrl,
  youtubeThumbnailUrl,
  youtubeWatchUrl,
} from "@/lib/content/featured-youtube-video";
import { cn } from "@/lib/utils";

type YoutubeVideoEmbedProps = {
  videoId: string;
  title: string;
  className?: string;
};

/**
 * Click-to-load YouTube facade — keeps third-party iframe off the critical path
 * until the visitor chooses to play (better for mobile PageSpeed / CWV).
 */
export function YoutubeVideoEmbed({ videoId, title, className }: YoutubeVideoEmbedProps) {
  const [playing, setPlaying] = useState(false);
  const thumb = youtubeThumbnailUrl(videoId);
  const watchUrl = youtubeWatchUrl(videoId);

  return (
    <div
      className={cn(
        "relative aspect-video w-full overflow-hidden rounded-xl border border-palms-gold/20 bg-palms-charcoal-muted",
        className,
      )}
    >
      {playing ? (
        <iframe
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
          src={`${youtubeEmbedUrl(videoId)}?autoplay=1&rel=0`}
          title={title}
        />
      ) : (
        <button
          aria-label={`Play video: ${title}`}
          className="group absolute inset-0 h-full w-full cursor-pointer"
          onClick={() => setPlaying(true)}
          type="button"
        >
          <Image
            alt=""
            className="object-cover opacity-90 transition group-hover:opacity-100"
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            src={thumb}
          />
          <span
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-palms-charcoal/70 via-transparent to-palms-charcoal/20"
          />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-palms-gold text-palms-charcoal shadow-lg transition group-hover:scale-105">
              <svg aria-hidden className="ml-1 h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7L8 5z" />
              </svg>
            </span>
          </span>
          <span className="sr-only">
            Opens the embedded player. Full video on YouTube: {watchUrl}
          </span>
        </button>
      )}
    </div>
  );
}
