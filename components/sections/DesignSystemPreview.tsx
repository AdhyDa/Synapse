'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Copy } from 'lucide-react';
import { cn } from '@/lib/cn';

// ── Design Token Data ─────────────────────────────────────────────────────────

const colorSwatches = [
  { token: '--color-primary',        hex: '#A8C6E7', label: 'Primary',        usage: 'Interface accent' },
  { token: '--color-primary-strong', hex: '#3B6C9D', label: 'Primary Strong', usage: 'Strong accent / interaction' },
  { token: '--color-accent',         hex: '#E5A823', label: 'Accent',         usage: 'Accent highlight' },
  { token: '--color-highlight',      hex: '#FFF0B3', label: 'Highlight',      usage: 'Highlight surface' },
  { token: '--color-surface-soft',   hex: '#F5F1E8', label: 'Surface Soft',   usage: 'Soft surface layer' },
  { token: '--color-background',     hex: '#FDFBF7', label: 'Background',     usage: 'Main background' },
];

const typeScale = [
  { token: 'display-xl', size: '96px',  weight: '600', sample: 'Aa' },
  { token: 'display-lg', size: '72px',  weight: '600', sample: 'Heading Display' },
  { token: 'heading-xl', size: '40px',  weight: '600', sample: 'Section Heading' },
  { token: 'heading-lg', size: '32px',  weight: '600', sample: 'Card Heading' },
  { token: 'body-lg',    size: '18px',  weight: '400', sample: 'Body text — keterbacaan optimal untuk konten editorial yang panjang.' },
  { token: 'body-sm',    size: '14px',  weight: '400', sample: 'Caption dan metadata pendukung' },
  { token: 'micro',      size: '11px',  weight: '500', sample: 'UPPERCASE LABEL · MICRO' },
];

const tabs = ['Warna', 'Tipografi', 'Komponen'] as const;
type TabId = (typeof tabs)[number];

// ── Color Swatch ──────────────────────────────────────────────────────────────

function ColorSwatch({ hex, label, usage }: { hex: string; label: string; usage: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(hex).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    });
  };

  return (
    <div className="space-y-2">
      <button
        type="button"
        onClick={handleCopy}
        aria-label={`Copy color ${hex} to clipboard`}
        className={cn(
          'w-full aspect-square rounded-[var(--radius-lg)] border border-[var(--color-border)]',
          'flex items-end justify-end p-2',
          'cursor-copy hover:scale-[1.02] transition-transform duration-[180ms] group',
          'focus-visible:ring-2 focus-visible:ring-[var(--color-primary-strong)]'
        )}
        style={{ backgroundColor: hex }}
      >
        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-[150ms] bg-white/80 rounded p-0.5">
          {copied
            ? <Check size={12} className="text-emerald-700" />
            : <Copy size={12} className="text-gray-700" />
          }
        </span>
      </button>
      <div>
        <p className="text-xs font-semibold text-[var(--color-text)]">{label}</p>
        <p className="text-xs text-[var(--color-text-muted)] font-mono">{hex}</p>
        <p className="text-xs text-[var(--color-text-muted)] opacity-70">{usage}</p>
      </div>
    </div>
  );
}

// ── Mini Component Previews ───────────────────────────────────────────────────

