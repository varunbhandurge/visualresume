import React from 'react';
import { Building2 } from 'lucide-react';

export function ClientsWorkedWith() {
  const clients = [
    {
      name: 'ICICI Bank',
      domain: 'Core Banking & Digital Onboarding',
      description: 'Automated KYC verification, customer identity extraction, and LOS document workflows.',
    },
    {
      name: 'HDFC ERGO',
      domain: 'General Insurance',
      description: 'Document AI pipeline parsing health/motor insurance claims, hospital bills, and invoices with 95%+ precision.',
    },
    {
      name: 'ICICI Prudential',
      domain: 'Life Insurance',
      description: 'Requirements elicitation, BRD authoring, and policy issuance workflow mapping.',
    },
    {
      name: 'ABSLI',
      domain: 'Aditya Birla Sun Life Insurance',
      description: 'Operational document workflows, regulatory compliance, and SLA governance.',
    },
    {
      name: 'Reliance ADAG',
      domain: 'Enterprise Infrastructure',
      description: 'Cross-functional engineering coordination, systems integration, and release management.',
    },
  ];

  return (
    <section id="clients" className="w-full max-w-4xl mx-auto px-6 py-12 border-t border-white/[0.08]">
      <div className="mb-8">
        <h2 className="font-heading font-bold text-xl sm:text-2xl text-white tracking-tight">
          Clients I Have Worked With
        </h2>
        <p className="text-sm text-mutedText mt-1">
          Proven delivery experience across India’s leading private banking and insurance enterprises.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {clients.map((c) => (
          <div
            key={c.name}
            className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Building2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <h3 className="font-heading font-semibold text-sm text-white">
                  {c.name}
                </h3>
              </div>
              <span className="text-[10px] font-mono text-mutedText/70 block mb-2">
                {c.domain}
              </span>
              <p className="text-xs text-mutedText leading-relaxed">
                {c.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
