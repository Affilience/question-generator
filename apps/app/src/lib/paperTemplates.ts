import { PaperTemplatePreset, ExamBoard, QualificationLevel, Subject } from '@/types';

/**
 * Pre-configured paper templates matching real exam structures
 * These templates provide quick-start options for common paper formats
 */

// ============================================================================
// GCSE MATHEMATICS TEMPLATES
// ============================================================================

export const gcseMatheTemplates: PaperTemplatePreset[] = [
  {
    id: 'aqa-gcse-maths-paper1',
    name: 'Paper 1 (Non-Calculator)',
    description: 'AQA GCSE Maths Paper 1 style - no calculator allowed',
    examBoard: 'aqa',
    qualification: 'gcse',
    subject: 'maths',
    totalMarks: 80,
    duration: 90,
    sections: [
      {
        name: 'Section A',
        instructions: 'Answer ALL questions. Show all your working.',
        questionTypes: ['short-answer', 'calculation'],
        targetMarks: 40,
        order: 0,
      },
      {
        name: 'Section B',
        instructions: 'Answer ALL questions. You must show detailed working.',
        questionTypes: ['calculation', 'explain', 'extended'],
        targetMarks: 40,
        order: 1,
      },
    ],
    calculator: false,
    formulaSheet: true,
  },
  {
    id: 'aqa-gcse-maths-paper2',
    name: 'Paper 2 (Calculator)',
    description: 'AQA GCSE Maths Paper 2 style - calculator allowed',
    examBoard: 'aqa',
    qualification: 'gcse',
    subject: 'maths',
    totalMarks: 80,
    duration: 90,
    sections: [
      {
        name: 'Section A',
        instructions: 'Answer ALL questions. Show all your working.',
        questionTypes: ['short-answer', 'calculation'],
        targetMarks: 40,
        order: 0,
      },
      {
        name: 'Section B',
        instructions: 'Answer ALL questions. You must show detailed working.',
        questionTypes: ['calculation', 'data-analysis', 'extended'],
        targetMarks: 40,
        order: 1,
      },
    ],
    calculator: true,
    formulaSheet: true,
  },
  {
    id: 'edexcel-gcse-maths-paper1',
    name: 'Paper 1 (Non-Calculator)',
    description: 'Edexcel GCSE Maths Paper 1 style - no calculator',
    examBoard: 'edexcel',
    qualification: 'gcse',
    subject: 'maths',
    totalMarks: 80,
    duration: 90,
    sections: [
      {
        name: 'Questions',
        instructions: 'Answer ALL questions. Write your answers in the spaces provided.',
        questionTypes: ['short-answer', 'calculation', 'explain', 'extended'],
        targetMarks: 80,
        order: 0,
      },
    ],
    calculator: false,
    formulaSheet: true,
  },
];

// ============================================================================
// GCSE PHYSICS TEMPLATES
// ============================================================================

export const gcsePhysicsTemplates: PaperTemplatePreset[] = [
  // AQA
  {
    id: 'aqa-gcse-physics-paper1',
    name: 'Paper 1 (Energy, Electricity, Particles, Atomic)',
    description: 'AQA GCSE Physics Paper 1 - Topics 1-4',
    examBoard: 'aqa',
    qualification: 'gcse',
    subject: 'physics',
    totalMarks: 100,
    duration: 105,
    sections: [
      { name: 'Section A', instructions: 'Answer ALL questions. Choose one answer only.', questionTypes: ['multiple-choice'], targetMarks: 15, order: 0 },
      { name: 'Section B', instructions: 'Answer ALL questions in the spaces provided.', questionTypes: ['short-answer', 'calculation', 'explain'], targetMarks: 60, order: 1 },
      { name: 'Section C', instructions: 'Answer ALL questions. Extended writing is required.', questionTypes: ['extended', 'data-analysis'], targetMarks: 25, order: 2 },
    ],
    topicIds: ['physics-energy', 'physics-electricity', 'physics-particle-model', 'physics-atomic-structure'],
    calculator: true,
    formulaSheet: true,
  },
  {
    id: 'aqa-gcse-physics-paper2',
    name: 'Paper 2 (Forces, Waves, Magnetism, Space)',
    description: 'AQA GCSE Physics Paper 2 - Topics 5-8',
    examBoard: 'aqa',
    qualification: 'gcse',
    subject: 'physics',
    totalMarks: 100,
    duration: 105,
    sections: [
      { name: 'Section A', instructions: 'Answer ALL questions. Choose one answer only.', questionTypes: ['multiple-choice'], targetMarks: 15, order: 0 },
      { name: 'Section B', instructions: 'Answer ALL questions in the spaces provided.', questionTypes: ['short-answer', 'calculation', 'explain'], targetMarks: 60, order: 1 },
      { name: 'Section C', instructions: 'Answer ALL questions. Extended writing is required.', questionTypes: ['extended', 'data-analysis'], targetMarks: 25, order: 2 },
    ],
    topicIds: ['physics-forces', 'physics-waves', 'physics-magnetism', 'physics-space'],
    calculator: true,
    formulaSheet: true,
  },
  // Edexcel
  {
    id: 'edexcel-gcse-physics-paper1',
    name: 'Paper 1 (Key Concepts, Motion, Conservation, Waves, Light)',
    description: 'Edexcel GCSE Physics Paper 1',
    examBoard: 'edexcel',
    qualification: 'gcse',
    subject: 'physics',
    totalMarks: 100,
    duration: 105,
    sections: [
      { name: 'Section A', instructions: 'Answer ALL questions. Select one answer.', questionTypes: ['multiple-choice'], targetMarks: 16, order: 0 },
      { name: 'Section B', instructions: 'Answer ALL questions.', questionTypes: ['short-answer', 'calculation', 'explain', 'extended'], targetMarks: 84, order: 1 },
    ],
    calculator: true,
    formulaSheet: true,
  },
  {
    id: 'edexcel-gcse-physics-paper2',
    name: 'Paper 2 (Energy, Electricity, Magnetism, Space, Particle)',
    description: 'Edexcel GCSE Physics Paper 2',
    examBoard: 'edexcel',
    qualification: 'gcse',
    subject: 'physics',
    totalMarks: 100,
    duration: 105,
    sections: [
      { name: 'Section A', instructions: 'Answer ALL questions. Select one answer.', questionTypes: ['multiple-choice'], targetMarks: 16, order: 0 },
      { name: 'Section B', instructions: 'Answer ALL questions.', questionTypes: ['short-answer', 'calculation', 'explain', 'extended'], targetMarks: 84, order: 1 },
    ],
    calculator: true,
    formulaSheet: true,
  },
  // OCR Gateway
  {
    id: 'ocr-gcse-physics-paper1',
    name: 'Paper 1 (Matter, Forces, Electricity, Magnetism, Waves)',
    description: 'OCR Gateway GCSE Physics Paper 1',
    examBoard: 'ocr',
    qualification: 'gcse',
    subject: 'physics',
    totalMarks: 90,
    duration: 90,
    sections: [
      { name: 'Section A', instructions: 'Answer ALL questions.', questionTypes: ['multiple-choice', 'short-answer'], targetMarks: 20, order: 0 },
      { name: 'Section B', instructions: 'Answer ALL questions.', questionTypes: ['short-answer', 'calculation', 'explain', 'extended'], targetMarks: 70, order: 1 },
    ],
    calculator: true,
    formulaSheet: true,
  },
  {
    id: 'ocr-gcse-physics-paper2',
    name: 'Paper 2 (Motion, Energy, Global Challenges)',
    description: 'OCR Gateway GCSE Physics Paper 2',
    examBoard: 'ocr',
    qualification: 'gcse',
    subject: 'physics',
    totalMarks: 90,
    duration: 90,
    sections: [
      { name: 'Section A', instructions: 'Answer ALL questions.', questionTypes: ['multiple-choice', 'short-answer'], targetMarks: 20, order: 0 },
      { name: 'Section B', instructions: 'Answer ALL questions.', questionTypes: ['short-answer', 'calculation', 'explain', 'extended'], targetMarks: 70, order: 1 },
    ],
    calculator: true,
    formulaSheet: true,
  },
];

// ============================================================================
// GCSE CHEMISTRY TEMPLATES
// ============================================================================

export const gcseChemistryTemplates: PaperTemplatePreset[] = [
  // AQA
  {
    id: 'aqa-gcse-chemistry-paper1',
    name: 'Paper 1 (Atomic Structure, Bonding, Quantitative, Chemical Changes, Energy)',
    description: 'AQA GCSE Chemistry Paper 1 - Topics 1-5',
    examBoard: 'aqa',
    qualification: 'gcse',
    subject: 'chemistry',
    totalMarks: 100,
    duration: 105,
    sections: [
      { name: 'Section A', instructions: 'Answer ALL questions. Choose one answer only.', questionTypes: ['multiple-choice'], targetMarks: 15, order: 0 },
      { name: 'Section B', instructions: 'Answer ALL questions in the spaces provided.', questionTypes: ['short-answer', 'calculation', 'explain'], targetMarks: 60, order: 1 },
      { name: 'Section C', instructions: 'Answer ALL questions. Extended writing is required.', questionTypes: ['extended', 'data-analysis'], targetMarks: 25, order: 2 },
    ],
    calculator: true,
    formulaSheet: true,
  },
  {
    id: 'aqa-gcse-chemistry-paper2',
    name: 'Paper 2 (Rates, Organic, Analysis, Atmosphere, Resources)',
    description: 'AQA GCSE Chemistry Paper 2 - Topics 6-10',
    examBoard: 'aqa',
    qualification: 'gcse',
    subject: 'chemistry',
    totalMarks: 100,
    duration: 105,
    sections: [
      { name: 'Section A', instructions: 'Answer ALL questions. Choose one answer only.', questionTypes: ['multiple-choice'], targetMarks: 15, order: 0 },
      { name: 'Section B', instructions: 'Answer ALL questions in the spaces provided.', questionTypes: ['short-answer', 'calculation', 'explain'], targetMarks: 60, order: 1 },
      { name: 'Section C', instructions: 'Answer ALL questions. Extended writing is required.', questionTypes: ['extended', 'data-analysis'], targetMarks: 25, order: 2 },
    ],
    calculator: true,
    formulaSheet: true,
  },
  // Edexcel
  {
    id: 'edexcel-gcse-chemistry-paper1',
    name: 'Paper 1 (Key Concepts, States, Structure, Periodic Table, Acids)',
    description: 'Edexcel GCSE Chemistry Paper 1',
    examBoard: 'edexcel',
    qualification: 'gcse',
    subject: 'chemistry',
    totalMarks: 100,
    duration: 105,
    sections: [
      { name: 'Section A', instructions: 'Answer ALL questions. Select one answer.', questionTypes: ['multiple-choice'], targetMarks: 16, order: 0 },
      { name: 'Section B', instructions: 'Answer ALL questions.', questionTypes: ['short-answer', 'calculation', 'explain', 'extended'], targetMarks: 84, order: 1 },
    ],
    calculator: true,
    formulaSheet: true,
  },
  {
    id: 'edexcel-gcse-chemistry-paper2',
    name: 'Paper 2 (Rates, Equilibria, Fuels, Earth, Atmosphere)',
    description: 'Edexcel GCSE Chemistry Paper 2',
    examBoard: 'edexcel',
    qualification: 'gcse',
    subject: 'chemistry',
    totalMarks: 100,
    duration: 105,
    sections: [
      { name: 'Section A', instructions: 'Answer ALL questions. Select one answer.', questionTypes: ['multiple-choice'], targetMarks: 16, order: 0 },
      { name: 'Section B', instructions: 'Answer ALL questions.', questionTypes: ['short-answer', 'calculation', 'explain', 'extended'], targetMarks: 84, order: 1 },
    ],
    calculator: true,
    formulaSheet: true,
  },
  // OCR Gateway
  {
    id: 'ocr-gcse-chemistry-paper1',
    name: 'Paper 1 (Particles, Elements, Reactions, Predicting)',
    description: 'OCR Gateway GCSE Chemistry Paper 1',
    examBoard: 'ocr',
    qualification: 'gcse',
    subject: 'chemistry',
    totalMarks: 90,
    duration: 90,
    sections: [
      { name: 'Section A', instructions: 'Answer ALL questions.', questionTypes: ['multiple-choice', 'short-answer'], targetMarks: 20, order: 0 },
      { name: 'Section B', instructions: 'Answer ALL questions.', questionTypes: ['short-answer', 'calculation', 'explain', 'extended'], targetMarks: 70, order: 1 },
    ],
    calculator: true,
    formulaSheet: true,
  },
  {
    id: 'ocr-gcse-chemistry-paper2',
    name: 'Paper 2 (Rates, Equilibria, Global Challenges)',
    description: 'OCR Gateway GCSE Chemistry Paper 2',
    examBoard: 'ocr',
    qualification: 'gcse',
    subject: 'chemistry',
    totalMarks: 90,
    duration: 90,
    sections: [
      { name: 'Section A', instructions: 'Answer ALL questions.', questionTypes: ['multiple-choice', 'short-answer'], targetMarks: 20, order: 0 },
      { name: 'Section B', instructions: 'Answer ALL questions.', questionTypes: ['short-answer', 'calculation', 'explain', 'extended'], targetMarks: 70, order: 1 },
    ],
    calculator: true,
    formulaSheet: true,
  },
];

// ============================================================================
// GCSE BIOLOGY TEMPLATES
// ============================================================================

