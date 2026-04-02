import type { Metadata } from "next";
import { ContactPageBody } from "@/components/marketing/contact-page-body";
import { canonicalMetadata } from "@/lib/metadata-helpers";
import { formatOfficeAddressLine, formatTeamPhrase, siteContact } from "@/lib/site-contact";

export const metadata: Metadata = {
  title: "Contact Dr. Jan Duffy — Palms Place real estate",
  description: `Call ${siteContact.phone ?? ""} or email ${siteContact.emailGeneral ?? ""} — ${formatTeamPhrase()} at ${formatOfficeAddressLine()}. ${siteContact.officeHoursLine ?? ""}. Palms Place tours and Las Vegas high-rise questions—${siteContact.brokerage}.`,
  ...canonicalMetadata("/contact"),
};

export default function ContactPage() {
  return <ContactPageBody />;
}
