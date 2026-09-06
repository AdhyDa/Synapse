'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Sparkles,
  Layers,
  ExternalLink,
} from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { showcaseWorks } from '@/data/projects';
import { cn } from '@/lib/cn';
import type { ShowcaseWork } from '@/types';

// ── SVG Mockup Illustrations (Zero Emoticons) ─────────────────────────────────

function WorkIllustration({ type }: { type: ShowcaseWork['previewType'] }) {
  switch (type) {
    case 'roadmap':
      return (
        <svg viewBox="0 0 400 240" fill="none" className="w-full h-full p-4" aria-hidden="true">
          <rect width="400" height="240" rx="8" className="fill-[var(--color-surface-soft)]" />
          {/* Connecting Branch Lines */}
          <path d="M60 120 H160 M160 120 V70 H260 M160 120 V170 H260 M260 70 H340 M260 170 H340" stroke="var(--color-border)" strokeWidth="2" strokeDasharray="4 4" />
          {/* Node 1 */}
          <circle cx="60" cy="120" r="18" className="fill-[var(--color-primary-strong)]" />
          <path d="M54 120 L58 124 L66 116" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          {/* Node 2 */}
          <circle cx="160" cy="120" r="16" className="fill-[var(--color-surface)] stroke-[var(--color-primary-strong)]" strokeWidth="2" />
          <circle cx="160" cy="120" r="6" className="fill-[var(--color-primary-strong)]" />
          {/* Branch Top Node */}
          <rect x="230" y="52" width="60" height="36" rx="6" className="fill-[var(--color-surface)] stroke-[var(--color-border)]" strokeWidth="1.5" />
          <rect x="240" y="64" width="40" height="4" rx="2" className="fill-[var(--color-primary)]" />
          <rect x="240" y="72" width="24" height="4" rx="2" className="fill-[var(--color-text-muted)] opacity-40" />
          {/* Branch Bottom Node */}
          <rect x="230" y="152" width="60" height="36" rx="6" className="fill-[var(--color-surface)] stroke-[var(--color-border)]" strokeWidth="1.5" />
          <rect x="240" y="164" width="40" height="4" rx="2" className="fill-[var(--color-accent)]" />
          <rect x="240" y="172" width="24" height="4" rx="2" className="fill-[var(--color-text-muted)] opacity-40" />
          {/* Target Endpoints */}
          <circle cx="340" cy="70" r="12" className="fill-[var(--color-surface)] stroke-[var(--color-border)]" strokeWidth="2" />
          <circle cx="340" cy="170" r="12" className="fill-[var(--color-surface)] stroke-[var(--color-border)]" strokeWidth="2" />
        </svg>
      );

    case 'dashboard':
      return (
        <svg viewBox="0 0 400 240" fill="none" className="w-full h-full p-4" aria-hidden="true">
          <rect width="400" height="240" rx="8" className="fill-[var(--color-surface-soft)]" />
          {/* Telemetry Header */}
          <rect x="24" y="24" width="352" height="28" rx="4" className="fill-[var(--color-surface)] stroke-[var(--color-border)]" strokeWidth="1" />
          <circle cx="40" cy="38" r="4" className="fill-emerald-500" />
          <rect x="52" y="35" width="64" height="6" rx="3" className="fill-[var(--color-text)] opacity-80" />
          <rect x="300" y="34" width="60" height="8" rx="4" className="fill-[var(--color-primary)] opacity-40" />
          {/* Sparkline Graph Card */}
          <rect x="24" y="64" width="220" height="152" rx="6" className="fill-[var(--color-surface)] stroke-[var(--color-border)]" strokeWidth="1" />
          <path d="M40 160 Q 70 120, 100 140 T 160 100 T 220 130" fill="none" stroke="var(--color-primary-strong)" strokeWidth="2.5" />
          <circle cx="220" cy="130" r="4" className="fill-[var(--color-primary-strong)]" />
          <rect x="40" y="78" width="80" height="6" rx="3" className="fill-[var(--color-text)] opacity-70" />
          {/* Bar Gauges */}
          <rect x="256" y="64" width="120" height="70" rx="6" className="fill-[var(--color-surface)] stroke-[var(--color-border)]" strokeWidth="1" />
          <rect x="270" y="90" width="92" height="6" rx="3" className="fill-[var(--color-border)]" />
          <rect x="270" y="90" width="68" height="6" rx="3" className="fill-[var(--color-accent)]" />
          <rect x="256" y="146" width="120" height="70" rx="6" className="fill-[var(--color-surface)] stroke-[var(--color-border)]" strokeWidth="1" />
          <rect x="270" y="172" width="92" height="6" rx="3" className="fill-[var(--color-border)]" />
          <rect x="270" y="172" width="82" height="6" rx="3" className="fill-emerald-500" />
        </svg>
      );

    case 'mobile-screen':
      return (
        <svg viewBox="0 0 400 240" fill="none" className="w-full h-full p-4" aria-hidden="true">
          <rect width="400" height="240" rx="8" className="fill-[var(--color-surface-soft)]" />
          {/* Centered Mobile Wireframe Phone */}
          <rect x="135" y="12" width="130" height="216" rx="16" className="fill-[var(--color-surface)] stroke-[var(--color-border)]" strokeWidth="2" />
          {/* Speaker Bar */}
          <rect x="180" y="20" width="40" height="3" rx="1.5" className="fill-[var(--color-border)]" />
          {/* Avatar & Header */}
          <circle cx="160" cy="44" r="10" className="fill-[var(--color-primary)]" />
          <rect x="178" y="41" width="56" height="6" rx="3" className="fill-[var(--color-text)] opacity-70" />
          {/* Milestone Cards */}
          <rect x="147" y="66" width="106" height="38" rx="6" className="fill-[var(--color-surface-soft)] stroke-[var(--color-border)]" strokeWidth="1" />
          <rect x="157" y="76" width="60" height="5" rx="2.5" className="fill-[var(--color-primary-strong)]" />
          <rect x="157" y="86" width="76" height="4" rx="2" className="fill-[var(--color-text-muted)] opacity-50" />
          <rect x="147" y="112" width="106" height="38" rx="6" className="fill-[var(--color-surface-soft)] stroke-[var(--color-border)]" strokeWidth="1" />
          <rect x="157" y="122" width="50" height="5" rx="2.5" className="fill-[var(--color-accent)]" />
          <rect x="157" y="132" width="70" height="4" rx="2" className="fill-[var(--color-text-muted)] opacity-50" />
          {/* Bottom Nav */}
          <rect x="145" y="196" width="110" height="20" rx="4" className="fill-[var(--color-surface-soft)]" />
          <circle cx="165" cy="206" r="3" className="fill-[var(--color-primary-strong)]" />
          <circle cx="200" cy="206" r="3" className="fill-[var(--color-border)]" />
          <circle cx="235" cy="206" r="3" className="fill-[var(--color-border)]" />
        </svg>
      );

    case 'alert-panel':
      return (
        <svg viewBox="0 0 400 240" fill="none" className="w-full h-full p-4" aria-hidden="true">
          <rect width="400" height="240" rx="8" className="fill-[var(--color-surface-soft)]" />
          {/* Incident Stream Panel */}
          <rect x="24" y="24" width="352" height="52" rx="6" className="fill-red-950/20 stroke-red-500/40" strokeWidth="1.5" />
          <circle cx="48" cy="50" r="10" className="fill-red-500/20 stroke-red-500" strokeWidth="1.5" />
          <path d="M48 44 V52 M48 56 V57" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" />
          <rect x="70" y="44" width="120" height="6" rx="3" className="fill-red-600 dark:fill-red-400" />
          <rect x="70" y="54" width="180" height="4" rx="2" className="fill-[var(--color-text-muted)] opacity-60" />
          {/* Warning Item 2 */}
          <rect x="24" y="88" width="352" height="52" rx="6" className="fill-amber-950/20 stroke-amber-500/40" strokeWidth="1.5" />
          <circle cx="48" cy="114" r="10" className="fill-amber-500/20 stroke-amber-500" strokeWidth="1.5" />
          <path d="M48 108 V116 M48 120 V121" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
          <rect x="70" y="108" width="100" height="6" rx="3" className="fill-amber-600 dark:fill-amber-400" />
          <rect x="70" y="118" width="160" height="4" rx="2" className="fill-[var(--color-text-muted)] opacity-60" />
          {/* Normal Item 3 */}
          <rect x="24" y="152" width="352" height="52" rx="6" className="fill-emerald-950/20 stroke-emerald-500/40" strokeWidth="1.5" />
          <circle cx="48" cy="178" r="10" className="fill-emerald-500/20 stroke-emerald-500" strokeWidth="1.5" />
          <path d="M44 178 L47 181 L53 175" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="70" y="172" width="80" height="6" rx="3" className="fill-emerald-600 dark:fill-emerald-400" />
          <rect x="70" y="182" width="140" height="4" rx="2" className="fill-[var(--color-text-muted)] opacity-60" />
        </svg>
      );

    case 'design-tokens':
      return (
        <svg viewBox="0 0 400 240" fill="none" className="w-full h-full p-4" aria-hidden="true">
          <rect width="400" height="240" rx="8" className="fill-[var(--color-surface-soft)]" />
          {/* Color Palette Matrix */}
          <circle cx="60" cy="60" r="22" className="fill-[var(--color-primary)] stroke-[var(--color-border)]" strokeWidth="2" />
          <circle cx="120" cy="60" r="22" className="fill-[var(--color-primary-strong)] stroke-[var(--color-border)]" strokeWidth="2" />
          <circle cx="180" cy="60" r="22" className="fill-[var(--color-accent)] stroke-[var(--color-border)]" strokeWidth="2" />
          <circle cx="240" cy="60" r="22" className="fill-[var(--color-highlight)] stroke-[var(--color-border)]" strokeWidth="2" />
          <circle cx="300" cy="60" r="22" className="fill-[var(--color-surface)] stroke-[var(--color-border)]" strokeWidth="2" />
          <circle cx="360" cy="60" r="22" className="fill-[var(--color-text)] stroke-[var(--color-border)]" strokeWidth="2" />
          {/* Typography Scale Preview Bars */}
          <rect x="40" y="110" width="160" height="14" rx="3" className="fill-[var(--color-text)]" />
          <rect x="40" y="134" width="220" height="8" rx="2" className="fill-[var(--color-text-muted)]" />
          <rect x="40" y="150" width="180" height="8" rx="2" className="fill-[var(--color-text-muted)] opacity-60" />
          {/* Token Badges */}
          <rect x="40" y="176" width="70" height="22" rx="11" className="fill-[var(--color-primary)] stroke-[var(--color-primary-strong)]" strokeWidth="1" />
          <rect x="120" y="176" width="70" height="22" rx="11" className="fill-[var(--color-accent)] stroke-[var(--color-border)]" strokeWidth="1" />
          <rect x="200" y="176" width="70" height="22" rx="11" className="fill-[var(--color-surface)] stroke-[var(--color-border)]" strokeWidth="1" />
        </svg>
      );

    case 'research-matrix':
      return (
        <svg viewBox="0 0 400 240" fill="none" className="w-full h-full p-4" aria-hidden="true">
          <rect width="400" height="240" rx="8" className="fill-[var(--color-surface-soft)]" />
          {/* Affinity Notes Clusters */}
          <rect x="36" y="36" width="90" height="74" rx="6" className="fill-[var(--color-highlight)] stroke-[var(--color-accent)]" strokeWidth="1.5" />
          <rect x="48" y="50" width="66" height="5" rx="2.5" className="fill-[var(--color-text)] opacity-80" />
          <rect x="48" y="62" width="50" height="4" rx="2" className="fill-[var(--color-text-muted)] opacity-60" />
          <rect x="48" y="72" width="58" height="4" rx="2" className="fill-[var(--color-text-muted)] opacity-60" />
          {/* Note 2 */}
          <rect x="150" y="36" width="90" height="74" rx="6" className="fill-[var(--color-primary)] stroke-[var(--color-primary-strong)]" strokeWidth="1.5" />
          <rect x="162" y="50" width="66" height="5" rx="2.5" className="fill-[var(--color-text)] opacity-80" />
          <rect x="162" y="62" width="54" height="4" rx="2" className="fill-[var(--color-text-muted)] opacity-60" />
          <rect x="162" y="72" width="46" height="4" rx="2" className="fill-[var(--color-text-muted)] opacity-60" />
          {/* Note 3 */}
          <rect x="264" y="36" width="90" height="74" rx="6" className="fill-[var(--color-surface)] stroke-[var(--color-border)]" strokeWidth="1.5" />
          <rect x="276" y="50" width="66" height="5" rx="2.5" className="fill-[var(--color-text)] opacity-80" />
          <rect x="276" y="62" width="50" height="4" rx="2" className="fill-[var(--color-text-muted)] opacity-60" />
          {/* Research Bar Graph at Bottom */}
          <rect x="36" y="130" width="318" height="74" rx="6" className="fill-[var(--color-surface)] stroke-[var(--color-border)]" strokeWidth="1" />
          <rect x="56" y="174" width="40" height="18" rx="2" className="fill-[var(--color-primary)]" />
          <rect x="116" y="152" width="40" height="40" rx="2" className="fill-[var(--color-primary-strong)]" />
          <rect x="176" y="142" width="40" height="50" rx="2" className="fill-[var(--color-accent)]" />
          <rect x="236" y="160" width="40" height="32" rx="2" className="fill-[var(--color-border)]" />
          <rect x="296" y="148" width="40" height="44" rx="2" className="fill-emerald-500" />
        </svg>
      );
  }
}