export const gcseBiologyTemplates: PaperTemplatePreset[] = [
  // AQA
  {
    id: 'aqa-gcse-biology-paper1',
    name: 'Paper 1 (Cell Biology, Organisation, Infection, Bioenergetics)',
    description: 'AQA GCSE Biology Paper 1 - Topics 1-4',
    examBoard: 'aqa',
    qualification: 'gcse',
    subject: 'biology',
    totalMarks: 100,
    duration: 105,
    sections: [
      { name: 'Section A', instructions: 'Answer ALL questions. Choose one answer only.', questionTypes: ['multiple-choice'], targetMarks: 15, order: 0 },
      { name: 'Section B', instructions: 'Answer ALL questions in the spaces provided.', questionTypes: ['short-answer', 'explain', 'data-analysis'], targetMarks: 60, order: 1 },
      { name: 'Section C', instructions: 'Answer ALL questions. Extended writing is required.', questionTypes: ['extended'], targetMarks: 25, order: 2 },
    ],
    calculator: true,
    formulaSheet: false,
  },
  {
    id: 'aqa-gcse-biology-paper2',
    name: 'Paper 2 (Homeostasis, Inheritance, Variation, Ecology)',
    description: 'AQA GCSE Biology Paper 2 - Topics 5-7',
    examBoard: 'aqa',
    qualification: 'gcse',
    subject: 'biology',
    totalMarks: 100,
    duration: 105,
    sections: [
      { name: 'Section A', instructions: 'Answer ALL questions. Choose one answer only.', questionTypes: ['multiple-choice'], targetMarks: 15, order: 0 },
      { name: 'Section B', instructions: 'Answer ALL questions in the spaces provided.', questionTypes: ['short-answer', 'explain', 'data-analysis'], targetMarks: 60, order: 1 },
      { name: 'Section C', instructions: 'Answer ALL questions. Extended writing is required.', questionTypes: ['extended'], targetMarks: 25, order: 2 },
    ],
    calculator: true,
    formulaSheet: false,
  },
  // Edexcel
  {
    id: 'edexcel-gcse-biology-paper1',
    name: 'Paper 1 (Key Concepts, Cells, Genetics, Health)',
    description: 'Edexcel GCSE Biology Paper 1',
    examBoard: 'edexcel',
    qualification: 'gcse',
    subject: 'biology',
    totalMarks: 100,
    duration: 105,
    sections: [
      { name: 'Section A', instructions: 'Answer ALL questions. Select one answer.', questionTypes: ['multiple-choice'], targetMarks: 16, order: 0 },
      { name: 'Section B', instructions: 'Answer ALL questions.', questionTypes: ['short-answer', 'explain', 'extended', 'data-analysis'], targetMarks: 84, order: 1 },
    ],
    calculator: true,
    formulaSheet: false,
  },
  {
    id: 'edexcel-gcse-biology-paper2',
    name: 'Paper 2 (Plants, Animal Systems, Ecosystems, Evolution)',
    description: 'Edexcel GCSE Biology Paper 2',
    examBoard: 'edexcel',
    qualification: 'gcse',
    subject: 'biology',
    totalMarks: 100,
    duration: 105,
    sections: [
      { name: 'Section A', instructions: 'Answer ALL questions. Select one answer.', questionTypes: ['multiple-choice'], targetMarks: 16, order: 0 },
      { name: 'Section B', instructions: 'Answer ALL questions.', questionTypes: ['short-answer', 'explain', 'extended', 'data-analysis'], targetMarks: 84, order: 1 },
    ],
    calculator: true,
    formulaSheet: false,
  },
  // OCR Gateway
  {
    id: 'ocr-gcse-biology-paper1',
    name: 'Paper 1 (Cell Biology, Scaling Up, Organism Level)',
    description: 'OCR Gateway GCSE Biology Paper 1',
    examBoard: 'ocr',
    qualification: 'gcse',
    subject: 'biology',
    totalMarks: 90,
    duration: 90,
    sections: [
      { name: 'Section A', instructions: 'Answer ALL questions.', questionTypes: ['multiple-choice', 'short-answer'], targetMarks: 20, order: 0 },
      { name: 'Section B', instructions: 'Answer ALL questions.', questionTypes: ['short-answer', 'explain', 'extended', 'data-analysis'], targetMarks: 70, order: 1 },
    ],
    calculator: true,
    formulaSheet: false,
  },
  {
    id: 'ocr-gcse-biology-paper2',
    name: 'Paper 2 (Ecosystems, Evolution, Global Challenges)',
    description: 'OCR Gateway GCSE Biology Paper 2',
    examBoard: 'ocr',
    qualification: 'gcse',
    subject: 'biology',
    totalMarks: 90,
    duration: 90,
    sections: [
      { name: 'Section A', instructions: 'Answer ALL questions.', questionTypes: ['multiple-choice', 'short-answer'], targetMarks: 20, order: 0 },
      { name: 'Section B', instructions: 'Answer ALL questions.', questionTypes: ['short-answer', 'explain', 'extended', 'data-analysis'], targetMarks: 70, order: 1 },
    ],
    calculator: true,
    formulaSheet: false,
  },
];

// ============================================================================
// GCSE COMBINED SCIENCE TEMPLATES
// ============================================================================

export const gcseCombinedScienceTemplates: PaperTemplatePreset[] = [
  // AQA Combined Science: Trilogy (8464) - 6 papers, 70 marks each, 75 mins each
  {
    id: 'aqa-gcse-combined-science-biology-paper1',
    name: 'Biology Paper 1 (Cell Biology, Organisation, Infection, Bioenergetics)',
    description: 'AQA GCSE Combined Science: Trilogy - Biology Paper 1',
    examBoard: 'aqa',
    qualification: 'gcse',
    subject: 'combined-science',
    totalMarks: 70,
    duration: 75,
    sections: [
      { name: 'Section A', instructions: 'Answer ALL questions. Choose one answer only.', questionTypes: ['multiple-choice'], targetMarks: 10, order: 0 },
      { name: 'Section B', instructions: 'Answer ALL questions in the spaces provided.', questionTypes: ['short-answer', 'explain', 'data-analysis'], targetMarks: 45, order: 1 },
      { name: 'Section C', instructions: 'Answer ALL questions. Extended writing is required.', questionTypes: ['extended'], targetMarks: 15, order: 2 },
    ],
    topicIds: ['combined-biology-cell-biology', 'combined-biology-organisation', 'combined-biology-infection', 'combined-biology-bioenergetics'],
    calculator: true,
    formulaSheet: false,
  },
  {
    id: 'aqa-gcse-combined-science-biology-paper2',
    name: 'Biology Paper 2 (Homeostasis, Inheritance, Variation, Ecology)',
    description: 'AQA GCSE Combined Science: Trilogy - Biology Paper 2',
    examBoard: 'aqa',
    qualification: 'gcse',
    subject: 'combined-science',
    totalMarks: 70,
    duration: 75,
    sections: [
      { name: 'Section A', instructions: 'Answer ALL questions. Choose one answer only.', questionTypes: ['multiple-choice'], targetMarks: 10, order: 0 },
      { name: 'Section B', instructions: 'Answer ALL questions in the spaces provided.', questionTypes: ['short-answer', 'explain', 'data-analysis'], targetMarks: 45, order: 1 },
      { name: 'Section C', instructions: 'Answer ALL questions. Extended writing is required.', questionTypes: ['extended'], targetMarks: 15, order: 2 },
    ],
    topicIds: ['combined-biology-homeostasis', 'combined-biology-inheritance', 'combined-biology-variation', 'combined-biology-ecology'],
    calculator: true,
    formulaSheet: false,
  },
  {
    id: 'aqa-gcse-combined-science-chemistry-paper1',
    name: 'Chemistry Paper 1 (Atomic Structure, Bonding, Quantitative, Chemical Changes, Energy)',
    description: 'AQA GCSE Combined Science: Trilogy - Chemistry Paper 1',
    examBoard: 'aqa',
    qualification: 'gcse',
    subject: 'combined-science',
    totalMarks: 70,
    duration: 75,
    sections: [
      { name: 'Section A', instructions: 'Answer ALL questions. Choose one answer only.', questionTypes: ['multiple-choice'], targetMarks: 10, order: 0 },
      { name: 'Section B', instructions: 'Answer ALL questions in the spaces provided.', questionTypes: ['short-answer', 'calculation', 'explain'], targetMarks: 45, order: 1 },
      { name: 'Section C', instructions: 'Answer ALL questions. Extended writing is required.', questionTypes: ['extended', 'data-analysis'], targetMarks: 15, order: 2 },
    ],
    topicIds: ['combined-chemistry-atomic-structure', 'combined-chemistry-bonding', 'combined-chemistry-quantitative', 'combined-chemistry-chemical-changes', 'combined-chemistry-energy-changes'],
    calculator: true,
    formulaSheet: false,
  },
  {
    id: 'aqa-gcse-combined-science-chemistry-paper2',
    name: 'Chemistry Paper 2 (Rate, Organic, Chemical Analysis, Atmosphere, Resources)',
    description: 'AQA GCSE Combined Science: Trilogy - Chemistry Paper 2',
    examBoard: 'aqa',
    qualification: 'gcse',
    subject: 'combined-science',
    totalMarks: 70,
    duration: 75,
    sections: [
      { name: 'Section A', instructions: 'Answer ALL questions. Choose one answer only.', questionTypes: ['multiple-choice'], targetMarks: 10, order: 0 },
      { name: 'Section B', instructions: 'Answer ALL questions in the spaces provided.', questionTypes: ['short-answer', 'calculation', 'explain'], targetMarks: 45, order: 1 },
      { name: 'Section C', instructions: 'Answer ALL questions. Extended writing is required.', questionTypes: ['extended', 'data-analysis'], targetMarks: 15, order: 2 },
    ],
    topicIds: ['combined-chemistry-rate', 'combined-chemistry-organic', 'combined-chemistry-chemical-analysis', 'combined-chemistry-atmosphere', 'combined-chemistry-using-resources'],
    calculator: true,
    formulaSheet: false,
  },
  {
    id: 'aqa-gcse-combined-science-physics-paper1',
    name: 'Physics Paper 1 (Energy, Electricity, Particle Model, Atomic Structure)',
    description: 'AQA GCSE Combined Science: Trilogy - Physics Paper 1',
    examBoard: 'aqa',
    qualification: 'gcse',
    subject: 'combined-science',
    totalMarks: 70,
    duration: 75,
    sections: [
      { name: 'Section A', instructions: 'Answer ALL questions. Choose one answer only.', questionTypes: ['multiple-choice'], targetMarks: 10, order: 0 },
      { name: 'Section B', instructions: 'Answer ALL questions in the spaces provided.', questionTypes: ['short-answer', 'calculation', 'explain'], targetMarks: 45, order: 1 },
      { name: 'Section C', instructions: 'Answer ALL questions. Extended writing is required.', questionTypes: ['extended', 'data-analysis'], targetMarks: 15, order: 2 },
    ],
    topicIds: ['combined-physics-energy', 'combined-physics-electricity', 'combined-physics-particle-model', 'combined-physics-atomic-structure'],
    calculator: true,
    formulaSheet: true,
  },
  {
    id: 'aqa-gcse-combined-science-physics-paper2',
    name: 'Physics Paper 2 (Forces, Waves, Magnetism)',
    description: 'AQA GCSE Combined Science: Trilogy - Physics Paper 2 (No Space Physics)',
    examBoard: 'aqa',
    qualification: 'gcse',
    subject: 'combined-science',
    totalMarks: 70,
    duration: 75,
    sections: [
      { name: 'Section A', instructions: 'Answer ALL questions. Choose one answer only.', questionTypes: ['multiple-choice'], targetMarks: 10, order: 0 },
      { name: 'Section B', instructions: 'Answer ALL questions in the spaces provided.', questionTypes: ['short-answer', 'calculation', 'explain'], targetMarks: 45, order: 1 },
      { name: 'Section C', instructions: 'Answer ALL questions. Extended writing is required.', questionTypes: ['extended', 'data-analysis'], targetMarks: 15, order: 2 },
    ],
    topicIds: ['combined-physics-forces', 'combined-physics-waves', 'combined-physics-magnetism'],
    calculator: true,
    formulaSheet: true,
  },
  // Edexcel Combined Science (1SC0) - 6 papers
  {
    id: 'edexcel-gcse-combined-science-biology-paper1',
    name: 'Biology Paper 1 (Key Concepts, Cells, Genetics)',
    description: 'Edexcel GCSE Combined Science - Biology Paper 1',
    examBoard: 'edexcel',
    qualification: 'gcse',
    subject: 'combined-science',
    totalMarks: 60,
    duration: 70,
    sections: [
      { name: 'Section A', instructions: 'Answer ALL questions. Select one answer.', questionTypes: ['multiple-choice'], targetMarks: 12, order: 0 },
      { name: 'Section B', instructions: 'Answer ALL questions.', questionTypes: ['short-answer', 'explain', 'extended', 'data-analysis'], targetMarks: 48, order: 1 },
    ],
    calculator: true,
    formulaSheet: false,
  },
  {
    id: 'edexcel-gcse-combined-science-biology-paper2',
    name: 'Biology Paper 2 (Health, Plants, Ecosystems, Evolution)',
    description: 'Edexcel GCSE Combined Science - Biology Paper 2',
    examBoard: 'edexcel',
    qualification: 'gcse',
    subject: 'combined-science',
    totalMarks: 60,
    duration: 70,
    sections: [
      { name: 'Section A', instructions: 'Answer ALL questions. Select one answer.', questionTypes: ['multiple-choice'], targetMarks: 12, order: 0 },
      { name: 'Section B', instructions: 'Answer ALL questions.', questionTypes: ['short-answer', 'explain', 'extended', 'data-analysis'], targetMarks: 48, order: 1 },
    ],
    calculator: true,
    formulaSheet: false,
  },
  {
    id: 'edexcel-gcse-combined-science-chemistry-paper1',
    name: 'Chemistry Paper 1 (Key Concepts, States, Methods, Bonding)',
    description: 'Edexcel GCSE Combined Science - Chemistry Paper 1',
    examBoard: 'edexcel',
    qualification: 'gcse',
    subject: 'combined-science',
    totalMarks: 60,
    duration: 70,
    sections: [
      { name: 'Section A', instructions: 'Answer ALL questions. Select one answer.', questionTypes: ['multiple-choice'], targetMarks: 12, order: 0 },
      { name: 'Section B', instructions: 'Answer ALL questions.', questionTypes: ['short-answer', 'calculation', 'explain', 'extended'], targetMarks: 48, order: 1 },
    ],
    calculator: true,
    formulaSheet: false,
  },
  {
    id: 'edexcel-gcse-combined-science-chemistry-paper2',
    name: 'Chemistry Paper 2 (Acids, Electrolysis, Energy, Rates, Fuels)',
    description: 'Edexcel GCSE Combined Science - Chemistry Paper 2',
    examBoard: 'edexcel',
    qualification: 'gcse',
    subject: 'combined-science',
    totalMarks: 60,
    duration: 70,
    sections: [
      { name: 'Section A', instructions: 'Answer ALL questions. Select one answer.', questionTypes: ['multiple-choice'], targetMarks: 12, order: 0 },
      { name: 'Section B', instructions: 'Answer ALL questions.', questionTypes: ['short-answer', 'calculation', 'explain', 'extended'], targetMarks: 48, order: 1 },
    ],
    calculator: true,
    formulaSheet: false,
  },
  {
    id: 'edexcel-gcse-combined-science-physics-paper1',
    name: 'Physics Paper 1 (Key Concepts, Motion, Energy, Waves, Light)',
    description: 'Edexcel GCSE Combined Science - Physics Paper 1',
    examBoard: 'edexcel',
    qualification: 'gcse',
    subject: 'combined-science',
    totalMarks: 60,
    duration: 70,
    sections: [
      { name: 'Section A', instructions: 'Answer ALL questions. Select one answer.', questionTypes: ['multiple-choice'], targetMarks: 12, order: 0 },
      { name: 'Section B', instructions: 'Answer ALL questions.', questionTypes: ['short-answer', 'calculation', 'explain', 'extended'], targetMarks: 48, order: 1 },
    ],
    calculator: true,
    formulaSheet: true,
  },
  {
    id: 'edexcel-gcse-combined-science-physics-paper2',
    name: 'Physics Paper 2 (Radioactivity, Astronomy, Energy, Electricity, Magnetism)',
    description: 'Edexcel GCSE Combined Science - Physics Paper 2',
    examBoard: 'edexcel',
    qualification: 'gcse',
    subject: 'combined-science',
    totalMarks: 60,
    duration: 70,
    sections: [
      { name: 'Section A', instructions: 'Answer ALL questions. Select one answer.', questionTypes: ['multiple-choice'], targetMarks: 12, order: 0 },
      { name: 'Section B', instructions: 'Answer ALL questions.', questionTypes: ['short-answer', 'calculation', 'explain', 'extended'], targetMarks: 48, order: 1 },
    ],
    calculator: true,
    formulaSheet: true,
  },
  // OCR Gateway Combined Science A (J250) - 6 papers
  {
    id: 'ocr-gcse-combined-science-biology-paper1',
    name: 'Biology Paper 1 (Cell Level Systems)',
    description: 'OCR Gateway GCSE Combined Science A - Biology Paper 1',
    examBoard: 'ocr',
    qualification: 'gcse',
    subject: 'combined-science',
    totalMarks: 70,
    duration: 75,
    sections: [
      { name: 'Section A', instructions: 'Answer ALL questions.', questionTypes: ['multiple-choice', 'short-answer'], targetMarks: 15, order: 0 },
      { name: 'Section B', instructions: 'Answer ALL questions.', questionTypes: ['short-answer', 'explain', 'extended', 'data-analysis'], targetMarks: 55, order: 1 },
    ],
    calculator: true,
    formulaSheet: false,
  },
  {
    id: 'ocr-gcse-combined-science-biology-paper2',
    name: 'Biology Paper 2 (Scaling Up, Organisms, Ecosystems)',
    description: 'OCR Gateway GCSE Combined Science A - Biology Paper 2',
    examBoard: 'ocr',
    qualification: 'gcse',
    subject: 'combined-science',
    totalMarks: 70,
    duration: 75,
    sections: [
      { name: 'Section A', instructions: 'Answer ALL questions.', questionTypes: ['multiple-choice', 'short-answer'], targetMarks: 15, order: 0 },
      { name: 'Section B', instructions: 'Answer ALL questions.', questionTypes: ['short-answer', 'explain', 'extended', 'data-analysis'], targetMarks: 55, order: 1 },
    ],
    calculator: true,
    formulaSheet: false,
  },
  {
    id: 'ocr-gcse-combined-science-chemistry-paper1',
    name: 'Chemistry Paper 1 (Particles, Elements, Chemical Reactions)',
    description: 'OCR Gateway GCSE Combined Science A - Chemistry Paper 1',
    examBoard: 'ocr',
    qualification: 'gcse',
    subject: 'combined-science',
    totalMarks: 70,
    duration: 75,
    sections: [
      { name: 'Section A', instructions: 'Answer ALL questions.', questionTypes: ['multiple-choice', 'short-answer'], targetMarks: 15, order: 0 },
      { name: 'Section B', instructions: 'Answer ALL questions.', questionTypes: ['short-answer', 'calculation', 'explain', 'extended'], targetMarks: 55, order: 1 },
    ],
    calculator: true,
    formulaSheet: false,
  },
  {
    id: 'ocr-gcse-combined-science-chemistry-paper2',
    name: 'Chemistry Paper 2 (Predicting Reactions, Rates, Earth Chemistry)',
    description: 'OCR Gateway GCSE Combined Science A - Chemistry Paper 2',
    examBoard: 'ocr',
    qualification: 'gcse',
    subject: 'combined-science',
    totalMarks: 70,
    duration: 75,
    sections: [
      { name: 'Section A', instructions: 'Answer ALL questions.', questionTypes: ['multiple-choice', 'short-answer'], targetMarks: 15, order: 0 },
      { name: 'Section B', instructions: 'Answer ALL questions.', questionTypes: ['short-answer', 'calculation', 'explain', 'extended'], targetMarks: 55, order: 1 },
    ],
    calculator: true,
    formulaSheet: false,
  },
  {
    id: 'ocr-gcse-combined-science-physics-paper1',
    name: 'Physics Paper 1 (Matter, Forces, Electricity)',
    description: 'OCR Gateway GCSE Combined Science A - Physics Paper 1',
    examBoard: 'ocr',
    qualification: 'gcse',
    subject: 'combined-science',
    totalMarks: 70,
    duration: 75,
    sections: [
      { name: 'Section A', instructions: 'Answer ALL questions.', questionTypes: ['multiple-choice', 'short-answer'], targetMarks: 15, order: 0 },
      { name: 'Section B', instructions: 'Answer ALL questions.', questionTypes: ['short-answer', 'calculation', 'explain', 'extended'], targetMarks: 55, order: 1 },
    ],
    calculator: true,
    formulaSheet: true,
  },
  {
    id: 'ocr-gcse-combined-science-physics-paper2',
    name: 'Physics Paper 2 (Magnetism, Waves, Radioactivity)',
    description: 'OCR Gateway GCSE Combined Science A - Physics Paper 2',
    examBoard: 'ocr',
    qualification: 'gcse',
    subject: 'combined-science',
    totalMarks: 70,
    duration: 75,
    sections: [
      { name: 'Section A', instructions: 'Answer ALL questions.', questionTypes: ['multiple-choice', 'short-answer'], targetMarks: 15, order: 0 },
      { name: 'Section B', instructions: 'Answer ALL questions.', questionTypes: ['short-answer', 'calculation', 'explain', 'extended'], targetMarks: 55, order: 1 },
    ],
    calculator: true,
    formulaSheet: true,
  },
];

