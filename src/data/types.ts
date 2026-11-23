export type ProjectCategory = 'All' | 'AI & Agents' | 'Full-Stack Apps' | 'Automation';

export interface MetricItem {
  id: string;
  value: string;
  label: string;
  sublabel: string;
  impactNote: string;
  badge: string;
  accent: 'emerald' | 'blue' | 'volt';
}

export interface CapabilityPillar {
  id: string;
  title: string;
  shortTitle: string;
  badge: string;
  iconName: string;
  tagline: string;
  description: string;
  bulletPoints: string[];
  deliverables: string[];
  technologies: string[];
  executiveProof: string;
}

export interface ClientItem {
  id: string;
  name: string;
  category: string;
  statusBadge: string;
  summary: string;
  impactMetrics: string;
}

export interface DomainHighlight {
  id: string;
  title: string;
  badge: string;
  subtitle: string;
  description: string;
  metrics: string[];
  keyCapabilities: string[];
  governanceAndStandards: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  repoName?: string;
  category: 'AI & Agents' | 'Full-Stack Apps' | 'Automation';
  badge: string;
  summary: string;
  description: string;
  architectureDetails: string[];
  tags: string[];
  metricsOrFeatures: string[];
  githubUrl: string;
  liveUrl?: string;
}

export interface LifecycleStage {
  step: number;
  id: string;
  title: string;
  shortTitle: string;
  phaseName: string;
  objective: string;
  deliverables: string[];
  stakeholderTouchpoints: string[];
  governanceAndRisk: string;
  kpiOutcome: string;
}
