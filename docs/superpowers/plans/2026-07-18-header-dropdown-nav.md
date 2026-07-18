# Header Dropdown Nav + Platform/Solutions Pages Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace Opie's current 2-link header with a Fluency-style (usefluency.com) click-to-toggle dropdown mega-menu for "Platform" and "Solutions", each backed by real routed pages.

**Architecture:** Add `react-router-dom` (the site currently has no router — `App.jsx` renders the landing page directly). Home (`/`) keeps the existing landing sections. Two parameterized routes (`/platform/:slug`, `/solutions/:slug`) render a single shared `FeaturePage` template driven by content arrays in `data.js` — not 12 bespoke page components. `Nav.jsx` becomes stateful, rendering a full-width dropdown panel under the sticky header, matching Fluency's click-based (not hover) interaction and `+`→`×` icon.

**Tech Stack:** React 18, Vite 5, `react-router-dom` v6 (new dependency). No test framework is installed in this project — do not add one. Plain CSS in `src/index.css` (no CSS-in-JS, no Tailwind).

## Global Constraints

- Keep the header's existing **light** frosted-glass styling and brand colors (`--ink`, `--teal`, `--soft`, `--line`, etc. from `src/index.css:7-21`) — do NOT switch to Fluency's dark theme.
- Dropdown interaction is **click-to-toggle**, not hover — matches usefluency.com, not a typical hover mega-menu.
- Platform page copy must stay grounded in what actually exists in the sibling repos `reggie_saas` / `reggie-frontend` (Vault, Workflows, Compliance, Playbooks, Opie Assistant, Tasks & Calendar) — this is provided verbatim in Task 2, do not invent additional platform features.
- Solutions page copy must reuse the existing `teams` array in `src/data.js` verbatim — do not invent new copy for Solutions pages or bullets for them.
- No mobile hamburger menu. The dropdown panel collapses to a single column at the existing `@media (max-width: 620px)` breakpoint — that's the only mobile-specific change needed.
- No test framework exists in this repo (`package.json` has no test script). Verification steps in this plan use `npm run build` (catches syntax/import errors) plus manual checks via the dev server — do not add Jest/Vitest/etc. as part of this work.
- This is a single project working directory: `/Users/nickmoellers/Repos/Opie/opie-website`. All paths below are relative to it unless stated otherwise.

---

### Task 1: Add react-router-dom and wire up BrowserRouter

**Files:**
- Modify: `package.json`
- Modify: `src/main.jsx`

**Interfaces:**
- Produces: the app is now rendered inside a `BrowserRouter`, so any component in the tree can use `react-router-dom` hooks (`useParams`, `useLocation`, `Link`, etc.) and `App.jsx` can render `<Routes>`.

- [ ] **Step 1: Install the dependency**

Run: `npm install react-router-dom@^6`

Expected: `package.json` `dependencies` now includes `"react-router-dom": "^6.x.x"`, and `package-lock.json` is updated.

- [ ] **Step 2: Wrap the app in BrowserRouter**

