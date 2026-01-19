'use client';

import { useEffect, useState, useRef } from 'react';
import { Question } from '@/types';
import { MathRenderer } from './MathRenderer';
import { BookmarkButton } from './BookmarkButton';

interface StreamingQuestionCardProps {
  question: Question | null;
  streamedContent: string;
  isStreaming: boolean;
  questionNumber: number;
  userId?: string | null;
  subtopic?: string;
  error?: string | null;
  upgradeNeeded?: boolean;
  onRetry?: () => void;
}

export function StreamingQuestionCard({
  question,
  streamedContent,
  isStreaming,
  questionNumber,
  userId,
  subtopic,
  error,
  upgradeNeeded,
  onRetry,
}: StreamingQuestionCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // The content to display - use streamed content while streaming, final when done
  const displayContent = isStreaming ? streamedContent : (question?.content || streamedContent);

  // Animate card entrance
  useEffect(() => {
    if (displayContent && !isVisible) {
      requestAnimationFrame(() => {
        setIsVisible(true);
      });
    }
  }, [displayContent, isVisible]);

  // Reset visibility when new question starts
  useEffect(() => {
    if (isStreaming && !streamedContent) {
      setIsVisible(false);
    }
  }, [isStreaming, streamedContent]);

  // Show waiting state before any content arrives
  if (!displayContent && isStreaming) {
    return (
      <div className="bg-[var(--color-bg-card)] rounded-xl border border-[var(--color-border)] p-6 sm:p-8 card-glow-subtle animate-fade-in">
        <div className="flex items-center justify-between mb-6">
          <span className="text-sm font-medium text-[var(--color-text-secondary)] inline-flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center text-xs text-[var(--color-accent)] font-bold">
              {questionNumber}
            </span>
            Question
          </span>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full animate-pulse" />
            <div className="w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full animate-pulse [animation-delay:150ms]" />
            <div className="w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full animate-pulse [animation-delay:300ms]" />
          </div>
        </div>
        <div className="text-base sm:text-lg text-[var(--color-text-primary)] leading-relaxed min-h-[60px]">
          <span className="text-[var(--color-text-secondary)]">Generating question...</span>
        </div>
      </div>
    );
  }

  // Show error state
  if (error && !isStreaming) {
    return (
      <div className="bg-[var(--color-bg-card)] rounded-xl border border-red-500/30 p-6 sm:p-8 animate-fade-in">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-medium text-[var(--color-text-secondary)] inline-flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center text-xs text-red-500 font-bold">
              {questionNumber}
            </span>
            Question
          </span>
        </div>

        <div className="text-center py-4">
          <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-red-500/10 flex items-center justify-center">
            <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>

          <p className="text-[var(--color-text-primary)] font-medium mb-1">
            {upgradeNeeded ? 'Daily limit reached' : 'Failed to generate question'}
          </p>
          <p className="text-sm text-[var(--color-text-secondary)] mb-4">
            {upgradeNeeded
              ? 'Upgrade your plan for unlimited questions'
              : error
            }
          </p>

          <div className="flex gap-3 justify-center">
            {upgradeNeeded ? (
              <a
                href="/pricing"
                className="px-4 py-2 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white text-sm font-medium rounded-lg transition-colors"
              >
                View plans
              </a>
            ) : onRetry ? (
              <button
                onClick={onRetry}
                className="px-4 py-2 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white text-sm font-medium rounded-lg transition-colors inline-flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Try again
              </button>
            ) : null}
          </div>
        </div>
      </div>
    );
  }

  // No content and not streaming - nothing to show
  if (!displayContent && !question) return null;

  const showCursor = isStreaming || !question;
  const showBookmark = !isStreaming && question && userId && subtopic;

  return (
    <div
      ref={cardRef}
      className={`bg-[var(--color-bg-card)] rounded-xl border border-[var(--color-border)] p-6 sm:p-8 card-glow-subtle transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'
      }`}
    >
      <div className="flex items-center justify-between mb-6">
        <span className="text-sm font-medium text-[var(--color-text-secondary)] inline-flex items-center gap-2">
          <span className={`w-6 h-6 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center text-xs text-[var(--color-accent)] font-bold transition-transform duration-500 ${
            isVisible ? 'scale-100' : 'scale-0'
          }`}>
            {questionNumber}
          </span>
          Question
        </span>
        <div className="flex items-center gap-3">
          {isStreaming && (
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full animate-pulse" />
              <div className="w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full animate-pulse [animation-delay:150ms]" />
              <div className="w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full animate-pulse [animation-delay:300ms]" />
            </div>
          )}
          {showBookmark && (
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

      <div className="text-base sm:text-lg text-[var(--color-text-primary)] leading-relaxed min-h-[60px]">
        {/* Always use MathRenderer for consistent formatting during and after streaming */}
        <MathRenderer content={displayContent} isStreaming={isStreaming} />
        {showCursor && (
          <span className="inline-block w-0.5 h-5 bg-[var(--color-accent)] ml-0.5 rounded-full animate-cursor-blink" />
        )}
      </div>
    </div>
  );
}
