import React from 'react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

interface Project {
  title: string;
  category: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  githubUrl: string;
  secondaryGithubUrl?: string;
  secondaryGithubLabel?: string;
}

const projects: Project[] = [
  {
    title: 'TradeBuddy / MaximusOne',
    category: 'Autonomous Trading System',
    description:
      'Autonomous 24/7 multi-asset trading engine with real-time portfolio telemetry, automated risk-adjusted position sizing, and Supabase cloud synchronization. Built with Next.js 14 and FastAPI.',
    tech: ['Next.js 14', 'FastAPI', 'Supabase', 'Vercel Serverless', 'Python Daemon'],
    liveUrl: 'https://maximusone.vercel.app',
    githubUrl: 'https://github.com/varunbhandurge/tradebuddy',
  },
  {
    title: 'BASwarm (BA & AM Multi-Agent Swarm)',
    category: 'AI Multi-Agent System',
    description:
      'Autonomous multi-agent pipeline that ingests unstructured customer RFPs, maps stakeholder needs, and drafts structured BRDs, PRDs, and Jira backlogs.',
    tech: ['Python', 'LangChain', 'Multi-Agent Swarms', 'Ollama', 'BRD Automation'],
    githubUrl: 'https://github.com/varunbhandurge/BASwarm',
  },
  {
    title: 'BillVault (Bill-Vault)',
    category: 'Document AI & OCR',
    description:
      'Enterprise financial document AI and invoice OCR extraction platform parsing complex receipts into validated JSON schemas with confidence scoring.',
    tech: ['Computer Vision', 'OCR Extraction', 'FastAPI', 'Python', 'JSON Schema'],
    githubUrl: 'https://github.com/varunbhandurge/Bill-Vault',
  },
  {
    title: 'JobSearchAgent',
    category: 'Automation & Agentic Search',
    description:
      '24/7 autonomous job-hunting engine scraping enterprise postings across Workday and Greenhouse, evaluating ATS fit, and dynamically tailoring resumes.',
    tech: ['Python', 'FastAPI', 'Netlify CDN', 'GitHub Actions Cron', 'Telegram API'],
    liveUrl: 'https://varunsjobbot.netlify.app',
    githubUrl: 'https://github.com/varunbhandurge/JobSearchAgent',
  },
  {
    title: 'Legal Next (LosforIBSER)',
    category: 'Legal Operations & LOS Intelligence',
    description:
      'Agreement intelligence system benchmarked against tier-1 banking systems; delivers clause-by-clause NLP parsing across 100+ page bilateral schedules and vendor SLAs.',
    tech: ['Node.js', 'NLP Clause Parsing', 'Tri-State Diff', 'Tier-1 IB Benchmark'],
    liveUrl: 'https://legalnext.netlify.app',
    githubUrl: 'https://github.com/varunbhandurge/LosforIBSER',
  },
  {
    title: 'LocalQwen & AntigravitySyncAgent',
    category: 'Local LLM & Workspace Sync',
    description:
      'Offline local LLM inference tooling (Qwen 2.5 on Ollama) combined with an autonomous daemon synchronizing agent trajectories across multi-workstation developer setups.',
    tech: ['Qwen 2.5', 'Ollama', 'PowerShell', 'Distributed Sync'],
    githubUrl: 'https://github.com/varunbhandurge/LocalQwen',
    secondaryGithubUrl: 'https://github.com/varunbhandurge/AntigravitySyncAgent',
    secondaryGithubLabel: 'SyncAgent Repo',
  },
  {
    title: 'Idraneel Karyalay Venue Platform',
    category: 'Commercial Web Platform',
    description:
      'Commercial booking platform featuring real-time date availability queries, an interactive Muhurat calendar, and a dynamic catering cost estimator.',
    tech: ['Responsive Web', 'Cost Estimator', 'UPI Integration', 'Netlify'],
    liveUrl: 'https://indraneelmangalkaryalay.netlify.app',
    githubUrl: 'https://github.com/varunbhandurge/IdraneelKaryalay-wedding-hall',
  },
];

export function ThingsImWorkingOn() {
  return (
    <section id="things-im-working-on" className="w-full max-w-4xl mx-auto px-6 py-12 border-t border-white/[0.08]">
      <div className="mb-8">
        <h2 className="font-heading font-bold text-xl sm:text-2xl text-white tracking-tight">
          Things I&apos;m Working On
        </h2>
        <p className="text-sm text-mutedText mt-1">
          Working code, live Vercel deployments, and active open-source GitHub repositories.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((p) => (
          <div
            key={p.title}
            className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/15 flex flex-col justify-between transition-all"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[10px] font-mono uppercase text-mutedText/70 px-2 py-0.5 rounded bg-white/[0.03]">
                  {p.category}
                </span>
                {p.liveUrl && (
                  <span className="flex items-center gap-1 text-[10px] font-mono text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Live Deployment
                  </span>
                )}
              </div>

              <h3 className="font-heading font-semibold text-base text-white">
                {p.title}
              </h3>

              <p className="text-xs text-mutedText leading-relaxed mt-2">
                {p.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mt-3">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-mono text-white/70 px-2 py-0.5 rounded bg-white/[0.02] border border-white/[0.04]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="mt-5 pt-3 border-t border-white/[0.04] flex flex-wrap items-center gap-3 text-xs font-mono">
              {p.liveUrl && (
                <a
                  href={p.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 font-medium"
                >
                  <span>Open Live App</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}

              <a
                href={p.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-mutedText hover:text-white"
              >
                <Github className="w-3 h-3" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3 h-3 text-mutedText/50" />
              </a>

              {p.secondaryGithubUrl && (
                <a
                  href={p.secondaryGithubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-mutedText hover:text-white"
                >
                  <Github className="w-3 h-3" />
                  <span>{p.secondaryGithubLabel || 'Secondary Repo'}</span>
                  <ArrowUpRight className="w-3 h-3 text-mutedText/50" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
