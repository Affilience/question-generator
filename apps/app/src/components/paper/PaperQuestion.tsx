'use client';

import { useState } from 'react';
import { GeneratedQuestion } from '@/types';
import { MarkBadge } from '@/components/ui/MarkBadge';
import { MathRenderer } from '@/components/MathRenderer';

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

interface PaperQuestionProps {
  question: GeneratedQuestion;
  questionNumber: string;
  showMarks?: boolean;
  showSolution?: boolean;
  answer?: string;
  onAnswerChange?: (answer: string) => void;
  disabled?: boolean;
  isFlagged?: boolean;
  onToggleFlag?: () => void;
  className?: string;
}

/**
 * Sophisticated question display component for exam papers
 * Supports:
 * - Question numbering with sub-parts
 * - Marks display
 * - Answer input areas
 * - Solution reveal
 * - Flagging for review
 */
export function PaperQuestion({
  question,
  questionNumber,
  showMarks = true,
  showSolution = false,
  answer = '',
  onAnswerChange,
  disabled = false,
  isFlagged = false,
  onToggleFlag,
  className = '',
}: PaperQuestionProps) {
  const [localAnswer, setLocalAnswer] = useState(answer);

  const handleAnswerChange = (value: string) => {
    setLocalAnswer(value);
    onAnswerChange?.(value);
  };

  // Format content with command words bolded
  const formatContent = (content: string): string => {
    const commandWords = [
      'Calculate',
      'Determine',
      'Explain',
      'Describe',
      'State',
      'Give',
      'Define',
      'Compare',
      'Contrast',
      'Evaluate',
      'Justify',
      'Analyse',
      'Analyze',
      'Suggest',
      'Discuss',
      'Outline',
      'Sketch',
      'Draw',
      'Plot',
      'Show that',
      'Prove',
      'Verify',
      'Deduce',
    ];

    let formatted = content;
    commandWords.forEach((word) => {
      const regex = new RegExp(`\\b(${word})\\b`, 'gi');
      formatted = formatted.replace(regex, '**$1**');
    });

    return formatted;
  };

  // Get difficulty indicator color
  const getDifficultyColor = () => {
    switch (question.difficulty) {
      case 'easy':
        return 'bg-green-500';
      case 'hard':
        return 'bg-red-500';
      default:
        return 'bg-yellow-500';
    }
  };

  // Get question type badge
  const getQuestionTypeBadge = () => {
    const typeLabels: Record<string, string> = {
      'multiple-choice': 'MC',
      'short-answer': 'SA',
      'calculation': 'CALC',
      'explain': 'EXP',
      'extended': 'EXT',
      'data-analysis': 'DATA',
      'graph': 'GRAPH',
      'compare': 'COMP',
    };

    return typeLabels[question.questionType] || question.questionType.toUpperCase();
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Question Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-3">
          {/* Question Number */}
          <div className="flex-shrink-0">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--color-accent)] text-white font-bold text-lg">
              {questionNumber}
            </span>
          </div>

          {/* Question Content */}
          <div className="flex-1 min-w-0">
            {/* Meta badges */}
            <div className="flex items-center gap-2 mb-2">
              {showMarks && <MarkBadge marks={question.marks} size="sm" />}
              <span
                className={`w-2 h-2 rounded-full ${getDifficultyColor()}`}
                title={`${question.difficulty} difficulty`}
              />
              <span className="text-xs px-2 py-0.5 rounded bg-[var(--color-bg-elevated)] text-[var(--color-text-muted)]">
                {getQuestionTypeBadge()}
              </span>
            </div>

            {/* Question text */}
            <div className="text-[var(--color-text-primary)] leading-relaxed">
              <QuestionContent content={question.content} />
            </div>
          </div>
        </div>

        {/* Flag button */}
        {onToggleFlag && (
          <button
            onClick={onToggleFlag}
            className={`p-2 rounded-lg transition-colors ${
              isFlagged
                ? 'bg-orange-500/20 text-orange-400'
                : 'bg-[var(--color-bg-elevated)] text-[var(--color-text-muted)] hover:text-orange-400'
            }`}
            title={isFlagged ? 'Unflag question' : 'Flag for review'}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z" />
            </svg>
          </button>
        )}
      </div>

      {/* Diagram (if present) */}
      {question.diagram && (
        <div className="p-4 bg-[var(--color-bg-primary)] rounded-lg border border-[var(--color-border)]">
          <p className="text-sm text-[var(--color-text-muted)] mb-2">Diagram:</p>
          <div className="text-center text-[var(--color-text-secondary)]">
            [Diagram with {question.diagram.elements?.length || 0} elements]
          </div>
        </div>
      )}

      {/* Answer Area */}
      {onAnswerChange && (
        <div className="space-y-2">
          <label className="block text-sm font-medium text-[var(--color-text-secondary)]">
            Your Answer
          </label>

          {question.questionType === 'multiple-choice' ? (
            <MultipleChoiceAnswer
              value={localAnswer}
              onChange={handleAnswerChange}
              disabled={disabled}
            />
          ) : (
            <textarea
              value={localAnswer}
              onChange={(e) => handleAnswerChange(e.target.value)}
              disabled={disabled}
              rows={getAnswerRowsForMarks(question.marks)}
              className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/50 disabled:opacity-50 resize-none font-mono"
              placeholder={getPlaceholderForType(question.questionType)}
            />
          )}

          {/* Space indicator */}
          <p className="text-xs text-[var(--color-text-muted)]">
            Approximately {getAnswerLinesForMarks(question.marks)} lines expected
          </p>
        </div>
      )}

      {/* Solution */}
      {showSolution && (
        <PaperSolutionDisplay question={question} />
      )}
    </div>
  );
}

