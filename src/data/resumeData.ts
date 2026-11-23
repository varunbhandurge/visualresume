import {
  MetricItem,
  CapabilityPillar,
  ClientItem,
  DomainHighlight,
  ProjectItem,
  LifecycleStage,
} from './types';

export const PERSONAL_DETAILS = {
  name: 'Varun Bhandurge',
  role: 'Key Account Manager | Lead Business Analyst | Project Manager (CSM®)',
  tagline:
    'Bridging the gap between enterprise business vision and technical execution—from client discovery, AI prototyping, and SLA negotiations to full-SDLC delivery, cybersecurity sales, and contract renewals.',
  location: 'Mumbai, India',
  email: 'varun.bhandurge@gmail.com',
  github: 'https://github.com/varunbhandurge',
  linkedin: 'https://linkedin.com/in/varunbhandurge',
  resumePdfUrl: '/resume.pdf',
  availabilityBadge: 'Open to Executive & High-Impact Leadership Roles',
  experienceYears: '8+ Years',
};

export const METRICS: MetricItem[] = [
  {
    id: 'revenue',
    value: '₹10 Cr+',
    label: 'Enterprise Revenue Driven',
    sublabel: '55% of Company Revenue',
    impactNote:
      'Delivered 9 enterprise projects within 10 months for a Tier-1 private sector bank, securing dominant annual recurring revenue.',
    badge: 'Tier-1 BFSI Scale',
    accent: 'emerald',
  },
  {
    id: 'kyc-accuracy',
    value: '95%+',
    label: 'KYC Automation Accuracy',
    sublabel: '<0.1% False Positives | <4% FN',
    impactNote:
      'Engineered and rolled out automated digital onboarding and OCR ingestion pipelines with strict regulatory compliance.',
    badge: 'Production Reliability',
    accent: 'emerald',
  },
  {
    id: 'clients-trust',
    value: '5+ Tier-1',
    label: 'BFSI Enterprise Accounts',
    sublabel: 'ICICI, HDFC, ABSLI, Reliance',
    impactNote:
      'Proven client stewardship, pre-sales deal defense, and SLA governance across India’s leading private banking and insurance institutions.',
    badge: 'Institutional Trust',
    accent: 'blue',
  },
  {
    id: 'sdlc-ownership',
    value: '100%',
    label: 'Full-Lifecycle Ownership',
    sublabel: 'Pre-Sales to Agile Production',
    impactNote:
      'Certified Scrum Master (CSM®) driving end-to-end accountability from scope definition and AI prototyping to contract renewals.',
    badge: 'Zero Handoff Friction',
    accent: 'blue',
  },
];