// ============================================================================
// A-LEVEL MATHS TEMPLATES
// ============================================================================

export const aLevelMathsTemplates: PaperTemplatePreset[] = [
  // AQA
  {
    id: 'aqa-alevel-maths-paper1',
    name: 'Paper 1 (Pure Mathematics)',
    description: 'AQA A-Level Mathematics Paper 1',
    examBoard: 'aqa',
    qualification: 'a-level',
    subject: 'maths',
    totalMarks: 100,
    duration: 120,
    sections: [
      { name: 'Section A', instructions: 'Answer ALL questions. Show all working.', questionTypes: ['short-answer', 'calculation'], targetMarks: 50, order: 0 },
      { name: 'Section B', instructions: 'Answer ALL questions. Detailed working is required.', questionTypes: ['calculation', 'extended'], targetMarks: 50, order: 1 },
    ],
    calculator: true,
    formulaSheet: true,
  },
  {
    id: 'aqa-alevel-maths-paper2',
    name: 'Paper 2 (Pure and Mechanics)',
    description: 'AQA A-Level Mathematics Paper 2',
    examBoard: 'aqa',
    qualification: 'a-level',
    subject: 'maths',
    totalMarks: 100,
    duration: 120,
    sections: [
      { name: 'Section A', instructions: 'Answer ALL questions.', questionTypes: ['short-answer', 'calculation'], targetMarks: 50, order: 0 },
      { name: 'Section B', instructions: 'Answer ALL questions.', questionTypes: ['calculation', 'extended'], targetMarks: 50, order: 1 },
    ],
    calculator: true,
    formulaSheet: true,
  },
  {
    id: 'aqa-alevel-maths-paper3',
    name: 'Paper 3 (Pure and Statistics)',
    description: 'AQA A-Level Mathematics Paper 3',
    examBoard: 'aqa',
    qualification: 'a-level',
    subject: 'maths',
    totalMarks: 100,
    duration: 120,
    sections: [
      { name: 'Section A', instructions: 'Answer ALL questions.', questionTypes: ['short-answer', 'calculation'], targetMarks: 50, order: 0 },
      { name: 'Section B', instructions: 'Answer ALL questions.', questionTypes: ['calculation', 'data-analysis', 'extended'], targetMarks: 50, order: 1 },
    ],
    calculator: true,
    formulaSheet: true,
  },
  // Edexcel
  {
    id: 'edexcel-alevel-maths-paper1',
    name: 'Paper 1 (Pure Mathematics 1)',
    description: 'Edexcel A-Level Mathematics Paper 1',
    examBoard: 'edexcel',
    qualification: 'a-level',
    subject: 'maths',
    totalMarks: 100,
    duration: 120,
    sections: [
      { name: 'Questions', instructions: 'Answer ALL questions.', questionTypes: ['short-answer', 'calculation', 'extended'], targetMarks: 100, order: 0 },
    ],
    calculator: true,
    formulaSheet: true,
  },
  {
    id: 'edexcel-alevel-maths-paper2',
    name: 'Paper 2 (Pure Mathematics 2)',
    description: 'Edexcel A-Level Mathematics Paper 2',
    examBoard: 'edexcel',
    qualification: 'a-level',
    subject: 'maths',
    totalMarks: 100,
    duration: 120,
    sections: [
      { name: 'Questions', instructions: 'Answer ALL questions.', questionTypes: ['short-answer', 'calculation', 'extended'], targetMarks: 100, order: 0 },
    ],
    calculator: true,
    formulaSheet: true,
  },
  // OCR
  {
    id: 'ocr-alevel-maths-paper1',
    name: 'Paper 1 (Pure Mathematics)',
    description: 'OCR A-Level Mathematics Paper 1',
    examBoard: 'ocr',
    qualification: 'a-level',
    subject: 'maths',
    totalMarks: 100,
    duration: 120,
    sections: [
      { name: 'Questions', instructions: 'Answer ALL questions.', questionTypes: ['short-answer', 'calculation', 'extended'], targetMarks: 100, order: 0 },
    ],
    calculator: true,
    formulaSheet: true,
  },
  {
    id: 'ocr-alevel-maths-paper2',
    name: 'Paper 2 (Pure and Statistics)',
    description: 'OCR A-Level Mathematics Paper 2',
    examBoard: 'ocr',
    qualification: 'a-level',
    subject: 'maths',
    totalMarks: 100,
    duration: 120,
    sections: [
      { name: 'Questions', instructions: 'Answer ALL questions.', questionTypes: ['short-answer', 'calculation', 'data-analysis', 'extended'], targetMarks: 100, order: 0 },
    ],
    calculator: true,
    formulaSheet: true,
  },
];

// ============================================================================
// A-LEVEL PHYSICS TEMPLATES
// ============================================================================

