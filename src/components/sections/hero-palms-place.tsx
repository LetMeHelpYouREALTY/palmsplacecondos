import Image from "next/image";
import Link from "next/link";
import { ButtonAnchor, ButtonLink } from "@/components/shared/button-link";
import { SectionEyebrow } from "@/components/shared/section-heading";
import { getRealScoutSharedSearchUrl } from "@/lib/realscout";
import { siteContact } from "@/lib/site-contact";

function telHref(phone: string): string {
  return `tel:${phone.replace(/\D/g, "")}`;
}

export function HeroPalmsPlace() {
  const sharedSearchUrl = getRealScoutSharedSearchUrl();
  const phone = siteContact.phone ?? "";
  const phoneDisplay = phone || "Add phone in site contact";

  return (
    <section aria-labelledby="hero-heading" className="relative isolate min-h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image
          alt="Palms Place condos for sale Las Vegas Strip high-rise exterior view"
          className="object-cover"
          fetchPriority="high"
          fill
          priority
          sizes="100vw"
          src="/placeholders/hero-gradient.svg"
          unoptimized
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-palms-charcoal via-palms-charcoal/75 to-palms-charcoal/20"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(197,163,90,0.12),transparent)]"
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-5xl flex-col justify-end px-6 pb-20 pt-32 md:pb-28 md:pt-36">
        <SectionEyebrow>Las Vegas high-rise living</SectionEyebrow>

        <h1
          className="font-display mt-8 max-w-3xl text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-palms-cream md:text-5xl lg:text-6xl"
          id="hero-heading"
        >
          Palms Place Condos for Sale — Las Vegas Strip High-Rise Residences
        </h1>

        <div className="mt-6 max-w-3xl space-y-5 text-base leading-relaxed text-palms-cream/88 md:text-lg">
          <p>
            Palms Place condos for sale put you in Strip-adjacent residences with quick access to
            dining, entertainment, and resort-style living. Whether you are comparing Las Vegas
            high-rise condos for a primary home, a second home, or a condo investment Las Vegas
            buyers use for long-term holds, start with current MLS-backed search tools and verified
            disclosures—pricing and availability change daily.
          </p>
          <p>
            Dr. Jan Duffy Palms Place buyers and sellers work with {siteContact.brokerage}. As{" "}
            {siteContact.agentTitle}, {siteContact.agentName} leads listing strategy;{" "}
            {siteContact.buyerSpecialistName} supports buyers on tours and offers. Luxury condos
            West Las Vegas and near the Strip each carry different HOA rules—ask what is included for
            Palms Casino Resort residences access versus hotel guest programs.
          </p>
          <p>
            Review Palms Place floor plans for studio and one-bedroom layouts, and compare HOA
            amenities Palms Place documents describe for pool use, parking, and rental restrictions.
            A lock-and-leave Las Vegas condo here can fit frequent travelers who want a maintained
            high-rise with on-site services—confirm every material fact with your agent and
            official HOA materials.
          </p>
          <p>
            <Link className="font-medium text-palms-gold underline-offset-4 hover:underline" href="/condos">
              Browse all Las Vegas high-rise condos
            </Link>{" "}
            on this site, explore{" "}
            <Link className="font-medium text-palms-gold underline-offset-4 hover:underline" href="/communities">
              Las Vegas condo communities overview
            </Link>
            , and when you are ready,{" "}
            <Link className="font-medium text-palms-gold underline-offset-4 hover:underline" href="/contact">
              Schedule a Palms Place showing with Dr. Jan
            </Link>
            . For a wider luxury baseline, see{" "}
            <Link className="font-medium text-palms-gold underline-offset-4 hover:underline" href="/luxury-homes">
              Luxury homes in Summerlin and Henderson
            </Link>
            . Owners preparing to move can review{" "}
            <Link className="font-medium text-palms-gold underline-offset-4 hover:underline" href="/sell">
              Sell your Palms Place condo — free valuation
            </Link>{" "}
            resources with the listing team.
          </p>
          <p>
            Call or text{" "}
            {phone ? (
              <a className="font-medium text-palms-gold underline-offset-4 hover:underline" href={telHref(phone)}>
                {phoneDisplay}
              </a>
            ) : (
              phoneDisplay
            )}{" "}
            for next steps, or open the curated search below for Palms Place condos for sale matched
            to your criteria.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <ButtonAnchor href={sharedSearchUrl} variant="primary">
            Search homes
          </ButtonAnchor>
          <ButtonLink href="/contact" variant="secondary">
            Contact
          </ButtonLink>
          <Link
            className="text-sm font-medium text-palms-gold/90 underline-offset-4 transition-colors hover:text-palms-gold hover:underline"
            href="#listings"
          >
            View live listings
          </Link>
        </div>
      </div>
    </section>
  );
}
