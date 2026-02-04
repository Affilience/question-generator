'use client';

import { Component, ReactNode, useState } from 'react';
import { Question } from '@/types';
import { MathRenderer } from './MathRenderer';
import { BookmarkButton } from './BookmarkButton';
import { DiagramRenderer } from './DiagramRenderer';
import { PrintableQuestion } from './PrintableQuestion';
import { usePrintQuestion } from '@/hooks/usePrintQuestion';
import { getValidatedMarks, formatMarksDisplay } from '@/lib/markValidation';

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
  const [showPrintPreview, setShowPrintPreview] = useState(false);
  const { printRef, handlePrint } = usePrintQuestion();
  const { marks: validatedMarks } = getValidatedMarks(question);

  const onPrintClick = () => {
    setShowPrintPreview(true);
    // Give React time to render the component
    setTimeout(() => {
      handlePrint();
      setShowPrintPreview(false);
    }, 100);
  };

  return (
    <>
      <div className="bg-[var(--color-bg-card)] rounded-2xl border border-[var(--color-border)] p-8">
        <div className="flex items-center justify-between mb-6">
          <span className="text-sm font-medium text-[var(--color-text-secondary)]">
            Question {questionNumber}
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={onPrintClick}
              className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium flex items-center gap-2 transition-colors text-sm"
              title="Print this question"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
              Print
            </button>
            {userId && subtopic && (
              <BookmarkButton
                userId={userId}
                question={{
                  topicId: question.topicId,
                  subtopic: subtopic,
                  difficulty: question.difficulty,
                  content: question.content,
                  solution: question.solution,
                  marks: validatedMarks,
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
        <div className="mt-6 w-full max-w-full overflow-hidden">
          <ErrorBoundary fallback={null}>
            <DiagramRenderer
              spec={question.diagram}
              maxWidth={450}
              maxHeight={350}
              className="bg-[var(--color-diagram-bg)] rounded-lg p-4 mx-auto"
            />
          </ErrorBoundary>
        </div>
      )}
    </div>

    {/* Hidden printable component */}
    {showPrintPreview && (
      <div style={{ position: 'absolute', left: '-9999px', top: '-9999px' }}>
        <PrintableQuestion
          ref={printRef}
          question={question}
          questionNumber={questionNumber}
          title={`${subtopic || 'Practice'} Questions`}
          subtitle={`${question.difficulty} - ${formatMarksDisplay(validatedMarks)}`}
        />
      </div>
    )}
  </>
  );
}
