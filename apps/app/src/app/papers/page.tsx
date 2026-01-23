'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { useSubscription } from '@/contexts/SubscriptionContext';

const LEVELS = [
  { id: 'gcse', name: 'GCSE', description: 'General Certificate of Secondary Education' },
  { id: 'a-level', name: 'A-Level', description: 'Advanced Level qualifications' }
];

const SUBJECTS = [
  { id: 'maths', name: 'Mathematics', icon: '📊', description: 'Algebra, geometry, statistics and more' },
  { id: 'physics', name: 'Physics', icon: '⚡', description: 'Mechanics, waves, electricity and magnetism' },
  { id: 'chemistry', name: 'Chemistry', icon: '🧪', description: 'Organic, inorganic and physical chemistry' },
  { id: 'biology', name: 'Biology', icon: '🧬', description: 'Cell biology, genetics, ecology and evolution' },
  { id: 'combined-science', name: 'Combined Science', icon: '🔬', description: 'Integrated physics, chemistry and biology' },
  { id: 'computer-science', name: 'Computer Science', icon: '💻', description: 'Programming, algorithms and data structures' },
  { id: 'economics', name: 'Economics', icon: '📈', description: 'Microeconomics, macroeconomics and markets' },
  { id: 'business', name: 'Business Studies', icon: '💼', description: 'Marketing, finance and business strategy' },
  { id: 'psychology', name: 'Psychology', icon: '🧠', description: 'Cognitive, social and developmental psychology' },
  { id: 'geography', name: 'Geography', icon: '🌍', description: 'Physical and human geography' },
  { id: 'history', name: 'History', icon: '📚', description: 'Modern and historical studies' },
  { id: 'english-literature', name: 'English Literature', icon: '📖', description: 'Poetry, prose and drama analysis' }
];

const EXAM_BOARDS = [
  { id: 'aqa', name: 'AQA', fullName: 'Assessment and Qualifications Alliance' },
  { id: 'edexcel', name: 'Edexcel', fullName: 'Pearson Edexcel' },
  { id: 'ocr', name: 'OCR', fullName: 'Oxford Cambridge and RSA Examinations' }
];

