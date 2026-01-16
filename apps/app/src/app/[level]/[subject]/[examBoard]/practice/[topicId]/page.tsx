'use client';

import { useEffect, useState } from 'react';
import { useParams, notFound } from 'next/navigation';
import Link from 'next/link';
import { getTopicByIdSubjectBoardAndLevel, getExamBoardInfo, getExamBoardsByLevel } from '@/lib/topics';
import { getTopicProgress } from '@/lib/progress';
import { Topic, TopicProgress, ExamBoard, QualificationLevel, Subject } from '@/types';
import { SubtopicGrid } from '@/components/SubtopicGrid';

const validLevels: QualificationLevel[] = ['gcse', 'a-level'];
const validExamBoards: ExamBoard[] = ['aqa', 'edexcel', 'ocr'];
const validSubjects: Subject[] = ['maths', 'physics', 'chemistry', 'biology', 'computer-science', 'economics', 'business', 'psychology', 'geography', 'history', 'english-literature', 'further-maths'];

export default function TopicPage() {
  const params = useParams();
  const level = params.level as string;
  const subject = params.subject as string;
  const examBoard = params.examBoard as string;
  const topicId = params.topicId as string;

  const [topic, setTopic] = useState<Topic | null>(null);
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
    const foundTopic = getTopicByIdSubjectBoardAndLevel(topicId, subject as Subject, examBoard as ExamBoard, level as QualificationLevel);
    setTopic(foundTopic || null);
    setProgress(getTopicProgress(topicId));
  }, [topicId, subject, examBoard, level]);

  if (!topic) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-2">Topic not found</h1>
          <Link
            href={`/${level}/${subject}/${examBoard}`}
            className="text-[#3b82f6] hover:text-[#60a5fa] transition-colors"
          >
            Return to topics
          </Link>
        </div>
      </div>
    );
  }

  const accuracy = progress && progress.attempted > 0
    ? Math.round((progress.correct / progress.attempted) * 100)
    : null;

  return (
    <div className="min-h-screen safe-area-inset-top">
      <div className="max-w-4xl mx-auto px-4 py-6 sm:py-8 safe-area-inset-bottom">
        <header className="mb-6 sm:mb-8">
          <Link
            href={`/${level}/${subject}/${examBoard}`}
            className="back-link inline-flex items-center text-sm text-[#666666] hover:text-[#a1a1a1] transition-colors mb-4"
          >
            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to {examBoardInfo?.name} {levelDisplay} topics
          </Link>

          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl sm:text-3xl">{topic.icon}</span>
            <h1 className="text-2xl sm:text-3xl font-bold text-white">{topic.name}</h1>
          </div>
          <p className="text-[#a1a1a1] mb-4">{topic.description}</p>

          {topic.paperRestriction && (
            <div className="mb-4">
              <span className="inline-block px-3 py-1.5 bg-[#3b82f6]/10 text-[#3b82f6] text-sm rounded-full border border-[#3b82f6]/20">
                {topic.paperRestriction}
              </span>
            </div>
          )}

          {mounted && progress && progress.attempted > 0 && (
            <div className="flex gap-3 sm:gap-4 animate-fade-in">
              <div className="bg-[#1a1a1a] rounded-lg px-3 sm:px-4 py-2 border border-[#2a2a2a]">
                <span className="text-base sm:text-lg font-semibold text-white">{progress.attempted}</span>
                <span className="text-sm text-[#666666] ml-1">practiced</span>
              </div>
              {accuracy !== null && (
                <div className="bg-[#1a1a1a] rounded-lg px-3 sm:px-4 py-2 border border-[#2a2a2a]">
                  <span className={`text-base sm:text-lg font-semibold ${accuracy >= 70 ? 'text-green-400' : accuracy >= 40 ? 'text-yellow-400' : 'text-red-400'}`}>
                    {accuracy}%
                  </span>
                  <span className="text-sm text-[#666666] ml-1">accuracy</span>
                </div>
              )}
            </div>
          )}
        </header>

        <section>
          <h2 className="text-lg font-semibold text-white mb-3 sm:mb-4">
            Choose what to practice
          </h2>
          <p className="text-sm text-[#666666] mb-4 sm:mb-6">
            {topic.subtopics.length} subtopics available
          </p>

          <SubtopicGrid
            topicId={topic.id}
            subtopics={topic.subtopics}
            examBoard={examBoard as ExamBoard}
            level={level as QualificationLevel}
            subject={subject as Subject}
          />
        </section>
      </div>
    </div>
  );
}
