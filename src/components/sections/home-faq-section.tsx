import { StructuredData } from "@/components/seo/structured-data";
import { SectionEyebrow } from "@/components/shared/section-heading";
import { homeFaqItems } from "@/lib/content/home-faq";
import { getHomeFaqPageJsonLd } from "@/lib/schema";

export function HomeFaqSection() {
  const faqJsonLd = getHomeFaqPageJsonLd(homeFaqItems);

  return (
    <section
      aria-labelledby="home-faq-heading"
      className="border-t border-palms-gold/15 bg-palms-charcoal-muted/20 py-16 md:py-20"
    >
      <StructuredData data={faqJsonLd} />
      <div className="mx-auto max-w-3xl px-6">
        <SectionEyebrow>Questions</SectionEyebrow>
        <h2
          className="font-display mt-6 text-3xl font-semibold tracking-tight text-palms-cream md:text-4xl"
          id="home-faq-heading"
        >
          Palms Place Condos FAQ — Everything Buyers Need to Know
        </h2>
        <div className="mt-10 space-y-10">
          {homeFaqItems.map((item) => (
            <div key={item.question}>
              <h3 className="text-lg font-semibold text-palms-cream">{item.question}</h3>
              <p className="mt-3 text-base leading-relaxed text-palms-cream/80">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
