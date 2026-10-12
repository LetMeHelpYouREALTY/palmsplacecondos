/** One accelerated page paired to a canonical marketing URL. */

export type AmpImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

export type AmpSection = {
  heading: string;
  paragraphs: string[];
  items?: readonly string[];
  ordered?: boolean;
};

export type AmpVideo = {
  src: string;
  width: number;
  height: number;
  poster: string;
  caption?: string;
};

export type AmpPage = {
  /** Canonical app path. Home is `"/"`. */
  canonicalPath: string;
  title: string;
  description: string;
  h1: string;
  lede: string;
  byline?: string;
  images?: AmpImage[];
  video?: AmpVideo;
  sections: AmpSection[];
  faqs: { question: string; answer: string }[];
};
