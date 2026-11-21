# Andrew H. Kowal — Portfolio Site

Source for [andrew-kowal.github.io](https://andrew-kowal.github.io/), built with [Astro](https://astro.build). Deploys automatically to GitHub Pages on every push to `main`.

See `CLAUDE.md` for the full build brief and `TODO.md` for everything still outstanding (photos, resume PDF, confidential-content sanitization, etc.).

## Preview locally

```sh
npm install
npm run dev
```

Opens at `http://localhost:4321`. Changes to any file hot-reload in the browser.

To check what the production build actually looks like (slightly different from dev — real optimization, no dev-only warnings):

```sh
npm run build
npm run preview
```

## Add a new project

Projects live in `src/content/projects/` as one Markdown file per project. To add one:

1. Copy an existing file, e.g. `custom-drone.md`, to a new filename (the filename becomes the URL slug — keep it lowercase with hyphens).
2. Edit the frontmatter at the top:
   ```yaml
   ---
   title: Your Project Name
   summary: One sentence for the card and page description.
   tags: [Embedded, PCB, Automation, Robotics, Manufacturing, Aerospace] # pick what applies
   tools: [Specific, Tools, Or, Parts, Used]
   status: complete # or in-progress
   order: 8 # controls position in the grid — higher = later
   draft: false # true hides it from the site entirely (grid + routing)
   role: Your role on this project
   ---
   ```
3. Write the body using the same section headings as the other files (`## Overview`, `## The problem`, `## What I built`, `## Technical details`, `## Results`, `## What I'd do differently / Next steps`) — the layout doesn't require all of them, but staying consistent looks better.
4. If you want a block diagram, copy the `<div class="diagram-wrap"><svg>...</svg></div>` pattern from `data-umbilical-bridge-pcb.md` and edit the boxes/arrows/text — it's plain inline SVG, no special tooling needed.
5. Run `npm run dev` and check it before publishing.

**To hide a project without deleting it** (like Project Vantage until it's finished): set `draft: true` in its frontmatter. It disappears from the grid and its URL 404s. Flip it back to `draft: false` when ready.

## Add or update photos

Drop optimized images into:
- `src/assets/profile/` — headshot
- `src/assets/projects/<project-slug>/` — one folder per project

Then reference them in the relevant `.astro` component or project `.md` file using Astro's `<Image />` component (not a plain `<img>` tag) so they get automatically optimized and resized — ask Claude to wire a new photo in if you're not sure how.

**Always include real `alt` text** describing what's in the photo — this matters for accessibility and for recruiters using a screen reader.

## Update the resume

Replace `public/resume.pdf` with your current resume (same filename). The "Resume (PDF)" button already points at `/resume.pdf` — no other changes needed.

## Publish changes

Every push to `main` triggers an automatic deploy (see `.github/workflows/deploy.yml`). To publish:

```sh
git add .
git commit -m "describe what changed"
git push
```

- `git add .` — stages your changes (everything you edited or added)
- `git commit -m "..."` — saves a snapshot with a short description
- `git push` — uploads it to GitHub, which kicks off the deploy

Check progress at **github.com/Andrew-Kowal/Andrew-Kowal.github.io/actions** — it usually takes under a minute. The live site updates automatically once the run finishes.

## Add a custom domain later

1. Buy a domain (e.g. from Namecheap, Cloudflare, Google Domains).
2. At your DNS provider, add these records (for an apex domain like `andrewkowal.com`):
   - Four `A` records pointing to GitHub Pages' IPs: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - (For a `www` subdomain instead, add a `CNAME` record pointing to `andrew-kowal.github.io`)
3. In the GitHub repo: **Settings → Pages → Custom domain**, enter your domain, save, and check "Enforce HTTPS" once it's available (can take a few minutes to an hour).
4. GitHub will add a `CNAME` file to the repo automatically — don't delete it.

No code changes needed; the site itself doesn't hardcode its own URL anywhere that would break.

## Project structure

```
src/
├── components/        # Reusable page sections (Hero, Projects, Skills, etc.)
├── content/projects/   # One Markdown file per project — this is what you'll edit most
├── layouts/            # Page shells (BaseLayout, ProjectLayout)
├── pages/              # Routes — index.astro (home), projects/[...slug].astro, 404.astro
└── styles/global.css   # Theme (colors, fonts, spacing) — one file, CSS custom properties
public/                 # Static files served as-is: favicon, resume.pdf, robots.txt equivalent
```
