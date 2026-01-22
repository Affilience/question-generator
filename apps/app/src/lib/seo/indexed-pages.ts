/**
 * SEO INDEXED PAGES CONFIGURATION
 * ================================
 *
 * This file defines which pages should be indexed by Google.
 * Only pages in these allowlists will have `index: true` in robots metadata.
 *
 * IMPORTANT RULES:
 * ================
 * 1. Only add pages with VERIFIED search demand (monthly volume > 100)
 * 2. Only add pages with UNIQUE content (300-500 words minimum)
 * 3. Only add pages that pass the SEO READINESS CHECKLIST below
 * 4. Do NOT index pages just because they exist in the navigation
 *
 * SEO READINESS CHECKLIST (must pass ALL to index):
 * =================================================
 * [ ] Unique title tag (not template-generated)
 * [ ] Unique meta description (150-160 chars)
 * [ ] 300-500 words of topic-specific content
 * [ ] 3+ sample questions with solutions
 * [ ] Proper H1/H2/H3 structure
 * [ ] 5+ internal links to related pages
 * [ ] Breadcrumbs implemented
 * [ ] JSON-LD structured data
 * [ ] Canonical URL set
 * [ ] No thin content warnings from SEO audit tools
 *
 * MODEL A: BOARDLESS SEO STRUCTURE
 * ================================
 * We use boardless URLs as the primary SEO targets:
 * - /gcse/maths/algebra (topic page - aggregates all boards)
 * - /gcse/maths/algebra/simultaneous-equations (subtopic page - aggregates all boards)
 *
 * Board-specific pages (/gcse/maths/aqa/algebra) are NOT indexed.
 * They exist for app functionality only.
 *
 * This approach:
 * - Avoids content duplication (3 "Algebra" pages → 1 "Algebra" page)
 * - Consolidates link equity
 * - Simplifies sitemap management
 * - Builds faster domain authority
 */

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

export interface IndexedBoardlessTopic {
  level: string;
  subject: string;
  topic: string;
}

export interface IndexedBoardlessSubtopic {
  level: string;
  subject: string;
  topic: string;
  subtopic: string;
}

// Legacy types for board-specific pages (deprecated - use boardless instead)
export interface IndexedSubtopic {
  level: string;
  subject: string;
  examBoard: string;
  topic: string;
  subtopic: string;
}

export interface IndexedExamBoard {
  level: string;
  subject: string;
  examBoard: string;
}

// ============================================================================
// BOARDLESS TOPIC PAGES (Model A - PRIMARY SEO TARGETS)
// ============================================================================

/**
 * INDEXED BOARDLESS TOPIC PAGES
 * =============================
 *
 * These are the primary SEO targets for topic-level pages.
 * URLs: /gcse/maths/algebra, /gcse/physics/forces, etc.
 *
 * Criteria for inclusion:
 * 1. Monthly search volume > 100 for "[level] [subject] [topic]" queries
 * 2. 300+ words of unique content about the topic
 * 3. Comprehensive list of subtopics
 * 4. Clear internal linking to subtopics
 *
 * YEAR 1 TARGET: 50-100 indexed topic pages
 * Start with highest-traffic subjects (Maths, Physics, Chemistry, Biology)
 */
export const INDEXED_BOARDLESS_TOPICS: IndexedBoardlessTopic[] = [
  // ===========================================
  // GCSE MATHS - All core topics (high demand)
  // ===========================================
  { level: 'gcse', subject: 'maths', topic: 'algebra' },
  { level: 'gcse', subject: 'maths', topic: 'geometry' },
  { level: 'gcse', subject: 'maths', topic: 'number' },
  { level: 'gcse', subject: 'maths', topic: 'statistics' },
  { level: 'gcse', subject: 'maths', topic: 'probability' },
  { level: 'gcse', subject: 'maths', topic: 'ratio' },

  // ===========================================
  // GCSE PHYSICS - Core topics
  // ===========================================
  { level: 'gcse', subject: 'physics', topic: 'forces' },
  { level: 'gcse', subject: 'physics', topic: 'energy' },
  { level: 'gcse', subject: 'physics', topic: 'waves' },
  { level: 'gcse', subject: 'physics', topic: 'electricity' },
  { level: 'gcse', subject: 'physics', topic: 'magnetism' },
  { level: 'gcse', subject: 'physics', topic: 'particle-model' },
  { level: 'gcse', subject: 'physics', topic: 'atomic-structure' },
  { level: 'gcse', subject: 'physics', topic: 'space' },

  // ===========================================
  // GCSE CHEMISTRY - Core topics
  // ===========================================
  { level: 'gcse', subject: 'chemistry', topic: 'atomic-structure' },
  { level: 'gcse', subject: 'chemistry', topic: 'bonding' },
  { level: 'gcse', subject: 'chemistry', topic: 'quantitative-chemistry' },
  { level: 'gcse', subject: 'chemistry', topic: 'chemical-changes' },
  { level: 'gcse', subject: 'chemistry', topic: 'energy-changes' },
  { level: 'gcse', subject: 'chemistry', topic: 'rates-of-reaction' },
  { level: 'gcse', subject: 'chemistry', topic: 'organic-chemistry' },
  { level: 'gcse', subject: 'chemistry', topic: 'chemical-analysis' },
  { level: 'gcse', subject: 'chemistry', topic: 'atmosphere' },
  { level: 'gcse', subject: 'chemistry', topic: 'using-resources' },

  // ===========================================
  // GCSE BIOLOGY - Core topics
  // ===========================================
  { level: 'gcse', subject: 'biology', topic: 'cell-biology' },
  { level: 'gcse', subject: 'biology', topic: 'organisation' },
  { level: 'gcse', subject: 'biology', topic: 'infection-and-response' },
  { level: 'gcse', subject: 'biology', topic: 'bioenergetics' },
  { level: 'gcse', subject: 'biology', topic: 'homeostasis' },
  { level: 'gcse', subject: 'biology', topic: 'inheritance' },
  { level: 'gcse', subject: 'biology', topic: 'ecology' },

  // ===========================================
  // A-LEVEL MATHS - Core topics
  // ===========================================
  { level: 'a-level', subject: 'maths', topic: 'pure' },
  { level: 'a-level', subject: 'maths', topic: 'statistics' },
  { level: 'a-level', subject: 'maths', topic: 'mechanics' },

  // ===========================================
  // A-LEVEL PHYSICS
  // ===========================================
  { level: 'a-level', subject: 'physics', topic: 'mechanics' },
  { level: 'a-level', subject: 'physics', topic: 'materials' },
  { level: 'a-level', subject: 'physics', topic: 'waves' },
  { level: 'a-level', subject: 'physics', topic: 'electricity' },
  { level: 'a-level', subject: 'physics', topic: 'quantum' },
  { level: 'a-level', subject: 'physics', topic: 'fields' },
  { level: 'a-level', subject: 'physics', topic: 'nuclear' },

  // ===========================================
  // A-LEVEL CHEMISTRY
  // ===========================================
  { level: 'a-level', subject: 'chemistry', topic: 'physical-chemistry' },
  { level: 'a-level', subject: 'chemistry', topic: 'inorganic-chemistry' },
  { level: 'a-level', subject: 'chemistry', topic: 'organic-chemistry' },

  // ===========================================
  // GCSE ENGLISH LITERATURE - High demand
  // ===========================================
  { level: 'gcse', subject: 'english-literature', topic: 'shakespeare' },
  { level: 'gcse', subject: 'english-literature', topic: '19th-century' },
  { level: 'gcse', subject: 'english-literature', topic: 'modern-texts' },
  { level: 'gcse', subject: 'english-literature', topic: 'poetry' },
  { level: 'gcse', subject: 'english-literature', topic: 'unseen-poetry' },
  { level: 'gcse', subject: 'english-literature', topic: 'skills' },

  // ===========================================
  // GCSE HISTORY - High demand
  // ===========================================
  { level: 'gcse', subject: 'history', topic: 'medicine' },
  { level: 'gcse', subject: 'history', topic: 'crime-punishment' },
  { level: 'gcse', subject: 'history', topic: 'germany' },
  { level: 'gcse', subject: 'history', topic: 'cold-war' },
  { level: 'gcse', subject: 'history', topic: 'elizabethan' },
  { level: 'gcse', subject: 'history', topic: 'norman' },

  // ===========================================
  // GCSE GEOGRAPHY - High demand
  // ===========================================
  { level: 'gcse', subject: 'geography', topic: 'natural-hazards' },
  { level: 'gcse', subject: 'geography', topic: 'ecosystems' },
  { level: 'gcse', subject: 'geography', topic: 'physical-landscapes' },
  { level: 'gcse', subject: 'geography', topic: 'urban' },
  { level: 'gcse', subject: 'geography', topic: 'development' },
  { level: 'gcse', subject: 'geography', topic: 'resources' },
  { level: 'gcse', subject: 'geography', topic: 'fieldwork' },

  // ===========================================
  // GCSE COMPUTER SCIENCE
  // ===========================================
  { level: 'gcse', subject: 'computer-science', topic: 'systems' },
  { level: 'gcse', subject: 'computer-science', topic: 'data' },
  { level: 'gcse', subject: 'computer-science', topic: 'networks' },
  { level: 'gcse', subject: 'computer-science', topic: 'security' },
  { level: 'gcse', subject: 'computer-science', topic: 'programming' },
  { level: 'gcse', subject: 'computer-science', topic: 'ethics' },

  // ===========================================
  // GCSE BUSINESS & ECONOMICS
  // ===========================================
  { level: 'gcse', subject: 'business', topic: 'enterprise' },
  { level: 'gcse', subject: 'business', topic: 'marketing' },
  { level: 'gcse', subject: 'business', topic: 'operations' },
  { level: 'gcse', subject: 'business', topic: 'finance' },
  { level: 'gcse', subject: 'business', topic: 'hr' },
  { level: 'gcse', subject: 'business', topic: 'external' },
  { level: 'gcse', subject: 'economics', topic: 'introduction' },
  { level: 'gcse', subject: 'economics', topic: 'markets' },
  { level: 'gcse', subject: 'economics', topic: 'business' },
  { level: 'gcse', subject: 'economics', topic: 'labour' },
  { level: 'gcse', subject: 'economics', topic: 'macro' },
  { level: 'gcse', subject: 'economics', topic: 'government' },
  { level: 'gcse', subject: 'economics', topic: 'international' },

  // ===========================================
  // GCSE PSYCHOLOGY
  // ===========================================
  { level: 'gcse', subject: 'psychology', topic: 'memory' },
  { level: 'gcse', subject: 'psychology', topic: 'perception' },
  { level: 'gcse', subject: 'psychology', topic: 'development' },
  { level: 'gcse', subject: 'psychology', topic: 'research-methods' },
  { level: 'gcse', subject: 'psychology', topic: 'social' },
  { level: 'gcse', subject: 'psychology', topic: 'language' },
  { level: 'gcse', subject: 'psychology', topic: 'brain' },
  { level: 'gcse', subject: 'psychology', topic: 'psychological-problems' },

  // ===========================================
  // A-LEVEL BIOLOGY
  // ===========================================
  { level: 'a-level', subject: 'biology', topic: 'cells' },
  { level: 'a-level', subject: 'biology', topic: 'molecules' },
  { level: 'a-level', subject: 'biology', topic: 'exchange' },
  { level: 'a-level', subject: 'biology', topic: 'genetics' },
  { level: 'a-level', subject: 'biology', topic: 'energy' },
  { level: 'a-level', subject: 'biology', topic: 'organisms' },
  { level: 'a-level', subject: 'biology', topic: 'control' },
  { level: 'a-level', subject: 'biology', topic: 'genetics-evolution' },
  { level: 'a-level', subject: 'biology', topic: 'ecology' },
  { level: 'a-level', subject: 'biology', topic: 'immunity' },
  { level: 'a-level', subject: 'biology', topic: 'biotechnology' },

  // ===========================================
  // A-LEVEL ENGLISH LITERATURE
  // ===========================================
  { level: 'a-level', subject: 'english-literature', topic: 'shakespeare' },
  { level: 'a-level', subject: 'english-literature', topic: 'poetry' },
  { level: 'a-level', subject: 'english-literature', topic: 'prose' },
  { level: 'a-level', subject: 'english-literature', topic: 'drama' },
  { level: 'a-level', subject: 'english-literature', topic: 'skills' },
  { level: 'a-level', subject: 'english-literature', topic: 'gothic' },
  { level: 'a-level', subject: 'english-literature', topic: 'tragedy' },

  // ===========================================
  // A-LEVEL HISTORY
  // ===========================================
  { level: 'a-level', subject: 'history', topic: 'tudors' },
  { level: 'a-level', subject: 'history', topic: 'stuarts' },
  { level: 'a-level', subject: 'history', topic: 'britain-1900-1951' },
  { level: 'a-level', subject: 'history', topic: 'russia' },
  { level: 'a-level', subject: 'history', topic: 'america' },
  { level: 'a-level', subject: 'history', topic: 'germany' },
  { level: 'a-level', subject: 'history', topic: 'international' },

  // ===========================================
  // A-LEVEL GEOGRAPHY
  // ===========================================
  { level: 'a-level', subject: 'geography', topic: 'physical' },
  { level: 'a-level', subject: 'geography', topic: 'human' },
  { level: 'a-level', subject: 'geography', topic: 'fieldwork' },

  // ===========================================
  // A-LEVEL COMPUTER SCIENCE
  // ===========================================
  { level: 'a-level', subject: 'computer-science', topic: 'fundamentals' },
  { level: 'a-level', subject: 'computer-science', topic: 'systems' },
  { level: 'a-level', subject: 'computer-science', topic: 'networks' },
  { level: 'a-level', subject: 'computer-science', topic: 'data-structures' },
  { level: 'a-level', subject: 'computer-science', topic: 'algorithms' },
  { level: 'a-level', subject: 'computer-science', topic: 'programming' },
  { level: 'a-level', subject: 'computer-science', topic: 'databases' },
  { level: 'a-level', subject: 'computer-science', topic: 'theory' },

  // ===========================================
  // A-LEVEL BUSINESS & ECONOMICS
  // ===========================================
  { level: 'a-level', subject: 'business', topic: 'marketing' },
  { level: 'a-level', subject: 'business', topic: 'operations' },
  { level: 'a-level', subject: 'business', topic: 'finance' },
  { level: 'a-level', subject: 'business', topic: 'hr' },
  { level: 'a-level', subject: 'business', topic: 'strategy' },
  { level: 'a-level', subject: 'business', topic: 'external' },
  { level: 'a-level', subject: 'economics', topic: 'micro' },
  { level: 'a-level', subject: 'economics', topic: 'market-failure' },
  { level: 'a-level', subject: 'economics', topic: 'firm' },
  { level: 'a-level', subject: 'economics', topic: 'labour' },
  { level: 'a-level', subject: 'economics', topic: 'macro' },
  { level: 'a-level', subject: 'economics', topic: 'policy' },
  { level: 'a-level', subject: 'economics', topic: 'international' },
  { level: 'a-level', subject: 'economics', topic: 'development' },

  // ===========================================
  // A-LEVEL PSYCHOLOGY & SOCIOLOGY
  // ===========================================
  { level: 'a-level', subject: 'psychology', topic: 'approaches' },
  { level: 'a-level', subject: 'psychology', topic: 'biopsychology' },
  { level: 'a-level', subject: 'psychology', topic: 'memory' },
  { level: 'a-level', subject: 'psychology', topic: 'attachment' },
  { level: 'a-level', subject: 'psychology', topic: 'social' },
  { level: 'a-level', subject: 'psychology', topic: 'psychopathology' },
  { level: 'a-level', subject: 'psychology', topic: 'research-methods' },
  { level: 'a-level', subject: 'psychology', topic: 'issues-debates' },
  { level: 'a-level', subject: 'psychology', topic: 'relationships' },
  { level: 'a-level', subject: 'psychology', topic: 'aggression' },

  // ===========================================
  // A-LEVEL FURTHER MATHS
  // ===========================================
  { level: 'a-level', subject: 'further-maths', topic: 'fm-alevel-aqa-proof' },
  { level: 'a-level', subject: 'further-maths', topic: 'fm-alevel-aqa-complex-numbers' },
  { level: 'a-level', subject: 'further-maths', topic: 'fm-alevel-aqa-matrices' },
  { level: 'a-level', subject: 'further-maths', topic: 'fm-alevel-aqa-further-algebra' },
  { level: 'a-level', subject: 'further-maths', topic: 'fm-alevel-aqa-further-calculus' },
  { level: 'a-level', subject: 'further-maths', topic: 'fm-alevel-aqa-further-vectors' },
  { level: 'a-level', subject: 'further-maths', topic: 'fm-alevel-aqa-polar' },
  { level: 'a-level', subject: 'further-maths', topic: 'fm-alevel-aqa-hyperbolic' },
  { level: 'a-level', subject: 'further-maths', topic: 'fm-alevel-aqa-diff-equations' },
  { level: 'a-level', subject: 'further-maths', topic: 'fm-alevel-aqa-further-pure' },
  { level: 'a-level', subject: 'further-maths', topic: 'fm-alevel-aqa-further-stats' },
  { level: 'a-level', subject: 'further-maths', topic: 'fm-alevel-aqa-further-mechanics' },
  { level: 'a-level', subject: 'further-maths', topic: 'fm-alevel-aqa-discrete' },
];

// ============================================================================
// BOARDLESS SUBTOPIC PAGES (Model A - PRIMARY SEO TARGETS)
// ============================================================================

/**
 * INDEXED BOARDLESS SUBTOPIC PAGES
 * =================================
 *
 * These are the primary SEO targets for long-tail keyword traffic.
 * URLs: /gcse/maths/algebra/simultaneous-equations, etc.
 *
 * Criteria for inclusion:
 * 1. Monthly search volume > 100
 * 2. Distinct search intent (not a method/difficulty variation)
 * 3. 500+ words of unique content possible
 * 4. 3+ sample questions with solutions
 * 5. Not a subset of a broader topic that's already indexed
 *
 * YEAR 1 TARGET: 300-600 indexed subtopic pages
 * YEAR 2 TARGET: 1800-2200 total
 * HARD CAP: 5000 (avoid thin content dilution)
 *
 * Examples of GOOD subtopics to index:
 * - "simultaneous-equations" (distinct topic, high volume)
 * - "pythagoras-theorem" (named theorem, searchable)
 * - "quadratic-formula" (specific method with demand)
 *
 * Examples of BAD subtopics (don't index):
 * - "hcf-lcm-using-venn-diagrams" (method variation)
 * - "expanding-triple-brackets-h" (tier variation)
 * - "solving-one-step-equations" (too basic, merge into parent)
 */
