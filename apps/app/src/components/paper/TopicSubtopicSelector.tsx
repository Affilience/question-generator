'use client';

import { useState, useMemo } from 'react';
import { Topic } from '@/types';

interface TopicSubtopicSelectorProps {
  topics: Topic[];
  selectedSubtopics: Record<string, string[]>; // topicId -> subtopic names[]
  onSelectionChange: (selection: Record<string, string[]>) => void;
  topicWeights?: Record<string, number>; // Optional weighting per topic
  onWeightChange?: (weights: Record<string, number>) => void;
  showWeights?: boolean;
  className?: string;
}

export function TopicSubtopicSelector({
  topics,
  selectedSubtopics,
  onSelectionChange,
  topicWeights,
  onWeightChange,
  showWeights = false,
  className = '',
}: TopicSubtopicSelectorProps) {
  const [expandedTopics, setExpandedTopics] = useState<Set<string>>(new Set());
  const [searchQuery, setSearchQuery] = useState('');

  // Filter topics and subtopics based on search query
  const filteredTopics = useMemo(() => {
    if (!searchQuery.trim()) return topics;

    const query = searchQuery.toLowerCase();
    return topics
      .map((topic) => {
        const topicMatches = topic.name.toLowerCase().includes(query);
        const matchingSubtopics = topic.subtopics.filter((sub) =>
          sub.toLowerCase().includes(query)
        );

        if (topicMatches || matchingSubtopics.length > 0) {
          return {
            ...topic,
            subtopics: topicMatches ? topic.subtopics : matchingSubtopics,
          };
        }
        return null;
      })
      .filter(Boolean) as Topic[];
  }, [topics, searchQuery]);

  // Calculate selection statistics
  const stats = useMemo(() => {
    let totalSubtopics = 0;
    let selectedCount = 0;
    let selectedTopicsCount = 0;

    topics.forEach((topic) => {
      totalSubtopics += topic.subtopics.length;
      const selectedForTopic = selectedSubtopics[topic.id]?.length || 0;
      selectedCount += selectedForTopic;
      if (selectedForTopic > 0) selectedTopicsCount++;
    });

    return { totalSubtopics, selectedCount, selectedTopicsCount };
  }, [topics, selectedSubtopics]);

  const toggleTopicExpansion = (topicId: string) => {
    setExpandedTopics((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(topicId)) {
        newSet.delete(topicId);
      } else {
        newSet.add(topicId);
      }
      return newSet;
    });
  };

  const toggleSubtopic = (topicId: string, subtopic: string) => {
    const currentSelection = selectedSubtopics[topicId] || [];
    const isSelected = currentSelection.includes(subtopic);

    const newSelection = isSelected
      ? currentSelection.filter((s) => s !== subtopic)
      : [...currentSelection, subtopic];

    onSelectionChange({
      ...selectedSubtopics,
      [topicId]: newSelection,
    });
  };

  const selectAllForTopic = (topic: Topic) => {
    onSelectionChange({
      ...selectedSubtopics,
      [topic.id]: [...topic.subtopics],
    });
  };

  const deselectAllForTopic = (topicId: string) => {
    onSelectionChange({
      ...selectedSubtopics,
      [topicId]: [],
    });
  };

  const toggleAllForTopic = (topic: Topic) => {
    const currentSelection = selectedSubtopics[topic.id] || [];
    const allSelected = currentSelection.length === topic.subtopics.length;

    if (allSelected) {
      deselectAllForTopic(topic.id);
    } else {
      selectAllForTopic(topic);
    }
  };

  const selectAll = () => {
    const allSelected: Record<string, string[]> = {};
    topics.forEach((topic) => {
      allSelected[topic.id] = [...topic.subtopics];
    });
    onSelectionChange(allSelected);
  };

  const deselectAll = () => {
    onSelectionChange({});
  };

  const expandAll = () => {
    setExpandedTopics(new Set(topics.map((t) => t.id)));
  };

  const collapseAll = () => {
    setExpandedTopics(new Set());
  };

  const handleWeightChange = (topicId: string, weight: number) => {
    if (onWeightChange && topicWeights) {
      onWeightChange({
        ...topicWeights,
        [topicId]: weight,
      });
    }
  };

  const getTopicSelectionStatus = (topic: Topic) => {
    const selected = selectedSubtopics[topic.id]?.length || 0;
    const total = topic.subtopics.length;

    if (selected === 0) return 'none';
    if (selected === total) return 'all';
    return 'partial';
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Header with stats and controls */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm text-[var(--color-text-secondary)]">
          <span className="font-medium text-[var(--color-text-primary)]">
            {stats.selectedCount}
          </span>{' '}
          subtopics selected from{' '}
          <span className="font-medium text-[var(--color-text-primary)]">
            {stats.selectedTopicsCount}
          </span>{' '}
          topics
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={selectAll}
            className="px-2 py-1 text-xs font-medium rounded-md bg-[var(--color-bg-elevated)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-tertiary)] transition-colors"
          >
            Select All
          </button>
          <button
            type="button"
            onClick={deselectAll}
            className="px-2 py-1 text-xs font-medium rounded-md bg-[var(--color-bg-elevated)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-tertiary)] transition-colors"
          >
            Clear All
          </button>
          <button
            type="button"
            onClick={expandAll}
            className="px-2 py-1 text-xs font-medium rounded-md bg-[var(--color-bg-elevated)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-tertiary)] transition-colors"
          >
            Expand All
          </button>
          <button
            type="button"
            onClick={collapseAll}
            className="px-2 py-1 text-xs font-medium rounded-md bg-[var(--color-bg-elevated)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-tertiary)] transition-colors"
          >
            Collapse All
          </button>
        </div>
      </div>

      {/* Search */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search topics and subtopics..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-2 pl-10 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/50 focus:border-[var(--color-accent)]"
        />
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-text-muted)]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        {searchQuery && (
          <button
            type="button"
            onClick={() => setSearchQuery('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* Topics Accordion */}
      <div className="space-y-2 max-h-[500px] overflow-y-auto pr-2">
        {filteredTopics.length === 0 ? (
          <div className="text-center py-8 text-[var(--color-text-muted)]">
            No topics or subtopics match your search.
          </div>
        ) : (
          filteredTopics.map((topic) => {
            const isExpanded = expandedTopics.has(topic.id);
            const selectionStatus = getTopicSelectionStatus(topic);
            const selectedCount = selectedSubtopics[topic.id]?.length || 0;
            const weight = topicWeights?.[topic.id] ?? 1;

            return (
              <div
                key={topic.id}
                className="border border-[var(--color-border)] rounded-lg overflow-hidden bg-[var(--color-bg-secondary)]"
              >
                {/* Topic Header */}
                <div
                  className="flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-[var(--color-bg-tertiary)] transition-colors"
                  onClick={() => toggleTopicExpansion(topic.id)}
                >
                  {/* Expand/Collapse Icon */}
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

                  {/* Topic Checkbox */}
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleAllForTopic(topic);
                    }}
                    className="flex items-center justify-center"
                  >
                    <div
                      className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors cursor-pointer ${
                        selectionStatus === 'all'
                          ? 'bg-[var(--color-accent)] border-[var(--color-accent)]'
                          : selectionStatus === 'partial'
                          ? 'bg-[var(--color-accent)]/50 border-[var(--color-accent)]'
                          : 'border-[var(--color-border)] hover:border-[var(--color-accent)]'
                      }`}
                    >
                      {selectionStatus === 'all' && (
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                      {selectionStatus === 'partial' && (
                        <div className="w-2 h-0.5 bg-white rounded" />
                      )}
                    </div>
                  </div>

                  {/* Topic Icon */}
                  <span className="text-lg">{topic.icon}</span>

                  {/* Topic Name */}
                  <div className="flex-1">
                    <span className="font-medium text-[var(--color-text-primary)]">{topic.name}</span>
                    <span className="ml-2 text-xs text-[var(--color-text-muted)]">
                      ({selectedCount}/{topic.subtopics.length})
                    </span>
                  </div>

                  {/* Quick Actions */}
                  <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                    <button
                      type="button"
                      onClick={() => selectAllForTopic(topic)}
                      className="px-2 py-0.5 text-xs rounded bg-[var(--color-bg-elevated)] text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
                    >
                      All
                    </button>
                    <button
                      type="button"
                      onClick={() => deselectAllForTopic(topic.id)}
                      className="px-2 py-0.5 text-xs rounded bg-[var(--color-bg-elevated)] text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
                    >
                      None
                    </button>
                  </div>
                </div>

                {/* Subtopics List */}
                {isExpanded && (
                  <div className="border-t border-[var(--color-border)] bg-[var(--color-bg-primary)]">
                    {/* Weight Slider (optional) */}
                    {showWeights && onWeightChange && (
                      <div className="px-4 py-3 border-b border-[var(--color-border)] bg-[var(--color-bg-elevated)]">
                        <div className="flex items-center gap-3">
                          <span className="text-xs text-[var(--color-text-secondary)] min-w-[60px]">
                            Weight:
                          </span>
                          <input
                            type="range"
                            min="0.5"
                            max="3"
                            step="0.5"
                            value={weight}
                            onChange={(e) => handleWeightChange(topic.id, parseFloat(e.target.value))}
                            className="flex-1 h-1 bg-[var(--color-border)] rounded-lg appearance-none cursor-pointer accent-[var(--color-accent)]"
                          />
                          <span className="text-xs font-medium text-[var(--color-text-primary)] min-w-[40px] text-right">
                            {weight}x
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Subtopics */}
                    <div className="p-3 grid gap-1 max-h-[300px] overflow-y-auto">
                      {topic.subtopics.map((subtopic, index) => {
                        const isSelected = selectedSubtopics[topic.id]?.includes(subtopic) || false;

                        return (
                          <label
                            key={`${topic.id}-${index}`}
                            className="flex items-start gap-3 px-2 py-1.5 rounded cursor-pointer hover:bg-[var(--color-bg-secondary)] transition-colors group"
                          >
                            <div
                              className={`mt-0.5 w-4 h-4 rounded border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                                isSelected
                                  ? 'bg-[var(--color-accent)] border-[var(--color-accent)]'
                                  : 'border-[var(--color-border)] group-hover:border-[var(--color-accent)]'
                              }`}
                            >
                              {isSelected && (
                                <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                              )}
                            </div>
                            <input
                              type="checkbox"
                              checked={isSelected}
                              onChange={() => toggleSubtopic(topic.id, subtopic)}
                              className="sr-only"
                            />
                            <span className={`text-sm ${isSelected ? 'text-[var(--color-text-primary)]' : 'text-[var(--color-text-secondary)]'}`}>
                              {subtopic}
                            </span>
                          </label>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

// Compact version for smaller spaces
export function TopicSubtopicSelectorCompact({
  topics,
  selectedSubtopics,
  onSelectionChange,
  className = '',
}: Omit<TopicSubtopicSelectorProps, 'showWeights' | 'topicWeights' | 'onWeightChange'>) {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter topics based on search
  const filteredTopics = useMemo(() => {
    if (!searchQuery.trim()) return topics;
    const query = searchQuery.toLowerCase();
    return topics.filter(
      (topic) =>
        topic.name.toLowerCase().includes(query) ||
        topic.subtopics.some((sub) => sub.toLowerCase().includes(query))
    );
  }, [topics, searchQuery]);

  const toggleTopic = (topic: Topic) => {
    const currentSelection = selectedSubtopics[topic.id] || [];
    const allSelected = currentSelection.length === topic.subtopics.length;

    onSelectionChange({
      ...selectedSubtopics,
      [topic.id]: allSelected ? [] : [...topic.subtopics],
    });
  };

  return (
    <div className={`space-y-3 ${className}`}>
      {/* Search */}
      <input
        type="text"
        placeholder="Search topics..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full px-3 py-2 text-sm rounded-md border border-[var(--color-border)] bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/50"
      />

      {/* Topic Chips */}
      <div className="flex flex-wrap gap-2">
        {filteredTopics.map((topic) => {
          const selectedCount = selectedSubtopics[topic.id]?.length || 0;
          const isPartiallySelected = selectedCount > 0 && selectedCount < topic.subtopics.length;
          const isFullySelected = selectedCount === topic.subtopics.length;

          return (
            <button
              key={topic.id}
              type="button"
              onClick={() => toggleTopic(topic)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                isFullySelected
                  ? 'bg-[var(--color-accent)] text-white'
                  : isPartiallySelected
                  ? 'bg-[var(--color-accent)]/30 text-[var(--color-accent)] border border-[var(--color-accent)]'
                  : 'bg-[var(--color-bg-elevated)] text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-tertiary)] border border-[var(--color-border)]'
              }`}
            >
              <span>{topic.icon}</span>
              <span>{topic.name}</span>
              {selectedCount > 0 && (
                <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                  isFullySelected
                    ? 'bg-white/20'
                    : 'bg-[var(--color-accent)]/20'
                }`}>
                  {selectedCount}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
