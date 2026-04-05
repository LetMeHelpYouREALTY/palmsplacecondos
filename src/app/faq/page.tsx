import type { Metadata } from "next";
import { FaqPageBody } from "@/components/marketing/faq-page-body";
import { canonicalMetadata, canonicalPath } from "@/lib/metadata-helpers";

const title = "Palms Place Las Vegas FAQ | Address, Strip, tower & ownership";

const description =
  "FAQ: Palms Place address, Strip location, 47-story tower, and condo ownership—plus planning your stay (pool hours, shuttle, dining, resort fees). Confirm guest details with the property or your booking.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title: "Palms Place Las Vegas FAQ — address, Strip & ownership",
    description,
    url: canonicalPath("/faq"),
    siteName: "Palms Place Condos",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Palms Place Las Vegas FAQ — address, Strip & ownership",
    description,
  },
  ...canonicalMetadata("/faq"),
};

export default function FaqPage() {
  return <FaqPageBody />;
}
