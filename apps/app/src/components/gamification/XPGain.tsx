'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface XPGainProps {
  amount: number;
  isCorrect: boolean;
  show: boolean;
  onComplete?: () => void;
}

export function XPGain({ amount, isCorrect, show, onComplete }: XPGainProps) {
  const [visible, setVisible] = useState(show);

  useEffect(() => {
    if (show) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
        onComplete?.();
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [show, onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center pointer-events-none z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className={`text-4xl sm:text-5xl font-bold ${
              isCorrect ? 'text-green-400' : 'text-yellow-400'
            }`}
            initial={{ scale: 0.5, y: 20 }}
            animate={{ scale: 1, y: -50 }}
            exit={{ scale: 0.8, y: -100, opacity: 0 }}
            transition={{
              type: 'spring',
              stiffness: 400,
              damping: 20,
            }}
            style={{
              textShadow: isCorrect
                ? '0 0 20px rgba(34, 197, 94, 0.5)'
                : '0 0 20px rgba(250, 204, 21, 0.5)',
            }}
          >
            +{amount} XP
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/**
 * A more subtle inline XP gain indicator
 */
export function XPGainInline({ amount, isCorrect }: { amount: number; isCorrect: boolean }) {
  return (
    <motion.span
      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-sm font-medium ${
        isCorrect ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
      }`}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
    >
      +{amount} XP
    </motion.span>
  );
}
