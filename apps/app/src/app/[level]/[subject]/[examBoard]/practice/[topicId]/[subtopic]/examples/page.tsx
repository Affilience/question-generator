'use client';

import { useEffect, useState } from 'react';
import { useParams, notFound } from 'next/navigation';
import Link from 'next/link';
import { getTopicByIdSubjectBoardAndLevel, getExamBoardsByLevel } from '@/lib/topics';
import { slugify } from '@/lib/seo/utils';
import { Topic, ExamBoard, QualificationLevel, Subject } from '@/types';
import { WorkedExampleCard } from '@/components/WorkedExampleCard';

interface WorkedExample {
  questionType: string;
  question: string;
  steps: {
    step: number;
    instruction: string;
    working: string;
    explanation: string;
  }[];
  answer: string;
  keyTips: string[];
  commonMistakes: string[];
}

const validLevels: QualificationLevel[] = ['gcse', 'a-level'];
const validExamBoards: ExamBoard[] = ['aqa', 'edexcel', 'ocr'];
const validSubjects: Subject[] = [
  'maths', 'physics', 'chemistry', 'biology',
  'computer-science', 'economics', 'business', 'psychology',
  'geography', 'history', 'english-literature', 'further-maths',
  'combined-science'
];

export default function WorkedExamplesPage() {
  const params = useParams();

  // Extract params with fallbacks for loading state
  const level = (params.level as string) || '';
  const subject = (params.subject as string) || '';
  const examBoard = (params.examBoard as string) || '';
  const topicId = (params.topicId as string) || '';
  const subtopicParam = (params.subtopic as string) || '';
  const subtopic = subtopicParam ? decodeURIComponent(subtopicParam) : '';

  const levelDisplay = level === 'a-level' ? 'A-Level' : 'GCSE';

  // All hooks must be called before any conditional returns
  const [topic, setTopic] = useState<Topic | null>(null);
  const [topicLoaded, setTopicLoaded] = useState(false);
  const [examples, setExamples] = useState<WorkedExample[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [paramsReady, setParamsReady] = useState(false);

  // Check if params are ready
  useEffect(() => {
    if (subtopicParam && level && subject && examBoard && topicId) {
      setParamsReady(true);
    }
  }, [subtopicParam, level, subject, examBoard, topicId]);

  // Load topic when params are ready
  useEffect(() => {
    if (paramsReady) {
      const foundTopic = getTopicByIdSubjectBoardAndLevel(topicId, subject as Subject, examBoard as ExamBoard, level as QualificationLevel);
      setTopic(foundTopic || null);
      setTopicLoaded(true);
    }
  }, [paramsReady, topicId, subject, examBoard, level]);

  // Fetch examples once topic is loaded
  useEffect(() => {
    if (!topicLoaded) return;
    if (!topic) {
      setLoading(false);
      return;
    }
    if (subtopic === 'random') {
      setLoading(false);
      return;
    }

    // Find the actual subtopic name from the slug
    const actualSubtopicName = topic.subtopics.find(s => slugify(s) === subtopic);
    if (!actualSubtopicName) {
      setLoading(false);
      return;
    }

    const fetchExamples = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch('/api/worked-examples', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            topicId,
            subtopic: actualSubtopicName,
            qualification: level,
            examBoard,
            subject,
          }),
        });

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(errorData.error || 'Failed to load examples');
        }

        const data = await response.json();
        setExamples(data.examples || []);
      } catch (err) {
        console.error('Error fetching worked examples:', err);
        setError(err instanceof Error ? err.message : 'Something went wrong');
      } finally {
        setLoading(false);
      }
    };

    fetchExamples();
  }, [topicLoaded, topic, topicId, subtopic, level, examBoard, subject]);

  // All hooks declared above. Conditional returns start here.

  // Handle loading state - params not yet available
  if (!paramsReady) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-[#666666]">Loading...</div>
      </div>
    );
  }

  // Validate level
  if (!validLevels.includes(level as QualificationLevel)) {
    notFound();
  }

  // Validate subject
  if (!validSubjects.includes(subject as Subject)) {
    notFound();
  }

  // Validate exam board
  if (!validExamBoards.includes(examBoard as ExamBoard)) {
    notFound();
  }

  // Check if this exam board supports this level
  const boardsForLevel = getExamBoardsByLevel(level as QualificationLevel);
  if (!boardsForLevel.find(b => b.id === examBoard)) {
    notFound();
  }

  // Show loading while topic is being loaded
  if (!topicLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 border-4 border-[#2a2a2a] border-t-[#3b82f6] rounded-full animate-spin mb-4" />
          <p className="text-[#a1a1a1]">Loading...</p>
        </div>
      </div>
    );
  }

  if (!topic) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-2">Topic not found</h1>
          <Link href={`/${level}/${subject}/${examBoard}`} className="text-[#3b82f6] hover:text-[#60a5fa] transition-colors">
            Return to topics
          </Link>
        </div>
      </div>
    );
  }

  if (subtopic === 'random') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-2">Select a specific subtopic</h1>
          <p className="text-[#a1a1a1] mb-4">Worked examples are not available for random mode</p>
          <Link
            href={`/${level}/${subject}/${examBoard}/practice/${topicId}`}
            className="text-[#3b82f6] hover:text-[#60a5fa] transition-colors"
          >
            Choose a subtopic
          </Link>
        </div>
      </div>
    );
  }

  // Find the actual subtopic name from the slug (subtopic param is URL-encoded slug)
  const subtopicName = topic.subtopics.find(s => slugify(s) === subtopic);
  if (!subtopicName) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-2">Subtopic not found</h1>
          <p className="text-[#a1a1a1] mb-4">&quot;{subtopic}&quot; is not a valid subtopic</p>
          <Link
            href={`/${level}/${subject}/${examBoard}/practice/${topicId}`}
            className="text-[#3b82f6] hover:text-[#60a5fa] transition-colors"
          >
            Choose a different subtopic
          </Link>
        </div>
      </div>
    );
  }

  const displaySubtopic = subtopicName.replace(' (H)', '');
  const isHigher = subtopicName.includes('(H)');

  return (
    <div className="min-h-screen">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <header className="mb-8">
          <Link
            href={`/${level}/${subject}/${examBoard}/practice/${topicId}/${encodeURIComponent(subtopic)}`}
            className="inline-flex items-center text-sm text-[#666666] hover:text-[#a1a1a1] transition-colors mb-4"
          >
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to practice
          </Link>

          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl">{topic.icon}</span>
            <div>
              <h1 className="text-2xl font-bold text-white">{displaySubtopic}</h1>
              <p className="text-[#666666] text-sm">{topic.name} — {levelDisplay} Worked Examples</p>
            </div>
          </div>

          <div className="flex items-center gap-2 mt-2">
            <span className="text-xs font-medium px-2 py-1 rounded-full bg-[#3b82f6]/20 text-[#60a5fa]">
              Learn Mode
            </span>
            {isHigher && (
              <span className="text-xs font-medium px-2 py-1 rounded-full bg-purple-500/20 text-purple-400">
                Higher Tier
              </span>
            )}
            {level === 'a-level' && (
              <span className="text-xs font-medium px-2 py-1 rounded-full bg-emerald-500/20 text-emerald-400">
                A-Level
              </span>
            )}
          </div>
        </header>

        {/* Info banner */}
        <div className="bg-[#1a2a3a] border border-[#3b82f6]/30 rounded-xl p-4 mb-6">
          <p className="text-[#a1a1a1] text-sm">
            <span className="text-[#60a5fa] font-medium">Study these worked examples</span> to understand the method before practicing questions. Each example shows step-by-step working with explanations.
          </p>
        </div>

        {loading && (
          <div className="bg-[#1a1a1a] rounded-2xl border border-[#2a2a2a] p-12 animate-fade-in">
            <div className="flex flex-col items-center justify-center">
              <div className="w-10 h-10 border-4 border-[#2a2a2a] border-t-[#3b82f6] rounded-full animate-spin mb-4" />
              <p className="text-[#a1a1a1]">Loading worked examples...</p>
            </div>
          </div>
        )}

        {error && (
          <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-6 animate-fade-in">
            <p className="text-red-400 mb-4">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-red-500 text-white rounded-lg transition-all duration-300 hover:bg-red-400 active:scale-95"
            >
              Try again
            </button>
          </div>
        )}

        {!loading && !error && examples.length > 0 && (
          <div className="space-y-4 animate-fade-in">
            {examples.map((example, index) => (
              <WorkedExampleCard key={index} example={example} index={index} />
            ))}

            {/* Practice CTA */}
            <div className="pt-6">
              <Link
                href={`/${level}/${subject}/${examBoard}/practice/${topicId}/${encodeURIComponent(subtopic)}`}
                className="block w-full py-4 px-6 bg-[#3b82f6] text-white rounded-xl font-medium text-center transition-all duration-300 hover:bg-[#60a5fa] hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] active:scale-[0.98]"
              >
                Ready to Practice
              </Link>
            </div>
          </div>
        )}

        {!loading && !error && examples.length === 0 && (
          <div className="text-center py-12">
            <p className="text-[#a1a1a1]">No examples available yet</p>
          </div>
        )}
      </div>
    </div>
  );
}
