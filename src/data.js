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
