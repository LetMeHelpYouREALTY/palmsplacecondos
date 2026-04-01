import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/layouts/page-placeholder";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Dr. Jan Duffy for tours, offers, and Palms Place market questions.",
};

export default function ContactPage() {
  return (
    <PagePlaceholder
      description="Contact form and preferred phone hours will mirror your Google Business Profile."
      title="Contact"
    />
  );
}
