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
}

export function StreamingQuestionCard({
  question,
  streamedContent,
  isStreaming,
  questionNumber,
  userId,
  subtopic,
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
