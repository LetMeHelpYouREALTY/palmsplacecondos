import type { MetadataRoute } from "next";
import { absoluteUrlForSitemap, getPublicSiteOrigin } from "@/lib/public-site-origin";

type ChangeFrequency = NonNullable<MetadataRoute.Sitemap[0]["changeFrequency"]>;

// Static marketing routes — keep in sync with app route pages.
const PATHS: { path: string; changeFrequency: ChangeFrequency; priority: number }[] = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/homes", changeFrequency: "monthly", priority: 0.85 },
  { path: "/condos", changeFrequency: "monthly", priority: 0.85 },
  { path: "/search", changeFrequency: "weekly", priority: 0.9 },
  { path: "/sell", changeFrequency: "monthly", priority: 0.85 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.85 },
  { path: "/connect", changeFrequency: "monthly", priority: 0.75 },
  { path: "/faq", changeFrequency: "monthly", priority: 0.78 },
  { path: "/communities", changeFrequency: "monthly", priority: 0.8 },
  { path: "/featured", changeFrequency: "weekly", priority: 0.75 },
  { path: "/high-rises", changeFrequency: "monthly", priority: 0.8 },
  { path: "/luxury-homes", changeFrequency: "monthly", priority: 0.8 },
  { path: "/popular-searches", changeFrequency: "monthly", priority: 0.75 },
  { path: "/under-500k", changeFrequency: "monthly", priority: 0.75 },
  { path: "/buyers/calculators", changeFrequency: "monthly", priority: 0.7 },
];

/** Per-request URLs so sitemap matches the host Google fetches (www vs deployment URL). */
export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = await getPublicSiteOrigin();
  const lastModified = new Date();

  return PATHS.map(({ path, changeFrequency, priority }) => ({
    url: absoluteUrlForSitemap(base, path),
    lastModified,
    changeFrequency,
    priority,
  }));
}
