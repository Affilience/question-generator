'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useParams, useRouter, notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { getTopicsBySubjectBoardAndLevel, getExamBoardInfo, getExamBoardsByLevel } from '@/lib/topics';
import { PaperBuilder, PaperConfig } from '@/components/paper/PaperBuilder';
import { Header } from '@/components/Header';
import { Breadcrumbs, buildBreadcrumbs } from '@/components/ui/Breadcrumbs';
import { QualificationLevel, Subject, ExamBoard } from '@/types';
import { useSubscription } from '@/contexts/SubscriptionContext';
import { useAuth } from '@/contexts/AuthContext';
import { UpgradePrompt, PaperUsageIndicator } from '@/components/UpgradePrompt';

const validLevels: QualificationLevel[] = ['gcse', 'a-level'];
const validExamBoards: ExamBoard[] = ['aqa', 'edexcel', 'ocr'];
const validSubjects: Subject[] = ['maths', 'physics', 'chemistry', 'biology', 'computer-science', 'economics', 'business', 'psychology', 'geography', 'history', 'english-literature', 'further-maths', 'combined-science'];

const subjectInfo: Partial<Record<Subject, { name: string; icon: string }>> = {
  maths: { name: 'Maths', icon: '📐' },
  physics: { name: 'Physics', icon: '⚛️' },
  chemistry: { name: 'Chemistry', icon: '🧪' },
  biology: { name: 'Biology', icon: '🧬' },
  'computer-science': { name: 'Computer Science', icon: '💻' },
  economics: { name: 'Economics', icon: '📈' },
  business: { name: 'Business', icon: '💼' },
  psychology: { name: 'Psychology', icon: '🧠' },
  geography: { name: 'Geography', icon: '🌍' },
  history: { name: 'History', icon: '📜' },
  'english-literature': { name: 'English Literature', icon: '📚' },
  'further-maths': { name: 'Further Maths', icon: '∑' },
  'combined-science': { name: 'Combined Science', icon: '🔬' },
};

