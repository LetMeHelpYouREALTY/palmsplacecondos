import Link from "next/link";
import { PageFaqSection } from "@/components/marketing/page-faq-section";
import { RelatedPages } from "@/components/seo/related-pages";
import { StructuredData } from "@/components/seo/structured-data";
import { contactPageFaq } from "@/lib/content/discoverability-page-faqs";
import { relatedLinksForPath } from "@/lib/internal-links";
import { getBreadcrumbListJsonLd, getWebPageJsonLdForPath } from "@/lib/schema";
import { formatOfficeAddressLine, formatTeamPhrase, siteContact } from "@/lib/site-contact";
import { AgentHeroBadge } from "@/components/shared/agent-hero-badge";

function buildMapsQuery(): string {
  const line = formatOfficeAddressLine();
  return encodeURIComponent(line || "Las Vegas, NV");
}

const pageMeta = {
  name: "Contact the Palms Place team — Las Vegas office",
  description:
    "Office NAP, hours, map, and call/directions for Dr. Jan Duffy and Chance Fuller at Berkshire Hathaway HomeServices Nevada Properties.",
};

/** Expanded /contact — NAP, hours, map embed, Call / Directions / Google entry. */
export function ContactPageBody() {
  const related = relatedLinksForPath("/contact");
  const phone = siteContact.phone;
  const tel = phone ? `tel:${phone.replace(/\D/g, "")}` : undefined;
  const mapsQuery = buildMapsQuery();
  // Preference order: explicit embed URL → Maps Embed API place mode (officially
  // supported, free unlimited usage per Google docs) → keyless output=embed fallback.
  const mapsEmbedApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY?.trim();
  const embedApiSrc = mapsEmbedApiKey
    ? `https://www.google.com/maps/embed/v1/place?key=${mapsEmbedApiKey}&q=${mapsQuery}`
    : undefined;
  const fallbackEmbedSrc = `https://www.google.com/maps?q=${mapsQuery}&output=embed`;
  const embedSrc =
    process.env.NEXT_PUBLIC_CONTACT_MAP_EMBED_URL?.trim() ||
    siteContact.contactMapEmbedUrl?.trim() ||
    embedApiSrc ||
    fallbackEmbedSrc;
  const directionsHref = `https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`;
  const placeSearchHref = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;
  const webPageJsonLd = getWebPageJsonLdForPath("/contact", pageMeta, { aboutListingAgent: true });
  const breadcrumbJsonLd = getBreadcrumbListJsonLd("/contact", [
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
  ]);

  return (
    <article className="mx-auto max-w-3xl px-6 py-12 md:py-16">
      <StructuredData data={webPageJsonLd} />
      <StructuredData data={breadcrumbJsonLd} />
      <h1 className="font-display text-3xl font-semibold tracking-tight text-palms-cream md:text-4xl">
        Contact the Palms Place team
      </h1>
      <AgentHeroBadge className="mt-6" />
      <p className="mt-4 text-lg leading-relaxed text-palms-cream/85">
        {formatTeamPhrase()}. {siteContact.brokerage}. Office NAP below matches the Google Business
        Profile and site footer.
      </p>

      <section className="mt-10 rounded-lg border border-palms-gold/20 bg-palms-charcoal-elevated/80 p-6">
        <h2 className="font-display text-xl font-semibold text-palms-cream">Office &amp; phone</h2>
        <address className="mt-3 not-italic leading-relaxed text-palms-cream/90">
          {formatOfficeAddressLine()}
        </address>
        {siteContact.officeHoursLine ? (
          <p className="mt-3 text-palms-cream/85">{siteContact.officeHoursLine}</p>
        ) : null}
        {phone && tel ? (
          <p className="mt-3">
            <a
              className="font-medium text-palms-gold underline-offset-4 hover:underline"
              href={tel}
            >
              {phone}
            </a>
          </p>
        ) : null}

        <div className="mt-4 space-y-1 text-sm text-palms-cream/70">
          <p>
            {siteContact.agentName}: Nevada license {siteContact.license}
          </p>
          <p>
            Nevada license {siteContact.buyerSpecialistLicense} — {siteContact.buyerSpecialistTitle}
          </p>
        </div>

        {(siteContact.emailGeneral || siteContact.emailListings || siteContact.emailBuyers) && (
          <div className="mt-6 border-t border-palms-gold/15 pt-6">
            <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-palms-gold-muted">
              Email
            </h3>
            <ul className="mt-3 space-y-2 text-palms-cream/90">
              {siteContact.emailGeneral ? (
                <li>
                  General:{" "}
                  <a
                    className="font-medium text-palms-gold underline-offset-4 hover:underline"
                    href={`mailto:${siteContact.emailGeneral}`}
                  >
                    {siteContact.emailGeneral}
                  </a>
                </li>
              ) : null}
              {siteContact.emailListings ? (
                <li>
                  Listings ({siteContact.agentName}):{" "}
                  <a
                    className="font-medium text-palms-gold underline-offset-4 hover:underline"
                    href={`mailto:${siteContact.emailListings}`}
                  >
                    {siteContact.emailListings}
                  </a>
                </li>
              ) : null}
              {siteContact.emailBuyers ? (
                <li>
                  Buyers ({siteContact.buyerSpecialistName}):{" "}
                  <a
                    className="font-medium text-palms-gold underline-offset-4 hover:underline"
                    href={`mailto:${siteContact.emailBuyers}`}
                  >
                    {siteContact.emailBuyers}
                  </a>
                </li>
              ) : null}
            </ul>
          </div>
        )}

        <div className="mt-6 flex flex-wrap gap-3">
          {tel ? (
            <a
              className="inline-flex items-center justify-center rounded-md border border-palms-gold/40 bg-palms-gold/10 px-4 py-2 text-sm font-medium text-palms-cream transition-colors hover:bg-palms-gold/20"
              href={tel}
            >
              Call
            </a>
          ) : null}
          <a
            className="inline-flex items-center justify-center rounded-md border border-palms-gold/40 bg-palms-gold/10 px-4 py-2 text-sm font-medium text-palms-cream transition-colors hover:bg-palms-gold/20"
            href={directionsHref}
            rel="noopener noreferrer"
            target="_blank"
          >
            Directions
          </a>
          <a
            className="inline-flex items-center justify-center rounded-md border border-palms-gold/40 bg-palms-gold/10 px-4 py-2 text-sm font-medium text-palms-cream transition-colors hover:bg-palms-gold/20"
            href={placeSearchHref}
            rel="noopener noreferrer"
            target="_blank"
          >
            View on Google Maps
          </a>
        </div>
        <p className="mt-4 text-xs text-palms-cream/60">
          Open the Google Maps listing to read reviews and confirm hours match what you see here and
          on the Google Business Profile.
        </p>
      </section>

      <section className="mt-10" aria-label="Office location map">
        <h2 className="font-display text-xl font-semibold text-palms-cream">Map</h2>
        <div className="mt-4 overflow-hidden rounded-lg border border-palms-gold/15">
          <iframe
            allowFullScreen
            className="aspect-[4/3] min-h-[240px] w-full max-w-full border-0 md:min-h-[360px] md:aspect-auto md:h-[480px]"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            src={embedSrc}
            title={`Map — office at ${formatOfficeAddressLine() || "Las Vegas, NV"}`}
          />
        </div>
      </section>

      <section className="mt-10">
        <h2 className="font-display text-xl font-semibold text-palms-cream">Browse while you reach out</h2>
        <p className="mt-3 leading-relaxed text-palms-cream/85">
          <Link className="text-palms-gold underline-offset-4 hover:underline" href="/condos">
            Palms Place &amp; high-rise condos
          </Link>{" "}
          ·{" "}
          <Link className="text-palms-gold underline-offset-4 hover:underline" href="/sell">
            Sell with the team
          </Link>
        </p>
      </section>

      <PageFaqSection
        pathname="/contact"
        headingId="contact-faq-heading"
        heading="Contact FAQ"
        intro="Office NAP, hours, and which inbox to use."
        items={contactPageFaq}
      />

      <RelatedPages links={related} />
    </article>
  );
}
