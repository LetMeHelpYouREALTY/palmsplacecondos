import { LuxuryPlaceholder } from "@/components/sections/luxury-placeholder";
import { ButtonLink } from "@/components/shared/button-link";
import { SectionEyebrow } from "@/components/shared/section-heading";

export function UnwindSection() {
  return (
    <section
      aria-labelledby="unwind-heading"
      className="border-t border-palms-gold/15 bg-palms-charcoal px-6 py-20 md:py-28"
    >
      <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2 md:items-center md:gap-16">
        <LuxuryPlaceholder
          alt="Abstract gradient placeholder for pool and amenity photography"
          className="min-h-[280px] w-full rounded-2xl shadow-2xl shadow-black/30 md:min-h-[340px]"
          variant="unwind"
        />
        <div>
          <SectionEyebrow>Unwind</SectionEyebrow>
          <h2
            className="font-display mt-6 text-3xl font-semibold tracking-tight text-palms-cream md:text-4xl"
            id="unwind-heading"
          >
            AT PALMS PLACE
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-palms-cream/85">
            Resort-style pool and outdoor spaces are part of the Palms Place lifestyle. Verify current
            HOA amenities, hours, and rental policies with disclosures—not all hotel pool programs
            apply to condominium ownership.
          </p>
          <div className="mt-8">
            <ButtonLink href="/communities" variant="secondary">
              Explore communities
            </ButtonLink>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-5xl rounded-2xl border border-palms-gold/15 bg-palms-charcoal-elevated/80 p-8 shadow-xl shadow-black/20 backdrop-blur-sm md:mt-20 md:p-10">
        <h3 className="font-display text-xl font-semibold text-palms-cream">Cabanas &amp; daybeds</h3>
        <p className="mt-3 text-palms-cream/80">
          Hotel-adjacent pool experiences may be available through the resort; ownership benefits
          differ. Ask your agent for what applies to residents versus hotel guests.
        </p>
        <p className="mt-4 text-sm text-palms-cream/65">
          For resort pool and cabana programs operated by the Palms, see the official resort site.
        </p>
      </div>
    </section>
  );
}
