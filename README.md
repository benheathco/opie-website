# Opie Landing — React App

A faithful React + Vite recreation of the Opie landing page (light theme, Newsreader
serif headlines, teal accent, lavender hero gradient, dark feature/CTA bands).

## Run it

```bash
cd opie-react
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173).

To build for production:

```bash
npm run build      # outputs to dist/
npm run preview    # serve the production build locally
```

## Project structure

```
opie-react/
├─ index.html              # fonts (Newsreader + Schibsted Grotesk) + root
├─ vite.config.js
├─ src/
│  ├─ main.jsx             # React entry
│  ├─ App.jsx              # composes the page sections in order
│  ├─ index.css            # ALL styling — design tokens in :root, then section classes
│  ├─ data.js              # every piece of copy (features, stats, teams, etc.)
│  └─ components/
│     ├─ Nav.jsx           # sticky header + logo (Logo is exported and reused in Footer)
│     ├─ Hero.jsx          # headline, CTA, product window mock
│     ├─ SolveSection.jsx  # "Opie solves it all" card grid
│     ├─ OneInterface.jsx  # dark bento + stats band
│     ├─ DeepDives.jsx     # 3 alternating feature deep-dives
│     ├─ CustomAgents.jsx  # dark split panel
│     ├─ Regulatory.jsx    # 2×2 standards cards
│     ├─ Teams.jsx         # interactive team switcher (useState)
│     ├─ Security.jsx      # 2 security cards
│     ├─ FinalCTA.jsx      # dark closing CTA + product window
│     ├─ Footer.jsx        # dark footer
│     └─ Placeholder.jsx   # gradient image placeholder (see below)
```

## Design tokens

Defined as CSS variables at the top of `src/index.css`:

| Token        | Value      | Use                              |
|--------------|------------|----------------------------------|
| `--ink`      | `#2e2a48`  | serif headlines, primary text    |
| `--body`     | `#615f71`  | muted body copy                  |
| `--teal`     | `#13a4b1`  | accent (buttons use a gradient)  |
| `--line`     | `rgba(24,22,46,.09)` | hairline borders       |
| `--soft`     | `#f6f5fa`  | subtle fills                     |
| `--dark`     | `#08080c`  | dark section background          |

Fonts: **Newsreader** (serif headlines) + **Schibsted Grotesk** (UI/body), loaded from
Google Fonts in `index.html`.

## Replacing the placeholder imagery

Every product screenshot is rendered by `<Placeholder label="..." />`, which draws a soft
gradient box. To drop in a real image, replace the placeholder with an `<img>`, e.g. in
`SolveSection.jsx`:

```jsx
// before
<Placeholder label={f.shot} className="card-media" />
// after
<img src={f.image} alt={f.title} className="card-media" />
```

(Add an `image` field to the entries in `src/data.js` and put the files in `public/`.)

## Quick preview without installing

`preview.html` is an auto-generated single-file build (React via CDN) that renders the
whole app with no `npm install` — handy for a quick look. It is **not** the source of
truth: edit the files in `src/`, not `preview.html`.

## Notes

- All copy is centralized in `src/data.js` — edit there, not in the components.
- Styling is plain CSS (no Tailwind/CSS-in-JS) so it's easy to migrate into an existing
  design system. Swap class names for your own tokens as needed.
- The page is responsive down to mobile (breakpoints at 900px and 620px in `index.css`).