export const aLevelPhysicsTemplates: PaperTemplatePreset[] = [
  // AQA
  {
    id: 'aqa-alevel-physics-paper1',
    name: 'Paper 1 (Particles, Radiation, Mechanics, Materials, Electricity)',
    description: 'AQA A-Level Physics Paper 1',
    examBoard: 'aqa',
    qualification: 'a-level',
    subject: 'physics',
    totalMarks: 85,
    duration: 120,
    sections: [
      { name: 'Section A', instructions: 'Answer ALL questions.', questionTypes: ['short-answer', 'calculation', 'explain'], targetMarks: 55, order: 0 },
      { name: 'Section B', instructions: 'Answer ALL questions. Extended writing required.', questionTypes: ['extended', 'data-analysis'], targetMarks: 30, order: 1 },
    ],
    calculator: true,
    formulaSheet: true,
  },
  {
    id: 'aqa-alevel-physics-paper2',
    name: 'Paper 2 (Thermal, Fields, Nuclear)',
    description: 'AQA A-Level Physics Paper 2',
    examBoard: 'aqa',
    qualification: 'a-level',
    subject: 'physics',
    totalMarks: 85,
    duration: 120,
    sections: [
      { name: 'Section A', instructions: 'Answer ALL questions.', questionTypes: ['short-answer', 'calculation', 'explain'], targetMarks: 55, order: 0 },
      { name: 'Section B', instructions: 'Answer ALL questions. Extended writing required.', questionTypes: ['extended', 'data-analysis'], targetMarks: 30, order: 1 },
    ],
    calculator: true,
    formulaSheet: true,
  },
  {
    id: 'aqa-alevel-physics-paper3',
    name: 'Paper 3 (Practical Skills and Data Analysis)',
    description: 'AQA A-Level Physics Paper 3',
    examBoard: 'aqa',
    qualification: 'a-level',
    subject: 'physics',
    totalMarks: 80,
    duration: 120,
    sections: [
      { name: 'Section A', instructions: 'Answer ALL questions.', questionTypes: ['calculation', 'data-analysis', 'explain'], targetMarks: 45, order: 0 },
      { name: 'Section B', instructions: 'Answer ALL questions.', questionTypes: ['extended', 'data-analysis'], targetMarks: 35, order: 1 },
    ],
    calculator: true,
    formulaSheet: true,
  },
  // Edexcel
  {
    id: 'edexcel-alevel-physics-paper1',
    name: 'Paper 1 (Advanced Physics I)',
    description: 'Edexcel A-Level Physics Paper 1',
    examBoard: 'edexcel',
    qualification: 'a-level',
    subject: 'physics',
    totalMarks: 90,
    duration: 105,
    sections: [
      { name: 'Questions', instructions: 'Answer ALL questions.', questionTypes: ['multiple-choice', 'short-answer', 'calculation', 'extended'], targetMarks: 90, order: 0 },
    ],
    calculator: true,
    formulaSheet: true,
  },
  {
    id: 'edexcel-alevel-physics-paper2',
    name: 'Paper 2 (Advanced Physics II)',
    description: 'Edexcel A-Level Physics Paper 2',
    examBoard: 'edexcel',
    qualification: 'a-level',
    subject: 'physics',
    totalMarks: 90,
    duration: 105,
    sections: [
      { name: 'Questions', instructions: 'Answer ALL questions.', questionTypes: ['multiple-choice', 'short-answer', 'calculation', 'extended'], targetMarks: 90, order: 0 },
    ],
    calculator: true,
    formulaSheet: true,
  },
  // OCR A
  {
    id: 'ocr-alevel-physics-paper1',
    name: 'Paper 1 (Modelling Physics)',
    description: 'OCR A-Level Physics A Paper 1',
    examBoard: 'ocr',
    qualification: 'a-level',
    subject: 'physics',
    totalMarks: 100,
    duration: 135,
    sections: [
      { name: 'Questions', instructions: 'Answer ALL questions.', questionTypes: ['multiple-choice', 'short-answer', 'calculation', 'extended'], targetMarks: 100, order: 0 },
    ],
    calculator: true,
    formulaSheet: true,
  },
  {
    id: 'ocr-alevel-physics-paper2',
    name: 'Paper 2 (Exploring Physics)',
    description: 'OCR A-Level Physics A Paper 2',
    examBoard: 'ocr',
    qualification: 'a-level',
    subject: 'physics',
    totalMarks: 100,
    duration: 135,
    sections: [
      { name: 'Questions', instructions: 'Answer ALL questions.', questionTypes: ['multiple-choice', 'short-answer', 'calculation', 'extended'], targetMarks: 100, order: 0 },
    ],
    calculator: true,
    formulaSheet: true,
  },
];

// ============================================================================
// A-LEVEL CHEMISTRY TEMPLATES
// ============================================================================

export const aLevelChemistryTemplates: PaperTemplatePreset[] = [
  // AQA
  {
    id: 'aqa-alevel-chemistry-paper1',
    name: 'Paper 1 (Physical and Inorganic Chemistry)',
    description: 'AQA A-Level Chemistry Paper 1',
    examBoard: 'aqa',
    qualification: 'a-level',
    subject: 'chemistry',
    totalMarks: 105,
    duration: 120,
    sections: [
      { name: 'Section A', instructions: 'Answer ALL questions.', questionTypes: ['short-answer', 'calculation', 'explain'], targetMarks: 65, order: 0 },
      { name: 'Section B', instructions: 'Answer ALL questions. Extended writing required.', questionTypes: ['extended', 'data-analysis'], targetMarks: 40, order: 1 },
    ],
    calculator: true,
    formulaSheet: true,
  },
  {
    id: 'aqa-alevel-chemistry-paper2',
    name: 'Paper 2 (Physical and Organic Chemistry)',
    description: 'AQA A-Level Chemistry Paper 2',
    examBoard: 'aqa',
    qualification: 'a-level',
    subject: 'chemistry',
    totalMarks: 105,
    duration: 120,
    sections: [
      { name: 'Section A', instructions: 'Answer ALL questions.', questionTypes: ['short-answer', 'calculation', 'explain'], targetMarks: 65, order: 0 },
      { name: 'Section B', instructions: 'Answer ALL questions. Extended writing required.', questionTypes: ['extended', 'data-analysis'], targetMarks: 40, order: 1 },
    ],
    calculator: true,
    formulaSheet: true,
  },
  // Edexcel
  {
    id: 'edexcel-alevel-chemistry-paper1',
    name: 'Paper 1 (Advanced Inorganic and Physical)',
    description: 'Edexcel A-Level Chemistry Paper 1',
    examBoard: 'edexcel',
    qualification: 'a-level',
    subject: 'chemistry',
    totalMarks: 90,
    duration: 105,
    sections: [
      { name: 'Questions', instructions: 'Answer ALL questions.', questionTypes: ['multiple-choice', 'short-answer', 'calculation', 'extended'], targetMarks: 90, order: 0 },
    ],
    calculator: true,
    formulaSheet: true,
  },
  {
    id: 'edexcel-alevel-chemistry-paper2',
    name: 'Paper 2 (Advanced Organic and Physical)',
    description: 'Edexcel A-Level Chemistry Paper 2',
    examBoard: 'edexcel',
    qualification: 'a-level',
    subject: 'chemistry',
    totalMarks: 90,
    duration: 105,
    sections: [
      { name: 'Questions', instructions: 'Answer ALL questions.', questionTypes: ['multiple-choice', 'short-answer', 'calculation', 'extended'], targetMarks: 90, order: 0 },
    ],
    calculator: true,
    formulaSheet: true,
  },
  // OCR A
  {
    id: 'ocr-alevel-chemistry-paper1',
    name: 'Paper 1 (Periodic Table and Energy)',
    description: 'OCR A-Level Chemistry A Paper 1',
    examBoard: 'ocr',
    qualification: 'a-level',
    subject: 'chemistry',
    totalMarks: 100,
    duration: 135,
    sections: [
      { name: 'Questions', instructions: 'Answer ALL questions.', questionTypes: ['multiple-choice', 'short-answer', 'calculation', 'extended'], targetMarks: 100, order: 0 },
    ],
    calculator: true,
    formulaSheet: true,
  },
  {
    id: 'ocr-alevel-chemistry-paper2',
    name: 'Paper 2 (Synthesis and Analytical)',
    description: 'OCR A-Level Chemistry A Paper 2',
    examBoard: 'ocr',
    qualification: 'a-level',
    subject: 'chemistry',
    totalMarks: 100,
    duration: 135,
    sections: [
      { name: 'Questions', instructions: 'Answer ALL questions.', questionTypes: ['multiple-choice', 'short-answer', 'calculation', 'extended'], targetMarks: 100, order: 0 },
    ],
    calculator: true,
    formulaSheet: true,
  },
];

// ============================================================================
// A-LEVEL BIOLOGY TEMPLATES
// ============================================================================

export const aLevelBiologyTemplates: PaperTemplatePreset[] = [
  // AQA
  {
    id: 'aqa-alevel-biology-paper1',
    name: 'Paper 1 (Biological Molecules, Cells, Exchange)',
    description: 'AQA A-Level Biology Paper 1',
    examBoard: 'aqa',
    qualification: 'a-level',
    subject: 'biology',
    totalMarks: 91,
    duration: 120,
    sections: [
      { name: 'Section A', instructions: 'Answer ALL questions.', questionTypes: ['short-answer', 'explain', 'calculation'], targetMarks: 56, order: 0 },
      { name: 'Section B', instructions: 'Answer ALL questions. Extended writing required.', questionTypes: ['extended', 'data-analysis'], targetMarks: 35, order: 1 },
    ],
    calculator: true,
    formulaSheet: false,
  },
  {
    id: 'aqa-alevel-biology-paper2',
    name: 'Paper 2 (Genetics, Energy, Ecosystems)',
    description: 'AQA A-Level Biology Paper 2',
    examBoard: 'aqa',
    qualification: 'a-level',
    subject: 'biology',
    totalMarks: 91,
    duration: 120,
    sections: [
      { name: 'Section A', instructions: 'Answer ALL questions.', questionTypes: ['short-answer', 'explain', 'calculation'], targetMarks: 56, order: 0 },
      { name: 'Section B', instructions: 'Answer ALL questions. Extended writing required.', questionTypes: ['extended', 'data-analysis'], targetMarks: 35, order: 1 },
    ],
    calculator: true,
    formulaSheet: false,
  },
  // Edexcel
  {
    id: 'edexcel-alevel-biology-paper1',
    name: 'Paper 1 (Lifestyle, Transport, Genes)',
    description: 'Edexcel A-Level Biology A Paper 1',
    examBoard: 'edexcel',
    qualification: 'a-level',
    subject: 'biology',
    totalMarks: 90,
    duration: 105,
    sections: [
      { name: 'Questions', instructions: 'Answer ALL questions.', questionTypes: ['multiple-choice', 'short-answer', 'explain', 'extended'], targetMarks: 90, order: 0 },
    ],
    calculator: true,
    formulaSheet: false,
  },
  {
    id: 'edexcel-alevel-biology-paper2',
    name: 'Paper 2 (Energy, Environment, Microbiology)',
    description: 'Edexcel A-Level Biology A Paper 2',
    examBoard: 'edexcel',
    qualification: 'a-level',
    subject: 'biology',
    totalMarks: 90,
    duration: 105,
    sections: [
      { name: 'Questions', instructions: 'Answer ALL questions.', questionTypes: ['multiple-choice', 'short-answer', 'explain', 'extended'], targetMarks: 90, order: 0 },
    ],
    calculator: true,
    formulaSheet: false,
  },
  // OCR A
  {
    id: 'ocr-alevel-biology-paper1',
    name: 'Paper 1 (Biological Processes)',
    description: 'OCR A-Level Biology A Paper 1',
    examBoard: 'ocr',
    qualification: 'a-level',
    subject: 'biology',
    totalMarks: 100,
    duration: 135,
    sections: [
      { name: 'Questions', instructions: 'Answer ALL questions.', questionTypes: ['multiple-choice', 'short-answer', 'explain', 'extended'], targetMarks: 100, order: 0 },
    ],
    calculator: true,
    formulaSheet: false,
  },
  {
    id: 'ocr-alevel-biology-paper2',
    name: 'Paper 2 (Biological Diversity)',
    description: 'OCR A-Level Biology A Paper 2',
    examBoard: 'ocr',
    qualification: 'a-level',
    subject: 'biology',
    totalMarks: 100,
    duration: 135,
    sections: [
      { name: 'Questions', instructions: 'Answer ALL questions.', questionTypes: ['multiple-choice', 'short-answer', 'explain', 'extended'], targetMarks: 100, order: 0 },
    ],
    calculator: true,
    formulaSheet: false,
  },
];

// ============================================================================
// QUICK PRACTICE TEMPLATES (Generic)
// ============================================================================

export const quickPracticeTemplates: PaperTemplatePreset[] = [
  { id: 'quick-20', name: 'Quick Practice (20 marks)', description: '20-minute focused practice session', examBoard: 'aqa', qualification: 'gcse', subject: 'maths', totalMarks: 20, duration: 20, sections: [{ name: 'Questions', instructions: 'Answer ALL questions.', questionTypes: ['short-answer', 'calculation'], targetMarks: 20, order: 0 }], calculator: true, formulaSheet: true },
  { id: 'quick-40', name: 'Medium Practice (40 marks)', description: '45-minute practice session', examBoard: 'aqa', qualification: 'gcse', subject: 'maths', totalMarks: 40, duration: 45, sections: [{ name: 'Section A', instructions: 'Answer ALL questions.', questionTypes: ['short-answer', 'calculation'], targetMarks: 25, order: 0 }, { name: 'Section B', instructions: 'Answer ALL questions.', questionTypes: ['explain', 'extended'], targetMarks: 15, order: 1 }], calculator: true, formulaSheet: true },
];

// ============================================================================
// COMPUTER SCIENCE TEMPLATES
// ============================================================================

