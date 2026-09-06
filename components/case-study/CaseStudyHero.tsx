import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { cn } from '@/lib/cn';
import type { Project } from '@/types';

interface CaseStudyHeroProps {
  project: Project;
}

export function CaseStudyHero({ project }: CaseStudyHeroProps) {
  const domainLabel = project.domain === 'education' ? 'Pendidikan' : 'Industri';

  return (
    <header className="pt-32 pb-16 sm:pb-20 border-b border-[var(--color-border)]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <Link
          href="/#showcase"
          className={cn(
            'inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)]',
            'hover:text-[var(--color-text)] transition-colors duration-[180ms] mb-8 group'
          )}
        >
          <ArrowLeft size={14} strokeWidth={1.8} className="group-hover:-translate-x-0.5 transition-transform" />
          Kembali ke Showcase
        </Link>

        {/* Meta row */}
        <div className="flex items-center gap-3 mb-6 flex-wrap">
          <Badge variant="domain" domain={project.domain} />
          <span className="text-sm text-[var(--color-text-muted)]">{domainLabel}</span>
          <span className="text-[var(--color-border)]" aria-hidden="true">·</span>
          <span className="text-sm text-[var(--color-text-muted)] tabular-nums">{project.year}</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--color-text)] leading-tight max-w-3xl mb-4">
          {project.title}
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-[var(--color-text-muted)] max-w-2xl mb-8 leading-relaxed">
          {project.subtitle}
        </p>

        {/* Stats row */}
        {project.stats && project.stats.length > 0 && (
          <dl
            className="flex flex-wrap gap-x-8 gap-y-4 pt-8 border-t border-[var(--color-border)]"
            aria-label="Project statistics"
          >
            {project.stats.map((stat) => (
              <div key={stat.label} className="space-y-1">
                <dt className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)]">
                  {stat.label}
                </dt>
                <dd className="text-base font-semibold text-[var(--color-text)]">{stat.value}</dd>
              </div>
            ))}
          </dl>
        )}
      </div>

      {/* Hero visual (full-width) */}
      <div
        className="mt-12 mx-4 sm:mx-6 lg:mx-8 aspect-[16/7] rounded-[var(--radius-xl)] overflow-hidden bg-[var(--color-surface-soft)] border border-[var(--color-border)] flex items-center justify-center max-w-[1280px] lg:mx-auto relative p-6 sm:p-12"
        aria-label={`Hero visual for ${project.title}`}
      >
        {project.domain === 'education' ? (
          <svg viewBox="0 0 800 320" fill="none" className="w-full h-full max-w-2xl opacity-90" aria-hidden="true">
            {/* Education Roadmap Blueprint Graphic */}
            <rect x="40" y="40" width="720" height="240" rx="12" className="fill-[var(--color-surface)] stroke-[var(--color-border)]" strokeWidth="2" />
            <path d="M120 160 H340 M340 160 Q 400 160, 440 100 T 540 100 M340 160 Q 400 160, 440 220 T 540 220" stroke="var(--color-primary-strong)" strokeWidth="3" strokeDasharray="6 6" />
            <circle cx="120" cy="160" r="28" className="fill-[var(--color-primary-strong)]" />
            <path d="M110 160 L117 167 L132 152" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="340" cy="160" r="22" className="fill-[var(--color-surface)] stroke-[var(--color-primary-strong)]" strokeWidth="3" />
            <circle cx="340" cy="160" r="8" className="fill-[var(--color-primary-strong)]" />
            <rect x="520" y="74" width="160" height="52" rx="8" className="fill-[var(--color-surface-soft)] stroke-[var(--color-border)]" strokeWidth="2" />
            <rect x="536" y="90" width="80" height="8" rx="4" className="fill-[var(--color-primary-strong)]" />
            <rect x="536" y="104" width="120" height="6" rx="3" className="fill-[var(--color-text-muted)] opacity-50" />
            <rect x="520" y="194" width="160" height="52" rx="8" className="fill-[var(--color-surface-soft)] stroke-[var(--color-border)]" strokeWidth="2" />
            <rect x="536" y="210" width="70" height="8" rx="4" className="fill-[var(--color-accent)]" />
            <rect x="536" y="224" width="100" height="6" rx="3" className="fill-[var(--color-text-muted)] opacity-50" />
          </svg>
        ) : (
          <svg viewBox="0 0 800 320" fill="none" className="w-full h-full max-w-2xl opacity-90" aria-hidden="true">
            {/* Industrial IoT Telemetry Console Graphic */}
            <rect x="40" y="30" width="720" height="260" rx="12" className="fill-[var(--color-surface)] stroke-[var(--color-border)]" strokeWidth="2" />
            <rect x="70" y="55" width="200" height="90" rx="8" className="fill-[var(--color-surface-soft)] stroke-[var(--color-border)]" strokeWidth="1.5" />
            <path d="M85 115 Q 115 80, 145 105 T 205 75 T 255 100" fill="none" stroke="var(--color-primary-strong)" strokeWidth="3" />
            <rect x="300" y="55" width="200" height="90" rx="8" className="fill-[var(--color-surface-soft)] stroke-[var(--color-border)]" strokeWidth="1.5" />
            <rect x="320" y="95" width="160" height="10" rx="5" className="fill-[var(--color-border)]" />
            <rect x="320" y="95" width="120" height="10" rx="5" className="fill-emerald-500" />
            <rect x="530" y="55" width="200" height="90" rx="8" className="fill-[var(--color-surface-soft)] stroke-[var(--color-border)]" strokeWidth="1.5" />
            <rect x="550" y="95" width="160" height="10" rx="5" className="fill-[var(--color-border)]" />
            <rect x="550" y="95" width="140" height="10" rx="5" className="fill-[var(--color-accent)]" />
            <rect x="70" y="165" width="660" height="95" rx="8" className="fill-[var(--color-surface-soft)] stroke-[var(--color-border)]" strokeWidth="1.5" />
            <rect x="95" y="185" width="120" height="10" rx="5" className="fill-[var(--color-text)] opacity-70" />
            <rect x="95" y="205" width="280" height="8" rx="4" className="fill-[var(--color-text-muted)] opacity-50" />
            <rect x="95" y="222" width="220" height="8" rx="4" className="fill-[var(--color-text-muted)] opacity-50" />
          </svg>
        )}
      </div>
    </header>
  );
}
