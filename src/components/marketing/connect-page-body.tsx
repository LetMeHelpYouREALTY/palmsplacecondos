import Link from "next/link";
import { RelatedPages } from "@/components/seo/related-pages";
import { relatedLinksForPath } from "@/lib/internal-links";
import { formatOfficeAddressLine, siteContact } from "@/lib/site-contact";

/** Expanded /connect — stay in touch; aligns with utility nav + social links. */
export function ConnectPageBody() {
  const related = relatedLinksForPath("/connect");
  const phone = siteContact.phone;
  const tel = phone ? `tel:${phone.replace(/\D/g, "")}` : undefined;
  const facebookHref =
    process.env.NEXT_PUBLIC_FACEBOOK_URL ?? siteContact.facebookUrl ?? "https://www.facebook.com/palmsplace";
  const youtubeHref = process.env.NEXT_PUBLIC_YOUTUBE_URL ?? "https://www.youtube.com/";

  return (
    <article className="mx-auto max-w-3xl px-6 py-12 md:py-16">
      <h1 className="font-display text-3xl font-semibold tracking-tight text-palms-cream md:text-4xl">
        Connect
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-palms-cream/85">
        Stay in touch with the Palms Place team—{siteContact.brokerage}. Same office NAP as
        throughout the site; details on the{" "}
        <Link className="text-palms-gold underline-offset-4 hover:underline" href="/contact">
          contact page
        </Link>
        .
      </p>

      <section className="mt-12">
        <h2 className="font-display text-2xl font-semibold text-palms-cream">Office</h2>
        <address className="mt-4 not-italic leading-relaxed text-palms-cream/85">
          {formatOfficeAddressLine()}
        </address>
        {siteContact.officeHoursLine ? (
          <p className="mt-2 text-palms-cream/80">{siteContact.officeHoursLine}</p>
        ) : null}
        {phone && tel ? (
          <p className="mt-4">
            <a className="font-medium text-palms-gold underline-offset-4 hover:underline" href={tel}>
              {phone}
            </a>
          </p>
        ) : null}
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl font-semibold text-palms-cream">Social &amp; video</h2>
        <p className="mt-4 leading-relaxed text-palms-cream/85">
          Follow{" "}
          <a
            className="text-palms-gold underline-offset-4 hover:underline"
            href={facebookHref}
            rel="noopener noreferrer"
            target="_blank"
          >
            Palms Place on Facebook
          </a>{" "}
          for building and area updates. The footer also links to{" "}
          <a
            className="text-palms-gold underline-offset-4 hover:underline"
            href={youtubeHref}
            rel="noopener noreferrer"
            target="_blank"
          >
            YouTube
          </a>{" "}
          for tours and market context.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl font-semibold text-palms-cream">Next step</h2>
        <p className="mt-4 leading-relaxed text-palms-cream/85">
          <Link className="font-medium text-palms-gold underline-offset-4 hover:underline" href="/contact">
            Schedule a call or visit
          </Link>
          , or return to{" "}
          <Link className="text-palms-gold underline-offset-4 hover:underline" href="/">
            the homepage
          </Link>
          .
        </p>
      </section>

      <RelatedPages links={related} />
    </article>
  );
}
