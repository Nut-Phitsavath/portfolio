# Ink Sketchbook Redesign

## Goal

Replace the current "AI neon slop" look (indigo/purple/pink gradients, glassmorphism, glowing pill buttons) with a monochrome pencil-and-ink sketchbook aesthetic with a surrealist accent. Association only — this is a software developer portfolio, not an art showcase. No real artwork/scans are being added.

## Scope

Whole site: `app/globals.css`, `app/layout.tsx` (font), `tailwind.config.ts` (if needed for font family token), and all components in `components/`: `Navigation`, `Hero`, `About`, `Skills`, `Projects`, `Contact`, `Footer`. Plus two new files under `components/doodles/`.

Approach chosen: tokens + shared utility classes + two sparse SVG doodle motifs, re-skinning existing layout/structure (no layout rebuild).

## Theme mode

Single fixed dark theme. Remove the light theme and the `@media (prefers-color-scheme: dark)` branch in `globals.css` entirely — no toggle, no system-preference branching.

## Design tokens (`app/globals.css` `:root`)

```css
--background: #161512;        /* warm near-black, sketchbook cover */
--foreground: #e8e3d3;        /* warm chalk/graphite off-white */
--muted: #211f1a;             /* slightly lighter panel background */
--muted-foreground: #9a9484;  /* faded pencil grey */
--border: #3a372e;            /* dark graphite line */
--ink-accent: #c9c3ad;        /* lighter parchment - links/hover only, no hue */
```

Remove entirely: `--primary`, `--primary-dark`, `--secondary`, `--accent`, `--gradient-primary`, `--gradient-accent`, `--gradient-dark`, `--shadow-glow`, `--shadow-sm/md/lg/xl` (replaced by `.hatch-shadow`).

No color hue anywhere in the palette — pure monochrome (warm grey/black/off-white ramp only).

## Typography

- Headings (`h1`–`h3`, name, section titles, nav logo): **Caveat** (Google Font via `next/font/google`), loaded in `app/layout.tsx` alongside the existing body font.
- Body/description/nav links/buttons/tags: keep the existing sans body font — no change.
- Because handwritten fonts read smaller, bump heading sizes one step up from current (e.g. `h1`: `text-5xl md:text-7xl` → `text-6xl md:text-8xl`).

## Shared utilities (`app/globals.css`, replacing `.glass`/`.gradient-text`/`.gradient-accent-text`)

- `.paper-grain` — inline SVG `feTurbulence` noise as a `background-image` data URI, applied once on `body`. No image asset.
- `.ink-card` — flat `--muted` background, 1px `--border`, irregular per-corner border-radius (hand-drawn wobble), e.g. `border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px`. Replaces `.glass` on all cards.
- `.hatch-shadow` — offset duplicate-border pseudo-element (rough double-line sketch), replacing blurred `box-shadow` glow.
- `.ink-hover` — underline-draw-in transition on hover (background-size transition on a linear-gradient underline), replacing scale+glow hover states.
- Buttons: drop `rounded-full` everywhere; use the same wobble-radius as `.ink-card`; outline style (border, transparent/`--muted` fill) with `.ink-hover` instead of filled gradient + glow.

## Doodle motifs (`components/doodles/`)

Two static/near-static inline SVG components, rough single-weight stroke, unfilled:

- `EyeDoodle.tsx` — single surrealist eye (Dali/Magritte-style), placed once in `Hero` behind the heading, low opacity, slight rotation. Replaces the two animated blurred gradient blobs. No fast animation — at most a very slow (60s+) drift, since surreal reads better as still/off rather than obviously decorative-animated.
- `WarpedClockDoodle.tsx` — melting/warped clock outline, placed once as a small accent near the `Projects` section heading.

No other doodles — stays sparse by design, not a repeated decorative pattern.

## Per-component changes

- **Navigation**: `.glass` bar → flat background + bottom border only; `gradient-text` logo → sketchy-font logo in plain foreground color; Contact pill button → wobble-radius outline button with `.ink-hover`.
- **Hero**: two blurred gradient blobs → single `EyeDoodle`, off-center, near-static; `gradient-text` name → sketchy font, plain color; Sparkles badge → plain text badge (drop the icon or swap to a plain line icon); CTA buttons → wobble-radius outline buttons with `.ink-hover`, no scale/glow transforms.
- **About**: `.glass` cards → `.ink-card`; drop emoji from card titles (📱💾🎨 read as playful/modern, not ink-sketch) — replace with plain lucide line icons or drop the icon and keep text only; `gradient-text` → sketchy font for "Me".
- **Skills**: remove the per-category `gradient`/`bgColor`/`borderColor`/`hoverBg` fields from the data array entirely — all categories render with the same neutral `.ink-card` and plain bordered skill tags (no per-category color variants); category titles use sketchy font.
- **Projects**: remove the `gradient` field from the project data array and its overlay div; cards become `.ink-card`; link buttons become wobble-radius outline with `.ink-hover`; add `WarpedClockDoodle`, small, near the section heading.
- **Contact**: `gradient-accent-text` → sketchy font heading, plain color.
- **Footer**: no structural change; inherits new palette (already plain text, no gradient/glass usage).

## Acceptance check

After implementation, grep the `components/` and `app/` directories for `gradient`, `glass`, `shadow-glow`, and `rounded-full` — none should remain (Footer/Navigation icons excluded if any incidental unrelated match). `npm run build` must pass. Manually load the dev server and check Hero, About, Skills, Projects, Contact, Footer render with the new palette/typography/doodles and no console errors.

## Out of scope

- No real artwork/image assets.
- No light mode / theme toggle.
- No layout restructuring (grid arrangement, section order, responsive breakpoints stay as-is).
- No new dependencies — Caveat font via `next/font/google` (already how the current font is loaded), doodles as inline SVG/TSX, no icon library changes beyond removing a couple of emoji/Sparkles usages.
