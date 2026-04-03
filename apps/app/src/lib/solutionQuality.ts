/**
 * Solution Quality Enhancement System
 * Improves solution clarity, completeness, and educational value
 */

import { Subject, Difficulty, QualificationLevel } from '@/types';

export interface EnhancedSolution {
  primaryMethod: SolutionStep[];
  alternativeMethods?: AlternativeMethod[];
  commonMistakes?: CommonMistake[];
  examTips?: string[];
  linkedConcepts?: string[];
  workingShown: boolean;
  estimatedTime?: number; // minutes
}

export interface SolutionStep {
  step: number;
  description: string;
  working: string;
  reasoning?: string;
  marks?: string[]; // e.g., ["M1", "A1"]
}

export interface AlternativeMethod {
  name: string;
  when: string; // When to use this method
  steps: SolutionStep[];
  advantages?: string[];
  disadvantages?: string[];
}

export interface CommonMistake {
  mistake: string;
  consequence: string;
  howToAvoid: string;
  marksLost: number;
}

/**
 * Enhance a basic solution with educational improvements
 */
export function enhanceSolution(
  basicSolution: string,
  subject: Subject,
  level: QualificationLevel,
  difficulty: Difficulty,
  marks: number,
  questionType?: string
): EnhancedSolution {
  const steps = parseBasicSolution(basicSolution);
  
  const enhanced: EnhancedSolution = {
    primaryMethod: enrichSteps(steps, subject, difficulty),
    workingShown: true,
    estimatedTime: estimateSolutionTime(marks, difficulty, level),
  };

  // Add alternative methods for higher difficulties
  if (difficulty !== 'easy' && marks >= 4) {
    enhanced.alternativeMethods = generateAlternativeMethods(subject, questionType, marks);
  }

  // Add common mistakes
  enhanced.commonMistakes = generateCommonMistakes(subject, difficulty, questionType);

  // Add exam tips
  enhanced.examTips = generateExamTips(subject, level, difficulty, marks);

  // Add linked concepts for deeper understanding
  if (level === 'a-level' || difficulty === 'hard') {
    enhanced.linkedConcepts = generateLinkedConcepts(subject, questionType);
  }

  return enhanced;
}

/**
 * Parse basic solution into steps
 */
function parseBasicSolution(solution: string): SolutionStep[] {
  const lines = solution.split('\n').filter(line => line.trim());
  const steps: SolutionStep[] = [];
  let currentStep = 1;

  for (const line of lines) {
    // Look for step indicators
    if (line.match(/^(step|stage|\d+\.|part)/i)) {
      steps.push({
        step: currentStep++,
        description: line.replace(/^(step|stage|\d+\.|part)\s*\d*:?\s*/i, ''),
        working: '',
      });
    } else if (steps.length > 0) {
      // Add to current step's working
      steps[steps.length - 1].working += (steps[steps.length - 1].working ? '\n' : '') + line;
    } else {
      // Create first step
      steps.push({
        step: currentStep++,
        description: 'Initial approach',
        working: line,
      });
    }
  }

  // If no clear steps found, create structured steps
  if (steps.length === 0) {
    const sentences = solution.match(/[^.!?]+[.!?]+/g) || [solution];
    for (let i = 0; i < sentences.length; i++) {
      steps.push({
        step: i + 1,
        description: getStepDescription(i, sentences.length),
        working: sentences[i].trim(),
      });
    }
  }

  return steps;
}

/**
 * Enrich steps with reasoning and marks
 */
function enrichSteps(
  steps: SolutionStep[],
  subject: Subject,
  difficulty: Difficulty
): SolutionStep[] {
  return steps.map((step, index) => ({
    ...step,
    reasoning: generateStepReasoning(step, index, steps.length, subject, difficulty),
    marks: assignStepMarks(step, index, steps.length, subject),
  }));
}

/**
 * Generate reasoning for each step
 */
