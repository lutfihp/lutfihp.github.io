# lutfihp.github.io — Portfolio Site

Personal portfolio for **Lutfi Prasetya** (`lutfihp`), deployed as a static Next.js 15 site to GitHub Pages.

## Stack

- **Next.js 15** App Router, TypeScript, `output: 'export'` (static, no server runtime)
- **Tailwind v4** — tokens defined in `app/globals.css` via `@theme {}`, no `tailwind.config.ts`
- **IBM Plex Sans + Mono** via `next/font/google`
- **GitHub Actions** → deploys `out/` to `gh-pages` branch on push to `main`
- Live at: `https://lutfihp.github.io`

## Project Structure

```
app/
  layout.tsx               fonts, metadata, viewport, no-flash theme script
  page.tsx                 landing page
  globals.css              Tailwind v4 tokens + light/dark theme vars + custom classes
  globals.d.ts             window.__toggleTheme type declaration
  icon.svg                 SVG favicon (green "L" mark on dark tile)
  apple-icon.png           180×180 iOS home-screen icon
  projects/[slug]/page.tsx project detail (generateStaticParams)
components/
  Nav.tsx                  landing + detail variants, includes ThemeToggle
  ThemeToggle.tsx          'use client' pill switch — moon/sun, MutationObserver sync
  Footer.tsx
  SectionHeader.tsx        kicker + h2 + optional descriptor
  ProjectImage.tsx         <Image> if src set (object-contain, bg-surface letterbox), else .ph placeholder
  Reveal.tsx               'use client' scroll-in IntersectionObserver
  Hero.tsx                 terminal card, dotted grid, CTAs
  ProjectsSection.tsx      4-card grid
  WorkSection.tsx          timeline
  SkillsSection.tsx        4-cell matrix
  ContactSection.tsx
  Carousel.tsx             'use client' with keyboard/touch/thumbnail nav
lib/
  data.ts                  ALL content lives here — edit this to update the site
__tests__/
  Carousel.test.tsx        6 passing tests
  ThemeToggle.test.tsx     4 passing tests
.github/workflows/
  deploy.yml               CI deploy to gh-pages
```

## Key Design Decisions

- **Design tokens** in `app/globals.css` under `@theme {}` (Tailwind v4 pattern)
- **Colour tokens (UPDATE-1 applied):** `surface #191c1f`, `surface2 #23272b`, `line rgba(255,255,255,0.11)`, `line-strong rgba(255,255,255,0.18)`
- **Light/dark mode (UPDATE-2 applied):** CSS variable overrides on `:root[data-theme="light"]` drive all colour tokens. Dark is default. A no-flash inline `<script>` in `<head>` sets `data-theme` before first paint; `ThemeToggle` client component calls `window.__toggleTheme()`. Choice persists in `localStorage`, falls back to `prefers-color-scheme`.
- **Token rule:** never use literal `white` or `black` with opacity modifiers — always go through a theme token (`ring-line`, `bg-muted/40`, `border-line-strong`, etc.)
- **Favicon (UPDATE-3 applied):** `app/icon.svg` + `app/apple-icon.png` via App Router metadata icons convention (Next.js auto-generates `<link>` tags). `themeColor` in `viewport` export.
- **Hero "about" card:** solid `bg-surface` fill, `shadow-black/50`, `ring-1 ring-line` edge highlight — no backdrop blur
- **Scroll reveal** uses `.reveal` / `.reveal.in` CSS classes toggled by `Reveal.tsx`
- **Images (UPDATE-4 applied):** `ProjectImage` uses `object-contain` inside an `absolute inset-0 bg-surface` wrapper — full image visible, letterboxed with surface colour. Renders `.ph` striped placeholder when `src` is `null`.
- **Project links (UPDATE-5 applied):** `Project` has `links: ProjectLink[]` (replaces old `repos: Repo[]`). Each link: `{ label, url, type: 'github' | 'live' | 'youtube' | 'other' }`. Detail page renders a "Links" section with a type badge (`github ↗`, `live ↗`, etc.).
- **Status row** ("Open to new opportunities") is intentionally omitted from Hero
- **No basePath** needed — this is a user page (`lutfihp.github.io`), not a project subpath

## Common Commands

```bash
npm run dev       # dev server (Turbopack, port 3000)
npm run build     # static export → out/
npm test          # jest — 10 tests (Carousel ×6, ThemeToggle ×4)
npx tsc --noEmit  # type check
```

## Deploy

```bash
git push origin main   # triggers GitHub Actions → deploys to gh-pages
```

GitHub Pages is configured: Settings → Pages → Source: **gh-pages branch / root**.

## Content — How to Update

All content is in **`lib/data.ts`**. No other files need editing for content changes.

### Replace placeholder projects

Each project entry:
```ts
{
  slug: 'your-slug',          // becomes /projects/your-slug
  title: 'Project Name',
  tagline: 'One-liner',
  year: '2024',
  image: null,                // set to image URL to show real image
  stack: ['Tech', 'Stack'],
  description: 'Full description.',
  links: [                    // any mix of link types; omit array items you don't need
    { label: 'repo-name',  url: 'https://github.com/lutfihp/repo', type: 'github' },
    { label: 'Live Demo',  url: 'https://example.com',             type: 'live' },
    { label: 'Walkthrough',url: 'https://youtube.com/...',         type: 'youtube' },
    { label: 'Other',      url: 'https://...',                     type: 'other' },
  ],
  screenshots: [
    { src: null, caption: 'Caption' },   // set src to image URL
  ],
}
```

### Add real images

Set `image` (card cover) or `screenshots[i].src` to a URL. The `.ph` placeholder disappears automatically.

## Current Projects (UPDATE-6 applied)

Three real projects in `lib/data.ts`, ordered:

| # | Slug | Title | Year | Images | Live |
|---|---|---|---|---|---|
| 1 | `super-battle` | SuperBattle | 2026 | ✓ (5 screenshots) | `superbattle.codading.site` |
| 2 | `mutawazin` | Mutawazin Tutor Platform | 2026 | ✓ (3 screenshots) | — |
| 3 | `puanita` | Puanita CMS | 2024 | ✓ (4 screenshots) | — |

All image URLs use `https://cdn.codading.site/img/<filename>` pattern.

## What's Left

- [ ] Add live/youtube links to mutawazin when available
- [ ] Add more projects as they are built

## Notes

- `handoffs/` and `docs/superpowers/` are gitignored — design handoffs and planning docs live only on disk, not in the repo
- Handoff updates applied so far: UPDATE-1 (card contrast), UPDATE-2 (light/dark mode), UPDATE-3 (favicon), UPDATE-4 (image object-contain), UPDATE-5 (unified project links), UPDATE-6 (super-battle added as #1, puanita moved to #3)
