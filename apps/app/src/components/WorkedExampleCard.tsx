'use client';

import { useState } from 'react';
import { MathRenderer } from './MathRenderer';

interface WorkedExample {
  questionType: string;
  question: string;
  steps: {
    step: number;
    instruction: string;
    working: string;
    explanation: string;
  }[];
  answer: string;
  keyTips: string[];
  commonMistakes: string[];
}

interface WorkedExampleCardProps {
  example: WorkedExample;
  index: number;
}

export function WorkedExampleCard({ example, index }: WorkedExampleCardProps) {
  const [expanded, setExpanded] = useState(index === 0); // First one expanded by default

  return (
    <div className="bg-[var(--color-bg-card)] rounded-2xl border border-[var(--color-border)] overflow-hidden card-glow-subtle">
      {/* Header - always visible */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full px-4 sm:px-6 py-4 flex items-center justify-between text-left hover:bg-[var(--color-bg-hover)] transition-colors tap-highlight"
      >
        <div className="flex items-center gap-3 min-w-0 flex-1">
          <span className="shrink-0 w-8 h-8 rounded-lg bg-[var(--color-accent)]/20 flex items-center justify-center text-[var(--color-accent-hover)] font-bold text-sm">
            {index + 1}
          </span>
          <div className="min-w-0">
            <h3 className="font-semibold text-[var(--color-text-primary)] truncate">{example.questionType}</h3>
            <p className="text-sm text-[var(--color-text-muted)]">{example.steps.length} steps</p>
          </div>
        </div>
        <svg
          className={`shrink-0 w-5 h-5 text-[var(--color-text-muted)] transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Expanded content */}
      {expanded && (
        <div className="px-4 sm:px-6 pb-6 animate-fade-in">
          {/* Question */}
          <div className="bg-[var(--color-bg-elevated)] rounded-xl p-3 sm:p-4 mb-4 sm:mb-6">
            <div className="text-xs font-medium text-[var(--color-text-muted)] mb-2">QUESTION</div>
            <div className="text-[var(--color-text-primary)] text-sm sm:text-base overflow-x-auto">
              <MathRenderer content={example.question} />
            </div>
          </div>

          {/* Steps */}
          <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
            <div className="text-xs font-medium text-[var(--color-text-muted)]">SOLUTION</div>
            {example.steps.map((step) => (
              <div key={step.step} className="relative pl-7 sm:pl-8">
                {/* Step number */}
                <div className="absolute left-0 top-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[var(--color-accent)] flex items-center justify-center text-white text-xs font-bold">
                  {step.step}
                </div>

                {/* Connecting line */}
                {step.step < example.steps.length && (
                  <div className="absolute left-[9px] sm:left-[11px] top-5 sm:top-6 w-0.5 h-full bg-[var(--color-border)]" />
                )}

                <div className="bg-[var(--color-bg-elevated)] rounded-xl p-3 sm:p-4 ml-1 sm:ml-2">
                  {/* Instruction */}
                  <div className="text-[var(--color-accent-hover)] font-medium mb-2 text-sm sm:text-base">{step.instruction}</div>

                  {/* Working */}
                  <div className="bg-[var(--color-bg-card)] rounded-lg p-2 sm:p-3 mb-2 overflow-x-auto">
                    <div className="text-[var(--color-text-primary)] font-mono text-sm">
                      <MathRenderer content={step.working} />
                    </div>
                  </div>

                  {/* Explanation */}
                  <div className="text-xs sm:text-sm text-[var(--color-text-secondary)] italic">
                    💡 {step.explanation}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Answer */}
          <div className="bg-[var(--color-success-subtle)] border border-[var(--color-success)]/30 rounded-xl p-3 sm:p-4 mb-4 sm:mb-6">
            <div className="text-xs font-medium text-[var(--color-success)] mb-1">ANSWER</div>
            <div className="text-[var(--color-text-primary)] font-semibold text-sm sm:text-base overflow-x-auto">
              <MathRenderer content={example.answer} />
            </div>
          </div>

          {/* Tips and Common Mistakes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            {/* Key Tips */}
            <div className="bg-[var(--color-bg-elevated)] rounded-xl p-3 sm:p-4">
              <div className="text-xs font-medium text-[var(--color-accent)] mb-2 sm:mb-3 flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                KEY TIPS
              </div>
              <ul className="space-y-2">
                {example.keyTips.map((tip, i) => (
                  <li key={i} className="text-xs sm:text-sm text-[var(--color-text-secondary)] flex items-start gap-2">
                    <span className="text-green-400 mt-0.5 shrink-0">✓</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Common Mistakes */}
            <div className="bg-[var(--color-bg-elevated)] rounded-xl p-3 sm:p-4">
              <div className="text-xs font-medium text-red-400 mb-2 sm:mb-3 flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                COMMON MISTAKES
              </div>
              <ul className="space-y-2">
                {example.commonMistakes.map((mistake, i) => (
                  <li key={i} className="text-xs sm:text-sm text-[var(--color-text-secondary)] flex items-start gap-2">
                    <span className="text-red-400 mt-0.5 shrink-0">✗</span>
                    <span>{mistake}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
