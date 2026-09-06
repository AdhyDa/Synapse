'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { GithubIcon, FigmaIcon } from '@/components/ui/Icons';
import { ThemeToggle } from './ThemeToggle';
import { cn } from '@/lib/cn';

// ── Nav Links ─────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: 'Karya', href: '#showcase' },
  { label: 'Sistem', href: '#guidelines' },
  { label: 'Tim', href: '#tim' },
  { label: 'Arsip', href: '#arsip' },
] as const;

// ── Helpers ───────────────────────────────────────────────────────────────────

function useActiveSection(sectionIds: string[]) {
  const [active, setActive] = useState<string>('');

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(`#${id}`);
        },
        { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [sectionIds]);

  return active;
}

// ── Component ─────────────────────────────────────────────────────────────────

export function FloatingNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const sectionIds = NAV_LINKS.map((l) => l.href.replace('#', ''));
  const activeSection = useActiveSection(sectionIds);

  // Elevate navbar on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    // Smooth scroll to section
    const target = document.querySelector(href);
    target?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={cn(
          'fixed top-0 inset-x-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-[var(--color-background)]/95 border-b border-[var(--color-border)] shadow-sm'
            : 'bg-transparent'
        )}
      >
        <nav
          className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
          aria-label="Main navigation"
        >
          {/* ── Wordmark ──────────────────────────────────────── */}
          <Link
            href="/"
            className="text-[var(--color-text)] font-bold text-lg tracking-tight hover:text-[var(--color-primary-strong)] transition-colors duration-[180ms]"
            aria-label="Synapse — Back to home"
          >
            Synapse
          </Link>

          {/* ── Desktop Nav Links ──────────────────────────────── */}
          <ul className="hidden md:flex items-center gap-1" role="list">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <li key={link.href} className="relative">
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className={cn(
                      'relative px-3 py-1.5 rounded-[var(--radius-md)] text-sm font-medium',
                      'transition-colors duration-[180ms]',
                      isActive
                        ? 'text-[var(--color-text)]'
                        : 'text-[var(--color-text-muted)] hover:text-[var(--color-text)]'
                    )}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {/* Animated active indicator */}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active-pill"
                        className="absolute inset-0 rounded-[var(--radius-md)] bg-[var(--color-surface-soft)] border border-[var(--color-border)]"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>

          {/* ── Desktop Actions ────────────────────────────────── */}
          <div className="hidden md:flex items-center gap-1">
            <a
              href="https://github.com/AdhyDa/Synapse"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub repository"
              className={cn(
                'h-9 w-9 rounded-[var(--radius-md)] inline-flex items-center justify-center',
                'text-[var(--color-text-muted)] hover:text-[var(--color-text)]',
                'hover:bg-[var(--color-surface-soft)] transition-colors duration-[180ms]'
              )}
            >
              <GithubIcon size={16} />
            </a>
            <a
              href="https://www.figma.com/design/T4QYJNmZHDMTmPEtFbpM1o/UI-UX-Design?node-id=601-9&t=6nI2GHH4Xbp2dpBs-1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Figma master file"
              className={cn(
                'h-9 w-9 rounded-[var(--radius-md)] inline-flex items-center justify-center',
                'text-[var(--color-text-muted)] hover:text-[var(--color-text)]',
                'hover:bg-[var(--color-surface-soft)] transition-colors duration-[180ms]'
              )}
            >
              <FigmaIcon size={16} />
            </a>
            <div className="w-px h-5 bg-[var(--color-border)] mx-1" aria-hidden="true" />
            <ThemeToggle />
          </div>

          {/* ── Mobile Controls ────────────────────────────────── */}
          <div className="flex md:hidden items-center gap-1">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              className={cn(
                'h-9 w-9 rounded-[var(--radius-md)] inline-flex items-center justify-center',
                'text-[var(--color-text-muted)] hover:text-[var(--color-text)]',
                'hover:bg-[var(--color-surface-soft)] transition-colors duration-[180ms]'
              )}
            >
              {mobileOpen ? <X size={18} strokeWidth={1.8} /> : <Menu size={18} strokeWidth={1.8} />}
            </button>
          </div>
        </nav>
      </header>

      {/* ── Mobile Menu Overlay ──────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/30"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />

            {/* Drawer */}
            <motion.div
              key="drawer"
              id="mobile-menu"
              ref={mobileMenuRef}
              role="dialog"
              aria-label="Navigation menu"
              aria-modal="true"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 340, damping: 35 }}
              className={cn(
                'fixed top-0 right-0 bottom-0 z-50 w-72',
                'bg-[var(--color-background)] border-l border-[var(--color-border)]',
                'flex flex-col pt-20 pb-8 px-6 gap-2'
              )}
            >
              <nav aria-label="Mobile navigation">
                <ul className="flex flex-col gap-1" role="list">
                  {NAV_LINKS.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick(link.href);
                        }}
                        className={cn(
                          'flex items-center h-11 px-3 rounded-[var(--radius-md)] text-base font-medium',
                          'transition-colors duration-[180ms]',
                          activeSection === link.href
                            ? 'bg-[var(--color-surface-soft)] text-[var(--color-text)] border border-[var(--color-border)]'
                            : 'text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface-soft)]'
                        )}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="mt-auto flex items-center gap-2 pt-4 border-t border-[var(--color-border)]">
                <a
                  href="https://github.com/placeholder"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub repository"
                  className="text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors p-1"
                >
                  <GithubIcon size={18} />
                </a>
                <a
                  href="https://figma.com/file/placeholder"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Figma master file"
                  className="text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors p-1"
                >
                  <FigmaIcon size={18} />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
