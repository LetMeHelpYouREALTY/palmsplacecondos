import Link from "next/link";
import { headerNav } from "@/lib/navigation";
import { getRealScoutSharedSearchUrl } from "@/lib/realscout";
import { siteContact } from "@/lib/site-contact";
import { cn } from "@/lib/utils";

function telHref(phone: string): string {
  return `tel:${phone.replace(/\D/g, "")}`;
}

/**
 * Sticky header with primary nav + conversion CTAs (call, on-site listings hub, MLS search).
 * Full site map remains in the footer.
 */
export function SiteHeader() {
  const phone = siteContact.phone;
  const sharedSearchUrl = getRealScoutSharedSearchUrl();

  return (
    <header className="sticky top-0 z-50 border-b border-palms-gold/20 bg-palms-charcoal/95 shadow-[0_8px_40px_rgba(0,0,0,0.45)] backdrop-blur supports-[backdrop-filter]:bg-palms-charcoal/85">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <div className="flex min-w-0 flex-1 items-center gap-6 lg:gap-10">
          <Link
            className="font-display truncate text-lg font-semibold tracking-[0.02em] text-palms-cream hover:text-palms-gold"
            href="/"
          >
            Palms Place Condos
          </Link>
          <nav aria-label="Primary" className="hidden items-center gap-5 md:flex">
            {headerNav.map((item) => (
              <Link
                className="whitespace-nowrap text-sm font-medium text-palms-cream/90 transition-colors hover:text-palms-gold"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          {phone ? (
            <a
              className={cn(
                "inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg border border-palms-gold/35 px-3 py-2 text-sm font-semibold text-palms-cream transition-colors hover:border-palms-gold hover:bg-palms-gold/10",
              )}
              href={telHref(phone)}
            >
              <span className="sm:hidden">Call</span>
              <span className="hidden sm:inline">{phone}</span>
            </a>
          ) : null}
          <Link
            className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-palms-gold px-3 py-2 text-sm font-semibold text-palms-charcoal shadow-lg shadow-black/25 transition hover:bg-palms-gold-hover hover:shadow-xl sm:px-4"
            href="/search"
          >
            Browse listings
          </Link>
          <a
            className="hidden min-h-[44px] items-center justify-center rounded-lg border border-palms-gold/45 px-3 py-2 text-sm font-semibold text-palms-cream backdrop-blur-sm hover:border-palms-gold hover:bg-palms-gold/10 lg:inline-flex"
            href={sharedSearchUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            MLS search
          </a>
        </div>
      </div>
    </header>
  );
}
