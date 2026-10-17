import { buildLlmsTxt } from "@/lib/llms-txt";
import { getPublicSiteOrigin } from "@/lib/public-site-origin";

export const dynamic = "force-dynamic";

/** LLM-oriented site index — https://llmstxt.org */
export async function GET(): Promise<Response> {
  return new Response(buildLlmsTxt(await getPublicSiteOrigin()), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
      // robots.ts must keep allowing this path or crawlers never see the noindex.
      "X-Robots-Tag": "noindex",
    },
  });
}
