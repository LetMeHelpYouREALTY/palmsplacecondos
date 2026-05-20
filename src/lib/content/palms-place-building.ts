/**
 * Palms Place tower facts cited on /palms-place and /faq — building address (not the team office).
 * Office NAP lives in site-contact.ts and must match GBP.
 */
export const palmsPlaceTower = {
  name: "Palms Place",
  streetAddress: "4381 W Flamingo Road",
  addressLocality: "Las Vegas",
  addressRegion: "NV",
  postalCode: "89103",
  addressCountry: "US",
  floors: 47,
  openedYear: 2008,
} as const;

export function formatPalmsPlaceTowerAddressLine(): string {
  const t = palmsPlaceTower;
  return `${t.streetAddress}, ${t.addressLocality}, ${t.addressRegion} ${t.postalCode}`;
}
