import Link from "next/link";
import { CommunityAmenityMap } from "@/components/maps/community-amenity-map";
import { PageFaqSection } from "@/components/marketing/page-faq-section";
import { PalmsPlaceListingAuthority } from "@/components/seo/palms-place-listing-authority";
import { RelatedPages } from "@/components/seo/related-pages";
import { StructuredData } from "@/components/seo/structured-data";
import { nearbyAmenitiesPageFaq } from "@/lib/content/nearby-amenities-faq";
import { nearbyAmenitiesPageMeta, nearbyAmenitiesPagePath } from "@/lib/content/nearby-amenities";
import { formatPalmsPlaceTowerAddressLine, palmsPlaceTower } from "@/lib/content/palms-place-building";
import { relatedLinksForPath } from "@/lib/internal-links";
import {
  getBreadcrumbListJsonLd,
  getNearbyFeaturedPlacesItemListJsonLd,
  getWebPageJsonLdForPath,
} from "@/lib/schema";
import { siteContact } from "@/lib/site-contact";
import { AgentHeroBadge } from "@/components/shared/agent-hero-badge";

const path = nearbyAmenitiesPagePath;

const pageMeta = {
  name: nearbyAmenitiesPageMeta.title,
  description: nearbyAmenitiesPageMeta.description,
};

