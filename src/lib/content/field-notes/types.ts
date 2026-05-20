/** Shared shape for first-party “field note” articles (non-commodity, specific POV). */

export type FieldNoteMeta = {
  slug: string;
  title: string;
  description: string;
  datePublished: string;
  dateModified: string;
  eyebrow: string;
  headline: string;
  lede: string;
  authorName: string;
  authorJobTitle: string;
  /** One sentence — how the team produced this (Google “How”). */
  howCreated: string;
  /** Why this exists for visitors (Google “Why”). */
  whyCreated: string;
};

export type FieldNoteSection = {
  id: string;
  heading: string;
  body: string;
};

export type FieldNote = FieldNoteMeta & {
  sections: FieldNoteSection[];
  /** Actionable takeaway — specific to this situation, not generic tips. */
  whatWeDoNext: string[];
};
