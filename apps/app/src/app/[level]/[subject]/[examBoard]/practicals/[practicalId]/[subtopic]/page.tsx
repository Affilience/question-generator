'use client';

import { useEffect, useState, useCallback, useRef } from 'react';
import { useParams, useRouter, notFound } from 'next/navigation';
import Link from 'next/link';
import { getPracticalById } from '@/lib/practicals';
import { getExamBoardInfo, getExamBoardsByLevel } from '@/lib/topics';
import { updateProgress } from '@/lib/progress';
import { getOrCreateUser, recordAttempt } from '@/lib/supabase';
import { Question, Difficulty, Practical, PracticalSubtopic, ExamBoard, QualificationLevel, Subject } from '@/types';
import { StreamingQuestionCard } from '@/components/StreamingQuestionCard';
import { SolutionPanel } from '@/components/SolutionPanel';
import { DifficultySelector } from '@/components/DifficultySelector';
import { useStreamingQuestion } from '@/hooks/useStreamingQuestion';
import { useIsMobile } from '@/hooks/useIsMobile';
import { QuestionFeed } from '@/components/mobile/QuestionFeed';

const validLevels: QualificationLevel[] = ['gcse', 'a-level'];
const validExamBoards: ExamBoard[] = ['aqa', 'edexcel', 'ocr'];
const validSubjects: Subject[] = ['maths', 'physics', 'chemistry', 'biology', 'computer-science', 'economics', 'business', 'psychology', 'geography', 'history', 'english-literature', 'further-maths'];

