import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/layouts/page-placeholder";

export const metadata: Metadata = {
  title: "Search",
  description: "Search active listings with filters tailored to your goals.",
};

export default function SearchPage() {
  return (
    <PagePlaceholder
      description="Property search tools and MLS-powered results will be integrated here."
      title="Search"
    />
  );
}
