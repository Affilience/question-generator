'use client';

import Link from 'next/link';
import { ExamBoard, QualificationLevel, Subject } from '@/types';

interface SubtopicCardProps {
  topicId: string;
  subtopic: string;
  index: number;
  isRandom?: boolean;
  examBoard?: ExamBoard;
  level?: QualificationLevel;
  subject?: Subject;
}

export function SubtopicCard({ topicId, subtopic, index, isRandom = false, examBoard = 'aqa', level = 'gcse', subject = 'maths' }: SubtopicCardProps) {
  // Add cache busting timestamp to prevent navigation caching issues
  const cacheBust = Date.now();
  const href = isRandom
    ? `/${level}/${subject}/${examBoard}/practice/${topicId}/random?t=${cacheBust}`
    : `/${level}/${subject}/${examBoard}/practice/${topicId}/${encodeURIComponent(subtopic)}?t=${cacheBust}`;

  // Determine if this is a Higher tier topic
  const isHigher = subtopic.includes('(H)');
  const displayName = subtopic.replace(' (H)', '');

  return (
    <Link href={href}>
      <div className={`group relative overflow-hidden rounded-xl border p-4 transition-all duration-300 cursor-pointer ${
        isRandom
          ? 'bg-gradient-to-br from-[#1a2a3a] to-[#0f1a24] border-[#3b82f6]/30 hover:border-[#3b82f6] hover:shadow-[0_0_30px_rgba(59,130,246,0.4),0_0_60px_rgba(59,130,246,0.15)] hover:scale-[1.02]'
          : 'bg-[var(--color-bg-card)] border-[var(--color-border)] hover:border-[var(--color-accent)]/40 hover:shadow-[0_0_25px_rgba(59,130,246,0.25),0_0_50px_rgba(59,130,246,0.1)] hover:scale-[1.02]'
      }`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {isRandom ? (
              <div className="w-8 h-8 rounded-lg bg-[#3b82f6]/20 flex items-center justify-center">
                <span className="text-lg">🎲</span>
              </div>
            ) : (
              <div className="w-8 h-8 rounded-lg bg-[#2a2a2a] flex items-center justify-center text-sm font-medium text-[#a1a1a1]">
                {index + 1}
              </div>
            )}
            <div>
              <h3 className={`font-medium ${isRandom ? 'text-[#60a5fa]' : 'text-white'}`}>
                {isRandom ? 'Random Practice' : displayName}
              </h3>
              {isRandom && (
                <p className="text-xs text-[#3b82f6]">Practice any subtopic</p>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2">
            {isHigher && !isRandom && (
              <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-400">
                Higher
              </span>
            )}
            <svg
              className={`w-5 h-5 ${isRandom ? 'text-[#3b82f6]' : 'text-[#666666]'} group-hover:translate-x-0.5 transition-transform`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