function generateStepReasoning(
  step: SolutionStep,
  index: number,
  total: number,
  subject: Subject,
  difficulty: Difficulty
): string {
  const reasoningTemplates = {
    first: [
      'Start by identifying what we need to find',
      'Begin with the given information',
      'Set up the problem systematically',
      'Establish our initial conditions',
    ],
    middle: [
      'Apply the relevant formula/concept',
      'Use the relationship between variables',
      'Continue with the logical progression',
      'Build on the previous result',
    ],
    last: [
      'Conclude with the final answer',
      'Verify our result makes sense',
      'State the solution clearly',
      'Check units and reasonableness',
    ],
  };

  if (index === 0) {
    return reasoningTemplates.first[Math.floor(Math.random() * reasoningTemplates.first.length)];
  } else if (index === total - 1) {
    return reasoningTemplates.last[Math.floor(Math.random() * reasoningTemplates.last.length)];
  } else {
    return reasoningTemplates.middle[Math.floor(Math.random() * reasoningTemplates.middle.length)];
  }
}

/**
 * Assign mark allocations to steps
 */
function assignStepMarks(
  step: SolutionStep,
  index: number,
  total: number,
  subject: Subject
): string[] {
  if (['maths', 'physics', 'chemistry'].includes(subject)) {
    if (step.working.includes('=') || step.working.match(/\$.*\$/)) {
      return index === 0 ? ['M1'] : index === total - 1 ? ['A1'] : ['M1', 'A1 ft'];
    }
  }
  return ['B1'];
}

/**
 * Generate alternative methods
 */
function generateAlternativeMethods(
  subject: Subject,
  questionType?: string,
  marks?: number
): AlternativeMethod[] {
  const alternatives: AlternativeMethod[] = [];

  if (subject === 'maths' && questionType === 'calculation') {
    alternatives.push({
      name: 'Algebraic approach',
      when: 'When comfortable with algebraic manipulation',
      steps: [
        { step: 1, description: 'Set up algebraic equation', working: 'Let x = unknown value' },
        { step: 2, description: 'Solve for x', working: 'Rearrange and simplify' },
      ],
      advantages: ['More general', 'Shows clear reasoning'],
      disadvantages: ['Can be longer', 'More chance for errors'],
    });

    if (marks && marks >= 6) {
      alternatives.push({
        name: 'Graphical method',
        when: 'When visualization helps or checking answer',
        steps: [
          { step: 1, description: 'Plot relevant functions', working: 'Draw accurate graphs' },
          { step: 2, description: 'Find intersection/solution', working: 'Read from graph' },
        ],
        advantages: ['Visual understanding', 'Can check reasonableness'],
        disadvantages: ['Less precise', 'Takes more time'],
      });
    }
  } else if (['physics', 'chemistry'].includes(subject)) {
    alternatives.push({
      name: 'Formula-first approach',
      when: 'When you remember the exact formula',
      steps: [
        { step: 1, description: 'State relevant formula', working: 'Write equation with symbols' },
        { step: 2, description: 'Substitute values', working: 'Replace symbols with numbers and units' },
        { step: 3, description: 'Calculate result', working: 'Compute and check units' },
      ],
      advantages: ['Systematic', 'Less likely to miss steps'],
    });
  }

  return alternatives;
}

/**
 * Generate common mistakes for the question type
 */
