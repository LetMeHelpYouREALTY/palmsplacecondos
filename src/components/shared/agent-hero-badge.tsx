import Image from "next/image";
import { siteContact } from "@/lib/site-contact";
import { cn } from "@/lib/utils";

function telHref(phone: string): string {
  return `tel:${phone.replace(/\D/g, "")}`;
}

/**
 * Circular gold-framed headshot + name/phone strip for page heroes.
 * Uses the same avatar as the favicon and YouTube/GBP profiles for entity consistency.
 */
export function AgentHeroBadge({ className }: { className?: string }) {
  const phone = siteContact.phone;
  return (
    <div className={cn("flex items-center gap-4", className)}>
      <Image
        alt={`${siteContact.agentName} — Palms Place listing specialist, Las Vegas`}
        className="h-14 w-14 shrink-0 rounded-full ring-2 ring-palms-gold/80 md:h-16 md:w-16"
        height={64}
        src="/images/dr-jan-duffy.png"
        width={64}
      />
      <div className="text-sm leading-snug">
        <p className="font-semibold text-palms-cream">{siteContact.agentName}</p>
        <p className="text-palms-cream/70">Palms Place Listing Specialist &amp; Team Leader</p>
        {phone ? (
          <a
            className="font-medium text-palms-gold underline-offset-4 hover:underline"
            href={telHref(phone)}
          >
            {phone}
          </a>
        ) : null}
      </div>
    </div>
  );
}
