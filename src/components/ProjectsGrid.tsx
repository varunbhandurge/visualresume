'use client';

import React, { useState } from 'react';
import { PROJECTS } from '../data/resumeData';
import { ProjectCategory, ProjectItem } from '../data/types';
import { ProjectModal } from './ProjectModal';
import { Github, ExternalLink, Sparkles, Layers, ArrowRight, Eye } from 'lucide-react';

export const ProjectsGrid: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories: ProjectCategory[] = ['All', 'AI & Agents', 'Full-Stack Apps', 'Automation'];

  const filteredProjects =
    selectedCategory === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-16 md:py-24 border-b border-slatecard-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-400"></span>
              <span className="font-mono text-xs uppercase tracking-widest text-purple-400 font-semibold">
                TECHNICAL FLUENCY & ACTIVE CODE
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-sans tracking-tight mt-1">
              Featured Engineering & AI Projects
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base font-sans mt-2 max-w-2xl leading-relaxed">
              Open-source software, agentic AI frameworks, and production web applications built to solve operational bottlenecks.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-slatecard border border-slatecard-border">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-obsidian border border-slatecard-borderHover text-white shadow-sm'
                    : 'text-neutral-400 hover:text-white hover:bg-white/5 border border-transparent'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 2-Column Responsive Project Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-2xl border border-slatecard-border bg-slatecard/80 hover:bg-slatecard-hover p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:border-slatecard-borderHover shadow-card-subtle"
            >
              <div>
                {/* Category & Badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="font-mono text-[11px] font-semibold text-brand-blue uppercase tracking-wider px-2.5 py-0.5 rounded bg-brand-blue/10 border border-brand-blue/20">
                    {project.category}
                  </span>
                  <span className="font-mono text-[10px] text-neutral-400 px-2 py-0.5 rounded bg-white/5 border border-white/5">
                    {project.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white font-sans tracking-tight group-hover:text-brand-blueLight transition-colors">
                  {project.title}
                </h3>

                {/* Summary */}
                <p className="text-neutral-300 text-sm font-sans mt-2.5 leading-relaxed">
                  {project.summary}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-obsidian border border-slatecard-border text-neutral-300 text-[11px] font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Actions Bar */}
              <div className="mt-6 pt-5 border-t border-slatecard-border/70 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex items-center gap-1.5 text-xs font-mono text-neutral-300 hover:text-white transition-colors py-1 px-2 rounded hover:bg-white/5"
                >
                  <Eye className="w-3.5 h-3.5 text-neutral-400" />
                  <span>Architecture Deep Dive</span>
                  <ArrowRight className="w-3.5 h-3.5 text-neutral-500" />
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg border border-slatecard-border bg-obsidian hover:bg-slatecard text-neutral-300 hover:text-white transition-all"
                    title="View GitHub Repository"
                    aria-label={`GitHub Repository for ${project.title}`}
                  >
                    <Github className="w-4 h-4" />
                  </a>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-brand-blue/15 border border-brand-blue/30 text-brand-blue hover:text-brand-blueLight hover:bg-brand-blue/25 text-xs font-mono font-semibold transition-all"
                    >
                      <span>Live App</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Deep-Dive */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
};
