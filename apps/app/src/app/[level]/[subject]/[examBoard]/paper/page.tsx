'use client';

import { useState } from 'react';
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
import { UpgradePrompt } from '@/components/UpgradePrompt';

const validLevels: QualificationLevel[] = ['gcse', 'a-level'];
const validExamBoards: ExamBoard[] = ['aqa', 'edexcel', 'ocr'];
const validSubjects: Subject[] = ['maths', 'physics', 'chemistry', 'biology', 'computer-science', 'economics', 'business', 'psychology', 'geography', 'history', 'english-literature', 'further-maths'];

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

  const { user } = useAuth();
  const { canGeneratePaper, tier, loading: subscriptionLoading } = useSubscription();

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
      setShowUpgradePrompt(true);
      return;
    }

    setIsGenerating(true);
    setGenerationProgress(null);
    setError(null);

    try {
      const response = await fetch('/api/papers/generate', {
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
      });

      // Check for non-streaming error responses (validation errors, subscription checks)
      const contentType = response.headers.get('content-type');
      if (contentType?.includes('application/json')) {
        const data = await response.json();
        if (!response.ok) {
          if (data.upgrade) {
            setShowUpgradePrompt(true);
            setIsGenerating(false);
            return;
          }
          throw new Error(data.error || 'Failed to generate paper');
        }
      }

      // Handle streaming response
      if (!response.body) {
        throw new Error('No response body');
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let buffer = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n\n');
        buffer = lines.pop() || '';

        for (const line of lines) {
          if (line.startsWith('data: ')) {
            try {
              const data = JSON.parse(line.slice(6));

              if (data.type === 'progress') {
                setGenerationProgress({ current: data.current, total: data.total });
              } else if (data.type === 'complete') {
                // Store paper in localStorage for the take page
                if (data.paper) {
                  localStorage.setItem(`paper-${data.paperId}`, JSON.stringify(data.paper));
                }
                // Navigate to paper taking view
                router.push(`/paper/take/${data.paperId}`);
                return;
              } else if (data.type === 'error') {
                throw new Error(data.error);
              }
            } catch (parseError) {
              console.error('Error parsing SSE data:', parseError);
            }
          }
        }
      }
    } catch (err) {
      console.error('Paper generation error:', err);
      setError(err instanceof Error ? err.message : 'Failed to generate paper. Please try again.');
      setIsGenerating(false);
      setGenerationProgress(null);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--color-bg-deepest)]">
      <Header />

      {/* Upgrade prompt modal */}
      {showUpgradePrompt && (
        <UpgradePrompt
          reason="papers"
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

        {/* Generation Progress Indicator */}
        {isGenerating && (
          <motion.div
            className="mb-6 p-6 bg-[#1a1a2e]/80 border border-[#2d2d3d] rounded-xl"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-400 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-white font-medium">
                  {generationProgress
                    ? `Generating question ${generationProgress.current} of ${generationProgress.total}...`
                    : 'Preparing your practice paper...'}
                </h3>
                <p className="text-sm text-[#a1a1a1]">
                  This may take a moment as we craft exam-style questions for you
                </p>
              </div>
            </div>

            {generationProgress && (
              <div className="space-y-2">
                <div className="h-2 bg-[#2d2d3d] rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${(generationProgress.current / generationProgress.total) * 100}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <p className="text-xs text-[#666666] text-right">
                  {Math.round((generationProgress.current / generationProgress.total) * 100)}% complete
                </p>
              </div>
            )}
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
    </div>
  );
}
