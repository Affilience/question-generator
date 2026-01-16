'use client';

import { useEffect, useState } from 'react';
import { useParams, notFound } from 'next/navigation';
import Link from 'next/link';
import { getPracticalById } from '@/lib/practicals';
import { getExamBoardInfo, getExamBoardsByLevel } from '@/lib/topics';
import { getTopicProgress } from '@/lib/progress';
import { Practical, TopicProgress, ExamBoard, QualificationLevel, PracticalSubtopic, Subject } from '@/types';

const validLevels: QualificationLevel[] = ['gcse', 'a-level'];
const validExamBoards: ExamBoard[] = ['aqa', 'edexcel', 'ocr'];
const validSubjects: Subject[] = ['maths', 'physics', 'chemistry', 'biology', 'computer-science', 'economics', 'business', 'psychology', 'geography', 'history', 'english-literature', 'further-maths'];

// Subtopic display info
const subtopicInfo: Record<PracticalSubtopic, { icon: string; description: string }> = {
  'Method': { icon: '📋', description: 'Describe the procedure step by step' },
  'Variables': { icon: '🎯', description: 'Identify and explain variables' },
  'Equipment': { icon: '🔬', description: 'Name and justify equipment choices' },
  'Results Analysis': { icon: '📊', description: 'Calculate and interpret data' },
  'Graph Skills': { icon: '📈', description: 'Plot, analyse and interpret graphs' },
  'Errors': { icon: '⚠️', description: 'Identify sources of error' },
  'Improvements': { icon: '✨', description: 'Suggest how to improve accuracy' },
  'Safety': { icon: '🦺', description: 'Identify hazards and precautions' },
};

export default function PracticalPage() {
  const params = useParams();
  const level = params.level as string;
  const subject = params.subject as string;
  const examBoard = params.examBoard as string;
  const practicalId = params.practicalId as string;

  const [practical, setPractical] = useState<Practical | null>(null);
  const [progress, setProgress] = useState<TopicProgress | null>(null);
  const [mounted, setMounted] = useState(false);

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

  useEffect(() => {
    setMounted(true);
    const foundPractical = getPracticalById(practicalId);
    setPractical(foundPractical || null);
    setProgress(getTopicProgress(practicalId));
  }, [practicalId]);

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

  const accuracy = progress && progress.attempted > 0
    ? Math.round((progress.correct / progress.attempted) * 100)
    : null;

  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <header className="mb-8">
          <Link
            href={`/${level}/${subject}/${examBoard}?tab=practicals`}
            className="inline-flex items-center text-sm text-[#666666] hover:text-[#a1a1a1] transition-colors mb-4"
          >
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Required Practicals
          </Link>

          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl">{practical.icon}</span>
            <h1 className="text-3xl font-bold text-white">{practical.name}</h1>
          </div>
          <p className="text-[#a1a1a1] mb-4">{practical.description}</p>

          <div className="mb-4">
            <span className="inline-block px-3 py-1 bg-[#10b981]/10 text-[#10b981] text-sm rounded-full border border-[#10b981]/20">
              Required Practical
            </span>
          </div>

          {/* Equipment and Safety quick reference */}
          {practical.equipment && practical.equipment.length > 0 && (
            <div className="bg-[#1a1a1a] rounded-xl p-4 border border-[#2a2a2a] mb-4">
              <h3 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                <span>🔬</span> Equipment
              </h3>
              <p className="text-sm text-[#a1a1a1]">
                {practical.equipment.join(' • ')}
              </p>
            </div>
          )}

          {mounted && progress && progress.attempted > 0 && (
            <div className="flex gap-4 animate-fade-in">
              <div className="bg-[#1a1a1a] rounded-lg px-4 py-2 border border-[#2a2a2a]">
                <span className="text-lg font-semibold text-white">{progress.attempted}</span>
                <span className="text-sm text-[#666666] ml-1">practiced</span>
              </div>
              {accuracy !== null && (
                <div className="bg-[#1a1a1a] rounded-lg px-4 py-2 border border-[#2a2a2a]">
                  <span className={`text-lg font-semibold ${accuracy >= 70 ? 'text-green-400' : accuracy >= 40 ? 'text-yellow-400' : 'text-red-400'}`}>
                    {accuracy}%
                  </span>
                  <span className="text-sm text-[#666666] ml-1">accuracy</span>
                </div>
              )}
            </div>
          )}
        </header>

        <section>
          <h2 className="text-lg font-semibold text-white mb-4">
            Choose what to practice
          </h2>
          <p className="text-sm text-[#666666] mb-6">
            {practical.subtopics.length} practice areas available
          </p>

          {/* Random practice option */}
          <Link
            href={`/${level}/${subject}/${examBoard}/practicals/${practical.id}/random`}
            className="block mb-6"
          >
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#10b981]/20 to-[#059669]/20 border border-[#10b981]/30 p-6 transition-all duration-300 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:border-[#10b981]/60 cursor-pointer">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#10b981]/20 flex items-center justify-center text-2xl">
                    🎲
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Random Practice</h3>
                    <p className="text-sm text-[#a1a1a1]">
                      Practice questions from all aspects of this practical
                    </p>
                  </div>
                </div>
                <svg className="w-6 h-6 text-[#10b981] group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>

          <div className="text-center text-sm text-[#666666] my-6">
            — OR CHOOSE A SPECIFIC AREA —
          </div>

          {/* Subtopic grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {practical.subtopics.map((subtopic) => {
              const info = subtopicInfo[subtopic];
              return (
                <Link
                  key={subtopic}
                  href={`/${level}/${subject}/${examBoard}/practicals/${practical.id}/${encodeURIComponent(subtopic)}`}
                  className="block"
                >
                  <div className="group relative overflow-hidden rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] p-4 transition-all duration-300 hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:border-[#10b981]/50 cursor-pointer">
                    <div className="flex items-center gap-3">
                      <div className="text-2xl">{info?.icon || '📝'}</div>
                      <div>
                        <h3 className="font-semibold text-white group-hover:text-[#10b981] transition-colors">
                          {subtopic}
                        </h3>
                        <p className="text-xs text-[#666666]">
                          {info?.description || 'Practice this skill'}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