export const INDEXED_BOARDLESS_SUBTOPICS: IndexedBoardlessSubtopic[] = [
  // ===========================================
  // GCSE MATHS - Algebra (valid slugs from topics.ts)
  // ===========================================
  { level: 'gcse', subject: 'maths', topic: 'algebra', subtopic: 'solving-simultaneous-equations-algebraically' },
  { level: 'gcse', subject: 'maths', topic: 'algebra', subtopic: 'solving-simultaneous-equations-graphically' },
  { level: 'gcse', subject: 'maths', topic: 'algebra', subtopic: 'solving-quadratics-by-factorising' },
  { level: 'gcse', subject: 'maths', topic: 'algebra', subtopic: 'solving-quadratics-using-the-formula-h' },
  { level: 'gcse', subject: 'maths', topic: 'algebra', subtopic: 'solving-quadratics-by-completing-the-square-h' },
  { level: 'gcse', subject: 'maths', topic: 'algebra', subtopic: 'solving-quadratics-graphically' },
  { level: 'gcse', subject: 'maths', topic: 'algebra', subtopic: 'factorising-quadratics' },
  { level: 'gcse', subject: 'maths', topic: 'algebra', subtopic: 'completing-the-square-h' },
  { level: 'gcse', subject: 'maths', topic: 'algebra', subtopic: 'plotting-linear-graphs' },
  { level: 'gcse', subject: 'maths', topic: 'algebra', subtopic: 'equation-of-a-straight-line-y-equals-mx-c' },
  { level: 'gcse', subject: 'maths', topic: 'algebra', subtopic: 'solving-linear-inequalities' },
  { level: 'gcse', subject: 'maths', topic: 'algebra', subtopic: 'solving-quadratic-inequalities-h' },
  { level: 'gcse', subject: 'maths', topic: 'algebra', subtopic: 'nth-term-of-linear-sequences' },
  { level: 'gcse', subject: 'maths', topic: 'algebra', subtopic: 'nth-term-of-quadratic-sequences-h' },
  { level: 'gcse', subject: 'maths', topic: 'algebra', subtopic: 'geometric-sequences-h' },
  { level: 'gcse', subject: 'maths', topic: 'algebra', subtopic: 'expanding-single-brackets' },
  { level: 'gcse', subject: 'maths', topic: 'algebra', subtopic: 'expanding-double-brackets' },
  { level: 'gcse', subject: 'maths', topic: 'algebra', subtopic: 'algebraic-fractions-h' },
  { level: 'gcse', subject: 'maths', topic: 'algebra', subtopic: 'changing-the-subject-of-a-formula' },
  { level: 'gcse', subject: 'maths', topic: 'algebra', subtopic: 'substitution-into-expressions' },
  { level: 'gcse', subject: 'maths', topic: 'algebra', subtopic: 'substitution-into-formulae' },
  { level: 'gcse', subject: 'maths', topic: 'algebra', subtopic: 'simplifying-expressions' },
  { level: 'gcse', subject: 'maths', topic: 'algebra', subtopic: 'collecting-like-terms' },
  { level: 'gcse', subject: 'maths', topic: 'algebra', subtopic: 'solving-equations-with-unknowns-on-both-sides' },
  { level: 'gcse', subject: 'maths', topic: 'algebra', subtopic: 'forming-equations' },
  { level: 'gcse', subject: 'maths', topic: 'algebra', subtopic: 'quadratic-graphs' },
  { level: 'gcse', subject: 'maths', topic: 'algebra', subtopic: 'cubic-graphs' },
  { level: 'gcse', subject: 'maths', topic: 'algebra', subtopic: 'gradient-of-a-line' },
  { level: 'gcse', subject: 'maths', topic: 'algebra', subtopic: 'y-intercept' },
  { level: 'gcse', subject: 'maths', topic: 'algebra', subtopic: 'parallel-lines' },
  { level: 'gcse', subject: 'maths', topic: 'algebra', subtopic: 'perpendicular-lines-h' },
  { level: 'gcse', subject: 'maths', topic: 'algebra', subtopic: 'function-notation-h' },
  { level: 'gcse', subject: 'maths', topic: 'algebra', subtopic: 'composite-functions-h' },
  { level: 'gcse', subject: 'maths', topic: 'algebra', subtopic: 'inverse-functions-h' },
  { level: 'gcse', subject: 'maths', topic: 'algebra', subtopic: 'iteration-h' },
  { level: 'gcse', subject: 'maths', topic: 'algebra', subtopic: 'algebraic-argument-and-proof-h' },
  { level: 'gcse', subject: 'maths', topic: 'algebra', subtopic: 'graph-transformations-h' },
  { level: 'gcse', subject: 'maths', topic: 'algebra', subtopic: 'distance-time-graphs' },
  { level: 'gcse', subject: 'maths', topic: 'algebra', subtopic: 'velocity-time-graphs' },
  { level: 'gcse', subject: 'maths', topic: 'algebra', subtopic: 'real-life-graphs-interpretation' },

  // ===========================================
  // GCSE MATHS - Geometry (valid slugs from topics.ts)
  // ===========================================
  { level: 'gcse', subject: 'maths', topic: 'geometry', subtopic: 'pythagoras-theorem' },
  { level: 'gcse', subject: 'maths', topic: 'geometry', subtopic: 'pythagoras-in-2d' },
  { level: 'gcse', subject: 'maths', topic: 'geometry', subtopic: 'pythagoras-in-3d-h' },
  { level: 'gcse', subject: 'maths', topic: 'geometry', subtopic: 'trigonometric-ratios-sohcahtoa' },
  { level: 'gcse', subject: 'maths', topic: 'geometry', subtopic: 'finding-sides-using-trigonometry' },
  { level: 'gcse', subject: 'maths', topic: 'geometry', subtopic: 'finding-angles-using-trigonometry' },
  { level: 'gcse', subject: 'maths', topic: 'geometry', subtopic: 'sine-rule-h' },
  { level: 'gcse', subject: 'maths', topic: 'geometry', subtopic: 'cosine-rule-h' },
  { level: 'gcse', subject: 'maths', topic: 'geometry', subtopic: 'area-of-triangle-using-sine-h' },
  { level: 'gcse', subject: 'maths', topic: 'geometry', subtopic: 'exact-trigonometric-values-h' },
  { level: 'gcse', subject: 'maths', topic: 'geometry', subtopic: 'trigonometry-in-3d-h' },
  { level: 'gcse', subject: 'maths', topic: 'geometry', subtopic: 'circle-theorems-h' },
  { level: 'gcse', subject: 'maths', topic: 'geometry', subtopic: 'angles-in-the-same-segment-h' },
  { level: 'gcse', subject: 'maths', topic: 'geometry', subtopic: 'angle-at-centre-theorem-h' },
  { level: 'gcse', subject: 'maths', topic: 'geometry', subtopic: 'interior-angles-of-polygons' },
  { level: 'gcse', subject: 'maths', topic: 'geometry', subtopic: 'exterior-angles-of-polygons' },
  { level: 'gcse', subject: 'maths', topic: 'geometry', subtopic: 'angle-sum-of-polygons' },
  { level: 'gcse', subject: 'maths', topic: 'geometry', subtopic: 'angles-in-triangles' },
  { level: 'gcse', subject: 'maths', topic: 'geometry', subtopic: 'angles-in-parallel-lines' },
  { level: 'gcse', subject: 'maths', topic: 'geometry', subtopic: 'corresponding-angles' },
  { level: 'gcse', subject: 'maths', topic: 'geometry', subtopic: 'alternate-angles' },
  { level: 'gcse', subject: 'maths', topic: 'geometry', subtopic: 'similar-shapes' },
  { level: 'gcse', subject: 'maths', topic: 'geometry', subtopic: 'congruent-triangles' },
  { level: 'gcse', subject: 'maths', topic: 'geometry', subtopic: 'scale-factors' },
  { level: 'gcse', subject: 'maths', topic: 'geometry', subtopic: 'area-of-rectangles' },
  { level: 'gcse', subject: 'maths', topic: 'geometry', subtopic: 'area-of-triangles' },
  { level: 'gcse', subject: 'maths', topic: 'geometry', subtopic: 'area-of-compound-shapes' },
  { level: 'gcse', subject: 'maths', topic: 'geometry', subtopic: 'perimeter-of-shapes' },
  { level: 'gcse', subject: 'maths', topic: 'geometry', subtopic: 'circumference-of-a-circle' },
  { level: 'gcse', subject: 'maths', topic: 'geometry', subtopic: 'area-of-a-circle' },
  { level: 'gcse', subject: 'maths', topic: 'geometry', subtopic: 'arc-length' },
  { level: 'gcse', subject: 'maths', topic: 'geometry', subtopic: 'sector-area' },
  { level: 'gcse', subject: 'maths', topic: 'geometry', subtopic: 'volume-of-prisms' },
  { level: 'gcse', subject: 'maths', topic: 'geometry', subtopic: 'volume-of-cylinders' },
  { level: 'gcse', subject: 'maths', topic: 'geometry', subtopic: 'volume-of-cones-h' },
  { level: 'gcse', subject: 'maths', topic: 'geometry', subtopic: 'volume-of-spheres-h' },
  { level: 'gcse', subject: 'maths', topic: 'geometry', subtopic: 'volume-of-pyramids-h' },
  { level: 'gcse', subject: 'maths', topic: 'geometry', subtopic: 'surface-area-of-3d-shapes' },
  { level: 'gcse', subject: 'maths', topic: 'geometry', subtopic: 'three-figure-bearings' },
  { level: 'gcse', subject: 'maths', topic: 'geometry', subtopic: 'bearings-calculations' },
  { level: 'gcse', subject: 'maths', topic: 'geometry', subtopic: 'enlargements' },
  { level: 'gcse', subject: 'maths', topic: 'geometry', subtopic: 'rotations' },
  { level: 'gcse', subject: 'maths', topic: 'geometry', subtopic: 'reflections' },
  { level: 'gcse', subject: 'maths', topic: 'geometry', subtopic: 'translations' },
  { level: 'gcse', subject: 'maths', topic: 'geometry', subtopic: 'describing-transformations' },
  { level: 'gcse', subject: 'maths', topic: 'geometry', subtopic: 'constructions-with-ruler-and-compass' },
  { level: 'gcse', subject: 'maths', topic: 'geometry', subtopic: 'loci' },
  { level: 'gcse', subject: 'maths', topic: 'geometry', subtopic: 'column-vectors' },
  { level: 'gcse', subject: 'maths', topic: 'geometry', subtopic: 'adding-and-subtracting-vectors' },
  { level: 'gcse', subject: 'maths', topic: 'geometry', subtopic: 'geometric-proofs-using-vectors-h' },

  // ===========================================
  // GCSE MATHS - Number (valid slugs from topics.ts)
  // ===========================================
  { level: 'gcse', subject: 'maths', topic: 'number', subtopic: 'fractions' },
  { level: 'gcse', subject: 'maths', topic: 'number', subtopic: 'adding-and-subtracting-fractions' },
  { level: 'gcse', subject: 'maths', topic: 'number', subtopic: 'multiplying-and-dividing-fractions' },
  { level: 'gcse', subject: 'maths', topic: 'number', subtopic: 'fractions-of-amounts' },
  { level: 'gcse', subject: 'maths', topic: 'number', subtopic: 'percentages' },
  { level: 'gcse', subject: 'maths', topic: 'number', subtopic: 'percentage-of-an-amount' },
  { level: 'gcse', subject: 'maths', topic: 'number', subtopic: 'percentage-increase-and-decrease' },
  { level: 'gcse', subject: 'maths', topic: 'number', subtopic: 'percentage-change' },
  { level: 'gcse', subject: 'maths', topic: 'number', subtopic: 'reverse-percentages' },
  { level: 'gcse', subject: 'maths', topic: 'number', subtopic: 'compound-interest' },
  { level: 'gcse', subject: 'maths', topic: 'number', subtopic: 'simple-interest' },
  { level: 'gcse', subject: 'maths', topic: 'number', subtopic: 'repeated-percentage-change' },
  { level: 'gcse', subject: 'maths', topic: 'number', subtopic: 'standard-form' },
  { level: 'gcse', subject: 'maths', topic: 'number', subtopic: 'converting-to-and-from-standard-form' },
  { level: 'gcse', subject: 'maths', topic: 'number', subtopic: 'calculations-in-standard-form' },
  { level: 'gcse', subject: 'maths', topic: 'number', subtopic: 'simplifying-surds-h' },
  { level: 'gcse', subject: 'maths', topic: 'number', subtopic: 'rationalising-denominators-h' },
  { level: 'gcse', subject: 'maths', topic: 'number', subtopic: 'calculations-with-surds-h' },
  { level: 'gcse', subject: 'maths', topic: 'number', subtopic: 'index-notation' },
  { level: 'gcse', subject: 'maths', topic: 'number', subtopic: 'laws-of-indices' },
  { level: 'gcse', subject: 'maths', topic: 'number', subtopic: 'negative-indices-h' },
  { level: 'gcse', subject: 'maths', topic: 'number', subtopic: 'fractional-indices-h' },
  { level: 'gcse', subject: 'maths', topic: 'number', subtopic: 'highest-common-factor-hcf' },
  { level: 'gcse', subject: 'maths', topic: 'number', subtopic: 'lowest-common-multiple-lcm' },
  { level: 'gcse', subject: 'maths', topic: 'number', subtopic: 'prime-factorisation' },
  { level: 'gcse', subject: 'maths', topic: 'number', subtopic: 'prime-numbers' },
  { level: 'gcse', subject: 'maths', topic: 'number', subtopic: 'factors-and-multiples' },
  { level: 'gcse', subject: 'maths', topic: 'number', subtopic: 'squares-and-square-roots' },
  { level: 'gcse', subject: 'maths', topic: 'number', subtopic: 'cubes-and-cube-roots' },
  { level: 'gcse', subject: 'maths', topic: 'number', subtopic: 'operations-with-negative-numbers' },
  { level: 'gcse', subject: 'maths', topic: 'number', subtopic: 'order-of-operations-bidmas' },
  { level: 'gcse', subject: 'maths', topic: 'number', subtopic: 'recurring-decimals-h' },
  { level: 'gcse', subject: 'maths', topic: 'number', subtopic: 'estimation-and-approximation' },
  { level: 'gcse', subject: 'maths', topic: 'number', subtopic: 'rounding-to-significant-figures' },
  { level: 'gcse', subject: 'maths', topic: 'number', subtopic: 'rounding-to-decimal-places' },
  { level: 'gcse', subject: 'maths', topic: 'number', subtopic: 'error-intervals' },
  { level: 'gcse', subject: 'maths', topic: 'number', subtopic: 'upper-and-lower-bounds-h' },

  // ===========================================
  // GCSE MATHS - Ratio & Proportion (valid slugs from topics.ts)
  // ===========================================
  { level: 'gcse', subject: 'maths', topic: 'ratio', subtopic: 'writing-ratios' },
  { level: 'gcse', subject: 'maths', topic: 'ratio', subtopic: 'simplifying-ratios' },
  { level: 'gcse', subject: 'maths', topic: 'ratio', subtopic: 'dividing-in-a-ratio' },
  { level: 'gcse', subject: 'maths', topic: 'ratio', subtopic: 'sharing-in-a-ratio-given-total' },
  { level: 'gcse', subject: 'maths', topic: 'ratio', subtopic: 'ratio-problems' },
  { level: 'gcse', subject: 'maths', topic: 'ratio', subtopic: 'direct-proportion' },
  { level: 'gcse', subject: 'maths', topic: 'ratio', subtopic: 'inverse-proportion' },
  { level: 'gcse', subject: 'maths', topic: 'ratio', subtopic: 'direct-proportion-equations-h' },
  { level: 'gcse', subject: 'maths', topic: 'ratio', subtopic: 'inverse-proportion-equations-h' },
  { level: 'gcse', subject: 'maths', topic: 'ratio', subtopic: 'graphs-of-proportional-relationships-h' },
  { level: 'gcse', subject: 'maths', topic: 'ratio', subtopic: 'speed' },
  { level: 'gcse', subject: 'maths', topic: 'ratio', subtopic: 'distance-speed-time-calculations' },
  { level: 'gcse', subject: 'maths', topic: 'ratio', subtopic: 'density' },
  { level: 'gcse', subject: 'maths', topic: 'ratio', subtopic: 'mass-density-volume-calculations' },
  { level: 'gcse', subject: 'maths', topic: 'ratio', subtopic: 'pressure-h' },
  { level: 'gcse', subject: 'maths', topic: 'ratio', subtopic: 'best-buy-problems' },
  { level: 'gcse', subject: 'maths', topic: 'ratio', subtopic: 'unit-pricing' },
  { level: 'gcse', subject: 'maths', topic: 'ratio', subtopic: 'converting-metric-units' },
  { level: 'gcse', subject: 'maths', topic: 'ratio', subtopic: 'converting-compound-units' },
  { level: 'gcse', subject: 'maths', topic: 'ratio', subtopic: 'scale-factors' },
  { level: 'gcse', subject: 'maths', topic: 'ratio', subtopic: 'scale-drawings' },
  { level: 'gcse', subject: 'maths', topic: 'ratio', subtopic: 'length-ratios-in-similar-shapes' },
  { level: 'gcse', subject: 'maths', topic: 'ratio', subtopic: 'area-ratios-in-similar-shapes-h' },
  { level: 'gcse', subject: 'maths', topic: 'ratio', subtopic: 'volume-ratios-in-similar-shapes-h' },
  { level: 'gcse', subject: 'maths', topic: 'ratio', subtopic: 'growth-and-decay-problems' },
  { level: 'gcse', subject: 'maths', topic: 'ratio', subtopic: 'exponential-growth' },
  { level: 'gcse', subject: 'maths', topic: 'ratio', subtopic: 'exponential-decay' },

  // ===========================================
  // GCSE MATHS - Statistics (valid slugs from topics.ts)
  // ===========================================
  { level: 'gcse', subject: 'maths', topic: 'statistics', subtopic: 'mean' },
  { level: 'gcse', subject: 'maths', topic: 'statistics', subtopic: 'median' },
  { level: 'gcse', subject: 'maths', topic: 'statistics', subtopic: 'mode' },
  { level: 'gcse', subject: 'maths', topic: 'statistics', subtopic: 'range' },
  { level: 'gcse', subject: 'maths', topic: 'statistics', subtopic: 'quartiles' },
  { level: 'gcse', subject: 'maths', topic: 'statistics', subtopic: 'interquartile-range' },
  { level: 'gcse', subject: 'maths', topic: 'statistics', subtopic: 'mean-from-frequency-tables' },
  { level: 'gcse', subject: 'maths', topic: 'statistics', subtopic: 'estimated-mean-from-grouped-data' },
  { level: 'gcse', subject: 'maths', topic: 'statistics', subtopic: 'comparing-data-using-averages' },
  { level: 'gcse', subject: 'maths', topic: 'statistics', subtopic: 'histograms-h' },
  { level: 'gcse', subject: 'maths', topic: 'statistics', subtopic: 'frequency-density-h' },
  { level: 'gcse', subject: 'maths', topic: 'statistics', subtopic: 'cumulative-frequency-diagrams' },
  { level: 'gcse', subject: 'maths', topic: 'statistics', subtopic: 'box-plots' },
  { level: 'gcse', subject: 'maths', topic: 'statistics', subtopic: 'frequency-tables' },
  { level: 'gcse', subject: 'maths', topic: 'statistics', subtopic: 'grouped-frequency-tables' },
  { level: 'gcse', subject: 'maths', topic: 'statistics', subtopic: 'pie-charts' },
  { level: 'gcse', subject: 'maths', topic: 'statistics', subtopic: 'bar-charts' },
  { level: 'gcse', subject: 'maths', topic: 'statistics', subtopic: 'frequency-polygons' },
  { level: 'gcse', subject: 'maths', topic: 'statistics', subtopic: 'stem-and-leaf-diagrams' },
  { level: 'gcse', subject: 'maths', topic: 'statistics', subtopic: 'scatter-graphs' },
  { level: 'gcse', subject: 'maths', topic: 'statistics', subtopic: 'correlation' },
  { level: 'gcse', subject: 'maths', topic: 'statistics', subtopic: 'positive-and-negative-correlation' },
  { level: 'gcse', subject: 'maths', topic: 'statistics', subtopic: 'lines-of-best-fit' },
  { level: 'gcse', subject: 'maths', topic: 'statistics', subtopic: 'using-lines-of-best-fit' },
  { level: 'gcse', subject: 'maths', topic: 'statistics', subtopic: 'sampling-methods' },
  { level: 'gcse', subject: 'maths', topic: 'statistics', subtopic: 'stratified-sampling-h' },
  { level: 'gcse', subject: 'maths', topic: 'statistics', subtopic: 'comparing-distributions' },

  // ===========================================
  // GCSE MATHS - Probability (valid slugs from topics.ts)
  // ===========================================
  { level: 'gcse', subject: 'maths', topic: 'probability', subtopic: 'probability-of-single-events' },
  { level: 'gcse', subject: 'maths', topic: 'probability', subtopic: 'calculating-simple-probability' },
  { level: 'gcse', subject: 'maths', topic: 'probability', subtopic: 'probability-scale' },
  { level: 'gcse', subject: 'maths', topic: 'probability', subtopic: 'tree-diagrams' },
  { level: 'gcse', subject: 'maths', topic: 'probability', subtopic: 'venn-diagrams-for-probability' },
  { level: 'gcse', subject: 'maths', topic: 'probability', subtopic: 'sample-spaces' },
  { level: 'gcse', subject: 'maths', topic: 'probability', subtopic: 'listing-all-outcomes-systematically' },
  { level: 'gcse', subject: 'maths', topic: 'probability', subtopic: 'relative-frequency' },
  { level: 'gcse', subject: 'maths', topic: 'probability', subtopic: 'expected-frequency' },
  { level: 'gcse', subject: 'maths', topic: 'probability', subtopic: 'independent-events' },
  { level: 'gcse', subject: 'maths', topic: 'probability', subtopic: 'dependent-events' },
  { level: 'gcse', subject: 'maths', topic: 'probability', subtopic: 'with-and-without-replacement' },
  { level: 'gcse', subject: 'maths', topic: 'probability', subtopic: 'conditional-probability-h' },
  { level: 'gcse', subject: 'maths', topic: 'probability', subtopic: 'mutually-exclusive-events' },
  { level: 'gcse', subject: 'maths', topic: 'probability', subtopic: 'and-rule-multiplication' },
  { level: 'gcse', subject: 'maths', topic: 'probability', subtopic: 'or-rule-addition' },
  { level: 'gcse', subject: 'maths', topic: 'probability', subtopic: 'combined-probability' },
  { level: 'gcse', subject: 'maths', topic: 'probability', subtopic: 'probability-from-frequency-tables' },

  // ===========================================
  // GCSE PHYSICS (valid slugs from topics.ts)
  // ===========================================
  // Forces
  { level: 'gcse', subject: 'physics', topic: 'physics-forces', subtopic: 'weight-equation-w-equals-mg' },
  { level: 'gcse', subject: 'physics', topic: 'physics-forces', subtopic: 'mass-vs-weight' },
  { level: 'gcse', subject: 'physics', topic: 'physics-forces', subtopic: 'resultant-force-definition' },
  { level: 'gcse', subject: 'physics', topic: 'physics-forces', subtopic: 'balanced-and-unbalanced-forces' },
  { level: 'gcse', subject: 'physics', topic: 'physics-forces', subtopic: 'free-body-diagrams' },
  { level: 'gcse', subject: 'physics', topic: 'physics-forces', subtopic: 'work-done-equation-w-equals-fs' },
  { level: 'gcse', subject: 'physics', topic: 'physics-forces', subtopic: 'hookes-law-f-equals-ke' },
  { level: 'gcse', subject: 'physics', topic: 'physics-forces', subtopic: 'newtons-first-law' },
  { level: 'gcse', subject: 'physics', topic: 'physics-forces', subtopic: 'force-mass-acceleration-f-equals-ma' },
  { level: 'gcse', subject: 'physics', topic: 'physics-forces', subtopic: 'newtons-third-law' },
  { level: 'gcse', subject: 'physics', topic: 'physics-forces', subtopic: 'acceleration-definition' },
  { level: 'gcse', subject: 'physics', topic: 'physics-forces', subtopic: 'terminal-velocity-definition' },
  { level: 'gcse', subject: 'physics', topic: 'physics-forces', subtopic: 'stopping-distance' },
  { level: 'gcse', subject: 'physics', topic: 'physics-forces', subtopic: 'momentum-equation-p-equals-mv-h' },
  { level: 'gcse', subject: 'physics', topic: 'physics-forces', subtopic: 'conservation-of-momentum-h' },
  { level: 'gcse', subject: 'physics', topic: 'physics-forces', subtopic: 'turning-effect-of-a-force-moment-t' },
  { level: 'gcse', subject: 'physics', topic: 'physics-forces', subtopic: 'pressure-in-liquids-p-equals-hg-t' },
  // Energy
  { level: 'gcse', subject: 'physics', topic: 'physics-energy', subtopic: 'energy-transfers-between-stores' },
  { level: 'gcse', subject: 'physics', topic: 'physics-energy', subtopic: 'kinetic-energy-calculations-ke-equals-mv-squared' },
  { level: 'gcse', subject: 'physics', topic: 'physics-energy', subtopic: 'gravitational-potential-energy-calculations-gpe-equals-mgh' },
  { level: 'gcse', subject: 'physics', topic: 'physics-energy', subtopic: 'elastic-potential-energy-calculations-epe-equals-ke-squared' },
  { level: 'gcse', subject: 'physics', topic: 'physics-energy', subtopic: 'specific-heat-capacity' },
  { level: 'gcse', subject: 'physics', topic: 'physics-energy', subtopic: 'power-as-rate-of-energy-transfer-p-equals-et' },
  { level: 'gcse', subject: 'physics', topic: 'physics-energy', subtopic: 'calculating-efficiency' },
  { level: 'gcse', subject: 'physics', topic: 'physics-energy', subtopic: 'renewable-energy-resources-solar-wind-hydroelectric-tidal-wave-geothermal-biomass' },
  { level: 'gcse', subject: 'physics', topic: 'physics-energy', subtopic: 'non-renewable-energy-resources-fossil-fuels-nuclear' },
  // Waves
  { level: 'gcse', subject: 'physics', topic: 'physics-waves', subtopic: 'transverse-waves' },
  { level: 'gcse', subject: 'physics', topic: 'physics-waves', subtopic: 'longitudinal-waves' },
  { level: 'gcse', subject: 'physics', topic: 'physics-waves', subtopic: 'wave-equation-v-equals-f' },
  { level: 'gcse', subject: 'physics', topic: 'physics-waves', subtopic: 'electromagnetic-spectrum' },
  { level: 'gcse', subject: 'physics', topic: 'physics-waves', subtopic: 'reflection-of-waves' },
  { level: 'gcse', subject: 'physics', topic: 'physics-waves', subtopic: 'refraction-definition-t' },
  { level: 'gcse', subject: 'physics', topic: 'physics-waves', subtopic: 'sound-as-longitudinal-waves' },
  { level: 'gcse', subject: 'physics', topic: 'physics-waves', subtopic: 'radio-waves-tv-radio-communications' },
  { level: 'gcse', subject: 'physics', topic: 'physics-waves', subtopic: 'ionising-vs-non-ionising-radiation' },
  // Electricity
  { level: 'gcse', subject: 'physics', topic: 'physics-electricity', subtopic: 'ohms-law-v-equals-ir' },
  { level: 'gcse', subject: 'physics', topic: 'physics-electricity', subtopic: 'series-circuit-rules' },
  { level: 'gcse', subject: 'physics', topic: 'physics-electricity', subtopic: 'parallel-circuit-rules' },
  { level: 'gcse', subject: 'physics', topic: 'physics-electricity', subtopic: 'electric-current-as-flow-of-charge' },
  { level: 'gcse', subject: 'physics', topic: 'physics-electricity', subtopic: 'potential-difference-voltage' },
  { level: 'gcse', subject: 'physics', topic: 'physics-electricity', subtopic: 'calculating-resistance' },
  { level: 'gcse', subject: 'physics', topic: 'physics-electricity', subtopic: 'electrical-power-p-equals-iv' },
  { level: 'gcse', subject: 'physics', topic: 'physics-electricity', subtopic: 'uk-mains-supply-230v-50hz' },
  { level: 'gcse', subject: 'physics', topic: 'physics-electricity', subtopic: 'structure-of-the-national-grid' },
  { level: 'gcse', subject: 'physics', topic: 'physics-electricity', subtopic: 'step-up-transformers' },
  { level: 'gcse', subject: 'physics', topic: 'physics-electricity', subtopic: 'static-electricity-from-friction' },
  // Magnetism
  { level: 'gcse', subject: 'physics', topic: 'physics-magnetism', subtopic: 'magnetic-field-definition' },
  { level: 'gcse', subject: 'physics', topic: 'physics-magnetism', subtopic: 'magnetic-field-lines' },
  { level: 'gcse', subject: 'physics', topic: 'physics-magnetism', subtopic: 'electromagnets' },
  { level: 'gcse', subject: 'physics', topic: 'physics-magnetism', subtopic: 'flemings-left-hand-rule' },
  { level: 'gcse', subject: 'physics', topic: 'physics-magnetism', subtopic: 'dc-motor-construction' },
  { level: 'gcse', subject: 'physics', topic: 'physics-magnetism', subtopic: 'electromagnetic-induction-h' },
  { level: 'gcse', subject: 'physics', topic: 'physics-magnetism', subtopic: 'ac-generators-alternators-h' },
  // Atomic structure
  { level: 'gcse', subject: 'physics', topic: 'physics-atomic-structure', subtopic: 'atomic-structure-protons-neutrons-electrons' },
  { level: 'gcse', subject: 'physics', topic: 'physics-atomic-structure', subtopic: 'isotopes-definition' },
  { level: 'gcse', subject: 'physics', topic: 'physics-atomic-structure', subtopic: 'radioactive-decay-as-a-random-process' },
  { level: 'gcse', subject: 'physics', topic: 'physics-atomic-structure', subtopic: 'alpha-decay-helium-nuclei' },
  { level: 'gcse', subject: 'physics', topic: 'physics-atomic-structure', subtopic: 'beta-decay-electrons-from-nucleus' },
  { level: 'gcse', subject: 'physics', topic: 'physics-atomic-structure', subtopic: 'gamma-radiation-electromagnetic-waves' },
  { level: 'gcse', subject: 'physics', topic: 'physics-atomic-structure', subtopic: 'half-life-definition' },
  { level: 'gcse', subject: 'physics', topic: 'physics-atomic-structure', subtopic: 'nuclear-fission-definition' },
  { level: 'gcse', subject: 'physics', topic: 'physics-atomic-structure', subtopic: 'nuclear-fusion-definition' },
  { level: 'gcse', subject: 'physics', topic: 'physics-atomic-structure', subtopic: 'medical-tracers-diagnostic-imaging' },
  { level: 'gcse', subject: 'physics', topic: 'physics-atomic-structure', subtopic: 'hazards-of-radioactive-contamination' },
  // Particle model
  { level: 'gcse', subject: 'physics', topic: 'physics-particle-model', subtopic: 'density-equation-equals-mv' },
  { level: 'gcse', subject: 'physics', topic: 'physics-particle-model', subtopic: 'three-states-of-matter-solid-liquid-gas' },
  { level: 'gcse', subject: 'physics', topic: 'physics-particle-model', subtopic: 'particle-arrangement-in-solids-liquids-gases' },
  { level: 'gcse', subject: 'physics', topic: 'physics-particle-model', subtopic: 'specific-latent-heat-definition' },
  { level: 'gcse', subject: 'physics', topic: 'physics-particle-model', subtopic: 'relationship-between-pressure-volume-and-temperature-h' },
  { level: 'gcse', subject: 'physics', topic: 'physics-particle-model', subtopic: 'internal-energy-definition' },
  // Space (Triple only)
  { level: 'gcse', subject: 'physics', topic: 'physics-space', subtopic: 'structure-of-the-solar-system-t' },
  { level: 'gcse', subject: 'physics', topic: 'physics-space', subtopic: 'star-formation-from-nebulae-t' },
  { level: 'gcse', subject: 'physics', topic: 'physics-space', subtopic: 'main-sequence-stars-t' },
  { level: 'gcse', subject: 'physics', topic: 'physics-space', subtopic: 'red-shift-definition-t' },
  { level: 'gcse', subject: 'physics', topic: 'physics-space', subtopic: 'big-bang-theory-t' },

  // ===========================================
  // GCSE CHEMISTRY (~80 subtopics)
  // ===========================================
  // Atomic structure
  { level: 'gcse', subject: 'chemistry', topic: 'aqa-gcse-chemistry-atomic-structure', subtopic: 'atoms-elements-and-compounds' },
  { level: 'gcse', subject: 'chemistry', topic: 'aqa-gcse-chemistry-atomic-structure', subtopic: 'structure-of-an-atom' },
  { level: 'gcse', subject: 'chemistry', topic: 'aqa-gcse-chemistry-atomic-structure', subtopic: 'protons-neutrons-and-electrons' },
  { level: 'gcse', subject: 'chemistry', topic: 'aqa-gcse-chemistry-atomic-structure', subtopic: 'electronic-structure' },
  { level: 'gcse', subject: 'chemistry', topic: 'aqa-gcse-chemistry-atomic-structure', subtopic: 'isotopes' },
  { level: 'gcse', subject: 'chemistry', topic: 'aqa-gcse-chemistry-atomic-structure', subtopic: 'relative-atomic-mass' },
  { level: 'gcse', subject: 'chemistry', topic: 'aqa-gcse-chemistry-atomic-structure', subtopic: 'the-modern-periodic-table' },
  { level: 'gcse', subject: 'chemistry', topic: 'aqa-gcse-chemistry-atomic-structure', subtopic: 'group-1-the-alkali-metals' },
  { level: 'gcse', subject: 'chemistry', topic: 'aqa-gcse-chemistry-atomic-structure', subtopic: 'group-7-the-halogens' },
  { level: 'gcse', subject: 'chemistry', topic: 'aqa-gcse-chemistry-atomic-structure', subtopic: 'group-0-the-noble-gases' },
  { level: 'gcse', subject: 'chemistry', topic: 'aqa-gcse-chemistry-atomic-structure', subtopic: 'transition-metals' },
  { level: 'gcse', subject: 'chemistry', topic: 'aqa-gcse-chemistry-atomic-structure', subtopic: 'development-of-the-periodic-table' },
  // Bonding
  { level: 'gcse', subject: 'chemistry', topic: 'aqa-gcse-chemistry-bonding', subtopic: 'ionic-bonding' },
  { level: 'gcse', subject: 'chemistry', topic: 'aqa-gcse-chemistry-bonding', subtopic: 'covalent-bonding' },
  { level: 'gcse', subject: 'chemistry', topic: 'aqa-gcse-chemistry-bonding', subtopic: 'metallic-bonding' },
  { level: 'gcse', subject: 'chemistry', topic: 'aqa-gcse-chemistry-bonding', subtopic: 'ionic-compounds' },
  { level: 'gcse', subject: 'chemistry', topic: 'aqa-gcse-chemistry-bonding', subtopic: 'properties-of-small-molecules' },
  { level: 'gcse', subject: 'chemistry', topic: 'aqa-gcse-chemistry-bonding', subtopic: 'giant-covalent-structures' },
  { level: 'gcse', subject: 'chemistry', topic: 'aqa-gcse-chemistry-bonding', subtopic: 'diamond-structure-and-properties' },
  { level: 'gcse', subject: 'chemistry', topic: 'aqa-gcse-chemistry-bonding', subtopic: 'graphite-structure-and-properties' },
  { level: 'gcse', subject: 'chemistry', topic: 'aqa-gcse-chemistry-bonding', subtopic: 'graphene' },
  { level: 'gcse', subject: 'chemistry', topic: 'aqa-gcse-chemistry-bonding', subtopic: 'fullerenes' },
  { level: 'gcse', subject: 'chemistry', topic: 'aqa-gcse-chemistry-bonding', subtopic: 'properties-of-metals' },
  { level: 'gcse', subject: 'chemistry', topic: 'aqa-gcse-chemistry-bonding', subtopic: 'alloys' },
  { level: 'gcse', subject: 'chemistry', topic: 'aqa-gcse-chemistry-bonding', subtopic: 'nanoparticles' },
  // Quantitative chemistry
  { level: 'gcse', subject: 'chemistry', topic: 'aqa-gcse-chemistry-quantitative', subtopic: 'the-mole' },
  { level: 'gcse', subject: 'chemistry', topic: 'aqa-gcse-chemistry-quantitative', subtopic: 'balancing-chemical-equations' },
  { level: 'gcse', subject: 'chemistry', topic: 'aqa-gcse-chemistry-quantitative', subtopic: 'concentration-in-gdm-cubed' },
  { level: 'gcse', subject: 'chemistry', topic: 'aqa-gcse-chemistry-quantitative', subtopic: 'relative-formula-mass-mr' },
  { level: 'gcse', subject: 'chemistry', topic: 'aqa-gcse-chemistry-quantitative', subtopic: 'calculating-moles-from-mass' },
  { level: 'gcse', subject: 'chemistry', topic: 'aqa-gcse-chemistry-quantitative', subtopic: 'limiting-reactants' },
  { level: 'gcse', subject: 'chemistry', topic: 'aqa-gcse-chemistry-quantitative', subtopic: 'reacting-mass-calculations' },
  { level: 'gcse', subject: 'chemistry', topic: 'aqa-gcse-chemistry-quantitative', subtopic: 'atom-economy' },
  { level: 'gcse', subject: 'chemistry', topic: 'aqa-gcse-chemistry-quantitative', subtopic: 'percentage-yield' },
  { level: 'gcse', subject: 'chemistry', topic: 'aqa-gcse-chemistry-quantitative', subtopic: 'avogadro-constant' },
  // Chemical changes
  { level: 'gcse', subject: 'chemistry', topic: 'aqa-gcse-chemistry-chemical-changes', subtopic: 'acids-and-alkalis' },
  { level: 'gcse', subject: 'chemistry', topic: 'aqa-gcse-chemistry-chemical-changes', subtopic: 'electrolysis' },
  { level: 'gcse', subject: 'chemistry', topic: 'aqa-gcse-chemistry-chemical-changes', subtopic: 'the-reactivity-series' },
  { level: 'gcse', subject: 'chemistry', topic: 'aqa-gcse-chemistry-chemical-changes', subtopic: 'oxidation-and-reduction-redox' },
  { level: 'gcse', subject: 'chemistry', topic: 'aqa-gcse-chemistry-chemical-changes', subtopic: 'neutralisation-reactions' },
  { level: 'gcse', subject: 'chemistry', topic: 'aqa-gcse-chemistry-chemical-changes', subtopic: 'making-soluble-salts' },
  { level: 'gcse', subject: 'chemistry', topic: 'aqa-gcse-chemistry-chemical-changes', subtopic: 'the-ph-scale' },
  { level: 'gcse', subject: 'chemistry', topic: 'aqa-gcse-chemistry-chemical-changes', subtopic: 'strong-and-weak-acids-ht' },
  { level: 'gcse', subject: 'chemistry', topic: 'aqa-gcse-chemistry-chemical-changes', subtopic: 'extraction-of-metals-and-reduction' },
  { level: 'gcse', subject: 'chemistry', topic: 'aqa-gcse-chemistry-chemical-changes', subtopic: 'electrolysis-of-aqueous-solutions' },
  // Energy changes
  { level: 'gcse', subject: 'chemistry', topic: 'aqa-gcse-chemistry-energy', subtopic: 'exothermic-reactions' },
  { level: 'gcse', subject: 'chemistry', topic: 'aqa-gcse-chemistry-energy', subtopic: 'endothermic-reactions' },
  { level: 'gcse', subject: 'chemistry', topic: 'aqa-gcse-chemistry-energy', subtopic: 'reaction-profiles-for-exothermic-reactions' },
  { level: 'gcse', subject: 'chemistry', topic: 'aqa-gcse-chemistry-energy', subtopic: 'reaction-profiles-for-endothermic-reactions' },
  { level: 'gcse', subject: 'chemistry', topic: 'aqa-gcse-chemistry-energy', subtopic: 'bond-energies-ht' },
  { level: 'gcse', subject: 'chemistry', topic: 'aqa-gcse-chemistry-energy', subtopic: 'chemical-cells-ht' },
  { level: 'gcse', subject: 'chemistry', topic: 'aqa-gcse-chemistry-energy', subtopic: 'hydrogen-fuel-cells-ht' },
  // Rates of reaction
  { level: 'gcse', subject: 'chemistry', topic: 'aqa-gcse-chemistry-rates', subtopic: 'rate-of-reaction' },
  { level: 'gcse', subject: 'chemistry', topic: 'aqa-gcse-chemistry-rates', subtopic: 'collision-theory' },
  { level: 'gcse', subject: 'chemistry', topic: 'aqa-gcse-chemistry-rates', subtopic: 'factors-affecting-rate-of-reaction' },
  { level: 'gcse', subject: 'chemistry', topic: 'aqa-gcse-chemistry-rates', subtopic: 'catalysts' },
  { level: 'gcse', subject: 'chemistry', topic: 'aqa-gcse-chemistry-rates', subtopic: 'reversible-reactions' },
  { level: 'gcse', subject: 'chemistry', topic: 'aqa-gcse-chemistry-rates', subtopic: 'dynamic-equilibrium-ht' },
  { level: 'gcse', subject: 'chemistry', topic: 'aqa-gcse-chemistry-rates', subtopic: 'le-chateliers-principle-ht' },
  // Organic chemistry
  { level: 'gcse', subject: 'chemistry', topic: 'aqa-gcse-chemistry-organic', subtopic: 'alkanes' },
  { level: 'gcse', subject: 'chemistry', topic: 'aqa-gcse-chemistry-organic', subtopic: 'alkenes' },
  { level: 'gcse', subject: 'chemistry', topic: 'aqa-gcse-chemistry-organic', subtopic: 'addition-polymerisation' },
  { level: 'gcse', subject: 'chemistry', topic: 'aqa-gcse-chemistry-organic', subtopic: 'crude-oil' },
  { level: 'gcse', subject: 'chemistry', topic: 'aqa-gcse-chemistry-organic', subtopic: 'fractional-distillation-of-crude-oil' },
  { level: 'gcse', subject: 'chemistry', topic: 'aqa-gcse-chemistry-organic', subtopic: 'cracking' },
  { level: 'gcse', subject: 'chemistry', topic: 'aqa-gcse-chemistry-organic', subtopic: 'complete-combustion' },
  { level: 'gcse', subject: 'chemistry', topic: 'aqa-gcse-chemistry-organic', subtopic: 'alcohols' },
  { level: 'gcse', subject: 'chemistry', topic: 'aqa-gcse-chemistry-organic', subtopic: 'carboxylic-acids' },
  { level: 'gcse', subject: 'chemistry', topic: 'aqa-gcse-chemistry-organic', subtopic: 'esters' },
  // Chemical analysis
  { level: 'gcse', subject: 'chemistry', topic: 'aqa-gcse-chemistry-analysis', subtopic: 'pure-substances' },
  { level: 'gcse', subject: 'chemistry', topic: 'aqa-gcse-chemistry-analysis', subtopic: 'chromatography' },
  { level: 'gcse', subject: 'chemistry', topic: 'aqa-gcse-chemistry-analysis', subtopic: 'test-for-hydrogen' },
  { level: 'gcse', subject: 'chemistry', topic: 'aqa-gcse-chemistry-analysis', subtopic: 'test-for-oxygen' },
  { level: 'gcse', subject: 'chemistry', topic: 'aqa-gcse-chemistry-analysis', subtopic: 'test-for-carbon-dioxide' },
  { level: 'gcse', subject: 'chemistry', topic: 'aqa-gcse-chemistry-analysis', subtopic: 'flame-tests' },
  // Atmosphere
  { level: 'gcse', subject: 'chemistry', topic: 'aqa-gcse-chemistry-atmosphere', subtopic: 'composition-of-the-atmosphere' },
  { level: 'gcse', subject: 'chemistry', topic: 'aqa-gcse-chemistry-atmosphere', subtopic: 'the-greenhouse-effect' },
  { level: 'gcse', subject: 'chemistry', topic: 'aqa-gcse-chemistry-atmosphere', subtopic: 'climate-change' },
  { level: 'gcse', subject: 'chemistry', topic: 'aqa-gcse-chemistry-atmosphere', subtopic: 'carbon-footprint' },
  { level: 'gcse', subject: 'chemistry', topic: 'aqa-gcse-chemistry-atmosphere', subtopic: 'atmospheric-pollutants-from-fuels' },
  // Using resources
  { level: 'gcse', subject: 'chemistry', topic: 'aqa-gcse-chemistry-resources', subtopic: 'water-treatment' },
  { level: 'gcse', subject: 'chemistry', topic: 'aqa-gcse-chemistry-resources', subtopic: 'life-cycle-assessment-lca' },
  { level: 'gcse', subject: 'chemistry', topic: 'aqa-gcse-chemistry-resources', subtopic: 'recycling-materials' },
  { level: 'gcse', subject: 'chemistry', topic: 'aqa-gcse-chemistry-resources', subtopic: 'the-haber-process' },
  { level: 'gcse', subject: 'chemistry', topic: 'aqa-gcse-chemistry-resources', subtopic: 'npk-fertilisers' },

  // ===========================================
  // GCSE BIOLOGY (~80 subtopics)
  // ===========================================
  // Cell biology
  { level: 'gcse', subject: 'biology', topic: 'aqa-gcse-biology-cell-biology', subtopic: 'eukaryotic-and-prokaryotic-cells' },
  { level: 'gcse', subject: 'biology', topic: 'aqa-gcse-biology-cell-biology', subtopic: 'animal-cell-structure' },
  { level: 'gcse', subject: 'biology', topic: 'aqa-gcse-biology-cell-biology', subtopic: 'plant-cell-structure' },
  { level: 'gcse', subject: 'biology', topic: 'aqa-gcse-biology-cell-biology', subtopic: 'mitosis' },
  { level: 'gcse', subject: 'biology', topic: 'aqa-gcse-biology-cell-biology', subtopic: 'diffusion' },
  { level: 'gcse', subject: 'biology', topic: 'aqa-gcse-biology-cell-biology', subtopic: 'osmosis' },
  { level: 'gcse', subject: 'biology', topic: 'aqa-gcse-biology-cell-biology', subtopic: 'active-transport' },
  { level: 'gcse', subject: 'biology', topic: 'aqa-gcse-biology-cell-biology', subtopic: 'the-cell-cycle' },
  { level: 'gcse', subject: 'biology', topic: 'aqa-gcse-biology-cell-biology', subtopic: 'stem-cells' },
  { level: 'gcse', subject: 'biology', topic: 'aqa-gcse-biology-cell-biology', subtopic: 'using-a-light-microscope' },
  { level: 'gcse', subject: 'biology', topic: 'aqa-gcse-biology-cell-biology', subtopic: 'magnification-calculations' },
  // Organisation
  { level: 'gcse', subject: 'biology', topic: 'aqa-gcse-biology-organisation', subtopic: 'digestive-enzymes' },
  { level: 'gcse', subject: 'biology', topic: 'aqa-gcse-biology-organisation', subtopic: 'the-digestive-system' },
  { level: 'gcse', subject: 'biology', topic: 'aqa-gcse-biology-organisation', subtopic: 'the-heart-structure' },
  { level: 'gcse', subject: 'biology', topic: 'aqa-gcse-biology-organisation', subtopic: 'plant-tissues' },
  { level: 'gcse', subject: 'biology', topic: 'aqa-gcse-biology-organisation', subtopic: 'blood-vessels' },
  { level: 'gcse', subject: 'biology', topic: 'aqa-gcse-biology-organisation', subtopic: 'blood-composition' },
  { level: 'gcse', subject: 'biology', topic: 'aqa-gcse-biology-organisation', subtopic: 'coronary-heart-disease' },
  { level: 'gcse', subject: 'biology', topic: 'aqa-gcse-biology-organisation', subtopic: 'transpiration' },
  { level: 'gcse', subject: 'biology', topic: 'aqa-gcse-biology-organisation', subtopic: 'translocation' },
  { level: 'gcse', subject: 'biology', topic: 'aqa-gcse-biology-organisation', subtopic: 'factors-affecting-enzyme-action' },
  // Infection and response
  { level: 'gcse', subject: 'biology', topic: 'aqa-gcse-biology-infection-response', subtopic: 'pathogens' },
  { level: 'gcse', subject: 'biology', topic: 'aqa-gcse-biology-infection-response', subtopic: 'viruses' },
  { level: 'gcse', subject: 'biology', topic: 'aqa-gcse-biology-infection-response', subtopic: 'bacteria' },
  { level: 'gcse', subject: 'biology', topic: 'aqa-gcse-biology-infection-response', subtopic: 'fungi' },
  { level: 'gcse', subject: 'biology', topic: 'aqa-gcse-biology-infection-response', subtopic: 'protists' },
  { level: 'gcse', subject: 'biology', topic: 'aqa-gcse-biology-infection-response', subtopic: 'white-blood-cells' },
  { level: 'gcse', subject: 'biology', topic: 'aqa-gcse-biology-infection-response', subtopic: 'how-vaccines-work' },
  { level: 'gcse', subject: 'biology', topic: 'aqa-gcse-biology-infection-response', subtopic: 'antibiotics' },
  { level: 'gcse', subject: 'biology', topic: 'aqa-gcse-biology-infection-response', subtopic: 'developing-new-drugs' },
  { level: 'gcse', subject: 'biology', topic: 'aqa-gcse-biology-infection-response', subtopic: 'production-of-monoclonal-antibodies-h' },
  { level: 'gcse', subject: 'biology', topic: 'aqa-gcse-biology-infection-response', subtopic: 'plant-defence-responses' },
  // Bioenergetics
  { level: 'gcse', subject: 'biology', topic: 'aqa-gcse-biology-bioenergetics', subtopic: 'photosynthesis-equation' },
  { level: 'gcse', subject: 'biology', topic: 'aqa-gcse-biology-bioenergetics', subtopic: 'aerobic-respiration-equation' },
  { level: 'gcse', subject: 'biology', topic: 'aqa-gcse-biology-bioenergetics', subtopic: 'anaerobic-respiration' },
  { level: 'gcse', subject: 'biology', topic: 'aqa-gcse-biology-bioenergetics', subtopic: 'limiting-factors' },
  { level: 'gcse', subject: 'biology', topic: 'aqa-gcse-biology-bioenergetics', subtopic: 'uses-of-glucose' },
  { level: 'gcse', subject: 'biology', topic: 'aqa-gcse-biology-bioenergetics', subtopic: 'metabolism-definition' },
  { level: 'gcse', subject: 'biology', topic: 'aqa-gcse-biology-bioenergetics', subtopic: 'response-to-exercise' },
  // Homeostasis
  { level: 'gcse', subject: 'biology', topic: 'aqa-gcse-biology-homeostasis', subtopic: 'structure-of-the-nervous-system' },
  { level: 'gcse', subject: 'biology', topic: 'aqa-gcse-biology-homeostasis', subtopic: 'the-endocrine-system' },
  { level: 'gcse', subject: 'biology', topic: 'aqa-gcse-biology-homeostasis', subtopic: 'homeostasis-definition' },
  { level: 'gcse', subject: 'biology', topic: 'aqa-gcse-biology-homeostasis', subtopic: 'reflex-arc' },
  { level: 'gcse', subject: 'biology', topic: 'aqa-gcse-biology-homeostasis', subtopic: 'neurones' },
  { level: 'gcse', subject: 'biology', topic: 'aqa-gcse-biology-homeostasis', subtopic: 'synapses' },
  { level: 'gcse', subject: 'biology', topic: 'aqa-gcse-biology-homeostasis', subtopic: 'blood-glucose-regulation' },
  { level: 'gcse', subject: 'biology', topic: 'aqa-gcse-biology-homeostasis', subtopic: 'diabetes-type-1' },
  { level: 'gcse', subject: 'biology', topic: 'aqa-gcse-biology-homeostasis', subtopic: 'diabetes-type-2' },
  { level: 'gcse', subject: 'biology', topic: 'aqa-gcse-biology-homeostasis', subtopic: 'auxins' },
  { level: 'gcse', subject: 'biology', topic: 'aqa-gcse-biology-homeostasis', subtopic: 'hormones-in-the-menstrual-cycle' },
  { level: 'gcse', subject: 'biology', topic: 'aqa-gcse-biology-homeostasis', subtopic: 'hormonal-contraception' },
  { level: 'gcse', subject: 'biology', topic: 'aqa-gcse-biology-homeostasis', subtopic: 'ivf' },
  // Inheritance
  { level: 'gcse', subject: 'biology', topic: 'aqa-gcse-biology-inheritance', subtopic: 'dna-structure' },
  { level: 'gcse', subject: 'biology', topic: 'aqa-gcse-biology-inheritance', subtopic: 'genetic-crosses' },
  { level: 'gcse', subject: 'biology', topic: 'aqa-gcse-biology-inheritance', subtopic: 'evolution-by-natural-selection' },
  { level: 'gcse', subject: 'biology', topic: 'aqa-gcse-biology-inheritance', subtopic: 'darwins-theory' },
  { level: 'gcse', subject: 'biology', topic: 'aqa-gcse-biology-inheritance', subtopic: 'genetic-variation' },
  { level: 'gcse', subject: 'biology', topic: 'aqa-gcse-biology-inheritance', subtopic: 'meiosis' },
  { level: 'gcse', subject: 'biology', topic: 'aqa-gcse-biology-inheritance', subtopic: 'punnett-squares' },
  { level: 'gcse', subject: 'biology', topic: 'aqa-gcse-biology-inheritance', subtopic: 'inherited-disorders' },
  { level: 'gcse', subject: 'biology', topic: 'aqa-gcse-biology-inheritance', subtopic: 'genetic-modification' },
  { level: 'gcse', subject: 'biology', topic: 'aqa-gcse-biology-inheritance', subtopic: 'adult-cell-cloning' },
  { level: 'gcse', subject: 'biology', topic: 'aqa-gcse-biology-inheritance', subtopic: 'selective-breeding-process' },
  { level: 'gcse', subject: 'biology', topic: 'aqa-gcse-biology-inheritance', subtopic: 'fossils' },
  { level: 'gcse', subject: 'biology', topic: 'aqa-gcse-biology-inheritance', subtopic: 'linnaean-classification' },
  // Ecology
  { level: 'gcse', subject: 'biology', topic: 'aqa-gcse-biology-ecology', subtopic: 'ecosystems' },
  { level: 'gcse', subject: 'biology', topic: 'aqa-gcse-biology-ecology', subtopic: 'food-chains-and-food-webs' },
  { level: 'gcse', subject: 'biology', topic: 'aqa-gcse-biology-ecology', subtopic: 'the-carbon-cycle' },
  { level: 'gcse', subject: 'biology', topic: 'aqa-gcse-biology-ecology', subtopic: 'the-water-cycle' },
  { level: 'gcse', subject: 'biology', topic: 'aqa-gcse-biology-ecology', subtopic: 'biodiversity' },
  { level: 'gcse', subject: 'biology', topic: 'aqa-gcse-biology-ecology', subtopic: 'pyramids-of-biomass' },
  { level: 'gcse', subject: 'biology', topic: 'aqa-gcse-biology-ecology', subtopic: 'decay' },
  { level: 'gcse', subject: 'biology', topic: 'aqa-gcse-biology-ecology', subtopic: 'deforestation' },
  { level: 'gcse', subject: 'biology', topic: 'aqa-gcse-biology-ecology', subtopic: 'global-warming' },
  { level: 'gcse', subject: 'biology', topic: 'aqa-gcse-biology-ecology', subtopic: 'sampling-techniques' },
  { level: 'gcse', subject: 'biology', topic: 'aqa-gcse-biology-ecology', subtopic: 'adaptations' },

  // ===========================================
  // A-LEVEL MATHS (~100 subtopics)
  // ===========================================
  // Proof
  { level: 'a-level', subject: 'maths', topic: 'alevel-proof', subtopic: 'proof-by-deduction' },
  { level: 'a-level', subject: 'maths', topic: 'alevel-proof', subtopic: 'proof-by-exhaustion' },
  { level: 'a-level', subject: 'maths', topic: 'alevel-proof', subtopic: 'proof-by-contradiction' },
  { level: 'a-level', subject: 'maths', topic: 'alevel-proof', subtopic: 'disproof-by-counter-example' },
  // Algebra
  { level: 'a-level', subject: 'maths', topic: 'alevel-algebra', subtopic: 'completing-the-square' },
  { level: 'a-level', subject: 'maths', topic: 'alevel-algebra', subtopic: 'discriminant-and-nature-of-roots' },
  { level: 'a-level', subject: 'maths', topic: 'alevel-algebra', subtopic: 'solving-simultaneous-equations-linear-and-quadratic' },
  { level: 'a-level', subject: 'maths', topic: 'alevel-algebra', subtopic: 'factor-theorem' },
  { level: 'a-level', subject: 'maths', topic: 'alevel-algebra', subtopic: 'polynomial-division' },
  { level: 'a-level', subject: 'maths', topic: 'alevel-algebra', subtopic: 'partial-fractions-linear-factors' },
  { level: 'a-level', subject: 'maths', topic: 'alevel-algebra', subtopic: 'composite-functions' },
  { level: 'a-level', subject: 'maths', topic: 'alevel-algebra', subtopic: 'inverse-functions-and-their-graphs' },
  { level: 'a-level', subject: 'maths', topic: 'alevel-algebra', subtopic: 'modulus-function-and-its-graph' },
  // Coordinate Geometry
  { level: 'a-level', subject: 'maths', topic: 'alevel-coordinate-geometry', subtopic: 'equation-of-a-circle-x-a-squared-y-b-squared-equals-r-squared' },
  { level: 'a-level', subject: 'maths', topic: 'alevel-coordinate-geometry', subtopic: 'finding-equations-of-tangents-to-circles' },
  { level: 'a-level', subject: 'maths', topic: 'alevel-coordinate-geometry', subtopic: 'parametric-equations-of-curves' },
  { level: 'a-level', subject: 'maths', topic: 'alevel-coordinate-geometry', subtopic: 'converting-between-parametric-and-cartesian-forms' },
  // Sequences and Series
  { level: 'a-level', subject: 'maths', topic: 'alevel-sequences-series', subtopic: 'binomial-expansion-for-positive-integer-n' },
  { level: 'a-level', subject: 'maths', topic: 'alevel-sequences-series', subtopic: 'nth-term-of-arithmetic-sequences-a-n-1d' },
  { level: 'a-level', subject: 'maths', topic: 'alevel-sequences-series', subtopic: 'sum-of-arithmetic-series-sn-equals-n22a-n-1d' },
  { level: 'a-level', subject: 'maths', topic: 'alevel-sequences-series', subtopic: 'nth-term-of-geometric-sequences-arn-1' },
  { level: 'a-level', subject: 'maths', topic: 'alevel-sequences-series', subtopic: 'sum-to-infinity-convergent-series' },
  { level: 'a-level', subject: 'maths', topic: 'alevel-sequences-series', subtopic: 'sigma-notation-for-sums' },
  // Trigonometry
  { level: 'a-level', subject: 'maths', topic: 'alevel-trigonometry', subtopic: 'radian-measure' },
  { level: 'a-level', subject: 'maths', topic: 'alevel-trigonometry', subtopic: 'arc-length-s-equals-r-theta' },
  { level: 'a-level', subject: 'maths', topic: 'alevel-trigonometry', subtopic: 'sector-area-a-equals-12r-squared-theta' },
  { level: 'a-level', subject: 'maths', topic: 'alevel-trigonometry', subtopic: 'sec-x-cosec-x-cot-x-definitions' },
  { level: 'a-level', subject: 'maths', topic: 'alevel-trigonometry', subtopic: 'sina-b-and-sina-b' },
  { level: 'a-level', subject: 'maths', topic: 'alevel-trigonometry', subtopic: 'sin-2a-equals-2-sin-a-cos-a' },
  { level: 'a-level', subject: 'maths', topic: 'alevel-trigonometry', subtopic: 'small-angle-approximations' },
  { level: 'a-level', subject: 'maths', topic: 'alevel-trigonometry', subtopic: 'solving-trigonometric-equations' },
  // Exponentials and Logarithms
  { level: 'a-level', subject: 'maths', topic: 'alevel-exponentials-logarithms', subtopic: 'the-exponential-function-ex' },
  { level: 'a-level', subject: 'maths', topic: 'alevel-exponentials-logarithms', subtopic: 'natural-logarithm-ln-x' },
  { level: 'a-level', subject: 'maths', topic: 'alevel-exponentials-logarithms', subtopic: 'solving-equations-using-logarithms' },
  { level: 'a-level', subject: 'maths', topic: 'alevel-exponentials-logarithms', subtopic: 'exponential-growth-and-decay' },
  // Differentiation
  { level: 'a-level', subject: 'maths', topic: 'alevel-differentiation', subtopic: 'differentiation-from-first-principles' },
  { level: 'a-level', subject: 'maths', topic: 'alevel-differentiation', subtopic: 'chain-rule' },
  { level: 'a-level', subject: 'maths', topic: 'alevel-differentiation', subtopic: 'product-rule' },
  { level: 'a-level', subject: 'maths', topic: 'alevel-differentiation', subtopic: 'quotient-rule' },
  { level: 'a-level', subject: 'maths', topic: 'alevel-differentiation', subtopic: 'implicit-differentiation' },
  { level: 'a-level', subject: 'maths', topic: 'alevel-differentiation', subtopic: 'stationary-points-and-their-nature' },
  { level: 'a-level', subject: 'maths', topic: 'alevel-differentiation', subtopic: 'connected-rates-of-change' },
  // Integration
  { level: 'a-level', subject: 'maths', topic: 'alevel-integration', subtopic: 'integration-by-substitution' },
  { level: 'a-level', subject: 'maths', topic: 'alevel-integration', subtopic: 'integration-by-parts' },
  { level: 'a-level', subject: 'maths', topic: 'alevel-integration', subtopic: 'integrating-using-partial-fractions' },
  { level: 'a-level', subject: 'maths', topic: 'alevel-integration', subtopic: 'area-under-a-curve' },
  { level: 'a-level', subject: 'maths', topic: 'alevel-integration', subtopic: 'separation-of-variables' },
  { level: 'a-level', subject: 'maths', topic: 'alevel-integration', subtopic: 'numerical-integration-trapezium-rule' },
  // Numerical Methods
  { level: 'a-level', subject: 'maths', topic: 'alevel-numerical-methods', subtopic: 'locating-roots-by-change-of-sign' },
  { level: 'a-level', subject: 'maths', topic: 'alevel-numerical-methods', subtopic: 'newton-raphson-method' },
  { level: 'a-level', subject: 'maths', topic: 'alevel-numerical-methods', subtopic: 'fixed-point-iteration' },
  // Vectors
  { level: 'a-level', subject: 'maths', topic: 'alevel-vectors', subtopic: 'vectors-in-2d-and-3d' },
  { level: 'a-level', subject: 'maths', topic: 'alevel-vectors', subtopic: 'scalar-dot-product-definition' },
  { level: 'a-level', subject: 'maths', topic: 'alevel-vectors', subtopic: 'finding-angle-between-vectors' },
  // Statistics - Statistical Sampling
  { level: 'a-level', subject: 'maths', topic: 'alevel-statistical-sampling', subtopic: 'simple-random-sampling' },
  { level: 'a-level', subject: 'maths', topic: 'alevel-statistical-sampling', subtopic: 'stratified-sampling' },
  // Statistics - Data Presentation
  { level: 'a-level', subject: 'maths', topic: 'alevel-data-presentation', subtopic: 'variance-and-standard-deviation' },
  { level: 'a-level', subject: 'maths', topic: 'alevel-data-presentation', subtopic: 'product-moment-correlation-coefficient-pmcc' },
  { level: 'a-level', subject: 'maths', topic: 'alevel-data-presentation', subtopic: 'least-squares-regression-line' },
  // Statistics - Probability
  { level: 'a-level', subject: 'maths', topic: 'alevel-probability', subtopic: 'conditional-probability-pab' },
  { level: 'a-level', subject: 'maths', topic: 'alevel-probability', subtopic: 'tree-diagrams-with-and-without-replacement' },
  // Statistics - Distributions
  { level: 'a-level', subject: 'maths', topic: 'alevel-statistical-distributions', subtopic: 'binomial-distribution-x-bn-p' },
  { level: 'a-level', subject: 'maths', topic: 'alevel-statistical-distributions', subtopic: 'normal-distribution-x-nmu-sigma-squared' },
  { level: 'a-level', subject: 'maths', topic: 'alevel-statistical-distributions', subtopic: 'standardising-z-equals-x-musigma' },
  // Hypothesis Testing
  { level: 'a-level', subject: 'maths', topic: 'alevel-hypothesis-testing', subtopic: 'null-hypothesis-h0-and-alternative-hypothesis-h1' },
  { level: 'a-level', subject: 'maths', topic: 'alevel-hypothesis-testing', subtopic: 'hypothesis-test-for-proportion-using-binomial' },
  { level: 'a-level', subject: 'maths', topic: 'alevel-hypothesis-testing', subtopic: 'hypothesis-test-for-mean-using-normal-distribution' },
  // Mechanics - Kinematics
  { level: 'a-level', subject: 'maths', topic: 'alevel-kinematics', subtopic: 'v-equals-u-at' },
  { level: 'a-level', subject: 'maths', topic: 'alevel-kinematics', subtopic: 's-equals-ut-12at-squared' },
  { level: 'a-level', subject: 'maths', topic: 'alevel-kinematics', subtopic: 'projectile-motion' },
  { level: 'a-level', subject: 'maths', topic: 'alevel-kinematics', subtopic: 'using-calculus-for-variable-acceleration' },
  // Mechanics - Forces
  { level: 'a-level', subject: 'maths', topic: 'alevel-forces-newtons-laws', subtopic: 'newtons-second-law-f-equals-ma' },
  { level: 'a-level', subject: 'maths', topic: 'alevel-forces-newtons-laws', subtopic: 'coefficient-of-friction-mu' },
  { level: 'a-level', subject: 'maths', topic: 'alevel-forces-newtons-laws', subtopic: 'particles-connected-by-strings' },
  { level: 'a-level', subject: 'maths', topic: 'alevel-forces-newtons-laws', subtopic: 'pulleys' },
  { level: 'a-level', subject: 'maths', topic: 'alevel-forces-newtons-laws', subtopic: 'momentum-p-equals-mv' },
  // Mechanics - Moments
  { level: 'a-level', subject: 'maths', topic: 'alevel-moments', subtopic: 'moment-of-a-force' },
  { level: 'a-level', subject: 'maths', topic: 'alevel-moments', subtopic: 'principle-of-moments' },
  { level: 'a-level', subject: 'maths', topic: 'alevel-moments', subtopic: 'tilting-problems' },

  // ===========================================
  // A-LEVEL PHYSICS (~80 subtopics)
  // ===========================================
  // Measurements
  { level: 'a-level', subject: 'physics', topic: 'alevel-physics-measurements', subtopic: 'si-base-units-kg-m-s-a-k-mol' },
  { level: 'a-level', subject: 'physics', topic: 'alevel-physics-measurements', subtopic: 'uncertainty-in-measurements' },
  { level: 'a-level', subject: 'physics', topic: 'alevel-physics-measurements', subtopic: 'combining-uncertainties-multiplication-and-division' },
  // Particles
  { level: 'a-level', subject: 'physics', topic: 'alevel-physics-particles', subtopic: 'proton-neutron-and-electron' },
  { level: 'a-level', subject: 'physics', topic: 'alevel-physics-particles', subtopic: 'the-strong-nuclear-force' },
  { level: 'a-level', subject: 'physics', topic: 'alevel-physics-particles', subtopic: 'alpha-decay-and-nuclear-equations' },
  { level: 'a-level', subject: 'physics', topic: 'alevel-physics-particles', subtopic: 'beta-minus-decay-neutron-to-proton' },
  { level: 'a-level', subject: 'physics', topic: 'alevel-physics-particles', subtopic: 'antimatter-and-antiparticles' },
  { level: 'a-level', subject: 'physics', topic: 'alevel-physics-particles', subtopic: 'photon-energy-e-equals-hf-equals-hc' },
  // Waves
  { level: 'a-level', subject: 'physics', topic: 'alevel-physics-waves', subtopic: 'transverse-and-longitudinal-waves' },
  { level: 'a-level', subject: 'physics', topic: 'alevel-physics-waves', subtopic: 'polarisation-of-transverse-waves' },
  { level: 'a-level', subject: 'physics', topic: 'alevel-physics-waves', subtopic: 'formation-of-stationary-waves' },
  { level: 'a-level', subject: 'physics', topic: 'alevel-physics-waves', subtopic: 'wave-speed-equation-v-equals-f' },
  // Mechanics
  { level: 'a-level', subject: 'physics', topic: 'alevel-physics-mechanics', subtopic: 'resolving-vectors-into-components' },
  { level: 'a-level', subject: 'physics', topic: 'alevel-physics-mechanics', subtopic: 'principle-of-moments' },
  { level: 'a-level', subject: 'physics', topic: 'alevel-physics-mechanics', subtopic: 'displacement-velocity-acceleration' },
  { level: 'a-level', subject: 'physics', topic: 'alevel-physics-mechanics', subtopic: 'velocity-time-graphs' },
  { level: 'a-level', subject: 'physics', topic: 'alevel-physics-mechanics', subtopic: 'conditions-for-equilibrium' },
  // Electricity
  { level: 'a-level', subject: 'physics', topic: 'alevel-physics-electricity', subtopic: 'ohms-law-v-equals-ir' },
  { level: 'a-level', subject: 'physics', topic: 'alevel-physics-electricity', subtopic: 'i-v-characteristics-of-resistors' },
  { level: 'a-level', subject: 'physics', topic: 'alevel-physics-electricity', subtopic: 'resistivity-equals-ral' },
  { level: 'a-level', subject: 'physics', topic: 'alevel-physics-electricity', subtopic: 'mean-drift-velocity-i-equals-navq' },
  // Further Mechanics
  { level: 'a-level', subject: 'physics', topic: 'alevel-physics-further-mechanics', subtopic: 'centripetal-acceleration-a-equals-v-squaredr-equals-squared-r' },
  { level: 'a-level', subject: 'physics', topic: 'alevel-physics-further-mechanics', subtopic: 'centripetal-force-f-equals-mv-squaredr-equals-m-squared-r' },
  { level: 'a-level', subject: 'physics', topic: 'alevel-physics-further-mechanics', subtopic: 'conditions-for-shm-a-x' },
  { level: 'a-level', subject: 'physics', topic: 'alevel-physics-further-mechanics', subtopic: 'defining-equation-a-equals-squared-x' },
  // Thermal Physics
  { level: 'a-level', subject: 'physics', topic: 'alevel-physics-thermal', subtopic: 'specific-heat-capacity-e-equals-mc' },
  { level: 'a-level', subject: 'physics', topic: 'alevel-physics-thermal', subtopic: 'specific-latent-heat-e-equals-ml' },
  { level: 'a-level', subject: 'physics', topic: 'alevel-physics-thermal', subtopic: 'ideal-gas-equation-pv-equals-nrt' },
  { level: 'a-level', subject: 'physics', topic: 'alevel-physics-thermal', subtopic: 'boyles-law-pv-equals-constant-at-constant-t' },
  // Fields
  { level: 'a-level', subject: 'physics', topic: 'alevel-physics-fields', subtopic: 'newtons-law-f-equals-gmmr-squared' },
  { level: 'a-level', subject: 'physics', topic: 'alevel-physics-fields', subtopic: 'g-equals-gmr-squared-for-point-mass' },
  { level: 'a-level', subject: 'physics', topic: 'alevel-physics-fields', subtopic: 'gravitational-potential-v-equals-gmr' },
  { level: 'a-level', subject: 'physics', topic: 'alevel-physics-fields', subtopic: 'gravitational-potential-energy-e-equals-gmmr' },
  // Nuclear Physics
  { level: 'a-level', subject: 'physics', topic: 'alevel-physics-nuclear', subtopic: 'alpha-particle-scattering-experiment' },
  { level: 'a-level', subject: 'physics', topic: 'alevel-physics-nuclear', subtopic: 'random-nature-of-decay' },
  { level: 'a-level', subject: 'physics', topic: 'alevel-physics-nuclear', subtopic: 'half-life-t-equals-ln2' },
  { level: 'a-level', subject: 'physics', topic: 'alevel-physics-nuclear', subtopic: 'exponential-decay-n-equals-ne-t' },

  // ===========================================
  // A-LEVEL CHEMISTRY (~60 subtopics)
  // ===========================================
  // Atomic Structure
  { level: 'a-level', subject: 'chemistry', topic: 'alevel-chemistry-atomic-structure', subtopic: 'protons-neutrons-and-electrons' },
  { level: 'a-level', subject: 'chemistry', topic: 'alevel-chemistry-atomic-structure', subtopic: 'electron-shells-subshells-and-orbitals' },
  { level: 'a-level', subject: 'chemistry', topic: 'alevel-chemistry-atomic-structure', subtopic: 'mass-spectrometry-principles' },
  // Amount of Substance
  { level: 'a-level', subject: 'chemistry', topic: 'alevel-chemistry-amount-substance', subtopic: 'the-mole-and-avogadro-constant' },
  { level: 'a-level', subject: 'chemistry', topic: 'alevel-chemistry-amount-substance', subtopic: 'ideal-gas-equation-pv-equals-nrt' },
  { level: 'a-level', subject: 'chemistry', topic: 'alevel-chemistry-amount-substance', subtopic: 'empirical-formula-from-percentage-composition' },
  // Bonding
  { level: 'a-level', subject: 'chemistry', topic: 'alevel-chemistry-bonding', subtopic: 'ionic-bonding-definition' },
  { level: 'a-level', subject: 'chemistry', topic: 'alevel-chemistry-bonding', subtopic: 'covalent-bonding-definition' },
  { level: 'a-level', subject: 'chemistry', topic: 'alevel-chemistry-bonding', subtopic: 'dative-coordinate-bonding' },
  // Energetics
  { level: 'a-level', subject: 'chemistry', topic: 'alevel-chemistry-energetics', subtopic: 'enthalpy-change-definition' },
  { level: 'a-level', subject: 'chemistry', topic: 'alevel-chemistry-energetics', subtopic: 'q-equals-mct-calculations' },
  { level: 'a-level', subject: 'chemistry', topic: 'alevel-chemistry-energetics', subtopic: 'hesss-law-statement' },
  // Kinetics
  { level: 'a-level', subject: 'chemistry', topic: 'alevel-chemistry-kinetics', subtopic: 'collision-theory-principles' },
  { level: 'a-level', subject: 'chemistry', topic: 'alevel-chemistry-kinetics', subtopic: 'maxwell-boltzmann-distribution-curve' },
  // Equilibria
  { level: 'a-level', subject: 'chemistry', topic: 'alevel-chemistry-equilibria', subtopic: 'dynamic-equilibrium-definition' },
  { level: 'a-level', subject: 'chemistry', topic: 'alevel-chemistry-equilibria', subtopic: 'le-chateliers-principle-statement' },
  // Redox
  { level: 'a-level', subject: 'chemistry', topic: 'alevel-chemistry-redox', subtopic: 'oxidation-state-rules' },
  { level: 'a-level', subject: 'chemistry', topic: 'alevel-chemistry-redox', subtopic: 'writing-ionic-half-equations' },
  // Thermodynamics
  { level: 'a-level', subject: 'chemistry', topic: 'alevel-chemistry-thermodynamics', subtopic: 'born-haber-cycle-construction' },
  { level: 'a-level', subject: 'chemistry', topic: 'alevel-chemistry-thermodynamics', subtopic: 'entropy-definition' },
  // Rate Equations
  { level: 'a-level', subject: 'chemistry', topic: 'alevel-chemistry-rate-equations', subtopic: 'rate-equation-format' },
  { level: 'a-level', subject: 'chemistry', topic: 'alevel-chemistry-rate-equations', subtopic: 'order-of-reaction-with-respect-to-reactant' },
  // Electrode Potentials
  { level: 'a-level', subject: 'chemistry', topic: 'alevel-chemistry-electrode-potentials', subtopic: 'standard-electrode-potential-definition' },
  { level: 'a-level', subject: 'chemistry', topic: 'alevel-chemistry-electrode-potentials', subtopic: 'calculating-cell-emf' },
  // Acids and Bases
  { level: 'a-level', subject: 'chemistry', topic: 'alevel-chemistry-acids-bases', subtopic: 'brnsted-lowry-acids-and-bases' },
  { level: 'a-level', subject: 'chemistry', topic: 'alevel-chemistry-acids-bases', subtopic: 'ph-definition-ph-equals-logh' },
  { level: 'a-level', subject: 'chemistry', topic: 'alevel-chemistry-acids-bases', subtopic: 'buffer-solution-definition' },
  // Periodicity
  { level: 'a-level', subject: 'chemistry', topic: 'alevel-chemistry-periodicity', subtopic: 'atomic-radius-trend-across-periods' },
  { level: 'a-level', subject: 'chemistry', topic: 'alevel-chemistry-periodicity', subtopic: 'first-ionisation-energy-trends' },
  // Group 2
  { level: 'a-level', subject: 'chemistry', topic: 'alevel-chemistry-group2', subtopic: 'reactions-of-group-2-metals-with-water' },
  // Group 7
  { level: 'a-level', subject: 'chemistry', topic: 'alevel-chemistry-group7', subtopic: 'displacement-reactions-of-halogens' },
  // Transition Metals
  { level: 'a-level', subject: 'chemistry', topic: 'alevel-chemistry-transition-metals', subtopic: 'variable-oxidation-states' },
  { level: 'a-level', subject: 'chemistry', topic: 'alevel-chemistry-transition-metals', subtopic: 'complex-ion-formation' },
  // Alkanes
  { level: 'a-level', subject: 'chemistry', topic: 'alevel-chemistry-alkanes', subtopic: 'complete-combustion-of-alkanes' },
  { level: 'a-level', subject: 'chemistry', topic: 'alevel-chemistry-alkanes', subtopic: 'propagation-steps' },
  // Halogenoalkanes
  { level: 'a-level', subject: 'chemistry', topic: 'alevel-chemistry-halogenoalkanes', subtopic: 'nucleophilic-substitution-overview' },
  { level: 'a-level', subject: 'chemistry', topic: 'alevel-chemistry-halogenoalkanes', subtopic: 'elimination-with-ethanolic-koh' },
  // Alkenes
  { level: 'a-level', subject: 'chemistry', topic: 'alevel-chemistry-alkenes', subtopic: 'electrophilic-addition-mechanism' },
  { level: 'a-level', subject: 'chemistry', topic: 'alevel-chemistry-alkenes', subtopic: 'markovnikovs-rule' },
  // Alcohols
  { level: 'a-level', subject: 'chemistry', topic: 'alevel-chemistry-alcohols', subtopic: 'oxidation-of-primary-alcohols' },
  { level: 'a-level', subject: 'chemistry', topic: 'alevel-chemistry-alcohols', subtopic: 'dehydration-to-form-alkenes' },
  // Organic Analysis
  { level: 'a-level', subject: 'chemistry', topic: 'alevel-chemistry-organic-analysis', subtopic: 'infrared-absorption' },
  { level: 'a-level', subject: 'chemistry', topic: 'alevel-chemistry-organic-analysis', subtopic: 'test-for-aldehydes-tollens-reagent' },
  // Aldehydes and Ketones
  { level: 'a-level', subject: 'chemistry', topic: 'alevel-chemistry-aldehydes-ketones', subtopic: 'nucleophilic-addition-mechanism' },
  // Carboxylic Acids
  { level: 'a-level', subject: 'chemistry', topic: 'alevel-chemistry-carboxylic-acids', subtopic: 'ester-formation-fischer-esterification' },
  // Aromatics
  { level: 'a-level', subject: 'chemistry', topic: 'alevel-chemistry-aromatics', subtopic: 'delocalised-model-of-benzene' },
  { level: 'a-level', subject: 'chemistry', topic: 'alevel-chemistry-aromatics', subtopic: 'nitration-of-benzene' },
  // Amines
  { level: 'a-level', subject: 'chemistry', topic: 'alevel-chemistry-amines', subtopic: 'amines-as-bases' },
  // Polymers
  { level: 'a-level', subject: 'chemistry', topic: 'alevel-chemistry-polymers', subtopic: 'condensation-polymerisation' },
  // Amino Acids
  { level: 'a-level', subject: 'chemistry', topic: 'alevel-chemistry-amino-acids', subtopic: 'peptide-bond-formation' },
  // NMR
  { level: 'a-level', subject: 'chemistry', topic: 'alevel-chemistry-nmr', subtopic: 'chemical-shift' },
  { level: 'a-level', subject: 'chemistry', topic: 'alevel-chemistry-nmr', subtopic: 'spin-spin-coupling' },
  // Chromatography
  { level: 'a-level', subject: 'chemistry', topic: 'alevel-chemistry-chromatography', subtopic: 'thin-layer-chromatography' },

  // ===========================================
  // GCSE ENGLISH LITERATURE (~50 subtopics)
  // ===========================================
  // Shakespeare - Macbeth
  { level: 'gcse', subject: 'english-literature', topic: 'aqa-gcse-eng-lit-macbeth', subtopic: 'ambition-and-its-consequences' },
  { level: 'gcse', subject: 'english-literature', topic: 'aqa-gcse-eng-lit-macbeth', subtopic: 'guilt-and-conscience' },
  { level: 'gcse', subject: 'english-literature', topic: 'aqa-gcse-eng-lit-macbeth', subtopic: 'the-supernatural-and-witchcraft' },
  { level: 'gcse', subject: 'english-literature', topic: 'aqa-gcse-eng-lit-macbeth', subtopic: 'lady-macbeths-character-arc' },
  // Shakespeare - Romeo and Juliet
  { level: 'gcse', subject: 'english-literature', topic: 'aqa-gcse-eng-lit-romeo-juliet', subtopic: 'love-and-passion' },
  { level: 'gcse', subject: 'english-literature', topic: 'aqa-gcse-eng-lit-romeo-juliet', subtopic: 'fate-and-destiny' },
  { level: 'gcse', subject: 'english-literature', topic: 'aqa-gcse-eng-lit-romeo-juliet', subtopic: 'family-conflict-and-loyalty' },
  { level: 'gcse', subject: 'english-literature', topic: 'aqa-gcse-eng-lit-romeo-juliet', subtopic: 'romeos-character-development' },
  // Shakespeare - Much Ado About Nothing
  { level: 'gcse', subject: 'english-literature', topic: 'aqa-gcse-eng-lit-much-ado', subtopic: 'love-and-relationships' },
  { level: 'gcse', subject: 'english-literature', topic: 'aqa-gcse-eng-lit-much-ado', subtopic: 'deception-and-manipulation' },
  // Shakespeare - The Tempest
  { level: 'gcse', subject: 'english-literature', topic: 'aqa-gcse-eng-lit-tempest', subtopic: 'power-and-control' },
  { level: 'gcse', subject: 'english-literature', topic: 'aqa-gcse-eng-lit-tempest', subtopic: 'forgiveness-and-reconciliation' },
  // Shakespeare - Merchant of Venice
  { level: 'gcse', subject: 'english-literature', topic: 'aqa-gcse-eng-lit-merchant-venice', subtopic: 'justice-and-mercy' },
  { level: 'gcse', subject: 'english-literature', topic: 'aqa-gcse-eng-lit-merchant-venice', subtopic: 'prejudice-and-discrimination' },
  // Shakespeare - Julius Caesar
  { level: 'gcse', subject: 'english-literature', topic: 'aqa-gcse-eng-lit-julius-caesar', subtopic: 'ambition-and-power' },
  { level: 'gcse', subject: 'english-literature', topic: 'aqa-gcse-eng-lit-julius-caesar', subtopic: 'betrayal-and-loyalty' },
  // 19th Century - A Christmas Carol
  { level: 'gcse', subject: 'english-literature', topic: 'aqa-gcse-eng-lit-christmas-carol', subtopic: 'redemption-and-transformation' },
  { level: 'gcse', subject: 'english-literature', topic: 'aqa-gcse-eng-lit-christmas-carol', subtopic: 'social-responsibility-and-poverty' },
  { level: 'gcse', subject: 'english-literature', topic: 'aqa-gcse-eng-lit-christmas-carol', subtopic: 'scrooges-character-arc' },
  // 19th Century - Jekyll and Hyde
  { level: 'gcse', subject: 'english-literature', topic: 'aqa-gcse-eng-lit-jekyll-hyde', subtopic: 'duality-of-human-nature' },
  { level: 'gcse', subject: 'english-literature', topic: 'aqa-gcse-eng-lit-jekyll-hyde', subtopic: 'victorian-repression' },
  { level: 'gcse', subject: 'english-literature', topic: 'aqa-gcse-eng-lit-jekyll-hyde', subtopic: 'science-and-ethics' },
  // 19th Century - Frankenstein
  { level: 'gcse', subject: 'english-literature', topic: 'aqa-gcse-eng-lit-frankenstein', subtopic: 'creation-and-responsibility' },
  { level: 'gcse', subject: 'english-literature', topic: 'aqa-gcse-eng-lit-frankenstein', subtopic: 'isolation-and-loneliness' },
  // 19th Century - Great Expectations
  { level: 'gcse', subject: 'english-literature', topic: 'aqa-gcse-eng-lit-great-expectations', subtopic: 'social-class-and-ambition' },
  { level: 'gcse', subject: 'english-literature', topic: 'aqa-gcse-eng-lit-great-expectations', subtopic: 'guilt-and-redemption' },
  // 19th Century - Jane Eyre
  { level: 'gcse', subject: 'english-literature', topic: 'aqa-gcse-eng-lit-jane-eyre', subtopic: 'independence-and-self-respect' },
  { level: 'gcse', subject: 'english-literature', topic: 'aqa-gcse-eng-lit-jane-eyre', subtopic: 'gender-roles-and-equality' },
  // 19th Century - Pride and Prejudice
  { level: 'gcse', subject: 'english-literature', topic: 'aqa-gcse-eng-lit-pride-prejudice', subtopic: 'pride-and-prejudice-themes' },
  { level: 'gcse', subject: 'english-literature', topic: 'aqa-gcse-eng-lit-pride-prejudice', subtopic: 'marriage-and-social-status' },
  // 19th Century - Sign of Four
  { level: 'gcse', subject: 'english-literature', topic: 'aqa-gcse-eng-lit-sign-four', subtopic: 'detection-and-deduction' },
  { level: 'gcse', subject: 'english-literature', topic: 'aqa-gcse-eng-lit-sign-four', subtopic: 'empire-and-colonialism' },
  // Modern Texts - An Inspector Calls
  { level: 'gcse', subject: 'english-literature', topic: 'aqa-gcse-eng-lit-inspector-calls', subtopic: 'social-responsibility' },
  { level: 'gcse', subject: 'english-literature', topic: 'aqa-gcse-eng-lit-inspector-calls', subtopic: 'class-and-inequality' },
  { level: 'gcse', subject: 'english-literature', topic: 'aqa-gcse-eng-lit-inspector-calls', subtopic: 'generational-conflict' },
  // Modern Texts - Blood Brothers
  { level: 'gcse', subject: 'english-literature', topic: 'aqa-gcse-eng-lit-blood-brothers', subtopic: 'nature-vs-nurture' },
  { level: 'gcse', subject: 'english-literature', topic: 'aqa-gcse-eng-lit-blood-brothers', subtopic: 'class-and-inequality' },
  // Poetry Anthology
  { level: 'gcse', subject: 'english-literature', topic: 'aqa-gcse-eng-lit-poetry-anthology', subtopic: 'ozymandias-power-and-legacy' },
  { level: 'gcse', subject: 'english-literature', topic: 'aqa-gcse-eng-lit-poetry-anthology', subtopic: 'london-social-injustice' },
  { level: 'gcse', subject: 'english-literature', topic: 'aqa-gcse-eng-lit-poetry-anthology', subtopic: 'exposure-wars-brutal-reality' },
  { level: 'gcse', subject: 'english-literature', topic: 'aqa-gcse-eng-lit-poetry-anthology', subtopic: 'remains-psychological-trauma' },
  { level: 'gcse', subject: 'english-literature', topic: 'aqa-gcse-eng-lit-poetry-anthology', subtopic: 'charge-of-the-light-brigade-military-conflict' },
  { level: 'gcse', subject: 'english-literature', topic: 'aqa-gcse-eng-lit-poetry-anthology', subtopic: 'my-last-duchess-control-and-jealousy' },
  { level: 'gcse', subject: 'english-literature', topic: 'aqa-gcse-eng-lit-poetry-anthology', subtopic: 'comparing-poems-effectively' },
  // Unseen Poetry
  { level: 'gcse', subject: 'english-literature', topic: 'aqa-gcse-eng-lit-unseen-poetry', subtopic: 'first-reading-strategies' },
  { level: 'gcse', subject: 'english-literature', topic: 'aqa-gcse-eng-lit-unseen-poetry', subtopic: 'analysing-language-techniques' },
  { level: 'gcse', subject: 'english-literature', topic: 'aqa-gcse-eng-lit-unseen-poetry', subtopic: 'comparing-two-poems' },

  // ===========================================
  // GCSE HISTORY (~55 subtopics)
  // ===========================================
  // Health and the People (Medicine through time)
  { level: 'gcse', subject: 'history', topic: 'aqa-gcse-hist-health-people', subtopic: 'medieval-ideas-about-disease' },
  { level: 'gcse', subject: 'history', topic: 'aqa-gcse-hist-health-people', subtopic: 'four-humours' },
  { level: 'gcse', subject: 'history', topic: 'aqa-gcse-hist-health-people', subtopic: 'the-black-death' },
  { level: 'gcse', subject: 'history', topic: 'aqa-gcse-hist-health-people', subtopic: 'renaissance-and-medical-knowledge' },
  { level: 'gcse', subject: 'history', topic: 'aqa-gcse-hist-health-people', subtopic: 'germ-theory' },
  { level: 'gcse', subject: 'history', topic: 'aqa-gcse-hist-health-people', subtopic: 'jenner-and-vaccination' },
  { level: 'gcse', subject: 'history', topic: 'aqa-gcse-hist-health-people', subtopic: 'cholera-epidemics' },
  { level: 'gcse', subject: 'history', topic: 'aqa-gcse-hist-health-people', subtopic: 'penicillin' },
  { level: 'gcse', subject: 'history', topic: 'aqa-gcse-hist-health-people', subtopic: 'nhs-creation-1948' },
  { level: 'gcse', subject: 'history', topic: 'aqa-gcse-hist-health-people', subtopic: 'public-health-acts-1848-and-1875' },
  { level: 'gcse', subject: 'history', topic: 'aqa-gcse-hist-health-people', subtopic: 'john-snow-and-cholera' },
  // Germany: Democracy and Dictatorship
  { level: 'gcse', subject: 'history', topic: 'aqa-gcse-hist-germany-democracy-dictatorship', subtopic: 'weimar-constitution' },
  { level: 'gcse', subject: 'history', topic: 'aqa-gcse-hist-germany-democracy-dictatorship', subtopic: 'hyperinflation-1923' },
  { level: 'gcse', subject: 'history', topic: 'aqa-gcse-hist-germany-democracy-dictatorship', subtopic: 'impact-of-the-great-depression' },
  { level: 'gcse', subject: 'history', topic: 'aqa-gcse-hist-germany-democracy-dictatorship', subtopic: 'growth-of-nazi-support-1929-1932' },
  { level: 'gcse', subject: 'history', topic: 'aqa-gcse-hist-germany-democracy-dictatorship', subtopic: 'hitler-becomes-chancellor-january-1933' },
  { level: 'gcse', subject: 'history', topic: 'aqa-gcse-hist-germany-democracy-dictatorship', subtopic: 'reichstag-fire-february-1933' },
  { level: 'gcse', subject: 'history', topic: 'aqa-gcse-hist-germany-democracy-dictatorship', subtopic: 'night-of-the-long-knives-1934' },
  { level: 'gcse', subject: 'history', topic: 'aqa-gcse-hist-germany-democracy-dictatorship', subtopic: 'creation-of-fuhrer-state' },
  { level: 'gcse', subject: 'history', topic: 'aqa-gcse-hist-germany-democracy-dictatorship', subtopic: 'kristallnacht-1938' },
  { level: 'gcse', subject: 'history', topic: 'aqa-gcse-hist-germany-democracy-dictatorship', subtopic: 'the-holocaust' },
  { level: 'gcse', subject: 'history', topic: 'aqa-gcse-hist-germany-democracy-dictatorship', subtopic: 'propaganda-and-censorship' },
  { level: 'gcse', subject: 'history', topic: 'aqa-gcse-hist-germany-democracy-dictatorship', subtopic: 'women-in-nazi-germany' },
  // Conflict and Tension: Cold War
  { level: 'gcse', subject: 'history', topic: 'aqa-gcse-hist-conflict-cold-war', subtopic: 'ideological-differences' },
  { level: 'gcse', subject: 'history', topic: 'aqa-gcse-hist-conflict-cold-war', subtopic: 'truman-doctrine' },
  { level: 'gcse', subject: 'history', topic: 'aqa-gcse-hist-conflict-cold-war', subtopic: 'marshall-plan' },
  { level: 'gcse', subject: 'history', topic: 'aqa-gcse-hist-conflict-cold-war', subtopic: 'berlin-blockade-1948-49' },
  { level: 'gcse', subject: 'history', topic: 'aqa-gcse-hist-conflict-cold-war', subtopic: 'cuban-missile-crisis-1962' },
  { level: 'gcse', subject: 'history', topic: 'aqa-gcse-hist-conflict-cold-war', subtopic: 'berlin-wall-1961' },
  { level: 'gcse', subject: 'history', topic: 'aqa-gcse-hist-conflict-cold-war', subtopic: 'hungarian-uprising-1956' },
  { level: 'gcse', subject: 'history', topic: 'aqa-gcse-hist-conflict-cold-war', subtopic: 'prague-spring-1968' },
  // Elizabethan England
  { level: 'gcse', subject: 'history', topic: 'aqa-gcse-hist-elizabethan-england', subtopic: 'elizabeth-i' },
  { level: 'gcse', subject: 'history', topic: 'aqa-gcse-hist-elizabethan-england', subtopic: 'religious-settlement-1559' },
  { level: 'gcse', subject: 'history', topic: 'aqa-gcse-hist-elizabethan-england', subtopic: 'mary-queen-of-scots' },
  { level: 'gcse', subject: 'history', topic: 'aqa-gcse-hist-elizabethan-england', subtopic: 'spanish-armada-1588' },
  { level: 'gcse', subject: 'history', topic: 'aqa-gcse-hist-elizabethan-england', subtopic: 'theatre' },
  { level: 'gcse', subject: 'history', topic: 'aqa-gcse-hist-elizabethan-england', subtopic: 'poverty-and-vagabondage' },
  { level: 'gcse', subject: 'history', topic: 'aqa-gcse-hist-elizabethan-england', subtopic: 'poor-laws' },
  // Norman England
  { level: 'gcse', subject: 'history', topic: 'aqa-gcse-hist-norman-england', subtopic: 'battle-of-hastings' },
  { level: 'gcse', subject: 'history', topic: 'aqa-gcse-hist-norman-england', subtopic: 'william-of-normandy' },
  { level: 'gcse', subject: 'history', topic: 'aqa-gcse-hist-norman-england', subtopic: 'feudal-system' },
  { level: 'gcse', subject: 'history', topic: 'aqa-gcse-hist-norman-england', subtopic: 'domesday-book' },
  { level: 'gcse', subject: 'history', topic: 'aqa-gcse-hist-norman-england', subtopic: 'castles' },
  { level: 'gcse', subject: 'history', topic: 'aqa-gcse-hist-norman-england', subtopic: 'harrying-of-the-north-1069-70' },

  // ===========================================
  // GCSE GEOGRAPHY (~50 subtopics)
  // ===========================================
  // Natural Hazards
  { level: 'gcse', subject: 'geography', topic: 'aqa-gcse-geog-natural-hazards', subtopic: 'plate-tectonics-theory' },
  { level: 'gcse', subject: 'geography', topic: 'aqa-gcse-geog-natural-hazards', subtopic: 'primary-effects-of-earthquakes' },
  { level: 'gcse', subject: 'geography', topic: 'aqa-gcse-geog-natural-hazards', subtopic: 'primary-effects-of-volcanic-eruptions' },
  { level: 'gcse', subject: 'geography', topic: 'aqa-gcse-geog-natural-hazards', subtopic: 'formation-of-tropical-storms' },
  { level: 'gcse', subject: 'geography', topic: 'aqa-gcse-geog-natural-hazards', subtopic: 'types-of-uk-weather-hazards' },
  { level: 'gcse', subject: 'geography', topic: 'aqa-gcse-geog-natural-hazards', subtopic: 'evidence-for-climate-change' },
  { level: 'gcse', subject: 'geography', topic: 'aqa-gcse-geog-natural-hazards', subtopic: 'extreme-weather-events-in-uk' },
  // Living World (Ecosystems)
  { level: 'gcse', subject: 'geography', topic: 'aqa-gcse-geog-living-world', subtopic: 'what-is-an-ecosystem' },
  { level: 'gcse', subject: 'geography', topic: 'aqa-gcse-geog-living-world', subtopic: 'tropical-rainforest-biome' },
  { level: 'gcse', subject: 'geography', topic: 'aqa-gcse-geog-living-world', subtopic: 'hot-desert-biome' },
  { level: 'gcse', subject: 'geography', topic: 'aqa-gcse-geog-living-world', subtopic: 'tundra-biome' },
  { level: 'gcse', subject: 'geography', topic: 'aqa-gcse-geog-living-world', subtopic: 'causes-of-deforestation' },
  { level: 'gcse', subject: 'geography', topic: 'aqa-gcse-geog-living-world', subtopic: 'causes-of-desertification' },
  // Physical Landscapes UK
  { level: 'gcse', subject: 'geography', topic: 'aqa-gcse-geog-physical-landscapes-uk', subtopic: 'overview-of-uk-landscapes' },
  { level: 'gcse', subject: 'geography', topic: 'aqa-gcse-geog-physical-landscapes-uk', subtopic: 'headlands-and-bays' },
  { level: 'gcse', subject: 'geography', topic: 'aqa-gcse-geog-physical-landscapes-uk', subtopic: 'river-long-profile' },
  { level: 'gcse', subject: 'geography', topic: 'aqa-gcse-geog-physical-landscapes-uk', subtopic: 'erosion-hydraulic-action' },
  { level: 'gcse', subject: 'geography', topic: 'aqa-gcse-geog-physical-landscapes-uk', subtopic: 'mechanical-weathering' },
  { level: 'gcse', subject: 'geography', topic: 'aqa-gcse-geog-physical-landscapes-uk', subtopic: 'mass-movement-sliding' },
  { level: 'gcse', subject: 'geography', topic: 'aqa-gcse-geog-physical-landscapes-uk', subtopic: 'deposition' },
  { level: 'gcse', subject: 'geography', topic: 'aqa-gcse-geog-physical-landscapes-uk', subtopic: 'coastal-management-case-study' },
  { level: 'gcse', subject: 'geography', topic: 'aqa-gcse-geog-physical-landscapes-uk', subtopic: 'river-flooding-case-study-eg-somerset-levels' },
  { level: 'gcse', subject: 'geography', topic: 'aqa-gcse-geog-physical-landscapes-uk', subtopic: 'hard-engineering-dams-and-reservoirs' },
  // Urban Issues
  { level: 'gcse', subject: 'geography', topic: 'aqa-gcse-geog-urban-issues', subtopic: 'global-pattern-of-urban-change' },
  { level: 'gcse', subject: 'geography', topic: 'aqa-gcse-geog-urban-issues', subtopic: 'causes-of-urbanisation' },
  { level: 'gcse', subject: 'geography', topic: 'aqa-gcse-geog-urban-issues', subtopic: 'urban-deprivation' },
  { level: 'gcse', subject: 'geography', topic: 'aqa-gcse-geog-urban-issues', subtopic: 'features-of-sustainable-cities' },
  { level: 'gcse', subject: 'geography', topic: 'aqa-gcse-geog-urban-issues', subtopic: 'uk-city-case-study-eg-london-bristol' },
  { level: 'gcse', subject: 'geography', topic: 'aqa-gcse-geog-urban-issues', subtopic: 'megacities' },
  { level: 'gcse', subject: 'geography', topic: 'aqa-gcse-geog-urban-issues', subtopic: 'urban-regeneration-projects' },
  // Changing Economic World (Development)
  { level: 'gcse', subject: 'geography', topic: 'aqa-gcse-geog-changing-economic-world', subtopic: 'global-variations-in-development' },
  { level: 'gcse', subject: 'geography', topic: 'aqa-gcse-geog-changing-economic-world', subtopic: 'development-gap' },
  { level: 'gcse', subject: 'geography', topic: 'aqa-gcse-geog-changing-economic-world', subtopic: 'fair-trade' },
  { level: 'gcse', subject: 'geography', topic: 'aqa-gcse-geog-changing-economic-world', subtopic: 'licnee-example-eg-nigeria-india' },
  { level: 'gcse', subject: 'geography', topic: 'aqa-gcse-geog-changing-economic-world', subtopic: 'changing-industrial-structure' },
  // Resource Management
  { level: 'gcse', subject: 'geography', topic: 'aqa-gcse-geog-resource-management', subtopic: 'significance-of-food-water-energy' },
  { level: 'gcse', subject: 'geography', topic: 'aqa-gcse-geog-resource-management', subtopic: 'global-food-supply' },
  { level: 'gcse', subject: 'geography', topic: 'aqa-gcse-geog-resource-management', subtopic: 'global-water-supply' },
  { level: 'gcse', subject: 'geography', topic: 'aqa-gcse-geog-resource-management', subtopic: 'global-energy-supply' },
  { level: 'gcse', subject: 'geography', topic: 'aqa-gcse-geog-resource-management', subtopic: 'food-security' },
  { level: 'gcse', subject: 'geography', topic: 'aqa-gcse-geog-resource-management', subtopic: 'water-security' },
  { level: 'gcse', subject: 'geography', topic: 'aqa-gcse-geog-resource-management', subtopic: 'energy-security' },
  // Fieldwork and Skills
  { level: 'gcse', subject: 'geography', topic: 'aqa-gcse-geog-fieldwork-skills', subtopic: 'fieldwork-enquiry-process' },
  { level: 'gcse', subject: 'geography', topic: 'aqa-gcse-geog-fieldwork-skills', subtopic: 'os-maps' },
  { level: 'gcse', subject: 'geography', topic: 'aqa-gcse-geog-fieldwork-skills', subtopic: 'primary-data-collection' },

  // ===========================================
  // GCSE COMPUTER SCIENCE (~50 subtopics)
  // ===========================================
  // Computer Systems
  { level: 'gcse', subject: 'computer-science', topic: 'aqa-gcse-cs-computer-systems', subtopic: 'hardware-definition' },
  { level: 'gcse', subject: 'computer-science', topic: 'aqa-gcse-cs-computer-systems', subtopic: 'software-definition' },
  { level: 'gcse', subject: 'computer-science', topic: 'aqa-gcse-cs-computer-systems', subtopic: 'operating-systems' },
  { level: 'gcse', subject: 'computer-science', topic: 'aqa-gcse-cs-computer-systems', subtopic: 'utility-software' },
  { level: 'gcse', subject: 'computer-science', topic: 'aqa-gcse-cs-computer-systems', subtopic: 'logic-gates' },
  // Algorithms
  { level: 'gcse', subject: 'computer-science', topic: 'aqa-gcse-cs-algorithms', subtopic: 'computational-thinking' },
  { level: 'gcse', subject: 'computer-science', topic: 'aqa-gcse-cs-algorithms', subtopic: 'pseudocode' },
  { level: 'gcse', subject: 'computer-science', topic: 'aqa-gcse-cs-algorithms', subtopic: 'flowcharts' },
  { level: 'gcse', subject: 'computer-science', topic: 'aqa-gcse-cs-algorithms', subtopic: 'trace-tables' },
  { level: 'gcse', subject: 'computer-science', topic: 'aqa-gcse-cs-algorithms', subtopic: 'bubble-sort' },
  { level: 'gcse', subject: 'computer-science', topic: 'aqa-gcse-cs-algorithms', subtopic: 'merge-sort' },
  { level: 'gcse', subject: 'computer-science', topic: 'aqa-gcse-cs-algorithms', subtopic: 'linear-search' },
  { level: 'gcse', subject: 'computer-science', topic: 'aqa-gcse-cs-algorithms', subtopic: 'binary-search' },
  // Programming
  { level: 'gcse', subject: 'computer-science', topic: 'aqa-gcse-cs-programming', subtopic: 'integer' },
  { level: 'gcse', subject: 'computer-science', topic: 'aqa-gcse-cs-programming', subtopic: 'boolean' },
  { level: 'gcse', subject: 'computer-science', topic: 'aqa-gcse-cs-programming', subtopic: 'string' },
  { level: 'gcse', subject: 'computer-science', topic: 'aqa-gcse-cs-programming', subtopic: 'variable-declaration' },
  { level: 'gcse', subject: 'computer-science', topic: 'aqa-gcse-cs-programming', subtopic: 'iteration-loops' },
  { level: 'gcse', subject: 'computer-science', topic: 'aqa-gcse-cs-programming', subtopic: 'selection-if-statements' },
  { level: 'gcse', subject: 'computer-science', topic: 'aqa-gcse-cs-programming', subtopic: 'subroutines-procedures-and-functions' },
  { level: 'gcse', subject: 'computer-science', topic: 'aqa-gcse-cs-programming', subtopic: 'arrays-1d' },
  // Data Representation
  { level: 'gcse', subject: 'computer-science', topic: 'aqa-gcse-cs-data-representation', subtopic: 'binary-base-2' },
  { level: 'gcse', subject: 'computer-science', topic: 'aqa-gcse-cs-data-representation', subtopic: 'hexadecimal-base-16' },
  { level: 'gcse', subject: 'computer-science', topic: 'aqa-gcse-cs-data-representation', subtopic: 'binary-addition' },
  { level: 'gcse', subject: 'computer-science', topic: 'aqa-gcse-cs-data-representation', subtopic: 'binary-shifts' },
  { level: 'gcse', subject: 'computer-science', topic: 'aqa-gcse-cs-data-representation', subtopic: 'ascii' },
  { level: 'gcse', subject: 'computer-science', topic: 'aqa-gcse-cs-data-representation', subtopic: 'pixels' },
  { level: 'gcse', subject: 'computer-science', topic: 'aqa-gcse-cs-data-representation', subtopic: 'sampling' },
  { level: 'gcse', subject: 'computer-science', topic: 'aqa-gcse-cs-data-representation', subtopic: 'need-for-compression' },
  // Networks
  { level: 'gcse', subject: 'computer-science', topic: 'aqa-gcse-cs-networks', subtopic: 'lan-local-area-network' },
  { level: 'gcse', subject: 'computer-science', topic: 'aqa-gcse-cs-networks', subtopic: 'wan-wide-area-network' },
  { level: 'gcse', subject: 'computer-science', topic: 'aqa-gcse-cs-networks', subtopic: 'star-topology' },
  { level: 'gcse', subject: 'computer-science', topic: 'aqa-gcse-cs-networks', subtopic: 'network-hardware' },
  { level: 'gcse', subject: 'computer-science', topic: 'aqa-gcse-cs-networks', subtopic: 'tcpip' },
  { level: 'gcse', subject: 'computer-science', topic: 'aqa-gcse-cs-networks', subtopic: 'the-internet-vs-world-wide-web' },
  // Cybersecurity
  { level: 'gcse', subject: 'computer-science', topic: 'aqa-gcse-cs-cybersecurity', subtopic: 'social-engineering' },
  { level: 'gcse', subject: 'computer-science', topic: 'aqa-gcse-cs-cybersecurity', subtopic: 'malware' },
  { level: 'gcse', subject: 'computer-science', topic: 'aqa-gcse-cs-cybersecurity', subtopic: 'phishing' },
  { level: 'gcse', subject: 'computer-science', topic: 'aqa-gcse-cs-cybersecurity', subtopic: 'encryption' },
  // Databases
  { level: 'gcse', subject: 'computer-science', topic: 'aqa-gcse-cs-databases', subtopic: 'relational-databases' },
  { level: 'gcse', subject: 'computer-science', topic: 'aqa-gcse-cs-databases', subtopic: 'primary-key' },
  { level: 'gcse', subject: 'computer-science', topic: 'aqa-gcse-cs-databases', subtopic: 'select' },
  // Ethics
  { level: 'gcse', subject: 'computer-science', topic: 'aqa-gcse-cs-ethics', subtopic: 'privacy-concerns' },
  { level: 'gcse', subject: 'computer-science', topic: 'aqa-gcse-cs-ethics', subtopic: 'data-protection-act' },
  { level: 'gcse', subject: 'computer-science', topic: 'aqa-gcse-cs-ethics', subtopic: 'computer-misuse-act' },
  { level: 'gcse', subject: 'computer-science', topic: 'aqa-gcse-cs-ethics', subtopic: 'energy-consumption' },

  // ===========================================
  // GCSE BUSINESS STUDIES (~40 subtopics)
  // ===========================================
  // Business in the Real World
  { level: 'gcse', subject: 'business', topic: 'aqa-gcse-bus-real-world', subtopic: 'purpose-of-business-activity' },
  { level: 'gcse', subject: 'business', topic: 'aqa-gcse-bus-real-world', subtopic: 'enterprise' },
  { level: 'gcse', subject: 'business', topic: 'aqa-gcse-bus-real-world', subtopic: 'entrepreneurs' },
  { level: 'gcse', subject: 'business', topic: 'aqa-gcse-bus-real-world', subtopic: 'business-objectives' },
  { level: 'gcse', subject: 'business', topic: 'aqa-gcse-bus-real-world', subtopic: 'stakeholders' },
  { level: 'gcse', subject: 'business', topic: 'aqa-gcse-bus-real-world', subtopic: 'business-plans' },
  { level: 'gcse', subject: 'business', topic: 'aqa-gcse-bus-real-world', subtopic: 'business-location' },
  { level: 'gcse', subject: 'business', topic: 'aqa-gcse-bus-real-world', subtopic: 'sole-traders' },
  { level: 'gcse', subject: 'business', topic: 'aqa-gcse-bus-real-world', subtopic: 'partnerships' },
  { level: 'gcse', subject: 'business', topic: 'aqa-gcse-bus-real-world', subtopic: 'private-limited-companies-ltd' },
  // Marketing
  { level: 'gcse', subject: 'business', topic: 'aqa-gcse-bus-marketing', subtopic: 'market-research' },
  { level: 'gcse', subject: 'business', topic: 'aqa-gcse-bus-marketing', subtopic: 'market-segmentation' },
  { level: 'gcse', subject: 'business', topic: 'aqa-gcse-bus-marketing', subtopic: 'marketing-mix' },
  { level: 'gcse', subject: 'business', topic: 'aqa-gcse-bus-marketing', subtopic: 'product' },
  { level: 'gcse', subject: 'business', topic: 'aqa-gcse-bus-marketing', subtopic: 'price' },
  { level: 'gcse', subject: 'business', topic: 'aqa-gcse-bus-marketing', subtopic: 'promotion' },
  { level: 'gcse', subject: 'business', topic: 'aqa-gcse-bus-marketing', subtopic: 'place' },
  { level: 'gcse', subject: 'business', topic: 'aqa-gcse-bus-marketing', subtopic: 'product-life-cycle' },
  { level: 'gcse', subject: 'business', topic: 'aqa-gcse-bus-marketing', subtopic: 'brand' },
  // Operations
  { level: 'gcse', subject: 'business', topic: 'aqa-gcse-bus-operations', subtopic: 'production-processes' },
  { level: 'gcse', subject: 'business', topic: 'aqa-gcse-bus-operations', subtopic: 'quality' },
  { level: 'gcse', subject: 'business', topic: 'aqa-gcse-bus-operations', subtopic: 'procurement' },
  { level: 'gcse', subject: 'business', topic: 'aqa-gcse-bus-operations', subtopic: 'managing-stock' },
  { level: 'gcse', subject: 'business', topic: 'aqa-gcse-bus-operations', subtopic: 'customer-service' },
  // Finance
  { level: 'gcse', subject: 'business', topic: 'aqa-gcse-bus-finance', subtopic: 'internal-sources-of-finance' },
  { level: 'gcse', subject: 'business', topic: 'aqa-gcse-bus-finance', subtopic: 'external-sources-of-finance' },
  { level: 'gcse', subject: 'business', topic: 'aqa-gcse-bus-finance', subtopic: 'break-even' },
  { level: 'gcse', subject: 'business', topic: 'aqa-gcse-bus-finance', subtopic: 'cash-flow' },
  { level: 'gcse', subject: 'business', topic: 'aqa-gcse-bus-finance', subtopic: 'profit' },
  { level: 'gcse', subject: 'business', topic: 'aqa-gcse-bus-finance', subtopic: 'gross-profit-margin' },
  // Human Resources
  { level: 'gcse', subject: 'business', topic: 'aqa-gcse-bus-human-resources', subtopic: 'recruitment' },
  { level: 'gcse', subject: 'business', topic: 'aqa-gcse-bus-human-resources', subtopic: 'training' },
  { level: 'gcse', subject: 'business', topic: 'aqa-gcse-bus-human-resources', subtopic: 'motivation' },
  { level: 'gcse', subject: 'business', topic: 'aqa-gcse-bus-human-resources', subtopic: 'organisational-structure' },
  // Influences on Business
  { level: 'gcse', subject: 'business', topic: 'aqa-gcse-bus-influences', subtopic: 'globalisation' },
  { level: 'gcse', subject: 'business', topic: 'aqa-gcse-bus-influences', subtopic: 'business-ethics' },
  { level: 'gcse', subject: 'business', topic: 'aqa-gcse-bus-influences', subtopic: 'environmental-issues' },
  { level: 'gcse', subject: 'business', topic: 'aqa-gcse-bus-influences', subtopic: 'economic-climate' },
  { level: 'gcse', subject: 'business', topic: 'aqa-gcse-bus-influences', subtopic: 'competition' },

  // ===========================================
  // GCSE ECONOMICS (~40 subtopics)
  // ===========================================
  // Foundations of Economics
  { level: 'gcse', subject: 'economics', topic: 'aqa-gcse-econ-foundations', subtopic: 'scarcity-and-choice' },
  { level: 'gcse', subject: 'economics', topic: 'aqa-gcse-econ-foundations', subtopic: 'factors-of-production' },
  { level: 'gcse', subject: 'economics', topic: 'aqa-gcse-econ-foundations', subtopic: 'opportunity-cost' },
  { level: 'gcse', subject: 'economics', topic: 'aqa-gcse-econ-foundations', subtopic: 'types-of-economic-systems' },
  // Markets
  { level: 'gcse', subject: 'economics', topic: 'aqa-gcse-econ-markets', subtopic: 'definition-of-demand' },
  { level: 'gcse', subject: 'economics', topic: 'aqa-gcse-econ-markets', subtopic: 'definition-of-supply' },
  { level: 'gcse', subject: 'economics', topic: 'aqa-gcse-econ-markets', subtopic: 'market-equilibrium' },
  { level: 'gcse', subject: 'economics', topic: 'aqa-gcse-econ-markets', subtopic: 'definition-of-ped' },
  { level: 'gcse', subject: 'economics', topic: 'aqa-gcse-econ-markets', subtopic: 'definition-of-pes' },
  // Market Failure
  { level: 'gcse', subject: 'economics', topic: 'aqa-gcse-econ-market-failure', subtopic: 'definition-of-market-failure' },
  { level: 'gcse', subject: 'economics', topic: 'aqa-gcse-econ-market-failure', subtopic: 'definition-of-externalities' },
  { level: 'gcse', subject: 'economics', topic: 'aqa-gcse-econ-market-failure', subtopic: 'indirect-taxation' },
  // Production
  { level: 'gcse', subject: 'economics', topic: 'aqa-gcse-econ-production', subtopic: 'definition-of-production' },
  { level: 'gcse', subject: 'economics', topic: 'aqa-gcse-econ-production', subtopic: 'fixed-costs' },
  { level: 'gcse', subject: 'economics', topic: 'aqa-gcse-econ-production', subtopic: 'variable-costs' },
  { level: 'gcse', subject: 'economics', topic: 'aqa-gcse-econ-production', subtopic: 'definition-of-profit' },
  // Competition
  { level: 'gcse', subject: 'economics', topic: 'aqa-gcse-econ-competition', subtopic: 'spectrum-of-competition' },
  { level: 'gcse', subject: 'economics', topic: 'aqa-gcse-econ-competition', subtopic: 'definition-of-monopoly' },
  { level: 'gcse', subject: 'economics', topic: 'aqa-gcse-econ-competition', subtopic: 'benefits-of-competition' },
  // Labour Market
  { level: 'gcse', subject: 'economics', topic: 'aqa-gcse-econ-labour', subtopic: 'definition-of-labour-market' },
  { level: 'gcse', subject: 'economics', topic: 'aqa-gcse-econ-labour', subtopic: 'equilibrium-wage' },
  { level: 'gcse', subject: 'economics', topic: 'aqa-gcse-econ-labour', subtopic: 'national-minimum-wage' },
  // National Economy
  { level: 'gcse', subject: 'economics', topic: 'aqa-gcse-econ-national', subtopic: 'definition-of-economic-growth' },
  { level: 'gcse', subject: 'economics', topic: 'aqa-gcse-econ-national', subtopic: 'gross-domestic-product-gdp' },
  // Objectives
  { level: 'gcse', subject: 'economics', topic: 'aqa-gcse-econ-objectives', subtopic: 'definition-of-unemployment' },
  { level: 'gcse', subject: 'economics', topic: 'aqa-gcse-econ-objectives', subtopic: 'definition-of-inflation' },
  { level: 'gcse', subject: 'economics', topic: 'aqa-gcse-econ-objectives', subtopic: 'definition-of-balance-of-payments' },
  // Policy
  { level: 'gcse', subject: 'economics', topic: 'aqa-gcse-econ-policy', subtopic: 'definition-of-fiscal-policy' },
  { level: 'gcse', subject: 'economics', topic: 'aqa-gcse-econ-policy', subtopic: 'definition-of-monetary-policy' },
  { level: 'gcse', subject: 'economics', topic: 'aqa-gcse-econ-policy', subtopic: 'definition-of-supply-side-policies' },
  { level: 'gcse', subject: 'economics', topic: 'aqa-gcse-econ-policy', subtopic: 'taxation' },
  { level: 'gcse', subject: 'economics', topic: 'aqa-gcse-econ-policy', subtopic: 'government-spending' },
  // International Trade
  { level: 'gcse', subject: 'economics', topic: 'aqa-gcse-econ-trade', subtopic: 'reasons-for-international-trade' },
  { level: 'gcse', subject: 'economics', topic: 'aqa-gcse-econ-trade', subtopic: 'definition-of-exchange-rate' },
  { level: 'gcse', subject: 'economics', topic: 'aqa-gcse-econ-trade', subtopic: 'tariffs' },

  // ===========================================
  // GCSE PSYCHOLOGY (~45 subtopics)
  // ===========================================
  // Memory
  { level: 'gcse', subject: 'psychology', topic: 'aqa-gcse-psych-memory', subtopic: 'the-multi-store-model-of-memory' },
  { level: 'gcse', subject: 'psychology', topic: 'aqa-gcse-psych-memory', subtopic: 'short-term-memory-duration-and-capacity' },
  { level: 'gcse', subject: 'psychology', topic: 'aqa-gcse-psych-memory', subtopic: 'long-term-memory-duration-and-capacity' },
  { level: 'gcse', subject: 'psychology', topic: 'aqa-gcse-psych-memory', subtopic: 'episodic-memory-definition' },
  { level: 'gcse', subject: 'psychology', topic: 'aqa-gcse-psych-memory', subtopic: 'factors-affecting-eyewitness-testimony' },
  { level: 'gcse', subject: 'psychology', topic: 'aqa-gcse-psych-memory', subtopic: 'reconstructive-memory' },
  // Perception
  { level: 'gcse', subject: 'psychology', topic: 'aqa-gcse-psych-perception', subtopic: 'difference-between-sensation-and-perception' },
  { level: 'gcse', subject: 'psychology', topic: 'aqa-gcse-psych-perception', subtopic: 'visual-illusions' },
  { level: 'gcse', subject: 'psychology', topic: 'aqa-gcse-psych-perception', subtopic: 'monocular-depth-cues' },
  { level: 'gcse', subject: 'psychology', topic: 'aqa-gcse-psych-perception', subtopic: 'size-constancy' },
  { level: 'gcse', subject: 'psychology', topic: 'aqa-gcse-psych-perception', subtopic: 'gregory-perception-as-hypothesis' },
  // Development
  { level: 'gcse', subject: 'psychology', topic: 'aqa-gcse-psych-development', subtopic: 'early-brain-development' },
  { level: 'gcse', subject: 'psychology', topic: 'aqa-gcse-psych-development', subtopic: 'piagets-stages-of-development' },
  { level: 'gcse', subject: 'psychology', topic: 'aqa-gcse-psych-development', subtopic: 'dwecks-mindset-theory-of-learning' },
  { level: 'gcse', subject: 'psychology', topic: 'aqa-gcse-psych-development', subtopic: 'learning-styles-debate' },
  { level: 'gcse', subject: 'psychology', topic: 'aqa-gcse-psych-development', subtopic: 'willinghams-learning-theory' },
  // Research Methods
  { level: 'gcse', subject: 'psychology', topic: 'aqa-gcse-psych-research-methods-paper1', subtopic: 'laboratory-experiments' },
  { level: 'gcse', subject: 'psychology', topic: 'aqa-gcse-psych-research-methods-paper1', subtopic: 'observations' },
  { level: 'gcse', subject: 'psychology', topic: 'aqa-gcse-psych-research-methods-paper1', subtopic: 'questionnaires' },
  { level: 'gcse', subject: 'psychology', topic: 'aqa-gcse-psych-research-methods-paper1', subtopic: 'interviews' },
  { level: 'gcse', subject: 'psychology', topic: 'aqa-gcse-psych-research-methods-paper1', subtopic: 'case-studies' },
  { level: 'gcse', subject: 'psychology', topic: 'aqa-gcse-psych-research-methods-paper1', subtopic: 'ethics-in-research' },
  { level: 'gcse', subject: 'psychology', topic: 'aqa-gcse-psych-research-methods-paper1', subtopic: 'random-sampling' },
  // Social Influence
  { level: 'gcse', subject: 'psychology', topic: 'aqa-gcse-psych-social-influence', subtopic: 'definition-of-conformity' },
  { level: 'gcse', subject: 'psychology', topic: 'aqa-gcse-psych-social-influence', subtopic: 'definition-of-obedience' },
  { level: 'gcse', subject: 'psychology', topic: 'aqa-gcse-psych-social-influence', subtopic: 'milgrams-study-of-obedience' },
  { level: 'gcse', subject: 'psychology', topic: 'aqa-gcse-psych-social-influence', subtopic: 'aschs-study-of-conformity' },
  { level: 'gcse', subject: 'psychology', topic: 'aqa-gcse-psych-social-influence', subtopic: 'bystander-effect' },
  { level: 'gcse', subject: 'psychology', topic: 'aqa-gcse-psych-social-influence', subtopic: 'definition-of-deindividuation' },
  // Language and Thought
  { level: 'gcse', subject: 'psychology', topic: 'aqa-gcse-psych-language-thought', subtopic: 'piagets-view-language-depends-on-thought' },
  { level: 'gcse', subject: 'psychology', topic: 'aqa-gcse-psych-language-thought', subtopic: 'sapir-whorf-hypothesis' },
  // Brain and Neuropsychology
  { level: 'gcse', subject: 'psychology', topic: 'aqa-gcse-psych-brain-neuropsychology', subtopic: 'brain-structure' },
  { level: 'gcse', subject: 'psychology', topic: 'aqa-gcse-psych-brain-neuropsychology', subtopic: 'structure-of-neurons' },
  { level: 'gcse', subject: 'psychology', topic: 'aqa-gcse-psych-brain-neuropsychology', subtopic: 'role-of-neurotransmitters' },
  // Psychological Problems
  { level: 'gcse', subject: 'psychology', topic: 'aqa-gcse-psych-psychological-problems', subtopic: 'characteristics-of-depression' },
  { level: 'gcse', subject: 'psychology', topic: 'aqa-gcse-psych-psychological-problems', subtopic: 'definition-of-addiction' },

  // ===========================================
  // A-LEVEL BIOLOGY (~70 subtopics)
  // ===========================================
  // Biological Molecules
  { level: 'a-level', subject: 'biology', topic: 'aqa-alevel-biology-biological-molecules', subtopic: 'monomers-and-polymers' },
  { level: 'a-level', subject: 'biology', topic: 'aqa-alevel-biology-biological-molecules', subtopic: 'condensation-and-hydrolysis-reactions' },
  { level: 'a-level', subject: 'biology', topic: 'aqa-alevel-biology-biological-molecules', subtopic: 'monosaccharides' },
  { level: 'a-level', subject: 'biology', topic: 'aqa-alevel-biology-biological-molecules', subtopic: 'disaccharides' },
  { level: 'a-level', subject: 'biology', topic: 'aqa-alevel-biology-biological-molecules', subtopic: 'polysaccharides' },
  // Cells
  { level: 'a-level', subject: 'biology', topic: 'aqa-alevel-biology-cells', subtopic: 'eukaryotic-cell-structure' },
  { level: 'a-level', subject: 'biology', topic: 'aqa-alevel-biology-cells', subtopic: 'prokaryotic-cell-structure' },
  { level: 'a-level', subject: 'biology', topic: 'aqa-alevel-biology-cells', subtopic: 'mitochondria' },
  { level: 'a-level', subject: 'biology', topic: 'aqa-alevel-biology-cells', subtopic: 'chloroplasts' },
  { level: 'a-level', subject: 'biology', topic: 'aqa-alevel-biology-cells', subtopic: 'mitosis' },
  { level: 'a-level', subject: 'biology', topic: 'aqa-alevel-biology-cells', subtopic: 'cell-cycle' },
  // Organisms and Exchange
  { level: 'a-level', subject: 'biology', topic: 'aqa-alevel-biology-organisms-exchange', subtopic: 'surface-area-to-volume-ratio' },
  { level: 'a-level', subject: 'biology', topic: 'aqa-alevel-biology-organisms-exchange', subtopic: 'gas-exchange-in-fish' },
  { level: 'a-level', subject: 'biology', topic: 'aqa-alevel-biology-organisms-exchange', subtopic: 'counter-current-flow' },
  { level: 'a-level', subject: 'biology', topic: 'aqa-alevel-biology-organisms-exchange', subtopic: 'absorption-in-ileum' },
  // Genetic Information
  { level: 'a-level', subject: 'biology', topic: 'aqa-alevel-biology-genetic-information', subtopic: 'genes-and-genomes' },
  { level: 'a-level', subject: 'biology', topic: 'aqa-alevel-biology-genetic-information', subtopic: 'genetic-code' },
  { level: 'a-level', subject: 'biology', topic: 'aqa-alevel-biology-genetic-information', subtopic: 'transcription' },
  { level: 'a-level', subject: 'biology', topic: 'aqa-alevel-biology-genetic-information', subtopic: 'translation' },
  // Energy Transfers
  { level: 'a-level', subject: 'biology', topic: 'aqa-alevel-biology-energy-transfers', subtopic: 'photosynthesis-overview' },
  { level: 'a-level', subject: 'biology', topic: 'aqa-alevel-biology-energy-transfers', subtopic: 'light-dependent-reactions' },
  { level: 'a-level', subject: 'biology', topic: 'aqa-alevel-biology-energy-transfers', subtopic: 'light-independent-reactions' },
  { level: 'a-level', subject: 'biology', topic: 'aqa-alevel-biology-energy-transfers', subtopic: 'glycolysis' },
  { level: 'a-level', subject: 'biology', topic: 'aqa-alevel-biology-energy-transfers', subtopic: 'krebs-cycle' },
  { level: 'a-level', subject: 'biology', topic: 'aqa-alevel-biology-energy-transfers', subtopic: 'oxidative-phosphorylation' },
  // Organisms Respond
  { level: 'a-level', subject: 'biology', topic: 'aqa-alevel-biology-organisms-respond', subtopic: 'nervous-communication' },
  { level: 'a-level', subject: 'biology', topic: 'aqa-alevel-biology-organisms-respond', subtopic: 'hormonal-communication' },
  { level: 'a-level', subject: 'biology', topic: 'aqa-alevel-biology-organisms-respond', subtopic: 'synaptic-transmission' },
  { level: 'a-level', subject: 'biology', topic: 'aqa-alevel-biology-organisms-respond', subtopic: 'sliding-filament-theory' },
  { level: 'a-level', subject: 'biology', topic: 'aqa-alevel-biology-organisms-respond', subtopic: 'homeostasis-definition' },
  // Genetics and Populations
  { level: 'a-level', subject: 'biology', topic: 'aqa-alevel-biology-genetics-populations', subtopic: 'monohybrid-inheritance' },
  { level: 'a-level', subject: 'biology', topic: 'aqa-alevel-biology-genetics-populations', subtopic: 'dihybrid-inheritance' },
  { level: 'a-level', subject: 'biology', topic: 'aqa-alevel-biology-genetics-populations', subtopic: 'chi-squared-test' },
  { level: 'a-level', subject: 'biology', topic: 'aqa-alevel-biology-genetics-populations', subtopic: 'hardy-weinberg-principle' },
  { level: 'a-level', subject: 'biology', topic: 'aqa-alevel-biology-genetics-populations', subtopic: 'natural-selection' },
  { level: 'a-level', subject: 'biology', topic: 'aqa-alevel-biology-genetics-populations', subtopic: 'speciation' },
  // Gene Expression
  { level: 'a-level', subject: 'biology', topic: 'aqa-alevel-biology-gene-expression', subtopic: 'mutations' },
  { level: 'a-level', subject: 'biology', topic: 'aqa-alevel-biology-gene-expression', subtopic: 'stem-cells' },
  { level: 'a-level', subject: 'biology', topic: 'aqa-alevel-biology-gene-expression', subtopic: 'transformation' },
  { level: 'a-level', subject: 'biology', topic: 'aqa-alevel-biology-gene-expression', subtopic: 'pcr' },
  { level: 'a-level', subject: 'biology', topic: 'aqa-alevel-biology-gene-expression', subtopic: 'gel-electrophoresis' },

  // ===========================================
  // A-LEVEL ENGLISH LITERATURE (~50 subtopics)
  // ===========================================
  // Othello
  { level: 'a-level', subject: 'english-literature', topic: 'aqa-alevel-eng-lit-othello', subtopic: 'jealousy-and-its-consequences' },
  { level: 'a-level', subject: 'english-literature', topic: 'aqa-alevel-eng-lit-othello', subtopic: 'race-and-otherness' },
  { level: 'a-level', subject: 'english-literature', topic: 'aqa-alevel-eng-lit-othello', subtopic: 'deception-and-manipulation' },
  // Taming of the Shrew
  { level: 'a-level', subject: 'english-literature', topic: 'aqa-alevel-eng-lit-taming-shrew', subtopic: 'gender-roles-and-power' },
  { level: 'a-level', subject: 'english-literature', topic: 'aqa-alevel-eng-lit-taming-shrew', subtopic: 'marriage-as-transaction' },
  // Keats Poetry
  { level: 'a-level', subject: 'english-literature', topic: 'aqa-alevel-eng-lit-keats-poetry', subtopic: 'beauty-and-truth' },
  { level: 'a-level', subject: 'english-literature', topic: 'aqa-alevel-eng-lit-keats-poetry', subtopic: 'mortality-and-transience' },
  { level: 'a-level', subject: 'english-literature', topic: 'aqa-alevel-eng-lit-keats-poetry', subtopic: 'sensory-experience' },
  // The Great Gatsby
  { level: 'a-level', subject: 'english-literature', topic: 'aqa-alevel-eng-lit-great-gatsby', subtopic: 'the-american-dream' },
  { level: 'a-level', subject: 'english-literature', topic: 'aqa-alevel-eng-lit-great-gatsby', subtopic: 'wealth-and-corruption' },
  { level: 'a-level', subject: 'english-literature', topic: 'aqa-alevel-eng-lit-great-gatsby', subtopic: 'love-and-obsession' },
  // Wuthering Heights
  { level: 'a-level', subject: 'english-literature', topic: 'aqa-alevel-eng-lit-wuthering-heights', subtopic: 'passionate-love' },
  { level: 'a-level', subject: 'english-literature', topic: 'aqa-alevel-eng-lit-wuthering-heights', subtopic: 'revenge-and-cruelty' },
  { level: 'a-level', subject: 'english-literature', topic: 'aqa-alevel-eng-lit-wuthering-heights', subtopic: 'nature-and-wildness' },
  // War Poetry
  { level: 'a-level', subject: 'english-literature', topic: 'aqa-alevel-eng-lit-war-poetry', subtopic: 'patriotism-and-disillusion' },
  { level: 'a-level', subject: 'english-literature', topic: 'aqa-alevel-eng-lit-war-poetry', subtopic: 'suffering-and-sacrifice' },
  { level: 'a-level', subject: 'english-literature', topic: 'aqa-alevel-eng-lit-war-poetry', subtopic: 'comradeship-and-loss' },
  // Regeneration
  { level: 'a-level', subject: 'english-literature', topic: 'aqa-alevel-eng-lit-regeneration', subtopic: 'psychological-trauma' },
  { level: 'a-level', subject: 'english-literature', topic: 'aqa-alevel-eng-lit-regeneration', subtopic: 'masculinity-and-war' },
  // Atonement
  { level: 'a-level', subject: 'english-literature', topic: 'aqa-alevel-eng-lit-atonement', subtopic: 'guilt-and-atonement' },
  { level: 'a-level', subject: 'english-literature', topic: 'aqa-alevel-eng-lit-atonement', subtopic: 'truth-and-fiction' },
  { level: 'a-level', subject: 'english-literature', topic: 'aqa-alevel-eng-lit-atonement', subtopic: 'wars-devastation' },
  // The Handmaid's Tale
  { level: 'a-level', subject: 'english-literature', topic: 'aqa-alevel-eng-lit-handmaids-tale', subtopic: 'patriarchal-oppression' },
  { level: 'a-level', subject: 'english-literature', topic: 'aqa-alevel-eng-lit-handmaids-tale', subtopic: 'female-resistance' },
  { level: 'a-level', subject: 'english-literature', topic: 'aqa-alevel-eng-lit-handmaids-tale', subtopic: 'language-and-power' },
  // A Streetcar Named Desire
  { level: 'a-level', subject: 'english-literature', topic: 'aqa-alevel-eng-lit-streetcar', subtopic: 'fantasy-vs-reality' },
  { level: 'a-level', subject: 'english-literature', topic: 'aqa-alevel-eng-lit-streetcar', subtopic: 'desire-and-sexuality' },
  { level: 'a-level', subject: 'english-literature', topic: 'aqa-alevel-eng-lit-streetcar', subtopic: 'masculinity-and-violence' },
  // NEA Skills
  { level: 'a-level', subject: 'english-literature', topic: 'aqa-alevel-eng-lit-nea', subtopic: 'choosing-texts' },
  { level: 'a-level', subject: 'english-literature', topic: 'aqa-alevel-eng-lit-nea', subtopic: 'comparative-analysis' },
  { level: 'a-level', subject: 'english-literature', topic: 'aqa-alevel-eng-lit-nea', subtopic: 'critical-approaches' },

  // ===========================================
  // A-LEVEL HISTORY (~55 subtopics)
  // ===========================================
  // Tudors 1485-1603
  { level: 'a-level', subject: 'history', topic: 'aqa-alevel-hist-tudors', subtopic: 'henry-vii-consolidation' },
  { level: 'a-level', subject: 'history', topic: 'aqa-alevel-hist-tudors', subtopic: 'establishing-the-dynasty' },
  { level: 'a-level', subject: 'history', topic: 'aqa-alevel-hist-tudors', subtopic: 'battle-of-bosworth' },
  // Stuart Britain
  { level: 'a-level', subject: 'history', topic: 'aqa-alevel-hist-stuart-britain', subtopic: 'union-of-crowns' },
  { level: 'a-level', subject: 'history', topic: 'aqa-alevel-hist-stuart-britain', subtopic: 'james-and-parliament' },
  { level: 'a-level', subject: 'history', topic: 'aqa-alevel-hist-stuart-britain', subtopic: 'financial-problems' },
  // Britain Transformation
  { level: 'a-level', subject: 'history', topic: 'aqa-alevel-hist-britain-transformation', subtopic: 'britain-in-1851' },
  { level: 'a-level', subject: 'history', topic: 'aqa-alevel-hist-britain-transformation', subtopic: 'great-exhibition' },
  { level: 'a-level', subject: 'history', topic: 'aqa-alevel-hist-britain-transformation', subtopic: 'political-system-1850s' },
  // Tsarist and Communist Russia
  { level: 'a-level', subject: 'history', topic: 'aqa-alevel-hist-tsarist-communist-russia', subtopic: 'russia-in-1855' },
  { level: 'a-level', subject: 'history', topic: 'aqa-alevel-hist-tsarist-communist-russia', subtopic: 'emancipation-of-serfs' },
  { level: 'a-level', subject: 'history', topic: 'aqa-alevel-hist-tsarist-communist-russia', subtopic: 'judicial-reforms' },
  // USA Superpower
  { level: 'a-level', subject: 'history', topic: 'aqa-alevel-hist-usa-superpower', subtopic: 'post-civil-war-america' },
  { level: 'a-level', subject: 'history', topic: 'aqa-alevel-hist-usa-superpower', subtopic: 'reconstruction-plans' },
  { level: 'a-level', subject: 'history', topic: 'aqa-alevel-hist-usa-superpower', subtopic: 'radical-reconstruction' },
  // Germany 1871-1991
  { level: 'a-level', subject: 'history', topic: 'aqa-alevel-hist-germany-1871-1991', subtopic: 'unification-legacy' },
  { level: 'a-level', subject: 'history', topic: 'aqa-alevel-hist-germany-1871-1991', subtopic: 'constitution-1871' },
  { level: 'a-level', subject: 'history', topic: 'aqa-alevel-hist-germany-1871-1991', subtopic: 'bismarcks-domestic-policy' },
  // English Revolution
  { level: 'a-level', subject: 'history', topic: 'aqa-alevel-hist-english-revolution', subtopic: 'charles-is-personality' },
  { level: 'a-level', subject: 'history', topic: 'aqa-alevel-hist-english-revolution', subtopic: 'buckingham' },
  { level: 'a-level', subject: 'history', topic: 'aqa-alevel-hist-english-revolution', subtopic: 'parliament-1625-29' },
  // Cold War
  { level: 'a-level', subject: 'history', topic: 'aqa-alevel-hist-cold-war', subtopic: 'wartime-alliance' },
  { level: 'a-level', subject: 'history', topic: 'aqa-alevel-hist-cold-war', subtopic: 'yalta-and-potsdam' },
  { level: 'a-level', subject: 'history', topic: 'aqa-alevel-hist-cold-war', subtopic: 'ideological-differences' },
  // Making of Modern Britain
  { level: 'a-level', subject: 'history', topic: 'aqa-alevel-hist-making-modern-britain', subtopic: 'churchills-return' },
  { level: 'a-level', subject: 'history', topic: 'aqa-alevel-hist-making-modern-britain', subtopic: 'eden-and-suez' },
  { level: 'a-level', subject: 'history', topic: 'aqa-alevel-hist-making-modern-britain', subtopic: 'macmillan' },
  // Russia 1917-1953
  { level: 'a-level', subject: 'history', topic: 'aqa-alevel-hist-russia-1917-1953', subtopic: 'february-revolution' },
  { level: 'a-level', subject: 'history', topic: 'aqa-alevel-hist-russia-1917-1953', subtopic: 'fall-of-tsarism' },
  { level: 'a-level', subject: 'history', topic: 'aqa-alevel-hist-russia-1917-1953', subtopic: 'provisional-government' },
  // Historical Investigation
  { level: 'a-level', subject: 'history', topic: 'aqa-alevel-hist-investigation', subtopic: 'choosing-a-question' },
  { level: 'a-level', subject: 'history', topic: 'aqa-alevel-hist-investigation', subtopic: 'question-requirements' },

  // ===========================================
  // A-LEVEL GEOGRAPHY (~50 subtopics)
  // ===========================================
  // Water and Carbon Cycles
  { level: 'a-level', subject: 'geography', topic: 'aqa-alevel-geog-water-carbon', subtopic: 'systems-in-physical-geography' },
  { level: 'a-level', subject: 'geography', topic: 'aqa-alevel-geog-water-carbon', subtopic: 'open-and-closed-systems' },
  { level: 'a-level', subject: 'geography', topic: 'aqa-alevel-geog-water-carbon', subtopic: 'inputs-outputs-stores-and-flows' },
  // Coastal Systems
  { level: 'a-level', subject: 'geography', topic: 'aqa-alevel-geog-coastal', subtopic: 'coastal-system-inputs-processes-outputs' },
  { level: 'a-level', subject: 'geography', topic: 'aqa-alevel-geog-coastal', subtopic: 'sources-of-energy-waves-tides-currents' },
  { level: 'a-level', subject: 'geography', topic: 'aqa-alevel-geog-coastal', subtopic: 'sediment-sources-and-sinks' },
  // Glacial Systems
  { level: 'a-level', subject: 'geography', topic: 'aqa-alevel-geog-glacial', subtopic: 'glacial-system-inputs-processes-outputs' },
  { level: 'a-level', subject: 'geography', topic: 'aqa-alevel-geog-glacial', subtopic: 'glacial-budget-accumulation-and-ablation' },
  { level: 'a-level', subject: 'geography', topic: 'aqa-alevel-geog-glacial', subtopic: 'mass-balance' },
  // Hazards
  { level: 'a-level', subject: 'geography', topic: 'aqa-alevel-geog-hazards', subtopic: 'definition-of-hazard' },
  { level: 'a-level', subject: 'geography', topic: 'aqa-alevel-geog-hazards', subtopic: 'hazard-perception' },
  { level: 'a-level', subject: 'geography', topic: 'aqa-alevel-geog-hazards', subtopic: 'hazard-risk-equation' },
  // Global Systems
  { level: 'a-level', subject: 'geography', topic: 'aqa-alevel-geog-global-systems', subtopic: 'dimensions-of-globalisation' },
  { level: 'a-level', subject: 'geography', topic: 'aqa-alevel-geog-global-systems', subtopic: 'economic-globalisation' },
  { level: 'a-level', subject: 'geography', topic: 'aqa-alevel-geog-global-systems', subtopic: 'political-globalisation' },
  // Changing Places
  { level: 'a-level', subject: 'geography', topic: 'aqa-alevel-geog-changing-places', subtopic: 'place-concept' },
  { level: 'a-level', subject: 'geography', topic: 'aqa-alevel-geog-changing-places', subtopic: 'location-vs-locale-vs-sense-of-place' },
  { level: 'a-level', subject: 'geography', topic: 'aqa-alevel-geog-changing-places', subtopic: 'insider-and-outsider-perspectives' },
  // Urban
  { level: 'a-level', subject: 'geography', topic: 'aqa-alevel-geog-urban', subtopic: 'global-pattern-of-urbanisation' },
  { level: 'a-level', subject: 'geography', topic: 'aqa-alevel-geog-urban', subtopic: 'urbanisation-rates' },
  { level: 'a-level', subject: 'geography', topic: 'aqa-alevel-geog-urban', subtopic: 'rural-urban-migration-causes' },
  // Population
  { level: 'a-level', subject: 'geography', topic: 'aqa-alevel-geog-population', subtopic: 'global-population-growth' },
  { level: 'a-level', subject: 'geography', topic: 'aqa-alevel-geog-population', subtopic: 'demographic-transition-model' },
  // Resource Security
  { level: 'a-level', subject: 'geography', topic: 'aqa-alevel-geog-resource-security', subtopic: 'natural-resources-definition' },
  { level: 'a-level', subject: 'geography', topic: 'aqa-alevel-geog-resource-security', subtopic: 'renewable-vs-non-renewable' },
  // Skills
  { level: 'a-level', subject: 'geography', topic: 'aqa-alevel-geog-skills', subtopic: 'atlas-maps' },
  { level: 'a-level', subject: 'geography', topic: 'aqa-alevel-geog-skills', subtopic: 'os-maps-at-different-scales' },

  // ===========================================
  // A-LEVEL COMPUTER SCIENCE (~60 subtopics)
  // ===========================================
  // Programming
  { level: 'a-level', subject: 'computer-science', topic: 'aqa-alevel-cs-programming', subtopic: 'data-types' },
  { level: 'a-level', subject: 'computer-science', topic: 'aqa-alevel-cs-programming', subtopic: 'integer' },
  { level: 'a-level', subject: 'computer-science', topic: 'aqa-alevel-cs-programming', subtopic: 'boolean' },
  // Data Structures
  { level: 'a-level', subject: 'computer-science', topic: 'aqa-alevel-cs-data-structures', subtopic: 'abstract-data-types' },
  { level: 'a-level', subject: 'computer-science', topic: 'aqa-alevel-cs-data-structures', subtopic: 'single-vs-multi-dimensional-arrays' },
  { level: 'a-level', subject: 'computer-science', topic: 'aqa-alevel-cs-data-structures', subtopic: 'static-data-structures' },
  { level: 'a-level', subject: 'computer-science', topic: 'aqa-alevel-cs-data-structures', subtopic: 'dynamic-data-structures' },
  // Algorithms
  { level: 'a-level', subject: 'computer-science', topic: 'aqa-alevel-cs-algorithms', subtopic: 'depth-first-search' },
  { level: 'a-level', subject: 'computer-science', topic: 'aqa-alevel-cs-algorithms', subtopic: 'breadth-first-search' },
  { level: 'a-level', subject: 'computer-science', topic: 'aqa-alevel-cs-algorithms', subtopic: 'dfs-implementation' },
  // Theory of Computation
  { level: 'a-level', subject: 'computer-science', topic: 'aqa-alevel-cs-theory-computation', subtopic: 'problem-solving' },
  { level: 'a-level', subject: 'computer-science', topic: 'aqa-alevel-cs-theory-computation', subtopic: 'abstraction' },
  { level: 'a-level', subject: 'computer-science', topic: 'aqa-alevel-cs-theory-computation', subtopic: 'information-hiding' },
  // Data Representation
  { level: 'a-level', subject: 'computer-science', topic: 'aqa-alevel-cs-data-representation', subtopic: 'natural-numbers' },
  { level: 'a-level', subject: 'computer-science', topic: 'aqa-alevel-cs-data-representation', subtopic: 'integer-numbers' },
  { level: 'a-level', subject: 'computer-science', topic: 'aqa-alevel-cs-data-representation', subtopic: 'real-numbers' },
  // Computer Systems
  { level: 'a-level', subject: 'computer-science', topic: 'aqa-alevel-cs-computer-systems', subtopic: 'hardware-vs-software' },
  { level: 'a-level', subject: 'computer-science', topic: 'aqa-alevel-cs-computer-systems', subtopic: 'system-software' },
  { level: 'a-level', subject: 'computer-science', topic: 'aqa-alevel-cs-computer-systems', subtopic: 'application-software' },
  // Organisation and Architecture
  { level: 'a-level', subject: 'computer-science', topic: 'aqa-alevel-cs-organisation-architecture', subtopic: 'internal-components' },
  { level: 'a-level', subject: 'computer-science', topic: 'aqa-alevel-cs-organisation-architecture', subtopic: 'processor' },
  { level: 'a-level', subject: 'computer-science', topic: 'aqa-alevel-cs-organisation-architecture', subtopic: 'main-memory' },
  // Networking
  { level: 'a-level', subject: 'computer-science', topic: 'aqa-alevel-cs-networking', subtopic: 'serial-transmission' },
  { level: 'a-level', subject: 'computer-science', topic: 'aqa-alevel-cs-networking', subtopic: 'parallel-transmission' },
  { level: 'a-level', subject: 'computer-science', topic: 'aqa-alevel-cs-networking', subtopic: 'synchronous-transmission' },
  // Databases
  { level: 'a-level', subject: 'computer-science', topic: 'aqa-alevel-cs-databases', subtopic: 'entity-relationship-modelling' },
  { level: 'a-level', subject: 'computer-science', topic: 'aqa-alevel-cs-databases', subtopic: 'entities' },
  { level: 'a-level', subject: 'computer-science', topic: 'aqa-alevel-cs-databases', subtopic: 'attributes' },
  // Consequences
  { level: 'a-level', subject: 'computer-science', topic: 'aqa-alevel-cs-consequences', subtopic: 'moral-issues' },
  { level: 'a-level', subject: 'computer-science', topic: 'aqa-alevel-cs-consequences', subtopic: 'ethical-issues' },
  { level: 'a-level', subject: 'computer-science', topic: 'aqa-alevel-cs-consequences', subtopic: 'legal-issues' },
  // Functional Programming
  { level: 'a-level', subject: 'computer-science', topic: 'aqa-alevel-cs-functional-programming', subtopic: 'function-as-first-class-object' },
  { level: 'a-level', subject: 'computer-science', topic: 'aqa-alevel-cs-functional-programming', subtopic: 'higher-order-functions' },

  // ===========================================
  // A-LEVEL BUSINESS (~50 subtopics)
  // ===========================================
  // What is Business
  { level: 'a-level', subject: 'business', topic: 'aqa-alevel-bus-what-is-business', subtopic: 'purpose-of-business-activity' },
  { level: 'a-level', subject: 'business', topic: 'aqa-alevel-bus-what-is-business', subtopic: 'mission-statements' },
  { level: 'a-level', subject: 'business', topic: 'aqa-alevel-bus-what-is-business', subtopic: 'corporate-objectives' },
  // Managers and Leadership
  { level: 'a-level', subject: 'business', topic: 'aqa-alevel-bus-managers-leadership', subtopic: 'managers-vs-leaders' },
  { level: 'a-level', subject: 'business', topic: 'aqa-alevel-bus-managers-leadership', subtopic: 'functions-of-management' },
  // Marketing
  { level: 'a-level', subject: 'business', topic: 'aqa-alevel-bus-marketing', subtopic: 'marketing-objectives' },
  { level: 'a-level', subject: 'business', topic: 'aqa-alevel-bus-marketing', subtopic: 'sales-volume-objectives' },
  { level: 'a-level', subject: 'business', topic: 'aqa-alevel-bus-marketing', subtopic: 'sales-value-objectives' },
  // Operations
  { level: 'a-level', subject: 'business', topic: 'aqa-alevel-bus-operations', subtopic: 'operations-objectives' },
  { level: 'a-level', subject: 'business', topic: 'aqa-alevel-bus-operations', subtopic: 'cost-objectives' },
  { level: 'a-level', subject: 'business', topic: 'aqa-alevel-bus-operations', subtopic: 'unit-costs' },
  // Finance
  { level: 'a-level', subject: 'business', topic: 'aqa-alevel-bus-finance', subtopic: 'financial-objectives' },
  { level: 'a-level', subject: 'business', topic: 'aqa-alevel-bus-finance', subtopic: 'revenue-objectives' },
  { level: 'a-level', subject: 'business', topic: 'aqa-alevel-bus-finance', subtopic: 'costs-objectives' },
  // Human Resources
  { level: 'a-level', subject: 'business', topic: 'aqa-alevel-bus-human-resources', subtopic: 'hr-objectives' },
  { level: 'a-level', subject: 'business', topic: 'aqa-alevel-bus-human-resources', subtopic: 'employee-engagement-objectives' },
  { level: 'a-level', subject: 'business', topic: 'aqa-alevel-bus-human-resources', subtopic: 'talent-development-objectives' },
  // Strategic Position
  { level: 'a-level', subject: 'business', topic: 'aqa-alevel-bus-strategic-position', subtopic: 'mission' },
  { level: 'a-level', subject: 'business', topic: 'aqa-alevel-bus-strategic-position', subtopic: 'mission-statements' },
  // Strategic Direction
  { level: 'a-level', subject: 'business', topic: 'aqa-alevel-bus-strategic-direction', subtopic: 'ansoffs-matrix' },
  { level: 'a-level', subject: 'business', topic: 'aqa-alevel-bus-strategic-direction', subtopic: 'market-penetration' },
  // Strategic Methods
  { level: 'a-level', subject: 'business', topic: 'aqa-alevel-bus-strategic-methods', subtopic: 'business-growth' },
  { level: 'a-level', subject: 'business', topic: 'aqa-alevel-bus-strategic-methods', subtopic: 'organic-growth' },
  // Managing Change
  { level: 'a-level', subject: 'business', topic: 'aqa-alevel-bus-managing-change', subtopic: 'strategic-change' },
  { level: 'a-level', subject: 'business', topic: 'aqa-alevel-bus-managing-change', subtopic: 'causes-of-change' },

  // ===========================================
  // A-LEVEL ECONOMICS (~60 subtopics)
  // ===========================================
  // Methodology & Economic Problem
  { level: 'a-level', subject: 'economics', topic: 'aqa-alevel-econ-methodology', subtopic: 'scarcity-and-choice' },
  { level: 'a-level', subject: 'economics', topic: 'aqa-alevel-econ-methodology', subtopic: 'opportunity-cost' },
  { level: 'a-level', subject: 'economics', topic: 'aqa-alevel-econ-methodology', subtopic: 'production-possibility-frontiers' },
  { level: 'a-level', subject: 'economics', topic: 'aqa-alevel-econ-methodology', subtopic: 'positive-and-normative-statements' },
  // Individual Economic Decision Making
  { level: 'a-level', subject: 'economics', topic: 'aqa-alevel-econ-individual', subtopic: 'utility-theory' },
  { level: 'a-level', subject: 'economics', topic: 'aqa-alevel-econ-individual', subtopic: 'rational-economic-decision-making' },
  { level: 'a-level', subject: 'economics', topic: 'aqa-alevel-econ-individual', subtopic: 'bounded-rationality' },
  { level: 'a-level', subject: 'economics', topic: 'aqa-alevel-econ-individual', subtopic: 'nudge-theory' },
  // Price Determination
  { level: 'a-level', subject: 'economics', topic: 'aqa-alevel-econ-price', subtopic: 'the-law-of-demand' },
  { level: 'a-level', subject: 'economics', topic: 'aqa-alevel-econ-price', subtopic: 'the-law-of-supply' },
  { level: 'a-level', subject: 'economics', topic: 'aqa-alevel-econ-price', subtopic: 'market-equilibrium' },
  { level: 'a-level', subject: 'economics', topic: 'aqa-alevel-econ-price', subtopic: 'concept-of-ped' },
  { level: 'a-level', subject: 'economics', topic: 'aqa-alevel-econ-price', subtopic: 'concept-of-yed' },
  { level: 'a-level', subject: 'economics', topic: 'aqa-alevel-econ-price', subtopic: 'concept-of-xed' },
  { level: 'a-level', subject: 'economics', topic: 'aqa-alevel-econ-price', subtopic: 'concept-of-pes' },
  { level: 'a-level', subject: 'economics', topic: 'aqa-alevel-econ-price', subtopic: 'consumer-and-producer-surplus' },
  // Production, Costs and Revenue
  { level: 'a-level', subject: 'economics', topic: 'aqa-alevel-econ-production', subtopic: 'law-of-diminishing-returns' },
  { level: 'a-level', subject: 'economics', topic: 'aqa-alevel-econ-production', subtopic: 'economies-of-scale' },
  { level: 'a-level', subject: 'economics', topic: 'aqa-alevel-econ-production', subtopic: 'diseconomies-of-scale' },
  { level: 'a-level', subject: 'economics', topic: 'aqa-alevel-econ-production', subtopic: 'total-revenue' },
  { level: 'a-level', subject: 'economics', topic: 'aqa-alevel-econ-production', subtopic: 'marginal-revenue' },
  // Market Structures
  { level: 'a-level', subject: 'economics', topic: 'aqa-alevel-econ-market-structures', subtopic: 'assumptions-of-perfect-competition' },
  { level: 'a-level', subject: 'economics', topic: 'aqa-alevel-econ-market-structures', subtopic: 'features-of-monopoly' },
  { level: 'a-level', subject: 'economics', topic: 'aqa-alevel-econ-market-structures', subtopic: 'features-of-oligopoly' },
  { level: 'a-level', subject: 'economics', topic: 'aqa-alevel-econ-market-structures', subtopic: 'features-of-monopolistic-competition' },
  { level: 'a-level', subject: 'economics', topic: 'aqa-alevel-econ-market-structures', subtopic: 'price-discrimination' },
  { level: 'a-level', subject: 'economics', topic: 'aqa-alevel-econ-market-structures', subtopic: 'theory-of-contestable-markets' },
  { level: 'a-level', subject: 'economics', topic: 'aqa-alevel-econ-market-structures', subtopic: 'profit-maximisation' },
  // Labour Market
  { level: 'a-level', subject: 'economics', topic: 'aqa-alevel-econ-labour', subtopic: 'derived-demand' },
  { level: 'a-level', subject: 'economics', topic: 'aqa-alevel-econ-labour', subtopic: 'marginal-revenue-product-mrp' },
  { level: 'a-level', subject: 'economics', topic: 'aqa-alevel-econ-labour', subtopic: 'equilibrium-wage' },
  { level: 'a-level', subject: 'economics', topic: 'aqa-alevel-econ-labour', subtopic: 'role-of-trade-unions' },
  { level: 'a-level', subject: 'economics', topic: 'aqa-alevel-econ-labour', subtopic: 'national-minimum-wage' },
  // Distribution of Income and Wealth
  { level: 'a-level', subject: 'economics', topic: 'aqa-alevel-econ-distribution', subtopic: 'income-inequality' },
  { level: 'a-level', subject: 'economics', topic: 'aqa-alevel-econ-distribution', subtopic: 'lorenz-curve' },
  { level: 'a-level', subject: 'economics', topic: 'aqa-alevel-econ-distribution', subtopic: 'gini-coefficient' },
  { level: 'a-level', subject: 'economics', topic: 'aqa-alevel-econ-distribution', subtopic: 'absolute-poverty' },
  { level: 'a-level', subject: 'economics', topic: 'aqa-alevel-econ-distribution', subtopic: 'relative-poverty' },
  // Market Failure
  { level: 'a-level', subject: 'economics', topic: 'aqa-alevel-econ-market-failure', subtopic: 'negative-externalities-of-production' },
  { level: 'a-level', subject: 'economics', topic: 'aqa-alevel-econ-market-failure', subtopic: 'positive-externalities-of-consumption' },
  { level: 'a-level', subject: 'economics', topic: 'aqa-alevel-econ-market-failure', subtopic: 'characteristics-of-public-goods' },
  { level: 'a-level', subject: 'economics', topic: 'aqa-alevel-econ-market-failure', subtopic: 'merit-goods' },
  { level: 'a-level', subject: 'economics', topic: 'aqa-alevel-econ-market-failure', subtopic: 'demerit-goods' },
  { level: 'a-level', subject: 'economics', topic: 'aqa-alevel-econ-market-failure', subtopic: 'asymmetric-information' },
  // Government Intervention
  { level: 'a-level', subject: 'economics', topic: 'aqa-alevel-econ-intervention', subtopic: 'ad-valorem-taxes' },
  { level: 'a-level', subject: 'economics', topic: 'aqa-alevel-econ-intervention', subtopic: 'effect-of-subsidies-on-markets' },
  { level: 'a-level', subject: 'economics', topic: 'aqa-alevel-econ-intervention', subtopic: 'maximum-prices-price-ceilings' },
  { level: 'a-level', subject: 'economics', topic: 'aqa-alevel-econ-intervention', subtopic: 'definition-of-government-failure' },
  // Macroeconomic Measurement
  { level: 'a-level', subject: 'economics', topic: 'aqa-alevel-econ-measurement', subtopic: 'gross-domestic-product-gdp' },
  { level: 'a-level', subject: 'economics', topic: 'aqa-alevel-econ-measurement', subtopic: 'nominal-vs-real-gdp' },
  { level: 'a-level', subject: 'economics', topic: 'aqa-alevel-econ-measurement', subtopic: 'human-development-index-hdi' },
  // AD/AS Model
  { level: 'a-level', subject: 'economics', topic: 'aqa-alevel-econ-macro-model', subtopic: 'components-of-ad' },
  { level: 'a-level', subject: 'economics', topic: 'aqa-alevel-econ-macro-model', subtopic: 'short-run-aggregate-supply-sras' },
  { level: 'a-level', subject: 'economics', topic: 'aqa-alevel-econ-macro-model', subtopic: 'long-run-aggregate-supply-lras' },
  { level: 'a-level', subject: 'economics', topic: 'aqa-alevel-econ-macro-model', subtopic: 'the-multiplier-concept' },
  // Economic Performance
  { level: 'a-level', subject: 'economics', topic: 'aqa-alevel-econ-performance', subtopic: 'causes-of-short-run-growth' },
  { level: 'a-level', subject: 'economics', topic: 'aqa-alevel-econ-performance', subtopic: 'types-of-unemployment' },
  { level: 'a-level', subject: 'economics', topic: 'aqa-alevel-econ-performance', subtopic: 'causes-of-inflation' },
  { level: 'a-level', subject: 'economics', topic: 'aqa-alevel-econ-performance', subtopic: 'current-account-deficit' },
  // Monetary Policy
  { level: 'a-level', subject: 'economics', topic: 'aqa-alevel-econ-monetary', subtopic: 'functions-of-money' },
  { level: 'a-level', subject: 'economics', topic: 'aqa-alevel-econ-monetary', subtopic: 'role-of-bank-of-england' },
  { level: 'a-level', subject: 'economics', topic: 'aqa-alevel-econ-monetary', subtopic: 'quantitative-easing' },
  // Fiscal Policy
  { level: 'a-level', subject: 'economics', topic: 'aqa-alevel-econ-fiscal', subtopic: 'definition-of-fiscal-policy' },
  { level: 'a-level', subject: 'economics', topic: 'aqa-alevel-econ-fiscal', subtopic: 'progressive-taxation' },
  { level: 'a-level', subject: 'economics', topic: 'aqa-alevel-econ-fiscal', subtopic: 'budget-deficit' },
  { level: 'a-level', subject: 'economics', topic: 'aqa-alevel-econ-fiscal', subtopic: 'definition-of-supply-side-policies' },
  // International Economics
  { level: 'a-level', subject: 'economics', topic: 'aqa-alevel-econ-international', subtopic: 'comparative-advantage' },
  { level: 'a-level', subject: 'economics', topic: 'aqa-alevel-econ-international', subtopic: 'tariffs' },
  { level: 'a-level', subject: 'economics', topic: 'aqa-alevel-econ-international', subtopic: 'exchange-rate-determination' },
  { level: 'a-level', subject: 'economics', topic: 'aqa-alevel-econ-international', subtopic: 'definition-of-globalisation' },

  // ===========================================
  // A-LEVEL PSYCHOLOGY (~60 subtopics)
  // ===========================================
  // Approaches in Psychology
  { level: 'a-level', subject: 'psychology', topic: 'aqa-alevel-psych-approaches', subtopic: 'the-behaviourist-approach' },
  { level: 'a-level', subject: 'psychology', topic: 'aqa-alevel-psych-approaches', subtopic: 'social-learning-theory' },
  { level: 'a-level', subject: 'psychology', topic: 'aqa-alevel-psych-approaches', subtopic: 'the-cognitive-approach' },
  { level: 'a-level', subject: 'psychology', topic: 'aqa-alevel-psych-approaches', subtopic: 'the-biological-approach' },
  { level: 'a-level', subject: 'psychology', topic: 'aqa-alevel-psych-approaches', subtopic: 'the-psychodynamic-approach' },
  { level: 'a-level', subject: 'psychology', topic: 'aqa-alevel-psych-approaches', subtopic: 'humanistic-psychology' },
  // Biopsychology
  { level: 'a-level', subject: 'psychology', topic: 'aqa-alevel-psych-biopsychology', subtopic: 'structure-and-function-of-the-nervous-system' },
  { level: 'a-level', subject: 'psychology', topic: 'aqa-alevel-psych-biopsychology', subtopic: 'process-of-synaptic-transmission' },
  { level: 'a-level', subject: 'psychology', topic: 'aqa-alevel-psych-biopsychology', subtopic: 'localisation-of-function-in-the-brain' },
  { level: 'a-level', subject: 'psychology', topic: 'aqa-alevel-psych-biopsychology', subtopic: 'brain-plasticity' },
  { level: 'a-level', subject: 'psychology', topic: 'aqa-alevel-psych-biopsychology', subtopic: 'ways-of-studying-the-brain-fmri' },
  { level: 'a-level', subject: 'psychology', topic: 'aqa-alevel-psych-biopsychology', subtopic: 'circadian-rhythms' },
  // Memory
  { level: 'a-level', subject: 'psychology', topic: 'aqa-alevel-psych-memory', subtopic: 'the-multi-store-model-of-memory' },
  { level: 'a-level', subject: 'psychology', topic: 'aqa-alevel-psych-memory', subtopic: 'the-working-memory-model' },
  { level: 'a-level', subject: 'psychology', topic: 'aqa-alevel-psych-memory', subtopic: 'types-of-long-term-memory-episodic' },
  { level: 'a-level', subject: 'psychology', topic: 'aqa-alevel-psych-memory', subtopic: 'explanations-for-forgetting-interference' },
  { level: 'a-level', subject: 'psychology', topic: 'aqa-alevel-psych-memory', subtopic: 'factors-affecting-eyewitness-testimony-accuracy' },
  { level: 'a-level', subject: 'psychology', topic: 'aqa-alevel-psych-memory', subtopic: 'the-cognitive-interview-technique' },
  // Attachment
  { level: 'a-level', subject: 'psychology', topic: 'aqa-alevel-psych-attachment', subtopic: 'caregiver-infant-interactions-reciprocity' },
  { level: 'a-level', subject: 'psychology', topic: 'aqa-alevel-psych-attachment', subtopic: 'bowlbys-monotropic-theory' },
  { level: 'a-level', subject: 'psychology', topic: 'aqa-alevel-psych-attachment', subtopic: 'ainsworths-strange-situation-procedure' },
  { level: 'a-level', subject: 'psychology', topic: 'aqa-alevel-psych-attachment', subtopic: 'bowlbys-maternal-deprivation-hypothesis' },
  { level: 'a-level', subject: 'psychology', topic: 'aqa-alevel-psych-attachment', subtopic: 'romanian-orphan-studies-effects-of-institutionalisation' },
  // Social Influence
  { level: 'a-level', subject: 'psychology', topic: 'aqa-alevel-psych-social-influence', subtopic: 'types-of-conformity-internalisation' },
  { level: 'a-level', subject: 'psychology', topic: 'aqa-alevel-psych-social-influence', subtopic: 'aschs-research-on-conformity' },
  { level: 'a-level', subject: 'psychology', topic: 'aqa-alevel-psych-social-influence', subtopic: 'milgrams-research-on-obedience' },
  { level: 'a-level', subject: 'psychology', topic: 'aqa-alevel-psych-social-influence', subtopic: 'minority-influence-consistency' },
  { level: 'a-level', subject: 'psychology', topic: 'aqa-alevel-psych-social-influence', subtopic: 'role-of-social-influence-in-social-change' },
  // Psychopathology
  { level: 'a-level', subject: 'psychology', topic: 'aqa-alevel-psych-psychopathology', subtopic: 'definitions-of-abnormality-statistical-infrequency' },
  { level: 'a-level', subject: 'psychology', topic: 'aqa-alevel-psych-psychopathology', subtopic: 'phobias-behavioural-characteristics' },
  { level: 'a-level', subject: 'psychology', topic: 'aqa-alevel-psych-psychopathology', subtopic: 'depression-behavioural-characteristics' },
  { level: 'a-level', subject: 'psychology', topic: 'aqa-alevel-psych-psychopathology', subtopic: 'ocd-behavioural-characteristics' },
  { level: 'a-level', subject: 'psychology', topic: 'aqa-alevel-psych-psychopathology', subtopic: 'cognitive-behaviour-therapy-cbt-for-depression' },
  // Research Methods
  { level: 'a-level', subject: 'psychology', topic: 'aqa-alevel-psych-research-methods', subtopic: 'the-experimental-method' },
  { level: 'a-level', subject: 'psychology', topic: 'aqa-alevel-psych-research-methods', subtopic: 'observational-techniques' },
  { level: 'a-level', subject: 'psychology', topic: 'aqa-alevel-psych-research-methods', subtopic: 'sampling-methods-random-sampling' },
  { level: 'a-level', subject: 'psychology', topic: 'aqa-alevel-psych-research-methods', subtopic: 'ethical-issues-in-research' },
  { level: 'a-level', subject: 'psychology', topic: 'aqa-alevel-psych-research-methods', subtopic: 'the-role-of-peer-review' },
  // Issues and Debates
  { level: 'a-level', subject: 'psychology', topic: 'aqa-alevel-psych-issues-debates', subtopic: 'gender-bias-in-psychological-research' },
  { level: 'a-level', subject: 'psychology', topic: 'aqa-alevel-psych-issues-debates', subtopic: 'cultural-bias-in-psychological-research' },
  { level: 'a-level', subject: 'psychology', topic: 'aqa-alevel-psych-issues-debates', subtopic: 'free-will-and-determinism-debate' },
  { level: 'a-level', subject: 'psychology', topic: 'aqa-alevel-psych-issues-debates', subtopic: 'the-nature-nurture-debate' },
  { level: 'a-level', subject: 'psychology', topic: 'aqa-alevel-psych-issues-debates', subtopic: 'holism-and-reductionism' },
  { level: 'a-level', subject: 'psychology', topic: 'aqa-alevel-psych-issues-debates', subtopic: 'idiographic-approach' },
  // Relationships
  { level: 'a-level', subject: 'psychology', topic: 'aqa-alevel-psych-relationships', subtopic: 'evolutionary-explanations-for-partner-preferences' },
  { level: 'a-level', subject: 'psychology', topic: 'aqa-alevel-psych-relationships', subtopic: 'physical-attractiveness' },
  { level: 'a-level', subject: 'psychology', topic: 'aqa-alevel-psych-relationships', subtopic: 'social-exchange-theory' },
  { level: 'a-level', subject: 'psychology', topic: 'aqa-alevel-psych-relationships', subtopic: 'virtual-relationships-in-social-media' },
  { level: 'a-level', subject: 'psychology', topic: 'aqa-alevel-psych-relationships', subtopic: 'parasocial-relationships' },
  // Aggression
  { level: 'a-level', subject: 'psychology', topic: 'aqa-alevel-psych-aggression', subtopic: 'neural-mechanisms-in-aggression' },
  { level: 'a-level', subject: 'psychology', topic: 'aqa-alevel-psych-aggression', subtopic: 'social-learning-theory-of-aggression' },
  { level: 'a-level', subject: 'psychology', topic: 'aqa-alevel-psych-aggression', subtopic: 'de-individuation' },
  { level: 'a-level', subject: 'psychology', topic: 'aqa-alevel-psych-aggression', subtopic: 'media-influences-on-aggression' },
  // Schizophrenia
  { level: 'a-level', subject: 'psychology', topic: 'aqa-alevel-psych-schizophrenia', subtopic: 'classification-of-schizophrenia' },
  { level: 'a-level', subject: 'psychology', topic: 'aqa-alevel-psych-schizophrenia', subtopic: 'genetic-explanations-of-schizophrenia' },
  { level: 'a-level', subject: 'psychology', topic: 'aqa-alevel-psych-schizophrenia', subtopic: 'dopamine-hypothesis' },
  { level: 'a-level', subject: 'psychology', topic: 'aqa-alevel-psych-schizophrenia', subtopic: 'typical-antipsychotics' },
  // Forensic Psychology
  { level: 'a-level', subject: 'psychology', topic: 'aqa-alevel-psych-forensic', subtopic: 'offender-profiling-top-down-approach' },
  { level: 'a-level', subject: 'psychology', topic: 'aqa-alevel-psych-forensic', subtopic: 'eysencks-theory-of-the-criminal-personality' },
  { level: 'a-level', subject: 'psychology', topic: 'aqa-alevel-psych-forensic', subtopic: 'custodial-sentencing' },
  // Addiction
  { level: 'a-level', subject: 'psychology', topic: 'aqa-alevel-psych-addiction', subtopic: 'describing-addiction' },
  { level: 'a-level', subject: 'psychology', topic: 'aqa-alevel-psych-addiction', subtopic: 'nicotine-addiction-brain-neurochemistry' },
  { level: 'a-level', subject: 'psychology', topic: 'aqa-alevel-psych-addiction', subtopic: 'gambling-addiction-learning-theory' },

  // ===========================================
  // A-LEVEL FURTHER MATHS (~50 subtopics)
  // ===========================================
  // Proof
  { level: 'a-level', subject: 'further-maths', topic: 'fm-alevel-aqa-proof', subtopic: 'proof-by-mathematical-induction' },
  { level: 'a-level', subject: 'further-maths', topic: 'fm-alevel-aqa-proof', subtopic: 'induction-for-summation-formulae' },
  { level: 'a-level', subject: 'further-maths', topic: 'fm-alevel-aqa-proof', subtopic: 'induction-for-divisibility' },
  { level: 'a-level', subject: 'further-maths', topic: 'fm-alevel-aqa-proof', subtopic: 'induction-for-matrix-powers' },
  // Complex Numbers
  { level: 'a-level', subject: 'further-maths', topic: 'fm-alevel-aqa-complex-numbers', subtopic: 'definition-of-i-i-squared-equals-1' },
  { level: 'a-level', subject: 'further-maths', topic: 'fm-alevel-aqa-complex-numbers', subtopic: 'complex-conjugates' },
  { level: 'a-level', subject: 'further-maths', topic: 'fm-alevel-aqa-complex-numbers', subtopic: 'argand-diagram-representation' },
  { level: 'a-level', subject: 'further-maths', topic: 'fm-alevel-aqa-complex-numbers', subtopic: 'modulus-argument-form-rcos-i-sin' },
  { level: 'a-level', subject: 'further-maths', topic: 'fm-alevel-aqa-complex-numbers', subtopic: 'de-moivres-theorem-cos-i-sin-n' },
  // Matrices
  { level: 'a-level', subject: 'further-maths', topic: 'fm-alevel-aqa-matrices', subtopic: 'matrix-multiplication' },
  { level: 'a-level', subject: 'further-maths', topic: 'fm-alevel-aqa-matrices', subtopic: 'determinant-of-2x2-matrix-ad-bc' },
  { level: 'a-level', subject: 'further-maths', topic: 'fm-alevel-aqa-matrices', subtopic: 'inverse-of-2x2-matrix' },
  { level: 'a-level', subject: 'further-maths', topic: 'fm-alevel-aqa-matrices', subtopic: 'determinant-of-3x3-matrix' },
  { level: 'a-level', subject: 'further-maths', topic: 'fm-alevel-aqa-matrices', subtopic: 'finding-eigenvalues' },
  { level: 'a-level', subject: 'further-maths', topic: 'fm-alevel-aqa-matrices', subtopic: 'finding-eigenvectors' },
  // Further Algebra
  { level: 'a-level', subject: 'further-maths', topic: 'fm-alevel-aqa-further-algebra', subtopic: 'relationship-between-roots-and-coefficients' },
  { level: 'a-level', subject: 'further-maths', topic: 'fm-alevel-aqa-further-algebra', subtopic: 'sum-of-roots-vietas-formulas' },
  { level: 'a-level', subject: 'further-maths', topic: 'fm-alevel-aqa-further-algebra', subtopic: 'summing-series-using-differences' },
  // Further Calculus
  { level: 'a-level', subject: 'further-maths', topic: 'fm-alevel-aqa-further-calculus', subtopic: 'improper-integrals-with-infinite-limits' },
  { level: 'a-level', subject: 'further-maths', topic: 'fm-alevel-aqa-further-calculus', subtopic: 'mean-value-of-a-function' },
  { level: 'a-level', subject: 'further-maths', topic: 'fm-alevel-aqa-further-calculus', subtopic: 'volumes-about-x-axis-review' },
  // Further Vectors
  { level: 'a-level', subject: 'further-maths', topic: 'fm-alevel-aqa-further-vectors', subtopic: 'vector-cross-product-definition' },
  { level: 'a-level', subject: 'further-maths', topic: 'fm-alevel-aqa-further-vectors', subtopic: 'vector-equation-of-a-line' },
  { level: 'a-level', subject: 'further-maths', topic: 'fm-alevel-aqa-further-vectors', subtopic: 'vector-equation-of-a-plane-rn-equals-d' },
  // Polar Coordinates
  { level: 'a-level', subject: 'further-maths', topic: 'fm-alevel-aqa-polar', subtopic: 'polar-coordinate-system-r' },
  { level: 'a-level', subject: 'further-maths', topic: 'fm-alevel-aqa-polar', subtopic: 'converting-to-cartesian-x-equals-r-cos-y-equals-r-sin' },
  { level: 'a-level', subject: 'further-maths', topic: 'fm-alevel-aqa-polar', subtopic: 'sketching-polar-curves' },
  // Hyperbolic Functions
  { level: 'a-level', subject: 'further-maths', topic: 'fm-alevel-aqa-hyperbolic', subtopic: 'sinh-x-equals-ex-e-x2' },
  { level: 'a-level', subject: 'further-maths', topic: 'fm-alevel-aqa-hyperbolic', subtopic: 'cosh-x-equals-ex-e-x2' },
  { level: 'a-level', subject: 'further-maths', topic: 'fm-alevel-aqa-hyperbolic', subtopic: 'graphs-of-hyperbolic-functions' },
  // Differential Equations
  { level: 'a-level', subject: 'further-maths', topic: 'fm-alevel-aqa-diff-equations', subtopic: 'integrating-factor-method' },
  { level: 'a-level', subject: 'further-maths', topic: 'fm-alevel-aqa-diff-equations', subtopic: 'second-order-linear-ay-by-cy-equals-0' },
  { level: 'a-level', subject: 'further-maths', topic: 'fm-alevel-aqa-diff-equations', subtopic: 'auxiliary-equation' },
  // Further Pure (Groups)
  { level: 'a-level', subject: 'further-maths', topic: 'fm-alevel-aqa-further-pure', subtopic: 'definition-of-a-group' },
  { level: 'a-level', subject: 'further-maths', topic: 'fm-alevel-aqa-further-pure', subtopic: 'abelian-groups' },
  { level: 'a-level', subject: 'further-maths', topic: 'fm-alevel-aqa-further-pure', subtopic: 'order-of-a-group' },
  // Further Statistics
  { level: 'a-level', subject: 'further-maths', topic: 'fm-alevel-aqa-further-stats', subtopic: 'poisson-distribution' },
  { level: 'a-level', subject: 'further-maths', topic: 'fm-alevel-aqa-further-stats', subtopic: 'mean-and-variance-of-poisson' },
  { level: 'a-level', subject: 'further-maths', topic: 'fm-alevel-aqa-further-stats', subtopic: 'chi-squared-contingency-tables' },
  { level: 'a-level', subject: 'further-maths', topic: 'fm-alevel-aqa-further-stats', subtopic: 't-distribution' },
  // Further Mechanics
  { level: 'a-level', subject: 'further-maths', topic: 'fm-alevel-aqa-further-mechanics', subtopic: 'momentum-in-two-dimensions' },
  { level: 'a-level', subject: 'further-maths', topic: 'fm-alevel-aqa-further-mechanics', subtopic: 'coefficient-of-restitution' },
  { level: 'a-level', subject: 'further-maths', topic: 'fm-alevel-aqa-further-mechanics', subtopic: 'direct-collisions' },
  { level: 'a-level', subject: 'further-maths', topic: 'fm-alevel-aqa-further-mechanics', subtopic: 'work-done-by-variable-forces' },
  // Discrete/Decision
  { level: 'a-level', subject: 'further-maths', topic: 'fm-alevel-aqa-discrete', subtopic: 'graph-terminology-vertices-edges' },
  { level: 'a-level', subject: 'further-maths', topic: 'fm-alevel-aqa-discrete', subtopic: 'trees-and-spanning-trees' },
  { level: 'a-level', subject: 'further-maths', topic: 'fm-alevel-aqa-discrete', subtopic: 'prims-algorithm' },
  { level: 'a-level', subject: 'further-maths', topic: 'fm-alevel-aqa-discrete', subtopic: 'dijkstras-algorithm' },
];

