import type { Metadata } from "next";
import { ContactPageBody } from "@/components/marketing/contact-page-body";
import { PalmsPlaceListingAuthority } from "@/components/seo/palms-place-listing-authority";
import { buildPageMetadata } from "@/lib/metadata-helpers";
import { siteContact } from "@/lib/site-contact";

export const metadata: Metadata = buildPageMetadata({
  path: "/contact",
  title: "Contact Palms Place Condos — Las Vegas office",
  description: `Call ${siteContact.phone} for Palms Place tours and Las Vegas high-rise questions. ${siteContact.agentName}, ${siteContact.brokerage}.`,
});

export default function ContactPage() {
  return (
    <>
      <ContactPageBody />
      <PalmsPlaceListingAuthority pathname="/contact" />
    </>
  );
}
