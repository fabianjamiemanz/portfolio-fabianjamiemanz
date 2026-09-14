# Fabian Jamie Manz — Portfolio

Editorial, monochrome portfolio built with Next.js (App Router), TypeScript,
CSS Modules and Framer Motion.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Where things live

- **Site config** (name, email, socials, nav, production URL) — `src/content/site.ts`
- **Projects / case studies** (all copy + media, as data) — `src/content/projects.ts`
- **About page content** (timeline, skills, fun facts) — `src/content/about.ts`
- **Design tokens** (type scale, colour, spacing, motion) — `src/app/globals.css`
- **Motion language** (easings, durations, variants) — `src/lib/motion.ts`

## Replacing placeholders (no code changes to layout)

Every image is a `Media` object. Until real assets exist they render as a
labeled placeholder frame. To swap in a real image:

1. Drop the file at the `src` path under `public/` (e.g. `public/projects/neon/hero.webp`).
2. In `src/content/projects.ts`, set `placeholder: false` on that media object.

Prefer optimized WebP/AVIF at sensible sizes (~1600px max for full-width).

## Links

- **Prototype / live URLs** use the `PENDING` sentinel in `projects.ts`.
  Replace with the real URL; the "pending" state disappears automatically.
- Do not invent Figma/live URLs — leave `PENDING` until verified.

## Intro sequence

The opening lines and their timing are in `src/components/home/IntroHero.tsx`
(`LINES` array — `hold` is per-line milliseconds). It plays once per session,
is skippable, and is disabled for `prefers-reduced-motion`.

## Notes

- The UI is intentionally monochrome; project imagery/photography carries colour.
- No confidential client work is shown — Accenture work is described, not displayed.
- NEON is thesis-derived: keep any sections gated until publication rights are confirmed.
