import Link from "next/link";
import { popularNav, primaryNav, utilityNav } from "@/lib/navigation";
import { siteContact } from "@/lib/site-contact";
import { cn } from "@/lib/utils";

function FooterLink({
  item,
  className,
}: {
  item: { label: string; href: string; external?: boolean };
  className?: string;
}) {
  const base = cn(
    "rounded-sm text-palms-cream/85 transition-colors hover:text-palms-gold",
    className,
  );

  if (item.external) {
    return (
      <a className={base} href={item.href} rel="noopener noreferrer" target="_blank">
        {item.label}
      </a>
    );
  }

  return (
    <Link className={base} href={item.href}>
      {item.label}
    </Link>
  );
}

export function SiteFooter() {
  return (
    <footer
      className="border-t border-palms-gold/25 bg-palms-charcoal-elevated px-6 py-12 text-sm text-palms-cream/85"
      id="site-footer-nav"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="font-display text-lg font-semibold tracking-tight text-palms-cream">
              Palms Place Condos
            </p>
            <nav aria-label="Connect and browse" className="mt-4 flex flex-col gap-2">
              {utilityNav.map((item, index) => (
                <FooterLink item={item} key={`footer-util-${index}-${item.href}`} />
              ))}
              {primaryNav.map((item, index) => (
                <FooterLink item={item} key={`footer-primary-${index}-${item.href}`} />
              ))}
            </nav>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-palms-gold-muted">
              Popular searches
            </p>
            <nav aria-label="Popular searches" className="mt-4 flex flex-col gap-2">
              {popularNav.map((item, index) => (
                <FooterLink item={item} key={`footer-pop-${index}-${item.href}`} />
              ))}
            </nav>
          </div>

          <div className="lg:pl-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-palms-gold-muted">
              Agent
            </p>
            <div className="mt-4 space-y-2 text-palms-cream/90">
              <p className="font-medium text-palms-cream">{siteContact.agentName}</p>
              <p>Nevada license {siteContact.license}</p>
              <p>{siteContact.brokerage}</p>
              <p className="text-palms-cream/70">
                Phone, office address, and hours will match Google Business Profile on this site once
                finalized for launch.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
