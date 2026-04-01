import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/layouts/page-placeholder";

export const metadata: Metadata = {
  title: "Communities",
  description: "Las Vegas neighborhoods and communities near the Strip and Palms Place.",
};

export default function CommunitiesPage() {
  return (
    <PagePlaceholder
      description="Community guides and lifestyle context will be expanded here."
      title="Communities"
    />
  );
}
