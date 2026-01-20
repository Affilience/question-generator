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
    setError(null);

    try {
      // Store config in session storage for the paper view
      sessionStorage.setItem('paperConfig', JSON.stringify({
        ...config,
        examBoard,
        level,
        subject,
        userId: user.id,
      }));

      // Navigate to paper taking view
      router.push(`/${level}/${subject}/${examBoard}/paper/take`);
    } catch (err) {
      setError('Failed to generate paper. Please try again.');
      setIsGenerating(false);
    }
  };

  // Show full-page upgrade prompt for free users
  const showPremiumGate = !subscriptionLoading && tier === 'free';

  return (
    <div className="min-h-screen bg-[var(--color-bg-deepest)]">
      <Header />

      {/* Full page premium gate for free users */}
      {showPremiumGate && (
        <div className="fixed inset-0 z-50 bg-[var(--color-bg-deepest)]/95 backdrop-blur-sm flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="bg-gradient-to-br from-[#111] to-[#0a0a0a] border border-white/10 rounded-2xl p-8 max-w-lg w-full text-center shadow-2xl"
          >
            <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">📝</span>
            </div>
            <h2 className="text-2xl font-bold text-white mb-3">
              Unlock Practice Papers
            </h2>
            <p className="text-white/60 mb-6 leading-relaxed">
              Create custom practice papers with the topics and difficulty you need.
              Perfect for targeted exam preparation.
            </p>

            <div className="space-y-3 mb-8 text-left">
              {[
                'Generate unlimited practice papers',
                'Choose specific topics to focus on',
                'Set your own difficulty mix',
                'Instant mark schemes included',
              ].map((feature, i) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/80 text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/pricing"
                className="flex-1 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] text-center"
              >
                Upgrade to Student Plus
              </Link>
              <Link
                href={`/${level}/${subject}/${examBoard}`}
                className="flex-1 bg-white/5 hover:bg-white/10 text-white/70 hover:text-white px-6 py-3 rounded-xl font-medium transition-colors text-center"
              >
                Practice Questions Instead
              </Link>
            </div>

            <p className="text-white/40 text-xs mt-4">
              From £3.33/month billed annually
            </p>
          </motion.div>
        </div>
      )}

      {/* Upgrade prompt modal (shown after trying to generate) */}
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
    </div>
  );
}
