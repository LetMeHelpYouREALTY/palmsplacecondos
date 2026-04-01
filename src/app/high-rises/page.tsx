import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/layouts/page-placeholder";

export const metadata: Metadata = {
  title: "High Rises",
  description: "High-rise condos and towers in Las Vegas, including Palms Place.",
};

export default function HighRisesPage() {
  return (
    <PagePlaceholder
      description="Strip and urban high-rise inventory and building notes will live here."
      title="High Rises"
    />
  );
}
