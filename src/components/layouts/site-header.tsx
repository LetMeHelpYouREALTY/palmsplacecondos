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
    "rounded-md px-2 py-1.5 text-sm font-medium text-foreground/90 transition-colors hover:bg-black/5 hover:text-foreground dark:hover:bg-white/10",
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
    <header className="sticky top-0 z-50 border-b border-black/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 dark:border-white/15">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3">
        <div className="flex min-w-0 flex-1 items-center gap-3">
          <Link
            className="truncate text-base font-semibold tracking-tight text-foreground hover:opacity-90"
            href="/"
          >
            Palms Place Condos
          </Link>
        </div>

        <button
          aria-controls="site-nav-panel"
          aria-expanded={open}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          className="inline-flex items-center justify-center rounded-md border border-black/15 px-3 py-2 text-sm font-medium text-foreground md:hidden dark:border-white/20"
          onClick={() => setOpen((v) => !v)}
          type="button"
        >
          Menu
        </button>
      </div>

      <div
        className={cn(
          "border-t border-black/10 dark:border-white/15 md:block",
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

          <nav aria-label="Main" className="flex flex-wrap gap-x-1 gap-y-1 border-t border-black/10 pt-3 dark:border-white/15">
            {primaryNav.map((item, index) => (
              <NavLink
                item={item}
                key={`primary-${index}-${item.href}`}
                onNavigate={() => setOpen(false)}
              />
            ))}
          </nav>

          <div className="border-t border-black/10 pt-3 dark:border-white/15">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-foreground/60">
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
