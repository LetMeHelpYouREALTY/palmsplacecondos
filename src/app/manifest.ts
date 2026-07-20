import type { MetadataRoute } from "next";
import { siteContact } from "@/lib/site-contact";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Palms Place Condos",
    short_name: "Palms Place",
    description: `Palms Place condos for sale on the Las Vegas Strip — ${siteContact.teamBrandName}.`,
    start_url: "/",
    display: "browser",
    background_color: "#0d0d0d",
    theme_color: "#0d0d0d",
    lang: "en-US",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
