import {
  PaperConfig,
  PaperSection,
  QuestionType,
  Difficulty,
  DifficultyDistribution,
  QuestionTypeDistribution,
} from '@/types';

/**
 * Represents a planned question to be generated
 */
export interface QuestionPlan {
  id: string;
  sectionId: string;
  topicId: string;
  subtopic: string;
  marks: number;
  difficulty: Difficulty;
  questionType: QuestionType;
  order: number;
}

/**
 * Result of the question selection process
 */
export interface SelectionResult {
  sections: {
    sectionId: string;
    sectionName: string;
    questions: QuestionPlan[];
    totalMarks: number;
  }[];
  totalMarks: number;
  totalQuestions: number;
}

/**
 * Internal structure for tracking allocations
 */
interface SubtopicAllocation {
  topicId: string;
  subtopic: string;
  allocatedMarks: number;
  weight: number;
}

/**
 * Mark values for different question types
 */
const QUESTION_TYPE_MARKS: Record<QuestionType, number[]> = {
  'multiple-choice': [1],
  'short-answer': [1, 2, 3],
  'calculation': [2, 3, 4, 5],
  'explain': [2, 3, 4],
  'extended': [6, 8, 9, 12],
  'data-analysis': [4, 5, 6],
  'graph': [2, 3, 4],
  'compare': [3, 4, 5, 6],
  'proof': [4, 5, 6, 8],
  'show-that': [3, 4, 5, 6],
};

/**
 * Question type to difficulty compatibility
 * Some question types naturally suit certain difficulties
 */
const QUESTION_TYPE_DIFFICULTY_WEIGHTS: Record<QuestionType, Record<Difficulty, number>> = {
  'multiple-choice': { easy: 0.6, medium: 0.3, hard: 0.1 },
  'short-answer': { easy: 0.4, medium: 0.4, hard: 0.2 },
  'calculation': { easy: 0.3, medium: 0.4, hard: 0.3 },
  'explain': { easy: 0.3, medium: 0.5, hard: 0.2 },
  'extended': { easy: 0.1, medium: 0.4, hard: 0.5 },
  'data-analysis': { easy: 0.2, medium: 0.5, hard: 0.3 },
  'graph': { easy: 0.4, medium: 0.4, hard: 0.2 },
  'compare': { easy: 0.2, medium: 0.5, hard: 0.3 },
  'proof': { easy: 0.1, medium: 0.3, hard: 0.6 },
  'show-that': { easy: 0.2, medium: 0.4, hard: 0.4 },
};

/**
 * The QuestionSelector class handles intelligent distribution of questions
 * across a paper based on configuration parameters
 */
export class QuestionSelector {
  private config: PaperConfig;
  private random: () => number;

  constructor(config: PaperConfig, seed?: number) {
    this.config = config;
    // Use seeded random for reproducibility in tests, or Math.random in production
    this.random = seed !== undefined ? this.seededRandom(seed) : Math.random.bind(Math);
  }

  /**
   * Simple seeded random number generator for reproducibility
   */
  private seededRandom(seed: number): () => number {
    return () => {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    };
  }

  /**
   * Main entry point: select questions for the entire paper
   */
  selectQuestions(): SelectionResult {
    const { sections, totalMarks, selectedSubtopics, topicWeights, difficultyDistribution } = this.config;

    // Step 1: Calculate marks per section
    const sectionMarks = this.calculateSectionMarks(sections, totalMarks);

    // Step 2: Allocate marks to subtopics based on weights
    const subtopicAllocations = this.allocateToSubtopics(
      selectedSubtopics,
      topicWeights || {},
      totalMarks
    );

    // Step 3: Generate question plans for each section
    const sectionResults = sections.map((section) => {
      const marks = sectionMarks[section.id];
      const questions = this.planQuestionsForSection(
        section,
        marks,
        subtopicAllocations,
        difficultyDistribution
      );

      return {
        sectionId: section.id,
        sectionName: section.name,
        questions,
        totalMarks: questions.reduce((sum, q) => sum + q.marks, 0),
      };
    });

    return {
      sections: sectionResults,
      totalMarks: sectionResults.reduce((sum, s) => sum + s.totalMarks, 0),
      totalQuestions: sectionResults.reduce((sum, s) => sum + s.questions.length, 0),
    };
  }

