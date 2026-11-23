'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, ArrowUpRight } from 'lucide-react';

export const EnterprisePedigreeImpact: React.FC = () => {
  const clients = [
    { name: 'ICICI BANK', badge: 'Tier-1 Banking' },
    { name: 'HDFC ERGO', badge: 'General Insurance' },
    { name: 'ICICI PRUDENTIAL', badge: 'Life Insurance' },
    { name: 'ABSLI', badge: 'Financial Services' },
    { name: 'RELIANCE ADAG', badge: 'Conglomerate' },
  ];

  const impactMetrics = [
    {
      num: '01',
      metric: '₹10 Cr+',
      title: 'Revenue Driven',
      description: 'Delivered 9 enterprise projects within a 10-month window.',
      tag: 'FINANCIAL IMPACT',
      accent: 'text-terminal',
    },
    {
      num: '02',
      metric: '95%+',
      title: 'KYC Automation Accuracy',
      description: 'Rolled out OCR pipelines with <0.1% false positives and <4% false negatives.',
      tag: 'ALGORITHMIC PRECISION',
      accent: 'text-white',
    },
    {
      num: '03',
      metric: 'End-to-End SDLC',
      title: 'Full Lifecycle Ownership',
      description: 'Complete ownership from pre-sales & cybersecurity SLA negotiations to production launch and renewals.',
      tag: 'EXECUTIVE GOVERNANCE',
      accent: 'text-electric',
    },
  ];

  return (
    <section id="pedigree" className="border-b border-surface-border bg-black py-20 md:py-28 relative overflow-hidden">
      {/* Background terminal grid glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none opacity-20">
        <div className="w-full h-full bg-[radial-gradient(#1f1f1f_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-6 border-b border-surface-border">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-terminal flex items-center gap-2 mb-2">
              <span className="w-2 h-2 bg-terminal animate-pulse"></span>
              <span>ENTERPRISE PEDIGREE &amp; DELIVERY IMPACT</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-sans tracking-tight">
              Institutional Trust. Proven at Scale.
            </h2>
          </div>
          <p className="font-mono text-xs text-neutral-400 max-w-sm">
            Proven execution across India&apos;s most strictly regulated banking and financial conglomerates.
          </p>
        </div>

        {/* The Trust Grid: Edge-to-Edge BFSI Brand Marquee/Grid */}
        <div className="mb-14">
          <div className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest mb-3">
            // TIER-1 BFSI CLIENT ROSTER
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {clients.map((client) => (
              <div
                key={client.name}
                className="group border border-surface-border bg-surface p-5 sm:p-6 flex flex-col justify-between hover:border-terminal/60 hover:bg-neutral-950 transition-all duration-200"
              >
                <div className="font-mono text-[9px] text-neutral-600 uppercase tracking-widest group-hover:text-terminal transition-colors">
                  {client.badge}
                </div>
                <div className="text-lg sm:text-xl font-mono font-black text-white tracking-tight mt-3 group-hover:text-terminal transition-colors">
                  {client.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* The Delivery Impact: 3 Massive Metric Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {impactMetrics.map((item, idx) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
              className="border border-surface-border bg-surface p-8 sm:p-10 flex flex-col justify-between hover:border-surface-borderHover transition-all relative group"
            >
              <div>
                {/* Metric Index Tag */}
                <div className="flex items-center justify-between font-mono text-[11px] mb-6">
                  <span className="text-neutral-500">{item.tag}</span>
                  <span className="font-mono text-neutral-600 font-bold">{item.num}</span>
                </div>

                {/* Massive Metric Display */}
                <div
                  className={`text-4xl sm:text-5xl md:text-6xl font-mono font-black tracking-tighter ${item.accent} transition-transform group-hover:translate-x-1`}
                >
                  {item.metric}
                </div>

                <div className="text-lg font-bold text-white font-sans mt-3">
                  {item.title}
                </div>

                {/* Description strictly formatted */}
                <p className="mt-2 text-sm font-sans text-neutral-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom Authority Proof Indicator */}
              <div className="mt-8 pt-4 border-t border-surface-border font-mono text-[11px] text-neutral-500 flex items-center justify-between">
                <span>VERIFIED RECORD</span>
                <span className="text-terminal">100% AUDITABLE →</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