export const gcseComputerScienceTemplates: PaperTemplatePreset[] = [
  // AQA
  { id: 'aqa-gcse-cs-paper1', name: 'Paper 1 (Computational Thinking)', description: 'AQA GCSE Computer Science Paper 1', examBoard: 'aqa', qualification: 'gcse', subject: 'computer-science', totalMarks: 80, duration: 90, sections: [{ name: 'Questions', instructions: 'Answer ALL questions.', questionTypes: ['short-answer', 'explain', 'calculation', 'extended'], targetMarks: 80, order: 0 }], calculator: false, formulaSheet: false },
  { id: 'aqa-gcse-cs-paper2', name: 'Paper 2 (Written Assessment)', description: 'AQA GCSE Computer Science Paper 2', examBoard: 'aqa', qualification: 'gcse', subject: 'computer-science', totalMarks: 80, duration: 90, sections: [{ name: 'Questions', instructions: 'Answer ALL questions.', questionTypes: ['short-answer', 'explain', 'extended'], targetMarks: 80, order: 0 }], calculator: false, formulaSheet: false },
  // OCR
  { id: 'ocr-gcse-cs-paper1', name: 'Paper 1 (Computer Systems)', description: 'OCR GCSE Computer Science J277/01', examBoard: 'ocr', qualification: 'gcse', subject: 'computer-science', totalMarks: 80, duration: 90, sections: [{ name: 'Questions', instructions: 'Answer ALL questions.', questionTypes: ['short-answer', 'explain', 'extended'], targetMarks: 80, order: 0 }], calculator: false, formulaSheet: false },
  { id: 'ocr-gcse-cs-paper2', name: 'Paper 2 (Computational Thinking)', description: 'OCR GCSE Computer Science J277/02', examBoard: 'ocr', qualification: 'gcse', subject: 'computer-science', totalMarks: 80, duration: 90, sections: [{ name: 'Questions', instructions: 'Answer ALL questions.', questionTypes: ['short-answer', 'calculation', 'extended'], targetMarks: 80, order: 0 }], calculator: false, formulaSheet: false },
  // Edexcel
  { id: 'edexcel-gcse-cs-paper1', name: 'Paper 1 (Principles of Computer Science)', description: 'Edexcel GCSE Computer Science Paper 1', examBoard: 'edexcel', qualification: 'gcse', subject: 'computer-science', totalMarks: 75, duration: 90, sections: [{ name: 'Questions', instructions: 'Answer ALL questions.', questionTypes: ['short-answer', 'explain', 'extended'], targetMarks: 75, order: 0 }], calculator: false, formulaSheet: false },
  { id: 'edexcel-gcse-cs-paper2', name: 'Paper 2 (Application of Computational Thinking)', description: 'Edexcel GCSE Computer Science Paper 2', examBoard: 'edexcel', qualification: 'gcse', subject: 'computer-science', totalMarks: 75, duration: 120, sections: [{ name: 'Questions', instructions: 'Answer ALL questions.', questionTypes: ['short-answer', 'calculation', 'extended'], targetMarks: 75, order: 0 }], calculator: false, formulaSheet: false },
];

export const aLevelComputerScienceTemplates: PaperTemplatePreset[] = [
  // AQA
  { id: 'aqa-alevel-cs-paper1', name: 'Paper 1 (On-Screen Examination)', description: 'AQA A-Level Computer Science Paper 1', examBoard: 'aqa', qualification: 'a-level', subject: 'computer-science', totalMarks: 100, duration: 150, sections: [{ name: 'Questions', instructions: 'Answer ALL questions.', questionTypes: ['short-answer', 'calculation', 'explain', 'extended'], targetMarks: 100, order: 0 }], calculator: false, formulaSheet: false },
  { id: 'aqa-alevel-cs-paper2', name: 'Paper 2 (Written Examination)', description: 'AQA A-Level Computer Science Paper 2', examBoard: 'aqa', qualification: 'a-level', subject: 'computer-science', totalMarks: 100, duration: 150, sections: [{ name: 'Questions', instructions: 'Answer ALL questions.', questionTypes: ['short-answer', 'explain', 'extended'], targetMarks: 100, order: 0 }], calculator: false, formulaSheet: false },
  // OCR
  { id: 'ocr-alevel-cs-paper1', name: 'Paper 1 (Computer Systems)', description: 'OCR A-Level Computer Science H446/01', examBoard: 'ocr', qualification: 'a-level', subject: 'computer-science', totalMarks: 140, duration: 150, sections: [{ name: 'Questions', instructions: 'Answer ALL questions.', questionTypes: ['short-answer', 'explain', 'extended'], targetMarks: 140, order: 0 }], calculator: false, formulaSheet: false },
  { id: 'ocr-alevel-cs-paper2', name: 'Paper 2 (Algorithms and Programming)', description: 'OCR A-Level Computer Science H446/02', examBoard: 'ocr', qualification: 'a-level', subject: 'computer-science', totalMarks: 140, duration: 150, sections: [{ name: 'Questions', instructions: 'Answer ALL questions.', questionTypes: ['short-answer', 'calculation', 'extended'], targetMarks: 140, order: 0 }], calculator: false, formulaSheet: false },
];

// ============================================================================
// ECONOMICS TEMPLATES
// ============================================================================

export const gcseEconomicsTemplates: PaperTemplatePreset[] = [
  // AQA (only board offering GCSE Economics)
  { id: 'aqa-gcse-economics-paper1', name: 'Paper 1 (How Markets Work)', description: 'AQA GCSE Economics Paper 1', examBoard: 'aqa', qualification: 'gcse', subject: 'economics', totalMarks: 80, duration: 105, sections: [{ name: 'Section A', instructions: 'Answer ALL questions.', questionTypes: ['multiple-choice'], targetMarks: 20, order: 0 }, { name: 'Section B', instructions: 'Answer ALL questions.', questionTypes: ['short-answer', 'explain', 'data-analysis', 'extended'], targetMarks: 60, order: 1 }], calculator: true, formulaSheet: false },
  { id: 'aqa-gcse-economics-paper2', name: 'Paper 2 (How the Economy Works)', description: 'AQA GCSE Economics Paper 2', examBoard: 'aqa', qualification: 'gcse', subject: 'economics', totalMarks: 80, duration: 105, sections: [{ name: 'Section A', instructions: 'Answer ALL questions.', questionTypes: ['multiple-choice'], targetMarks: 20, order: 0 }, { name: 'Section B', instructions: 'Answer ALL questions.', questionTypes: ['short-answer', 'explain', 'data-analysis', 'extended'], targetMarks: 60, order: 1 }], calculator: true, formulaSheet: false },
  // OCR
  { id: 'ocr-gcse-economics-paper1', name: 'Paper 1 (Introduction to Economics)', description: 'OCR GCSE Economics Paper 1', examBoard: 'ocr', qualification: 'gcse', subject: 'economics', totalMarks: 80, duration: 90, sections: [{ name: 'Questions', instructions: 'Answer ALL questions.', questionTypes: ['short-answer', 'explain', 'data-analysis', 'extended'], targetMarks: 80, order: 0 }], calculator: true, formulaSheet: false },
  { id: 'ocr-gcse-economics-paper2', name: 'Paper 2 (National and International Economics)', description: 'OCR GCSE Economics Paper 2', examBoard: 'ocr', qualification: 'gcse', subject: 'economics', totalMarks: 80, duration: 90, sections: [{ name: 'Questions', instructions: 'Answer ALL questions.', questionTypes: ['short-answer', 'explain', 'data-analysis', 'extended'], targetMarks: 80, order: 0 }], calculator: true, formulaSheet: false },
];

export const aLevelEconomicsTemplates: PaperTemplatePreset[] = [
  // AQA
  { id: 'aqa-alevel-economics-paper1', name: 'Paper 1 (Markets and Market Failure)', description: 'AQA A-Level Economics Paper 1', examBoard: 'aqa', qualification: 'a-level', subject: 'economics', totalMarks: 80, duration: 120, sections: [{ name: 'Section A', instructions: 'Answer the compulsory data response question.', questionTypes: ['data-analysis', 'explain'], targetMarks: 40, order: 0 }, { name: 'Section B', instructions: 'Answer ONE essay question.', questionTypes: ['extended'], targetMarks: 40, order: 1 }], calculator: true, formulaSheet: false },
  { id: 'aqa-alevel-economics-paper2', name: 'Paper 2 (National and International Economy)', description: 'AQA A-Level Economics Paper 2', examBoard: 'aqa', qualification: 'a-level', subject: 'economics', totalMarks: 80, duration: 120, sections: [{ name: 'Section A', instructions: 'Answer the compulsory data response question.', questionTypes: ['data-analysis', 'explain'], targetMarks: 40, order: 0 }, { name: 'Section B', instructions: 'Answer ONE essay question.', questionTypes: ['extended'], targetMarks: 40, order: 1 }], calculator: true, formulaSheet: false },
  // Edexcel
  { id: 'edexcel-alevel-economics-paper1', name: 'Paper 1 (Markets and Business Behaviour)', description: 'Edexcel A-Level Economics A Paper 1', examBoard: 'edexcel', qualification: 'a-level', subject: 'economics', totalMarks: 100, duration: 120, sections: [{ name: 'Section A', instructions: 'Answer ALL questions.', questionTypes: ['multiple-choice'], targetMarks: 25, order: 0 }, { name: 'Section B', instructions: 'Answer ALL questions.', questionTypes: ['data-analysis', 'explain', 'extended'], targetMarks: 75, order: 1 }], calculator: true, formulaSheet: false },
  { id: 'edexcel-alevel-economics-paper2', name: 'Paper 2 (The National and Global Economy)', description: 'Edexcel A-Level Economics A Paper 2', examBoard: 'edexcel', qualification: 'a-level', subject: 'economics', totalMarks: 100, duration: 120, sections: [{ name: 'Section A', instructions: 'Answer ALL questions.', questionTypes: ['multiple-choice'], targetMarks: 25, order: 0 }, { name: 'Section B', instructions: 'Answer ALL questions.', questionTypes: ['data-analysis', 'explain', 'extended'], targetMarks: 75, order: 1 }], calculator: true, formulaSheet: false },
  // OCR
  { id: 'ocr-alevel-economics-paper1', name: 'Paper 1 (Microeconomics)', description: 'OCR A-Level Economics H460/01', examBoard: 'ocr', qualification: 'a-level', subject: 'economics', totalMarks: 80, duration: 120, sections: [{ name: 'Questions', instructions: 'Answer ALL questions.', questionTypes: ['short-answer', 'explain', 'data-analysis', 'extended'], targetMarks: 80, order: 0 }], calculator: true, formulaSheet: false },
  { id: 'ocr-alevel-economics-paper2', name: 'Paper 2 (Macroeconomics)', description: 'OCR A-Level Economics H460/02', examBoard: 'ocr', qualification: 'a-level', subject: 'economics', totalMarks: 80, duration: 120, sections: [{ name: 'Questions', instructions: 'Answer ALL questions.', questionTypes: ['short-answer', 'explain', 'data-analysis', 'extended'], targetMarks: 80, order: 0 }], calculator: true, formulaSheet: false },
];

// ============================================================================
// BUSINESS TEMPLATES
// ============================================================================

export const gcseBusinessTemplates: PaperTemplatePreset[] = [
  // AQA
  { id: 'aqa-gcse-business-paper1', name: 'Paper 1 (Influences of Operations and HRM)', description: 'AQA GCSE Business Paper 1', examBoard: 'aqa', qualification: 'gcse', subject: 'business', totalMarks: 90, duration: 105, sections: [{ name: 'Section A', instructions: 'Answer ALL questions.', questionTypes: ['multiple-choice', 'short-answer'], targetMarks: 20, order: 0 }, { name: 'Section B', instructions: 'Answer ALL questions.', questionTypes: ['short-answer', 'explain', 'data-analysis', 'extended'], targetMarks: 70, order: 1 }], calculator: true, formulaSheet: false },
  { id: 'aqa-gcse-business-paper2', name: 'Paper 2 (Influences of Marketing and Finance)', description: 'AQA GCSE Business Paper 2', examBoard: 'aqa', qualification: 'gcse', subject: 'business', totalMarks: 90, duration: 105, sections: [{ name: 'Section A', instructions: 'Answer ALL questions.', questionTypes: ['multiple-choice', 'short-answer'], targetMarks: 20, order: 0 }, { name: 'Section B', instructions: 'Answer ALL questions.', questionTypes: ['short-answer', 'explain', 'data-analysis', 'extended'], targetMarks: 70, order: 1 }], calculator: true, formulaSheet: false },
  // Edexcel
  { id: 'edexcel-gcse-business-paper1', name: 'Paper 1 (Investigating Small Business)', description: 'Edexcel GCSE Business Paper 1', examBoard: 'edexcel', qualification: 'gcse', subject: 'business', totalMarks: 90, duration: 90, sections: [{ name: 'Questions', instructions: 'Answer ALL questions.', questionTypes: ['short-answer', 'explain', 'calculation', 'extended'], targetMarks: 90, order: 0 }], calculator: true, formulaSheet: false },
  { id: 'edexcel-gcse-business-paper2', name: 'Paper 2 (Building a Business)', description: 'Edexcel GCSE Business Paper 2', examBoard: 'edexcel', qualification: 'gcse', subject: 'business', totalMarks: 90, duration: 90, sections: [{ name: 'Questions', instructions: 'Answer ALL questions.', questionTypes: ['short-answer', 'explain', 'calculation', 'extended'], targetMarks: 90, order: 0 }], calculator: true, formulaSheet: false },
  // OCR
  { id: 'ocr-gcse-business-paper1', name: 'Paper 1 (Business Activity)', description: 'OCR GCSE Business J204/01', examBoard: 'ocr', qualification: 'gcse', subject: 'business', totalMarks: 80, duration: 90, sections: [{ name: 'Questions', instructions: 'Answer ALL questions.', questionTypes: ['short-answer', 'explain', 'data-analysis', 'extended'], targetMarks: 80, order: 0 }], calculator: true, formulaSheet: false },
  { id: 'ocr-gcse-business-paper2', name: 'Paper 2 (Business Decisions)', description: 'OCR GCSE Business J204/02', examBoard: 'ocr', qualification: 'gcse', subject: 'business', totalMarks: 80, duration: 90, sections: [{ name: 'Questions', instructions: 'Answer ALL questions.', questionTypes: ['short-answer', 'explain', 'data-analysis', 'extended'], targetMarks: 80, order: 0 }], calculator: true, formulaSheet: false },
];

