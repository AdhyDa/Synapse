// ============================================================
// Synapse — Core TypeScript Interfaces
// ============================================================

export type ProjectDomain = 'education' | 'industry' | 'weekly';

export type AssignmentCategory =
  | 'Riset'
  | 'Wireframe'
  | 'UI Design'
  | 'Testing'
  | 'Presentasi';

// ─── Project ─────────────────────────────────────────────────

export interface ProjectRoleMember {
  memberName: string;
  role: string;
}

export interface ProjectStat {
  label: string;
  value: string;
}

export interface ProcessStep {
  phase: string;
  description: string;
  deliverable?: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  domain: ProjectDomain;
  description: string;
  overview: string;
  coverImage: string;
  heroImage?: string;
  year: string;
  tags: string[];
  roleDistribution: ProjectRoleMember[];
  stats?: ProjectStat[];
  /** Optional – render Research section only when provided */
  research?: string;
  /** Optional – render Wireframe section only when provided */
  wireframe?: string;
  /** Optional – render Final Design section only when provided */
  finalDesign?: string;
  /** Optional – render Process section only when provided */
  processSteps?: ProcessStep[];
  /** Optional – Figma embed src URL */
  figmaEmbedUrl?: string;
  /** Always provide a fallback Figma link */
  figmaUrl?: string;
  liveUrl?: string;
  /** Slug of the next project for navigation */
  nextProject?: string;
}

// ─── Showcase Work Item ───────────────────────────────────────

export interface ShowcaseWork {
  id: string;
  title: string;
  projectSlug: string;
  projectTitle: string;
  category: string;
  domain: ProjectDomain;
  description: string;
  deliverableType: string;
  tags: string[];
  metrics?: string;
  previewType: 'roadmap' | 'dashboard' | 'mobile-screen' | 'alert-panel' | 'design-tokens' | 'research-matrix';
}

// ─── Assignment ───────────────────────────────────────────────

export interface Assignment {
  id: string;
  week: number;
  title: string;
  category: AssignmentCategory;
  assignee: string;
  date: string;
  link: string;
  /** Display status badge */
  status: 'Selesai' | 'Berjalan' | 'Belum Mulai';
}

// ─── Team Member ─────────────────────────────────────────────

export interface SocialLinks {
  github?: string;
  linkedin?: string;
  figma?: string;
  portfolio?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  contributions: string[];
  links: SocialLinks;
}
