'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export interface BreadcrumbItem {
  label: string;
  href?: string;
  icon?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  return (
    <nav className={`flex items-center gap-1 text-sm ${className}`} aria-label="Breadcrumb">
      {items.map((item, index) => (
        <motion.div
          key={index}
          className="flex items-center"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.05 }}
        >
          {index > 0 && (
            <svg
              className="w-4 h-4 mx-1 text-[#444444]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          )}

          {item.href && index < items.length - 1 ? (
            <Link
              href={item.href}
              className="flex items-center gap-1 text-[#666666] hover:text-[#a1a1a1] transition-colors"
            >
              {item.icon && <span className="text-base">{item.icon}</span>}
              <span>{item.label}</span>
            </Link>
          ) : (
            <span className="flex items-center gap-1 text-white font-medium">
              {item.icon && <span className="text-base">{item.icon}</span>}
              <span>{item.label}</span>
            </span>
          )}
        </motion.div>
      ))}
    </nav>
  );
}

/**
 * Helper to build breadcrumb items from path segments
 */
export function buildBreadcrumbs(params: {
  level?: string;
  subject?: string;
  examBoard?: string;
  topicId?: string;
  subtopic?: string;
}): BreadcrumbItem[] {
  const items: BreadcrumbItem[] = [{ label: 'Home', href: '/', icon: '🏠' }];

  const levelDisplay = params.level === 'a-level' ? 'A-Level' : params.level?.toUpperCase();
  const subjectInfo: Record<string, { name: string; icon: string }> = {
    maths: { name: 'Maths', icon: '📐' },
    physics: { name: 'Physics', icon: '⚛️' },
    chemistry: { name: 'Chemistry', icon: '🧪' },
    biology: { name: 'Biology', icon: '🧬' },
    'computer-science': { name: 'Computer Science', icon: '💻' },
  };

  const boardInfo: Record<string, string> = {
    aqa: 'AQA',
    edexcel: 'Edexcel',
    ocr: 'OCR',
  };

  if (params.level) {
    items.push({
      label: levelDisplay || params.level,
      href: `/${params.level}`,
    });
  }

  if (params.level && params.subject) {
    const subject = subjectInfo[params.subject];
    items.push({
      label: subject?.name || params.subject,
      href: `/${params.level}/${params.subject}`,
      icon: subject?.icon,
    });
  }

  if (params.level && params.subject && params.examBoard) {
    items.push({
      label: boardInfo[params.examBoard] || params.examBoard.toUpperCase(),
      href: `/${params.level}/${params.subject}/${params.examBoard}`,
    });
  }

  if (params.level && params.subject && params.examBoard && params.topicId) {
    // Format topic ID to readable name
    const topicName = params.topicId
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    items.push({
      label: topicName,
      href: `/${params.level}/${params.subject}/${params.examBoard}/practice/${params.topicId}`,
    });
  }

  if (params.level && params.subject && params.examBoard && params.topicId && params.subtopic) {
    // Format subtopic to readable name
    const subtopicName = params.subtopic
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    items.push({
      label: subtopicName,
    });
  }

  return items;
}
