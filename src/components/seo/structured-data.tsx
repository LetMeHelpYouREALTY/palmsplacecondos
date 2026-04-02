import type { JsonLdGraph } from "@/lib/schema";

type StructuredDataProps = {
  /** JSON-LD object (e.g. `@graph` from `lib/schema.ts`). */
  data: JsonLdGraph | Record<string, unknown>;
};

/**
 * Emits one JSON-LD graph. Use for base entities in layout and route-specific blocks (e.g. FAQPage).
 */
export function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      type="application/ld+json"
    />
  );
}