Replace the full contents of `src/main.jsx` with:

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
```

- [ ] **Step 3: Verify it builds and runs**

Run: `npm run build`
Expected: build completes with no errors (App.jsx doesn't use routing yet, so this just confirms the dependency and main.jsx changes are valid).

- [ ] **Step 4: Commit**

```bash
git add package.json package-lock.json src/main.jsx
git commit -m "feat: add react-router-dom and wrap app in BrowserRouter"
```

---

### Task 2: Add Platform and Solutions content data

**Files:**
- Modify: `src/data.js`

**Interfaces:**
- Consumes: the existing `teams` array (`src/data.js:69-76`, shape `{ name: string, desc: string }`).
- Produces:
  - `platformPages`: array of `{ slug: string, navTitle: string, navDesc: string, title: string, description: string, bullets: { h: string, t: string }[], shot: string }`.
  - `solutionPages`: array of `{ slug: string, navTitle: string, navDesc: string, title: string, description: string }` (no `bullets` or `shot` — Solutions pages reuse `teams` copy verbatim and don't get invented bullets).

- [ ] **Step 1: Append the content arrays**

Add this to the end of `src/data.js` (after the existing `securityItems` export):

```js
export const platformPages = [
  {
    slug: 'vault',
    navTitle: 'Vault',
    navDesc: 'Secure document workspace for uploading, organising and analysing files.',
    title: 'A secure vault for every document',
    description:
      "Opie's Vault is a cloud-native workspace for your organisation's files, backed by encrypted object storage. Upload, organise and analyse documents in one place, with every file scoped to the right team and project.",
    bullets: [
      { h: 'Encrypted storage', t: 'Files are stored in isolated, encrypted cloud storage, scoped per organisation.' },
      { h: 'Instant analysis', t: 'Every upload is automatically processed and made searchable the moment it lands.' },
      { h: 'Structured organisation', t: 'Folder-style navigation keeps documents mapped to the projects and entities they belong to.' },
    ],
    shot: 'vault workspace',
  },
  {
    slug: 'workflows',
    navTitle: 'Workflows',
    navDesc: 'Automate multi-step compliance processes, orchestrated end to end.',
    title: 'Compliance workflows that run themselves',
    description:
      'Workflows chain together every step of a compliance process — review, verification, sign-off — into a single automated pipeline, orchestrated so nothing falls through the cracks.',
    bullets: [
      { h: 'Multi-step orchestration', t: 'Each workflow runs as a durable, trackable pipeline from start to finish.' },
      { h: 'Human sign-off built in', t: 'Route any step to a human reviewer before it moves forward.' },
      { h: 'Full run history', t: 'See exactly what happened at every step, for every run, at any time.' },
    ],
    shot: 'workflow builder',
  },
  {
    slug: 'compliance',
    navTitle: 'Compliance',
    navDesc: 'Manage customers, obligations and reports for KYC/AML and regulatory risk.',
    title: 'One place for customers, obligations and reports',
    description:
      'The Compliance module brings customer records, regulatory obligations, and reporting together, with built-in KYC/AML checks so your team always knows where risk sits.',
    bullets: [
      { h: 'Customer risk profiles', t: 'Every customer record carries its verification status and risk tier.' },
      { h: 'KYC/AML checks', t: 'Identity verification is built into onboarding, not bolted on afterwards.' },
      { h: 'Audit-ready reporting', t: 'Generate obligation and risk reports without assembling them by hand.' },
    ],
    shot: 'compliance dashboard',
  },
  {
    slug: 'playbooks',
    navTitle: 'Playbooks',
    navDesc: 'Reusable, rule-based action templates that drive compliance work automatically.',
    title: 'Turn your compliance process into a playbook',
    description:
      'Playbooks are reusable, rule-based templates that trigger the right action automatically — recording a risk assessment, flagging a review, routing an approval — so the same process runs the same way every time.',
    bullets: [
      { h: 'Rule-based triggers', t: 'Actions fire automatically when the conditions you define are met.' },
      { h: 'Consistent outcomes', t: 'The same playbook produces the same result, every time it runs.' },
      { h: 'Reusable across teams', t: 'Build a playbook once and apply it across every entity or fund.' },
    ],
    shot: 'playbook editor',
  },
  {
    slug: 'assistant',
    navTitle: 'Opie Assistant',
    navDesc: 'A multi-agent AI assistant with specialists for every compliance domain.',
    title: 'An AI assistant with specialists on call',
    description:
      'Opie Assistant routes your questions to specialist agents — Policy Advisor, Regulatory Monitor, Document Analyser, Risk Assessor and Training Assistant — so you always get an answer grounded in the right domain.',
    bullets: [
      { h: 'Specialist agents', t: 'Dedicated agents for policy, regulation, document analysis, risk and training.' },
      { h: 'Grounded answers', t: "Every response is backed by your own documents and data, not a generic model." },
      { h: 'One conversation', t: 'Ask anything and Opie routes it to the right specialist behind the scenes.' },
    ],
    shot: 'assistant chat',
  },
  {
    slug: 'tasks-calendar',
    navTitle: 'Tasks & Calendar',
    navDesc: 'Task management and deadline scheduling built for compliance work.',
    title: 'Never miss a compliance deadline',
    description:
      "Tasks & Calendar keeps every to-do, review and regulatory deadline in one schedule, with system-generated tasks alongside the ones your team creates by hand.",
    bullets: [
      { h: 'System-generated tasks', t: 'Deadlines and follow-ups are created automatically from your workflows.' },
      { h: 'Team scheduling', t: "See what's due, who owns it, and when it's due across the whole team." },
      { h: 'Nothing falls through', t: 'Every obligation has an owner and a date, tracked to completion.' },
    ],
    shot: 'task calendar',
  },
];

