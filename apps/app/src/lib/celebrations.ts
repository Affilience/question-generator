/**
 * Celebration effects using canvas-confetti
 */

import confetti from 'canvas-confetti';

/**
 * Basic confetti burst for correct answers
 */
export function triggerCorrectAnswer(): void {
  confetti({
    particleCount: 50,
    spread: 60,
    origin: { y: 0.7 },
    colors: ['#22c55e', '#4ade80', '#86efac'],
    disableForReducedMotion: true,
  });
}

/**
 * Level up celebration - multi-burst effect
 */
export function triggerLevelUp(): void {
  const duration = 2000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };

  const colors = ['#3b82f6', '#8b5cf6', '#ec4899', '#f59e0b'];

  const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

  const interval = window.setInterval(() => {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);

    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      colors,
      disableForReducedMotion: true,
    });
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      colors,
      disableForReducedMotion: true,
    });
  }, 250);
}

/**
 * Achievement unlocked celebration
 */
export function triggerAchievement(): void {
  const count = 100;
  const defaults = {
    origin: { y: 0.7 },
    zIndex: 9999,
    disableForReducedMotion: true,
  };

  function fire(particleRatio: number, opts: confetti.Options) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio),
    });
  }

  fire(0.25, {
    spread: 26,
    startVelocity: 55,
    colors: ['#fbbf24', '#f59e0b'],
  });
  fire(0.2, {
    spread: 60,
    colors: ['#fbbf24', '#f59e0b', '#d97706'],
  });
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8,
    colors: ['#fbbf24', '#f59e0b', '#d97706'],
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2,
    colors: ['#fbbf24', '#f59e0b'],
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 45,
    colors: ['#fbbf24', '#f59e0b', '#d97706'],
  });
}

/**
 * Streak milestone celebration - fire themed
 */
export function triggerStreakMilestone(): void {
  const duration = 1500;
  const animationEnd = Date.now() + duration;
  const colors = ['#ef4444', '#f97316', '#eab308', '#fbbf24'];

  (function frame() {
    confetti({
      particleCount: 3,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors,
      zIndex: 9999,
      disableForReducedMotion: true,
    });
    confetti({
      particleCount: 3,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors,
      zIndex: 9999,
      disableForReducedMotion: true,
    });

    if (Date.now() < animationEnd) {
      requestAnimationFrame(frame);
    }
  })();
}

/**
 * Perfect score celebration
 */
export function triggerPerfectScore(): void {
  const scalar = 2;
  const star = confetti.shapeFromText({ text: '⭐', scalar });
  const trophy = confetti.shapeFromText({ text: '🏆', scalar });

  const defaults = {
    spread: 360,
    ticks: 100,
    gravity: 0.5,
    decay: 0.94,
    startVelocity: 20,
    zIndex: 9999,
    disableForReducedMotion: true,
  };

  confetti({
    ...defaults,
    particleCount: 20,
    scalar: scalar * 0.75,
    shapes: [star],
  });

  confetti({
    ...defaults,
    particleCount: 10,
    scalar,
    shapes: [trophy],
  });
}

/**
 * Paper completed celebration
 */
export function triggerPaperComplete(): void {
  const duration = 3000;
  const animationEnd = Date.now() + duration;

  const colors = ['#3b82f6', '#22c55e', '#8b5cf6', '#f59e0b', '#ec4899'];

  (function frame() {
    confetti({
      particleCount: 5,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.6 },
      colors,
      zIndex: 9999,
      disableForReducedMotion: true,
    });
    confetti({
      particleCount: 5,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.6 },
      colors,
      zIndex: 9999,
      disableForReducedMotion: true,
    });

    if (Date.now() < animationEnd) {
      requestAnimationFrame(frame);
    }
  })();
}

/**
 * Century milestone (100 questions)
 */
export function triggerCentury(): void {
  const scalar = 2;
  const hundred = confetti.shapeFromText({ text: '💯', scalar });

  confetti({
    spread: 360,
    ticks: 100,
    gravity: 0.5,
    decay: 0.94,
    startVelocity: 30,
    particleCount: 30,
    scalar,
    shapes: [hundred],
    zIndex: 9999,
    disableForReducedMotion: true,
  });

  // Also trigger regular confetti
  setTimeout(() => {
    confetti({
      particleCount: 100,
      spread: 100,
      origin: { y: 0.6 },
      colors: ['#3b82f6', '#22c55e', '#8b5cf6', '#f59e0b'],
      zIndex: 9999,
      disableForReducedMotion: true,
    });
  }, 300);
}

/**
 * Small celebration for correct streak milestones (5, 10, etc.)
 */
export function triggerCorrectStreak(streakCount: number): void {
  const intensity = Math.min(streakCount / 20, 1); // Max out at 20

  confetti({
    particleCount: 30 + Math.floor(intensity * 70),
    spread: 50 + Math.floor(intensity * 50),
    origin: { y: 0.65 },
    colors: ['#22c55e', '#4ade80', '#86efac', '#fbbf24'],
    startVelocity: 25 + Math.floor(intensity * 20),
    zIndex: 9999,
    disableForReducedMotion: true,
  });
}

/**
 * Trigger celebration based on event type
 */
export type CelebrationEvent =
  | 'correct_answer'
  | 'level_up'
  | 'achievement'
  | 'streak_milestone'
  | 'perfect_score'
  | 'paper_complete'
  | 'century'
  | 'correct_streak';

export function triggerCelebration(
  event: CelebrationEvent,
  options?: { streakCount?: number }
): void {
  switch (event) {
    case 'correct_answer':
      triggerCorrectAnswer();
      break;
    case 'level_up':
      triggerLevelUp();
      break;
    case 'achievement':
      triggerAchievement();
      break;
    case 'streak_milestone':
      triggerStreakMilestone();
      break;
    case 'perfect_score':
      triggerPerfectScore();
      break;
    case 'paper_complete':
      triggerPaperComplete();
      break;
    case 'century':
      triggerCentury();
      break;
    case 'correct_streak':
      triggerCorrectStreak(options?.streakCount ?? 5);
      break;
  }
}

/**
 * Check if celebrations should be shown based on user preferences
 */
export function shouldShowCelebrations(): boolean {
  if (typeof window === 'undefined') return true;

  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return false;

  // Check user settings (if stored)
  const userPreference = localStorage.getItem('celebrations_enabled');
  if (userPreference !== null) {
    return userPreference === 'true';
  }

  return true; // Default to enabled
}

/**
 * Safe trigger that respects user preferences
 */
export function safeTriggerCelebration(
  event: CelebrationEvent,
  options?: { streakCount?: number }
): void {
  if (shouldShowCelebrations()) {
    triggerCelebration(event, options);
  }
}
