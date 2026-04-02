import Link from "next/link";
import { FadeCarousel } from "@/components/sections/fade-carousel";
import { LuxuryPlaceholder } from "@/components/sections/luxury-placeholder";
import { SectionEyebrow } from "@/components/shared/section-heading";
import { getRealScoutSharedSearchUrl } from "@/lib/realscout";

export function StaySection() {
  const sharedSearchUrl = getRealScoutSharedSearchUrl();

  return (
    <section
      aria-labelledby="stay-heading"
      className="border-t border-palms-gold/15 bg-palms-charcoal-elevated px-6 py-20 md:py-28"
    >
      <div className="mx-auto max-w-5xl">
        <SectionEyebrow>Stay</SectionEyebrow>
        <h2
          className="font-display mt-6 text-3xl font-semibold tracking-tight text-palms-cream md:text-4xl"
          id="stay-heading"
        >
          AT PALMS PLACE
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-palms-cream/85">
          Next to the Palms Casino Resort towers, Palms Place offers a high-rise residential setting
          with quick access to dining and entertainment—while remaining a private retreat above the
          energy of the Strip.
        </p>

        <div className="mt-12 overflow-hidden rounded-2xl border border-palms-gold/15 shadow-2xl shadow-black/40">
          <FadeCarousel
            autoplayMs={7500}
            label="Residence highlights"
            slides={[
              {
                id: "studio",
                content: (
                  <div className="grid gap-0 md:grid-cols-2">
                    <LuxuryPlaceholder
                      alt="Abstract gradient placeholder for residence photography"
                      className="min-h-[220px] md:min-h-[280px]"
                      variant="stay"
                    />
                    <div className="flex flex-col justify-center bg-palms-charcoal-muted p-8 md:p-10">
                      <h3 className="font-display text-2xl font-semibold text-palms-cream">
                        Studio residences
                      </h3>
                      <p className="mt-3 text-palms-cream/80">
                        Efficient layouts with Strip or desert-oriented views—ideal for lock-and-leave
                        ownership near the Strip.
                      </p>
                      <div className="mt-6 flex flex-wrap gap-3">
                        <Link
                          className="text-sm font-semibold text-palms-gold underline-offset-4 hover:underline"
                          href="/condos"
                        >
                          View condos
                        </Link>
                        <a
                          className="text-sm font-semibold text-palms-cream/80 underline-offset-4 hover:text-palms-gold hover:underline"
                          href={sharedSearchUrl}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          Search inventory
                        </a>
                      </div>
                    </div>
                  </div>
                ),
              },
              {
                id: "one-bed",
                content: (
                  <div className="grid gap-0 md:grid-cols-2">
                    <LuxuryPlaceholder
                      alt="Abstract gradient placeholder for residence photography"
                      className="min-h-[220px] md:min-h-[280px]"
                      variant="stay"
                    />
                    <div className="flex flex-col justify-center bg-palms-charcoal-muted p-8 md:p-10">
                      <h3 className="font-display text-2xl font-semibold text-palms-cream">
                        One-bedroom residences
                      </h3>
                      <p className="mt-3 text-palms-cream/80">
                        Extra space for work-from-home or hosting—compare floor plans and HOA
                        considerations with your agent.
                      </p>
                      <div className="mt-6 flex flex-wrap gap-3">
                        <Link
                          className="text-sm font-semibold text-palms-gold underline-offset-4 hover:underline"
                          href="/high-rises"
                        >
                          High rises
                        </Link>
                        <Link
                          className="text-sm font-semibold text-palms-cream/80 underline-offset-4 hover:text-palms-gold hover:underline"
                          href="/luxury-homes"
                        >
                          Luxury homes
                        </Link>
                      </div>
                    </div>
                  </div>
                ),
              },
            ]}
            className="p-1 md:p-2"
          />
        </div>
      </div>
    </section>
  );
}
