# v0.dev prompt (Palms Place Condos)

Copy into [v0.dev](https://v0.dev) when you want UI iterations. Stack: **Next.js 15 App Router**, **Tailwind CSS v4**, **TypeScript**, dark luxury palette.

## Site context

- Brand: **Palms Place Condos**, Las Vegas high-rise real estate.
- Palette: charcoal background `#0d0d0d`, cream text `#f5f0e6`, gold accent `#c5a35a` (dividers, CTAs).
- Typography: **Cormorant Garamond** (display/headings), **Geist** (body) — already wired in `layout.tsx`.
- Header: site title only. **Footer** holds full navigation (Connect, YouTube, Homes, Condos, etc.).
- **RealScout** listings embed lives above footer; do not duplicate script tags; MLS disclaimer required near widgets.

## Prompt template

```
Design a luxury real estate marketing section for Next.js + Tailwind v4.

Visual: dark charcoal background, cream body text, gold (#c5a35a) accents only for rules, eyebrow labels, and primary CTAs. Display serif for H2/H3, sans for body. Generous whitespace, max-width ~80rem container, px-6.

Include: eyebrow label (uppercase tracking-widest text-gold), H2, supporting paragraph, and two CTAs (primary filled gold button, secondary outline gold border). Respect prefers-reduced-motion. WCAG focus rings gold.

Do not use Palms Casino logos. No fake review counts. Output as a single React component using Tailwind classes only; no external images unless placeholder gradient divs.
```

Paste v0 output into `src/components/sections/` and normalize imports to `@/` aliases.
