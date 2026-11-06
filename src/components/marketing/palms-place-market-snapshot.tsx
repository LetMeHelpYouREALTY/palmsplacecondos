import Link from "next/link";
import { palmsPlaceMarketSnapshot as data } from "@/lib/content/palms-place-market-snapshot";

/** Dated Palms Place closed-sales table — MLS figures with source and date shown. */
export function PalmsPlaceMarketSnapshot() {
  return (
    <section className="mt-12" aria-labelledby="palms-place-market-heading">
      <h2
        className="font-display text-2xl font-semibold text-palms-cream"
        id="palms-place-market-heading"
      >
        What have Palms Place condos sold for?
      </h2>
      <p className="mt-4 leading-relaxed text-palms-cream/85">
        Closed sales at {data.building}, {data.periodLabel}. Source: {data.source}, as of{" "}
        <time dateTime={data.asOf}>{data.asOfLabel}</time>.
      </p>
      <div className="mt-6 overflow-x-auto rounded-xl border border-palms-gold/20">
        <table className="w-full min-w-[20rem] border-collapse text-left text-sm text-palms-cream/85">
          <caption className="sr-only">
            Palms Place closed sales, {data.periodLabel}. Source: {data.source}.
          </caption>
          <tbody>
            {data.summary.map((row) => (
              <tr key={row.label} className="odd:bg-palms-charcoal-muted/40">
                <th
                  className="border-t border-palms-gold/10 px-4 py-3 font-semibold text-palms-cream"
                  scope="row"
                >
                  {row.label}
                </th>
                <td className="border-t border-palms-gold/10 px-4 py-3">{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="mt-8 font-display text-lg font-semibold text-palms-cream">
        {data.oneBedroomPlan.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-palms-cream/75">{data.oneBedroomPlan.note}</p>
      <div className="mt-4 overflow-x-auto rounded-xl border border-palms-gold/20">
        <table className="w-full min-w-[20rem] border-collapse text-left text-sm text-palms-cream/85">
          <caption className="sr-only">{data.oneBedroomPlan.title}</caption>
          <thead className="bg-palms-charcoal-elevated">
            <tr>
              <th className="border-b border-palms-gold/20 px-4 py-3 font-semibold text-palms-cream" scope="col">
                Closed
              </th>
              <th className="border-b border-palms-gold/20 px-4 py-3 font-semibold text-palms-cream" scope="col">
                Sold price
              </th>
            </tr>
          </thead>
          <tbody>
            {data.oneBedroomPlan.sales.map((sale, i) => (
              <tr key={`${sale.closed}-${i}`} className="odd:bg-palms-charcoal-muted/40">
                <td className="border-t border-palms-gold/10 px-4 py-3">{sale.closed}</td>
                <td className="border-t border-palms-gold/10 px-4 py-3">{sale.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-palms-cream/75">
        Most Palms Place buyers pay cash or use a portfolio lender. See{" "}
        <Link
          className="text-palms-gold underline-offset-4 hover:underline"
          href="/guide/palms-place-mortgage-and-financing"
        >
          can I get a mortgage at Palms Place?
        </Link>
      </p>
      <p className="mt-4 max-w-3xl text-xs leading-relaxed text-palms-cream/55">{data.disclaimer}</p>
    </section>
  );
}
