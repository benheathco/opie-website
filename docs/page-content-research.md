# Opie Website Page Content Research

Research date: 2026-07-18

## Source Material Read

Local product and strategy docs:

- `/Users/nickmoellers/Repos/Opie/reggie_saas/docs/What Is Opie?.md`
- `/Users/nickmoellers/Repos/Opie/reggie_saas/docs/opie/What-Is-Opie.md`
- `/Users/nickmoellers/Repos/Opie/reggie_saas/docs/opie/Design Principles.md`
- `/Users/nickmoellers/Repos/Opie/reggie_saas/docs/opie/Brand Notes.md`
- `/Users/nickmoellers/Repos/Opie/reggie_saas/docs/Opie - Primary Business Use Case.md`
- `/Users/nickmoellers/Repos/Opie/reggie_saas/docs/Pricing Strategy.md`
- `/Users/nickmoellers/Repos/Opie/reggie_saas/reports/product_strategy.md`
- `/Users/nickmoellers/Repos/Opie/reggie_saas/reports/market_research.md`

Current website content structure:

- `src/data.js` drives platform pages and solution pages.
- Existing platform pages: Vault, Workflows, Compliance, Playbooks, Opie Assistant, Tasks & Calendar.
- Existing solution pages are generated from the homepage team list.

Official sources checked for date-sensitive regulatory claims:

- AUSTRAC, "Our regulatory expectations and priorities": https://www.austrac.gov.au/industry-and-business/about-amlctf-reforms/our-regulatory-expectations-and-priorities
- AUSTRAC, "New reporting regime now in force": https://www.austrac.gov.au/new-reporting-regime-now-force
- AUSTRAC, "Newly regulated businesses: get ready for the reforms": https://www.austrac.gov.au/newly-regulated-businesses-get-ready-reforms
- AUSTRAC, "Your obligations": https://www.austrac.gov.au/industry-and-business/obligations-and-guidance/your-obligations
- AUSTRAC, "Changes to transaction reporting from 1 July 2026": https://www.austrac.gov.au/changes-transaction-reporting-1-july-2026
- ASIC, "AFS licensee obligations": https://www.asic.gov.au/for-finance-professionals/afs-licensees/afs-licensee-obligations/
- ASIC, "Review of managed fund compliance plans": https://asic.gov.au/about-asic/news-centre/articles/review-of-managed-fund-compliance-plans-failing-to-plan-is-planning-to-fail/

## Core Positioning

The strongest positioning from the docs is:

> Opie is the operational intelligence platform for regulated teams that need AI to do work, assign exceptions to humans, and prove every decision later.

The sharper commercial version:

> Regulated-industry AI that closes the compliance loop.

Supporting pillars:

- One operational system for tasks, documents, approvals, AI agents, and audit evidence.
- Every task has an owner: a staff member or an AI agent.
- Every AI action is traceable, cited, permissioned, and approval-gated when risk requires it.
- Agents use the right context layer: personal knowledge, workspace/company knowledge, curated knowledge bases, and source documents.
- Compliance workflows are not a reporting afterthought. They are the execution model.
- Australia-specific wedge: AFSL, AUSTRAC, AML/CTF, AustLII legal research, GreenID KYC, multi-entity compliance plans.

Avoid leading with "Operational Intelligence Engine" in hero copy. Use it as supporting language once the value is clear.

## Regulatory Facts To Reflect

These are the verified, current facts as of 2026-07-18:

- Tranche 2 AML/CTF obligations commenced on 2026-07-01 for newly regulated sectors including legal services, accounting, real estate, conveyancing, and precious stones/metals.
- Enrolment for newly regulated sectors opened on 2026-03-31.
- Newly regulated businesses must enrol with AUSTRAC by 2026-07-29.
- Newly regulated businesses must meet obligations including AML/CTF programs, customer due diligence, suspicious matter reporting, and record keeping.
- AUSTRAC expects newly regulated businesses to have an AML/CTF program, an AML/CTF compliance officer, staff training, and readiness to report suspicious matters.
- AUSTRAC records guidance points to records usually being kept for 7 years.
- ASIC frames AFS licensee obligations around conduct and disclosure, financial services provision, responsible manager competence, representative training and supervision, compliance and risk management, adequate resources, and dispute resolution/compensation arrangements.
- ASIC's 2025 managed fund compliance plan review is useful context for the AFSL page: ASIC said compliance plan adequacy is fundamental and identified poor practice across reviewed plans.

