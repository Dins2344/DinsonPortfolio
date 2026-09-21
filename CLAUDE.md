# DinsonPortfolio

Personal portfolio for Dinson Davis. Next.js 13 **Pages Router**, plain JS (no TS), Tailwind, Framer Motion, Swiper, tsparticles. Deployed on Netlify (`netlify.toml`, `images.unoptimized: true`).

## Commands

```
npm run dev     # localhost:3000
npm run build   # must pass before merging
npm run lint    # next/core-web-vitals
```

## Layout

- `pages/_app.js` — `Layout` + `AnimatePresence` page transitions (`components/Transition.js`).
- `components/Layout.js` — Sora font, `Nav`, `Header`, `TopLeftImg`. Every page renders inside `.page` (`h-screen overflow-hidden`), so pages are single-screen; long content scrolls inside its own box.
- Pages: `/`, `/about`, `/services`, `/work`, `/contact`. `/testimonials` exists but is hidden from `navData`.
- Content lives as plain arrays at the top of the page/component that uses it (`aboutData`, `serviceData`, `workSlides`, `navData`). No CMS, no API — `pages/api/hello.js` is a template stub.
- `variants.js` — the single Framer variant (`fadeIn(direction, delay)`) used everywhere.

## Color theme (tailwind.config.js)

| Token | Value | Use |
|---|---|---|
| `primary` | `#131424` | page overlays (`bg-primary/30`, `bg-primary/60`) |
| `secondary` | `#393A47` | body background |
| `accent` | `#F13024` | highlights, hover, active nav, Swiper bullets |
| text | `text-white`, `text-white/60` for paragraphs | |
| transition panels | `#2e2257` → `#3b2d71` → `#4b3792` | `Transition.js` only |
| particles | `#e68e2e` dots, `#f5d393` links | `ParticlesContainer.js` only |

Do not introduce new colors inline — add them to `theme.extend.colors` first. Decorative images (`Circles`, `Bulb`, `TopLeftImg`) use `mix-blend-color-dodge`.

## Typography

- Font: Sora via `next/font/google`, exposed as `--font-sora` / `font-sora`.
- Headings use the `.h1` / `.h2` classes from `styles/globals.css`; paragraphs get `text-white/60 font-light` automatically.
- Breakpoints are custom: `sm 640 / md 768 / lg 960 / xl 1200`. Desktop layout is `xl:`.

## Animation rules

- **Entrance**: always `fadeIn(direction, delay)` from `variants.js` with `initial="hidden" animate="show" exit="hidden"`. Stagger siblings by `0.2s` steps. Don't write ad-hoc variants in components.
- **Only animate `transform` and `opacity`.** Never animate `width`, `height`, `top`, `left`, `margin` — they trigger layout and jank.
- Hover/UI feedback: Tailwind `transition-all duration-300` + `hover:text-accent`. Keep hover durations ≤ 300ms.
- Reduced motion: `MotionConfig reducedMotion="user"` in `_app.js` covers Framer; CSS animations respect `motion-safe:` / `motion-reduce:` prefixes.
- Page transition (`Transition.js`) is three translate-only wipe panels. Keep it under ~1s total.
- Particles: use `loadSlim`, `fpsLimit: 60`, no `collisions`. It is client-only (`next/dynamic`, `ssr: false`) and only on the home page.

## Performance rules

- Images: put sources in `public/`, serve **WebP** for photos/large PNGs (`bg-explosion`, avatars, project shots). Keep any single asset under ~300 KB. `next/image` is unoptimized on Netlify, so what's in `public/` is what ships.
- Mark the LCP image (`Avatar` on `/`) with `priority`; nothing else gets `priority`.
- Heavy client libs (tsparticles) load via `next/dynamic` with `ssr: false`.
- Remove unused imports/icons — `react-icons` is tree-shaken per named import, but dead imports still cost.

## Conventions

- Components: one default export per file, PascalCase filename, `// section` comments above import groups (match existing style).
- Contact form uses EmailJS; the service/template/public keys in `pages/contact/index.js` are public client keys. Prefer `NEXT_PUBLIC_EMAILJS_*` env vars when Netlify env is configured.
- Template leftovers (commented-out sample data, `thumb*.jpg`, `t-avt-*.png`) can be deleted when touched; don't add more.
- Branch off `main`, PR back to `main`. Run `npm run build` before opening a PR.
