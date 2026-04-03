/**
 * Adaptive Difficulty System
 * Dynamically adjusts question difficulty based on student performance
 */

import { Difficulty } from '@/types';

export interface PerformanceMetrics {
  correctCount: number;
  incorrectCount: number;
  averageTime: number; // seconds
  averageAttempts: number;
  streakCount: number;
  recentAccuracy: number; // last 5 questions
}

export interface DifficultyRecommendation {
  difficulty: Difficulty;
  confidence: number; // 0-1
  reasoning: string;
  suggestedMarks?: number;
}

export class AdaptiveDifficultySystem {
  private readonly STREAK_THRESHOLD = 3;
  private readonly STRUGGLE_THRESHOLD = 0.4; // 40% accuracy
  private readonly MASTERY_THRESHOLD = 0.85; // 85% accuracy
  private readonly TIME_THRESHOLDS = {
    easy: { min: 30, max: 120 },     // 30s - 2min
    medium: { min: 60, max: 300 },   // 1min - 5min
    hard: { min: 120, max: 600 }     // 2min - 10min
  };

  /**
   * Calculate next difficulty based on performance
   */
  calculateNextDifficulty(
    currentDifficulty: Difficulty,
    metrics: PerformanceMetrics
  ): DifficultyRecommendation {
    // Calculate performance score (0-1)
    const performanceScore = this.calculatePerformanceScore(metrics);
    
    // Check for clear indicators
    if (metrics.streakCount >= this.STREAK_THRESHOLD && performanceScore > this.MASTERY_THRESHOLD) {
      return this.recommendIncrease(currentDifficulty, performanceScore, metrics);
    }
    
    if (performanceScore < this.STRUGGLE_THRESHOLD) {
      return this.recommendDecrease(currentDifficulty, performanceScore, metrics);
    }
    
    // Check time-based adjustments
    const timeAdjustment = this.analyzeTimePerformance(currentDifficulty, metrics.averageTime);
    if (timeAdjustment !== 'maintain') {
      return this.recommendBasedOnTime(currentDifficulty, timeAdjustment, performanceScore);
    }
    
    // Maintain current difficulty
    return {
      difficulty: currentDifficulty,
      confidence: 0.8,
      reasoning: `Performance is appropriate for ${currentDifficulty} level (${Math.round(performanceScore * 100)}% accuracy)`,
    };
  }

  /**
   * Calculate overall performance score
   */
  private calculatePerformanceScore(metrics: PerformanceMetrics): number {
    const total = metrics.correctCount + metrics.incorrectCount;
    if (total === 0) return 0.5; // No data, neutral score
    
    // Base accuracy
    const overallAccuracy = metrics.correctCount / total;
    
    // Weight recent performance more heavily
    const weightedAccuracy = (overallAccuracy * 0.3) + (metrics.recentAccuracy * 0.7);
    
    // Factor in attempts (penalize multiple attempts)
    const attemptPenalty = Math.max(0, 1 - (metrics.averageAttempts - 1) * 0.2);
    
    // Factor in streak bonus
    const streakBonus = Math.min(0.1, metrics.streakCount * 0.02);
    
    return Math.min(1, Math.max(0, weightedAccuracy * attemptPenalty + streakBonus));
  }

  /**
   * Analyze time performance
   */
  private analyzeTimePerformance(
    difficulty: Difficulty,
    averageTime: number
  ): 'increase' | 'decrease' | 'maintain' {
    const thresholds = this.TIME_THRESHOLDS[difficulty];
    
    if (averageTime < thresholds.min) {
      // Too fast, might be too easy
      return 'increase';
    }
    
    if (averageTime > thresholds.max) {
      // Too slow, might be too hard
      return 'decrease';
    }
    
    return 'maintain';
  }

  /**
   * Recommend difficulty increase
   */
  private recommendIncrease(
    current: Difficulty,
    score: number,
    metrics: PerformanceMetrics
  ): DifficultyRecommendation {
    const difficultyMap: Record<Difficulty, Difficulty> = {
      easy: 'medium',
      medium: 'hard',
      hard: 'hard', // Stay at hard
    };
    
    const next = difficultyMap[current];
    
    if (next === current) {
      return {
        difficulty: current,
        confidence: 0.9,
        reasoning: `Already at maximum difficulty with excellent performance (${Math.round(score * 100)}% accuracy, ${metrics.streakCount} streak)`,
        suggestedMarks: this.suggestMarks(current, 'increase'),
      };
    }
    
    return {
      difficulty: next,
      confidence: Math.min(0.95, 0.7 + score * 0.3),
      reasoning: `Strong performance warrants increase (${Math.round(score * 100)}% accuracy, ${metrics.streakCount} streak)`,
    };
  }

  /**
   * Recommend difficulty decrease
   */
  private recommendDecrease(
    current: Difficulty,
    score: number,
    metrics: PerformanceMetrics
  ): DifficultyRecommendation {
    const difficultyMap: Record<Difficulty, Difficulty> = {
      easy: 'easy', // Stay at easy
      medium: 'easy',
      hard: 'medium',
    };
    
    const next = difficultyMap[current];
    
    if (next === current) {
      return {
        difficulty: current,
        confidence: 0.9,
        reasoning: `Continue building foundation at ${current} level (${Math.round(score * 100)}% accuracy)`,
        suggestedMarks: this.suggestMarks(current, 'decrease'),
      };
    }
    
    return {
      difficulty: next,
      confidence: Math.min(0.95, 0.7 + (1 - score) * 0.3),
      reasoning: `Struggling with current level (${Math.round(score * 100)}% accuracy), recommend stepping back`,
    };
  }

