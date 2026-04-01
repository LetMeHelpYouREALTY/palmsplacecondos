"use client";

import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { popularNav, primaryNav, utilityNav } from "@/lib/navigation";

function NavLink({
  item,
  className,
  onNavigate,
}: {
  item: { label: string; href: string; external?: boolean };
  className?: string;
  onNavigate?: () => void;
}) {
  const base = cn(
    "rounded-md px-2 py-1.5 text-sm font-medium text-palms-cream/90 transition-colors hover:bg-palms-gold/10 hover:text-palms-gold",
    className,
  );

  if (item.external) {
    return (
      <a
        className={base}
        href={item.href}
        onClick={onNavigate}
        rel="noopener noreferrer"
        target="_blank"
      >
        {item.label}
      </a>
    );
  }

  return (
    <Link className={base} href={item.href} onClick={onNavigate}>
      {item.label}
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-palms-gold/25 bg-palms-charcoal/95 backdrop-blur supports-[backdrop-filter]:bg-palms-charcoal/85">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3">
        <div className="flex min-w-0 flex-1 items-center gap-3">
          <Link
            className="font-display truncate text-lg font-semibold tracking-[0.02em] text-palms-cream hover:text-palms-gold"
            href="/"
          >
            Palms Place Condos
          </Link>
        </div>

        <button
          aria-controls="site-nav-panel"
          aria-expanded={open}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          className="inline-flex items-center justify-center rounded-md border border-palms-gold/35 px-3 py-2 text-sm font-medium text-palms-cream hover:border-palms-gold hover:bg-palms-gold/10 md:hidden"
          onClick={() => setOpen((v) => !v)}
          type="button"
        >
          Menu
        </button>
      </div>

      <div
        className={cn(
          "border-t border-palms-gold/20 md:block",
          open ? "block" : "hidden md:block",
        )}
        id="site-nav-panel"
      >
        <div className="mx-auto max-w-6xl space-y-3 px-4 py-3">
          <nav aria-label="Utility" className="flex flex-wrap gap-x-1 gap-y-1">
            {utilityNav.map((item, index) => (
              <NavLink
                item={item}
                key={`utility-${index}-${item.href}`}
                onNavigate={() => setOpen(false)}
              />
            ))}
          </nav>

          <nav
            aria-label="Main"
            className="flex flex-wrap gap-x-1 gap-y-1 border-t border-palms-gold/20 pt-3"
          >
            {primaryNav.map((item, index) => (
              <NavLink
                item={item}
                key={`primary-${index}-${item.href}`}
                onNavigate={() => setOpen(false)}
              />
            ))}
          </nav>

          <div className="border-t border-palms-gold/20 pt-3">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-palms-gold-muted">
              Popular searches
            </p>
            <nav aria-label="Popular searches" className="flex flex-wrap gap-x-1 gap-y-1">
              {popularNav.map((item, index) => (
                <NavLink
                  className="text-sm font-normal"
                  item={item}
                  key={`popular-${index}-${item.href}`}
                  onNavigate={() => setOpen(false)}
                />
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
