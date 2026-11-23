'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, CheckCircle, ShieldCheck } from 'lucide-react';

export const EnterprisePedigreeSection: React.FC = () => {
  const clients = [
    { name: 'ICICI BANK', domain: 'Tier-1 Banking' },
    { name: 'HDFC ERGO', domain: 'General Insurance' },
    { name: 'ICICI PRUDENTIAL', domain: 'Life Insurance' },
    { name: 'ABSLI', domain: 'Financial Services' },
    { name: 'RELIANCE ADAG', domain: 'Conglomerate' },
  ];

  const pillars = [
    {
      metric: '₹10 Cr+',
      accent: 'text-champagne',
      title: 'Revenue Delivered',
      description:
        'Closed and delivered 9 enterprise BFSI projects within 10 months (accounting for 55% of company revenue).',
      icon: <TrendingUp className="w-5 h-5 text-champagne" />,
    },
    {
      metric: '95%+',
      accent: 'text-white',
      title: 'KYC & OCR Precision',
      description:
        'Architected automated customer onboarding and Document AI pipelines with <0.1% false positives and <4% false negatives.',
      icon: <CheckCircle className="w-5 h-5 text-emerald-400" />,
    },
    {
      metric: 'Cybersecurity & Managed Services',
      accent: 'text-indigo-400',
      title: 'Enterprise Risk & Governance',
      description:
        'Consultative pre-sales, SLA negotiation, and delivery across GRC, Red Teaming, and enterprise resource planning.',
      icon: <ShieldCheck className="w-5 h-5 text-indigo-400" />,
    },
  ];

  return (
    <section id="impact" className="py-20 md:py-24 border-b border-white/[0.08] bg-[#07080A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tier-1 BFSI Client Strip */}
        <div className="mb-16">
          <div className="text-center mb-6">
            <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-500 font-medium">
              PROVEN INSTITUTIONAL TRUST &amp; BFSI DELIVERY CLIENTS
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {clients.map((client) => (
              <div
                key={client.name}
                className="rounded-xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/20 p-5 flex flex-col justify-between transition-all duration-200"
              >
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                  {client.domain}
                </span>
                <span className="text-sm sm:text-base font-bold font-sans tracking-tight text-white mt-3">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 3 Impact Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="rounded-2xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/20 p-7 sm:p-8 flex flex-col justify-between transition-all duration-200 shadow-executive-card"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
                    Pillar 0{idx + 1}
                  </span>
                  <div className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.08]">
                    {pillar.icon}
                  </div>
                </div>

                <div className={`font-sans font-extrabold tracking-tight ${pillar.accent} ${idx === 2 ? 'text-2xl sm:text-3xl' : 'text-4xl sm:text-5xl'}`}>
                  {pillar.metric}
                </div>

                <div className="text-sm font-semibold text-zinc-200 font-sans mt-3">
                  {pillar.title}
                </div>

                <p className="mt-2 text-sm text-zinc-400 font-sans leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.06] text-[11px] font-mono text-zinc-500">
                Audited Enterprise Benchmark
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
