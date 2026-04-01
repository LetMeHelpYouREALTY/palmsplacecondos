import { siteContact } from "@/lib/site-contact";

export default function HomePage() {
  return (
    <main className="mx-auto flex max-w-3xl flex-col gap-6 px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
        Palms Place Condos
      </h1>
      <p className="text-lg text-foreground/90">
        Explore high-rise living at Palms Place — walkable to the Las Vegas Strip, dining, and
        entertainment. When you are ready to tour or compare floor plans, {siteContact.agentName}{" "}
        represents buyers and sellers across {siteContact.primaryServiceArea}.
      </p>
      <p className="text-foreground/80">
        This site is under active development. Listing search, neighborhood detail, and contact
        tools will roll out in upcoming releases.
      </p>
    </main>
  );
}