/**
 * Solution display component with improved mark scheme rendering
 * Features:
 * - MathRenderer for LaTeX in solutions and mark schemes
 * - Color-coded mark type badges (M, A, B, SC)
 * - Collapsible sections for long mark schemes
 * - Multi-part grouping
 */
function PaperSolutionDisplay({ question }: { question: GeneratedQuestion }) {
  const [isMarkSchemeExpanded, setIsMarkSchemeExpanded] = useState(true);

  // Group mark scheme by parts if multi-part question
  const markSchemeByPart: Record<string, Array<{ markType: string; description: string }>> = {};
  let hasMultipleParts = false;
  const markTypesUsed = new Set<string>();

  question.markScheme.forEach((point) => {
    const parsed = parseMarkSchemePoint(point);
    const partKey = parsed.part || 'main';
    if (parsed.part) hasMultipleParts = true;
    if (parsed.markType) {
      markTypesUsed.add(parsed.markType.charAt(0)); // Get first letter (M, A, B, S)
    }

    if (!markSchemeByPart[partKey]) {
      markSchemeByPart[partKey] = [];
    }
    markSchemeByPart[partKey].push({
      markType: parsed.markType,
      description: parsed.description,
    });
  });

  const isLongMarkScheme = question.markScheme.length > 6;

  return (
    <div className="mt-6 pt-6 border-t border-[var(--color-border)] space-y-4">
      {/* Model Solution */}
      <div>
        <h4 className="font-bold text-[var(--color-text-primary)] mb-2 flex items-center gap-2">
          <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Model Solution
        </h4>
        <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 text-[var(--color-text-primary)]">
          <MathRenderer content={question.solution} />
        </div>
      </div>

      {/* Mark Scheme */}
      {question.markScheme.length > 0 && (
        <div>
          <button
            onClick={() => setIsMarkSchemeExpanded(!isMarkSchemeExpanded)}
            className="w-full flex items-center justify-between font-medium text-[var(--color-text-primary)] mb-2 hover:text-[var(--color-accent)] transition-colors"
          >
            <span className="flex items-center gap-2">
              Mark Scheme
              <span className="text-xs text-[var(--color-text-muted)] font-normal">
                ({question.markScheme.length} {question.markScheme.length === 1 ? 'point' : 'points'})
              </span>
            </span>
            <svg
              className={`w-5 h-5 transition-transform ${isMarkSchemeExpanded ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isMarkSchemeExpanded && (
            <div className={`space-y-3 ${isLongMarkScheme ? 'max-h-96 overflow-y-auto pr-2' : ''}`}>
              {hasMultipleParts ? (
                // Multi-part mark scheme
                Object.entries(markSchemeByPart).map(([part, marks]) => (
                  <div key={part} className="space-y-2">
                    {part !== 'main' && (
                      <div className="text-sm font-medium text-[var(--color-text-muted)] mt-3 first:mt-0">
                        Part ({part})
                      </div>
                    )}
                    {marks.map((mark, index) => (
                      <MarkSchemePoint key={index} mark={mark} />
                    ))}
                  </div>
                ))
              ) : (
                // Single-part mark scheme
                markSchemeByPart['main']?.map((mark, index) => (
                  <MarkSchemePoint key={index} mark={mark} />
                ))
              )}

              {/* Legend */}
              <div className="mt-4 pt-3 border-t border-[var(--color-border)]">
                <div className="flex flex-wrap gap-3 text-xs text-[var(--color-text-muted)]">
                  {markTypesUsed.has('M') && (
                    <span className="flex items-center gap-1">
                      <span className="px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-500 dark:text-blue-400 font-bold">M</span>
                      Method
                    </span>
                  )}
                  {markTypesUsed.has('A') && (
                    <span className="flex items-center gap-1">
                      <span className="px-1.5 py-0.5 rounded bg-green-500/20 text-green-600 dark:text-green-400 font-bold">A</span>
                      Accuracy
                    </span>
                  )}
                  {markTypesUsed.has('B') && (
                    <span className="flex items-center gap-1">
                      <span className="px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-600 dark:text-purple-400 font-bold">B</span>
                      Independent
                    </span>
                  )}
                  {markTypesUsed.has('S') && (
                    <span className="flex items-center gap-1">
                      <span className="px-1.5 py-0.5 rounded bg-orange-500/20 text-orange-600 dark:text-orange-400 font-bold">SC</span>
                      Special Case
                    </span>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

/**
 * Individual mark scheme point with color-coded badge
 */
function MarkSchemePoint({ mark }: { mark: { markType: string; description: string } }) {
  return (
    <div className="flex items-start gap-3 text-sm bg-[var(--color-bg-primary)] rounded-lg px-4 py-2.5">
      {mark.markType ? (
        <span
          className={`shrink-0 px-2 py-0.5 rounded text-xs font-bold ${getMarkTypeColor(mark.markType)}`}
        >
          {mark.markType}
        </span>
      ) : (
        <span className="shrink-0 w-6 h-6 rounded-full bg-[var(--color-bg-hover)] text-[var(--color-text-muted)] flex items-center justify-center text-xs">
          •
        </span>
      )}
      <span className="text-[var(--color-text-secondary)] flex-1">
        <MathRenderer content={mark.description} />
      </span>
    </div>
  );
}

/**
 * Renders question content with proper formatting
 * Uses MathRenderer for LaTeX support while preserving bold command words
 */
function QuestionContent({ content }: { content: string }) {
  return <MathRenderer content={content} />;
}

/**
 * Multiple choice answer component
 */
function MultipleChoiceAnswer({
  value,
  onChange,
  disabled,
}: {
  value: string;
  onChange: (value: string) => void;
  disabled: boolean;
}) {
  const options = ['A', 'B', 'C', 'D'];

  return (
    <div className="flex gap-3">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => onChange(option)}
          disabled={disabled}
          className={`w-12 h-12 rounded-lg font-bold text-lg transition-all ${
            value === option
              ? 'bg-[var(--color-accent)] text-white'
              : 'bg-[var(--color-bg-elevated)] text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-tertiary)]'
          } disabled:opacity-50`}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

/**
 * Get number of textarea rows based on mark allocation
 */
function getAnswerRowsForMarks(marks: number): number {
  if (marks <= 2) return 3;
  if (marks <= 4) return 5;
  if (marks <= 6) return 8;
  return 12;
}

/**
 * Get expected answer lines based on mark allocation
 */
function getAnswerLinesForMarks(marks: number): string {
  if (marks <= 2) return '2-3';
  if (marks <= 4) return '4-6';
  if (marks <= 6) return '8-10';
  return '12+';
}

/**
 * Get placeholder text based on question type
 */
function getPlaceholderForType(type: string): string {
  switch (type) {
    case 'calculation':
      return 'Show your working clearly...';
    case 'explain':
      return 'Explain your answer in detail...';
    case 'extended':
      return 'Write your extended response here...';
    case 'compare':
      return 'Compare and contrast, explaining similarities and differences...';
    case 'data-analysis':
      return 'Analyse the data and explain your findings...';
    case 'graph':
      return 'Describe your graph or provide working...';
    default:
      return 'Enter your answer here...';
  }
}

/**
 * Compact version of paper question for overview/list views
 */
export function PaperQuestionCompact({
  question,
  questionNumber,
  showMarks = true,
  isAnswered = false,
  isFlagged = false,
  onClick,
}: {
  question: GeneratedQuestion;
  questionNumber: string;
  showMarks?: boolean;
  isAnswered?: boolean;
  isFlagged?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="w-full text-left p-4 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-secondary)] hover:bg-[var(--color-bg-tertiary)] transition-colors"
    >
      <div className="flex items-start gap-3">
        <span
          className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold ${
            isAnswered
              ? 'bg-green-500/20 text-green-400'
              : 'bg-[var(--color-bg-elevated)] text-[var(--color-text-secondary)]'
          }`}
        >
          {questionNumber}
        </span>

        <div className="flex-1 min-w-0">
          <p className="text-[var(--color-text-primary)] line-clamp-2">{question.content}</p>
          <div className="flex items-center gap-2 mt-2">
            {showMarks && (
              <span className="text-xs text-[var(--color-text-muted)]">
                [{question.marks} {question.marks === 1 ? 'mark' : 'marks'}]
              </span>
            )}
            <span className="text-xs text-[var(--color-text-muted)]">
              {question.subtopic}
            </span>
          </div>
        </div>

        {isFlagged && (
          <span className="flex-shrink-0 w-3 h-3 bg-orange-500 rounded-full" />
        )}
      </div>
    </button>
  );
}
