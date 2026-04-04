/**
 * Smart diagram caching system
 * Caches frequently used diagrams to improve performance
 */

import { DiagramSpec } from '@/types/diagram';
import { Subject, QuestionType, Difficulty } from '@/types';
import { createHash } from 'crypto';

interface CachedDiagram {
  id: string;
  spec: DiagramSpec;
  subject: Subject;
  type: string;
  params: any;
  createdAt: Date;
  lastUsed: Date;
  useCount: number;
  tags: string[];
}

class DiagramCache {
  private cache: Map<string, CachedDiagram> = new Map();
  private maxCacheSize: number = 500;
  private maxAge: number = 24 * 60 * 60 * 1000; // 24 hours

  /**
   * Generate cache key from parameters
   */
  private generateCacheKey(
    subject: Subject,
    type: string,
    params: any
  ): string {
    const data = JSON.stringify({ subject, type, params });
    return createHash('md5').update(data).digest('hex');
  }

  /**
   * Get diagram from cache
   */
  get(
    subject: Subject,
    type: string,
    params: any
  ): DiagramSpec | null {
    const key = this.generateCacheKey(subject, type, params);
    const cached = this.cache.get(key);
    
    if (!cached) return null;
    
    // Check if cache is expired
    const age = Date.now() - cached.createdAt.getTime();
    if (age > this.maxAge) {
      this.cache.delete(key);
      return null;
    }
    
    // Update usage stats
    cached.lastUsed = new Date();
    cached.useCount++;
    
    return cached.spec;
  }

  /**
   * Store diagram in cache
   */
  set(
    subject: Subject,
    type: string,
    params: any,
    spec: DiagramSpec,
    tags: string[] = []
  ): void {
    const key = this.generateCacheKey(subject, type, params);
    
    // Evict old entries if cache is full
    if (this.cache.size >= this.maxCacheSize) {
      this.evictLeastUsed();
    }
    
    this.cache.set(key, {
      id: key,
      spec,
      subject,
      type,
      params,
      createdAt: new Date(),
      lastUsed: new Date(),
      useCount: 1,
      tags,
    });
  }

  /**
   * Get similar diagrams from cache
   */
  getSimilar(
    subject: Subject,
    type: string,
    limit: number = 5
  ): DiagramSpec[] {
    const similar: CachedDiagram[] = [];
    
    for (const cached of this.cache.values()) {
      if (cached.subject === subject && cached.type === type) {
        similar.push(cached);
      }
    }
    
    // Sort by use count and recency
    similar.sort((a, b) => {
      const scoreA = a.useCount + (Date.now() - a.lastUsed.getTime()) / 1000000;
      const scoreB = b.useCount + (Date.now() - b.lastUsed.getTime()) / 1000000;
      return scoreB - scoreA;
    });
    
    return similar.slice(0, limit).map(c => c.spec);
  }

  /**
   * Evict least recently used item
   */
  private evictLeastUsed(): void {
    let oldest: CachedDiagram | null = null;
    let oldestKey: string | null = null;
    
    for (const [key, cached] of this.cache.entries()) {
      if (!oldest || cached.lastUsed < oldest.lastUsed) {
        oldest = cached;
        oldestKey = key;
      }
    }
    
    if (oldestKey) {
      this.cache.delete(oldestKey);
    }
  }

  /**
   * Clear entire cache
   */
  clear(): void {
    this.cache.clear();
  }

  /**
   * Get cache statistics
   */
  getStats(): {
    size: number;
    subjects: Record<string, number>;
    types: Record<string, number>;
    averageAge: number;
    totalUses: number;
  } {
    const stats = {
      size: this.cache.size,
      subjects: {} as Record<string, number>,
      types: {} as Record<string, number>,
      averageAge: 0,
      totalUses: 0,
    };
    
    let totalAge = 0;
    
    for (const cached of this.cache.values()) {
      // Count by subject
      stats.subjects[cached.subject] = (stats.subjects[cached.subject] || 0) + 1;
      
      // Count by type
      stats.types[cached.type] = (stats.types[cached.type] || 0) + 1;
      
      // Calculate age
      totalAge += Date.now() - cached.createdAt.getTime();
      
      // Total uses
      stats.totalUses += cached.useCount;
    }
    
    if (this.cache.size > 0) {
      stats.averageAge = totalAge / this.cache.size;
    }
    
    return stats;
  }

  /**
   * Preload common diagrams
   */
  preloadCommon(subject: Subject): void {
    // This would be called on app init to preload frequently used diagrams
    const commonTypes = {
      maths: ['coordinate-plane', 'triangle', 'circle'],
      physics: ['force-diagram', 'circuit-diagram'],
      chemistry: ['molecular-structure', 'apparatus'],
      biology: ['cell-diagram', 'microscopy'],
      geography: ['map', 'cross-section'],
    };
    
    const types = commonTypes[subject as keyof typeof commonTypes] || [];
    
    // In production, this would generate and cache common diagram variations
    console.log(`Preloading ${types.length} diagram types for ${subject}`);
  }
}

// Singleton instance
export const diagramCache = new DiagramCache();

/**
 * Helper function to get or generate diagram with caching
 */
export async function getCachedDiagram(
  subject: Subject,
  type: string,
  params: any,
  generator: () => DiagramSpec
): Promise<DiagramSpec> {
  // Try to get from cache first
  const cached = diagramCache.get(subject, type, params);
  if (cached) {
    console.log(`Cache hit for ${subject} ${type} diagram`);
    return cached;
  }
  
  // Generate new diagram
  console.log(`Cache miss for ${subject} ${type} diagram - generating new`);
  const spec = generator();
  
  // Store in cache
  diagramCache.set(subject, type, params, spec);
  
  return spec;
}

/**
 * Variation generator - creates slight variations of cached diagrams
 */
export function createVariation(
  baseSpec: DiagramSpec,
  variationType: 'values' | 'positions' | 'colors' | 'labels'
): DiagramSpec {
  const varied = JSON.parse(JSON.stringify(baseSpec)); // Deep clone
  
  switch (variationType) {
    case 'values':
      // Change numerical values slightly
      if (varied.elements) {
        varied.elements.forEach((el: any) => {
          if ('value' in el) {
            el.value = el.value * (0.8 + Math.random() * 0.4);
          }
          if ('radius' in el) {
            el.radius = el.radius * (0.9 + Math.random() * 0.2);
          }
        });
      }
      break;
      
    case 'positions':
      // Slightly adjust positions
      if (varied.elements) {
        varied.elements.forEach((el: any) => {
          if ('x' in el && 'y' in el) {
            el.x += (Math.random() - 0.5) * 20;
            el.y += (Math.random() - 0.5) * 20;
          }
        });
      }
      break;
      
    case 'colors':
      // Change colors
      const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7'];
      if (varied.elements) {
        varied.elements.forEach((el: any) => {
          if ('color' in el) {
            el.color = colors[Math.floor(Math.random() * colors.length)];
          }
        });
      }
      break;
      
    case 'labels':
      // Generate different labels
      const labelVariations: Record<string, string[]> = {
        'A': ['P', 'X', 'M'],
        'B': ['Q', 'Y', 'N'],
        'C': ['R', 'Z', 'O'],
      };
      if (varied.elements) {
        varied.elements.forEach((el: any) => {
          if ('label' in el && labelVariations[el.label]) {
            const variations = labelVariations[el.label];
            el.label = variations[Math.floor(Math.random() * variations.length)];
          }
        });
      }
      break;
  }
  
  return varied;
}