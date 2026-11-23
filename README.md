# Varun Bhandurge — Senior Executive Portfolio & Live Builds

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/varunbhandurge/visualresume)
![Next.js](https://img.shields.io/badge/Next.js-14.2-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?logo=tailwind-css)
![Aesthetic](https://img.shields.io/badge/Aesthetic-Senior%20Executive%20Matte%20Obsidian-D6C7A9)
![Certified Scrum Master](https://img.shields.io/badge/Certified-Scrum%20Master%20(CSM%C2%AE)-white)
![ECBA](https://img.shields.io/badge/Certified-ECBA%E2%84%A2%20(IIBA)-white)

> **"I close enterprise deals, uncover what businesses miss from a tech POV, and ship AI prototypes to prove it."**  
> *Varun Bhandurge · Key Account Manager · Lead Business Analyst · Project Manager (CSM® · ECBA™)*

---

## 🏛️ Senior Executive UI/UX Architecture

- **Canvas & Tone:** Pure, deep matte obsidian (`#0A0A0B`) canvas with a subtle warm top ambient glow (`radial-gradient(60% 40% at 50% 0%, rgba(255,255,255,0.045) 0%, transparent 100%)`).
- **Monochrome & Warm Platinum Restraint:**
  - Primary actions in Warm Alabaster (`#F4F4F2`) with `#0A0A0B` text.
  - Subtle `1px solid rgba(255,255,255,0.08)` hairline dividers.
  - Muted warm champagne (`#D6C7A9`) strictly for key financial and delivery metrics (`₹10 Cr+`, `95%+`).
  - No blueprint/graph-paper grids, no bright blue buttons, and no multi-colored neon pills.
- **Editorial Typography Pairing:**
  - **Headings:** `Plus Jakarta Sans` (weight 500/600, tight tracking `-0.03em`) paired with `Instrument Serif` (italic) on key phrases.
  - **Body Text:** `Inter` (`15px–16px`, relaxed leading `1.65`, `#A1A1AA` for descriptions, `#F4F4F2` for titles).
  - **Numbers & Credentials:** `JetBrains Mono` (`12px–13px`, tabular numerals).
- **Generous Spacing:** `max-w-5xl` editorial container with generous vertical breathing room (`py-24` to `py-32`).

---

## 🏗️ Architecture & Component Directory

```
src/
├── app/
│   ├── globals.css                       # Matte obsidian tokens, Google Fonts import, hairline utils
│   ├── layout.tsx                        # Metadata, OpenGraph, viewport configuration
│   └── page.tsx                          # Assembles executive sections & slide-over drawer state
├── components/
│   ├── ExecutiveHeader.tsx               # Minimalist sticky header with inline credentials & actions
│   ├── ExecutiveHero.tsx                 # Large breathing H1, 2-line executive summary, monochrome actions
│   ├── PedigreeMetricsLedger.tsx         # Tier-1 BFSI client band & 3-column open metric strip
│   ├── ExecutionLedgerAccordion.tsx      # 6-row chronological interactive table (AM → BA → PM → AM)
│   ├── EngineeringBuildsGrid.tsx         # Quiet 2-column architectural grid with featured MaximusOne
│   ├── FullDossierDrawer.tsx             # Slide-over recruiter drawer with complete keyword matrix
│   └── QuietFooter.tsx                   # Single horizontal row with contact links and PDF resume
└── public/
    ├── resume.pdf                        # Downloadable traditional PDF resume
    └── icon.svg                          # High-contrast monogram favicon
```

---

## 💼 Core Capabilities & Execution Ledger (6 Chronological Phases)

1. **01 · Commercial Closure & SLA Negotiation (Account Manager):** Leading client conversations, stakeholder alignment, deal closing, and enterprise SLA structuring.
2. **02 · Requirement Elicitation & Critical Documentation (Lead BA · ECBA™):** Translating technical blind spots into business clarity via BRDs, PRDs, FRDs, and process flows.
3. **03 · Rapid AI Prototyping & Engineering Handoff (AI Builder):** Building functional AI prototypes and shipping them directly to technical teams to validate journeys fast.
4. **04 · Full-SDLC Agile Governance (Project Manager · CSM®):** Overseeing end-to-end delivery across sprints, daily standups, resource planning, and production releases.
5. **05 · BFSI Customer Onboarding, KYC & OCR (Domain Specialist):** Architecting high-volume digital onboarding and intelligent document processing pipelines.
6. **06 · Cybersecurity Sales, Managed Services & Renewals (Account Manager):** Selling enterprise GRC, Red Teaming, and managed services while driving client onboarding and renewals.

---

## 🏛️ Institutional Pedigree & Tier-1 BFSI Partners

**ICICI Bank** · **HDFC ERGO** · **ICICI Prudential** · **ABSLI** · **Reliance ADAG**

- **₹10 Cr+ Enterprise Revenue Driven:** Delivered 9 BFSI projects within 10 months (55% of company revenue).
- **95%+ KYC & OCR Automation Precision:** Rolled out Document AI onboarding pipelines with <0.1% false positives and <4% false negatives.
- **100% Deal-to-Renewal Ownership:** Full accountability from pre-sales SLA negotiation and Agile sprints to managed services and renewals.

---

## 🚀 Shipped Deployments & Repositories

| Project | Live / Repo | Architecture |
| :--- | :--- | :--- |
| **MaximusOne / TradeBuddy** | [maximusone.vercel.app](https://maximusone.vercel.app) • [GitHub](https://github.com/varunbhandurge/tradebuddy) | AI-powered trading analytics and autonomous execution engine built with Next.js, FastAPI, Supabase, and Vercel crons. |
| **BA & AM Swarm (`BASwarm`)** | [GitHub Repo](https://github.com/varunbhandurge/BASwarm) | Multi-agent workflow automating BRDs, PRDs, proposals, CRM updates, and Jira delegation via Python, FastAPI, and local LLMs. |
| **BillVault (`Bill-Vault`)** | [GitHub Repo](https://github.com/varunbhandurge/Bill-Vault) | Personal finance and document vault web application engineered with TypeScript and Next.js. |
| **Job Search Agent (`JobSearchAgent`)** | [GitHub Repo](https://github.com/varunbhandurge/JobSearchAgent) | Autonomous job discovery and application tracking pipeline orchestrated with Python and GitHub Actions. |
| **LocalQwen & AntigravitySyncAgent** | [LocalQwen](https://github.com/varunbhandurge/LocalQwen) · [SyncAgent](https://github.com/varunbhandurge/AntigravitySyncAgent) | Offline local LLM inference tooling and autonomous workspace synchronization agents. |
| **Idraneel Karyalay & Digital Personal Trainer** | [Venue Platform](https://github.com/varunbhandurge/IdraneelKaryalay-wedding-hall) · [Fitness AI](https://github.com/varunbhandurge/DigitalPersonalTrainer) | Commercial venue booking platform with dynamic pricing and an AI-assisted fitness coaching engine. |

---

## 🛠️ Verification & Build Commands

```bash
# Install dependencies
npm install

# Run local development server
npm run dev

# Run production build (Vercel-ready)
npm run build
```

---

## 📄 License & Attribution

Designed and engineered by **Varun Bhandurge** (2026). Deployable on Vercel.
