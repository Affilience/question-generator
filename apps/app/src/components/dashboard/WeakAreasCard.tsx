'use client';

import Link from 'next/link';
import { getTopicById } from '@/lib/topics';

interface WeakArea {
  topic_id: string;
  subtopic: string | null;
  attempted: number;
  correct: number;
}

interface WeakAreasCardProps {
  weakAreas: WeakArea[];
}

export function WeakAreasCard({ weakAreas }: WeakAreasCardProps) {
  if (weakAreas.length === 0) {
    return (
      <div className="bg-[#1a1a1a] rounded-2xl border border-[#2a2a2a] p-6">
        <h3 className="font-semibold text-white mb-4">Areas to Improve</h3>
        <div className="text-center py-8">
          <div className="text-4xl mb-3">🎯</div>
          <p className="text-[#a1a1a1] text-sm">
            Keep practicing to identify areas that need work
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#1a1a1a] rounded-2xl border border-[#2a2a2a] p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-white">Areas to Improve</h3>
        <span className="text-xs text-[#666666]">&lt;50% accuracy</span>
      </div>

      <div className="space-y-3">
        {weakAreas.map((area, index) => {
          const topic = getTopicById(area.topic_id);
          const accuracy = Math.round((area.correct / area.attempted) * 100);
          const subtopicEncoded = area.subtopic ? encodeURIComponent(area.subtopic) : 'random';

          return (
            <Link
              key={index}
              href={`/practice/${area.topic_id}/${subtopicEncoded}`}
              className="block bg-[#222222] rounded-xl p-4 transition-all duration-300 hover:bg-[#2a2a2a] hover:border-red-500/30 border border-transparent"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-lg">{topic?.icon || '📚'}</span>
                  <span className="text-sm text-white font-medium truncate max-w-[200px]">
                    {area.subtopic?.replace(' (H)', '') || topic?.name || area.topic_id}
                  </span>
                </div>
                <span className="text-sm text-red-400 font-bold">{accuracy}%</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex-1 h-1.5 bg-[#2a2a2a] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-red-500 rounded-full shadow-[0_0_8px_rgba(239,68,68,0.5)]"
                    style={{ width: `${accuracy}%` }}
                  />
                </div>
                <span className="text-xs text-[#666666]">{area.attempted} Qs</span>
              </div>
            </Link>
          );
        })}
      </div>

      <p className="text-xs text-[#666666] mt-4 text-center">
        Click to practice and improve these areas
      </p>
    </div>
  );
}
