# Header dropdown nav + Platform/Solutions pages

Date: 2026-07-18

## Goal

Replace Opie's minimal header nav with a Fluency-style (usefluency.com) click-to-toggle
dropdown mega-menu, and back the two new menus ("Platform", "Solutions") with real routed
pages instead of anchor links, since the site currently has no router.

## Reference

usefluency.com header: dark bar, logo left, `Platform` / `Solutions` nav items with a `+`
icon that becomes `×` when clicked, revealing a full-width panel directly under the nav.
Each panel item is a title + small arrow + one-line muted description. Plain links
(`Careers`, `Blog`) and a `Login` link sit alongside the dropdown triggers. Opie will use
the same interaction pattern but keep its existing light/frosted header styling and brand
colors rather than switching to Fluency's dark theme.

## Scope

### Routing

- Add `react-router-dom` (no router currently present; `App.jsx` renders the landing page
  directly).
- `/` renders the existing landing page unchanged (`Hero`, `SolveSection`, `OneInterface`,
  `DeepDives`, `CustomAgents`, `Regulatory`, `Teams`, `Security`, `FinalCTA`).
- 12 new routes render via one shared `FeaturePage` template (see below), driven by a
  content array — not 12 bespoke components:
  - `/platform/vault`
  - `/platform/workflows`
  - `/platform/compliance`
  - `/platform/playbooks`
  - `/platform/assistant`
  - `/platform/tasks-calendar`
  - `/solutions/investment-funds`
  - `/solutions/accountants-advisors`
  - `/solutions/legal-teams`
  - `/solutions/compliance-officers`
  - `/solutions/financial-institutions`
  - `/solutions/enterprise-operations`
- `Nav` and `Footer` render on every route (shared layout).

### Content sourcing

- **Platform** copy is grounded in what actually exists in the sibling product repos
  (`reggie_saas`, `reggie-frontend`), per repo survey:
  - Vault — secure document workspace (GCS-backed storage, upload/organize/analyse).
  - Workflows — multi-step compliance automation orchestrated via Temporal.
  - Compliance — customers, obligations, and reports; KYC/AML checks.
  - Playbooks — reusable rule-based action templates that drive compliance workflows.
  - Opie Assistant — multi-agent AI chat (named agents: Policy Advisor, Regulatory
    Monitor, Document Analyser, Risk Assessor, Training Assistant).
  - Tasks & Calendar — task management and deadline/calendar scheduling.
- **Solutions** copy reuses the existing `teams` array in `src/data.js` verbatim (no new
  copy invented): Investment funds, Accountants & advisors, Legal teams, Compliance
  officers, Financial institutions, Enterprise operations.
- Each `FeaturePage` entry gets: eyebrow (Platform/Solutions), title, one-paragraph
  description (adapted from the above), 3 short highlight bullets, and the existing
  `Sign Up` CTA. No new illustrations/screenshots — reuse the existing `Placeholder`
  component for imagery, consistent with the rest of the site.

### Header / nav

- `Nav.jsx` becomes stateful (open dropdown: `null | 'platform' | 'solutions'`).
- Structure: Logo · `Platform` (dropdown trigger) · `Solutions` (dropdown trigger) ·
  `Blog` (plain link) · `Contact` (plain link) · `Sign Up` button.
- Trigger renders a `+` icon that rotates to `×` when its panel is open (CSS transform,
  matching Fluency).
- Clicking a trigger toggles its panel; clicking the other trigger switches directly;
  clicking outside or navigating closes it. Hover does not open it (click-based, matching
  Fluency, not a hover mega-menu).
- Panel is full-width, positioned directly under the sticky nav bar, light background
  matching the header (`--soft`/white + existing blur), a 3-column grid of items, each
  item = title + small arrow (`→`) + one-line muted description below, linking to the
  routes above.
- Panel content per trigger:
  - Platform: the 6 platform items above.
  - Solutions: the 6 teams from `data.js`.

### Explicit non-goals

- No mobile hamburger menu. At the existing small-screen breakpoint the panel just
  collapses to a single column, consistent with how minimal the current mobile nav
  already is.
- No dark-theme header (kept light, per explicit decision).
- No bespoke visual design per feature/solution page beyond the shared template —
  these are lightweight informational pages, not full landing pages.

## Open questions / risks

- None outstanding — content sourcing, page depth (individual pages vs. hub pages), and
  styling direction were all explicitly decided before this doc was written.
