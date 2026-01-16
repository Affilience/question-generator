'use client';

interface StreakDisplayProps {
  currentStreak: number;
}

export function StreakDisplay({ currentStreak }: StreakDisplayProps) {
  const flames = Math.min(currentStreak, 7);

  return (
    <div className="bg-[#1a1a1a] rounded-2xl border border-[#2a2a2a] p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-white">Daily Streak</h3>
        <div className="text-2xl">
          {currentStreak > 0 ? '🔥' : '❄️'}
        </div>
      </div>

      <div className="flex items-end gap-1 mb-4">
        <span className="text-5xl font-bold text-white">{currentStreak}</span>
        <span className="text-[#666666] mb-2 ml-1">{currentStreak === 1 ? 'day' : 'days'}</span>
      </div>

      {/* Flame visualization */}
      <div className="flex gap-1">
        {[...Array(7)].map((_, i) => (
          <div
            key={i}
            className={`h-8 flex-1 rounded-lg transition-all duration-300 ${
              i < flames
                ? 'bg-gradient-to-t from-orange-500 to-yellow-400 shadow-[0_0_10px_rgba(251,146,60,0.5)]'
                : 'bg-[#2a2a2a]'
            }`}
          />
        ))}
      </div>

      <p className="text-xs text-[#666666] mt-3">
        {currentStreak === 0
          ? 'Practice today to start your streak!'
          : currentStreak >= 7
          ? 'Amazing! Keep the momentum going!'
          : `${7 - currentStreak} more days to reach a week!`}
      </p>
    </div>
  );
}
