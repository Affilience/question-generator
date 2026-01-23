'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { useSubscription } from '@/contexts/SubscriptionContext';

const LEVELS = [
  { 
    id: 'gcse', 
    name: 'GCSE', 
    description: 'General Certificate of Secondary Education',
    detail: 'Years 10-11 (Ages 14-16)',
    color: 'from-blue-500 to-cyan-500',
    icon: '🎓'
  },
  { 
    id: 'a-level', 
    name: 'A-Level', 
    description: 'Advanced Level qualifications',
    detail: 'Years 12-13 (Ages 16-18)',
    color: 'from-violet-500 to-purple-500',
    icon: '📚'
  }
];

// All subjects available in the system
const ALL_SUBJECTS = [
  { id: 'maths', name: 'Mathematics', icon: '🔢', description: 'Algebra, geometry, statistics and calculus', levels: ['gcse', 'a-level'] },
  { id: 'further-maths', name: 'Further Mathematics', icon: '📐', description: 'Advanced mathematical topics and techniques', levels: ['gcse', 'a-level'] },
  { id: 'physics', name: 'Physics', icon: '⚡', description: 'Mechanics, waves, electricity and magnetism', levels: ['gcse', 'a-level'] },
  { id: 'chemistry', name: 'Chemistry', icon: '🧪', description: 'Organic, inorganic and physical chemistry', levels: ['gcse', 'a-level'] },
  { id: 'biology', name: 'Biology', icon: '🧬', description: 'Cell biology, genetics, ecology and evolution', levels: ['gcse', 'a-level'] },
  { id: 'combined-science', name: 'Combined Science', icon: '🔬', description: 'Integrated physics, chemistry and biology', levels: ['gcse'] },
  { id: 'computer-science', name: 'Computer Science', icon: '💻', description: 'Programming, algorithms and data structures', levels: ['gcse', 'a-level'] },
  { id: 'economics', name: 'Economics', icon: '📈', description: 'Microeconomics, macroeconomics and markets', levels: ['gcse', 'a-level'] },
  { id: 'business', name: 'Business Studies', icon: '💼', description: 'Marketing, finance and business strategy', levels: ['gcse', 'a-level'] },
  { id: 'psychology', name: 'Psychology', icon: '🧠', description: 'Cognitive, social and developmental psychology', levels: ['gcse', 'a-level'] },
  { id: 'geography', name: 'Geography', icon: '🌍', description: 'Physical and human geography', levels: ['gcse', 'a-level'] },
  { id: 'history', name: 'History', icon: '📚', description: 'Modern and historical studies', levels: ['gcse', 'a-level'] },
  { id: 'english-literature', name: 'English Literature', icon: '📖', description: 'Poetry, prose and drama analysis', levels: ['gcse', 'a-level'] }
];

const EXAM_BOARDS = [
  { 
    id: 'aqa', 
    name: 'AQA', 
    fullName: 'Assessment and Qualifications Alliance',
    color: 'border-red-500/20 bg-red-500/10 hover:border-red-500/40',
    description: 'Most popular exam board in England'
  },
  { 
    id: 'edexcel', 
    name: 'Edexcel', 
    fullName: 'Pearson Edexcel',
    color: 'border-blue-500/20 bg-blue-500/10 hover:border-blue-500/40',
    description: 'Widely used across the UK'
  },
  { 
    id: 'ocr', 
    name: 'OCR', 
    fullName: 'Oxford Cambridge and RSA',
    color: 'border-green-500/20 bg-green-500/10 hover:border-green-500/40',
    description: 'Traditional and respected board'
  }
];

