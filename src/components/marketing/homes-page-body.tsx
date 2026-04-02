import Link from "next/link";
import { RelatedPages } from "@/components/seo/related-pages";
import { relatedLinksForPath } from "@/lib/internal-links";
import { getRealScoutSharedSearchUrl } from "@/lib/realscout";
import { siteContact } from "@/lib/site-contact";

/** Expanded /homes — single-family & attached vs high-rise context. */
export function HomesPageBody() {
  const related = relatedLinksForPath("/homes");
  const searchUrl = getRealScoutSharedSearchUrl();

  return (
    <article className="mx-auto max-w-3xl px-6 py-12 md:py-16">
      <h1 className="font-display text-3xl font-semibold tracking-tight text-palms-cream md:text-4xl">
        Homes for sale in Las Vegas
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-palms-cream/85">
        Single-family and attached homes across the valley—buyer tours with{" "}
        {siteContact.buyerSpecialistName}, {siteContact.buyerSpecialistTitle}, and{" "}
        {siteContact.brokerage}. {siteContact.primaryServiceArea}.
      </p>

      <section className="mt-12">
        <h2 className="font-display text-2xl font-semibold text-palms-cream">
          How this differs from Palms Place condos
        </h2>
        <p className="mt-4 leading-relaxed text-palms-cream/85">
          Many clients compare single-family product in Summerlin or Henderson with Strip-adjacent
          high-rises. Houses trade on schools, yards, and HOA character; Palms Place and similar
          towers emphasize amenities, lock-and-leave living, and Strip proximity. Your agent can
          align showings with the lifestyle you want—not just the price band.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl font-semibold text-palms-cream">
          Search live inventory
        </h2>
        <p className="mt-4 leading-relaxed text-palms-cream/85">
          Browse curated listings on{" "}
          <a
            className="font-medium text-palms-gold underline-offset-4 hover:underline"
            href={searchUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            Dr. Jan Duffy&apos;s RealScout search
          </a>
          , or explore{" "}
          <Link className="text-palms-gold underline-offset-4 hover:underline" href="/condos">
            Las Vegas high-rise &amp; Palms Place condos
          </Link>{" "}
          if a tower might fit better.
        </p>
      </section>

      <RelatedPages links={related} />
    </article>
  );
}
