import { buildLlmsTxt } from "@/lib/llms-txt";

export const dynamic = "force-dynamic";

/** LLM-oriented site index — https://llmstxt.org */
export function GET(): Response {
  return new Response(buildLlmsTxt(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