export function NearbyAmenitiesPageBody() {
  const related = relatedLinksForPath(path);
  const towerLine = formatPalmsPlaceTowerAddressLine();
  const webPageJsonLd = getWebPageJsonLdForPath(path, pageMeta, {
    aboutPalmsPlace: true,
    mainEntity: "palms-place",
    hasFaq: true,
    hasItemList: true,
  });
  const breadcrumbJsonLd = getBreadcrumbListJsonLd(path, [
    { name: "Home", path: "/" },
    { name: "Nearby amenities", path },
  ]);
  const placesListJsonLd = getNearbyFeaturedPlacesItemListJsonLd();

  return (
    <>
      <article className="mx-auto max-w-3xl px-6 py-12 md:py-16">
        <StructuredData data={webPageJsonLd} />
        <StructuredData data={breadcrumbJsonLd} />
        <StructuredData data={placesListJsonLd} />
        <h1 className="font-display text-3xl font-semibold tracking-tight text-palms-cream md:text-4xl">
          {nearbyAmenitiesPageMeta.h1}
        </h1>
        <AgentHeroBadge className="mt-6" />
        <p className="mt-4 text-lg leading-relaxed text-palms-cream/85">
          Palms Place owners live at <strong className="text-palms-cream">{towerLine}</strong>—a{" "}
          {palmsPlaceTower.floors}-story Strip-adjacent tower in Paradise (ZIP {palmsPlaceTower.postalCode}
          ). This page maps dining, grocery, healthcare, shopping, and recreation within a typical
          drive of the building. Drive times below are approximate; verify routes during your own tour
          windows.
        </p>

        <section className="mt-12" aria-labelledby="amenities-map-heading">
          <h2
            className="font-display text-2xl font-semibold text-palms-cream"
            id="amenities-map-heading"
          >
            Interactive map — what is near Palms Place?
          </h2>
          <p className="mt-4 leading-relaxed text-palms-cream/85">
            Filter by category to see curated destinations and, when the Google Maps key is configured,
            live Places results around the tower pin. Without a key, the map falls back to a centered
            embed plus the verified list below.
          </p>
          <div className="mt-8 -mx-6 max-w-none px-6 md:mx-0 md:px-0">
            <CommunityAmenityMap defaultCategory="restaurants" variant="full" />
          </div>
        </section>

        <section className="mt-14" aria-labelledby="amenities-dining-heading">
          <h2
            className="font-display text-2xl font-semibold text-palms-cream"
            id="amenities-dining-heading"
          >
            Dining and cafes near West Flamingo Road
          </h2>
          <p className="mt-4 leading-relaxed text-palms-cream/85">
            Palms Casino Resort (4321 W Flamingo Rd, Las Vegas) and Gold Coast Hotel &amp; Casino (4000
            W Flamingo Rd) are the closest resort dining
            clusters. Spring Mountain Road and Chinatown corridors add sit-down and quick-service options
            a few miles east—most Palms Place owners still drive rather than assume a single walkable
            strip.
          </p>
        </section>

        <section className="mt-12" aria-labelledby="amenities-grocery-heading">
          <h2
            className="font-display text-2xl font-semibold text-palms-cream"
            id="amenities-grocery-heading"
          >
            Grocery and everyday errands
          </h2>
          <p className="mt-4 leading-relaxed text-palms-cream/85">
            Whole Foods Market at 6689 Las Vegas Blvd S and Smith&apos;s Food and Drug at 4165 S Grand
            Canyon Dr are common full-cart runs from the tower. CVS Pharmacy at 3755 S Rainbow Blvd
            covers prescriptions west of the Strip. Hours and inventory change—confirm on your phone
            before you write an offer based on a single errand route.
          </p>
        </section>

        <section className="mt-12" aria-labelledby="amenities-health-heading">
          <h2
            className="font-display text-2xl font-semibold text-palms-cream"
            id="amenities-health-heading"
          >
            Healthcare and pharmacies
          </h2>
          <p className="mt-4 leading-relaxed text-palms-cream/85">
            Spring Valley Hospital Medical Center (5400 S Rainbow Blvd) is a major acute-care hospital
            southwest of Palms Place. University Medical Center and other valley hospitals serve
            different networks—choose providers with your insurer, not a map pin alone.
          </p>
        </section>

        <section className="mt-12" aria-labelledby="amenities-recreation-heading">
          <h2
            className="font-display text-2xl font-semibold text-palms-cream"
            id="amenities-recreation-heading"
          >
            Parks, golf, and fitness
          </h2>
          <p className="mt-4 leading-relaxed text-palms-cream/85">
            Sunset Park (2601 E Sunset Rd) is a large Clark County park east of the tower. Bali Hai Golf
            Club sits on Las Vegas Boulevard south of the resort corridor. Palms Place also documents
            on-site fitness amenities for residents—compare tower gym access with a membership at 24 Hour
            Fitness (4275 S Rainbow Blvd) if you want a backup routine. See the{" "}
            <Link
              className="text-palms-gold underline-offset-4 hover:underline"
              href="/guide/palms-place-amenities-and-resort-access"
            >
              owner amenities guide
            </Link>{" "}
            before you assume hotel privileges transfer automatically.
          </p>
        </section>

        <section className="mt-12" aria-labelledby="amenities-shopping-heading">
          <h2
            className="font-display text-2xl font-semibold text-palms-cream"
            id="amenities-shopping-heading"
          >
            Shopping and Strip-adjacent attractions
          </h2>
          <p className="mt-4 leading-relaxed text-palms-cream/85">
            Fashion Show Las Vegas (3200 S Las Vegas Blvd) and The Forum Shops at Caesars (3500 S Las
            Vegas Blvd) are major retail destinations on the resort corridor—typically a short drive
            from West Flamingo, not a neighborhood strip mall. Parking structures and ride-share drop
            zones change with events; budget time on weekends.
          </p>
        </section>

        <section className="mt-12" aria-labelledby="amenities-commute-heading">
          <h2
            className="font-display text-2xl font-semibold text-palms-cream"
            id="amenities-commute-heading"
          >
            Commute notes — Strip, airport, Summerlin
          </h2>
          <p className="mt-4 leading-relaxed text-palms-cream/85">
            The Las Vegas Strip resort core is usually a short drive east from 4381 W Flamingo Road;
            exact minutes depend on traffic and which venue you target. Harry Reid International
            Airport is commonly reachable in roughly 10–20 minutes off-peak. Downtown Summerlin and
            the 215 beltway sit west—helpful if you work or play on that side of the valley. These are
            approximate drive-time ranges, not guarantees.
          </p>
        </section>

        <section className="mt-12" aria-labelledby="amenities-schools-heading">
          <h2
            className="font-display text-2xl font-semibold text-palms-cream"
            id="amenities-schools-heading"
          >
            Schools and higher education
          </h2>
          <p className="mt-4 leading-relaxed text-palms-cream/85">
            Palms Place is primarily a lock-and-leave high-rise product—not a master-planned
            family-housing community. University of Nevada, Las Vegas (4505 S Maryland Pkwy) is the
            major campus anchor to the east. Clark County School District assignments change; verify
            zoning with the district if K–12 schools matter to your household.
          </p>
        </section>

        <PageFaqSection
          pathname={path}
          headingId="amenities-faq-heading"
          heading="Palms Place nearby amenities — buyer FAQ"
          intro={`Questions buyers ask ${siteContact.agentName} before they tour Strip-adjacent condos.`}
          items={nearbyAmenitiesPageFaq}
        />

        <RelatedPages links={related} />
      </article>
      <PalmsPlaceListingAuthority pathname={path} />
    </>
  );
}
