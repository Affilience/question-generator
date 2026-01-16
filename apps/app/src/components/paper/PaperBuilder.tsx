'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Topic, ExamBoard, QualificationLevel, Subject } from '@/types';
import { getExamStructure, PaperStructure } from '@/lib/exam-structures';

interface PaperConfig {
  selectedTopics: string[];
  totalMarks: number;
  timeLimit: number | null; // minutes, null = no limit
  difficulty: {
    easy: number;
    medium: number;
    hard: number;
  };
  paperName: string;
  includeTimer: boolean;
}

interface PaperBuilderProps {
  topics: Topic[];
  examBoard: ExamBoard;
  level: QualificationLevel;
  subject: Subject;
  onGenerate: (config: PaperConfig) => void;
  isGenerating: boolean;
}

export function PaperBuilder({
  topics,
  examBoard,
  level,
  subject,
  onGenerate,
  isGenerating,
}: PaperBuilderProps) {
  const examStructure = getExamStructure(subject, examBoard, level);

  const [selectedTopics, setSelectedTopics] = useState<Set<string>>(new Set());
  const [totalMarks, setTotalMarks] = useState(examStructure?.papers[0]?.marks || 80);
  const [timeLimit, setTimeLimit] = useState<number | null>(examStructure?.papers[0]?.duration || 90);
  const [includeTimer, setIncludeTimer] = useState(true);
  const [difficulty, setDifficulty] = useState({
    easy: 30,
    medium: 50,
    hard: 20,
  });
  const [paperName, setPaperName] = useState('');

  // Generate default paper name
  const defaultPaperName = useMemo(() => {
    const levelDisplay = level === 'a-level' ? 'A-Level' : 'GCSE';
    const subjectDisplay = subject.charAt(0).toUpperCase() + subject.slice(1);
    return `${examBoard.toUpperCase()} ${levelDisplay} ${subjectDisplay} Practice Paper`;
  }, [examBoard, level, subject]);

  const toggleTopic = (topicId: string) => {
    const newSelected = new Set(selectedTopics);
    if (newSelected.has(topicId)) {
      newSelected.delete(topicId);
    } else {
      newSelected.add(topicId);
    }
    setSelectedTopics(newSelected);
  };

  const selectAll = () => {
    setSelectedTopics(new Set(topics.map((t) => t.id)));
  };

  const deselectAll = () => {
    setSelectedTopics(new Set());
  };

  const handleDifficultyChange = (key: 'easy' | 'medium' | 'hard', value: number) => {
    const remaining = 100 - value;
    const others = ['easy', 'medium', 'hard'].filter((k) => k !== key) as ('easy' | 'medium' | 'hard')[];

    // Distribute remaining proportionally
    const otherTotal = others.reduce((sum, k) => sum + difficulty[k], 0);
    const newDifficulty = { ...difficulty, [key]: value };

    if (otherTotal > 0) {
      others.forEach((k) => {
        newDifficulty[k] = Math.round((difficulty[k] / otherTotal) * remaining);
      });
    } else {
      others.forEach((k, i) => {
        newDifficulty[k] = Math.round(remaining / others.length);
      });
    }

    // Ensure total is exactly 100
    const total = newDifficulty.easy + newDifficulty.medium + newDifficulty.hard;
    if (total !== 100) {
      newDifficulty.medium += 100 - total;
    }

    setDifficulty(newDifficulty);
  };

  const handleGenerate = () => {
    onGenerate({
      selectedTopics: Array.from(selectedTopics),
      totalMarks,
      timeLimit: includeTimer ? timeLimit : null,
      difficulty,
      paperName: paperName || defaultPaperName,
      includeTimer,
    });
  };

  const estimatedQuestions = useMemo(() => {
    // Average marks per question: Easy ~2, Medium ~4, Hard ~8
    const avgEasy = 2;
    const avgMedium = 4;
    const avgHard = 8;

    const easyMarks = (totalMarks * difficulty.easy) / 100;
    const mediumMarks = (totalMarks * difficulty.medium) / 100;
    const hardMarks = (totalMarks * difficulty.hard) / 100;

    return Math.round(easyMarks / avgEasy + mediumMarks / avgMedium + hardMarks / avgHard);
  }, [totalMarks, difficulty]);

  return (
    <div className="space-y-6">
      {/* Paper Name */}
      <div className="bg-[#1a1a1a] rounded-xl border border-[#2a2a2a] p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Paper Details</h3>
        <input
          type="text"
          value={paperName}
          onChange={(e) => setPaperName(e.target.value)}
          placeholder={defaultPaperName}
          className="w-full px-4 py-3 bg-[#0d0d0d] border border-[#2a2a2a] rounded-xl text-white placeholder-[#666666] focus:outline-none focus:border-[#3b82f6] transition-colors"
        />
      </div>

      {/* Topic Selection */}
      <div className="bg-[#1a1a1a] rounded-xl border border-[#2a2a2a] p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-white">
            Topics ({selectedTopics.size} selected)
          </h3>
          <div className="flex gap-2">
            <button
              onClick={selectAll}
              className="px-3 py-1 text-sm text-[#3b82f6] hover:bg-[#3b82f6]/10 rounded-lg transition-colors"
            >
              Select all
            </button>
            <button
              onClick={deselectAll}
              className="px-3 py-1 text-sm text-[#666666] hover:bg-[#333333] rounded-lg transition-colors"
            >
              Clear
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-[300px] overflow-y-auto">
          {topics.map((topic) => (
            <motion.button
              key={topic.id}
              onClick={() => toggleTopic(topic.id)}
              className={`flex items-center gap-2 p-3 rounded-xl border text-left transition-all ${
                selectedTopics.has(topic.id)
                  ? 'bg-[#3b82f6]/20 border-[#3b82f6] text-white'
                  : 'bg-[#0d0d0d] border-[#2a2a2a] text-[#a1a1a1] hover:border-[#3a3a3a]'
              }`}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-xl">{topic.icon}</span>
              <span className="text-sm truncate">{topic.name}</span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Marks & Time */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-[#1a1a1a] rounded-xl border border-[#2a2a2a] p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Total Marks</h3>
          <div className="flex items-center gap-4">
            <input
              type="range"
              min="20"
              max="120"
              step="5"
              value={totalMarks}
              onChange={(e) => setTotalMarks(parseInt(e.target.value))}
              className="flex-1 accent-[#3b82f6]"
            />
            <div className="w-16 text-center">
              <span className="text-2xl font-bold text-white">{totalMarks}</span>
              <div className="text-xs text-[#666666]">marks</div>
            </div>
          </div>

          {examStructure && (
            <div className="mt-4 flex flex-wrap gap-2">
              {examStructure.papers.map((paper) => (
                <button
                  key={paper.paperNumber}
                  onClick={() => setTotalMarks(paper.marks)}
                  className={`px-3 py-1 text-xs rounded-full border transition-colors ${
                    totalMarks === paper.marks
                      ? 'bg-[#3b82f6]/20 border-[#3b82f6] text-[#3b82f6]'
                      : 'border-[#333333] text-[#666666] hover:border-[#3b82f6]'
                  }`}
                >
                  Paper {paper.paperNumber}: {paper.marks}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="bg-[#1a1a1a] rounded-xl border border-[#2a2a2a] p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">Time Limit</h3>
            <label className="flex items-center gap-2 text-sm text-[#a1a1a1] cursor-pointer">
              <input
                type="checkbox"
                checked={includeTimer}
                onChange={(e) => setIncludeTimer(e.target.checked)}
                className="w-4 h-4 accent-[#3b82f6]"
              />
              Show timer
            </label>
          </div>

          {includeTimer ? (
            <>
              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min="15"
                  max="180"
                  step="5"
                  value={timeLimit || 90}
                  onChange={(e) => setTimeLimit(parseInt(e.target.value))}
                  className="flex-1 accent-[#3b82f6]"
                />
                <div className="w-20 text-center">
                  <span className="text-2xl font-bold text-white">{timeLimit}</span>
                  <div className="text-xs text-[#666666]">minutes</div>
                </div>
              </div>

              {examStructure && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {examStructure.papers.map((paper) => (
                    <button
                      key={paper.paperNumber}
                      onClick={() => setTimeLimit(paper.duration)}
                      className={`px-3 py-1 text-xs rounded-full border transition-colors ${
                        timeLimit === paper.duration
                          ? 'bg-[#3b82f6]/20 border-[#3b82f6] text-[#3b82f6]'
                          : 'border-[#333333] text-[#666666] hover:border-[#3b82f6]'
                      }`}
                    >
                      Paper {paper.paperNumber}: {paper.duration}min
                    </button>
                  ))}
                </div>
              )}
            </>
          ) : (
            <p className="text-[#666666] text-sm">No time limit - practice at your own pace</p>
          )}
        </div>
      </div>

      {/* Difficulty Distribution */}
      <div className="bg-[#1a1a1a] rounded-xl border border-[#2a2a2a] p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Difficulty Distribution</h3>

        <div className="space-y-4">
          {(['easy', 'medium', 'hard'] as const).map((level) => (
            <div key={level} className="flex items-center gap-4">
              <div className="w-20 text-sm capitalize">
                <span
                  className={
                    level === 'easy'
                      ? 'text-green-400'
                      : level === 'medium'
                      ? 'text-yellow-400'
                      : 'text-red-400'
                  }
                >
                  {level}
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={difficulty[level]}
                onChange={(e) => handleDifficultyChange(level, parseInt(e.target.value))}
                className={`flex-1 ${
                  level === 'easy'
                    ? 'accent-green-500'
                    : level === 'medium'
                    ? 'accent-yellow-500'
                    : 'accent-red-500'
                }`}
              />
              <span className="w-12 text-right text-white font-medium">{difficulty[level]}%</span>
            </div>
          ))}
        </div>

        <div className="mt-4 flex h-3 rounded-full overflow-hidden">
          <div className="bg-green-500" style={{ width: `${difficulty.easy}%` }} />
          <div className="bg-yellow-500" style={{ width: `${difficulty.medium}%` }} />
          <div className="bg-red-500" style={{ width: `${difficulty.hard}%` }} />
        </div>
      </div>

      {/* Summary & Generate */}
      <div className="bg-[#1a1a1a] rounded-xl border border-[#2a2a2a] p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Paper Summary</h3>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
          <div className="text-center p-3 bg-[#0d0d0d] rounded-xl">
            <div className="text-2xl font-bold text-white">{selectedTopics.size}</div>
            <div className="text-xs text-[#666666]">Topics</div>
          </div>
          <div className="text-center p-3 bg-[#0d0d0d] rounded-xl">
            <div className="text-2xl font-bold text-white">{totalMarks}</div>
            <div className="text-xs text-[#666666]">Total Marks</div>
          </div>
          <div className="text-center p-3 bg-[#0d0d0d] rounded-xl">
            <div className="text-2xl font-bold text-white">~{estimatedQuestions}</div>
            <div className="text-xs text-[#666666]">Questions</div>
          </div>
          <div className="text-center p-3 bg-[#0d0d0d] rounded-xl">
            <div className="text-2xl font-bold text-white">
              {includeTimer && timeLimit ? `${timeLimit}m` : '--'}
            </div>
            <div className="text-xs text-[#666666]">Time Limit</div>
          </div>
        </div>

        <button
          onClick={handleGenerate}
          disabled={selectedTopics.size === 0 || isGenerating}
          className="w-full py-4 bg-[#3b82f6] hover:bg-[#2563eb] disabled:bg-[#333333] disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-colors flex items-center justify-center gap-2"
        >
          {isGenerating ? (
            <>
              <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              <span>Generating Paper...</span>
            </>
          ) : (
            <>
              <span>Generate Paper</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 5l7 7-7 7M5 5l7 7-7 7"
                />
              </svg>
            </>
          )}
        </button>

        {selectedTopics.size === 0 && (
          <p className="mt-2 text-center text-sm text-[#666666]">
            Select at least one topic to generate a paper
          </p>
        )}
      </div>
    </div>
  );
}

export type { PaperConfig };
