# Varun Bhandurge — Interactive Visual Resume & Executive Portfolio

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/varunbhandurge/visualresume)
![Next.js](https://img.shields.io/badge/Next.js-14.2-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?logo=tailwind-css)
![Certified Scrum Master](https://img.shields.io/badge/Certified-Scrum%20Master%20(CSM%C2%AE)-10B981)

> **Key Account Manager | Lead Business Analyst | Project Manager (CSM®)**  
> Bridging enterprise business vision and technical execution—from discovery, AI prototyping, and SLA negotiations to full-SDLC delivery, cybersecurity sales, and contract renewals.

---

## 🏛️ Executive Profile

- **Flagship Commercial Impact:** Drove **₹10 Cr+ in enterprise revenue** by delivering **9 mission-critical projects within 10 months** for a Tier-1 private sector bank (accounting for 55% of total corporate top-line).
- **Domain Specialization:** Deep expertise in **BFSI Customer Onboarding, Digital KYC, and Intelligent OCR** (Google Document AI / Cloud Vision) achieving **95%+ automated extraction accuracy** (<0.1% false positives, <4% false negatives).
- **Enterprise Client Pedigree:** Proven client stewardship, pre-sales deal defense, and SLA governance across **ICICI Bank, HDFC ERGO, ICICI Prudential, Aditya Birla Sun Life Insurance (ABSLI), and Reliance ADAG**.
- **Full-Lifecycle Ownership:** Certified Scrum Master (CSM®) driving end-to-end accountability from client discovery, BRD/PRD authoring, and rapid AI prototyping to cross-functional sprint governance and post-launch renewals.

---

## ⚡ Interactive Application Architecture

This application is built with a minimal-dependency, high-performance architecture engineered for sub-second page loads and zero-friction deployment on **Vercel**:

```
src/
├── app/
│   ├── globals.css         # Custom obsidian styling, sleek scrollbars, and glow tokens
│   ├── layout.tsx          # Font optimization (Plus Jakarta Sans & JetBrains Mono), SEO metadata
│   └── page.tsx            # Single-page executive layout coordinating all modules
├── components/
│   ├── Navbar.tsx          # Sticky glassmorphic header, live availability pill, quick CTAs
│   ├── Hero.tsx            # Headline, executive positioning, resume PDF download & GitHub CTAs
│   ├── MetricsBar.tsx      # 4-column KPI strip (₹10 Cr+ revenue, 95%+ KYC accuracy, Tier-1 trust)
│   ├── CapabilityTabs.tsx  # 360° Capability Matrix tabbed view across 3 strategic pillars
│   ├── ClientGrid.tsx      # BFSI enterprise client wordmarks & domain deep-dives
│   ├── ProjectsGrid.tsx    # Category-filtered showcase of 7 engineering & AI projects
│   ├── ProjectModal.tsx    # Architectural deep-dive modal dialog with system specs
│   ├── LifecycleStepper.tsx# Interactive 6-stage SDLC & account delivery pipeline
│   ├── Toast.tsx           # Auto-dismissing high-trust notification banner system
│   └── Footer.tsx          # Executive footer with quick actions and copyright
├── data/
│   ├── resumeData.ts       # Structured resume content, metrics, client profiles, and projects
│   └── types.ts            # Strict TypeScript interfaces
└── public/
    ├── resume.pdf          # Downloadable resume document
    └── icon.svg            # Branded obsidian & emerald monogram
```

---

## 🚀 Live Featured Projects Showcased

1. **BA & Account Management Swarm (`ba-account-swarm`)** — *AI & Agents*  
   Multi-agent AI ecosystem automating BRDs, PRDs, client proposals, Jira backlogs, and CRM updates using local LLMs (Ollama Qwen 3.6) and MCP servers.
2. **TradeBuddy / MaximusOne (`tradebuddy`)** — *Full-Stack Apps*  
   Real-time institutional trading analytics dashboard and autonomous 24/7 background execution system ([Live Application](https://maximusone.vercel.app)).
3. **AI-Powered Advisor Recruitment Prototype** — *AI & Agents*  
   End-to-end conversational AI screening workflow with stateful FastAPI backend and n8n webhooks.
4. **Idraneel Karyalay — Venue Management Platform (`IdraneelKaryalay-wedding-hall`)** — *Full-Stack Apps*  
   Full-stack availability platform featuring dynamic seasonal pricing logic and mobile-ready PWA architecture.
5. **BillVault (`billvault`)** — *Full-Stack Apps*  
   Dark-mode personal finance and recurring obligation tracking application deployed on Vercel.
6. **Varun's Job Bot (`varunsjobbot`)** — *Automation*  
   Automated personal career intelligence API with FastAPI serverless deployment on Vercel.
7. **JobSearchAgent (`JobSearchAgent`)** — *Automation*  
   Autonomous job-hunting pipeline orchestrated via scheduled GitHub Actions workflows.

---

## 🛠️ Local Development & Build

```bash
# Clone the repository
git clone https://github.com/varunbhandurge/visualresume.git
cd visualresume

# Install dependencies
npm install

# Start local development server
npm run dev
# -> Opens at http://localhost:3000

# Build optimized production bundle
npm run build

# Start production server
npm run start
```

---

## 🌐 Deploy to Vercel

1. Push your changes to [https://github.com/varunbhandurge/visualresume](https://github.com/varunbhandurge/visualresume).
2. Go to [Vercel Dashboard](https://vercel.com/new).
3. Import the `visualresume` repository.
4. Framework preset **Next.js** is auto-detected.
5. Click **Deploy**.

---

## 📬 Contact & Links

- **Email:** [varun.bhandurge@gmail.com](mailto:varun.bhandurge@gmail.com)
- **GitHub:** [https://github.com/varunbhandurge](https://github.com/varunbhandurge)
- **LinkedIn:** [https://linkedin.com/in/varunbhandurge](https://linkedin.com/in/varunbhandurge)
