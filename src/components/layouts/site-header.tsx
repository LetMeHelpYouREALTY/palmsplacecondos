import Link from "next/link";

/**
 * Minimal site chrome: branding only. Full site links live in the footer ([`SiteFooter`](site-footer.tsx)).
 */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-palms-gold/25 bg-palms-charcoal/95 backdrop-blur supports-[backdrop-filter]:bg-palms-charcoal/85">
      <div className="mx-auto flex max-w-6xl items-center px-4 py-3">
        <Link
          className="font-display truncate text-lg font-semibold tracking-[0.02em] text-palms-cream hover:text-palms-gold"
          href="/"
        >
          Palms Place Condos
        </Link>
      </div>
    </header>
  );
}
