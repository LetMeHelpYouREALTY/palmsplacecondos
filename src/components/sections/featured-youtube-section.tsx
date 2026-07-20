import { YoutubeVideoEmbed } from "@/components/seo/youtube-video-embed";
import { StructuredData } from "@/components/seo/structured-data";
import { SectionEyebrow } from "@/components/shared/section-heading";
import { featuredYoutubeVideo, youtubeWatchUrl } from "@/lib/content/featured-youtube-video";
import { getVideoObjectJsonLd } from "@/lib/schema";
import { siteContact } from "@/lib/site-contact";

/**
 * Homepage / marketing section: one featured YouTube video + VideoObject JSON-LD.
 */
export function FeaturedYoutubeSection() {
  const video = featuredYoutubeVideo;
  const watchUrl = youtubeWatchUrl(video.videoId);

  return (
    <section
      aria-labelledby="featured-video-heading"
      className="border-t border-palms-gold/15 bg-palms-charcoal px-6 py-16 md:py-20"
      id="video"
    >
      <StructuredData data={getVideoObjectJsonLd(video)} />
      <div className="mx-auto max-w-3xl">
        <SectionEyebrow>From the channel</SectionEyebrow>
        <h2
          className="font-display mt-6 text-3xl font-semibold tracking-tight text-palms-cream md:text-4xl"
          id="featured-video-heading"
        >
          {video.title}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-palms-cream/80 md:text-lg">
          {video.description} Call {siteContact.phone} to talk Palms Place listings with{" "}
          {siteContact.agentName}.
        </p>

        <div className="mt-8">
          <YoutubeVideoEmbed title={video.title} videoId={video.videoId} />
        </div>

        <p className="mt-4 text-sm text-palms-cream/65">
          Watch on{" "}
          <a
            className="font-medium text-palms-gold underline-offset-4 hover:underline"
            href={watchUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            YouTube
          </a>{" "}
          · More from{" "}
          <a
            className="font-medium text-palms-gold underline-offset-4 hover:underline"
            href={video.channelUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            {video.channelName}
          </a>
        </p>
      </div>
    </section>
  );
}
