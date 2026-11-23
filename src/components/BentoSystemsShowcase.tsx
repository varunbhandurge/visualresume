'use client';

import React, { useState } from 'react';
import { ExternalLink, Github, Terminal, Cpu, FileSearch, Receipt, Search, Building2, Layers, Check, Copy } from 'lucide-react';

export function BentoSystemsShowcase() {
  const [telemetryOpen, setTelemetryOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const telemetrySnippet = `{
  "system": "TradeBuddy / MaximusOne",
  "status": "OPERATIONAL",
  "engine_runtime": "FastAPI + Next.js 14 App Router",
  "cron_scheduler": "Vercel Cloud Crons (24/7)",
  "state_sync": "Supabase Realtime PostgreSQL",
  "active_symbols": ["NIFTY50", "BANKNIFTY", "USDINR"],
  "risk_rules": {
    "max_drawdown_kill": "-1.8%",
    "position_sizing": "Kelly Criterion Risk-Adjusted"
  }
}`;

  const copyTelemetry = () => {
    navigator.clipboard.writeText(telemetrySnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="systems" className="w-full max-w-5xl mx-auto px-6 py-24 sm:py-32 border-t border-white/[0.08]">
      {/* Header */}
      <div className="max-w-3xl mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-cyan-400 text-xs font-mono font-medium mb-3">
          <span>Working Deployments</span>
        </div>
        <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-white tracking-tight">
          Live Deployments & GitHub Repositories
        </h2>
        <p className="text-sm sm:text-base text-mutedText mt-2 leading-relaxed">
          Tangible software shipped to production and open-source codebases demonstrating full-stack AI execution, multi-agent systems, and cloud infrastructure.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* 1. FEATURED FULL-WIDTH / 2-COLUMN CARD: MaximusOne / TradeBuddy */}
        <div className="lg:col-span-2 glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between group transition-all duration-300 hover:border-cyan-500/40 shadow-glow-card">
          <div>
            {/* Top Badges */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
                  FLAGSHIP LIVE DEPLOYMENT
                </span>
                <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  Live on Vercel
                </span>
              </div>
              <span className="font-mono text-xs text-mutedText/80">Production Trading Engine</span>
            </div>

            {/* Title & Description */}
            <div className="mb-6">
              <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white group-hover:text-cyan-300 transition-colors">
                MaximusOne / TradeBuddy
              </h3>
              <p className="text-sm text-mutedText mt-2 max-w-2xl leading-relaxed">
                Autonomous 24/7 multi-asset trading engine with real-time portfolio telemetry, automated risk-adjusted position sizing, and Supabase cloud synchronization. Deployed on Vercel with scheduled crons and FastAPI backend services.
              </p>
            </div>

            {/* Browser Chrome Window Mock */}
            <div className="rounded-xl bg-[#06080C] border border-white/[0.08] p-4 mb-6 font-mono text-xs">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.06] text-mutedText">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                  </div>
                  <span className="pl-2 text-white/80">https://maximusone.vercel.app</span>
                </div>
                <button
                  onClick={() => setTelemetryOpen(!telemetryOpen)}
                  className="text-[11px] text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
                >
                  {telemetryOpen ? 'Hide Payload' : 'View System Telemetry'}
                </button>
              </div>

              {telemetryOpen ? (
                <div className="relative p-3 rounded bg-black/40 border border-white/5 text-emerald-300 text-[11px]">
                  <button
                    onClick={copyTelemetry}
                    className="absolute top-2 right-2 p-1 text-mutedText hover:text-white"
                    title="Copy payload"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                  <pre className="overflow-x-auto leading-relaxed">
                    <code>{telemetrySnippet}</code>
                  </pre>
                </div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px]">
                  <div className="p-2 rounded bg-white/[0.02] border border-white/[0.04]">
                    <span className="text-mutedText/60 block text-[10px]">Execution Latency</span>
                    <span className="text-emerald-400 font-bold">&lt; 85ms</span>
                  </div>
                  <div className="p-2 rounded bg-white/[0.02] border border-white/[0.04]">
                    <span className="text-mutedText/60 block text-[10px]">Cloud Crons</span>
                    <span className="text-cyan-400 font-bold">24/7 Daemon</span>
                  </div>
                  <div className="p-2 rounded bg-white/[0.02] border border-white/[0.04]">
                    <span className="text-mutedText/60 block text-[10px]">Database</span>
                    <span className="text-white font-bold">Supabase Realtime</span>
                  </div>
                  <div className="p-2 rounded bg-white/[0.02] border border-white/[0.04]">
                    <span className="text-mutedText/60 block text-[10px]">Risk Containment</span>
                    <span className="text-amber-400 font-bold">Max Drawdown Kill</span>
                  </div>
                </div>
              )}
            </div>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              {['Next.js 14 App Router', 'FastAPI', 'Supabase', 'Vercel Serverless', 'Python Daemon', 'Tailwind CSS'].map((tag) => (
                <span key={tag} className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/[0.03] text-mutedText border border-white/[0.06]">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/[0.06]">
            <a
              href="https://maximusone.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-heading font-semibold text-xs sm:text-sm text-[#08090C] bg-cyan-400 hover:bg-cyan-300 transition-all shadow-glow-cyan"
            >
              <span>Launch Live App</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://github.com/varunbhandurge/tradebuddy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-mono text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>tradebuddy Repository</span>
            </a>
          </div>
        </div>

        {/* 2. BASwarm: Multi-Agent BA & Account Management Swarm */}
        <div className="glass-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between group transition-all duration-300 hover:border-amber-500/40">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs text-amber-300 font-bold uppercase">Multi-Agent System</span>
              <FileSearch className="w-5 h-5 text-amber-400" />
            </div>
            <h3 className="font-heading font-bold text-lg text-white group-hover:text-amber-300 transition-colors">
              BA & AM Swarm (`BASwarm`)
            </h3>
            <p className="text-xs text-mutedText mt-2 leading-relaxed">
              Autonomous multi-agent pipeline ingesting unstructured RFP documents, mapping stakeholder matrices, and generating structured BRDs, PRDs, and Jira backlogs.
            </p>
            <div className="flex flex-wrap gap-1.5 mt-4">
              {['Python', 'LangChain', 'Multi-Agent', 'Ollama', 'BRD Automation'].map((t) => (
                <span key={t} className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/[0.03] text-mutedText border border-white/[0.06]">
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
              className="inline-flex items-center gap-2 text-xs font-mono text-white hover:text-amber-300 transition-colors"
            >
              <Github className="w-4 h-4 text-amber-400" />
              <span>Inspect BASwarm Repository ↗</span>
            </a>
          </div>
        </div>

        {/* 3. BillVault: Enterprise Document AI */}
        <div className="glass-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between group transition-all duration-300 hover:border-emerald-500/40">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs text-emerald-400 font-bold uppercase">Document AI & OCR</span>
              <Receipt className="w-5 h-5 text-emerald-400" />
            </div>
            <h3 className="font-heading font-bold text-lg text-white group-hover:text-emerald-300 transition-colors">
              BillVault (`Bill-Vault`)
            </h3>
            <p className="text-xs text-mutedText mt-2 leading-relaxed">
              Enterprise financial OCR extraction engine. Parses unstructured invoices and statements into validated JSON schemas with 98%+ confidence scoring.
            </p>
            <div className="flex flex-wrap gap-1.5 mt-4">
              {['Computer Vision', 'OCR Extraction', 'FastAPI', 'JSON Schema', 'Python'].map((t) => (
                <span key={t} className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/[0.03] text-mutedText border border-white/[0.06]">
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
              className="inline-flex items-center gap-2 text-xs font-mono text-white hover:text-emerald-300 transition-colors"
            >
              <Github className="w-4 h-4 text-emerald-400" />
              <span>Inspect Bill-Vault Repository ↗</span>
            </a>
          </div>
        </div>

        {/* 4. Automated Job Search Agent */}
        <div className="glass-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between group transition-all duration-300 hover:border-cyan-500/40">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs text-cyan-400 font-bold uppercase">Autonomous Agent</span>
              <Search className="w-5 h-5 text-cyan-400" />
            </div>
            <h3 className="font-heading font-bold text-lg text-white group-hover:text-cyan-300 transition-colors">
              Job Search Agent (`JobSearchAgent`)
            </h3>
            <p className="text-xs text-mutedText mt-2 leading-relaxed">
              Automated headhunter tracking and posting aggregator. Scrapes enterprise job boards, filters technical requirements, and dynamically tailors executive resumes.
            </p>
            <div className="flex flex-wrap gap-1.5 mt-4">
              {['Python', 'Playwright', 'LLM Tailoring', 'Headless Browser'].map((t) => (
                <span key={t} className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/[0.03] text-mutedText border border-white/[0.06]">
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
              className="inline-flex items-center gap-2 text-xs font-mono text-white hover:text-cyan-300 transition-colors"
            >
              <Github className="w-4 h-4 text-cyan-400" />
              <span>Inspect JobSearchAgent Repository ↗</span>
            </a>
          </div>
        </div>

        {/* 5. LocalQwen & AntigravitySyncAgent */}
        <div className="glass-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between group transition-all duration-300 hover:border-purple-500/40">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs text-purple-400 font-bold uppercase">Local AI & Sync</span>
              <Terminal className="w-5 h-5 text-purple-400" />
            </div>
            <h3 className="font-heading font-bold text-lg text-white group-hover:text-purple-300 transition-colors">
              LocalQwen & Antigravity Sync
            </h3>
            <p className="text-xs text-mutedText mt-2 leading-relaxed">
              Offline local LLM tooling leveraging Qwen 2.5 on Ollama combined with an autonomous daemon synchronizing agent trajectories across multi-device developer workspaces.
            </p>
            <div className="flex flex-wrap gap-1.5 mt-4">
              {['Qwen 2.5', 'Ollama', 'Local Inference', 'Daemon Sync', 'Python'].map((t) => (
                <span key={t} className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/[0.03] text-mutedText border border-white/[0.06]">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center justify-between font-mono text-xs">
            <a
              href="https://github.com/varunbhandurge/LocalQwen"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-300 transition-colors flex items-center gap-1"
            >
              <Github className="w-3.5 h-3.5 text-purple-400" />
              <span>LocalQwen</span>
            </a>
            <span className="text-white/20">&bull;</span>
            <a
              href="https://github.com/varunbhandurge/AntigravitySyncAgent"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-300 transition-colors flex items-center gap-1"
            >
              <Github className="w-3.5 h-3.5 text-purple-400" />
              <span>SyncAgent</span>
            </a>
          </div>
        </div>

        {/* 6. Idraneel Karyalay Venue Platform & Fitness AI */}
        <div className="glass-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between group transition-all duration-300 hover:border-cyan-500/40">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs text-cyan-400 font-bold uppercase">Commercial Web</span>
              <Building2 className="w-5 h-5 text-cyan-400" />
            </div>
            <h3 className="font-heading font-bold text-lg text-white group-hover:text-cyan-300 transition-colors">
              Idraneel Karyalay & Fitness AI
            </h3>
            <p className="text-xs text-mutedText mt-2 leading-relaxed">
              Commercial hospitality booking portal with dynamic calendar scheduling paired with an AI personal fitness coach application.
            </p>
            <div className="flex flex-wrap gap-1.5 mt-4">
              {['Next.js', 'Tailwind CSS', 'FastAPI', 'Booking Engine', 'Vercel'].map((t) => (
                <span key={t} className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/[0.03] text-mutedText border border-white/[0.06]">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center justify-between font-mono text-xs">
            <a
              href="https://github.com/varunbhandurge/IdraneelKaryalay-wedding-hall"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-300 transition-colors flex items-center gap-1"
            >
              <Github className="w-3.5 h-3.5 text-cyan-400" />
              <span>Venue Platform</span>
            </a>
            <span className="text-white/20">&bull;</span>
            <a
              href="https://github.com/varunbhandurge/DigitalPersonalTrainer"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-300 transition-colors flex items-center gap-1"
            >
              <Github className="w-3.5 h-3.5 text-cyan-400" />
              <span>Fitness AI</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
