'use client';

import React, { useEffect } from 'react';
import { ProjectItem } from '../data/types';
import { X, Github, ExternalLink, Cpu, CheckCircle2, Layers } from 'lucide-react';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-md animate-fade-in">
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border border-slatecard-border bg-obsidian-elevated p-6 sm:p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg border border-slatecard-border bg-slatecard text-neutral-400 hover:text-white transition-colors"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="pr-10">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-brand-blue/10 border border-brand-blue/20 text-brand-blue font-mono text-xs mb-3">
            <span>{project.category}</span>
            <span className="text-neutral-500">•</span>
            <span>{project.badge}</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-sans tracking-tight">
            {project.title}
          </h3>
          <p className="text-neutral-400 text-sm font-sans mt-2 leading-relaxed">
            {project.summary}
          </p>
        </div>

        {/* Detailed Description */}
        <div className="mt-6 pt-6 border-t border-slatecard-border/80">
          <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-300 mb-2">
            System Overview & Functional Architecture
          </h4>
          <p className="text-neutral-300 text-sm leading-relaxed font-sans">
            {project.description}
          </p>
        </div>

        {/* Architecture Highlights */}
        <div className="mt-6 p-4 rounded-xl bg-obsidian border border-slatecard-border/70 space-y-2">
          <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-brand-emerald mb-2 flex items-center gap-2">
            <Cpu className="w-4 h-4" />
            Architectural Highlights
          </h4>
          {project.architectureDetails.map((item, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-300 font-sans">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald mt-1.5 flex-shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* Key Features & Metrics */}
        <div className="mt-6">
          <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-300 mb-2 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-brand-blue" />
            Key Deliverables & Performance Indicators
          </h4>
          <div className="space-y-1.5">
            {project.metricsOrFeatures.map((feat, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-neutral-300 font-sans">
                <span className="w-1 h-1 rounded-full bg-brand-blue flex-shrink-0" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Tags */}
        <div className="mt-6 pt-6 border-t border-slatecard-border/80">
          <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-400 mb-3 flex items-center gap-2">
            <Layers className="w-4 h-4" />
            Technology Stack & Frameworks
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-md bg-slatecard border border-slatecard-border text-neutral-200 text-xs font-mono"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 pt-6 border-t border-slatecard-border/80 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slatecard-border bg-slatecard hover:bg-slatecard-hover text-white text-xs font-medium transition-all"
            >
              <Github className="w-4 h-4" />
              <span>View Source on GitHub</span>
              <ExternalLink className="w-3.5 h-3.5 text-neutral-500" />
            </a>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-brand-blue text-white text-xs font-bold hover:bg-brand-blueLight shadow-blue-glow transition-all"
              >
                <span>Launch Live Application</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl border border-slatecard-border text-neutral-400 hover:text-white text-xs font-medium transition-colors"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
};
