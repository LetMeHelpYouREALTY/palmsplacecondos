import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/layouts/page-placeholder";
import { canonicalMetadata } from "@/lib/metadata-helpers";
import { formatOfficeAddressLine, formatTeamPhrase, siteContact } from "@/lib/site-contact";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${formatTeamPhrase()} at ${formatOfficeAddressLine()}. ${siteContact.officeHoursLine}. Palms Place tours and Las Vegas high-rise questions—${siteContact.brokerage}.`,
  ...canonicalMetadata("/contact"),
};

export default function ContactPage() {
  return (
    <PagePlaceholder
      description={`Office: ${formatOfficeAddressLine()}. Hours: ${siteContact.officeHoursLine}. Team: ${formatTeamPhrase()}. Add your public phone in site contact when it matches your Google Business Profile.`}
      path="/contact"
      title="Contact"
    />
  );
}
