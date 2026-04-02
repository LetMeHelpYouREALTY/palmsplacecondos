import Link from "next/link";
import { RelatedPages } from "@/components/seo/related-pages";
import { relatedLinksForPath } from "@/lib/internal-links";
import { getRealScoutSharedSearchUrl } from "@/lib/realscout";
import { siteContact } from "@/lib/site-contact";

/** Expanded /under-500k — price band + HOA reality for high-rises. */
export function Under500kPageBody() {
  const related = relatedLinksForPath("/under-500k");
  const searchUrl = getRealScoutSharedSearchUrl();

  return (
    <article className="mx-auto max-w-3xl px-6 py-12 md:py-16">
      <h1 className="font-display text-3xl font-semibold tracking-tight text-palms-cream md:text-4xl">
        Homes &amp; condos under $500K
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-palms-cream/85">
        Starter and move-up inventory in Las Vegas—{siteContact.primaryServiceArea}. Use live search
        to filter by price; in high-rises, compare HOA fees and monthly carry with your agent, not
        list price alone.
      </p>

      <section className="mt-12">
        <h2 className="font-display text-2xl font-semibold text-palms-cream">
          Search this price band
        </h2>
        <p className="mt-4 leading-relaxed text-palms-cream/85">
          Run{" "}
          <a
            className="font-medium text-palms-gold underline-offset-4 hover:underline"
            href={searchUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            RealScout
          </a>{" "}
          and set your max price to match your pre-approval. Inventory changes daily—what you see
          online is a snapshot, not a guarantee of availability.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl font-semibold text-palms-cream">
          Condos vs single-family under $500K
        </h2>
        <p className="mt-4 leading-relaxed text-palms-cream/85">
          Condos and townhomes may cluster in this range in select buildings; single-family homes
          often push to different neighborhoods at similar monthly payments. Compare{" "}
          <Link className="text-palms-gold underline-offset-4 hover:underline" href="/condos">
            high-rises &amp; Palms Place
          </Link>{" "}
          with{" "}
          <Link className="text-palms-gold underline-offset-4 hover:underline" href="/homes">
            Las Vegas homes for sale
          </Link>{" "}
          before you decide.
        </p>
      </section>

      <RelatedPages links={related} />
    </article>
  );
}
