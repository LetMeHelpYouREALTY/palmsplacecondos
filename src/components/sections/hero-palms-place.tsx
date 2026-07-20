import Image from "next/image";
import Link from "next/link";
import { AgentHeroBadge } from "@/components/shared/agent-hero-badge";
import { ButtonLink } from "@/components/shared/button-link";
import { SectionEyebrow } from "@/components/shared/section-heading";
import { siteContact } from "@/lib/site-contact";

function telHref(phone: string): string {
  return `tel:${phone.replace(/\D/g, "")}`;
}

export function HeroPalmsPlace() {
  const phone = siteContact.phone ?? "";
  const phoneDisplay = phone || "Add phone in site contact";

  return (
    <section aria-labelledby="hero-heading" className="relative isolate min-h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image
          alt="Las Vegas high-rise condo tower at dusk — illustrative image for Palms Place condos for sale"
          className="object-cover"
          fetchPriority="high"
          fill
          priority
          sizes="100vw"
          src="/images/hero-tower-dusk.webp"
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

        <p className="mt-6 max-w-3xl text-base leading-relaxed text-palms-cream/90 md:text-lg">
          <strong className="font-semibold text-palms-cream">{siteContact.gbpBusinessName}</strong>{" "}
          — studio-to-penthouse residences at 4381 W Flamingo Road with the{" "}
          {siteContact.teamBrandName} at {siteContact.brokerage}. Browse live inventory, compare HOA
          rules, and schedule tours with {siteContact.agentName} (listings) or{" "}
          {siteContact.buyerSpecialistName} (buyers). Service area: {siteContact.primaryServiceArea}.
        </p>

        <div className="mt-6 max-w-3xl space-y-5 text-base leading-relaxed text-palms-cream/88 md:text-lg">
          <p>
            Strip-adjacent living puts dining, entertainment, and resort-style amenities within
            easy reach—whether you need a primary home, a second home, or a long-term hold. Start
            with a live search of active listings and verified disclosures; pricing and availability change
            daily.
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
            for next steps, or open the curated search below to match listings to your criteria.
          </p>
        </div>

        <AgentHeroBadge className="mt-8" />

        <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
          <ButtonLink href="/search" variant="primary">
            Browse listings
          </ButtonLink>
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