const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

export const solutionPages = teams.map((t) => ({
  slug: slugify(t.name),
  navTitle: t.name,
  navDesc: t.desc,
  title: t.name,
  description: t.desc,
}));
```

- [ ] **Step 2: Verify the slugs are what routing will expect**

Run:
```bash
node --input-type=module -e "
import { solutionPages } from './src/data.js';
console.log(solutionPages.map(p => p.slug));
"
```

Expected output (order matches the `teams` array in `src/data.js:69-76`):
```
[
  'investment-funds',
  'accountants-advisors',
  'legal-teams',
  'compliance-officers',
  'financial-institutions',
  'enterprise-operations'
]
```

If any slug doesn't match, fix `slugify` before moving on — later tasks hard-code routes assuming these exact slugs.

- [ ] **Step 3: Commit**

```bash
git add src/data.js
git commit -m "feat: add Platform and Solutions page content data"
```

---

### Task 3: Build the shared FeaturePage template

**Files:**
- Create: `src/components/FeaturePage.jsx`
- Modify: `src/index.css`

**Interfaces:**
- Consumes: `Nav` (`src/components/Nav.jsx`, default export, no props), `Footer` (`src/components/Footer.jsx`, default export, no props), `Placeholder` (`src/components/Placeholder.jsx`, props `{ label, variant, className }`).
- Produces: `FeaturePage` default export, props `{ eyebrow: string, title: string, description: string, bullets?: { h: string, t: string }[], shot: string }`. `bullets` is optional — Solutions pages (Task 4) render without it.

- [ ] **Step 1: Create the component**

Create `src/components/FeaturePage.jsx`:

```jsx
import Nav from './Nav.jsx';
import Footer from './Footer.jsx';
import Placeholder from './Placeholder.jsx';

export default function FeaturePage({ eyebrow, title, description, bullets, shot }) {
  return (
    <>
      <Nav />
      <section className="section feature-page">
        <div className="head-center">
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="h2">{title}</h1>
          <p className="sub">{description}</p>
          <div className="hero-cta">
            <a className="btn-teal" href="#">
              Sign up Free <span className="chevron">&rsaquo;</span>
            </a>
          </div>
        </div>
        <Placeholder label={shot} variant="deep" className="dd-hero" />
        {bullets && bullets.length > 0 && (
          <div className="dd-points">
            {bullets.map((b) => (
              <div key={b.h} className="point">
                <div className="point-icon"><span /></div>
                <h3 className="point-h">{b.h}</h3>
                <p className="point-t">{b.t}</p>
              </div>
            ))}
          </div>
        )}
      </section>
      <Footer />
    </>
  );
}
```

This reuses existing classes (`section`, `head-center`, `h2`, `sub`, `hero-cta`, `btn-teal`, `chevron`, `eyebrow`, `dd-hero`, `dd-points`, `point`, `point-icon`, `point-h`, `point-t`) already defined in `src/index.css` and used the same way in `src/components/DeepDives.jsx` and `src/components/CustomAgents.jsx` — no new CSS is required for this component beyond the one tweak below.

- [ ] **Step 2: Add spacing for the no-bullets case**

Solutions pages render `FeaturePage` without `bullets`, so `.dd-hero` (which normally has `margin-bottom: 40px` because `.dd-points` follows it) is the last element on the page before `Footer`. That's already fine visually since `.section` has its own bottom padding — no CSS change needed here. Skip to verification.

- [ ] **Step 3: Confirm the file is syntactically sound**

`FeaturePage` isn't imported anywhere yet (Task 4 does that), so `npm run build` won't compile it in isolation. Read the file back and confirm: every JSX tag opened is closed, the `bullets && bullets.length > 0` guard wraps the whole `.dd-points` block, and the import paths (`./Nav.jsx`, `./Footer.jsx`, `./Placeholder.jsx`) match real files in `src/components/`. Full compilation is verified in Task 4, Step 4.

- [ ] **Step 4: Commit**

```bash
git add src/components/FeaturePage.jsx
git commit -m "feat: add shared FeaturePage template"
```

---

### Task 4: Add Platform/Solutions routes

**Files:**
- Create: `src/pages/PlatformPage.jsx`
- Create: `src/pages/SolutionPage.jsx`
- Modify: `src/App.jsx`

**Interfaces:**
- Consumes: `platformPages`, `solutionPages` from `src/data.js` (Task 2), `FeaturePage` from `src/components/FeaturePage.jsx` (Task 3), `useParams`/`Link`/`Routes`/`Route` from `react-router-dom` (Task 1).
- Produces: routes `/platform/:slug` and `/solutions/:slug` rendered by `App.jsx`.

- [ ] **Step 1: Create the Platform route page**

Create `src/pages/PlatformPage.jsx`:

```jsx
import { useParams, Link } from 'react-router-dom';
import FeaturePage from '../components/FeaturePage.jsx';
import { platformPages } from '../data.js';

