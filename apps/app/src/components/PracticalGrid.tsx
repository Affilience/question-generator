import { Practical, TopicProgress, ExamBoard, QualificationLevel } from '@/types';
import { PracticalCard } from './PracticalCard';

interface PracticalGridProps {
  practicals: Practical[];
  progress?: Record<string, TopicProgress>;
  examBoard?: ExamBoard;
  level?: QualificationLevel;
}

export function PracticalGrid({ practicals, progress, examBoard = 'aqa', level = 'gcse' }: PracticalGridProps) {
  if (practicals.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">🧪</div>
        <h3 className="text-xl font-semibold text-white mb-2">No Required Practicals Available</h3>
        <p className="text-[#a1a1a1]">
          Required practicals for this exam board are coming soon.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {practicals.map((practical) => (
        <PracticalCard
          key={practical.id}
          practical={practical}
          progress={progress?.[practical.id]}
          examBoard={examBoard}
          level={level}
        />
      ))}
    </div>
  );
}
