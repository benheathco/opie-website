# Opie website graphics review

Every graphic on the site, what it is now, what is wrong with it, and either a
**generation prompt** (for an image / Lottie / screenshot you brief out or run
through an image model) or a **build spec** (for an inline SVG scene I can draw in
`src/components/Illustration.jsx`).

Each entry has a `Decision:` line for you to fill in with one of
`approve`, `change: <note>`, or `skip`.

> **Terminology:** playbooks are gone. The product now has **workflows**
> (policy-driven, multi-step automations) and **agents** (specialist AI
> workers that run inside them). All prompts and specs below use that
> language. The live site still says "playbook" in 51 places
> (`src/data.js` 40, `src/caseStudies.js` 7, `src/components/Illustration.jsx`
> 4), including the `/platform/playbooks` route, the "Run multi-entity
> playbooks" solve card and the "Shared notes and playbooks" bento card.
> That copy needs a separate pass; it is listed here only where it changes a
> graphic.

---

## 0. Shared style brief

Paste this in front of any image prompt below so all generated graphics match.

```
Style: clean editorial SaaS product illustration for a compliance software
brand. Flat, slightly soft shading, no 3D gloss, no photos, no stock people.
Palette: deep indigo ink #2E2A48, teal accent #087F89 (light teal #13A4B1),
lavender tint #EFEDF8, off-white #F7F7FB, with sparing amber #E0A23A,
red #D9605A and green #3FAE7A for status only. Dark variant background #08080C.
Typography inside UI mocks: a humanist grotesk sans (Schibsted Grotesk) for
labels, a serif (Newsreader) only for headings. Window chrome: rounded 14px
panel, three dots top-left, subtle 1px border. Signature element: a small
teal "source pin" (ring + dot) marking where a figure or answer came from.
Aspect ratio and background as specified per item. No text unless listed.
```

Two sub-styles are used:

