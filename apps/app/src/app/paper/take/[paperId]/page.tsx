'use client';

import { useState, useEffect, useCallback, use } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@supabase/supabase-js';
import {
  GeneratedPaper,
  GeneratedSection,
  GeneratedQuestion,
  PaperAttemptAnswer,
} from '@/types';
import { MarkBadge, InlineMarks } from '@/components/ui/MarkBadge';

interface PaperTakePageProps {
  params: Promise<{ paperId: string }>;
}

type AnswerState = Record<string, string>; // questionId -> answer

export default function PaperTakePage({ params }: PaperTakePageProps) {
  const { paperId } = use(params);
  const router = useRouter();

  const [paper, setPaper] = useState<GeneratedPaper | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Paper taking state
  const [answers, setAnswers] = useState<AnswerState>({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showSolutions, setShowSolutions] = useState(false);
  const [flaggedQuestions, setFlaggedQuestions] = useState<Set<string>>(new Set());

  // Flatten questions for navigation
  const allQuestions = paper?.sections.flatMap((s) => s.questions) || [];
  const currentQuestion = allQuestions[currentQuestionIndex];

  // Load paper from API/database
  useEffect(() => {
    async function loadPaper() {
      try {
        // First try to get from localStorage (for newly generated papers)
        const cached = localStorage.getItem(`paper-${paperId}`);
        if (cached) {
          const paperData = JSON.parse(cached);
          setPaper(paperData);
          if (paperData.timeLimit) {
            setTimeRemaining(paperData.timeLimit * 60);
          }
          setLoading(false);
          return;
        }

        // Otherwise fetch from database
        const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
        const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

        if (!supabaseUrl || !supabaseKey) {
          throw new Error('Paper not found');
        }

        const supabase = createClient(supabaseUrl, supabaseKey);
        const { data, error: fetchError } = await supabase
          .from('generated_papers')
          .select('*')
          .eq('id', paperId)
          .single();

        if (fetchError || !data) {
          throw new Error('Paper not found');
        }

        const loadedPaper: GeneratedPaper = {
          id: data.id,
          examBoard: data.exam_board,
          qualification: data.qualification,
          subject: data.subject,
          paperName: data.paper_name,
          sections: data.sections,
          totalMarks: data.total_marks,
          timeLimit: data.time_limit,
          settings: data.settings,
          createdAt: data.created_at,
        };

        setPaper(loadedPaper);
        if (loadedPaper.timeLimit) {
          setTimeRemaining(loadedPaper.timeLimit * 60);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load paper');
      } finally {
        setLoading(false);
      }
    }

    loadPaper();
  }, [paperId]);

  // Timer countdown
  useEffect(() => {
    if (timeRemaining === null || isPaused || isSubmitted) return;
    if (timeRemaining <= 0) {
      handleSubmit();
      return;
    }

    const timer = setInterval(() => {
      setTimeRemaining((prev) => (prev !== null ? prev - 1 : null));
    }, 1000);

    return () => clearInterval(timer);
  }, [timeRemaining, isPaused, isSubmitted]);

  const formatTime = (seconds: number): string => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    if (hrs > 0) {
      return `${hrs}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getTimerColor = (): string => {
    if (timeRemaining === null) return 'text-[var(--color-text-primary)]';
    if (timeRemaining <= 300) return 'text-red-500'; // 5 minutes
    if (timeRemaining <= 600) return 'text-yellow-500'; // 10 minutes
    return 'text-green-500';
  };

  const handleAnswerChange = (questionId: string, value: string) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }));
  };

  const toggleFlagged = (questionId: string) => {
    setFlaggedQuestions((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(questionId)) {
        newSet.delete(questionId);
      } else {
        newSet.add(questionId);
      }
      return newSet;
    });
  };

  const goToQuestion = (index: number) => {
    if (index >= 0 && index < allQuestions.length) {
      setCurrentQuestionIndex(index);
    }
  };

  const handleSubmit = useCallback(async () => {
    if (isSubmitted) return;
    setIsSubmitted(true);

    // In exam conditions mode, show solutions after submit
    if (paper?.settings.examConditions) {
      setShowSolutions(true);
    }

    // Save attempt to database
    try {
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
      const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

      if (supabaseUrl && supabaseKey && paper) {
        const supabase = createClient(supabaseUrl, supabaseKey);

        const attemptAnswers: Omit<PaperAttemptAnswer, 'id' | 'attemptId'>[] =
          allQuestions.map((q) => ({
            questionId: q.id,
            questionNumber: q.questionNumber,
            answer: answers[q.id] || '',
            marksAvailable: q.marks,
          }));

        const { error: attemptError } = await supabase.from('paper_attempts').insert({
          paper_id: paperId,
          exam_board: paper.examBoard,
          qualification: paper.qualification,
          subject: paper.subject,
          paper_name: paper.paperName,
          total_marks: paper.totalMarks,
          time_taken: paper.timeLimit ? (paper.timeLimit * 60 - (timeRemaining || 0)) : null,
          answers: attemptAnswers,
        });

        if (attemptError) {
          console.error('Failed to save attempt:', attemptError);
        }
      }
    } catch (err) {
      console.error('Error saving attempt:', err);
    }
  }, [isSubmitted, paper, allQuestions, answers, paperId, timeRemaining]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--color-bg-primary)]">
        <div className="text-center">
          <div className="w-12 h-12 mx-auto mb-4 border-4 border-[var(--color-accent)] border-t-transparent rounded-full animate-spin" />
          <p className="text-[var(--color-text-secondary)]">Loading paper...</p>
        </div>
      </div>
    );
  }

  if (error || !paper) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--color-bg-primary)]">
        <div className="text-center">
          <h1 className="text-xl font-bold text-[var(--color-text-primary)] mb-2">Paper Not Found</h1>
          <p className="text-[var(--color-text-secondary)] mb-4">{error || 'The requested paper could not be loaded.'}</p>
          <button
            onClick={() => router.push('/practice')}
            className="px-4 py-2 bg-[var(--color-accent)] text-white rounded-lg hover:bg-[var(--color-accent-hover)]"
          >
            Back to Practice
          </button>
        </div>
      </div>
    );
  }

  const answeredCount = Object.keys(answers).filter((id) => answers[id]?.trim()).length;
  const progress = (answeredCount / allQuestions.length) * 100;

  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[var(--color-bg-secondary)] border-b border-[var(--color-border)] px-4 py-3">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          {/* Paper Info */}
          <div className="flex-1 min-w-0">
            <h1 className="font-bold text-[var(--color-text-primary)] truncate">{paper.paperName}</h1>
            <div className="flex items-center gap-3 text-sm text-[var(--color-text-secondary)]">
              <span>{paper.totalMarks} marks</span>
              <span>|</span>
              <span>{allQuestions.length} questions</span>
            </div>
          </div>

          {/* Timer */}
          {timeRemaining !== null && (
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsPaused(!isPaused)}
                className="p-2 rounded-lg bg-[var(--color-bg-elevated)] hover:bg-[var(--color-bg-tertiary)]"
              >
                {isPaused ? (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                  </svg>
                )}
              </button>
              <div className={`text-2xl font-mono font-bold ${getTimerColor()}`}>
                {formatTime(timeRemaining)}
              </div>
            </div>
          )}

          {/* Progress */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="text-sm text-[var(--color-text-secondary)]">
              {answeredCount}/{allQuestions.length}
            </div>
            <div className="w-24 h-2 bg-[var(--color-bg-elevated)] rounded-full overflow-hidden">
              <div
                className="h-full bg-[var(--color-accent)] transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Submit Button */}
          {!isSubmitted ? (
            <button
              onClick={handleSubmit}
              className="px-4 py-2 bg-[var(--color-accent)] text-white rounded-lg font-medium hover:bg-[var(--color-accent-hover)]"
            >
              Submit
            </button>
          ) : (
            <span className="px-4 py-2 bg-green-500/20 text-green-400 rounded-lg font-medium">
              Submitted
            </span>
          )}
        </div>
      </header>

      <div className="max-w-6xl mx-auto p-4 flex gap-4">
        {/* Question Navigator Sidebar */}
        <aside className="hidden lg:block w-64 flex-shrink-0">
          <div className="sticky top-24 bg-[var(--color-bg-secondary)] rounded-lg border border-[var(--color-border)] p-4">
            <h3 className="font-medium text-[var(--color-text-primary)] mb-3">Questions</h3>
            <div className="grid grid-cols-5 gap-2">
              {allQuestions.map((q, index) => {
                const isAnswered = !!answers[q.id]?.trim();
                const isCurrent = index === currentQuestionIndex;
                const isFlagged = flaggedQuestions.has(q.id);

                return (
                  <button
                    key={q.id}
                    onClick={() => goToQuestion(index)}
                    className={`relative w-10 h-10 rounded-lg text-sm font-medium transition-all ${
                      isCurrent
                        ? 'bg-[var(--color-accent)] text-white'
                        : isAnswered
                        ? 'bg-green-500/20 text-green-400'
                        : 'bg-[var(--color-bg-elevated)] text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-tertiary)]'
                    }`}
                  >
                    {q.questionNumber}
                    {isFlagged && (
                      <span className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Section Legend */}
            <div className="mt-4 pt-4 border-t border-[var(--color-border)]">
              <div className="flex items-center gap-2 text-xs text-[var(--color-text-muted)]">
                <span className="w-3 h-3 bg-green-500/20 rounded" />
                <span>Answered</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[var(--color-text-muted)] mt-1">
                <span className="w-3 h-3 bg-orange-500 rounded-full" />
                <span>Flagged for review</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Question Area */}
        <main className="flex-1 min-w-0">
          {currentQuestion && (
            <div className="bg-[var(--color-bg-secondary)] rounded-lg border border-[var(--color-border)] p-6">
              {/* Section Header */}
              {(() => {
                const section = paper.sections.find((s) =>
                  s.questions.some((q) => q.id === currentQuestion.id)
                );
                return section ? (
                  <div className="mb-4 pb-4 border-b border-[var(--color-border)]">
                    <h2 className="font-bold text-[var(--color-text-primary)]">{section.name}</h2>
                    <p className="text-sm text-[var(--color-text-secondary)]">{section.instructions}</p>
                  </div>
                ) : null;
              })()}

              {/* Question */}
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-lg font-bold text-[var(--color-text-primary)]">
                        Question {currentQuestion.questionNumber}
                      </span>
                      {paper.settings.showMarks && (
                        <MarkBadge marks={currentQuestion.marks} size="md" />
                      )}
                    </div>
                    <div className="text-[var(--color-text-primary)] whitespace-pre-wrap">
                      {currentQuestion.content}
                    </div>
                  </div>
                  <button
                    onClick={() => toggleFlagged(currentQuestion.id)}
                    className={`p-2 rounded-lg transition-colors ${
                      flaggedQuestions.has(currentQuestion.id)
                        ? 'bg-orange-500/20 text-orange-400'
                        : 'bg-[var(--color-bg-elevated)] text-[var(--color-text-muted)] hover:text-orange-400'
                    }`}
                    title="Flag for review"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z" />
                    </svg>
                  </button>
                </div>

                {/* Answer Input */}
                <div>
                  <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">
                    Your Answer
                  </label>
                  <textarea
                    value={answers[currentQuestion.id] || ''}
                    onChange={(e) => handleAnswerChange(currentQuestion.id, e.target.value)}
                    disabled={isSubmitted}
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/50 disabled:opacity-50 resize-none"
                    placeholder="Enter your answer here..."
                  />
                </div>

                {/* Solution (if shown) */}
                {(showSolutions || (!paper.settings.examConditions && isSubmitted)) && (
                  <div className="mt-6 pt-6 border-t border-[var(--color-border)]">
                    <h3 className="font-bold text-[var(--color-text-primary)] mb-3">Model Solution</h3>
                    <div className="bg-[var(--color-bg-primary)] rounded-lg p-4 text-[var(--color-text-primary)] whitespace-pre-wrap">
                      {currentQuestion.solution}
                    </div>

                    <h4 className="font-medium text-[var(--color-text-primary)] mt-4 mb-2">Mark Scheme</h4>
                    <ul className="space-y-1">
                      {currentQuestion.markScheme.map((point, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2 text-[var(--color-text-secondary)]"
                        >
                          <span className="text-[var(--color-accent)]">•</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-6 pt-6 border-t border-[var(--color-border)]">
                <button
                  onClick={() => goToQuestion(currentQuestionIndex - 1)}
                  disabled={currentQuestionIndex === 0}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--color-bg-elevated)] text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-tertiary)] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Previous
                </button>

                <span className="text-sm text-[var(--color-text-muted)]">
                  {currentQuestionIndex + 1} of {allQuestions.length}
                </span>

                <button
                  onClick={() => goToQuestion(currentQuestionIndex + 1)}
                  disabled={currentQuestionIndex === allQuestions.length - 1}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--color-bg-elevated)] text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-tertiary)] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Mobile Question Navigator */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-[var(--color-bg-secondary)] border-t border-[var(--color-border)] p-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => goToQuestion(currentQuestionIndex - 1)}
            disabled={currentQuestionIndex === 0}
            className="p-3 rounded-lg bg-[var(--color-bg-elevated)] disabled:opacity-50"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex-1 mx-4 overflow-x-auto">
            <div className="flex gap-2 justify-center">
              {allQuestions.slice(
                Math.max(0, currentQuestionIndex - 2),
                Math.min(allQuestions.length, currentQuestionIndex + 3)
              ).map((q, index) => {
                const actualIndex = Math.max(0, currentQuestionIndex - 2) + index;
                const isAnswered = !!answers[q.id]?.trim();
                const isCurrent = actualIndex === currentQuestionIndex;

                return (
                  <button
                    key={q.id}
                    onClick={() => goToQuestion(actualIndex)}
                    className={`w-10 h-10 rounded-lg text-sm font-medium ${
                      isCurrent
                        ? 'bg-[var(--color-accent)] text-white'
                        : isAnswered
                        ? 'bg-green-500/20 text-green-400'
                        : 'bg-[var(--color-bg-elevated)] text-[var(--color-text-secondary)]'
                    }`}
                  >
                    {q.questionNumber}
                  </button>
                );
              })}
            </div>
          </div>

          <button
            onClick={() => goToQuestion(currentQuestionIndex + 1)}
            disabled={currentQuestionIndex === allQuestions.length - 1}
            className="p-3 rounded-lg bg-[var(--color-bg-elevated)] disabled:opacity-50"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