Important copy update: do not say Tranche 2 is "coming" or "preparing for July 2026" unless the page is intentionally historical. The correct framing now is "new obligations are in force" and "firms are moving from starter program to operating evidence."

## Claims To Avoid Or Qualify

- Do not claim SOC 2 or ISO 27001 certification unless certification exists. Safer: "supports SOC 2 and ISO 27001 control evidence" or "built with access control, monitoring, audit logging, and policy evidence."
- Do not publish "cut review cycles by up to 80%" without a customer proof point. Safer: "reduce manual review time" or "move routine review work out of spreadsheets and inboxes."
- Do not overstate automatic regulatory compliance. Safer: "helps teams manage, evidence, and review obligations" and "keeps humans in approval loops."
- Do not use competitor pricing or valuation claims on public pages unless refreshed from primary/current sources.
- Confirm current GreenID/Sumsub availability before naming both as live integrations.
- Confirm AustLII access terms before calling it an integration in public copy. "AustLII-grounded research workflow" is safer than implying a formal partnership.

## Recommended Additional Pages

### `/platform/overview`

Reference pattern checked: Fluency platform overview, `https://usefluency.com/features/overview`.

Useful structure from the reference:

- Hero that explains the whole platform in one sentence.
- Three core pillars.
- Proof/summary stats.
- Audience blocks for leaders.
- CTA.

Opie-specific adaptation:

- Hero: "Engineered for every regulated workflow."
- Pillars: Discover, Automate, Prove.
- Discover = personal knowledge, workspace/company knowledge, curated KBs, vault files and captures.
- Automate = playbooks, workflows, integrations, agents and task ownership.
- Prove = audit trail, evidence links, review-table verification, human approvals and completion records.
- Audiences: operations, compliance, legal/research, finance/fund teams.

Avoid copying Fluency's "Fortune 500" enterprise claims. Opie's sharper buyer is regulated mid-market and professional services teams that need source-backed AI and evidence trails.

### `/solutions/afsl-compliance`

Primary audience: Australian fund managers, responsible entities, AFSL holders, portfolio operations, CCOs.

Hero angle:

> AFSL compliance work, tracked from obligation to evidence.

Page promise:

Opie replaces obligation spreadsheets, email evidence chasing, and manual regulatory research with a single system for recurring tasks, document review, KYC evidence, and audit-ready completion records.

Key sections:

- Obligation calendar: daily, monthly, quarterly, annual obligations with owners, due dates, and escalation.
- Evidence chain: documents, AI outputs, human approvals, and completion notes tied to each obligation.
- Disclosure review: PDS, FSG, TMD, IM, and marketing material review with risk flags.
- Regulatory research: ASIC/AUSTRAC questions answered with cited sources from the team's knowledge base and legal research tools.
- Multi-entity oversight: one workspace across funds, licences, schemes, and related entities.

Proof hooks from docs:

- Product docs reference a Maxiron-style 123-obligation AFSL plan as the standard library direction.
- Product strategy identifies the mid-size Australian investment fund as the sharpest ICP.
- ASIC guidance supports the need for compliance, risk management, disclosure, adequate resources, and managed fund compliance plan quality.

### `/solutions/tranche-2-aml-ctf`

Primary audience: legal practices, accounting firms, real estate/conveyancing businesses, precious metals/stones dealers.

Hero angle:

> Run your AML/CTF program now that Tranche 2 is in force.

Page promise:

Opie helps newly regulated businesses turn AUSTRAC starter-program work into an operating system: client due diligence, staff tasks, suspicious matter review, records, and evidence.

Key sections:

- Program workspace: keep AML/CTF program policies, risk assessments, training records, and reviews together.
- CDD workflow: collect client information, assign risk, record verification steps, and route exceptions.
- Suspicious matter review: detect unusual client or transaction behaviour, draft review notes, and preserve decision evidence.
- Record keeping: retain CDD, program, and transaction evidence with source links and audit history.
- Staff training and tasking: create recurring staff training and review tasks from program requirements.

Current date-sensitive framing:

- Obligations started on 2026-07-01.
- Enrolment is open and newly regulated businesses have a 2026-07-29 enrolment deadline.
- AUSTRAC expects effort and operation, not a one-time template download.

### `/solutions/legal-research`

Primary audience: boutique law firms, financial services lawyers, compliance/legal teams.

Hero angle:

> Australian legal research with cited answers and an audit trail.

Page promise:

Opie helps lawyers and compliance teams research legislation, cases, regulator guidance, contracts, and internal knowledge from one workspace, with citations preserved for review.

Key sections:

- AustLII-grounded research workflow: plan, discover, rank, digest, fetch evidence, synthesise, verify.
- Contract review: extract key clauses, compare against standards, and cite every finding.
- Regulatory memo output: turn research into partner/client-ready summaries with source references.
- Knowledge base RAG: combine public legal sources with private firm documents.
- Human review: AI drafts and cites; lawyers approve and refine.

Claims to keep careful:

- Do not promise legal advice.
- Position as research acceleration and evidence management, not replacement of lawyer judgment.

### `/solutions/investor-onboarding-kyc`

Primary audience: fund managers, responsible entities, private funds, corporate advisers.

Hero angle:

> Investor onboarding with KYC, risk, and evidence in one flow.

Page promise:

Opie turns investor onboarding into a repeatable workflow: collect information, run checks, screen risk, approve exceptions, and retain the evidence trail.

Key sections:

- CDD intake: collect investor and beneficial ownership information.
- Identity verification: integrate electronic verification where available.
- PEP/sanctions/adverse media: route risk findings to review.
- Approval gates: human sign-off before onboarding outcomes are final.
- Exportable onboarding record: retain all evidence, decisions, timestamps, and reviewer notes.

### `/platform/audit-trail`

Primary audience: CCOs, operations leaders, enterprise buyers.

Hero angle:

> Audit trail is the execution model.

Page promise:

Opie records the chain of work as it happens: task creation, file access, AI reasoning, approvals, escalations, and completion evidence.

Key sections:

- Immutable completion records: completions are superseded, not silently edited.
- Human approval gates: high-risk AI outputs pause for review.
- Source provenance: AI findings link to source documents and retrieved context.
- Export-ready evidence: prepare regulator, board, or auditor packs from the same system of record.
- Seven-year retention stance for compliance records.

### `/platform/integrations`

Primary audience: operators and buyers comparing Opie to point solutions.

Hero angle:

> Bring compliance work to the systems your team already uses.

Page promise:

Opie connects to communication, document, finance, and CRM systems so evidence and tasks do not stay buried in inboxes or shared drives.

Key sections:

- Slack/Teams: approvals, reminders, and task updates where teams work.
- Xero: accounting records, invoices, BAS/reconciliation context for finance and compliance workflows.
- Gmail/Outlook: capture correspondence as evidence and trigger follow-up tasks.
- Drive/SharePoint/Dropbox: ingest files into vault and knowledge base workflows.
- Human-confirmed write-backs: external systems update only after approval.

## Current Platform Page Expansion Notes

### Vault

Current page is directionally right but too generic. Emphasise:

- Vault as compliance evidence storage, not just file storage.
- Structured metadata over folder conventions.
- Signed URLs, team/project/file permissions, and traceable access.
- Document-to-knowledge-base pipeline with citations.

### Workflows

Emphasise:

- Workflows are the durable execution layer, not the reusable template layer.
- They run long-lived processes from trigger to completion across people, AI agents, integrations, and approvals.
- AI can execute routine steps, but human approval gates write-backs and high-risk outcomes.
- Workflows should create tasks, evidence records, retries, error history, and completion history.
- Playbooks define the policy-driven automation, but workflows execute the run.

### Compliance

Emphasise:

- Obligation calendar, CDD, SMR/TTR review, compliance officer assignments, training records, and reporting evidence.
- Multi-entity view for fund managers and professional services firms.
- Current AUSTRAC language: obligations are now active for Tranche 2 entities.

### Playbooks

Emphasise:

- Playbooks turn business systems and repeatable processes into policy-driven automations.
- They encode policies, SOPs, operating rules, owners, prompts, evidence requirements, and human-in-the-loop approval gates.
- They should cover any repeatable business process: onboarding, reviews, approvals, reporting, reconciliations, incident response, compliance obligations, disclosure reviews, and annual reports.
- Playbooks should sound like policy-driven operating automation, not the workflow runtime itself and not only compliance templates.
- When a playbook runs, Opie should turn it into tasks and workflows across people, AI agents, due dates, evidence, approval gates, and integrations.

### Opie Assistant

Emphasise:

- Specialist agents: compliance, legal research, due diligence, document analysis, finance.
- Agents are permissioned and cited.
- Opie routes work to agents, but tasks and approvals remain visible to the team.

### Tasks & Calendar

Emphasise:

- Every obligation and AI action becomes accountable work.
- A single calendar for human tasks, AI tasks, due dates, reviews, and overdue escalations.
- Completion is tied to evidence, not just a checkbox.

### Integrations

