'use client';

import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Download, 
  Github, 
  Linkedin, 
  ArrowUpRight, 
  ExternalLink,
  Search,
  FileCode2,
  Cpu,
  GitPullRequest,
  Users,
  Building2,
  Copy,
  Check
} from 'lucide-react';

export function SingleScrollPortfolio() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('varunbhandurge@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const capabilities = [
    {
      title: 'Customer Discovery & Elicitation',
      tag: 'Business Lens',
      desc: 'Uncovering unstated operational pain points and regulatory rules through structured discovery.',
    },
    {
      title: 'Business to Technical Specs',
      tag: 'Bridge',
      desc: 'Authoring unambiguous BRDs, PRDs, user stories (Gherkin), data schemas, and API contracts.',
    },
    {
      title: 'Rapid AI Prototyping',
      tag: 'Tech Builder',
      desc: 'Shipping working prototypes (FastAPI, Ollama, Next.js) to validate customer journeys in days.',
    },
    {
      title: 'Full-SDLC Agile Execution',
      tag: 'CSM® Delivery',
      desc: 'Guiding cross-functional squads, backlog grooming, blocker removal, and zero-defect release gates.',
    },
    {
      title: 'Onboarding & Solution Adoption',
      tag: 'Customer Success',
      desc: 'Deploying Document AI & automated verification workflows to ensure the software solves the actual problem.',
    },
  ];

  const projects = [
    {
      title: 'TradeBuddy / MaximusOne',
      badge: 'Trading Automation',
      desc: 'Autonomous 24/7 multi-asset trading engine with real-time telemetry, automated risk sizing, and Supabase sync.',
      tech: ['Next.js 14', 'FastAPI', 'Supabase', 'Vercel Crons'],
      liveUrl: 'https://maximusone.vercel.app',
      liveLabel: 'Live on Vercel',
      githubUrl: 'https://github.com/varunbhandurge/tradebuddy',
    },
    {
      title: 'BASwarm (Multi-Agent Swarm)',
      badge: 'AI Swarm',
      desc: 'Autonomous multi-agent pipeline ingesting RFPs, mapping stakeholder needs, and drafting structured BRDs/PRDs.',
      tech: ['Python', 'LangChain', 'Ollama', 'Multi-Agent'],
      githubUrl: 'https://github.com/varunbhandurge/BASwarm',
    },
    {
      title: 'BillVault (Bill-Vault)',
      badge: 'Document AI',
      desc: 'Financial document AI & invoice OCR extraction parsing messy receipts into validated JSON schemas.',
      tech: ['Computer Vision', 'FastAPI', 'OCR', 'JSON Schema'],
      githubUrl: 'https://github.com/varunbhandurge/Bill-Vault',
    },
    {
      title: 'JobSearchAgent',
      badge: 'Automation Bot',
      desc: '24/7 autonomous job hunter scraping Workday/Greenhouse, scoring ATS fit, and dynamically tailoring resumes.',
      tech: ['Python', 'FastAPI', 'GitHub Actions', 'Netlify'],
      liveUrl: 'https://varunsjobbot.netlify.app',
      liveLabel: 'Live Dashboard',
      githubUrl: 'https://github.com/varunbhandurge/JobSearchAgent',
    },
    {
      title: 'Legal Next (LosforIBSER)',
      badge: 'Legal Operations',
      desc: 'Agreement intelligence system benchmarked against tier-1 banking systems; NLP clause diff across 100+ page SLAs.',
      tech: ['Node.js', 'NLP Clause Parsing', 'Tri-State Diff'],
      liveUrl: 'https://legalnext.netlify.app',
      liveLabel: 'Live Platform',
      githubUrl: 'https://github.com/varunbhandurge/LosforIBSER',
    },
    {
      title: 'LocalQwen & AntigravitySyncAgent',
      badge: 'Local AI & Sync',
      desc: 'Offline local LLM tooling (Qwen 2.5 on Ollama) + distributed daemon synchronizing developer workspaces.',
      tech: ['Qwen 2.5', 'Ollama', 'PowerShell', 'Cloud Sync'],
      githubUrl: 'https://github.com/varunbhandurge/LocalQwen',
      secondaryGithubUrl: 'https://github.com/varunbhandurge/AntigravitySyncAgent',
      secondaryGithubLabel: 'SyncAgent',
    },
    {
      title: 'Idraneel Karyalay Venue Platform',
      badge: 'Commercial Web',
      desc: 'Event booking platform featuring real-time date availability, interactive Muhurat calendar, and dynamic cost estimator.',
      tech: ['Responsive Web', 'Cost Estimator', 'Netlify'],
      liveUrl: 'https://indraneelmangalkaryalay.netlify.app',
      liveLabel: 'Live Platform',
      githubUrl: 'https://github.com/varunbhandurge/IdraneelKaryalay-wedding-hall',
    },
  ];

  const clients = [
    { name: 'ICICI Bank', focus: 'Core Banking Onboarding, KYC Automation & LOS' },
    { name: 'HDFC ERGO', focus: 'Claims Document Verification & Intelligent OCR' },
    { name: 'ICICI Prudential', focus: 'Policy Issuance Workflows & Journey Mapping' },
    { name: 'ABSLI', focus: 'Aditya Birla Sun Life — Document Workflows & SLA Compliance' },
    { name: 'Reliance ADAG', focus: 'Enterprise Systems Integration & Release Coordination' },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 text-alabaster">
      
      {/* 2-Column Side-by-Side Responsive Architectural Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        
        {/* ================= LEFT PANE (5 Cols): Identity, Positioning, Contact & Clients ================= */}
        <aside className="lg:col-span-5 space-y-6 lg:sticky lg:top-8">
          
          {/* Identity & Core Positioning */}
          <div className="p-6 rounded-2xl bg-[#0E1117]/80 border border-white/[0.08] backdrop-blur-md space-y-4">
            
            <div>
              <div className="flex items-center justify-between">
                <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
                  Varun Bhandurge
                </h1>
                <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  CSM® · ECBA™
                </span>
              </div>
              <p className="text-xs font-mono text-mutedText mt-1">
                Business & Technical Product Lead · Lead Business Analyst
              </p>
            </div>

            {/* Core Thesis */}
            <p className="text-sm text-white/90 leading-relaxed font-normal">
              I understand customer needs from both the <span className="text-cyan-400 font-medium">business</span> and <span className="text-emerald-400 font-medium">technical</span> point of view — translating ambiguous operational problems into engineered software and rapid AI prototypes.
            </p>

            <p className="text-xs text-mutedText leading-relaxed">
              I uncover what stakeholders need, author clear requirements (BRDs/PRDs), ship functional prototypes to test customer journeys, and guide engineering teams to deliver right the first time.
            </p>

            {/* Direct Contact & Resume */}
            <div className="pt-2 border-t border-white/[0.06] space-y-2 text-xs font-mono">
              
              <div className="flex items-center justify-between gap-2 p-2 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                <a
                  href="mailto:varunbhandurge@gmail.com"
                  className="flex items-center gap-2 text-mutedText hover:text-white transition-colors truncate"
                >
                  <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span className="truncate">varunbhandurge@gmail.com</span>
                </a>
                <button
                  onClick={copyEmail}
                  className="p-1 text-mutedText hover:text-white shrink-0"
                  title="Copy email"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              <div className="flex items-center justify-between gap-2 p-2 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                <a
                  href="tel:+918108161200"
                  className="flex items-center gap-2 text-mutedText hover:text-white transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>+91 8108161200</span>
                </a>
                <span className="text-[11px] text-mutedText/60 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-amber-400" />
                  Mumbai / Pune
                </span>
              </div>

              {/* Action Buttons: Resume & Profiles */}
              <div className="pt-2 flex flex-col sm:flex-row gap-2">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-3 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-[#08090C] font-heading font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-sm"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Resume (PDF)</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <div className="flex gap-2">
                  <a
                    href="https://github.com/varunbhandurge"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-3 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/10 text-xs flex items-center gap-1.5 transition-colors"
                    title="GitHub"
                  >
                    <Github className="w-3.5 h-3.5 text-cyan-400" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/varun-bhandurge"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-3 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/10 text-xs flex items-center gap-1.5 transition-colors"
                    title="LinkedIn"
                  >
                    <Linkedin className="w-3.5 h-3.5 text-cyan-400" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Clients I Have Worked With */}
          <div className="p-6 rounded-2xl bg-[#0E1117]/80 border border-white/[0.08] backdrop-blur-md space-y-3">
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-cyan-400" />
              <h2 className="font-heading font-bold text-sm text-white tracking-tight uppercase font-mono">
                Clients I Have Worked With
              </h2>
            </div>
            
            <div className="space-y-2 pt-1">
              {clients.map((c) => (
                <div
                  key={c.name}
                  className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.04] hover:border-white/10 transition-colors"
                >
                  <div className="text-xs font-heading font-bold text-white">
                    {c.name}
                  </div>
                  <div className="text-[11px] text-mutedText mt-0.5 leading-snug">
                    {c.focus}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </aside>

        {/* ================= RIGHT PANE (7 Cols): Things I Do & Things I'm Working On ================= */}
        <main className="lg:col-span-7 space-y-6">
          
          {/* SECTION 1: Things I Do */}
          <section className="p-6 rounded-2xl bg-[#0E1117]/80 border border-white/[0.08] backdrop-blur-md space-y-4">
            <div>
              <h2 className="font-heading font-bold text-base text-white tracking-tight flex items-center gap-2 font-mono uppercase">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                Things I Do
              </h2>
              <p className="text-xs text-mutedText mt-0.5">
                Bridging customer needs, business vision, and technical engineering reality.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {capabilities.map((cap, idx) => (
                <div
                  key={cap.title}
                  className={`p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-white/15 transition-colors flex flex-col justify-between ${
                    idx === capabilities.length - 1 ? 'sm:col-span-2' : ''
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="font-heading font-semibold text-xs text-white">
                        {cap.title}
                      </span>
                      <span className="text-[10px] font-mono text-cyan-400/90 bg-cyan-500/10 px-1.5 py-0.5 rounded">
                        {cap.tag}
                      </span>
                    </div>
                    <p className="text-[11px] text-mutedText leading-relaxed">
                      {cap.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 2: Things I'm Working On */}
          <section className="p-6 rounded-2xl bg-[#0E1117]/80 border border-white/[0.08] backdrop-blur-md space-y-4">
            <div>
              <h2 className="font-heading font-bold text-base text-white tracking-tight flex items-center gap-2 font-mono uppercase">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Things I&apos;m Working On
              </h2>
              <p className="text-xs text-mutedText mt-0.5">
                Live Vercel deployments, open-source codebases, and autonomous AI systems.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3.5 pt-1">
              {projects.map((p) => (
                <div
                  key={p.title}
                  className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-white/15 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 group"
                >
                  <div className="space-y-1 max-w-lg">
                    <div className="flex items-center gap-2">
                      <h3 className="font-heading font-semibold text-sm text-white group-hover:text-cyan-300 transition-colors">
                        {p.title}
                      </h3>
                      <span className="text-[10px] font-mono text-mutedText/70 px-1.5 py-0.5 rounded bg-white/[0.03]">
                        {p.badge}
                      </span>
                    </div>
                    <p className="text-xs text-mutedText leading-relaxed">
                      {p.desc}
                    </p>
                    <div className="flex flex-wrap gap-1 pt-0.5">
                      {p.tech.map((t) => (
                        <span key={t} className="text-[10px] font-mono text-mutedText/60">
                          #{t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Direct Action Links (Vercel & Git) */}
                  <div className="flex items-center gap-2 shrink-0 pt-2 sm:pt-0 font-mono text-xs">
                    {p.liveUrl && (
                      <a
                        href={p.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2.5 py-1.5 rounded-lg bg-cyan-400/15 hover:bg-cyan-400/25 text-cyan-300 border border-cyan-400/30 flex items-center gap-1 transition-colors text-[11px] font-medium"
                      >
                        <span>{p.liveLabel || 'Live App'}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}

                    <a
                      href={p.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-1.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-white/90 border border-white/10 flex items-center gap-1 transition-colors text-[11px]"
                    >
                      <Github className="w-3 h-3" />
                      <span>Git</span>
                      <ArrowUpRight className="w-2.5 h-2.5 text-mutedText" />
                    </a>

                    {p.secondaryGithubUrl && (
                      <a
                        href={p.secondaryGithubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2.5 py-1.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-white/90 border border-white/10 flex items-center gap-1 transition-colors text-[11px]"
                      >
                        <Github className="w-3 h-3" />
                        <span>{p.secondaryGithubLabel}</span>
                        <ArrowUpRight className="w-2.5 h-2.5 text-mutedText" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Simple Bottom Credit */}
          <footer className="text-center sm:text-right text-[11px] font-mono text-mutedText/50 pt-2 pb-4">
            Varun Bhandurge · Deployed on Vercel · Next.js 14 · 2026
          </footer>

        </main>

      </div>
    </div>
  );
}
