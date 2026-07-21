import type { ComponentPropsWithoutRef } from "react";
import { ButtonAnchor } from "@/components/shared/button-link";
import { getCalendlyUrl } from "@/lib/calendly";
import { cn } from "@/lib/utils";

type CalendlyLinkProps = Omit<ComponentPropsWithoutRef<"a">, "href"> & {
  children: React.ReactNode;
};

/** Inline text link to Calendly (schedule / tour / consult CTAs). */
export function CalendlyLink({ children, className, ...rest }: CalendlyLinkProps) {
  return (
    <a
      className={cn(
        "font-medium text-palms-gold underline-offset-4 hover:underline",
        className,
      )}
      href={getCalendlyUrl()}
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
};

/** Button-styled Calendly CTA (same chrome as ButtonLink / ButtonAnchor). */
export function CalendlyButton({
  children,
  variant = "primary",
  className,
}: CalendlyButtonProps) {
  return (
    <ButtonAnchor className={className} href={getCalendlyUrl()} variant={variant}>
      {children}
    </ButtonAnchor>
  );
}
