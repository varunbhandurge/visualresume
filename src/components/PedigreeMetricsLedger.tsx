import React from 'react';

export function PedigreeMetricsLedger() {
  return (
    <section id="impact" className="w-full border-y border-white/[0.08] bg-[#0A0A0B]">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Tier-1 BFSI Client Strip: Refined horizontal band without pill badges */}
        <div className="py-7 border-b border-white/[0.08] flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs">
          <div className="font-mono text-xs uppercase tracking-widest text-mutedZinc/70 shrink-0 font-medium">
            Trusted Across Tier-1 BFSI
          </div>
          
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-alabaster/90">
            <span className="font-heading font-medium text-white">ICICI Bank</span>
            <span className="text-white/20 select-none">·</span>
            <span className="font-heading font-medium text-white">HDFC ERGO</span>
            <span className="text-white/20 select-none">·</span>
            <span className="font-heading font-medium text-white">ICICI Prudential</span>
            <span className="text-white/20 select-none">·</span>
            <span className="font-heading font-medium text-white">ABSLI</span>
            <span className="text-white/20 select-none">·</span>
            <span className="font-heading font-medium text-white">Reliance ADAG</span>
          </div>
        </div>

        {/* 3-Column Open Metric Strip: Separated by vertical hairlines, no heavy card boxes */}
        <div className="py-14 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
          
          {/* Metric 1 */}
          <div className="md:pr-8 md:border-r border-white/[0.08] flex flex-col justify-between">
            <div>
              <div className="font-mono text-3xl sm:text-4xl font-semibold text-champagne tracking-tight">
                ₹10 Cr+
              </div>
              <h3 className="text-sm font-heading font-medium text-alabaster mt-2">
                Enterprise Revenue Driven
              </h3>
            </div>
            <p className="text-xs sm:text-[13px] text-mutedZinc leading-relaxed mt-2.5">
              Delivered 9 BFSI projects within 10 months, accounting for 55% of company revenue.
            </p>
          </div>

          {/* Metric 2 */}
          <div className="md:px-8 md:border-r border-white/[0.08] flex flex-col justify-between">
            <div>
              <div className="font-mono text-3xl sm:text-4xl font-semibold text-champagne tracking-tight">
                95%+
              </div>
              <h3 className="text-sm font-heading font-medium text-alabaster mt-2">
                KYC & OCR Automation Precision
              </h3>
            </div>
            <p className="text-xs sm:text-[13px] text-mutedZinc leading-relaxed mt-2.5">
              Rolled out Document AI onboarding pipelines with &lt;0.1% false positives and &lt;4% false negatives.
            </p>
          </div>

          {/* Metric 3 */}
          <div className="md:pl-8 flex flex-col justify-between">
            <div>
              <div className="font-mono text-3xl sm:text-4xl font-semibold text-champagne tracking-tight">
                100%
              </div>
              <h3 className="text-sm font-heading font-medium text-alabaster mt-2">
                Deal-to-Renewal Ownership
              </h3>
            </div>
            <p className="text-xs sm:text-[13px] text-mutedZinc leading-relaxed mt-2.5">
              Full accountability from pre-sales SLA negotiation and Agile sprints to managed services and renewals.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
