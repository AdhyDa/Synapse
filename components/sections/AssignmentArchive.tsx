'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { cn } from '@/lib/cn';
import type { Assignment, AssignmentCategory } from '@/types';

// ── Filter Tabs ───────────────────────────────────────────────────────────────

const FILTER_TABS: { label: string; value: AssignmentCategory | 'Semua' }[] = [
  { label: 'Semua', value: 'Semua' },
  { label: 'Riset & Wireframe', value: 'Riset' },
  { label: 'UI Design', value: 'UI Design' },
  { label: 'Testing', value: 'Testing' },
  { label: 'Presentasi', value: 'Presentasi' },
];

// ── Date Formatter ────────────────────────────────────────────────────────────

function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return d.toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' });
}

// ── Category → domain mapping for coloring ────────────────────────────────────

function getCategoryBadgeClass(category: AssignmentCategory): string {
  switch (category) {
    case 'Riset':
      return 'bg-[var(--color-primary)] text-[#131A24] dark:bg-[var(--color-surface-soft)] dark:text-[var(--color-primary)] border-[var(--color-primary-strong)]';
    case 'Wireframe':
      return 'bg-[var(--color-surface-soft)] text-[var(--color-text)] border-[var(--color-border)]';
    case 'UI Design':
      return 'bg-[var(--color-highlight)] text-[#131A24] dark:bg-[var(--color-surface-soft)] dark:text-[var(--color-accent)] border-[var(--color-accent)]';
    case 'Testing':
      return 'bg-amber-50 text-amber-800 border-amber-200 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800';
    case 'Presentasi':
      return 'bg-[var(--color-surface-soft)] text-[var(--color-text-muted)] border-[var(--color-border)]';
  }
}

// ── Mobile Row Card ───────────────────────────────────────────────────────────

