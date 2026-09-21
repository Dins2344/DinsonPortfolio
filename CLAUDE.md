# DinsonPortfolio

Personal portfolio for Dinson Davis. Next.js 13 **Pages Router**, plain JS (no TS), Tailwind, Framer Motion, Swiper, tsparticles. Deployed on Netlify (`netlify.toml`, `images.unoptimized: true`). Visual language: **liquid glass** on a dark, slowly drifting colour field.

## Commands

```
npm run dev              # localhost:3000
npm run build            # must pass before merging (stop `npm run dev` first — they race on .next/)
npm run lint             # next/core-web-vitals
npm run img -- <files>   # PNG/JPG -> WebP next to the source (scripts/webp.js)
```

## Layout

- `pages/_app.js` — `MotionConfig` + `Layout` + `AnimatePresence` page transitions (`components/Transition.js`).
- `components/Layout.js` — Sora font, ambient colour blobs, `usePointerGlow`, `Nav`, `Header`, `TopLeftImg`. Every page renders inside `.page` (`h-screen overflow-hidden`), so pages are single-screen.
- Pages: `/`, `/about`, `/services`, `/work`, `/contact`. `/testimonials` exists but is hidden from `navData`.
- Content lives as plain arrays at the top of the page/component that uses it (`aboutData`, `serviceData`, `workSlides`, `navData`). No CMS, no API — `pages/api/hello.js` is a template stub.
- `variants.js` — the single Framer variant (`fadeIn(direction, delay)`) used everywhere.

## Color theme (tailwind.config.js)

| Token | Value | Use |
|---|---|---|
| `primary` | `#131424` | page overlays (`bg-primary/30`, `bg-primary/60`) |
| `secondary` | `#393A47` | body background |
| `accent` | `#F13024` | highlights, hover, active nav, Swiper bullets |
| `glass-fill` | `rgba(255,255,255,.08)` | glass surface tint |
| `glass-stroke` | `rgba(255,255,255,.18)` | glass border |
| `glass-highlight` | `rgba(255,255,255,.40)` | top specular rim |
| text | `text-white`, `text-white/60` for paragraphs, `text-white/70` for inactive controls | |
| ambient blobs | `#4b3792`, `accent`, `#e68e2e` | `Layout.js` only — this is what the glass refracts |
| transition panels | `#2e2257` → `#3b2d71` → `#4b3792` | `Transition.js` only |
| particles | `#e68e2e` dots, `#f5d393` links | `ParticlesContainer.js` only |

Do not introduce new colours inline — add them to `theme.extend.colors` first. Decorative images (`Circles`, `Bulb`, `TopLeftImg`) use `mix-blend-color-dodge`.

## Glass system (styles/globals.css)

- `.glass` — the surface: tint, stroke, `backdrop-filter: blur(24px) saturate(160%)`, inset specular rim (`::before`), pointer light (`::after`). Sets no border-radius; add `rounded-*` or `.glass-pill` yourself.
- `.glass-sm` — same look, `blur(12px)`. Use for anything small (tooltips, chips, inputs) and for anything that appears on mobile.
- `.glass-pill` — `rounded-full`.
- Inputs/textarea already get `.glass-sm` via `.input` / `.textarea`.
- **Never** prefix glass classes with a variant (`xl:glass`) — the `::before/::after` rims don't follow variants. Apply unconditionally.
- Budget: **≤ 5 backdrop-filter surfaces visible per page**. Nav + socials pill already use 2.
- Don't put `.glass` on anything that continuously moves (the page-transition panels stay opaque for this reason). Hover `scale` is fine.
- Fallbacks are handled in globals.css: `prefers-reduced-transparency`, no `backdrop-filter` support, and `(hover: none)` all degrade to a solid tint / no pointer light. Don't add per-component fallbacks.
- `components/usePointerGlow.js` writes `--mx/--my` to every `.glass`/`.glass-sm` once per frame. It queries the DOM, so no registration needed for new surfaces.

## Typography

- Font: Sora via `next/font/google`, exposed as `--font-sora` / `font-sora`.
- Headings use `.h1` / `.h2` from `styles/globals.css`; paragraphs get `text-white/60 font-light` automatically.
- Breakpoints are custom: `sm 640 / md 768 / lg 960 / xl 1200`. Desktop layout is `xl:`.

## Animation rules

- **Entrance**: always `fadeIn(direction, delay)` from `variants.js` with `initial="hidden" animate="show" exit="hidden"`. Stagger siblings by `0.2s` steps. Don't write ad-hoc variants in components.
- **Only animate `transform` and `opacity`.** Never animate `width`, `height`, `top`, `left`, `margin`, `filter`, or `backdrop-filter`.
- **Active-state morphing** (nav, tabs): a `motion.span layoutId="…"` rendered only under the active item, `transition={{ type: "spring", stiffness: 380, damping: 32 }}`. Reuse this pattern for any new segmented control; never animate an underline width.
- Hover/UI feedback: Tailwind `transition-[transform,border-color] duration-300`. Name the properties; avoid `transition-all` on glass elements. Keep hover durations ≤ 300ms.
- Reduced motion: `MotionConfig reducedMotion="user"` in `_app.js` covers Framer; CSS keyframes must be applied with `motion-safe:`.
- Page transition (`Transition.js`) is three translate-only wipe panels. Keep it under ~1s total.
- Particles: `loadSlim`, `fpsLimit: 60`, no `collisions`. Client-only (`next/dynamic`, `ssr: false`) and only on the home page.

## Performance rules

- Images: put sources in `public/`, serve **WebP** (`npm run img -- public/x.png`). Keep any single asset under ~300 KB. `next/image` is unoptimized on Netlify, so what's in `public/` is what ships.
- Mark the LCP image (`Avatar` on `/`) with `priority`; nothing else gets `priority`.
- Heavy client libs load via `next/dynamic` with `ssr: false`.
- Remove unused imports/icons — `react-icons` is tree-shaken per named import, but dead imports still cost.
- Ambient blobs are the only `filter: blur()` elements allowed; don't add more.

## Adding things

- **New page**: create `pages/<name>/index.js`, wrap content in `<div className="h-full bg-primary/30 …">`, use `fadeIn` for entrances, add an entry to `navData` in `Nav.js`. Icons come from `react-icons/hi2`.
- **New project**: append to `workSlides` in `WorkSlider.js`; 4 images per slide (2×2 grid). Run `npm run img` on the screenshot first.
- **New service**: append to `serviceData` in `ServiceSlider.js`.
- **New glass surface**: `className="glass rounded-2xl …"` — nothing else to wire. Check the 5-surface budget.

## Conventions

- Components: one default export per file, PascalCase filename, `// section` comments above import groups (match existing style). Hooks live in `components/` as `useX.js`.
- Contact form uses EmailJS; the service/template/public keys in `pages/contact/index.js` are public client keys. Prefer `NEXT_PUBLIC_EMAILJS_*` env vars when Netlify env is configured.
- Template leftovers (commented-out sample data, `t-avt-*.png`, `/testimonials`) can be deleted when touched; don't add more.
- Branch off `main`, PR back to `main`. Before opening a PR: `npm run build` and `npm run lint` pass, and eyeball `/`, `/services`, `/contact` at desktop and phone width.
