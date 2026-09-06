import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { GithubIcon, FigmaIcon } from '@/components/ui/Icons';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="border-t border-[var(--color-border)] py-12 sm:py-16"
      aria-label="Site footer"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          {/* Wordmark + tagline */}
          <div className="space-y-2">
            <Link
              href="/"
              className="text-lg font-bold text-[var(--color-text)] hover:text-[var(--color-primary-strong)] transition-colors duration-[180ms]"
            >
              Synapse
            </Link>
            <p className="text-sm text-[var(--color-text-muted)] max-w-xs">
              Group UI/UX Portfolio — Mata Kuliah UI/UX Design
            </p>
            <p className="text-xs text-[var(--color-text-muted)]">
              © {currentYear} Synapse. Dibuat dengan Next.js & Framer Motion.
            </p>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer navigation" className="flex flex-col sm:flex-row gap-4 sm:gap-8">
            <div className="flex flex-col gap-2">
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)]">
                Navigasi
              </p>
              {[
                { label: 'Karya', href: '#showcase' },
                { label: 'Sistem Visual', href: '#guidelines' },
                { label: 'Tim', href: '#tim' },
                { label: 'Arsip Tugas', href: '#arsip' },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors duration-[180ms]"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)]">
                Proyek
              </p>
              {[
                { label: 'EduPath — Pendidikan', href: '/proyek/pendidikan-edupath' },
                { label: 'Mantis — Industri', href: '/proyek/industri-mantis' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors duration-[180ms] inline-flex items-center gap-1 group"
                >
                  {link.label}
                  <ArrowUpRight
                    size={11}
                    strokeWidth={2}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)]">
                Sumber
              </p>
              <a
                href="https://github.com/placeholder"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors duration-[180ms] inline-flex items-center gap-1.5"
              >
                <GithubIcon size={14} />
                GitHub
              </a>
              <a
                href="https://figma.com/file/placeholder"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors duration-[180ms] inline-flex items-center gap-1.5"
              >
                <FigmaIcon size={14} />
                Figma Master File
              </a>
            </div>
          </nav>
        </div>
      </div>
    </footer>
  );
}
