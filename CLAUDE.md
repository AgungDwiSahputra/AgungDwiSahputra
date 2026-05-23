# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Dev server (pagefind search shows "build first" hint — this is expected)
npm run build      # astro build + pagefind --site dist (full production index)
npm run preview    # Preview the built dist/
```

There are no lint or test scripts. Type-checking is via `astro check` (not in scripts).

## Architecture

### Framework & Tooling
- **Astro 6.x** — static output (`output: "static"`), deployed to GitHub Pages
- **Tailwind CSS 4.x** — custom properties defined in `src/styles/global.css` under `@theme {}`. There is **no `tailwind.config.js`**; do not create one.
- **TypeScript** — strict mode via `tsconfig.json` (`astro/tsconfigs/strict`)

### Base Path (critical)
The site is hosted at a subfolder: `base: '/AgungDwiSahputra'` in `astro.config.mjs`.

Every internal link and asset path must use `import.meta.env.BASE_URL`:
```astro
---
const base = import.meta.env.BASE_URL.replace(/\/$/, ''); // '/AgungDwiSahputra'
---
<a href={`${base}/projects`}>...</a>
<img src={`${base}/images/profile.jpg`} />
```
The JSON-LD `SITE_URL` constant is hardcoded as `"https://agungdwisahputra.github.io/AgungDwiSahputra"` in `BaseLayout.astro` and `[slug].astro`.

### Content Sources — Two separate systems
**1. Astro Content Layer** (Astro 6 API) — only for blog-style Markdown:
- Config: `src/content.config.ts` using `glob` loader
- Files: `src/content/projects/*.md`
- Routing: uses `entry.id` (not `entry.slug`); rendered via `render(entry)` from `astro:content`

**2. JSON data files** — for everything else:
- `src/content/profile.json` — name, bio, social links, CV path
- `src/content/experience.json` — `work[]`, `education[]`, `certifications[]`, `organizational[]`
- `src/content/skills.json` — 6 skill categories with `name` + `level` (0–100)

To update personal data (certifications, work history, org experience), edit the JSON files — not the Astro components.

### i18n (ID / EN)
Language toggle is **entirely client-side** — no SSR, no URL-based routing.

- Translations live in the `TRANSLATIONS` object inside `BaseLayout.astro` (the `<script>` block)
- Elements get `data-i18n="key"` attributes; `applyLang()` sets `el.textContent`
- Inputs/textareas use `data-ph-id` / `data-ph-en` for placeholder translation
- Language preference is persisted in `localStorage` under `'portfolio-lang'`
- The `window.toggleLang()` function is called by all toggle buttons via `onclick`

To add a new translatable string: add the key to `TRANSLATIONS` in `BaseLayout.astro`, then add `data-i18n="your.key"` to the element.

### Pagefind Search
- **Dev mode**: A Vite plugin stub (`pagefindDevStub` in `astro.config.mjs`) intercepts the import at `/AgungDwiSahputra/pagefind/pagefind.js` and returns a mock with `__isDev: true`. `SearchModal.astro` detects this and shows a "run build first" hint.
- **Production**: `npm run build` runs `pagefind --site dist` after Astro build, generating `dist/pagefind/`.
- The dynamic import uses `import.meta.env.BASE_URL + 'pagefind/pagefind.js'` with `/* @vite-ignore */`.

### Glassmorphism Design System
Custom CSS classes in `src/styles/global.css`:
- `.glass` / `.glass-hover` — frosted glass card
- `.gradient-text` — blue-to-purple gradient text
- `.gradient-hero` — page background gradient
- `.btn-primary` / `.btn-outline` — CTA buttons
- `[data-animate]` + `.in-view` — IntersectionObserver scroll animation (wired in `BaseLayout.astro`)
- `.skill-bar-fill` with `--skill-level` CSS variable — animated progress bars

### Contact Form
Formspree endpoint hardcoded in `src/components/sections/Contact.astro`:
```js
const FORMSPREE_ID = 'xdajzqpd';
```
Submitted via `fetch()` with `Accept: application/json`. Includes a honeypot field (`name="_gotcha"`).

### Deployment
GitHub Actions workflow: `.github/workflows/deploy.yml`
- Triggers on push to `main`
- Runs `npm ci` → `npm run build` → uploads `dist/` as GitHub Pages artifact
- GitHub Pages source must be set to **GitHub Actions** (not a branch) in repo Settings → Pages
