'use client';

import { useState, useMemo, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import {
  Topic,
  ExamBoard,
  QualificationLevel,
  Subject,
  PaperSection,
  PaperConfig,
  DifficultyDistribution,
  QuestionTypeDistribution,
  PaperSettings,
  PaperTemplatePreset,
} from '@/types';
import { TopicSubtopicSelector } from './TopicSubtopicSelector';
import { SectionBuilder } from './SectionBuilder';

interface PaperBuilderPremiumProps {
  topics: Topic[];
  examBoard: ExamBoard;
  qualification: QualificationLevel;
  subject: Subject;
  templates?: PaperTemplatePreset[];
  onGenerate: (config: PaperConfig) => Promise<string>; // Returns paper ID
  className?: string;
}

type WizardStep = 'template' | 'topics' | 'config' | 'settings' | 'preview';

const STEPS: { id: WizardStep; label: string; description: string }[] = [
  { id: 'template', label: 'Template', description: 'Choose a starting point' },
  { id: 'topics', label: 'Topics', description: 'Select content to include' },
  { id: 'config', label: 'Structure', description: 'Configure sections & marks' },
  { id: 'settings', label: 'Settings', description: 'Paper options' },
  { id: 'preview', label: 'Preview', description: 'Review & generate' },
];

const DEFAULT_DIFFICULTY: DifficultyDistribution = {
  easy: 30,
  medium: 50,
  hard: 20,
};

const DEFAULT_QUESTION_TYPES: QuestionTypeDistribution = {
  calculation: 40,
  explain: 30,
  dataAnalysis: 15,
  extended: 10,
  multipleChoice: 5,
};

const DEFAULT_SETTINGS: PaperSettings = {
  includeFormulaSheet: true,
  includeDataBooklet: false,
  showMarks: true,
  calculatorAllowed: true,
  examConditions: false,
};

export function PaperBuilderPremium({
  topics,
  examBoard,
  qualification,
  subject,
  templates = [],
  onGenerate,
  className = '',
}: PaperBuilderPremiumProps) {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState<WizardStep>('template');
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Paper Configuration State
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [selectedSubtopics, setSelectedSubtopics] = useState<Record<string, string[]>>({});
  const [topicWeights, setTopicWeights] = useState<Record<string, number>>({});
  const [totalMarks, setTotalMarks] = useState(80);
  const [timeLimit, setTimeLimit] = useState<number | null>(90);
  const [sections, setSections] = useState<PaperSection[]>([]);
  const [difficultyDistribution, setDifficultyDistribution] = useState<DifficultyDistribution>(DEFAULT_DIFFICULTY);
  const [questionTypeDistribution, setQuestionTypeDistribution] = useState<QuestionTypeDistribution>(DEFAULT_QUESTION_TYPES);
  const [settings, setSettings] = useState<PaperSettings>(DEFAULT_SETTINGS);
  const [paperName, setPaperName] = useState('');

  // Computed values
  const selectedTopicIds = useMemo(() => {
    return Object.keys(selectedSubtopics).filter((id) => selectedSubtopics[id].length > 0);
  }, [selectedSubtopics]);

  const totalSelectedSubtopics = useMemo(() => {
    return Object.values(selectedSubtopics).reduce((sum, arr) => sum + arr.length, 0);
  }, [selectedSubtopics]);

  const estimatedQuestions = useMemo(() => {
    // Rough estimate: average of 5 marks per question
    return Math.round(totalMarks / 5);
  }, [totalMarks]);

  const currentStepIndex = STEPS.findIndex((s) => s.id === currentStep);

  const canProceed = useMemo(() => {
    switch (currentStep) {
      case 'template':
        return true; // Can always proceed from template (custom or preset)
      case 'topics':
        return totalSelectedSubtopics > 0;
      case 'config':
        return sections.length > 0 && totalMarks > 0;
      case 'settings':
        return true;
      case 'preview':
        return true;
      default:
        return false;
    }
  }, [currentStep, totalSelectedSubtopics, sections, totalMarks]);

  const goToStep = (step: WizardStep) => {
    setError(null);
    setCurrentStep(step);
  };

  const goNext = () => {
    if (currentStepIndex < STEPS.length - 1) {
      goToStep(STEPS[currentStepIndex + 1].id);
    }
  };

  const goBack = () => {
    if (currentStepIndex > 0) {
      goToStep(STEPS[currentStepIndex - 1].id);
    }
  };

  const applyTemplate = useCallback((template: PaperTemplatePreset) => {
    setSelectedTemplate(template.id);
    setTotalMarks(template.totalMarks);
    setTimeLimit(template.duration);
    setSettings((prev) => ({
      ...prev,
      calculatorAllowed: template.calculator,
      includeFormulaSheet: template.formulaSheet,
    }));

    // Set sections from template
    const templateSections: PaperSection[] = template.sections.map((s, i) => ({
      ...s,
      id: `section-${Date.now()}-${i}`,
    }));
    setSections(templateSections);

    // Select all subtopics for the template's topics (if specified)
    if (template.topicIds && template.topicIds.length > 0) {
      const newSelection: Record<string, string[]> = {};
      template.topicIds.forEach((topicId) => {
        const topic = topics.find((t) => t.id === topicId);
        if (topic) {
          newSelection[topicId] = [...topic.subtopics];
        }
      });
      setSelectedSubtopics(newSelection);
    }

    // Auto-generate paper name
    const examBoardName = examBoard.toUpperCase();
    const levelName = qualification === 'gcse' ? 'GCSE' : 'A-Level';
    setPaperName(`${examBoardName} ${levelName} ${template.name}`);

    goNext();
  }, [topics, examBoard, qualification]);

  const startCustom = () => {
    setSelectedTemplate(null);
    // Auto-generate paper name
    const examBoardName = examBoard.toUpperCase();
    const levelName = qualification === 'gcse' ? 'GCSE' : 'A-Level';
    setPaperName(`${examBoardName} ${levelName} Practice Paper`);
    goNext();
  };

  const handleGenerate = async () => {
    if (isGenerating) return;

    setIsGenerating(true);
    setError(null);

    const config: PaperConfig = {
      totalMarks,
      timeLimit,
      sections,
      selectedTopics: selectedTopicIds,
      selectedSubtopics,
      topicWeights: Object.keys(topicWeights).length > 0 ? topicWeights : undefined,
      difficultyDistribution,
      questionTypeDistribution,
      settings,
    };

    try {
      const paperId = await onGenerate(config);
      router.push(`/paper/take/${paperId}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to generate paper');
      setIsGenerating(false);
    }
  };

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Progress Steps */}
      <div className="flex items-center justify-between overflow-x-auto pb-2">
        {STEPS.map((step, index) => {
          const isActive = step.id === currentStep;
          const isCompleted = index < currentStepIndex;
          const isClickable = index <= currentStepIndex || (index === currentStepIndex + 1 && canProceed);

          return (
            <div key={step.id} className="flex items-center">
              <button
                type="button"
                onClick={() => isClickable && goToStep(step.id)}
                disabled={!isClickable}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${
                  isActive
                    ? 'bg-[var(--color-accent)] text-white'
                    : isCompleted
                    ? 'bg-green-500/20 text-green-400 hover:bg-green-500/30'
                    : isClickable
                    ? 'bg-[var(--color-bg-elevated)] text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-tertiary)]'
                    : 'bg-[var(--color-bg-elevated)] text-[var(--color-text-muted)] cursor-not-allowed opacity-50'
                }`}
              >
                <span
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold ${
                    isCompleted ? 'bg-green-500 text-white' : 'bg-current/20'
                  }`}
                >
                  {isCompleted ? (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    index + 1
                  )}
                </span>
                <span className="hidden sm:inline font-medium">{step.label}</span>
              </button>
              {index < STEPS.length - 1 && (
                <div
                  className={`w-8 h-0.5 mx-1 ${
                    isCompleted ? 'bg-green-500' : 'bg-[var(--color-border)]'
                  }`}
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Step Content */}
      <div className="min-h-[400px]">
        {/* Step 1: Template Selection */}
        {currentStep === 'template' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold text-[var(--color-text-primary)]">Choose a Starting Point</h2>
              <p className="text-[var(--color-text-secondary)]">
                Select a pre-configured template or start from scratch
              </p>
            </div>

            {/* Quick Start Templates */}
            {templates.length > 0 && (
              <div className="space-y-3">
                <h3 className="text-sm font-medium text-[var(--color-text-secondary)] uppercase tracking-wide">
                  Quick Start Templates
                </h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  {templates.map((template) => (
                    <button
                      key={template.id}
                      type="button"
                      onClick={() => applyTemplate(template)}
                      className="text-left p-4 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-secondary)] hover:border-[var(--color-accent)] hover:bg-[var(--color-bg-tertiary)] transition-all group"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-medium text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)]">
                            {template.name}
                          </h4>
                          <p className="text-sm text-[var(--color-text-secondary)] mt-1">
                            {template.description}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium text-[var(--color-text-primary)]">
                            {template.totalMarks} marks
                          </div>
                          <div className="text-xs text-[var(--color-text-muted)]">
                            {template.duration} min
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 mt-3 text-xs text-[var(--color-text-muted)]">
                        {template.calculator && <span>Calculator</span>}
                        {template.formulaSheet && <span>Formula Sheet</span>}
                        <span>{template.sections.length} sections</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Custom Option */}
            <div className="border-t border-[var(--color-border)] pt-6">
              <button
                type="button"
                onClick={startCustom}
                className="w-full p-6 rounded-lg border-2 border-dashed border-[var(--color-border)] hover:border-[var(--color-accent)] hover:bg-[var(--color-bg-secondary)] transition-all text-center group"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[var(--color-bg-elevated)] flex items-center justify-center group-hover:bg-[var(--color-accent)]/20">
                  <svg
                    className="w-6 h-6 text-[var(--color-text-muted)] group-hover:text-[var(--color-accent)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
                <h4 className="font-medium text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)]">
                  Create Custom Paper
                </h4>
                <p className="text-sm text-[var(--color-text-secondary)] mt-1">
                  Full control over topics, marks, and structure
                </p>
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Topic Selection */}
        {currentStep === 'topics' && (
          <div className="space-y-4">
            <div>
              <h2 className="text-xl font-bold text-[var(--color-text-primary)]">Select Topics & Subtopics</h2>
              <p className="text-[var(--color-text-secondary)]">
                Choose the content you want to include in your paper
              </p>
            </div>

            <TopicSubtopicSelector
              topics={topics}
              selectedSubtopics={selectedSubtopics}
              onSelectionChange={setSelectedSubtopics}
              topicWeights={topicWeights}
              onWeightChange={setTopicWeights}
              showWeights={true}
            />
          </div>
        )}

        {/* Step 3: Configuration */}
        {currentStep === 'config' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold text-[var(--color-text-primary)]">Configure Your Paper</h2>
              <p className="text-[var(--color-text-secondary)]">
                Set the total marks, time limit, and section structure
              </p>
            </div>

            {/* Basic Settings */}
            <div className="grid gap-6 sm:grid-cols-2">
              {/* Total Marks */}
              <div>
                <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">
                  Total Marks
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min="20"
                    max="150"
                    step="5"
                    value={totalMarks}
                    onChange={(e) => setTotalMarks(parseInt(e.target.value))}
                    className="flex-1 h-2 bg-[var(--color-border)] rounded-lg appearance-none cursor-pointer accent-[var(--color-accent)]"
                  />
                  <input
                    type="number"
                    min="20"
                    max="150"
                    value={totalMarks}
                    onChange={(e) => setTotalMarks(Math.min(150, Math.max(20, parseInt(e.target.value) || 20)))}
                    className="w-20 px-3 py-2 rounded-md border border-[var(--color-border)] bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)] text-center focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/50"
                  />
                </div>
                <div className="flex justify-between mt-2 text-xs text-[var(--color-text-muted)]">
                  <span>Short (20)</span>
                  <span>Standard (80)</span>
                  <span>Full (150)</span>
                </div>
              </div>

              {/* Time Limit */}
              <div>
                <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">
                  Time Limit (minutes)
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min="0"
                    max="180"
                    step="15"
                    value={timeLimit || 0}
                    onChange={(e) => {
                      const val = parseInt(e.target.value);
                      setTimeLimit(val === 0 ? null : val);
                    }}
                    className="flex-1 h-2 bg-[var(--color-border)] rounded-lg appearance-none cursor-pointer accent-[var(--color-accent)]"
                  />
                  <input
                    type="number"
                    min="0"
                    max="180"
                    value={timeLimit || 0}
                    onChange={(e) => {
                      const val = parseInt(e.target.value) || 0;
                      setTimeLimit(val === 0 ? null : Math.min(180, val));
                    }}
                    className="w-20 px-3 py-2 rounded-md border border-[var(--color-border)] bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)] text-center focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/50"
                  />
                </div>
                <p className="mt-2 text-xs text-[var(--color-text-muted)]">
                  {timeLimit === null ? 'Untimed practice' : `Approximately ${Math.round(totalMarks / timeLimit * 60)} marks per hour`}
                </p>
              </div>
            </div>

            {/* Difficulty Distribution */}
            <div>
              <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-3">
                Difficulty Distribution
              </label>
              <div className="grid gap-4 sm:grid-cols-3">
                {(['easy', 'medium', 'hard'] as const).map((level) => {
                  const labels = { easy: 'Foundation', medium: 'Standard', hard: 'Challenging' };
                  const colors = { easy: 'bg-green-500', medium: 'bg-yellow-500', hard: 'bg-red-500' };
                  return (
                    <div key={level}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm text-[var(--color-text-primary)]">{labels[level]}</span>
                        <span className="text-sm font-medium text-[var(--color-text-primary)]">
                          {difficultyDistribution[level]}%
                        </span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={difficultyDistribution[level]}
                        onChange={(e) => {
                          const value = parseInt(e.target.value);
                          setDifficultyDistribution((prev) => ({
                            ...prev,
                            [level]: value,
                          }));
                        }}
                        className={`w-full h-2 rounded-lg appearance-none cursor-pointer accent-[var(--color-accent)]`}
                        style={{
                          background: `linear-gradient(to right, var(--color-accent) 0%, var(--color-accent) ${difficultyDistribution[level]}%, var(--color-border) ${difficultyDistribution[level]}%, var(--color-border) 100%)`,
                        }}
                      />
                    </div>
                  );
                })}
              </div>
              {(difficultyDistribution.easy + difficultyDistribution.medium + difficultyDistribution.hard) !== 100 && (
                <p className="mt-2 text-xs text-yellow-500">
                  Total: {difficultyDistribution.easy + difficultyDistribution.medium + difficultyDistribution.hard}% (should equal 100%)
                </p>
              )}
            </div>

            {/* Section Builder */}
            <SectionBuilder
              sections={sections}
              onSectionsChange={setSections}
              totalMarks={totalMarks}
            />
          </div>
        )}

        {/* Step 4: Settings */}
        {currentStep === 'settings' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold text-[var(--color-text-primary)]">Paper Settings</h2>
              <p className="text-[var(--color-text-secondary)]">
                Configure additional options for your paper
              </p>
            </div>

            {/* Paper Name */}
            <div>
              <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">
                Paper Name
              </label>
              <input
                type="text"
                value={paperName}
                onChange={(e) => setPaperName(e.target.value)}
                placeholder="e.g., AQA GCSE Physics Practice Paper 1"
                className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/50"
              />
            </div>

            {/* Toggle Settings */}
            <div className="space-y-4">
              {[
                {
                  key: 'showMarks',
                  label: 'Show Mark Allocation',
                  description: 'Display marks next to each question',
                },
                {
                  key: 'calculatorAllowed',
                  label: 'Calculator Allowed',
                  description: 'Students can use a calculator',
                },
                {
                  key: 'includeFormulaSheet',
                  label: 'Include Formula Sheet',
                  description: 'Provide relevant formulas',
                },
                {
                  key: 'includeDataBooklet',
                  label: 'Include Data Booklet',
                  description: 'Provide reference data (e.g., periodic table)',
                },
                {
                  key: 'examConditions',
                  label: 'Exam Conditions Mode',
                  description: 'Hide solutions until paper is submitted',
                },
              ].map((setting) => (
                <label
                  key={setting.key}
                  className="flex items-center justify-between p-4 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-secondary)] cursor-pointer hover:bg-[var(--color-bg-tertiary)] transition-colors"
                >
                  <div>
                    <span className="font-medium text-[var(--color-text-primary)]">{setting.label}</span>
                    <p className="text-sm text-[var(--color-text-secondary)]">{setting.description}</p>
                  </div>
                  <div
                    className={`relative w-12 h-6 rounded-full transition-colors ${
                      settings[setting.key as keyof PaperSettings]
                        ? 'bg-[var(--color-accent)]'
                        : 'bg-[var(--color-border)]'
                    }`}
                    onClick={() =>
                      setSettings((prev) => ({
                        ...prev,
                        [setting.key]: !prev[setting.key as keyof PaperSettings],
                      }))
                    }
                  >
                    <div
                      className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${
                        settings[setting.key as keyof PaperSettings] ? 'translate-x-7' : 'translate-x-1'
                      }`}
                    />
                  </div>
                </label>
              ))}
            </div>
          </div>
        )}

        {/* Step 5: Preview */}
        {currentStep === 'preview' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold text-[var(--color-text-primary)]">Review Your Paper</h2>
              <p className="text-[var(--color-text-secondary)]">
                Check your configuration before generating
              </p>
            </div>

            {/* Summary Card */}
            <div className="p-6 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-secondary)] space-y-4">
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-bold text-[var(--color-text-primary)]">{paperName || 'Practice Paper'}</h3>
                <div className="text-right">
                  <div className="text-2xl font-bold text-[var(--color-accent)]">{totalMarks}</div>
                  <div className="text-sm text-[var(--color-text-muted)]">marks</div>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <div>
                  <div className="text-sm text-[var(--color-text-muted)]">Time</div>
                  <div className="font-medium text-[var(--color-text-primary)]">
                    {timeLimit ? `${timeLimit} minutes` : 'Untimed'}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-[var(--color-text-muted)]">Topics</div>
                  <div className="font-medium text-[var(--color-text-primary)]">
                    {selectedTopicIds.length} topics, {totalSelectedSubtopics} subtopics
                  </div>
                </div>
                <div>
                  <div className="text-sm text-[var(--color-text-muted)]">Est. Questions</div>
                  <div className="font-medium text-[var(--color-text-primary)]">
                    ~{estimatedQuestions} questions
                  </div>
                </div>
              </div>

              {/* Sections Preview */}
              <div>
                <div className="text-sm text-[var(--color-text-muted)] mb-2">Sections</div>
                <div className="space-y-2">
                  {sections.map((section) => (
                    <div
                      key={section.id}
                      className="flex items-center justify-between py-2 border-b border-[var(--color-border)] last:border-0"
                    >
                      <span className="font-medium text-[var(--color-text-primary)]">{section.name}</span>
                      <span className="text-[var(--color-text-secondary)]">{section.targetMarks} marks</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Difficulty Distribution */}
              <div>
                <div className="text-sm text-[var(--color-text-muted)] mb-2">Difficulty</div>
                <div className="h-3 bg-[var(--color-bg-elevated)] rounded-full overflow-hidden flex">
                  <div
                    className="bg-green-500"
                    style={{ width: `${difficultyDistribution.easy}%` }}
                    title={`Easy: ${difficultyDistribution.easy}%`}
                  />
                  <div
                    className="bg-yellow-500"
                    style={{ width: `${difficultyDistribution.medium}%` }}
                    title={`Medium: ${difficultyDistribution.medium}%`}
                  />
                  <div
                    className="bg-red-500"
                    style={{ width: `${difficultyDistribution.hard}%` }}
                    title={`Hard: ${difficultyDistribution.hard}%`}
                  />
                </div>
                <div className="flex justify-between text-xs text-[var(--color-text-muted)] mt-1">
                  <span>Foundation {difficultyDistribution.easy}%</span>
                  <span>Standard {difficultyDistribution.medium}%</span>
                  <span>Challenging {difficultyDistribution.hard}%</span>
                </div>
              </div>

              {/* Settings Summary */}
              <div className="flex flex-wrap gap-2">
                {settings.showMarks && (
                  <span className="px-2 py-1 text-xs rounded-full bg-[var(--color-bg-elevated)] text-[var(--color-text-secondary)]">
                    Marks shown
                  </span>
                )}
                {settings.calculatorAllowed && (
                  <span className="px-2 py-1 text-xs rounded-full bg-[var(--color-bg-elevated)] text-[var(--color-text-secondary)]">
                    Calculator allowed
                  </span>
                )}
                {settings.includeFormulaSheet && (
                  <span className="px-2 py-1 text-xs rounded-full bg-[var(--color-bg-elevated)] text-[var(--color-text-secondary)]">
                    Formula sheet
                  </span>
                )}
                {settings.examConditions && (
                  <span className="px-2 py-1 text-xs rounded-full bg-orange-500/20 text-orange-400">
                    Exam conditions
                  </span>
                )}
              </div>
            </div>

            {/* Error Display */}
            {error && (
              <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400">
                {error}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border)]">
        <button
          type="button"
          onClick={goBack}
          disabled={currentStepIndex === 0}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            currentStepIndex === 0
              ? 'text-[var(--color-text-muted)] cursor-not-allowed'
              : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-elevated)]'
          }`}
        >
          Back
        </button>

        {currentStep === 'preview' ? (
          <button
            type="button"
            onClick={handleGenerate}
            disabled={isGenerating || !canProceed}
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--color-accent)] text-white font-medium hover:bg-[var(--color-accent-hover)] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isGenerating ? (
              <>
                <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Generating...
              </>
            ) : (
              <>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                Generate Paper
              </>
            )}
          </button>
        ) : (
          <button
            type="button"
            onClick={goNext}
            disabled={!canProceed}
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--color-accent)] text-white font-medium hover:bg-[var(--color-accent-hover)] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Continue
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
