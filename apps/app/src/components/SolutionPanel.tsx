'use client';

import { useState } from 'react';
import { Question } from '@/types';
import { MathRenderer } from './MathRenderer';

interface SolutionPanelProps {
  question: Question;
  onMark: (correct: boolean) => void;
  isMarked: boolean;
}

// Parse mark scheme point to extract mark type and description
function parseMarkSchemePoint(point: string): { part?: string; markType: string; description: string } {
  // Match patterns like:
  // "(a) M1:", "M1:", "(b) A1:", "B1:", "SC1:"
  // "(i) M1:", "(ii) A1:" (Roman numerals)
  // "M_{1}:", "A_{1}:" (LaTeX subscript style)
  // "(1) M1:" (numeric parts)
  const match = point.match(/^(?:\(([a-z]|[ivxlcdm]+|\d+)\)\s*)?(M_?\{?\d+\}?|A_?\{?\d+\}?|B_?\{?\d+\}?|SC_?\{?\d*\}?):?\s*(.*)$/i);

  if (match) {
    // Clean up mark type (remove LaTeX subscript notation)
    let markType = match[2].toUpperCase();
    markType = markType.replace(/_?\{?(\d+)\}?/, '$1');

    return {
      part: match[1] || undefined,
      markType,
      description: match[3],
    };
  }

  // If no mark type found, return as-is
  return {
    markType: '',
    description: point,
  };
}

// Get color classes for different mark types
function getMarkTypeColor(markType: string): string {
  if (markType.startsWith('M')) return 'bg-blue-500/20 text-blue-500 dark:text-blue-400';
  if (markType.startsWith('A')) return 'bg-green-500/20 text-green-600 dark:text-green-400';
  if (markType.startsWith('B')) return 'bg-purple-500/20 text-purple-600 dark:text-purple-400';
  if (markType.startsWith('SC')) return 'bg-orange-500/20 text-orange-600 dark:text-orange-400';
  return 'bg-[var(--color-bg-hover)] text-[var(--color-text-secondary)]';
}

export function SolutionPanel({ question, onMark, isMarked }: SolutionPanelProps) {
  const [revealed, setRevealed] = useState(false);

  if (!revealed) {
    return (
      <button
        onClick={() => setRevealed(true)}
        className="w-full py-4 px-6 bg-[var(--color-accent)] text-white rounded-xl font-medium transition-all duration-300 hover:bg-[var(--color-accent-hover)] hover:shadow-[0_0_20px_var(--color-accent-glow)] active:scale-[0.98]"
      >
        Reveal Solution
      </button>
    );
  }

  // Group mark scheme by parts if multi-part question
  const markSchemeByPart: Record<string, Array<{ markType: string; description: string }>> = {};
  let hasMultipleParts = false;

  question.markScheme.forEach((point) => {
    const parsed = parseMarkSchemePoint(point);
    const partKey = parsed.part || 'main';
    if (parsed.part) hasMultipleParts = true;

    if (!markSchemeByPart[partKey]) {
      markSchemeByPart[partKey] = [];
    }
    markSchemeByPart[partKey].push({
      markType: parsed.markType,
      description: parsed.description,
    });
  });

  return (
    <div className="bg-[var(--color-bg-card)] rounded-2xl border border-[var(--color-border)] overflow-hidden shadow-[0_0_30px_rgba(59,130,246,0.1)]">
      <div className="bg-[var(--color-bg-elevated)] px-6 py-4 border-b border-[var(--color-border)]">
        <h3 className="font-semibold text-[var(--color-text-primary)]">Solution</h3>
      </div>

      <div className="p-6">
        <div className="text-[var(--color-text-secondary)] leading-relaxed mb-6">
          <MathRenderer content={question.solution} />
        </div>

        {question.markScheme.length > 0 && (
          <div className="mt-6 pt-6 border-t border-[var(--color-border)]">
            <h4 className="text-sm font-semibold text-[var(--color-text-secondary)] mb-4">Mark Scheme</h4>

            {hasMultipleParts ? (
              // Multi-part mark scheme
              <div className="space-y-4">
                {Object.entries(markSchemeByPart).map(([part, marks]) => (
                  <div key={part} className="space-y-2">
                    {part !== 'main' && (
                      <div className="text-sm font-medium text-[var(--color-text-muted)]">Part ({part})</div>
                    )}
                    <div className="space-y-2 pl-0">
                      {marks.map((mark, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-3 text-sm"
                        >
                          {mark.markType && (
                            <span
                              className={`shrink-0 px-2 py-0.5 rounded text-xs font-bold ${getMarkTypeColor(mark.markType)}`}
                            >
                              {mark.markType}
                            </span>
                          )}
                          <span className="text-[var(--color-text-secondary)] flex-1">
                            <MathRenderer content={mark.description} />
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              // Single-part mark scheme
              <div className="space-y-2">
                {markSchemeByPart['main']?.map((mark, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 text-sm"
                  >
                    {mark.markType && (
                      <span
                        className={`shrink-0 px-2 py-0.5 rounded text-xs font-bold ${getMarkTypeColor(mark.markType)}`}
                      >
                        {mark.markType}
                      </span>
                    )}
                    <span className="text-[var(--color-text-secondary)] flex-1">
                      <MathRenderer content={mark.description} />
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Legend */}
            <div className="mt-4 pt-4 border-t border-[var(--color-border)]">
              <div className="flex flex-wrap gap-3 text-xs text-[var(--color-text-muted)]">
                <span className="flex items-center gap-1">
                  <span className="px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-500 dark:text-blue-400 font-bold">M</span>
                  Method
                </span>
                <span className="flex items-center gap-1">
                  <span className="px-1.5 py-0.5 rounded bg-green-500/20 text-green-600 dark:text-green-400 font-bold">A</span>
                  Accuracy
                </span>
                <span className="flex items-center gap-1">
                  <span className="px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-600 dark:text-purple-400 font-bold">B</span>
                  Independent
                </span>
              </div>
            </div>
          </div>
        )}

        {!isMarked && (
          <div className="mt-6 pt-6 border-t border-[var(--color-border)]">
            <p className="text-sm text-[var(--color-text-muted)] mb-4">How did you do?</p>
            <div className="flex gap-3">
              <button
                onClick={() => onMark(true)}
                className="flex-1 py-3 px-4 bg-[var(--color-success-subtle)] text-[var(--color-success)] rounded-xl font-medium border border-[var(--color-success)]/30 transition-all duration-300 hover:bg-[var(--color-success)]/25 hover:border-[var(--color-success)]/50 hover:shadow-[0_0_15px_var(--color-success-glow)] active:scale-[0.98]"
              >
                Got it right
              </button>
              <button
                onClick={() => onMark(false)}
                className="flex-1 py-3 px-4 bg-[var(--color-error-subtle)] text-[var(--color-error)] rounded-xl font-medium border border-[var(--color-error)]/30 transition-all duration-300 hover:bg-[var(--color-error)]/25 hover:border-[var(--color-error)]/50 hover:shadow-[0_0_15px_var(--color-error-glow)] active:scale-[0.98]"
              >
                Got it wrong
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
