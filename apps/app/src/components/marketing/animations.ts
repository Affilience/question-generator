// Shared animation variants for marketing pages
export const createAnimationVariants = (prefersReducedMotion: boolean | null) => ({
  fadeInUp: {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: prefersReducedMotion ? 0.2 : 0.6, ease: [0.25, 0.1, 0.25, 1] as const }
    }
  },
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0.05 : 0.08,
        delayChildren: 0.1
      }
    }
  },
  scaleIn: {
    hidden: { opacity: 0, scale: prefersReducedMotion ? 1 : 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: prefersReducedMotion ? 0.2 : 0.5, ease: [0.25, 0.1, 0.25, 1] as const }
    }
  }
});
