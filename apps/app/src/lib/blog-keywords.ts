// High-value educational keywords research for blog generation
// Based on search volume, competition, and educational value

export interface KeywordData {
  keyword: string;
  searchVolume: 'high' | 'medium' | 'low';
  competition: 'high' | 'medium' | 'low';
  intent: 'informational' | 'commercial' | 'navigational';
  examBoard?: string[];
  subject: string;
  level: 'gcse' | 'a-level' | 'both';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  seasonality?: 'exam-season' | 'year-round';
}

export const HIGH_VALUE_KEYWORDS: KeywordData[] = [
  // GCSE Maths - High Volume Keywords
  {
    keyword: "gcse maths revision",
    searchVolume: 'high',
    competition: 'high',
    intent: 'informational',
    examBoard: ['aqa', 'edexcel', 'ocr'],
    subject: 'maths',
    level: 'gcse',
    difficulty: 'beginner',
    seasonality: 'exam-season'
  },
  {
    keyword: "quadratic equations gcse",
    searchVolume: 'high',
    competition: 'medium',
    intent: 'informational',
    examBoard: ['aqa', 'edexcel', 'ocr'],
    subject: 'maths',
    level: 'gcse',
    difficulty: 'intermediate'
  },
  {
    keyword: "simultaneous equations gcse",
    searchVolume: 'medium',
    competition: 'medium',
    intent: 'informational',
    examBoard: ['aqa', 'edexcel', 'ocr'],
    subject: 'maths',
    level: 'gcse',
    difficulty: 'intermediate'
  },
  {
    keyword: "circle theorems gcse",
    searchVolume: 'medium',
    competition: 'low',
    intent: 'informational',
    examBoard: ['aqa', 'edexcel', 'ocr'],
    subject: 'maths',
    level: 'gcse',
    difficulty: 'advanced'
  },
  {
    keyword: "trigonometry gcse",
    searchVolume: 'high',
    competition: 'medium',
    intent: 'informational',
    examBoard: ['aqa', 'edexcel', 'ocr'],
    subject: 'maths',
    level: 'gcse',
    difficulty: 'intermediate'
  },

  // GCSE English - High Volume
  {
    keyword: "gcse english literature revision",
    searchVolume: 'high',
    competition: 'high',
    intent: 'informational',
    examBoard: ['aqa', 'edexcel', 'ocr'],
    subject: 'english-literature',
    level: 'gcse',
    difficulty: 'beginner',
    seasonality: 'exam-season'
  },
  {
    keyword: "macbeth quotes gcse",
    searchVolume: 'high',
    competition: 'medium',
    intent: 'informational',
    examBoard: ['aqa', 'edexcel'],
    subject: 'english-literature',
    level: 'gcse',
    difficulty: 'intermediate'
  },
  {
    keyword: "romeo and juliet themes gcse",
    searchVolume: 'medium',
    competition: 'medium',
    intent: 'informational',
    examBoard: ['aqa', 'edexcel'],
    subject: 'english-literature',
    level: 'gcse',
    difficulty: 'intermediate'
  },
  {
    keyword: "jekyll and hyde themes",
    searchVolume: 'medium',
    competition: 'low',
    intent: 'informational',
    examBoard: ['aqa'],
    subject: 'english-literature',
    level: 'gcse',
    difficulty: 'intermediate'
  },

  // GCSE Sciences - High Volume
  {
    keyword: "gcse biology revision",
    searchVolume: 'high',
    competition: 'high',
    intent: 'informational',
    examBoard: ['aqa', 'edexcel', 'ocr'],
    subject: 'biology',
    level: 'gcse',
    difficulty: 'beginner',
    seasonality: 'exam-season'
  },
  {
    keyword: "photosynthesis gcse",
    searchVolume: 'medium',
    competition: 'medium',
    intent: 'informational',
    examBoard: ['aqa', 'edexcel', 'ocr'],
    subject: 'biology',
    level: 'gcse',
    difficulty: 'intermediate'
  },
  {
    keyword: "gcse chemistry equations",
    searchVolume: 'high',
    competition: 'medium',
    intent: 'informational',
    examBoard: ['aqa', 'edexcel', 'ocr'],
    subject: 'chemistry',
    level: 'gcse',
    difficulty: 'intermediate'
  },
  {
    keyword: "gcse physics equations",
    searchVolume: 'high',
    competition: 'medium',
    intent: 'informational',
    examBoard: ['aqa', 'edexcel', 'ocr'],
    subject: 'physics',
    level: 'gcse',
    difficulty: 'intermediate'
  },

  // A-Level High Volume
  {
    keyword: "a level maths revision",
    searchVolume: 'high',
    competition: 'high',
    intent: 'informational',
    examBoard: ['aqa', 'edexcel', 'ocr'],
    subject: 'maths',
    level: 'a-level',
    difficulty: 'beginner',
    seasonality: 'exam-season'
  },
  {
    keyword: "calculus a level",
    searchVolume: 'medium',
    competition: 'medium',
    intent: 'informational',
    examBoard: ['aqa', 'edexcel', 'ocr'],
    subject: 'maths',
    level: 'a-level',
    difficulty: 'intermediate'
  },
  {
    keyword: "integration by parts",
    searchVolume: 'medium',
    competition: 'low',
    intent: 'informational',
    examBoard: ['aqa', 'edexcel', 'ocr'],
    subject: 'maths',
    level: 'a-level',
    difficulty: 'advanced'
  }
];

