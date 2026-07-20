/**
 * Visible verification footer for AEO/GEO — no fabricated stats; points to real checks.
 */
export function SourcesVerification() {
  return (
    <aside
      aria-label="Sources and verification"
      className="mt-10 rounded-xl border border-palms-cream/10 bg-palms-charcoal-elevated/60 p-5 text-sm leading-relaxed text-palms-cream/70"
    >
      <p className="font-semibold text-palms-cream/90">Sources &amp; verification</p>
      <p className="mt-2">
        Building address and tower context come from public property records and team field work.
        Listing prices, HOA dues, assessments, and rental rules must be verified in the current MLS
        listing, resale certificate, and association documents for your unit—not from this page alone.
        Not legal or tax advice.
      </p>
    </aside>
  );
}
