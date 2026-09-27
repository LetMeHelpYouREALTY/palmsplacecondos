import type { Metadata } from "next";
import { NearbyAmenitiesPageBody } from "@/components/marketing/nearby-amenities-page-body";
import { nearbyAmenitiesPageMeta } from "@/lib/content/nearby-amenities";
import { buildPageMetadata } from "@/lib/metadata-helpers";

export const metadata: Metadata = buildPageMetadata({
  path: nearbyAmenitiesPageMeta.path,
  title: nearbyAmenitiesPageMeta.title,
  description: nearbyAmenitiesPageMeta.description,
});

export default function NearbyAmenitiesPage() {
  return <NearbyAmenitiesPageBody />;
}
