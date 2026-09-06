'use client';

import { useState } from 'react';
import { Layers, Sparkles, LayoutGrid, Smartphone, Monitor, BarChart3, Zap } from 'lucide-react';
import { cn } from '@/lib/cn';
import type { Project } from '@/types';

interface DesignProcessProps {
  project: Project;
}

export function DesignProcess({ project }: DesignProcessProps) {
  const [selectedPhase, setSelectedPhase] = useState<number>(0);

  return (
    <div className="space-y-16">
      {/* ── Process Steps Section ── */}
      {project.processSteps && project.processSteps.length > 0 && (
        <section
          id="process"
          aria-labelledby="heading-process"
          className="py-16 border-b border-[var(--color-border)] scroll-mt-24"
        >
          <div className="space-y-8">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)]">
                <Layers size={14} className="text-[var(--color-primary-strong)]" />
                <span>Fase 02 · Metodologi</span>
              </div>
              <h2
                id="heading-process"
                className="text-2xl sm:text-3xl font-bold text-[var(--color-text)]"
              >
                Proses Desain & Eksekusi
              </h2>
              <p className="text-[var(--color-text-muted)] text-base leading-relaxed max-w-2xl">
                Alur kerja iteratif dari eksplorasi awal hingga validasi desain fungsional.
              </p>
            </div>

            {/* Interactive Process Pipeline */}
            <div className="grid md:grid-cols-5 gap-3" role="tablist" aria-label="Tahapan proses desain">
              {project.processSteps.map((step, idx) => {
                const isActive = selectedPhase === idx;
                return (
                  <button
                    key={step.phase}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setSelectedPhase(idx)}
                    className={cn(
                      'text-left p-4 rounded-[var(--radius-lg)] border transition-all duration-[180ms]',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-strong)]',
                      isActive
                        ? 'bg-[var(--color-surface-soft)] border-[var(--color-primary-strong)] shadow-sm'
                        : 'bg-[var(--color-surface)] border-[var(--color-border)] hover:border-[var(--color-primary)]'
                    )}
                  >
                    <span className="text-xs font-mono text-[var(--color-text-muted)] block mb-1">
                      Step 0{idx + 1}
                    </span>
                    <span className="text-sm font-semibold text-[var(--color-text)] block">
                      {step.phase}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Phase Detail Card */}
            {project.processSteps[selectedPhase] && (
              <div className="p-6 sm:p-8 rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)] space-y-4">
                <div className="flex items-center justify-between flex-wrap gap-2 pb-4 border-b border-[var(--color-border)]">
                  <h3 className="text-lg font-bold text-[var(--color-text)]">
                    Fase {selectedPhase + 1}: {project.processSteps[selectedPhase].phase}
                  </h3>
                  {project.processSteps[selectedPhase].deliverable && (
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-[var(--color-surface-soft)] border border-[var(--color-border)] text-[var(--color-text)]">
                      Deliverable: {project.processSteps[selectedPhase].deliverable}
                    </span>
                  )}
                </div>
                <p className="text-sm sm:text-base text-[var(--color-text-muted)] leading-relaxed">
                  {project.processSteps[selectedPhase].description}
                </p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* ── Wireframe & Architecture Section ── */}
      {project.wireframe && (
        <section
          id="wireframe"
          aria-labelledby="heading-wireframe"
          className="py-16 border-b border-[var(--color-border)] scroll-mt-24"
        >
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)]">
                <LayoutGrid size={14} className="text-[var(--color-primary-strong)]" />
                <span>Fase 03 · Wireframing</span>
              </div>
              <h2
                id="heading-wireframe"
                className="text-2xl sm:text-3xl font-bold text-[var(--color-text)]"
              >
                Arsitektur Informasi & Wireframing
              </h2>
              <p className="text-[var(--color-text-muted)] text-base sm:text-lg leading-relaxed max-w-2xl">
                {project.wireframe}
              </p>
            </div>

            {/* Wireframe Mockup Visual */}
            <div className="rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface-soft)] p-8 sm:p-12 overflow-hidden">
              <div className="max-w-xl mx-auto space-y-4">
                <div className="h-4 w-32 rounded bg-[var(--color-border)]" />
                <div className="h-8 w-3/4 rounded bg-[var(--color-border)]" />
                <div className="grid grid-cols-3 gap-3 pt-4">
                  <div className="h-28 rounded-[var(--radius-md)] border-2 border-dashed border-[var(--color-border)] flex items-center justify-center text-xs font-mono text-[var(--color-text-muted)]">
                    Lo-Fi Block
                  </div>
                  <div className="h-28 rounded-[var(--radius-md)] border-2 border-dashed border-[var(--color-border)] flex items-center justify-center text-xs font-mono text-[var(--color-text-muted)]">
                    Mid-Fi Grid
                  </div>
                  <div className="h-28 rounded-[var(--radius-md)] border-2 border-dashed border-[var(--color-border)] flex items-center justify-center text-xs font-mono text-[var(--color-text-muted)]">
                    Component Flow
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── Final Design Section ── */}
      {project.finalDesign && (
        <section
          id="final-design"
          aria-labelledby="heading-final-design"
          className="py-16 border-b border-[var(--color-border)] scroll-mt-24"
        >
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)]">
                <Sparkles size={14} className="text-[var(--color-primary-strong)]" />
                <span>Fase 04 · Desain Final</span>
              </div>
              <h2
                id="heading-final-design"
                className="text-2xl sm:text-3xl font-bold text-[var(--color-text)]"
              >
                Eksplorasi Desain UI Final
              </h2>
              <p className="text-[var(--color-text-muted)] text-base sm:text-lg leading-relaxed max-w-2xl">
                {project.finalDesign}
              </p>
            </div>

            {/* Editorial Presentation Gallery */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)] space-y-3">
                <div className="aspect-[4/3] rounded-[var(--radius-lg)] bg-[var(--color-surface-soft)] border border-[var(--color-border)] flex items-center justify-center">
                  {project.domain === 'education' ? (
                    <Smartphone size={40} className="text-[var(--color-primary-strong)]" strokeWidth={1.5} />
                  ) : (
                    <Monitor size={40} className="text-[var(--color-primary-strong)]" strokeWidth={1.5} />
                  )}
                </div>
                <h3 className="font-semibold text-base text-[var(--color-text)]">
                  {project.domain === 'education' ? 'Mobile Learning Journey' : 'Central Control Telemetry'}
                </h3>
                <p className="text-xs sm:text-sm text-[var(--color-text-muted)]">
                  {project.domain === 'education'
                    ? 'Navigasi yang disederhanakan dengan penekanan pada pencapaian kompetensi visual.'
                    : 'Kepadatan informasi tinggi dengan kontras tinggi untuk pemantauan cepat dan minim kesalahan.'}
                </p>
              </div>

              <div className="p-6 rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)] space-y-3">
                <div className="aspect-[4/3] rounded-[var(--radius-lg)] bg-[var(--color-surface-soft)] border border-[var(--color-border)] flex items-center justify-center">
                  {project.domain === 'education' ? (
                    <BarChart3 size={40} className="text-[var(--color-accent)]" strokeWidth={1.5} />
                  ) : (
                    <Zap size={40} className="text-[var(--color-accent)]" strokeWidth={1.5} />
                  )}
                </div>
                <h3 className="font-semibold text-base text-[var(--color-text)]">
                  {project.domain === 'education' ? 'Statistik & Pencapaian' : 'Real-time Alert System'}
                </h3>
                <p className="text-xs sm:text-sm text-[var(--color-text-muted)]">
                  {project.domain === 'education'
                    ? 'Visualisasi progress berbasis modul dengan micro-interaction interaktif.'
                    : 'Matriks keparahan alarm dengan tindakan mitigasi cepat terintegrasi.'}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
