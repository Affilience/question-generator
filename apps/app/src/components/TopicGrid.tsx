'use client';

import { Topic, TopicProgress, ExamBoard, QualificationLevel, Subject } from '@/types';
import { TopicCard } from './TopicCard';

interface TopicGridProps {
  topics: Topic[];
  progress: Record<string, TopicProgress>;
  examBoard?: ExamBoard;
  level?: QualificationLevel;
  subject?: Subject;
}

export function TopicGrid({ topics, progress, examBoard = 'aqa', level = 'gcse', subject = 'maths' }: TopicGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {topics.map((topic, index) => (
        <TopicCard
          key={topic.id}
          topic={topic}
          progress={progress[topic.id]}
          examBoard={examBoard}
          level={level}
          subject={subject}
          index={index}
        />
      ))}
    </div>
  );
}
