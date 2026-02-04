'use client';

import { useState, useEffect, Component, ReactNode } from 'react';
import { Question, Difficulty } from '@/types';
import { DiagramSpec } from '@/types/diagram';
import { MathRenderer } from '../MathRenderer';
import { BookmarkButton } from '../BookmarkButton';
import { DiagramRenderer } from '../DiagramRenderer';
import { getValidatedMarks, formatMarksDisplay } from '@/lib/markValidation';

// Error boundary for diagram rendering
class DiagramErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) return null;
    return this.props.children;
  }
}

interface QuestionSlideProps {
  question: Question | null;
  streamedContent?: string;
  isStreaming?: boolean;
  questionNumber: number;
  onMark: (correct: boolean) => void;
  onNextQuestion: () => void;
  isMarked: boolean;
  difficulty: Difficulty;
  onDifficultyChange: (d: Difficulty) => void;
  topicName: string;
  subtopic: string;
  userId?: string | null;
  isActive?: boolean;
}

// Parse mark scheme point
function parseMarkSchemePoint(point: string): { markType: string; description: string } {
  // Match patterns like "M1:", "(a) M1:", "A1:", "B1:", "SC1:"
  // Group 1 (non-capturing): optional part label like (a)
  // Group 2: mark type (M1, A1, B1, SC1)
  // Group 3: description
  const match = point.match(/^(?:\([a-z]\)\s*)?(M\d+|A\d+|B\d+|SC\d*):?\s*(.*)$/i);
  if (match) {
    return { markType: match[1].toUpperCase(), description: match[2] };
  }
  return { markType: '', description: point };
}

function getMarkTypeColor(markType: string): string {
  if (markType.startsWith('M')) return 'bg-blue-500/20 text-blue-400';
  if (markType.startsWith('A')) return 'bg-green-500/20 text-green-400';
  if (markType.startsWith('B')) return 'bg-purple-500/20 text-purple-400';
  if (markType.startsWith('SC')) return 'bg-orange-500/20 text-orange-400';
  return 'bg-white/10 text-white/60';
}


