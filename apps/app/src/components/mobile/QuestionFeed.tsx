'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { Question, Difficulty, Topic, Practical, PracticalSubtopic } from '@/types';
import { DiagramSpec } from '@/types/diagram';
import { QuestionSlide } from './QuestionSlide';
import { SwipeHint, useSwipeHint } from './SwipeHint';
import { UpgradePrompt } from '../UpgradePrompt';
import { useSubscription } from '@/contexts/SubscriptionContext';
import { useAuth } from '@/contexts/AuthContext';
import { createClient } from '@/lib/supabase/client';
import { authHeaders } from '@/lib/api/client-auth';

interface QuestionFeedProps {
  // For regular topics
  topic?: Topic;
  // For practicals
  practical?: Practical;
  subtopic: string;
  examBoard: string;
  level: string;
  subject: string;
  initialDifficulty: Difficulty;
  userId?: string | null;
  onBack: () => void;
}

interface GeneratedQuestion extends Question {
  isMarked: boolean;
  diagram?: DiagramSpec;
  /** The subtopic actually served, which differs from the `subtopic` prop
   *  during random practice. Progress is recorded against this. */
  subtopic?: string;
}

export function QuestionFeed({
  topic,
  practical,
  subtopic,
  examBoard,
  level,
  subject,
  initialDifficulty,
  userId,
  onBack,
}: QuestionFeedProps) {
  // Determine if this is a practical or topic feed
  const isPractical = !!practical;
  const itemId = practical?.id || topic?.id || '';
  const itemName = practical?.name || topic?.name || '';
  const subtopics = practical?.subtopics || topic?.subtopics || [];

  const [questions, setQuestions] = useState<GeneratedQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [difficulty, setDifficulty] = useState<Difficulty>(initialDifficulty);
  const [isGenerating, setIsGenerating] = useState(false);
  const [streamingContent, setStreamingContent] = useState('');
  const [sessionStats, setSessionStats] = useState({ attempted: 0, correct: 0 });
  const [correctStreak, setCorrectStreak] = useState(0);
  const [xpGained, setXpGained] = useState<number | null>(null);
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const [upgradeReason, setUpgradeReason] = useState<'daily_limit' | 'auth_required'>('daily_limit');
  const [upgradeMessage, setUpgradeMessage] = useState<string>();
  const [generationError, setGenerationError] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const previousQuestionsRef = useRef<string[]>([]);
  const isGeneratingRef = useRef(false); // Ref to track generation state without re-renders
  const questionsLengthRef = useRef(0); // Ref to track questions length
  const { showHint, dismissHint } = useSwipeHint();
  const { user } = useAuth();
  const { refreshSubscription } = useSubscription();

  // Keep refs in sync
  useEffect(() => {
    isGeneratingRef.current = isGenerating;
  }, [isGenerating]);

  useEffect(() => {
    questionsLengthRef.current = questions.length;
  }, [questions.length]);

  // Generate a new question with streaming
  const generateQuestion = useCallback(async () => {
    // Use ref for immediate check to prevent race conditions
    if (isGeneratingRef.current) return;
    isGeneratingRef.current = true; // Set immediately before async work
    setIsGenerating(true);
    setStreamingContent('');
    setGenerationError(null);

    // Select random subtopic if needed
    const selectedSubtopic = subtopic === 'random'
      ? subtopics[Math.floor(Math.random() * subtopics.length)]
      : subtopic;

    try {
      // Get auth session for proper user tracking
      const supabase = createClient();
      const { data: { session } } = await supabase.auth.getSession();
      
      // Use the faster generate-question-stream endpoint (uses Groq when available)
      const response = await fetch('/api/generate-question-stream', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          ...(session?.access_token && { 'Authorization': `Bearer ${session.access_token}` })
        },
        body: JSON.stringify({
          // For practicals, use practicalId; for topics, use topicId
          ...(isPractical ? { practicalId: itemId, isPractical: true } : { topicId: itemId }),
          subtopic: selectedSubtopic,
          difficulty,
          examBoard,
          qualification: level,
          subject,
          stream: true,
          excludeContent: previousQuestionsRef.current.map(q => q.substring(0, 100)),
        }),
        credentials: 'include', // Include cookies for server-side auth
      });

      if (!response.ok) {
        if (response.status === 429) {
          // Handle rate limit - show upgrade prompt
          const errorData = await response.json();
          setUpgradeMessage(errorData.error || 'Daily limit reached');
          setUpgradeReason(errorData.error?.includes('sign up') ? 'auth_required' : 'daily_limit');
          setShowUpgradeModal(true);
          return;
        }
        throw new Error('Failed to generate question');
      }

      // Check content-type to determine response format
      // Note: cached responses are now also streamed for consistent UX
      const contentType = response.headers.get('content-type');

      if (contentType?.includes('application/json')) {
        // Non-streaming JSON response (fallback only)
        const data = await response.json();
        const newQuestion: GeneratedQuestion = {
          id: data.id || crypto.randomUUID(),
          topicId: data.topicId || itemId,
          difficulty: data.difficulty || difficulty,
          subtopic: data.subtopic || selectedSubtopic,
          content: data.content,
          solution: data.solution,
          marks: data.marks,
          markScheme: data.markScheme || [],
          diagram: data.diagram,
          isMarked: false,
        };
        setQuestions((prev) => [...prev, newQuestion]);
        previousQuestionsRef.current.push(data.content);
        setStreamingContent('');
        
        // Usage is counted server-side by the generation route; just refresh
        // local subscription state so remaining-quota UI stays accurate
        if (user) {
          refreshSubscription();
        }
        return;
      }

      // Streaming response
      const reader = response.body?.getReader();
      if (!reader) throw new Error('No reader available');

      const decoder = new TextDecoder();
      let accumulatedContent = '';
      let buffer = ''; // Buffer for incomplete SSE events
      let questionAdded = false;

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        // Add new data to buffer
        buffer += decoder.decode(value, { stream: true });

        // SSE events are separated by \n\n - process complete events
        const events = buffer.split('\n\n');
        // Keep the last part in buffer (may be incomplete)
        buffer = events.pop() || '';

        for (const event of events) {
          const lines = event.split('\n');
          for (const line of lines) {
            if (line.startsWith('data: ')) {
              try {
                const jsonStr = line.slice(6).trim();
                if (!jsonStr) continue;

                const data = JSON.parse(jsonStr);

                // Surface server-sent errors. These were previously dropped
                // (the branches below only look at content/done), leaving the
                // placeholder slide on its loading animation forever with no
                // message and no way to retry.
                if (data.error) {
                  throw new Error(
                    typeof data.error === 'string' ? data.error : 'Generation failed'
                  );
                }

                // Handle streaming content chunks
                if (data.content && typeof data.content === 'string' && !data.done) {
                  accumulatedContent += data.content;
                  setStreamingContent(accumulatedContent);
                }

                // Handle complete question (done event with question object)
                if (data.done && data.question) {
                  const questionData = data.question;
                  const newQuestion: GeneratedQuestion = {
                    id: questionData.id || crypto.randomUUID(),
                    topicId: questionData.topicId || itemId,
                    difficulty: questionData.difficulty || difficulty,
                    subtopic: questionData.subtopic || selectedSubtopic,
                    content: questionData.content,
                    solution: questionData.solution,
                    marks: questionData.marks,
                    markScheme: questionData.markScheme || [],
                    diagram: questionData.diagram,
                    isMarked: false,
                  };
                  setQuestions((prev) => [...prev, newQuestion]);
                  previousQuestionsRef.current.push(questionData.content);
                  questionAdded = true;
                  
                  // Usage is counted server-side by the generation route;
                  // just refresh local subscription state
                  if (user) {
                    refreshSubscription();
                  }
                }
              } catch (e) {
                // A genuine generation error must propagate to the outer catch
                // so the UI can show it; only malformed SSE frames are ignored.
                if (e instanceof Error && !(e instanceof SyntaxError)) throw e;
                console.warn('SSE parse error:', e);
              }
            }
          }
        }
      }

      // A stream that ended without producing a question is a failure too —
      // otherwise the placeholder slide sits on its loading animation forever.
      if (!questionAdded) {
        console.warn('Stream ended without a question');
        setGenerationError("That question didn't come through. Tap to try again.");
      }
    } catch (error) {
      console.error('Error generating question:', error);
      setGenerationError(
        error instanceof Error && error.message
          ? error.message
          : "Something went wrong generating that question."
      );
    } finally {
      isGeneratingRef.current = false; // Reset ref immediately
      setIsGenerating(false);
      setStreamingContent('');
    }
  }, [isPractical, itemId, subtopics, subtopic, difficulty, examBoard, level, subject]);

  // Generate initial question only (on mount)
  useEffect(() => {
    if (questionsLengthRef.current === 0 && !isGeneratingRef.current) {
      generateQuestion();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Handle scroll - when user scrolls to the next slide position, start generating
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let scrollTimeout: NodeJS.Timeout | null = null;

    const handleScroll = () => {
      // Debounce scroll handling to prevent multiple triggers
      if (scrollTimeout) clearTimeout(scrollTimeout);

      scrollTimeout = setTimeout(() => {
        const scrollTop = container.scrollTop;
        const slideHeight = container.clientHeight;
        const scrolledToSlide = Math.round(scrollTop / slideHeight);

        // Update current index
        setCurrentIndex(scrolledToSlide);

        // If user scrolled to a position beyond existing questions, start generating
        // Use refs to get current values without causing effect re-runs
        if (scrolledToSlide >= questionsLengthRef.current && !isGeneratingRef.current) {
          generateQuestion();
        }
      }, 100); // 100ms debounce
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      container.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [generateQuestion]); // Only depend on generateQuestion

  // Handle marking a question
  const handleMark = useCallback(async (index: number, correct: boolean) => {
    setQuestions((prev) =>
      prev.map((q, i) => (i === index ? { ...q, isMarked: true } : q))
    );
    setSessionStats((prev) => ({
      attempted: prev.attempted + 1,
      correct: prev.correct + (correct ? 1 : 0),
    }));

    // Update correct streak locally
    const newStreak = correct ? correctStreak + 1 : 0;
    setCorrectStreak(newStreak);

    // Record attempt if user is logged in
    if (userId) {
      try {
        // Report what was actually served, not what the UI has selected:
        // `subtopic` is the literal 'random' during random practice, and free
        // users get a server-chosen difficulty that ignores the picker. Sending
        // the UI values filed every random-practice attempt under "random" and
        // logged difficulties that were never served.
        const answered = questions[index];
        const servedSubtopic = answered?.subtopic || (subtopic === 'random' ? undefined : subtopic);
        const servedDifficulty = answered?.difficulty || difficulty;

        if (!servedSubtopic) {
          console.warn('[QuestionFeed] No subtopic recorded for question; skipping progress write');
          return;
        }

        const response = await fetch('/api/progress/record', {
          method: 'POST',
          headers: await authHeaders(),
          body: JSON.stringify({
            topicId: itemId,
            subtopic: servedSubtopic,
            correct,
            difficulty: servedDifficulty,
            subject,
            examBoard,
            qualification: level,
            correctStreak,
          }),
        });

        if (response.ok) {
          const data = await response.json();
          if (data.xpGained) {
            setXpGained(data.xpGained);
            // Clear XP display after 2 seconds
            setTimeout(() => setXpGained(null), 2000);
          }
        }
      } catch (err) {
        console.error('Failed to record progress:', err);
      }
    }
    // Note: Don't auto-generate here - let scroll handler trigger generation
  }, [questions, userId, itemId, subtopic, difficulty, subject, examBoard, level, correctStreak]);

  // Handle next question (scroll to next slide)
  const handleNextQuestion = useCallback((index: number) => {
    const container = containerRef.current;
    if (!container) return;

    const nextIndex = index + 1;
    container.scrollTo({
      top: nextIndex * container.clientHeight,
      behavior: 'smooth',
    });
  }, []);

  // Handle difficulty change - generates new question at new difficulty
  const handleDifficultyChange = useCallback((newDifficulty: Difficulty) => {
    if (newDifficulty !== difficulty) {
      setDifficulty(newDifficulty);
    }
  }, [difficulty]);

  return (
    <div className="fixed inset-0 bg-[var(--color-bg-deepest)] z-50">
      {/* First-time user hint */}
      <SwipeHint show={showHint} onDismiss={dismissHint} />

      {/* Header overlay */}
      <div className="absolute top-0 left-0 right-0 z-10 p-4 bg-gradient-to-b from-[var(--color-bg-deepest)] via-[var(--color-bg-deepest)]/80 to-transparent safe-area-inset-top">
        <div className="flex items-center justify-between">
          <button
            onClick={onBack}
            className="w-11 h-11 -ml-2 flex items-center justify-center text-[var(--color-text-secondary)] tap-highlight"
            aria-label="Go back"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Topic name */}
          <span className="text-sm font-medium text-[var(--color-text-primary)]">
            {itemName}
          </span>

          {/* Session stats */}
          <div className="flex items-center gap-2 text-sm">
            {sessionStats.attempted > 0 ? (
              <>
                <span className="text-[var(--color-text-muted)]">
                  {sessionStats.correct}/{sessionStats.attempted}
                </span>
                <span className={`font-semibold ${
                  sessionStats.correct / sessionStats.attempted >= 0.7
                    ? 'text-[var(--color-success)]'
                    : sessionStats.correct / sessionStats.attempted >= 0.4
                    ? 'text-[var(--color-warning)]'
                    : 'text-[var(--color-error)]'
                }`}>
                  {Math.round((sessionStats.correct / sessionStats.attempted) * 100)}%
                </span>
              </>
            ) : (
              <span className="text-[var(--color-text-muted)]">0/0</span>
            )}
          </div>
        </div>

        {/* XP Gain Animation */}
        {xpGained && (
          <div className="absolute right-4 top-16 animate-bounce">
            <span className="text-[var(--color-warning)] font-bold text-sm">
              +{xpGained} XP
            </span>
          </div>
        )}

        {/* Streak indicator */}
        {correctStreak >= 3 && (
          <div className="absolute left-1/2 -translate-x-1/2 top-16">
            <span className="text-orange-500 font-bold text-xs flex items-center gap-1">
              <span>🔥</span> {correctStreak} streak
            </span>
          </div>
        )}
      </div>

      {/* Scrollable feed container */}
      <div
        ref={containerRef}
        className="h-dvh w-full overflow-y-scroll snap-y snap-mandatory scrollbar-hide overscroll-none"
      >
        {questions.map((question, index) => (
          <QuestionSlide
            key={question.id}
            question={question}
            questionNumber={index + 1}
            onMark={(correct) => handleMark(index, correct)}
            onNextQuestion={() => handleNextQuestion(index)}
            isMarked={question.isMarked}
            difficulty={difficulty}
            onDifficultyChange={handleDifficultyChange}
            topicName={itemName}
            subtopic={subtopic}
            userId={userId}
            isActive={index === currentIndex}
          />
        ))}

        {/* Next question slide - always present so user can scroll to it
            Shows streaming content while generating, or empty state to trigger generation */}
        {generationError && !isGenerating ? (
          <div className="h-dvh w-full snap-start flex flex-col items-center justify-center px-8 text-center">
            <p className="text-white/90 text-base mb-6 max-w-xs">{generationError}</p>
            <button
              type="button"
              onClick={() => generateQuestion()}
              className="px-6 py-3 rounded-lg bg-white text-black font-medium min-h-[44px]"
            >
              Try again
            </button>
            <button
              type="button"
              onClick={onBack}
              className="mt-4 px-6 py-3 text-white/60 underline min-h-[44px]"
            >
              Back to subtopics
            </button>
          </div>
        ) : (
          <QuestionSlide
            key={`next-${questions.length}`}
            question={null}
            streamedContent={streamingContent}
            isStreaming={isGenerating}
            questionNumber={questions.length + 1}
            onMark={() => {}}
            onNextQuestion={() => {}}
            isMarked={false}
            difficulty={difficulty}
            onDifficultyChange={handleDifficultyChange}
            topicName={itemName}
            subtopic={subtopic}
            userId={userId}
            isActive={currentIndex >= questions.length}
          />
        )}
      </div>
      
      {/* Upgrade modal */}
      {showUpgradeModal && (
        <UpgradePrompt 
          reason={upgradeReason}
          message={upgradeMessage}
          modal={true}
          onDismiss={() => setShowUpgradeModal(false)}
        />
      )}
    </div>
  );
}
