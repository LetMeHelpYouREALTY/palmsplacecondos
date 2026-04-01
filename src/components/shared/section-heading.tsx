import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionEyebrowProps = {
  children: ReactNode;
  className?: string;
};

/** Uppercase gold label + thin accent rule (luxury editorial pattern). */
export function SectionEyebrow({ children, className }: SectionEyebrowProps) {
  return (
    <div className={cn("flex flex-col gap-3", className)}>
      <p className="font-display text-sm font-semibold uppercase tracking-[0.35em] text-palms-gold">
        {children}
      </p>
      <span
        aria-hidden
        className="h-px w-14 bg-gradient-to-r from-palms-gold via-palms-gold/60 to-transparent"
      />
    </div>
  );
}
