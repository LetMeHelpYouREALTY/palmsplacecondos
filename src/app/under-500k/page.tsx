import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/layouts/page-placeholder";

export const metadata: Metadata = {
  title: "Under $500K",
  description: "Homes and condos under $500,000 in Las Vegas.",
};

export default function Under500kPage() {
  return (
    <PagePlaceholder
      description="Price-filtered search results will be wired to your IDX or search provider."
      title="Under $500K"
    />
  );
}