export default function PapersPage() {
  const router = useRouter();
  const { user, loading: authLoading } = useAuth();
  const { canGeneratePaper, tier } = useSubscription();
  
  const [selectedLevel, setSelectedLevel] = useState<string>('');
  const [selectedSubject, setSelectedSubject] = useState<string>('');
  const [selectedBoard, setSelectedBoard] = useState<string>('');
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);

  // Filter subjects based on selected level
  const availableSubjects = selectedLevel 
    ? ALL_SUBJECTS.filter(subject => subject.levels.includes(selectedLevel))
    : ALL_SUBJECTS;

  // Auto-advance to next step when selection is made
  useEffect(() => {
    if (selectedLevel && currentStep === 1) {
      setCurrentStep(2);
    }
  }, [selectedLevel, currentStep]);

  useEffect(() => {
    if (selectedSubject && currentStep === 2) {
      setCurrentStep(3);
    }
  }, [selectedSubject, currentStep]);

  if (authLoading) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 border-4 border-[#2a2a2a] border-t-[#3b82f6] rounded-full animate-spin mb-4" />
          <p className="text-[#a1a1a1]">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
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

  const resetToStep = (step: 1 | 2 | 3) => {
    if (step <= 1) {
      setSelectedLevel('');
      setSelectedSubject('');
      setSelectedBoard('');
      setCurrentStep(1);
    } else if (step <= 2) {
      setSelectedSubject('');
      setSelectedBoard('');
      setCurrentStep(2);
    } else {
      setSelectedBoard('');
      setCurrentStep(3);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <div className="max-w-5xl mx-auto px-4 py-6 sm:py-8">
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
          
          <div className="flex items-start justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-white mb-3">Generate Practice Paper</h1>
              <p className="text-[#a1a1a1] text-lg">Create a custom exam paper tailored to your needs</p>
            </div>
            
            {!canGeneratePaper && tier === 'free' && (
              <div className="text-right bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-4">
                <div className="flex items-center gap-2 text-amber-400 mb-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  Premium Feature
                </div>
                <p className="text-sm text-[#a1a1a1] mb-3">Upgrade to generate unlimited practice papers</p>
                <Link
                  href="/pricing"
                  className="inline-block text-sm bg-[#3b82f6] text-white px-4 py-2 rounded-lg hover:bg-[#60a5fa] transition-colors"
                >
                  View Plans
                </Link>
              </div>
            )}
          </div>

          {/* Progress Steps */}
          <div className="flex items-center gap-4 mb-8">
            {[1, 2, 3].map((step, index) => {
              const stepLabels = ['Level', 'Subject', 'Exam Board'];
              const isActive = currentStep === step;
              const isCompleted = currentStep > step;
              const isAccessible = step <= currentStep || (step === 2 && selectedLevel) || (step === 3 && selectedSubject);
              
              return (
                <div key={step} className="flex items-center">
                  <button
                    onClick={() => isAccessible ? resetToStep(step as 1 | 2 | 3) : undefined}
                    disabled={!isAccessible}
                    className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium transition-all ${
                      isCompleted
                        ? 'bg-green-500 text-white'
                        : isActive
                        ? 'bg-[#3b82f6] text-white'
                        : isAccessible
                        ? 'bg-[#2a2a2a] text-[#a1a1a1] hover:bg-[#3a3a3a] cursor-pointer'
                        : 'bg-[#1a1a1a] text-[#666666] cursor-not-allowed'
                    }`}
                  >
                    {isCompleted ? (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      step
                    )}
                  </button>
                  <span className={`ml-2 text-sm ${isActive || isCompleted ? 'text-white' : 'text-[#666666]'}`}>
                    {stepLabels[index]}
                  </span>
                  {index < 2 && (
                    <div className={`w-8 h-px mx-4 ${isCompleted ? 'bg-green-500' : 'bg-[#2a2a2a]'}`} />
                  )}
                </div>
              );
            })}
          </div>
        </header>

        {/* Step Content */}
        <div className="space-y-8">
          {/* Step 1: Level Selection */}
          <div className={`transition-opacity duration-300 ${currentStep >= 1 ? 'opacity-100' : 'opacity-50'}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className={`w-2 h-2 rounded-full ${currentStep === 1 ? 'bg-[#3b82f6]' : selectedLevel ? 'bg-green-500' : 'bg-[#2a2a2a]'}`} />
              <h2 className="text-xl font-semibold text-white">
                Choose qualification level
              </h2>
              {selectedLevel && (
                <div className="flex items-center gap-2 text-sm text-[#10b981]">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {LEVELS.find(l => l.id === selectedLevel)?.name} selected
                </div>
              )}
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {LEVELS.map((level) => (
                <button
                  key={level.id}
                  onClick={() => setSelectedLevel(level.id)}
                  className={`group relative p-6 rounded-2xl border-2 text-left transition-all ${
                    selectedLevel === level.id
                      ? 'border-[#3b82f6] bg-[#3b82f6]/10 shadow-lg shadow-[#3b82f6]/20'
                      : 'border-[#2a2a2a] hover:border-[#3a3a3a] bg-[#1a1a1a] hover:bg-[#1f1f1f]'
                  }`}
                >
                  {/* Gradient accent */}
                  <div className={`absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r ${level.color} opacity-${selectedLevel === level.id ? '100' : '0'} transition-opacity`} />
                  
                  <div className="flex items-start justify-between mb-4">
                    <div className={`text-3xl p-3 rounded-xl bg-gradient-to-br ${level.color} bg-opacity-20`}>
                      {level.icon}
                    </div>
                    {selectedLevel === level.id && (
                      <div className="text-[#3b82f6]">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">{level.name}</h3>
                  <p className="text-sm text-[#a1a1a1] mb-1">{level.description}</p>
                  <p className="text-xs text-[#666666] mb-4">{level.detail}</p>
                  
                  <div className="flex items-center gap-2 text-sm text-[#a1a1a1] group-hover:text-white transition-colors">
                    Select level
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Subject Selection */}
          {selectedLevel && (
            <div className={`transition-opacity duration-300 ${currentStep >= 2 ? 'opacity-100' : 'opacity-50'}`}>
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-2 h-2 rounded-full ${currentStep === 2 ? 'bg-[#3b82f6]' : selectedSubject ? 'bg-green-500' : 'bg-[#2a2a2a]'}`} />
                <h2 className="text-xl font-semibold text-white">
                  Choose subject
                </h2>
                {selectedSubject && (
                  <div className="flex items-center gap-2 text-sm text-[#10b981]">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {availableSubjects.find(s => s.id === selectedSubject)?.name} selected
                  </div>
                )}
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {availableSubjects.map((subject) => (
                  <button
                    key={subject.id}
                    onClick={() => setSelectedSubject(subject.id)}
                    className={`group p-4 rounded-xl border-2 text-left transition-all ${
                      selectedSubject === subject.id
                        ? 'border-[#3b82f6] bg-[#3b82f6]/10 shadow-lg shadow-[#3b82f6]/20'
                        : 'border-[#2a2a2a] hover:border-[#3a3a3a] bg-[#1a1a1a] hover:bg-[#1f1f1f]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-2xl">{subject.icon}</div>
                      {selectedSubject === subject.id && (
                        <div className="text-[#3b82f6]">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{subject.name}</h3>
                    <p className="text-sm text-[#a1a1a1]">{subject.description}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Exam Board Selection */}
          {selectedSubject && (
            <div className={`transition-opacity duration-300 ${currentStep >= 3 ? 'opacity-100' : 'opacity-50'}`}>
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-2 h-2 rounded-full ${currentStep === 3 ? 'bg-[#3b82f6]' : selectedBoard ? 'bg-green-500' : 'bg-[#2a2a2a]'}`} />
                <h2 className="text-xl font-semibold text-white">
                  Choose exam board
                </h2>
                {selectedBoard && (
                  <div className="flex items-center gap-2 text-sm text-[#10b981]">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {EXAM_BOARDS.find(b => b.id === selectedBoard)?.name} selected
                  </div>
                )}
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                {EXAM_BOARDS.map((board) => (
                  <button
                    key={board.id}
                    onClick={() => setSelectedBoard(board.id)}
                    className={`group p-6 rounded-xl border-2 text-center transition-all ${
                      selectedBoard === board.id
                        ? `${board.color} shadow-lg`
                        : 'border-[#2a2a2a] hover:border-[#3a3a3a] bg-[#1a1a1a] hover:bg-[#1f1f1f]'
                    }`}
                  >
                    <div className="flex items-center justify-center mb-4">
                      <h3 className="text-2xl font-bold text-white">{board.name}</h3>
                      {selectedBoard === board.id && (
                        <div className="ml-2 text-[#3b82f6]">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                      )}
                    </div>
                    <p className="text-sm font-medium text-[#a1a1a1] mb-2">{board.fullName}</p>
                    <p className="text-xs text-[#666666]">{board.description}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Generate Button */}
          {canProceed && (
            <div className="pt-8 border-t border-[#2a2a2a]">
              <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-6">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Ready to generate</h3>
                    <div className="space-y-1 text-sm text-[#a1a1a1]">
                      <p><span className="text-[#666666]">Level:</span> {LEVELS.find(l => l.id === selectedLevel)?.name}</p>
                      <p><span className="text-[#666666]">Subject:</span> {availableSubjects.find(s => s.id === selectedSubject)?.name}</p>
                      <p><span className="text-[#666666]">Exam Board:</span> {EXAM_BOARDS.find(b => b.id === selectedBoard)?.name}</p>
                    </div>
                  </div>
                  
                  <button
                    onClick={handleGeneratePaper}
                    disabled={!canGeneratePaper}
                    className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all flex items-center gap-3 ${
                      canGeneratePaper
                        ? 'bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] hover:from-[#60a5fa] hover:to-[#3b82f6] text-white hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] hover:scale-105'
                        : 'bg-[#2a2a2a] text-[#666666] cursor-not-allowed'
                    }`}
                  >
                    {canGeneratePaper ? (
                      <>
                        Generate Paper
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </>
                    ) : (
                      'Upgrade Required'
                    )}
                  </button>
                </div>
                
                <p className="text-sm text-[#666666]">
                  You'll be taken to the paper builder where you can customize topics, difficulty, and question types.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}