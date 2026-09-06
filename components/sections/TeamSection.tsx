'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon, FigmaIcon } from '@/components/ui/Icons';
import { cn } from '@/lib/cn';
import type { TeamMember, SocialLinks } from '@/types';

// ── Social Icon ───────────────────────────────────────────────────────────────

function SocialLink({
  href,
  label,
  icon: Icon,
}: {
  href: string;
  label: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={cn(
        'h-8 w-8 rounded-[var(--radius-md)] inline-flex items-center justify-center',
        'text-[var(--color-text-muted)] hover:text-[var(--color-text)]',
        'border border-[var(--color-border)] hover:border-[var(--color-primary-strong)]',
        'transition-colors duration-[180ms]'
      )}
    >
      <Icon size={14} />
    </a>
  );
}

// ── Team Member Card ──────────────────────────────────────────────────────────

function TeamMemberCard({
  member,
  index,
}: {
  member: TeamMember;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const links: {
    key: keyof SocialLinks;
    label: string;
    Icon: React.ComponentType<{ size?: number; className?: string }>;
  }[] = [
    { key: 'github', label: `${member.name} on GitHub`, Icon: GithubIcon },
    { key: 'linkedin', label: `${member.name} on LinkedIn`, Icon: LinkedinIcon },
    { key: 'figma', label: `${member.name} on Figma`, Icon: FigmaIcon },
    { key: 'portfolio', label: `${member.name}'s portfolio`, Icon: ExternalLink },
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.08, duration: 0.5, ease: 'easeOut' }}
      className="group"
    >
      {/* Avatar */}
      <div
        className={cn(
          'relative w-full aspect-square mb-5 rounded-[var(--radius-xl)] overflow-hidden',
          'bg-[var(--color-surface-soft)] border border-[var(--color-border)]',
          'transition-transform duration-300 group-hover:scale-[1.01]'
        )}
        aria-hidden="true"
      >
        {/* Stylized Avatar Card */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
          <svg viewBox="0 0 120 120" fill="none" className="w-20 h-20 mb-2 opacity-80" aria-hidden="true">
            <circle cx="60" cy="60" r="54" className="stroke-[var(--color-border)]" strokeWidth="1.5" strokeDasharray="3 3" />
            <circle cx="60" cy="60" r="44" className="fill-[var(--color-surface)] stroke-[var(--color-primary-strong)]" strokeWidth="1.5" />
            <circle cx="60" cy="50" r="14" className="fill-[var(--color-primary-strong)] opacity-80" />
            <path d="M38 84 C38 72, 48 68, 60 68 C72 68, 82 72, 82 84" className="fill-[var(--color-primary-strong)] opacity-80" />
          </svg>
          <span className="text-xs font-mono font-bold tracking-widest text-[var(--color-text-muted)] uppercase">
            {member.name.split(' ').map((n) => n[0]).slice(0, 2).join('')}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="space-y-1 mb-3">
        <h3 className="font-semibold text-[var(--color-text)]">{member.name}</h3>
        <p className="text-sm text-[var(--color-text-muted)]">{member.role}</p>
      </div>

      {/* Contributions */}
      <ul className="space-y-1 mb-4" aria-label={`${member.name}'s contributions`}>
        {member.contributions.map((c, i) => (
          <li key={i} className="text-xs text-[var(--color-text-muted)] flex gap-2">
            <span className="text-[var(--color-primary-strong)] flex-shrink-0 mt-0.5" aria-hidden="true">·</span>
            {c}
          </li>
        ))}
      </ul>

      {/* Social links */}
      <div className="flex gap-1.5">
        {links.map(({ key, label, Icon }) =>
          member.links[key] ? (
            <SocialLink
              key={key}
              href={member.links[key]!}
              label={label}
              icon={Icon}
            />
          ) : null
        )}
      </div>
    </motion.div>
  );
}

// ── Main Component ─────────────────────────────────────────────────────────────

interface TeamSectionProps {
  members: TeamMember[];
}

export function TeamSection({ members }: TeamSectionProps) {
  return (
    <section
      id="tim"
      aria-label="Team members"
      className="py-24 sm:py-32 border-t border-[var(--color-border)]"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-[var(--color-text-muted)] mb-2">
            The Team
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-text)]">
            Anggota Kelompok
          </h2>
        </div>

        {/* Grid */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10"
          role="list"
          aria-label="Team member list"
        >
          {members.map((member, i) => (
            <div key={member.id} role="listitem">
              <TeamMemberCard member={member} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
