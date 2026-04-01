import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layouts/site-header";
import { siteContact } from "@/lib/site-contact";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const metadataBaseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(metadataBaseUrl),
  title: {
    default: "Palms Place Condos | Las Vegas Strip High-Rise Real Estate",
    template: "%s | Palms Place Condos",
  },
  description: `Palms Place high-rise condos near the Las Vegas Strip. ${siteContact.primaryServiceArea}. ${siteContact.agentName}, ${siteContact.brokerage}.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen antialiased`}
      >
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <footer className="border-t border-black/10 px-6 py-8 text-sm text-foreground/80 dark:border-white/15">
            <div className="mx-auto max-w-3xl space-y-2">
              <p className="font-medium text-foreground">{siteContact.agentName}</p>
              <p>Nevada license {siteContact.license}</p>
              <p>{siteContact.brokerage}</p>
              <p className="text-foreground/70">
                Phone, office address, and hours will match Google Business Profile on this site once
                finalized for launch.
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
