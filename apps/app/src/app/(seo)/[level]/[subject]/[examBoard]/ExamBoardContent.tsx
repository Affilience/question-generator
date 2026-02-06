'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { SubjectTabs, TabType } from '@/components/SubjectTabs';
import { PracticalGrid } from '@/components/PracticalGrid';
import { slugify } from '@/lib/seo/utils';
import { getExamBoardInfo, getTopicsBySubjectBoardAndLevel } from '@/lib/topics';
import type { Subject, QualificationLevel, ExamBoard, Topic, Practical } from '@/types';

interface ExamBoardContentProps {
  level: string;
  subject: Subject;
  examBoard: ExamBoard;
  topics: Topic[];
  practicals: Practical[];
  subjectInfo: any;
  qualInfo: any;
  boardInfo: any;
}

export function ExamBoardContent({
  level,
  subject,
  examBoard,
  topics,
  practicals,
  subjectInfo,
  qualInfo,
  boardInfo
}: ExamBoardContentProps) {
  const [activeTab, setActiveTab] = useState<TabType>('topics');

  return (
    <>
      {/* Subject Navigation Tabs */}
      <SubjectTabs 
        subject={subject}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      {/* Topics Grid - shown when topics tab is active */}
      {activeTab === 'topics' && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-6">
            All Topics
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {topics.map((topic) => (
              <Link
                key={topic.id}
                href={`/${level}/${subject}/${examBoard}/${topic.id}`}
                className="group bg-[var(--color-bg-card)] rounded-xl border border-[var(--color-border)] p-6 transition-all duration-200 hover:border-[var(--color-accent)]/50 hover:bg-[var(--color-bg-elevated)]"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className={`text-2xl p-2 rounded-lg ${topic.color} bg-opacity-20`}>
                    {topic.icon}
                  </span>
                  <svg
                    className="w-5 h-5 text-[var(--color-text-muted)] group-hover:text-[var(--color-accent)] group-hover:translate-x-1 transition-all"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-1">
                  {topic.name}
                </h3>
                <p className="text-sm text-[var(--color-text-muted)] mb-3 line-clamp-2">
                  {topic.description}
                </p>
                <div className="text-sm text-[var(--color-text-secondary)]">
                  {topic.subtopics.length} subtopics
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Required Practicals Grid - shown when practicals tab is active */}
      {activeTab === 'practicals' && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-6">
            Required Practicals
          </h2>
          <PracticalGrid 
            practicals={practicals}
            examBoard={examBoard}
            level={level as QualificationLevel}
          />
        </section>
      )}

      {/* Popular Subtopics - only shown for topics tab */}
      {activeTab === 'topics' && (
        <section className="mb-12">
          <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-4">
            Popular Subtopics
          </h2>
          <div className="flex flex-wrap gap-2">
            {topics.slice(0, 3).flatMap(topic =>
              topic.subtopics.slice(0, 3).map(subtopic => {
                const slug = slugify(subtopic);
                return (
                  <Link
                    key={`${topic.id}-${slug}`}
                    href={`/${level}/${subject}/${examBoard}/${topic.id}/${slug}`}
                    className="px-3 py-1.5 bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-full text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)]/50 transition-colors"
                  >
                    {subtopic}
                  </Link>
                );
              })
            )}
          </div>
        </section>
      )}

      {/* Other Exam Boards */}
      <section>
        <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-4">
          Other Exam Boards for {qualInfo.name} {subjectInfo.name}
        </h2>
        <div className="flex flex-wrap gap-3">
          {['aqa', 'edexcel', 'ocr'].filter(b => b !== examBoard).map((b) => {
            const board = getExamBoardInfo(b as ExamBoard);
            const boardTopics = getTopicsBySubjectBoardAndLevel(
              subject,
              b as ExamBoard,
              level as QualificationLevel
            );
            if (!board || boardTopics.length === 0) return null;
            return (
              <Link
                key={b}
                href={`/${level}/${subject}/${b}`}
                className="flex items-center gap-2 px-4 py-2 bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-lg text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)]/50 transition-colors"
              >
                <span className="font-semibold">{board.name}</span>
                <span className="text-[var(--color-text-muted)]">{boardTopics.length} topics</span>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}