Emphasise:

- Opie should not feel like an isolated upload tool. It connects to the systems where company context already lives.
- Integrations provide documents, messages, finance records, calendar events, approvals, and operational context to agents, workflows, and playbook runs.
- Public examples can include Slack, Teams, Gmail, Outlook, Xero, document stores, cloud drives, webhooks, and business apps where confirmed.
- Agents should be framed as permissioned users of integrations: governed access, approval gates, and audit records.
- Integrations are especially important for company memory: connected sources can become workspace knowledge when enabled and governed.

## Solution Navigation Recommendation

The current generated solution pages are broad team labels. Better nav would be:

- AFSL Compliance
- Tranche 2 AML/CTF
- Legal Research
- Investor Onboarding & KYC
- Compliance Officers
- Accounting & Advisory

Keep "Investment funds", "Legal teams", and "Financial institutions" on the homepage as audience cards, but make the nav pages problem-led. Buyers search for the problem they have, not just their job title.

## Page Copy Snippets

AFSL page:

> Track obligations, evidence, and approvals across every fund and entity. Opie gives compliance teams one place to manage recurring obligations, disclosure reviews, KYC evidence, and regulatory research, with an audit trail that survives the next review.

Tranche 2 page:

> Tranche 2 AML/CTF obligations are now in force. Opie helps newly regulated firms move from starter program to daily operation: CDD workflows, suspicious matter review, staff training tasks, records, and evidence in one system.

Legal research page:

> Ask complex Australian legal and regulatory questions and get cited answers your team can review. Opie combines your internal knowledge base with specialist research workflows, preserving the sources behind every answer.

Audit trail page:

> Opie records the work as it happens. AI findings, human approvals, file access, task changes, escalations, and evidence links are captured in a traceable history built for regulated teams.

Tasks page:

> Every task has an owner, a due date, and evidence. Assign work to people or AI agents, route exceptions for approval, and keep compliance deadlines visible across the whole team.

## Next Implementation Step

Update `src/data.js` so platform and solution pages use this researched positioning. Then update `FeaturePage.jsx` if needed to support page sections beyond the current hero plus three bullets.

## Harvey AI Vault Research

Research date: 2026-07-18

Sources checked:

- Harvey Vault product page: https://www.harvey.ai/platform/vault
- Harvey Vault help article, updated 2026-07-01: https://help.harvey.ai/articles/vault
- Harvey Review Tables help article, updated 2026-07-01: https://help.harvey.ai/articles/ask-questions-directly-in-review-tables
- Harvey workflow source embedding help article, updated 2026-06-02: https://help.harvey.ai/articles/embed-files-and-knowledge-sources-in-workflow-builder
- Harvey Advanced Vault Controls release note, 2026-07-07: https://help.harvey.ai/release-notes/advanced-vault-controls
- Harvey Access Control & Permission Management help article, updated 2026-06-02: https://help.harvey.ai/articles/access-control-and-permission-management
- Harvey Vault Knowledge Bases release note, 2025-03-26: https://help.harvey.ai/release-notes/introducing-vault-knowledge-bases
- Harvey Assistant product page: https://www.harvey.ai/platform/assistant

### What Harvey Vault Is

Harvey positions Vault as a secure workspace for large-scale document organisation, review, and analysis. Its public product language is: organise thousands of documents, extract insights with queries, compare data in structured review tables, and use vault content across Assistant, Workflows, Mobile, Word, and Outlook.

Current published limits and capabilities:

- Up to 100,000 documents/files per vault.
- 100 GB storage per vault.
- Supported file types include PDF, DOCX, RTF, TXT, MD, EML, MSG, PPT/PPTX, HTML, spreadsheets, PST files, and common code files.
- Review tables can include up to 10,000 Vault files.
- Assistant threads can support 10,000 Vault files, or 15,000 within a Shared Space.
- Vaults can include files, email correspondence, queries, and DMS-synced content.
- DMS integrations include iManage, SharePoint, and Google Drive.
- Knowledge bases are curated repositories of internal expertise such as precedents, templates, and playbooks.
- Vaults can be embedded into workflows so the workflow stays current as files are added, removed, or updated.
- Review table cells include reasoning, sentence-level citations, verification status, flags, assignment, and export.
- Owners can restrict view-only users from downloading files, duplicating files, or seeing review table prompts.
- Admins can manage role and user permissions, though Harvey docs note individual workflow access control is not currently supported.

### Similarity To Opie Vault

Opie and Harvey overlap strongly on:

- Secure document workspace.
- Large-set document analysis.
- Query over documents with citations.
- Knowledge bases from curated internal documents.
- Review/extraction tables for structured comparison.
- Workflow use of vault content.
- Permissioned sharing.
- DMS/cloud document source ingestion.
- Legal/compliance document review use cases.

The current Opie website should not describe Vault only as "secure file storage." That undersells it and makes Harvey look materially more advanced. Opie Vault needs to be framed as the document intelligence and evidence layer for the whole compliance operating system.

### Harvey's Strongest Vault Messaging

Harvey's public page makes four things very clear:

- Scale: thousands of documents, with published 100,000-file vault capacity.
- Structured extraction: review tables are central, not a side feature.
- Knowledge reuse: knowledge bases turn precedents/templates/playbooks into reusable firm knowledge.
- Cross-product connection: Vault feeds Assistant, Workflows, Word, Outlook, and Mobile.

Harvey also backs the page with proof-style metrics, including extraction accuracy and customer time-reduction claims. Opie should avoid copying this unless it has its own benchmarks, but the structure is useful: show a measurable document workflow outcome, then explain how Vault supports it.

### Where Opie Can Differentiate

Harvey's Vault is legal-work-product centric: M&A due diligence, litigation prep, precedent extraction, drafting, and legal knowledge management.

Opie's differentiation should be compliance-operation centric:

- Vault content is not just source material for answers. It becomes compliance evidence.
- Files connect to obligations, tasks, CDD records, risk reviews, suspicious matter assessments, disclosure reviews, and approval gates.
- AI outputs are tied to human approval workflows and immutable completion records.
- Opie is strongest where the buyer needs to prove that a regulated process ran correctly, not just extract terms from a document set.
- Australia-specific regulatory context matters: AFSL, ASIC, AUSTRAC, AML/CTF, Tranche 2, AustLII-grounded research, GreenID-style KYC evidence.
- Metadata should be framed as regulatory context: jurisdiction, act, guideline, obligation, entity, client, risk type, evidence category.

Sharp contrast:

> Harvey helps legal teams review large document sets and produce work product. Opie helps regulated teams turn documents into evidence-backed compliance work.

Another version:

> Harvey's Vault is built around review. Opie's Vault should be positioned around review plus operational accountability: every finding can become a task, approval, obligation record, or evidence link.

### Website Copy Implications For Opie Vault

Current Opie Vault page should be rewritten around these sections:

- Secure evidence vault: store documents, emails, policies, client records, and review outputs with team/project/file permissions.
- Document intelligence: extract fields, summaries, clauses, entities, dates, risks, and obligations into structured outputs.
- Review tables: analyse bulk files, compare documents side-by-side, verify extracted data, flag exceptions, and export working papers.
- Knowledge bases: publish approved policy libraries, precedents, regulatory materials, and internal playbooks for use by agents.
- Collaborative notes: draft working notes, review summaries, and decision records together, then index them as searchable context where access rules permit.
- Personal and workspace knowledge: private notes stay personal; team policies, decisions, files, and shared notes become company context for agents.
- Collaborative review tables: support team review of extracted cells, columns, row state, verification, exceptions, and presence.
- Compliance metadata: tag files by entity, jurisdiction, obligation, risk area, client, and review status.
- Workflow connection: turn document findings into tasks, approval requests, obligation completions, or audit evidence.
- Source-cited answers: every answer links back to the source document and context used.
- Browser evidence capture: capture web pages into Vault as evidence bundles with screenshots, self-contained HTML, PDF reports, source URLs, timestamps, capture IDs, and SHA-256 hashes.

Potential page hero:

> A secure evidence vault for every document, decision, and review.

Supporting copy:

> Store and analyse the files that drive regulated work: disclosure documents, client records, policies, contracts, emails, and regulator evidence. Opie turns them into searchable knowledge, structured review tables, and audit-ready evidence linked to the tasks and obligations they support.

Potential bullets:

- Structured review at scale: Extract key terms, risk indicators, dates, parties, and obligations across document sets.
- Knowledge bases your agents can use: Publish approved policies, precedents, guidance, and playbooks so AI answers stay grounded in firm-approved material.
- Personal and workspace knowledge: Let agents retrieve private user notes, workspace decisions, team files, and curated company context without mixing permission boundaries.
- Evidence tied to work: Link every file, answer, review note, and approval to the task, obligation, client, or entity it supports.
- Permissioned by design: Control access at team, project, folder, and file level, with traceable source access.

### Website Copy Implications For Platform Pages

