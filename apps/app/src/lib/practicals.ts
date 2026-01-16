// Central routing for Required Practicals across all exam boards and subjects

import { Practical, ExamBoard, QualificationLevel, Subject } from '@/types';

// GCSE Physics
import { aqaGcsePhysicsPracticals } from './practicals-physics-gcse-aqa';
import { edexcelGcsePhysicsPracticals } from './practicals-physics-gcse-edexcel';
import { ocrGcsePhysicsPracticals } from './practicals-physics-gcse-ocr';

// GCSE Chemistry
import { aqaGcseChemistryPracticals } from './practicals-chemistry-gcse-aqa';
import { edexcelGcseChemistryPracticals } from './practicals-chemistry-gcse-edexcel';
import { ocrGcseChemistryPracticals } from './practicals-chemistry-gcse-ocr';

// A-Level Physics
import { aqaALevelPhysicsPracticals } from './practicals-physics-alevel-aqa';
import { edexcelALevelPhysicsPracticals } from './practicals-physics-alevel-edexcel';
import { ocrALevelPhysicsPracticals } from './practicals-physics-alevel-ocr';

// A-Level Chemistry
import { aqaALevelChemistryPracticals } from './practicals-chemistry-alevel-aqa';
import { edexcelALevelChemistryPracticals } from './practicals-chemistry-alevel-edexcel';
import { ocrALevelChemistryPracticals } from './practicals-chemistry-alevel-ocr';

// GCSE Biology
import { aqaGcseBiologyPracticals } from './practicals-biology-gcse-aqa';
import { edexcelGcseBiologyPracticals } from './practicals-biology-gcse-edexcel';
import { ocrGcseBiologyPracticals } from './practicals-biology-gcse-ocr';

// A-Level Biology
import { aqaALevelBiologyPracticals } from './practicals-biology-alevel-aqa';
import { edexcelALevelBiologyPracticals } from './practicals-biology-alevel-edexcel';
import { ocrALevelBiologyPracticals } from './practicals-biology-alevel-ocr';

// Export all practicals for direct access
export { aqaGcsePhysicsPracticals } from './practicals-physics-gcse-aqa';
export { edexcelGcsePhysicsPracticals } from './practicals-physics-gcse-edexcel';
export { ocrGcsePhysicsPracticals } from './practicals-physics-gcse-ocr';
export { aqaGcseChemistryPracticals } from './practicals-chemistry-gcse-aqa';
export { edexcelGcseChemistryPracticals } from './practicals-chemistry-gcse-edexcel';
export { ocrGcseChemistryPracticals } from './practicals-chemistry-gcse-ocr';
export { aqaALevelPhysicsPracticals } from './practicals-physics-alevel-aqa';
export { edexcelALevelPhysicsPracticals } from './practicals-physics-alevel-edexcel';
export { ocrALevelPhysicsPracticals } from './practicals-physics-alevel-ocr';
export { aqaALevelChemistryPracticals } from './practicals-chemistry-alevel-aqa';
export { edexcelALevelChemistryPracticals } from './practicals-chemistry-alevel-edexcel';
export { ocrALevelChemistryPracticals } from './practicals-chemistry-alevel-ocr';
export { aqaGcseBiologyPracticals } from './practicals-biology-gcse-aqa';
export { edexcelGcseBiologyPracticals } from './practicals-biology-gcse-edexcel';
export { ocrGcseBiologyPracticals } from './practicals-biology-gcse-ocr';
export { aqaALevelBiologyPracticals } from './practicals-biology-alevel-aqa';
export { edexcelALevelBiologyPracticals } from './practicals-biology-alevel-edexcel';
export { ocrALevelBiologyPracticals } from './practicals-biology-alevel-ocr';

/**
 * Get practicals for a specific subject, exam board, and level
 */
export function getPracticals(
  subject: Subject,
  examBoard: ExamBoard,
  level: QualificationLevel
): Practical[] {
  // Physics GCSE
  if (subject === 'physics' && level === 'gcse') {
    switch (examBoard) {
      case 'aqa':
        return aqaGcsePhysicsPracticals;
      case 'edexcel':
        return edexcelGcsePhysicsPracticals;
      case 'ocr':
        return ocrGcsePhysicsPracticals;
    }
  }

  // Chemistry GCSE
  if (subject === 'chemistry' && level === 'gcse') {
    switch (examBoard) {
      case 'aqa':
        return aqaGcseChemistryPracticals;
      case 'edexcel':
        return edexcelGcseChemistryPracticals;
      case 'ocr':
        return ocrGcseChemistryPracticals;
    }
  }

  // Physics A-Level
  if (subject === 'physics' && level === 'a-level') {
    switch (examBoard) {
      case 'aqa':
        return aqaALevelPhysicsPracticals;
      case 'edexcel':
        return edexcelALevelPhysicsPracticals;
      case 'ocr':
        return ocrALevelPhysicsPracticals;
    }
  }

  // Chemistry A-Level
  if (subject === 'chemistry' && level === 'a-level') {
    switch (examBoard) {
      case 'aqa':
        return aqaALevelChemistryPracticals;
      case 'edexcel':
        return edexcelALevelChemistryPracticals;
      case 'ocr':
        return ocrALevelChemistryPracticals;
    }
  }

  // Biology GCSE
  if (subject === 'biology' && level === 'gcse') {
    switch (examBoard) {
      case 'aqa':
        return aqaGcseBiologyPracticals;
      case 'edexcel':
        return edexcelGcseBiologyPracticals;
      case 'ocr':
        return ocrGcseBiologyPracticals;
    }
  }

  // Biology A-Level
  if (subject === 'biology' && level === 'a-level') {
    switch (examBoard) {
      case 'aqa':
        return aqaALevelBiologyPracticals;
      case 'edexcel':
        return edexcelALevelBiologyPracticals;
      case 'ocr':
        return ocrALevelBiologyPracticals;
    }
  }

  return [];
}

/**
 * Get a specific practical by ID
 */
export function getPracticalById(id: string): Practical | undefined {
  // Search all practicals
  const allPracticals = [
    // GCSE Physics
    ...aqaGcsePhysicsPracticals,
    ...edexcelGcsePhysicsPracticals,
    ...ocrGcsePhysicsPracticals,
    // GCSE Chemistry
    ...aqaGcseChemistryPracticals,
    ...edexcelGcseChemistryPracticals,
    ...ocrGcseChemistryPracticals,
    // A-Level Physics
    ...aqaALevelPhysicsPracticals,
    ...edexcelALevelPhysicsPracticals,
    ...ocrALevelPhysicsPracticals,
    // A-Level Chemistry
    ...aqaALevelChemistryPracticals,
    ...edexcelALevelChemistryPracticals,
    ...ocrALevelChemistryPracticals,
    // GCSE Biology
    ...aqaGcseBiologyPracticals,
    ...edexcelGcseBiologyPracticals,
    ...ocrGcseBiologyPracticals,
    // A-Level Biology
    ...aqaALevelBiologyPracticals,
    ...edexcelALevelBiologyPracticals,
    ...ocrALevelBiologyPracticals,
  ];

  return allPracticals.find((p) => p.id === id);
}

/**
 * Check if a subject has required practicals
 */
export function subjectHasPracticals(subject: Subject): boolean {
  return subject === 'physics' || subject === 'chemistry' || subject === 'biology';
}

/**
 * Get the count of practicals for a subject/exam board/level combination
 */
export function getPracticalsCount(
  subject: Subject,
  examBoard: ExamBoard,
  level: QualificationLevel
): number {
  return getPracticals(subject, examBoard, level).length;
}
