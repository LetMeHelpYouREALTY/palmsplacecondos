import Link from "next/link";
import { RelatedPages } from "@/components/seo/related-pages";
import { relatedLinksForPath } from "@/lib/internal-links";
import { getRealScoutSharedSearchUrl } from "@/lib/realscout";
import { siteContact } from "@/lib/site-contact";

/** Expanded /buyers/calculators — planning copy; no fabricated rate quotes. */
export function BuyerCalculatorsPageBody() {
  const related = relatedLinksForPath("/buyers/calculators");
  const searchUrl = getRealScoutSharedSearchUrl();
  const phone = siteContact.phone;
  const tel = phone ? `tel:${phone.replace(/\D/g, "")}` : undefined;

  return (
    <article className="mx-auto max-w-3xl px-6 py-12 md:py-16">
      <h1 className="font-display text-3xl font-semibold tracking-tight text-palms-cream md:text-4xl">
        Buyer calculators &amp; payment planning
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-palms-cream/85">
        Use this page to frame questions for your lender—{siteContact.buyerSpecialistName} and the
        team at {siteContact.brokerage} focus on property fit and negotiation, not loan
        underwriting.
      </p>

      <section className="mt-12">
        <h2 className="font-display text-2xl font-semibold text-palms-cream">
          What to model before you offer
        </h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 leading-relaxed text-palms-cream/85">
          <li>
            <strong className="font-medium text-palms-cream/95">PITI &amp; HOA</strong> — mortgage
            principal and interest, taxes, insurance, and HOA dues (especially in high-rises).
          </li>
          <li>
            <strong className="font-medium text-palms-cream/95">Closing costs</strong> — title,
            recording, and lender fees vary; your lender provides a Loan Estimate.
          </li>
          <li>
            <strong className="font-medium text-palms-cream/95">Rate locks</strong> — quotes change
            with markets; verify numbers with a licensed mortgage professional before you waive
            contingencies.
          </li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl font-semibold text-palms-cream">
          Search &amp; professional help
        </h2>
        <p className="mt-4 leading-relaxed text-palms-cream/85">
          Browse{" "}
          <a
            className="text-palms-gold underline-offset-4 hover:underline"
            href={searchUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            live listings on RealScout
          </a>
          , then{" "}
          <Link className="text-palms-gold underline-offset-4 hover:underline" href="/contact">
            contact the office
          </Link>{" "}
          for lender introductions and tour planning. This is not legal or tax advice; consult
          professionals for your situation.
        </p>
        {phone && tel ? (
          <p className="mt-4 text-palms-cream/85">
            Questions? Call{" "}
            <a className="font-medium text-palms-gold underline-offset-4 hover:underline" href={tel}>
              {phone}
            </a>
            .
          </p>
        ) : null}
      </section>

      <RelatedPages links={related} />
    </article>
  );
}
