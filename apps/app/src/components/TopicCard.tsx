'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Topic, TopicProgress, ExamBoard, QualificationLevel, Subject } from '@/types';

interface TopicCardProps {
  topic: Topic;
  progress?: TopicProgress;
  examBoard?: ExamBoard;
  level?: QualificationLevel;
  subject?: Subject;
  index?: number;
}

export function TopicCard({ topic, progress, examBoard = 'aqa', level = 'gcse', subject = 'maths', index = 0 }: TopicCardProps) {
  const accuracy = progress && progress.attempted > 0
    ? Math.round((progress.correct / progress.attempted) * 100)
    : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.03 }}
    >
      <Link href={`/${level}/${subject}/${examBoard}/practice/${topic.id}`} className="block h-full">
        <div className="group relative rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border)] p-5 h-full flex flex-col transition-all duration-300 hover:border-[var(--color-accent)]/30 hover:bg-[var(--color-bg-elevated)] card-glow">
          <div className="flex items-start justify-between mb-3">
            <span className="text-2xl">{topic.icon}</span>
            {progress && progress.attempted > 0 && (
              <span className="text-xs text-[var(--color-text-muted)]">
                {progress.attempted} done
              </span>
            )}
          </div>

          <h3 className="text-base font-medium text-[var(--color-text-primary)] mb-1">
            {topic.name}
          </h3>

          <p className="text-sm text-[var(--color-text-muted)] mb-4 flex-grow line-clamp-2">
            {topic.description}
          </p>

          <div className="flex items-center justify-between mt-auto pt-3 border-t border-[var(--color-border)]">
            <span className="text-xs text-[var(--color-text-muted)]">
              {topic.subtopics.length} subtopics
            </span>

            {accuracy !== null ? (
              <div className="flex items-center gap-2">
                <div className="w-12 h-1 bg-[var(--color-border)] rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${
                      accuracy >= 70 ? 'bg-[var(--color-success)]' :
                      accuracy >= 40 ? 'bg-[var(--color-warning)]' :
                      'bg-[var(--color-error)]'
                    }`}
                    style={{ width: `${accuracy}%` }}
                  />
                </div>
                <span className="text-xs text-[var(--color-text-muted)]">{accuracy}%</span>
              </div>
            ) : (
              <svg
                className="w-4 h-4 text-[var(--color-text-muted)] group-hover:text-[var(--color-accent)] transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
