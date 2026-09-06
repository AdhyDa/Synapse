import * as React from 'react';
import { cn } from '@/lib/cn';

// ── Types ─────────────────────────────────────────────────────────────────────

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
}

// ── Variant Styles ─────────────────────────────────────────────────────────────

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-[var(--color-primary-strong)] text-white dark:bg-[var(--color-primary-strong)] dark:text-[#0B0F15] ' +
    'hover:opacity-90 border border-[var(--color-primary-strong)] shadow-sm font-semibold',
  secondary:
    'bg-[var(--color-surface)] text-[var(--color-text)] border border-[var(--color-border)] ' +
    'hover:border-[var(--color-primary-strong)] hover:bg-[var(--color-surface-soft)]',
  ghost:
    'bg-transparent text-[var(--color-text-muted)] border border-transparent ' +
    'hover:text-[var(--color-text)] hover:bg-[var(--color-surface-soft)]',
};

const sizes: Record<ButtonSize, string> = {
  sm: 'h-8 px-3 text-sm gap-1.5',
  md: 'h-10 px-4 text-sm gap-2',
  lg: 'h-12 px-6 text-base gap-2',
};

// ── Component ─────────────────────────────────────────────────────────────────

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          // Base
          'inline-flex items-center justify-center rounded-[var(--radius-md)] font-medium',
          'transition-colors duration-[180ms] ease-out',
          'cursor-pointer select-none',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          // Variant + Size
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
