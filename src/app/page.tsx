import { HeroPalmsPlace } from "@/components/sections/hero-palms-place";
import { PalmsBridgeSection } from "@/components/sections/palms-bridge-section";
import { StaySection } from "@/components/sections/stay-section";
import { UnwindSection } from "@/components/sections/unwind-section";

export default function HomePage() {
  return (
    <>
      <HeroPalmsPlace />
      <StaySection />
      <UnwindSection />
      <PalmsBridgeSection />
    </>
  );
}
