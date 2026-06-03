# lutfihp.github.io — Portfolio Site

Personal portfolio for **Lutfi Hilman Prasetya** (`lutfihp`), deployed as a static Next.js 15 site to GitHub Pages.

## Stack

- **Next.js 15** App Router, TypeScript, `output: 'export'` (static, no server runtime)
- **Tailwind v4** — tokens defined in `app/globals.css` via `@theme {}`, no `tailwind.config.ts`
- **IBM Plex Sans + Mono** via `next/font/google`
- **GitHub Actions** → deploys `out/` to `gh-pages` branch on push to `main`
- Live at: `https://lutfihp.github.io` (once pushed)

## Project Structure

```
app/
  layout.tsx               fonts, metadata
  page.tsx                 landing page
  globals.css              Tailwind v4 tokens + custom classes
  projects/[slug]/page.tsx project detail (generateStaticParams)
components/
  Nav.tsx                  landing + detail variants
  Footer.tsx
  SectionHeader.tsx        kicker + h2 + optional descriptor
  ProjectImage.tsx         <Image> if src set, else .ph placeholder
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
.github/workflows/
  deploy.yml               CI deploy to gh-pages
```

## Key Design Decisions

- **Design tokens** in `app/globals.css` under `@theme {}` (Tailwind v4 pattern)
- **Colour tokens (UPDATE-1 applied):** `surface #191c1f`, `surface2 #23272b`, `line rgba(255,255,255,0.11)`, `line-strong rgba(255,255,255,0.18)` — lifted from original values for better card contrast
- **Hero "about" card (UPDATE-1 applied):** solid `bg-surface` fill, `shadow-black/50`, `ring-1 ring-white/5` edge highlight — no backdrop blur
- **Scroll reveal** uses `.reveal` / `.reveal.in` CSS classes toggled by `Reveal.tsx`
- **Images**: `ProjectImage` renders `.ph` striped placeholder when `src` is `null` — drop in a URL to replace
- **Status row** ("Open to new opportunities") is intentionally omitted from Hero
- **No basePath** needed — this is a user page (`lutfihp.github.io`), not a project subpath

## Common Commands

```bash
npm run dev       # dev server (Turbopack, port 3000)
npm run build     # static export → out/
npm test          # jest (carousel tests)
npx tsc --noEmit  # type check
```

## Deploy

```bash
git push origin main   # triggers GitHub Actions → deploys to gh-pages
```

GitHub Pages must be configured: Settings → Pages → Source: **gh-pages branch / root**.

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
  role: 'Your Role',
  image: null,                // set to image URL to show real image
  stack: ['Tech', 'Stack'],
  description: 'Full description.',
  repos: [                    // 0, 1, or 2 repos
    { label: 'repo-name', url: 'https://github.com/lutfihp/repo' },
  ],
  screenshots: [
    { src: null, caption: 'Caption' },   // set src to image URL
  ],
}
```

### Add real images

Set `image` (card cover) or `screenshots[i].src` to a URL. The `.ph` placeholder disappears automatically.

## What's Left

- [ ] Replace 4 placeholder projects with real ones in `lib/data.ts` (slugs, titles, descriptions, repos)
- [ ] Add real image URLs when available (`image` and `screenshots[i].src` fields)
- [ ] Set GitHub Pages source to `gh-pages` branch in repo settings (Settings → Pages → Source: gh-pages / root)
- [ ] `git push origin main` to trigger first deploy

## Notes

- `handoffs/` and `docs/superpowers/` are gitignored — design handoffs and planning docs live only on disk, not in the repo
- History was rewritten with `git filter-repo` to remove those folders; force-push will be required on first push to GitHub
