'use client';

import { useState, useEffect } from 'react';
import { getUserXP } from '@/lib/supabase';
import { getOrCreateUser } from '@/lib/supabase';

export interface XPData {
  totalXP: number;
  currentLevel: number;
  xpForCurrentLevel: number;
  xpForNextLevel: number;
  progressPercent: number;
}

export function useXP() {
  const [xpData, setXPData] = useState<XPData | null>(null);
  const [loading, setLoading] = useState(true);

  // XP thresholds for each level
  const LEVEL_THRESHOLDS = [
    { level: 1, xpRequired: 0 },
    { level: 2, xpRequired: 100 },
    { level: 3, xpRequired: 300 },
    { level: 4, xpRequired: 600 },
    { level: 5, xpRequired: 1000 },
    { level: 6, xpRequired: 2000 },
    { level: 7, xpRequired: 5000 },
    { level: 8, xpRequired: 10000 },
  ];

  function calculateXPData(totalXP: number, currentLevel: number): XPData {
    const currentLevelThreshold = LEVEL_THRESHOLDS.find(t => t.level === currentLevel)?.xpRequired || 0;
    const nextLevelThreshold = LEVEL_THRESHOLDS.find(t => t.level === currentLevel + 1)?.xpRequired || currentLevelThreshold;
    
    const xpForCurrentLevel = totalXP - currentLevelThreshold;
    const xpForNextLevel = nextLevelThreshold - currentLevelThreshold;
    const progressPercent = xpForNextLevel > 0 ? Math.round((xpForCurrentLevel / xpForNextLevel) * 100) : 100;

    return {
      totalXP,
      currentLevel,
      xpForCurrentLevel,
      xpForNextLevel,
      progressPercent: Math.min(progressPercent, 100)
    };
  }

  async function fetchXPData() {
    try {
      setLoading(true);
      const user = await getOrCreateUser();
      if (!user) {
        setLoading(false);
        return;
      }

      const { totalXP, currentLevel } = await getUserXP(user.id);
      const xpData = calculateXPData(totalXP, currentLevel);
      setXPData(xpData);
    } catch (error) {
      console.error('Error fetching XP data:', error);
      setXPData(null);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchXPData();
  }, []);

  return {
    xpData,
    loading,
    refetch: fetchXPData
  };
}