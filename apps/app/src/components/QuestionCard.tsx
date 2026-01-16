'use client';

import { Component, ReactNode } from 'react';
import { Question } from '@/types';
import { MathRenderer } from './MathRenderer';
import { BookmarkButton } from './BookmarkButton';
import { DiagramRenderer } from './DiagramRenderer';

// Error boundary to gracefully handle diagram rendering failures
class ErrorBoundary extends Component<{ children: ReactNode; fallback: ReactNode }, { hasError: boolean }> {
  constructor(props: { children: ReactNode; fallback: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) return this.props.fallback;
    return this.props.children;
  }
}

interface QuestionCardProps {
  question: Question;
  questionNumber: number;
  userId?: string | null;
  subtopic?: string;
}

export function QuestionCard({ question, questionNumber, userId, subtopic }: QuestionCardProps) {
  return (
    <div className="bg-[var(--color-bg-card)] rounded-2xl border border-[var(--color-border)] p-8">
      <div className="flex items-center justify-between mb-6">
        <span className="text-sm font-medium text-[var(--color-text-secondary)]">
          Question {questionNumber}
        </span>
        <div className="flex items-center gap-3">
          {userId && subtopic && (
            <BookmarkButton
              userId={userId}
              question={{
                topicId: question.topicId,
                subtopic: subtopic,
                difficulty: question.difficulty,
                content: question.content,
                solution: question.solution,
                marks: question.marks,
                markScheme: question.markScheme,
              }}
            />
          )}
        </div>
      </div>

      <div className="text-lg text-[var(--color-text-primary)] leading-relaxed">
        <MathRenderer content={question.content} />
      </div>

      {question.diagram && (
        <div className="mt-6 flex justify-center">
          <ErrorBoundary fallback={null}>
            <DiagramRenderer
              spec={question.diagram}
              maxWidth={450}
              maxHeight={350}
              className="bg-[var(--color-diagram-bg)] rounded-lg p-4"
            />
          </ErrorBoundary>
        </div>
      )}
    </div>
  );
}
