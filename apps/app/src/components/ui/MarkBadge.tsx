'use client';

interface MarkBadgeProps {
  marks: number;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'subtle' | 'outline';
  className?: string;
}

export function MarkBadge({
  marks,
  size = 'md',
  variant = 'default',
  className = '',
}: MarkBadgeProps) {
  const sizeClasses = {
    sm: 'text-xs px-1.5 py-0.5',
    md: 'text-sm px-2 py-1',
    lg: 'text-base px-3 py-1.5',
  };

  const variantClasses = {
    default:
      'bg-[var(--color-accent)]/20 text-[var(--color-accent)] border border-[var(--color-accent)]/30',
    subtle:
      'bg-[var(--color-bg-elevated)] text-[var(--color-text-secondary)]',
    outline:
      'bg-transparent text-[var(--color-text-secondary)] border border-[var(--color-border)]',
  };

  const markText = marks === 1 ? '1 mark' : `${marks} marks`;

  return (
    <span
      className={`
        inline-flex items-center justify-center
        font-medium rounded-md whitespace-nowrap
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${className}
      `}
    >
      [{markText}]
    </span>
  );
}

// Inline version for use within text
export function InlineMarks({
  marks,
  className = '',
}: {
  marks: number;
  className?: string;
}) {
  const markText = marks === 1 ? '1 mark' : `${marks} marks`;

  return (
    <span
      className={`text-[var(--color-text-muted)] font-medium ml-2 ${className}`}
    >
      [{markText}]
    </span>
  );
}
