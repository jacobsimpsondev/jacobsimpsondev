# jacobsimpsondev

Personal portfolio for **Jacob Simpson** — freelance developer building fast,
modern sites with Astro & WordPress. Single-page site with a dark terminal/CLI
aesthetic, built with [Astro](https://astro.build).

## Develop

```sh
npm install
npm run dev      # local dev server at http://localhost:4321/jacobsimpsondev
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Tech

- **Astro 5** — zero-JS-by-default static output.
- A single client-side island (`HeroTerminal.astro`) powers the typewriter.
- Fonts: Space Grotesk + JetBrains Mono (Google Fonts).
- Design tokens live as CSS custom properties in `src/styles/global.css`.

## Configuration

Three design toggles are set at the top of `src/pages/index.astro`:

| Toggle               | Default | Effect                                                |
| -------------------- | ------- | ----------------------------------------------------- |
| `enableTypewriter`   | `true`  | `false` → static `Freelance Developer` in the hero    |
| `showBackgroundGrid` | `true`  | toggles the decorative hero grid overlay              |
| `availableForWork`   | `true`  | `false` → status badge reads `currently booked`       |

## Deploy

Deploys to **GitHub Pages** via `.github/workflows/deploy.yml` on every push to
`main`. Because this is a project repo (not a `*.github.io` user site), the app
is served under a base path:

- Live URL: **https://jacobsimpsondev.github.io/jacobsimpsondev/**
- `site` / `base` are configured in `astro.config.mjs`.

One-time setup: in the repo **Settings → Pages**, set **Source** to
**GitHub Actions**.
