// Customer stories. Rendered by src/pages/CustomersPage.jsx (index) and
// src/pages/CaseStudyPage.jsx (detail).
//
// The first entry is the slot for a real customer: every field marked TODO
// must be replaced before publishing. Entries with `fictional: true` are
// illustrative examples written to show the format; swap or remove them as
// real stories arrive. `products` slugs link into /platform/* and
// /solutions/* pages (see platformPages / solutionPages in data.js).

export const industries = [
  'Investment funds',
  'Legal',
  'Accounting & advisory',
  'Financial institutions',
];

const storyEntries = [
  {
    slug: 'todo-customer',
    draft: true,
    featured: true,
    fictional: false,
    name: 'TODO: Customer name',
    logoText: 'TODO',
    cover: '/covers/gradient-night.svg',
    industry: 'Investment funds',
    location: 'TODO: City, Country',
    size: 'TODO: e.g. 45 employees, 8 funds',
    headline: 'TODO: Customer name: how they {achieved outcome} with Opie',
    result: 'TODO: Headline result, e.g. "IM reviews down from 3 days to 4 hours"',
    summary: 'TODO: One-sentence summary shown on the index card.',
    website: 'https://example.com',
    about: [
      'TODO: One or two paragraphs describing the customer: what they do, who they serve, how big they are, and why compliance operations matter to them.',
    ],
    products: [
      { label: 'Vault & review tables', to: '/platform/vault' },
      { label: 'Compliance', to: '/platform/compliance' },
      { label: 'Investment funds', to: '/solutions/investment-funds' },
    ],
    results: [
      { value: 'TODO', label: 'e.g. faster document review' },
      { value: 'TODO', label: 'e.g. hours saved per month' },
      { value: 'TODO', label: 'e.g. entities managed in one workspace' },
    ],
    quote: {
      text: 'TODO: Opening pull-quote from a senior sponsor at the customer.',
      name: 'TODO: Full name',
      title: 'TODO: Title, Company',
    },
    challenge: {
      h: 'TODO: The challenge',
      paras: [
        'TODO: What the team was doing before Opie, where the manual work sat, and what it cost them (time, risk, missed deadlines, audit findings).',
        'TODO: The trigger for change: growth, a new obligation, a regulator visit, a bad quarter.',
      ],
    },
    sections: [
      {
        h: 'TODO: Solution section 1 heading, e.g. "Bulk document review with review tables"',
        paras: [
          'TODO: What they set up in Opie and how it fits their workflow.',
          'TODO: The specific result this part delivered.',
        ],
        quote: { text: 'TODO: Supporting quote.', name: 'TODO: Name', title: 'TODO: Title' },
        image: { shot: 'review table', caption: 'TODO: Caption for a product screenshot or diagram.' },
      },
      {
        h: 'TODO: Solution section 2 heading',
        paras: ['TODO: Second capability adopted and its impact.'],
      },
    ],
    next: {
      h: 'What’s next',
      paras: ['TODO: What the customer plans to roll out next with Opie.'],
      quote: { text: 'TODO: Closing quote.', name: 'TODO: Name', title: 'TODO: Title' },
    },
  },

  {
    slug: 'harbourline-capital',
    fictional: true,
    name: 'Harbourline Capital',
    logoText: 'Harbourline',
    cover: '/covers/gradient-ocean.svg',
    industry: 'Investment funds',
    location: 'Sydney, Australia',
    size: '38 employees, 11 funds across 3 licences',
    headline: 'Harbourline Capital: cutting Information Memorandum review from days to hours with Opie',
    result: 'IM and PDS review time down 82%',
    summary: 'A multi-fund manager replaced spreadsheet-driven disclosure reviews with Opie review tables and traffic-light risk flags.',
    website: 'https://example.com',
    about: [
      'Harbourline Capital is a Sydney-based fund manager running eleven wholesale and retail funds across three AFS licences. Its compliance and legal team of five supports portfolio managers, investor relations and the board with disclosure documents, obligation tracking and regulator reporting.',
      'With every new fund launch, the volume of Information Memorandums, Product Disclosure Statements and side letters grew faster than the team did.',
    ],
    products: [
      { label: 'Vault & review tables', to: '/platform/vault' },
      { label: 'Compliance', to: '/platform/compliance' },
      { label: 'Playbooks', to: '/platform/playbooks' },
      { label: 'Investment funds', to: '/solutions/investment-funds' },
    ],
    results: [
      { value: '82%', label: 'reduction in IM and PDS review time' },
      { value: '11', label: 'funds managed in a single workspace' },
      { value: '4 hrs', label: 'for a full disclosure review, down from 3 days' },
      { value: '100%', label: 'of AI risk flags routed through human sign-off' },
    ],
    quote: {
      text: 'We used to run disclosure reviews out of a shared spreadsheet and a lot of goodwill. Opie gave us a system of record: every clause, every flag, every sign-off, traceable back to the source page.',
      name: 'Priya Raman',
      title: 'Head of Compliance, Harbourline Capital',
    },
    challenge: {
      h: 'Eleven funds, one spreadsheet',
      paras: [
        'Before Opie, every disclosure document went through a manual read by two reviewers, a spreadsheet of findings, and an email chain to close them out. A full IM review took three working days when the team was not distracted, and longer during a fund launch. Findings lived in different places depending on who ran the review.',
        'Two things forced the change: a new retail fund that doubled the number of PDS updates each year, and an internal audit that asked the team to evidence how each disclosure decision was reached. Neither the spreadsheet nor the inbox could answer that cleanly.',
      ],
    },
    sections: [
      {
        h: 'Bulk review with structured findings',
        paras: [
          'Harbourline loaded its disclosure library into an Opie vault and set up a review table for IM and PDS checks: required disclosures, fee wording, risk statements, cross-references and defined terms. Uploading a new draft now extracts each item into a row with the exact source location beside it.',
          'Reviewers work through the table together rather than in parallel documents. Each finding is verified, flagged or dismissed with a comment, and the record stays attached to the document version it came from.',
        ],
        quote: {
          text: 'The first time we ran a full IM through a review table, the two of us finished in an afternoon. We spent the rest of the day double-checking that it had really caught everything. It had.',
          name: 'Priya Raman',
          title: 'Head of Compliance, Harbourline Capital',
        },
        image: { shot: 'disclosure review table', caption: 'A Harbourline IM review table: extracted disclosures with source references and reviewer status.' },
      },
      {
        h: 'Traffic-light risk flags with human sign-off',
        paras: [
          'Opie’s AI traffic light rates each finding for disclosure risk. Green items close with a single click; amber and red items are routed to a named reviewer and cannot be closed without a decision and a note.',
          'For the board, that meant a change in what they receive: instead of a memo saying a document was reviewed, they get a summary of what was flagged, who resolved it and how.',
        ],
      },
      {
        h: 'Playbooks across licences and entities',
        paras: [
          'Once reviews were stable the team moved recurring obligations into playbooks: annual PDS refreshes, continuous disclosure checks and side-letter reviews, scoped per fund and per licence. Each run keeps its own audit trail but can be reported across the whole structure.',
        ],
        quote: {
          text: 'We think about the eleven funds as one operation now. Opie is what made that possible without hiring three more people.',
          name: 'Tom Ashworth',
          title: 'Chief Operating Officer, Harbourline Capital',
        },
        image: { shot: 'multi-entity playbooks', caption: 'Playbook runs scoped per fund and licence, reported across the group.' },
      },
    ],
    next: {
      h: 'What’s next',
      paras: [
        'Harbourline is extending review tables to investor-onboarding documents and connecting its fund administrator’s reporting feed through Opie integrations, so unit pricing and disclosure figures reconcile automatically before each PDS update.',
      ],
      quote: {
        text: 'Every new obligation used to mean a new spreadsheet. Now it means a new playbook, and the evidence takes care of itself.',
        name: 'Priya Raman',
        title: 'Head of Compliance, Harbourline Capital',
      },
    },
  },

  {
    slug: 'kestrel-and-marsh',
    fictional: true,
    name: 'Kestrel & Marsh',
    logoText: 'K&M',
    cover: '/covers/gradient-violet.svg',
    industry: 'Legal',
    location: 'Melbourne, Australia',
    size: '120 lawyers, 6 practice groups',
    headline: 'Kestrel & Marsh: grounding regulatory research in cited sources with Opie',
    result: 'Regulatory research answered with a cited section in under a minute',
    summary: 'A mid-size law firm gave its financial services practice instant, cited answers across AUSTRAC, ASIC and Corporations Act material.',
    website: 'https://example.com',
    about: [
      'Kestrel & Marsh is a Melbourne commercial law firm with 120 lawyers across six practice groups. Its financial services and regulatory team advises fund managers, lenders and fintechs on licensing, disclosure and anti-money-laundering obligations.',
    ],
    products: [
      { label: 'Assistant', to: '/platform/assistant' },
      { label: 'Vault & review tables', to: '/platform/vault' },
      { label: 'Legal teams', to: '/solutions/legal-teams' },
    ],
    results: [
      { value: '< 1 min', label: 'to a cited answer on a regulatory question' },
      { value: '40+', label: 'legislative instruments and guides in the shared knowledge base' },
      { value: '0', label: 'uncited answers accepted into advice' },
    ],
    quote: {
      text: 'Our lawyers were never worried about whether AI could write. They were worried about whether it could point to the section. Opie points to the section.',
      name: 'Daniel Okafor',
      title: 'Partner, Financial Services, Kestrel & Marsh',
    },
    challenge: {
      h: 'Fast answers or safe answers, not both',
      paras: [
        'Regulatory questions arrived constantly: from clients, from other practice groups, from junior lawyers preparing advice. Answering well meant opening the legislation, the regulatory guide and the firm’s own precedents, and reconciling them. Answering fast meant relying on memory.',
        'The firm had tried general-purpose AI tools and stopped: confident answers with invented references were worse than no answer at all.',
      ],
    },
    sections: [
      {
        h: 'A knowledge base built from the actual instruments',
        paras: [
          'The practice group loaded the AML/CTF Act and Rules, relevant ASIC regulatory guides, Corporations Act chapters and the firm’s own internal notes into an Opie workspace vault. Opie chunks legislation by section and guides by heading, so retrieval lands on the provision rather than a page.',
          'Personal knowledge stays personal: a lawyer’s own working notes are available to their queries and nobody else’s.',
        ],
        image: { shot: 'regulatory search', caption: 'A regulatory query answered with the cited section and a link back to the source instrument.' },
      },
      {
        h: 'Answers with provenance',
        paras: [
          'Every response includes the exact source location. Lawyers click through, read the provision in context, and either accept the answer into their notes or refine the question. The firm’s policy is simple: no citation, no use.',
        ],
        quote: {
          text: 'The junior lawyers use it most, and use it best. It has become the way you check your own understanding before you take a question to a partner.',
          name: 'Mei Lin Chau',
          title: 'Senior Associate, Kestrel & Marsh',
        },
      },
    ],
    next: {
      h: 'What’s next',
      paras: [
        'Kestrel & Marsh is piloting review tables for licence-application document sets and building a specialist agent for AML programme reviews that runs against a client’s own policy documents.',
      ],
      quote: {
        text: 'We started with search because it was the safest place to start. The next step is letting Opie do the first read of a document set, with our people doing the second.',
        name: 'Daniel Okafor',
        title: 'Partner, Financial Services, Kestrel & Marsh',
      },
    },
  },

  {
    slug: 'brightwater-advisory',
    fictional: true,
    name: 'Brightwater Advisory',
    logoText: 'Brightwater',
    cover: '/covers/gradient-meadow.svg',
    industry: 'Accounting & advisory',
    location: 'Brisbane, Australia',
    size: '60 staff, 400+ business clients',
    headline: 'Brightwater Advisory: turning bulk statement extraction into audit-ready working papers with Opie',
    result: '9 hours saved per client engagement',
    summary: 'An accounting and advisory practice automated figure extraction and reconciliation across bank statements, invoices and ledgers.',
    website: 'https://example.com',
    about: [
      'Brightwater Advisory is a Brisbane accounting and advisory practice serving more than 400 small and mid-size businesses. Its engagements range from year-end compliance and BAS preparation to due diligence and finance-function outsourcing.',
    ],
    products: [
      { label: 'Vault & review tables', to: '/platform/vault' },
      { label: 'Integrations', to: '/platform/integrations' },
      { label: 'Tasks & calendar', to: '/platform/tasks-calendar' },
      { label: 'Accountants & advisors', to: '/solutions/accountants-advisors' },
    ],
    results: [
      { value: '9 hrs', label: 'saved per engagement on extraction and reconciliation' },
      { value: '400+', label: 'client files organised in scoped vaults' },
      { value: '3×', label: 'more due-diligence engagements per quarter with the same team' },
    ],
    quote: {
      text: 'The work that used to fill the first two days of an engagement now happens before we sit down. What we do with the numbers has not changed. How long it takes to get them has.',
      name: 'Sam Whitford',
      title: 'Managing Partner, Brightwater Advisory',
    },
    challenge: {
      h: 'Two days of typing before the real work',
      paras: [
        'Every engagement began the same way: bank statements, supplier invoices and ledger exports arrived as PDFs and spreadsheets in different formats, and someone keyed the figures into working papers before any analysis could begin. Errors crept in, and finding them later was slow.',
        'Growth in due-diligence work made the problem acute: those engagements have tight deadlines and heavy document loads, and the practice was turning work away.',
      ],
    },
    sections: [
      {
        h: 'Extraction and reconciliation in review tables',
        paras: [
          'Brightwater built review tables for its most common document sets. Statements and invoices are uploaded in bulk; Opie extracts dates, counterparties, amounts and references into rows, each linked to the exact position in the source document. A reconciliation view compares figures across sources and highlights the mismatches.',
          'Staff verify the exceptions rather than re-key the totals. Every verified figure carries its provenance into the working paper.',
        ],
        quote: {
          text: 'Reviewers see the number and the pixel it came from, side by side. That is what made our audit partners comfortable signing off on it.',
          name: 'Leah Nguyen',
          title: 'Director, Assurance, Brightwater Advisory',
        },
        image: { shot: 'statement reconciliation', caption: 'A reconciliation table with source-linked figures and highlighted exceptions.' },
      },
      {
        h: 'Client vaults, connected systems, scheduled work',
        paras: [
          'Each client has a scoped vault with reader, editor and admin roles, so seasonal staff see only the engagements they are on. Integrations bring in files from the practice’s document store and email, and recurring compliance work runs on scheduled tasks with due dates and approvals.',
        ],
      },
    ],
    next: {
      h: 'What’s next',
      paras: [
        'The practice is rolling out a specialist agent for first-pass due-diligence findings and connecting client accounting platforms so ledger data lands in Opie without an export step.',
      ],
      quote: {
        text: 'We took on three times the due-diligence work this quarter with the same team. That is the whole story.',
        name: 'Sam Whitford',
        title: 'Managing Partner, Brightwater Advisory',
      },
    },
  },
];

export const caseStudies = storyEntries.filter((story) => !story.draft);

export function getCaseStudy(slug) {
  return caseStudies.find((c) => c.slug === slug) || null;
}
