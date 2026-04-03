/**
 * Question Pattern Tracker
 * Ensures variety in question generation by tracking and avoiding repetitive patterns
 */

import { Subject, Difficulty, QuestionType } from '@/types';

interface QuestionPattern {
  structure: string;
  scenario?: string;
  calculationType?: string;
  conceptFocus: string;
  timestamp: number;
}

interface PatternStats {
  totalGenerated: number;
  uniquePatterns: number;
  repetitionRate: number;
  lastReset: Date;
}

export class QuestionPatternTracker {
  private patterns: Map<string, Set<string>> = new Map();
  private recentPatterns: QuestionPattern[] = [];
  private sessionStats: PatternStats;
  private readonly MAX_RECENT = 20;
  private readonly PATTERN_EXPIRY = 30 * 60 * 1000; // 30 minutes

  constructor() {
    this.sessionStats = {
      totalGenerated: 0,
      uniquePatterns: 0,
      repetitionRate: 0,
      lastReset: new Date(),
    };
  }

  /**
   * Generate a unique pattern for the question avoiding repetition
   */
  generateUniquePattern(
    subject: Subject,
    subtopic: string,
    questionType: QuestionType,
    difficulty: Difficulty
  ): {
    pattern: string;
    scenario: string;
    variations: string[];
    avoidPatterns: string[];
  } {
    const key = `${subject}:${subtopic}:${questionType}`;
    const existingPatterns = this.patterns.get(key) || new Set();
    
    // Get pattern variations based on subject
    const variations = this.getPatternVariations(subject, questionType, difficulty);
    
    // Find unused patterns
    const unusedPatterns = variations.filter(v => !existingPatterns.has(v));
    
    // Select pattern (prefer unused, fallback to least recent)
    let selectedPattern: string;
    if (unusedPatterns.length > 0) {
      selectedPattern = unusedPatterns[Math.floor(Math.random() * unusedPatterns.length)];
    } else {
      // All patterns used, select least recently used
      selectedPattern = this.getLeastRecentPattern(key, variations);
    }

    // Generate scenario variation
    const scenario = this.generateScenario(subject, subtopic, difficulty);
    
    // Track the pattern
    this.trackPattern(key, selectedPattern, scenario);
    
    // Get patterns to avoid (recent ones)
    const avoidPatterns = this.getRecentPatternsForKey(key);

    return {
      pattern: selectedPattern,
      scenario,
      variations: this.getConceptVariations(subject, subtopic),
      avoidPatterns,
    };
  }

  /**
   * Get pattern variations based on subject and type
   */
  private getPatternVariations(
    subject: Subject,
    questionType: QuestionType,
    difficulty: Difficulty
  ): string[] {
    const basePatterns = {
      'calculation': [
        'direct_calculation',
        'word_problem',
        'reverse_calculation',
        'multi_step_problem',
        'comparison_calculation',
        'optimization_problem',
        'proof_by_calculation',
        'estimation_problem',
      ],
      'explain': [
        'explain_process',
        'explain_why',
        'explain_how',
        'explain_difference',
        'explain_significance',
        'explain_with_example',
        'explain_misconception',
        'explain_application',
      ],
      'short-answer': [
        'definition',
        'identification',
        'listing',
        'completion',
        'true_false_justify',
        'cause_effect',
        'advantage_disadvantage',
        'classification',
      ],
      'extended': [
        'structured_argument',
        'case_study_analysis',
        'comparative_analysis',
        'evaluation',
        'design_solution',
        'critical_review',
        'synthesis',
        'application_scenario',
      ],
      'data-analysis': [
        'trend_identification',
        'calculation_from_data',
        'graph_interpretation',
        'correlation_analysis',
        'prediction',
        'anomaly_explanation',
        'method_evaluation',
        'conclusion_drawing',
      ],
    };

    const patterns = basePatterns[questionType as keyof typeof basePatterns] || [
      'standard_question',
      'scenario_based',
      'comparative',
      'analytical',
    ];

    // Add difficulty modifiers
    if (difficulty === 'hard') {
      return patterns.map(p => `${p}_complex`);
    } else if (difficulty === 'easy') {
      return patterns.map(p => `${p}_basic`);
    }
    
    return patterns;
  }

  /**
   * Generate varied scenarios for questions
   */
  private generateScenario(
    subject: Subject,
    subtopic: string,
    difficulty: Difficulty
  ): string {
    const scenarios: Record<string, string[]> = {
      'maths': [
        'real_world_application',
        'abstract_problem',
        'geometric_context',
        'financial_scenario',
        'scientific_data',
        'engineering_problem',
        'statistical_survey',
        'game_theory',
        'optimization_task',
        'pattern_recognition',
      ],
      'physics': [
        'laboratory_experiment',
        'everyday_phenomenon',
        'space_exploration',
        'engineering_design',
        'sports_application',
        'medical_technology',
        'environmental_study',
        'historical_discovery',
        'future_technology',
        'safety_analysis',
      ],
      'chemistry': [
        'industrial_process',
        'environmental_issue',
        'pharmaceutical_development',
        'forensic_analysis',
        'food_science',
        'materials_engineering',
        'energy_production',
        'biological_system',
        'historical_context',
        'safety_protocol',
      ],
      'biology': [
        'medical_case_study',
        'ecological_system',
        'evolutionary_example',
        'agricultural_application',
        'conservation_effort',
        'biotechnology',
        'human_health',
        'animal_behavior',
        'plant_adaptation',
        'microscopic_world',
      ],
      'economics': [
        'current_events',
        'historical_case',
        'government_policy',
        'business_decision',
        'international_trade',
        'market_analysis',
        'consumer_behavior',
        'economic_crisis',
        'development_economics',
        'behavioral_economics',
      ],
      'history': [
        'source_analysis',
        'causation_exploration',
        'comparison_periods',
        'turning_point',
        'historiography',
        'social_impact',
        'political_change',
        'economic_factors',
        'cultural_perspective',
        'individual_significance',
      ],
      'default': [
        'standard_scenario',
        'practical_application',
        'theoretical_exploration',
        'problem_solving',
        'critical_analysis',
      ],
    };

    const subjectScenarios = scenarios[subject] || scenarios['default'];
    
    // Weight recent scenarios lower
    const recentScenarios = this.recentPatterns
      .filter(p => p.timestamp > Date.now() - this.PATTERN_EXPIRY)
      .map(p => p.scenario)
      .filter(Boolean);
    
    const availableScenarios = subjectScenarios.filter(s => !recentScenarios.includes(s));
    
    if (availableScenarios.length > 0) {
      return availableScenarios[Math.floor(Math.random() * availableScenarios.length)];
    }
    
    // All scenarios recently used, return random
    return subjectScenarios[Math.floor(Math.random() * subjectScenarios.length)];
  }

