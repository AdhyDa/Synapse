'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { cn } from '@/lib/cn';
import type { Project } from '@/types';

// ── Types ─────────────────────────────────────────────────────────────────────

interface HeroSplitProps {
  educationProject: Project;
  industryProject: Project;
}

type ActiveSide = 'education' | 'industry' | null;

// ── Panel Component ───────────────────────────────────────────────────────────

interface PanelProps {
  project: Project;
  isActive: boolean;
  isCompressed: boolean;
  onHover: () => void;
  onLeave: () => void;
}

function HeroPanel({ project, isActive, isCompressed, onHover, onLeave }: PanelProps) {
  const isEducation = project.domain === 'education';

  return (
    <motion.div
      onHoverStart={onHover}
      onHoverEnd={onLeave}
      animate={{ flex: isCompressed ? 0.35 : isActive ? 0.65 : 0.5 }}
      transition={{ type: 'spring', stiffness: 280, damping: 30 }}
      className={cn(
        'relative min-h-[70vh] flex flex-col justify-end p-8 sm:p-12 overflow-hidden',
        'border-[var(--color-border)] cursor-pointer',
        isEducation ? 'border-r' : ''
      )}
      role="region"
      aria-label={`${project.domain === 'education' ? 'Pendidikan' : 'Industri'} project — ${project.title}`}
    >
      {/* Panel background — distinct but within Synapse palette */}
      <div
        aria-hidden="true"
        className={cn(
          'absolute inset-0 transition-opacity duration-500',
          isEducation
            ? 'bg-[var(--color-surface-soft)]'
            : 'bg-[var(--color-surface)]'
        )}
      />

      {/* Architectural Motifs (Zero Gradient) */}
      <div
        aria-hidden="true"
        className={cn(
          'absolute top-8 right-8 pointer-events-none transition-opacity duration-500',
          isActive ? 'opacity-40' : 'opacity-15'
        )}
      >
        {isEducation ? (
          <svg width="180" height="180" viewBox="0 0 180 180" fill="none">
            <circle cx="90" cy="90" r="80" stroke="var(--color-primary-strong)" strokeWidth="1" strokeDasharray="4 4" />
            <circle cx="90" cy="90" r="55" stroke="var(--color-primary-strong)" strokeWidth="1" />
            <circle cx="90" cy="90" r="30" stroke="var(--color-primary-strong)" strokeWidth="1" strokeDasharray="2 2" />
            <line x1="90" y1="0" x2="90" y2="180" stroke="var(--color-border)" strokeWidth="1" />
            <line x1="0" y1="90" x2="180" y2="90" stroke="var(--color-border)" strokeWidth="1" />
          </svg>
        ) : (
          <svg width="180" height="180" viewBox="0 0 180 180" fill="none">
            <rect x="10" y="10" width="160" height="160" stroke="var(--color-border)" strokeWidth="1" strokeDasharray="6 6" />
            <rect x="35" y="35" width="110" height="110" stroke="var(--color-primary-strong)" strokeWidth="1" />
            <circle cx="90" cy="90" r="4" fill="var(--color-primary-strong)" />
            <line x1="90" y1="20" x2="90" y2="160" stroke="var(--color-border)" strokeWidth="1" />
            <line x1="20" y1="90" x2="160" y2="90" stroke="var(--color-border)" strokeWidth="1" />
            <path d="M15 15 L25 15 M15 15 L15 25 M165 15 L155 15 M165 15 L165 25 M15 165 L25 165 M15 165 L15 155 M165 165 L155 165 M165 165 L165 155" stroke="var(--color-accent)" strokeWidth="1.5" />
          </svg>
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 space-y-4">
        {/* Domain badge */}
        <Badge variant="domain" domain={project.domain} />

        {/* Project title */}
        <motion.h2
          animate={{ scale: isCompressed ? 0.92 : 1 }}
          transition={{ type: 'spring', stiffness: 280, damping: 30 }}
          className={cn(
            'font-bold leading-tight text-[var(--color-text)]',
            'text-3xl sm:text-4xl lg:text-5xl'
          )}
        >
          {project.title}
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          animate={{ opacity: isCompressed ? 0.6 : 1 }}
          transition={{ duration: 0.3 }}
          className="text-[var(--color-text-muted)] text-sm sm:text-base max-w-xs leading-relaxed"
        >
          {project.subtitle}
        </motion.p>

        {/* CTA */}
        <motion.div
          animate={{ opacity: isCompressed ? 0 : 1, y: isCompressed ? 8 : 0 }}
          transition={{ duration: 0.25 }}
        >
          <Link
            href={`/proyek/${project.slug}`}
            className={cn(
              'inline-flex items-center gap-2 mt-2',
              'text-sm font-medium text-[var(--color-text)]',
              'border-b border-[var(--color-border)] pb-0.5',
              'hover:border-[var(--color-text)] transition-colors duration-[180ms]',
              'group'
            )}
          >
            Lihat Proyek
            <motion.span
              animate={{ x: isActive ? 4 : 0 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              <ArrowRight size={14} strokeWidth={1.8} className="group-hover:translate-x-0.5 transition-transform" />
            </motion.span>
          </Link>
        </motion.div>
      </div>

      {/* Corner label */}
      <span
        aria-hidden="true"
        className="absolute top-6 right-6 text-xs font-medium tracking-widest uppercase text-[var(--color-text-muted)] opacity-50"
      >
        {isEducation ? '01' : '02'}
      </span>
    </motion.div>
  );
}

// ── Main Component ─────────────────────────────────────────────────────────────

export function HeroSplit({ educationProject, industryProject }: HeroSplitProps) {
  const [activeSide, setActiveSide] = useState<ActiveSide>(null);

  return (
    <section
      aria-label="Project domains — Education and Industry"
      className="w-full border-t border-[var(--color-border)]"
    >
      {/* ── Desktop: Side-by-side ── */}
      <div className="hidden md:flex w-full" role="list">
        <HeroPanel
          project={educationProject}
          isActive={activeSide === 'education'}
          isCompressed={activeSide === 'industry'}
          onHover={() => setActiveSide('education')}
          onLeave={() => setActiveSide(null)}
        />
        {/* Divider */}
        <div className="w-px bg-[var(--color-border)] flex-shrink-0" aria-hidden="true" />
        <HeroPanel
          project={industryProject}
          isActive={activeSide === 'industry'}
          isCompressed={activeSide === 'education'}
          onHover={() => setActiveSide('industry')}
          onLeave={() => setActiveSide(null)}
        />
      </div>

      {/* ── Mobile: Stacked ── */}
      <div className="flex md:hidden flex-col divide-y divide-[var(--color-border)]">
        <MobileHeroCard project={educationProject} />
        <MobileHeroCard project={industryProject} />
      </div>
    </section>
  );
}

// ── Mobile Card ───────────────────────────────────────────────────────────────

function MobileHeroCard({ project }: { project: Project }) {
  return (
    <div className="p-6 space-y-3 bg-[var(--color-surface)]">
      <Badge variant="domain" domain={project.domain} />
      <h2 className="text-2xl font-bold text-[var(--color-text)]">{project.title}</h2>
      <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{project.subtitle}</p>
      <Link
        href={`/proyek/${project.slug}`}
        className={cn(
          'inline-flex items-center gap-2 text-sm font-medium text-[var(--color-text)]',
          'border-b border-[var(--color-border)] pb-0.5',
          'hover:border-[var(--color-text)] transition-colors duration-[180ms]'
        )}
      >
        Lihat Proyek <ArrowRight size={13} strokeWidth={1.8} />
      </Link>
    </div>
  );
}
