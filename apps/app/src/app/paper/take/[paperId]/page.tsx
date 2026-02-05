'use client';

import { useState, useEffect, useCallback, use } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import {
  GeneratedPaper,
  GeneratedSection,
  GeneratedQuestion,
  PaperAttemptAnswer,
} from '@/types';
import { MarkBadge, InlineMarks } from '@/components/ui/MarkBadge';
import { MathRenderer } from '@/components/MathRenderer';
import { DiagramRenderer } from '@/components/DiagramRenderer';
import { PrintPaperButton } from '@/components/PrintPaperButton';

interface PaperTakePageProps {
  params: Promise<{ paperId: string }>;
}

type AnswerState = Record<string, string>; // questionId -> answer
type SelfMarkState = Record<string, number>; // questionId -> marks awarded

export default function PaperTakePage({ params }: PaperTakePageProps) {
  const { paperId } = use(params);
  const router = useRouter();
  const { user } = useAuth();

  const [paper, setPaper] = useState<GeneratedPaper | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Paper taking state
  const [answers, setAnswers] = useState<AnswerState>({});
  const [selfMarks, setSelfMarks] = useState<SelfMarkState>({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showSolutions, setShowSolutions] = useState(false);
  const [showResults, setShowResults] = useState(false);
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
          setLoading(false);
          return;
        }

        // Otherwise fetch from database - with user authentication
        if (!user) {
          throw new Error('Please sign in to access papers');
        }

        const supabase = createClient();
        const { data, error: fetchError } = await supabase
          .from('generated_papers')
          .select('*')
          .eq('id', paperId)
          .eq('user_id', user.id) // Ensure user owns this paper
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
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load paper');
      } finally {
        setLoading(false);
      }
    }

    loadPaper();
  }, [paperId]);

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

  const handleSelfMark = (questionId: string, marks: number, maxMarks: number) => {
    const clampedMarks = Math.max(0, Math.min(marks, maxMarks));
    setSelfMarks((prev) => ({
      ...prev,
      [questionId]: clampedMarks,
    }));
  };

  // Calculate totals for self-marking
  const totalSelfMarks = Object.values(selfMarks).reduce((sum, m) => sum + m, 0);
  const questionsMarked = Object.keys(selfMarks).length;
  const allQuestionsMarked = questionsMarked === allQuestions.length;

  const goToQuestion = (index: number) => {
    if (index >= 0 && index < allQuestions.length) {
      setCurrentQuestionIndex(index);
    }
  };

  const handleSubmit = useCallback(async () => {
    if (isSubmitted) return;
    setIsSubmitted(true);
    setShowSolutions(true); // Always show solutions after submit for self-marking
    setCurrentQuestionIndex(0); // Go back to first question for marking

    // Save attempt to database
    try {
      if (paper) {
        const supabase = createClient();

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
          answers: attemptAnswers,
        });

        if (attemptError) {
          console.error('Failed to save attempt:', attemptError);
        }
      }
    } catch (err) {
      console.error('Error saving attempt:', err);
    }
  }, [isSubmitted, paper, allQuestions, answers, paperId]);

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

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Print Button */}
            <PrintPaperButton
              paper={paper}
              examBoard={paper.examBoard}
              qualification={paper.qualification}
              subject={paper.subject}
            />
            
            {/* Submit / Results Button */}
            {!isSubmitted ? (
              <button
                onClick={handleSubmit}
                className="px-4 py-2 bg-[var(--color-accent)] text-white rounded-lg font-medium hover:bg-[var(--color-accent-hover)]"
              >
                Finish & Mark
              </button>
            ) : (
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <div className="text-lg font-bold text-[var(--color-text-primary)]">
                    {totalSelfMarks}/{paper.totalMarks}
                  </div>
                  <div className="text-xs text-[var(--color-text-muted)]">
                    {questionsMarked}/{allQuestions.length} marked
                  </div>
                </div>
                {allQuestionsMarked && (
                  <button
                    onClick={() => setShowResults(true)}
                    className="px-4 py-2 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600"
                  >
                    View Results
                  </button>
                )}
              </div>
            )}
          </div>
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
                const isMarked = selfMarks[q.id] !== undefined;

                return (
                  <button
                    key={q.id}
                    onClick={() => goToQuestion(index)}
                    className={`relative w-10 h-10 rounded-lg text-sm font-medium transition-all ${
                      isCurrent
                        ? 'bg-[var(--color-accent)] text-white'
                        : isSubmitted && isMarked
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                        : isSubmitted
                        ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                        : isAnswered
                        ? 'bg-blue-500/20 text-blue-400'
                        : 'bg-[var(--color-bg-elevated)] text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-tertiary)]'
                    }`}
                  >
                    {q.questionNumber}
                    {isFlagged && !isSubmitted && (
                      <span className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full" />
                    )}
                    {isSubmitted && isMarked && (
                      <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                        <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Section Legend */}
            <div className="mt-4 pt-4 border-t border-[var(--color-border)]">
              {!isSubmitted ? (
                <>
                  <div className="flex items-center gap-2 text-xs text-[var(--color-text-muted)]">
                    <span className="w-3 h-3 bg-blue-500/20 rounded" />
                    <span>Has notes</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[var(--color-text-muted)] mt-1">
                    <span className="w-3 h-3 bg-orange-500 rounded-full" />
                    <span>Flagged</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center gap-2 text-xs text-[var(--color-text-muted)]">
                    <span className="w-3 h-3 bg-green-500/20 border border-green-500/30 rounded" />
                    <span>Marked</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[var(--color-text-muted)] mt-1">
                    <span className="w-3 h-3 bg-yellow-500/20 border border-yellow-500/30 rounded" />
                    <span>Needs marking</span>
                  </div>
                  <div className="mt-3 pt-3 border-t border-[var(--color-border)]">
                    <div className="text-sm font-medium text-[var(--color-text-primary)]">
                      Score: {totalSelfMarks}/{paper.totalMarks}
                    </div>
                    <div className="text-xs text-[var(--color-text-muted)]">
                      {Math.round((totalSelfMarks / paper.totalMarks) * 100)}%
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </aside>

        {/* Main Question Area */}
        <main className="flex-1 min-w-0">
          {currentQuestion && (
            <div className="bg-[var(--color-bg-secondary)] rounded-lg border border-[var(--color-border)] p-6">
              {/* Section Header - only show if more than one section */}
              {paper.sections.length > 1 && (() => {
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
                    <div className="text-[var(--color-text-primary)]">
                      <MathRenderer content={currentQuestion.content} />
                    </div>
                    {currentQuestion.diagram && (
                      <div className="mt-4 flex justify-center">
                        <DiagramRenderer
                          spec={currentQuestion.diagram}
                          maxWidth={450}
                          maxHeight={350}
                          className="bg-[var(--color-bg-primary)] rounded-lg p-4"
                        />
                      </div>
                    )}
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

                {/* Answer Input - only show before submission */}
                {!isSubmitted && (
                  <div>
                    <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">
                      Your Answer (optional - for digital notes)
                    </label>
                    <textarea
                      value={answers[currentQuestion.id] || ''}
                      onChange={(e) => handleAnswerChange(currentQuestion.id, e.target.value)}
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/50 resize-none"
                      placeholder="Type your answer here, or write on paper..."
                    />
                  </div>
                )}

                {/* Solution and Mark Scheme - shown after submission */}
                {showSolutions && (
                  <div className="space-y-6">
                    {/* Model Solution */}
                    <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-5">
                      <h3 className="font-bold text-green-400 mb-3 flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Model Solution
                      </h3>
                      <div className="text-[var(--color-text-primary)] leading-relaxed">
                        <MathRenderer content={currentQuestion.solution} />
                      </div>
                    </div>

                    {/* Mark Scheme */}
                    <div className="bg-[var(--color-bg-primary)] border border-[var(--color-border)] rounded-xl p-5">
                      <h4 className="font-bold text-[var(--color-text-primary)] mb-3 flex items-center gap-2">
                        <svg className="w-5 h-5 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                        </svg>
                        Mark Scheme
                      </h4>
                      <ul className="space-y-2">
                        {currentQuestion.markScheme.map((point, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-3 text-[var(--color-text-secondary)] bg-[var(--color-bg-secondary)] rounded-lg px-4 py-2"
                          >
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--color-accent)]/20 text-[var(--color-accent)] flex items-center justify-center text-xs font-medium">
                              {index + 1}
                            </span>
                            <span className="flex-1"><MathRenderer content={point} /></span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Self-Marking Input */}
                    <div className="bg-[var(--color-bg-tertiary)] border border-[var(--color-border)] rounded-xl p-5">
                      <h4 className="font-bold text-[var(--color-text-primary)] mb-3">
                        Self-Mark This Question
                      </h4>
                      <p className="text-sm text-[var(--color-text-muted)] mb-4">
                        Compare your answer to the mark scheme and award yourself marks.
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <input
                            type="number"
                            min={0}
                            max={currentQuestion.marks}
                            value={selfMarks[currentQuestion.id] ?? ''}
                            onChange={(e) => handleSelfMark(currentQuestion.id, parseInt(e.target.value) || 0, currentQuestion.marks)}
                            className="w-20 px-3 py-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] text-center text-lg font-bold focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/50"
                            placeholder="0"
                          />
                          <span className="text-[var(--color-text-secondary)] font-medium">
                            / {currentQuestion.marks}
                          </span>
                        </div>

                        {/* Quick mark buttons */}
                        <div className="flex gap-2">
                          {[0, Math.floor(currentQuestion.marks / 2), currentQuestion.marks].map((mark) => (
                            <button
                              key={mark}
                              onClick={() => handleSelfMark(currentQuestion.id, mark, currentQuestion.marks)}
                              className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                                selfMarks[currentQuestion.id] === mark
                                  ? 'bg-[var(--color-accent)] text-white'
                                  : 'bg-[var(--color-bg-elevated)] text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-primary)]'
                              }`}
                            >
                              {mark}
                            </button>
                          ))}
                        </div>
                      </div>

                      {selfMarks[currentQuestion.id] !== undefined && (
                        <div className="mt-3 text-sm text-green-400">
                          Marked: {selfMarks[currentQuestion.id]}/{currentQuestion.marks}
                        </div>
                      )}
                    </div>
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
      {!isSubmitted && (
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
      )}

      {/* Results Modal */}
      {showResults && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setShowResults(false)}
          />
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-2xl shadow-2xl">
            {/* Header */}
            <div className="sticky top-0 bg-[var(--color-bg-secondary)] border-b border-[var(--color-border)] p-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">Results</h2>
                <button
                  onClick={() => setShowResults(false)}
                  className="p-2 text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-elevated)] rounded-lg transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Score Summary */}
            <div className="p-6 border-b border-[var(--color-border)]">
              <div className="text-center">
                <div className="text-6xl font-bold text-[var(--color-text-primary)] mb-2">
                  {totalSelfMarks}/{paper.totalMarks}
                </div>
                <div className="text-2xl font-medium text-[var(--color-accent)]">
                  {Math.round((totalSelfMarks / paper.totalMarks) * 100)}%
                </div>
                <div className="mt-4 text-[var(--color-text-muted)]">
                  {paper.paperName}
                </div>
              </div>

            </div>

            {/* Question Breakdown */}
            <div className="p-6">
              <h3 className="font-bold text-[var(--color-text-primary)] mb-4">Question Breakdown</h3>
              <div className="space-y-2">
                {allQuestions.map((q, index) => {
                  const marks = selfMarks[q.id] || 0;
                  const percentage = (marks / q.marks) * 100;

                  return (
                    <div
                      key={q.id}
                      className="flex items-center gap-4 p-3 bg-[var(--color-bg-primary)] rounded-lg cursor-pointer hover:bg-[var(--color-bg-elevated)]"
                      onClick={() => {
                        setShowResults(false);
                        goToQuestion(index);
                      }}
                    >
                      <span className="w-8 h-8 rounded-lg bg-[var(--color-bg-elevated)] flex items-center justify-center text-sm font-medium text-[var(--color-text-secondary)]">
                        {q.questionNumber}
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-[var(--color-text-muted)] truncate">
                          {q.subtopic}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-2 bg-[var(--color-bg-elevated)] rounded-full overflow-hidden">
                          <div
                            className={`h-full transition-all ${
                              percentage >= 80
                                ? 'bg-green-500'
                                : percentage >= 50
                                ? 'bg-yellow-500'
                                : 'bg-red-500'
                            }`}
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                        <span className="text-sm font-medium text-[var(--color-text-primary)] w-16 text-right">
                          {marks}/{q.marks}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Actions */}
            <div className="sticky bottom-0 bg-[var(--color-bg-secondary)] border-t border-[var(--color-border)] p-6">
              <div className="flex gap-3">
                <button
                  onClick={() => setShowResults(false)}
                  className="flex-1 py-3 border border-[var(--color-border)] rounded-xl text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-elevated)] transition-colors"
                >
                  Review Questions
                </button>
                <button
                  onClick={() => router.push('/dashboard')}
                  className="flex-1 py-3 bg-[var(--color-accent)] text-white font-medium rounded-xl hover:bg-[var(--color-accent-hover)] transition-colors"
                >
                  Back to Dashboard
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
