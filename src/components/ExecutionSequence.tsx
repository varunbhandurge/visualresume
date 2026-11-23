'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Handshake, Sparkles, Kanban, RefreshCw, CheckCircle2 } from 'lucide-react';

interface Stage {
  step: string;
  title: string;
  role: string;
  summary: string;
  icon: React.ReactNode;
  deliverables: string[];
  governanceFocus: string;
}

export const ExecutionSequence: React.FC = () => {
  const [activeStep, setActiveStep] = useState<string>('01');

  const stages: Stage[] = [
    {
      step: '01',
      title: 'Pre-Sales & SLA Closure',
      role: 'Key Account Manager',
      summary:
        'Client discovery, commercial structuring, cybersecurity/solution pitching, and SLA negotiation.',
      icon: <Handshake className="w-5 h-5 text-champagne" />,
      deliverables: [
        'Commercial Pricing Models & SOWs',
        'Service Level Agreement (SLA) Matrix',
        'Cybersecurity & GRC Solution Pitches',
        'Vendor Risk Assessment Clearance',
      ],
      governanceFocus: 'Aligning commercial scope with engineering delivery margins.',
    },
    {
      step: '02',
      title: 'Elicitation & AI Prototyping',
      role: 'Lead Business Analyst',
      summary:
        'Translating technical blind spots into BRDs/PRDs and shipping working AI prototypes directly to engineering teams.',
      icon: <Sparkles className="w-5 h-5 text-indigo-400" />,
      deliverables: [
        'Business & Product Requirement Documents (BRD/PRD)',
        'Functional AI Interactive Prototypes (FastAPI/React)',
        'BPMN 2.0 Process & Data Flow Diagrams',
        'Document AI / OCR Extraction Accuracy Benchmarks',
      ],
      governanceFocus: 'Eliminating ambiguous requirements before writing production code.',
    },
    {
      step: '03',
      title: 'Full-SDLC Execution',
      role: 'Project Manager (CSM®)',
      summary:
        'Running Agile sprints, daily standups, stakeholder governance, and risk mitigation from kickoff to production.',
      icon: <Kanban className="w-5 h-5 text-emerald-400" />,
      deliverables: [
        'Agile Sprints & Velocity Forecasting',
        'Daily Standups, Grooming & Blameless Retros',
        'RAG Risk Dashboards & Blocker Resolution',
        'UAT Acceptance Criteria & Testing Sign-Off',
      ],
      governanceFocus: 'Contractual milestone defense with zero scope-creep.',
    },
    {
      step: '04',
      title: 'Onboarding & Renewals',
      role: 'Key Account Manager',
      summary:
        'Enterprise go-live, SLA governance, managed services oversight, and multi-year contract renewals.',
      icon: <RefreshCw className="w-5 h-5 text-zinc-300" />,
      deliverables: [
        'Production Cutover Runbooks & Hypercare Plans',
        'Monthly SLA Uptime & Performance Audits',
        'Quarterly Business Review (QBR) Decks',
        'Multi-Year Contract Extension Addenda',
      ],
      governanceFocus: '99.9% SLA compliance and relationship expansion into new business units.',
    },
  ];

  const current = stages.find((s) => s.step === activeStep) || stages[0];

  return (
    <section id="sequence" className="py-20 md:py-24 border-b border-white/[0.08] bg-[#07080A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-zinc-500 font-medium mb-2">
              CHRONOLOGICAL LIFECYCLE OWNERSHIP
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-sans tracking-tight">
              End-to-End Execution Sequence
            </h2>
          </div>
          <p className="text-sm font-sans text-zinc-400 max-w-md leading-relaxed">
            From initial commercial pitch and AI prototyping to Agile delivery, client onboarding, and contract renewals.
          </p>
        </div>

        {/* 4-Step Horizontal Pipeline Stepper */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {stages.map((stage) => {
            const isSelected = stage.step === activeStep;
            return (
              <button
                key={stage.step}
                onClick={() => setActiveStep(stage.step)}
                className={`rounded-xl border p-5 text-left transition-all duration-200 flex flex-col justify-between ${
                  isSelected
                    ? 'border-white/30 bg-white/[0.05] shadow-lg shadow-black/50'
                    : 'border-white/[0.08] bg-white/[0.015] hover:bg-white/[0.03] hover:border-white/15'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-zinc-500">
                      STAGE {stage.step}
                    </span>
                    <div className="p-2 rounded-lg bg-white/[0.04]">
                      {stage.icon}
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-white font-sans tracking-tight">
                    {stage.title}
                  </h3>

                  <div className="text-xs text-champagne font-medium mt-1 font-sans">
                    {stage.role}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/[0.06] text-[11px] font-sans text-zinc-400 line-clamp-2">
                  {stage.summary}
                </div>
              </button>
            );
          })}
        </div>

        {/* Stage Drill-down Showcase Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.step}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-7 sm:p-9 shadow-executive-card"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
              <div>
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-zinc-300 mb-2">
                  <span>STAGE {current.step}</span>
                  <span className="text-zinc-600">•</span>
                  <span className="text-champagne font-semibold">{current.role}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-sans tracking-tight">
                  {current.title}
                </h3>
              </div>

              <div className="p-4 rounded-xl border border-white/[0.08] bg-white/[0.02] max-w-md">
                <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                  Governance Principle
                </div>
                <div className="text-xs text-zinc-200 font-sans mt-0.5">
                  {current.governanceFocus}
                </div>
              </div>
            </div>

            <p className="mt-6 text-sm sm:text-base text-zinc-300 font-sans leading-relaxed">
              {current.summary}
            </p>

            <div className="mt-6 pt-6 border-t border-white/[0.06]">
              <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold mb-3">
                Key Deliverables &amp; Artifacts
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {current.deliverables.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg border border-white/[0.08] bg-white/[0.02] flex items-start gap-2.5 text-xs text-zinc-300 font-sans"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