// Keyword expansion patterns for generating related content
export const KEYWORD_EXPANSION_PATTERNS = [
  // Question patterns
  "{keyword} questions",
  "{keyword} practice questions",
  "{keyword} past paper questions",
  
  // Exam board specific
  "aqa {keyword}",
  "edexcel {keyword}",
  "ocr {keyword}",
  
  // Difficulty variations
  "{keyword} easy",
  "{keyword} hard questions",
  "{keyword} grade 9",
  
  // Format variations
  "{keyword} worksheet",
  "{keyword} notes",
  "{keyword} summary",
  "{keyword} explained",
  "{keyword} guide",
  "{keyword} tips",
  
  // Comparison content
  "{keyword} vs {related_keyword}",
  
  // Process content
  "how to {keyword}",
  "step by step {keyword}",
  "{keyword} method",
  "{keyword} technique",
  
  // Problem-solving
  "{keyword} examples",
  "{keyword} solutions",
  "{keyword} answers",
  "{keyword} worked examples"
];

// Generate all possible blog post ideas
export function generateBlogPostIdeas(baseKeywords: KeywordData[], expansionPatterns: string[]): string[] {
  const ideas: string[] = [];
  
  baseKeywords.forEach(keyword => {
    // Add base keyword
    ideas.push(keyword.keyword);
    
    // Add expanded versions
    expansionPatterns.forEach(pattern => {
      const expandedKeyword = pattern.replace('{keyword}', keyword.keyword);
      ideas.push(expandedKeyword);
      
      // Add exam board specific versions
      if (keyword.examBoard) {
        keyword.examBoard.forEach(board => {
          const boardSpecific = expandedKeyword.replace('{keyword}', `${board} ${keyword.keyword}`);
          ideas.push(boardSpecific);
        });
      }
    });
  });
  
  return [...new Set(ideas)]; // Remove duplicates
}

// Priority scoring for content creation order
export function getKeywordPriority(keyword: KeywordData): number {
  let score = 0;
  
  // Search volume weight (40%)
  if (keyword.searchVolume === 'high') score += 40;
  else if (keyword.searchVolume === 'medium') score += 25;
  else score += 10;
  
  // Competition weight (30% - lower is better)
  if (keyword.competition === 'low') score += 30;
  else if (keyword.competition === 'medium') score += 20;
  else score += 5;
  
  // Seasonality weight (20%)
  if (keyword.seasonality === 'exam-season') score += 20;
  else score += 15;
  
  // Level weight (10%)
  if (keyword.level === 'gcse') score += 10; // GCSE has higher volume
  else score += 8;
  
  return score;
}

// Top 1000 blog post ideas ranked by priority
export function getTop1000BlogIdeas(): { keyword: string; priority: number; metadata: KeywordData }[] {
  const allIdeas = generateBlogPostIdeas(HIGH_VALUE_KEYWORDS, KEYWORD_EXPANSION_PATTERNS);
  
  return allIdeas
    .map(idea => {
      // Find the base keyword this idea relates to
      const baseKeyword = HIGH_VALUE_KEYWORDS.find(kw => 
        idea.toLowerCase().includes(kw.keyword.toLowerCase()) ||
        idea.toLowerCase().includes(kw.subject)
      );
      
      return {
        keyword: idea,
        priority: baseKeyword ? getKeywordPriority(baseKeyword) : 0,
        metadata: baseKeyword || HIGH_VALUE_KEYWORDS[0]
      };
    })
    .sort((a, b) => b.priority - a.priority)
    .slice(0, 1000);
}