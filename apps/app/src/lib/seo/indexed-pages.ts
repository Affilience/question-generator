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
  // GCSE ENGLISH - High demand
  // ===========================================
  { level: 'gcse', subject: 'english-language', topic: 'reading' },
  { level: 'gcse', subject: 'english-language', topic: 'writing' },
  { level: 'gcse', subject: 'english-language', topic: 'techniques' },
  { level: 'gcse', subject: 'english-language', topic: 'grammar' },
  { level: 'gcse', subject: 'english-language', topic: 'spoken-language' },
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
  // GCSE PSYCHOLOGY & RS
  // ===========================================
  { level: 'gcse', subject: 'psychology', topic: 'memory' },
  { level: 'gcse', subject: 'psychology', topic: 'perception' },
  { level: 'gcse', subject: 'psychology', topic: 'development' },
  { level: 'gcse', subject: 'psychology', topic: 'research-methods' },
  { level: 'gcse', subject: 'psychology', topic: 'social' },
  { level: 'gcse', subject: 'psychology', topic: 'language' },
  { level: 'gcse', subject: 'psychology', topic: 'brain' },
  { level: 'gcse', subject: 'psychology', topic: 'psychological-problems' },
  { level: 'gcse', subject: 'religious-studies', topic: 'christianity' },
  { level: 'gcse', subject: 'religious-studies', topic: 'islam' },
  { level: 'gcse', subject: 'religious-studies', topic: 'themes' },

  // ===========================================
  // GCSE LANGUAGES
  // ===========================================
  { level: 'gcse', subject: 'french', topic: 'grammar' },
  { level: 'gcse', subject: 'french', topic: 'vocabulary' },
  { level: 'gcse', subject: 'french', topic: 'skills' },
  { level: 'gcse', subject: 'spanish', topic: 'grammar' },
  { level: 'gcse', subject: 'spanish', topic: 'vocabulary' },
  { level: 'gcse', subject: 'spanish', topic: 'skills' },

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
  { level: 'a-level', subject: 'sociology', topic: 'theory' },
  { level: 'a-level', subject: 'sociology', topic: 'education' },
  { level: 'a-level', subject: 'sociology', topic: 'families' },
  { level: 'a-level', subject: 'sociology', topic: 'research-methods' },
  { level: 'a-level', subject: 'sociology', topic: 'crime' },
  { level: 'a-level', subject: 'sociology', topic: 'media' },
  { level: 'a-level', subject: 'sociology', topic: 'stratification' },
  { level: 'a-level', subject: 'sociology', topic: 'beliefs' },

  // ===========================================
  // A-LEVEL FURTHER MATHS
  // ===========================================
  { level: 'a-level', subject: 'further-maths', topic: 'core-pure' },
  { level: 'a-level', subject: 'further-maths', topic: 'further-pure' },
  { level: 'a-level', subject: 'further-maths', topic: 'further-mechanics' },
  { level: 'a-level', subject: 'further-maths', topic: 'further-statistics' },
  { level: 'a-level', subject: 'further-maths', topic: 'decision' },
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
  // GCSE MATHS - Algebra (~40 subtopics)
  // ===========================================
  { level: 'gcse', subject: 'maths', topic: 'algebra', subtopic: 'simultaneous-equations' },
  { level: 'gcse', subject: 'maths', topic: 'algebra', subtopic: 'quadratic-equations' },
  { level: 'gcse', subject: 'maths', topic: 'algebra', subtopic: 'quadratic-formula' },
  { level: 'gcse', subject: 'maths', topic: 'algebra', subtopic: 'factorising-quadratics' },
  { level: 'gcse', subject: 'maths', topic: 'algebra', subtopic: 'completing-the-square' },
  { level: 'gcse', subject: 'maths', topic: 'algebra', subtopic: 'linear-graphs' },
  { level: 'gcse', subject: 'maths', topic: 'algebra', subtopic: 'inequalities' },
  { level: 'gcse', subject: 'maths', topic: 'algebra', subtopic: 'sequences' },
  { level: 'gcse', subject: 'maths', topic: 'algebra', subtopic: 'nth-term' },
  { level: 'gcse', subject: 'maths', topic: 'algebra', subtopic: 'expanding-brackets' },
  { level: 'gcse', subject: 'maths', topic: 'algebra', subtopic: 'algebraic-fractions' },
  { level: 'gcse', subject: 'maths', topic: 'algebra', subtopic: 'rearranging-formulae' },
  { level: 'gcse', subject: 'maths', topic: 'algebra', subtopic: 'substitution' },
  { level: 'gcse', subject: 'maths', topic: 'algebra', subtopic: 'simplifying-expressions' },
  { level: 'gcse', subject: 'maths', topic: 'algebra', subtopic: 'solving-equations' },
  { level: 'gcse', subject: 'maths', topic: 'algebra', subtopic: 'linear-equations' },
  { level: 'gcse', subject: 'maths', topic: 'algebra', subtopic: 'quadratic-graphs' },
  { level: 'gcse', subject: 'maths', topic: 'algebra', subtopic: 'cubic-graphs' },
  { level: 'gcse', subject: 'maths', topic: 'algebra', subtopic: 'gradient' },
  { level: 'gcse', subject: 'maths', topic: 'algebra', subtopic: 'y-intercept' },
  { level: 'gcse', subject: 'maths', topic: 'algebra', subtopic: 'parallel-perpendicular-lines' },
  { level: 'gcse', subject: 'maths', topic: 'algebra', subtopic: 'functions' },
  { level: 'gcse', subject: 'maths', topic: 'algebra', subtopic: 'composite-functions' },
  { level: 'gcse', subject: 'maths', topic: 'algebra', subtopic: 'inverse-functions' },
  { level: 'gcse', subject: 'maths', topic: 'algebra', subtopic: 'iteration' },
  { level: 'gcse', subject: 'maths', topic: 'algebra', subtopic: 'proof' },
  { level: 'gcse', subject: 'maths', topic: 'algebra', subtopic: 'algebraic-proof' },
  { level: 'gcse', subject: 'maths', topic: 'algebra', subtopic: 'graph-transformations' },
  { level: 'gcse', subject: 'maths', topic: 'algebra', subtopic: 'distance-time-graphs' },
  { level: 'gcse', subject: 'maths', topic: 'algebra', subtopic: 'velocity-time-graphs' },
  { level: 'gcse', subject: 'maths', topic: 'algebra', subtopic: 'real-life-graphs' },
  { level: 'gcse', subject: 'maths', topic: 'algebra', subtopic: 'quadratic-sequences' },
  { level: 'gcse', subject: 'maths', topic: 'algebra', subtopic: 'geometric-sequences' },
  { level: 'gcse', subject: 'maths', topic: 'algebra', subtopic: 'arithmetic-sequences' },

  // ===========================================
  // GCSE MATHS - Geometry (~50 subtopics)
  // ===========================================
  { level: 'gcse', subject: 'maths', topic: 'geometry', subtopic: 'pythagoras-theorem' },
  { level: 'gcse', subject: 'maths', topic: 'geometry', subtopic: 'trigonometry' },
  { level: 'gcse', subject: 'maths', topic: 'geometry', subtopic: 'sohcahtoa' },
  { level: 'gcse', subject: 'maths', topic: 'geometry', subtopic: 'sine-rule' },
  { level: 'gcse', subject: 'maths', topic: 'geometry', subtopic: 'cosine-rule' },
  { level: 'gcse', subject: 'maths', topic: 'geometry', subtopic: 'circle-theorems' },
  { level: 'gcse', subject: 'maths', topic: 'geometry', subtopic: 'angles-in-polygons' },
  { level: 'gcse', subject: 'maths', topic: 'geometry', subtopic: 'transformations' },
  { level: 'gcse', subject: 'maths', topic: 'geometry', subtopic: 'vectors' },
  { level: 'gcse', subject: 'maths', topic: 'geometry', subtopic: 'similar-shapes' },
  { level: 'gcse', subject: 'maths', topic: 'geometry', subtopic: 'congruent-triangles' },
  { level: 'gcse', subject: 'maths', topic: 'geometry', subtopic: 'area-and-perimeter' },
  { level: 'gcse', subject: 'maths', topic: 'geometry', subtopic: 'volume' },
  { level: 'gcse', subject: 'maths', topic: 'geometry', subtopic: 'surface-area' },
  { level: 'gcse', subject: 'maths', topic: 'geometry', subtopic: 'bearings' },
  { level: 'gcse', subject: 'maths', topic: 'geometry', subtopic: 'angles-in-triangles' },
  { level: 'gcse', subject: 'maths', topic: 'geometry', subtopic: 'angles-on-parallel-lines' },
  { level: 'gcse', subject: 'maths', topic: 'geometry', subtopic: 'interior-exterior-angles' },
  { level: 'gcse', subject: 'maths', topic: 'geometry', subtopic: 'circle-area' },
  { level: 'gcse', subject: 'maths', topic: 'geometry', subtopic: 'circumference' },
  { level: 'gcse', subject: 'maths', topic: 'geometry', subtopic: 'arc-length' },
  { level: 'gcse', subject: 'maths', topic: 'geometry', subtopic: 'sector-area' },
  { level: 'gcse', subject: 'maths', topic: 'geometry', subtopic: 'volume-of-prisms' },
  { level: 'gcse', subject: 'maths', topic: 'geometry', subtopic: 'volume-of-cylinders' },
  { level: 'gcse', subject: 'maths', topic: 'geometry', subtopic: 'volume-of-cones' },
  { level: 'gcse', subject: 'maths', topic: 'geometry', subtopic: 'volume-of-spheres' },
  { level: 'gcse', subject: 'maths', topic: 'geometry', subtopic: 'volume-of-pyramids' },
  { level: 'gcse', subject: 'maths', topic: 'geometry', subtopic: 'enlargements' },
  { level: 'gcse', subject: 'maths', topic: 'geometry', subtopic: 'rotations' },
  { level: 'gcse', subject: 'maths', topic: 'geometry', subtopic: 'reflections' },
  { level: 'gcse', subject: 'maths', topic: 'geometry', subtopic: 'translations' },
  { level: 'gcse', subject: 'maths', topic: 'geometry', subtopic: 'constructions' },
  { level: 'gcse', subject: 'maths', topic: 'geometry', subtopic: 'loci' },
  { level: 'gcse', subject: 'maths', topic: 'geometry', subtopic: 'plans-and-elevations' },
  { level: 'gcse', subject: 'maths', topic: 'geometry', subtopic: 'scale-drawings' },
  { level: 'gcse', subject: 'maths', topic: 'geometry', subtopic: 'pythagoras-3d' },
  { level: 'gcse', subject: 'maths', topic: 'geometry', subtopic: 'trigonometry-3d' },
  { level: 'gcse', subject: 'maths', topic: 'geometry', subtopic: 'exact-trig-values' },
  { level: 'gcse', subject: 'maths', topic: 'geometry', subtopic: 'area-of-triangle-sine' },

  // ===========================================
  // GCSE MATHS - Number (~35 subtopics)
  // ===========================================
  { level: 'gcse', subject: 'maths', topic: 'number', subtopic: 'fractions' },
  { level: 'gcse', subject: 'maths', topic: 'number', subtopic: 'percentages' },
  { level: 'gcse', subject: 'maths', topic: 'number', subtopic: 'standard-form' },
  { level: 'gcse', subject: 'maths', topic: 'number', subtopic: 'surds' },
  { level: 'gcse', subject: 'maths', topic: 'number', subtopic: 'indices' },
  { level: 'gcse', subject: 'maths', topic: 'number', subtopic: 'hcf-and-lcm' },
  { level: 'gcse', subject: 'maths', topic: 'number', subtopic: 'prime-factorisation' },
  { level: 'gcse', subject: 'maths', topic: 'number', subtopic: 'bounds' },
  { level: 'gcse', subject: 'maths', topic: 'number', subtopic: 'recurring-decimals' },
  { level: 'gcse', subject: 'maths', topic: 'number', subtopic: 'compound-interest' },
  { level: 'gcse', subject: 'maths', topic: 'number', subtopic: 'negative-numbers' },
  { level: 'gcse', subject: 'maths', topic: 'number', subtopic: 'order-of-operations' },
  { level: 'gcse', subject: 'maths', topic: 'number', subtopic: 'bidmas' },
  { level: 'gcse', subject: 'maths', topic: 'number', subtopic: 'prime-numbers' },
  { level: 'gcse', subject: 'maths', topic: 'number', subtopic: 'factors-and-multiples' },
  { level: 'gcse', subject: 'maths', topic: 'number', subtopic: 'powers-and-roots' },
  { level: 'gcse', subject: 'maths', topic: 'number', subtopic: 'laws-of-indices' },
  { level: 'gcse', subject: 'maths', topic: 'number', subtopic: 'negative-indices' },
  { level: 'gcse', subject: 'maths', topic: 'number', subtopic: 'fractional-indices' },
  { level: 'gcse', subject: 'maths', topic: 'number', subtopic: 'estimation' },
  { level: 'gcse', subject: 'maths', topic: 'number', subtopic: 'rounding' },
  { level: 'gcse', subject: 'maths', topic: 'number', subtopic: 'significant-figures' },
  { level: 'gcse', subject: 'maths', topic: 'number', subtopic: 'decimal-places' },
  { level: 'gcse', subject: 'maths', topic: 'number', subtopic: 'upper-lower-bounds' },
  { level: 'gcse', subject: 'maths', topic: 'number', subtopic: 'error-intervals' },
  { level: 'gcse', subject: 'maths', topic: 'number', subtopic: 'percentage-change' },
  { level: 'gcse', subject: 'maths', topic: 'number', subtopic: 'reverse-percentages' },
  { level: 'gcse', subject: 'maths', topic: 'number', subtopic: 'simple-interest' },
  { level: 'gcse', subject: 'maths', topic: 'number', subtopic: 'depreciation' },
  { level: 'gcse', subject: 'maths', topic: 'number', subtopic: 'rationalising-denominators' },

  // ===========================================
  // GCSE MATHS - Ratio & Proportion (~20 subtopics)
  // ===========================================
  { level: 'gcse', subject: 'maths', topic: 'ratio', subtopic: 'ratio' },
  { level: 'gcse', subject: 'maths', topic: 'ratio', subtopic: 'direct-proportion' },
  { level: 'gcse', subject: 'maths', topic: 'ratio', subtopic: 'inverse-proportion' },
  { level: 'gcse', subject: 'maths', topic: 'ratio', subtopic: 'speed-distance-time' },
  { level: 'gcse', subject: 'maths', topic: 'ratio', subtopic: 'density' },
  { level: 'gcse', subject: 'maths', topic: 'ratio', subtopic: 'pressure' },
  { level: 'gcse', subject: 'maths', topic: 'ratio', subtopic: 'proportion-graphs' },
  { level: 'gcse', subject: 'maths', topic: 'ratio', subtopic: 'best-buy' },
  { level: 'gcse', subject: 'maths', topic: 'ratio', subtopic: 'exchange-rates' },
  { level: 'gcse', subject: 'maths', topic: 'ratio', subtopic: 'unit-conversions' },
  { level: 'gcse', subject: 'maths', topic: 'ratio', subtopic: 'scale-factors' },
  { level: 'gcse', subject: 'maths', topic: 'ratio', subtopic: 'similar-shapes-ratio' },
  { level: 'gcse', subject: 'maths', topic: 'ratio', subtopic: 'compound-measures' },
  { level: 'gcse', subject: 'maths', topic: 'ratio', subtopic: 'growth-and-decay' },

  // ===========================================
  // GCSE MATHS - Statistics (~25 subtopics)
  // ===========================================
  { level: 'gcse', subject: 'maths', topic: 'statistics', subtopic: 'mean-median-mode' },
  { level: 'gcse', subject: 'maths', topic: 'statistics', subtopic: 'histograms' },
  { level: 'gcse', subject: 'maths', topic: 'statistics', subtopic: 'cumulative-frequency' },
  { level: 'gcse', subject: 'maths', topic: 'statistics', subtopic: 'box-plots' },
  { level: 'gcse', subject: 'maths', topic: 'statistics', subtopic: 'mean' },
  { level: 'gcse', subject: 'maths', topic: 'statistics', subtopic: 'median' },
  { level: 'gcse', subject: 'maths', topic: 'statistics', subtopic: 'mode' },
  { level: 'gcse', subject: 'maths', topic: 'statistics', subtopic: 'range' },
  { level: 'gcse', subject: 'maths', topic: 'statistics', subtopic: 'interquartile-range' },
  { level: 'gcse', subject: 'maths', topic: 'statistics', subtopic: 'quartiles' },
  { level: 'gcse', subject: 'maths', topic: 'statistics', subtopic: 'frequency-tables' },
  { level: 'gcse', subject: 'maths', topic: 'statistics', subtopic: 'grouped-data' },
  { level: 'gcse', subject: 'maths', topic: 'statistics', subtopic: 'pie-charts' },
  { level: 'gcse', subject: 'maths', topic: 'statistics', subtopic: 'bar-charts' },
  { level: 'gcse', subject: 'maths', topic: 'statistics', subtopic: 'scatter-graphs' },
  { level: 'gcse', subject: 'maths', topic: 'statistics', subtopic: 'correlation' },
  { level: 'gcse', subject: 'maths', topic: 'statistics', subtopic: 'line-of-best-fit' },
  { level: 'gcse', subject: 'maths', topic: 'statistics', subtopic: 'frequency-polygons' },
  { level: 'gcse', subject: 'maths', topic: 'statistics', subtopic: 'stem-and-leaf' },
  { level: 'gcse', subject: 'maths', topic: 'statistics', subtopic: 'sampling' },
  { level: 'gcse', subject: 'maths', topic: 'statistics', subtopic: 'stratified-sampling' },
  { level: 'gcse', subject: 'maths', topic: 'statistics', subtopic: 'comparing-distributions' },

  // ===========================================
  // GCSE MATHS - Probability (~15 subtopics)
  // ===========================================
  { level: 'gcse', subject: 'maths', topic: 'probability', subtopic: 'probability' },
  { level: 'gcse', subject: 'maths', topic: 'probability', subtopic: 'tree-diagrams' },
  { level: 'gcse', subject: 'maths', topic: 'probability', subtopic: 'venn-diagrams' },
  { level: 'gcse', subject: 'maths', topic: 'probability', subtopic: 'sample-space' },
  { level: 'gcse', subject: 'maths', topic: 'probability', subtopic: 'relative-frequency' },
  { level: 'gcse', subject: 'maths', topic: 'probability', subtopic: 'expected-frequency' },
  { level: 'gcse', subject: 'maths', topic: 'probability', subtopic: 'independent-events' },
  { level: 'gcse', subject: 'maths', topic: 'probability', subtopic: 'dependent-events' },
  { level: 'gcse', subject: 'maths', topic: 'probability', subtopic: 'conditional-probability' },
  { level: 'gcse', subject: 'maths', topic: 'probability', subtopic: 'mutually-exclusive' },
  { level: 'gcse', subject: 'maths', topic: 'probability', subtopic: 'and-or-rules' },
  { level: 'gcse', subject: 'maths', topic: 'probability', subtopic: 'combined-events' },
  { level: 'gcse', subject: 'maths', topic: 'probability', subtopic: 'probability-from-tables' },

  // ===========================================
  // GCSE PHYSICS (~80 subtopics)
  // ===========================================
  // Forces
  { level: 'gcse', subject: 'physics', topic: 'forces', subtopic: 'newtons-laws' },
  { level: 'gcse', subject: 'physics', topic: 'forces', subtopic: 'momentum' },
  { level: 'gcse', subject: 'physics', topic: 'forces', subtopic: 'hookes-law' },
  { level: 'gcse', subject: 'physics', topic: 'forces', subtopic: 'weight-and-mass' },
  { level: 'gcse', subject: 'physics', topic: 'forces', subtopic: 'friction' },
  { level: 'gcse', subject: 'physics', topic: 'forces', subtopic: 'air-resistance' },
  { level: 'gcse', subject: 'physics', topic: 'forces', subtopic: 'terminal-velocity' },
  { level: 'gcse', subject: 'physics', topic: 'forces', subtopic: 'resultant-forces' },
  { level: 'gcse', subject: 'physics', topic: 'forces', subtopic: 'balanced-unbalanced-forces' },
  { level: 'gcse', subject: 'physics', topic: 'forces', subtopic: 'moments' },
  { level: 'gcse', subject: 'physics', topic: 'forces', subtopic: 'levers-gears' },
  { level: 'gcse', subject: 'physics', topic: 'forces', subtopic: 'pressure-in-fluids' },
  { level: 'gcse', subject: 'physics', topic: 'forces', subtopic: 'acceleration' },
  { level: 'gcse', subject: 'physics', topic: 'forces', subtopic: 'stopping-distance' },
  { level: 'gcse', subject: 'physics', topic: 'forces', subtopic: 'reaction-time' },
  { level: 'gcse', subject: 'physics', topic: 'forces', subtopic: 'conservation-of-momentum' },
  // Energy
  { level: 'gcse', subject: 'physics', topic: 'energy', subtopic: 'energy-transfers' },
  { level: 'gcse', subject: 'physics', topic: 'energy', subtopic: 'specific-heat-capacity' },
  { level: 'gcse', subject: 'physics', topic: 'energy', subtopic: 'power-and-efficiency' },
  { level: 'gcse', subject: 'physics', topic: 'energy', subtopic: 'kinetic-energy' },
  { level: 'gcse', subject: 'physics', topic: 'energy', subtopic: 'gravitational-potential-energy' },
  { level: 'gcse', subject: 'physics', topic: 'energy', subtopic: 'elastic-potential-energy' },
  { level: 'gcse', subject: 'physics', topic: 'energy', subtopic: 'work-done' },
  { level: 'gcse', subject: 'physics', topic: 'energy', subtopic: 'conservation-of-energy' },
  { level: 'gcse', subject: 'physics', topic: 'energy', subtopic: 'sankey-diagrams' },
  { level: 'gcse', subject: 'physics', topic: 'energy', subtopic: 'energy-resources' },
  { level: 'gcse', subject: 'physics', topic: 'energy', subtopic: 'renewable-energy' },
  { level: 'gcse', subject: 'physics', topic: 'energy', subtopic: 'fossil-fuels' },
  { level: 'gcse', subject: 'physics', topic: 'energy', subtopic: 'nuclear-power' },
  { level: 'gcse', subject: 'physics', topic: 'energy', subtopic: 'insulation' },
  // Waves
  { level: 'gcse', subject: 'physics', topic: 'waves', subtopic: 'wave-equation' },
  { level: 'gcse', subject: 'physics', topic: 'waves', subtopic: 'electromagnetic-spectrum' },
  { level: 'gcse', subject: 'physics', topic: 'waves', subtopic: 'reflection-refraction' },
  { level: 'gcse', subject: 'physics', topic: 'waves', subtopic: 'transverse-longitudinal' },
  { level: 'gcse', subject: 'physics', topic: 'waves', subtopic: 'frequency-wavelength' },
  { level: 'gcse', subject: 'physics', topic: 'waves', subtopic: 'sound-waves' },
  { level: 'gcse', subject: 'physics', topic: 'waves', subtopic: 'ultrasound' },
  { level: 'gcse', subject: 'physics', topic: 'waves', subtopic: 'seismic-waves' },
  { level: 'gcse', subject: 'physics', topic: 'waves', subtopic: 'uses-of-em-waves' },
  { level: 'gcse', subject: 'physics', topic: 'waves', subtopic: 'dangers-of-em-waves' },
  { level: 'gcse', subject: 'physics', topic: 'waves', subtopic: 'lenses' },
  { level: 'gcse', subject: 'physics', topic: 'waves', subtopic: 'ray-diagrams' },
  { level: 'gcse', subject: 'physics', topic: 'waves', subtopic: 'colour' },
  // Electricity
  { level: 'gcse', subject: 'physics', topic: 'electricity', subtopic: 'ohms-law' },
  { level: 'gcse', subject: 'physics', topic: 'electricity', subtopic: 'series-parallel-circuits' },
  { level: 'gcse', subject: 'physics', topic: 'electricity', subtopic: 'power-and-energy' },
  { level: 'gcse', subject: 'physics', topic: 'electricity', subtopic: 'current' },
  { level: 'gcse', subject: 'physics', topic: 'electricity', subtopic: 'voltage' },
  { level: 'gcse', subject: 'physics', topic: 'electricity', subtopic: 'resistance' },
  { level: 'gcse', subject: 'physics', topic: 'electricity', subtopic: 'circuit-symbols' },
  { level: 'gcse', subject: 'physics', topic: 'electricity', subtopic: 'resistors' },
  { level: 'gcse', subject: 'physics', topic: 'electricity', subtopic: 'ldr-thermistor' },
  { level: 'gcse', subject: 'physics', topic: 'electricity', subtopic: 'diodes-led' },
  { level: 'gcse', subject: 'physics', topic: 'electricity', subtopic: 'mains-electricity' },
  { level: 'gcse', subject: 'physics', topic: 'electricity', subtopic: 'national-grid' },
  { level: 'gcse', subject: 'physics', topic: 'electricity', subtopic: 'transformers' },
  { level: 'gcse', subject: 'physics', topic: 'electricity', subtopic: 'static-electricity' },
  // Magnetism
  { level: 'gcse', subject: 'physics', topic: 'magnetism', subtopic: 'electromagnets' },
  { level: 'gcse', subject: 'physics', topic: 'magnetism', subtopic: 'motor-effect' },
  { level: 'gcse', subject: 'physics', topic: 'magnetism', subtopic: 'magnetic-fields' },
  { level: 'gcse', subject: 'physics', topic: 'magnetism', subtopic: 'flemings-left-hand-rule' },
  { level: 'gcse', subject: 'physics', topic: 'magnetism', subtopic: 'electric-motors' },
  { level: 'gcse', subject: 'physics', topic: 'magnetism', subtopic: 'generators' },
  { level: 'gcse', subject: 'physics', topic: 'magnetism', subtopic: 'electromagnetic-induction' },
  { level: 'gcse', subject: 'physics', topic: 'magnetism', subtopic: 'loudspeakers' },
  { level: 'gcse', subject: 'physics', topic: 'magnetism', subtopic: 'microphones' },
  // Atomic structure
  { level: 'gcse', subject: 'physics', topic: 'atomic-structure', subtopic: 'radioactive-decay' },
  { level: 'gcse', subject: 'physics', topic: 'atomic-structure', subtopic: 'half-life' },
  { level: 'gcse', subject: 'physics', topic: 'atomic-structure', subtopic: 'nuclear-fission-fusion' },
  { level: 'gcse', subject: 'physics', topic: 'atomic-structure', subtopic: 'alpha-beta-gamma' },
  { level: 'gcse', subject: 'physics', topic: 'atomic-structure', subtopic: 'atomic-model' },
  { level: 'gcse', subject: 'physics', topic: 'atomic-structure', subtopic: 'isotopes' },
  { level: 'gcse', subject: 'physics', topic: 'atomic-structure', subtopic: 'nuclear-equations' },
  { level: 'gcse', subject: 'physics', topic: 'atomic-structure', subtopic: 'uses-of-radiation' },
  { level: 'gcse', subject: 'physics', topic: 'atomic-structure', subtopic: 'hazards-of-radiation' },
  { level: 'gcse', subject: 'physics', topic: 'atomic-structure', subtopic: 'background-radiation' },
  // Particle model
  { level: 'gcse', subject: 'physics', topic: 'particle-model', subtopic: 'density' },
  { level: 'gcse', subject: 'physics', topic: 'particle-model', subtopic: 'states-of-matter' },
  { level: 'gcse', subject: 'physics', topic: 'particle-model', subtopic: 'changes-of-state' },
  { level: 'gcse', subject: 'physics', topic: 'particle-model', subtopic: 'specific-latent-heat' },
  { level: 'gcse', subject: 'physics', topic: 'particle-model', subtopic: 'gas-pressure' },
  { level: 'gcse', subject: 'physics', topic: 'particle-model', subtopic: 'internal-energy' },
  // Space
  { level: 'gcse', subject: 'physics', topic: 'space', subtopic: 'solar-system' },
  { level: 'gcse', subject: 'physics', topic: 'space', subtopic: 'life-cycle-of-stars' },
  { level: 'gcse', subject: 'physics', topic: 'space', subtopic: 'red-shift' },
  { level: 'gcse', subject: 'physics', topic: 'space', subtopic: 'big-bang' },
  { level: 'gcse', subject: 'physics', topic: 'space', subtopic: 'orbits' },

  // ===========================================
  // GCSE CHEMISTRY (~80 subtopics)
  // ===========================================
  // Atomic structure
  { level: 'gcse', subject: 'chemistry', topic: 'atomic-structure', subtopic: 'atoms-elements-compounds' },
  { level: 'gcse', subject: 'chemistry', topic: 'atomic-structure', subtopic: 'electron-configuration' },
  { level: 'gcse', subject: 'chemistry', topic: 'atomic-structure', subtopic: 'atomic-structure' },
  { level: 'gcse', subject: 'chemistry', topic: 'atomic-structure', subtopic: 'isotopes' },
  { level: 'gcse', subject: 'chemistry', topic: 'atomic-structure', subtopic: 'periodic-table' },
  { level: 'gcse', subject: 'chemistry', topic: 'atomic-structure', subtopic: 'group-1' },
  { level: 'gcse', subject: 'chemistry', topic: 'atomic-structure', subtopic: 'group-7' },
  { level: 'gcse', subject: 'chemistry', topic: 'atomic-structure', subtopic: 'group-0' },
  { level: 'gcse', subject: 'chemistry', topic: 'atomic-structure', subtopic: 'transition-metals' },
  { level: 'gcse', subject: 'chemistry', topic: 'atomic-structure', subtopic: 'development-of-atomic-model' },
  // Bonding
  { level: 'gcse', subject: 'chemistry', topic: 'bonding', subtopic: 'ionic-bonding' },
  { level: 'gcse', subject: 'chemistry', topic: 'bonding', subtopic: 'covalent-bonding' },
  { level: 'gcse', subject: 'chemistry', topic: 'bonding', subtopic: 'metallic-bonding' },
  { level: 'gcse', subject: 'chemistry', topic: 'bonding', subtopic: 'ionic-compounds' },
  { level: 'gcse', subject: 'chemistry', topic: 'bonding', subtopic: 'simple-molecular' },
  { level: 'gcse', subject: 'chemistry', topic: 'bonding', subtopic: 'giant-covalent' },
  { level: 'gcse', subject: 'chemistry', topic: 'bonding', subtopic: 'diamond-graphite' },
  { level: 'gcse', subject: 'chemistry', topic: 'bonding', subtopic: 'graphene-fullerenes' },
  { level: 'gcse', subject: 'chemistry', topic: 'bonding', subtopic: 'properties-of-metals' },
  { level: 'gcse', subject: 'chemistry', topic: 'bonding', subtopic: 'alloys' },
  { level: 'gcse', subject: 'chemistry', topic: 'bonding', subtopic: 'nanoparticles' },
  // Quantitative chemistry
  { level: 'gcse', subject: 'chemistry', topic: 'quantitative-chemistry', subtopic: 'moles' },
  { level: 'gcse', subject: 'chemistry', topic: 'quantitative-chemistry', subtopic: 'balancing-equations' },
  { level: 'gcse', subject: 'chemistry', topic: 'quantitative-chemistry', subtopic: 'concentration' },
  { level: 'gcse', subject: 'chemistry', topic: 'quantitative-chemistry', subtopic: 'relative-formula-mass' },
  { level: 'gcse', subject: 'chemistry', topic: 'quantitative-chemistry', subtopic: 'percentage-mass' },
  { level: 'gcse', subject: 'chemistry', topic: 'quantitative-chemistry', subtopic: 'empirical-formula' },
  { level: 'gcse', subject: 'chemistry', topic: 'quantitative-chemistry', subtopic: 'limiting-reactant' },
  { level: 'gcse', subject: 'chemistry', topic: 'quantitative-chemistry', subtopic: 'molar-volume' },
  { level: 'gcse', subject: 'chemistry', topic: 'quantitative-chemistry', subtopic: 'titrations' },
  { level: 'gcse', subject: 'chemistry', topic: 'quantitative-chemistry', subtopic: 'atom-economy' },
  { level: 'gcse', subject: 'chemistry', topic: 'quantitative-chemistry', subtopic: 'percentage-yield' },
  // Chemical changes
  { level: 'gcse', subject: 'chemistry', topic: 'chemical-changes', subtopic: 'acids-and-alkalis' },
  { level: 'gcse', subject: 'chemistry', topic: 'chemical-changes', subtopic: 'electrolysis' },
  { level: 'gcse', subject: 'chemistry', topic: 'chemical-changes', subtopic: 'reactivity-series' },
  { level: 'gcse', subject: 'chemistry', topic: 'chemical-changes', subtopic: 'oxidation-reduction' },
  { level: 'gcse', subject: 'chemistry', topic: 'chemical-changes', subtopic: 'neutralisation' },
  { level: 'gcse', subject: 'chemistry', topic: 'chemical-changes', subtopic: 'making-salts' },
  { level: 'gcse', subject: 'chemistry', topic: 'chemical-changes', subtopic: 'ph-scale' },
  { level: 'gcse', subject: 'chemistry', topic: 'chemical-changes', subtopic: 'strong-weak-acids' },
  { level: 'gcse', subject: 'chemistry', topic: 'chemical-changes', subtopic: 'extraction-of-metals' },
  { level: 'gcse', subject: 'chemistry', topic: 'chemical-changes', subtopic: 'electrolysis-of-solutions' },
  // Energy changes
  { level: 'gcse', subject: 'chemistry', topic: 'energy-changes', subtopic: 'exothermic-endothermic' },
  { level: 'gcse', subject: 'chemistry', topic: 'energy-changes', subtopic: 'reaction-profiles' },
  { level: 'gcse', subject: 'chemistry', topic: 'energy-changes', subtopic: 'bond-energies' },
  { level: 'gcse', subject: 'chemistry', topic: 'energy-changes', subtopic: 'cells-batteries' },
  { level: 'gcse', subject: 'chemistry', topic: 'energy-changes', subtopic: 'fuel-cells' },
  // Rates of reaction
  { level: 'gcse', subject: 'chemistry', topic: 'rates-of-reaction', subtopic: 'rate-of-reaction' },
  { level: 'gcse', subject: 'chemistry', topic: 'rates-of-reaction', subtopic: 'collision-theory' },
  { level: 'gcse', subject: 'chemistry', topic: 'rates-of-reaction', subtopic: 'factors-affecting-rate' },
  { level: 'gcse', subject: 'chemistry', topic: 'rates-of-reaction', subtopic: 'catalysts' },
  { level: 'gcse', subject: 'chemistry', topic: 'rates-of-reaction', subtopic: 'reversible-reactions' },
  { level: 'gcse', subject: 'chemistry', topic: 'rates-of-reaction', subtopic: 'equilibrium' },
  { level: 'gcse', subject: 'chemistry', topic: 'rates-of-reaction', subtopic: 'le-chatelier' },
  // Organic chemistry
  { level: 'gcse', subject: 'chemistry', topic: 'organic-chemistry', subtopic: 'alkanes-alkenes' },
  { level: 'gcse', subject: 'chemistry', topic: 'organic-chemistry', subtopic: 'polymers' },
  { level: 'gcse', subject: 'chemistry', topic: 'organic-chemistry', subtopic: 'crude-oil' },
  { level: 'gcse', subject: 'chemistry', topic: 'organic-chemistry', subtopic: 'fractional-distillation' },
  { level: 'gcse', subject: 'chemistry', topic: 'organic-chemistry', subtopic: 'cracking' },
  { level: 'gcse', subject: 'chemistry', topic: 'organic-chemistry', subtopic: 'combustion' },
  { level: 'gcse', subject: 'chemistry', topic: 'organic-chemistry', subtopic: 'alcohols' },
  { level: 'gcse', subject: 'chemistry', topic: 'organic-chemistry', subtopic: 'carboxylic-acids' },
  { level: 'gcse', subject: 'chemistry', topic: 'organic-chemistry', subtopic: 'esters' },
  // Atmosphere
  { level: 'gcse', subject: 'chemistry', topic: 'atmosphere', subtopic: 'earths-atmosphere' },
  { level: 'gcse', subject: 'chemistry', topic: 'atmosphere', subtopic: 'greenhouse-effect' },
  { level: 'gcse', subject: 'chemistry', topic: 'atmosphere', subtopic: 'climate-change' },
  { level: 'gcse', subject: 'chemistry', topic: 'atmosphere', subtopic: 'carbon-footprint' },
  { level: 'gcse', subject: 'chemistry', topic: 'atmosphere', subtopic: 'pollutants' },
  // Using resources
  { level: 'gcse', subject: 'chemistry', topic: 'using-resources', subtopic: 'water-treatment' },
  { level: 'gcse', subject: 'chemistry', topic: 'using-resources', subtopic: 'life-cycle-assessment' },
  { level: 'gcse', subject: 'chemistry', topic: 'using-resources', subtopic: 'recycling' },
  { level: 'gcse', subject: 'chemistry', topic: 'using-resources', subtopic: 'rusting' },
  { level: 'gcse', subject: 'chemistry', topic: 'using-resources', subtopic: 'ceramics-polymers-composites' },
  { level: 'gcse', subject: 'chemistry', topic: 'using-resources', subtopic: 'haber-process' },
  { level: 'gcse', subject: 'chemistry', topic: 'using-resources', subtopic: 'npk-fertilisers' },

  // ===========================================
  // GCSE BIOLOGY (~80 subtopics)
  // ===========================================
  // Cell biology
  { level: 'gcse', subject: 'biology', topic: 'cell-biology', subtopic: 'cell-structure' },
  { level: 'gcse', subject: 'biology', topic: 'cell-biology', subtopic: 'mitosis' },
  { level: 'gcse', subject: 'biology', topic: 'cell-biology', subtopic: 'diffusion-osmosis' },
  { level: 'gcse', subject: 'biology', topic: 'cell-biology', subtopic: 'active-transport' },
  { level: 'gcse', subject: 'biology', topic: 'cell-biology', subtopic: 'animal-plant-cells' },
  { level: 'gcse', subject: 'biology', topic: 'cell-biology', subtopic: 'specialised-cells' },
  { level: 'gcse', subject: 'biology', topic: 'cell-biology', subtopic: 'cell-division' },
  { level: 'gcse', subject: 'biology', topic: 'cell-biology', subtopic: 'stem-cells' },
  { level: 'gcse', subject: 'biology', topic: 'cell-biology', subtopic: 'microscopy' },
  { level: 'gcse', subject: 'biology', topic: 'cell-biology', subtopic: 'meiosis' },
  // Organisation
  { level: 'gcse', subject: 'biology', topic: 'organisation', subtopic: 'enzymes' },
  { level: 'gcse', subject: 'biology', topic: 'organisation', subtopic: 'digestive-system' },
  { level: 'gcse', subject: 'biology', topic: 'organisation', subtopic: 'heart-and-blood' },
  { level: 'gcse', subject: 'biology', topic: 'organisation', subtopic: 'plant-tissues' },
  { level: 'gcse', subject: 'biology', topic: 'organisation', subtopic: 'circulatory-system' },
  { level: 'gcse', subject: 'biology', topic: 'organisation', subtopic: 'respiratory-system' },
  { level: 'gcse', subject: 'biology', topic: 'organisation', subtopic: 'blood-vessels' },
  { level: 'gcse', subject: 'biology', topic: 'organisation', subtopic: 'blood' },
  { level: 'gcse', subject: 'biology', topic: 'organisation', subtopic: 'coronary-heart-disease' },
  { level: 'gcse', subject: 'biology', topic: 'organisation', subtopic: 'transpiration' },
  { level: 'gcse', subject: 'biology', topic: 'organisation', subtopic: 'translocation' },
  // Infection and response
  { level: 'gcse', subject: 'biology', topic: 'infection-and-response', subtopic: 'pathogens' },
  { level: 'gcse', subject: 'biology', topic: 'infection-and-response', subtopic: 'viral-diseases' },
  { level: 'gcse', subject: 'biology', topic: 'infection-and-response', subtopic: 'bacterial-diseases' },
  { level: 'gcse', subject: 'biology', topic: 'infection-and-response', subtopic: 'fungal-diseases' },
  { level: 'gcse', subject: 'biology', topic: 'infection-and-response', subtopic: 'protist-diseases' },
  { level: 'gcse', subject: 'biology', topic: 'infection-and-response', subtopic: 'immune-system' },
  { level: 'gcse', subject: 'biology', topic: 'infection-and-response', subtopic: 'vaccination' },
  { level: 'gcse', subject: 'biology', topic: 'infection-and-response', subtopic: 'antibiotics' },
  { level: 'gcse', subject: 'biology', topic: 'infection-and-response', subtopic: 'drug-development' },
  { level: 'gcse', subject: 'biology', topic: 'infection-and-response', subtopic: 'monoclonal-antibodies' },
  { level: 'gcse', subject: 'biology', topic: 'infection-and-response', subtopic: 'plant-diseases' },
  // Bioenergetics
  { level: 'gcse', subject: 'biology', topic: 'bioenergetics', subtopic: 'photosynthesis' },
  { level: 'gcse', subject: 'biology', topic: 'bioenergetics', subtopic: 'respiration' },
  { level: 'gcse', subject: 'biology', topic: 'bioenergetics', subtopic: 'aerobic-respiration' },
  { level: 'gcse', subject: 'biology', topic: 'bioenergetics', subtopic: 'anaerobic-respiration' },
  { level: 'gcse', subject: 'biology', topic: 'bioenergetics', subtopic: 'limiting-factors' },
  { level: 'gcse', subject: 'biology', topic: 'bioenergetics', subtopic: 'uses-of-glucose' },
  { level: 'gcse', subject: 'biology', topic: 'bioenergetics', subtopic: 'metabolism' },
  // Homeostasis
  { level: 'gcse', subject: 'biology', topic: 'homeostasis', subtopic: 'nervous-system' },
  { level: 'gcse', subject: 'biology', topic: 'homeostasis', subtopic: 'hormones' },
  { level: 'gcse', subject: 'biology', topic: 'homeostasis', subtopic: 'homeostasis' },
  { level: 'gcse', subject: 'biology', topic: 'homeostasis', subtopic: 'reflex-arc' },
  { level: 'gcse', subject: 'biology', topic: 'homeostasis', subtopic: 'brain' },
  { level: 'gcse', subject: 'biology', topic: 'homeostasis', subtopic: 'eye' },
  { level: 'gcse', subject: 'biology', topic: 'homeostasis', subtopic: 'blood-glucose-regulation' },
  { level: 'gcse', subject: 'biology', topic: 'homeostasis', subtopic: 'diabetes' },
  { level: 'gcse', subject: 'biology', topic: 'homeostasis', subtopic: 'kidney' },
  { level: 'gcse', subject: 'biology', topic: 'homeostasis', subtopic: 'dialysis-transplant' },
  { level: 'gcse', subject: 'biology', topic: 'homeostasis', subtopic: 'plant-hormones' },
  { level: 'gcse', subject: 'biology', topic: 'homeostasis', subtopic: 'human-reproduction' },
  { level: 'gcse', subject: 'biology', topic: 'homeostasis', subtopic: 'contraception' },
  { level: 'gcse', subject: 'biology', topic: 'homeostasis', subtopic: 'ivf' },
  // Inheritance
  { level: 'gcse', subject: 'biology', topic: 'inheritance', subtopic: 'dna-and-genes' },
  { level: 'gcse', subject: 'biology', topic: 'inheritance', subtopic: 'genetic-crosses' },
  { level: 'gcse', subject: 'biology', topic: 'inheritance', subtopic: 'evolution' },
  { level: 'gcse', subject: 'biology', topic: 'inheritance', subtopic: 'natural-selection' },
  { level: 'gcse', subject: 'biology', topic: 'inheritance', subtopic: 'variation' },
  { level: 'gcse', subject: 'biology', topic: 'inheritance', subtopic: 'inheritance' },
  { level: 'gcse', subject: 'biology', topic: 'inheritance', subtopic: 'punnett-squares' },
  { level: 'gcse', subject: 'biology', topic: 'inheritance', subtopic: 'genetic-disorders' },
  { level: 'gcse', subject: 'biology', topic: 'inheritance', subtopic: 'genetic-engineering' },
  { level: 'gcse', subject: 'biology', topic: 'inheritance', subtopic: 'cloning' },
  { level: 'gcse', subject: 'biology', topic: 'inheritance', subtopic: 'selective-breeding' },
  { level: 'gcse', subject: 'biology', topic: 'inheritance', subtopic: 'fossils' },
  { level: 'gcse', subject: 'biology', topic: 'inheritance', subtopic: 'extinction' },
  { level: 'gcse', subject: 'biology', topic: 'inheritance', subtopic: 'classification' },
  // Ecology
  { level: 'gcse', subject: 'biology', topic: 'ecology', subtopic: 'ecosystems' },
  { level: 'gcse', subject: 'biology', topic: 'ecology', subtopic: 'food-chains' },
  { level: 'gcse', subject: 'biology', topic: 'ecology', subtopic: 'carbon-cycle' },
  { level: 'gcse', subject: 'biology', topic: 'ecology', subtopic: 'water-cycle' },
  { level: 'gcse', subject: 'biology', topic: 'ecology', subtopic: 'nitrogen-cycle' },
  { level: 'gcse', subject: 'biology', topic: 'ecology', subtopic: 'biodiversity' },
  { level: 'gcse', subject: 'biology', topic: 'ecology', subtopic: 'pyramids-of-biomass' },
  { level: 'gcse', subject: 'biology', topic: 'ecology', subtopic: 'decomposition' },
  { level: 'gcse', subject: 'biology', topic: 'ecology', subtopic: 'human-impact' },
  { level: 'gcse', subject: 'biology', topic: 'ecology', subtopic: 'deforestation' },
  { level: 'gcse', subject: 'biology', topic: 'ecology', subtopic: 'global-warming' },
  { level: 'gcse', subject: 'biology', topic: 'ecology', subtopic: 'sampling-techniques' },

  // ===========================================
  // A-LEVEL MATHS (~100 subtopics)
  // ===========================================
  // Pure
  { level: 'a-level', subject: 'maths', topic: 'pure', subtopic: 'differentiation' },
  { level: 'a-level', subject: 'maths', topic: 'pure', subtopic: 'integration' },
  { level: 'a-level', subject: 'maths', topic: 'pure', subtopic: 'trigonometry' },
  { level: 'a-level', subject: 'maths', topic: 'pure', subtopic: 'exponentials-logarithms' },
  { level: 'a-level', subject: 'maths', topic: 'pure', subtopic: 'binomial-expansion' },
  { level: 'a-level', subject: 'maths', topic: 'pure', subtopic: 'proof' },
  { level: 'a-level', subject: 'maths', topic: 'pure', subtopic: 'algebra' },
  { level: 'a-level', subject: 'maths', topic: 'pure', subtopic: 'partial-fractions' },
  { level: 'a-level', subject: 'maths', topic: 'pure', subtopic: 'functions' },
  { level: 'a-level', subject: 'maths', topic: 'pure', subtopic: 'modulus' },
  { level: 'a-level', subject: 'maths', topic: 'pure', subtopic: 'coordinate-geometry' },
  { level: 'a-level', subject: 'maths', topic: 'pure', subtopic: 'sequences-series' },
  { level: 'a-level', subject: 'maths', topic: 'pure', subtopic: 'arithmetic-series' },
  { level: 'a-level', subject: 'maths', topic: 'pure', subtopic: 'geometric-series' },
  { level: 'a-level', subject: 'maths', topic: 'pure', subtopic: 'parametric-equations' },
  { level: 'a-level', subject: 'maths', topic: 'pure', subtopic: 'numerical-methods' },
  { level: 'a-level', subject: 'maths', topic: 'pure', subtopic: 'vectors' },
  { level: 'a-level', subject: 'maths', topic: 'pure', subtopic: 'product-rule' },
  { level: 'a-level', subject: 'maths', topic: 'pure', subtopic: 'quotient-rule' },
  { level: 'a-level', subject: 'maths', topic: 'pure', subtopic: 'chain-rule' },
  { level: 'a-level', subject: 'maths', topic: 'pure', subtopic: 'implicit-differentiation' },
  { level: 'a-level', subject: 'maths', topic: 'pure', subtopic: 'integration-by-parts' },
  { level: 'a-level', subject: 'maths', topic: 'pure', subtopic: 'integration-by-substitution' },
  { level: 'a-level', subject: 'maths', topic: 'pure', subtopic: 'differential-equations' },
  { level: 'a-level', subject: 'maths', topic: 'pure', subtopic: 'trigonometric-identities' },
  { level: 'a-level', subject: 'maths', topic: 'pure', subtopic: 'radians' },
  { level: 'a-level', subject: 'maths', topic: 'pure', subtopic: 'small-angle-approximations' },
  // Statistics
  { level: 'a-level', subject: 'maths', topic: 'statistics', subtopic: 'normal-distribution' },
  { level: 'a-level', subject: 'maths', topic: 'statistics', subtopic: 'hypothesis-testing' },
  { level: 'a-level', subject: 'maths', topic: 'statistics', subtopic: 'binomial-distribution' },
  { level: 'a-level', subject: 'maths', topic: 'statistics', subtopic: 'probability' },
  { level: 'a-level', subject: 'maths', topic: 'statistics', subtopic: 'statistical-sampling' },
  { level: 'a-level', subject: 'maths', topic: 'statistics', subtopic: 'data-presentation' },
  { level: 'a-level', subject: 'maths', topic: 'statistics', subtopic: 'regression' },
  { level: 'a-level', subject: 'maths', topic: 'statistics', subtopic: 'correlation' },
  { level: 'a-level', subject: 'maths', topic: 'statistics', subtopic: 'conditional-probability' },
  // Mechanics
  { level: 'a-level', subject: 'maths', topic: 'mechanics', subtopic: 'suvat-equations' },
  { level: 'a-level', subject: 'maths', topic: 'mechanics', subtopic: 'projectiles' },
  { level: 'a-level', subject: 'maths', topic: 'mechanics', subtopic: 'moments' },
  { level: 'a-level', subject: 'maths', topic: 'mechanics', subtopic: 'forces' },
  { level: 'a-level', subject: 'maths', topic: 'mechanics', subtopic: 'friction' },
  { level: 'a-level', subject: 'maths', topic: 'mechanics', subtopic: 'connected-particles' },
  { level: 'a-level', subject: 'maths', topic: 'mechanics', subtopic: 'pulleys' },
  { level: 'a-level', subject: 'maths', topic: 'mechanics', subtopic: 'vectors-in-mechanics' },
  { level: 'a-level', subject: 'maths', topic: 'mechanics', subtopic: 'variable-acceleration' },

  // ===========================================
  // A-LEVEL PHYSICS (~80 subtopics)
  // ===========================================
  { level: 'a-level', subject: 'physics', topic: 'mechanics', subtopic: 'projectile-motion' },
  { level: 'a-level', subject: 'physics', topic: 'mechanics', subtopic: 'circular-motion' },
  { level: 'a-level', subject: 'physics', topic: 'mechanics', subtopic: 'simple-harmonic-motion' },
  { level: 'a-level', subject: 'physics', topic: 'mechanics', subtopic: 'newtons-laws' },
  { level: 'a-level', subject: 'physics', topic: 'mechanics', subtopic: 'momentum' },
  { level: 'a-level', subject: 'physics', topic: 'mechanics', subtopic: 'work-energy-power' },
  { level: 'a-level', subject: 'physics', topic: 'mechanics', subtopic: 'collisions' },
  { level: 'a-level', subject: 'physics', topic: 'mechanics', subtopic: 'moments' },
  { level: 'a-level', subject: 'physics', topic: 'mechanics', subtopic: 'equilibrium' },
  { level: 'a-level', subject: 'physics', topic: 'mechanics', subtopic: 'stress-strain' },
  { level: 'a-level', subject: 'physics', topic: 'materials', subtopic: 'youngs-modulus' },
  { level: 'a-level', subject: 'physics', topic: 'materials', subtopic: 'properties-of-materials' },
  { level: 'a-level', subject: 'physics', topic: 'materials', subtopic: 'density' },
  { level: 'a-level', subject: 'physics', topic: 'waves', subtopic: 'wave-properties' },
  { level: 'a-level', subject: 'physics', topic: 'waves', subtopic: 'superposition' },
  { level: 'a-level', subject: 'physics', topic: 'waves', subtopic: 'interference' },
  { level: 'a-level', subject: 'physics', topic: 'waves', subtopic: 'diffraction' },
  { level: 'a-level', subject: 'physics', topic: 'waves', subtopic: 'standing-waves' },
  { level: 'a-level', subject: 'physics', topic: 'waves', subtopic: 'refraction' },
  { level: 'a-level', subject: 'physics', topic: 'electricity', subtopic: 'kirchhoffs-laws' },
  { level: 'a-level', subject: 'physics', topic: 'electricity', subtopic: 'capacitors' },
  { level: 'a-level', subject: 'physics', topic: 'electricity', subtopic: 'potential-dividers' },
  { level: 'a-level', subject: 'physics', topic: 'electricity', subtopic: 'emf-internal-resistance' },
  { level: 'a-level', subject: 'physics', topic: 'electricity', subtopic: 'resistivity' },
  { level: 'a-level', subject: 'physics', topic: 'electricity', subtopic: 'superconductivity' },
  { level: 'a-level', subject: 'physics', topic: 'quantum', subtopic: 'photoelectric-effect' },
  { level: 'a-level', subject: 'physics', topic: 'quantum', subtopic: 'wave-particle-duality' },
  { level: 'a-level', subject: 'physics', topic: 'quantum', subtopic: 'energy-levels' },
  { level: 'a-level', subject: 'physics', topic: 'quantum', subtopic: 'spectra' },
  { level: 'a-level', subject: 'physics', topic: 'quantum', subtopic: 'de-broglie-wavelength' },
  { level: 'a-level', subject: 'physics', topic: 'fields', subtopic: 'gravitational-fields' },
  { level: 'a-level', subject: 'physics', topic: 'fields', subtopic: 'electric-fields' },
  { level: 'a-level', subject: 'physics', topic: 'fields', subtopic: 'magnetic-fields' },
  { level: 'a-level', subject: 'physics', topic: 'fields', subtopic: 'electromagnetic-induction' },
  { level: 'a-level', subject: 'physics', topic: 'fields', subtopic: 'capacitance' },
  { level: 'a-level', subject: 'physics', topic: 'fields', subtopic: 'orbits' },
  { level: 'a-level', subject: 'physics', topic: 'nuclear', subtopic: 'binding-energy' },
  { level: 'a-level', subject: 'physics', topic: 'nuclear', subtopic: 'radioactive-decay' },
  { level: 'a-level', subject: 'physics', topic: 'nuclear', subtopic: 'nuclear-reactions' },
  { level: 'a-level', subject: 'physics', topic: 'nuclear', subtopic: 'mass-energy' },
  { level: 'a-level', subject: 'physics', topic: 'nuclear', subtopic: 'particle-physics' },
  { level: 'a-level', subject: 'physics', topic: 'nuclear', subtopic: 'quarks' },
  { level: 'a-level', subject: 'physics', topic: 'nuclear', subtopic: 'leptons' },
  { level: 'a-level', subject: 'physics', topic: 'nuclear', subtopic: 'conservation-laws' },

  // ===========================================
  // A-LEVEL CHEMISTRY (~60 subtopics)
  // ===========================================
  { level: 'a-level', subject: 'chemistry', topic: 'physical-chemistry', subtopic: 'atomic-structure' },
  { level: 'a-level', subject: 'chemistry', topic: 'physical-chemistry', subtopic: 'bonding' },
  { level: 'a-level', subject: 'chemistry', topic: 'physical-chemistry', subtopic: 'energetics' },
  { level: 'a-level', subject: 'chemistry', topic: 'physical-chemistry', subtopic: 'kinetics' },
  { level: 'a-level', subject: 'chemistry', topic: 'physical-chemistry', subtopic: 'equilibria' },
  { level: 'a-level', subject: 'chemistry', topic: 'physical-chemistry', subtopic: 'redox' },
  { level: 'a-level', subject: 'chemistry', topic: 'physical-chemistry', subtopic: 'thermodynamics' },
  { level: 'a-level', subject: 'chemistry', topic: 'physical-chemistry', subtopic: 'electrochemistry' },
  { level: 'a-level', subject: 'chemistry', topic: 'physical-chemistry', subtopic: 'acids-bases' },
  { level: 'a-level', subject: 'chemistry', topic: 'physical-chemistry', subtopic: 'buffer-solutions' },
  { level: 'a-level', subject: 'chemistry', topic: 'inorganic-chemistry', subtopic: 'periodicity' },
  { level: 'a-level', subject: 'chemistry', topic: 'inorganic-chemistry', subtopic: 'group-2' },
  { level: 'a-level', subject: 'chemistry', topic: 'inorganic-chemistry', subtopic: 'group-7' },
  { level: 'a-level', subject: 'chemistry', topic: 'inorganic-chemistry', subtopic: 'transition-metals' },
  { level: 'a-level', subject: 'chemistry', topic: 'inorganic-chemistry', subtopic: 'reactions-of-ions' },
  { level: 'a-level', subject: 'chemistry', topic: 'organic-chemistry', subtopic: 'alkanes' },
  { level: 'a-level', subject: 'chemistry', topic: 'organic-chemistry', subtopic: 'halogenoalkanes' },
  { level: 'a-level', subject: 'chemistry', topic: 'organic-chemistry', subtopic: 'alkenes' },
  { level: 'a-level', subject: 'chemistry', topic: 'organic-chemistry', subtopic: 'alcohols' },
  { level: 'a-level', subject: 'chemistry', topic: 'organic-chemistry', subtopic: 'organic-analysis' },
  { level: 'a-level', subject: 'chemistry', topic: 'organic-chemistry', subtopic: 'aldehydes-ketones' },
  { level: 'a-level', subject: 'chemistry', topic: 'organic-chemistry', subtopic: 'carboxylic-acids' },
  { level: 'a-level', subject: 'chemistry', topic: 'organic-chemistry', subtopic: 'aromatics' },
  { level: 'a-level', subject: 'chemistry', topic: 'organic-chemistry', subtopic: 'amines' },
  { level: 'a-level', subject: 'chemistry', topic: 'organic-chemistry', subtopic: 'polymers' },
  { level: 'a-level', subject: 'chemistry', topic: 'organic-chemistry', subtopic: 'amino-acids-proteins' },
  { level: 'a-level', subject: 'chemistry', topic: 'organic-chemistry', subtopic: 'organic-synthesis' },
  { level: 'a-level', subject: 'chemistry', topic: 'organic-chemistry', subtopic: 'nmr' },
  { level: 'a-level', subject: 'chemistry', topic: 'organic-chemistry', subtopic: 'chromatography' },

  // ===========================================
  // GCSE ENGLISH LANGUAGE (~45 subtopics)
  // ===========================================
  { level: 'gcse', subject: 'english-language', topic: 'reading', subtopic: 'inference' },
  { level: 'gcse', subject: 'english-language', topic: 'reading', subtopic: 'language-analysis' },
  { level: 'gcse', subject: 'english-language', topic: 'reading', subtopic: 'structure-analysis' },
  { level: 'gcse', subject: 'english-language', topic: 'reading', subtopic: 'comparison' },
  { level: 'gcse', subject: 'english-language', topic: 'reading', subtopic: 'evaluation' },
  { level: 'gcse', subject: 'english-language', topic: 'reading', subtopic: 'synthesis' },
  { level: 'gcse', subject: 'english-language', topic: 'reading', subtopic: 'explicit-information' },
  { level: 'gcse', subject: 'english-language', topic: 'reading', subtopic: 'implicit-information' },
  { level: 'gcse', subject: 'english-language', topic: 'reading', subtopic: 'writers-viewpoint' },
  { level: 'gcse', subject: 'english-language', topic: 'reading', subtopic: 'audience-purpose' },
  { level: 'gcse', subject: 'english-language', topic: 'writing', subtopic: 'descriptive-writing' },
  { level: 'gcse', subject: 'english-language', topic: 'writing', subtopic: 'narrative-writing' },
  { level: 'gcse', subject: 'english-language', topic: 'writing', subtopic: 'persuasive-writing' },
  { level: 'gcse', subject: 'english-language', topic: 'writing', subtopic: 'argumentative-writing' },
  { level: 'gcse', subject: 'english-language', topic: 'writing', subtopic: 'letter-writing' },
  { level: 'gcse', subject: 'english-language', topic: 'writing', subtopic: 'article-writing' },
  { level: 'gcse', subject: 'english-language', topic: 'writing', subtopic: 'speech-writing' },
  { level: 'gcse', subject: 'english-language', topic: 'writing', subtopic: 'creative-writing' },
  { level: 'gcse', subject: 'english-language', topic: 'writing', subtopic: 'transactional-writing' },
  { level: 'gcse', subject: 'english-language', topic: 'techniques', subtopic: 'metaphor-simile' },
  { level: 'gcse', subject: 'english-language', topic: 'techniques', subtopic: 'personification' },
  { level: 'gcse', subject: 'english-language', topic: 'techniques', subtopic: 'alliteration' },
  { level: 'gcse', subject: 'english-language', topic: 'techniques', subtopic: 'imagery' },
  { level: 'gcse', subject: 'english-language', topic: 'techniques', subtopic: 'pathetic-fallacy' },
  { level: 'gcse', subject: 'english-language', topic: 'techniques', subtopic: 'repetition' },
  { level: 'gcse', subject: 'english-language', topic: 'techniques', subtopic: 'rhetorical-questions' },
  { level: 'gcse', subject: 'english-language', topic: 'techniques', subtopic: 'emotive-language' },
  { level: 'gcse', subject: 'english-language', topic: 'techniques', subtopic: 'hyperbole' },
  { level: 'gcse', subject: 'english-language', topic: 'techniques', subtopic: 'juxtaposition' },
  { level: 'gcse', subject: 'english-language', topic: 'techniques', subtopic: 'symbolism' },
  { level: 'gcse', subject: 'english-language', topic: 'techniques', subtopic: 'foreshadowing' },
  { level: 'gcse', subject: 'english-language', topic: 'grammar', subtopic: 'sentence-structures' },
  { level: 'gcse', subject: 'english-language', topic: 'grammar', subtopic: 'punctuation' },
  { level: 'gcse', subject: 'english-language', topic: 'grammar', subtopic: 'paragraphing' },
  { level: 'gcse', subject: 'english-language', topic: 'grammar', subtopic: 'spelling' },
  { level: 'gcse', subject: 'english-language', topic: 'grammar', subtopic: 'vocabulary' },
  { level: 'gcse', subject: 'english-language', topic: 'spoken-language', subtopic: 'presentation-skills' },
  { level: 'gcse', subject: 'english-language', topic: 'spoken-language', subtopic: 'spoken-language-study' },

  // ===========================================
  // GCSE ENGLISH LITERATURE (~50 subtopics)
  // ===========================================
  { level: 'gcse', subject: 'english-literature', topic: 'shakespeare', subtopic: 'macbeth' },
  { level: 'gcse', subject: 'english-literature', topic: 'shakespeare', subtopic: 'romeo-and-juliet' },
  { level: 'gcse', subject: 'english-literature', topic: 'shakespeare', subtopic: 'much-ado-about-nothing' },
  { level: 'gcse', subject: 'english-literature', topic: 'shakespeare', subtopic: 'the-tempest' },
  { level: 'gcse', subject: 'english-literature', topic: 'shakespeare', subtopic: 'merchant-of-venice' },
  { level: 'gcse', subject: 'english-literature', topic: 'shakespeare', subtopic: 'julius-caesar' },
  { level: 'gcse', subject: 'english-literature', topic: 'shakespeare', subtopic: 'othello' },
  { level: 'gcse', subject: 'english-literature', topic: 'shakespeare', subtopic: 'hamlet' },
  { level: 'gcse', subject: 'english-literature', topic: '19th-century', subtopic: 'christmas-carol' },
  { level: 'gcse', subject: 'english-literature', topic: '19th-century', subtopic: 'jekyll-and-hyde' },
  { level: 'gcse', subject: 'english-literature', topic: '19th-century', subtopic: 'frankenstein' },
  { level: 'gcse', subject: 'english-literature', topic: '19th-century', subtopic: 'great-expectations' },
  { level: 'gcse', subject: 'english-literature', topic: '19th-century', subtopic: 'jane-eyre' },
  { level: 'gcse', subject: 'english-literature', topic: '19th-century', subtopic: 'pride-and-prejudice' },
  { level: 'gcse', subject: 'english-literature', topic: '19th-century', subtopic: 'sign-of-four' },
  { level: 'gcse', subject: 'english-literature', topic: 'modern-texts', subtopic: 'an-inspector-calls' },
  { level: 'gcse', subject: 'english-literature', topic: 'modern-texts', subtopic: 'blood-brothers' },
  { level: 'gcse', subject: 'english-literature', topic: 'modern-texts', subtopic: 'animal-farm' },
  { level: 'gcse', subject: 'english-literature', topic: 'modern-texts', subtopic: 'lord-of-the-flies' },
  { level: 'gcse', subject: 'english-literature', topic: 'modern-texts', subtopic: 'never-let-me-go' },
  { level: 'gcse', subject: 'english-literature', topic: 'modern-texts', subtopic: 'the-curious-incident' },
  { level: 'gcse', subject: 'english-literature', topic: 'modern-texts', subtopic: 'dna' },
  { level: 'gcse', subject: 'english-literature', topic: 'modern-texts', subtopic: 'the-history-boys' },
  { level: 'gcse', subject: 'english-literature', topic: 'poetry', subtopic: 'power-and-conflict' },
  { level: 'gcse', subject: 'english-literature', topic: 'poetry', subtopic: 'love-and-relationships' },
  { level: 'gcse', subject: 'english-literature', topic: 'poetry', subtopic: 'ozymandias' },
  { level: 'gcse', subject: 'english-literature', topic: 'poetry', subtopic: 'london' },
  { level: 'gcse', subject: 'english-literature', topic: 'poetry', subtopic: 'the-emigree' },
  { level: 'gcse', subject: 'english-literature', topic: 'poetry', subtopic: 'checking-out-me-history' },
  { level: 'gcse', subject: 'english-literature', topic: 'poetry', subtopic: 'storm-on-the-island' },
  { level: 'gcse', subject: 'english-literature', topic: 'poetry', subtopic: 'bayonet-charge' },
  { level: 'gcse', subject: 'english-literature', topic: 'poetry', subtopic: 'remains' },
  { level: 'gcse', subject: 'english-literature', topic: 'poetry', subtopic: 'war-photographer' },
  { level: 'gcse', subject: 'english-literature', topic: 'poetry', subtopic: 'tissue' },
  { level: 'gcse', subject: 'english-literature', topic: 'poetry', subtopic: 'the-prelude' },
  { level: 'gcse', subject: 'english-literature', topic: 'poetry', subtopic: 'my-last-duchess' },
  { level: 'gcse', subject: 'english-literature', topic: 'poetry', subtopic: 'charge-of-light-brigade' },
  { level: 'gcse', subject: 'english-literature', topic: 'poetry', subtopic: 'exposure' },
  { level: 'gcse', subject: 'english-literature', topic: 'poetry', subtopic: 'kamikaze' },
  { level: 'gcse', subject: 'english-literature', topic: 'unseen-poetry', subtopic: 'unseen-poetry-analysis' },
  { level: 'gcse', subject: 'english-literature', topic: 'unseen-poetry', subtopic: 'poetry-comparison' },
  { level: 'gcse', subject: 'english-literature', topic: 'skills', subtopic: 'character-analysis' },
  { level: 'gcse', subject: 'english-literature', topic: 'skills', subtopic: 'theme-analysis' },
  { level: 'gcse', subject: 'english-literature', topic: 'skills', subtopic: 'context' },
  { level: 'gcse', subject: 'english-literature', topic: 'skills', subtopic: 'quotation-analysis' },

  // ===========================================
  // GCSE HISTORY (~55 subtopics)
  // ===========================================
  { level: 'gcse', subject: 'history', topic: 'medicine', subtopic: 'medieval-medicine' },
  { level: 'gcse', subject: 'history', topic: 'medicine', subtopic: 'renaissance-medicine' },
  { level: 'gcse', subject: 'history', topic: 'medicine', subtopic: 'industrial-medicine' },
  { level: 'gcse', subject: 'history', topic: 'medicine', subtopic: 'modern-medicine' },
  { level: 'gcse', subject: 'history', topic: 'medicine', subtopic: 'black-death' },
  { level: 'gcse', subject: 'history', topic: 'medicine', subtopic: 'great-plague' },
  { level: 'gcse', subject: 'history', topic: 'medicine', subtopic: 'cholera' },
  { level: 'gcse', subject: 'history', topic: 'medicine', subtopic: 'germ-theory' },
  { level: 'gcse', subject: 'history', topic: 'medicine', subtopic: 'vaccination' },
  { level: 'gcse', subject: 'history', topic: 'medicine', subtopic: 'antibiotics' },
  { level: 'gcse', subject: 'history', topic: 'medicine', subtopic: 'nhs' },
  { level: 'gcse', subject: 'history', topic: 'crime-punishment', subtopic: 'medieval-crime' },
  { level: 'gcse', subject: 'history', topic: 'crime-punishment', subtopic: 'early-modern-crime' },
  { level: 'gcse', subject: 'history', topic: 'crime-punishment', subtopic: 'industrial-crime' },
  { level: 'gcse', subject: 'history', topic: 'crime-punishment', subtopic: 'modern-crime' },
  { level: 'gcse', subject: 'history', topic: 'crime-punishment', subtopic: 'witchcraft' },
  { level: 'gcse', subject: 'history', topic: 'crime-punishment', subtopic: 'smuggling' },
  { level: 'gcse', subject: 'history', topic: 'crime-punishment', subtopic: 'poaching' },
  { level: 'gcse', subject: 'history', topic: 'crime-punishment', subtopic: 'highway-robbery' },
  { level: 'gcse', subject: 'history', topic: 'crime-punishment', subtopic: 'prisons' },
  { level: 'gcse', subject: 'history', topic: 'crime-punishment', subtopic: 'policing' },
  { level: 'gcse', subject: 'history', topic: 'germany', subtopic: 'weimar-republic' },
  { level: 'gcse', subject: 'history', topic: 'germany', subtopic: 'nazi-rise-to-power' },
  { level: 'gcse', subject: 'history', topic: 'germany', subtopic: 'nazi-germany' },
  { level: 'gcse', subject: 'history', topic: 'germany', subtopic: 'life-in-nazi-germany' },
  { level: 'gcse', subject: 'history', topic: 'germany', subtopic: 'hitler' },
  { level: 'gcse', subject: 'history', topic: 'germany', subtopic: 'treaty-of-versailles' },
  { level: 'gcse', subject: 'history', topic: 'germany', subtopic: 'hyperinflation' },
  { level: 'gcse', subject: 'history', topic: 'germany', subtopic: 'great-depression-germany' },
  { level: 'gcse', subject: 'history', topic: 'germany', subtopic: 'reichstag-fire' },
  { level: 'gcse', subject: 'history', topic: 'germany', subtopic: 'night-of-long-knives' },
  { level: 'gcse', subject: 'history', topic: 'germany', subtopic: 'kristallnacht' },
  { level: 'gcse', subject: 'history', topic: 'germany', subtopic: 'holocaust' },
  { level: 'gcse', subject: 'history', topic: 'cold-war', subtopic: 'origins-of-cold-war' },
  { level: 'gcse', subject: 'history', topic: 'cold-war', subtopic: 'berlin-blockade' },
  { level: 'gcse', subject: 'history', topic: 'cold-war', subtopic: 'korean-war' },
  { level: 'gcse', subject: 'history', topic: 'cold-war', subtopic: 'cuban-missile-crisis' },
  { level: 'gcse', subject: 'history', topic: 'cold-war', subtopic: 'vietnam-war' },
  { level: 'gcse', subject: 'history', topic: 'cold-war', subtopic: 'berlin-wall' },
  { level: 'gcse', subject: 'history', topic: 'cold-war', subtopic: 'end-of-cold-war' },
  { level: 'gcse', subject: 'history', topic: 'elizabethan', subtopic: 'elizabeth-i' },
  { level: 'gcse', subject: 'history', topic: 'elizabethan', subtopic: 'elizabethan-society' },
  { level: 'gcse', subject: 'history', topic: 'elizabethan', subtopic: 'spanish-armada' },
  { level: 'gcse', subject: 'history', topic: 'elizabethan', subtopic: 'mary-queen-of-scots' },
  { level: 'gcse', subject: 'history', topic: 'elizabethan', subtopic: 'elizabethan-theatre' },
  { level: 'gcse', subject: 'history', topic: 'elizabethan', subtopic: 'poverty-elizabethan' },
  { level: 'gcse', subject: 'history', topic: 'norman', subtopic: 'battle-of-hastings' },
  { level: 'gcse', subject: 'history', topic: 'norman', subtopic: 'william-the-conqueror' },
  { level: 'gcse', subject: 'history', topic: 'norman', subtopic: 'norman-conquest' },
  { level: 'gcse', subject: 'history', topic: 'norman', subtopic: 'feudal-system' },
  { level: 'gcse', subject: 'history', topic: 'norman', subtopic: 'domesday-book' },

  // ===========================================
  // GCSE GEOGRAPHY (~50 subtopics)
  // ===========================================
  { level: 'gcse', subject: 'geography', topic: 'natural-hazards', subtopic: 'tectonic-hazards' },
  { level: 'gcse', subject: 'geography', topic: 'natural-hazards', subtopic: 'earthquakes' },
  { level: 'gcse', subject: 'geography', topic: 'natural-hazards', subtopic: 'volcanoes' },
  { level: 'gcse', subject: 'geography', topic: 'natural-hazards', subtopic: 'tropical-storms' },
  { level: 'gcse', subject: 'geography', topic: 'natural-hazards', subtopic: 'weather-hazards' },
  { level: 'gcse', subject: 'geography', topic: 'natural-hazards', subtopic: 'climate-change' },
  { level: 'gcse', subject: 'geography', topic: 'natural-hazards', subtopic: 'extreme-weather-uk' },
  { level: 'gcse', subject: 'geography', topic: 'ecosystems', subtopic: 'ecosystems-introduction' },
  { level: 'gcse', subject: 'geography', topic: 'ecosystems', subtopic: 'tropical-rainforests' },
  { level: 'gcse', subject: 'geography', topic: 'ecosystems', subtopic: 'hot-deserts' },
  { level: 'gcse', subject: 'geography', topic: 'ecosystems', subtopic: 'cold-environments' },
  { level: 'gcse', subject: 'geography', topic: 'ecosystems', subtopic: 'deforestation' },
  { level: 'gcse', subject: 'geography', topic: 'ecosystems', subtopic: 'desertification' },
  { level: 'gcse', subject: 'geography', topic: 'physical-landscapes', subtopic: 'uk-landscapes' },
  { level: 'gcse', subject: 'geography', topic: 'physical-landscapes', subtopic: 'coastal-landscapes' },
  { level: 'gcse', subject: 'geography', topic: 'physical-landscapes', subtopic: 'river-landscapes' },
  { level: 'gcse', subject: 'geography', topic: 'physical-landscapes', subtopic: 'glacial-landscapes' },
  { level: 'gcse', subject: 'geography', topic: 'physical-landscapes', subtopic: 'erosion' },
  { level: 'gcse', subject: 'geography', topic: 'physical-landscapes', subtopic: 'weathering' },
  { level: 'gcse', subject: 'geography', topic: 'physical-landscapes', subtopic: 'mass-movement' },
  { level: 'gcse', subject: 'geography', topic: 'physical-landscapes', subtopic: 'transportation-deposition' },
  { level: 'gcse', subject: 'geography', topic: 'physical-landscapes', subtopic: 'coastal-management' },
  { level: 'gcse', subject: 'geography', topic: 'physical-landscapes', subtopic: 'river-flooding' },
  { level: 'gcse', subject: 'geography', topic: 'physical-landscapes', subtopic: 'flood-management' },
  { level: 'gcse', subject: 'geography', topic: 'urban', subtopic: 'urbanisation' },
  { level: 'gcse', subject: 'geography', topic: 'urban', subtopic: 'urban-growth' },
  { level: 'gcse', subject: 'geography', topic: 'urban', subtopic: 'urban-challenges' },
  { level: 'gcse', subject: 'geography', topic: 'urban', subtopic: 'sustainable-cities' },
  { level: 'gcse', subject: 'geography', topic: 'urban', subtopic: 'uk-cities' },
  { level: 'gcse', subject: 'geography', topic: 'urban', subtopic: 'megacities' },
  { level: 'gcse', subject: 'geography', topic: 'urban', subtopic: 'urban-regeneration' },
  { level: 'gcse', subject: 'geography', topic: 'development', subtopic: 'global-development' },
  { level: 'gcse', subject: 'geography', topic: 'development', subtopic: 'development-gap' },
  { level: 'gcse', subject: 'geography', topic: 'development', subtopic: 'reducing-development-gap' },
  { level: 'gcse', subject: 'geography', topic: 'development', subtopic: 'newly-emerging-economies' },
  { level: 'gcse', subject: 'geography', topic: 'development', subtopic: 'economic-development' },
  { level: 'gcse', subject: 'geography', topic: 'resources', subtopic: 'resource-management' },
  { level: 'gcse', subject: 'geography', topic: 'resources', subtopic: 'food-resources' },
  { level: 'gcse', subject: 'geography', topic: 'resources', subtopic: 'water-resources' },
  { level: 'gcse', subject: 'geography', topic: 'resources', subtopic: 'energy-resources' },
  { level: 'gcse', subject: 'geography', topic: 'resources', subtopic: 'food-security' },
  { level: 'gcse', subject: 'geography', topic: 'resources', subtopic: 'water-security' },
  { level: 'gcse', subject: 'geography', topic: 'resources', subtopic: 'energy-security' },
  { level: 'gcse', subject: 'geography', topic: 'fieldwork', subtopic: 'geographical-skills' },
  { level: 'gcse', subject: 'geography', topic: 'fieldwork', subtopic: 'map-skills' },
  { level: 'gcse', subject: 'geography', topic: 'fieldwork', subtopic: 'fieldwork-techniques' },

  // ===========================================
  // GCSE COMPUTER SCIENCE (~50 subtopics)
  // ===========================================
  { level: 'gcse', subject: 'computer-science', topic: 'systems', subtopic: 'computer-systems' },
  { level: 'gcse', subject: 'computer-science', topic: 'systems', subtopic: 'cpu' },
  { level: 'gcse', subject: 'computer-science', topic: 'systems', subtopic: 'fetch-execute-cycle' },
  { level: 'gcse', subject: 'computer-science', topic: 'systems', subtopic: 'memory' },
  { level: 'gcse', subject: 'computer-science', topic: 'systems', subtopic: 'storage' },
  { level: 'gcse', subject: 'computer-science', topic: 'systems', subtopic: 'secondary-storage' },
  { level: 'gcse', subject: 'computer-science', topic: 'systems', subtopic: 'embedded-systems' },
  { level: 'gcse', subject: 'computer-science', topic: 'systems', subtopic: 'operating-systems' },
  { level: 'gcse', subject: 'computer-science', topic: 'systems', subtopic: 'utility-software' },
  { level: 'gcse', subject: 'computer-science', topic: 'data', subtopic: 'binary' },
  { level: 'gcse', subject: 'computer-science', topic: 'data', subtopic: 'hexadecimal' },
  { level: 'gcse', subject: 'computer-science', topic: 'data', subtopic: 'binary-addition' },
  { level: 'gcse', subject: 'computer-science', topic: 'data', subtopic: 'binary-shifts' },
  { level: 'gcse', subject: 'computer-science', topic: 'data', subtopic: 'character-encoding' },
  { level: 'gcse', subject: 'computer-science', topic: 'data', subtopic: 'image-representation' },
  { level: 'gcse', subject: 'computer-science', topic: 'data', subtopic: 'sound-representation' },
  { level: 'gcse', subject: 'computer-science', topic: 'data', subtopic: 'compression' },
  { level: 'gcse', subject: 'computer-science', topic: 'networks', subtopic: 'network-types' },
  { level: 'gcse', subject: 'computer-science', topic: 'networks', subtopic: 'network-topologies' },
  { level: 'gcse', subject: 'computer-science', topic: 'networks', subtopic: 'protocols' },
  { level: 'gcse', subject: 'computer-science', topic: 'networks', subtopic: 'tcp-ip' },
  { level: 'gcse', subject: 'computer-science', topic: 'networks', subtopic: 'network-hardware' },
  { level: 'gcse', subject: 'computer-science', topic: 'networks', subtopic: 'the-internet' },
  { level: 'gcse', subject: 'computer-science', topic: 'networks', subtopic: 'cloud-computing' },
  { level: 'gcse', subject: 'computer-science', topic: 'security', subtopic: 'cyber-security' },
  { level: 'gcse', subject: 'computer-science', topic: 'security', subtopic: 'malware' },
  { level: 'gcse', subject: 'computer-science', topic: 'security', subtopic: 'social-engineering' },
  { level: 'gcse', subject: 'computer-science', topic: 'security', subtopic: 'encryption' },
  { level: 'gcse', subject: 'computer-science', topic: 'security', subtopic: 'network-security' },
  { level: 'gcse', subject: 'computer-science', topic: 'programming', subtopic: 'algorithms' },
  { level: 'gcse', subject: 'computer-science', topic: 'programming', subtopic: 'pseudocode' },
  { level: 'gcse', subject: 'computer-science', topic: 'programming', subtopic: 'flowcharts' },
  { level: 'gcse', subject: 'computer-science', topic: 'programming', subtopic: 'variables' },
  { level: 'gcse', subject: 'computer-science', topic: 'programming', subtopic: 'data-types' },
  { level: 'gcse', subject: 'computer-science', topic: 'programming', subtopic: 'selection' },
  { level: 'gcse', subject: 'computer-science', topic: 'programming', subtopic: 'iteration' },
  { level: 'gcse', subject: 'computer-science', topic: 'programming', subtopic: 'arrays' },
  { level: 'gcse', subject: 'computer-science', topic: 'programming', subtopic: 'functions-procedures' },
  { level: 'gcse', subject: 'computer-science', topic: 'programming', subtopic: 'string-manipulation' },
  { level: 'gcse', subject: 'computer-science', topic: 'programming', subtopic: 'file-handling' },
  { level: 'gcse', subject: 'computer-science', topic: 'programming', subtopic: 'sorting-algorithms' },
  { level: 'gcse', subject: 'computer-science', topic: 'programming', subtopic: 'searching-algorithms' },
  { level: 'gcse', subject: 'computer-science', topic: 'programming', subtopic: 'validation' },
  { level: 'gcse', subject: 'computer-science', topic: 'programming', subtopic: 'testing' },
  { level: 'gcse', subject: 'computer-science', topic: 'ethics', subtopic: 'ethical-issues' },
  { level: 'gcse', subject: 'computer-science', topic: 'ethics', subtopic: 'legal-issues' },
  { level: 'gcse', subject: 'computer-science', topic: 'ethics', subtopic: 'environmental-issues' },
  { level: 'gcse', subject: 'computer-science', topic: 'ethics', subtopic: 'privacy' },

  // ===========================================
  // GCSE BUSINESS STUDIES (~40 subtopics)
  // ===========================================
  { level: 'gcse', subject: 'business', topic: 'enterprise', subtopic: 'enterprise-entrepreneurship' },
  { level: 'gcse', subject: 'business', topic: 'enterprise', subtopic: 'business-objectives' },
  { level: 'gcse', subject: 'business', topic: 'enterprise', subtopic: 'stakeholders' },
  { level: 'gcse', subject: 'business', topic: 'enterprise', subtopic: 'business-plans' },
  { level: 'gcse', subject: 'business', topic: 'enterprise', subtopic: 'business-location' },
  { level: 'gcse', subject: 'business', topic: 'enterprise', subtopic: 'business-ownership' },
  { level: 'gcse', subject: 'business', topic: 'enterprise', subtopic: 'franchises' },
  { level: 'gcse', subject: 'business', topic: 'marketing', subtopic: 'market-research' },
  { level: 'gcse', subject: 'business', topic: 'marketing', subtopic: 'market-segmentation' },
  { level: 'gcse', subject: 'business', topic: 'marketing', subtopic: 'marketing-mix' },
  { level: 'gcse', subject: 'business', topic: 'marketing', subtopic: 'product' },
  { level: 'gcse', subject: 'business', topic: 'marketing', subtopic: 'price' },
  { level: 'gcse', subject: 'business', topic: 'marketing', subtopic: 'promotion' },
  { level: 'gcse', subject: 'business', topic: 'marketing', subtopic: 'place' },
  { level: 'gcse', subject: 'business', topic: 'marketing', subtopic: 'product-life-cycle' },
  { level: 'gcse', subject: 'business', topic: 'marketing', subtopic: 'branding' },
  { level: 'gcse', subject: 'business', topic: 'operations', subtopic: 'production-methods' },
  { level: 'gcse', subject: 'business', topic: 'operations', subtopic: 'quality' },
  { level: 'gcse', subject: 'business', topic: 'operations', subtopic: 'supply-chain' },
  { level: 'gcse', subject: 'business', topic: 'operations', subtopic: 'procurement' },
  { level: 'gcse', subject: 'business', topic: 'operations', subtopic: 'customer-service' },
  { level: 'gcse', subject: 'business', topic: 'finance', subtopic: 'sources-of-finance' },
  { level: 'gcse', subject: 'business', topic: 'finance', subtopic: 'revenue-costs-profit' },
  { level: 'gcse', subject: 'business', topic: 'finance', subtopic: 'break-even' },
  { level: 'gcse', subject: 'business', topic: 'finance', subtopic: 'cash-flow' },
  { level: 'gcse', subject: 'business', topic: 'finance', subtopic: 'financial-statements' },
  { level: 'gcse', subject: 'business', topic: 'finance', subtopic: 'profitability-ratios' },
  { level: 'gcse', subject: 'business', topic: 'hr', subtopic: 'recruitment' },
  { level: 'gcse', subject: 'business', topic: 'hr', subtopic: 'training' },
  { level: 'gcse', subject: 'business', topic: 'hr', subtopic: 'motivation' },
  { level: 'gcse', subject: 'business', topic: 'hr', subtopic: 'organisational-structure' },
  { level: 'gcse', subject: 'business', topic: 'external', subtopic: 'business-growth' },
  { level: 'gcse', subject: 'business', topic: 'external', subtopic: 'globalisation' },
  { level: 'gcse', subject: 'business', topic: 'external', subtopic: 'ethics' },
  { level: 'gcse', subject: 'business', topic: 'external', subtopic: 'environment' },
  { level: 'gcse', subject: 'business', topic: 'external', subtopic: 'economic-climate' },
  { level: 'gcse', subject: 'business', topic: 'external', subtopic: 'competition' },

  // ===========================================
  // GCSE ECONOMICS (~40 subtopics)
  // ===========================================
  { level: 'gcse', subject: 'economics', topic: 'introduction', subtopic: 'basic-economic-problem' },
  { level: 'gcse', subject: 'economics', topic: 'introduction', subtopic: 'economic-resources' },
  { level: 'gcse', subject: 'economics', topic: 'introduction', subtopic: 'opportunity-cost' },
  { level: 'gcse', subject: 'economics', topic: 'introduction', subtopic: 'production-possibility' },
  { level: 'gcse', subject: 'economics', topic: 'markets', subtopic: 'demand' },
  { level: 'gcse', subject: 'economics', topic: 'markets', subtopic: 'supply' },
  { level: 'gcse', subject: 'economics', topic: 'markets', subtopic: 'price-determination' },
  { level: 'gcse', subject: 'economics', topic: 'markets', subtopic: 'price-elasticity' },
  { level: 'gcse', subject: 'economics', topic: 'markets', subtopic: 'market-failure' },
  { level: 'gcse', subject: 'economics', topic: 'markets', subtopic: 'externalities' },
  { level: 'gcse', subject: 'economics', topic: 'markets', subtopic: 'government-intervention' },
  { level: 'gcse', subject: 'economics', topic: 'business', subtopic: 'business-costs' },
  { level: 'gcse', subject: 'economics', topic: 'business', subtopic: 'business-revenue' },
  { level: 'gcse', subject: 'economics', topic: 'business', subtopic: 'profit' },
  { level: 'gcse', subject: 'economics', topic: 'business', subtopic: 'market-structures' },
  { level: 'gcse', subject: 'economics', topic: 'business', subtopic: 'competition' },
  { level: 'gcse', subject: 'economics', topic: 'business', subtopic: 'monopoly' },
  { level: 'gcse', subject: 'economics', topic: 'labour', subtopic: 'labour-market' },
  { level: 'gcse', subject: 'economics', topic: 'labour', subtopic: 'wages' },
  { level: 'gcse', subject: 'economics', topic: 'labour', subtopic: 'unemployment' },
  { level: 'gcse', subject: 'economics', topic: 'macro', subtopic: 'economic-growth' },
  { level: 'gcse', subject: 'economics', topic: 'macro', subtopic: 'inflation' },
  { level: 'gcse', subject: 'economics', topic: 'macro', subtopic: 'gdp' },
  { level: 'gcse', subject: 'economics', topic: 'macro', subtopic: 'business-cycle' },
  { level: 'gcse', subject: 'economics', topic: 'macro', subtopic: 'living-standards' },
  { level: 'gcse', subject: 'economics', topic: 'government', subtopic: 'fiscal-policy' },
  { level: 'gcse', subject: 'economics', topic: 'government', subtopic: 'monetary-policy' },
  { level: 'gcse', subject: 'economics', topic: 'government', subtopic: 'supply-side-policy' },
  { level: 'gcse', subject: 'economics', topic: 'government', subtopic: 'taxation' },
  { level: 'gcse', subject: 'economics', topic: 'government', subtopic: 'government-spending' },
  { level: 'gcse', subject: 'economics', topic: 'international', subtopic: 'international-trade' },
  { level: 'gcse', subject: 'economics', topic: 'international', subtopic: 'exchange-rates' },
  { level: 'gcse', subject: 'economics', topic: 'international', subtopic: 'balance-of-payments' },
  { level: 'gcse', subject: 'economics', topic: 'international', subtopic: 'globalisation' },

  // ===========================================
  // GCSE PSYCHOLOGY (~45 subtopics)
  // ===========================================
  { level: 'gcse', subject: 'psychology', topic: 'memory', subtopic: 'memory-models' },
  { level: 'gcse', subject: 'psychology', topic: 'memory', subtopic: 'multi-store-model' },
  { level: 'gcse', subject: 'psychology', topic: 'memory', subtopic: 'working-memory' },
  { level: 'gcse', subject: 'psychology', topic: 'memory', subtopic: 'forgetting' },
  { level: 'gcse', subject: 'psychology', topic: 'memory', subtopic: 'eyewitness-testimony' },
  { level: 'gcse', subject: 'psychology', topic: 'memory', subtopic: 'cognitive-interview' },
  { level: 'gcse', subject: 'psychology', topic: 'perception', subtopic: 'sensation-perception' },
  { level: 'gcse', subject: 'psychology', topic: 'perception', subtopic: 'visual-illusions' },
  { level: 'gcse', subject: 'psychology', topic: 'perception', subtopic: 'depth-perception' },
  { level: 'gcse', subject: 'psychology', topic: 'perception', subtopic: 'visual-constancies' },
  { level: 'gcse', subject: 'psychology', topic: 'perception', subtopic: 'gestalt-theory' },
  { level: 'gcse', subject: 'psychology', topic: 'development', subtopic: 'brain-development' },
  { level: 'gcse', subject: 'psychology', topic: 'development', subtopic: 'piaget-theory' },
  { level: 'gcse', subject: 'psychology', topic: 'development', subtopic: 'stages-of-development' },
  { level: 'gcse', subject: 'psychology', topic: 'development', subtopic: 'dweck-mindset' },
  { level: 'gcse', subject: 'psychology', topic: 'development', subtopic: 'learning-styles' },
  { level: 'gcse', subject: 'psychology', topic: 'research-methods', subtopic: 'experiments' },
  { level: 'gcse', subject: 'psychology', topic: 'research-methods', subtopic: 'observations' },
  { level: 'gcse', subject: 'psychology', topic: 'research-methods', subtopic: 'questionnaires' },
  { level: 'gcse', subject: 'psychology', topic: 'research-methods', subtopic: 'interviews' },
  { level: 'gcse', subject: 'psychology', topic: 'research-methods', subtopic: 'correlations' },
  { level: 'gcse', subject: 'psychology', topic: 'research-methods', subtopic: 'case-studies' },
  { level: 'gcse', subject: 'psychology', topic: 'research-methods', subtopic: 'ethics' },
  { level: 'gcse', subject: 'psychology', topic: 'research-methods', subtopic: 'sampling' },
  { level: 'gcse', subject: 'psychology', topic: 'social', subtopic: 'conformity' },
  { level: 'gcse', subject: 'psychology', topic: 'social', subtopic: 'obedience' },
  { level: 'gcse', subject: 'psychology', topic: 'social', subtopic: 'milgram-experiment' },
  { level: 'gcse', subject: 'psychology', topic: 'social', subtopic: 'asch-experiment' },
  { level: 'gcse', subject: 'psychology', topic: 'social', subtopic: 'bystander-effect' },
  { level: 'gcse', subject: 'psychology', topic: 'social', subtopic: 'pro-social-behaviour' },
  { level: 'gcse', subject: 'psychology', topic: 'social', subtopic: 'crowd-behaviour' },
  { level: 'gcse', subject: 'psychology', topic: 'language', subtopic: 'language-development' },
  { level: 'gcse', subject: 'psychology', topic: 'language', subtopic: 'language-theories' },
  { level: 'gcse', subject: 'psychology', topic: 'brain', subtopic: 'brain-structure' },
  { level: 'gcse', subject: 'psychology', topic: 'brain', subtopic: 'neurons' },
  { level: 'gcse', subject: 'psychology', topic: 'brain', subtopic: 'neurotransmitters' },
  { level: 'gcse', subject: 'psychology', topic: 'psychological-problems', subtopic: 'depression' },
  { level: 'gcse', subject: 'psychology', topic: 'psychological-problems', subtopic: 'addiction' },

  // ===========================================
  // GCSE RELIGIOUS STUDIES (~40 subtopics)
  // ===========================================
  { level: 'gcse', subject: 'religious-studies', topic: 'christianity', subtopic: 'christian-beliefs' },
  { level: 'gcse', subject: 'religious-studies', topic: 'christianity', subtopic: 'trinity' },
  { level: 'gcse', subject: 'religious-studies', topic: 'christianity', subtopic: 'creation' },
  { level: 'gcse', subject: 'religious-studies', topic: 'christianity', subtopic: 'incarnation' },
  { level: 'gcse', subject: 'religious-studies', topic: 'christianity', subtopic: 'crucifixion' },
  { level: 'gcse', subject: 'religious-studies', topic: 'christianity', subtopic: 'resurrection' },
  { level: 'gcse', subject: 'religious-studies', topic: 'christianity', subtopic: 'salvation' },
  { level: 'gcse', subject: 'religious-studies', topic: 'christianity', subtopic: 'afterlife' },
  { level: 'gcse', subject: 'religious-studies', topic: 'christianity', subtopic: 'christian-practices' },
  { level: 'gcse', subject: 'religious-studies', topic: 'christianity', subtopic: 'worship' },
  { level: 'gcse', subject: 'religious-studies', topic: 'christianity', subtopic: 'prayer' },
  { level: 'gcse', subject: 'religious-studies', topic: 'christianity', subtopic: 'sacraments' },
  { level: 'gcse', subject: 'religious-studies', topic: 'christianity', subtopic: 'pilgrimage' },
  { level: 'gcse', subject: 'religious-studies', topic: 'islam', subtopic: 'islamic-beliefs' },
  { level: 'gcse', subject: 'religious-studies', topic: 'islam', subtopic: 'six-articles' },
  { level: 'gcse', subject: 'religious-studies', topic: 'islam', subtopic: 'five-pillars' },
  { level: 'gcse', subject: 'religious-studies', topic: 'islam', subtopic: 'tawhid' },
  { level: 'gcse', subject: 'religious-studies', topic: 'islam', subtopic: 'prophethood' },
  { level: 'gcse', subject: 'religious-studies', topic: 'islam', subtopic: 'angels' },
  { level: 'gcse', subject: 'religious-studies', topic: 'islam', subtopic: 'akhirah' },
  { level: 'gcse', subject: 'religious-studies', topic: 'islam', subtopic: 'islamic-practices' },
  { level: 'gcse', subject: 'religious-studies', topic: 'themes', subtopic: 'relationships-families' },
  { level: 'gcse', subject: 'religious-studies', topic: 'themes', subtopic: 'marriage-divorce' },
  { level: 'gcse', subject: 'religious-studies', topic: 'themes', subtopic: 'gender-equality' },
  { level: 'gcse', subject: 'religious-studies', topic: 'themes', subtopic: 'religion-life-death' },
  { level: 'gcse', subject: 'religious-studies', topic: 'themes', subtopic: 'abortion' },
  { level: 'gcse', subject: 'religious-studies', topic: 'themes', subtopic: 'euthanasia' },
  { level: 'gcse', subject: 'religious-studies', topic: 'themes', subtopic: 'animal-rights' },
  { level: 'gcse', subject: 'religious-studies', topic: 'themes', subtopic: 'crime-punishment' },
  { level: 'gcse', subject: 'religious-studies', topic: 'themes', subtopic: 'peace-conflict' },
  { level: 'gcse', subject: 'religious-studies', topic: 'themes', subtopic: 'social-justice' },
  { level: 'gcse', subject: 'religious-studies', topic: 'themes', subtopic: 'human-rights' },

  // ===========================================
  // GCSE FRENCH (~35 subtopics)
  // ===========================================
  { level: 'gcse', subject: 'french', topic: 'grammar', subtopic: 'present-tense' },
  { level: 'gcse', subject: 'french', topic: 'grammar', subtopic: 'past-tense' },
  { level: 'gcse', subject: 'french', topic: 'grammar', subtopic: 'future-tense' },
  { level: 'gcse', subject: 'french', topic: 'grammar', subtopic: 'imperfect-tense' },
  { level: 'gcse', subject: 'french', topic: 'grammar', subtopic: 'conditional-tense' },
  { level: 'gcse', subject: 'french', topic: 'grammar', subtopic: 'subjunctive' },
  { level: 'gcse', subject: 'french', topic: 'grammar', subtopic: 'negatives' },
  { level: 'gcse', subject: 'french', topic: 'grammar', subtopic: 'pronouns' },
  { level: 'gcse', subject: 'french', topic: 'grammar', subtopic: 'adjectives' },
  { level: 'gcse', subject: 'french', topic: 'grammar', subtopic: 'adverbs' },
  { level: 'gcse', subject: 'french', topic: 'grammar', subtopic: 'prepositions' },
  { level: 'gcse', subject: 'french', topic: 'grammar', subtopic: 'comparatives-superlatives' },
  { level: 'gcse', subject: 'french', topic: 'vocabulary', subtopic: 'family-relationships' },
  { level: 'gcse', subject: 'french', topic: 'vocabulary', subtopic: 'free-time' },
  { level: 'gcse', subject: 'french', topic: 'vocabulary', subtopic: 'technology' },
  { level: 'gcse', subject: 'french', topic: 'vocabulary', subtopic: 'school' },
  { level: 'gcse', subject: 'french', topic: 'vocabulary', subtopic: 'work' },
  { level: 'gcse', subject: 'french', topic: 'vocabulary', subtopic: 'travel-tourism' },
  { level: 'gcse', subject: 'french', topic: 'vocabulary', subtopic: 'environment' },
  { level: 'gcse', subject: 'french', topic: 'vocabulary', subtopic: 'health' },
  { level: 'gcse', subject: 'french', topic: 'vocabulary', subtopic: 'social-issues' },
  { level: 'gcse', subject: 'french', topic: 'skills', subtopic: 'listening' },
  { level: 'gcse', subject: 'french', topic: 'skills', subtopic: 'speaking' },
  { level: 'gcse', subject: 'french', topic: 'skills', subtopic: 'reading' },
  { level: 'gcse', subject: 'french', topic: 'skills', subtopic: 'writing' },
  { level: 'gcse', subject: 'french', topic: 'skills', subtopic: 'translation' },

  // ===========================================
  // GCSE SPANISH (~35 subtopics)
  // ===========================================
  { level: 'gcse', subject: 'spanish', topic: 'grammar', subtopic: 'present-tense' },
  { level: 'gcse', subject: 'spanish', topic: 'grammar', subtopic: 'preterite-tense' },
  { level: 'gcse', subject: 'spanish', topic: 'grammar', subtopic: 'imperfect-tense' },
  { level: 'gcse', subject: 'spanish', topic: 'grammar', subtopic: 'future-tense' },
  { level: 'gcse', subject: 'spanish', topic: 'grammar', subtopic: 'conditional-tense' },
  { level: 'gcse', subject: 'spanish', topic: 'grammar', subtopic: 'subjunctive' },
  { level: 'gcse', subject: 'spanish', topic: 'grammar', subtopic: 'ser-estar' },
  { level: 'gcse', subject: 'spanish', topic: 'grammar', subtopic: 'negatives' },
  { level: 'gcse', subject: 'spanish', topic: 'grammar', subtopic: 'pronouns' },
  { level: 'gcse', subject: 'spanish', topic: 'grammar', subtopic: 'adjectives' },
  { level: 'gcse', subject: 'spanish', topic: 'grammar', subtopic: 'adverbs' },
  { level: 'gcse', subject: 'spanish', topic: 'grammar', subtopic: 'comparatives-superlatives' },
  { level: 'gcse', subject: 'spanish', topic: 'vocabulary', subtopic: 'family-relationships' },
  { level: 'gcse', subject: 'spanish', topic: 'vocabulary', subtopic: 'free-time' },
  { level: 'gcse', subject: 'spanish', topic: 'vocabulary', subtopic: 'technology' },
  { level: 'gcse', subject: 'spanish', topic: 'vocabulary', subtopic: 'school' },
  { level: 'gcse', subject: 'spanish', topic: 'vocabulary', subtopic: 'work' },
  { level: 'gcse', subject: 'spanish', topic: 'vocabulary', subtopic: 'travel-tourism' },
  { level: 'gcse', subject: 'spanish', topic: 'vocabulary', subtopic: 'environment' },
  { level: 'gcse', subject: 'spanish', topic: 'vocabulary', subtopic: 'health' },
  { level: 'gcse', subject: 'spanish', topic: 'vocabulary', subtopic: 'social-issues' },
  { level: 'gcse', subject: 'spanish', topic: 'skills', subtopic: 'listening' },
  { level: 'gcse', subject: 'spanish', topic: 'skills', subtopic: 'speaking' },
  { level: 'gcse', subject: 'spanish', topic: 'skills', subtopic: 'reading' },
  { level: 'gcse', subject: 'spanish', topic: 'skills', subtopic: 'writing' },
  { level: 'gcse', subject: 'spanish', topic: 'skills', subtopic: 'translation' },

  // ===========================================
  // A-LEVEL BIOLOGY (~70 subtopics)
  // ===========================================
  { level: 'a-level', subject: 'biology', topic: 'cells', subtopic: 'cell-structure' },
  { level: 'a-level', subject: 'biology', topic: 'cells', subtopic: 'cell-membranes' },
  { level: 'a-level', subject: 'biology', topic: 'cells', subtopic: 'cell-division' },
  { level: 'a-level', subject: 'biology', topic: 'cells', subtopic: 'cell-cycle' },
  { level: 'a-level', subject: 'biology', topic: 'cells', subtopic: 'mitosis' },
  { level: 'a-level', subject: 'biology', topic: 'cells', subtopic: 'meiosis' },
  { level: 'a-level', subject: 'biology', topic: 'cells', subtopic: 'transport-across-membranes' },
  { level: 'a-level', subject: 'biology', topic: 'cells', subtopic: 'cell-recognition' },
  { level: 'a-level', subject: 'biology', topic: 'molecules', subtopic: 'biological-molecules' },
  { level: 'a-level', subject: 'biology', topic: 'molecules', subtopic: 'carbohydrates' },
  { level: 'a-level', subject: 'biology', topic: 'molecules', subtopic: 'lipids' },
  { level: 'a-level', subject: 'biology', topic: 'molecules', subtopic: 'proteins' },
  { level: 'a-level', subject: 'biology', topic: 'molecules', subtopic: 'enzymes' },
  { level: 'a-level', subject: 'biology', topic: 'molecules', subtopic: 'nucleic-acids' },
  { level: 'a-level', subject: 'biology', topic: 'molecules', subtopic: 'dna-replication' },
  { level: 'a-level', subject: 'biology', topic: 'molecules', subtopic: 'atp' },
  { level: 'a-level', subject: 'biology', topic: 'molecules', subtopic: 'water' },
  { level: 'a-level', subject: 'biology', topic: 'exchange', subtopic: 'gas-exchange' },
  { level: 'a-level', subject: 'biology', topic: 'exchange', subtopic: 'digestion-absorption' },
  { level: 'a-level', subject: 'biology', topic: 'exchange', subtopic: 'mass-transport' },
  { level: 'a-level', subject: 'biology', topic: 'exchange', subtopic: 'circulatory-system' },
  { level: 'a-level', subject: 'biology', topic: 'exchange', subtopic: 'haemoglobin' },
  { level: 'a-level', subject: 'biology', topic: 'genetics', subtopic: 'genetic-information' },
  { level: 'a-level', subject: 'biology', topic: 'genetics', subtopic: 'protein-synthesis' },
  { level: 'a-level', subject: 'biology', topic: 'genetics', subtopic: 'transcription' },
  { level: 'a-level', subject: 'biology', topic: 'genetics', subtopic: 'translation' },
  { level: 'a-level', subject: 'biology', topic: 'genetics', subtopic: 'mutations' },
  { level: 'a-level', subject: 'biology', topic: 'genetics', subtopic: 'genetic-inheritance' },
  { level: 'a-level', subject: 'biology', topic: 'genetics', subtopic: 'gene-expression' },
  { level: 'a-level', subject: 'biology', topic: 'genetics', subtopic: 'dihybrid-crosses' },
  { level: 'a-level', subject: 'biology', topic: 'genetics', subtopic: 'chi-squared' },
  { level: 'a-level', subject: 'biology', topic: 'energy', subtopic: 'photosynthesis' },
  { level: 'a-level', subject: 'biology', topic: 'energy', subtopic: 'light-dependent-reactions' },
  { level: 'a-level', subject: 'biology', topic: 'energy', subtopic: 'light-independent-reactions' },
  { level: 'a-level', subject: 'biology', topic: 'energy', subtopic: 'respiration' },
  { level: 'a-level', subject: 'biology', topic: 'energy', subtopic: 'glycolysis' },
  { level: 'a-level', subject: 'biology', topic: 'energy', subtopic: 'krebs-cycle' },
  { level: 'a-level', subject: 'biology', topic: 'energy', subtopic: 'oxidative-phosphorylation' },
  { level: 'a-level', subject: 'biology', topic: 'energy', subtopic: 'anaerobic-respiration' },
  { level: 'a-level', subject: 'biology', topic: 'organisms', subtopic: 'nervous-system' },
  { level: 'a-level', subject: 'biology', topic: 'organisms', subtopic: 'nerve-impulses' },
  { level: 'a-level', subject: 'biology', topic: 'organisms', subtopic: 'synapses' },
  { level: 'a-level', subject: 'biology', topic: 'organisms', subtopic: 'muscle-contraction' },
  { level: 'a-level', subject: 'biology', topic: 'organisms', subtopic: 'homeostasis' },
  { level: 'a-level', subject: 'biology', topic: 'organisms', subtopic: 'hormones' },
  { level: 'a-level', subject: 'biology', topic: 'organisms', subtopic: 'kidney-function' },
  { level: 'a-level', subject: 'biology', topic: 'control', subtopic: 'plant-responses' },
  { level: 'a-level', subject: 'biology', topic: 'control', subtopic: 'auxins' },
  { level: 'a-level', subject: 'biology', topic: 'control', subtopic: 'gibberellins' },
  { level: 'a-level', subject: 'biology', topic: 'genetics-evolution', subtopic: 'evolution' },
  { level: 'a-level', subject: 'biology', topic: 'genetics-evolution', subtopic: 'natural-selection' },
  { level: 'a-level', subject: 'biology', topic: 'genetics-evolution', subtopic: 'speciation' },
  { level: 'a-level', subject: 'biology', topic: 'genetics-evolution', subtopic: 'genetic-drift' },
  { level: 'a-level', subject: 'biology', topic: 'genetics-evolution', subtopic: 'hardy-weinberg' },
  { level: 'a-level', subject: 'biology', topic: 'ecology', subtopic: 'ecosystems' },
  { level: 'a-level', subject: 'biology', topic: 'ecology', subtopic: 'populations' },
  { level: 'a-level', subject: 'biology', topic: 'ecology', subtopic: 'succession' },
  { level: 'a-level', subject: 'biology', topic: 'ecology', subtopic: 'nutrient-cycles' },
  { level: 'a-level', subject: 'biology', topic: 'ecology', subtopic: 'energy-transfer' },
  { level: 'a-level', subject: 'biology', topic: 'immunity', subtopic: 'immune-response' },
  { level: 'a-level', subject: 'biology', topic: 'immunity', subtopic: 'antibodies' },
  { level: 'a-level', subject: 'biology', topic: 'immunity', subtopic: 'vaccination' },
  { level: 'a-level', subject: 'biology', topic: 'immunity', subtopic: 'hiv-aids' },
  { level: 'a-level', subject: 'biology', topic: 'biotechnology', subtopic: 'dna-technology' },
  { level: 'a-level', subject: 'biology', topic: 'biotechnology', subtopic: 'genetic-engineering' },
  { level: 'a-level', subject: 'biology', topic: 'biotechnology', subtopic: 'pcr' },
  { level: 'a-level', subject: 'biology', topic: 'biotechnology', subtopic: 'electrophoresis' },
  { level: 'a-level', subject: 'biology', topic: 'biotechnology', subtopic: 'gene-therapy' },

  // ===========================================
  // A-LEVEL ENGLISH LITERATURE (~50 subtopics)
  // ===========================================
  { level: 'a-level', subject: 'english-literature', topic: 'shakespeare', subtopic: 'othello' },
  { level: 'a-level', subject: 'english-literature', topic: 'shakespeare', subtopic: 'hamlet' },
  { level: 'a-level', subject: 'english-literature', topic: 'shakespeare', subtopic: 'king-lear' },
  { level: 'a-level', subject: 'english-literature', topic: 'shakespeare', subtopic: 'the-tempest' },
  { level: 'a-level', subject: 'english-literature', topic: 'shakespeare', subtopic: 'measure-for-measure' },
  { level: 'a-level', subject: 'english-literature', topic: 'shakespeare', subtopic: 'twelfth-night' },
  { level: 'a-level', subject: 'english-literature', topic: 'poetry', subtopic: 'romantic-poetry' },
  { level: 'a-level', subject: 'english-literature', topic: 'poetry', subtopic: 'war-poetry' },
  { level: 'a-level', subject: 'english-literature', topic: 'poetry', subtopic: 'keats' },
  { level: 'a-level', subject: 'english-literature', topic: 'poetry', subtopic: 'blake' },
  { level: 'a-level', subject: 'english-literature', topic: 'poetry', subtopic: 'wordsworth' },
  { level: 'a-level', subject: 'english-literature', topic: 'poetry', subtopic: 'shelley' },
  { level: 'a-level', subject: 'english-literature', topic: 'poetry', subtopic: 'wilfred-owen' },
  { level: 'a-level', subject: 'english-literature', topic: 'poetry', subtopic: 'seamus-heaney' },
  { level: 'a-level', subject: 'english-literature', topic: 'poetry', subtopic: 'sylvia-plath' },
  { level: 'a-level', subject: 'english-literature', topic: 'poetry', subtopic: 'ted-hughes' },
  { level: 'a-level', subject: 'english-literature', topic: 'prose', subtopic: 'the-handmaids-tale' },
  { level: 'a-level', subject: 'english-literature', topic: 'prose', subtopic: 'frankenstein' },
  { level: 'a-level', subject: 'english-literature', topic: 'prose', subtopic: 'wuthering-heights' },
  { level: 'a-level', subject: 'english-literature', topic: 'prose', subtopic: 'great-gatsby' },
  { level: 'a-level', subject: 'english-literature', topic: 'prose', subtopic: 'the-kite-runner' },
  { level: 'a-level', subject: 'english-literature', topic: 'prose', subtopic: 'atonement' },
  { level: 'a-level', subject: 'english-literature', topic: 'prose', subtopic: 'tess-of-the-durbervilles' },
  { level: 'a-level', subject: 'english-literature', topic: 'prose', subtopic: 'brighton-rock' },
  { level: 'a-level', subject: 'english-literature', topic: 'drama', subtopic: 'streetcar-named-desire' },
  { level: 'a-level', subject: 'english-literature', topic: 'drama', subtopic: 'death-of-a-salesman' },
  { level: 'a-level', subject: 'english-literature', topic: 'drama', subtopic: 'waiting-for-godot' },
  { level: 'a-level', subject: 'english-literature', topic: 'drama', subtopic: 'the-importance-of-being-earnest' },
  { level: 'a-level', subject: 'english-literature', topic: 'drama', subtopic: 'doctor-faustus' },
  { level: 'a-level', subject: 'english-literature', topic: 'skills', subtopic: 'literary-criticism' },
  { level: 'a-level', subject: 'english-literature', topic: 'skills', subtopic: 'comparative-analysis' },
  { level: 'a-level', subject: 'english-literature', topic: 'skills', subtopic: 'context-analysis' },
  { level: 'a-level', subject: 'english-literature', topic: 'skills', subtopic: 'feminist-criticism' },
  { level: 'a-level', subject: 'english-literature', topic: 'skills', subtopic: 'marxist-criticism' },
  { level: 'a-level', subject: 'english-literature', topic: 'skills', subtopic: 'postcolonial-criticism' },
  { level: 'a-level', subject: 'english-literature', topic: 'gothic', subtopic: 'gothic-literature' },
  { level: 'a-level', subject: 'english-literature', topic: 'gothic', subtopic: 'gothic-conventions' },
  { level: 'a-level', subject: 'english-literature', topic: 'tragedy', subtopic: 'tragedy-genre' },
  { level: 'a-level', subject: 'english-literature', topic: 'tragedy', subtopic: 'tragic-heroes' },

  // ===========================================
  // A-LEVEL HISTORY (~55 subtopics)
  // ===========================================
  { level: 'a-level', subject: 'history', topic: 'tudors', subtopic: 'henry-vii' },
  { level: 'a-level', subject: 'history', topic: 'tudors', subtopic: 'henry-viii' },
  { level: 'a-level', subject: 'history', topic: 'tudors', subtopic: 'english-reformation' },
  { level: 'a-level', subject: 'history', topic: 'tudors', subtopic: 'elizabeth-i' },
  { level: 'a-level', subject: 'history', topic: 'tudors', subtopic: 'tudor-government' },
  { level: 'a-level', subject: 'history', topic: 'tudors', subtopic: 'tudor-economy' },
  { level: 'a-level', subject: 'history', topic: 'tudors', subtopic: 'tudor-religion' },
  { level: 'a-level', subject: 'history', topic: 'stuarts', subtopic: 'james-i' },
  { level: 'a-level', subject: 'history', topic: 'stuarts', subtopic: 'charles-i' },
  { level: 'a-level', subject: 'history', topic: 'stuarts', subtopic: 'english-civil-war' },
  { level: 'a-level', subject: 'history', topic: 'stuarts', subtopic: 'cromwell' },
  { level: 'a-level', subject: 'history', topic: 'stuarts', subtopic: 'restoration' },
  { level: 'a-level', subject: 'history', topic: 'stuarts', subtopic: 'glorious-revolution' },
  { level: 'a-level', subject: 'history', topic: 'britain-1900-1951', subtopic: 'liberal-reforms' },
  { level: 'a-level', subject: 'history', topic: 'britain-1900-1951', subtopic: 'votes-for-women' },
  { level: 'a-level', subject: 'history', topic: 'britain-1900-1951', subtopic: 'wwi-home-front' },
  { level: 'a-level', subject: 'history', topic: 'britain-1900-1951', subtopic: 'interwar-britain' },
  { level: 'a-level', subject: 'history', topic: 'britain-1900-1951', subtopic: 'wwii-britain' },
  { level: 'a-level', subject: 'history', topic: 'britain-1900-1951', subtopic: 'welfare-state' },
  { level: 'a-level', subject: 'history', topic: 'russia', subtopic: 'tsarist-russia' },
  { level: 'a-level', subject: 'history', topic: 'russia', subtopic: 'russian-revolution' },
  { level: 'a-level', subject: 'history', topic: 'russia', subtopic: 'lenin' },
  { level: 'a-level', subject: 'history', topic: 'russia', subtopic: 'stalin' },
  { level: 'a-level', subject: 'history', topic: 'russia', subtopic: 'stalinist-russia' },
  { level: 'a-level', subject: 'history', topic: 'russia', subtopic: 'cold-war-russia' },
  { level: 'a-level', subject: 'history', topic: 'america', subtopic: 'american-civil-war' },
  { level: 'a-level', subject: 'history', topic: 'america', subtopic: 'gilded-age' },
  { level: 'a-level', subject: 'history', topic: 'america', subtopic: 'progressivism' },
  { level: 'a-level', subject: 'history', topic: 'america', subtopic: 'roaring-twenties' },
  { level: 'a-level', subject: 'history', topic: 'america', subtopic: 'great-depression-usa' },
  { level: 'a-level', subject: 'history', topic: 'america', subtopic: 'new-deal' },
  { level: 'a-level', subject: 'history', topic: 'america', subtopic: 'civil-rights-movement' },
  { level: 'a-level', subject: 'history', topic: 'germany', subtopic: 'unification-germany' },
  { level: 'a-level', subject: 'history', topic: 'germany', subtopic: 'imperial-germany' },
  { level: 'a-level', subject: 'history', topic: 'germany', subtopic: 'weimar-republic' },
  { level: 'a-level', subject: 'history', topic: 'germany', subtopic: 'nazi-germany' },
  { level: 'a-level', subject: 'history', topic: 'germany', subtopic: 'nazi-foreign-policy' },
  { level: 'a-level', subject: 'history', topic: 'germany', subtopic: 'holocaust' },
  { level: 'a-level', subject: 'history', topic: 'international', subtopic: 'causes-of-wwi' },
  { level: 'a-level', subject: 'history', topic: 'international', subtopic: 'interwar-period' },
  { level: 'a-level', subject: 'history', topic: 'international', subtopic: 'causes-of-wwii' },
  { level: 'a-level', subject: 'history', topic: 'international', subtopic: 'cold-war' },
  { level: 'a-level', subject: 'history', topic: 'international', subtopic: 'decolonisation' },

  // ===========================================
  // A-LEVEL GEOGRAPHY (~50 subtopics)
  // ===========================================
  { level: 'a-level', subject: 'geography', topic: 'physical', subtopic: 'plate-tectonics' },
  { level: 'a-level', subject: 'geography', topic: 'physical', subtopic: 'volcanic-hazards' },
  { level: 'a-level', subject: 'geography', topic: 'physical', subtopic: 'seismic-hazards' },
  { level: 'a-level', subject: 'geography', topic: 'physical', subtopic: 'coastal-systems' },
  { level: 'a-level', subject: 'geography', topic: 'physical', subtopic: 'coastal-processes' },
  { level: 'a-level', subject: 'geography', topic: 'physical', subtopic: 'coastal-management' },
  { level: 'a-level', subject: 'geography', topic: 'physical', subtopic: 'glacial-systems' },
  { level: 'a-level', subject: 'geography', topic: 'physical', subtopic: 'glacial-processes' },
  { level: 'a-level', subject: 'geography', topic: 'physical', subtopic: 'periglacial-environments' },
  { level: 'a-level', subject: 'geography', topic: 'physical', subtopic: 'water-cycle' },
  { level: 'a-level', subject: 'geography', topic: 'physical', subtopic: 'carbon-cycle' },
  { level: 'a-level', subject: 'geography', topic: 'physical', subtopic: 'climate-change' },
  { level: 'a-level', subject: 'geography', topic: 'human', subtopic: 'globalisation' },
  { level: 'a-level', subject: 'geography', topic: 'human', subtopic: 'global-governance' },
  { level: 'a-level', subject: 'geography', topic: 'human', subtopic: 'changing-places' },
  { level: 'a-level', subject: 'geography', topic: 'human', subtopic: 'place-identity' },
  { level: 'a-level', subject: 'geography', topic: 'human', subtopic: 'population-change' },
  { level: 'a-level', subject: 'geography', topic: 'human', subtopic: 'migration' },
  { level: 'a-level', subject: 'geography', topic: 'human', subtopic: 'urbanisation' },
  { level: 'a-level', subject: 'geography', topic: 'human', subtopic: 'urban-change' },
  { level: 'a-level', subject: 'geography', topic: 'human', subtopic: 'regeneration' },
  { level: 'a-level', subject: 'geography', topic: 'human', subtopic: 'resource-security' },
  { level: 'a-level', subject: 'geography', topic: 'human', subtopic: 'water-insecurity' },
  { level: 'a-level', subject: 'geography', topic: 'human', subtopic: 'energy-security' },
  { level: 'a-level', subject: 'geography', topic: 'human', subtopic: 'food-security' },
  { level: 'a-level', subject: 'geography', topic: 'human', subtopic: 'health-human-rights' },
  { level: 'a-level', subject: 'geography', topic: 'human', subtopic: 'superpowers' },
  { level: 'a-level', subject: 'geography', topic: 'human', subtopic: 'development' },
  { level: 'a-level', subject: 'geography', topic: 'fieldwork', subtopic: 'nea-skills' },
  { level: 'a-level', subject: 'geography', topic: 'fieldwork', subtopic: 'statistical-analysis' },

  // ===========================================
  // A-LEVEL COMPUTER SCIENCE (~60 subtopics)
  // ===========================================
  { level: 'a-level', subject: 'computer-science', topic: 'fundamentals', subtopic: 'data-representation' },
  { level: 'a-level', subject: 'computer-science', topic: 'fundamentals', subtopic: 'number-systems' },
  { level: 'a-level', subject: 'computer-science', topic: 'fundamentals', subtopic: 'boolean-algebra' },
  { level: 'a-level', subject: 'computer-science', topic: 'fundamentals', subtopic: 'logic-gates' },
  { level: 'a-level', subject: 'computer-science', topic: 'fundamentals', subtopic: 'karnaugh-maps' },
  { level: 'a-level', subject: 'computer-science', topic: 'systems', subtopic: 'processor-architecture' },
  { level: 'a-level', subject: 'computer-science', topic: 'systems', subtopic: 'instruction-sets' },
  { level: 'a-level', subject: 'computer-science', topic: 'systems', subtopic: 'assembly-language' },
  { level: 'a-level', subject: 'computer-science', topic: 'systems', subtopic: 'operating-systems' },
  { level: 'a-level', subject: 'computer-science', topic: 'systems', subtopic: 'scheduling' },
  { level: 'a-level', subject: 'computer-science', topic: 'systems', subtopic: 'memory-management' },
  { level: 'a-level', subject: 'computer-science', topic: 'systems', subtopic: 'virtualisation' },
  { level: 'a-level', subject: 'computer-science', topic: 'networks', subtopic: 'network-fundamentals' },
  { level: 'a-level', subject: 'computer-science', topic: 'networks', subtopic: 'osi-model' },
  { level: 'a-level', subject: 'computer-science', topic: 'networks', subtopic: 'tcp-ip-stack' },
  { level: 'a-level', subject: 'computer-science', topic: 'networks', subtopic: 'routing' },
  { level: 'a-level', subject: 'computer-science', topic: 'networks', subtopic: 'network-security' },
  { level: 'a-level', subject: 'computer-science', topic: 'networks', subtopic: 'firewalls' },
  { level: 'a-level', subject: 'computer-science', topic: 'data-structures', subtopic: 'arrays' },
  { level: 'a-level', subject: 'computer-science', topic: 'data-structures', subtopic: 'linked-lists' },
  { level: 'a-level', subject: 'computer-science', topic: 'data-structures', subtopic: 'stacks' },
  { level: 'a-level', subject: 'computer-science', topic: 'data-structures', subtopic: 'queues' },
  { level: 'a-level', subject: 'computer-science', topic: 'data-structures', subtopic: 'trees' },
  { level: 'a-level', subject: 'computer-science', topic: 'data-structures', subtopic: 'binary-trees' },
  { level: 'a-level', subject: 'computer-science', topic: 'data-structures', subtopic: 'graphs' },
  { level: 'a-level', subject: 'computer-science', topic: 'data-structures', subtopic: 'hash-tables' },
  { level: 'a-level', subject: 'computer-science', topic: 'algorithms', subtopic: 'algorithm-design' },
  { level: 'a-level', subject: 'computer-science', topic: 'algorithms', subtopic: 'time-complexity' },
  { level: 'a-level', subject: 'computer-science', topic: 'algorithms', subtopic: 'space-complexity' },
  { level: 'a-level', subject: 'computer-science', topic: 'algorithms', subtopic: 'sorting-algorithms' },
  { level: 'a-level', subject: 'computer-science', topic: 'algorithms', subtopic: 'searching-algorithms' },
  { level: 'a-level', subject: 'computer-science', topic: 'algorithms', subtopic: 'graph-traversal' },
  { level: 'a-level', subject: 'computer-science', topic: 'algorithms', subtopic: 'dijkstras-algorithm' },
  { level: 'a-level', subject: 'computer-science', topic: 'algorithms', subtopic: 'dynamic-programming' },
  { level: 'a-level', subject: 'computer-science', topic: 'algorithms', subtopic: 'recursion' },
  { level: 'a-level', subject: 'computer-science', topic: 'programming', subtopic: 'oop' },
  { level: 'a-level', subject: 'computer-science', topic: 'programming', subtopic: 'classes-objects' },
  { level: 'a-level', subject: 'computer-science', topic: 'programming', subtopic: 'inheritance' },
  { level: 'a-level', subject: 'computer-science', topic: 'programming', subtopic: 'polymorphism' },
  { level: 'a-level', subject: 'computer-science', topic: 'programming', subtopic: 'encapsulation' },
  { level: 'a-level', subject: 'computer-science', topic: 'programming', subtopic: 'functional-programming' },
  { level: 'a-level', subject: 'computer-science', topic: 'databases', subtopic: 'relational-databases' },
  { level: 'a-level', subject: 'computer-science', topic: 'databases', subtopic: 'sql' },
  { level: 'a-level', subject: 'computer-science', topic: 'databases', subtopic: 'normalisation' },
  { level: 'a-level', subject: 'computer-science', topic: 'databases', subtopic: 'entity-relationships' },
  { level: 'a-level', subject: 'computer-science', topic: 'theory', subtopic: 'finite-state-machines' },
  { level: 'a-level', subject: 'computer-science', topic: 'theory', subtopic: 'regular-expressions' },
  { level: 'a-level', subject: 'computer-science', topic: 'theory', subtopic: 'turing-machines' },
  { level: 'a-level', subject: 'computer-science', topic: 'theory', subtopic: 'halting-problem' },

  // ===========================================
  // A-LEVEL BUSINESS (~50 subtopics)
  // ===========================================
  { level: 'a-level', subject: 'business', topic: 'marketing', subtopic: 'marketing-objectives' },
  { level: 'a-level', subject: 'business', topic: 'marketing', subtopic: 'market-analysis' },
  { level: 'a-level', subject: 'business', topic: 'marketing', subtopic: 'marketing-strategy' },
  { level: 'a-level', subject: 'business', topic: 'marketing', subtopic: 'digital-marketing' },
  { level: 'a-level', subject: 'business', topic: 'marketing', subtopic: 'pricing-strategies' },
  { level: 'a-level', subject: 'business', topic: 'marketing', subtopic: 'promotional-mix' },
  { level: 'a-level', subject: 'business', topic: 'operations', subtopic: 'operations-objectives' },
  { level: 'a-level', subject: 'business', topic: 'operations', subtopic: 'capacity-utilisation' },
  { level: 'a-level', subject: 'business', topic: 'operations', subtopic: 'lean-production' },
  { level: 'a-level', subject: 'business', topic: 'operations', subtopic: 'quality-management' },
  { level: 'a-level', subject: 'business', topic: 'operations', subtopic: 'inventory-management' },
  { level: 'a-level', subject: 'business', topic: 'finance', subtopic: 'financial-objectives' },
  { level: 'a-level', subject: 'business', topic: 'finance', subtopic: 'financial-ratios' },
  { level: 'a-level', subject: 'business', topic: 'finance', subtopic: 'liquidity-ratios' },
  { level: 'a-level', subject: 'business', topic: 'finance', subtopic: 'gearing' },
  { level: 'a-level', subject: 'business', topic: 'finance', subtopic: 'investment-appraisal' },
  { level: 'a-level', subject: 'business', topic: 'finance', subtopic: 'budgeting' },
  { level: 'a-level', subject: 'business', topic: 'hr', subtopic: 'hr-objectives' },
  { level: 'a-level', subject: 'business', topic: 'hr', subtopic: 'workforce-planning' },
  { level: 'a-level', subject: 'business', topic: 'hr', subtopic: 'motivation-theory' },
  { level: 'a-level', subject: 'business', topic: 'hr', subtopic: 'leadership' },
  { level: 'a-level', subject: 'business', topic: 'hr', subtopic: 'employee-relations' },
  { level: 'a-level', subject: 'business', topic: 'strategy', subtopic: 'corporate-objectives' },
  { level: 'a-level', subject: 'business', topic: 'strategy', subtopic: 'strategic-analysis' },
  { level: 'a-level', subject: 'business', topic: 'strategy', subtopic: 'swot-analysis' },
  { level: 'a-level', subject: 'business', topic: 'strategy', subtopic: 'pestle-analysis' },
  { level: 'a-level', subject: 'business', topic: 'strategy', subtopic: 'porters-five-forces' },
  { level: 'a-level', subject: 'business', topic: 'strategy', subtopic: 'ansoff-matrix' },
  { level: 'a-level', subject: 'business', topic: 'strategy', subtopic: 'strategic-direction' },
  { level: 'a-level', subject: 'business', topic: 'strategy', subtopic: 'mergers-takeovers' },
  { level: 'a-level', subject: 'business', topic: 'strategy', subtopic: 'international-strategy' },
  { level: 'a-level', subject: 'business', topic: 'external', subtopic: 'economic-environment' },
  { level: 'a-level', subject: 'business', topic: 'external', subtopic: 'political-environment' },
  { level: 'a-level', subject: 'business', topic: 'external', subtopic: 'social-environment' },
  { level: 'a-level', subject: 'business', topic: 'external', subtopic: 'technological-environment' },
  { level: 'a-level', subject: 'business', topic: 'external', subtopic: 'competitive-environment' },
  { level: 'a-level', subject: 'business', topic: 'external', subtopic: 'business-ethics' },
  { level: 'a-level', subject: 'business', topic: 'external', subtopic: 'corporate-social-responsibility' },

  // ===========================================
  // A-LEVEL ECONOMICS (~60 subtopics)
  // ===========================================
  { level: 'a-level', subject: 'economics', topic: 'micro', subtopic: 'economic-problem' },
  { level: 'a-level', subject: 'economics', topic: 'micro', subtopic: 'ppf' },
  { level: 'a-level', subject: 'economics', topic: 'micro', subtopic: 'demand-analysis' },
  { level: 'a-level', subject: 'economics', topic: 'micro', subtopic: 'supply-analysis' },
  { level: 'a-level', subject: 'economics', topic: 'micro', subtopic: 'market-equilibrium' },
  { level: 'a-level', subject: 'economics', topic: 'micro', subtopic: 'price-elasticity-demand' },
  { level: 'a-level', subject: 'economics', topic: 'micro', subtopic: 'income-elasticity' },
  { level: 'a-level', subject: 'economics', topic: 'micro', subtopic: 'cross-elasticity' },
  { level: 'a-level', subject: 'economics', topic: 'micro', subtopic: 'price-elasticity-supply' },
  { level: 'a-level', subject: 'economics', topic: 'micro', subtopic: 'consumer-theory' },
  { level: 'a-level', subject: 'economics', topic: 'micro', subtopic: 'indifference-curves' },
  { level: 'a-level', subject: 'economics', topic: 'market-failure', subtopic: 'externalities' },
  { level: 'a-level', subject: 'economics', topic: 'market-failure', subtopic: 'public-goods' },
  { level: 'a-level', subject: 'economics', topic: 'market-failure', subtopic: 'merit-goods' },
  { level: 'a-level', subject: 'economics', topic: 'market-failure', subtopic: 'information-failure' },
  { level: 'a-level', subject: 'economics', topic: 'market-failure', subtopic: 'government-intervention' },
  { level: 'a-level', subject: 'economics', topic: 'market-failure', subtopic: 'government-failure' },
  { level: 'a-level', subject: 'economics', topic: 'firm', subtopic: 'costs-revenue' },
  { level: 'a-level', subject: 'economics', topic: 'firm', subtopic: 'profit-maximisation' },
  { level: 'a-level', subject: 'economics', topic: 'firm', subtopic: 'perfect-competition' },
  { level: 'a-level', subject: 'economics', topic: 'firm', subtopic: 'monopoly' },
  { level: 'a-level', subject: 'economics', topic: 'firm', subtopic: 'monopolistic-competition' },
  { level: 'a-level', subject: 'economics', topic: 'firm', subtopic: 'oligopoly' },
  { level: 'a-level', subject: 'economics', topic: 'firm', subtopic: 'price-discrimination' },
  { level: 'a-level', subject: 'economics', topic: 'firm', subtopic: 'contestable-markets' },
  { level: 'a-level', subject: 'economics', topic: 'labour', subtopic: 'labour-market' },
  { level: 'a-level', subject: 'economics', topic: 'labour', subtopic: 'wage-determination' },
  { level: 'a-level', subject: 'economics', topic: 'labour', subtopic: 'trade-unions' },
  { level: 'a-level', subject: 'economics', topic: 'labour', subtopic: 'income-distribution' },
  { level: 'a-level', subject: 'economics', topic: 'macro', subtopic: 'macroeconomic-objectives' },
  { level: 'a-level', subject: 'economics', topic: 'macro', subtopic: 'gdp-measurement' },
  { level: 'a-level', subject: 'economics', topic: 'macro', subtopic: 'aggregate-demand' },
  { level: 'a-level', subject: 'economics', topic: 'macro', subtopic: 'aggregate-supply' },
  { level: 'a-level', subject: 'economics', topic: 'macro', subtopic: 'economic-growth' },
  { level: 'a-level', subject: 'economics', topic: 'macro', subtopic: 'inflation' },
  { level: 'a-level', subject: 'economics', topic: 'macro', subtopic: 'unemployment' },
  { level: 'a-level', subject: 'economics', topic: 'macro', subtopic: 'phillips-curve' },
  { level: 'a-level', subject: 'economics', topic: 'macro', subtopic: 'multiplier-effect' },
  { level: 'a-level', subject: 'economics', topic: 'policy', subtopic: 'fiscal-policy' },
  { level: 'a-level', subject: 'economics', topic: 'policy', subtopic: 'monetary-policy' },
  { level: 'a-level', subject: 'economics', topic: 'policy', subtopic: 'supply-side-policies' },
  { level: 'a-level', subject: 'economics', topic: 'policy', subtopic: 'exchange-rate-policy' },
  { level: 'a-level', subject: 'economics', topic: 'international', subtopic: 'international-trade' },
  { level: 'a-level', subject: 'economics', topic: 'international', subtopic: 'comparative-advantage' },
  { level: 'a-level', subject: 'economics', topic: 'international', subtopic: 'protectionism' },
  { level: 'a-level', subject: 'economics', topic: 'international', subtopic: 'balance-of-payments' },
  { level: 'a-level', subject: 'economics', topic: 'international', subtopic: 'exchange-rates' },
  { level: 'a-level', subject: 'economics', topic: 'international', subtopic: 'globalisation' },
  { level: 'a-level', subject: 'economics', topic: 'development', subtopic: 'economic-development' },
  { level: 'a-level', subject: 'economics', topic: 'development', subtopic: 'development-indicators' },
  { level: 'a-level', subject: 'economics', topic: 'development', subtopic: 'barriers-to-development' },

  // ===========================================
  // A-LEVEL PSYCHOLOGY (~60 subtopics)
  // ===========================================
  { level: 'a-level', subject: 'psychology', topic: 'approaches', subtopic: 'biological-approach' },
  { level: 'a-level', subject: 'psychology', topic: 'approaches', subtopic: 'behaviourist-approach' },
  { level: 'a-level', subject: 'psychology', topic: 'approaches', subtopic: 'cognitive-approach' },
  { level: 'a-level', subject: 'psychology', topic: 'approaches', subtopic: 'psychodynamic-approach' },
  { level: 'a-level', subject: 'psychology', topic: 'approaches', subtopic: 'humanistic-approach' },
  { level: 'a-level', subject: 'psychology', topic: 'approaches', subtopic: 'social-learning-theory' },
  { level: 'a-level', subject: 'psychology', topic: 'biopsychology', subtopic: 'nervous-system' },
  { level: 'a-level', subject: 'psychology', topic: 'biopsychology', subtopic: 'neurons-synapses' },
  { level: 'a-level', subject: 'psychology', topic: 'biopsychology', subtopic: 'brain-localisation' },
  { level: 'a-level', subject: 'psychology', topic: 'biopsychology', subtopic: 'brain-plasticity' },
  { level: 'a-level', subject: 'psychology', topic: 'biopsychology', subtopic: 'brain-scanning' },
  { level: 'a-level', subject: 'psychology', topic: 'biopsychology', subtopic: 'circadian-rhythms' },
  { level: 'a-level', subject: 'psychology', topic: 'memory', subtopic: 'memory-models' },
  { level: 'a-level', subject: 'psychology', topic: 'memory', subtopic: 'working-memory-model' },
  { level: 'a-level', subject: 'psychology', topic: 'memory', subtopic: 'long-term-memory' },
  { level: 'a-level', subject: 'psychology', topic: 'memory', subtopic: 'forgetting' },
  { level: 'a-level', subject: 'psychology', topic: 'memory', subtopic: 'eyewitness-testimony' },
  { level: 'a-level', subject: 'psychology', topic: 'attachment', subtopic: 'attachment-theory' },
  { level: 'a-level', subject: 'psychology', topic: 'attachment', subtopic: 'bowlby' },
  { level: 'a-level', subject: 'psychology', topic: 'attachment', subtopic: 'ainsworth' },
  { level: 'a-level', subject: 'psychology', topic: 'attachment', subtopic: 'deprivation' },
  { level: 'a-level', subject: 'psychology', topic: 'attachment', subtopic: 'institutionalisation' },
  { level: 'a-level', subject: 'psychology', topic: 'social', subtopic: 'social-influence' },
  { level: 'a-level', subject: 'psychology', topic: 'social', subtopic: 'conformity' },
  { level: 'a-level', subject: 'psychology', topic: 'social', subtopic: 'obedience' },
  { level: 'a-level', subject: 'psychology', topic: 'social', subtopic: 'minority-influence' },
  { level: 'a-level', subject: 'psychology', topic: 'social', subtopic: 'social-change' },
  { level: 'a-level', subject: 'psychology', topic: 'psychopathology', subtopic: 'definitions-abnormality' },
  { level: 'a-level', subject: 'psychology', topic: 'psychopathology', subtopic: 'phobias' },
  { level: 'a-level', subject: 'psychology', topic: 'psychopathology', subtopic: 'depression' },
  { level: 'a-level', subject: 'psychology', topic: 'psychopathology', subtopic: 'ocd' },
  { level: 'a-level', subject: 'psychology', topic: 'psychopathology', subtopic: 'schizophrenia' },
  { level: 'a-level', subject: 'psychology', topic: 'psychopathology', subtopic: 'eating-disorders' },
  { level: 'a-level', subject: 'psychology', topic: 'psychopathology', subtopic: 'addiction' },
  { level: 'a-level', subject: 'psychology', topic: 'research-methods', subtopic: 'experimental-methods' },
  { level: 'a-level', subject: 'psychology', topic: 'research-methods', subtopic: 'non-experimental-methods' },
  { level: 'a-level', subject: 'psychology', topic: 'research-methods', subtopic: 'sampling-techniques' },
  { level: 'a-level', subject: 'psychology', topic: 'research-methods', subtopic: 'statistical-tests' },
  { level: 'a-level', subject: 'psychology', topic: 'research-methods', subtopic: 'peer-review' },
  { level: 'a-level', subject: 'psychology', topic: 'issues-debates', subtopic: 'gender-bias' },
  { level: 'a-level', subject: 'psychology', topic: 'issues-debates', subtopic: 'cultural-bias' },
  { level: 'a-level', subject: 'psychology', topic: 'issues-debates', subtopic: 'free-will-determinism' },
  { level: 'a-level', subject: 'psychology', topic: 'issues-debates', subtopic: 'nature-nurture' },
  { level: 'a-level', subject: 'psychology', topic: 'issues-debates', subtopic: 'holism-reductionism' },
  { level: 'a-level', subject: 'psychology', topic: 'issues-debates', subtopic: 'idiographic-nomothetic' },
  { level: 'a-level', subject: 'psychology', topic: 'issues-debates', subtopic: 'ethical-issues' },
  { level: 'a-level', subject: 'psychology', topic: 'relationships', subtopic: 'attraction' },
  { level: 'a-level', subject: 'psychology', topic: 'relationships', subtopic: 'romantic-relationships' },
  { level: 'a-level', subject: 'psychology', topic: 'relationships', subtopic: 'virtual-relationships' },
  { level: 'a-level', subject: 'psychology', topic: 'aggression', subtopic: 'biological-explanations' },
  { level: 'a-level', subject: 'psychology', topic: 'aggression', subtopic: 'social-psychological-explanations' },
  { level: 'a-level', subject: 'psychology', topic: 'aggression', subtopic: 'media-influences' },

  // ===========================================
  // A-LEVEL SOCIOLOGY (~50 subtopics)
  // ===========================================
  { level: 'a-level', subject: 'sociology', topic: 'theory', subtopic: 'functionalism' },
  { level: 'a-level', subject: 'sociology', topic: 'theory', subtopic: 'marxism' },
  { level: 'a-level', subject: 'sociology', topic: 'theory', subtopic: 'feminism' },
  { level: 'a-level', subject: 'sociology', topic: 'theory', subtopic: 'interactionism' },
  { level: 'a-level', subject: 'sociology', topic: 'theory', subtopic: 'postmodernism' },
  { level: 'a-level', subject: 'sociology', topic: 'theory', subtopic: 'new-right' },
  { level: 'a-level', subject: 'sociology', topic: 'education', subtopic: 'role-of-education' },
  { level: 'a-level', subject: 'sociology', topic: 'education', subtopic: 'class-educational-achievement' },
  { level: 'a-level', subject: 'sociology', topic: 'education', subtopic: 'gender-educational-achievement' },
  { level: 'a-level', subject: 'sociology', topic: 'education', subtopic: 'ethnicity-educational-achievement' },
  { level: 'a-level', subject: 'sociology', topic: 'education', subtopic: 'educational-policy' },
  { level: 'a-level', subject: 'sociology', topic: 'education', subtopic: 'in-school-factors' },
  { level: 'a-level', subject: 'sociology', topic: 'families', subtopic: 'family-diversity' },
  { level: 'a-level', subject: 'sociology', topic: 'families', subtopic: 'changing-family-patterns' },
  { level: 'a-level', subject: 'sociology', topic: 'families', subtopic: 'childhood' },
  { level: 'a-level', subject: 'sociology', topic: 'families', subtopic: 'gender-roles' },
  { level: 'a-level', subject: 'sociology', topic: 'families', subtopic: 'family-policies' },
  { level: 'a-level', subject: 'sociology', topic: 'research-methods', subtopic: 'quantitative-methods' },
  { level: 'a-level', subject: 'sociology', topic: 'research-methods', subtopic: 'qualitative-methods' },
  { level: 'a-level', subject: 'sociology', topic: 'research-methods', subtopic: 'ethics-sociology' },
  { level: 'a-level', subject: 'sociology', topic: 'research-methods', subtopic: 'positivism-interpretivism' },
  { level: 'a-level', subject: 'sociology', topic: 'crime', subtopic: 'functionalist-crime' },
  { level: 'a-level', subject: 'sociology', topic: 'crime', subtopic: 'marxist-crime' },
  { level: 'a-level', subject: 'sociology', topic: 'crime', subtopic: 'labelling-theory' },
  { level: 'a-level', subject: 'sociology', topic: 'crime', subtopic: 'realist-theories' },
  { level: 'a-level', subject: 'sociology', topic: 'crime', subtopic: 'gender-crime' },
  { level: 'a-level', subject: 'sociology', topic: 'crime', subtopic: 'ethnicity-crime' },
  { level: 'a-level', subject: 'sociology', topic: 'crime', subtopic: 'class-crime' },
  { level: 'a-level', subject: 'sociology', topic: 'crime', subtopic: 'globalisation-crime' },
  { level: 'a-level', subject: 'sociology', topic: 'crime', subtopic: 'crime-prevention' },
  { level: 'a-level', subject: 'sociology', topic: 'crime', subtopic: 'punishment' },
  { level: 'a-level', subject: 'sociology', topic: 'media', subtopic: 'media-representations' },
  { level: 'a-level', subject: 'sociology', topic: 'media', subtopic: 'media-effects' },
  { level: 'a-level', subject: 'sociology', topic: 'media', subtopic: 'new-media' },
  { level: 'a-level', subject: 'sociology', topic: 'media', subtopic: 'media-ownership' },
  { level: 'a-level', subject: 'sociology', topic: 'stratification', subtopic: 'social-class' },
  { level: 'a-level', subject: 'sociology', topic: 'stratification', subtopic: 'social-mobility' },
  { level: 'a-level', subject: 'sociology', topic: 'stratification', subtopic: 'poverty' },
  { level: 'a-level', subject: 'sociology', topic: 'stratification', subtopic: 'gender-inequality' },
  { level: 'a-level', subject: 'sociology', topic: 'stratification', subtopic: 'ethnic-inequality' },
  { level: 'a-level', subject: 'sociology', topic: 'beliefs', subtopic: 'theories-religion' },
  { level: 'a-level', subject: 'sociology', topic: 'beliefs', subtopic: 'secularisation' },
  { level: 'a-level', subject: 'sociology', topic: 'beliefs', subtopic: 'religious-organisations' },
  { level: 'a-level', subject: 'sociology', topic: 'beliefs', subtopic: 'religion-social-change' },

  // ===========================================
  // A-LEVEL FURTHER MATHS (~75 subtopics)
  // ===========================================
  { level: 'a-level', subject: 'further-maths', topic: 'core-pure', subtopic: 'complex-numbers' },
  { level: 'a-level', subject: 'further-maths', topic: 'core-pure', subtopic: 'argand-diagrams' },
  { level: 'a-level', subject: 'further-maths', topic: 'core-pure', subtopic: 'de-moivres-theorem' },
  { level: 'a-level', subject: 'further-maths', topic: 'core-pure', subtopic: 'roots-of-polynomials' },
  { level: 'a-level', subject: 'further-maths', topic: 'core-pure', subtopic: 'matrices' },
  { level: 'a-level', subject: 'further-maths', topic: 'core-pure', subtopic: 'matrix-transformations' },
  { level: 'a-level', subject: 'further-maths', topic: 'core-pure', subtopic: 'determinants' },
  { level: 'a-level', subject: 'further-maths', topic: 'core-pure', subtopic: 'inverse-matrices' },
  { level: 'a-level', subject: 'further-maths', topic: 'core-pure', subtopic: 'linear-transformations' },
  { level: 'a-level', subject: 'further-maths', topic: 'core-pure', subtopic: 'eigenvalues-eigenvectors' },
  { level: 'a-level', subject: 'further-maths', topic: 'core-pure', subtopic: 'proof-by-induction' },
  { level: 'a-level', subject: 'further-maths', topic: 'core-pure', subtopic: 'series' },
  { level: 'a-level', subject: 'further-maths', topic: 'core-pure', subtopic: 'method-of-differences' },
  { level: 'a-level', subject: 'further-maths', topic: 'core-pure', subtopic: 'maclaurin-series' },
  { level: 'a-level', subject: 'further-maths', topic: 'core-pure', subtopic: 'polar-coordinates' },
  { level: 'a-level', subject: 'further-maths', topic: 'core-pure', subtopic: 'hyperbolic-functions' },
  { level: 'a-level', subject: 'further-maths', topic: 'core-pure', subtopic: 'differential-equations' },
  { level: 'a-level', subject: 'further-maths', topic: 'core-pure', subtopic: 'first-order-de' },
  { level: 'a-level', subject: 'further-maths', topic: 'core-pure', subtopic: 'second-order-de' },
  { level: 'a-level', subject: 'further-maths', topic: 'core-pure', subtopic: 'vectors-3d' },
  { level: 'a-level', subject: 'further-maths', topic: 'core-pure', subtopic: 'vector-equations-lines' },
  { level: 'a-level', subject: 'further-maths', topic: 'core-pure', subtopic: 'vector-equations-planes' },
  { level: 'a-level', subject: 'further-maths', topic: 'core-pure', subtopic: 'volumes-of-revolution' },
  { level: 'a-level', subject: 'further-maths', topic: 'further-pure', subtopic: 'further-calculus' },
  { level: 'a-level', subject: 'further-maths', topic: 'further-pure', subtopic: 'further-integration' },
  { level: 'a-level', subject: 'further-maths', topic: 'further-pure', subtopic: 'reduction-formulas' },
  { level: 'a-level', subject: 'further-maths', topic: 'further-pure', subtopic: 'arc-length' },
  { level: 'a-level', subject: 'further-maths', topic: 'further-pure', subtopic: 'surface-area-revolution' },
  { level: 'a-level', subject: 'further-maths', topic: 'further-pure', subtopic: 'taylor-series' },
  { level: 'a-level', subject: 'further-maths', topic: 'further-pure', subtopic: 'l-hopitals-rule' },
  { level: 'a-level', subject: 'further-maths', topic: 'further-pure', subtopic: 'numerical-methods' },
  { level: 'a-level', subject: 'further-maths', topic: 'further-mechanics', subtopic: 'momentum-impulse' },
  { level: 'a-level', subject: 'further-maths', topic: 'further-mechanics', subtopic: 'work-energy-power' },
  { level: 'a-level', subject: 'further-maths', topic: 'further-mechanics', subtopic: 'elastic-collisions' },
  { level: 'a-level', subject: 'further-maths', topic: 'further-mechanics', subtopic: 'elastic-strings' },
  { level: 'a-level', subject: 'further-maths', topic: 'further-mechanics', subtopic: 'circular-motion' },
  { level: 'a-level', subject: 'further-maths', topic: 'further-mechanics', subtopic: 'centres-of-mass' },
  { level: 'a-level', subject: 'further-maths', topic: 'further-mechanics', subtopic: 'statics' },
  { level: 'a-level', subject: 'further-maths', topic: 'further-mechanics', subtopic: 'dimensional-analysis' },
  { level: 'a-level', subject: 'further-maths', topic: 'further-statistics', subtopic: 'discrete-distributions' },
  { level: 'a-level', subject: 'further-maths', topic: 'further-statistics', subtopic: 'poisson-distribution' },
  { level: 'a-level', subject: 'further-maths', topic: 'further-statistics', subtopic: 'continuous-distributions' },
  { level: 'a-level', subject: 'further-maths', topic: 'further-statistics', subtopic: 'chi-squared-test' },
  { level: 'a-level', subject: 'further-maths', topic: 'further-statistics', subtopic: 't-distribution' },
  { level: 'a-level', subject: 'further-maths', topic: 'further-statistics', subtopic: 'confidence-intervals' },
  { level: 'a-level', subject: 'further-maths', topic: 'further-statistics', subtopic: 'correlation-coefficient' },
  { level: 'a-level', subject: 'further-maths', topic: 'decision', subtopic: 'algorithms' },
  { level: 'a-level', subject: 'further-maths', topic: 'decision', subtopic: 'graph-theory' },
  { level: 'a-level', subject: 'further-maths', topic: 'decision', subtopic: 'networks' },
  { level: 'a-level', subject: 'further-maths', topic: 'decision', subtopic: 'linear-programming' },
  { level: 'a-level', subject: 'further-maths', topic: 'decision', subtopic: 'critical-path-analysis' },
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
