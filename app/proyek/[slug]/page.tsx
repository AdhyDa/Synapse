import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import { projects, getProjectBySlug, getAdjacentProject } from '@/data/projects';
import { FloatingNavbar } from '@/components/navbar/FloatingNavbar';
import { Footer } from '@/components/sections/Footer';
import { CaseStudyHero } from '@/components/case-study/CaseStudyHero';
import { TableOfContents } from '@/components/case-study/TableOfContents';
import { ResearchSection } from '@/components/case-study/ResearchSection';
import { DesignProcess } from '@/components/case-study/DesignProcess';
import { PrototypeEmbed } from '@/components/case-study/PrototypeEmbed';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: 'Proyek Tidak Ditemukan',
    };
  }

  return {
    title: `${project.title} — Studi Kasus UI/UX`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const nextProject = getAdjacentProject(project.slug);

  // Build dynamic Table of Contents based on available project data
  const tocItems = [
    { id: 'overview', label: 'Ringkasan & Konteks' },
    ...(project.research ? [{ id: 'research', label: 'User Research' }] : []),
    ...(project.processSteps && project.processSteps.length > 0
      ? [{ id: 'process', label: 'Alur & Proses Desain' }]
      : []),
    ...(project.wireframe ? [{ id: 'wireframe', label: 'Wireframe & Arsitektur' }] : []),
    ...(project.finalDesign ? [{ id: 'final-design', label: 'Desain Final' }] : []),
    { id: 'prototype', label: 'Prototype Interaktif' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-background)] text-[var(--color-text)]">
      <FloatingNavbar />

      <main className="flex-1">
        {/* Case Study Hero */}
        <CaseStudyHero project={project} />

        {/* Content Layout with Desktop Sticky Sidebar */}
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-[240px_1fr] gap-12 lg:gap-16 items-start">
            {/* Desktop Table of Contents Sidebar */}
            <div className="hidden lg:block">
              <TableOfContents items={tocItems} />
            </div>

            {/* Case Study Content Stream */}
            <div className="min-w-0 space-y-16">
              {/* ── Section: Overview ── */}
              <section
                id="overview"
                aria-labelledby="heading-overview"
                className="scroll-mt-24 space-y-6 pb-16 border-b border-[var(--color-border)]"
              >
                <div className="space-y-2">
                  <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)]">
                    Konteks Proyek
                  </span>
                  <h2
                    id="heading-overview"
                    className="text-2xl sm:text-3xl font-bold text-[var(--color-text)]"
                  >
                    Tentang & Latar Belakang
                  </h2>
                </div>
                <p className="text-base sm:text-lg text-[var(--color-text-muted)] leading-relaxed">
                  {project.overview}
                </p>

                {/* Team Distribution Meta */}
                <div className="pt-6">
                  <h3 className="text-sm font-semibold uppercase tracking-widest text-[var(--color-text-muted)] mb-4">
                    Distribusi Peran Tim
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {project.roleDistribution.map((role) => (
                      <div
                        key={role.memberName}
                        className="p-3.5 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] flex items-center justify-between"
                      >
                        <span className="font-semibold text-sm text-[var(--color-text)]">
                          {role.memberName}
                        </span>
                        <span className="text-xs text-[var(--color-text-muted)]">
                          {role.role}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* ── Section: Research ── */}
              <ResearchSection project={project} />

              {/* ── Section: Process, Wireframes, Final Design ── */}
              <DesignProcess project={project} />

              {/* ── Section: Prototype Embed ── */}
              <PrototypeEmbed project={project} />

              {/* ── Next Project Navigation ── */}
              {nextProject && (
                <div className="pt-16 border-t border-[var(--color-border)]">
                  <div className="p-8 sm:p-10 rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                    <div className="space-y-2">
                      <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)]">
                        Proyek Selanjutnya
                      </span>
                      <h3 className="text-2xl font-bold text-[var(--color-text)]">
                        {nextProject.title}
                      </h3>
                      <p className="text-sm text-[var(--color-text-muted)] max-w-md">
                        {nextProject.subtitle}
                      </p>
                    </div>
                    <Link
                      href={`/proyek/${nextProject.slug}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[var(--radius-md)] bg-[var(--color-primary-strong)] text-[var(--color-background)] font-medium text-sm hover:bg-[var(--color-primary)] transition-colors shadow-sm"
                    >
                      Buka Studi Kasus
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