  /**
   * Calculate how many marks each section should have
   */
  private calculateSectionMarks(sections: PaperSection[], totalMarks: number): Record<string, number> {
    const result: Record<string, number> = {};
    const totalTargetMarks = sections.reduce((sum, s) => sum + s.targetMarks, 0);

    if (totalTargetMarks === 0) {
      // Equal distribution if no targets specified
      const perSection = Math.floor(totalMarks / sections.length);
      sections.forEach((s, i) => {
        result[s.id] = perSection + (i < totalMarks % sections.length ? 1 : 0);
      });
    } else {
      // Proportional distribution based on targets
      sections.forEach((s) => {
        result[s.id] = Math.round((s.targetMarks / totalTargetMarks) * totalMarks);
      });

      // Adjust for rounding errors
      const allocated = Object.values(result).reduce((sum, v) => sum + v, 0);
      const diff = totalMarks - allocated;
      if (diff !== 0 && sections.length > 0) {
        result[sections[0].id] += diff;
      }
    }

    return result;
  }

  /**
   * Allocate marks to subtopics based on weights
   */
  private allocateToSubtopics(
    selectedSubtopics: Record<string, string[]>,
    topicWeights: Record<string, number>,
    totalMarks: number
  ): SubtopicAllocation[] {
    const allocations: SubtopicAllocation[] = [];

    // Build flat list of all subtopics with weights
    Object.entries(selectedSubtopics).forEach(([topicId, subtopics]) => {
      const topicWeight = topicWeights[topicId] || 1;
      subtopics.forEach((subtopic) => {
        allocations.push({
          topicId,
          subtopic,
          allocatedMarks: 0,
          weight: topicWeight,
        });
      });
    });

    if (allocations.length === 0) return [];

    // Calculate total weight
    const totalWeight = allocations.reduce((sum, a) => sum + a.weight, 0);

    // Distribute marks proportionally
    allocations.forEach((allocation) => {
      allocation.allocatedMarks = Math.round((allocation.weight / totalWeight) * totalMarks);
    });

    // Adjust for rounding
    const allocated = allocations.reduce((sum, a) => sum + a.allocatedMarks, 0);
    const diff = totalMarks - allocated;
    if (diff !== 0 && allocations.length > 0) {
      allocations[0].allocatedMarks += diff;
    }

    return allocations;
  }

  /**
   * Plan questions for a single section
   */
  private planQuestionsForSection(
    section: PaperSection,
    targetMarks: number,
    subtopicAllocations: SubtopicAllocation[],
    difficultyDistribution: DifficultyDistribution
  ): QuestionPlan[] {
    const questions: QuestionPlan[] = [];
    let remainingMarks = targetMarks;
    let questionOrder = 0;

    // Clone allocations for this section's use
    const availableAllocations = subtopicAllocations.map((a) => ({ ...a }));

    // Calculate target marks per difficulty
    const difficultyTargets: Record<Difficulty, number> = {
      easy: Math.round((difficultyDistribution.easy / 100) * targetMarks),
      medium: Math.round((difficultyDistribution.medium / 100) * targetMarks),
      hard: Math.round((difficultyDistribution.hard / 100) * targetMarks),
    };

    const difficultyUsed: Record<Difficulty, number> = { easy: 0, medium: 0, hard: 0 };

    // Generate questions until we hit target marks
    const maxIterations = 100; // Safety limit
    let iterations = 0;

    while (remainingMarks > 0 && iterations < maxIterations) {
      iterations++;

      // Choose question type from section's allowed types
      const questionType = this.chooseQuestionType(section.questionTypes, remainingMarks);
      if (!questionType) break;

      // Choose marks for this question
      const marks = this.chooseMarks(questionType, remainingMarks);
      if (marks === 0) break;

      // Choose difficulty based on targets and what's been used
      const difficulty = this.chooseDifficulty(
        questionType,
        difficultyTargets,
        difficultyUsed,
        remainingMarks
      );

      // Choose subtopic based on allocations
      const subtopicChoice = this.chooseSubtopic(availableAllocations, marks);
      if (!subtopicChoice) break;

      // Create the question plan
      const plan: QuestionPlan = {
        id: this.generateId(),
        sectionId: section.id,
        topicId: subtopicChoice.topicId,
        subtopic: subtopicChoice.subtopic,
        marks,
        difficulty,
        questionType,
        order: questionOrder++,
      };

      questions.push(plan);
      remainingMarks -= marks;
      difficultyUsed[difficulty] += marks;

      // Update subtopic allocation
      subtopicChoice.allocatedMarks -= marks;
    }

    // Sort by difficulty within section (easy first, then medium, then hard)
    const difficultyOrder: Record<Difficulty, number> = { easy: 0, medium: 1, hard: 2 };
    questions.sort((a, b) => {
      const diffDiff = difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty];
      if (diffDiff !== 0) return diffDiff;
      return a.order - b.order;
    });

    // Re-assign order after sorting
    questions.forEach((q, i) => {
      q.order = i;
    });