export const aLevelBusinessTemplates: PaperTemplatePreset[] = [
  // AQA
  { id: 'aqa-alevel-business-paper1', name: 'Paper 1 (Business 1)', description: 'AQA A-Level Business Paper 1', examBoard: 'aqa', qualification: 'a-level', subject: 'business', totalMarks: 100, duration: 120, sections: [{ name: 'Section A', instructions: 'Answer ALL questions.', questionTypes: ['multiple-choice'], targetMarks: 15, order: 0 }, { name: 'Section B', instructions: 'Answer ALL questions.', questionTypes: ['short-answer', 'explain', 'extended'], targetMarks: 35, order: 1 }, { name: 'Section C', instructions: 'Answer ONE essay question.', questionTypes: ['extended'], targetMarks: 50, order: 2 }], calculator: true, formulaSheet: false },
  { id: 'aqa-alevel-business-paper2', name: 'Paper 2 (Business 2)', description: 'AQA A-Level Business Paper 2', examBoard: 'aqa', qualification: 'a-level', subject: 'business', totalMarks: 100, duration: 120, sections: [{ name: 'Section A', instructions: 'Answer ALL questions.', questionTypes: ['multiple-choice'], targetMarks: 15, order: 0 }, { name: 'Section B', instructions: 'Answer ALL questions.', questionTypes: ['short-answer', 'explain', 'extended'], targetMarks: 35, order: 1 }, { name: 'Section C', instructions: 'Answer ONE essay question.', questionTypes: ['extended'], targetMarks: 50, order: 2 }], calculator: true, formulaSheet: false },
  // Edexcel
  { id: 'edexcel-alevel-business-paper1', name: 'Paper 1 (Marketing, People and Global Business)', description: 'Edexcel A-Level Business Paper 1', examBoard: 'edexcel', qualification: 'a-level', subject: 'business', totalMarks: 100, duration: 120, sections: [{ name: 'Section A', instructions: 'Answer ALL questions.', questionTypes: ['short-answer', 'explain'], targetMarks: 35, order: 0 }, { name: 'Section B', instructions: 'Answer ALL questions.', questionTypes: ['data-analysis', 'extended'], targetMarks: 65, order: 1 }], calculator: true, formulaSheet: false },
  { id: 'edexcel-alevel-business-paper2', name: 'Paper 2 (Business Activities, Decisions and Strategy)', description: 'Edexcel A-Level Business Paper 2', examBoard: 'edexcel', qualification: 'a-level', subject: 'business', totalMarks: 100, duration: 120, sections: [{ name: 'Section A', instructions: 'Answer ALL questions.', questionTypes: ['short-answer', 'explain'], targetMarks: 35, order: 0 }, { name: 'Section B', instructions: 'Answer ALL questions.', questionTypes: ['data-analysis', 'extended'], targetMarks: 65, order: 1 }], calculator: true, formulaSheet: false },
  // OCR
  { id: 'ocr-alevel-business-paper1', name: 'Paper 1 (Operating in a Local Business Environment)', description: 'OCR A-Level Business H431/01', examBoard: 'ocr', qualification: 'a-level', subject: 'business', totalMarks: 80, duration: 120, sections: [{ name: 'Questions', instructions: 'Answer ALL questions.', questionTypes: ['short-answer', 'explain', 'data-analysis', 'extended'], targetMarks: 80, order: 0 }], calculator: true, formulaSheet: false },
  { id: 'ocr-alevel-business-paper2', name: 'Paper 2 (The UK Business Environment)', description: 'OCR A-Level Business H431/02', examBoard: 'ocr', qualification: 'a-level', subject: 'business', totalMarks: 80, duration: 120, sections: [{ name: 'Questions', instructions: 'Answer ALL questions.', questionTypes: ['short-answer', 'explain', 'data-analysis', 'extended'], targetMarks: 80, order: 0 }], calculator: true, formulaSheet: false },
];

// ============================================================================
// PSYCHOLOGY TEMPLATES
// ============================================================================

export const gcsePsychologyTemplates: PaperTemplatePreset[] = [
  // AQA
  { id: 'aqa-gcse-psychology-paper1', name: 'Paper 1 (Cognition and Behaviour)', description: 'AQA GCSE Psychology Paper 1', examBoard: 'aqa', qualification: 'gcse', subject: 'psychology', totalMarks: 100, duration: 105, sections: [{ name: 'Section A', instructions: 'Answer ALL questions.', questionTypes: ['multiple-choice', 'short-answer'], targetMarks: 25, order: 0 }, { name: 'Section B', instructions: 'Answer ALL questions.', questionTypes: ['short-answer', 'explain', 'extended'], targetMarks: 75, order: 1 }], calculator: true, formulaSheet: false },
  { id: 'aqa-gcse-psychology-paper2', name: 'Paper 2 (Social Context and Behaviour)', description: 'AQA GCSE Psychology Paper 2', examBoard: 'aqa', qualification: 'gcse', subject: 'psychology', totalMarks: 100, duration: 105, sections: [{ name: 'Section A', instructions: 'Answer ALL questions.', questionTypes: ['multiple-choice', 'short-answer'], targetMarks: 25, order: 0 }, { name: 'Section B', instructions: 'Answer ALL questions.', questionTypes: ['short-answer', 'explain', 'extended'], targetMarks: 75, order: 1 }], calculator: true, formulaSheet: false },
  // Edexcel
  { id: 'edexcel-gcse-psychology-paper1', name: 'Paper 1 (Development and Memory)', description: 'Edexcel GCSE Psychology Paper 1', examBoard: 'edexcel', qualification: 'gcse', subject: 'psychology', totalMarks: 98, duration: 105, sections: [{ name: 'Questions', instructions: 'Answer ALL questions.', questionTypes: ['multiple-choice', 'short-answer', 'explain', 'extended'], targetMarks: 98, order: 0 }], calculator: true, formulaSheet: false },
  { id: 'edexcel-gcse-psychology-paper2', name: 'Paper 2 (Social and Psychological Problems)', description: 'Edexcel GCSE Psychology Paper 2', examBoard: 'edexcel', qualification: 'gcse', subject: 'psychology', totalMarks: 98, duration: 105, sections: [{ name: 'Questions', instructions: 'Answer ALL questions.', questionTypes: ['multiple-choice', 'short-answer', 'explain', 'extended'], targetMarks: 98, order: 0 }], calculator: true, formulaSheet: false },
  // OCR
  { id: 'ocr-gcse-psychology-paper1', name: 'Paper 1 (Studies and Applications)', description: 'OCR GCSE Psychology J203/01', examBoard: 'ocr', qualification: 'gcse', subject: 'psychology', totalMarks: 80, duration: 90, sections: [{ name: 'Questions', instructions: 'Answer ALL questions.', questionTypes: ['short-answer', 'explain', 'extended'], targetMarks: 80, order: 0 }], calculator: true, formulaSheet: false },
  { id: 'ocr-gcse-psychology-paper2', name: 'Paper 2 (Studies and Applications)', description: 'OCR GCSE Psychology J203/02', examBoard: 'ocr', qualification: 'gcse', subject: 'psychology', totalMarks: 80, duration: 90, sections: [{ name: 'Questions', instructions: 'Answer ALL questions.', questionTypes: ['short-answer', 'explain', 'extended'], targetMarks: 80, order: 0 }], calculator: true, formulaSheet: false },
];

export const aLevelPsychologyTemplates: PaperTemplatePreset[] = [
  // AQA
  { id: 'aqa-alevel-psychology-paper1', name: 'Paper 1 (Introductory Topics)', description: 'AQA A-Level Psychology Paper 1', examBoard: 'aqa', qualification: 'a-level', subject: 'psychology', totalMarks: 96, duration: 120, sections: [{ name: 'Section A', instructions: 'Answer ALL questions.', questionTypes: ['multiple-choice', 'short-answer'], targetMarks: 24, order: 0 }, { name: 'Section B', instructions: 'Answer ALL questions.', questionTypes: ['short-answer', 'explain', 'extended'], targetMarks: 72, order: 1 }], calculator: true, formulaSheet: false },
  { id: 'aqa-alevel-psychology-paper2', name: 'Paper 2 (Psychology in Context)', description: 'AQA A-Level Psychology Paper 2', examBoard: 'aqa', qualification: 'a-level', subject: 'psychology', totalMarks: 96, duration: 120, sections: [{ name: 'Section A', instructions: 'Answer ALL questions.', questionTypes: ['multiple-choice', 'short-answer'], targetMarks: 24, order: 0 }, { name: 'Section B', instructions: 'Answer ALL questions.', questionTypes: ['short-answer', 'explain', 'extended'], targetMarks: 72, order: 1 }], calculator: true, formulaSheet: false },
  // Edexcel
  { id: 'edexcel-alevel-psychology-paper1', name: 'Paper 1 (Foundations in Psychology)', description: 'Edexcel A-Level Psychology Paper 1', examBoard: 'edexcel', qualification: 'a-level', subject: 'psychology', totalMarks: 90, duration: 120, sections: [{ name: 'Questions', instructions: 'Answer ALL questions.', questionTypes: ['multiple-choice', 'short-answer', 'explain', 'extended'], targetMarks: 90, order: 0 }], calculator: true, formulaSheet: false },
  { id: 'edexcel-alevel-psychology-paper2', name: 'Paper 2 (Applications of Psychology)', description: 'Edexcel A-Level Psychology Paper 2', examBoard: 'edexcel', qualification: 'a-level', subject: 'psychology', totalMarks: 90, duration: 120, sections: [{ name: 'Questions', instructions: 'Answer ALL questions.', questionTypes: ['multiple-choice', 'short-answer', 'explain', 'extended'], targetMarks: 90, order: 0 }], calculator: true, formulaSheet: false },
  // OCR
  { id: 'ocr-alevel-psychology-paper1', name: 'Paper 1 (Research Methods)', description: 'OCR A-Level Psychology H567/01', examBoard: 'ocr', qualification: 'a-level', subject: 'psychology', totalMarks: 90, duration: 120, sections: [{ name: 'Questions', instructions: 'Answer ALL questions.', questionTypes: ['short-answer', 'explain', 'data-analysis', 'extended'], targetMarks: 90, order: 0 }], calculator: true, formulaSheet: false },
  { id: 'ocr-alevel-psychology-paper2', name: 'Paper 2 (Psychological Themes)', description: 'OCR A-Level Psychology H567/02', examBoard: 'ocr', qualification: 'a-level', subject: 'psychology', totalMarks: 105, duration: 135, sections: [{ name: 'Questions', instructions: 'Answer ALL questions.', questionTypes: ['short-answer', 'explain', 'extended'], targetMarks: 105, order: 0 }], calculator: true, formulaSheet: false },
];

// ============================================================================
// GEOGRAPHY TEMPLATES
// ============================================================================

export const gcseGeographyTemplates: PaperTemplatePreset[] = [
  // AQA
  { id: 'aqa-gcse-geography-paper1', name: 'Paper 1 (Living with the Physical Environment)', description: 'AQA GCSE Geography Paper 1', examBoard: 'aqa', qualification: 'gcse', subject: 'geography', totalMarks: 88, duration: 90, sections: [{ name: 'Questions', instructions: 'Answer ALL questions.', questionTypes: ['multiple-choice', 'short-answer', 'explain', 'extended'], targetMarks: 88, order: 0 }], calculator: true, formulaSheet: false },
  { id: 'aqa-gcse-geography-paper2', name: 'Paper 2 (Challenges in the Human Environment)', description: 'AQA GCSE Geography Paper 2', examBoard: 'aqa', qualification: 'gcse', subject: 'geography', totalMarks: 88, duration: 90, sections: [{ name: 'Questions', instructions: 'Answer ALL questions.', questionTypes: ['multiple-choice', 'short-answer', 'explain', 'extended'], targetMarks: 88, order: 0 }], calculator: true, formulaSheet: false },
  { id: 'aqa-gcse-geography-paper3', name: 'Paper 3 (Geographical Applications)', description: 'AQA GCSE Geography Paper 3', examBoard: 'aqa', qualification: 'gcse', subject: 'geography', totalMarks: 76, duration: 75, sections: [{ name: 'Questions', instructions: 'Answer ALL questions.', questionTypes: ['short-answer', 'data-analysis', 'extended'], targetMarks: 76, order: 0 }], calculator: true, formulaSheet: false },
  // Edexcel
  { id: 'edexcel-gcse-geography-paper1', name: 'Paper 1 (The Physical Environment)', description: 'Edexcel GCSE Geography A Paper 1', examBoard: 'edexcel', qualification: 'gcse', subject: 'geography', totalMarks: 94, duration: 90, sections: [{ name: 'Questions', instructions: 'Answer ALL questions.', questionTypes: ['short-answer', 'explain', 'extended'], targetMarks: 94, order: 0 }], calculator: true, formulaSheet: false },
  { id: 'edexcel-gcse-geography-paper2', name: 'Paper 2 (The Human Environment)', description: 'Edexcel GCSE Geography A Paper 2', examBoard: 'edexcel', qualification: 'gcse', subject: 'geography', totalMarks: 94, duration: 90, sections: [{ name: 'Questions', instructions: 'Answer ALL questions.', questionTypes: ['short-answer', 'explain', 'extended'], targetMarks: 94, order: 0 }], calculator: true, formulaSheet: false },
  // OCR
  { id: 'ocr-gcse-geography-paper1', name: 'Paper 1 (Living in the UK Today)', description: 'OCR GCSE Geography B J384/01', examBoard: 'ocr', qualification: 'gcse', subject: 'geography', totalMarks: 70, duration: 75, sections: [{ name: 'Questions', instructions: 'Answer ALL questions.', questionTypes: ['short-answer', 'explain', 'extended'], targetMarks: 70, order: 0 }], calculator: true, formulaSheet: false },
  { id: 'ocr-gcse-geography-paper2', name: 'Paper 2 (The World Around Us)', description: 'OCR GCSE Geography B J384/02', examBoard: 'ocr', qualification: 'gcse', subject: 'geography', totalMarks: 70, duration: 75, sections: [{ name: 'Questions', instructions: 'Answer ALL questions.', questionTypes: ['short-answer', 'explain', 'extended'], targetMarks: 70, order: 0 }], calculator: true, formulaSheet: false },
];

