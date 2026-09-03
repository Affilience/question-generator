'use client';

import { useState } from 'react';
import type { Subject, QualificationLevel, ExamBoard } from '@/types';
import type { SampleQuestion } from '@/lib/supabase';

interface SampleQuestionsProps {
  level: QualificationLevel;
  subject: Subject;
  examBoard: ExamBoard;
  topicId: string;
  subtopic: string;
  // Database questions (if available)
  dbQuestions?: SampleQuestion[];
}

/**
 * Sample questions for a public subtopic page.
 *
 * When the database has no questions for this subtopic we render a genuine
 * call to action instead of fabricated ones. The previous fallback published
 * three fake questions reading "[Sample GCSE AQA question on X - Easy
 * difficulty] ... Real exam-style questions will appear here once content is
 * generated", with "[Solution will be provided with real questions]" beneath
 * and an amber "Preview Mode" banner — near-identically across thousands of
 * indexed URLs, which is textbook thin/doorway content.
 */
export function SampleQuestions({
  level,
  subject,
  examBoard,
  topicId,
  subtopic,
  dbQuestions,
}: SampleQuestionsProps) {
  const [expandedSolutions, setExpandedSolutions] = useState<Set<number | string>>(new Set());

  const hasRealQuestions = !!dbQuestions && dbQuestions.length > 0;

  const questions = hasRealQuestions
    ? dbQuestions.map((q) => ({
        id: q.id,
        difficulty: q.difficulty.charAt(0).toUpperCase() + q.difficulty.slice(1),
        marks: q.marks,
        question: q.content,
        solution: q.solution,
      }))
    : [];

  const toggleSolution = (id: number | string) => {
    const newExpanded = new Set(expandedSolutions);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedSolutions(newExpanded);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'easy':
        return 'text-green-400 bg-green-400/10';
      case 'medium':
        return 'text-yellow-400 bg-yellow-400/10';
      case 'hard':
        return 'text-red-400 bg-red-400/10';
      default:
        return 'text-[var(--color-text-muted)] bg-[var(--color-bg-card)]';
    }
  };

  if (!hasRealQuestions) {
    const levelName = level === 'gcse' ? 'GCSE' : 'A-Level';
    return (
      <div className="bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-lg p-6 text-center">
        <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2">
          Practise {subtopic} now
        </h3>
        <p className="text-[var(--color-text-secondary)] mb-5 max-w-prose mx-auto">
          Generate unlimited {examBoard.toUpperCase()} {levelName} questions on{' '}
          {subtopic}, each with a full mark scheme and worked solution.
        </p>
        <a
          href={`/${level}/${subject}/${examBoard}/practice/${topicId}/${encodeURIComponent(subtopic)}`}
          className="inline-block px-6 py-3 rounded-lg bg-[var(--color-accent)] text-white font-medium"
        >
          Start practising
        </a>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {questions.map((q) => (
        <div
          key={q.id}
          className="bg-[var(--color-bg-card)] rounded-xl border border-[var(--color-border)] overflow-hidden"
        >
          {/* Question Header */}
          <div className="px-6 py-4 border-b border-[var(--color-border)] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${getDifficultyColor(q.difficulty)}`}>
                {q.difficulty}
              </span>
              <span className="text-sm text-[var(--color-text-muted)]">
                Question {questions.indexOf(q) + 1}
              </span>
            </div>
            <span className="text-sm font-medium text-[var(--color-text-secondary)]">
              [{q.marks} marks]
            </span>
          </div>

          {/* Question Content */}
          <div className="px-6 py-5">
            <div className="text-[var(--color-text-primary)] leading-relaxed whitespace-pre-wrap">
              {q.question}
            </div>
          </div>

          {/* Solution Toggle */}
          <div className="border-t border-[var(--color-border)]">
            <button
              onClick={() => toggleSolution(q.id)}
              className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-[var(--color-bg-hover)] transition-colors"
            >
              <span className="font-medium text-[var(--color-accent)]">
                {expandedSolutions.has(q.id) ? 'Hide Solution' : 'Show Solution'}
              </span>
              <svg
                className={`w-5 h-5 text-[var(--color-accent)] transition-transform ${expandedSolutions.has(q.id) ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Solution Content - Collapsed by default but indexable */}
            <details open={expandedSolutions.has(q.id)}>
              <summary className="sr-only">Solution for Question {questions.indexOf(q) + 1}</summary>
              <div
                className={`px-6 pb-5 ${expandedSolutions.has(q.id) ? '' : 'hidden'}`}
              >
                <div className="bg-[var(--color-bg-elevated)] rounded-lg p-5 border border-[var(--color-border)]">
                  <h4 className="font-semibold text-[var(--color-text-primary)] mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Solution
                  </h4>
                  <div className="text-[var(--color-text-secondary)] whitespace-pre-wrap leading-relaxed">
                    {q.solution}
                  </div>
                </div>
              </div>
            </details>
          </div>
        </div>
      ))}
    </div>
  );
}
