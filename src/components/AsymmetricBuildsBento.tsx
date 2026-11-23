'use client';

import React from 'react';
import { ExternalLink, Github, Cpu, FileSearch, Receipt, Search, Terminal, Building2, CheckCircle2 } from 'lucide-react';

export function AsymmetricBuildsBento() {
  return (
    <section id="builds" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 border-t border-white/[0.08]">
      {/* Section Header */}
      <div className="max-w-3xl mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-3">
          <span className="font-mono text-[11px] uppercase tracking-wider text-slateMuted">
            Proof of Work &bull; Working Code
          </span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold text-alabaster tracking-tight">
          Live Deployments & GitHub Repositories
        </h2>
        <p className="text-sm sm:text-base text-slateMuted mt-2 leading-relaxed">
          Tangible software shipped to production and open-source systems demonstrating hands-on architectural and AI engineering capability.
        </p>
      </div>

      {/* Bento Grid: 1 Featured Large Card (2 Cols) + 5 Standard Bento Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* 1. FEATURED WIDE CARD: MaximusOne / TradeBuddy (Spans 2 columns on desktop) */}
        <div className="lg:col-span-2 rounded-xl bg-[#0D0F14] border border-white/10 hover:border-cobalt/40 p-6 sm:p-8 flex flex-col justify-between transition-all group shadow-tactile">
          <div>
            {/* Header / Badges */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded text-xs font-mono font-bold bg-cobalt/10 text-cobalt border border-cobalt/20">
                  FLAGSHIP LIVE DEPLOYMENT
                </span>
                <span className="flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Live on Vercel
                </span>
              </div>
              <span className="font-mono text-xs text-slateMuted">Production SaaS</span>
            </div>

            {/* Title & Description */}
            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-alabaster group-hover:text-white transition-colors flex items-center gap-2">
                <span>MaximusOne / TradeBuddy</span>
              </h3>
              <p className="text-sm text-slateMuted mt-2 max-w-2xl leading-relaxed">
                Autonomous 24/7 multi-asset trading engine with real-time portfolio telemetry, automated risk-adjusted position sizing, and Supabase cloud synchronization. Deployed on Vercel with scheduled crons and FastAPI backend services.
              </p>
            </div>

            {/* Mini Browser Frame Mockup */}
            <div className="rounded-lg bg-[#07080B] border border-white/[0.08] p-3 sm:p-4 mb-6 font-mono">
              <div className="flex items-center gap-2 pb-2.5 mb-2.5 border-b border-white/[0.06] text-xs text-slateMuted">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-[11px] text-slateMuted/80 pl-2">https://maximusone.vercel.app</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px]">
                <div className="p-2 rounded bg-white/[0.02] border border-white/[0.04]">
                  <span className="text-slateMuted block text-[10px]">Execution Latency</span>
                  <span className="text-emerald-400 font-bold">&lt; 120ms</span>
                </div>
                <div className="p-2 rounded bg-white/[0.02] border border-white/[0.04]">
                  <span className="text-slateMuted block text-[10px]">Cloud Crons</span>
                  <span className="text-alabaster font-bold">24/7 Daemon</span>
                </div>
                <div className="p-2 rounded bg-white/[0.02] border border-white/[0.04]">
                  <span className="text-slateMuted block text-[10px]">State Sync</span>
                  <span className="text-cobalt font-bold">Supabase Realtime</span>
                </div>
                <div className="p-2 rounded bg-white/[0.02] border border-white/[0.04]">
                  <span className="text-slateMuted block text-[10px]">Risk Containment</span>
                  <span className="text-goldWarm font-bold">Max Drawdown Kill</span>
                </div>
              </div>
            </div>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-1.5 mb-6">
              {['Next.js 14 App Router', 'Tailwind CSS', 'FastAPI', 'Supabase', 'Vercel Serverless', 'Python Daemon'].map((t) => (
                <span key={t} className="px-2.5 py-0.5 rounded text-xs font-mono bg-white/[0.03] text-slateMuted border border-white/[0.06]">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/[0.06]">
            <a
              href="https://maximusone.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-cobalt hover:bg-cobalt-light text-white font-medium text-xs sm:text-sm transition-all"
            >
              <span>Launch Live App</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://github.com/varunbhandurge/tradebuddy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-alabaster font-medium text-xs sm:text-sm border border-white/10 transition-colors"
            >
              <Github className="w-3.5 h-3.5 text-slateMuted" />
              <span>tradebuddy GitHub</span>
            </a>
          </div>
        </div>

        {/* 2. BASwarm: Multi-Agent BA & Account Management Swarm */}
        <div className="rounded-xl bg-[#0D0F14] border border-white/10 hover:border-goldWarm/40 p-6 sm:p-7 flex flex-col justify-between transition-all group">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs text-goldWarm font-bold uppercase">AI Agent Swarm</span>
              <FileSearch className="w-4 h-4 text-goldWarm" />
            </div>
            <h3 className="text-lg font-bold text-alabaster group-hover:text-white transition-colors">
              BA & AM Swarm (`BASwarm`)
            </h3>
            <p className="text-xs text-slateMuted mt-2 leading-relaxed">
              Autonomous multi-agent orchestration that ingests unformatted RFP documents, runs stakeholder analysis, and generates structured BRDs, PRDs, and user story backlogs.
            </p>
            <div className="flex flex-wrap gap-1.5 mt-4">
              {['Python', 'LangChain', 'Multi-Agent', 'Ollama', 'BRD Automation'].map((t) => (
                <span key={t} className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/[0.03] text-slateMuted border border-white/[0.06]">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="pt-6 mt-6 border-t border-white/[0.06]">
            <a
              href="https://github.com/varunbhandurge/BASwarm"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-medium text-alabaster hover:text-white transition-colors"
            >
              <Github className="w-3.5 h-3.5 text-slateMuted" />
              <span>Inspect BASwarm Repository ↗</span>
            </a>
          </div>
        </div>

        {/* 3. BillVault: Enterprise Financial Document AI */}
        <div className="rounded-xl bg-[#0D0F14] border border-white/10 hover:border-emerald-500/40 p-6 sm:p-7 flex flex-col justify-between transition-all group">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs text-emerald-400 font-bold uppercase">Document AI</span>
              <Receipt className="w-4 h-4 text-emerald-400" />
            </div>
            <h3 className="text-lg font-bold text-alabaster group-hover:text-white transition-colors">
              BillVault (`Bill-Vault`)
            </h3>
            <p className="text-xs text-slateMuted mt-2 leading-relaxed">
              Enterprise financial OCR extraction engine. Parses messy physical invoices, receipts, and line-item statements into validated JSON schemas with confidence scoring.
            </p>
            <div className="flex flex-wrap gap-1.5 mt-4">
              {['Computer Vision', 'OCR Extraction', 'FastAPI', 'JSON Schema', 'Python'].map((t) => (
                <span key={t} className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/[0.03] text-slateMuted border border-white/[0.06]">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="pt-6 mt-6 border-t border-white/[0.06]">
            <a
              href="https://github.com/varunbhandurge/Bill-Vault"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-medium text-alabaster hover:text-white transition-colors"
            >
              <Github className="w-3.5 h-3.5 text-slateMuted" />
              <span>Inspect Bill-Vault Repository ↗</span>
            </a>
          </div>
        </div>

        {/* 4. Automated Job Search Agent */}
        <div className="rounded-xl bg-[#0D0F14] border border-white/10 hover:border-cobalt/40 p-6 sm:p-7 flex flex-col justify-between transition-all group">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs text-cobalt font-bold uppercase">Automation Agent</span>
              <Search className="w-4 h-4 text-cobalt" />
            </div>
            <h3 className="text-lg font-bold text-alabaster group-hover:text-white transition-colors">
              Job Search Agent (`JobSearchAgent`)
            </h3>
            <p className="text-xs text-slateMuted mt-2 leading-relaxed">
              Automated talent hunting and posting aggregator. Scrapes enterprise job boards, filters technical requirements, and dynamically tailors executive resumes to specific roles.
            </p>
            <div className="flex flex-wrap gap-1.5 mt-4">
              {['Python', 'Playwright', 'LLM Tailoring', 'Headless Browser'].map((t) => (
                <span key={t} className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/[0.03] text-slateMuted border border-white/[0.06]">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="pt-6 mt-6 border-t border-white/[0.06]">
            <a
              href="https://github.com/varunbhandurge/JobSearchAgent"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-medium text-alabaster hover:text-white transition-colors"
            >
              <Github className="w-3.5 h-3.5 text-slateMuted" />
              <span>Inspect JobSearchAgent Repository ↗</span>
            </a>
          </div>
        </div>

        {/* 5. LocalQwen & AntigravitySyncAgent */}
        <div className="rounded-xl bg-[#0D0F14] border border-white/10 hover:border-goldWarm/40 p-6 sm:p-7 flex flex-col justify-between transition-all group">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs text-goldWarm font-bold uppercase">Local AI & Sync</span>
              <Terminal className="w-4 h-4 text-goldWarm" />
            </div>
            <h3 className="text-lg font-bold text-alabaster group-hover:text-white transition-colors">
              LocalQwen & Antigravity Sync
            </h3>
            <p className="text-xs text-slateMuted mt-2 leading-relaxed">
              Offline local LLM tooling leveraging Qwen 2.5 on Ollama combined with an autonomous daemon synchronizing agent trajectories across multi-device developer workspaces.
            </p>
            <div className="flex flex-wrap gap-1.5 mt-4">
              {['Qwen 2.5', 'Ollama', 'Local Inference', 'Daemon Sync', 'Python'].map((t) => (
                <span key={t} className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/[0.03] text-slateMuted border border-white/[0.06]">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center justify-between">
            <a
              href="https://github.com/varunbhandurge/LocalQwen"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-alabaster hover:text-white transition-colors"
            >
              <Github className="w-3.5 h-3.5 text-slateMuted" />
              <span>LocalQwen</span>
            </a>
            <span className="text-slateMuted/40">&bull;</span>
            <a
              href="https://github.com/varunbhandurge/AntigravitySyncAgent"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-alabaster hover:text-white transition-colors"
            >
              <Github className="w-3.5 h-3.5 text-slateMuted" />
              <span>SyncAgent</span>
            </a>
          </div>
        </div>

        {/* 6. Idraneel Karyalay Venue Platform */}
        <div className="rounded-xl bg-[#0D0F14] border border-white/10 hover:border-white/20 p-6 sm:p-7 flex flex-col justify-between transition-all group">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs text-slateMuted font-bold uppercase">Commercial Platform</span>
              <Building2 className="w-4 h-4 text-slateMuted" />
            </div>
            <h3 className="text-lg font-bold text-alabaster group-hover:text-white transition-colors">
              Idraneel Karyalay (`IdraneelKaryalay`)
            </h3>
            <p className="text-xs text-slateMuted mt-2 leading-relaxed">
              High-converting commercial booking, venue availability, and event reservation management portal designed for a premier hospitality venue.
            </p>
            <div className="flex flex-wrap gap-1.5 mt-4">
              {['Next.js', 'Tailwind CSS', 'Booking Engine', 'Vercel'].map((t) => (
                <span key={t} className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/[0.03] text-slateMuted border border-white/[0.06]">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="pt-6 mt-6 border-t border-white/[0.06]">
            <a
              href="https://github.com/varunbhandurge/IdraneelKaryalay-wedding-hall"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-medium text-alabaster hover:text-white transition-colors"
            >
              <Github className="w-3.5 h-3.5 text-slateMuted" />
              <span>Inspect Idraneel Repository ↗</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
