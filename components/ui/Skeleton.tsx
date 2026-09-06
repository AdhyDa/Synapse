import * as React from 'react';
import { cn } from '@/lib/cn';

// ── Types ─────────────────────────────────────────────────────────────────────

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Width class, e.g. "w-32" or "w-full" */
  width?: string;
  /** Height class, e.g. "h-4" or "h-32" */
  height?: string;
  rounded?: 'sm' | 'md' | 'lg' | 'full';
}

const roundedMap = {
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-full',
};

// ── Component ─────────────────────────────────────────────────────────────────

export function Skeleton({
  width = 'w-full',
  height = 'h-4',
  rounded = 'md',
  className,
  ...props
}: SkeletonProps) {
  return (
    <div
      role="status"
      aria-label="Loading"
      className={cn(
        'animate-pulse bg-[var(--color-border)] opacity-60',
        width,
        height,
        roundedMap[rounded],
        className
      )}
      {...props}
    />
  );
}

// ── Composite Skeletons ───────────────────────────────────────────────────────

/** Skeleton preset for a project card */
export function ProjectCardSkeleton() {
  return (
    <div className="space-y-3" aria-busy="true" aria-label="Loading project card">
      <Skeleton height="h-64" rounded="lg" />
      <Skeleton width="w-1/3" height="h-3" rounded="full" />
      <Skeleton width="w-3/4" height="h-5" />
      <Skeleton height="h-3" />
      <Skeleton width="w-2/3" height="h-3" />
    </div>
  );
}

/** Skeleton preset for a team member card */
export function TeamMemberSkeleton() {
  return (
    <div className="flex flex-col items-center gap-3" aria-busy="true">
      <Skeleton width="w-24" height="h-24" rounded="full" />
      <Skeleton width="w-32" height="h-4" />
      <Skeleton width="w-24" height="h-3" />
    </div>
  );
}
