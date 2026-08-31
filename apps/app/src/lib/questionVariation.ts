/**
 * Stateless question-variation briefs.
 *
 * Each generation request gets a randomly composed "variation brief" injected
 * into the prompt: a scenario context, a question angle, and a numbers
 * directive. This forces diversity at the source instead of relying on
 * temperature, and being stateless it works on serverless/edge runtimes
 * (unlike the old in-memory pattern tracker, which reset on every cold start).
 *
 * The brief is contextual dressing only — prompts must still constrain the
 * assessed content to the requested subtopic, which is handled separately by
 * topicAdherence.
 */

import { Subject, Difficulty } from '@/types';

const SCENARIOS: Partial<Record<Subject, string[]>> = {
  'maths': [
    'a real-world application (money, travel, sport, cooking)',
    'a pure/abstract setting with no real-world dressing',
    'a geometric context',
    'a finance or budgeting scenario',
    'data from a scientific experiment',
    'an engineering or construction problem',
    'a statistical survey (NOT about student heights or study hours)',
    'a game or puzzle setting',
    'an optimisation task',
    'a pattern or sequence investigation',
  ],
  'further-maths': [
    'a pure/abstract setting',
    'a mechanics context',
    'a modelling problem',
    'a proof-oriented setting',
    'an applied engineering context',
  ],
  'physics': [
    'a laboratory experiment',
    'an everyday phenomenon at home',
    'a space or astronomy setting',
    'an engineering design decision',
    'a sports application',
    'a medical technology context',
    'an environmental or energy context',
    'a transport scenario (cars, trains, cycling)',
    'a safety analysis',
  ],
  'chemistry': [
    'an industrial process',
    'an environmental issue',
    'pharmaceutical development',
    'forensic analysis',
    'food science',
    'materials engineering',
    'energy production',
    'a school laboratory practical',
  ],
  'biology': [
    'a medical case study',
    'an ecological field study',
    'an evolutionary example',
    'an agricultural application',
    'a conservation effort',
    'a biotechnology context',
    'human health and lifestyle',
    'animal behaviour observation',
    'a microscopy investigation',
  ],
  'combined-science': [
    'a school laboratory practical',
    'an everyday phenomenon',
    'an environmental context',
    'a health and medicine context',
    'an industrial application',
  ],
  'economics': [
    'a current-events style scenario',
    'a historical case',
    'a government policy decision',
    'a business pricing decision',
    'international trade',
    'consumer behaviour',
    'a developing-economy context',
  ],
  'business': [
    'a small local startup',
    'a large multinational',
    'a family-run business',
    'an online-only retailer',
    'a manufacturer',
    'a service business',
  ],
  'psychology': [
    'a classic study replication',
    'a modern everyday behaviour',
    'a clinical setting',
    'a workplace setting',
    'a school setting',
  ],
  'geography': [
    'a UK-based example',
    'a contrasting LIC/NEE example',
    'a coastal setting',
    'an urban setting',
    'a rural setting',
    'a hazard-prone region',
  ],
  'history': [
    'a source-analysis framing',
    'a causation framing',
    'a change-and-continuity framing',
    'a significance framing',
  ],
  'english-literature': [
    'a character-focused framing',
    'a theme-focused framing',
    'a methods/language-focused framing',
    'a context-focused framing',
  ],
  'computer-science': [
    'a mobile app being developed',
    'a school records system',
    'a game being programmed',
    'an online shop backend',
    'a robotics/embedded context',
  ],
};

const DEFAULT_SCENARIOS = [
  'a practical real-world application',
  'a theoretical exploration',
  'a data-driven scenario',
  'a comparative scenario',
];

const ANGLES = [
  'a direct, forward-style task',
  'a reverse/working-backwards task (give the result, ask for an input)',
  'a multi-step problem where earlier parts feed later parts',
  'a spot-the-error task built around a plausible mistake',
  'an interpretation task based on given data or a description',
  'a short structured task with two or three related parts',
  'a "justify your answer" task requiring a decision plus reasoning',
];

const NUMBER_STYLES = [
  'Use numbers that are NOT round (avoid 10, 100, 200, 50%).',
  'Use realistic messy values appropriate to the context.',
  'Use small simple values so the method, not arithmetic, is the challenge.',
  'Use at least one decimal or fractional value.',
];

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

/**
 * Build the per-request variation brief to append to a generation prompt.
 */
export function buildVariationBrief(
  subject: Subject,
  subtopic: string,
  difficulty: Difficulty
): string {
  const scenario = pick(SCENARIOS[subject] ?? DEFAULT_SCENARIOS);
  const angle = pick(ANGLES);
  const numberStyle = pick(NUMBER_STYLES);
  const complexityNote = difficulty === 'easy'
    ? 'Keep the scenario minimal so the setting never obscures the simple task.'
    : difficulty === 'hard'
      ? 'The scenario may add a genuine layer of complexity (extra information to select from, or a constraint to notice).'
      : 'Keep the scenario realistic but uncluttered.';

  return `
VARIATION BRIEF (make this question distinct):
- Frame the question as ${scenario}.
- Structure it as ${angle}.
- ${numberStyle}
- ${complexityNote}
- The scenario is context ONLY: everything assessed must stay strictly within "${subtopic}".`;
}

/**
 * Build the exclusion directive from the student's recently seen questions.
 * Prefixes are capped by the caller/schema; this trims defensively anyway.
 */
export function buildExclusionDirective(excludePrefixes: string[]): string {
  const exclusions = excludePrefixes
    .filter(p => typeof p === 'string' && p.trim().length > 0)
    .slice(-10)
    .map(p => p.slice(0, 120));

  if (exclusions.length === 0) return '';

  return `
ALREADY-SEEN QUESTIONS (the student has just answered these — your question must be clearly different):
${exclusions.map((content, i) => `${i + 1}. "${content}..."`).join('\n')}

Use a different scenario, different structure, and different numbers from every question listed above.`;
}