The Harvey comparison also strengthens these Opie pages:

#### Workflows

Add a "vault-aware workflows" section:

> Trigger a workflow from a file upload, document review table, client record, or compliance obligation. Opie carries the source evidence through every AI step and human approval.

#### Playbooks

Make this broader than compliance:

> Turn business systems and repeatable processes into policy-driven automations. Playbooks connect people, AI agents, documents, due dates, integrations and human-in-the-loop approvals so the same process runs the same way every time.

#### Integrations

Add a platform page:

> Connect Opie to Slack, Teams, email, calendars, finance tools, document stores and business systems. Use integrations to bring company context into agents, trigger workflows or playbook runs, route approvals and preserve evidence from source systems.

#### Opie Assistant

Add a "sources and evidence" section:

> Ask questions over vaults, knowledge bases, review tables, and regulatory sources. Opie shows the evidence behind each answer and can turn the result into a task or approval request.

#### Compliance

Add a "documents become records" section:

> A disclosure document, client ID file, policy, email, or transaction report can be linked directly to the obligation it supports.

#### Audit Trail

Add a "source-to-decision chain" section:

> Opie preserves what the AI reviewed, what it extracted, what the human approved, and which evidence supported the final record.

### Do Not Compete Head-On With Harvey On

- BigLaw generic legal AI.
- M&A-only document review.
- "100,000 files per vault" scale claims unless Opie has equivalent tested limits.
- Word/Outlook legal drafting workflows unless Opie has parity.
- Premium legal database partnerships unless confirmed.

### Compete Head-On With Harvey On

- Secure document intelligence.
- Review tables/extraction workflows.
- Knowledge bases for internal policies and precedents.
- Permissioned, cited AI over private documents.

### Position Around A Different Buyer

Harvey buyer:

- BigLaw partner, associate, in-house legal team, transaction/litigation team.
- Job to be done: produce legal work faster from large document sets.

Opie buyer:

- Compliance officer, AFSL responsible manager, fund operations leader, AML/CTF compliance officer, professional services firm principal.
- Job to be done: operate a regulated process, keep deadlines visible, record decisions, and prove compliance.

### Recommended Vault Page Angle

Best headline:

> Turn documents into compliance evidence.

Best subhead:

> Opie Vault stores, analyses, and connects the documents behind regulated work. Extract structured findings, query approved knowledge bases, and link every file to the task, obligation, client, or approval it supports.

Best differentiator block:

> Review is only the start. In Opie, a document finding can become a task, an approval request, a CDD record, an obligation completion, or an audit evidence link.

## Opie Browser Extension / Evidence Capture Research

Research date: 2026-07-18

Local source docs checked:

- `/Users/nickmoellers/Repos/Opie/reggie_saas/browser-extension/opie-capture/README.md`
- `/Users/nickmoellers/Repos/Opie/reggie_saas/docs/evidence-capture/specs/2026-06-02-opie-capture-evidence-bundle-design.md`
- `/Users/nickmoellers/Repos/Opie/reggie_saas/docs/evidence-capture/specs/2026-06-06-evidence-grade-capture-design.md`
- `/Users/nickmoellers/Repos/Opie/reggie_saas/docs/superpowers/specs/2026-07-16-evidence-capture-attribution-design.md`
- `/Users/nickmoellers/Repos/Opie/reggie_saas/docs/superpowers/plans/2026-07-18-evidence-extension-plan2.md`

### What Exists

Opie has a Chromium MV3 browser extension under `browser-extension/opie-capture/`. Its public-facing role is to capture the current tab as an evidence bundle and upload artifacts into Opie Vault through existing project and vault-file APIs.

Current extension capabilities from the README:

- Captures a screenshot and/or a self-contained HTML file.
- Full bundle mode creates screenshot + self-contained HTML + PDF evidence report.
- Files upload to `POST /opie/api/v1/vault-files/` using an Opie API key.
- Captures land in a user-selected destination project and are organised into per-site folders named after the page hostname.
- Each capture first registers an `EvidenceCapture` envelope through `POST /opie/api/v1/evidence-captures/`.
- The envelope records source URL, page title, capture timestamp, extension version, user agent, browser timezone, viewport, and expected artifacts.
- Subsequent vault uploads carry `evidence_capture` and `artifact_kind` so the server can attach artifacts to the capture event.
- Artifact kinds include `screenshot`, `html`, and `provenance_pdf`.
- Screenshots are full-page scroll-and-stitch PNGs stamped with source URL, UTC timestamp, and capture ID.
- The extension computes SHA-256 hashes in-browser and verifies them against the server-computed `VaultFile.file_hash`.
- The PDF evidence report binds source URL, capture timestamp, browser/user agent, embedded screenshot, and SHA-256 hashes.
- If evidence envelope registration fails, artifacts still upload and hash verification still runs, but the UI flags the capture as unattached/provenance attach failed.

