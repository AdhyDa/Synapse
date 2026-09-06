'use client';

import { useSyncExternalStore, useCallback } from 'react';
import { Moon, Sun } from 'lucide-react';
import { cn } from '@/lib/cn';

const STORAGE_KEY = 'synapse-theme';

function subscribe(callback: () => void) {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['class'],
  });
  return () => observer.disconnect();
}

function getSnapshot() {
  return document.documentElement.classList.contains('dark');
}

function getServerSnapshot() {
  return false;
}

const emptySubscribe = () => () => {};

export function ThemeToggle({ className }: { className?: string }) {
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const isDark = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  const toggle = useCallback(() => {
    const next = !document.documentElement.classList.contains('dark');
    document.documentElement.classList.toggle('dark', next);
    try {
      localStorage.setItem(STORAGE_KEY, next ? 'dark' : 'light');
    } catch {
      // localStorage may be unavailable in private browsing
    }
  }, []);

  if (!mounted) {
    return (
      <span
        className={cn(
          'h-9 w-9 rounded-[var(--radius-md)] inline-flex items-center justify-center',
          'bg-[var(--color-surface-soft)]',
          className
        )}
        aria-hidden="true"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to light mode'}
      aria-pressed={isDark}
      className={cn(
        'h-9 w-9 rounded-[var(--radius-md)] inline-flex items-center justify-center',
        'text-[var(--color-text-muted)] hover:text-[var(--color-text)]',
        'bg-transparent hover:bg-[var(--color-surface-soft)]',
        'border border-transparent hover:border-[var(--color-border)]',
        'transition-colors duration-[180ms] cursor-pointer',
        className
      )}
    >
      {isDark ? <Sun size={16} strokeWidth={1.8} /> : <Moon size={16} strokeWidth={1.8} />}
    </button>
  );
}
