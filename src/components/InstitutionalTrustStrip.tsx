import React from 'react';
import { ShieldCheck } from 'lucide-react';

export function InstitutionalTrustStrip() {
  const clients = [
    { name: 'ICICI BANK', domain: 'Core Banking & KYC' },
    { name: 'HDFC ERGO', domain: 'General Insurance' },
    { name: 'ICICI PRUDENTIAL', domain: 'Life Insurance Onboarding' },
    { name: 'ABSLI', domain: 'Wealth & Protection' },
    { name: 'RELIANCE ADAG', domain: 'Enterprise Infrastructure' },
  ];

  return (
    <section id="pedigree" className="w-full border-y border-white/[0.08] bg-[#0C0E12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          
          {/* Label */}
          <div className="flex items-center gap-2 shrink-0">
            <ShieldCheck className="w-4 h-4 text-goldWarm" />
            <span className="font-mono text-xs uppercase tracking-widest text-slateMuted font-medium">
              Enterprise Footprint &bull; Tier-1 BFSI
            </span>
          </div>

          {/* Institutional Ledger / Client List */}
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            {clients.map((client, idx) => (
              <div key={client.name} className="flex items-center gap-2 group">
                <span className="font-mono text-xs sm:text-sm font-bold tracking-wider text-alabaster/90 group-hover:text-white transition-colors">
                  {client.name}
                </span>
                <span className="hidden sm:inline-block text-[10px] font-mono text-slateMuted/60 border border-white/[0.06] rounded px-1.5 py-0.2">
                  {client.domain}
                </span>
                {idx < clients.length - 1 && (
                  <span className="hidden lg:inline-block text-slateMuted/30 ml-4 font-mono select-none">
                    /
                  </span>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
