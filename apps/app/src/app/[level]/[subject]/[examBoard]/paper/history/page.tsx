'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams, notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { Header } from '@/components/Header';
import { Breadcrumbs, buildBreadcrumbs } from '@/components/ui/Breadcrumbs';
import { QualificationLevel, Subject, ExamBoard } from '@/types';
import { useAuth } from '@/contexts/AuthContext';
import { createClient } from '@/lib/supabase/client';

const validLevels: QualificationLevel[] = ['gcse', 'a-level'];
const validExamBoards: ExamBoard[] = ['aqa', 'edexcel', 'ocr'];
const validSubjects: Subject[] = ['maths', 'physics', 'chemistry', 'biology', 'computer-science', 'economics', 'business', 'psychology', 'geography', 'history', 'english-literature', 'further-maths', 'combined-science'];

interface PaperRecord {
  id: string;
  paper_name: string;
  total_marks: number;
  created_at: string;
  exam_board: string;
  qualification: string;
  subject: string;
}

export default function PaperHistoryPage() {
  const params = useParams();
  const level = params.level as string;
  const subject = params.subject as string;
  const examBoard = params.examBoard as string;

  const { user } = useAuth();
  const [papers, setPapers] = useState<PaperRecord[]>([]);
  const [loading, setLoading] = useState(true);

  // Validate params
  if (!validLevels.includes(level as QualificationLevel)) {
    notFound();
  }
  if (!validSubjects.includes(subject as Subject)) {
    notFound();
  }
  if (!validExamBoards.includes(examBoard as ExamBoard)) {
    notFound();
  }

  const levelDisplay = level === 'a-level' ? 'A-Level' : 'GCSE';

  const breadcrumbs = [
    ...buildBreadcrumbs({ level, subject, examBoard }),
    { label: 'Paper Generator', href: `/${level}/${subject}/${examBoard}/paper`, icon: '📝' },
    { label: 'History', icon: '📋' },
  ];

  useEffect(() => {
    async function fetchPapers() {
      if (!user) {
        setLoading(false);
        return;
      }

      const supabase = createClient();
      const { data, error } = await supabase
        .from('generated_papers')
        .select('id, paper_name, total_marks, created_at, exam_board, qualification, subject')
        .eq('user_id', user.id)
        .eq('exam_board', examBoard)
        .eq('qualification', level)
        .eq('subject', subject)
        .order('created_at', { ascending: false })
        .limit(20);

      if (error) {
        console.error('Error fetching papers:', error);
        // Still show empty state, don't throw error to user
        setPapers([]);
      } else if (data) {
        setPapers(data);
      }
      setLoading(false);
    }

    fetchPapers();
  }, [user, examBoard, level, subject]);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="min-h-screen bg-[var(--color-bg-deepest)]">
      <Header />

      <div className="max-w-4xl mx-auto px-4 py-6 sm:py-8">
        <Breadcrumbs items={breadcrumbs} className="mb-6" />

        <motion.header
          className="mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="text-4xl">📋</span>
            <h1 className="text-2xl sm:text-3xl font-bold text-white">
              Paper History
            </h1>
          </div>
          <p className="text-[#a1a1a1]">
            Your previously generated {examBoard.toUpperCase()} {levelDisplay} practice papers
          </p>
        </motion.header>

        {!user ? (
          <div className="text-center py-12">
            <p className="text-[#a1a1a1] mb-4">Sign in to view your paper history</p>
            <Link
              href={`/login?redirect=/${level}/${subject}/${examBoard}/paper/history`}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#3b82f6] hover:bg-[#2563eb] text-white rounded-lg transition-colors"
            >
              Sign in
            </Link>
          </div>
        ) : loading ? (
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-[#1a1a1a] rounded-xl border border-[#2a2a2a] p-6 animate-pulse"
              >
                <div className="h-5 bg-[#2a2a2a] rounded w-1/3 mb-3" />
                <div className="h-4 bg-[#2a2a2a] rounded w-1/4" />
              </div>
            ))}
          </div>
        ) : papers.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-[#a1a1a1] mb-4">No papers generated yet</p>
            <Link
              href={`/${level}/${subject}/${examBoard}/paper`}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#3b82f6] hover:bg-[#2563eb] text-white rounded-lg transition-colors"
            >
              Generate your first paper
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {papers.map((paper, index) => (
              <motion.div
                key={paper.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  href={`/paper/take/${paper.id}`}
                  className="block bg-[#1a1a1a] rounded-xl border border-[#2a2a2a] p-6 hover:border-[#3b82f6]/50 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-white font-medium mb-1">
                        {paper.paper_name}
                      </h3>
                      <p className="text-sm text-[#666666]">
                        {formatDate(paper.created_at)}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-lg font-bold text-white">
                        {paper.total_marks}
                      </span>
                      <span className="text-sm text-[#666666]"> marks</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}

        <div className="mt-8 flex justify-center">
          <Link
            href={`/${level}/${subject}/${examBoard}/paper`}
            className="text-[#3b82f6] hover:text-[#2563eb] transition-colors flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            Generate new paper
          </Link>
        </div>
      </div>
    </div>
  );
}
