'use client';

import { useState, useCallback } from 'react';
import { PaperSection, QuestionType } from '@/types';

interface SectionBuilderProps {
  sections: PaperSection[];
  onSectionsChange: (sections: PaperSection[]) => void;
  totalMarks: number;
  className?: string;
}

const QUESTION_TYPES: { value: QuestionType; label: string; description: string }[] = [
  { value: 'multiple-choice', label: 'Multiple Choice', description: 'Choose from options' },
  { value: 'short-answer', label: 'Short Answer', description: '1-3 sentences' },
  { value: 'calculation', label: 'Calculation', description: 'Math/numerical problems' },
  { value: 'explain', label: 'Explain/Describe', description: 'Written explanations' },
  { value: 'extended', label: 'Extended Response', description: '6+ mark questions' },
  { value: 'data-analysis', label: 'Data Analysis', description: 'Interpret graphs/tables' },
  { value: 'graph', label: 'Graph/Diagram', description: 'Draw or complete graphs' },
  { value: 'compare', label: 'Compare/Contrast', description: 'Analyse differences' },
];

const DEFAULT_INSTRUCTIONS: Record<string, string> = {
  'Section A': 'Answer ALL questions in this section.',
  'Section B': 'Answer ALL questions in this section. Write your answers in the spaces provided.',
  'Section C': 'Answer ALL questions in this section. Extended writing is required.',
};

