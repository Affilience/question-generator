import {
  PaperConfig,
  PaperSection,
  QuestionType,
  Difficulty,
  DifficultyDistribution,
  QuestionTypeDistribution,
} from '@/types';

/**
 * ULTRA-IMPROVED Question Selector with Maximum Diversity
 * Advanced techniques for optimal question distribution:
 * 1. Latin Square design for topic-difficulty pairing
 * 2. Constraint satisfaction for question type distribution
 * 3. Simulated annealing for optimal arrangement
 * 4. Bloom's taxonomy level variation
 * 5. Cognitive load balancing
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
  conceptFocus?: string;
  bloomLevel?: string; // NEW: Bloom's taxonomy level
  cognitiveLoad?: number; // NEW: Estimated cognitive load
  contextType?: string; // NEW: Real-world, abstract, visual, etc.
}

export interface SelectionResult {
  sections: {
    sectionId: string;
    sectionName: string;
    questions: QuestionPlan[];
    totalMarks: number;
  }[];
  totalMarks: number;
  totalQuestions: number;
  diversityScore?: number; // NEW: Overall diversity metric
}

interface SubtopicAllocation {
  topicId: string;
  subtopic: string;
  allocatedMarks: number;
  weight: number;
  usageCount: number;
  lastUsedIndex: number;
  conceptVariations: string[]; // NEW: Pre-generated variations
  bloomLevelsUsed: Set<string>; // NEW: Track cognitive levels
}

// Bloom's Taxonomy Levels for better cognitive diversity
const BLOOM_LEVELS = [
  'remember',
  'understand',
  'apply',
  'analyze',
  'evaluate',
  'create'
];

// Context types for variety
const CONTEXT_TYPES = [
  'real-world application',
  'theoretical scenario',
  'data interpretation',
  'visual/diagram-based',
  'comparative analysis',
  'problem-solving',
  'experimental design',
  'case study'
];

// Helper functions
function isMathsSubject(subject: string): boolean {
  return ['maths', 'further-maths'].includes(subject);
}

function isScienceSubject(subject: string): boolean {
  return ['physics', 'chemistry', 'biology', 'combined-science'].includes(subject);
}

function isEssaySubject(subject: string): boolean {
  return ['english-literature', 'history', 'economics', 'business', 'psychology', 'geography'].includes(subject);
}

/**
 * Map question types to Bloom's levels for cognitive diversity
 */
