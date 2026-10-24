import type { ComponentPropsWithoutRef } from "react";
import { ButtonAnchor } from "@/components/shared/button-link";
import { type CalendlyIntent, getCalendlyUrl } from "@/lib/calendly";
import { cn } from "@/lib/utils";

type CalendlyLinkProps = Omit<ComponentPropsWithoutRef<"a">, "href"> & {
  children: React.ReactNode;
  /** Booking event for this CTA (default: showing). */
  intent?: CalendlyIntent;
  /** utm_campaign — the page path without the leading slash. */
  page?: string;
};

/** Inline text link to Calendly (schedule / tour / consult CTAs). */
export function CalendlyLink({ children, className, intent, page, ...rest }: CalendlyLinkProps) {
  return (
    <a
      className={cn(
        "font-medium text-palms-gold underline-offset-4 hover:underline",
        className,
      )}
      href={getCalendlyUrl(intent, "link", page)}
      rel="noopener noreferrer"
      target="_blank"
      {...rest}
    >
      {children}
    </a>
  );
}

type CalendlyButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  intent?: CalendlyIntent;
  page?: string;
};

/** Button-styled Calendly CTA (same chrome as ButtonLink / ButtonAnchor). */
export function CalendlyButton({
  children,
  variant = "primary",
  className,
  intent,
  page,
}: CalendlyButtonProps) {
  return (
    <ButtonAnchor className={className} href={getCalendlyUrl(intent, "button", page)} variant={variant}>
      {children}
    </ButtonAnchor>
  );
}
