import type { Metadata } from "next";
import { Cormorant_Garamond, Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { SiteFooter } from "@/components/layouts/site-footer";
import { SiteHeader } from "@/components/layouts/site-header";
import { RealScoutOfficeListingsEmbed } from "@/components/seo/realscout-office-listings-embed";
import { StructuredData } from "@/components/seo/structured-data";
import { formatTeamPhrase, siteContact } from "@/lib/site-contact";
import { getBaseJsonLd } from "@/lib/schema";
import { getSiteUrl } from "@/lib/site-url";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const displaySerif = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "600", "700"],
});

const siteUrl = getSiteUrl();
const googleSiteVerification = getGoogleSiteVerification();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Palms Place Condos | Las Vegas Strip High-Rise Real Estate",
    template: "%s | Palms Place Condos",
  },
  description: `Palms Place high-rise condos near the Las Vegas Strip. ${siteContact.primaryServiceArea}. ${formatTeamPhrase()}. ${siteContact.brokerage}.`,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Palms Place Condos",
    title: "Palms Place Condos | Las Vegas Strip High-Rise Real Estate",
    description: `Palms Place high-rise condos near the Las Vegas Strip. ${siteContact.primaryServiceArea}. ${formatTeamPhrase()}. ${siteContact.brokerage}.`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Palms Place Condos | Las Vegas Strip High-Rise Real Estate",
    description: `Palms Place high-rise condos near the Las Vegas Strip. ${siteContact.primaryServiceArea}. ${formatTeamPhrase()}.`,
  },
  ...(googleSiteVerification
    ? {
        verification: {
          google: googleSiteVerification,
        },
      }
    : {}),
};

function getGoogleSiteVerification(): string | undefined {
  const v =
    process.env.GOOGLE_SITE_VERIFICATION?.trim() ||
    process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim();
  return v || undefined;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${displaySerif.variable} min-h-screen bg-palms-charcoal text-palms-cream antialiased`}
      >
        <StructuredData data={getBaseJsonLd()} />
        <Script
          src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
          strategy="afterInteractive"
        />
        <div className="flex min-h-screen flex-col">
          <a
            className="sr-only rounded-md bg-palms-gold px-4 py-2 text-sm font-medium text-palms-charcoal focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:outline-none focus:ring-2 focus:ring-palms-cream"
            href="#site-footer-nav"
          >
            Skip to site navigation
          </a>
          <SiteHeader />
          <main className="flex-1" id="main-content">
            {children}
          </main>
          <RealScoutOfficeListingsEmbed />
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
