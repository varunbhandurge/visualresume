'use client';

import React, { useState } from 'react';
import { ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

interface ClientItem {
  id: string;
  name: string;
  fullName: string;
  domain: string;
  scope: string;
  impact: string;
  tech: string[];
}

const clients: ClientItem[] = [
  {
    id: 'icici',
    name: 'ICICI Bank',
    fullName: 'ICICI Bank Limited',
    domain: 'Core Banking & Digital Onboarding',
    scope: 'Automated KYC verification, customer identity extraction, and SLA compliance orchestration.',
    impact: 'Reduced customer document processing turnaround from 48h to < 3 minutes.',
    tech: ['Google Document AI', 'FastAPI', 'ISO 8583', 'Python'],
  },
  {
    id: 'hdfc',
    name: 'HDFC ERGO',
    fullName: 'HDFC ERGO General Insurance',
    domain: 'Claims Automation & Document Verification',
    scope: 'Document AI pipeline parsing health/motor insurance claim forms, hospital bills, and invoices.',
    impact: '95%+ extraction precision with <0.1% false-positive fraud detection.',
    tech: ['Vision OCR', 'FastAPI', 'Custom LLM Parsers', 'GCP'],
  },
  {
    id: 'icici-pru',
    name: 'ICICI Prudential',
    fullName: 'ICICI Prudential Life Insurance',
    domain: 'Policy Underwriting & Customer Journey',
    scope: 'Elicited complex multi-tier stakeholder requirements and structured BRDs for digital policy issuance.',
    impact: '100% on-time milestone delivery across two major Agile release trains.',
    tech: ['Jira Software', 'BRD/PRD Frameworks', 'Scrum Alliance', 'BPMN'],
  },
  {
    id: 'absli',
    name: 'ABSLI',
    fullName: 'Aditya Birla Sun Life Insurance',
    domain: 'Wealth & Protection Solutions',
    scope: 'Commercial negotiations, SLA penalty restructuring, and customer change management governance.',
    impact: 'Secured multi-year managed services contract renewal with 100% SLA adherence.',
    tech: ['Enterprise SLAs', 'GRC Auditing', 'Zoho CRM', 'Postman'],
  },
  {
    id: 'reliance',
    name: 'Reliance ADAG',
    fullName: 'Reliance Anil Dhirubhai Ambani Group',
    domain: 'Enterprise Infrastructure & Systems',
    scope: 'Technical pre-sales, red-teaming security readiness, and cross-functional engineering squad management.',
    impact: 'Zero-regression deployment across critical core infrastructure modules.',
    tech: ['Cyber GRC', 'Sprint Governance', 'Docker', 'RESTful APIs'],
  },
];

export function InteractiveBFSIStrip() {
  const [selectedId, setSelectedId] = useState<string>('icici');
  const selectedClient = clients.find((c) => c.id === selectedId) || clients[0];

  return (
    <section id="pedigree" className="w-full border-y border-white/[0.08] bg-[#0A0D14]/70 backdrop-blur-md py-12">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-cyan-400" />
            <h2 className="font-heading font-bold text-lg text-white">
              Institutional Delivery Footprint
            </h2>
          </div>
          <span className="font-mono text-xs text-mutedText">
            Click institution to inspect verified project scope
          </span>
        </div>

        {/* Client Selector Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 mb-8">
          {clients.map((client) => {
            const isSelected = selectedId === client.id;
            return (
              <button
                key={client.id}
                onClick={() => setSelectedId(client.id)}
                className={`p-3.5 rounded-xl text-left transition-all border ${
                  isSelected
                    ? 'bg-cyan-500/15 border-cyan-400/50 shadow-glow-cyan text-white'
                    : 'bg-white/[0.02] border-white/[0.06] text-mutedText hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                <div className="font-heading font-bold text-sm tracking-tight">
                  {client.name}
                </div>
                <div className="text-[10px] font-mono text-mutedText/70 truncate mt-1">
                  {client.domain.split('&')[0]}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Institution Detail Card */}
        <div className="p-6 rounded-2xl glass-card border border-white/10 animate-in fade-in duration-300">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 mb-4 border-b border-white/[0.08] gap-2">
            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase font-semibold">
                Verified Enterprise Engagement
              </span>
              <h3 className="text-xl font-heading font-bold text-white mt-0.5">
                {selectedClient.fullName}
              </h3>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-white/[0.04] text-white/90 border border-white/10 w-fit">
              {selectedClient.domain}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div>
                <span className="text-xs font-mono text-mutedText uppercase block">Project Scope & Delivery</span>
                <p className="text-sm text-white/90 mt-1 leading-relaxed">
                  {selectedClient.scope}
                </p>
              </div>

              <div>
                <span className="text-xs font-mono text-emerald-400 uppercase font-semibold block">Business Impact</span>
                <p className="text-sm text-emerald-300 font-medium mt-1">
                  {selectedClient.impact}
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-mutedText uppercase block mb-2">Technologies & Frameworks</span>
                <div className="flex flex-wrap gap-2">
                  {selectedClient.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/[0.03] text-cyan-300 border border-white/[0.08]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex items-center gap-2 text-xs font-mono text-mutedText/70">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Audited production delivery milestone</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