export default function PlatformPage() {
  const { slug } = useParams();
  const page = platformPages.find((p) => p.slug === slug);

  if (!page) {
    return (
      <div className="section head-center">
        <h1 className="h2">Page not found</h1>
        <p className="sub"><Link to="/">Back to home</Link></p>
      </div>
    );
  }

  return (
    <FeaturePage
      eyebrow="Platform"
      title={page.title}
      description={page.description}
      bullets={page.bullets}
      shot={page.shot}
    />
  );
}
```

- [ ] **Step 2: Create the Solutions route page**

Create `src/pages/SolutionPage.jsx`:

```jsx
import { useParams, Link } from 'react-router-dom';
import FeaturePage from '../components/FeaturePage.jsx';
import { solutionPages } from '../data.js';

export default function SolutionPage() {
  const { slug } = useParams();
  const page = solutionPages.find((p) => p.slug === slug);

  if (!page) {
    return (
      <div className="section head-center">
        <h1 className="h2">Page not found</h1>
        <p className="sub"><Link to="/">Back to home</Link></p>
      </div>
    );
  }

  return (
    <FeaturePage
      eyebrow="Solutions"
      title={page.title}
      description={page.description}
      shot="solution overview"
    />
  );
}
```

- [ ] **Step 3: Wire routes into App.jsx**

Replace the full contents of `src/App.jsx` with:

```jsx
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import SolveSection from './components/SolveSection.jsx';
import OneInterface from './components/OneInterface.jsx';
import DeepDives from './components/DeepDives.jsx';
import CustomAgents from './components/CustomAgents.jsx';
import Regulatory from './components/Regulatory.jsx';
import Teams from './components/Teams.jsx';
import Security from './components/Security.jsx';
import FinalCTA from './components/FinalCTA.jsx';
import Footer from './components/Footer.jsx';
import PlatformPage from './pages/PlatformPage.jsx';
import SolutionPage from './pages/SolutionPage.jsx';

function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <SolveSection />
      <OneInterface />
      <DeepDives />
      <CustomAgents />
      <Regulatory />
      <Teams />
      <Security />
      <FinalCTA />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/platform/:slug" element={<PlatformPage />} />
      <Route path="/solutions/:slug" element={<SolutionPage />} />
    </Routes>
  );
}
```

- [ ] **Step 4: Verify it builds**

Run: `npm run build`
Expected: build completes with no errors.

- [ ] **Step 5: Verify routes render in the dev server**

Run: `npm run dev &` (background), then:
```bash
sleep 2
curl -s http://localhost:5173/ | grep -o '<title>[^<]*</title>'
curl -s http://localhost:5173/platform/vault | grep -o '<title>[^<]*</title>'
curl -s http://localhost:5173/solutions/legal-teams | grep -o '<title>[^<]*</title>'
```
Expected: all three requests return HTML containing the `<title>` tag from `index.html` (Vite serves `index.html` for every path in dev by default — this just confirms the dev server is up and the routes don't 500). Then kill the background dev server: `kill %1`.

Real content verification (that the correct feature title renders) happens visually in Task 6.

- [ ] **Step 6: Commit**

```bash
git add src/pages src/App.jsx
git commit -m "feat: add routed Platform and Solutions pages"
```

---

### Task 5: Rewrite Nav.jsx as a click-toggle dropdown mega-menu

**Files:**
- Modify: `src/components/Nav.jsx`
- Modify: `src/index.css`

**Interfaces:**
- Consumes: `platformPages`, `solutionPages` from `src/data.js` (Task 2, shape `{ slug, navTitle, navDesc, ... }`), `Link`/`useLocation` from `react-router-dom`.
- Produces: `Nav` default export (unchanged signature — no props, used by `Home` in `App.jsx` and by `FeaturePage`), `Logo` named export (unchanged — consumed by `src/components/Footer.jsx:1`).

- [ ] **Step 1: Replace Nav.jsx**

Replace the full contents of `src/components/Nav.jsx` with:

```jsx
import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { platformPages, solutionPages } from '../data.js';

