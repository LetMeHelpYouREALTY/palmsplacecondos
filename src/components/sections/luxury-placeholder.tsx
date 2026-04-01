import { cn } from "@/lib/utils";

type LuxuryPlaceholderProps = {
  /** Short description for assistive tech (e.g. “High-rise skyline at dusk”). */
  alt: string;
  className?: string;
  /** Visual variant for different sections. */
  variant?: "hero" | "stay" | "unwind";
};

const variantClass: Record<NonNullable<LuxuryPlaceholderProps["variant"]>, string> = {
  hero: "from-palms-charcoal via-palms-charcoal-muted to-[#2a2418]",
  stay: "from-[#1a1610] via-palms-charcoal-muted to-palms-charcoal",
  unwind: "from-[#0f1814] via-[#152620] to-palms-charcoal",
};

/**
 * Gradient placeholder until licensed photography is added. Not a depiction of Palms Place.
 */
export function LuxuryPlaceholder({ alt, className, variant = "hero" }: LuxuryPlaceholderProps) {
  return (
    <div
      aria-label={alt}
      className={cn(
        "relative overflow-hidden bg-gradient-to-br",
        variantClass[variant],
        className,
      )}
      role="img"
    />
  );
}
