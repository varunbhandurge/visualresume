import React from 'react';
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';

export function EngineeringBuildsGrid() {
  return (
    <section id="builds" className="w-full max-w-5xl mx-auto px-6 py-24 md:py-32 border-t border-white/[0.08]">
      {/* Section Header */}
      <div className="mb-14">
        <p className="font-mono text-xs uppercase tracking-widest text-mutedZinc/70 font-medium mb-3">
          Deployed Systems & Open Source Repositories
        </p>
        <h2 className="font-heading font-semibold text-2xl sm:text-4xl text-alabaster tracking-tighter">
          Live Websites & Engineering Builds
        </h2>
        <p className="text-sm sm:text-base text-mutedZinc mt-2 max-w-2xl">
          Functional software shipped to production and open-source codebases demonstrating full-stack technical execution and AI systems architecture.
        </p>
      </div>

      <div className="space-y-6">

        {/* 1. Featured Full-Width Card: MaximusOne / TradeBuddy */}
        <div className="rounded-lg border border-white/[0.08] bg-white/[0.015] hover:border-white/20 p-6 sm:p-8 transition-all">
          
          {/* Subtle Browser Chrome Bar */}
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.06] text-xs font-mono text-mutedZinc/70">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
              </div>
              <span className="pl-2 text-mutedZinc/60 text-[11px]">maximusone.vercel.app</span>
            </div>
            
            <div className="flex items-center gap-1.5 text-champagne text-[11px]">
              <span className="w-1.5 h-1.5 rounded-full bg-champagne" />
              <span>LIVE</span>
            </div>
          </div>

          {/* Title & Description */}
          <div className="space-y-3 mb-6">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="font-heading font-semibold text-xl sm:text-2xl text-alabaster tracking-tight">
                MaximusOne / TradeBuddy
              </h3>
              <span className="font-mono text-[11px] text-mutedZinc/60">
                Production AI System
              </span>
            </div>
            <p className="text-sm sm:text-[15px] text-mutedZinc leading-relaxed max-w-3xl">
              AI-powered trading analytics and autonomous execution platform built with Next.js, Supabase, and Vercel. Features real-time portfolio telemetry, automated risk-adjusted position sizing, and cloud-scheduled cron daemons.
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/[0.06]">
            <a
              href="https://maximusone.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded bg-alabaster hover:bg-white text-obsidian text-xs font-medium transition-all shadow-sm"
            >
              <span>Open Live App</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-obsidian" />
            </a>

            <a
              href="https://github.com/varunbhandurge/tradebuddy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded border border-white/[0.1] hover:border-white/20 hover:bg-white/[0.02] text-alabaster text-xs font-medium transition-all"
            >
              <Github className="w-3.5 h-3.5 text-mutedZinc" />
              <span>Source Code</span>
              <ArrowUpRight className="w-3 h-3 text-mutedZinc" />
            </a>
          </div>

        </div>

        {/* 2-Column Architectural Grid for Repositories 2 through 6 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* 2. BA & Account Management Swarm */}
          <div className="rounded-lg border border-white/[0.08] bg-white/[0.015] hover:border-white/20 p-6 flex flex-col justify-between transition-all">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-heading font-medium text-lg text-alabaster">
                  BA & AM Swarm (`BASwarm`)
                </h3>
                <span className="font-mono text-[10px] uppercase text-mutedZinc/60">
                  Multi-Agent AI
                </span>
              </div>
              <p className="text-xs sm:text-[13px] text-mutedZinc leading-relaxed">
                Multi-agent workflow automating BRDs, PRDs, proposals, CRM updates, and Jira delegation via Python, FastAPI, local Qwen, and MCP.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-white/[0.06]">
              <a
                href="https://github.com/varunbhandurge/BASwarm"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-alabaster hover:text-white transition-colors"
              >
                <span>Inspect Repository</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-mutedZinc" />
              </a>
            </div>
          </div>

          {/* 3. BillVault */}
          <div className="rounded-lg border border-white/[0.08] bg-white/[0.015] hover:border-white/20 p-6 flex flex-col justify-between transition-all">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-heading font-medium text-lg text-alabaster">
                  BillVault (`Bill-Vault`)
                </h3>
                <span className="font-mono text-[10px] uppercase text-mutedZinc/60">
                  Document AI
                </span>
              </div>
              <p className="text-xs sm:text-[13px] text-mutedZinc leading-relaxed">
                Personal finance and document vault web application engineered with TypeScript and Next.js.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-white/[0.06]">
              <a
                href="https://github.com/varunbhandurge/Bill-Vault"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-alabaster hover:text-white transition-colors"
              >
                <span>Inspect Repository</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-mutedZinc" />
              </a>
            </div>
          </div>

          {/* 4. Automated Job Search Agent */}
          <div className="rounded-lg border border-white/[0.08] bg-white/[0.015] hover:border-white/20 p-6 flex flex-col justify-between transition-all">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-heading font-medium text-lg text-alabaster">
                  Job Search Agent (`JobSearchAgent`)
                </h3>
                <span className="font-mono text-[10px] uppercase text-mutedZinc/60">
                  Automation
                </span>
              </div>
              <p className="text-xs sm:text-[13px] text-mutedZinc leading-relaxed">
                Autonomous job discovery and application tracking pipeline orchestrated with Python and GitHub Actions.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-white/[0.06]">
              <a
                href="https://github.com/varunbhandurge/JobSearchAgent"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-alabaster hover:text-white transition-colors"
              >
                <span>Inspect Repository</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-mutedZinc" />
              </a>
            </div>
          </div>

          {/* 5. LocalQwen & AntigravitySyncAgent */}
          <div className="rounded-lg border border-white/[0.08] bg-white/[0.015] hover:border-white/20 p-6 flex flex-col justify-between transition-all">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-heading font-medium text-lg text-alabaster">
                  LocalQwen & AntigravitySyncAgent
                </h3>
                <span className="font-mono text-[10px] uppercase text-mutedZinc/60">
                  Local LLM & Sync
                </span>
              </div>
              <p className="text-xs sm:text-[13px] text-mutedZinc leading-relaxed">
                Offline local LLM inference tooling and autonomous workspace synchronization agents for rapid prototyping.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center gap-4">
              <a
                href="https://github.com/varunbhandurge/LocalQwen"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-medium text-alabaster hover:text-white transition-colors"
              >
                <span>LocalQwen</span>
                <ArrowUpRight className="w-3 h-3 text-mutedZinc" />
              </a>
              <span className="text-white/20 select-none text-xs">·</span>
              <a
                href="https://github.com/varunbhandurge/AntigravitySyncAgent"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-medium text-alabaster hover:text-white transition-colors"
              >
                <span>SyncAgent</span>
                <ArrowUpRight className="w-3 h-3 text-mutedZinc" />
              </a>
            </div>
          </div>

          {/* 6. Idraneel Karyalay & Digital Personal Trainer (Spans 2 columns on tablet/desktop or cleanly sits in grid) */}
          <div className="md:col-span-2 rounded-lg border border-white/[0.08] bg-white/[0.015] hover:border-white/20 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <h3 className="font-heading font-medium text-lg text-alabaster">
                  Idraneel Karyalay & Digital Personal Trainer
                </h3>
                <span className="font-mono text-[10px] uppercase text-mutedZinc/60">
                  Commercial Web
                </span>
              </div>
              <p className="text-xs sm:text-[13px] text-mutedZinc leading-relaxed max-w-2xl">
                Commercial venue booking platform with dynamic pricing and an AI-assisted fitness coaching engine.
              </p>
            </div>
            <div className="flex items-center gap-4 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-white/[0.06]">
              <a
                href="https://github.com/varunbhandurge/IdraneelKaryalay-wedding-hall"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-medium text-alabaster hover:text-white transition-colors"
              >
                <span>Venue Platform</span>
                <ArrowUpRight className="w-3 h-3 text-mutedZinc" />
              </a>
              <span className="text-white/20 select-none text-xs">·</span>
              <a
                href="https://github.com/varunbhandurge/DigitalPersonalTrainer"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-medium text-alabaster hover:text-white transition-colors"
              >
                <span>Fitness AI</span>
                <ArrowUpRight className="w-3 h-3 text-mutedZinc" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