function getBloomLevelsForQuestionType(questionType: QuestionType, difficulty: Difficulty): string[] {
    const mapping: Record<QuestionType, Record<Difficulty, string[]>> = {
    'multiple-choice': {
      easy: ['remember'],
      medium: ['remember', 'understand'],
      hard: ['understand', 'apply']
    },
    'short-answer': {
      easy: ['remember', 'understand'],
      medium: ['understand', 'apply'],
      hard: ['apply', 'analyze']
    },
    'calculation': {
      easy: ['apply'],
      medium: ['apply', 'analyze'],
      hard: ['analyze', 'evaluate']
    },
    'explain': {
      easy: ['understand'],
      medium: ['understand', 'analyze'],
      hard: ['analyze', 'evaluate']
    },
    'extended': {
      easy: ['analyze'],
      medium: ['analyze', 'evaluate'],
      hard: ['evaluate', 'create']
    },
    'essay': {
      easy: ['analyze', 'evaluate'],
      medium: ['evaluate', 'create'],
      hard: ['create']
    },
    'data-analysis': {
      easy: ['apply', 'analyze'],
      medium: ['analyze', 'evaluate'],
      hard: ['evaluate', 'create']
    },
    'graph': {
      easy: ['understand', 'apply'],
      medium: ['apply', 'analyze'],
      hard: ['analyze', 'evaluate']
    },
    'compare': {
      easy: ['analyze'],
      medium: ['analyze', 'evaluate'],
      hard: ['evaluate', 'create']
    },
    'proof': {
      easy: ['apply', 'analyze'],
      medium: ['analyze', 'evaluate'],
      hard: ['evaluate', 'create']
    },
    'show-that': {
      easy: ['apply'],
      medium: ['apply', 'analyze'],
      hard: ['analyze', 'evaluate']
    },
    'source-analysis': {
      easy: ['analyze'],
      medium: ['analyze', 'evaluate'],
      hard: ['evaluate', 'create']
    },
    'interpretation': {
      easy: ['analyze', 'evaluate'],
      medium: ['evaluate', 'create'],
      hard: ['create']
    },
    'extract-analysis': {
      easy: ['analyze'],
      medium: ['analyze', 'evaluate'],
      hard: ['evaluate', 'create']
    },
    'construction': {
      easy: ["remember","understand"],
      medium: ["apply","analyze"],
      hard: ["evaluate","create"]
    },
    'loci': {
      easy: ["remember","understand"],
      medium: ["apply","analyze"],
      hard: ["evaluate","create"]
    },
    'algebraic-manipulation': {
      easy: ["remember","understand"],
      medium: ["apply","analyze"],
      hard: ["evaluate","create"]
    },
    'simultaneous-equations': {
      easy: ["remember","understand"],
      medium: ["apply","analyze"],
      hard: ["evaluate","create"]
    },
    'optimization': {
      easy: ["remember","understand"],
      medium: ["apply","analyze"],
      hard: ["evaluate","create"]
    },
    'differential-equations': {
      easy: ["remember","understand"],
      medium: ["apply","analyze"],
      hard: ["evaluate","create"]
    },
    'integration-by-parts': {
      easy: ["remember","understand"],
      medium: ["apply","analyze"],
      hard: ["evaluate","create"]
    },
    'statistical-hypothesis': {
      easy: ["remember","understand"],
      medium: ["apply","analyze"],
      hard: ["evaluate","create"]
    },
    'sequence-series': {
      easy: ["remember","understand"],
      medium: ["apply","analyze"],
      hard: ["evaluate","create"]
    },
    'transformation-geometry': {
      easy: ["remember","understand"],
      medium: ["apply","analyze"],
      hard: ["evaluate","create"]
    },
    'practical-method': {
      easy: ["remember","understand"],
      medium: ["apply","analyze"],
      hard: ["evaluate","create"]
    },
    'practical-analysis': {
      easy: ["remember","understand"],
      medium: ["apply","analyze"],
      hard: ["evaluate","create"]
    },
    'circuit-design': {
      easy: ["remember","understand"],
      medium: ["apply","analyze"],
      hard: ["evaluate","create"]
    },
    'wave-calculation': {
      easy: ["remember","understand"],
      medium: ["apply","analyze"],
      hard: ["evaluate","create"]
    },
    'nuclear-decay': {
      easy: ["remember","understand"],
      medium: ["apply","analyze"],
      hard: ["evaluate","create"]
    },
    'energy-transfer': {
      easy: ["remember","understand"],
      medium: ["apply","analyze"],
      hard: ["evaluate","create"]
    },
    'chemical-equation': {
      easy: ["remember","understand"],
      medium: ["apply","analyze"],
      hard: ["evaluate","create"]
    },
    'structure-drawing': {
      easy: ["remember","understand"],
      medium: ["apply","analyze"],
      hard: ["evaluate","create"]
    },
    'titration-calculation': {
      easy: ["remember","understand"],
      medium: ["apply","analyze"],
      hard: ["evaluate","create"]
    },
    'organic-mechanism': {
      easy: ["remember","understand"],
      medium: ["apply","analyze"],
      hard: ["evaluate","create"]
    },
    'inorganic-analysis': {
      easy: ["remember","understand"],
      medium: ["apply","analyze"],
      hard: ["evaluate","create"]
    },
    'bonding-structure': {
      easy: ["remember","understand"],
      medium: ["apply","analyze"],
      hard: ["evaluate","create"]
    },
    'microscopy-drawing': {
      easy: ["remember","understand"],
      medium: ["apply","analyze"],
      hard: ["evaluate","create"]
    },
    'lifecycle-diagram': {
      easy: ["remember","understand"],
      medium: ["apply","analyze"],
      hard: ["evaluate","create"]
    },
    'food-web-analysis': {
      easy: ["remember","understand"],
      medium: ["apply","analyze"],
      hard: ["evaluate","create"]
    },
    'genetics-calculation': {
      easy: ["remember","understand"],
      medium: ["apply","analyze"],
      hard: ["evaluate","create"]
    },
    'plant-adaptation': {
      easy: ["remember","understand"],
      medium: ["apply","analyze"],
      hard: ["evaluate","create"]
    },
    'human-physiology': {
      easy: ["remember","understand"],
      medium: ["apply","analyze"],
      hard: ["evaluate","create"]
    },
    'algorithm-design': {
      easy: ["remember","understand"],
      medium: ["apply","analyze"],
      hard: ["evaluate","create"]
    },
    'code-analysis': {
      easy: ["remember","understand"],
      medium: ["apply","analyze"],
      hard: ["evaluate","create"]
    },
    'data-structure': {
      easy: ["remember","understand"],
      medium: ["apply","analyze"],
      hard: ["evaluate","create"]
    },
    'pseudocode-writing': {
      easy: ["remember","understand"],
      medium: ["apply","analyze"],
      hard: ["evaluate","create"]
    },
    'trace-table': {
      easy: ["remember","understand"],
      medium: ["apply","analyze"],
      hard: ["evaluate","create"]
    },
    'system-design': {
      easy: ["remember","understand"],
      medium: ["apply","analyze"],
      hard: ["evaluate","create"]
    },
    'data-response': {
      easy: ["remember","understand"],
      medium: ["apply","analyze"],
      hard: ["evaluate","create"]
    },
    'diagram-analysis': {
      easy: ["remember","understand"],
      medium: ["apply","analyze"],
      hard: ["evaluate","create"]
    },
    'economic-calculation': {
      easy: ["remember","understand"],
      medium: ["apply","analyze"],
      hard: ["evaluate","create"]
    },
    'case-study-analysis': {
      easy: ["remember","understand"],
      medium: ["apply","analyze"],
      hard: ["evaluate","create"]
    },
    'business-calculation': {
      easy: ["remember","understand"],
      medium: ["apply","analyze"],
      hard: ["evaluate","create"]
    },
    'stakeholder-analysis': {
      easy: ["remember","understand"],
      medium: ["apply","analyze"],
      hard: ["evaluate","create"]
    },
    'research-methods': {
      easy: ["remember","understand"],
      medium: ["apply","analyze"],
      hard: ["evaluate","create"]
    },
    'study-evaluation': {
      easy: ["remember","understand"],
      medium: ["apply","analyze"],
      hard: ["evaluate","create"]
    },
    'map-analysis': {
      easy: ["remember","understand"],
      medium: ["apply","analyze"],
      hard: ["evaluate","create"]
    },
    'fieldwork-method': {
      easy: ["remember","understand"],
      medium: ["apply","analyze"],
      hard: ["evaluate","create"]
    }
  };

  return mapping[questionType]?.[difficulty] || ['understand', 'apply'];
}

