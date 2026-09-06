import { ExternalLink, Play } from 'lucide-react';
import { FigmaIcon } from '@/components/ui/Icons';
import { Button } from '@/components/ui/Button';
import type { Project } from '@/types';

interface PrototypeEmbedProps {
  project: Project;
}

export function PrototypeEmbed({ project }: PrototypeEmbedProps) {
  const figmaUrl = project.figmaUrl || 'https://figma.com';

  return (
    <section
      id="prototype"
      aria-labelledby="heading-prototype"
      className="py-16 scroll-mt-24"
    >
      <div className="space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)]">
              <Play size={14} className="text-[var(--color-primary-strong)]" />
              <span>Interaktif</span>
            </div>
            <h2
              id="heading-prototype"
              className="text-2xl sm:text-3xl font-bold text-[var(--color-text)]"
            >
              Figma Prototype
            </h2>
          </div>

          {/* Mandatory Accessible External Fallback Link */}
          <a
            href={figmaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-text)] hover:text-[var(--color-primary-strong)] transition-colors"
          >
            Buka Prototype di Figma
            <ExternalLink size={14} strokeWidth={2} />
          </a>
        </div>

        {/* Prototype Embed Container */}
        <div className="rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)] overflow-hidden shadow-sm">
          {project.figmaEmbedUrl ? (
            <iframe
              src={project.figmaEmbedUrl}
              title={`Prototype Figma untuk ${project.title}`}
              className="w-full h-[600px] border-0"
              allowFullScreen
            />
          ) : (
            <div className="p-12 sm:p-16 text-center space-y-6 bg-[var(--color-surface-soft)]">
              <div className="mx-auto w-16 h-16 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-primary-strong)] shadow-sm">
                <FigmaIcon size={28} />
              </div>
              <div className="max-w-md mx-auto space-y-2">
                <h3 className="text-lg font-bold text-[var(--color-text)]">
                  Jelajahi Prototype Interaktif
                </h3>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                  Prototype Figma beresolusi tinggi tersedia untuk pengujian interaksi micro dan user journey komprehensif.
                </p>
              </div>
              <div>
                <a
                  href={figmaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="primary" size="md">
                    Buka di Figma Master
                    <ExternalLink size={14} className="ml-1" />
                  </Button>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

