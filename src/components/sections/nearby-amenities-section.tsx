import Link from "next/link";
import { CommunityAmenityMap } from "@/components/maps/community-amenity-map";
import { communityMapCenter, nearbyAmenitiesPagePath } from "@/lib/content/nearby-amenities";
import { palmsPlaceTower } from "@/lib/content/palms-place-building";

type NearbyAmenitiesSectionProps = {
  /** Unique heading id for the page */
  headingId: string;
  variant?: "full" | "compact";
};

/**
 * Reusable “What's Nearby” section — server shell + lazy client map.
 */
export function NearbyAmenitiesSection({
  headingId,
  variant = "compact",
}: NearbyAmenitiesSectionProps) {
  return (
    <section
      aria-labelledby={headingId}
      className="border-t border-palms-gold/15 bg-palms-charcoal-muted/20 px-6 py-14 md:py-16"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-palms-gold-muted">
          Life near Palms Place
        </p>
        <h2
          className="font-display mt-3 text-2xl font-semibold tracking-tight text-palms-cream md:text-3xl"
          id={headingId}
        >
          What&apos;s nearby at {communityMapCenter.addressLine}?
        </h2>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-palms-cream/85">
          Strip-adjacent dining, grocery, healthcare, and resort corridors within a short drive of the{" "}
          {palmsPlaceTower.floors}-story tower. Filter the map by category, then read the full{" "}
          <Link
            className="font-medium text-palms-gold underline-offset-4 hover:underline"
            href={nearbyAmenitiesPagePath}
          >
            nearby amenities guide
          </Link>{" "}
          for commute notes and buyer FAQs.
        </p>
        <div className="mt-8">
          <CommunityAmenityMap defaultCategory="restaurants" variant={variant} />
        </div>
      </div>
    </section>
  );
}
