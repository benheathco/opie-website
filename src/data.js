// All page copy lives here so it's easy to edit or wire to a CMS later.

export const solveFeatures = [
  { title: 'Automated document processing', desc: 'Upload files in bulk, then extract, compare and verify key details in structured review tables.', shot: 'doc processing', span: 2 },
  { title: "Search across your organisation's data", desc: 'Query notes, documents, policies and company data for structured answers with citations and full source traceability.', shot: 'search', span: 2 },
  { title: 'Human-in-the-loop verifications', desc: 'Every AI recommendation is subject to human oversight, with complete audit trails into how decisions were reached.', shot: 'verifications', span: 2 },
  { title: 'Run multi-entity playbooks', desc: 'Run policy-driven automations across multiple funds, licenses, legal entities and jurisdictions from a single workspace.', shot: 'playbooks', span: 3 },
  { title: 'Automate with integrations', desc: 'Search and seamlessly work with internal data across 50+ powerful integrations.', shot: 'integrations', span: 3 },
];

export const bentoFeatures = [
  { title: 'Work with all the best AI models within Opie', shot: 'model picker', span: 3 },
  { title: 'Generate audit-ready compliance reports in seconds', shot: 'reports', span: 3 },
  { title: 'Trustworthy results through grounded citations', shot: 'citations', span: 2 },
  { title: 'Collaborative review tables analyse bulk files at once', shot: 'review tables', span: 2 },
  { title: 'Shared notes and playbooks keep teams aligned', shot: 'collaboration', span: 2 },
];

export const stats = [
  { value: '85%', label: 'Average accuracy for AI understanding of unstructured documents' },
  { value: '2 hrs/day', label: 'Average time employees spend searching for documents and information' },
  { value: '90%', label: 'Lower human error rates compared to manual document processes' },
  { value: '60%', label: 'Reduction in compliance-related errors through automation' },
];

export const deepDives = [
  {
    title: 'Analyse bulk files with review tables',
    sub: 'Run structured extraction across document sets, compare the results side by side, and verify each finding against its source.',
    shot: 'document extraction',
    points: [
      { h: 'Bulk document analysis', t: 'Extract dates, parties, clauses, obligations, risk markers and source references across many files at once.' },
      { h: 'Citation provenance', t: 'Every AI answer links back to the exact source document and pixel location. Total traceability, no hallucinated references.' },
      { h: 'Smart document chunking', t: 'Documents are broken down intelligently: legislation by section, papers by abstract, manuals by table of contents.' },
      { h: 'RAG-powered responses', t: 'AI agents use Retrieval-Augmented Generation to ground every answer in your own private data library.' },
    ],
  },
  {
    title: 'Secure knowledge vaults for documents',
    sub: 'Unite files, notes, captures and review work into personal and workspace knowledge bases, so Opie answers with the context your company already has.',
    shot: 'knowledge vault',
    points: [
      { h: 'Hierarchical metadata', t: 'Google Drive-style navigation with act and guideline mapping.' },
      { h: 'Hybrid permissions', t: 'Sharing at project and file level. RBAC: Reader, Editor, Admin, Owner.' },
      { h: 'Personal knowledge', t: 'Private notes and working context can become cited personal memory for the user who owns them.' },
      { h: 'Workspace knowledge', t: 'Policies, decisions, files and shared notes give agents the company context they need to answer like part of the team.' },
      { h: 'Collaborative review', t: 'Work through extraction tables as a team, verify findings, flag exceptions and keep review decisions in one place.' },
    ],
  },
  {
    title: 'Delegate repetitive tasks to specialist AI agents',
    sub: 'Opie deploys specialist AI agent teams, passing context between stages to handle complex multi-step processes end to end.',
    shot: 'agent orchestration',
    points: [
      { h: 'Multi-agent orchestration', t: 'Work is automatically routed to specialist agents: triage, research, compliance and risk analysis included.' },
      { h: 'Grounded in your data', t: 'Every agent queries your knowledge base using RAG. Answers are backed by your documents, not generic models.' },
      { h: 'Multi-provider', t: 'Run agents on OpenAI, Google Gemini, Anthropic Claude or Grok. Switch models without rebuilding automations.' },
      { h: 'Session memory', t: 'Agents retain context across conversations for complex, multi-turn analysis.' },
      { h: 'Controlled tool access', t: 'Agents can search files and execute tools, all governed by per-user permission controls.' },
      { h: 'Usage visibility', t: 'Full token tracking per agent, per user, per session. Know exactly what your AI spend looks like.' },
    ],
  },
];

