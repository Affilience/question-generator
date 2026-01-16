import Link from 'next/link';
import { Practical, TopicProgress, ExamBoard, QualificationLevel } from '@/types';

interface PracticalCardProps {
  practical: Practical;
  progress?: TopicProgress;
  examBoard?: ExamBoard;
  level?: QualificationLevel;
}

export function PracticalCard({ practical, progress, examBoard = 'aqa', level = 'gcse' }: PracticalCardProps) {
  const accuracy = progress && progress.attempted > 0
    ? Math.round((progress.correct / progress.attempted) * 100)
    : null;

  // Get subject from the practical itself
  const subject = practical.subject;

  return (
    <Link href={`/${level}/${subject}/${examBoard}/practicals/${practical.id}`} className="block h-full">
      <div className="group relative overflow-hidden rounded-2xl bg-[#1a1a1a] border border-[#2a2a2a] p-6 h-full flex flex-col transition-all duration-300 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:border-[#10b981]/50 hover:scale-[1.02] cursor-pointer">
        {/* Green accent for practicals */}
        <div className={`absolute top-0 right-0 w-24 h-24 -mr-8 -mt-8 rounded-full ${practical.color} opacity-10 group-hover:opacity-25 transition-opacity duration-300`} />

        {/* Lab flask watermark */}
        <div className="absolute bottom-2 right-2 text-6xl opacity-5 group-hover:opacity-10 transition-opacity duration-300">
          🧪
        </div>

        <div className="flex items-start justify-between">
          <div className="text-4xl mb-4">{practical.icon}</div>
          {progress && progress.attempted > 0 && (
            <div className="text-sm text-[#666666]">
              {progress.attempted} practiced
            </div>
          )}
        </div>

        <h3 className="text-xl font-semibold text-white mb-2">
          {practical.name}
        </h3>

        <p className="text-sm text-[#a1a1a1] mb-4 flex-grow">
          {practical.description}
        </p>

        <div className="flex items-center justify-between mt-auto">
          <div className="flex flex-col gap-1">
            <span className="text-xs text-[#666666]">
              {practical.subtopics.length} practice areas
            </span>
            <span className="text-xs text-[#10b981]">
              Required Practical
            </span>
          </div>

          {accuracy !== null && (
            <div className="flex items-center gap-2">
              <div className="w-16 h-1.5 bg-[#2a2a2a] rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${
                    accuracy >= 70
                      ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]'
                      : accuracy >= 40
                      ? 'bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.5)]'
                      : 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]'
                  }`}
                  style={{ width: `${accuracy}%` }}
                />
              </div>
              <span className="text-xs text-[#a1a1a1]">{accuracy}%</span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
