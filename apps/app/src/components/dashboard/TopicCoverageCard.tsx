'use client';

import Link from 'next/link';
import { topics } from '@/lib/topics';

interface TopicCoverage {
  topicId: string;
  attempted: number;
  correct: number;
  accuracy: number;
  subtopicsCovered: number;
}

interface TopicCoverageCardProps {
  coverage: TopicCoverage[];
}

export function TopicCoverageCard({ coverage }: TopicCoverageCardProps) {
  // Create a map of coverage data by topicId
  const coverageMap = new Map(coverage.map(c => [c.topicId, c]));

  return (
    <div className="bg-[#1a1a1a] rounded-2xl border border-[#2a2a2a] p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-semibold text-white">Topic Coverage</h3>
        <span className="text-xs text-[#666666]">All 6 topics</span>
      </div>

      <div className="space-y-4">
        {topics.map((topic) => {
          const data = coverageMap.get(topic.id);
          const accuracy = data?.accuracy || 0;
          const attempted = data?.attempted || 0;
          const subtopicsCovered = data?.subtopicsCovered || 0;
          const totalSubtopics = topic.subtopics.length;
          const coveragePercent = Math.round((subtopicsCovered / totalSubtopics) * 100);

          return (
            <Link
              key={topic.id}
              href={`/practice/${topic.id}`}
              className="block group"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xl">{topic.icon}</span>
                <span className="text-sm text-white font-medium flex-1">{topic.name}</span>
                <span className="text-xs text-[#666666]">
                  {subtopicsCovered}/{totalSubtopics} subtopics
                </span>
              </div>

              <div className="flex items-center gap-3">
                {/* Coverage bar */}
                <div className="flex-1 h-2 bg-[#2a2a2a] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#3b82f6] rounded-full transition-all duration-500 group-hover:shadow-[0_0_8px_rgba(59,130,246,0.5)]"
                    style={{ width: `${coveragePercent}%` }}
                  />
                </div>

                {/* Accuracy indicator */}
                {attempted > 0 ? (
                  <div className={`text-xs font-medium px-2 py-0.5 rounded ${
                    accuracy >= 70 ? 'bg-green-500/20 text-green-400' :
                    accuracy >= 40 ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-red-500/20 text-red-400'
                  }`}>
                    {accuracy}%
                  </div>
                ) : (
                  <div className="text-xs text-[#666666] px-2 py-0.5">
                    Not started
                  </div>
                )}
              </div>
            </Link>
          );
        })}
      </div>

      <div className="mt-6 pt-4 border-t border-[#2a2a2a]">
        <div className="flex items-center justify-between text-xs text-[#666666]">
          <span>Progress bar = subtopic coverage</span>
          <span>Badge = accuracy</span>
        </div>
      </div>
    </div>
  );
}
