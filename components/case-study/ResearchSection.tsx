import { Search, Users, AlertCircle, CheckCircle2 } from 'lucide-react';
import type { Project } from '@/types';

interface ResearchSectionProps {
  project: Project;
}

export function ResearchSection({ project }: ResearchSectionProps) {
  if (!project.research) return null;

  return (
    <section
      id="research"
      aria-labelledby="heading-research"
      className="py-16 border-b border-[var(--color-border)] scroll-mt-24"
    >
      <div className="space-y-8">
        {/* Section Header */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)]">
            <Search size={14} className="text-[var(--color-primary-strong)]" />
            <span>Fase 01 · Penemuan</span>
          </div>
          <h2
            id="heading-research"
            className="text-2xl sm:text-3xl font-bold text-[var(--color-text)]"
          >
            User Research & Problem Discovery
          </h2>
          <p className="text-[var(--color-text-muted)] text-base sm:text-lg leading-relaxed max-w-2xl">
            {project.research}
          </p>
        </div>

        {/* Highlight Cards Grid */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="p-6 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] space-y-3">
            <div className="h-9 w-9 rounded-[var(--radius-md)] bg-[var(--color-surface-soft)] flex items-center justify-center text-[var(--color-text)]">
              <Users size={18} />
            </div>
            <h3 className="font-semibold text-[var(--color-text)] text-base">
              Target Pengguna
            </h3>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
              {project.domain === 'education'
                ? 'Mahasiswa aktif tingkat awal hingga akhir yang membutuhkan navigasi kurikulum akademik dan personalisasi roadmap kompetensi.'
                : 'Operator fasilitas industri dan insinyur kontrol proses yang mengawasi puluhan telemetri sensor secara simultan.'}
            </p>
          </div>

          <div className="p-6 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] space-y-3">
            <div className="h-9 w-9 rounded-[var(--radius-md)] bg-[var(--color-surface-soft)] flex items-center justify-center text-[var(--color-text)]">
              <AlertCircle size={18} />
            </div>
            <h3 className="font-semibold text-[var(--color-text)] text-base">
              Core Pain Points
            </h3>
            <ul className="text-sm text-[var(--color-text-muted)] space-y-2">
              {project.domain === 'education' ? (
                <>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-[var(--color-primary-strong)] shrink-0 mt-0.5" />
                    <span>Kurikulum terasa silo dan minim visibilitas progres keterampilan.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-[var(--color-primary-strong)] shrink-0 mt-0.5" />
                    <span>Sumber belajar tersebar tanpa kurasi yang terstruktur.</span>
                  </li>
                </>
              ) : (
                <>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-[var(--color-primary-strong)] shrink-0 mt-0.5" />
                    <span>Alert fatigue akibat banjir alarm tanpa diferensiasi urgensi.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-[var(--color-primary-strong)] shrink-0 mt-0.5" />
                    <span>Latensi visualisasi data sensor kritis pada dashboard legasi.</span>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

