import type { FaqItem } from "@/lib/schema";
import { formatPalmsPlaceTowerAddressLine } from "@/lib/content/palms-place-building";

const tower = formatPalmsPlaceTowerAddressLine();

/** Visible FAQ on `/amenities` — mirrors FAQPage JSON-LD. */
export const nearbyAmenitiesPageFaq: FaqItem[] = [
  {
    question: "What grocery stores are near Palms Place?",
    answer:
      "Whole Foods Market on Las Vegas Boulevard south of the Strip corridor and Smith's Food and Drug on Grand Canyon Drive are common runs west of the tower; confirm hours and routes on your own schedule before you buy.",
  },
  {
    question: "How far is Palms Place from the Las Vegas Strip?",
    answer:
      "Palms Place sits on West Flamingo Road west of Las Vegas Boulevard—typically a short drive to resort corridors rather than a central-Strip address. Drive time varies by time of day; tour at the hours you expect to come and go.",
  },
  {
    question: "Are there hospitals near Palms Place?",
    answer:
      "Spring Valley Hospital Medical Center on South Rainbow Boulevard is one major acute-care hospital southwest of the tower. For emergencies, call 911; verify in-network providers with your insurer.",
  },
  {
    question: "Where do Palms Place owners park?",
    answer:
      "Residential parking is governed by HOA rules and unit assignments—confirm deeded spaces, guest parking, and resort garage access in your resale certificate, not from a map pin alone.",
  },
  {
    question: "What dining is walkable from Palms Place?",
    answer:
      "Palms Casino Resort and Gold Coast Hotel & Casino on West Flamingo Road are the closest resort dining clusters; many owners still drive to Spring Mountain or Strip restaurants. Walk what you would actually use at night.",
  },
  {
    question: "How long does it take to reach Harry Reid International Airport from Palms Place?",
    answer:
      "Harry Reid International Airport is roughly a 10–20 minute drive from 4381 W Flamingo Road in typical off-peak traffic—longer during conventions or weekend peaks. Times are approximate; leave buffer for TSA.",
  },
  {
    question: "Who helps buyers compare Palms Place to other Las Vegas high-rises?",
    answer:
      `Dr. Jan Duffy is the Palms Place listing specialist at the tower address (${tower}). She tours buyers in this building and can compare HOA carry with other Strip-adjacent towers on the same weekend.`,
  },
];
