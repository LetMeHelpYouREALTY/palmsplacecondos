import type { Metadata } from "next";
import { HomesPageBody } from "@/components/marketing/homes-page-body";
import { canonicalMetadata } from "@/lib/metadata-helpers";

export const metadata: Metadata = {
  title: "Las Vegas homes for sale & Palms Place context",
  description:
    "Browse single-family and attached homes for sale in Las Vegas and near Palms Place with Dr. Jan Duffy and Chance Fuller, Berkshire Hathaway HomeServices Nevada Properties.",
  ...canonicalMetadata("/homes"),
};

export default function HomesPage() {
  return <HomesPageBody />;
}
