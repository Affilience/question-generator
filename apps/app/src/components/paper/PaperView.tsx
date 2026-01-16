'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MathRenderer } from '@/components/MathRenderer';

interface PaperQuestion {
  id: string;
  content: string;
  marks: number;
  difficulty: 'easy' | 'medium' | 'hard';
  topicId: string;
  solution?: string;
  userAnswer?: string;
  isCorrect?: boolean;
}

interface PaperViewProps {
  paperName: string;
  questions: PaperQuestion[];
  totalMarks: number;
  timeLimit: number | null; // minutes
  onSubmit: (answers: Record<string, { answer: string; isCorrect?: boolean }>) => void;
  isSubmitting: boolean;
}

export function PaperView({
  paperName,
  questions,
  totalMarks,
  timeLimit,
  onSubmit,
  isSubmitting,
}: PaperViewProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [timeRemaining, setTimeRemaining] = useState(timeLimit ? timeLimit * 60 : null); // seconds
  const [isPaused, setIsPaused] = useState(false);
  const [showSubmitConfirm, setShowSubmitConfirm] = useState(false);

  // Timer
  useEffect(() => {
    if (timeRemaining === null || isPaused) return;

    const interval = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev === null || prev <= 0) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isPaused, timeRemaining]);

  // Auto-submit when time runs out
  useEffect(() => {
    if (timeRemaining === 0) {
      handleSubmit();
    }
  }, [timeRemaining]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerChange = (questionId: string, answer: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

  const goToQuestion = (index: number) => {
    setCurrentQuestionIndex(index);
  };

  const handleSubmit = useCallback(() => {
    const submissionData: Record<string, { answer: string; isCorrect?: boolean }> = {};
    questions.forEach((q) => {
      submissionData[q.id] = {
        answer: answers[q.id] || '',
      };
    });
    onSubmit(submissionData);
  }, [answers, questions, onSubmit]);

  const answeredCount = Object.keys(answers).filter((k) => answers[k]?.trim()).length;
  const progressPercent = Math.round((answeredCount / questions.length) * 100);

  // Calculate marks breakdown
  const marksByDifficulty = questions.reduce(
    (acc, q) => {
      acc[q.difficulty] += q.marks;
      return acc;
    },
    { easy: 0, medium: 0, hard: 0 }
  );

  return (
    <div className="min-h-screen bg-[var(--color-bg-deepest)]">
      {/* Header with timer */}
      <div className="sticky top-0 z-40 bg-[#0d0d0d]/95 backdrop-blur border-b border-[#2a2a2a]">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-lg font-semibold text-white">{paperName}</h1>
              <p className="text-sm text-[#666666]">
                {answeredCount}/{questions.length} questions answered
              </p>
            </div>

            <div className="flex items-center gap-4">
              {timeRemaining !== null && (
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsPaused(!isPaused)}
                    className="p-2 rounded-lg hover:bg-[#222222] transition-colors"
                  >
                    {isPaused ? (
                      <svg className="w-5 h-5 text-[#3b82f6]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 text-[#666666]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                      </svg>
                    )}
                  </button>
                  <div
                    className={`font-mono text-xl font-bold ${
                      timeRemaining < 300
                        ? 'text-red-400 animate-pulse'
                        : timeRemaining < 600
                        ? 'text-yellow-400'
                        : 'text-white'
                    }`}
                  >
                    {formatTime(timeRemaining)}
                  </div>
                </div>
              )}

              <button
                onClick={() => setShowSubmitConfirm(true)}
                className="px-4 py-2 bg-[#3b82f6] hover:bg-[#2563eb] text-white font-medium rounded-lg transition-colors"
              >
                Submit Paper
              </button>
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-2 h-1 bg-[#2a2a2a] rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-[#3b82f6]"
              initial={{ width: 0 }}
              animate={{ width: `${progressPercent}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-6 flex gap-6">
        {/* Question navigation sidebar */}
        <div className="hidden lg:block w-64 shrink-0">
          <div className="sticky top-24 bg-[#1a1a1a] rounded-xl border border-[#2a2a2a] p-4">
            <h3 className="text-sm font-medium text-[#666666] mb-3">Questions</h3>
            <div className="grid grid-cols-5 gap-2">
              {questions.map((q, index) => {
                const isAnswered = answers[q.id]?.trim();
                const isCurrent = index === currentQuestionIndex;

                return (
                  <button
                    key={q.id}
                    onClick={() => goToQuestion(index)}
                    className={`w-9 h-9 rounded-lg text-sm font-medium transition-all ${
                      isCurrent
                        ? 'bg-[#3b82f6] text-white'
                        : isAnswered
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                        : 'bg-[#222222] text-[#666666] hover:bg-[#2a2a2a]'
                    }`}
                  >
                    {index + 1}
                  </button>
                );
              })}
            </div>

            <div className="mt-4 pt-4 border-t border-[#2a2a2a] space-y-2 text-sm">
              <div className="flex justify-between text-[#666666]">
                <span>Total marks:</span>
                <span className="text-white">{totalMarks}</span>
              </div>
              <div className="flex justify-between text-[#666666]">
                <span>Easy:</span>
                <span className="text-green-400">{marksByDifficulty.easy}</span>
              </div>
              <div className="flex justify-between text-[#666666]">
                <span>Medium:</span>
                <span className="text-yellow-400">{marksByDifficulty.medium}</span>
              </div>
              <div className="flex justify-between text-[#666666]">
                <span>Hard:</span>
                <span className="text-red-400">{marksByDifficulty.hard}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main question area */}
        <div className="flex-1 min-w-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-[#1a1a1a] rounded-xl border border-[#2a2a2a] p-6"
            >
              {/* Question header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-lg font-bold text-white">
                    Question {currentQuestionIndex + 1}
                  </span>
                  <span
                    className={`px-2 py-0.5 text-xs rounded-full ${
                      currentQuestion.difficulty === 'easy'
                        ? 'bg-green-500/20 text-green-400'
                        : currentQuestion.difficulty === 'medium'
                        ? 'bg-yellow-500/20 text-yellow-400'
                        : 'bg-red-500/20 text-red-400'
                    }`}
                  >
                    {currentQuestion.difficulty}
                  </span>
                </div>
                <span className="text-[#3b82f6] font-medium">[{currentQuestion.marks} marks]</span>
              </div>

              {/* Question content */}
              <div className="prose prose-invert max-w-none mb-6">
                <MathRenderer content={currentQuestion.content} />
              </div>

              {/* Answer area */}
              <div className="mb-6">
                <label className="block text-sm text-[#666666] mb-2">Your answer:</label>
                <textarea
                  value={answers[currentQuestion.id] || ''}
                  onChange={(e) => handleAnswerChange(currentQuestion.id, e.target.value)}
                  placeholder="Write your answer here..."
                  rows={6}
                  className="w-full px-4 py-3 bg-[#0d0d0d] border border-[#2a2a2a] rounded-xl text-white placeholder-[#666666] focus:outline-none focus:border-[#3b82f6] transition-colors resize-none"
                />
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between">
                <button
                  onClick={() => goToQuestion(Math.max(0, currentQuestionIndex - 1))}
                  disabled={currentQuestionIndex === 0}
                  className="flex items-center gap-2 px-4 py-2 text-[#a1a1a1] hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Previous
                </button>

                {/* Mobile question indicator */}
                <span className="lg:hidden text-sm text-[#666666]">
                  {currentQuestionIndex + 1} / {questions.length}
                </span>

                <button
                  onClick={() => goToQuestion(Math.min(questions.length - 1, currentQuestionIndex + 1))}
                  disabled={currentQuestionIndex === questions.length - 1}
                  className="flex items-center gap-2 px-4 py-2 text-[#a1a1a1] hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Next
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Mobile question navigation */}
          <div className="lg:hidden mt-4 flex overflow-x-auto gap-2 pb-2">
            {questions.map((q, index) => {
              const isAnswered = answers[q.id]?.trim();
              const isCurrent = index === currentQuestionIndex;

              return (
                <button
                  key={q.id}
                  onClick={() => goToQuestion(index)}
                  className={`shrink-0 w-10 h-10 rounded-lg text-sm font-medium transition-all ${
                    isCurrent
                      ? 'bg-[#3b82f6] text-white'
                      : isAnswered
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                      : 'bg-[#1a1a1a] border border-[#2a2a2a] text-[#666666]'
                  }`}
                >
                  {index + 1}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Submit confirmation modal */}
      <AnimatePresence>
        {showSubmitConfirm && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowSubmitConfirm(false)}
            />
            <motion.div
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-[#1a1a1a] rounded-xl border border-[#2a2a2a] p-6 z-50"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
            >
              <h3 className="text-xl font-bold text-white mb-2">Submit Paper?</h3>
              <p className="text-[#a1a1a1] mb-4">
                You have answered {answeredCount} of {questions.length} questions.
                {answeredCount < questions.length && (
                  <span className="text-yellow-400">
                    {' '}
                    {questions.length - answeredCount} questions are unanswered.
                  </span>
                )}
              </p>

              <div className="flex gap-3">
                <button
                  onClick={() => setShowSubmitConfirm(false)}
                  className="flex-1 py-3 border border-[#2a2a2a] rounded-xl text-[#a1a1a1] hover:bg-[#222222] transition-colors"
                >
                  Continue Paper
                </button>
                <button
                  onClick={() => {
                    setShowSubmitConfirm(false);
                    handleSubmit();
                  }}
                  disabled={isSubmitting}
                  className="flex-1 py-3 bg-[#3b82f6] hover:bg-[#2563eb] disabled:bg-[#333333] text-white font-medium rounded-xl transition-colors"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Paused overlay */}
      <AnimatePresence>
        {isPaused && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="text-center">
              <div className="text-6xl mb-4">⏸️</div>
              <h2 className="text-2xl font-bold text-white mb-2">Paper Paused</h2>
              <p className="text-[#666666] mb-6">
                Time remaining: {formatTime(timeRemaining || 0)}
              </p>
              <button
                onClick={() => setIsPaused(false)}
                className="px-8 py-3 bg-[#3b82f6] hover:bg-[#2563eb] text-white font-medium rounded-xl transition-colors"
              >
                Resume
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export type { PaperQuestion };
