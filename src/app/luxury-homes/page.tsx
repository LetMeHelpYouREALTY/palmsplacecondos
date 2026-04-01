import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/layouts/page-placeholder";

export const metadata: Metadata = {
  title: "Luxury Homes",
  description: "Luxury homes and estates in Las Vegas and surrounding communities.",
};

export default function LuxuryHomesPage() {
  return (
    <PagePlaceholder
      description="Luxury segment landing content and featured estates will be added here."
      title="Luxury Homes"
    />
  );
}
