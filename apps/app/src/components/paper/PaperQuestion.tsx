'use client';

import { useState } from 'react';
import { GeneratedQuestion } from '@/types';
import { MarkBadge } from '@/components/ui/MarkBadge';

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
        <div className="mt-6 pt-6 border-t border-[var(--color-border)] space-y-4">
          <div>
            <h4 className="font-bold text-[var(--color-text-primary)] mb-2 flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Model Solution
            </h4>
            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 text-[var(--color-text-primary)] whitespace-pre-wrap">
              {question.solution}
            </div>
          </div>

          <div>
            <h4 className="font-medium text-[var(--color-text-primary)] mb-2">Mark Scheme</h4>
            <ul className="space-y-2">
              {question.markScheme.map((point, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-[var(--color-text-secondary)] bg-[var(--color-bg-primary)] rounded-lg px-4 py-2"
                >
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--color-accent)]/20 text-[var(--color-accent)] flex items-center justify-center text-sm font-medium">
                    {index + 1}
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

/**
 * Renders question content with proper formatting
 */
function QuestionContent({ content }: { content: string }) {
  // Simple markdown-like rendering for bold text
  const parts = content.split(/(\*\*.*?\*\*)/g);

  return (
    <span>
      {parts.map((part, index) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return (
            <strong key={index} className="font-bold">
              {part.slice(2, -2)}
            </strong>
          );
        }
        return <span key={index}>{part}</span>;
      })}
    </span>
  );
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
