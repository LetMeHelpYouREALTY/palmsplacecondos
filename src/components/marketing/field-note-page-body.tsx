import { RelatedPages } from "@/components/seo/related-pages";
import { StructuredData } from "@/components/seo/structured-data";
import { ButtonLink } from "@/components/shared/button-link";
import { SectionEyebrow } from "@/components/shared/section-heading";
import type { FieldNote } from "@/lib/content/field-notes/types";
import { relatedLinksForPath } from "@/lib/internal-links";
import {
  getArticleJsonLdForPath,
  getBreadcrumbListJsonLd,
  getWebPageJsonLdForPath,
} from "@/lib/schema";

type FieldNotePageBodyProps = {
  note: FieldNote;
};

export function FieldNotePageBody({ note }: FieldNotePageBodyProps) {
  const path = `/insights/${note.slug}`;
  const related = relatedLinksForPath(path);
  const webPageJsonLd = getWebPageJsonLdForPath(path, {
    name: note.title,
    description: note.description,
  }, { aboutPalmsPlace: true });
  const breadcrumbLabel =
    note.headline.length > 48 ? `${note.headline.slice(0, 45)}…` : note.headline;
  const breadcrumbJsonLd = getBreadcrumbListJsonLd(path, [
    { name: "Home", path: "/" },
    { name: "Field notes", path: "/insights" },
    { name: breadcrumbLabel, path },
  ]);
  const articleJsonLd = getArticleJsonLdForPath({
    pathname: path,
    headline: note.headline,
    description: note.description,
    datePublished: note.datePublished,
    dateModified: note.dateModified,
    authorName: note.authorName,
    authorJobTitle: note.authorJobTitle,
    aboutPalmsPlace: true,
  });

  return (
    <article className="mx-auto max-w-3xl px-6 py-12 md:py-16">
      <StructuredData data={webPageJsonLd} />
      <StructuredData data={breadcrumbJsonLd} />
      <StructuredData data={articleJsonLd} />
      <SectionEyebrow>{note.eyebrow}</SectionEyebrow>
      <h1 className="font-display text-3xl font-semibold tracking-tight text-palms-cream md:text-4xl">
        {note.headline}
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-palms-cream/85">{note.lede}</p>
      <p className="mt-3 text-sm text-palms-cream/60">
        By {note.authorName}, {note.authorJobTitle} · Updated {note.dateModified}
      </p>

      <aside
        className="mt-8 rounded-xl border border-palms-cream/15 bg-palms-cream/5 p-5 text-sm leading-relaxed text-palms-cream/80"
        aria-label="How and why this field note was published"
      >
        <p>
          <strong className="text-palms-cream">How:</strong> {note.howCreated}
        </p>
        <p className="mt-3">
          <strong className="text-palms-cream">Why:</strong> {note.whyCreated}
        </p>
      </aside>

      <div className="mt-10 space-y-10">
        {note.sections.map((section) => (
          <section key={section.id} aria-labelledby={section.id}>
            <h2 className="font-display text-xl font-semibold text-palms-cream" id={section.id}>
              {section.heading}
            </h2>
            <p className="mt-3 leading-relaxed text-palms-cream/85">{section.body}</p>
          </section>
        ))}
      </div>

      <section className="mt-10 rounded-xl border border-palms-gold/25 bg-palms-gold/5 p-6" aria-labelledby="what-we-do-next">
        <h2 className="font-display text-xl font-semibold text-palms-cream" id="what-we-do-next">
          What we do on the next tour or listing
        </h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-palms-cream/85">
          {note.whatWeDoNext.map((item) => (
            <li key={item} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-10 flex flex-wrap gap-4">
        <ButtonLink href="/guide/buying-palms-place" variant="primary">
          Buying field guide
        </ButtonLink>
        <ButtonLink href="/insights" variant="secondary">
          All field notes
        </ButtonLink>
      </div>

      <p className="mt-8 text-sm text-palms-cream/60">
        Not legal or tax advice. HOA rules and assessments change—verify in official documents for your unit.
      </p>

      <RelatedPages links={related} />
    </article>
  );
}
