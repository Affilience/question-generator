'use client';

import { useEffect, useState, useCallback, useRef } from 'react';
import { useParams, useRouter, notFound } from 'next/navigation';
import Link from 'next/link';
import { getTopicByIdSubjectBoardAndLevel, getExamBoardInfo, getExamBoardsByLevel } from '@/lib/topics';
import { slugify } from '@/lib/seo/utils';
import { updateProgress } from '@/lib/progress';
import { useAuth } from '@/contexts/AuthContext';
import { recordProgress } from '@/lib/api/progress';
import { Question, Difficulty, Topic, ExamBoard, QualificationLevel, Subject } from '@/types';
import { StreamingQuestionCard } from '@/components/StreamingQuestionCard';
import { SolutionPanel } from '@/components/SolutionPanel';
import { DifficultySelector } from '@/components/DifficultySelector';
import { useStreamingQuestion } from '@/hooks/useStreamingQuestion';
import { useIsMobile } from '@/hooks/useIsMobile';
import { QuestionFeed } from '@/components/mobile/QuestionFeed';
import { UpgradePrompt, UsageIndicator } from '@/components/UpgradePrompt';

// Loading states for better UX
type LoadingState = 'idle' | 'streaming' | 'done';

const validLevels: QualificationLevel[] = ['gcse', 'a-level'];
const validExamBoards: ExamBoard[] = ['aqa', 'edexcel', 'ocr'];
const validSubjects: Subject[] = [
  'maths', 'physics', 'chemistry', 'biology',
  'computer-science', 'economics', 'business', 'psychology',
  'geography', 'history', 'english-literature', 'further-maths',
  'combined-science'
];