export const CAPABILITY_PILLARS: CapabilityPillar[] = [
  {
    id: 'ba-ai-prototyping',
    title: 'Business Analysis & AI Prototyping',
    shortTitle: 'BA & AI Prototyping',
    badge: 'Discovery & Translation',
    iconName: 'Sparkles',
    tagline: 'Converting ambiguous stakeholder demands into engineered, high-fidelity specs and functional AI prototypes.',
    description:
      'Specialized in uncovering unstated client requirements, eliminating technical blind spots, and de-risking enterprise delivery before writing production code. Utilizes rapid AI-assisted prototyping to validate customer journeys and technical feasibility in hours rather than weeks.',
    bulletPoints: [
      'Comprehensive requirement elicitation across business stakeholders, compliance teams, and enterprise architects.',
      'Translating complex business logic and regulatory mandates into unambiguous BRDs, PRDs, FRDs, and user stories.',
      'Rapid AI-assisted functional prototyping using LLM workflows, FastAPI microservices, and interactive mockups to validate flows.',
      'Deep domain mastery of BFSI customer onboarding, video KYC, identity verification, and Google Document AI OCR pipelines.',
      'Designing detailed UML architecture, sequence diagrams, BPMN 2.0 process workflows, and data migration plans.',
    ],
    deliverables: [
      'Business Requirement Documents (BRD)',
      'Product Requirement Documents (PRD)',
      'Functional Requirement Specs (FRD)',
      'Process Flow Diagrams & Sequence Maps',
      'Interactive Working Prototypes (FastAPI/React)',
      'OCR Extraction Accuracy Benchmarks',
    ],
    technologies: [
      'Google Document AI / Cloud Vision',
      'BPMN 2.0 / Lucidchart / Miro',
      'FastAPI / Next.js Prototyping',
      'Jira / Confluence / Asana',
      'Ollama / Claude API / Agentic Tools',
      'Postman / Swagger Open-API',
    ],
    executiveProof:
      'Architected digital onboarding workflows for ICICI Bank and HDFC ERGO that cut client document processing turnaround time from 48 hours to under 4 minutes with 95%+ precision.',
  },
  {
    id: 'project-management-sdlc',
    title: 'Project Management & End-to-End SDLC',
    shortTitle: 'PM & SDLC Execution',
    badge: 'Certified Scrum Master (CSM®)',
    iconName: 'Kanban',
    tagline: 'Orchestrating cross-functional velocity, rigorous SLA governance, and zero-defect production rollouts.',
    description:
      'Certified Scrum Master (CSM®) who treats engineering timelines as binding business commitments. Drives Agile sprint cadences, proactive dependency tracking, risk mitigation matrices, and cross-functional synchronization across frontend, backend, QA, security, and client IT.',
    bulletPoints: [
      'Leading Agile ceremonies: daily standups, sprint grooming, velocity forecasting, and blameless retrospectives.',
      'Active sprint backlog hygiene, priority triage, and scope-creep defense against changing enterprise demands.',
      'Rigorous resource allocation, cross-team dependency mapping, and blocker resolution across distributed squads.',
      'Setting up automated testing guardrails, CI/CD pipeline sanity checks, and staging sign-off gates with enterprise client teams.',
      'Production release orchestration, rollback readiness, disaster recovery planning, and post-launch hypercare governance.',
    ],
    deliverables: [
      'Agile Sprint Roadmaps & Burn-Down Trackers',
      'Project Charters & Work Breakdown Structures (WBS)',
      'Risk Mitigation Matrices (RAG Status Reporting)',
      'UAT Acceptance Criteria & Sign-Off Packs',
      'Release Notes & Production Cutover Runbooks',
      'Post-Mortem & Retrospective Artifacts',
    ],
    technologies: [
      'Certified Scrum Master (CSM®)',
      'Jira Advanced Roadmaps & Dashboards',
      'Git / GitHub Actions CI/CD',
      'Confluence Knowledge Repositories',
      'Slack / Teams Webhook Incident Channels',
      'Linear / ClickUp / Notion',
    ],
    executiveProof:
      'Delivered 9 simultaneous enterprise BFSI projects within 10 months with zero missed contractual release milestones and 100% successful UAT sign-offs.',
  },
  {
    id: 'kam-cybersecurity-sales',
    title: 'Key Account Management & Cybersecurity Sales',
    shortTitle: 'KAM & Cyber Sales',
    badge: 'Revenue & Enterprise Growth',
    iconName: 'ShieldCheck',
    tagline: 'Cultivating C-suite trust, leading consultative security solutions, and commanding multi-crore enterprise renewals.',
    description:
      'Enterprise account leader who understands that technical solutions only succeed when aligned with client P&L and risk exposure. Experienced in consultative pre-sales, commercial pricing models, SLA penalty negotiations, and pitching advanced Cybersecurity and Governance frameworks to BFSI CISOs and CTOs.',
    bulletPoints: [
      'Direct executive relationship management with C-suite stakeholders, Chief Risk Officers (CROs), and IT procurement heads.',
      'Consultative enterprise selling of high-margin Cybersecurity offerings: GRC (Governance, Risk & Compliance), Red Teaming, and Managed Security Services (MSS).',
      'Navigating complex BFSI vendor empanelment, legal reviews, Master Services Agreements (MSAs), and Statements of Work (SOWs).',
      'Commercial structuring, margin protection, annual price indexing, and enterprise milestone billing management.',
      'Proactive account farming and multi-year contract renewals through quarterly business reviews (QBRs) and executive transparency.',
    ],
    deliverables: [
      'Master Services Agreements (MSA) & SOWs',
      'Service Level Agreement (SLA) Frameworks',
      'Commercial Proposal Pricing Models & Margin Sheets',
      'Executive Quarterly Business Review (QBR) Decks',
      'Vendor Risk Assessment & Empanelment Packs',
      'Red Teaming & Security Posture Briefings',
    ],
    technologies: [
      'Enterprise GRC & Cyber Frameworks (ISO 27001, RBI CSB)',
      'Salesforce / HubSpot CRM Pipelines',
      'Contract Lifecycle & SLA Monitoring',
      'Pre-Sales Solution Architecture Pitches',
      'Stakeholder Power Maps & Account Plans',
      'Commercial Negotiation Frameworks',
    ],
    executiveProof:
      'Expanded Tier-1 private bank relationship from a single pilot into 9 enterprise contracts, driving ₹10 Cr+ in client billings representing 55% of the firm’s total corporate top-line.',
  },
];

