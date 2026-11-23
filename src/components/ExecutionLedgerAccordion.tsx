'use client';

import React, { useState } from 'react';
import { ChevronDown, ArrowUpRight, Check } from 'lucide-react';

interface CapabilityRow {
  id: string;
  index: string;
  title: string;
  role: string;
  summary: string;
  expandedDetail: string;
  deliverables: string[];
}

const capabilities: CapabilityRow[] = [
  {
    id: 'commercial',
    index: '01',
    title: 'Commercial Closure & SLA Negotiation',
    role: 'Account Manager',
    summary: 'Leading client conversations, stakeholder alignment, deal closing, and enterprise SLA structuring.',
    expandedDetail:
      'Consultative selling across Tier-1 BFSI accounts, commercial scoping, risk allocation, penalty clauses, and contract governance. Responsible for aligning executive sponsor outcomes with sustainable delivery commitments.',
    deliverables: [
      'Enterprise SLA contracts & penalty structuring',
      'C-level stakeholder management & alignment',
      'P&L ownership & commercial deal closure',
      'Cross-functional proposal & RFP authoring',
    ],
  },
  {
    id: 'elicitation',
    index: '02',
    title: 'Requirement Elicitation & Critical Documentation',
    role: 'Lead BA · ECBA™',
    summary: 'Translating technical blind spots into business clarity via BRDs, PRDs, FRDs, and process flows.',
    expandedDetail:
      'Bridging executive vision and engineering execution by uncovering edge cases, regulatory rules, and system dependencies early. Transforming ambiguous business intent into unambiguous functional specifications.',
    deliverables: [
      'Comprehensive BRDs, PRDs, and FRDs',
      'As-Is vs. To-Be process mapping (BPMN)',
      'Traceability matrices & acceptance criteria (Gherkin)',
      'Implicit risk & regulatory gap analysis',
    ],
  },
  {
    id: 'prototyping',
    index: '03',
    title: 'Rapid AI Prototyping & Engineering Handoff',
    role: 'AI Builder',
    summary: 'Building functional AI prototypes and shipping them directly to technical teams to validate journeys fast.',
    expandedDetail:
      'Using FastAPI, local LLMs, and modern web stacks to replace static wireframes with working proof-of-concepts in days. Giving engineering teams tangible APIs and data contracts rather than theoretical slide decks.',
    deliverables: [
      'Interactive FastAPI & Ollama prototypes',
      'Working API schema contracts & payloads',
      'Fast customer journey validation',
      'Zero-loss handoff to core engineering',
    ],
  },
  {
    id: 'sdlc',
    index: '04',
    title: 'Full-SDLC Agile Governance',
    role: 'Project Manager · CSM®',
    summary: 'Overseeing end-to-end delivery across sprints, daily standups, resource planning, and production releases.',
    expandedDetail:
      'Certified Scrum Master rigor driving backlog grooming, cross-functional engineering squads, QA gates, and zero-surprise go-lives. Maintaining high velocity while strictly enforcing enterprise quality standards.',
    deliverables: [
      'Sprint cadence, daily standups & retrospectives',
      'Jira backlog grooming & velocity tracking',
      'Cross-functional squad resource management',
      'Release gating & zero-regression QA delivery',
    ],
  },
  {
    id: 'onboarding',
    index: '05',
    title: 'BFSI Customer Onboarding, KYC & OCR',
    role: 'Domain Specialist',
    summary: 'Architecting high-volume digital onboarding and intelligent document processing pipelines.',
    expandedDetail:
      'Hands-on expertise with Google Document AI, GCP, automated verification workflows, and banking compliance frameworks. Scaled document OCR to 95%+ precision across millions of institutional customer verifications.',
    deliverables: [
      'Automated KYC onboarding workflows',
      'Document AI & OCR extraction (<0.1% false positives)',
      'GCP infrastructure & data compliance',
      'BFSI regulatory security adherence',
    ],
  },
  {
    id: 'security',
    index: '06',
    title: 'Cybersecurity Sales, Managed Services & Renewals',
    role: 'Account Manager',
    summary: 'Selling enterprise GRC, Red Teaming, and managed services while driving client onboarding and renewals.',
    expandedDetail:
      'Long-term account expansion, SLA adherence, resource planning, and multi-year contract renewals across BFSI leaders. Maintaining post-delivery trust and turning initial deployments into multi-year recurring accounts.',
    deliverables: [
      'Enterprise GRC & Red Teaming pre-sales',
      'Post-launch SLA audit management',
      'Customer success & escalation resolution',
      '100% renewal retention on managed contracts',
    ],
  },
];