function Logo({ light = false }) {
  return (
    <img
      className={`logo${light ? ' light' : ''}`}
      src="/opie-logo-dark-purple-rgb.svg"
      alt="Opie"
    />
  );
}

const MENUS = {
  platform: { label: 'Platform', base: '/platform', items: platformPages },
  solutions: { label: 'Solutions', base: '/solutions', items: solutionPages },
};

export default function Nav() {
  const [open, setOpen] = useState(null);
  const headerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    setOpen(null);
  }, [location.pathname]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setOpen(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  function toggle(key) {
    setOpen((current) => (current === key ? null : key));
  }

  const activeMenu = open ? MENUS[open] : null;

  return (
    <header className="header" ref={headerRef}>
      <nav className="nav">
        <Link to="/" onClick={() => setOpen(null)}>
          <Logo />
        </Link>
        <div className="nav-links">
          {Object.entries(MENUS).map(([key, menu]) => (
            <button
              key={key}
              type="button"
              className={`nav-trigger${open === key ? ' active' : ''}`}
              onClick={() => toggle(key)}
              aria-expanded={open === key}
            >
              {menu.label}
              <span className="nav-trigger-icon" aria-hidden="true" />
            </button>
          ))}
          <a className="nav-link" href="#">Blog</a>
          <a className="nav-link" href="#">Contact</a>
          <a className="btn-teal sm" href="#">
            Sign Up <span className="chevron">&rsaquo;</span>
          </a>
        </div>
      </nav>
      {activeMenu && (
        <div className="nav-dropdown">
          <div className="nav-dd-grid">
            {activeMenu.items.map((item) => (
              <Link
                key={item.slug}
                to={`${activeMenu.base}/${item.slug}`}
                className="nav-dd-item"
                onClick={() => setOpen(null)}
              >
                <span className="nav-dd-title">
                  {item.navTitle}
                  <span className="nav-dd-arrow">&rarr;</span>
                </span>
                <span className="nav-dd-desc">{item.navDesc}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export { Logo };
```

- [ ] **Step 2: Add dropdown CSS**

In `src/index.css`, immediately after the existing `.nav-link:hover { color: var(--teal); }` rule (around line 109), add:

```css
.nav-trigger {
  display: inline-flex; align-items: center; gap: 6px;
  font-family: var(--sans); font-size: 14.5px; color: var(--ink);
  background: none; border: none; padding: 0; cursor: pointer;
}
.nav-trigger:hover, .nav-trigger.active { color: var(--teal); }
.nav-trigger-icon { position: relative; width: 10px; height: 10px; flex: none; }
.nav-trigger-icon::before, .nav-trigger-icon::after {
  content: ''; position: absolute; top: 50%; left: 50%;
  width: 10px; height: 1.5px; background: currentColor;
  transition: transform 0.2s ease;
}
.nav-trigger-icon::before { transform: translate(-50%, -50%) rotate(0deg); }
.nav-trigger-icon::after { transform: translate(-50%, -50%) rotate(90deg); }
.nav-trigger.active .nav-trigger-icon::before { transform: translate(-50%, -50%) rotate(45deg); }
.nav-trigger.active .nav-trigger-icon::after { transform: translate(-50%, -50%) rotate(135deg); }

.nav-dropdown {
  border-top: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.96);
  backdrop-filter: blur(12px);
}
.nav-dd-grid {
  max-width: var(--maxw); margin: 0 auto; padding: 28px;
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px 32px;
}
.nav-dd-item { display: block; text-decoration: none; padding: 4px 0; }
.nav-dd-title {
  display: flex; align-items: center; gap: 6px;
  font-family: var(--sans); font-weight: 600; font-size: 14.5px; color: var(--ink);
}
.nav-dd-arrow { font-size: 13px; opacity: 0.55; transition: transform 0.15s ease; }
.nav-dd-item:hover .nav-dd-title { color: var(--teal); }
.nav-dd-item:hover .nav-dd-arrow { transform: translateX(3px); }
.nav-dd-desc { display: block; margin-top: 4px; font-size: 13px; line-height: 1.5; color: var(--body); }
```

- [ ] **Step 3: Add the mobile breakpoint override**

In `src/index.css`, inside the existing `@media (max-width: 620px)` block (around line 269-274), add one line so the grid collapses to a single column:

```css
@media (max-width: 620px) {
  .grid6, .grid2, .dd-points { grid-template-columns: 1fr; }
  .grid6 .col-2, .grid6 .col-3 { grid-column: span 1; }
  .nav-links { gap: 16px; }
  .nav-dd-grid { grid-template-columns: 1fr; padding: 20px 28px; gap: 18px; }
  .head-split { flex-direction: column; }
}
```

(Only the `.nav-dd-grid` line is new — the rest of the block is unchanged, shown here for exact placement.)

- [ ] **Step 4: Verify it builds**

Run: `npm run build`
Expected: build completes with no errors.

- [ ] **Step 5: Commit**

```bash
git add src/components/Nav.jsx src/index.css
git commit -m "feat: rewrite header nav as click-toggle dropdown mega-menu"
```

---

### Task 6: End-to-end verification

**Files:** none (verification only).

- [ ] **Step 1: Start the dev server**

Run: `npm run dev` (leave running; use a separate terminal or background it with `run_in_background`).

- [ ] **Step 2: Visually verify the home page nav**

Using a browser (e.g. Claude in Chrome, or ask the user to check manually), navigate to `http://localhost:5173/` and confirm:
- Header shows: Logo · Platform · Solutions · Blog · Contact · Sign Up button.
- Clicking "Platform" opens a light panel below the header with 6 items (Vault, Workflows, Compliance, Playbooks, Opie Assistant, Tasks & Calendar), each with a one-line description and an arrow that shifts on hover. The `+` icon next to "Platform" rotates into an `×`.
- Clicking "Solutions" while "Platform" is open closes Platform and opens Solutions (6 items: Investment funds, Accountants & advisors, Legal teams, Compliance officers, Financial institutions, Enterprise operations).
- Clicking outside the header, or clicking a link inside the panel, closes the panel.
- Resizing the browser to ~400px wide collapses the open panel's grid to a single column.

- [ ] **Step 3: Visually verify a Platform page**

Click "Vault" in the Platform dropdown (or navigate directly to `http://localhost:5173/platform/vault`). Confirm:
- The header is present and functional (dropdowns still work on this page).
- Page shows eyebrow "Platform", the title "A secure vault for every document", the description, a "Sign up Free" button, a placeholder image, and 3 bullet points (Encrypted storage, Instant analysis, Structured organisation).
- Footer renders below.

Repeat spot-checks for at least one more Platform slug (e.g. `/platform/assistant`) and confirm content matches Task 2's data.

- [ ] **Step 4: Visually verify a Solutions page**

Navigate to `http://localhost:5173/solutions/legal-teams`. Confirm:
- Eyebrow "Solutions", title "Legal teams", description matches the `teams` array's "Legal teams" entry in `src/data.js`.
- No bullet section renders (Solutions pages have no `bullets`).
- Footer renders below.

- [ ] **Step 5: Verify an unknown slug doesn't crash**

Navigate to `http://localhost:5173/platform/does-not-exist`. Confirm a "Page not found" message renders with a working "Back to home" link, instead of a blank page or console error.

- [ ] **Step 6: Final build check**

Run: `npm run build`
Expected: build completes with no errors or warnings about unused imports.

- [ ] **Step 7: Stop the dev server**

Stop the `npm run dev` process started in Step 1.

No commit for this task — it's verification only. If any check in Steps 2-6 fails, fix the relevant file from Tasks 1-5 and re-run this task's checks before considering the work done.
