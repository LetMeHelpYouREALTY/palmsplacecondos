import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/layouts/page-placeholder";

export const metadata: Metadata = {
  title: "Popular Searches",
  description: "Popular Las Vegas and Palms Place real estate searches.",
};

export default function PopularSearchesPage() {
  return (
    <PagePlaceholder
      description="Curated shortcuts to high-intent searches will be listed here."
      title="Popular Searches"
    />
  );
}