export const CLIENT_LOGOS: ClientItem[] = [
  {
    id: 'icici-bank',
    name: 'ICICI Bank',
    category: 'Tier-1 Private Sector Bank',
    statusBadge: '₹10 Cr+ Flagship Account',
    summary:
      'Spearheaded 9 enterprise workflow deliveries including digital onboarding, customer verification, and core workflow modernization.',
    impactMetrics: '9 Projects Delivered | 55% Total Company Revenue',
  },
  {
    id: 'hdfc-ergo',
    name: 'HDFC ERGO',
    category: 'General Insurance Leader',
    statusBadge: 'Enterprise Insurance Client',
    summary:
      'Engineered policyholder verification systems and claim document processing automation for mission-critical insurance operations.',
    impactMetrics: '48hr to 4min Turnaround | High-Volume Ingestion',
  },
  {
    id: 'icici-pru',
    name: 'ICICI Prudential',
    category: 'Life Insurance Giant',
    statusBadge: 'Strategic Long-Term Partner',
    summary:
      'Delivered regulatory-compliant document extraction, customer KYC validation, and seamless data exchange with internal policy backends.',
    impactMetrics: '95%+ Automated KYC Precision | Zero UAT Slips',
  },
  {
    id: 'absli',
    name: 'Aditya Birla Sun Life (ABSLI)',
    category: 'Financial Services & Life Insurance',
    statusBadge: 'Enterprise Account',
    summary:
      'Led client requirements elicitation, workflow mapping, and pre-sales architecture for underwriting automation workflows.',
    impactMetrics: 'End-to-End SLA Governance | Agile Delivery',
  },
  {
    id: 'reliance-adag',
    name: 'Reliance ADAG',
    category: 'Conglomerate & Financial Services',
    statusBadge: 'Enterprise Group Client',
    summary:
      'Managed enterprise account stakeholder relationships, deliverables governance, and security compliance verification.',
    impactMetrics: 'Executive Stakeholder Governance | Cyber GRC',
  },
];