This is a meaningful Vault differentiator: Opie does not only ingest documents that already exist; it can create provenance-bearing web evidence directly into the Vault.

### What Is Planned / Should Not Be Overstated

The evidence-grade capture docs are explicit that some higher-assurance features are planned or future work:

- Independent trusted timestamping such as RFC-3161 / OpenTimestamps.
- Third-party digital signatures.
- KMS counter-signing.
- Retention-locked/WORM storage for promoted evidence.
- Full chain-of-custody ledger for later access/transfer events.
- Network-layer provenance such as TLS certificate chain and HTTP headers.
- HAR capture and client-side transaction/address extraction.
- Firefox build.

Marketing copy should not claim "court-admissible", "tamper-proof", "self-authenticating", "trusted timestamped", or "WORM retained" unless those features are confirmed live for the deployed product.

Safer public language:

- "evidence bundles"
- "provenance-bearing captures"
- "source URL, timestamp, capture ID and hash verification"
- "designed for audit and evidence workflows"
- "captures web pages directly into Vault"

Avoid:

- "court-grade" unless legal/product explicitly approves it for public marketing.
- "tamper-proof" for the current extension.
- "proves authenticity" for SHA-256 verification. The docs say the client/server hash match proves transit integrity, not authenticity or capture time.

### Website Implications

Add this to the Vault page, not only to a future evidence page. The browser extension strengthens Vault as the source-of-evidence layer:

> Capture web pages directly into Vault as evidence bundles with screenshots, self-contained HTML, PDF reports, source URLs, timestamps, capture IDs, and SHA-256 hashes.

Add this to the Audit Trail page if/when created:

> Opie preserves the capture event separately from the file, so the system can remember where the evidence came from even if a vault file is later moved or removed.

Add this to a future `Evidence Capture` page:

Hero:

> Capture web evidence directly into your compliance vault.

Subhead:

> Opie Capture turns a browser page into an evidence bundle: screenshot, self-contained HTML, provenance PDF, source URL, UTC timestamp, capture ID and hash verification, uploaded directly into the project where the evidence belongs.

Sections:

- One-click browser capture.
- Evidence bundle artifacts.
- Capture provenance envelope.
- Hash verification.
- Vault project and per-site folders.
- Compliance workflows: captured web evidence can support investigations, CDD reviews, SMR/TTR analysis, crypto attribution, invoices, receipts, and audit packs.

### Vault Positioning After Harvey + Evidence Capture Research

The strongest Opie Vault position is now:

> Vault is the evidence and document intelligence layer for regulated work.

Three-part page structure:

1. **Analyse bulk document sets**: review tables, structured extraction, cited cells, verification.
2. **Collaborate on review work**: shared notes, working papers, table verification, exceptions, and presence.
3. **Build trusted knowledge bases**: personal notes, company memory, policies, playbooks, precedents, regulator guidance, internal documents.
4. **Capture evidence at the source**: browser extension captures web pages directly into Vault with provenance metadata and hashes.

This gives Opie a clearer story against Harvey:

> Harvey Vault is strongest for legal document review and work product. Opie Vault should be strongest for compliance evidence: bulk review, knowledge reuse, source capture, task linkage, approval gates, and audit history in one system.

## Collaborative Notes And Review Tables Research

Research date: 2026-07-18

Local source docs checked:

- `/Users/nickmoellers/Repos/Opie/reggie_saas/docs/What Is Opie?.md`
- `/Users/nickmoellers/Repos/Opie/reggie_saas/docs/yjs_for_vault_analyser.md`
- `/Users/nickmoellers/Repos/Opie/reggie_saas/docs/design/y-provider/y-provider_integration.md`
- `/Users/nickmoellers/Repos/Opie/reggie_saas/docs/superpowers/specs/2026-06-05-notes-personal-kb-phase-1a-design.md`
- `/Users/nickmoellers/Repos/Opie/reggie_saas/docs/improvements/research/vault_competitive_analysis.md`

### What The Docs Support

Opie already has a collaborative document editing foundation:

