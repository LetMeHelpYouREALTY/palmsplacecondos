import { buildLlmsFullTxt } from "@/lib/llms-txt";

export const dynamic = "force-dynamic";

/** Expanded Markdown index for LLM ingestion. */
export function GET(): Response {
  return new Response(buildLlmsFullTxt(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
