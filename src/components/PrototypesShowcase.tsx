'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ExternalLink,
  Github,
  TrendingUp,
  Bot,
  Layers,
  ArrowUpRight,
  ShieldCheck,
  Activity,
  Terminal,
  Zap,
} from 'lucide-react';

export const PrototypesShowcase: React.FC = () => {
  return (
    <section id="prototypes" className="py-20 md:py-28 border-b border-slatecard-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-brand-blue uppercase tracking-widest font-semibold mb-2">
              <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse"></span>
              THE PROOF: SHIPPED CODE & WORKING SYSTEMS
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-sans tracking-tight">
              Live Prototypes & Shipping Record
            </h2>
          </div>
          <p className="text-neutral-400 text-sm sm:text-base font-sans max-w-md leading-relaxed">
            I don&apos;t just write requirement documents. I architect, write, and deploy full-stack applications and autonomous agent pipelines.
          </p>
        </div>

        {/* Bento Grid of Visual Project Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Card 1: TradeBuddy / MaximusOne (Featured Hero Bento - 7 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 rounded-3xl border border-slatecard-border bg-obsidian-elevated p-8 sm:p-10 flex flex-col justify-between shadow-2xl relative overflow-hidden group hover:border-brand-emerald/40 transition-all duration-300"
          >
            {/* Subtle glow accent */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-brand-emerald/10 rounded-full blur-[100px] pointer-events-none -z-10" />

            <div>
              {/* Header Badge & Live Tag */}
              <div className="flex items-center justify-between gap-3 mb-6">
                <span className="px-3 py-1 rounded-md bg-brand-emerald/10 border border-brand-emerald/30 text-brand-emerald font-mono text-xs font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-brand-emerald animate-pulse"></span>
                  LIVE IN PRODUCTION
                </span>
                <span className="text-xs font-mono text-neutral-400">Trading Intelligence Engine</span>
              </div>

              {/* Title & One-Liner */}
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white font-sans tracking-tight">
                TradeBuddy / MaximusOne
              </h3>
              <p className="text-neutral-300 text-base sm:text-lg font-sans mt-3 leading-relaxed">
                AI-powered real-time trading execution dashboard and autonomous 24/7 background quant engine built for institutional risk control.
              </p>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2 mt-5">
                {['Next.js', 'Supabase', 'Vercel', 'AI Analytics', 'WebSockets', 'Tailwind CSS'].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-lg bg-slatecard border border-slatecard-border text-neutral-200 text-xs font-mono"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>

              {/* Visual SaaS Preview Container */}
              <div className="mt-8 p-5 rounded-2xl bg-obsidian border border-slatecard-border/80 font-mono text-xs space-y-3">
                <div className="flex items-center justify-between text-neutral-400 border-b border-slatecard-border/60 pb-2">
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-brand-emerald" />
                    <span className="text-white font-semibold">Maximus-v3.0 Daemon</span>
                  </div>
                  <span className="text-brand-emerald font-semibold">HEALTH: 100% OK</span>
                </div>
                <div className="grid grid-cols-3 gap-2 pt-1 text-center">
                  <div className="p-2 rounded-lg bg-slatecard border border-slatecard-border">
                    <div className="text-[10px] text-neutral-500 uppercase">Latency</div>
                    <div className="text-sm font-bold text-white mt-0.5">&lt;50ms</div>
                  </div>
                  <div className="p-2 rounded-lg bg-slatecard border border-slatecard-border">
                    <div className="text-[10px] text-neutral-500 uppercase">SL Guardrails</div>
                    <div className="text-sm font-bold text-brand-emerald mt-0.5">Automated</div>
                  </div>
                  <div className="p-2 rounded-lg bg-slatecard border border-slatecard-border">
                    <div className="text-[10px] text-neutral-500 uppercase">Cron Engine</div>
                    <div className="text-sm font-bold text-brand-blue mt-0.5">Vercel 24/7</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Massive Action Buttons */}
            <div className="mt-8 pt-6 border-t border-slatecard-border/80 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="https://maximusone.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-brand-emerald hover:bg-brand-emeraldLight text-obsidian font-bold text-base font-sans shadow-emerald-glow transition-all duration-200 group/btn"
              >
                <span>Launch Live App</span>
                <ArrowUpRight className="w-5 h-5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href="https://github.com/varunbhandurge/tradebuddy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl border border-slatecard-border bg-slatecard hover:bg-slatecard-hover hover:border-slatecard-borderHover text-white font-medium text-base font-sans transition-all"
              >
                <Github className="w-5 h-5" />
                <span>GitHub ↗</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column Stack: Cards 2 & 3 (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {/* Card 2: BA & Account Management Swarm */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="rounded-3xl border border-slatecard-border bg-obsidian-elevated p-8 flex flex-col justify-between shadow-xl relative overflow-hidden group hover:border-brand-blue/40 transition-all duration-300 flex-1"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="px-2.5 py-1 rounded-md bg-brand-blue/10 border border-brand-blue/30 text-brand-blue font-mono text-xs font-semibold flex items-center gap-1.5">
                    <Bot className="w-3.5 h-3.5" />
                    AI AGENT SWARM
                  </span>
                  <span className="text-[11px] font-mono text-neutral-400">Autonomous Tooling</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-sans tracking-tight">
                  BA &amp; Account Management Swarm
                </h3>
                <p className="text-neutral-300 text-sm font-sans mt-2.5 leading-relaxed">
                  Multi-agent AI ecosystem automating BRDs, PRDs, client proposals, Jira tickets, and CRM updates using local LLMs and Model Context Protocol (MCP) servers.
                </p>

                <div className="flex flex-wrap gap-1.5 mt-4">
                  {['FastAPI', 'local Qwen 3.6', 'MCP Servers', 'Multi-Agent AI', 'Jira API'].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-md bg-slatecard border border-slatecard-border text-neutral-300 text-[11px] font-mono"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* Massive Action Button */}
              <div className="mt-8 pt-5 border-t border-slatecard-border/80">
                <a
                  href="https://github.com/varunbhandurge/ba-account-swarm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-neutral-200 text-obsidian font-bold text-sm font-sans transition-all duration-200 group/btn"
                >
                  <Github className="w-4 h-4" />
                  <span>View Source ↗</span>
                </a>
              </div>
            </motion.div>

            {/* Card 3: BillVault & VarunsJobBot */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="rounded-3xl border border-slatecard-border bg-obsidian-elevated p-8 flex flex-col justify-between shadow-xl relative overflow-hidden group hover:border-purple-500/40 transition-all duration-300 flex-1"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="px-2.5 py-1 rounded-md bg-purple-500/10 border border-purple-500/30 text-purple-400 font-mono text-xs font-semibold flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5" />
                    FULL-STACK &amp; AUTOMATION
                  </span>
                  <span className="text-[11px] font-mono text-neutral-400">Personal Workflows</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-sans tracking-tight">
                  BillVault &amp; VarunsJobBot
                </h3>
                <p className="text-neutral-300 text-sm font-sans mt-2.5 leading-relaxed">
                  Automated recurring finance tracking hub and autonomous career intelligence pipeline orchestrated with FastAPI serverless crons on Vercel.
                </p>

                <div className="flex flex-wrap gap-1.5 mt-4">
                  {['Next.js', 'FastAPI', 'Vercel', 'Python', 'Cron Automation'].map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-md bg-slatecard border border-slatecard-border text-neutral-300 text-[11px] font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Massive Action Button */}
              <div className="mt-8 pt-5 border-t border-slatecard-border/80">
                <a
                  href="https://github.com/varunbhandurge/visualresume"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-slatecard-border bg-slatecard hover:bg-slatecard-hover hover:border-slatecard-borderHover text-white font-semibold text-sm font-sans transition-all duration-200 group/btn"
                >
                  <ExternalLink className="w-4 h-4 text-neutral-400" />
                  <span>View Deployments ↗</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