export default function SubtopicPracticePage() {
  const params = useParams();
  const router = useRouter();
  const isMobile = useIsMobile();

  // Extract params with fallbacks for loading state
  const level = (params.level as string) || '';
  const subject = (params.subject as string) || '';
  const examBoard = (params.examBoard as string) || '';
  const topicId = (params.topicId as string) || '';
  const subtopicParam = (params.subtopic as string) || '';
  const subtopic = subtopicParam ? decodeURIComponent(subtopicParam) : '';
  const isRandom = subtopic === 'random';

  // All hooks must be called before any conditional returns
  const { user } = useAuth();
  const [topic, setTopic] = useState<Topic | null>(null);
  const [difficulty, setDifficulty] = useState<Difficulty>('medium');
  const [questionNumber, setQuestionNumber] = useState(1);
  const [isMarked, setIsMarked] = useState(false);
  const [sessionStats, setSessionStats] = useState({ attempted: 0, correct: 0 });
  const [correctStreak, setCorrectStreak] = useState(0);
  const [currentSubtopic, setCurrentSubtopic] = useState<string>('');
  const [paramsReady, setParamsReady] = useState(false);
  const seenQuestionsRef = useRef<string[]>([]);
  const hasGeneratedRef = useRef(false);
  const qualification = level as QualificationLevel;
  const userId = user?.id || null;

  // Use the streaming hook
  const {
    isStreaming,
    streamedContent,
    question,
    error,
    upgradeNeeded,
    generate,
  } = useStreamingQuestion();

  // Check if params are ready (handles client-side navigation)
  useEffect(() => {
    if (subtopicParam && level && subject && examBoard && topicId) {
      setParamsReady(true);
    }
  }, [subtopicParam, level, subject, examBoard, topicId]);

  // Derived values (only valid when params are ready)
  const examBoardInfo = paramsReady ? getExamBoardInfo(examBoard as ExamBoard) : null;
  const levelDisplay = level === 'a-level' ? 'A-Level' : 'GCSE';
  const boardsForLevel = paramsReady ? getExamBoardsByLevel(level as QualificationLevel) : [];

  // Load topic when params are ready
  useEffect(() => {
    if (paramsReady) {
      let foundTopic = getTopicByIdSubjectBoardAndLevel(topicId, subject as Subject, examBoard as ExamBoard, level as QualificationLevel);
      
      // If topic not found, try common fallbacks for wave topics
      if (!foundTopic && topicId === 'wave-properties' && subject === 'physics' && level === 'a-level') {
        foundTopic = getTopicByIdSubjectBoardAndLevel('alevel-physics-waves', subject as Subject, examBoard as ExamBoard, level as QualificationLevel);
      }
      
      setTopic(foundTopic || null);
    }
  }, [paramsReady, topicId, subject, examBoard, level]);

  const generateQuestion = useCallback(async () => {
    if (!topic) return;

    setIsMarked(false);

    // For random mode, pick a random subtopic each time
    // For specific subtopic, look up the actual name from the URL slug
    const actualSubtopicName = topic.subtopics.find(s => slugify(s) === subtopic);
    const selectedSubtopic = isRandom
      ? topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)]
      : actualSubtopicName || subtopic;

    setCurrentSubtopic(selectedSubtopic);

    // Pass all seen question prefixes to avoid repeats (cache exhaustion)
    const excludeContent = seenQuestionsRef.current.map(q => q.substring(0, 100));

    const result = await generate({
      topicId: topic.id,
      difficulty,
      subtopic: selectedSubtopic,
      examBoard: examBoard as ExamBoard,
      qualification: qualification as QualificationLevel,
      subject: subject as Subject,
      excludeContent,
    });

    if (result) {
      seenQuestionsRef.current.push(result.content);
    }
  }, [topic?.id, topic, difficulty, subtopic, isRandom, examBoard, subject, generate]);

  // Generate question when topic loads (only once)
  useEffect(() => {
    if (topic && !hasGeneratedRef.current) {
      hasGeneratedRef.current = true;
      generateQuestion();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [topic]); // Only depend on topic, not generateQuestion to avoid loops

  // Generate new question when difficulty changes
  useEffect(() => {
    if (topic && hasGeneratedRef.current) {
      generateQuestion();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [difficulty]); // Only depend on difficulty

  const handleMark = async (correct: boolean) => {
    setIsMarked(true);

    // Update local session stats
    setSessionStats((prev) => ({
      attempted: prev.attempted + 1,
      correct: prev.correct + (correct ? 1 : 0),
    }));

    // Update localStorage for non-logged-in users
    updateProgress(topicId, correct);

    // Record to Supabase via API (handles XP, achievements, streaks)
    if (userId && question) {
      const result = await recordProgress({
        userId,
        topicId,
        subtopic: currentSubtopic || subtopic,
        difficulty,
        correct,
        questionContent: question.content,
        questionSolution: question.solution,
        subject,
        examBoard,
        qualification: level,
        correctStreak,
      });

      if (result.success) {
        // Update correct streak from server
        setCorrectStreak(result.correctStreak);

        // Could show XP notification here
        // result.xpGained, result.leveledUp, result.newAchievements
      }
    } else {
      // Update local streak for non-logged-in users
      setCorrectStreak(correct ? correctStreak + 1 : 0);
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

  // All hooks are now declared above. Conditional returns start here.

  // Handle loading state - params not yet available
  if (!paramsReady) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-[#666666]">Loading...</div>
      </div>
    );
  }

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
  if (!boardsForLevel.find(b => b.id === examBoard)) {
    notFound();
  }

  // Show loading while topic is being fetched
  if (!topic) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-[#666666]">Loading topic...</div>
      </div>
    );
  }

  // Find the actual subtopic name from the slug (subtopic param is URL-encoded slug)
  // First decode the URL param to handle any double-encoding issues
  const decodedSubtopic = decodeURIComponent(subtopic);
  let subtopicName = topic.subtopics.find(s => slugify(s) === decodedSubtopic);

  // If no exact match with decoded version, try with original
  if (!subtopicName) {
    subtopicName = topic.subtopics.find(s => slugify(s) === subtopic);
  }

  // If still no match and not random, try fuzzy matching for backwards compatibility
  if (!subtopicName && !isRandom) {
    // Generate what the old broken slugification would have produced
    const brokenSlugify = (s: string) => s
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-+|-+$/g, '')
      .trim();

    // Try fuzzy matching with both decoded and original
    let fuzzyMatch = topic.subtopics.find(s => brokenSlugify(s) === decodedSubtopic);
    if (!fuzzyMatch) {
      fuzzyMatch = topic.subtopics.find(s => brokenSlugify(s) === subtopic);
    }

    if (fuzzyMatch) {
      // Redirect to the correct URL
      const correctSlug = slugify(fuzzyMatch);
      router.replace(`/${level}/${subject}/${examBoard}/practice/${topicId}/${correctSlug}`);
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-pulse text-[#666666]">Redirecting...</div>
        </div>
      );
    }
  }

  // Validate subtopic exists (unless random)
  if (!isRandom && !subtopicName) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-2">Subtopic not found</h1>
          <p className="text-[#a1a1a1] mb-4">&quot;{subtopic}&quot; is not a valid subtopic</p>
          <Link
            href={`/${level}/${subject}/${examBoard}/practice/${topicId}`}
            className="text-[#3b82f6] hover:text-[#60a5fa] transition-colors"
          >
            Choose a different subtopic
          </Link>
        </div>
      </div>
    );
  }

  // Use the actual subtopic name for display and API calls
  const resolvedSubtopic = subtopicName || '';
  const displaySubtopic = isRandom ? currentSubtopic : resolvedSubtopic;
  const isHigher = displaySubtopic.includes('(H)');

  // Mobile TikTok-style feed view
  if (isMobile && topic) {
    return (
      <QuestionFeed
        topic={topic}
        subtopic={isRandom ? 'random' : resolvedSubtopic}
        examBoard={examBoard}
        level={level}
        subject={subject}
        initialDifficulty={difficulty}
        userId={userId}
        onBack={() => router.push(`/${level}/${subject}/${examBoard}/practice/${topicId}`)}
      />
    );
  }

  return (
    <div className="min-h-screen">
      <div className="max-w-3xl mx-auto px-4 pt-4 pb-8">
        <header className="mb-4">
          <Link
            href={`/${level}/${subject}/${examBoard}/practice/${topicId}`}
            className="inline-flex items-center text-sm text-[#666666] hover:text-[#a1a1a1] transition-colors mb-2"
          >
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to {topic.name} subtopics
          </Link>

          <div className="flex items-center gap-3">
            <span className="text-2xl">{topic.icon}</span>
            <div>
              <h1 className="text-xl font-bold text-white">
                {isRandom ? 'Random Practice' : displaySubtopic.replace(' (H)', '')}
              </h1>
              <p className="text-[#666666] text-sm">
                {topic.name} • {examBoardInfo?.name} {levelDisplay}
                {isRandom && currentSubtopic && (
                  <span className="ml-2 text-[#3b82f6]">
                    — Currently: {currentSubtopic.replace(' (H)', '')}
                  </span>
                )}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 mt-1">
            {isRandom && (
              <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-[#3b82f6]/20 text-[#60a5fa]">
                Random Mode
              </span>
            )}
            {isHigher && (
              <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-400">
                Higher Tier
              </span>
            )}
            {level === 'a-level' && (
              <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400">
                A-Level
              </span>
            )}
            {/* View Examples link - only for specific subtopics, not random */}
            {!isRandom && (
              <Link
                href={`/${level}/${subject}/${examBoard}/practice/${topicId}/${encodeURIComponent(subtopic)}/examples`}
                className="inline-flex items-center gap-1.5 text-xs text-[#3b82f6] hover:text-[#60a5fa] transition-colors ml-auto"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Examples
              </Link>
            )}
          </div>
        </header>

        <div className="flex items-center justify-between mb-3">
          <DifficultySelector
            selected={difficulty}
            onChange={handleDifficultyChange}
            disabled={isStreaming}
          />

          <div className="flex items-center gap-4">
            <UsageIndicator />
            {sessionStats.attempted > 0 && (
              <div className="text-sm text-[#666666]">
                Session: {sessionStats.correct}/{sessionStats.attempted} correct
              </div>
            )}
          </div>
        </div>

        {error && !isStreaming && (
          upgradeNeeded ? (
            <div className="mb-6 animate-fade-in">
              <UpgradePrompt reason="daily_limit" message={error} />
            </div>
          ) : (
            <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-6 mb-6 animate-fade-in">
              <p className="text-red-400 mb-4">{error}</p>
              <button
                onClick={generateQuestion}
                className="px-4 py-2 bg-red-500 text-white rounded-lg transition-all duration-300 hover:bg-red-400 hover:shadow-[0_0_15px_rgba(239,68,68,0.4)] active:scale-95"
              >
                Try again
              </button>
            </div>
          )
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
                    className="w-full py-4 px-6 bg-[#3b82f6] text-white rounded-xl font-medium transition-all duration-300 hover:bg-[#60a5fa] hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] active:scale-[0.98]"
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
