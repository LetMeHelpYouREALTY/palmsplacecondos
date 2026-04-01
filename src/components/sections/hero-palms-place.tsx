import Image from "next/image";
import Link from "next/link";
import { siteContact } from "@/lib/site-contact";

export function HeroPalmsPlace() {
  return (
    <section aria-labelledby="hero-heading" className="relative isolate min-h-[78vh] w-full overflow-hidden">
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
          className="absolute inset-0 bg-gradient-to-t from-palms-charcoal via-palms-charcoal/70 to-transparent"
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[78vh] max-w-5xl flex-col justify-end px-6 pb-16 pt-28 md:pb-24">
        <p className="font-display text-sm font-semibold uppercase tracking-[0.35em] text-palms-gold">
          Las Vegas high-rise living
        </p>
        <h1
          className="font-display mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-palms-cream md:text-5xl lg:text-6xl"
          id="hero-heading"
        >
          Palms Place Condos
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-palms-cream/85 md:text-xl">
          Strip-adjacent residences with resort amenities nearby. Explore listings and floor plans
          with {siteContact.agentName}, {siteContact.brokerage}.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            className="inline-flex items-center justify-center rounded-md bg-palms-gold px-6 py-3 text-sm font-semibold text-palms-charcoal transition-colors hover:bg-palms-gold-hover"
            href="/search"
          >
            Search homes
          </Link>
          <Link
            className="inline-flex items-center justify-center rounded-md border border-palms-gold/50 px-6 py-3 text-sm font-semibold text-palms-cream transition-colors hover:border-palms-gold hover:bg-palms-gold/10"
            href="/contact"
          >
            Contact
          </Link>
        </div>
      </div>
    </section>
  );
}
