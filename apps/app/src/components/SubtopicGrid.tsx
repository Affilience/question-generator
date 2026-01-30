'use client';

import { useEffect, useState } from 'react';
import { ExamBoard, QualificationLevel, Subject } from '@/types';
import { SubtopicCard } from './SubtopicCard';

interface SubtopicGridProps {
  topicId: string;
  subtopics: string[];
  examBoard?: ExamBoard;
  level?: QualificationLevel;
  subject?: Subject;
}

export function SubtopicGrid({ topicId, subtopics, examBoard = 'aqa', level = 'gcse', subject = 'maths' }: SubtopicGridProps) {
  // Force grid remount to prevent layout caching issues
  const [gridKey, setGridKey] = useState(0);
  
  useEffect(() => {
    // Force grid layout reset when props change to prevent cached layout state
    setGridKey(prev => prev + 1);
    
    // Force a layout recalculation by triggering a reflow
    if (typeof window !== 'undefined') {
      requestAnimationFrame(() => {
        // Trigger a forced reflow to clear any cached layout
        document.body.offsetHeight;
      });
    }
  }, [topicId, examBoard, level, subject]);

  return (
    <div key={gridKey} className="space-y-3">
      {/* Random Practice Card - always first */}
      <SubtopicCard
        topicId={topicId}
        subtopic="Random Practice"
        index={-1}
        isRandom={true}
        examBoard={examBoard}
        level={level}
        subject={subject}
      />

      {/* Divider */}
      <div className="flex items-center gap-4 py-2">
        <div className="flex-1 h-px bg-[#2a2a2a]" />
        <span className="text-xs text-[#666666] font-medium">OR CHOOSE A SPECIFIC SUBTOPIC</span>
        <div className="flex-1 h-px bg-[#2a2a2a]" />
      </div>

      {/* Subtopic Cards - force unique keys for complete remount */}
      <div key={`grid-${gridKey}`} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {subtopics.map((subtopic, index) => (
          <SubtopicCard
            key={`${gridKey}-${subtopic}-${index}`}
            topicId={topicId}
            subtopic={subtopic}
            index={index}
            examBoard={examBoard}
            level={level}
            subject={subject}
          />
        ))}
      </div>
    </div>
  );
}
