import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/layouts/page-placeholder";

export const metadata: Metadata = {
  title: "Condos",
  description: "Condominiums and high-rise residences including Palms Place.",
};

export default function CondosPage() {
  return (
    <PagePlaceholder
      description="Explore condo and high-rise inventory with guidance from Dr. Jan Duffy."
      title="Condos"
    />
  );
}
