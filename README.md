# Palms Place Condos

Real estate marketing site for **Palms Place** (Las Vegas). This repository is set up for local development and [GitHub Codespaces](https://github.com/features/codespaces).

## Prerequisites

- **Node.js** 20+ (see `engines` in [`package.json`](package.json))
- **npm** (lockfile: [`package-lock.json`](package-lock.json))
- **Git**
- A GitHub account with access to this repository

## Quick start (local)

```bash
git clone git@github.com:DrJanDuffy/palmsplacecondos.git
cd palmsplacecondos
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Production build check (aligned with Vercel): `npm run build` or `vercel build` from the project root.

Copy [`.env.example`](.env.example) to `.env.local` and set `NEXT_PUBLIC_SITE_URL` to your canonical HTTPS origin when deploying.

## Git remote (existing repo)

If this folder was cloned without `origin`, or you are pushing from a machine that has not added the remote:

```bash
git remote add origin git@github.com:DrJanDuffy/palmsplacecondos.git
git branch -M main
git push -u origin main
```

## GitHub Codespaces

Open the repo on GitHub and choose **Code → Codespaces → Create codespace on main**. The included dev container installs Node and useful editor defaults so the environment is consistent for collaborators.

To adjust tooling (Node version, extensions, post-create commands), edit [`.devcontainer/devcontainer.json`](.devcontainer/devcontainer.json).

**Validate the dev container (after the codespace opens):**

1. In the integrated terminal, run `node --version` — expect **v20.x** (matches the dev container image).
2. When you run a dev server on port **3000**, GitHub should offer to forward the port; accept it to open the app in the browser.
3. If the container fails to build, check the **Codespaces** log in the Command Palette (`Codespaces: View Creation Log`).

## Collaborators

Repository owners can add collaborators under **Settings → Collaborators** on GitHub and invite people by username or email.

Quick link (this repository): [github.com/DrJanDuffy/palmsplacecondos/settings/access](https://github.com/DrJanDuffy/palmsplacecondos/settings/access). Organization-owned repos may use **Settings → Collaborators and teams** instead.

## Cursor rules and AGENTS.md

Shared **Cursor** rule files live in [`.cursor/rules/`](.cursor/rules/) (copied from the team standard so Codespaces and collaborators get the same SEO, Next.js, and real-estate conventions).

Repository-specific instructions for AI assistants and contributors: **[AGENTS.md](AGENTS.md)** (Dr. Jan Duffy branding, RealScout/IDX boundaries, Vercel/Cloudflare, NAP/schema).

## Security

- Do not commit secrets, API keys, or `.env` files with live credentials. Use `.env.example` for documented placeholders and platform environment variables for production.
- Keep dependencies updated and review pull requests before merging.

## License

See [LICENSE](LICENSE). All rights reserved unless you have a separate written agreement with the copyright holder.