// ============================================================================
// LEGACY: BOARD-SPECIFIC PAGES (DEPRECATED)
// ============================================================================

/**
 * @deprecated Use INDEXED_BOARDLESS_TOPICS instead
 *
 * Board-specific exam board pages are no longer indexed under Model A.
 * These exist for backwards compatibility only.
 */
export const INDEXED_EXAM_BOARDS: IndexedExamBoard[] = [
  // Intentionally empty - we don't index board-specific pages in Model A
];

/**
 * @deprecated Use INDEXED_BOARDLESS_SUBTOPICS instead
 *
 * Board-specific subtopic pages are no longer indexed under Model A.
 * These exist for backwards compatibility only.
 */
export const INDEXED_SUBTOPICS: IndexedSubtopic[] = [
  // Intentionally empty - we don't index board-specific pages in Model A
];

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Check if a boardless topic page should be indexed.
 * Use this in generateMetadata() for topic pages.
 */
export function shouldIndexBoardlessTopic(
  level: string,
  subject: string,
  topic: string
): boolean {
  return INDEXED_BOARDLESS_TOPICS.some(
    t => t.level === level && t.subject === subject && t.topic === topic
  );
}

/**
 * Check if a boardless subtopic page should be indexed.
 * Use this in generateMetadata() for subtopic pages.
 */
