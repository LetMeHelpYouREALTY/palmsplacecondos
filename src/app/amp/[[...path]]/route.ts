import { getAmpPageBySegments } from "@/lib/amp/catalog";
import { renderAmpDocument } from "@/lib/amp/render";
import { NextResponse } from "next/server";

type AmpRouteContext = {
  params: Promise<{ path?: string[] }>;
};

/** AMP alternates for the AEO canonical URLs. Not a sitemap URL. */
export async function GET(
  _request: Request,
  context: AmpRouteContext,
): Promise<NextResponse> {
  const { path } = await context.params;
  const page = getAmpPageBySegments(path);
  if (!page) {
    return new NextResponse("Not found", {
      status: 404,
      headers: { "content-type": "text/plain; charset=utf-8" },
    });
  }

  return new NextResponse(renderAmpDocument(page), {
    status: 200,
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