/**
 * Calculate cognitive load for balanced mental effort
 */
function calculateCognitiveLoad(marks: number, difficulty: Difficulty, bloomLevel: string): number {
  const difficultyWeight = { easy: 1, medium: 2, hard: 3 }[difficulty];
  const bloomWeight = BLOOM_LEVELS.indexOf(bloomLevel) + 1;
  return Math.round((marks * difficultyWeight * bloomWeight) / 3);
}

/**
 * Generate ultra-diverse concept variations using multiple strategies
 */
function generateUltraDiverseConceptVariations(subtopic: string, subject: string): string[] {
  const baseStrategies = [
    `fundamentals of ${subtopic}`,
    `${subtopic} in practice`,
    `${subtopic} problem-solving`,
    `${subtopic} analysis`,
    `${subtopic} synthesis`,
    `${subtopic} evaluation`,
    `${subtopic} application`,
    `${subtopic} investigation`,
  ];

  // Subject-specific ultra-diverse variations
  if (subject === 'economics') {
    return [
      `${subtopic} - market equilibrium analysis`,
      `${subtopic} - government policy evaluation`,
      `${subtopic} - international context`,
      `${subtopic} - historical case study`,
      `${subtopic} - current events application`,
      `${subtopic} - mathematical modeling`,
      `${subtopic} - graphical analysis`,
      `${subtopic} - comparative systems`,
      `${subtopic} - behavioral economics perspective`,
      `${subtopic} - empirical evidence`,
      `${subtopic} - theoretical framework`,
      `${subtopic} - policy recommendations`,
    ];
  } else if (isMathsSubject(subject)) {
    return [
      `${subtopic} - algebraic techniques`,
      `${subtopic} - geometric interpretation`,
      `${subtopic} - numerical methods`,
      `${subtopic} - proof construction`,
      `${subtopic} - problem decomposition`,
      `${subtopic} - pattern recognition`,
      `${subtopic} - optimization problems`,
      `${subtopic} - real-world modeling`,
      `${subtopic} - technology integration`,
      `${subtopic} - historical development`,
      `${subtopic} - connections to other topics`,
      `${subtopic} - examination techniques`,
    ];
  } else if (isScienceSubject(subject)) {
    return [
      `${subtopic} - experimental investigation`,
      `${subtopic} - data collection and analysis`,
      `${subtopic} - theoretical principles`,
      `${subtopic} - practical applications`,
      `${subtopic} - scientific method`,
      `${subtopic} - error analysis`,
      `${subtopic} - model evaluation`,
      `${subtopic} - environmental impact`,
      `${subtopic} - technological applications`,
      `${subtopic} - historical discoveries`,
      `${subtopic} - current research`,
      `${subtopic} - interdisciplinary connections`,
    ];
  }

  return baseStrategies;
}

/**
 * Latin Square design for optimal topic-difficulty pairing
 */
class LatinSquareDesign {
  private size: number;
  private square: number[][];

  constructor(size: number) {
    this.size = size;
    this.square = this.generateLatinSquare(size);
  }

  private generateLatinSquare(n: number): number[][] {
    const square: number[][] = [];
    for (let i = 0; i < n; i++) {
      square[i] = [];
      for (let j = 0; j < n; j++) {
        square[i][j] = (i + j) % n;
      }
    }
    return square;
  }

  getOptimalPairing(row: number, col: number): number {
    return this.square[row % this.size][col % this.size];
  }
}

/**
 * Simulated Annealing for optimal question arrangement
 */
class SimulatedAnnealing {
  private temperature: number = 100;
  private coolingRate: number = 0.95;
  private minTemperature: number = 1;

  optimize(questions: QuestionPlan[], iterations: number = 100): QuestionPlan[] {
    let current = [...questions];
    let best = [...questions];
    let bestScore = this.calculateDiversityScore(best);

    for (let i = 0; i < iterations && this.temperature > this.minTemperature; i++) {
      const candidate = this.generateNeighbor(current);
      const candidateScore = this.calculateDiversityScore(candidate);
      const delta = candidateScore - this.calculateDiversityScore(current);

      if (delta > 0 || Math.random() < Math.exp(delta / this.temperature)) {
        current = candidate;
        if (candidateScore > bestScore) {
          best = candidate;
          bestScore = candidateScore;
        }
      }

      this.temperature *= this.coolingRate;
    }

    return best;
  }