export function shouldIndexBoardlessSubtopic(
  level: string,
  subject: string,
  topic: string,
  subtopic: string
): boolean {
  return INDEXED_BOARDLESS_SUBTOPICS.some(
    s => s.level === level &&
         s.subject === subject &&
         s.topic === topic &&
         s.subtopic === subtopic
  );
}

/**
 * @deprecated Use shouldIndexBoardlessTopic instead
 */
export function shouldIndexExamBoard(
  level: string,
  subject: string,
  examBoard: string
): boolean {
  return INDEXED_EXAM_BOARDS.some(
    eb => eb.level === level && eb.subject === subject && eb.examBoard === examBoard
  );
}

/**
 * Check if a subtopic page should be indexed.
 * Uses the boardless list - if a subtopic has search demand,
 * it should be indexed regardless of which exam board variant.
 */
export function shouldIndexSubtopic(
  level: string,
  subject: string,
  examBoard: string,
  topic: string,
  subtopic: string
): boolean {
  // Check against boardless list (exam board doesn't affect search demand)
  return INDEXED_BOARDLESS_SUBTOPICS.some(
    s => s.level === level &&
         s.subject === subject &&
         s.topic === topic &&
         s.subtopic === subtopic
  );
}

// ============================================================================
// STATS & VALIDATION
// ============================================================================

/**
 * Get current indexing stats for monitoring.
 * Use this to track progress toward Year 1/2 targets.
 */
export function getIndexingStats() {
  return {
    boardlessTopics: INDEXED_BOARDLESS_TOPICS.length,
    boardlessSubtopics: INDEXED_BOARDLESS_SUBTOPICS.length,
    totalIndexed: INDEXED_BOARDLESS_TOPICS.length + INDEXED_BOARDLESS_SUBTOPICS.length,
    year1Target: { topics: 100, subtopics: 600 },
    year2Target: { topics: 200, subtopics: 2000 },
    hardCap: 5000,
  };
}
