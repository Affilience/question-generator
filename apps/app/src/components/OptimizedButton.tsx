'use client';

import { forwardRef, type ButtonHTMLAttributes } from 'react';
import { useOptimizedClick } from '@/hooks/useOptimizedInteraction';

interface OptimizedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  priority?: 'high' | 'low';
  loading?: boolean;
  children: React.ReactNode;
}

export const OptimizedButton = forwardRef<HTMLButtonElement, OptimizedButtonProps>(
  ({ onClick, priority = 'high', loading = false, disabled, className, children, ...props }, ref) => {
    const optimizedClick = useOptimizedClick(onClick || (() => {}), priority);

    return (
      <button
        ref={ref}
        onClick={optimizedClick}
        disabled={disabled || loading}
        className={`
          relative transition-colors duration-150 ease-in-out
          focus:outline-none focus:ring-2 focus:ring-offset-2
          disabled:opacity-50 disabled:cursor-not-allowed
          ${className}
        `}
        style={{
          // Optimize for interactions
          willChange: loading ? 'opacity' : 'auto',
          contain: 'layout style paint',
        }}
        {...props}
      >
        {loading && (
          <span 
            className="absolute inset-0 flex items-center justify-center"
            style={{ contain: 'layout style paint' }}
          >
            <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
          </span>
        )}
        <span className={loading ? 'invisible' : 'visible'}>
          {children}
        </span>
      </button>
    );
  }
);

OptimizedButton.displayName = 'OptimizedButton';