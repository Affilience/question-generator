// Subject-specific question count estimation for paper generation
// Based on real exam board mark allocations and question patterns

import { Subject, QualificationLevel, DifficultyDistribution } from '@/types';

interface QuestionEstimationInput {
  subject: Subject;
  level: QualificationLevel;
  totalMarks: number;
  difficulty: DifficultyDistribution;
}

/**
 * Estimate number of questions based on subject-specific mark patterns
 * from actual past papers across AQA, Edexcel, OCR
 */
export function estimateQuestionCount({
  subject,
  level,
  totalMarks,
  difficulty
}: QuestionEstimationInput): number {
  
  // Essay-heavy subjects with long-form responses
  const isEssaySubject = ['english-literature', 'history', 'economics', 'business', 'psychology', 'geography'].includes(subject);
  const isBiologyALevel = subject === 'biology' && level === 'a-level';
  
  if (subject === 'economics') {
    // Economics A-Level: Mixed structure with sophisticated mark distribution
    // Easy: 2-5 marks (definitions, calculations) 
    // Medium: 8-12 marks (analysis with extracts)
    // Hard: 15-25 marks (evaluation essays)
    
    const easyWeight = difficulty.easy / 100;
    const mediumWeight = difficulty.medium / 100;
    const hardWeight = difficulty.hard / 100;
    
    // Weighted average marks per question based on real Edexcel/AQA patterns
    const easyAvg = 3.5;    // Short definitions/calculations
    const mediumAvg = 10;   // Data analysis questions  
    const hardAvg = 20;     // Essay evaluation questions
    
    const weightedAvg = (easyWeight * easyAvg) + (mediumWeight * mediumAvg) + (hardWeight * hardAvg);
    
    return Math.max(2, Math.round(totalMarks / weightedAvg));
    
  } else if (subject === 'business') {
    // Business Studies: Similar to Economics but slightly different mark patterns
    // More case study analysis, less pure economic theory
    const easyWeight = difficulty.easy / 100;
    const mediumWeight = difficulty.medium / 100;
    const hardWeight = difficulty.hard / 100;
    
    const easyAvg = 3;      // Knowledge/definitions
    const mediumAvg = 8;    // Application to case studies
    const hardAvg = 16;     // Evaluation questions
    
    const weightedAvg = (easyWeight * easyAvg) + (mediumWeight * mediumAvg) + (hardWeight * hardAvg);
    
    return Math.max(3, Math.round(totalMarks / weightedAvg));
    
  } else if (isEssaySubject && (subject === 'english-literature' || subject === 'history')) {
    // Pure essay subjects with very high marks per question
    // English Lit: ~25 marks/question (75 marks = 3 questions)
    // History: ~27 marks/question (80 marks = 3 questions)  
    const avgMarksPerQuestion = subject === 'english-literature' ? 25 : 27;
    return Math.max(1, Math.round(totalMarks / avgMarksPerQuestion));
    
  } else if (subject === 'psychology' || subject === 'geography') {
    // Mixed essay/data subjects
    const easyWeight = difficulty.easy / 100;
    const mediumWeight = difficulty.medium / 100; 
    const hardWeight = difficulty.hard / 100;
    
    const easyAvg = 4;      // Short explanations
    const mediumAvg = 8;    // Analysis questions
    const hardAvg = 16;     // Extended essays
    
    const weightedAvg = (easyWeight * easyAvg) + (mediumWeight * mediumAvg) + (hardWeight * hardAvg);
    
    return Math.max(2, Math.round(totalMarks / weightedAvg));
    
  } else if (isBiologyALevel) {
    // Biology A-Level: Mixed calculations + extended responses + essays
    const easyWeight = difficulty.easy / 100;
    const mediumWeight = difficulty.medium / 100;
    const hardWeight = difficulty.hard / 100;
    
    const easyAvg = 3;      // Calculations/definitions
    const mediumAvg = 6;    // Extended responses  
    const hardAvg = 18;     // Essay questions
    
    const weightedAvg = (easyWeight * easyAvg) + (mediumWeight * mediumAvg) + (hardWeight * hardAvg);
    
    return Math.max(3, Math.round(totalMarks / weightedAvg));
    
  } else {
    // STEM subjects (Maths, Physics, Chemistry, Computer Science)
    // Heavily weighted toward low-mark questions with occasional longer ones
    
    // Real past papers analysis shows:
    // 1-3 marks: ~60% of questions
    // 4-6 marks: ~26% of questions  
    // 8+ marks: ~14% of questions
    
    const easyWeight = difficulty.easy / 100;
    const mediumWeight = difficulty.medium / 100;
    const hardWeight = difficulty.hard / 100;
    
    const easyAvg = 2.5;    // Short calculations/MC
    const mediumAvg = 4.5;  // Multi-step problems
    const hardAvg = 8;      // Complex proofs/extended
    
    const weightedAvg = (easyWeight * easyAvg) + (mediumWeight * mediumAvg) + (hardWeight * hardAvg);
    
    // Ensure minimum realistic average for STEM
    const finalAvg = Math.max(3.2, weightedAvg);
    
    return Math.max(4, Math.round(totalMarks / finalAvg));
  }
}

/**
 * Get typical mark ranges for a subject and level
 * Used for validation and UI hints
 */
export function getTypicalMarkRanges(subject: Subject, level: QualificationLevel) {
  if (subject === 'economics' && level === 'a-level') {
    return {
      easy: { min: 2, max: 5, description: 'Definitions, basic calculations' },
      medium: { min: 8, max: 12, description: 'Analysis with data/extracts' },
      hard: { min: 15, max: 25, description: 'Evaluation essays' }
    };
  }
  
  if (subject === 'business') {
    return {
      easy: { min: 2, max: 4, description: 'Knowledge, definitions' },
      medium: { min: 6, max: 10, description: 'Case study application' }, 
      hard: { min: 12, max: 20, description: 'Evaluation of strategies' }
    };
  }
  
  // Default STEM ranges
  return {
    easy: { min: 1, max: 3, description: 'Calculations, definitions' },
    medium: { min: 3, max: 6, description: 'Multi-step problems' },
    hard: { min: 6, max: 12, description: 'Complex analysis, proofs' }
  };
}