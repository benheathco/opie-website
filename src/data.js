// All page copy lives here so it's easy to edit or wire to a CMS later.

export const solveFeatures = [
  { title: 'Automated document processing', desc: 'Upload a file, Opie converts, summarises, and analyses it instantly.', shot: 'doc processing', span: 2 },
  { title: "Search across your organisation's data", desc: 'Query notes, documents, policies and company data for structured answers with citations and full source traceability.', shot: 'search', span: 2 },
  { title: 'Human-in-the-loop verifications', desc: 'Every AI recommendation is subject to human oversight, with complete audit trails into how decisions were reached.', shot: 'verifications', span: 2 },
  { title: 'Run multi-entity workflows', desc: 'Run workflows across multiple funds, licenses, legal entities and jurisdictions from a single workspace.', shot: 'workflows', span: 3 },
  { title: 'Automate with integrations', desc: 'Search and seamlessly work with internal data across 50+ powerful integrations.', shot: 'integrations', span: 3 },
];

export const bentoFeatures = [
  { title: 'Work with all the best AI models within Opie', shot: 'model picker', span: 3 },
  { title: 'Generate audit-ready compliance reports in seconds', shot: 'reports', span: 3 },
  { title: 'Trustworthy results through grounded citations', shot: 'citations', span: 2 },
  { title: 'Agentic tables get real work done', shot: 'agentic tables', span: 2 },
  { title: 'Send & run custom workflows with other users & teams', shot: 'collaboration', span: 2 },
];

export const stats = [
  { value: '85%', label: 'Average accuracy for AI understanding of unstructured documents' },
  { value: '2 hrs/day', label: 'Average time employees spend searching for documents and information' },
  { value: '90%', label: 'Lower human error rates compared to manual document workflows' },
  { value: '60%', label: 'Reduction in compliance-related errors through automation' },
];

export const deepDives = [
  {
    title: 'Turn documents into searchable intelligence',
    sub: 'From hand-written notes to complex graphs, Opie can extract data from any document at scale and in over 50+ languages.',
    shot: 'document extraction',
    points: [
      { h: 'Citation provenance', t: 'Every AI answer links back to the exact source document and pixel location. Total traceability, no hallucinated references.' },
      { h: 'Smart document chunking', t: 'Documents are broken down intelligently: legislation by section, papers by abstract, manuals by table of contents.' },
      { h: 'RAG-powered responses', t: 'AI agents use Retrieval-Augmented Generation to ground every answer in your own private data library.' },
    ],
  },
  {
    title: 'Secure knowledge vaults for documents',
    sub: 'Unite files and data into a single vault. Capture every detail, across every source, into secure context-rich repositories for any project.',
    shot: 'knowledge vault',
    points: [
      { h: 'Hierarchical metadata', t: 'Google Drive-style navigation with act and guideline mapping.' },
      { h: 'Hybrid permissions', t: 'Sharing at project and file level. RBAC: Reader, Editor, Admin, Owner.' },
      { h: 'Real-time collaboration', t: 'Review changes, align on decisions, and stay audit-ready without back-and-forth.' },
    ],
  },
  {
    title: 'Delegate repetitive tasks to specialist AI agents',
    sub: 'Opie deploys specialist AI agent teams, passing context between stages to handle complex multi-step workflows end to end.',
    shot: 'agent orchestration',
    points: [
      { h: 'Multi-agent orchestration', t: 'Work is automatically routed to specialist agents: triage, research, compliance and risk analysis included.' },
      { h: 'Grounded in your data', t: 'Every agent queries your knowledge base using RAG. Answers are backed by your documents, not generic models.' },
      { h: 'Multi-provider', t: 'Run agents on OpenAI, Google Gemini, Anthropic Claude or Grok. Switch models without rebuilding workflows.' },
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
  { h: 'Multi-entity compliance', t: 'Run workflows across multiple funds, licenses and jurisdictions from a single workspace. Audit trails scoped per entity, reportable across the structure.', shot: 'multi-entity' },
];

export const teams = [
  { name: 'Investment funds', desc: 'Automate IM reviews, disclosure compliance, and document workflows across multiple funds and entities.' },
  { name: 'Accountants & advisors', desc: 'Extract figures from statements, reconcile across sources, and produce audit-ready working papers in minutes.' },
  { name: 'Legal teams', desc: 'Search legislation and case files instantly, with every answer cited back to the exact source section.' },
  { name: 'Compliance officers', desc: 'Maintain a complete audit trail and route every AI recommendation through human sign-off.' },
  { name: 'Financial institutions', desc: 'Run KYC/AML checks and regulatory search at scale, governed by per-user permission controls.' },
  { name: 'Enterprise operations', desc: 'Delegate repetitive multi-step workflows to specialist agent teams across every department.' },
];

export const securityItems = [
  { h: 'Advanced encryption', t: 'Data encrypted at rest and in transit. Application-level encryption for sensitive fields using industrial-grade cryptography.', shot: 'encryption' },
  { h: 'Isolated storage', t: 'Vault files are stored separately from knowledge base content, with scoped organizational boundary enforcement.', shot: 'isolated storage' },
];

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