export const aLevelGeographyTemplates: PaperTemplatePreset[] = [
  // AQA
  { id: 'aqa-alevel-geography-paper1', name: 'Paper 1 (Physical Geography)', description: 'AQA A-Level Geography Paper 1', examBoard: 'aqa', qualification: 'a-level', subject: 'geography', totalMarks: 120, duration: 150, sections: [{ name: 'Questions', instructions: 'Answer ALL questions.', questionTypes: ['short-answer', 'explain', 'data-analysis', 'extended'], targetMarks: 120, order: 0 }], calculator: true, formulaSheet: false },
  { id: 'aqa-alevel-geography-paper2', name: 'Paper 2 (Human Geography)', description: 'AQA A-Level Geography Paper 2', examBoard: 'aqa', qualification: 'a-level', subject: 'geography', totalMarks: 120, duration: 150, sections: [{ name: 'Questions', instructions: 'Answer ALL questions.', questionTypes: ['short-answer', 'explain', 'data-analysis', 'extended'], targetMarks: 120, order: 0 }], calculator: true, formulaSheet: false },
  // Edexcel
  { id: 'edexcel-alevel-geography-paper1', name: 'Paper 1 (Physical Systems and Sustainability)', description: 'Edexcel A-Level Geography Paper 1', examBoard: 'edexcel', qualification: 'a-level', subject: 'geography', totalMarks: 105, duration: 135, sections: [{ name: 'Questions', instructions: 'Answer ALL questions.', questionTypes: ['short-answer', 'explain', 'data-analysis', 'extended'], targetMarks: 105, order: 0 }], calculator: true, formulaSheet: false },
  { id: 'edexcel-alevel-geography-paper2', name: 'Paper 2 (Human Systems and Geopolitics)', description: 'Edexcel A-Level Geography Paper 2', examBoard: 'edexcel', qualification: 'a-level', subject: 'geography', totalMarks: 105, duration: 135, sections: [{ name: 'Questions', instructions: 'Answer ALL questions.', questionTypes: ['short-answer', 'explain', 'data-analysis', 'extended'], targetMarks: 105, order: 0 }], calculator: true, formulaSheet: false },
  // OCR
  { id: 'ocr-alevel-geography-paper1', name: 'Paper 1 (Physical Systems)', description: 'OCR A-Level Geography H481/01', examBoard: 'ocr', qualification: 'a-level', subject: 'geography', totalMarks: 66, duration: 90, sections: [{ name: 'Questions', instructions: 'Answer ALL questions.', questionTypes: ['short-answer', 'explain', 'extended'], targetMarks: 66, order: 0 }], calculator: true, formulaSheet: false },
  { id: 'ocr-alevel-geography-paper2', name: 'Paper 2 (Human Interactions)', description: 'OCR A-Level Geography H481/02', examBoard: 'ocr', qualification: 'a-level', subject: 'geography', totalMarks: 66, duration: 90, sections: [{ name: 'Questions', instructions: 'Answer ALL questions.', questionTypes: ['short-answer', 'explain', 'extended'], targetMarks: 66, order: 0 }], calculator: true, formulaSheet: false },
];

// ============================================================================
// HISTORY TEMPLATES
// ============================================================================

export const gcseHistoryTemplates: PaperTemplatePreset[] = [
  // AQA
  { id: 'aqa-gcse-history-paper1', name: 'Paper 1 (Understanding the Modern World)', description: 'AQA GCSE History Paper 1', examBoard: 'aqa', qualification: 'gcse', subject: 'history', totalMarks: 84, duration: 120, sections: [{ name: 'Section A', instructions: 'Answer ALL questions on your chosen topic.', questionTypes: ['short-answer', 'explain', 'extended'], targetMarks: 44, order: 0 }, { name: 'Section B', instructions: 'Answer ALL questions.', questionTypes: ['explain', 'extended'], targetMarks: 40, order: 1 }], calculator: false, formulaSheet: false },
  { id: 'aqa-gcse-history-paper2', name: 'Paper 2 (Shaping the Nation)', description: 'AQA GCSE History Paper 2', examBoard: 'aqa', qualification: 'gcse', subject: 'history', totalMarks: 84, duration: 120, sections: [{ name: 'Section A', instructions: 'Answer ALL questions.', questionTypes: ['short-answer', 'explain', 'extended'], targetMarks: 44, order: 0 }, { name: 'Section B', instructions: 'Answer ALL questions.', questionTypes: ['explain', 'extended'], targetMarks: 40, order: 1 }], calculator: false, formulaSheet: false },
  // Edexcel
  { id: 'edexcel-gcse-history-paper1', name: 'Paper 1 (Thematic Study and Historic Environment)', description: 'Edexcel GCSE History Paper 1', examBoard: 'edexcel', qualification: 'gcse', subject: 'history', totalMarks: 52, duration: 75, sections: [{ name: 'Questions', instructions: 'Answer ALL questions.', questionTypes: ['short-answer', 'explain', 'extended'], targetMarks: 52, order: 0 }], calculator: false, formulaSheet: false },
  { id: 'edexcel-gcse-history-paper2', name: 'Paper 2 (Period Study and British Depth Study)', description: 'Edexcel GCSE History Paper 2', examBoard: 'edexcel', qualification: 'gcse', subject: 'history', totalMarks: 64, duration: 105, sections: [{ name: 'Questions', instructions: 'Answer ALL questions.', questionTypes: ['short-answer', 'explain', 'extended'], targetMarks: 64, order: 0 }], calculator: false, formulaSheet: false },
  // OCR
  { id: 'ocr-gcse-history-paper1', name: 'Paper 1 (British History)', description: 'OCR GCSE History B J411/01', examBoard: 'ocr', qualification: 'gcse', subject: 'history', totalMarks: 80, duration: 105, sections: [{ name: 'Questions', instructions: 'Answer ALL questions.', questionTypes: ['short-answer', 'explain', 'extended'], targetMarks: 80, order: 0 }], calculator: false, formulaSheet: false },
  { id: 'ocr-gcse-history-paper2', name: 'Paper 2 (History Around Us and World History)', description: 'OCR GCSE History B J411/02', examBoard: 'ocr', qualification: 'gcse', subject: 'history', totalMarks: 80, duration: 105, sections: [{ name: 'Questions', instructions: 'Answer ALL questions.', questionTypes: ['short-answer', 'explain', 'extended'], targetMarks: 80, order: 0 }], calculator: false, formulaSheet: false },
];

export const aLevelHistoryTemplates: PaperTemplatePreset[] = [
  // AQA
  { id: 'aqa-alevel-history-paper1', name: 'Paper 1 (Breadth Study)', description: 'AQA A-Level History Paper 1', examBoard: 'aqa', qualification: 'a-level', subject: 'history', totalMarks: 80, duration: 150, sections: [{ name: 'Questions', instructions: 'Answer THREE questions.', questionTypes: ['extended'], targetMarks: 80, order: 0 }], calculator: false, formulaSheet: false },
  { id: 'aqa-alevel-history-paper2', name: 'Paper 2 (Depth Study)', description: 'AQA A-Level History Paper 2', examBoard: 'aqa', qualification: 'a-level', subject: 'history', totalMarks: 80, duration: 150, sections: [{ name: 'Questions', instructions: 'Answer THREE questions.', questionTypes: ['extended'], targetMarks: 80, order: 0 }], calculator: false, formulaSheet: false },
  // Edexcel
  { id: 'edexcel-alevel-history-paper1', name: 'Paper 1 (Breadth Study with Interpretations)', description: 'Edexcel A-Level History Paper 1', examBoard: 'edexcel', qualification: 'a-level', subject: 'history', totalMarks: 60, duration: 135, sections: [{ name: 'Questions', instructions: 'Answer ALL questions.', questionTypes: ['explain', 'extended'], targetMarks: 60, order: 0 }], calculator: false, formulaSheet: false },
  { id: 'edexcel-alevel-history-paper2', name: 'Paper 2 (Depth Study)', description: 'Edexcel A-Level History Paper 2', examBoard: 'edexcel', qualification: 'a-level', subject: 'history', totalMarks: 40, duration: 90, sections: [{ name: 'Questions', instructions: 'Answer ALL questions.', questionTypes: ['explain', 'extended'], targetMarks: 40, order: 0 }], calculator: false, formulaSheet: false },
  // OCR
  { id: 'ocr-alevel-history-paper1', name: 'Paper 1 (British Period Study)', description: 'OCR A-Level History H505/01', examBoard: 'ocr', qualification: 'a-level', subject: 'history', totalMarks: 50, duration: 90, sections: [{ name: 'Questions', instructions: 'Answer ALL questions.', questionTypes: ['explain', 'extended'], targetMarks: 50, order: 0 }], calculator: false, formulaSheet: false },
  { id: 'ocr-alevel-history-paper2', name: 'Paper 2 (Non-British Period Study)', description: 'OCR A-Level History H505/02', examBoard: 'ocr', qualification: 'a-level', subject: 'history', totalMarks: 50, duration: 90, sections: [{ name: 'Questions', instructions: 'Answer ALL questions.', questionTypes: ['explain', 'extended'], targetMarks: 50, order: 0 }], calculator: false, formulaSheet: false },
];

// ============================================================================
// ENGLISH LITERATURE TEMPLATES
// ============================================================================

export const gcseEnglishLiteratureTemplates: PaperTemplatePreset[] = [
  // AQA
  { id: 'aqa-gcse-englitlit-paper1', name: 'Paper 1 (Shakespeare and 19th Century Novel)', description: 'AQA GCSE English Literature Paper 1', examBoard: 'aqa', qualification: 'gcse', subject: 'english-literature', totalMarks: 64, duration: 105, sections: [{ name: 'Section A', instructions: 'Answer ONE question on your Shakespeare play.', questionTypes: ['extended'], targetMarks: 30, order: 0 }, { name: 'Section B', instructions: 'Answer ONE question on your 19th century novel.', questionTypes: ['extended'], targetMarks: 34, order: 1 }], calculator: false, formulaSheet: false },
  { id: 'aqa-gcse-englitlit-paper2', name: 'Paper 2 (Modern Texts and Poetry)', description: 'AQA GCSE English Literature Paper 2', examBoard: 'aqa', qualification: 'gcse', subject: 'english-literature', totalMarks: 96, duration: 135, sections: [{ name: 'Section A', instructions: 'Answer ONE question on your modern prose/drama text.', questionTypes: ['extended'], targetMarks: 34, order: 0 }, { name: 'Section B', instructions: 'Answer ONE question on the poetry anthology.', questionTypes: ['compare', 'extended'], targetMarks: 30, order: 1 }, { name: 'Section C', instructions: 'Answer ONE question comparing unseen poems.', questionTypes: ['compare', 'extended'], targetMarks: 32, order: 2 }], calculator: false, formulaSheet: false },
  // Edexcel
  { id: 'edexcel-gcse-englit-paper1', name: 'Paper 1 (Shakespeare and Post-1914 Literature)', description: 'Edexcel GCSE English Literature Paper 1', examBoard: 'edexcel', qualification: 'gcse', subject: 'english-literature', totalMarks: 80, duration: 105, sections: [{ name: 'Questions', instructions: 'Answer ALL questions.', questionTypes: ['extended'], targetMarks: 80, order: 0 }], calculator: false, formulaSheet: false },
  { id: 'edexcel-gcse-englit-paper2', name: 'Paper 2 (19th Century Novel and Poetry)', description: 'Edexcel GCSE English Literature Paper 2', examBoard: 'edexcel', qualification: 'gcse', subject: 'english-literature', totalMarks: 80, duration: 135, sections: [{ name: 'Questions', instructions: 'Answer ALL questions.', questionTypes: ['compare', 'extended'], targetMarks: 80, order: 0 }], calculator: false, formulaSheet: false },
  // OCR
  { id: 'ocr-gcse-englit-paper1', name: 'Paper 1 (Exploring Modern and Literary Heritage Texts)', description: 'OCR GCSE English Literature J352/01', examBoard: 'ocr', qualification: 'gcse', subject: 'english-literature', totalMarks: 80, duration: 120, sections: [{ name: 'Questions', instructions: 'Answer ALL questions.', questionTypes: ['extended'], targetMarks: 80, order: 0 }], calculator: false, formulaSheet: false },
  { id: 'ocr-gcse-englit-paper2', name: 'Paper 2 (Exploring Poetry and Shakespeare)', description: 'OCR GCSE English Literature J352/02', examBoard: 'ocr', qualification: 'gcse', subject: 'english-literature', totalMarks: 80, duration: 120, sections: [{ name: 'Questions', instructions: 'Answer ALL questions.', questionTypes: ['compare', 'extended'], targetMarks: 80, order: 0 }], calculator: false, formulaSheet: false },
];