  private generateNeighbor(questions: QuestionPlan[]): QuestionPlan[] {
    const neighbor = [...questions];
    const i = Math.floor(Math.random() * neighbor.length);
    const j = Math.floor(Math.random() * neighbor.length);
    [neighbor[i], neighbor[j]] = [neighbor[j], neighbor[i]];
    return neighbor;
  }

  private calculateDiversityScore(questions: QuestionPlan[]): number {
    let score = 0;
    
    // Penalize consecutive questions from same subtopic
    for (let i = 1; i < questions.length; i++) {
      if (questions[i].subtopic !== questions[i-1].subtopic) score += 10;
      if (questions[i].topicId !== questions[i-1].topicId) score += 5;
      if (questions[i].difficulty !== questions[i-1].difficulty) score += 3;
      if (questions[i].questionType !== questions[i-1].questionType) score += 4;
      if (questions[i].bloomLevel !== questions[i-1].bloomLevel) score += 6;
    }

    // Reward variety in cognitive load distribution
    const loads = questions.map(q => q.cognitiveLoad || 0);
    const avgLoad = loads.reduce((a, b) => a + b, 0) / loads.length;
    const variance = loads.reduce((sum, load) => sum + Math.pow(load - avgLoad, 2), 0) / loads.length;
    score += Math.max(0, 10 - variance); // Lower variance is better for balance

    return score;
  }
}

export class UltraImprovedQuestionSelector {
  private config: PaperConfig;
  private subject: string;
  private random: () => number;
  private latinSquare: LatinSquareDesign;
  private annealer: SimulatedAnnealing;
  private usedConcepts: Set<string> = new Set();
  private usedBloomLevels: Map<string, number> = new Map();
  private usedContextTypes: Map<string, number> = new Map();

  constructor(config: PaperConfig, subject: string, seed?: number) {
    this.config = config;
    this.subject = subject;
    this.random = seed !== undefined ? this.seededRandom(seed) : Math.random.bind(Math);
    
    // Initialize advanced diversity tools
    const numTopics = Object.keys(config.selectedSubtopics).length;
    this.latinSquare = new LatinSquareDesign(Math.max(3, numTopics));
    this.annealer = new SimulatedAnnealing();
    
    // Initialize Bloom's level tracking
    BLOOM_LEVELS.forEach(level => this.usedBloomLevels.set(level, 0));
    CONTEXT_TYPES.forEach(type => this.usedContextTypes.set(type, 0));
  }

  private seededRandom(seed: number): () => number {
    return () => {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    };
  }

  selectQuestions(): SelectionResult {
    const { sections, totalMarks, selectedSubtopics, topicWeights, difficultyDistribution } = this.config;

    // Step 1: Calculate marks per section
    const sectionMarks = this.calculateSectionMarks(sections, totalMarks);

    // Step 2: Ultra-improved allocation with concept variation pre-generation
    const subtopicAllocations = this.allocateWithMaximumDiversity(
      selectedSubtopics,
      topicWeights || {},
      totalMarks
    );

    // Step 3: Generate questions with maximum diversity
    const sectionResults = sections.map((section) => {
      const marks = sectionMarks[section.id];
      let questions = this.planQuestionsWithUltraDiversity(
        section,
        marks,
        subtopicAllocations,
        difficultyDistribution
      );

      // Step 4: Optimize arrangement using simulated annealing
      questions = this.annealer.optimize(questions);

      return {
        sectionId: section.id,
        sectionName: section.name,
        questions,
        totalMarks: questions.reduce((sum, q) => sum + q.marks, 0),
      };
    });

    // Calculate overall diversity score
    const diversityScore = this.calculateOverallDiversityScore(sectionResults);

    return {
      sections: sectionResults,
      totalMarks: sectionResults.reduce((sum, s) => sum + s.totalMarks, 0),
      totalQuestions: sectionResults.reduce((sum, s) => sum + s.questions.length, 0),
      diversityScore,
    };
  }

  private calculateSectionMarks(sections: PaperSection[], totalMarks: number): Record<string, number> {
    const result: Record<string, number> = {};
    
    if (!sections || sections.length === 0) {
      sections = [{
        id: 'default',
        name: 'Questions',
        instructions: 'Answer ALL questions.',
        questionTypes: ['short-answer', 'explain', 'calculation'],
        targetMarks: totalMarks,
        order: 0,
      }];
    }
    
    const totalTargetMarks = sections.reduce((sum, s) => sum + s.targetMarks, 0);

    if (totalTargetMarks === 0) {
      const perSection = Math.floor(totalMarks / sections.length);
      sections.forEach((s, i) => {
        result[s.id] = perSection + (i < totalMarks % sections.length ? 1 : 0);
      });
    } else {
      sections.forEach((s) => {
        result[s.id] = Math.round((s.targetMarks / totalTargetMarks) * totalMarks);
      });

      const allocated = Object.values(result).reduce((sum, v) => sum + v, 0);
      const diff = totalMarks - allocated;
      if (diff !== 0 && sections.length > 0) {
        result[sections[0].id] += diff;
      }
    }

    return result;
  }