export function SectionBuilder({
  sections,
  onSectionsChange,
  totalMarks,
  className = '',
}: SectionBuilderProps) {
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [expandedSection, setExpandedSection] = useState<string | null>(sections[0]?.id || null);

  const allocatedMarks = sections.reduce((sum, s) => sum + s.targetMarks, 0);
  const remainingMarks = totalMarks - allocatedMarks;

  const generateId = () => `section-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;

  const addSection = () => {
    const sectionLetter = String.fromCharCode(65 + sections.length); // A, B, C...
    const newSection: PaperSection = {
      id: generateId(),
      name: `Section ${sectionLetter}`,
      instructions: DEFAULT_INSTRUCTIONS[`Section ${sectionLetter}`] || 'Answer ALL questions in this section.',
      questionTypes: ['short-answer', 'calculation'],
      targetMarks: Math.max(0, remainingMarks),
      order: sections.length,
    };
    onSectionsChange([...sections, newSection]);
    setExpandedSection(newSection.id);
  };

  const removeSection = (id: string) => {
    onSectionsChange(sections.filter((s) => s.id !== id).map((s, i) => ({ ...s, order: i })));
    if (expandedSection === id) {
      setExpandedSection(sections.find((s) => s.id !== id)?.id || null);
    }
  };

  const updateSection = (id: string, updates: Partial<PaperSection>) => {
    onSectionsChange(sections.map((s) => (s.id === id ? { ...s, ...updates } : s)));
  };

  const handleDragStart = (index: number) => {
    setDraggedIndex(index);
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    if (draggedIndex === null || draggedIndex === index) return;

    const newSections = [...sections];
    const [removed] = newSections.splice(draggedIndex, 1);
    newSections.splice(index, 0, removed);

    // Update order numbers
    const reordered = newSections.map((s, i) => ({ ...s, order: i }));
    onSectionsChange(reordered);
    setDraggedIndex(index);
  };

  const handleDragEnd = () => {
    setDraggedIndex(null);
  };

  const toggleQuestionType = (sectionId: string, type: QuestionType) => {
    const section = sections.find((s) => s.id === sectionId);
    if (!section) return;

    const types = section.questionTypes.includes(type)
      ? section.questionTypes.filter((t) => t !== type)
      : [...section.questionTypes, type];

    updateSection(sectionId, { questionTypes: types });
  };

  const autoDistributeMarks = useCallback(() => {
    if (sections.length === 0) return;

    const marksPerSection = Math.floor(totalMarks / sections.length);
    const extraMarks = totalMarks % sections.length;

    const distributed = sections.map((s, i) => ({
      ...s,
      targetMarks: marksPerSection + (i < extraMarks ? 1 : 0),
    }));

    onSectionsChange(distributed);
  }, [sections, totalMarks, onSectionsChange]);

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Header */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="font-medium text-[var(--color-text-primary)]">Paper Sections</h3>
          <p className="text-sm text-[var(--color-text-secondary)]">
            Configure the structure of your paper
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span
            className={`text-sm font-medium ${
              remainingMarks === 0
                ? 'text-green-500'
                : remainingMarks > 0
                ? 'text-yellow-500'
                : 'text-red-500'
            }`}
          >
            {allocatedMarks}/{totalMarks} marks allocated
          </span>
        </div>
      </div>

      {/* Marks Distribution Bar */}
      <div className="h-3 bg-[var(--color-bg-elevated)] rounded-full overflow-hidden flex">
        {sections.map((section, index) => {
          const percentage = totalMarks > 0 ? (section.targetMarks / totalMarks) * 100 : 0;
          const colors = [
            'bg-blue-500',
            'bg-purple-500',
            'bg-green-500',
            'bg-orange-500',
            'bg-pink-500',
          ];
          return (
            <div
              key={section.id}
              className={`${colors[index % colors.length]} transition-all duration-300`}
              style={{ width: `${percentage}%` }}
              title={`${section.name}: ${section.targetMarks} marks`}
            />
          );
        })}
        {remainingMarks > 0 && (
          <div
            className="bg-[var(--color-border)] transition-all duration-300"
            style={{ width: `${(remainingMarks / totalMarks) * 100}%` }}
            title={`Unallocated: ${remainingMarks} marks`}
          />
        )}
      </div>

      {/* Sections List */}
      <div className="space-y-3">
        {sections.map((section, index) => {
          const isExpanded = expandedSection === section.id;
          const isDragging = draggedIndex === index;
          const colors = ['border-blue-500', 'border-purple-500', 'border-green-500', 'border-orange-500', 'border-pink-500'];
          const bgColors = ['bg-blue-500/10', 'bg-purple-500/10', 'bg-green-500/10', 'bg-orange-500/10', 'bg-pink-500/10'];

          return (
            <div
              key={section.id}
              draggable
              onDragStart={() => handleDragStart(index)}
              onDragOver={(e) => handleDragOver(e, index)}
              onDragEnd={handleDragEnd}
              className={`border rounded-lg overflow-hidden transition-all ${
                isDragging ? 'opacity-50 scale-[0.98]' : ''
              } ${colors[index % colors.length]} ${bgColors[index % bgColors.length]}`}
            >
              {/* Section Header */}
              <div
                className="flex items-center gap-3 px-4 py-3 cursor-pointer"
                onClick={() => setExpandedSection(isExpanded ? null : section.id)}
              >
                {/* Drag Handle */}
                <div className="cursor-grab active:cursor-grabbing text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                  </svg>
                </div>

                {/* Expand Icon */}
                <svg
                  className={`w-4 h-4 text-[var(--color-text-muted)] transition-transform ${
                    isExpanded ? 'rotate-90' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>

                {/* Section Name */}
                <div className="flex-1">
                  <span className="font-medium text-[var(--color-text-primary)]">{section.name}</span>
                  <span className="ml-2 text-sm text-[var(--color-text-secondary)]">
                    {section.targetMarks} marks
                  </span>
                </div>

                {/* Question Types Preview */}
                <div className="hidden sm:flex items-center gap-1">
                  {section.questionTypes.slice(0, 3).map((type) => (
                    <span
                      key={type}
                      className="px-2 py-0.5 text-xs rounded bg-[var(--color-bg-primary)] text-[var(--color-text-secondary)]"
                    >
                      {QUESTION_TYPES.find((t) => t.value === type)?.label || type}
                    </span>
                  ))}
                  {section.questionTypes.length > 3 && (
                    <span className="text-xs text-[var(--color-text-muted)]">
                      +{section.questionTypes.length - 3}
                    </span>
                  )}
                </div>

                {/* Remove Button */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeSection(section.id);
                  }}
                  className="p-1 rounded hover:bg-red-500/20 text-[var(--color-text-muted)] hover:text-red-500 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Section Details */}
              {isExpanded && (
                <div className="border-t border-[var(--color-border)] bg-[var(--color-bg-primary)] p-4 space-y-4">
                  {/* Section Name */}
                  <div>
                    <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-1">
                      Section Name
                    </label>
                    <input
                      type="text"
                      value={section.name}
                      onChange={(e) => updateSection(section.id, { name: e.target.value })}
                      className="w-full px-3 py-2 rounded-md border border-[var(--color-border)] bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/50"
                    />
                  </div>

                  {/* Target Marks */}
                  <div>
                    <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-1">
                      Target Marks
                    </label>
                    <div className="flex items-center gap-3">
                      <input
                        type="range"
                        min="0"
                        max={totalMarks}
                        value={section.targetMarks}
                        onChange={(e) =>
                          updateSection(section.id, { targetMarks: parseInt(e.target.value) })
                        }
                        className="flex-1 h-2 bg-[var(--color-border)] rounded-lg appearance-none cursor-pointer accent-[var(--color-accent)]"
                      />
                      <input
                        type="number"
                        min="0"
                        max={totalMarks}
                        value={section.targetMarks}
                        onChange={(e) =>
                          updateSection(section.id, {
                            targetMarks: Math.min(totalMarks, Math.max(0, parseInt(e.target.value) || 0)),
                          })
                        }
                        className="w-20 px-3 py-2 rounded-md border border-[var(--color-border)] bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)] text-center focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/50"
                      />
                    </div>
                  </div>

                  {/* Question Types */}
                  <div>
                    <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">
                      Question Types
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {QUESTION_TYPES.map((type) => {
                        const isSelected = section.questionTypes.includes(type.value);
                        return (
                          <button
                            key={type.value}
                            type="button"
                            onClick={() => toggleQuestionType(section.id, type.value)}
                            className={`px-3 py-2 rounded-md text-sm font-medium transition-all ${
                              isSelected
                                ? 'bg-[var(--color-accent)] text-white'
                                : 'bg-[var(--color-bg-elevated)] text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-tertiary)] border border-[var(--color-border)]'
                            }`}
                          >
                            {type.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Instructions */}
                  <div>
                    <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-1">
                      Instructions
                    </label>
                    <textarea
                      value={section.instructions}
                      onChange={(e) => updateSection(section.id, { instructions: e.target.value })}
                      rows={2}
                      className="w-full px-3 py-2 rounded-md border border-[var(--color-border)] bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/50 resize-none"
                      placeholder="e.g., Answer ALL questions in this section."
                    />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Actions */}
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={addSection}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--color-accent)] text-white font-medium hover:bg-[var(--color-accent-hover)] transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Add Section
        </button>
        {sections.length > 1 && (
          <button
            type="button"
            onClick={autoDistributeMarks}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--color-bg-elevated)] text-[var(--color-text-secondary)] font-medium hover:bg-[var(--color-bg-tertiary)] border border-[var(--color-border)] transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Auto-Distribute Marks
          </button>
        )}
      </div>

      {/* Quick Templates */}
      {sections.length === 0 && (
        <div className="border border-dashed border-[var(--color-border)] rounded-lg p-6 text-center">
          <p className="text-[var(--color-text-secondary)] mb-4">
            No sections yet. Start with a template or add a custom section.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <button
              type="button"
              onClick={() => {
                const templates: PaperSection[] = [
                  {
                    id: generateId(),
                    name: 'Section A',
                    instructions: 'Answer ALL questions. Choose one answer only.',
                    questionTypes: ['multiple-choice'],
                    targetMarks: Math.round(totalMarks * 0.2),
                    order: 0,
                  },
                  {
                    id: generateId(),
                    name: 'Section B',
                    instructions: 'Answer ALL questions in the spaces provided.',
                    questionTypes: ['short-answer', 'calculation', 'explain'],
                    targetMarks: Math.round(totalMarks * 0.5),
                    order: 1,
                  },
                  {
                    id: generateId(),
                    name: 'Section C',
                    instructions: 'Answer ALL questions. Extended writing is required.',
                    questionTypes: ['extended', 'data-analysis'],
                    targetMarks: Math.round(totalMarks * 0.3),
                    order: 2,
                  },
                ];
                onSectionsChange(templates);
                setExpandedSection(templates[0].id);
              }}
              className="px-4 py-2 rounded-lg bg-[var(--color-bg-elevated)] text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-tertiary)] border border-[var(--color-border)] transition-colors"
            >
              3-Section Template (A/B/C)
            </button>
            <button
              type="button"
              onClick={() => {
                const templates: PaperSection[] = [
                  {
                    id: generateId(),
                    name: 'Section A',
                    instructions: 'Answer ALL questions.',
                    questionTypes: ['short-answer', 'calculation'],
                    targetMarks: Math.round(totalMarks * 0.5),
                    order: 0,
                  },
                  {
                    id: generateId(),
                    name: 'Section B',
                    instructions: 'Answer ALL questions. Extended writing may be required.',
                    questionTypes: ['explain', 'extended', 'data-analysis'],
                    targetMarks: Math.round(totalMarks * 0.5),
                    order: 1,
                  },
                ];
                onSectionsChange(templates);
                setExpandedSection(templates[0].id);
              }}
              className="px-4 py-2 rounded-lg bg-[var(--color-bg-elevated)] text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-tertiary)] border border-[var(--color-border)] transition-colors"
            >
              2-Section Template (A/B)
            </button>
            <button
              type="button"
              onClick={() => {
                const template: PaperSection = {
                  id: generateId(),
                  name: 'Questions',
                  instructions: 'Answer ALL questions in the spaces provided.',
                  questionTypes: ['short-answer', 'calculation', 'explain', 'extended'],
                  targetMarks: totalMarks,
                  order: 0,
                };
                onSectionsChange([template]);
                setExpandedSection(template.id);
              }}
              className="px-4 py-2 rounded-lg bg-[var(--color-bg-elevated)] text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-tertiary)] border border-[var(--color-border)] transition-colors"
            >
              Single Section
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
