import * as React from 'react';
import { cn } from '@/lib/cn';
import type { ProjectDomain } from '@/types';

// ── Types ─────────────────────────────────────────────────────────────────────

type BadgeVariant = 'domain' | 'category' | 'status' | 'default';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  domain?: ProjectDomain;
  /** Status-specific coloring */
  status?: 'Selesai' | 'Berjalan' | 'Belum Mulai';
}

// ── Domain Colors ─────────────────────────────────────────────────────────────

const domainStyles: Record<ProjectDomain, string> = {
  education:
    'bg-[var(--color-primary)] text-[#131A24] dark:bg-[var(--color-surface-soft)] dark:text-[var(--color-primary)] border-[var(--color-primary-strong)]',
  industry:
    'bg-[var(--color-surface-soft)] text-[var(--color-text)] border-[var(--color-accent)]',
  weekly:
    'bg-[var(--color-highlight)] text-[#131A24] dark:bg-[var(--color-surface-soft)] dark:text-[var(--color-accent)] border-[var(--color-accent)]',
};

const domainLabels: Record<ProjectDomain, string> = {
  education: 'Pendidikan',
  industry: 'Industri',
  weekly: 'Mingguan',
};

const statusStyles: Record<string, string> = {
  Selesai: 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800',
  Berjalan: 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-800',
  'Belum Mulai': 'bg-[var(--color-surface-soft)] text-[var(--color-text-muted)] border-[var(--color-border)]',
};

// ── Component ─────────────────────────────────────────────────────────────────

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant = 'default', domain, status, className, children, ...props }, ref) => {
    let variantClass = '';

    if (variant === 'domain' && domain) {
      variantClass = domainStyles[domain];
      children = children ?? domainLabels[domain];
    } else if (variant === 'status' && status) {
      variantClass = statusStyles[status];
      children = children ?? status;
    } else {
      variantClass =
        'bg-[var(--color-surface-soft)] text-[var(--color-text-muted)] border-[var(--color-border)]';
    }

    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center rounded-[var(--radius-pill)] border',
          'px-2.5 py-0.5 text-xs font-medium leading-none',
          'transition-colors duration-[120ms]',
          variantClass,
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';
