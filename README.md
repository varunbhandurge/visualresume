# Varun Bhandurge — Editorial Executive Portfolio & Live Builds

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/varunbhandurge/visualresume)
![Next.js](https://img.shields.io/badge/Next.js-14.2-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?logo=tailwind-css)
![Aesthetic](https://img.shields.io/badge/Aesthetic-Swiss%20Editorial%20Obsidian-3B82F6)
![Certified Scrum Master](https://img.shields.io/badge/Certified-Scrum%20Master%20(CSM%C2%AE)-10B981)
![ECBA](https://img.shields.io/badge/Certified-ECBA%E2%84%A2%20(IIBA)-3B82F6)

> **"I close enterprise deals, uncover what businesses can't see from a tech POV, and ship the AI prototypes to prove it."**  
> *Varun Bhandurge • Key Account Manager • Lead Business Analyst • Agile Project Manager (CSM®)*

---

## 🏛️ Swiss Editorial Architectural Aesthetic

An editorial, studio-grade portfolio and executive briefing web application for **Varun Bhandurge**, deployable seamlessly on **Vercel**.

- **Asymmetric 12-Column Swiss Grid:** No generic centered hero stacks. Clean 7-column executive thesis paired with a 5-column tactile proof switcher.
- **Editorial Typography Trio:**
  - **Display Serif:** `Instrument Serif` (regular & italic) for editorial headline emphasis.
  - **Body & UI:** `Plus Jakarta Sans` for crisp, authoritative readability.
  - **Badges & Numbers:** `JetBrains Mono` for tabular metrics (`₹10 Cr+`, `95%+`) and credential tags (`CSM®`, `ECBA™`).
- **Color Palette:**
  - Deep Obsidian (`#090A0D`) with subtle architectural grid lines (`rgba(255,255,255,0.04)`).
  - Warm Alabaster (`#F5F5F0`) primary typography.
  - Cool Slate (`#94A3B8`) secondary text.
  - Royal Cobalt (`#3B82F6`) interactive triggers.
  - Warm Gold (`#EAB308`) enterprise impact metrics.
- **Slide-Over Recruiter Dossier:** Full keyword and competency breakdown (BRD/PRD, Customer Onboarding, KYC, Document AI/OCR, GCP, GRC, Red Teaming, Jira, Zoho CRM) accessible with one click.

---

## 🏗️ Architecture & Component Directory

```
src/
├── app/
│   ├── globals.css                       # Google Fonts, Swiss architectural grid, tokens
│   ├── layout.tsx                        # Metadata, OpenGraph, and viewport config
│   └── page.tsx                          # Assembles all editorial sections & drawer state
├── components/
│   ├── EditorialNavbar.tsx               # Minimal sticky header with Full Dossier trigger
│   ├── AsymmetricHero.tsx                # 12-col Swiss layout with 3-tab proof switcher
│   ├── InstitutionalTrustStrip.tsx       # Edge-to-edge Tier-1 BFSI client ledger
│   ├── ChronologicalDeliveryTrack.tsx    # 4-stage connected horizontal delivery pipeline
│   ├── AsymmetricBuildsBento.tsx         # Bento grid of live deployments & GitHub repos
│   ├── EditorialFooter.tsx               # Minimalist footer with contact links
│   └── RecruiterDossierDrawer.tsx        # Slide-over recruiter dossier with complete taxonomy
└── public/
    ├── resume.pdf                        # Downloadable traditional PDF resume
    └── icon.svg                          # Modern high-contrast monogram favicon
```

---

## 💼 Core Enterprise Competencies & Execution Engine

1. **Commercial & SLA Closure:** Structuring high-value multi-year BFSI contracts, SLA penalties/incentives, and stakeholder alignment.
2. **Requirement Elicitation & Documentation:** Uncovering unstated business pain points; authoring BRDs, PRDs, FRDs, and user story maps.
3. **Rapid AI Prototyping:** Shipping working AI prototypes (FastAPI, Ollama, Vercel) in days to validate customer journeys before heavy sprint planning.
4. **Full-SDLC Agile Delivery:** Leading cross-functional squads with CSM® Scrum Alliance and ECBA™ IIBA governance.
5. **BFSI Onboarding & Document AI:** Scaling automated KYC and OCR extraction pipelines to 95%+ precision across millions of institutional onboardings.
6. **Cybersecurity & Renewals:** Managing GRC audits, red-teaming checks, and securing recurring multi-year enterprise account renewals.

---

## 🏛️ Institutional Track Record & Tier-1 BFSI Partners

- **ICICI Bank:** Core banking customer onboarding & automated KYC verification.
- **HDFC ERGO:** General insurance claims & document processing pipelines.
- **ICICI Prudential:** Life insurance customer onboarding and verification workflows.
- **ABSLI (Aditya Birla Sun Life):** Wealth & protection document automation.
- **Reliance ADAG:** Enterprise infrastructure and IT operations.

### Audited Metrics:
- **₹10 Cr+** delivered across 9 enterprise BFSI rollouts within 10 months.
- **95%+** automated precision on KYC & OCR document extraction pipelines.
- **40%** reduction in cycle time from RFP scoping to working production sprint.

---

## 🚀 Live Deployments & Open-Source Codebases

| Project | Live URL / Repo | Highlights & Stack |
| :--- | :--- | :--- |
| **MaximusOne / TradeBuddy** | [maximusone.vercel.app](https://maximusone.vercel.app) • [GitHub](https://github.com/varunbhandurge/tradebuddy) | 24/7 autonomous multi-asset algorithmic trading engine with real-time telemetry, FastAPI backend, Supabase sync, and Vercel crons. |
| **BA & AM Swarm (`BASwarm`)** | [GitHub Repo](https://github.com/varunbhandurge/BASwarm) | Autonomous multi-agent pipeline for RFP parsing, stakeholder matrix generation, and automated BRD/PRD authoring. |
| **BillVault (`Bill-Vault`)** | [GitHub Repo](https://github.com/varunbhandurge/Bill-Vault) | Enterprise financial document AI & bill OCR extraction platform with schema validation. |
| **Job Search Agent (`JobSearchAgent`)** | [GitHub Repo](https://github.com/varunbhandurge/JobSearchAgent) | Headhunter tracking, requirements matching, and dynamic resume tailoring pipeline. |
| **LocalQwen & AntigravitySyncAgent** | [LocalQwen](https://github.com/varunbhandurge/LocalQwen) • [SyncAgent](https://github.com/varunbhandurge/AntigravitySyncAgent) | Local LLM tooling (Qwen 2.5 on Ollama) + cross-device agent trajectory sync daemon. |
| **Idraneel Karyalay Venue Platform** | [GitHub Repo](https://github.com/varunbhandurge/IdraneelKaryalay-wedding-hall) | Commercial booking, venue availability, and event reservation management portal. |

---

## 🛠️ Local Development & Build Verification

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build for production (Vercel-ready)
npm run build
```

---

## 📄 License & Attribution

Designed and engineered by **Varun Bhandurge** (2026). Deployable on Vercel.