- **Light** for cards on white / lavender sections.
- **Dark** for the "One interface" bento strip and Custom Agents panel
  (navy gradient #0F1630 to #1B2550, UI elements white at 90 percent).

---

## 1. Global brand assets

### 1.1 Favicon
- **Where:** `index.html` (none declared)
- **Now:** nothing, browser tab shows a blank icon.
- **Fix:** add `favicon.svg` plus 32 px and 180 px PNGs from the existing mark
  `public/opie-logo-mark-dark-purple-rgb-teal.svg`.
- **Build spec:** export the mark on transparent, pad 10 percent, write
  `<link rel="icon">` and `<link rel="apple-touch-icon">` tags.
- Decision:

### 1.2 Open Graph / social share image
- **Where:** `index.html` (none declared)
- **Now:** nothing, link previews show no image.
- **Prompt (1200 x 630, light):**
  ```
  Social share card. Left 55 percent: wordmark "Opie" in indigo at top-left,
  headline in Newsreader serif "The compliance operations platform for
  regulated teams" in indigo, small teal pill "Book a demo". Right 45 percent:
  a tilted review-table product window with five rows, teal checkmarks, one
  amber "needs review" badge, one teal source pin. Background: soft lavender
  gradient fading to white, faint dot grid.
  ```
- Decision:

### 1.3 Footer logo
- **Where:** `src/components/Footer.jsx:8` via `Logo light`
- **Now:** dark purple SVG inverted by CSS on the black footer.
- **Fix:** export a dedicated white wordmark SVG from the brand file and use it
  for `light`. No prompt needed.
- Decision:

### 1.4 Unused files in `public/`
- **Now:** 20 unreferenced files ship on every deploy: `logo-opie-*.png` (4),
  `opie-o-logo.png`, `placeholder*` (5), `EIOfhD01.svg`, `pdf.worker.min.mjs`,
  `opie-logo-mark-dark-purple-rgb.svg`, `opie-logo-dark-purple-rgb-teal.svg`,
  and 6 cover gradients.
- **Fix:** delete, or move to a `brand/` folder outside `public/`.
- Decision:

---

## 2. Home page

### 2.1 Hero product window
- **Where:** `src/components/Hero.jsx`, section `.hero`
- **Now:** an empty window with a single prompt box ("Share documents that you
  want Opie to automate..."). Largest graphic on the site, communicates nothing.
- **Recommendation:** real product screenshot, or a composed hero scene.
- **Prompt (2400 x 1300, light, for a composed scene):**
  ```
  Hero product window, slightly elevated with a soft shadow. Left sidebar with
  icons for Assistant, Inbox, Tasks, Calendar, Vault, Workflows, Notes. Main
  area shows a review table titled "IM disclosure review" with six rows: each
  row has a small document icon, a clause name, an extracted value, a source
  reference and a status chip (four teal "Verified", one amber "Needs review",
  one green "Signed off"). A teal source pin sits on the third row. A floating
  assistant card bottom-right reads "Ask anything about these documents" with
  an "Add files" chip. Top-right of the window: three small avatars and a
  "Share" button. Lavender-to-white background behind the window.
  ```
- **Alternative:** use `public/assets/home/product-workspace.png` here and
  generate a new shot for the final CTA (see 2.9).
- Decision:

### 2.2 Solve cards (5)

#### 2.2a Automated document processing
- **Where:** `src/data.js:4`, scene `ReviewTable`
- **Now:** grey-bar review table with one teal pin. Fine, but this exact scene
  is reused 9 times across the site.
- **Build spec:** keep as the canonical review table, but add three short text
  labels in the header ("Document", "Finding", "Source") and colour the status
  column (3 teal, 1 amber, 1 green) so it reads as a table at a glance.
- Decision:

#### 2.2b Search across your organisation's data
- **Where:** `src/data.js:5`, Lottie `search-org-data.json`
- **Now:** "Ask anything" input with a sources popover (Google Calendar, Meet,
  Outlook, Salesforce). A black cursor arrow rests on top of the "2 Sources"
  chip and hides part of the text. Large empty canvas above the input on
  mobile.
- **Prompt (Lottie or still, 4:3, light):**
  ```
  Search input card "Ask anything about your organisation" with a sources
  chip showing three connector logos and "3 sources". Above it, three result
  cards fan in one after another: "Investment policy v4", "Board minutes
  12 Mar", "AFSL conditions", each with a teal source pin and a one-line
  excerpt. No cursor. Fill the frame, 24 px padding.
  ```
- Decision:

#### 2.2c Human-in-the-loop verifications
- **Where:** `src/data.js:6`, Lottie `human-in-the-loop-verification.json`
- **Now:** a paper plane, an "Opie" chip, a "You" chip with a blurry emoji, and
  a "Guidance and Reference Materials" card. Does not communicate review or
  oversight.
- **Prompt (Lottie or still, 4:3, light):**
  ```
  A finding card "Fee disclosure, clause 4.2" with an amber "AI flagged" badge
  slides in from the left. A reviewer avatar (abstract, indigo circle with
  initials "PR") appears on the right. The badge animates to green "Approved
  by PR" with a timestamp line underneath. A thin audit-trail line draws
  down to a second card "Logged to audit trail" with a teal source pin.
  ```
- Decision:

#### 2.2d Run multi-entity workflows
- **Where:** `src/data.js:7`, scene `EntityTree`
- **Now:** one parent node, four child entities, grey bars. Reused 7 times.
- **Build spec:** label the root "Group workflow" and the four children
  "Fund A", "Fund B", "AFSL 1", "NZ entity"; give each child a mini status row
  with teal / green / amber dots so entities visibly differ.
- Decision:

#### 2.2e Automate with integrations
- **Where:** `src/data.js:8`, scene `Integrations`
- **Now:** hub-and-spoke with six blank boxes. Nobody can tell what connects.
- **Build spec:** draw simplified monochrome glyphs for Gmail, Drive, Outlook,
  Slack, Salesforce and Xero in the six nodes (indigo at 60 percent), teal
  Opie mark in the centre, one spoke animated with a travelling teal dot.
- Decision:

### 2.3 "One interface" bento strip (5 PNGs, dark)
All five are 574 x 760 px. Soft on retina at the rendered width. Regenerate at
1148 x 1520 minimum.

#### 2.3a Model picker
- **Where:** `public/assets/home/model-picker.png`
- **Now:** list of GPT and Claude models with a toggle. Reads well. Keep.
- **Prompt (if regenerating, 3:4, dark):**
  ```
  White model picker card on navy gradient: "Model" heading, rows for
  "Claude Sonnet", "Claude Opus", "GPT-5", "Gemini 2.5", each with a small
  provider glyph; second row has a teal toggle on and a "Thinking" label.
  ```
- Decision:

#### 2.3b Reports
- **Where:** `public/assets/home/reports.png`
- **Now:** two "Q3 Client Summary" tiles with rainbow gradient thumbnails. The
  gradients are the only loud colour on the site and don't match the brand.
- **Prompt (3:4, dark):**
  ```
  Two stacked report tiles on navy: each has a document thumbnail in
  lavender-and-indigo (not rainbow), a client name "Loctas Capital" /
  "Invictus Ventures", a title "Q3 Compliance Summary", a green "Audit ready"
  pill and a small "Generated in 42 s" caption.
  ```
- Decision:

#### 2.3c Citations
- **Where:** `public/assets/home/citations.png`
- **Now:** a wall of microscopic document text with two purple numbered pins.
  Unreadable, looks like noise.
- **Prompt (3:4, dark):**
  ```
  A single document page, zoomed so three paragraphs are legible as grey
  text blocks. One sentence highlighted lavender with a teal source pin and
  a callout card "Citation 1: s.1012B Corporations Act" that connects with a
  thin teal line. Dark navy background, page floats with a shadow.
  ```
- Decision:

#### 2.3d Review tables
- **Where:** `public/assets/home/review-tables.png`
- **Now:** chat bubble "Are there any clauses in our ..." flowing into an
  "AI Tables" node and five avatar nodes. Avatars look like stock photos.
- **Prompt (3:4, dark):**
  ```
  Query bubble "Which IMs are missing a fee disclosure?" at top, arrow down
  to a compact 4-row review table with document icons, a "Fee disclosure"
  column, and status chips (two teal checks, one amber flag, one red cross).
  Bottom row: three abstract avatar circles (initials only) labelled
  "3 reviewers". Navy background.
  ```
- Decision:

#### 2.3e Collaboration
- **Where:** `public/assets/home/collaboration.png`
- **Now:** six photographic headshots orbiting an "Invite" button. Stock-photo
  feel clashes with the illustrated style everywhere else.
- **Prompt (3:4, dark):**
  ```
  A shared note card "Onboarding workflow v3" with three abstract avatar
  circles (initials, indigo / teal / amber) in the top-right and an "Invite"
  button. Below it two smaller cards: "Comment from JL: add AML step" and
  "Edited 2 min ago". Lines connect the avatars to the note. Navy background.
  ```
- Decision:

### 2.4 Deep dives (3, scene on lavender panel)

#### 2.4a Analyse bulk files with review tables
- **Where:** `src/data.js:30`, scene `ReviewTable` (same as 2.2a)
- **Build spec:** use the labelled variant from 2.2a but at the wider 24:9
  frame: add a left file list ("12 files uploaded") and a right-hand
  "Source" preview pane so it differs from the solve card.
- Decision:

#### 2.4b Secure knowledge vaults
- **Where:** `src/data.js:41`, scene `Vault`
- **Now:** folder card and padlock. Reads OK but generic.
- **Build spec:** folder tree with three levels ("Workspace > Policies > AML")
  on the left, permission chips on each ("Owner", "Editor", "Reader") in
  indigo / teal / grey, padlock replaced by a small "Private" lock chip on one
  file only.
- Decision:

#### 2.4c Delegate to specialist AI agents
- **Where:** `src/data.js:53`, scene `Agents`
- **Now:** one task card, a double chevron, three identical person avatars.
  Agents look like people and the chevron is unexplained.
- **Build spec:** task card "Review new IM" on the left; three agent nodes on
  the right drawn as rounded squares with a tiny glyph each (magnifier =
  Research, shield = Compliance, scale = Risk) and labels; connectors with a
  teal dot travelling task to agent; a fourth node "Human sign-off" with a
  person glyph in amber to show the hand-off.
- Decision:

### 2.5 Custom agents panel (dark)
- **Where:** `src/components/CustomAgents.jsx:21`, label "agent builder",
  scene `Agents` (same as 2.4c)
- **Now:** identical scene to the deep dive directly above it, now on dark.
- **Build spec:** an "agent builder" form card: name field "Side-letter
  checker", a "Rules" list with three policy lines, a "Tone" selector, and a
  "Deploy" teal button. Different from 2.4c.
- Decision:

### 2.6 Regulatory standards cards (4)

#### 2.6a Disclosure review
- **Where:** `src/data.js:66`, scene `TrafficLight`
- **Now:** document with red / amber / green bands and three reviewer rows.
  Good concept, only one that reads clearly. Keep.
- **Build spec (polish):** add labels "High", "Medium", "Low" on the three
  bands and a green "Signed off" chip on the last row.
- Decision:

#### 2.6b Regulatory search
- **Where:** `src/data.js:67`, Lottie `regulatory-search.json`
- **Now:** document "Agreement Doc." with a glossy magnifier showing "8 Mar 26".
  Blue gradient 3D style doesn't match the flat SVGs beside it.
- **Prompt (Lottie or still, 16:9, light):**
  ```
  Flat style. Search bar "Does s.912A require..." at top. Below, a legislation
  page "Corporations Act 2001, s.912A" with one paragraph highlighted teal.
  A citation card slides up: "Answer, cited: s.912A(1)(a)" with a teal source
  pin. Optional: small flags/chips "AUSTRAC", "SEC", "FCA" in the corner.
  ```
- Decision:

#### 2.6c Automated client onboarding
- **Where:** `src/data.js:68`, Lottie `client-onboarding.json`
- **Now:** a generic person icon on a card. Weakest graphic on the page.
- **Prompt (Lottie or still, 16:9, light):**
  ```
  Flat style. Investor application card "New investor: J & M Smith" with
  three check rows that tick in sequence: "ID verified" (green), "AML
  screen clear" (green), "Source of funds" (amber, "needs review"). A small
  uploaded-ID thumbnail sits top-right. A teal source pin on the amber row.
  ```
- Decision:

#### 2.6d Multi-entity compliance
- **Where:** `src/data.js:69`, Lottie `multi-entity-compliance.json`
- **Now:** navy folder stuffed with documents, faint illegible "Opie" emboss.
- **Prompt (Lottie or still, 16:9, light):**
  ```
  Flat style. One workflow card "Annual PDS refresh" at top. Three entity
  cards below ("Fund A", "Fund B", "AFSL 1") each receiving a copy of the
  workflow with its own progress bar (teal) and an "Audit trail" chip.
  A roll-up card at the bottom reads "3 of 3 entities reported".
  ```
- Decision:

### 2.7 Team workflow diagram (6 team variants)
- **Where:** `src/components/TeamWorkflow.jsx`, one per team in `src/data.js`
- **Now:** three input tiles, an "Opie" hub, an output card with checklist.
  Clean and on-brand. The tiles use the same generic document icon for every
  input regardless of team.
- **Build spec:** give each input tile a distinct glyph (statement = table
  rows, legislation = book, KYC = ID card, workflow = list with check, tool =
  plug) and colour the output checklist ticks teal. No image needed.
- Decision:

### 2.8 Security cards (2)

#### 2.8a Advanced encryption
- **Where:** `src/data.js:130`, scene `Shield`
- **Now:** shield with padlock; dashed lines float unattached on both sides.
- **Build spec:** connect the dashed lines to two labelled endpoints ("Browser"
  left, "Opie vault" right), animate a teal dot along them, label the shield
  "AES-256".
- Decision:

#### 2.8b Isolated storage
- **Where:** `src/data.js:131`, scene `Vault` (same as 2.4b)
- **Build spec:** two separate boxes side by side labelled "Knowledge base"
  and "Vault files" with a solid wall between them and a padlock on the vault
  box only, so it depicts isolation rather than reusing the folder scene.
- Decision:

### 2.9 Final CTA product screenshot
- **Where:** `src/components/FinalCTA.jsx:17`, `product-workspace.png`
- **Now:** 2058 x 1170 inbox screenshot, cropped to 340 px tall, cut mid-row.
  Shows the inbox, not the features the page just described.
- **Prompt (screenshot brief, 2880 x 1600, light):**
  ```
  Capture the review-table view with a document set loaded, six rows
  visible, one row expanded showing the source excerpt with a teal pin,
  sidebar visible, window at 2x device pixel ratio. No cropping needed.
  ```
- **Fix in CSS:** remove the fixed 340 px crop, use `aspect-ratio` so the
  bottom edge is the window edge.
- Decision:

---

## 3. Platform pages (7)

All hero shots render in `src/components/FeaturePage.jsx:41`; split items at
`:89`. Labels from `src/data.js`.

| Page | Hero label | Scene now | Split-item labels and scenes |
|---|---|---|---|
| overview | platform overview | Dashboard | none |
| vault | vault workspace | Vault | none |
| compliance | compliance dashboard | Dashboard | customer risk profile (Kyc), obligation calendar (Calendar), multi-entity audit trail (EntityTree) |
| playbooks (rename to workflows) | playbook editor | EntityTree | none |
| integrations | integrations hub | Integrations | connected systems (Integrations), automation triggers (Integrations), permissioned access (Vault) |
| assistant | assistant chat | Citation | none |
| tasks-calendar | task calendar | Calendar | task ownership (Calendar), team calendar (Calendar), escalation routing (TrafficLight) |

Problems: the integrations page shows the same hub scene three times; the
tasks page shows the calendar three times; overview and compliance share the
dashboard.

### 3.1 Platform overview hero
- **Build spec:** a composite "workspace" scene: sidebar on the left, and four
  quadrants (review table, vault tree, calendar strip, agent node) so it reads
  as "everything in one place". Unique to this page.
- Decision:

### 3.2 Workflow editor hero
- **Build spec:** a vertical step list ("Trigger: new PDS uploaded", "Agent:
  extract disclosures", "Agent: traffic-light review", "Human: sign-off",
  "Log evidence") with a teal connector and an "Add step" ghost button. Agent
  steps carry a small agent glyph, the human step an amber person glyph, so
  the picture shows workflows made of agents plus people. Not the entity tree.
- Decision:

### 3.3 Integrations split items
- **Build spec:** `connected systems` keeps the hub; `automation triggers`
  becomes an "if this, then that" two-card scene ("New file in Drive" then
  "Start KYC workflow"); `permissioned access` becomes a user list with
  role chips.
- Decision:

### 3.4 Tasks and calendar split items
- **Build spec:** `task ownership` becomes a task card with an assignee avatar
  and due date; `team calendar` keeps the calendar; `escalation routing`
  keeps the traffic light but with an arrow to a named reviewer.
- Decision:

---

## 4. Solution pages (6)

| Page | Hero label | Scene now | Split-item labels and scenes |
|---|---|---|---|
| investment-funds | fund compliance workspace | EntityTree | disclosure review (TrafficLight), multi-entity workspace (EntityTree), investor reporting (Dashboard) |
| accountants-advisors | reconciliation workspace | ReviewTable | none |
| legal-teams | legal research workspace | Citation | legislation search (Citation), contract review (ReviewTable), lawyer review (ReviewTable) |
| compliance-officers | compliance officer dashboard | Dashboard | none |
| financial-institutions | financial institution risk workspace | Dashboard | none |
| enterprise-operations | enterprise operations workspace | Agents | none |

Problems: legal-teams shows the review table twice in a row and the citation
scene twice; three solution heroes are the same dashboard.

### 4.1 Reconciliation workspace (accountants)
- **Build spec:** two columns "Bank statement" and "Ledger" with matched rows
  joined by thin lines, one unmatched row highlighted amber with a teal pin,
  a total row at the bottom in green "Reconciled".
- Decision:

### 4.2 Lawyer review (legal, third split item)
- **Build spec:** a draft document on the left with two tracked-change bands,
  a reviewer card on the right "Approve / Request changes" with the approve
  button in teal and a signature line.
- Decision:

### 4.3 Financial institution risk workspace
- **Build spec:** a risk heat grid (4 x 3 cells in green / amber / red tints)
  with a side list of three "Open alerts" and a teal source pin on one cell.
- Decision:

### 4.4 Compliance officer dashboard
- **Build spec:** keep the dashboard but make it the obligations variant: a
  "Due this month" list with dates, a donut "92 percent on time", and a
  "Last audit evidence" card.
- Decision:

### 4.5 Investor reporting (funds, third split item)
- **Build spec:** a report cover card "Quarterly investor update" with a
  "Generated from 14 sources" caption and a send-to list of three entities.
- Decision:

---

## 5. Customers

### 5.1 Story covers (4)
- **Where:** `src/caseStudies.js` `cover`, rendered in
  `src/pages/CustomersPage.jsx:42` and twice in `CaseStudyPage.jsx:37,87`
- **Now:** two-colour gradient tiles with the company name in a serif. Look
  like placeholders. The case study hero repeats the same tile twice on one
  screen.
- **Prompt (one per story, 16:9, light; swap the subject line):**
  ```
  Abstract cover illustration, flat style, lavender-to-white background with
  one large teal shape. Subject: [Harbourline: a stack of IM documents with
  traffic-light bands] / [Kestrel and Marsh: a legislation page with a cited
  section highlighted] / [Brightwater: two ledgers with matched rows]. Small
  indigo wordmark of the fictional company bottom-left. No photos.
  ```
- **Also:** drop the second logo tile in the case-study sidebar.
- Decision:

### 5.2 Case study figures (5)
- **Where:** `src/caseStudies.js` `image.shot`, rendered in
  `src/pages/CaseStudyPage.jsx:134`
- **Now:** `review table`, `disclosure review table`, `multi-entity
  playbooks` (rename to workflows), `regulatory search`, `statement reconciliation`. Three resolve
  to the same ReviewTable scene; captions describe specifics the generic
  scene doesn't show.
- **Build spec:** reuse the labelled variants from 2.2a, 2.2d, 2.6b and 4.1 so
  each figure matches its caption. The `todo-customer` story still has a
  TODO caption and should be hidden until it's real.
- Decision:

---

## 6. Technical fixes (no graphic needed)

- Add `loading="lazy"` and `decoding="async"` to the bento images and the
  final CTA screenshot.
- Defer Lottie loading until the card enters the viewport (IntersectionObserver
  in `LottiePlayer.jsx`); the five files total about 1.5 MB.
- Give Lotties a visually hidden text alternative instead of `aria-hidden`.
- Bento `alt` text currently repeats the visible title; describe the image
  instead.
- Decision:
