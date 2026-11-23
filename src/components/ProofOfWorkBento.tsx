'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Terminal, Activity, Bot, Calendar, Zap } from 'lucide-react';

export const ProofOfWorkBento: React.FC = () => {
  return (
    <section id="proof" className="py-20 md:py-28 border-b border-surface-border bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <div className="font-mono text-xs uppercase tracking-widest text-neutral-400 flex items-center gap-2">
            <span className="w-2 h-2 bg-terminal"></span>
            <span>PROOF OF WORK // INTERACTIVE LIVE DEPLOYMENTS</span>
          </div>
          <span className="font-mono text-xs text-neutral-600">[ 04 DEPLOYMENTS ]</span>
        </div>

        {/* Asymmetrical Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {/* Card 1: MaximusOne / TradeBuddy (Large - Live Production - 7 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="md:col-span-7 border border-surface-border bg-surface p-7 sm:p-9 flex flex-col justify-between hover:border-terminal/50 transition-colors group"
          >
            <div>
              <div className="flex items-center justify-between font-mono text-[11px] mb-4">
                <span className="text-terminal flex items-center gap-1.5 font-bold">
                  <span className="w-1.5 h-1.5 bg-terminal animate-pulse"></span>
                  LIVE PRODUCTION
                </span>
                <span className="text-neutral-500">Next.js, Supabase</span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-sans tracking-tight">
                MaximusOne / TradeBuddy
              </h3>
              <p className="mt-2 text-sm sm:text-base font-sans text-neutral-400 leading-relaxed max-w-lg">
                AI-powered autonomous trading execution.
              </p>

              {/* Status Box */}
              <div className="mt-8 p-4 bg-black border border-surface-border font-mono text-xs text-neutral-400 flex items-center justify-between">
                <span className="text-neutral-500">&gt; quant_daemon: sub-50ms tick execution</span>
                <span className="text-terminal">VERIFIED 24/7</span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-surface-border">
              <a
                href="https://maximusone.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-terminal text-black font-mono font-bold text-xs uppercase tracking-wider hover:bg-white transition-all shadow-terminal-glow"
              >
                <span>[Launch App ↗]</span>
              </a>
            </div>
          </motion.div>

          {/* Card 2: BA & Account Swarm (AI Engineering - 5 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="md:col-span-5 border border-surface-border bg-surface p-7 flex flex-col justify-between hover:border-terminal/50 transition-colors group"
          >
            <div>
              <div className="flex items-center justify-between font-mono text-[11px] mb-4">
                <span className="text-neutral-400 font-bold">AI ENGINEERING</span>
                <span className="text-neutral-500">FastAPI, Qwen 3.6, MCP</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white font-sans tracking-tight">
                BA &amp; Account Swarm
              </h3>
              <p className="mt-2 text-sm font-sans text-neutral-400 leading-relaxed">
                Multi-agent workflow automating BRDs and CRMs via local LLMs.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-surface-border">
              <a
                href="https://github.com/varunbhandurge/ba-account-swarm"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 border border-surface-border bg-black text-white hover:border-white font-mono text-xs uppercase tracking-wider transition-colors"
              >
                <span>[Inspect Source ↗]</span>
              </a>
            </div>
          </motion.div>

          {/* Card 3: Idraneel Karyalay Venue Platform (Full-Stack - 6 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.15 }}
            className="md:col-span-6 border border-surface-border bg-surface p-7 flex flex-col justify-between hover:border-terminal/50 transition-colors group"
          >
            <div>
              <div className="flex items-center justify-between font-mono text-[11px] mb-4">
                <span className="text-neutral-400 font-bold">FULL-STACK</span>
                <span className="text-neutral-500">Dynamic Booking Engine</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white font-sans tracking-tight">
                Idraneel Karyalay Venue Platform
              </h3>
              <p className="mt-2 text-sm font-sans text-neutral-400 leading-relaxed">
                Dynamic booking engine with real-time pricing and availability.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-surface-border">
              <a
                href="https://github.com/varunbhandurge/IdraneelKaryalay-wedding-hall"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 border border-surface-border bg-black text-white hover:border-white font-mono text-xs uppercase tracking-wider transition-colors"
              >
                <span>[View Source ↗]</span>
              </a>
            </div>
          </motion.div>

          {/* Card 4: Vercel Pipelines: BillVault & JobBot (Automation - 6 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="md:col-span-6 border border-surface-border bg-surface p-7 flex flex-col justify-between hover:border-terminal/50 transition-colors group"
          >
            <div>
              <div className="flex items-center justify-between font-mono text-[11px] mb-4">
                <span className="text-neutral-400 font-bold">AUTOMATION</span>
                <span className="text-neutral-500">Serverless Crons</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white font-sans tracking-tight">
                Vercel Pipelines: BillVault &amp; JobBot
              </h3>
              <p className="mt-2 text-sm font-sans text-neutral-400 leading-relaxed">
                Serverless finance and execution cron jobs.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-surface-border">
              <a
                href="https://github.com/varunbhandurge"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 border border-surface-border bg-black text-white hover:border-white font-mono text-xs uppercase tracking-wider transition-colors"
              >
                <span>[View Repos ↗]</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