function generateCommonMistakes(
  subject: Subject,
  difficulty: Difficulty,
  questionType?: string
): CommonMistake[] {
  const mistakes: CommonMistake[] = [];

  // Universal mistakes
  mistakes.push({
    mistake: 'Not reading the question carefully',
    consequence: 'Answering wrong thing or missing key information',
    howToAvoid: 'Underline key words and requirements in the question',
    marksLost: 2,
  });

  // Subject-specific mistakes
  if (['maths', 'physics', 'chemistry'].includes(subject)) {
    mistakes.push({
      mistake: 'Forgetting units or using wrong units',
      consequence: 'Loses final accuracy mark even if method correct',
      howToAvoid: 'Write units at every step and check dimensional consistency',
      marksLost: 1,
    });

    if (difficulty !== 'easy') {
      mistakes.push({
        mistake: 'Arithmetic errors in calculation',
        consequence: 'Wrong final answer despite correct method',
        howToAvoid: 'Check calculations, especially with calculator use',
        marksLost: 1,
      });
    }
  }

  if (subject === 'maths') {
    mistakes.push({
      mistake: 'Not showing sufficient working',
      consequence: 'Cannot earn method marks if answer wrong',
      howToAvoid: 'Write down every step, even if seems obvious',
      marksLost: Math.ceil(difficulty === 'hard' ? 3 : 2),
    });
  }

  if (['history', 'english-literature', 'economics'].includes(subject)) {
    mistakes.push({
      mistake: 'Not using specific examples or evidence',
      consequence: 'Answer too vague for higher mark bands',
      howToAvoid: 'Include dates, quotes, statistics, or specific cases',
      marksLost: Math.ceil(difficulty === 'hard' ? 4 : 2),
    });
  }

  return mistakes;
}

/**
 * Generate exam tips
 */
function generateExamTips(
  subject: Subject,
  level: QualificationLevel,
  difficulty: Difficulty,
  marks: number
): string[] {
  const tips: string[] = [];

  // Time management tip
  const timeMinutes = estimateSolutionTime(marks, difficulty, level);
  tips.push(`Allocate approximately ${timeMinutes} minutes for this question`);

  // Mark-specific tips
  if (marks >= 6) {
    tips.push('Plan your answer briefly before starting to write');
  }

  // Difficulty-specific tips
  if (difficulty === 'hard') {
    tips.push('If stuck, try a different approach or move on and return later');
    tips.push('Check your answer makes sense in context');
  } else if (difficulty === 'easy') {
    tips.push('Don\'t overthink - straightforward approach usually works');
  }

  // Subject-specific tips
  if (['maths', 'physics', 'chemistry'].includes(subject)) {
    tips.push('Show all working even for "simple" steps');
    if (level === 'a-level') {
      tips.push('Consider whether calculus methods might simplify the problem');
    }
  } else if (['history', 'english-literature'].includes(subject)) {
    tips.push('Start with a clear thesis statement');
    tips.push('Use topic sentences for each paragraph');
    if (marks >= 10) {
      tips.push('Include a brief conclusion that addresses the question');
    }
  }

  return tips;
}

/**
 * Generate linked concepts for deeper understanding
 */
function generateLinkedConcepts(
  subject: Subject,
  questionType?: string
): string[] {
  const concepts: string[] = [];

  const subjectLinks: Record<Subject, string[]> = {
    'maths': [
      'This connects to differentiation/integration',
      'Related to sequences and series',
      'Applications in mechanics/statistics',
      'Links to proof techniques',
    ],
    'physics': [
      'Conservation laws apply here',
      'Relates to wave phenomena',
      'Connected to energy transfers',
      'Links to particle physics',
    ],
    'chemistry': [
      'Relates to bonding and structure',
      'Connected to reaction kinetics',
      'Links to equilibrium concepts',
      'Applications in organic synthesis',
    ],
    'biology': [
      'Connected to evolution and adaptation',
      'Relates to homeostasis',
      'Links to ecology and ecosystems',
      'Applications in medicine',
    ],
    'economics': [
      'Relates to market structures',
      'Connected to government intervention',
      'Links to international trade',
      'Applications in current events',
    ],
    'history': [
      'Connects to broader historical themes',
      'Links to cause and consequence',
      'Relates to change and continuity',
      'Historiographical perspectives',
    ],
    'english-literature': [
      'Connects to literary movements',
      'Links to authorial context',
      'Relates to genre conventions',
      'Critical theory applications',
    ],
    'computer-science': [
      'Relates to algorithm complexity',
      'Connected to data structures',
      'Links to system architecture',
      'Applications in real systems',
    ],
    'psychology': [
      'Connects to research methods',
      'Links to biological basis',
      'Relates to applications',
      'Theoretical perspectives',
    ],
    'geography': [
      'Connects to human-environment interaction',
      'Links to global systems',
      'Relates to sustainability',
      'Case study applications',
    ],
    'business': [
      'Relates to business objectives',
      'Connected to stakeholder analysis',
      'Links to market analysis',
      'Strategic applications',
    ],
    'further-maths': [
      'Advanced proof techniques',
      'Complex number applications',
      'Matrix transformations',
      'Differential equations',
    ],
    'combined-science': [
      'Cross-discipline connections',
      'Practical applications',
      'Scientific method',
      'Real-world phenomena',
    ],
  };

  const links = subjectLinks[subject] || ['Connects to broader subject principles'];
  return links.slice(0, 3);
}

