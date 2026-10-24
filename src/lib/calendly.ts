/**
 * Calendly booking URLs — single source for every “schedule / tour / consult” CTA.
 * Events are the active ones on calendly.com/drjanduffy; pick by page intent.
 * utm_source = bare domain so the Calendly → FUB worker can attribute the booking.
 */
export const CALENDLY_EVENTS = {
  showing: "https://calendly.com/drjanduffy/showing",
  buyer: "https://calendly.com/drjanduffy/buyer-consultation-30-min",
  listing: "https://calendly.com/drjanduffy/listing-consultation",
  strategy: "https://calendly.com/drjanduffy/15min",
} as const;

export type CalendlyIntent = keyof typeof CALENDLY_EVENTS;

export function getCalendlyUrl(
  intent: CalendlyIntent = "showing",
  medium = "button",
  campaign = "site",
): string {
  const params = new URLSearchParams({
    hide_gdpr_banner: "1",
    utm_source: "palmsplacecondos.com",
    utm_medium: medium,
    utm_campaign: campaign,
  });
  return `${CALENDLY_EVENTS[intent]}?${params.toString()}`;
}

/** Map a pathname to the booking intent and a utm_campaign value. */
export function calendlyForPath(pathname: string): { intent: CalendlyIntent; campaign: string } {
  const path = pathname.replace(/\/$/, "") || "/";
  const campaign = path === "/" ? "home" : path.slice(1);
  if (/^\/(sell|sellers)(\/|$)|^\/guide\/selling/.test(path)) return { intent: "listing", campaign };
  if (/^\/(buyers|search|homes)(\/|$)|^\/guide\/buying/.test(path)) return { intent: "buyer", campaign };
  if (/^\/(connect|contact)(\/|$)/.test(path)) return { intent: "strategy", campaign };
  return { intent: "showing", campaign };
}
