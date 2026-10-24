"use client";

import { usePathname } from "next/navigation";
import { ButtonAnchor } from "@/components/shared/button-link";
import { calendlyForPath, getCalendlyUrl } from "@/lib/calendly";

/** Booking strip rendered directly after the sitewide RealScout office listings. */
export function CalendlyAfterListings() {
  const { intent, campaign } = calendlyForPath(usePathname() || "/");

  return (
    <section aria-label="Schedule with Dr. Jan Duffy" className="bg-palms-charcoal-elevated py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-center md:flex-row md:text-left">
        <p className="font-display text-lg font-semibold text-palms-cream">
          See a home you like? Pick a time with Dr. Jan Duffy.
        </p>
        <ButtonAnchor href={getCalendlyUrl(intent, "after-listings", campaign)} variant="primary">
          Schedule time with me
        </ButtonAnchor>
      </div>
    </section>
  );
}
