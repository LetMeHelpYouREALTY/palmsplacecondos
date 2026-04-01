import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/layouts/page-placeholder";

export const metadata: Metadata = {
  title: "Featured",
  description: "Featured listings and spotlight properties.",
};

export default function FeaturedPage() {
  return (
    <PagePlaceholder
      description="Featured homes and condos will display here when connected to your feed."
      title="Featured"
    />
  );
}
