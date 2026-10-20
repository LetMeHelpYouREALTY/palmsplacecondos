import type { Metadata } from "next";
import { GuidePalmsPlaceParkingAndPetsPageBody } from "@/components/marketing/guide-palms-place-parking-and-pets-page-body";
import { buildPageMetadata } from "@/lib/metadata-helpers";

const path = "/guide/palms-place-parking-and-pets";

export const metadata: Metadata = buildPageMetadata({
  path,
  title: "Palms Place parking and pets | Buyer verification guide",
  description:
    "How Dr. Jan Duffy checks Palms Place parking assignments and pet rules in the resale certificate at 4381 W Flamingo Road—before you waive a document contingency.",
});

export default function GuidePalmsPlaceParkingAndPetsPage() {
  return <GuidePalmsPlaceParkingAndPetsPageBody />;
}
