'use client';

import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Command } from 'cmdk';
import { motion, AnimatePresence } from 'framer-motion';

interface CommandItem {
  id: string;
  label: string;
  icon?: string;
  href?: string;
  action?: () => void;
  keywords?: string[];
  group: string;
}

const NAVIGATION_ITEMS: CommandItem[] = [
  // Levels
  { id: 'gcse', label: 'GCSE', icon: '📚', href: '/gcse', group: 'Qualification', keywords: ['level', 'qualification'] },
  { id: 'a-level', label: 'A-Level', icon: '🎓', href: '/a-level', group: 'Qualification', keywords: ['level', 'qualification', 'advanced'] },

  // Subjects
  { id: 'maths', label: 'Mathematics', icon: '📐', href: '/gcse/maths', group: 'Subjects', keywords: ['math', 'algebra', 'geometry'] },
  { id: 'physics', label: 'Physics', icon: '⚛️', href: '/gcse/physics', group: 'Subjects', keywords: ['science', 'forces', 'energy'] },
  { id: 'chemistry', label: 'Chemistry', icon: '🧪', href: '/gcse/chemistry', group: 'Subjects', keywords: ['science', 'reactions', 'elements'] },
  { id: 'biology', label: 'Biology', icon: '🧬', href: '/gcse/biology', group: 'Subjects', keywords: ['science', 'cells', 'life'] },

  // Quick Actions
  { id: 'dashboard', label: 'Go to Dashboard', icon: '📊', href: '/dashboard', group: 'Quick Actions', keywords: ['stats', 'progress', 'analytics'] },
  { id: 'bookmarks', label: 'View Bookmarks', icon: '🔖', href: '/bookmarks', group: 'Quick Actions', keywords: ['saved', 'favorites'] },
  { id: 'home', label: 'Go Home', icon: '🏠', href: '/', group: 'Quick Actions', keywords: ['start', 'main'] },

  // GCSE Topics (Maths)
  { id: 'gcse-maths-aqa', label: 'GCSE Maths (AQA)', icon: '📐', href: '/gcse/maths/aqa', group: 'GCSE Maths', keywords: ['aqa', 'exam board'] },
  { id: 'gcse-maths-edexcel', label: 'GCSE Maths (Edexcel)', icon: '📐', href: '/gcse/maths/edexcel', group: 'GCSE Maths', keywords: ['edexcel', 'pearson'] },
  { id: 'gcse-maths-ocr', label: 'GCSE Maths (OCR)', icon: '📐', href: '/gcse/maths/ocr', group: 'GCSE Maths', keywords: ['ocr', 'exam board'] },

  // GCSE Topics (Physics)
  { id: 'gcse-physics-aqa', label: 'GCSE Physics (AQA)', icon: '⚛️', href: '/gcse/physics/aqa', group: 'GCSE Physics', keywords: ['aqa', 'science'] },
  { id: 'gcse-physics-edexcel', label: 'GCSE Physics (Edexcel)', icon: '⚛️', href: '/gcse/physics/edexcel', group: 'GCSE Physics', keywords: ['edexcel', 'science'] },

  // GCSE Topics (Chemistry)
  { id: 'gcse-chemistry-aqa', label: 'GCSE Chemistry (AQA)', icon: '🧪', href: '/gcse/chemistry/aqa', group: 'GCSE Chemistry', keywords: ['aqa', 'science'] },
  { id: 'gcse-chemistry-edexcel', label: 'GCSE Chemistry (Edexcel)', icon: '🧪', href: '/gcse/chemistry/edexcel', group: 'GCSE Chemistry', keywords: ['edexcel', 'science'] },

  // A-Level
  { id: 'a-level-maths-aqa', label: 'A-Level Maths (AQA)', icon: '🎓', href: '/a-level/maths/aqa', group: 'A-Level', keywords: ['advanced', 'aqa'] },
  { id: 'a-level-maths-edexcel', label: 'A-Level Maths (Edexcel)', icon: '🎓', href: '/a-level/maths/edexcel', group: 'A-Level', keywords: ['advanced', 'edexcel'] },
  { id: 'a-level-physics-aqa', label: 'A-Level Physics (AQA)', icon: '⚛️', href: '/a-level/physics/aqa', group: 'A-Level', keywords: ['advanced', 'aqa', 'science'] },
  { id: 'a-level-chemistry-aqa', label: 'A-Level Chemistry (AQA)', icon: '🧪', href: '/a-level/chemistry/aqa', group: 'A-Level', keywords: ['advanced', 'aqa', 'science'] },
];

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const router = useRouter();

  // Toggle with Cmd+K or Ctrl+K
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const runCommand = useCallback((command: CommandItem) => {
    setOpen(false);
    setSearch('');
    if (command.href) {
      router.push(command.href);
    } else if (command.action) {
      command.action();
    }
  }, [router]);

  // Group items
  const groups = NAVIGATION_ITEMS.reduce((acc, item) => {
    if (!acc[item.group]) {
      acc[item.group] = [];
    }
    acc[item.group].push(item);
    return acc;
  }, {} as Record<string, CommandItem[]>);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          />

          {/* Command Dialog */}
          <motion.div
            className="fixed left-1/2 top-[20%] -translate-x-1/2 w-full max-w-lg z-50"
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          >
            <Command
              className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl overflow-hidden shadow-2xl"
              loop
            >
              <div className="flex items-center border-b border-[#2a2a2a] px-4">
                <svg className="w-5 h-5 text-[#666666] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <Command.Input
                  value={search}
                  onValueChange={setSearch}
                  placeholder="Search or jump to..."
                  className="flex-1 h-14 bg-transparent text-white placeholder-[#666666] outline-none text-base"
                />
                <kbd className="hidden sm:inline-flex h-6 items-center gap-1 rounded border border-[#333333] bg-[#222222] px-1.5 font-mono text-xs text-[#666666]">
                  ESC
                </kbd>
              </div>

              <Command.List className="max-h-[400px] overflow-y-auto p-2">
                <Command.Empty className="py-6 text-center text-sm text-[#666666]">
                  No results found.
                </Command.Empty>

                {Object.entries(groups).map(([group, items]) => (
                  <Command.Group key={group} heading={group} className="mb-2">
                    <div className="px-2 py-1.5 text-xs font-medium text-[#666666] uppercase tracking-wider">
                      {group}
                    </div>
                    {items.map((item) => (
                      <Command.Item
                        key={item.id}
                        value={`${item.label} ${item.keywords?.join(' ') || ''}`}
                        onSelect={() => runCommand(item)}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer text-[#a1a1a1] data-[selected=true]:bg-[#2a2a2a] data-[selected=true]:text-white transition-colors"
                      >
                        {item.icon && <span className="text-lg">{item.icon}</span>}
                        <span className="flex-1">{item.label}</span>
                        {item.href && (
                          <svg className="w-4 h-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        )}
                      </Command.Item>
                    ))}
                  </Command.Group>
                ))}
              </Command.List>

              <div className="flex items-center justify-between px-4 py-3 border-t border-[#2a2a2a] text-xs text-[#666666]">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <kbd className="px-1.5 py-0.5 rounded bg-[#222222] border border-[#333333]">↑</kbd>
                    <kbd className="px-1.5 py-0.5 rounded bg-[#222222] border border-[#333333]">↓</kbd>
                    to navigate
                  </span>
                  <span className="flex items-center gap-1">
                    <kbd className="px-1.5 py-0.5 rounded bg-[#222222] border border-[#333333]">↵</kbd>
                    to select
                  </span>
                </div>
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 rounded bg-[#222222] border border-[#333333]">⌘</kbd>
                  <kbd className="px-1.5 py-0.5 rounded bg-[#222222] border border-[#333333]">K</kbd>
                  to open
                </span>
              </div>
            </Command>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

/**
 * Keyboard shortcut hint to show in UI
 */
export function CommandPaletteHint({ className = '' }: { className?: string }) {
  return (
    <button
      onClick={() => {
        // Dispatch keyboard event to open command palette
        document.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true }));
      }}
      className={`flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] text-sm text-[#666666] hover:text-[#a1a1a1] hover:border-[#3a3a3a] transition-colors ${className}`}
    >
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
      <span>Quick search...</span>
      <kbd className="hidden sm:inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-[#222222] border border-[#333333] text-xs">
        <span>⌘</span>K
      </kbd>
    </button>
  );
}
