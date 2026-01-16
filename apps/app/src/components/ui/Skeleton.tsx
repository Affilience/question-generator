'use client';

import { motion } from 'framer-motion';

interface SkeletonProps {
  className?: string;
  animate?: boolean;
}

export function Skeleton({ className = '', animate = true }: SkeletonProps) {
  if (animate) {
    return (
      <motion.div
        className={`bg-[#2a2a2a] rounded ${className}`}
        animate={{
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    );
  }

  return <div className={`bg-[#2a2a2a] rounded animate-pulse ${className}`} />;
}

export function TopicCardSkeleton({ index = 0 }: { index?: number }) {
  return (
    <motion.div
      className="rounded-2xl bg-[#1a1a1a] border border-[#2a2a2a] p-4 sm:p-6 h-[200px] flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <div className="flex items-start justify-between mb-4">
        <Skeleton className="w-10 h-10 rounded-lg" />
        <Skeleton className="w-16 h-4" />
      </div>
      <Skeleton className="w-3/4 h-6 mb-2" />
      <Skeleton className="w-full h-4 mb-1" />
      <Skeleton className="w-2/3 h-4 mb-4" />
      <div className="flex justify-between items-center mt-auto">
        <Skeleton className="w-20 h-4" />
        <Skeleton className="w-24 h-2" />
      </div>
    </motion.div>
  );
}

export function TopicGridSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <TopicCardSkeleton key={i} index={i} />
      ))}
    </div>
  );
}

export function StatCardSkeleton() {
  return (
    <div className="bg-[#1a1a1a] rounded-xl px-4 sm:px-5 py-2 sm:py-3 border border-[#2a2a2a]">
      <Skeleton className="w-16 h-8 mb-1" />
      <Skeleton className="w-24 h-4" />
    </div>
  );
}

export function QuestionCardSkeleton() {
  return (
    <div className="bg-[#1a1a1a] rounded-2xl border border-[#2a2a2a] p-6">
      <div className="flex justify-between items-start mb-4">
        <Skeleton className="w-24 h-6" />
        <Skeleton className="w-16 h-6" />
      </div>
      <div className="space-y-3 mb-6">
        <Skeleton className="w-full h-4" />
        <Skeleton className="w-full h-4" />
        <Skeleton className="w-3/4 h-4" />
        <Skeleton className="w-5/6 h-4" />
      </div>
      <div className="flex gap-3">
        <Skeleton className="w-32 h-10 rounded-xl" />
        <Skeleton className="w-32 h-10 rounded-xl" />
      </div>
    </div>
  );
}

export function DashboardSkeleton() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <Skeleton className="w-48 h-8" />
        <div className="flex gap-4">
          <StatCardSkeleton />
          <StatCardSkeleton />
          <StatCardSkeleton />
        </div>
      </div>

      {/* Charts placeholder */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-[#1a1a1a] rounded-2xl border border-[#2a2a2a] p-6 h-[300px]">
          <Skeleton className="w-32 h-6 mb-4" />
          <Skeleton className="w-full h-[220px]" />
        </div>
        <div className="bg-[#1a1a1a] rounded-2xl border border-[#2a2a2a] p-6 h-[300px]">
          <Skeleton className="w-32 h-6 mb-4" />
          <Skeleton className="w-full h-[220px]" />
        </div>
      </div>

      {/* Recent activity */}
      <div className="bg-[#1a1a1a] rounded-2xl border border-[#2a2a2a] p-6">
        <Skeleton className="w-40 h-6 mb-4" />
        <div className="space-y-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="flex items-center gap-4">
              <Skeleton className="w-8 h-8 rounded-full" />
              <Skeleton className="flex-1 h-4" />
              <Skeleton className="w-16 h-4" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function XPBarSkeleton() {
  return (
    <div className="bg-[#1a1a1a] rounded-xl border border-[#2a2a2a] p-4">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <Skeleton className="w-8 h-8 rounded-full" />
          <div>
            <Skeleton className="w-20 h-4 mb-1" />
            <Skeleton className="w-12 h-3" />
          </div>
        </div>
        <div className="text-right">
          <Skeleton className="w-16 h-5 mb-1" />
          <Skeleton className="w-20 h-3" />
        </div>
      </div>
      <Skeleton className="w-full h-2" />
    </div>
  );
}