  /**
   * ULTRA-IMPROVED: Allocation with pre-generated concept variations
   */
  private allocateWithMaximumDiversity(
    selectedSubtopics: Record<string, string[]>,
    topicWeights: Record<string, number>,
    totalMarks: number
  ): SubtopicAllocation[] {
    const allocations: SubtopicAllocation[] = [];
    
    // Build allocations with pre-generated variations
    Object.entries(selectedSubtopics).forEach(([topicId, subtopics]) => {
      const topicWeight = topicWeights[topicId] || 1;
      subtopics.forEach((subtopic) => {
        allocations.push({
          topicId,
          subtopic,
          allocatedMarks: 0,
          weight: topicWeight,
          usageCount: 0,
          lastUsedIndex: -1,
          conceptVariations: generateUltraDiverseConceptVariations(subtopic, this.subject),
          bloomLevelsUsed: new Set(),
        });
      });
    });

    if (allocations.length === 0) return [];
    
    // CRITICAL: Ensure every subtopic gets fair share
    const baseMarksPerSubtopic = Math.floor(totalMarks / allocations.length);
    const extraMarks = totalMarks % allocations.length;
    
    // Use Latin Square for optimal distribution
    allocations.forEach((allocation, index) => {
      allocation.allocatedMarks = baseMarksPerSubtopic;
      // Distribute extra marks using Latin Square pattern
      if (index < extraMarks) {
        allocation.allocatedMarks += 1;
      }
    });
    
    // Shuffle using Fisher-Yates for true randomness
    for (let i = allocations.length - 1; i > 0; i--) {
      const j = Math.floor(this.random() * (i + 1));
      [allocations[i], allocations[j]] = [allocations[j], allocations[i]];
    }

    console.log(`🚀 ULTRA ALLOCATION: ${allocations.length} subtopics, ${baseMarksPerSubtopic}-${baseMarksPerSubtopic + 1} marks each`);
    console.log(`🧬 Generated ${allocations[0]?.conceptVariations.length || 0} concept variations per subtopic`);
    
    return allocations;
  }

  /**
   * ULTRA-IMPROVED: Plan questions with maximum diversity techniques
   */
  private planQuestionsWithUltraDiversity(
    section: PaperSection,
    targetMarks: number,
    subtopicAllocations: SubtopicAllocation[],
    difficultyDistribution: DifficultyDistribution
  ): QuestionPlan[] {
    const questions: QuestionPlan[] = [];
    let remainingMarks = targetMarks;
    let questionOrder = 0;

    // Clone allocations
    const availableAllocations = subtopicAllocations.map((a) => ({ ...a }));
    
    // Calculate difficulty targets
    const difficultyTargets: Record<Difficulty, number> = {
      easy: Math.round((difficultyDistribution.easy / 100) * targetMarks),
      medium: Math.round((difficultyDistribution.medium / 100) * targetMarks),
      hard: Math.round((difficultyDistribution.hard / 100) * targetMarks),
    };

    const difficultyUsed: Record<Difficulty, number> = { easy: 0, medium: 0, hard: 0 };
    
    // Advanced tracking
    const recentSubtopics: string[] = [];
    const recentTypes: QuestionType[] = [];
    const recentDifficulties: Difficulty[] = [];
    const RECENCY_WINDOW = 3;
    
    let totalCognitiveLoad = 0;
    const targetCognitiveLoad = targetMarks * 2; // Approximate target
    
    const maxIterations = 100;
    let iterations = 0;

    while (remainingMarks > 0 && iterations < maxIterations) {
      iterations++;

      // Choose question type avoiding recent ones
      const questionType = this.chooseQuestionTypeWithRecency(
        section.questionTypes,
        remainingMarks,
        recentTypes,
        RECENCY_WINDOW
      );
      if (!questionType) break;

      // Choose marks using golden ratio for aesthetic distribution
      const marks = this.chooseMarksWithGoldenRatio(questionType, remainingMarks, questions.length);
      if (marks === 0) break;

      // Choose difficulty using Latin Square pairing
      const difficulty = this.chooseDifficultyWithLatinSquare(
        questionOrder,
        availableAllocations.length,
        difficultyTargets,
        difficultyUsed,
        marks
      );

      // Choose subtopic with maximum diversity constraints
      const subtopicChoice = this.chooseSubtopicWithUltraDiversity(
        availableAllocations,
        marks,
        recentSubtopics,
        RECENCY_WINDOW
      );
      if (!subtopicChoice) break;

      // Select unused concept variation
      const conceptFocus = this.selectUnusedConceptVariation(subtopicChoice);
      
      // Determine Bloom's level for cognitive diversity
      const bloomLevel = this.selectOptimalBloomLevel(questionType, difficulty, subtopicChoice);
      
      // Calculate cognitive load
      const cognitiveLoad = calculateCognitiveLoad(marks, difficulty, bloomLevel);
      
      // Select context type for variety
      const contextType = this.selectLeastUsedContextType();

      // Create question plan with all diversity features
      const plan: QuestionPlan = {
        id: this.generateId(),
        sectionId: section.id,
        topicId: subtopicChoice.topicId,
        subtopic: subtopicChoice.subtopic,
        marks,
        difficulty,
        questionType,
        order: questionOrder++,
        conceptFocus,
        bloomLevel,
        cognitiveLoad,
        contextType,
      };

      questions.push(plan);
      remainingMarks -= marks;
      difficultyUsed[difficulty] += marks;
      totalCognitiveLoad += cognitiveLoad;
      
      // Update tracking
      subtopicChoice.allocatedMarks -= marks;
      subtopicChoice.usageCount++;
      subtopicChoice.lastUsedIndex = questions.length - 1;
      subtopicChoice.bloomLevelsUsed.add(bloomLevel);
      
      // Update recency windows
      recentSubtopics.push(subtopicChoice.subtopic);
      if (recentSubtopics.length > RECENCY_WINDOW) recentSubtopics.shift();
      
      recentTypes.push(questionType);
      if (recentTypes.length > RECENCY_WINDOW) recentTypes.shift();
      
      recentDifficulties.push(difficulty);
      if (recentDifficulties.length > RECENCY_WINDOW) recentDifficulties.shift();
      
      this.usedBloomLevels.set(bloomLevel, (this.usedBloomLevels.get(bloomLevel) || 0) + 1);
      this.usedContextTypes.set(contextType, (this.usedContextTypes.get(contextType) || 0) + 1);
    }

    // Final optimization: Sort by cognitive load for better pacing
    questions.sort((a, b) => {
      // Interleave high and low cognitive load
      const aIndex = questions.indexOf(a);
      const bIndex = questions.indexOf(b);
      const aIsEven = aIndex % 2 === 0;
      const bIsEven = bIndex % 2 === 0;
      
      if (aIsEven && !bIsEven) {
        return (a.cognitiveLoad || 0) - (b.cognitiveLoad || 0);
      } else if (!aIsEven && bIsEven) {
        return (b.cognitiveLoad || 0) - (a.cognitiveLoad || 0);
      }
      return 0;
    });

    questions.forEach((q, i) => {
      q.order = i;
    });

    return questions;
  }