export const DOMAIN_HIGHLIGHTS: DomainHighlight[] = [
  {
    id: 'bfsi-onboarding-ocr',
    title: 'BFSI Customer Onboarding & Intelligent OCR',
    badge: 'Core Functional Domain',
    subtitle: 'High-Throughput Digital Verification & Regulatory Adherence',
    description:
      'End-to-end design and rollout of automated digital identity verification pipelines for Indian banking and insurance giants. Integrating Google Document AI, Aadhaar/PAN validation APIs, and custom computer vision modules to achieve high-throughput straight-through processing (STP).',
    metrics: [
      '95%+ Automated Extraction Accuracy across non-standard documents',
      '<0.1% False Positive Rate on regulatory compliance checks',
      '<4% False Negative Rate with intelligent exception routing',
      '48 Hours to Under 4 Minutes document verification lifecycle',
    ],
    keyCapabilities: [
      'Google Document AI & Cloud Vision Pipeline Tuning',
      'PAN, Aadhaar, Passport & Cheque Extraction Models',
      'Fuzzy String Matching & Name Discrepancy Resolution',
      'Automated Exception Routing & Human-in-the-Loop Fallbacks',
    ],
    governanceAndStandards: [
      'RBI Digital KYC Guidelines Compliance',
      'UIDAI Aadhaar Data Masking & Vault Standards',
      'Audit Trail Ingestion with Immutable Timestamps',
    ],
  },
  {
    id: 'cybersecurity-grc',
    title: 'Enterprise Cybersecurity & GRC Solutions',
    badge: 'Security Sales & Governance',
    subtitle: 'Consultative Defense, Red Teaming & Regulatory Posture',
    description:
      'Consultative sales and project governance for enterprise cybersecurity initiatives across BFSI clients. Framing technical vulnerability disclosures, Red Teaming exercises, and Governance, Risk & Compliance (GRC) audits into executive risk reduction plans.',
    metrics: [
      'Multi-Year GRC & Red Teaming Retainers Secured',
      'Zero Compliance Violations on Delivered Banking Systems',
      '100% Remediation Tracking of Critical Vulnerabilities',
      'Comprehensive Threat Profiling for Banking Gateways',
    ],
    keyCapabilities: [
      'Consultative Selling of Red Teaming & VAPT Engagements',
      'Governance, Risk & Compliance (GRC) Roadmaps',
      'Managed Security Services (MSS) Resource Scoping',
      'Third-Party Vendor Risk Assessment (TPRM) Defense',
    ],
    governanceAndStandards: [
      'RBI Cybersecurity Framework for Banks',
      'ISO/IEC 27001:2022 Information Security Management',
      'SOC 2 Type II Operational Trust Principles',
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'ba-account-swarm',
    title: 'BA & Account Management Swarm',
    repoName: 'ba-account-swarm',
    category: 'AI & Agents',
    badge: 'Agentic Workflow Automation',
    summary:
      'Multi-agent AI ecosystem automating BRDs, PRDs, client proposals, Jira tickets, CRM sync, and voice/WhatsApp task delegation using local LLMs and Model Context Protocol (MCP) servers.',
    description:
      'A specialized autonomous multi-agent operating system engineered specifically for Lead Business Analysts and Key Account Managers. It orchestrates role-specific subagents to parse messy client meeting transcripts, extract unstated requirements, draft production-ready PRDs/BRDs, create groomed Jira backlogs, and sync CRM pipelines without human context switching.',
    architectureDetails: [
      'FastAPI async backend orchestrating local Ollama models (Qwen 2.5 / 3.6) and Anthropic Claude APIs.',
      'Model Context Protocol (MCP) servers bridging Jira, HubSpot CRM, Google Workspace, and local filesystems.',
      'Hierarchical agent swarm architecture: Lead Orchestrator, Requirements Synthesizer, Jira Architect, and Risk Analyst.',
      'Integrated voice audio transcription and WhatsApp webhook ingestion for field client updates.',
    ],
    tags: ['FastAPI', 'Ollama (Qwen 3.6)', 'MCP Servers', 'Multi-Agent AI', 'Python', 'Jira API'],
    metricsOrFeatures: [
      'Reduces PRD/BRD authoring turnaround from 12 hours to 15 minutes',
      'Auto-generates structured User Stories with Gherkin acceptance criteria',
      'Zero cloud data leakage when operating in local Ollama private model mode',
    ],
    githubUrl: 'https://github.com/varunbhandurge',
  },
  {
    id: 'tradebuddy',
    title: 'TradeBuddy / MaximusOne',
    repoName: 'tradebuddy',
    category: 'Full-Stack Apps',
    badge: 'Production Trading Intelligence',
    summary:
      'AI-powered real-time trading analytics dashboard and automated execution system built for high-conviction decision support and risk control.',
    description:
      'A comprehensive institutional-grade trading command center built with Next.js, Supabase, and autonomous background execution workers. Features real-time market data streaming, multi-factor algorithmic signal evaluation, automated drawdown risk guardrails, and complete audit logging of trade decisions.',
    architectureDetails: [
      'Next.js App Router frontend with real-time WebSocket tick ingestion and Apex-styled dark-mode charts.',
      'Supabase PostgreSQL relational state store with Row-Level Security (RLS) and real-time database webhooks.',
      'Continuous 24/7 autonomous background daemon monitoring price action, SL/TP boundaries, and daily profit locks.',
      'Vercel Cloud Cron jobs triggering scheduled morning pre-market warmups and post-market balance reconciliation.',
    ],
    tags: ['Next.js', 'Supabase', 'Vercel', 'AI Analytics', 'TypeScript', 'Tailwind CSS'],
    metricsOrFeatures: [
      'Sub-50ms signal processing latency on live price feeds',
      'Automated capital preservation guardrails with hard max-loss circuit breakers',
      'Live deployed in production with active monitoring',
    ],
    githubUrl: 'https://github.com/varunbhandurge/tradebuddy',
    liveUrl: 'https://maximusone.vercel.app',
  },
  {
    id: 'advisor-recruitment',
    title: 'AI-Powered Advisor Recruitment Prototype',
    category: 'AI & Agents',
    badge: 'Conversational FinTech AI',
    summary:
      'End-to-end conversational AI recruitment pipeline featuring automated candidate screening, database tracking, and webhook orchestration.',
    description:
      'Engineered as a high-fidelity proof-of-concept for financial advisory firms and insurance brokers looking to scale agency onboarding. The conversational agent conducts initial candidate interviews, scores resume qualification match, records structured applicant metadata, and triggers automated follow-ups.',
    architectureDetails: [
      'FastAPI backend orchestrating multi-turn conversational agents with stateful session management.',
      'n8n workflow webhooks integrating candidate calendar scheduling and interviewer dispatch.',
      'Embedded SQLite database storing candidate transcripts, qualification scores, and onboarding stage flags.',
      'Structured JSON output validation guaranteeing zero hallucinated interview scores.',
    ],
    tags: ['FastAPI', 'SQLite', 'n8n', 'Conversational AI', 'Python', 'Webhooks'],
    metricsOrFeatures: [
      'Automates 80% of initial tier-1 candidate screening friction',
      'Zero manual entry: auto-populates CRM pipeline with applicant scorecards',
      'Real-time webhook notifications dispatched to hiring leads',
    ],
    githubUrl: 'https://github.com/varunbhandurge',
  },
  {
    id: 'idraneel-karyalay',
    title: 'Idraneel Karyalay — Venue Management Platform',
    repoName: 'IdraneelKaryalay-wedding-hall',
    category: 'Full-Stack Apps',
    badge: 'Live Commercial Platform',
    summary:
      'Full-stack booking and availability platform featuring real-time date queries, dynamic pricing logic, photo galleries, and mobile-ready architecture.',
    description:
      'A customer-facing and back-office venue management system custom engineered for high-demand wedding and event bookings. Provides customers with instant date availability searches, transparent seasonal package pricing calculators, virtual photo tours, and direct booking inquiries.',
    architectureDetails: [
      'Mobile-first responsive frontend optimized for sub-second page loads even on cellular mobile connections.',
      'Dynamic pricing engine factoring weekend premiums, seasonal demand surges, and guest tier calculations.',
      'Integrated booking request state machine with instant WhatsApp contact actions.',
      'Offline-capable service worker caching and progressive web app (PWA) readiness.',
    ],
    tags: ['Web App', 'Dynamic Pricing', 'GitHub Pages', 'Mobile-Ready', 'JavaScript', 'Tailwind'],
    metricsOrFeatures: [
      '100/100 Mobile Usability and Lighthouse Performance Score',
      'Cut booking inquiry friction by 70% with direct instant availability checking',
      'Live in production serving ongoing client reservations',
    ],
    githubUrl: 'https://github.com/varunbhandurge/IdraneelKaryalay-wedding-hall',
  },
  {
    id: 'billvault',
    title: 'BillVault',
    repoName: 'billvault',
    category: 'Full-Stack Apps',
    badge: 'FinTech Expense Hub',
    summary:
      'Clean, dark-mode personal finance and recurring bill management web application deployed on Vercel with zero friction.',
    description:
      'Personal finance hub built to provide complete visibility over recurring obligations, SaaS subscriptions, credit bill cycles, and cash flow projections. Features proactive due-date countdowns, category expense distribution analytics, and frictionless one-click status updates.',
    architectureDetails: [
      'Next.js App Router architecture leveraging React Server Components for instantaneous initial renders.',
      'Tailwind CSS sleek obsidian UI with custom color-coded status badges for overdue, impending, and paid bills.',
      'Client-side encrypted local storage fallback alongside cloud sync for sensitive financial tracking.',
      'Optimized Vercel Edge caching and static asset distribution.',
    ],
    tags: ['Next.js', 'Vercel', 'FinTech UI', 'TypeScript', 'Tailwind CSS', 'Responsive Grid'],
    metricsOrFeatures: [
      'Zero late payments with automated days-until-due visual warning thresholds',
      'Interactive monthly recurring burn-rate breakdown by category',
      'Designed with executive dark-mode aesthetic and zero boilerplate clutter',
    ],
    githubUrl: 'https://github.com/varunbhandurge',
  },
  {
    id: 'varunsjobbot',
    title: "Varun's Job Bot",
    repoName: 'varunsjobbot',
    category: 'Automation',
    badge: 'Career Automation API',
    summary:
      'Automated personal career intelligence API and workflow engine built with FastAPI and hosted on Vercel.',
    description:
      'A continuous background automation engine designed to monitor executive job openings, score match relevance against target role criteria (Lead BA, Key Account Manager, Scrum Master), deduplicate application links, and deliver curated executive alerts directly to personal communications channels.',
    architectureDetails: [
      'FastAPI asynchronous REST endpoints deployed serverless on Vercel Python runtime.',
      'Intelligent keyword density and semantic match scorer filtering out irrelevant listings.',
      'Automated rate-limiting, proxy rotation, and headers spoofing for reliable feed polling.',
      'Structured telemetry logging and status health checks.',
    ],
    tags: ['FastAPI', 'Python', 'Vercel', 'REST API', 'Automation', 'AsyncIO'],
    metricsOrFeatures: [
      'Filters out 90% of generic recruiter spam to highlight high-conviction roles',
      'Runs serverless on Vercel with zero idle server operational costs',
      'Instantaneous alerting on high-priority enterprise postings',
    ],
    githubUrl: 'https://github.com/varunbhandurge',
  },
  {
    id: 'jobsearchagent',
    title: 'JobSearchAgent',
    repoName: 'JobSearchAgent',
    category: 'Automation',
    badge: 'Autonomous CI/CD Pipeline',
    summary:
      'Autonomous job-hunting pipeline orchestrated via scheduled GitHub Actions workflows with automated data persistence.',
    description:
      'A fully automated, zero-cost autonomous agent running on scheduled GitHub Actions cron runners. It queries career feeds, filters target roles across tech and BFSI sectors, writes deduplicated opportunities to markdown tracking digests, and commits updated reports automatically back to the repository.',
    architectureDetails: [
      'Automated GitHub Actions CI/CD cron triggers executing every morning at 06:00 UTC.',
      'Python scraper and parser extracting structured company, role, salary, and requirements data.',
      'Git bot identity auto-committing updated markdown digest tables directly to the main branch.',
      'Resilient failure handling and secret masking using GitHub Actions environment secrets.',
    ],
    tags: ['GitHub Actions', 'Python', 'Workflow Automation', 'Cron Jobs', 'CI/CD Pipelines'],
    metricsOrFeatures: [
      '100% autonomous operation running for months without manual intervention',
      'Zero infrastructure hosting costs running entirely on GitHub compute',
      'Maintains an immutable historical archive of target opportunities',
    ],
    githubUrl: 'https://github.com/varunbhandurge',
  },
];

export const LIFECYCLE_STAGES: LifecycleStage[] = [
  {
    step: 1,
    id: 'discovery-presales',
    title: '1. Discovery & Pre-Sales',
    shortTitle: 'Discovery & Pre-Sales',
    phaseName: 'Phase 01: Client Alignment & Solution Architecture',
    objective:
      'Uncover the client’s core business pain points, map executive stakeholder expectations, and formulate an airtight technical and commercial solution proposal.',
    deliverables: [
      'Executive Discovery Workshop Notes & Pain Point Map',
      'Technical Feasibility Assessment & Risk Inventory',
      'High-Level Architecture Blueprint & Solution Concept',
      'Commercial Solution Proposal & Pricing Structure',
    ],
    stakeholderTouchpoints: [
      'Client Business Heads & VP of Digital Transformation',
      'Enterprise Technology Architects & Security Leads',
      'Internal Engineering Leads & Commercial Estimation Team',
    ],
    governanceAndRisk:
      'Identifying architectural limitations, unstated compliance mandates, and setting early boundaries against unfeasible scope expectations.',
    kpiOutcome: 'Signed Letter of Intent (LOI) / Solution Approval from C-level sponsors.',
  },
  {
    step: 2,
    id: 'sla-deal-closure',
    title: '2. SLA & Deal Closure',
    shortTitle: 'SLA & Deal Closure',
    phaseName: 'Phase 02: Commercial Negotiation & Contracting',
    objective:
      'Navigate enterprise procurement, negotiate mutually profitable commercials, protect delivery team margins, and establish binding Service Level Agreements (SLAs).',
    deliverables: [
      'Master Services Agreement (MSA) & Scope of Work (SOW)',
      'Service Level Agreement (SLA) & Penalty Calculation Matrix',
      'Payment Milestones Schedule & Acceptance Criteria Clauses',
      'Vendor Empanelment & Compliance Clearance Dossier',
    ],
    stakeholderTouchpoints: [
      'Client Chief Procurement Officer (CPO) & Legal Council',
      'Chief Risk Officer (CRO) & InfoSec Compliance Team',
      'Company Finance, Legal, and Executive Leadership',
    ],
    governanceAndRisk:
      'Calibrating SLA uptime/latency clauses against engineering realities to prevent punitive financial penalties while ensuring high-trust client commitments.',
    kpiOutcome: 'Executed MSA & SOW with favorable milestone billing terms and zero open legal points.',
  },
  {
    step: 3,
    id: 'requirements-prototyping',
    title: '3. Requirement Elicitation & AI Prototyping',
    shortTitle: 'Requirements & Prototyping',
    phaseName: 'Phase 03: Precision Specifications & De-Risking',
    objective:
      'Deconstruct business requirements into engineering-ready documentation and build functional AI-assisted prototypes to visually validate flows before sprint kickoff.',
    deliverables: [
      'Comprehensive Business Requirement Document (BRD)',
      'Product Requirement Document (PRD) with Edge Cases',
      'BPMN 2.0 Process Workflow Maps & System Sequence Diagrams',
      'Interactive AI-Powered Clickable Prototype (FastAPI/React)',
      'Groomed Jira Backlog with Detailed Acceptance Criteria',
    ],
    stakeholderTouchpoints: [
      'Business Operations Managers & Field Compliance Teams',
      'Frontend & Backend Engineering Squads',
      'UI/UX Designers & QA Lead Automation Engineers',
    ],
    governanceAndRisk:
      'Eliminating technical ambiguities and aligning business expectations visually through working prototypes to prevent mid-project rework.',
    kpiOutcome: '100% formal stakeholder sign-off on BRD/PRD and ready-to-sprint backlog items.',
  },
  {
    step: 4,
    id: 'agile-sdlc-delivery',
    title: '4. Agile Sprints & SDLC Delivery',
    shortTitle: 'Agile SDLC Delivery',
    phaseName: 'Phase 04: Execution, Sprints & Risk Mitigation',
    objective:
      'Lead cross-functional engineering squads using Certified Scrum Master (CSM®) practices to build, test, and package production-grade software on schedule.',
    deliverables: [
      'Bi-Weekly Production-Ready Working Increments',
      'Sprint Burndown Charts & Velocity Forecasting Reports',
      'Automated Test Execution Runs (Unit, Integration, Security)',
      'Weekly Executive RAG (Red/Amber/Green) Status Dashboards',
      'UAT Test Scripts & Defect Tracking Log',
    ],
    stakeholderTouchpoints: [
      'Cross-Functional Engineering Squad (Dev, QA, DevOps)',
      'Client Project Managers & Technical Integration Leads',
      'External Third-Party API Vendors & Infrastructure Teams',
    ],
    governanceAndRisk:
      'Proactive blocker eradication in daily standups, preventing scope-creep, and maintaining continuous CI/CD build health.',
    kpiOutcome: 'Zero missed contractual delivery dates and 98%+ automated test pass rate.',
  },
  {
    step: 5,
    id: 'client-onboarding-golive',
    title: '5. Client Onboarding & Go-Live',
    shortTitle: 'Onboarding & Go-Live',
    phaseName: 'Phase 05: Production Cutover & User Adoption',
    objective:
      'Execute seamless production deployment, guide enterprise user onboarding, establish real-time monitoring, and complete UAT sign-off.',
    deliverables: [
      'Production Cutover Runbook & Rollback Contingency Plan',
      'Formal User Acceptance Testing (UAT) Sign-Off Certificate',
      'User Training Manuals, Standard Operating Procedures (SOPs)',
      'Real-Time APM Dashboards & Exception Alerting Triggers',
      'Hypercare Support Log & Incident Escalation Matrix',
    ],
    stakeholderTouchpoints: [
      'Enterprise End-Users & Branch Operations Personnel',
      'Client IT Infrastructure & Production Ops Teams',
      'Senior Executive Project Sponsors',
    ],
    governanceAndRisk:
      'Executing zero-downtime cutover during off-peak windows with pre-verified rollback checkpoints and active hypercare monitoring.',
    kpiOutcome: 'Flawless production go-live with 100% UAT sign-off and immediate user adoption.',
  },
  {
    step: 6,
    id: 'managed-services-renewals',
    title: '6. Managed Services & Renewals',
    shortTitle: 'Managed Services & Renewals',
    phaseName: 'Phase 06: Sustained Value, Upselling & Expansion',
    objective:
      'Deliver ongoing SLA excellence, lead Quarterly Business Reviews (QBRs), and expand account revenue through upselling and multi-year renewals.',
    deliverables: [
      'Monthly SLA Performance & System Uptime Reports',
      'Quarterly Business Review (QBR) Strategic Presentations',
      'Feature Enhancement Backlog & Annual Technology Roadmaps',
      'Contract Renewal Proposals & Multi-Year Extension Addenda',
    ],
    stakeholderTouchpoints: [
      'Client C-Suite Sponsors (CTO, COO, Head of Digital)',
      'Account Management, Customer Success, and Support Leads',
      'Executive Leadership Committee',
    ],
    governanceAndRisk:
      'Continuous uptime defense, rapid resolution of minor edge cases, and anticipating regulatory shifts before they impact the client.',
    kpiOutcome: '99.9% SLA compliance, high CSAT scores, and multi-year contract renewals with account expansion.',
  },
];