function MobileAssignmentCard({ assignment }: { assignment: Assignment }) {
  return (
    <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-4 space-y-2">
      <div className="flex items-start justify-between gap-2">
        <span className="text-xs font-mono text-[var(--color-text-muted)]">
          Minggu {String(assignment.week).padStart(2, '0')}
        </span>
        <Badge variant="status" status={assignment.status} />
      </div>
      <p className="font-medium text-[var(--color-text)] text-sm leading-snug">{assignment.title}</p>
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-2 flex-wrap">
          <span
            className={cn(
              'inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium',
              getCategoryBadgeClass(assignment.category)
            )}
          >
            {assignment.category}
          </span>
          <span className="text-xs text-[var(--color-text-muted)]">{assignment.assignee}</span>
        </div>
        <a
          href={assignment.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${assignment.title}`}
          className="text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
        >
          <ExternalLink size={14} strokeWidth={1.8} />
        </a>
      </div>
    </div>
  );
}

// ── Main Component ─────────────────────────────────────────────────────────────

interface AssignmentArchiveProps {
  assignments: Assignment[];
}

export function AssignmentArchive({ assignments }: AssignmentArchiveProps) {
  const [activeFilter, setActiveFilter] = useState<AssignmentCategory | 'Semua'>('Semua');

  const filtered = useMemo(() => {
    if (activeFilter === 'Semua') return assignments;
    // Riset & Wireframe tab matches both categories
    if (activeFilter === 'Riset') {
      return assignments.filter((a) => a.category === 'Riset' || a.category === 'Wireframe');
    }
    return assignments.filter((a) => a.category === activeFilter);
  }, [assignments, activeFilter]);

  return (
    <section
      id="arsip"
      aria-label="Weekly assignment archive"
      className="py-24 sm:py-32 border-t border-[var(--color-border)]"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-[var(--color-text-muted)] mb-2">
            Weekly Archive
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-text)]">
            Arsip Penugasan Mingguan
          </h2>
        </div>

        {/* Filter tabs */}
        <div
          role="tablist"
          aria-label="Filter assignments by category"
          className="flex flex-wrap gap-2 mb-8"
        >
          {FILTER_TABS.map((tab) => {
            const isActive = activeFilter === tab.value;
            return (
              <button
                key={tab.value}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveFilter(tab.value as AssignmentCategory | 'Semua')}
                className={cn(
                  'relative px-3 py-1.5 rounded-[var(--radius-pill)] text-sm font-medium',
                  'border transition-colors duration-[180ms] cursor-pointer',
                  isActive
                    ? 'bg-[var(--color-primary)] border-[var(--color-primary-strong)] text-[var(--color-text)]'
                    : 'bg-transparent border-[var(--color-border)] text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:border-[var(--color-primary)]'
                )}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* ── Desktop Table ── */}
        <div className="hidden md:block">
          <div className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border)]">
            <table className="w-full text-sm" aria-label="Assignment archive table">
              <thead>
                <tr className="border-b border-[var(--color-border)] bg-[var(--color-surface-soft)]">
                  <th scope="col" className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)] w-16">
                    Minggu
                  </th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)]">
                    Judul Tugas
                  </th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)] w-32">
                    Kategori
                  </th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)] w-40">
                    Penanggung Jawab
                  </th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)] w-32">
                    Tanggal
                  </th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)] w-20">
                    Status
                  </th>
                  <th scope="col" className="px-4 py-3 text-center text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)] w-16">
                    Link
                  </th>
                </tr>
              </thead>
              <tbody>
                <AnimatePresence mode="sync">
                  {filtered.map((assignment, i) => (
                    <motion.tr
                      key={assignment.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ delay: i * 0.03, duration: 0.2 }}
                      className={cn(
                        'border-b border-[var(--color-border)] last:border-0',
                        'hover:bg-[var(--color-surface-soft)] transition-colors duration-[120ms]',
                        'bg-[var(--color-surface)]'
                      )}
                    >
                      <td className="px-4 py-3 font-mono text-sm text-[var(--color-text-muted)]">
                        {String(assignment.week).padStart(2, '0')}
                      </td>
                      <td className="px-4 py-3 text-[var(--color-text)] font-medium">
                        {assignment.title}
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={cn(
                            'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium',
                            getCategoryBadgeClass(assignment.category)
                          )}
                        >
                          {assignment.category}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm text-[var(--color-text-muted)]">
                        {assignment.assignee}
                      </td>
                      <td className="px-4 py-3 text-sm text-[var(--color-text-muted)] tabular-nums">
                        {formatDate(assignment.date)}
                      </td>
                      <td className="px-4 py-3">
                        <Badge variant="status" status={assignment.status} />
                      </td>
                      <td className="px-4 py-3 text-center">
                        <a
                          href={assignment.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Open ${assignment.title}`}
                          className={cn(
                            'inline-flex items-center justify-center h-7 w-7 rounded-[var(--radius-md)]',
                            'text-[var(--color-text-muted)] hover:text-[var(--color-text)]',
                            'hover:bg-[var(--color-surface-soft)] transition-colors duration-[120ms]'
                          )}
                        >
                          <ExternalLink size={13} strokeWidth={1.8} />
                        </a>
                      </td>
                    </motion.tr>
                  ))}
                </AnimatePresence>

                {filtered.length === 0 && (
                  <tr>
                    <td colSpan={7} className="px-4 py-12 text-center text-sm text-[var(--color-text-muted)]">
                      Tidak ada tugas dalam kategori ini.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* ── Mobile Cards ── */}
        <div className="md:hidden space-y-3">
          <AnimatePresence mode="sync">
            {filtered.map((assignment, i) => (
              <motion.div
                key={assignment.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: i * 0.04, duration: 0.2 }}
              >
                <MobileAssignmentCard assignment={assignment} />
              </motion.div>
            ))}
          </AnimatePresence>

          {filtered.length === 0 && (
            <p className="py-8 text-center text-sm text-[var(--color-text-muted)]">
              Tidak ada tugas dalam kategori ini.
            </p>
          )}
        </div>

        {/* Count */}
        <p className="mt-6 text-xs text-[var(--color-text-muted)]" aria-live="polite">
          Menampilkan {filtered.length} dari {assignments.length} tugas
        </p>
      </div>
    </section>
  );
}
