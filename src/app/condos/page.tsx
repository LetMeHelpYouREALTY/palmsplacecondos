import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/layouts/page-placeholder";
import { canonicalMetadata } from "@/lib/metadata-helpers";

export const metadata: Metadata = {
  title: "Condos & high-rise condos",
  description:
    "Las Vegas condos and Strip-area high-rise residences, including Palms Place—listings with Dr. Jan Duffy (listing specialist) and buyer tours with Chance Fuller.",
  ...canonicalMetadata("/condos"),
};

export default function CondosPage() {
  return (
    <PagePlaceholder
      description="Explore condo and high-rise inventory with the Palms Place team—Dr. Jan Duffy (listing) and Chance Fuller (buyers)."
      path="/condos"
      title="Condos"
    />
  );
}