export default function PracticalSubtopicPracticePage() {
  const params = useParams();
  const router = useRouter();
  const isMobile = useIsMobile();
  const level = params.level as string;
  const subject = params.subject as string;
  const examBoard = params.examBoard as string;
  const practicalId = params.practicalId as string;
  const subtopicParam = params.subtopic as string;
  const subtopic = decodeURIComponent(subtopicParam);
  const isRandom = subtopic === 'random';

  // Validate level
  if (!validLevels.includes(level as QualificationLevel)) {
    notFound();
  }

  // Validate subject
  if (!validSubjects.includes(subject as Subject)) {
    notFound();
  }

  // Validate exam board
  if (!validExamBoards.includes(examBoard as ExamBoard)) {
    notFound();
  }

  // Check if this exam board supports this level
  const boardsForLevel = getExamBoardsByLevel(level as QualificationLevel);
  if (!boardsForLevel.find(b => b.id === examBoard)) {
    notFound();
  }

  const examBoardInfo = getExamBoardInfo(examBoard as ExamBoard);
  const levelDisplay = level === 'a-level' ? 'A-Level' : 'GCSE';

  const [practical, setPractical] = useState<Practical | null>(null);
  const [difficulty, setDifficulty] = useState<Difficulty>('medium');
  const [questionNumber, setQuestionNumber] = useState(1);
  const [isMarked, setIsMarked] = useState(false);
  const [sessionStats, setSessionStats] = useState({ attempted: 0, correct: 0 });
  const [currentSubtopic, setCurrentSubtopic] = useState<string>('');
  const [userId, setUserId] = useState<string | null>(null);
  const seenQuestionsRef = useRef<string[]>([]);
  const hasGeneratedRef = useRef(false);

  // Use the streaming hook for typing animation
  const {
    isStreaming,
    streamedContent,
    question,
    error,
    generate,
  } = useStreamingQuestion();

  useEffect(() => {
    const foundPractical = getPracticalById(practicalId);
    setPractical(foundPractical || null);
  }, [practicalId]);

  // Initialize user for Supabase tracking
  useEffect(() => {
    getOrCreateUser().then(user => {
      if (user) setUserId(user.id);
    });
  }, []);

  const generateQuestion = useCallback(async () => {
    if (!practical) return;

    setIsMarked(false);

    // For random mode, pick a random subtopic each time
    const selectedSubtopic = isRandom
      ? practical.subtopics[Math.floor(Math.random() * practical.subtopics.length)]
      : subtopic as PracticalSubtopic;

    setCurrentSubtopic(selectedSubtopic);

    // Pass all seen question prefixes to avoid repeats (cache exhaustion)
    const excludeContent = seenQuestionsRef.current.map(q => q.substring(0, 100));

    // Use streaming API for typing animation
    const result = await generate({
      topicId: practicalId, // Use practicalId as topicId for the API
      difficulty,
      subtopic: selectedSubtopic,
      examBoard: examBoard as ExamBoard,
      qualification: level as QualificationLevel,
      subject: practical.subject as Subject,
      excludeContent,
    });

    if (result) {
      seenQuestionsRef.current.push(result.content);
    }
  }, [practicalId, practical, difficulty, subtopic, isRandom, examBoard, level, generate]);

  // Generate question when practical loads (only once)
  useEffect(() => {
    if (practical && !hasGeneratedRef.current) {
      hasGeneratedRef.current = true;
      generateQuestion();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [practical]); // Only depend on practical, not generateQuestion to avoid loops

  const handleMark = (correct: boolean) => {
    setIsMarked(true);
    updateProgress(practicalId, correct);
    setSessionStats((prev) => ({
      attempted: prev.attempted + 1,
      correct: prev.correct + (correct ? 1 : 0),
    }));

    // Record to Supabase for dashboard
    if (userId && question) {
      recordAttempt(
        userId,
        practicalId,
        currentSubtopic || subtopic,
        difficulty,
        question.content,
        question.solution,
        correct,
        subject,
        examBoard,
        level
      ).catch(err => console.error('Failed to record attempt:', err));
    }
  };

  const handleNextQuestion = () => {
    setQuestionNumber((prev) => prev + 1);
    generateQuestion();
  };

  const handleDifficultyChange = (newDifficulty: Difficulty) => {
    setDifficulty(newDifficulty);
    setQuestionNumber(1);
    setSessionStats({ attempted: 0, correct: 0 });
  };

  // Generate new question when difficulty changes
  useEffect(() => {
    if (practical && hasGeneratedRef.current) {
      generateQuestion();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [difficulty]); // Only depend on difficulty

  if (!practical) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-2">Practical not found</h1>
          <Link
            href={`/${level}/${subject}/${examBoard}?tab=practicals`}
            className="text-[#10b981] hover:text-[#34d399] transition-colors"
          >
            Return to practicals
          </Link>
        </div>
      </div>
    );
  }

  // Validate subtopic exists (unless random)
  if (!isRandom && !practical.subtopics.includes(subtopic as PracticalSubtopic)) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-2">Practice area not found</h1>
          <p className="text-[#a1a1a1] mb-4">&quot;{subtopic}&quot; is not a valid practice area</p>
          <Link
            href={`/${level}/${subject}/${examBoard}/practicals/${practicalId}`}
            className="text-[#10b981] hover:text-[#34d399] transition-colors"
          >
            Choose a different area
          </Link>
        </div>
      </div>
    );
  }

  const displaySubtopic = isRandom ? currentSubtopic : subtopic;

  // Mobile TikTok-style feed view
  if (isMobile && practical) {
    return (
      <QuestionFeed
        practical={practical}
        subtopic={isRandom ? 'random' : subtopic}
        examBoard={examBoard}
        level={level}
        subject={subject}
        initialDifficulty={difficulty}
        userId={userId}
        onBack={() => router.push(`/${level}/${subject}/${examBoard}/practicals/${practicalId}`)}
      />
    );
  }

  return (
    <div className="min-h-screen">
      <div className="max-w-3xl mx-auto px-4 pt-4 pb-8">
        <header className="mb-4">
          <Link
            href={`/${level}/${subject}/${examBoard}/practicals/${practicalId}`}
            className="inline-flex items-center text-sm text-[#666666] hover:text-[#a1a1a1] transition-colors mb-2"
          >
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to {practical.name}
          </Link>

          <div className="flex items-center gap-3">
            <span className="text-2xl">{practical.icon}</span>
            <div>
              <h1 className="text-xl font-bold text-white">
                {isRandom ? 'Random Practice' : displaySubtopic}
              </h1>
              <p className="text-[#666666] text-sm">
                {practical.name} • {examBoardInfo?.name} {levelDisplay}
                {isRandom && currentSubtopic && (
                  <span className="ml-2 text-[#10b981]">
                    — Currently: {currentSubtopic}
                  </span>
                )}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 mt-1">
            <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-[#10b981]/20 text-[#10b981]">
              Required Practical
            </span>
            {isRandom && (
              <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-[#3b82f6]/20 text-[#60a5fa]">
                Random Mode
              </span>
            )}
            {level === 'a-level' && (
              <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400">
                A-Level
              </span>
            )}
          </div>
        </header>

        <div className="flex items-center justify-between mb-3">
          <DifficultySelector
            selected={difficulty}
            onChange={handleDifficultyChange}
            disabled={isStreaming}
          />

          {sessionStats.attempted > 0 && (
            <div className="text-sm text-[#666666]">
              Session: {sessionStats.correct}/{sessionStats.attempted} correct
            </div>
          )}
        </div>

        {error && !isStreaming && (
          <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-6 mb-6 animate-fade-in">
            <p className="text-red-400 mb-4">{error}</p>
            <button
              onClick={generateQuestion}
              className="px-4 py-2 bg-red-500 text-white rounded-lg transition-all duration-300 hover:bg-red-400 hover:shadow-[0_0_15px_rgba(239,68,68,0.4)] active:scale-95"
            >
              Try again
            </button>
          </div>
        )}

        {(isStreaming || question) && !error && (
          <div className="space-y-4 animate-fade-in">
            <StreamingQuestionCard
              question={question}
              streamedContent={streamedContent}
              isStreaming={isStreaming}
              questionNumber={questionNumber}
              userId={userId}
              subtopic={currentSubtopic || subtopic}
            />

            {/* Show solution panel or loading placeholder */}
            {question ? (
              <>
                <SolutionPanel
                  question={question}
                  onMark={handleMark}
                  isMarked={isMarked}
                />

                {isMarked && (
                  <button
                    onClick={handleNextQuestion}
                    className="w-full py-4 px-6 bg-[#10b981] text-white rounded-xl font-medium transition-all duration-300 hover:bg-[#34d399] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] active:scale-[0.98]"
                  >
                    Next Question
                  </button>
                )}
              </>
            ) : isStreaming && streamedContent && (
              <button
                disabled
                className="w-full py-4 px-6 bg-[var(--color-bg-elevated)] text-[var(--color-text-muted)] rounded-xl font-medium border border-[var(--color-border)] cursor-not-allowed"
              >
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Preparing Solution...
                </span>
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
