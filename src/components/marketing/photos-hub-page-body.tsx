import Link from "next/link";
import { RelatedPages } from "@/components/seo/related-pages";
import { StructuredData } from "@/components/seo/structured-data";
import { AgentHeroBadge } from "@/components/shared/agent-hero-badge";
import { CalendlyLink } from "@/components/shared/calendly-link";
import { photoGalleries } from "@/lib/content/media-gallery";
import { relatedLinksForPath } from "@/lib/internal-links";
import { getBreadcrumbListJsonLd, getWebPageJsonLdForPath } from "@/lib/schema";
import { siteContact } from "@/lib/site-contact";

const path = "/photos";

const pageMeta = {
  name: "Palms Place condo photos — Las Vegas Strip high-rise galleries",
  description:
    "Photo galleries for Palms Place condos for sale on the Las Vegas Strip—unit interiors, Strip views, and listing photography with Dr. Jan Duffy.",
};

export function PhotosHubPageBody() {
  const related = relatedLinksForPath(path);
  const webPageJsonLd = getWebPageJsonLdForPath(path, pageMeta, { aboutPalmsPlace: true });
  const breadcrumbJsonLd = getBreadcrumbListJsonLd(path, [
    { name: "Home", path: "/" },
    { name: "Photos", path },
  ]);

  return (
    <article className="mx-auto max-w-3xl px-6 py-12 md:py-16">
      <StructuredData data={webPageJsonLd} />
      <StructuredData data={breadcrumbJsonLd} />
      <h1 className="font-display text-3xl font-semibold tracking-tight text-palms-cream md:text-4xl">
        Palms Place condo photos
      </h1>
      <AgentHeroBadge className="mt-6" />
      <p className="mt-4 text-lg leading-relaxed text-palms-cream/85">
        Listing photography for Palms Place residences at 4381 W Flamingo Road—Strip views, furnished
        interiors, and balcony context. Galleries support buyers researching {siteContact.gbpBusinessName}{" "}
        inventory before a tour with {siteContact.agentName}.
      </p>

      <section className="mt-12" aria-labelledby="photo-galleries-heading">
        <h2
          className="font-display text-2xl font-semibold text-palms-cream"
          id="photo-galleries-heading"
        >
          Which photo galleries are live?
        </h2>
        <ul className="mt-6 space-y-4">
          {photoGalleries.map((gallery) => (
            <li key={gallery.slug}>
              <Link
                className="font-medium text-palms-gold underline-offset-4 hover:underline"
                href={gallery.path}
              >
                {gallery.h1}
              </Link>
              <p className="mt-1 text-sm leading-relaxed text-palms-cream/70">{gallery.lede}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12" aria-labelledby="photos-next-heading">
        <h2 className="font-display text-2xl font-semibold text-palms-cream" id="photos-next-heading">
          Ready to tour what you see in photos?
        </h2>
        <p className="mt-4 leading-relaxed text-palms-cream/85">
          <CalendlyLink>Schedule a showing</CalendlyLink>
          {" "}
          or{" "}
          <Link className="text-palms-gold underline-offset-4 hover:underline" href="/contact">
            contact the office
          </Link>
          . Photos do not replace disclosures—verify HOA, furnishings, and status with your agent.
        </p>
      </section>

      <RelatedPages links={related} />
    </article>
  );
}