function ComponentPreviews() {
  return (
    <div className="grid sm:grid-cols-2 gap-6">
      {/* Buttons */}
      <div className="space-y-3 p-5 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)]">
        <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)]">Button</p>
        <div className="flex flex-wrap gap-2">
          <button
            className={cn(
              'h-9 px-4 rounded-[var(--radius-md)] text-sm font-semibold',
              'bg-[var(--color-primary-strong)] text-white dark:text-[#0B0F15]',
              'border border-[var(--color-primary-strong)] shadow-sm',
              'hover:opacity-90 transition-opacity duration-[180ms]'
            )}
          >
            Primary
          </button>
          <button
            className={cn(
              'h-9 px-4 rounded-[var(--radius-md)] text-sm font-medium',
              'bg-transparent text-[var(--color-text)]',
              'border border-[var(--color-border)]',
              'hover:border-[var(--color-primary-strong)] transition-colors duration-[180ms]'
            )}
          >
            Secondary
          </button>
          <button
            className={cn(
              'h-9 px-4 rounded-[var(--radius-md)] text-sm font-medium',
              'bg-transparent text-[var(--color-text-muted)]',
              'border border-transparent',
              'hover:bg-[var(--color-surface-soft)] transition-colors duration-[180ms]'
            )}
          >
            Ghost
          </button>
        </div>
      </div>

      {/* Badges */}
      <div className="space-y-3 p-5 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)]">
        <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)]">Badge</p>
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium bg-[var(--color-primary)] text-[var(--color-text)] border-[var(--color-primary-strong)]">
            Pendidikan
          </span>
          <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium bg-[var(--color-surface-soft)] text-[var(--color-text)] border-[var(--color-accent)]">
            Industri
          </span>
          <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium bg-emerald-50 text-emerald-700 border-emerald-200">
            Selesai
          </span>
        </div>
      </div>

      {/* Card */}
      <div className="space-y-3 p-5 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)]">
        <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)]">Card</p>
        <div className="rounded-[var(--radius-md)] border border-[var(--color-border)] p-4 bg-[var(--color-surface-soft)] space-y-1">
          <p className="text-sm font-semibold text-[var(--color-text)]">Judul Kartu</p>
          <p className="text-xs text-[var(--color-text-muted)]">Deskripsi singkat konten kartu.</p>
        </div>
      </div>

      {/* Input */}
      <div className="space-y-3 p-5 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)]">
        <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)]">Input</p>
        <input
          type="text"
          placeholder="Placeholder text..."
          className={cn(
            'w-full h-9 px-3 rounded-[var(--radius-md)] text-sm',
            'bg-[var(--color-background)] border border-[var(--color-border)]',
            'text-[var(--color-text)] placeholder:text-[var(--color-text-muted)]',
            'focus:outline-none focus:border-[var(--color-primary-strong)]',
            'transition-colors duration-[180ms]'
          )}
          readOnly
        />
      </div>
    </div>
  );
}

// ── Main Component ─────────────────────────────────────────────────────────────

export function DesignSystemPreview() {
  const [activeTab, setActiveTab] = useState<TabId>('Warna');

  return (
    <section
      id="guidelines"
      aria-label="Design system preview"
      className="py-24 sm:py-32 border-t border-[var(--color-border)]"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-[var(--color-text-muted)] mb-2">
            Design System
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-text)]">
            Sistem Visual Synapse
          </h2>
          <p className="mt-3 text-[var(--color-text-muted)] max-w-xl">
            Token, tipografi, dan komponen yang membentuk identitas visual portfolio ini.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 mb-10 p-1 bg-[var(--color-surface-soft)] rounded-[var(--radius-lg)] w-fit border border-[var(--color-border)]" role="tablist" aria-label="Design system sections">
          {tabs.map((tab) => (
            <button
              key={tab}
              role="tab"
              aria-selected={activeTab === tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                'relative px-4 py-2 rounded-[var(--radius-md)] text-sm font-medium',
                'transition-colors duration-[180ms] cursor-pointer',
                activeTab === tab
                  ? 'text-[var(--color-text)]'
                  : 'text-[var(--color-text-muted)] hover:text-[var(--color-text)]'
              )}
            >
              {activeTab === tab && (
                <motion.span
                  layoutId="ds-tab-pill"
                  className="absolute inset-0 bg-[var(--color-background)] rounded-[var(--radius-md)] border border-[var(--color-border)]"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{tab}</span>
            </button>
          ))}
        </div>

        {/* Tab Panels */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            role="tabpanel"
            aria-label={activeTab}
          >
            {activeTab === 'Warna' && (
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 sm:gap-6">
                {colorSwatches.map((swatch) => (
                  <ColorSwatch key={swatch.token} {...swatch} />
                ))}
              </div>
            )}

            {activeTab === 'Tipografi' && (
              <div className="space-y-6 max-w-3xl">
                {typeScale.map((t) => (
                  <div
                    key={t.token}
                    className="flex items-baseline gap-6 py-4 border-b border-[var(--color-border)] first:border-t"
                  >
                    <div className="w-28 flex-shrink-0 space-y-0.5">
                      <p className="text-xs font-mono text-[var(--color-text-muted)]">{t.token}</p>
                      <p className="text-xs text-[var(--color-text-muted)] opacity-70">{t.size} / {t.weight}</p>
                    </div>
                    <p
                      className="text-[var(--color-text)] leading-tight truncate max-w-full"
                      style={{ fontSize: `clamp(14px, ${t.size}, ${t.size})`, fontWeight: t.weight }}
                    >
                      {t.sample}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'Komponen' && <ComponentPreviews />}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