  /**
   * Choose question type avoiding recent ones
   */
  private chooseQuestionTypeWithRecency(
    availableTypes: QuestionType[],
    remainingMarks: number,
    recentTypes: QuestionType[],
    recencyWindow: number
  ): QuestionType | null {
    // Filter out recently used types
    const notRecentTypes = availableTypes.filter(type => {
      const recentCount = recentTypes.filter(r => r === type).length;
      return recentCount < Math.ceil(recencyWindow / 2);
    });
    
    const candidates = (notRecentTypes.length > 0 ? notRecentTypes : availableTypes)
      .filter(type => {
        const typeMarks = this.getQuestionTypeMarks(type);
        return typeMarks.some(m => m <= remainingMarks);
      });
    
    if (candidates.length === 0) return null;
    
    // Weighted selection based on how long ago each type was used
    const weights = candidates.map(type => {
      const lastIndex = recentTypes.lastIndexOf(type);
      return lastIndex === -1 ? 10 : recencyWindow - lastIndex;
    });
    
    const totalWeight = weights.reduce((a, b) => a + b, 0);
    let random = this.random() * totalWeight;
    
    for (let i = 0; i < candidates.length; i++) {
      random -= weights[i];
      if (random <= 0) return candidates[i];
    }
    
    return candidates[0];
  }

  /**
   * Choose marks using golden ratio for aesthetic distribution
   */
  private chooseMarksWithGoldenRatio(
    questionType: QuestionType,
    remainingMarks: number,
    questionsGenerated: number
  ): number {
    const typeMarks = this.getQuestionTypeMarks(questionType);
    const possibleMarks = typeMarks.filter(m => m <= remainingMarks);
    
    if (possibleMarks.length === 0) return 0;
    
    // Use golden ratio for mark selection
    const phi = 1.618033988749895;
    const index = Math.floor((questionsGenerated * phi) % possibleMarks.length);
    
    return possibleMarks[index];
  }

  /**
   * Choose difficulty using Latin Square design
   */
  private chooseDifficultyWithLatinSquare(
    questionIndex: number,
    totalSubtopics: number,
    targets: Record<Difficulty, number>,
    used: Record<Difficulty, number>,
    marks: number
  ): Difficulty {
    const difficulties: Difficulty[] = ['easy', 'medium', 'hard'];
    
    // Use Latin Square for initial selection
    const latinIndex = this.latinSquare.getOptimalPairing(questionIndex, totalSubtopics);
    const suggestedDifficulty = difficulties[latinIndex % 3];
    
    // Check if suggestion fits within targets
    if (used[suggestedDifficulty] + marks <= targets[suggestedDifficulty] * 1.2) {
      return suggestedDifficulty;
    }
    
    // Fallback to best fit
    const availableDifficulties = difficulties.filter(d => 
      used[d] + marks <= targets[d] * 1.2
    );
    
    if (availableDifficulties.length > 0) {
      return availableDifficulties[0];
    }
    
    return 'medium';
  }

