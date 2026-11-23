'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight, Activity, Bot, Shield, Layers, Calendar } from 'lucide-react';

interface BuildItem {
  id: string;
  title: string;
  badge: string;
  category: string;
  summary: string;
  stack: string[];
  primaryLink?: { label: string; href: string };
  secondaryLink?: { label: string; href: string };
  isFeatured?: boolean;
}

export const ShippedBuildsGrid: React.FC = () => {
  const builds: BuildItem[] = [
    {
      id: 'tradebuddy',
      title: 'MaximusOne / TradeBuddy',
      badge: 'Featured Live Product',
      category: 'FinTech Trading Platform',
      summary:
        'AI-powered trading analytics and autonomous execution platform built for real-time market decision support.',
      stack: ['Next.js', 'Supabase', 'Vercel', 'TypeScript', 'WebSockets'],
      primaryLink: { label: 'Launch Live App ↗', href: 'https://maximusone.vercel.app' },
      secondaryLink: { label: 'Source ↗', href: 'https://github.com/varunbhandurge/tradebuddy' },
      isFeatured: true,
    },
    {
      id: 'ba-swarm',
      title: 'BA & Account Management Swarm',
      badge: 'Featured AI System',
      category: 'Autonomous Multi-Agent AI',
      summary:
        'Multi-agent workflow automating BRDs, PRDs, proposals, CRM updates, and Jira delegation using local LLMs and MCP servers.',
      stack: ['Python', 'FastAPI', 'Local Qwen', 'MCP', 'Jira API'],
      primaryLink: { label: 'Inspect Repo ↗', href: 'https://github.com/varunbhandurge/BASwarm' },
      isFeatured: true,
    },
    {
      id: 'billvault',
      title: 'BillVault',
      badge: 'FinTech Web App',
      category: 'Document & Expense Vault',
      summary:
        'Personal finance and document vault web application engineered with a clean dark-mode interface.',
      stack: ['TypeScript', 'Next.js', 'Vercel', 'Tailwind CSS'],
      primaryLink: { label: 'Inspect Repo ↗', href: 'https://github.com/varunbhandurge/Bill-Vault' },
    },
    {
      id: 'job-search-agent',
      title: 'Automated Job Search Agent',
      badge: 'Workflow Automation',
      category: 'CI/CD Career Engine',
      summary:
        'Autonomous job discovery and application tracking pipeline orchestrated via scheduled workflows.',
      stack: ['Python', 'GitHub Actions', 'Automation', 'Cron Pipelines'],
      primaryLink: { label: 'Inspect Repo ↗', href: 'https://github.com/varunbhandurge/JobSearchAgent' },
    },
    {
      id: 'localqwen-sync',
      title: 'LocalQwen & AntigravitySyncAgent',
      badge: 'AI Tooling',
      category: 'Agent Orchestration',
      summary:
        'Local LLM orchestration scripts and automated workspace synchronization agents for rapid prototyping.',
      stack: ['Python', 'Ollama', 'Agentic Workflows', 'Sync Automation'],
      primaryLink: { label: 'LocalQwen ↗', href: 'https://github.com/varunbhandurge/LocalQwen' },
      secondaryLink: { label: 'SyncAgent ↗', href: 'https://github.com/varunbhandurge/AntigravitySyncAgent' },
    },
    {
      id: 'trainer-venue',
      title: 'Digital Personal Trainer & Idraneel Karyalay',
      badge: 'Full-Stack & Vertical Apps',
      category: 'Commercial Applications',
      summary:
        'AI fitness coaching assistant and a dynamic venue booking engine with real-time date availability and pricing.',
      stack: ['Python', 'Full-Stack Web', 'Dynamic Pricing', 'Mobile-Ready'],
      primaryLink: { label: 'Trainer Repo ↗', href: 'https://github.com/varunbhandurge/DigitalPersonalTrainer' },
      secondaryLink: { label: 'Venue Repo ↗', href: 'https://github.com/varunbhandurge/IdraneelKaryalay-wedding-hall' },
    },
  ];

  return (
    <section id="builds" className="py-20 md:py-28 border-b border-white/[0.08] bg-[#07080A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-zinc-500 font-medium mb-2">
              SHIPPED REPOSITORIES &amp; WORKING CODE
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-sans tracking-tight">
              Shipped AI &amp; Engineering Builds
            </h2>
          </div>
          <p className="text-sm font-sans text-zinc-400 max-w-md leading-relaxed">
            Active repositories, live web applications, and autonomous agent systems authored and deployed on Vercel and GitHub.
          </p>
        </div>

        {/* 2-Column Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {builds.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              className={`rounded-2xl border bg-white/[0.02] hover:bg-white/[0.04] p-7 sm:p-8 flex flex-col justify-between transition-all duration-200 shadow-executive-card ${
                item.isFeatured
                  ? 'border-white/20 hover:border-white/35'
                  : 'border-white/[0.08] hover:border-white/20'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-zinc-300">
                    {item.badge}
                  </span>
                  <span className="text-[11px] font-mono text-zinc-500">
                    {item.category}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white font-sans tracking-tight">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm text-zinc-400 font-sans leading-relaxed">
                  {item.summary}
                </p>

                {/* Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mt-5">
                  {item.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.06] text-xs font-mono text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-5 border-t border-white/[0.06] flex flex-wrap items-center gap-3">
                {item.primaryLink && (
                  <a
                    href={item.primaryLink.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-white text-black text-xs font-semibold hover:bg-zinc-200 transition-all shadow-sm"
                  >
                    <span>{item.primaryLink.label}</span>
                  </a>
                )}

                {item.secondaryLink && (
                  <a
                    href={item.secondaryLink.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-4 py-2.5 rounded-lg border border-white/[0.12] bg-white/[0.03] hover:bg-white/[0.08] text-zinc-200 text-xs font-medium transition-all"
                  >
                    <Github className="w-3.5 h-3.5 text-zinc-400" />
                    <span>{item.secondaryLink.label}</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
