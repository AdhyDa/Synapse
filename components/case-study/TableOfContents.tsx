'use client';

import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/cn';

interface TocItem {
  id: string;
  label: string;
}

interface TableOfContentsProps {
  items: TocItem[];
}

export function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    observerRef.current = new IntersectionObserver(handleIntersect, {
      rootMargin: '-20% 0px -70% 0px',
    });

    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, [items]);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  if (items.length === 0) return null;

  return (
    <aside
      aria-label="Table of contents"
      className="sticky top-24 space-y-1 self-start"
    >
      <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)] mb-4 px-3">
        Konten
      </p>
      <nav>
        <ul role="list" className="space-y-0.5">
          {items.map((item) => {
            const isActive = activeId === item.id;
            return (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => handleClick(item.id)}
                  className={cn(
                    'w-full text-left px-3 py-1.5 text-sm rounded-[var(--radius-md)]',
                    'transition-colors duration-[150ms] cursor-pointer',
                    isActive
                      ? 'text-[var(--color-text)] font-medium bg-[var(--color-surface-soft)] border-l-2 border-[var(--color-primary-strong)]'
                      : 'text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface-soft)] border-l-2 border-transparent'
                  )}
                  aria-current={isActive ? 'location' : undefined}
                >
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
