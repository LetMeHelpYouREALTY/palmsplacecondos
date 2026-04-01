import Link from "next/link";
import { LuxuryPlaceholder } from "@/components/sections/luxury-placeholder";

export function UnwindSection() {
  return (
    <section
      aria-labelledby="unwind-heading"
      className="border-t border-palms-gold/20 bg-palms-charcoal px-6 py-16 md:py-24"
    >
      <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2 md:items-center md:gap-14">
        <LuxuryPlaceholder
          alt="Abstract gradient placeholder for pool and amenity photography"
          className="min-h-[260px] w-full rounded-lg md:min-h-[320px]"
          variant="unwind"
        />
        <div>
          <p className="font-display text-sm font-semibold uppercase tracking-[0.35em] text-palms-gold">
            Unwind
          </p>
          <h2
            className="font-display mt-2 text-3xl font-semibold tracking-tight text-palms-cream md:text-4xl"
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
            <Link
              className="inline-flex rounded-md border border-palms-gold/45 px-5 py-2.5 text-sm font-semibold text-palms-gold transition-colors hover:bg-palms-gold/10"
              href="/communities"
            >
              Explore communities
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-5xl rounded-lg border border-palms-gold/20 bg-palms-charcoal-elevated p-8 md:p-10">
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