/**
 * Estimate solution time based on marks and difficulty
 */
function estimateSolutionTime(
  marks: number,
  difficulty: Difficulty,
  level: QualificationLevel
): number {
  const baseTime = level === 'a-level' ? 1.5 : 1.2; // Minutes per mark
  const difficultyMultiplier = difficulty === 'hard' ? 1.3 : difficulty === 'medium' ? 1.1 : 1.0;
  
  return Math.ceil(marks * baseTime * difficultyMultiplier);
}

/**
 * Get step description based on position
 */
function getStepDescription(index: number, total: number): string {
  if (index === 0) return 'Initial setup';
  if (index === total - 1) return 'Final answer';
  if (total === 2) return 'Solution';
  
  const middle = ['Calculation', 'Analysis', 'Development', 'Progression', 'Continuation'];
  return middle[index % middle.length];
}

/**
 * Format enhanced solution for display
 */
export function formatEnhancedSolution(solution: EnhancedSolution): string {
  let formatted = '**Solution:**\n\n';

  // Primary method
  for (const step of solution.primaryMethod) {
    formatted += `**Step ${step.step}:** ${step.description}\n`;
    formatted += `${step.working}\n`;
    if (step.reasoning) {
      formatted += `*Reasoning: ${step.reasoning}*\n`;
    }
    if (step.marks && step.marks.length > 0) {
      formatted += `[${step.marks.join(', ')}]\n`;
    }
    formatted += '\n';
  }

  // Alternative methods
  if (solution.alternativeMethods && solution.alternativeMethods.length > 0) {
    formatted += '\n**Alternative Methods:**\n';
    for (const alt of solution.alternativeMethods) {
      formatted += `\n*${alt.name}* (${alt.when}):\n`;
      for (const step of alt.steps) {
        formatted += `  ${step.step}. ${step.description}: ${step.working}\n`;
      }
      if (alt.advantages) {
        formatted += `  Advantages: ${alt.advantages.join(', ')}\n`;
      }
    }
  }

  // Common mistakes
  if (solution.commonMistakes && solution.commonMistakes.length > 0) {
    formatted += '\n**Common Mistakes to Avoid:**\n';
    for (const mistake of solution.commonMistakes) {
      formatted += `• ${mistake.mistake} (${mistake.marksLost} marks lost)\n`;
      formatted += `  → ${mistake.howToAvoid}\n`;
    }
  }

  // Exam tips
  if (solution.examTips && solution.examTips.length > 0) {
    formatted += '\n**Exam Tips:**\n';
    for (const tip of solution.examTips) {
      formatted += `• ${tip}\n`;
    }
  }

  // Linked concepts
  if (solution.linkedConcepts && solution.linkedConcepts.length > 0) {
    formatted += '\n**Related Concepts:**\n';
    for (const concept of solution.linkedConcepts) {
      formatted += `• ${concept}\n`;
    }
  }

  if (solution.estimatedTime) {
    formatted += `\n*Estimated time: ${solution.estimatedTime} minutes*\n`;
  }

  return formatted;
}