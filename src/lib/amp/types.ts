/** One accelerated page paired to a canonical marketing URL. */

export type AmpImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

export type AmpSection = {
  heading: string;
  /** Matches a canonical heading id so speakable selectors resolve. */
  headingId?: string;
  headingLevel?: 2 | 3;
  paragraphs: string[];
  items?: readonly string[];
  ordered?: boolean;
};

export type AmpFaqGroup = {
  heading: string;
  headingId?: string;
  intro?: string;
  items: { question: string; answer: string }[];
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
  /** Canonical speakable id for the H1, when the HTML page uses one. */
  h1Id?: string;
  lede: string;
  byline?: string;
  images?: AmpImage[];
  video?: AmpVideo;
  sections: AmpSection[];
  /** When set, these groups replace the flat FAQ list in the AMP document. */
  faqGroups?: AmpFaqGroup[];
  faqs: { question: string; answer: string }[];
};
