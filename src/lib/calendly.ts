/**
 * Calendly booking URL — single source for every “schedule / tour / consult” CTA.
 * Override via NEXT_PUBLIC_CALENDLY_URL on Vercel when the event link changes.
 */
const DEFAULT_CALENDLY_URL = "https://calendly.com/drjanduffy/30-minute";

export function getCalendlyUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_CALENDLY_URL?.trim();
  return fromEnv || DEFAULT_CALENDLY_URL;
}