    return questions;
  }

  /**
   * Choose a question type from available types
   */
  private chooseQuestionType(
    availableTypes: QuestionType[],
    remainingMarks: number
  ): QuestionType | null {
    // Filter types that can fit in remaining marks
    const viableTypes = availableTypes.filter((type) => {
      const minMarks = Math.min(...QUESTION_TYPE_MARKS[type]);
      return minMarks <= remainingMarks;
    });

    if (viableTypes.length === 0) return null;

    // Random weighted selection (could be enhanced with actual distribution targets)
    return viableTypes[Math.floor(this.random() * viableTypes.length)];
  }

  /**
   * Choose marks for a question type
   */
  private chooseMarks(questionType: QuestionType, remainingMarks: number): number {
    const possibleMarks = QUESTION_TYPE_MARKS[questionType].filter((m) => m <= remainingMarks);
    if (possibleMarks.length === 0) return 0;

    // Prefer marks that don't leave tiny remainders
    const preferredMarks = possibleMarks.filter((m) => {
      const after = remainingMarks - m;
      return after === 0 || after >= 2; // Don't leave 1 mark remaining
    });

    const options = preferredMarks.length > 0 ? preferredMarks : possibleMarks;
    return options[Math.floor(this.random() * options.length)];
  }

  /**
   * Choose difficulty based on targets
   */
  private chooseDifficulty(
    questionType: QuestionType,
    targets: Record<Difficulty, number>,
    used: Record<Difficulty, number>,
    remainingMarks: number
  ): Difficulty {
    // Calculate how far off target we are for each difficulty
    const deficits: Record<Difficulty, number> = {
      easy: targets.easy - used.easy,
      medium: targets.medium - used.medium,
      hard: targets.hard - used.hard,
    };

    // Get type-difficulty weights
    const typeWeights = QUESTION_TYPE_DIFFICULTY_WEIGHTS[questionType];

    // Combine deficit with type compatibility
    const difficulties: Difficulty[] = ['easy', 'medium', 'hard'];
    const scores = difficulties.map((d) => ({
      difficulty: d,
      score: Math.max(0, deficits[d]) * typeWeights[d] + (typeWeights[d] * 0.1), // Small base weight
    }));

    // Weighted random selection
    const totalScore = scores.reduce((sum, s) => sum + s.score, 0);
    if (totalScore === 0) return 'medium'; // Default

    let rand = this.random() * totalScore;
    for (const { difficulty, score } of scores) {
      rand -= score;
      if (rand <= 0) return difficulty;
    }

    return 'medium';
  }

  /**
   * Choose a subtopic based on remaining allocations
   */
  private chooseSubtopic(
    allocations: SubtopicAllocation[],
    marks: number
  ): SubtopicAllocation | null {
    // Prefer subtopics with remaining allocation
    const withAllocation = allocations.filter((a) => a.allocatedMarks >= marks);
    if (withAllocation.length > 0) {
      return withAllocation[Math.floor(this.random() * withAllocation.length)];
    }

    // Fall back to any subtopic with positive allocation
    const anyPositive = allocations.filter((a) => a.allocatedMarks > 0);
    if (anyPositive.length > 0) {
      return anyPositive[Math.floor(this.random() * anyPositive.length)];
    }

    // Fall back to any subtopic
    if (allocations.length > 0) {
      return allocations[Math.floor(this.random() * allocations.length)];
    }

    return null;
  }

  /**
   * Generate a unique ID for a question
   */
  private generateId(): string {
    return `q-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
  }
}

/**
 * Convenience function to create a selection result
 */
export function selectQuestionsForPaper(config: PaperConfig, seed?: number): SelectionResult {
  const selector = new QuestionSelector(config, seed);
  return selector.selectQuestions();
}

/**
 * Format question number based on section and position
 * Returns formatted strings like "1", "2(a)", "3(b)(i)"
 */
export function formatQuestionNumber(
  sectionIndex: number,
  questionIndex: number,
  totalSections: number,
  useLetters: boolean = false
): string {
  // For single section papers, just use numbers
  if (totalSections === 1 && !useLetters) {
    return String(questionIndex + 1);
  }

  // For multi-section papers, prefix with section number
  return String(questionIndex + 1);
}

/**
 * Calculate estimated generation time based on question count
 */
export function estimateGenerationTime(questionCount: number): number {
  // Roughly 2-3 seconds per question for AI generation
  const baseTime = questionCount * 2.5;
  // Add overhead for parallel processing limits
  const overhead = Math.ceil(questionCount / 5) * 0.5;
  return Math.ceil(baseTime + overhead);
}
