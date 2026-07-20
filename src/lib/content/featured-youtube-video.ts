/**
 * Featured YouTube video from Dr. Jan Duffy’s channel (@DrDuffy).
 * Keep title/description aligned with the live YouTube listing — do not invent claims.
 */
export type FeaturedYoutubeVideo = {
  videoId: string;
  title: string;
  /** Short on-page description (also used for VideoObject). */
  description: string;
  /** ISO 8601 upload date from YouTube. */
  uploadDate: string;
  /** Channel URL shown next to the embed. */
  channelUrl: string;
  channelName: string;
};

export const featuredYoutubeVideo: FeaturedYoutubeVideo = {
  videoId: "kEyg6JtCltY",
  title: "Dr. Jan Duffy, REALTOR | Client Testimonial",
  description:
    "Client testimonial featuring Dr. Jan Duffy of Berkshire Hathaway HomeServices Nevada Properties—buying and selling guidance for Las Vegas real estate, including Palms Place and Strip-adjacent high-rise condos.",
  uploadDate: "2025-08-20T20:03:27+00:00",
  channelUrl: "https://www.youtube.com/@DrDuffy",
  channelName: "Dr. Jan Duffy REALTOR",
};

export function youtubeWatchUrl(videoId: string): string {
  return `https://www.youtube.com/watch?v=${videoId}`;
}

export function youtubeEmbedUrl(videoId: string): string {
  return `https://www.youtube-nocookie.com/embed/${videoId}`;
}

export function youtubeThumbnailUrl(videoId: string): string {
  return `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
}
