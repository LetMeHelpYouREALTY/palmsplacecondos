import type { Metadata } from "next";
import { GuidePalmsPlaceHoaPageBody } from "@/components/marketing/guide-palms-place-hoa-page-body";
import { canonicalMetadata } from "@/lib/metadata-helpers";

const path = "/guide/palms-place-hoa-and-monthly-costs";

export const metadata: Metadata = {
  title: "Palms Place HOA fees & monthly costs | Buyer guide",
  description:
    "Read Palms Place HOA assessments, reserves, and parking fees—model true monthly carry before you tour or offer on a Las Vegas Strip high-rise condo.",
  ...canonicalMetadata(path),
};

export default function GuidePalmsPlaceHoaPage() {
  return <GuidePalmsPlaceHoaPageBody />;
}