export const aLevelEnglishLiteratureTemplates: PaperTemplatePreset[] = [
  // AQA
  { id: 'aqa-alevel-englit-paper1', name: 'Paper 1 (Love Through the Ages)', description: 'AQA A-Level English Literature A Paper 1', examBoard: 'aqa', qualification: 'a-level', subject: 'english-literature', totalMarks: 75, duration: 180, sections: [{ name: 'Section A', instructions: 'Answer ONE question on Shakespeare.', questionTypes: ['extended'], targetMarks: 25, order: 0 }, { name: 'Section B', instructions: 'Answer ONE question on comparing texts.', questionTypes: ['compare', 'extended'], targetMarks: 25, order: 1 }, { name: 'Section C', instructions: 'Answer ONE question on unseen poetry.', questionTypes: ['compare', 'extended'], targetMarks: 25, order: 2 }], calculator: false, formulaSheet: false },
  { id: 'aqa-alevel-englit-paper2', name: 'Paper 2 (Texts in Shared Contexts)', description: 'AQA A-Level English Literature A Paper 2', examBoard: 'aqa', qualification: 'a-level', subject: 'english-literature', totalMarks: 75, duration: 180, sections: [{ name: 'Section A', instructions: 'Answer ONE question comparing set texts.', questionTypes: ['compare', 'extended'], targetMarks: 25, order: 0 }, { name: 'Section B', instructions: 'Answer ONE question on set text.', questionTypes: ['extended'], targetMarks: 25, order: 1 }, { name: 'Section C', instructions: 'Answer ONE question on set text.', questionTypes: ['extended'], targetMarks: 25, order: 2 }], calculator: false, formulaSheet: false },
  // Edexcel
  { id: 'edexcel-alevel-englit-paper1', name: 'Paper 1 (Drama)', description: 'Edexcel A-Level English Literature Paper 1', examBoard: 'edexcel', qualification: 'a-level', subject: 'english-literature', totalMarks: 60, duration: 135, sections: [{ name: 'Questions', instructions: 'Answer ALL questions.', questionTypes: ['extended'], targetMarks: 60, order: 0 }], calculator: false, formulaSheet: false },
  { id: 'edexcel-alevel-englit-paper2', name: 'Paper 2 (Prose)', description: 'Edexcel A-Level English Literature Paper 2', examBoard: 'edexcel', qualification: 'a-level', subject: 'english-literature', totalMarks: 60, duration: 150, sections: [{ name: 'Questions', instructions: 'Answer ALL questions.', questionTypes: ['compare', 'extended'], targetMarks: 60, order: 0 }], calculator: false, formulaSheet: false },
  // OCR
  { id: 'ocr-alevel-englit-paper1', name: 'Paper 1 (Drama and Poetry)', description: 'OCR A-Level English Literature H472/01', examBoard: 'ocr', qualification: 'a-level', subject: 'english-literature', totalMarks: 60, duration: 150, sections: [{ name: 'Questions', instructions: 'Answer ALL questions.', questionTypes: ['extended'], targetMarks: 60, order: 0 }], calculator: false, formulaSheet: false },
  { id: 'ocr-alevel-englit-paper2', name: 'Paper 2 (Comparative and Contextual Study)', description: 'OCR A-Level English Literature H472/02', examBoard: 'ocr', qualification: 'a-level', subject: 'english-literature', totalMarks: 60, duration: 150, sections: [{ name: 'Questions', instructions: 'Answer ALL questions.', questionTypes: ['compare', 'extended'], targetMarks: 60, order: 0 }], calculator: false, formulaSheet: false },
];

// ============================================================================
// FURTHER MATHS TEMPLATES
// ============================================================================

export const gcseFurtherMathsTemplates: PaperTemplatePreset[] = [
  // AQA Level 2 Certificate
  { id: 'aqa-gcse-furthermaths-paper1', name: 'Paper 1 (Non-Calculator)', description: 'AQA Level 2 Certificate in Further Maths Paper 1', examBoard: 'aqa', qualification: 'gcse', subject: 'further-maths', totalMarks: 80, duration: 105, sections: [{ name: 'Questions', instructions: 'Answer ALL questions. No calculator allowed.', questionTypes: ['short-answer', 'calculation', 'extended'], targetMarks: 80, order: 0 }], calculator: false, formulaSheet: true },
  { id: 'aqa-gcse-furthermaths-paper2', name: 'Paper 2 (Calculator)', description: 'AQA Level 2 Certificate in Further Maths Paper 2', examBoard: 'aqa', qualification: 'gcse', subject: 'further-maths', totalMarks: 80, duration: 105, sections: [{ name: 'Questions', instructions: 'Answer ALL questions. Calculator allowed.', questionTypes: ['short-answer', 'calculation', 'extended'], targetMarks: 80, order: 0 }], calculator: true, formulaSheet: true },
  // OCR FSMQ
  { id: 'ocr-gcse-furthermaths-paper', name: 'Additional Mathematics Paper', description: 'OCR FSMQ Additional Mathematics', examBoard: 'ocr', qualification: 'gcse', subject: 'further-maths', totalMarks: 100, duration: 120, sections: [{ name: 'Questions', instructions: 'Answer ALL questions. Calculator allowed.', questionTypes: ['short-answer', 'calculation', 'extended'], targetMarks: 100, order: 0 }], calculator: true, formulaSheet: true },
];

export const aLevelFurtherMathsTemplates: PaperTemplatePreset[] = [
  // AQA
  { id: 'aqa-alevel-furthermaths-paper1', name: 'Paper 1 (Compulsory Pure)', description: 'AQA A-Level Further Maths Paper 1', examBoard: 'aqa', qualification: 'a-level', subject: 'further-maths', totalMarks: 100, duration: 120, sections: [{ name: 'Questions', instructions: 'Answer ALL questions.', questionTypes: ['short-answer', 'calculation', 'extended'], targetMarks: 100, order: 0 }], calculator: true, formulaSheet: true },
  { id: 'aqa-alevel-furthermaths-paper2', name: 'Paper 2 (Compulsory Pure)', description: 'AQA A-Level Further Maths Paper 2', examBoard: 'aqa', qualification: 'a-level', subject: 'further-maths', totalMarks: 100, duration: 120, sections: [{ name: 'Questions', instructions: 'Answer ALL questions.', questionTypes: ['short-answer', 'calculation', 'extended'], targetMarks: 100, order: 0 }], calculator: true, formulaSheet: true },
  // Edexcel
  { id: 'edexcel-alevel-furthermaths-core1', name: 'Core Pure Mathematics 1', description: 'Edexcel A-Level Further Maths Core Pure 1', examBoard: 'edexcel', qualification: 'a-level', subject: 'further-maths', totalMarks: 75, duration: 90, sections: [{ name: 'Questions', instructions: 'Answer ALL questions.', questionTypes: ['short-answer', 'calculation', 'extended'], targetMarks: 75, order: 0 }], calculator: true, formulaSheet: true },
  { id: 'edexcel-alevel-furthermaths-core2', name: 'Core Pure Mathematics 2', description: 'Edexcel A-Level Further Maths Core Pure 2', examBoard: 'edexcel', qualification: 'a-level', subject: 'further-maths', totalMarks: 75, duration: 90, sections: [{ name: 'Questions', instructions: 'Answer ALL questions.', questionTypes: ['short-answer', 'calculation', 'extended'], targetMarks: 75, order: 0 }], calculator: true, formulaSheet: true },
  // OCR
  { id: 'ocr-alevel-furthermaths-paper1', name: 'Paper 1 (Pure Core)', description: 'OCR A-Level Further Maths Pure Core', examBoard: 'ocr', qualification: 'a-level', subject: 'further-maths', totalMarks: 100, duration: 90, sections: [{ name: 'Questions', instructions: 'Answer ALL questions.', questionTypes: ['short-answer', 'calculation', 'extended'], targetMarks: 100, order: 0 }], calculator: true, formulaSheet: true },
  { id: 'ocr-alevel-furthermaths-paper2', name: 'Paper 2 (Pure Core 2)', description: 'OCR A-Level Further Maths Pure Core 2', examBoard: 'ocr', qualification: 'a-level', subject: 'further-maths', totalMarks: 100, duration: 90, sections: [{ name: 'Questions', instructions: 'Answer ALL questions.', questionTypes: ['short-answer', 'calculation', 'extended'], targetMarks: 100, order: 0 }], calculator: true, formulaSheet: true },
];

// ============================================================================
// TEMPLATE RETRIEVAL FUNCTIONS
// ============================================================================

/**
 * Get all templates for a specific subject, exam board, and qualification
 */
export function getTemplatesForContext(
  subject: Subject,
  examBoard: ExamBoard,
  qualification: QualificationLevel
): PaperTemplatePreset[] {
  const allTemplates: PaperTemplatePreset[] = [];

  // Subject-specific template mappings
  const templateMap: Record<Subject, { gcse: PaperTemplatePreset[]; 'a-level': PaperTemplatePreset[] }> = {
    'maths': { gcse: gcseMatheTemplates, 'a-level': aLevelMathsTemplates },
    'physics': { gcse: gcsePhysicsTemplates, 'a-level': aLevelPhysicsTemplates },
    'chemistry': { gcse: gcseChemistryTemplates, 'a-level': aLevelChemistryTemplates },
    'biology': { gcse: gcseBiologyTemplates, 'a-level': aLevelBiologyTemplates },
    'computer-science': { gcse: gcseComputerScienceTemplates, 'a-level': aLevelComputerScienceTemplates },
    'economics': { gcse: gcseEconomicsTemplates, 'a-level': aLevelEconomicsTemplates },
    'business': { gcse: gcseBusinessTemplates, 'a-level': aLevelBusinessTemplates },
    'psychology': { gcse: gcsePsychologyTemplates, 'a-level': aLevelPsychologyTemplates },
    'geography': { gcse: gcseGeographyTemplates, 'a-level': aLevelGeographyTemplates },
    'history': { gcse: gcseHistoryTemplates, 'a-level': aLevelHistoryTemplates },
    'english-literature': { gcse: gcseEnglishLiteratureTemplates, 'a-level': aLevelEnglishLiteratureTemplates },
    'further-maths': { gcse: gcseFurtherMathsTemplates, 'a-level': aLevelFurtherMathsTemplates },
    'combined-science': { gcse: gcseCombinedScienceTemplates, 'a-level': [] },  // GCSE only, no A-Level
  };

  // Get templates for the subject and qualification level
  const subjectTemplates = templateMap[subject];
  if (subjectTemplates) {
    const levelTemplates = subjectTemplates[qualification] || [];
    allTemplates.push(...levelTemplates.filter((t) => t.examBoard === examBoard));
  }

  // Add generic quick practice templates (adapted for current context)
  const adaptedQuickTemplates = quickPracticeTemplates.map((t) => ({
    ...t,
    examBoard,
    qualification,
    subject,
  }));
  allTemplates.push(...adaptedQuickTemplates);

  return allTemplates;
}

/**
 * Get a template by ID
 */
export function getTemplateById(id: string): PaperTemplatePreset | undefined {
  const allTemplates = [
    // Maths
    ...gcseMatheTemplates,
    ...aLevelMathsTemplates,
    // Sciences
    ...gcsePhysicsTemplates,
    ...aLevelPhysicsTemplates,
    ...gcseChemistryTemplates,
    ...aLevelChemistryTemplates,
    ...gcseBiologyTemplates,
    ...aLevelBiologyTemplates,
    // Combined Science (GCSE only)
    ...gcseCombinedScienceTemplates,
    // Computer Science
    ...gcseComputerScienceTemplates,
    ...aLevelComputerScienceTemplates,
    // Economics
    ...gcseEconomicsTemplates,
    ...aLevelEconomicsTemplates,
    // Business
    ...gcseBusinessTemplates,
    ...aLevelBusinessTemplates,
    // Psychology
    ...gcsePsychologyTemplates,
    ...aLevelPsychologyTemplates,
    // Geography
    ...gcseGeographyTemplates,
    ...aLevelGeographyTemplates,
    // History
    ...gcseHistoryTemplates,
    ...aLevelHistoryTemplates,
    // English Literature
    ...gcseEnglishLiteratureTemplates,
    ...aLevelEnglishLiteratureTemplates,
    // Further Maths
    ...gcseFurtherMathsTemplates,
    ...aLevelFurtherMathsTemplates,
    // Quick Practice
    ...quickPracticeTemplates,
  ];

  return allTemplates.find((t) => t.id === id);
}

/**
 * Get recommended template for a subject/board/level combo
 */
export function getRecommendedTemplate(
  subject: Subject,
  examBoard: ExamBoard,
  qualification: QualificationLevel
): PaperTemplatePreset | undefined {
  const templates = getTemplatesForContext(subject, examBoard, qualification);
  // Return first non-quick-practice template, or first available
  return templates.find((t) => !t.id.startsWith('quick-')) || templates[0];
}