export const regItems = [
  { h: 'Disclosure review', t: 'Ensure Information Memorandums and Product Disclosure Statements are compliant before distribution. AI Traffic Light identifies risk and routes for sign-off.', shot: 'disclosure review' },
  { h: 'Regulatory search', t: 'Answer complex regulatory questions in seconds. Load legislation (AUSTRAC, SEC, FCA) and get cited sections with zero hallucinations.', shot: 'regulatory search' },
  { h: 'Automated client onboarding', t: 'Automate identity verification across investor onboarding. Integrated KYC/AML checks with full context for failed or flagged verifications.', shot: 'client onboarding' },
  { h: 'Multi-entity compliance', t: 'Run playbooks across multiple funds, licenses and jurisdictions from a single workspace. Audit trails scoped per entity, reportable across the structure.', shot: 'multi-entity' },
];

export const teams = [
  { name: 'Investment funds', desc: 'Automate IM reviews, disclosure compliance, and document-heavy playbooks across multiple funds and entities.' },
  { name: 'Accountants & advisors', desc: 'Extract figures from statements, reconcile across sources, and produce audit-ready working papers in minutes.' },
  { name: 'Legal teams', desc: 'Search legislation and case files instantly, with every answer cited back to the exact source section.' },
  { name: 'Compliance officers', desc: 'Maintain a complete audit trail and route every AI recommendation through human sign-off.' },
  { name: 'Financial institutions', desc: 'Run KYC/AML checks and regulatory search at scale, governed by per-user permission controls.' },
  { name: 'Enterprise operations', desc: 'Delegate repetitive multi-step processes to specialist agent teams across every department.' },
];

