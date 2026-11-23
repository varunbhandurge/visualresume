import React from 'react';
import { Search, FileCode2, Cpu, GitPullRequest, Users, CheckCircle2 } from 'lucide-react';

export function ThingsIDo() {
  const capabilities = [
    {
      num: '01',
      title: 'Customer Discovery & Requirement Elicitation',
      perspective: 'Business & Customer Lens',
      icon: Search,
      color: 'text-cyan-400',
      description:
        'Conducting structured stakeholder discovery to uncover unstated business pain points, operational bottlenecks, and regulatory mandates before engineering starts.',
      deliverables: [
        'Stakeholder interviews & pain point mapping',
        'As-Is vs. To-Be operational process models (BPMN)',
        'Gap analysis & regulatory compliance validation',
      ],
    },
    {
      num: '02',
      title: 'Translating Business Needs into Technical Specs',
      perspective: 'Business & Tech Bridge',
      icon: FileCode2,
      color: 'text-emerald-400',
      description:
        'Converting complex business intent into unambiguous engineering specifications. Ensuring developers understand the "why" and business sponsors understand the technical dependencies.',
      deliverables: [
        'Comprehensive BRD, PRD & FRD documentation',
        'User stories with Gherkin acceptance criteria',
        'System sequence diagrams, data schemas & API contracts',
      ],
    },
    {
      num: '03',
      title: 'Rapid AI Prototyping & Journey Validation',
      perspective: 'Technical Builder Lens',
      icon: Cpu,
      color: 'text-amber-400',
      description:
        'Replacing static wireframes with working, functional code. Building rapid prototypes using FastAPI, local LLMs, and modern web frameworks to test and validate customer journeys fast.',
      deliverables: [
        'Interactive working prototypes (FastAPI / Next.js)',
        'Local LLM & Multi-Agent workflow proofs-of-concept',
        'Validating API payloads & data contracts before sprint kickoff',
      ],
    },
    {
      num: '04',
      title: 'Full-SDLC Agile Execution (CSM® Certified)',
      perspective: 'Engineering Leadership Lens',
      icon: GitPullRequest,
      color: 'text-cyan-400',
      description:
        'Certified Scrum Master rigor driving cross-functional velocity. Governing sprint cadences, backlog grooming, blocker elimination, and zero-defect production releases.',
      deliverables: [
        'Sprint planning, burndown tracking & backlog grooming (Jira)',
        'Cross-functional squad alignment (Frontend, Backend, QA, Ops)',
        'Release gating & zero-regression UAT deployment',
      ],
    },
    {
      num: '05',
      title: 'Customer Onboarding & Solution Adoption',
      perspective: 'Customer Success & Domain Lens',
      icon: Users,
      color: 'text-emerald-400',
      description:
        'Ensuring the delivered system actually solves the customer’s problem. Deploying Document AI, automated verification workflows, and training users for frictionless daily adoption.',
      deliverables: [
        'Digital customer onboarding & KYC automation (95%+ accuracy)',
        'Document AI & OCR extraction workflows',
        'User training, SOP documentation & post-go-live hypercare',
      ],
    },
  ];

  return (
    <section id="things-i-do" className="w-full max-w-4xl mx-auto px-6 py-12 border-t border-white/[0.08]">
      <div className="mb-8">
        <h2 className="font-heading font-bold text-xl sm:text-2xl text-white tracking-tight">
          Things I Do
        </h2>
        <p className="text-sm text-mutedText mt-1">
          How I bridge the gap between business vision and technical execution.
        </p>
      </div>

      <div className="space-y-4">
        {capabilities.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.num}
              className="p-5 sm:p-6 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/15 transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-2">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-mutedText/60">
                    {item.num}
                  </span>
                  <div className="flex items-center gap-2">
                    <Icon className={`w-4 h-4 ${item.color}`} />
                    <h3 className="font-heading font-semibold text-base sm:text-lg text-white">
                      {item.title}
                    </h3>
                  </div>
                </div>
                <span className="font-mono text-[11px] text-mutedText px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.06] w-fit">
                  {item.perspective}
                </span>
              </div>

              <p className="text-sm text-mutedText leading-relaxed mt-2 pl-0 sm:pl-7">
                {item.description}
              </p>

              <div className="mt-4 pt-3 border-t border-white/[0.04] pl-0 sm:pl-7 grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs font-mono text-white/80">
                {item.deliverables.map((del) => (
                  <div key={del} className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="text-[11px]">{del}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
