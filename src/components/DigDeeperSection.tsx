'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Building2, ShieldCheck, CheckCircle2, Award, FileText } from 'lucide-react';

interface ExpandableSection {
  id: string;
  num: string;
  title: string;
  preview: string;
  tag: string;
  content: {
    highlight: string;
    items: string[];
    tags: string[];
  };
}

export const DigDeeperSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>('enterprise-pedigree');

  const sections: ExpandableSection[] = [
    {
      id: 'enterprise-pedigree',
      num: '01',
      title: 'Enterprise Pedigree',
      tag: 'Tier-1 BFSI Client Roster',
      preview: 'Delivered ₹10 Cr+ across ICICI Bank, HDFC ERGO, ABSLI, and Reliance ADAG.',
      content: {
        highlight:
          'Flagship account stewardship delivering 9 simultaneous enterprise projects within 10 months for a Tier-1 private bank, accounting for 55% of corporate revenue.',
        items: [
          'ICICI Bank: Spearheaded 9 core digital workflow rollouts from pre-sales solutioning to post-launch SLA governance.',
          'HDFC ERGO: Automated claims and customer verification pipelines reducing turnaround from 48 hours to under 4 minutes.',
          'Aditya Birla Sun Life Insurance (ABSLI): Led underwriting process mapping, requirements elicitation, and integration delivery.',
          'Reliance ADAG: Managed executive client relationships, technical deliverables governance, and compliance clearances.',
        ],
        tags: ['ICICI Bank', 'HDFC ERGO', 'ICICI Prudential', 'ABSLI', 'Reliance ADAG', '₹10 Cr+ Delivered'],
      },
    },
    {
      id: 'core-competencies',
      num: '02',
      title: 'Core Competencies',
      tag: 'Domain & Technical Depth',
      preview: 'Digital Onboarding, KYC, OCR (Document AI), Cybersecurity Sales, GRC, and Red Teaming.',
      content: {
        highlight:
          'Deep functional mastery across high-volume BFSI customer acquisition systems and enterprise cybersecurity defense consulting.',
        items: [
          'Customer Onboarding & Digital KYC: Scaled straight-through processing (STP) pipelines with <0.1% false positives and <4% false negatives.',
          'Intelligent OCR & Document AI: Google Document AI and Cloud Vision fine-tuning for Aadhaar, PAN, and banking documents.',
          'Cybersecurity Sales & GRC: Consultative selling of Red Teaming, VAPT assessments, and Governance, Risk & Compliance frameworks to BFSI CISOs.',
          'Regulatory Compliance: Strict alignment with RBI Digital KYC guidelines, UIDAI masking standards, and ISO 27001 info-security policies.',
        ],
        tags: ['Digital KYC', 'Google Document AI', 'OCR Automation', 'Cybersecurity Sales', 'GRC', 'Red Teaming', 'RBI Guidelines'],
      },
    },
    {
      id: 'project-management',
      num: '03',
      title: 'Project Management & SDLC',
      tag: 'Certified Scrum Master (CSM®)',
      preview: 'Agile sprints, SLA governance, daily standups, backlog grooming, and zero missed milestones.',
      content: {
        highlight:
          'Certified Scrum Master (CSM®) driving end-to-end accountability across distributed engineering squads, QA, and client IT teams.',
        items: [
          'Agile Ceremonies: Running daily standups, sprint planning, velocity forecasting, backlog grooming, and blameless retrospectives.',
          'Contractual SLA Governance: Establishing binding service level agreements and zero-penalty milestone billing terms.',
          'Cross-Functional Squad Leadership: Synchronizing frontend, backend, security, and enterprise client IT infrastructure leads.',
          'Production Release Cutover: Zero-downtime deployment orchestration, UAT sign-offs, and post-launch hypercare support.',
        ],
        tags: ['Certified Scrum Master (CSM®)', 'Agile / Scrum', 'SLA Governance', 'Jira Roadmaps', 'Sprint Hygiene', 'UAT Sign-Offs'],
      },
    },
  ];

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="resume-stuff" className="py-20 md:py-28 border-b border-slatecard-border/60 bg-obsidian">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slatecard-border bg-slatecard/80 text-xs font-mono text-neutral-400 mb-3">
            <FileText className="w-3.5 h-3.5 text-brand-emerald" />
            <span>FOR RECRUITERS & HIRING MANAGERS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-sans tracking-tight">
            The Traditional Resume Stuff
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base font-sans mt-3 max-w-xl mx-auto leading-relaxed">
            Clean on the surface. Expand below to inspect the client logos, domain competencies, and Agile certifications.
          </p>
        </div>

        {/* Expandable Accordion List */}
        <div className="space-y-4">
          {sections.map((item) => {
            const isExpanded = expandedId === item.id;
            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isExpanded
                    ? 'border-brand-emerald/40 bg-slatecard/90 shadow-xl'
                    : 'border-slatecard-border bg-slatecard/60 hover:bg-slatecard/80 hover:border-slatecard-borderHover'
                }`}
              >
                {/* Clickable Header Button */}
                <button
                  onClick={() => toggleExpand(item.id)}
                  className="w-full p-6 sm:p-7 flex items-center justify-between text-left gap-4"
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-center gap-4 sm:gap-6 min-w-0">
                    <span className="font-mono text-xl sm:text-2xl font-bold text-neutral-500">
                      {item.num}
                    </span>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <h3 className="text-xl sm:text-2xl font-bold text-white font-sans tracking-tight">
                          {item.title}
                        </h3>
                        <span className="font-mono text-[11px] px-2.5 py-0.5 rounded bg-white/5 border border-white/10 text-brand-emerald font-semibold">
                          {item.tag}
                        </span>
                      </div>
                      <p className="text-neutral-400 text-xs sm:text-sm font-sans mt-1 truncate">
                        {item.preview}
                      </p>
                    </div>
                  </div>

                  <div
                    className={`p-2 rounded-xl border border-slatecard-border bg-obsidian transition-transform duration-200 flex-shrink-0 ${
                      isExpanded ? 'rotate-180 text-brand-emerald' : 'text-neutral-400'
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {/* Expanded Details Body */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-7 sm:px-7 sm:pb-8 pt-2 border-t border-slatecard-border/60">
                        {/* Executive Highlight */}
                        <div className="p-4 rounded-xl bg-obsidian border border-slatecard-border/80 mb-5">
                          <p className="text-sm font-sans text-neutral-200 leading-relaxed font-medium">
                            {item.content.highlight}
                          </p>
                        </div>

                        {/* Bulleted Specifics */}
                        <ul className="space-y-2.5 mb-6">
                          {item.content.items.map((bullet, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-3 text-sm text-neutral-300 font-sans"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald mt-2 flex-shrink-0" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Tag Pills */}
                        <div className="flex flex-wrap gap-2 pt-2">
                          {item.content.tags.map((tag, idx) => (
                            <span
                              key={idx}
                              className="px-2.5 py-1 rounded-md bg-obsidian border border-slatecard-border text-neutral-300 text-xs font-mono"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