export const securityItems = [
  { h: 'Advanced encryption', t: 'Data encrypted at rest and in transit. Application-level encryption for sensitive fields using industrial-grade cryptography.', shot: 'encryption' },
  { h: 'Isolated storage', t: 'Vault files are stored separately from knowledge base content, with scoped organizational boundary enforcement.', shot: 'isolated storage' },
];
export const platformPages = [
  {
    slug: 'overview',
    navTitle: 'Overview',
    navDesc: 'See how Opie connects knowledge, agents, playbooks and evidence.',
    title: 'Engineered for every regulated process',
    lead: 'Discover, automate, and prove.',
    description:
      'Opie helps teams discover company context, automate repeatable work, and prove what happened. One platform connects knowledge bases, vault files, review tables, agents, policy automations, integrations, tasks and audit evidence.',
    sections: [
      {
        kicker: 'Discover',
        h: 'Company context your AI can use',
        t: 'Personal notes, workspace knowledge, approved policies, captured evidence and vault files give agents the context they need without re-uploading the same material every time.',
      },
      {
        kicker: 'Automate',
        h: 'Policy-driven playbooks for real operations',
        t: 'Run long-lived processes across people, agents and systems, with HITL approvals, status and evidence preserved from trigger to completion.',
      },
      {
        kicker: 'Prove',
        h: 'Evidence attached to the work',
        t: 'Every document, AI answer, review-table finding, approval and completion can stay linked to the task, obligation, client or entity it supports.',
      },
    ],
    bullets: [
      { h: 'Vault and review tables', t: 'Analyse bulk files, extract structured findings, verify source evidence and collaborate on review decisions.' },
      { h: 'Personal and workspace knowledge', t: 'Keep private notes personal, publish shared context to the workspace, and ground answers in permissioned company knowledge.' },
      { h: 'Specialist agents', t: 'Route work to agents for document analysis, legal research, compliance, due diligence, finance and operational review.' },
      { h: 'Policy automation', t: 'Execute recurring processes with due dates, approval gates, integration triggers, human review and evidence capture.' },
      { h: 'Connected systems', t: 'Use integrations to bring in documents, messages, finance records, calendar events and app triggers from the tools your team already uses.' },
      { h: 'Audit trail', t: 'Preserve the source-to-decision chain so regulated teams can explain what was reviewed, approved, escalated and completed.' },
    ],
    metrics: [
      { value: '1', label: 'workspace for knowledge, tasks, agents and evidence' },
      { value: '3', label: 'context layers: personal, workspace and curated knowledge' },
      { value: 'Every', label: 'AI output can link back to its source material' },
    ],
    audiences: [
      { h: 'Operations leaders', t: 'Standardise recurring work, reduce handoffs, and see which processes are ready for automation.' },
      { h: 'Compliance officers', t: 'Track obligations, approvals and evidence without losing the source material behind each decision.' },
      { h: 'Legal and research teams', t: 'Search cases, contracts, policies and internal knowledge with cited answers and collaborative review tables.' },
      { h: 'Finance and fund teams', t: 'Connect operating data, investor records and documents into repeatable reviews and evidence-backed automations.' },
    ],
    cta: {
      h: 'Ready to run AI with company context?',
      t: 'Start with your knowledge, documents and recurring processes. Opie turns them into agent-ready context, policy-driven automation and evidence-backed work.',
      button: 'Book a Demo',
    },
    shot: 'platform overview',
  },
  {
    slug: 'vault',
    navTitle: 'Vault',
    navDesc: 'Bulk document review, structured extraction, shared notes and captured evidence.',
    title: 'The fastest way to review regulated document sets',
    lead: 'Vault is built for bulk review, not storage alone.',
    description:
      'Organise files, emails, notes and web captures in one secure place, then extract the facts that matter into structured review tables. Every answer, finding and decision stays linked to its source evidence.',
    highlights: [
      {
        kicker: 'Extract',
        h: 'Find the signal across large document sets',
        t: 'Run structured extraction across investor packs, disclosures, statements, correspondence and evidence bundles without turning the review into a spreadsheet hunt.',
        items: [
          { h: 'Review tables', t: 'Compare parties, dates, clauses, figures, obligations, risk markers and reviewer decisions side by side.' },
          { h: 'Vault questions', t: 'Ask across a whole vault or a review table and get cited answers grounded in the selected source set.' },
          { h: 'Source verification', t: 'Open the file behind each answer so reviewers can check the evidence before anything is approved.' },
        ],
      },
      {
        kicker: 'Collaborate',
        h: 'Keep review work inside the vault',
        t: 'Shared vaults keep files, captures, notes, extracted findings and review decisions together so teams do not lose context across inboxes and folders.',
        items: [
          { h: 'Collaborative notes', t: 'Capture research summaries, exceptions, reviewer comments and decision rationale beside the underlying files.' },
          { h: 'Evidence capture', t: 'Save web pages as evidence bundles with screenshots, self-contained HTML, PDF reports, source URLs, timestamps and hashes.' },
          { h: 'Review ownership', t: 'Assign findings, flag exceptions and move items from extraction to verification to approval.' },
        ],
      },
      {
        kicker: 'Govern',
        h: 'Reuse knowledge without leaking context',
        t: 'Vault content can become personal knowledge, workspace memory or curated approved material while staying permission-scoped for each user and agent.',
        items: [
          { h: 'Permissioned retrieval', t: 'Agents retrieve only the documents, notes and knowledge each user is allowed to access.' },
          { h: 'Curated knowledge bases', t: 'Publish approved policies, precedents, regulatory materials and playbooks as trusted source material.' },
          { h: 'Traceable sharing', t: 'Control access at team, project, folder and file level, with access history attached to sensitive material.' },
        ],
      },
    ],
    bullets: [
      { h: 'Bulk file intake', t: 'Upload contracts, statements, correspondence, PDFs, spreadsheets and captured web evidence into a single review space.' },
      { h: 'Structured extraction', t: 'Turn unstructured files into columns your team can compare, filter, assign and verify.' },
      { h: 'Cited answers', t: 'Every vault answer and table finding links back to the source material it came from.' },
      { h: 'Shared review tables', t: 'Collaborate on extracted findings, verification status, exceptions and reviewer notes.' },
      { h: 'Knowledge-ready', t: 'Promote approved files, notes and decisions into personal, workspace or curated knowledge sources.' },
      { h: 'Evidence tied to work', t: 'Connect files, review notes, AI answers and approvals to the task, obligation, client or entity they support.' },
    ],
    useCasesTitle: 'How teams use Vault',
    useCasesIntro:
      'Each use case starts with messy source material and ends with structured findings your team can verify, assign and preserve as evidence.',
    useCases: [
      { h: 'Investor onboarding packs', t: 'Extract beneficial owners, dates, entity details, missing documents and review exceptions across many investor files.' },
      { h: 'Disclosure and IM review', t: 'Compare disclosure language, risk statements, fees, offer terms and approval notes against approved standards.' },
      { h: 'Finance reconciliations', t: 'Pull figures from statements, invoices and workpapers into review tables with every number traceable to a source.' },
      { h: 'CDD and suspicious matter review', t: 'Keep identity material, web captures, notes, escalations and approval evidence together for each client review.' },
      { h: 'Regulatory research binders', t: 'Collect guidance, policies, prior decisions and internal notes into a source set agents can cite.' },
      { h: 'Collaborative due diligence', t: 'Let multiple reviewers work through the same document set with shared tables, status, flags and decision notes.' },
    ],
    cta: {
      h: 'Ready to turn documents into evidence?',
      t: 'Upload a document set, build a review table, and see how Vault turns scattered files into source-backed decisions.',
      button: 'Book a Demo',
    },
    shot: 'vault workspace',
  },
  {
    slug: 'compliance',
    navTitle: 'Compliance',
    navDesc: 'Manage customers, obligations and reports for KYC/AML and regulatory risk.',
    title: 'One place for customers, obligations and reports',
    description:
      'The Compliance module brings customer records, regulatory obligations, and reporting together, with built-in KYC/AML checks so your team always knows where risk sits.',
    splitFeatures: [
      {
        kicker: 'Screen',
        h: 'Every customer starts with a risk profile',
        t: 'KYC/AML checks run at onboarding, not bolted on afterwards — every customer record carries its verification status and risk tier from day one.',
        shot: 'customer risk profile',
        items: [
          { h: 'Customer risk profiles', t: 'Every customer record carries its verification status and risk tier.' },
          { h: 'KYC/AML checks', t: 'Identity verification is built into onboarding, not bolted on afterwards.' },
        ],
      },
      {
        kicker: 'Track',
        h: 'Obligations and reviews on one calendar',
        t: 'Daily, monthly, quarterly and annual obligations sit alongside suspicious matter reviews, each with an owner, a due date and an escalation path.',
        shot: 'obligation calendar',
        items: [
          { h: 'Obligation calendar', t: 'Track daily, monthly, quarterly and annual obligations with owners, due dates and escalation.' },
          { h: 'Suspicious matter review', t: 'Detect unusual client or transaction behaviour, draft review notes, and preserve the decision evidence.' },
        ],
      },
      {
        kicker: 'Report',
        h: 'Multi-entity oversight, one audit trail',
        t: 'Work across every fund, licence and related entity from a single workspace, with reports and audit trails scoped per entity but reportable across the structure.',
        shot: 'multi-entity audit trail',
        items: [
          { h: 'Multi-entity oversight', t: 'Work across every fund, licence and related entity from a single workspace, with audit trails scoped per entity.' },
          { h: 'Audit-ready reporting', t: 'Generate obligation and risk reports without assembling them by hand.' },
        ],
      },
    ],
    shot: 'compliance dashboard',
  },
  {
    slug: 'playbooks',
    navTitle: 'Playbooks',
    navDesc: 'Turn business systems and processes into policy-driven automations.',
    title: 'Turn business processes into policy-driven automations',
    lead: 'Define once, run consistently, prove it happened.',
    description:
      'Playbooks turn business systems and repeatable processes into policy-driven automations. Define the rules, owners, prompts, evidence requirements and human-in-the-loop approval gates once, then let Opie run them across people, AI agents and integrations.',
    sections: [
      {
        kicker: 'Define',
        h: 'Turn policy into a repeatable playbook',
        t: 'Set the rules, owners, prompts, evidence requirements and approval gates once — Opie runs the same process the same way every time after that.',
      },
      {
        kicker: 'Run',
        h: 'People, agents and systems working the same run',
        t: 'Assign steps to team members or agents, call connected tools, and pause high-risk steps for reviewer sign-off before anything writes back or sends externally.',
      },
      {
        kicker: 'Prove',
        h: 'Every run leaves its evidence behind',
        t: 'Handoffs, checks, approvals and follow-ups are preserved for every run, so a playbook that executed six months ago is just as explainable as one that ran today.',
      },
    ],
    bullets: [
      { h: 'Policy-driven automation', t: 'Translate policies, SOPs and operating rules into repeatable automations for onboarding, reviews, approvals, reconciliations and reporting.' },
      { h: 'Human-in-the-loop controls', t: 'Pause high-risk steps for reviewer sign-off before write-backs, external sends, escalations or final completion.' },
      { h: 'People, agents and systems', t: 'Assign steps to team members or agents, call connected tools, and keep every system action tied to the decision history.' },
      { h: 'Integration triggers', t: 'Launch policy automations from connected systems like Slack, email, calendars, finance tools, document stores and webhooks.' },
      { h: 'Consistent outcomes', t: 'The same playbook produces the same handoffs, checks, evidence and follow-ups every time it runs.' },
      { h: 'Any repeatable process', t: 'Build a playbook for onboarding, disclosure review, incident response, board reporting or annual filings — not just compliance templates.' },
    ],
    metrics: [
      { value: 'Every', label: 'run leaves an evidence trail behind' },
      { value: 'Zero', label: 'manual re-entry between steps, people and systems' },
      { value: '1', label: 'definition drives every run of the process' },
    ],
    audiences: [
      { h: 'Operations leaders', t: 'Standardise the process once and see which teams are still running it manually.' },
      { h: 'Compliance officers', t: 'Turn recurring obligations into playbooks with approval gates and evidence built in.' },
      { h: 'Finance and fund teams', t: 'Automate reconciliations, reporting and month-end close the same way every cycle.' },
      { h: 'Enterprise operations', t: 'Roll the same playbook out across every department or entity that runs the process.' },
    ],
    cta: {
      h: 'Ready to turn your next process into a playbook?',
      t: 'Define the rules once. Opie runs it across people, agents and systems, with evidence attached to every step.',
      button: 'Book a Demo',
    },
    shot: 'playbook editor',
  },
  {
    slug: 'integrations',
    navTitle: 'Integrations',
    navDesc: 'Connect Opie to the systems where documents, messages and work already live.',
    title: 'Connect the tools your team already uses',
    description:
      'Opie integrates with communication, document, finance and operational systems so agents can work with real company context instead of isolated uploads. Pull evidence in, trigger automated runs, route approvals and keep records tied to the source system.',
    splitFeatures: [
      {
        kicker: 'Connect',
        h: 'Bring in the systems your team already uses',
        t: 'Documents, cloud drives, Slack, Teams, Gmail, Outlook, Xero and business apps feed real company context into vault, knowledge base and review automations.',
        shot: 'connected systems',
        items: [
          { h: 'Documents and storage', t: 'Bring files from document stores and cloud drives into vault, knowledge base and review automations.' },
          { h: 'Email and messaging', t: 'Use Slack, Teams, Gmail and Outlook context for tasks, approvals, follow-ups and company memory.' },
        ],
      },
      {
        kicker: 'Trigger',
        h: 'Start automated runs from anywhere',
        t: 'A file upload, an inbound message, a due date or an agent decision can kick off a policy automation — not just a manual click.',
        shot: 'automation triggers',
        items: [
          { h: 'Finance and operations', t: 'Connect systems like Xero and business apps so reconciliations, reports and reviews use current operational data.' },
          { h: 'Process triggers', t: 'Start automated runs from app events, webhooks, uploaded files, messages, due dates or agent decisions.' },
        ],
      },
      {
        kicker: 'Control',
        h: 'Every write-back needs a human first',
        t: 'Agents use connected tools through governed, permissioned access, and external systems only update after a person approves the change.',
        shot: 'permissioned access',
        items: [
          { h: 'Permissioned access', t: 'Agents use connected tools through governed access, approval gates and audit records.' },
          { h: 'Human-confirmed write-backs', t: 'External systems only update after a person approves the change.' },
        ],
      },
    ],
    shot: 'integrations hub',
  },
  {
    slug: 'assistant',
    navTitle: 'Opie Assistant',
    navDesc: 'A multi-agent AI assistant with specialists for every compliance domain.',
    title: 'An AI assistant with specialists on call',
    description:
      'Opie Assistant routes your questions to specialist agents and grounds each answer in the right personal, workspace and curated knowledge sources.',
    highlights: [
      {
        kicker: 'Ask',
        h: 'One conversation, the right specialist',
        t: "Ask anything and Opie routes the question to the specialist agent for policy, regulation, document analysis, risk or training — no need to pick the right tool yourself.",
        items: [
          { h: 'Specialist agents', t: 'Dedicated agents for policy, regulation, document analysis, risk and training.' },
          { h: 'One conversation', t: 'Ask anything and Opie routes it to the right specialist behind the scenes.' },
        ],
      },
      {
        kicker: 'Ground',
        h: 'Answers backed by your own context',
        t: "Every response draws on the documents, notes and company knowledge the user is permitted to access — not a generic model's best guess.",
        items: [
          { h: 'Grounded answers', t: "Every response is backed by the documents, notes and company context the user is permitted to access." },
          { h: 'Company context', t: 'Workspace knowledge bases let agents understand policies, playbooks, decisions and shared files without manual re-uploading.' },
        ],
      },
      {
        kicker: 'Act',
        h: 'An answer can become the next step',
        t: "Any result from Assistant can turn into a task, an approval request or a playbook run, so the conversation doesn't stop at an answer.",
        items: [
          { h: 'Turns answers into action', t: 'Any result from Assistant can become a task, approval request or playbook run.' },
          { h: 'Multi-provider', t: 'Run on OpenAI, Google Gemini, Anthropic Claude or Grok — switch models without rebuilding your setup.' },
        ],
      },
    ],
    bullets: [
      { h: 'Specialist agents', t: 'Dedicated agents for policy, regulation, document analysis, risk and training.' },
      { h: 'Grounded answers', t: "Every response is backed by the documents, notes and company context the user is permitted to access." },
      { h: 'Company context', t: 'Workspace knowledge bases let agents understand policies, playbooks, decisions and shared files without manual re-uploading.' },
      { h: 'One conversation', t: 'Ask anything and Opie routes it to the right specialist behind the scenes.' },
      { h: 'Turns answers into action', t: 'Any result from Assistant can become a task, approval request or playbook run.' },
      { h: 'Multi-provider', t: 'Run on OpenAI, Google Gemini, Anthropic Claude or Grok — switch models without rebuilding your setup.' },
    ],
    useCasesTitle: 'How teams use Assistant',
    useCasesIntro: 'Each question routes to the specialist agent built for it, grounded in the documents and context already in Opie.',
    useCases: [
      { h: 'Policy questions', t: 'Ask what a policy requires and get an answer grounded in the actual policy document, not a guess.' },
      { h: 'Regulatory questions', t: 'Ask what a regulation requires and get a cited answer instead of searching guidance manually.' },
      { h: 'Document analysis', t: 'Ask Assistant to summarise or extract details from a document already in your workspace.' },
      { h: 'Risk questions', t: 'Ask about a risk area and get an answer that draws on your own risk assessments and records.' },
      { h: 'Training and onboarding', t: 'New team members ask Assistant instead of interrupting a colleague for the same recurring questions.' },
      { h: 'Turning an answer into work', t: 'Take any Assistant answer and turn it into a task, approval request or playbook run without leaving the conversation.' },
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
    splitFeatures: [
      {
        kicker: 'Assign',
        h: 'Every task has an owner from the start',
        t: "Deadlines and follow-ups are created automatically from your playbooks, alongside the tasks your team creates by hand — nothing starts unowned.",
        shot: 'task ownership',
        items: [
          { h: 'System-generated tasks', t: 'Deadlines and follow-ups are created automatically from your playbooks.' },
          { h: 'Nothing falls through', t: 'Every obligation has an owner and a date, tracked to completion.' },
        ],
      },
      {
        kicker: 'Track',
        h: 'One calendar for every source',
        t: "Playbook steps, obligations and manual to-dos all land on the same schedule, so the team can see what's due and who owns it in one place.",
        shot: 'team calendar',
        items: [
          { h: 'Team scheduling', t: "See what's due, who owns it, and when it's due across the whole team." },
          { h: 'One calendar, every source', t: 'Playbook steps, obligations and manual to-dos all land on the same schedule.' },
        ],
      },
      {
        kicker: 'Escalate',
        h: 'Exceptions get routed, not ignored',
        t: 'When something needs a human decision it routes to the right reviewer automatically, and overdue items escalate instead of quietly slipping past their due date.',
        shot: 'escalation routing',
        items: [
          { h: 'Exceptions routed for approval', t: 'When something needs a human decision, it routes to the right reviewer automatically.' },
          { h: 'Escalation, not silence', t: 'Overdue items escalate instead of quietly slipping past their due date.' },
        ],
      },
    ],
    shot: 'task calendar',
  },
];

export const solutionPages = [
  {
    slug: 'investment-funds',
    navTitle: 'Investment funds',
    navDesc: 'Automate IM reviews, disclosure compliance, and document-heavy playbooks across multiple funds and entities.',
    title: 'One workspace for every fund and entity',
    description:
      'Automate IM reviews, disclosure compliance, and document-heavy playbooks across multiple funds and entities, with every obligation and approval tracked back to the fund it belongs to.',
    splitFeatures: [
      {
        kicker: 'Review',
        h: 'Disclosure review with risk flags built in',
        t: 'Run Information Memorandum and PDS reviews with AI risk flags before distribution, so issues surface before a document goes out the door.',
        shot: 'disclosure review',
        items: [
          { h: 'IM & disclosure review', t: 'Run Information Memorandum and PDS reviews with AI risk flags before distribution.' },
        ],
      },
      {
        kicker: 'Manage',
        h: 'Every fund and entity, one workspace',
        t: 'Obligations, documents and playbooks stay organised across every fund and licence, with each item tracked back to the entity it belongs to.',
        shot: 'multi-entity workspace',
        items: [
          { h: 'Multi-entity workspace', t: 'Manage obligations, documents and playbooks across every fund and licence from one place.' },
        ],
      },
      {
        kicker: 'Report',
        h: 'Compliance reporting without the assembly',
        t: 'Generate compliance and investor reports directly from the same system of record, instead of rebuilding them from scratch each cycle.',
        shot: 'investor reporting',
        items: [
          { h: 'Audit-ready reporting', t: 'Generate compliance and investor reports without assembling them by hand.' },
        ],
      },
    ],
    shot: 'fund compliance workspace',
  },
  {
    slug: 'accountants-advisors',
    navTitle: 'Accountants & advisors',
    navDesc: 'Extract figures from statements, reconcile across sources, and produce audit-ready working papers in minutes.',
    title: 'Audit-ready working papers, without the manual reconciliation',
    description:
      'Extract figures from statements, reconcile across sources, and produce audit-ready working papers in minutes, with every figure traceable back to its source document.',
    sections: [
      {
        kicker: 'Extract',
        h: 'Figures out of statements, at scale',
        t: 'Pull structured data out of client statements and documents in bulk, instead of re-keying figures one file at a time.',
      },
      {
        kicker: 'Reconcile',
        h: 'Verify figures across every source',
        t: 'Compare and reconcile numbers across documents before they go anywhere near a working paper, catching mismatches early.',
      },
      {
        kicker: 'Deliver',
        h: 'Working papers in minutes, not days',
        t: 'Produce audit-ready working papers with every figure traceable back to its source document, ready for review or sign-off.',
      },
    ],
    bullets: [
      { h: 'Bulk statement extraction', t: 'Pull figures and structured data out of client statements and documents at scale.' },
      { h: 'Reconciliation across sources', t: 'Compare and verify figures across documents before they go into a working paper.' },
      { h: 'Audit-ready working papers', t: 'Produce working papers in minutes, with every figure traceable back to its source.' },
    ],
    metrics: [
      { value: 'Bulk', label: 'statement and document extraction, not one file at a time' },
      { value: 'Every', label: 'figure stays traceable back to its source document' },
      { value: 'Fast', label: 'audit-ready working papers in minutes, not days' },
    ],
    shot: 'reconciliation workspace',
  },
  {
    slug: 'legal-teams',
    navTitle: 'Legal teams',
    navDesc: 'Search legislation and case files instantly, with every answer cited back to the exact source section.',
    title: 'Legal research with cited answers and an audit trail',
    description:
      'Search legislation and case files instantly, with every answer cited back to the exact source section — accelerating research, not replacing a lawyer\'s judgement.',
    splitFeatures: [
      {
        kicker: 'Search',
        h: 'Legislation and case files, cited instantly',
        t: 'Search legislation and case files and get cited answers back in seconds, with every citation traceable to its exact source section.',
        shot: 'legislation search',
        items: [
          { h: 'Instant legislation search', t: 'Search legislation and case files and get cited answers back in seconds.' },
        ],
      },
      {
        kicker: 'Review',
        h: 'Contract review that shows its work',
        t: 'Extract key clauses, compare them against your standards, and cite every finding so a reviewer can verify it in seconds.',
        shot: 'contract review',
        items: [
          { h: 'Contract review', t: 'Extract key clauses, compare against your standards, and cite every finding.' },
        ],
      },
      {
        kicker: 'Approve',
        h: 'AI drafts and cites, lawyers decide',
        t: 'Opie accelerates research and keeps the evidence trail; your lawyers review and approve every output before it goes further.',
        shot: 'lawyer review',
        items: [
          { h: 'Research, not replacement', t: 'AI drafts and cites; your lawyers review and approve every output.' },
        ],
      },
    ],
    shot: 'legal research workspace',
  },
  {
    slug: 'compliance-officers',
    navTitle: 'Compliance officers',
    navDesc: 'Maintain a complete audit trail and route every AI recommendation through human sign-off.',
    title: 'Everything a compliance officer needs to prove the process ran',
    description:
      'Maintain a complete audit trail and route every AI recommendation through human sign-off, so you can show a regulator, board, or auditor exactly what happened and why.',
    highlights: [
      {
        kicker: 'See',
        h: 'Every obligation, owner and due date',
        t: "See every obligation across the entities you're responsible for in one view, instead of chasing spreadsheets and inboxes for status.",
        items: [
          { h: 'Obligation visibility', t: 'See every obligation, owner and due date across the entities you are responsible for.' },
        ],
      },
      {
        kicker: 'Approve',
        h: 'Nothing becomes a decision without you',
        t: 'Every AI recommendation routes through your review before it becomes a decision — sign-off is built into the process, not an afterthought.',
        items: [
          { h: 'Human sign-off, always', t: 'Every AI recommendation routes through your review before it becomes a decision.' },
        ],
      },
      {
        kicker: 'Prove',
        h: 'One system of record for the next review',
        t: 'Evidence, approvals and completion history live in one place, so you can show a regulator, board or auditor exactly what happened and why.',
        items: [
          { h: 'Complete audit trail', t: 'Evidence, approvals and completion history live in one system of record.' },
        ],
      },
    ],
    bullets: [
      { h: 'Complete audit trail', t: 'Evidence, approvals and completion history live in one system of record.' },
      { h: 'Human sign-off, always', t: 'Every AI recommendation routes through your review before it becomes a decision.' },
      { h: 'Obligation visibility', t: 'See every obligation, owner and due date across the entities you are responsible for.' },
    ],
    useCasesTitle: 'How compliance officers use Opie',
    useCasesIntro: 'From daily obligation tracking to the next regulator review, everything stays in one system of record.',
    useCases: [
      { h: 'Daily obligation tracking', t: 'Start the day with a clear view of what is due, who owns it, and what is overdue.' },
      { h: 'Reviewing AI recommendations', t: 'Every AI-generated recommendation waits for your sign-off before it becomes a decision.' },
      { h: 'Preparing for an audit', t: 'Pull evidence, approvals and completion history from one system instead of assembling it from scratch.' },
    ],
    shot: 'compliance officer dashboard',
  },
  {
    slug: 'financial-institutions',
    navTitle: 'Financial institutions',
    navDesc: 'Run KYC/AML checks and regulatory search at scale, governed by per-user permission controls.',
    title: 'KYC/AML and regulatory search at scale',
    description:
      'Run KYC/AML checks and regulatory search at scale, governed by per-user permission controls so every check and record stays within its access boundary.',
    sections: [
      {
        kicker: 'Screen',
        h: 'KYC/AML checks that scale with volume',
        t: 'Run identity verification and AML checks across high volumes of customers without the process breaking down as volume grows.',
      },
      {
        kicker: 'Search',
        h: 'Regulator questions answered in seconds',
        t: 'Answer AUSTRAC and regulator questions with cited sources, instead of manually digging through guidance documents under time pressure.',
      },
      {
        kicker: 'Govern',
        h: 'Every check stays inside its access boundary',
        t: 'Checks and records are governed by per-user access controls, so sensitive customer data stays scoped to the people who should see it.',
      },
    ],
    bullets: [
      { h: 'KYC/AML at scale', t: 'Run identity verification and AML checks across high volumes of customers.' },
      { h: 'Regulatory search', t: 'Answer AUSTRAC and regulator questions in seconds, with cited sources.' },
      { h: 'Permissioned by design', t: 'Every check and record is governed by per-user access controls.' },
    ],
    metrics: [
      { value: 'Scale', label: 'KYC/AML checks that hold up as customer volume grows' },
      { value: 'Cited', label: 'every regulator answer traces back to its source' },
      { value: 'Scoped', label: 'every check and record stays inside its access boundary' },
    ],
    shot: 'financial institution risk workspace',
  },
  {
    slug: 'enterprise-operations',
    navTitle: 'Enterprise operations',
    navDesc: 'Delegate repetitive multi-step processes to specialist agent teams across every department.',
    title: 'Delegate repetitive work to specialist agent teams',
    description:
      'Delegate repetitive multi-step processes to specialist agent teams across every department, with every automated step tied back to the evidence it produced.',
    highlights: [
      {
        kicker: 'Delegate',
        h: 'Repetitive work goes to specialist agents',
        t: 'Route multi-step work to agents built for triage, research and review, freeing your team to focus on the exceptions that need judgement.',
        items: [
          { h: 'Delegate to specialist agents', t: 'Route repetitive multi-step work to agents built for triage, research and review.' },
        ],
      },
      {
        kicker: 'Standardise',
        h: 'The same playbook, every department',
        t: 'Roll the same process out across every department or entity that runs it, instead of letting each team build its own version.',
        items: [
          { h: 'Cross-department playbooks', t: 'Standardise the same process across every department that runs it.' },
        ],
      },
      {
        kicker: 'Evidence',
        h: 'Every automated step leaves a record',
        t: 'Every automated step stays linked to the record it produced, so the result is explainable long after it ran.',
        items: [
          { h: 'Evidence, not guesswork', t: 'Every automated step stays linked to the record it produced.' },
        ],
      },
    ],
    useCasesTitle: 'How enterprise operations teams use Opie',
    useCasesIntro: 'The same specialist agents and playbooks roll out across every department that needs them.',
    useCases: [
      { h: 'Cross-department triage', t: 'Route incoming requests to the right specialist agent instead of a shared inbox.' },
      { h: 'Standardising a manual process', t: 'Turn a process one team runs well into a playbook every department can use.' },
      { h: 'Explaining an automated decision', t: 'Trace any automated step back to the record it produced, months after it ran.' },
    ],
    bullets: [
      { h: 'Delegate to specialist agents', t: 'Route repetitive multi-step work to agents built for triage, research and review.' },
      { h: 'Cross-department playbooks', t: 'Standardise the same process across every department that runs it.' },
      { h: 'Evidence, not guesswork', t: 'Every automated step stays linked to the record it produced.' },
    ],
    shot: 'enterprise operations workspace',
  },
];