// ── Showcase Work Card ────────────────────────────────────────────────────────

function WorkCard({ work, index }: { work: ShowcaseWork; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.45 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={cn(
        'flex-shrink-0 w-[320px] sm:w-[380px] md:w-[420px] lg:w-[460px]',
        'rounded-[var(--radius-xl)] border border-[var(--color-border)]',
        'bg-[var(--color-surface)] overflow-hidden flex flex-col',
        'transition-all duration-300',
        isHovered ? 'shadow-xl border-[var(--color-primary-strong)] scale-[1.01]' : 'shadow-sm'
      )}
      aria-label={`Hasil karya: ${work.title}`}
    >
      {/* Visual SVG Mockup Container */}
      <div className="relative aspect-[16/10] bg-[var(--color-surface-soft)] border-b border-[var(--color-border)] overflow-hidden">
        <WorkIllustration type={work.previewType} />

        {/* Top Badges */}
        <div className="absolute top-3 inset-x-3 flex items-center justify-between pointer-events-none">
          <Badge variant="domain" domain={work.domain} />
          <span className="text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-[var(--color-surface)]/90 backdrop-blur-sm border border-[var(--color-border)] text-[var(--color-text)]">
            {work.projectTitle}
          </span>
        </div>

        {/* Deliverable Type Tag */}
        {work.metrics && (
          <div className="absolute bottom-3 left-3">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-[var(--radius-md)] bg-[var(--color-surface)]/95 border border-[var(--color-border)] text-[var(--color-text)] shadow-sm">
              {work.metrics}
            </span>
          </div>
        )}
      </div>

      {/* Content Body */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-primary-strong)]">
            {work.category}
          </span>
          <h3 className="text-lg sm:text-xl font-bold text-[var(--color-text)] leading-snug">
            {work.title}
          </h3>
          <p className="text-sm text-[var(--color-text-muted)] leading-relaxed line-clamp-2">
            {work.description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {work.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-[var(--radius-pill)] bg-[var(--color-surface-soft)] text-[var(--color-text-muted)] border border-[var(--color-border)] font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Link */}
        <div className="pt-4 border-t border-[var(--color-border)] flex items-center justify-between">
          <span className="text-xs font-mono text-[var(--color-text-muted)]">
            {work.deliverableType}
          </span>
          <Link
            href={`/proyek/${work.projectSlug}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-text)] hover:text-[var(--color-primary-strong)] transition-colors group"
          >
            Lihat Detail
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

// ── Main Sticky Horizontal Scroll Component ───────────────────────────────────

export function ShowcaseHorizontalScroll({ projects }: { projects?: unknown }) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const totalWorks = showcaseWorks.length;

  // Check scroll position to update arrows and counter
  const updateScrollState = useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    // Approximate index based on card width + gap
    const cardWidth = 460 + 24;
    const computedIndex = Math.min(
      totalWorks - 1,
      Math.max(0, Math.round(scrollLeft / cardWidth))
    );
    setActiveIndex(computedIndex);
  }, [totalWorks]);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    updateScrollState();
    el.addEventListener('scroll', updateScrollState, { passive: true });
    window.addEventListener('resize', updateScrollState);

    return () => {
      el.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, [updateScrollState]);

  // Handle arrow clicks to scroll left / right
  const handleScroll = (direction: 'left' | 'right') => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const scrollAmount = el.clientWidth * 0.75;
    el.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      handleScroll('left');
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      handleScroll('right');
    }
  };

  return (
    <section
      id="showcase"
      aria-label="Galeri Hasil Karya UI/UX"
      className="py-24 sm:py-32 border-t border-[var(--color-border)] relative"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-6 border-b border-[var(--color-border)]">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[var(--color-text-muted)] mb-2">
              <Sparkles size={14} className="text-[var(--color-accent)]" />
              <span>Kompilasi Luaran Desain</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-text)] tracking-tight">
              Galeri Hasil Karya
            </h2>
            <p className="mt-3 text-base text-[var(--color-text-muted)] max-w-xl leading-relaxed">
              Jelajahi artefak desain, prototipe fungsional, dan visualisasi arsitektur yang dirancang oleh kelompok.
            </p>
          </div>

          {/* Sticky Navigation Controls (Panah Kanan & Kiri) */}
          <div className="flex items-center gap-3 self-start sm:self-end">
            <div className="flex items-center gap-1.5 font-mono text-sm text-[var(--color-text)] font-semibold px-3 py-1.5 rounded-[var(--radius-md)] bg-[var(--color-surface-soft)] border border-[var(--color-border)]">
              <span className="text-[var(--color-primary-strong)]">
                {String(activeIndex + 1).padStart(2, '0')}
              </span>
              <span className="text-[var(--color-text-muted)]">/</span>
              <span className="text-[var(--color-text-muted)]">
                {String(totalWorks).padStart(2, '0')}
              </span>
            </div>

            {/* Tombol Panah Kiri */}
            <button
              type="button"
              onClick={() => handleScroll('left')}
              disabled={!canScrollLeft}
              aria-label="Geser ke karya sebelumnya (Kiri)"
              className={cn(
                'h-11 w-11 rounded-[var(--radius-lg)] inline-flex items-center justify-center',
                'border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)]',
                'hover:border-[var(--color-primary-strong)] hover:bg-[var(--color-surface-soft)]',
                'transition-all duration-200 shadow-sm cursor-pointer',
                'disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-[var(--color-border)] disabled:hover:bg-[var(--color-surface)]'
              )}
            >
              <ChevronLeft size={20} strokeWidth={2.2} />
            </button>

            {/* Tombol Panah Kanan */}
            <button
              type="button"
              onClick={() => handleScroll('right')}
              disabled={!canScrollRight}
              aria-label="Geser ke karya berikutnya (Kanan)"
              className={cn(
                'h-11 w-11 rounded-[var(--radius-lg)] inline-flex items-center justify-center',
                'border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)]',
                'hover:border-[var(--color-primary-strong)] hover:bg-[var(--color-surface-soft)]',
                'transition-all duration-200 shadow-sm cursor-pointer',
                'disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-[var(--color-border)] disabled:hover:bg-[var(--color-surface)]'
              )}
            >
              <ChevronRight size={20} strokeWidth={2.2} />
            </button>
          </div>
        </div>
      </div>

      {/* ── Horizontal Scrolling Track ── */}
      <div
        ref={scrollContainerRef}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="region"
        aria-label="Daftar horizontal hasil karya kelompok"
        className={cn(
          'flex gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory',
          'px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-strong)]',
          'py-4'
        )}
      >
        {showcaseWorks.map((work, idx) => (
          <div key={work.id} className="snap-start flex-shrink-0">
            <WorkCard work={work} index={idx} />
          </div>
        ))}
      </div>

      {/* Bottom Hint Indicator */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 mt-6 flex items-center justify-between text-xs text-[var(--color-text-muted)]">
        <span className="hidden sm:inline">
          Gunakan tombol panah kanan/kiri di atas atau tombol keyboard untuk menjelajahi karya
        </span>
        <div className="flex gap-1.5 ml-auto">
          {showcaseWorks.map((_, i) => (
            <span
              key={i}
              className={cn(
                'h-1.5 rounded-full transition-all duration-300',
                activeIndex === i
                  ? 'w-6 bg-[var(--color-primary-strong)]'
                  : 'w-1.5 bg-[var(--color-border)]'
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
