# Agent and contributor instructions (palmsplacecondos)

This file is the **repository-specific** companion to the shared Cursor rules in [`.cursor/rules/`](.cursor/rules/). Follow both when editing this project.

## Business and branding

- **Agent:** Dr. **Jan** Duffy (never “Janet” or other variants).
- **License:** Nevada real estate license **S.0197614.LLC** (verify in copy and schema when the app layer exists).
- **Brokerage:** Berkshire Hathaway HomeServices Nevada Properties (use exact approved wording on marketing pages).

## Stack (when the app is scaffolded)

- Prefer **Next.js App Router** (15+), **TypeScript**, **Tailwind**, **server components by default**.
- Match patterns in `.cursor/rules/` for metadata, sitemap, robots, JSON-LD, layouts, and middleware.

## RealScout

- Load the RealScout script **once** in the root layout ([`src/app/layout.tsx`](src/app/layout.tsx)).
- Widget markup: [`src/components/seo/realscout-office-listings-embed.tsx`](src/components/seo/realscout-office-listings-embed.tsx) uses `dangerouslySetInnerHTML`; do not duplicate script tags.
- **CSP:** when you add `Content-Security-Policy`, allow **`em.realscout.com`** and **`www.realscout.com`** in both **`script-src`** and **`connect-src`** (see [`next.config.ts`](next.config.ts) comment). Test embeds after any CSP change.
- **MLS:** visible disclaimer must accompany listing widgets (see embed component). Do not remove without broker/MLS compliance review.

## IDX / MLS

- **Do not** change `components/idx/*` without explicit approval.
- Always show MLS disclaimer and listing attribution on IDX-related UI.

## SEO and local

- **NAP** (name, address, phone) in visible copy and **LocalBusiness** JSON-LD must match the **Google Business Profile** when those pages exist.
- No placeholder phone numbers, fake review counts, or wrong metro/area codes.

## Hosting

- **Vercel** deployment: follow project scripts; prefer **`vercel build`** for production build checks when tooling is present.
- **Cloudflare:** use **DNS only** (gray cloud); do not orange-cloud proxy in front of Vercel (avoids SSL conflicts).

## Security

- No live API keys or secrets in git; use `.env.example` and platform env vars.
- See `security-env.mdc` in `.cursor/rules/` when touching middleware, `next.config`, or `app/**/route.ts`.

## License

- Proprietary; see [LICENSE](LICENSE).
