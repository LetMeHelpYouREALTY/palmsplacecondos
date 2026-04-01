import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

const base =
  "inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-200 motion-reduce:transition-none";

const variants = {
  primary:
    "bg-palms-gold text-palms-charcoal shadow-lg shadow-black/25 hover:bg-palms-gold-hover hover:shadow-xl hover:shadow-black/30",
  secondary:
    "border border-palms-gold/45 bg-palms-charcoal/40 text-palms-cream backdrop-blur-sm hover:border-palms-gold hover:bg-palms-gold/10",
} as const;

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
}: ButtonLinkProps) {
  return (
    <Link className={cn(base, variants[variant], className)} href={href}>
      {children}
    </Link>
  );
}

type ButtonAnchorProps = ComponentPropsWithoutRef<"a"> & {
  variant?: "primary" | "secondary";
};

/** External CTA with the same chrome as ButtonLink (e.g. resort links). */
export function ButtonAnchor({
  children,
  variant = "primary",
  className,
  ...rest
}: ButtonAnchorProps) {
  return (
    <a className={cn(base, variants[variant], className)} rel="noopener noreferrer" target="_blank" {...rest}>
      {children}
    </a>
  );
}
