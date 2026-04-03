/**
 * Subject-Specific Difficulty Profiles
 * Each subject has unique characteristics for what makes a question "hard"
 */

import { Subject, Difficulty, QualificationLevel, ExamBoard } from '@/types';

export interface SubjectDifficultyProfile {
  subject: Subject;
  level: QualificationLevel;
  difficulty: Difficulty;
  marks: { min: number; typical: number; max: number };
  questionTypes: string[];
  characteristics: string[];
  commandWords: string[];
  timeAllocation: number; // minutes
  markSchemeType: 'points' | 'levels' | 'banded' | 'mixed';
  exampleStructure: string;
}

/**
 * Get subject-specific difficulty profile
 * CRITICAL: "Hard" means very different things in different subjects!
 */
export function getSubjectSpecificProfile(
  subject: Subject,
  level: QualificationLevel,
  difficulty: Difficulty
): SubjectDifficultyProfile {
  // ECONOMICS - Essay-based subject
  if (subject === 'economics') {
    const economicsProfiles: Record<Difficulty, SubjectDifficultyProfile> = {
      easy: {
        subject: 'economics',
        level,
        difficulty: 'easy',
        marks: { min: 2, typical: 4, max: 6 },
        questionTypes: ['definition', 'identification', 'simple explanation'],
        characteristics: ['Knowledge recall', 'Basic concepts', 'Single factor'],
        commandWords: ['Define', 'State', 'Identify', 'Give'],
        timeAllocation: 4,
        markSchemeType: 'points',
        exampleStructure: 'Define [economic term] and give one example',
      },
      medium: {
        subject: 'economics',
        level,
        difficulty: 'medium',
        marks: { min: 6, typical: 9, max: 12 },
        questionTypes: ['explanation', 'analysis', 'diagram drawing'],
        characteristics: ['Application', 'Chain of reasoning', 'Multiple factors'],
        commandWords: ['Explain', 'Analyse', 'Using a diagram'],
        timeAllocation: 10,
        markSchemeType: 'points',
        exampleStructure: 'Explain how [economic concept] affects [outcome]',
      },
      hard: {
        subject: 'economics',
        level,
        difficulty: 'hard',
        marks: { min: 15, typical: 20, max: 25 },
        questionTypes: ['essay', 'evaluation', 'discussion'],
        characteristics: ['Critical evaluation', 'Multiple perspectives', 'Judgment required'],
        commandWords: ['Evaluate', 'Discuss', 'To what extent', 'Assess'],
        timeAllocation: 25,
        markSchemeType: 'levels',
        exampleStructure: 'Evaluate the effectiveness of [policy] in achieving [goal]',
      },
    };
    return economicsProfiles[difficulty];
  }

  // MATHEMATICS - Problem-solving subject
  if (subject === 'maths' || subject === 'further-maths') {
    const mathsProfiles: Record<Difficulty, SubjectDifficultyProfile> = {
      easy: {
        subject,
        level,
        difficulty: 'easy',
        marks: { min: 1, typical: 3, max: 4 },
        questionTypes: ['routine calculation', 'substitution', 'simple proof'],
        characteristics: ['Single step', 'Standard method', 'Direct application'],
        commandWords: ['Calculate', 'Find', 'Simplify', 'Solve'],
        timeAllocation: 3,
        markSchemeType: 'points',
        exampleStructure: 'Calculate the value of [expression]',
      },
      medium: {
        subject,
        level,
        difficulty: 'medium',
        marks: { min: 4, typical: 6, max: 8 },
        questionTypes: ['multi-step problem', 'algebraic proof', 'problem-solving'],
        characteristics: ['Multiple steps', 'Some reasoning', 'Method selection'],
        commandWords: ['Show that', 'Prove', 'Hence find', 'Determine'],
        timeAllocation: 7,
        markSchemeType: 'mixed',
        exampleStructure: 'Show that [equation] and hence find [value]',
      },
      hard: {
        subject,
        level,
        difficulty: 'hard',
        marks: { min: 6, typical: 8, max: 12 },
        questionTypes: ['complex proof', 'unfamiliar context', 'multi-part problem'],
        characteristics: ['Novel approach needed', 'Synthesis required', 'Abstract reasoning'],
        commandWords: ['Prove by induction', 'Hence or otherwise', 'Prove that'],
        timeAllocation: 12,
        markSchemeType: 'mixed',
        exampleStructure: 'Prove that [statement] for all positive integers n',
      },
    };
    return mathsProfiles[difficulty];
  }

  // HISTORY - Essay and source-based
  if (subject === 'history') {
    const historyProfiles: Record<Difficulty, SubjectDifficultyProfile> = {
      easy: {
        subject: 'history',
        level,
        difficulty: 'easy',
        marks: { min: 2, typical: 4, max: 6 },
        questionTypes: ['describe', 'identify', 'simple explain'],
        characteristics: ['Factual recall', 'Chronology', 'Basic causation'],
        commandWords: ['Describe', 'State', 'Identify', 'What'],
        timeAllocation: 5,
        markSchemeType: 'points',
        exampleStructure: 'Describe two features of [historical event/period]',
      },
      medium: {
        subject: 'history',
        level,
        difficulty: 'medium',
        marks: { min: 8, typical: 12, max: 16 },
        questionTypes: ['explain', 'source analysis', 'comparison'],
        characteristics: ['Causation', 'Change/continuity', 'Source evaluation'],
        commandWords: ['Explain why', 'How useful', 'Compare'],
        timeAllocation: 15,
        markSchemeType: 'mixed',
        exampleStructure: 'Explain why [event] was significant',
      },
      hard: {
        subject: 'history',
        level,
        difficulty: 'hard',
        marks: { min: 16, typical: 20, max: 30 },
        questionTypes: ['essay', 'interpretation', 'synthesis'],
        characteristics: ['Sustained argument', 'Historiography', 'Critical evaluation'],
        commandWords: ['How far do you agree', 'Assess', 'To what extent'],
        timeAllocation: 30,
        markSchemeType: 'levels',
        exampleStructure: '"[Statement]" How far do you agree? Explain your answer',
      },
    };
    return historyProfiles[difficulty];
  }

  // SCIENCES - Mixed calculation and explanation
  if (['physics', 'chemistry', 'biology', 'combined-science'].includes(subject)) {
    const scienceProfiles: Record<Difficulty, SubjectDifficultyProfile> = {
      easy: {
        subject,
        level,
        difficulty: 'easy',
        marks: { min: 1, typical: 2, max: 3 },
        questionTypes: ['recall', 'simple calculation', 'identification'],
        characteristics: ['Single fact', 'Direct formula', 'Labeling'],
        commandWords: ['State', 'Name', 'Calculate', 'Label'],
        timeAllocation: 2,
        markSchemeType: 'points',
        exampleStructure: 'Name the process by which [phenomenon occurs]',
      },
      medium: {
        subject,
        level,
        difficulty: 'medium',
        marks: { min: 4, typical: 5, max: 6 },
        questionTypes: ['explanation', 'multi-step calculation', 'practical design'],
        characteristics: ['Scientific reasoning', 'Variable relationships', 'Method description'],
        commandWords: ['Explain', 'Describe', 'Plan', 'Calculate'],
        timeAllocation: 6,
        markSchemeType: 'points',
        exampleStructure: 'Explain how [factor] affects [outcome]',
      },
      hard: {
        subject,
        level,
        difficulty: 'hard',
        marks: { min: 6, typical: 8, max: 10 },
        questionTypes: ['evaluation', 'complex calculation', 'experimental analysis'],
        characteristics: ['Data interpretation', 'Error analysis', 'Synoptic links'],
        commandWords: ['Evaluate', 'Analyse', 'Suggest improvements', 'Justify'],
        timeAllocation: 10,
        markSchemeType: 'mixed',
        exampleStructure: 'Evaluate the method used and suggest improvements',
      },
    };
    return scienceProfiles[difficulty];
  }

  // ENGLISH LITERATURE - Text analysis
  if (subject === 'english-literature') {
    const englishProfiles: Record<Difficulty, SubjectDifficultyProfile> = {
      easy: {
        subject: 'english-literature',
        level,
        difficulty: 'easy',
        marks: { min: 2, typical: 4, max: 6 },
        questionTypes: ['identify', 'retrieve', 'simple comment'],
        characteristics: ['Textual reference', 'Basic technique', 'Surface meaning'],
        commandWords: ['What', 'Find', 'Give', 'List'],
        timeAllocation: 5,
        markSchemeType: 'points',
        exampleStructure: 'How does the writer show [character/theme]?',
      },
      medium: {
        subject: 'english-literature',
        level,
        difficulty: 'medium',
        marks: { min: 8, typical: 12, max: 15 },
        questionTypes: ['analysis', 'comparison', 'language/structure'],
        characteristics: ['Method analysis', 'Writer\'s purpose', 'Effect on reader'],
        commandWords: ['How', 'Analyse', 'Explore', 'Compare'],
        timeAllocation: 15,
        markSchemeType: 'banded',
        exampleStructure: 'How does the writer present [theme/character]?',
      },
      hard: {
        subject: 'english-literature',
        level,
        difficulty: 'hard',
        marks: { min: 20, typical: 25, max: 30 },
        questionTypes: ['critical essay', 'evaluation', 'contextual analysis'],
        characteristics: ['Critical analysis', 'Multiple interpretations', 'Theoretical approach'],
        commandWords: ['To what extent', 'Critically analyse', 'Evaluate'],
        timeAllocation: 35,
        markSchemeType: 'levels',
        exampleStructure: 'To what extent does [author] present [theme] as [statement]?',
      },
    };
    return englishProfiles[difficulty];
  }

  // COMPUTER SCIENCE - Code and theory
  if (subject === 'computer-science') {
    const csProfiles: Record<Difficulty, SubjectDifficultyProfile> = {
      easy: {
        subject: 'computer-science',
        level,
        difficulty: 'easy',
        marks: { min: 1, typical: 2, max: 3 },
        questionTypes: ['definition', 'trace', 'identify'],
        characteristics: ['Basic syntax', 'Simple trace', 'Term definition'],
        commandWords: ['Define', 'State', 'Identify', 'Complete'],
        timeAllocation: 2,
        markSchemeType: 'points',
        exampleStructure: 'State the output of this code',
      },
      medium: {
        subject: 'computer-science',
        level,
        difficulty: 'medium',
        marks: { min: 4, typical: 6, max: 8 },
        questionTypes: ['algorithm writing', 'analysis', 'debugging'],
        characteristics: ['Write code', 'Complexity analysis', 'Error correction'],
        commandWords: ['Write', 'Explain', 'Debug', 'Analyse'],
        timeAllocation: 8,
        markSchemeType: 'points',
        exampleStructure: 'Write an algorithm to [solve problem]',
      },
      hard: {
        subject: 'computer-science',
        level,
        difficulty: 'hard',
        marks: { min: 8, typical: 10, max: 15 },
        questionTypes: ['system design', 'evaluation', 'complex algorithm'],
        characteristics: ['Design decisions', 'Efficiency analysis', 'Trade-offs'],
        commandWords: ['Design', 'Evaluate', 'Compare and contrast', 'Justify'],
        timeAllocation: 15,
        markSchemeType: 'mixed',
        exampleStructure: 'Design a system to [requirement] and justify your choices',
      },
    };
    return csProfiles[difficulty];
  }

  // PSYCHOLOGY - Research and theory
  if (subject === 'psychology') {
    const psychProfiles: Record<Difficulty, SubjectDifficultyProfile> = {
      easy: {
        subject: 'psychology',
        level,
        difficulty: 'easy',
        marks: { min: 2, typical: 3, max: 4 },
        questionTypes: ['identify', 'outline', 'define'],
        characteristics: ['Basic knowledge', 'Single study', 'Key terms'],
        commandWords: ['Identify', 'Outline', 'Name', 'State'],
        timeAllocation: 3,
        markSchemeType: 'points',
        exampleStructure: 'Outline one study into [psychological phenomenon]',
      },
      medium: {
        subject: 'psychology',
        level,
        difficulty: 'medium',
        marks: { min: 6, typical: 8, max: 10 },
        questionTypes: ['describe', 'explain', 'apply'],
        characteristics: ['Detailed knowledge', 'Application', 'Research methods'],
        commandWords: ['Describe', 'Explain', 'Apply', 'Discuss'],
        timeAllocation: 10,
        markSchemeType: 'points',
        exampleStructure: 'Describe and evaluate one theory of [behavior]',
      },
      hard: {
        subject: 'psychology',
        level,
        difficulty: 'hard',
        marks: { min: 12, typical: 16, max: 24 },
        questionTypes: ['essay', 'evaluation', 'comparison'],
        characteristics: ['Critical evaluation', 'Multiple theories', 'Issues and debates'],
        commandWords: ['Evaluate', 'Critically discuss', 'Compare', 'Assess'],
        timeAllocation: 20,
        markSchemeType: 'levels',
        exampleStructure: 'Evaluate [approach] explanations of [behavior]',
      },
    };
    return psychProfiles[difficulty];
  }

  // GEOGRAPHY - Fieldwork and case studies
  if (subject === 'geography') {
    const geoProfiles: Record<Difficulty, SubjectDifficultyProfile> = {
      easy: {
        subject: 'geography',
        level,
        difficulty: 'easy',
        marks: { min: 2, typical: 3, max: 4 },
        questionTypes: ['describe', 'identify', 'simple explain'],
        characteristics: ['Map skills', 'Basic processes', 'Definitions'],
        commandWords: ['Describe', 'State', 'Give', 'Name'],
        timeAllocation: 3,
        markSchemeType: 'points',
        exampleStructure: 'Describe the distribution shown in Figure 1',
      },
      medium: {
        subject: 'geography',
        level,
        difficulty: 'medium',
        marks: { min: 6, typical: 8, max: 9 },
        questionTypes: ['explain', 'analyse', 'suggest'],
        characteristics: ['Process explanation', 'Cause and effect', 'Case study'],
        commandWords: ['Explain', 'Suggest reasons', 'Analyse', 'Compare'],
        timeAllocation: 10,
        markSchemeType: 'points',
        exampleStructure: 'Explain the formation of [geographical feature]',
      },
      hard: {
        subject: 'geography',
        level,
        difficulty: 'hard',
        marks: { min: 9, typical: 12, max: 20 },
        questionTypes: ['evaluation', 'decision-making', 'synoptic'],
        characteristics: ['Evaluation', 'Sustainability', 'Multiple factors', 'Fieldwork'],
        commandWords: ['Assess', 'Evaluate', 'To what extent', 'Justify'],
        timeAllocation: 18,
        markSchemeType: 'levels',
        exampleStructure: 'Assess the effectiveness of strategies to manage [issue]',
      },
    };
    return geoProfiles[difficulty];
  }

  // BUSINESS STUDIES
  if (subject === 'business') {
    const businessProfiles: Record<Difficulty, SubjectDifficultyProfile> = {
      easy: {
        subject: 'business',
        level,
        difficulty: 'easy',
        marks: { min: 1, typical: 2, max: 4 },
        questionTypes: ['definition', 'identification', 'calculation'],
        characteristics: ['Business terms', 'Simple calculations', 'Basic concepts'],
        commandWords: ['Define', 'State', 'Calculate', 'Identify'],
        timeAllocation: 3,
        markSchemeType: 'points',
        exampleStructure: 'Define [business term] and give an example',
      },
      medium: {
        subject: 'business',
        level,
        difficulty: 'medium',
        marks: { min: 6, typical: 8, max: 10 },
        questionTypes: ['analysis', 'explanation', 'application'],
        characteristics: ['Business analysis', 'Context application', 'Decision factors'],
        commandWords: ['Analyse', 'Explain', 'Discuss', 'Outline'],
        timeAllocation: 10,
        markSchemeType: 'points',
        exampleStructure: 'Analyse two benefits of [business strategy]',
      },
      hard: {
        subject: 'business',
        level,
        difficulty: 'hard',
        marks: { min: 12, typical: 16, max: 25 },
        questionTypes: ['evaluation', 'recommendation', 'strategic analysis'],
        characteristics: ['Strategic thinking', 'Justified recommendations', 'Stakeholder analysis'],
        commandWords: ['Evaluate', 'Recommend', 'Justify', 'To what extent'],
        timeAllocation: 20,
        markSchemeType: 'levels',
        exampleStructure: 'Evaluate whether [company] should [strategic decision]',
      },
    };
    return businessProfiles[difficulty];
  }

  // DEFAULT FALLBACK
  return {
    subject,
    level,
    difficulty,
    marks: { 
      min: difficulty === 'easy' ? 1 : difficulty === 'medium' ? 4 : 8,
      typical: difficulty === 'easy' ? 2 : difficulty === 'medium' ? 6 : 12,
      max: difficulty === 'easy' ? 4 : difficulty === 'medium' ? 8 : 20,
    },
    questionTypes: ['standard'],
    characteristics: ['Generic characteristics'],
    commandWords: ['Answer the question'],
    timeAllocation: difficulty === 'easy' ? 3 : difficulty === 'medium' ? 8 : 15,
    markSchemeType: 'points',
    exampleStructure: 'Standard question format',
  };
}

/**
 * Get exam board specific adjustments
 */
export function getBoardAdjustments(
  board: ExamBoard,
  profile: SubjectDifficultyProfile
): SubjectDifficultyProfile {
  const adjustments: Partial<Record<ExamBoard, Partial<SubjectDifficultyProfile>>> = {
    aqa: {
      // AQA tends to have more structured questions
      commandWords: [...profile.commandWords, 'Using Figure 1', 'With reference to'],
    },
    edexcel: {
      // Edexcel (Pearson) often has slightly higher mark allocations
      marks: {
        min: profile.marks.min,
        typical: Math.ceil(profile.marks.typical * 1.1),
        max: Math.ceil(profile.marks.max * 1.1),
      },
    },
    ocr: {
      // OCR often includes synoptic elements
      characteristics: [...profile.characteristics, 'Synoptic links possible'],
    },
    // wjec support not yet implemented
    // wjec: {
    //   // WJEC sometimes has different terminology
    //   commandWords: profile.commandWords.map(word => 
    //     word === 'Evaluate' ? 'Assess' : word
    //   ),
    // },
  };

  const boardAdjustment = adjustments[board];
  if (boardAdjustment) {
    return { ...profile, ...boardAdjustment };
  }
  
  return profile;
}