export function ExecutionLedgerAccordion() {
  const [expandedId, setExpandedId] = useState<string | null>('commercial');

  const toggleRow = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="capabilities" className="w-full max-w-5xl mx-auto px-6 py-24 md:py-32">
      {/* Section Header */}
      <div className="mb-14">
        <p className="font-mono text-xs uppercase tracking-widest text-mutedZinc/70 font-medium mb-3">
          Execution Ledger &bull; Chronological Sequence (AM &rarr; BA &rarr; PM &rarr; AM)
        </p>
        <h2 className="font-heading font-semibold text-2xl sm:text-4xl text-alabaster tracking-tighter">
          Core Capabilities & Execution Ledger
        </h2>
        <p className="text-sm sm:text-base text-mutedZinc mt-2 max-w-2xl">
          Six interconnected capabilities covering the complete enterprise lifecycle from initial deal structuring to technical prototype and multi-year renewal.
        </p>
      </div>

      {/* 6-Row Interactive Table / Accordion */}
      <div className="border-t border-white/[0.08] divide-y divide-white/[0.08]">
        {capabilities.map((row) => {
          const isOpen = expandedId === row.id;
          return (
            <div
              key={row.id}
              className={`transition-colors ${
                isOpen ? 'bg-white/[0.02]' : 'hover:bg-white/[0.01]'
              }`}
            >
              {/* Row Header Trigger */}
              <button
                type="button"
                onClick={() => toggleRow(row.id)}
                className="w-full py-6 px-2 sm:px-4 text-left flex items-start sm:items-center justify-between gap-4 group focus:outline-none"
                aria-expanded={isOpen}
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 flex-1">
                  {/* Number & Role */}
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="font-mono text-xs font-semibold text-champagne">
                      {row.index}
                    </span>
                    <span className="font-mono text-[11px] text-mutedZinc/70 uppercase">
                      {row.role}
                    </span>
                  </div>

                  {/* Title & One-line View */}
                  <div className="flex-1">
                    <h3 className="font-heading font-medium text-base sm:text-lg text-alabaster group-hover:text-white transition-colors">
                      {row.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-mutedZinc mt-1 leading-relaxed">
                      {row.summary}
                    </p>
                  </div>
                </div>

                {/* Expand Indicator */}
                <div className="pt-1 sm:pt-0 shrink-0">
                  <span
                    className={`inline-flex items-center justify-center w-7 h-7 rounded border border-white/[0.08] text-mutedZinc group-hover:text-alabaster transition-all ${
                      isOpen ? 'rotate-180 bg-white/[0.05] text-alabaster' : ''
                    }`}
                  >
                    <ChevronDown className="w-3.5 h-3.5" />
                  </span>
                </div>
              </button>

              {/* Expanded Operational Details */}
              {isOpen && (
                <div className="px-2 sm:px-4 pb-7 pt-1 animate-in fade-in duration-200">
                  <div className="pl-0 sm:pl-12 pt-3 border-t border-white/[0.05] space-y-4">
                    <p className="text-sm text-alabaster/90 leading-relaxed max-w-3xl">
                      {row.expandedDetail}
                    </p>

                    <div className="pt-2">
                      <span className="font-mono text-[11px] uppercase tracking-wider text-mutedZinc/60 block mb-2">
                        Key Deliverables & Artifacts
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-w-3xl">
                        {row.deliverables.map((item) => (
                          <div key={item} className="flex items-start gap-2 text-xs text-mutedZinc">
                            <Check className="w-3.5 h-3.5 text-champagne shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