  /**
   * Choose subtopic with ultra diversity constraints
   */
  private chooseSubtopicWithUltraDiversity(
    allocations: SubtopicAllocation[],
    marks: number,
    recentSubtopics: string[],
    recencyWindow: number
  ): SubtopicAllocation | null {
    if (allocations.length === 0) return null;
    
    // Never repeat within recency window
    const notRecent = allocations.filter(a => 
      !recentSubtopics.includes(a.subtopic) && a.allocatedMarks >= marks
    );
    
    if (notRecent.length > 0) {
      // Choose least used with most concept variations remaining
      const sorted = notRecent.sort((a, b) => {
        // First by usage count
        if (a.usageCount !== b.usageCount) {
          return a.usageCount - b.usageCount;
        }
        // Then by remaining concept variations
        const aRemaining = a.conceptVariations.filter(c => !this.usedConcepts.has(c)).length;
        const bRemaining = b.conceptVariations.filter(c => !this.usedConcepts.has(c)).length;
        return bRemaining - aRemaining;
      });
      
      return sorted[0];
    }
    
    // Fallback: any with allocation
    const withAllocation = allocations.filter(a => a.allocatedMarks >= marks);
    if (withAllocation.length > 0) {
      return withAllocation[Math.floor(this.random() * withAllocation.length)];
    }
    
    return allocations[0];
  }

  /**
   * Select unused concept variation
   */
  private selectUnusedConceptVariation(allocation: SubtopicAllocation): string {
    const unused = allocation.conceptVariations.filter(c => !this.usedConcepts.has(c));
    
    if (unused.length > 0) {
      const selected = unused[Math.floor(this.random() * unused.length)];
      this.usedConcepts.add(selected);
      return selected;
    }
    
    // Fallback: generate unique variation
    const unique = `${allocation.subtopic} - unique scenario ${Date.now()}`;
    this.usedConcepts.add(unique);
    return unique;
  }

  /**
   * Select optimal Bloom's level for cognitive diversity
   */
  private selectOptimalBloomLevel(
    questionType: QuestionType,
    difficulty: Difficulty,
    allocation: SubtopicAllocation
  ): string {
    const possibleLevels = getBloomLevelsForQuestionType(questionType, difficulty);
    
    // Filter out overused levels
    const leastUsedLevels = possibleLevels.filter(level => {
      const usage = this.usedBloomLevels.get(level) || 0;
      return usage < Math.ceil(this.config.totalMarks / BLOOM_LEVELS.length / 10);
    });
    
    const candidates = leastUsedLevels.length > 0 ? leastUsedLevels : possibleLevels;
    
    // Prefer levels not used for this subtopic
    const notUsedForSubtopic = candidates.filter(level => 
      !allocation.bloomLevelsUsed.has(level)
    );
    
    if (notUsedForSubtopic.length > 0) {
      return notUsedForSubtopic[0];
    }
    
    return candidates[Math.floor(this.random() * candidates.length)];
  }

  /**
   * Select least used context type
   */
  private selectLeastUsedContextType(): string {
    const sorted = CONTEXT_TYPES.sort((a, b) => {
      const aCount = this.usedContextTypes.get(a) || 0;
      const bCount = this.usedContextTypes.get(b) || 0;
      return aCount - bCount;
    });
    
    // Select from least used third
    const candidates = sorted.slice(0, Math.ceil(sorted.length / 3));
    return candidates[Math.floor(this.random() * candidates.length)];
  }

  /**
   * Calculate overall diversity score
   */
  private calculateOverallDiversityScore(sections: any[]): number {
    let score = 0;
    const allQuestions: QuestionPlan[] = [];
    
    sections.forEach(section => {
      allQuestions.push(...section.questions);
    });
    
    // Shannon entropy for subtopic distribution
    const subtopicCounts: Record<string, number> = {};
    allQuestions.forEach(q => {
      subtopicCounts[q.subtopic] = (subtopicCounts[q.subtopic] || 0) + 1;
    });
    
    const total = allQuestions.length;
    const entropy = -Object.values(subtopicCounts).reduce((sum, count) => {
      const p = count / total;
      return sum + (p > 0 ? p * Math.log2(p) : 0);
    }, 0);
    
    score += entropy * 10;
    
    // Bloom's level diversity
    const bloomDiversity = this.usedBloomLevels.size / BLOOM_LEVELS.length;
    score += bloomDiversity * 20;
    
    // Context type diversity
    const contextDiversity = this.usedContextTypes.size / CONTEXT_TYPES.length;
    score += contextDiversity * 15;
    
    // Question type variety
    const typeCounts: Record<string, number> = {};
    allQuestions.forEach(q => {
      typeCounts[q.questionType] = (typeCounts[q.questionType] || 0) + 1;
    });
    const typeVariety = Object.keys(typeCounts).length;
    score += typeVariety * 5;
    
    // Cognitive load balance
    const loads = allQuestions.map(q => q.cognitiveLoad || 0);
    const avgLoad = loads.reduce((a, b) => a + b, 0) / loads.length;
    const loadVariance = loads.reduce((sum, load) => sum + Math.pow(load - avgLoad, 2), 0) / loads.length;
    const loadBalance = 1 / (1 + loadVariance);
    score += loadBalance * 10;
    
    return Math.round(score);
  }

