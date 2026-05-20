import type { Metadata } from "next";
import { GuidePalmsPlaceUnitTypesPageBody } from "@/components/marketing/guide-palms-place-unit-types-page-body";
import { palmsPlaceUnitTypesGuideMeta } from "@/lib/content/palms-place-unit-types-guide";
import { canonicalMetadata } from "@/lib/metadata-helpers";
import { siteContact } from "@/lib/site-contact";

const path = "/guide/palms-place-unit-types";

export const metadata: Metadata = {
  title: "Palms Place studios vs one-bedroom | Buyer guide",
  description: `${palmsPlaceUnitTypesGuideMeta.description} ${siteContact.brokerage}.`,
  ...canonicalMetadata(path),
};

export default function GuidePalmsPlaceUnitTypesPage() {
  return <GuidePalmsPlaceUnitTypesPageBody />;
}
