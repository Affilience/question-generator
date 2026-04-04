'use client';

import { Component, ReactNode, useState } from 'react';
import { Question } from '@/types';
import { MathRenderer } from './MathRenderer';
import { BookmarkButton } from './BookmarkButton';
import { ResponsiveDiagramRenderer } from './ResponsiveDiagramRenderer';
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
      <div className="bg-white dark:bg-slate-800 rounded-2xl border border-gray-200 dark:border-slate-600 p-4 sm:p-6 lg:p-8 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 gap-3">
          <span className="text-sm font-medium text-gray-600 dark:text-slate-300">
            Question {questionNumber}
          </span>
          <div className="flex items-center gap-2 sm:gap-3 self-end sm:self-auto">
            <button
              onClick={onPrintClick}
              className="px-2 sm:px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium flex items-center gap-1 sm:gap-2 transition-colors text-xs sm:text-sm shrink-0"
              title="Print this question"
            >
              <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
              <span className="hidden sm:inline">Print</span>
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

        <div className="text-base sm:text-lg text-gray-900 dark:text-white leading-relaxed">
          <MathRenderer content={question.content} />
        </div>

        {question.diagram && (
          <div className="mt-4 sm:mt-6 w-full max-w-full overflow-hidden">
            <ErrorBoundary 
              fallback={
                <div className="flex flex-col items-center justify-center p-6 bg-gray-50 dark:bg-slate-700 border border-gray-200 dark:border-slate-600 rounded-lg min-h-[200px]">
                  <svg className="w-8 h-8 sm:w-12 sm:h-12 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm text-gray-500 dark:text-slate-400 text-center">Diagram could not be rendered</span>
                </div>
              }
            >
              <ResponsiveDiagramRenderer
                spec={question.diagram}
                className="bg-gray-50 dark:bg-slate-700 rounded-lg p-3 sm:p-4 mx-auto"
                darkMode={false}
                interactive={false}
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
