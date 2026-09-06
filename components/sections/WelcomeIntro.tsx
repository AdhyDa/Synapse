'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

import type { Variants } from 'framer-motion';

// ── Animation Variants ────────────────────────────────────────────────────────

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

// ── Component ─────────────────────────────────────────────────────────────────

export function WelcomeIntro() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      aria-label="Welcome to Synapse"
      className="relative min-h-[100vh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8"
    >

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="relative z-10 text-center max-w-2xl mx-auto"
      >
        {/* Eyebrow */}
        <motion.p
          variants={itemVariants}
          className="text-[var(--color-text-muted)] text-sm font-medium tracking-[0.2em] uppercase mb-8"
        >
          Group UI/UX Portfolio
        </motion.p>

        {/* Primary wordmark */}
        <motion.h1
          variants={itemVariants}
          className="text-[clamp(4rem,12vw,7rem)] font-bold leading-[0.95] tracking-tight text-[var(--color-text)]"
        >
          Synapse
        </motion.h1>

        {/* Divider line */}
        <motion.div
          variants={itemVariants}
          className="mt-8 mx-auto w-12 h-px bg-[var(--color-border)]"
          aria-hidden="true"
        />

        {/* Caption */}
        <motion.p
          variants={itemVariants}
          className="mt-8 text-[var(--color-text-muted)] text-base sm:text-lg leading-relaxed max-w-md mx-auto"
        >
          Dokumentasi karya, proses desain, dan perjalanan belajar UI/UX — dalam satu portfolio kuratif.
        </motion.p>

        {/* Scroll cue */}
        <motion.div
          variants={itemVariants}
          className="mt-16 flex flex-col items-center gap-2 text-[var(--color-text-muted)]"
          aria-hidden="true"
        >
          <span className="text-xs font-medium tracking-widest uppercase">Gulir ke bawah</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            className="w-px h-8 bg-[var(--color-border)]"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
