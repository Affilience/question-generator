'use client';

import { useSyncedProgress } from '@/hooks/useSyncedProgress';

interface PracticalProgressProps {
  practicalId: string;
}

export function PracticalProgress({ practicalId }: PracticalProgressProps) {
  const { getTopicProgress, loading } = useSyncedProgress();
  const progress = getTopicProgress(practicalId);

  if (loading || !progress || progress.attempted === 0) {
    return null;
  }

  const accuracy = Math.round((progress.correct / progress.attempted) * 100);

  return (
    <div className="flex gap-4 animate-fade-in">
      <div className="bg-[#1a1a1a] rounded-lg px-4 py-2 border border-[#2a2a2a]">
        <span className="text-lg font-semibold text-white">{progress.attempted}</span>
        <span className="text-sm text-[#666666] ml-1">practiced</span>
      </div>
      <div className="bg-[#1a1a1a] rounded-lg px-4 py-2 border border-[#2a2a2a]">
        <span className={`text-lg font-semibold ${accuracy >= 70 ? 'text-green-400' : accuracy >= 40 ? 'text-yellow-400' : 'text-red-400'}`}>
          {accuracy}%
        </span>
        <span className="text-sm text-[#666666] ml-1">accuracy</span>
      </div>
    </div>
  );
}