- The product docs describe real-time collaborative document editing powered by Y.js / CRDT.
- The y-provider service is the collaboration backend and exposes WebSocket collaboration infrastructure through HocusPocus/Y.js.
- The docs app uses collaboration auth and y-provider integration for collaborative documents.
- Notes are treated as ambient knowledge inputs: raw notes stay intact, derived chunks/embeddings are separate, and note-derived knowledge is retrieved only where access rules allow it.

The Vault analyser/review table collaboration is described as planned wiring, not a fully proven public claim:

- `docs/yjs_for_vault_analyser.md` says the current Vault Analyser/TabularReview state is local/ephemeral and the goal is to add real-time multi-user collaboration.
- The plan reuses the existing Y.js/HocusPocus stack.
- Proposed shared state includes rows, column definitions, cells, and active-user presence.
- Acceptance criteria include two users seeing rows, columns, cell edits, live analysis output, reload persistence, and presence avatars.

### Public Copy Guidance

Safe public language:

- "collaborative notes"
- "shared working papers"
- "team review tables"
- "work through extracted findings together"
- "verify findings, flag exceptions, and keep decisions in one place"

Careful language:

- "real-time collaborative review tables" should only be used if the Y.js Vault Analyser work is confirmed live in the deployed product.
- "presence avatars" and "live synced cells" should stay out of public marketing unless implemented.

Best Vault copy:

> Upload documents, capture web evidence, draft collaborative notes, and work through review tables with your team. Every finding can be linked back to the source file and forward to the task, obligation, or approval it supports.

Best feature bullets:

- Collaborative notes: Draft research notes, review summaries, and working papers together, then make approved notes searchable for future AI-assisted work.
- Collaborative review tables: Extract structured data from bulk files, assign follow-up review, flag exceptions, and preserve the decisions made during review.
- Shared evidence workspace: Keep documents, captures, notes, AI outputs, and approval records in one permissioned project.

### Relationship To Harvey

Harvey emphasizes shared vaults, review tables, and external collaboration around legal matters. Opie should compete on team review, but frame it around regulated operations:

> Opie is not just a place to analyse files. It is where the team turns analysis into shared notes, verified findings, evidence records, and compliance tasks.

## Personal And Workspace Knowledge Bases Research

Research date: 2026-07-18

Local source docs checked:

- `/Users/nickmoellers/Repos/Opie/reggie_saas/docs/superpowers/specs/2026-06-05-notes-personal-kb-phase-1a-design.md`
- `/Users/nickmoellers/Repos/Opie/reggie_saas/docs/company-kb/company-memory-design.md`
- `/Users/nickmoellers/Repos/Opie/reggie_saas/docs/opie/What-Is-Opie.md`
- `/Users/nickmoellers/Repos/Opie/reggie_saas/docs/memory/overview.md`

### Knowledge Context Model

Opie should explain knowledge in three layers:

1. **Personal knowledge**: the user's own notes and working context. The notes spec frames this as a metadata-scoped personal KB, not a separate catalogued knowledge base. Personal notes are opt-in for retrieval and should not automatically appear in shared/team chats.
2. **Workspace/company knowledge**: team context that agents can use to answer with company awareness: shared docs, Slack threads/files, decisions, policies, playbooks, and internal references. The company-memory design describes a Company Memory KB per team, fed by enabled sources and filtered by source metadata.
3. **Curated knowledge bases**: deliberate, approved repositories such as regulatory guidance, precedents, templates, compliance policies, and playbooks.

This gives buyers the missing phrase:

> Opie agents answer with company context, not just generic model knowledge.

### Public Copy Guidance

Safe public language:

- "personal and workspace knowledge bases"
- "company context for agents"
- "private notes stay private"
- "workspace decisions, policies, files and shared notes become searchable context"
- "permission-scoped retrieval"
- "agents retrieve only what each user is allowed to see"

Avoid overclaiming:

- Do not imply every connector is auto-ingested today. The company-memory design starts with Slack messages/files and treats Drive, Gmail, Notion, Xero, etc. as future connectors.
- Do not imply personal notes are always auto-injected. The spec explicitly says personal retrieval is opt-in and not used automatically in shared/team chats.

Recommended copy:

> Opie builds context at the right scope. Private notes stay personal. Shared files, policies, decisions and working papers become workspace knowledge. Curated knowledge bases give agents approved source material for regulatory, legal and operational work.

Assistant page copy:

> Ask a question and Opie searches the right context: your personal notes when permitted, your workspace knowledge, approved knowledge bases, vault files and evidence records.

Vault page copy:

> Build personal and workspace knowledge bases from notes, documents, captures and review work, so Opie's agents understand the company context behind each task.
