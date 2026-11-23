'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Mail, Download, Github, Linkedin, ArrowUp, CheckCircle2 } from 'lucide-react';

export const RecruiterSpecsFooter: React.FC = () => {
  const [openSpecs, setOpenSpecs] = useState<{ [key: string]: boolean }>({
    domain: false,
    governance: false,
  });

  const toggleSpec = (key: string) => {
    setOpenSpecs((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="specs" className="pt-20 pb-16 border-t border-white/[0.08] bg-[#07080A]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Recruiter Expandable Specs Header */}
        <div className="text-center mb-10">
          <div className="text-xs font-mono uppercase tracking-widest text-zinc-500 font-medium mb-2">
            GRANULAR VERIFICATION (COLLAPSED BY DEFAULT)
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-sans tracking-tight">
            The Traditional Recruiter Specs
          </h3>
          <p className="text-sm font-sans text-zinc-400 mt-2 max-w-lg mx-auto">
            Surface kept clean for executive review. Expand below for domain compliance and project governance keywords.
          </p>
        </div>

        {/* 2 Sleek Expandable Rows */}
        <div className="space-y-3 mb-24">
          {/* Row 1: Domain & Compliance Depth */}
          <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] overflow-hidden transition-all duration-200">
            <button
              onClick={() => toggleSpec('domain')}
              className="w-full p-5 sm:p-6 flex items-center justify-between text-left gap-4 hover:bg-white/[0.02] transition-colors"
              aria-expanded={openSpecs.domain}
            >
              <div>
                <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-1">
                  SPEC 01 // DOMAIN MASTERY
                </div>
                <div className="text-lg font-bold text-white font-sans">
                  Domain &amp; Compliance Depth
                </div>
                <div className="text-xs text-zinc-400 font-sans mt-0.5">
                  BFSI Customer Onboarding, Digital KYC, Document AI, OCR, Cybersecurity GRC, Red Teaming.
                </div>
              </div>

              <div
                className={`p-2 rounded-lg border border-white/[0.08] bg-white/[0.04] text-zinc-400 transition-transform duration-200 flex-shrink-0 ${
                  openSpecs.domain ? 'rotate-180 text-white' : ''
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            <AnimatePresence>
              {openSpecs.domain && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden border-t border-white/[0.06] bg-white/[0.01]"
                >
                  <div className="p-6 space-y-4">
                    <p className="text-sm text-zinc-300 font-sans leading-relaxed">
                      Deep domain leadership across high-throughput digital acquisition in Tier-1 private banking. Integrated Google Document AI, Cloud Vision OCR, and straight-through processing (STP) pipelines with &lt;0.1% false positives.
                    </p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {[
                        'BFSI Customer Onboarding',
                        'Digital KYC',
                        'Google Document AI',
                        'Cloud Vision OCR',
                        'GCP Infrastructure',
                        'Cybersecurity GRC',
                        'Red Teaming',
                        'RBI Digital KYC Guidelines',
                        'UIDAI Aadhaar Masking',
                        'ISO 27001 InfoSec',
                      ].map((item) => (
                        <span
                          key={item}
                          className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-zinc-300"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Row 2: Governance & Tooling */}
          <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] overflow-hidden transition-all duration-200">
            <button
              onClick={() => toggleSpec('governance')}
              className="w-full p-5 sm:p-6 flex items-center justify-between text-left gap-4 hover:bg-white/[0.02] transition-colors"
              aria-expanded={openSpecs.governance}
            >
              <div>
                <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-1">
                  SPEC 02 // METHODOLOGY &amp; TOOLING
                </div>
                <div className="text-lg font-bold text-white font-sans">
                  Governance &amp; Tooling
                </div>
                <div className="text-xs text-zinc-400 font-sans mt-0.5">
                  Certified Scrum Master (CSM®), BRD/PRD/FRD Authoring, Jira, Zoho CRM, Sprint Planning, SLAs.
                </div>
              </div>

              <div
                className={`p-2 rounded-lg border border-white/[0.08] bg-white/[0.04] text-zinc-400 transition-transform duration-200 flex-shrink-0 ${
                  openSpecs.governance ? 'rotate-180 text-white' : ''
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            <AnimatePresence>
              {openSpecs.governance && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden border-t border-white/[0.06] bg-white/[0.01]"
                >
                  <div className="p-6 space-y-4">
                    <p className="text-sm text-zinc-300 font-sans leading-relaxed">
                      Rigorous Agile project management backing multi-crore milestone releases. Translating executive ambiguities into Jira backlogs, sequence maps, and acceptance criteria while enforcing strict commercial SLA governance.
                    </p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {[
                        'Certified Scrum Master (CSM®)',
                        'BRD / PRD / FRD Authoring',
                        'Jira Advanced Roadmaps',
                        'Zoho CRM & HubSpot',
                        'Sprint Planning & Backlog Grooming',
                        'Contractual SLA Governance',
                        'BPMN 2.0 Process Modeling',
                        'FastAPI / React AI Prototyping',
                        'UAT Testing Acceptance Sign-Off',
                      ].map((item) => (
                        <span
                          key={item}
                          className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-zinc-300"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Executive Closing Call to Action */}
        <div className="border-t border-white/[0.08] pt-16 flex flex-col items-center text-center">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-sans tracking-tight max-w-2xl leading-tight">
            Looking for someone who can close the enterprise deal, prototype the AI solution, and ship the SDLC?
          </h2>

          <p className="mt-4 text-sm sm:text-base text-zinc-400 font-sans max-w-lg leading-relaxed">
            Let&apos;s discuss your high-stakes BFSI requirements, AI workflows, and delivery roadmaps.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
            <a
              href="mailto:varun.bhandurge@gmail.com"
              className="flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-all duration-200 shadow-md"
            >
              <Mail className="w-4 h-4" />
              <span>Email Me</span>
            </a>

            <a
              href="/resume.pdf"
              download="Varun_Bhandurge_Resume.pdf"
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl border border-white/[0.12] bg-white/[0.03] hover:bg-white/[0.08] text-white font-medium text-sm transition-all duration-200"
            >
              <Download className="w-4 h-4 text-zinc-400" />
              <span>Download PDF Resume</span>
            </a>

            <a
              href="https://github.com/varunbhandurge"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3.5 rounded-xl border border-white/[0.12] bg-white/[0.03] hover:bg-white/[0.08] text-zinc-300 hover:text-white font-medium text-sm transition-all duration-200"
            >
              <Github className="w-4 h-4 text-zinc-400" />
              <span>GitHub</span>
            </a>

            <a
              href="https://linkedin.com/in/varunbhandurge"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3.5 rounded-xl border border-white/[0.12] bg-white/[0.03] hover:bg-white/[0.08] text-zinc-300 hover:text-white font-medium text-sm transition-all duration-200"
            >
              <Linkedin className="w-4 h-4 text-indigo-400" />
              <span>LinkedIn</span>
            </a>
          </div>

          <div className="mt-16 pt-8 border-t border-white/[0.06] w-full flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
            <div>
              © {new Date().getFullYear()} Varun Bhandurge • Linear Executive Dark Theme
            </div>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
