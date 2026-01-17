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

// Fallback placeholder questions when no database content exists
function getPlaceholderQuestions(
  level: QualificationLevel,
  subject: Subject,
  examBoard: ExamBoard,
  topicId: string,
  subtopic: string
): { id: number; difficulty: string; marks: number; question: string; solution: string }[] {
  const levelName = level === 'gcse' ? 'GCSE' : 'A-Level';
  const boardName = examBoard.toUpperCase();

  // Generate more realistic placeholder text based on the subtopic
  return [
    {
      id: 1,
      difficulty: 'Easy',
      marks: 2,
      question: `[Sample ${levelName} ${boardName} question on ${subtopic} - Easy difficulty]\n\nThis question tests foundational understanding of ${subtopic}. Real exam-style questions will appear here once content is generated.`,
      solution: `**Method:**\n1. Identify the key concept being tested\n2. Apply the basic principle of ${subtopic}\n3. State your answer clearly\n\n**Answer:** [Solution will be provided with real questions]`,
    },
    {
      id: 2,
      difficulty: 'Medium',
      marks: 4,
      question: `[Sample ${levelName} ${boardName} question on ${subtopic} - Medium difficulty]\n\nThis question requires applying ${subtopic} concepts to a problem. Multi-step working is expected.`,
      solution: `**Method:**\n1. Read the question and identify given information\n2. Plan your approach\n3. Show clear working for each step\n4. Check your answer\n\n**Answer:** [Solution will be provided with real questions]`,
    },
    {
      id: 3,
      difficulty: 'Hard',
      marks: 6,
      question: `[Sample ${levelName} ${boardName} question on ${subtopic} - Hard difficulty]\n\nThis challenging question combines ${subtopic} with other concepts. Extended working and clear reasoning required.`,
      solution: `**Method:**\n1. Analyse what the question is asking\n2. Break down into manageable parts\n3. Apply relevant formulas/principles\n4. Show all working clearly\n5. Evaluate your answer\n\n**Answer:** [Solution will be provided with real questions]`,
    },
  ];
}

export function SampleQuestions({
  level,
  subject,
  examBoard,
  topicId,
  subtopic,
  dbQuestions,
}: SampleQuestionsProps) {
  const [expandedSolutions, setExpandedSolutions] = useState<Set<number | string>>(new Set());

  // Use database questions if available, otherwise fall back to placeholders
  const hasRealQuestions = dbQuestions && dbQuestions.length > 0;

  const questions: { id: string; difficulty: string; marks: number; question: string; solution: string }[] = hasRealQuestions
    ? dbQuestions.map((q) => ({
        id: q.id,
        difficulty: q.difficulty.charAt(0).toUpperCase() + q.difficulty.slice(1),
        marks: q.marks,
        question: q.content,
        solution: q.solution,
      }))
    : getPlaceholderQuestions(level, subject, examBoard, topicId, subtopic).map((q) => ({
        ...q,
        id: String(q.id),
      }));

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

  return (
    <div className="space-y-6">
      {!hasRealQuestions && (
        <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4 mb-4">
          <p className="text-amber-400 text-sm">
            <strong>Preview Mode:</strong> These are placeholder questions. Start practicing to get real AI-generated exam questions!
          </p>
        </div>
      )}

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