export default function PaperGeneratorPage() {
  const params = useParams();
  const router = useRouter();
  const level = params.level as string;
  const subject = params.subject as string;
  const examBoard = params.examBoard as string;

  const [isGenerating, setIsGenerating] = useState(false);
  const [generationProgress, setGenerationProgress] = useState<{ current: number; total: number } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [showUpgradePrompt, setShowUpgradePrompt] = useState(false);
  const [upgradeReason, setUpgradeReason] = useState<'papers' | 'papers_limit_reached'>('papers');
  const pollingRef = useRef<NodeJS.Timeout | null>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  const { user } = useAuth();
  const { canGeneratePaper, tier, loading: subscriptionLoading } = useSubscription();

  // Cleanup polling and abort controller on unmount
  useEffect(() => {
    return () => {
      if (pollingRef.current) {
        clearInterval(pollingRef.current);
      }
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, []);

  // Validate params
  if (!validLevels.includes(level as QualificationLevel)) {
    notFound();
  }
  if (!validSubjects.includes(subject as Subject)) {
    notFound();
  }
  if (!validExamBoards.includes(examBoard as ExamBoard)) {
    notFound();
  }

  // Check if exam board supports this level
  const boardsForLevel = getExamBoardsByLevel(level as QualificationLevel);
  if (!boardsForLevel.find((b) => b.id === examBoard)) {
    notFound();
  }

  const examBoardInfo = getExamBoardInfo(examBoard as ExamBoard);
  const topics = getTopicsBySubjectBoardAndLevel(
    subject as Subject,
    examBoard as ExamBoard,
    level as QualificationLevel
  );
  const subjectData = subjectInfo[subject as Subject];
  const levelDisplay = level === 'a-level' ? 'A-Level' : 'GCSE';

  const breadcrumbs = [
    ...buildBreadcrumbs({ level, subject, examBoard }),
    { label: 'Paper Generator', icon: '📝' },
  ];

  const handleGenerate = async (config: PaperConfig) => {
    // Check if user can generate papers
    if (!user) {
      setError('Please sign in to generate practice papers.');
      router.push(`/login?redirect=/${level}/${subject}/${examBoard}/paper`);
      return;
    }

    if (!canGeneratePaper) {
      // Determine the right reason: free users need to upgrade, paid users hit their limit
      setUpgradeReason(tier === 'free' ? 'papers' : 'papers_limit_reached');
      setShowUpgradePrompt(true);
      return;
    }

    setIsGenerating(true);
    setGenerationProgress(null);
    setError(null);

    // Create abort controller for this generation session
    abortControllerRef.current = new AbortController();
    const signal = abortControllerRef.current.signal;

    try {
      // Start the background job
      const startResponse = await fetch('/api/papers/start', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          examBoard,
          qualification: level,
          subject,
          paperName: `${examBoard.toUpperCase()} ${level === 'gcse' ? 'GCSE' : 'A-Level'} ${subjectData?.name || subject} Practice Paper`,
          config,
          userId: user.id,
        }),
        signal,
      });

      const startData = await startResponse.json();

      if (!startResponse.ok) {
        if (startData.upgrade) {
          // Determine the right reason based on tier
          setUpgradeReason(tier === 'free' ? 'papers' : 'papers_limit_reached');
          setShowUpgradePrompt(true);
          setIsGenerating(false);
          return;
        }
        throw new Error(startData.error || 'Failed to start paper generation');
      }

      const { jobId, totalQuestions } = startData;
      setGenerationProgress({ current: 0, total: totalQuestions });

      // Poll for status
      const pollStatus = async () => {
        // Skip if aborted
        if (signal.aborted) return;

        try {
          const statusResponse = await fetch(`/api/papers/status/${jobId}`, { signal });
          const statusData = await statusResponse.json();

          if (!statusResponse.ok) {
            // Stop polling on error
            if (pollingRef.current) {
              clearInterval(pollingRef.current);
              pollingRef.current = null;
            }
            setError(statusData.error || 'Failed to check status');
            setIsGenerating(false);
            setGenerationProgress(null);
            return;
          }

          // Update progress
          setGenerationProgress({
            current: statusData.progress.current,
            total: statusData.progress.total,
          });

          if (statusData.status === 'completed') {
            // Stop polling
            if (pollingRef.current) {
              clearInterval(pollingRef.current);
              pollingRef.current = null;
            }

            // Store paper in localStorage for the take page
            if (statusData.paper) {
              localStorage.setItem(`paper-${statusData.paperId}`, JSON.stringify(statusData.paper));
            }

            // Navigate to paper taking view
            router.push(`/paper/take/${statusData.paperId}`);
          } else if (statusData.status === 'failed') {
            // Stop polling
            if (pollingRef.current) {
              clearInterval(pollingRef.current);
              pollingRef.current = null;
            }
            setError(statusData.error || 'Paper generation failed');
            setIsGenerating(false);
            setGenerationProgress(null);
          }
          // If still processing or pending, continue polling
        } catch (err) {
          // Ignore abort errors (component unmounted)
          if (err instanceof Error && err.name === 'AbortError') {
            return;
          }
          // Stop polling on error
          if (pollingRef.current) {
            clearInterval(pollingRef.current);
            pollingRef.current = null;
          }
          console.error('Polling error:', err);
          setError(err instanceof Error ? err.message : 'Failed to check generation status');
          setIsGenerating(false);
          setGenerationProgress(null);
        }
      };

      // Start polling every 2 seconds
      pollingRef.current = setInterval(pollStatus, 2000);

      // Also do an immediate check
      pollStatus();

    } catch (err) {
      // Ignore abort errors (component unmounted)
      if (err instanceof Error && err.name === 'AbortError') {
        return;
      }
      console.error('Paper generation error:', err);
      setError(err instanceof Error ? err.message : 'Failed to generate paper. Please try again.');
      setIsGenerating(false);
      setGenerationProgress(null);
      if (pollingRef.current) {
        clearInterval(pollingRef.current);
        pollingRef.current = null;
      }
    }
  };

  return (
    <div className="min-h-screen bg-[var(--color-bg-deepest)]">
      <Header />

      {/* Upgrade prompt modal */}
      {showUpgradePrompt && (
        <UpgradePrompt
          reason={upgradeReason}
          modal={true}
          onDismiss={() => setShowUpgradePrompt(false)}
        />
      )}

      <div className="max-w-4xl mx-auto px-4 py-6 sm:py-8">
        <Breadcrumbs items={breadcrumbs} className="mb-6" />

        <motion.header
          className="mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="text-4xl">📝</span>
            <h1 className="text-2xl sm:text-3xl font-bold text-white">
              Practice Paper Generator
            </h1>
          </div>
          <p className="text-[#a1a1a1]">
            Create a custom {examBoardInfo?.name} {levelDisplay} {subjectData?.name} practice paper
          </p>
          {tier === 'free' && !subscriptionLoading && (
            <div className="mt-3 inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-sm px-3 py-1.5 rounded-lg">
              <span>⭐</span>
              <span>Paper generation requires Student Plus</span>
              <Link href="/pricing" className="underline hover:text-yellow-300">Upgrade</Link>
            </div>
          )}
          {tier !== 'free' && !subscriptionLoading && (
            <div className="mt-4">
              <PaperUsageIndicator />
            </div>
          )}
        </motion.header>

        {error && (
          <motion.div
            className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {error}
          </motion.div>
        )}

        <PaperBuilder
          topics={topics}
          examBoard={examBoard as ExamBoard}
          level={level as QualificationLevel}
          subject={subject as Subject}
          onGenerate={handleGenerate}
          isGenerating={isGenerating}
        />

        <div className="mt-8 flex justify-center">
          <Link
            href={`/${level}/${subject}/${examBoard}/paper/history`}
            className="text-[#666666] hover:text-[#a1a1a1] transition-colors flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            View paper history
          </Link>
        </div>
      </div>

      {/* Generation Progress Indicator - Fixed at bottom */}
      {isGenerating && (
        <motion.div
          className="fixed bottom-0 left-0 right-0 z-50 bg-[#0d0d0d]/95 backdrop-blur-sm border-t border-[#2d2d3d]"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
        >
          <div className="max-w-4xl mx-auto px-4 py-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-blue-400 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-white font-medium text-sm sm:text-base truncate">
                    {generationProgress
                      ? `Generating question ${generationProgress.current} of ${generationProgress.total}`
                      : 'Preparing your practice paper...'}
                  </h3>
                  {generationProgress && (
                    <span className="text-blue-400 font-medium text-sm ml-2">
                      {Math.round((generationProgress.current / generationProgress.total) * 100)}%
                    </span>
                  )}
                </div>
                {generationProgress && (
                  <div className="h-2 bg-[#2d2d3d] rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                      initial={{ width: 0 }}
                      animate={{ width: `${(generationProgress.current / generationProgress.total) * 100}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