const difficultyConfig = {
  easy: { label: 'Easy', color: 'bg-green-500/20 text-green-400 border-green-500/30' },
  medium: { label: 'Medium', color: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' },
  hard: { label: 'Hard', color: 'bg-red-500/20 text-red-400 border-red-500/30' },
};

export function QuestionSlide({
  question,
  streamedContent,
  isStreaming,
  questionNumber,
  onMark,
  onNextQuestion,
  isMarked,
  difficulty,
  onDifficultyChange,
  topicName,
  subtopic,
  userId,
  isActive = true,
}: QuestionSlideProps) {
  const [showSolution, setShowSolution] = useState(false);

  // Reset solution visibility when question changes
  useEffect(() => {
    setShowSolution(false);
  }, [question?.id]);

  // Determine what content to show
  // States:
  // 1. question exists → show question content
  // 2. isStreaming && streamedContent → show streaming content (typing animation)
  // 3. isStreaming && !streamedContent → show "Generating question..."
  // 4. !question && !isStreaming → show "Loading..." (user scrolled here, generation starting)
  const isShowingStreamedContent = isStreaming && !question;
  const isWaitingToGenerate = !question && !isStreaming;
  const contentToShow: string = isShowingStreamedContent
    ? (streamedContent || '')
    : (question?.content || '');

  // Loading state - either generating with no content yet, or waiting for generation to start
  if ((isShowingStreamedContent && !streamedContent) || isWaitingToGenerate) {
    return (
      <div className="h-dvh w-full snap-start snap-always flex flex-col bg-[var(--color-bg-page)] safe-area-inset-top safe-area-inset-bottom">
        {/* Header placeholder */}
        <div className="shrink-0 px-4 pt-16 pb-2">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-medium text-[var(--color-text-muted)] uppercase tracking-wide">
              Q{questionNumber}
            </span>
          </div>
          {/* Difficulty selector - min 44px touch targets */}
          <div className="flex gap-2">
            {(['easy', 'medium', 'hard'] as Difficulty[]).map((d) => (
              <button
                key={d}
                onClick={() => onDifficultyChange(d)}
                className={`flex-1 py-3 text-xs font-medium rounded-xl border transition-all tap-highlight ${
                  difficulty === d
                    ? difficultyConfig[d].color
                    : 'bg-transparent border-[var(--color-border)] text-[var(--color-text-muted)]'
                }`}
              >
                {difficultyConfig[d].label}
              </button>
            ))}
          </div>
        </div>

        {/* Loading indicator */}
        <div className="flex-1 flex items-center justify-center p-6">
          <div className="text-center">
            <div className="flex justify-center gap-1.5 mb-4">
              <span className="w-2.5 h-2.5 bg-[var(--color-accent)] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
              <span className="w-2.5 h-2.5 bg-[var(--color-accent)] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
              <span className="w-2.5 h-2.5 bg-[var(--color-accent)] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
            </div>
            <p className="text-[var(--color-text-secondary)] text-sm">
              {isStreaming ? 'Generating question...' : 'Loading...'}
            </p>
          </div>
        </div>
      </div>
    );
  }

  // No question and not streaming - shouldn't happen but handle gracefully
  if (!question && !streamedContent) return null;

  return (
    <div className="h-dvh w-full snap-start snap-always flex flex-col bg-[var(--color-bg-page)] safe-area-inset-top safe-area-inset-bottom relative overflow-hidden">
      {/* Header */}
      <div className="shrink-0 px-4 pt-16 pb-2">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-[var(--color-text-muted)] uppercase tracking-wide">
              Q{questionNumber}
            </span>
            {(isShowingStreamedContent) && (
              <>
                <span className="text-[var(--color-text-muted)]">·</span>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 bg-[var(--color-success)] rounded-full animate-pulse" />
                  <span className="text-xs text-[var(--color-success)]">
                    {isShowingStreamedContent ? 'Generating' : 'Loading'}
                  </span>
                </div>
              </>
            )}
          </div>
          <div className="flex items-center gap-2">
            {question && userId && (
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
            {question && (
              <span className="text-sm font-semibold text-[var(--color-accent)]">
                {formatMarksDisplay(getValidatedMarks(question).marks)}
              </span>
            )}
          </div>
        </div>

        {/* Difficulty selector - min 44px touch targets */}
        <div className="flex gap-2">
          {(['easy', 'medium', 'hard'] as Difficulty[]).map((d) => (
            <button
              key={d}
              onClick={() => onDifficultyChange(d)}
              disabled={isShowingStreamedContent}
              className={`flex-1 py-3 text-xs font-medium rounded-xl border transition-all tap-highlight ${
                difficulty === d
                  ? difficultyConfig[d].color
                  : 'bg-transparent border-[var(--color-border)] text-[var(--color-text-muted)]'
              } ${isShowingStreamedContent ? 'opacity-50' : ''}`}
            >
              {difficultyConfig[d].label}
            </button>
          ))}
        </div>
      </div>

      {/* Question content - scrollable if long */}
      <div className="flex-1 overflow-y-auto px-4 py-6">
        <div className="text-lg leading-relaxed text-[var(--color-text-primary)]">
          <MathRenderer content={contentToShow} isStreaming={isShowingStreamedContent} />
          {/* Typing cursor */}
          {(isShowingStreamedContent) && (
            <span className="inline-block w-0.5 h-5 bg-[var(--color-accent)] ml-0.5 animate-pulse" />
          )}
        </div>

        {/* Diagram - render if available and not still streaming */}
        {question?.diagram && !isShowingStreamedContent && (
          <div className="mt-6 w-full max-w-full overflow-hidden px-2">
            <div className="bg-white rounded-lg p-4 mx-auto" style={{ minHeight: '280px' }}>
              <DiagramErrorBoundary>
                <DiagramRenderer
                  spec={question.diagram}
                  maxWidth={340}
                  maxHeight={260}
                  className="w-full h-full flex items-center justify-center"
                />
              </DiagramErrorBoundary>
            </div>
          </div>
        )}
      </div>

      {/* Bottom action area */}
      <div className="shrink-0 px-4 pb-6 pt-2 bg-gradient-to-t from-[var(--color-bg-page)] via-[var(--color-bg-page)] to-transparent">
        {isShowingStreamedContent ? (
          // Still loading - show disabled button
          <button
            disabled
            className="w-full py-4 bg-[var(--color-bg-card)] text-[var(--color-text-muted)] rounded-2xl font-semibold text-lg opacity-50"
          >
            Loading...
          </button>
        ) : !showSolution ? (
          <button
            onClick={() => setShowSolution(true)}
            className="w-full py-4 bg-[var(--color-accent)] text-white rounded-2xl font-semibold text-lg transition-all active:scale-[0.98] tap-highlight"
          >
            Show Solution
          </button>
        ) : !isMarked ? (
          <div className="space-y-3">
            <p className="text-center text-sm text-[var(--color-text-muted)]">Did you get it right?</p>
            <div className="flex gap-3">
              <button
                onClick={() => onMark(true)}
                className="flex-1 py-4 bg-[var(--color-success)]/20 text-[var(--color-success)] rounded-2xl font-semibold border border-[var(--color-success)]/30 transition-all active:scale-[0.98] tap-highlight"
              >
                Yes
              </button>
              <button
                onClick={() => onMark(false)}
                className="flex-1 py-4 bg-[var(--color-error)]/20 text-[var(--color-error)] rounded-2xl font-semibold border border-[var(--color-error)]/30 transition-all active:scale-[0.98] tap-highlight"
              >
                No
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center">
            <p className="text-sm text-[var(--color-text-muted)] mb-2">Swipe up for next question</p>
            <div className="flex justify-center">
              <svg className="w-6 h-6 text-[var(--color-text-muted)] animate-swipe-hint" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            </div>
          </div>
        )}
      </div>

      {/* Solution overlay */}
      {showSolution && question && (
        <div className="absolute inset-0 bg-[var(--color-bg-page)]/98 backdrop-blur-sm animate-slide-up overflow-hidden flex flex-col">
          {/* Solution header */}
          <div className="shrink-0 px-4 pt-16 pb-4 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">Solution</h3>
            <button
              onClick={() => setShowSolution(false)}
              className="w-11 h-11 flex items-center justify-center rounded-full bg-[var(--color-bg-card)] border border-[var(--color-border)] tap-highlight"
            >
              <svg className="w-5 h-5 text-[var(--color-text-secondary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Solution content - scrollable */}
          <div className="flex-1 overflow-y-auto px-4 pb-32">
            <div className="text-[var(--color-text-secondary)] leading-relaxed mb-6">
              <MathRenderer content={question.solution} />
            </div>

            {/* Solution diagram (for "draw a diagram" questions) */}
            {question.solutionDiagram && (
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-[var(--color-text-secondary)] mb-3">Expected Diagram</h4>
                <div className="flex justify-center">
                  <DiagramErrorBoundary>
                    <DiagramRenderer
                      spec={question.solutionDiagram}
                      maxWidth={400}
                      maxHeight={320}
                      className="bg-[var(--color-diagram-bg)] rounded-lg p-4"
                    />
                  </DiagramErrorBoundary>
                </div>
              </div>
            )}

            {/* Mark scheme */}
            {question.markScheme.length > 0 && (
              <div className="mt-6 pt-6 border-t border-[var(--color-border)]">
                <h4 className="text-sm font-semibold text-[var(--color-text-secondary)] mb-3">Mark Scheme</h4>
                <div className="space-y-3">
                  {question.markScheme.map((point, index) => {
                    const { markType, description } = parseMarkSchemePoint(point);
                    return (
                      <div key={index} className="flex items-start gap-2 text-sm">
                        {markType && (
                          <span className={`shrink-0 px-2 py-0.5 rounded text-xs font-bold ${getMarkTypeColor(markType)}`}>
                            {markType}
                          </span>
                        )}
                        <div className="text-[var(--color-text-secondary)] flex-1 min-w-0 overflow-x-auto">
                          <MathRenderer content={description} />
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Legend */}
                <div className="mt-4 pt-4 border-t border-[var(--color-border)]">
                  <div className="flex flex-wrap gap-3 text-xs text-[var(--color-text-muted)]">
                    <span className="flex items-center gap-1">
                      <span className="px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-400 font-bold">M</span>
                      Method
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="px-1.5 py-0.5 rounded bg-green-500/20 text-green-400 font-bold">A</span>
                      Accuracy
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-400 font-bold">B</span>
                      Independent
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Fixed bottom buttons */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[var(--color-bg-page)] via-[var(--color-bg-page)] to-transparent safe-area-inset-bottom">
            {!isMarked ? (
              <div className="space-y-3">
                <p className="text-center text-sm text-[var(--color-text-muted)]">Did you get it right?</p>
                <div className="flex gap-3">
                  <button
                    onClick={() => onMark(true)}
                    className="flex-1 py-4 bg-[var(--color-success)]/20 text-[var(--color-success)] rounded-2xl font-semibold border border-[var(--color-success)]/30 transition-all active:scale-[0.98] tap-highlight"
                  >
                    Yes
                  </button>
                  <button
                    onClick={() => onMark(false)}
                    className="flex-1 py-4 bg-[var(--color-error)]/20 text-[var(--color-error)] rounded-2xl font-semibold border border-[var(--color-error)]/30 transition-all active:scale-[0.98] tap-highlight"
                  >
                    No
                  </button>
                </div>
              </div>
            ) : (
              <button
                onClick={() => {
                  setShowSolution(false);
                  onNextQuestion();
                }}
                className="w-full py-4 bg-[var(--color-accent)] text-white rounded-2xl font-semibold text-lg transition-all active:scale-[0.98] tap-highlight"
              >
                Next Question
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