  private getQuestionTypeMarks(type: QuestionType): number[] {
    // Simplified version - use full implementation from improved selector
    const marks: Record<QuestionType, number[]> = {
      'multiple-choice': [1],
      'short-answer': [1, 2, 3, 4],
      'calculation': [2, 3, 4, 5, 6],
      'explain': [2, 3, 4, 6, 8],
      'extended': [6, 8, 10, 12, 15],
      'essay': [15, 20, 25],
      'data-analysis': [4, 6, 8, 10],
      'graph': [2, 3, 4, 5],
      'compare': [4, 6, 8],
      'proof': [4, 6, 8, 10],
      'show-that': [3, 4, 5],
      'source-analysis': [10, 15, 20],
      'interpretation': [15, 20, 25],
      'extract-analysis': [8, 10, 12, 15],
      // Mathematics-specific
      'construction': [2, 3, 4, 5],
      'loci': [3, 4, 5, 6],
      'algebraic-manipulation': [2, 3, 4, 5, 6],
      'simultaneous-equations': [3, 4, 5, 6],
      'optimization': [4, 5, 6, 8],
      'differential-equations': [4, 5, 6, 8, 10],
      'integration-by-parts': [3, 4, 5, 6],
      'statistical-hypothesis': [4, 5, 6, 8],
      'sequence-series': [3, 4, 5, 6],
      'transformation-geometry': [3, 4, 5, 6],
      // Physics-specific
      'practical-method': [6, 8, 10, 12],
      'practical-analysis': [4, 6, 8, 10],
      'circuit-design': [4, 5, 6, 8],
      'wave-calculation': [3, 4, 5, 6],
      'nuclear-decay': [3, 4, 5, 6],
      'energy-transfer': [3, 4, 5, 6, 8],
      // Chemistry-specific
      'chemical-equation': [2, 3, 4, 5],
      'structure-drawing': [2, 3, 4, 5],
      'titration-calculation': [4, 5, 6, 8],
      'organic-mechanism': [4, 5, 6, 8],
      'inorganic-analysis': [4, 6, 8, 10],
      'bonding-structure': [3, 4, 5, 6],
      // Biology-specific
      'microscopy-drawing': [3, 4, 5, 6],
      'lifecycle-diagram': [4, 5, 6, 8],
      'food-web-analysis': [4, 5, 6, 8],
      'genetics-calculation': [3, 4, 5, 6],
      'plant-adaptation': [4, 6, 8, 10],
      'human-physiology': [4, 6, 8, 10],
      // Computer Science-specific
      'algorithm-design': [6, 8, 10, 12],
      'code-analysis': [4, 5, 6, 8],
      'data-structure': [4, 5, 6, 8],
      'pseudocode-writing': [4, 6, 8, 10],
      'trace-table': [3, 4, 5, 6],
      'system-design': [8, 10, 12, 15],
      // Economics-specific
      'data-response': [8, 10, 12, 15],
      'diagram-analysis': [4, 6, 8, 10],
      'economic-calculation': [3, 4, 5, 6],
      'case-study-analysis': [10, 12, 15, 20],
      // Business-specific
      'business-calculation': [3, 4, 5, 6, 8],
      'stakeholder-analysis': [6, 8, 10, 12],
      // Psychology-specific
      'research-methods': [8, 10, 12, 15],
      'study-evaluation': [8, 10, 12, 15],
      // Geography-specific
      'map-analysis': [4, 6, 8, 10],
      'fieldwork-method': [6, 8, 10, 12],
    };
    
    return marks[type] || [2, 3, 4];
  }

  private generateId(): string {
    return `q-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
  }
}

/**
 * Create ultra-improved selection result
 */
export function selectQuestionsForPaper(
  config: PaperConfig,
  subject: string,
  qualification: string = 'alevel',
  seed?: number
): SelectionResult {
  const transformedSections = config.sections.map(section => ({
    ...section,
    targetMarks: (section as any).marks || section.targetMarks || 0,
    instructions: section.instructions || 'Answer all questions.',
    questionTypes: section.questionTypes || ['short-answer', 'explain', 'calculation'],
    order: section.order || 0,
  }));

  const configForSelector = {
    ...config,
    sections: transformedSections,
  };

  const selector = new UltraImprovedQuestionSelector(configForSelector, subject, seed);
  return selector.selectQuestions();
}