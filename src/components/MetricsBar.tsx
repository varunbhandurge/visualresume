'use client';

import React from 'react';
import { METRICS } from '../data/resumeData';
import { TrendingUp, CheckCircle, Building2, Workflow } from 'lucide-react';

export const MetricsBar: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'revenue':
        return <TrendingUp className="w-5 h-5 text-brand-emerald" />;
      case 'kyc-accuracy':
        return <CheckCircle className="w-5 h-5 text-brand-emerald" />;
      case 'clients-trust':
        return <Building2 className="w-5 h-5 text-brand-blue" />;
      case 'sdlc-ownership':
      default:
        return <Workflow className="w-5 h-5 text-brand-blue" />;
    }
  };

  return (
    <section id="metrics" className="py-12 border-b border-slatecard-border/60 bg-obsidian-surface/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-2 mb-8">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-emerald"></span>
            <span className="font-mono text-xs uppercase tracking-widest text-brand-emerald font-semibold">
              PROVEN EXECUTION & RELIABILITY
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white font-sans tracking-tight">
            Enterprise Impact at Institutional Scale
          </h3>
          <p className="text-neutral-400 text-sm max-w-2xl font-sans">
            Quantified results driven across India’s leading private banking, insurance, and financial institutions.
          </p>
        </div>

        {/* 4-column KPI strip */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {METRICS.map((metric) => {
            const isEmerald = metric.accent === 'emerald';
            return (
              <div
                key={metric.id}
                className="group relative rounded-2xl border border-slatecard-border bg-slatecard/90 hover:bg-slatecard-hover p-6 transition-all duration-300 hover:border-slatecard-borderHover shadow-card-subtle flex flex-col justify-between"
              >
                {/* Top Badge & Icon */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-md border font-semibold ${
                      isEmerald
                        ? 'bg-brand-emerald/10 border-brand-emerald/30 text-brand-emerald'
                        : 'bg-brand-blue/10 border-brand-blue/30 text-brand-blue'
                    }`}
                  >
                    {metric.badge}
                  </span>
                  <div
                    className={`p-2 rounded-lg border ${
                      isEmerald
                        ? 'bg-brand-emerald/10 border-brand-emerald/20'
                        : 'bg-brand-blue/10 border-brand-blue/20'
                    }`}
                  >
                    {getIcon(metric.id)}
                  </div>
                </div>

                {/* Primary Metric Value */}
                <div>
                  <div
                    className={`text-3xl sm:text-4xl font-extrabold font-mono tracking-tight transition-colors ${
                      isEmerald
                        ? 'text-brand-emerald group-hover:text-brand-emeraldLight'
                        : 'text-brand-blue group-hover:text-brand-blueLight'
                    }`}
                  >
                    {metric.value}
                  </div>
                  <div className="text-sm font-bold text-neutral-100 font-sans mt-1">
                    {metric.label}
                  </div>
                  <div className="font-mono text-xs text-neutral-400 mt-0.5">
                    {metric.sublabel}
                  </div>
                </div>

                {/* Impact Summary Note */}
                <div className="mt-4 pt-4 border-t border-slatecard-border/60 text-xs text-neutral-400 leading-relaxed font-sans">
                  {metric.impactNote}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