  /**
   * Recommend based on time analysis
   */
  private recommendBasedOnTime(
    current: Difficulty,
    timeAdjustment: 'increase' | 'decrease',
    score: number
  ): DifficultyRecommendation {
    if (timeAdjustment === 'increase' && score > 0.7) {
      return this.recommendIncrease(current, score, {
        correctCount: 0,
        incorrectCount: 0,
        averageTime: 0,
        averageAttempts: 0,
        streakCount: 0,
        recentAccuracy: score,
      });
    }
    
    if (timeAdjustment === 'decrease' && score < 0.6) {
      return this.recommendDecrease(current, score, {
        correctCount: 0,
        incorrectCount: 0,
        averageTime: 0,
        averageAttempts: 0,
        streakCount: 0,
        recentAccuracy: score,
      });
    }
    
    return {
      difficulty: current,
      confidence: 0.6,
      reasoning: `Time suggests ${timeAdjustment} but accuracy is moderate (${Math.round(score * 100)}%)`,
    };
  }

  /**
   * Suggest mark adjustments
   */
  private suggestMarks(difficulty: Difficulty, direction: 'increase' | 'decrease'): number {
    const markRanges = {
      easy: { min: 1, typical: 3, max: 5 },
      medium: { min: 3, typical: 6, max: 10 },
      hard: { min: 6, typical: 12, max: 20 },
    };
    
    const range = markRanges[difficulty];
    
    if (direction === 'increase') {
      return range.max;
    } else {
      return range.min;
    }
  }

  /**
   * Get difficulty progression path
   */
  getDifficultyProgression(
    startLevel: Difficulty,
    targetLevel: Difficulty,
    currentMetrics: PerformanceMetrics
  ): Difficulty[] {
    const progression: Difficulty[] = [];
    const levels: Difficulty[] = ['easy', 'medium', 'hard'];
    
    const startIndex = levels.indexOf(startLevel);
    const targetIndex = levels.indexOf(targetLevel);
    
    if (startIndex === targetIndex) {
      return [startLevel];
    }
    
    const step = startIndex < targetIndex ? 1 : -1;
    for (let i = startIndex; i !== targetIndex; i += step) {
      progression.push(levels[i]);
      
      // Add intermediate practice if struggling
      if (currentMetrics.recentAccuracy < 0.7) {
        progression.push(levels[i]); // Repeat current level
      }
    }
    progression.push(targetLevel);
    
    return progression;
  }

  /**
   * Calculate confidence interval for recommendation
   */
  getConfidenceInterval(
    metrics: PerformanceMetrics
  ): { lower: number; upper: number; recommended: number } {
    const total = metrics.correctCount + metrics.incorrectCount;
    
    if (total < 5) {
      // Not enough data
      return { lower: 0.3, upper: 0.7, recommended: 0.5 };
    }
    
    const accuracy = metrics.correctCount / total;
    const standardError = Math.sqrt((accuracy * (1 - accuracy)) / total);
    const marginOfError = 1.96 * standardError; // 95% confidence
    
    return {
      lower: Math.max(0, accuracy - marginOfError),
      upper: Math.min(1, accuracy + marginOfError),
      recommended: accuracy,
    };
  }
}

// Singleton instance
let system: AdaptiveDifficultySystem | null = null;

export function getAdaptiveDifficultySystem(): AdaptiveDifficultySystem {
  if (!system) {
    system = new AdaptiveDifficultySystem();
  }
  return system;
}

/**
 * Helper to track student performance over session
 */
export class PerformanceTracker {
  private correct: number = 0;
  private incorrect: number = 0;
  private times: number[] = [];
  private attempts: number[] = [];
  private recentResults: boolean[] = [];
  private currentStreak: number = 0;
  
  recordAttempt(
    correct: boolean,
    timeSeconds: number,
    attemptCount: number = 1
  ): void {
    if (correct) {
      this.correct++;
      this.currentStreak++;
    } else {
      this.incorrect++;
      this.currentStreak = 0;
    }
    
    this.times.push(timeSeconds);
    this.attempts.push(attemptCount);
    this.recentResults.push(correct);
    
    // Keep only last 5 for recent accuracy
    if (this.recentResults.length > 5) {
      this.recentResults.shift();
    }
  }
  
  getMetrics(): PerformanceMetrics {
    const recentCorrect = this.recentResults.filter(r => r).length;
    const recentAccuracy = this.recentResults.length > 0
      ? recentCorrect / this.recentResults.length
      : 0.5;
    
    return {
      correctCount: this.correct,
      incorrectCount: this.incorrect,
      averageTime: this.times.length > 0
        ? this.times.reduce((a, b) => a + b, 0) / this.times.length
        : 60,
      averageAttempts: this.attempts.length > 0
        ? this.attempts.reduce((a, b) => a + b, 0) / this.attempts.length
        : 1,
      streakCount: this.currentStreak,
      recentAccuracy,
    };
  }
  
  reset(): void {
    this.correct = 0;
    this.incorrect = 0;
    this.times = [];
    this.attempts = [];
    this.recentResults = [];
    this.currentStreak = 0;
  }
}