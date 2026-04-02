import type { MetadataRoute } from "next";
import { getPublicSiteOrigin } from "@/lib/public-site-origin";

export const dynamic = "force-dynamic";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const base = await getPublicSiteOrigin();

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${base.replace(/\/$/, "")}/sitemap.xml`,
  };
}