  /**
   * Get concept variations to ensure diverse question content
   */
  private getConceptVariations(subject: Subject, subtopic: string): string[] {
    const variations = [
      `fundamental_principles_of_${subtopic}`,
      `applications_of_${subtopic}`,
      `common_misconceptions_about_${subtopic}`,
      `advanced_concepts_in_${subtopic}`,
      `historical_development_of_${subtopic}`,
      `practical_uses_of_${subtopic}`,
      `theoretical_aspects_of_${subtopic}`,
      `problem_solving_with_${subtopic}`,
      `critical_analysis_of_${subtopic}`,
      `experimental_investigation_of_${subtopic}`,
    ];

    // Add subject-specific variations
    if (['maths', 'further-maths'].includes(subject)) {
      variations.push(
        `proof_techniques_for_${subtopic}`,
        `graphical_representation_of_${subtopic}`,
        `algebraic_manipulation_in_${subtopic}`
      );
    } else if (['physics', 'chemistry', 'biology'].includes(subject)) {
      variations.push(
        `experimental_design_for_${subtopic}`,
        `data_analysis_in_${subtopic}`,
        `scientific_method_applied_to_${subtopic}`
      );
    }

    return variations;
  }

  /**
   * Track a pattern usage
   */
  private trackPattern(key: string, pattern: string, scenario?: string): void {
    if (!this.patterns.has(key)) {
      this.patterns.set(key, new Set());
    }
    
    this.patterns.get(key)!.add(pattern);
    
    this.recentPatterns.push({
      structure: pattern,
      scenario,
      conceptFocus: key,
      timestamp: Date.now(),
    });

    // Maintain max size
    if (this.recentPatterns.length > this.MAX_RECENT) {
      this.recentPatterns.shift();
    }

    // Update stats
    this.sessionStats.totalGenerated++;
    this.sessionStats.uniquePatterns = this.countUniquePatterns();
    this.sessionStats.repetitionRate = this.calculateRepetitionRate();
  }

  /**
   * Get least recently used pattern
   */
  private getLeastRecentPattern(key: string, patterns: string[]): string {
    const keyPatterns = this.recentPatterns
      .filter(p => p.conceptFocus === key)
      .map(p => p.structure);
    
    // Find pattern used longest ago
    for (const pattern of patterns) {
      const lastIndex = keyPatterns.lastIndexOf(pattern);
      if (lastIndex === -1) return pattern; // Never used
    }
    
    // All used, return random
    return patterns[Math.floor(Math.random() * patterns.length)];
  }

  /**
   * Get recent patterns to avoid
   */
  private getRecentPatternsForKey(key: string): string[] {
    return this.recentPatterns
      .filter(p => p.conceptFocus === key && p.timestamp > Date.now() - this.PATTERN_EXPIRY)
      .map(p => p.structure)
      .slice(-5); // Last 5 patterns
  }

  /**
   * Count unique patterns in session
   */
  private countUniquePatterns(): number {
    const unique = new Set<string>();
    this.patterns.forEach((patterns, key) => {
      patterns.forEach(p => unique.add(`${key}:${p}`));
    });
    return unique.size;
  }

  /**
   * Calculate repetition rate
   */
  private calculateRepetitionRate(): number {
    if (this.sessionStats.totalGenerated === 0) return 0;
    return 1 - (this.sessionStats.uniquePatterns / this.sessionStats.totalGenerated);
  }

  /**
   * Get session statistics
   */
  getStats(): PatternStats {
    return { ...this.sessionStats };
  }

  /**
   * Clear old patterns (cleanup)
   */
  clearOldPatterns(): void {
    const cutoff = Date.now() - this.PATTERN_EXPIRY;
    this.recentPatterns = this.recentPatterns.filter(p => p.timestamp > cutoff);
  }

  /**
   * Reset tracker (new session)
   */
  reset(): void {
    this.patterns.clear();
    this.recentPatterns = [];
    this.sessionStats = {
      totalGenerated: 0,
      uniquePatterns: 0,
      repetitionRate: 0,
      lastReset: new Date(),
    };
  }
}

// Singleton instance
let tracker: QuestionPatternTracker | null = null;

export function getPatternTracker(): QuestionPatternTracker {
  if (!tracker) {
    tracker = new QuestionPatternTracker();
  }
  return tracker;
}