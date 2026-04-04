/**
 * Enhanced diagram probability calculations
 * More intelligent determination of when diagrams are needed
 */

import { Subject, QuestionType, Difficulty } from '@/types';

interface ProbabilityFactors {
  baseProbability: number;
  subjectMultiplier: number;
  questionTypeMultiplier: number;
  marksMultiplier: number;
  difficultyMultiplier: number;
  topicBonus: number;
}

/**
 * Calculate enhanced probability for diagram generation
 */
export function calculateEnhancedDiagramProbability(
  subject: Subject,
  questionType: QuestionType,
  difficulty: Difficulty,
  marks: number,
  topic?: string,
  subtopic?: string
): number {
  const factors = getProbabilityFactors(subject, questionType, difficulty, marks, topic, subtopic);
  
  // Calculate final probability
  let probability = factors.baseProbability;
  probability *= factors.subjectMultiplier;
  probability *= factors.questionTypeMultiplier;
  probability *= factors.marksMultiplier;
  probability *= factors.difficultyMultiplier;
  probability += factors.topicBonus;
  
  // Clamp between 0 and 1
  return Math.min(1, Math.max(0, probability));
}

/**
 * Get probability factors for calculation
 */
function getProbabilityFactors(
  subject: Subject,
  questionType: QuestionType,
  difficulty: Difficulty,
  marks: number,
  topic?: string,
  subtopic?: string
): ProbabilityFactors {
  // Base probability
  let baseProbability = 0.2;
  
  // Subject multiplier
  const subjectMultipliers: Record<string, number> = {
    'maths': 1.5,
    'physics': 2.0,
    'chemistry': 1.8,
    'biology': 1.6,
    'geography': 1.4,
    'computer-science': 1.3,
    'history': 0.5,
    'english-language': 0.3,
    'english-literature': 0.2,
    'french': 0.4,
    'spanish': 0.4,
    'german': 0.4,
  };
  const subjectMultiplier = subjectMultipliers[subject] || 0.8;
  
  // Question type multiplier
  const questionTypeMultipliers: Record<string, number> = {
    'graph': 5.0,
    'construction': 5.0,
    'diagram-analysis': 5.0,
    'map-analysis': 4.5,
    'structure-drawing': 4.5,
    'microscopy-drawing': 4.0,
    'practical-method': 3.0,
    'data-analysis': 2.5,
    'calculation': 1.5,
    'explain': 1.2,
    'compare': 1.0,
    'essay': 0.2,
    'source-analysis': 0.5,
  };
  const questionTypeMultiplier = questionTypeMultipliers[questionType] || 1.0;
  
  // Marks multiplier (exponential increase)
  const marksMultiplier = 1 + (marks - 2) * 0.15;
  
  // Difficulty multiplier
  const difficultyMultipliers = {
    'easy': 0.8,
    'medium': 1.0,
    'hard': 1.3,
  };
  const difficultyMultiplier = difficultyMultipliers[difficulty];
  
  // Topic bonus for specific topics that benefit from diagrams
  let topicBonus = 0;
  const diagramBeneficialTopics = [
    'geometry', 'circle', 'triangle', 'graph', 'coordinate',
    'force', 'circuit', 'wave', 'optic', 'motion',
    'structure', 'organic', 'bond', 'molecule',
    'cell', 'anatomy', 'microscopy', 'tissue',
    'map', 'climate', 'population', 'cross-section',
  ];
  
  if (topic || subtopic) {
    const combinedTopic = `${topic} ${subtopic}`.toLowerCase();
    for (const beneficialTopic of diagramBeneficialTopics) {
      if (combinedTopic.includes(beneficialTopic)) {
        topicBonus = 0.2;
        break;
      }
    }
  }
  
  return {
    baseProbability,
    subjectMultiplier,
    questionTypeMultiplier,
    marksMultiplier,
    difficultyMultiplier,
    topicBonus,
  };
}

/**
 * Determine if diagram should be required (not just probable)
 */
export function isDiagramRequired(
  subject: Subject,
  questionType: QuestionType,
  marks: number,
  topic?: string,
  subtopic?: string
): boolean {
  // Always required for certain question types
  const alwaysRequiredTypes = [
    'graph',
    'construction',
    'diagram-analysis',
    'map-analysis',
    'structure-drawing',
    'microscopy-drawing',
    'transformation-geometry',
    'loci',
  ];
  if (alwaysRequiredTypes.includes(questionType)) {
    return true;
  }
  
  // Subject-specific requirements
  if (subject === 'physics' && marks >= 5) {
    return true;
  }
  
  if (subject === 'chemistry' && questionType === 'structure-drawing') {
    return true;
  }
  
  if (subject === 'biology' && questionType === 'microscopy-drawing') {
    return true;
  }
  
  if (subject === 'geography' && questionType === 'map-analysis') {
    return true;
  }
  
  // Topic-specific requirements
  const diagramRequiredTopics = [
    'circle theorems',
    'constructions',
    'loci',
    'bearings',
    'vectors',
    'transformations',
  ];
  
  const combinedTopic = `${topic} ${subtopic}`.toLowerCase();
  for (const requiredTopic of diagramRequiredTopics) {
    if (combinedTopic.includes(requiredTopic)) {
      return true;
    }
  }
  
  // High marks in STEM subjects
  if (['maths', 'physics', 'chemistry', 'biology'].includes(subject) && marks >= 8) {
    return true;
  }
  
  return false;
}

/**
 * Get recommended diagram complexity based on question parameters
 */
export function getDiagramComplexity(
  difficulty: Difficulty,
  marks: number,
  questionType: QuestionType
): { min: number; max: number } {
  // Base complexity on difficulty
  const baseComplexity = {
    'easy': { min: 1, max: 2 },
    'medium': { min: 2, max: 3 },
    'hard': { min: 3, max: 4 },
  };
  
  let { min, max } = baseComplexity[difficulty];
  
  // Adjust for marks
  if (marks >= 6) {
    min += 1;
    max += 1;
  }
  
  // Adjust for question type
  const complexTypes = ['construction', 'transformation-geometry', 'practical-method'];
  if (complexTypes.includes(questionType)) {
    min += 1;
    max += 1;
  }
  
  // Clamp values
  return {
    min: Math.max(1, Math.min(5, min)),
    max: Math.max(2, Math.min(6, max)),
  };
}

/**
 * Get optimal diagram size for device and complexity
 */
export function getOptimalDiagramSize(
  device: 'mobile' | 'tablet' | 'desktop',
  complexity: number
): { width: number; height: number } {
  const baseSizes = {
    mobile: { width: 280, height: 200 },
    tablet: { width: 400, height: 300 },
    desktop: { width: 500, height: 400 },
  };
  
  const size = baseSizes[device];
  
  // Adjust for complexity
  if (complexity >= 4) {
    size.width *= 1.2;
    size.height *= 1.2;
  } else if (complexity <= 2) {
    size.width *= 0.9;
    size.height *= 0.9;
  }
  
  // Round to nearest 10
  return {
    width: Math.round(size.width / 10) * 10,
    height: Math.round(size.height / 10) * 10,
  };
}