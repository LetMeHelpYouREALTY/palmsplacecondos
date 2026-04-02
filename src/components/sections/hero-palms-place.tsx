import Image from "next/image";
import Link from "next/link";
import { ButtonAnchor, ButtonLink } from "@/components/shared/button-link";
import { SectionEyebrow } from "@/components/shared/section-heading";
import { getRealScoutSharedSearchUrl } from "@/lib/realscout";
import { siteContact } from "@/lib/site-contact";

export function HeroPalmsPlace() {
  const sharedSearchUrl = getRealScoutSharedSearchUrl();

  return (
    <section aria-labelledby="hero-heading" className="relative isolate min-h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image
          alt=""
          className="object-cover"
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
          Palms Place Condos
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-palms-cream/88 md:text-xl">
          Strip-adjacent residences with resort amenities nearby. Explore listings and floor plans
          with {siteContact.agentName} ({siteContact.agentTitle}) and {siteContact.buyerSpecialistName},{" "}
          {siteContact.buyerSpecialistTitle}—{siteContact.brokerage}.
        </p>
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