export default function PapersPage() {
  const router = useRouter();
  const { user, loading: authLoading } = useAuth();
  const { canGeneratePaper, tier } = useSubscription();
  
  const [selectedLevel, setSelectedLevel] = useState<string>('');
  const [selectedSubject, setSelectedSubject] = useState<string>('');
  const [selectedBoard, setSelectedBoard] = useState<string>('');

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 border-4 border-[#2a2a2a] border-t-[#3b82f6] rounded-full animate-spin mb-4" />
          <p className="text-[#a1a1a1]">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Sign in required</h1>
          <p className="text-[#a1a1a1] mb-6">You need to be signed in to generate practice papers.</p>
          <Link
            href="/login"
            className="px-6 py-3 bg-[#3b82f6] text-white rounded-lg font-medium hover:bg-[#60a5fa] transition-colors"
          >
            Sign In
          </Link>
        </div>
      </div>
    );
  }

  const canProceed = selectedLevel && selectedSubject && selectedBoard;

  const handleGeneratePaper = () => {
    if (!canProceed) return;
    router.push(`/${selectedLevel}/${selectedSubject}/${selectedBoard}/paper`);
  };

  return (
    <div className="min-h-screen safe-area-inset-top">
      <div className="max-w-4xl mx-auto px-4 py-6 sm:py-8 safe-area-inset-bottom">
        {/* Header */}
        <header className="mb-8">
          <Link
            href="/dashboard"
            className="inline-flex items-center text-sm text-[#666666] hover:text-[#a1a1a1] transition-colors mb-6"
          >
            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to dashboard
          </Link>
          
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Generate Practice Paper</h1>
              <p className="text-[#a1a1a1]">Create a custom exam paper tailored to your needs</p>
            </div>
            
            {!canGeneratePaper && tier === 'free' && (
              <div className="text-right">
                <p className="text-sm text-[#ff6b6b] mb-2">Premium Feature</p>
                <Link
                  href="/pricing"
                  className="text-sm text-[#3b82f6] hover:text-[#60a5fa] transition-colors"
                >
                  Upgrade to generate papers →
                </Link>
              </div>
            )}
          </div>
        </header>

        {/* Selection Steps */}
        <div className="space-y-8">
          {/* Step 1: Level */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">
              1. Choose qualification level
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {LEVELS.map((level) => (
                <button
                  key={level.id}
                  onClick={() => setSelectedLevel(level.id)}
                  className={`p-4 rounded-xl border-2 text-left transition-colors ${
                    selectedLevel === level.id
                      ? 'border-[#3b82f6] bg-[#3b82f6]/10'
                      : 'border-[#2a2a2a] hover:border-[#3a3a3a] bg-[#1a1a1a]'
                  }`}
                >
                  <h3 className="text-lg font-semibold text-white mb-1">{level.name}</h3>
                  <p className="text-sm text-[#a1a1a1]">{level.description}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Subject */}
          {selectedLevel && (
            <div>
              <h2 className="text-xl font-semibold text-white mb-4">
                2. Choose subject
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {SUBJECTS.map((subject) => (
                  <button
                    key={subject.id}
                    onClick={() => setSelectedSubject(subject.id)}
                    className={`p-4 rounded-xl border-2 text-left transition-colors ${
                      selectedSubject === subject.id
                        ? 'border-[#3b82f6] bg-[#3b82f6]/10'
                        : 'border-[#2a2a2a] hover:border-[#3a3a3a] bg-[#1a1a1a]'
                    }`}
                  >
                    <div className="text-2xl mb-2">{subject.icon}</div>
                    <h3 className="text-lg font-semibold text-white mb-1">{subject.name}</h3>
                    <p className="text-sm text-[#a1a1a1]">{subject.description}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Exam Board */}
          {selectedSubject && (
            <div>
              <h2 className="text-xl font-semibold text-white mb-4">
                3. Choose exam board
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {EXAM_BOARDS.map((board) => (
                  <button
                    key={board.id}
                    onClick={() => setSelectedBoard(board.id)}
                    className={`p-4 rounded-xl border-2 text-center transition-colors ${
                      selectedBoard === board.id
                        ? 'border-[#3b82f6] bg-[#3b82f6]/10'
                        : 'border-[#2a2a2a] hover:border-[#3a3a3a] bg-[#1a1a1a]'
                    }`}
                  >
                    <h3 className="text-lg font-semibold text-white mb-1">{board.name}</h3>
                    <p className="text-sm text-[#a1a1a1]">{board.fullName}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Generate Button */}
          {canProceed && (
            <div className="pt-8 border-t border-[#2a2a2a]">
              <button
                onClick={handleGeneratePaper}
                disabled={!canGeneratePaper}
                className={`w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-lg transition-all ${
                  canGeneratePaper
                    ? 'bg-[#3b82f6] hover:bg-[#60a5fa] text-white hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]'
                    : 'bg-[#2a2a2a] text-[#666666] cursor-not-allowed'
                }`}
              >
                {canGeneratePaper ? 'Generate Practice Paper' : 'Upgrade Required'}
              </button>
              
              {canProceed && (
                <p className="text-sm text-[#a1a1a1] mt-4">
                  You'll be taken to the paper builder where you can customize topics, difficulty, and question types.
                </p>
              )}
            </div>
          )}
        </div>

        {/* Progress Indicator */}
        <div className="fixed bottom-6 right-6 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-4">
          <div className="flex items-center gap-3 text-sm">
            <div className={`w-3 h-3 rounded-full ${selectedLevel ? 'bg-[#10b981]' : 'bg-[#2a2a2a]'}`} />
            <div className={`w-3 h-3 rounded-full ${selectedSubject ? 'bg-[#10b981]' : 'bg-[#2a2a2a]'}`} />
            <div className={`w-3 h-3 rounded-full ${selectedBoard ? 'bg-[#10b981]' : 'bg-[#2a2a2a]'}`} />
            <span className="text-[#a1a1a1] ml-2">
              {selectedLevel && selectedSubject && selectedBoard ? 'Ready!' :
               selectedLevel && selectedSubject ? '2/3 complete' :
               selectedLevel ? '1/3 complete' : 'Get started'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}