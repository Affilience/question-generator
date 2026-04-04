/**
 * Topic Adherence System
 * Ensures generated questions strictly match the requested topic and subtopic
 */

import { Subject } from '@/types';

// Use a simplified Topic interface for compatibility with prompt files
export interface TopicForPrompt {
  id: string;
  name: string;
  subtopics: string[];
}

export interface SubtopicSpecification {
  name: string;
  requiredConcepts: string[];
  optionalConcepts: string[];
  forbiddenConcepts: string[];
  adjacentTopicsToAvoid: string[];
  contexts: string[];
  keywordPatterns: RegExp[];
}

/**
 * Get strong topic adherence constraints for prompts
 */
export function getTopicAdherenceConstraints(
  topic: TopicForPrompt,
  subtopic: string,
  subject: Subject
): string {
  const spec = getSubtopicSpecification(subject, topic.id, subtopic);
  
  if (!spec) {
    // Fallback to basic constraints
    return `
TOPIC ADHERENCE REQUIREMENTS:
==============================
✅ MANDATORY: This question MUST be specifically about "${subtopic}" from the topic "${topic.name}"
❌ FORBIDDEN: DO NOT include content from other topics or subtopics
⚠️ VALIDATION: The question will be rejected if it doesn't directly test ${subtopic} knowledge
`;
  }

  return `
STRICT TOPIC ADHERENCE REQUIREMENTS:
=====================================
TOPIC: ${topic.name}
SUBTOPIC: ${subtopic}

✅ MANDATORY REQUIREMENTS:
• This question MUST be specifically and directly about: "${subtopic}"
• Required concepts that MUST be central to the question: ${spec.requiredConcepts.join(', ')}
• Use contexts from: ${spec.contexts.slice(0, 3).join(', ')}

❌ FORBIDDEN CONTENT (AUTOMATIC REJECTION):
• DO NOT include these concepts: ${spec.forbiddenConcepts.join(', ')}
• DO NOT drift to these adjacent topics: ${spec.adjacentTopicsToAvoid.join(', ')}
• DO NOT mix with other subtopics from ${topic.name}

⚠️ VALIDATION CHECKLIST:
□ Question specifically tests "${subtopic}" knowledge
□ At least ONE required concept is central to solving the question
□ No forbidden concepts appear anywhere in the question
□ The question cannot be answered without ${subtopic} knowledge
□ A student who hasn't studied ${subtopic} would struggle with this question

🎯 FOCUS: Generate a question that would appear in a test section titled "${subtopic}"
`;
}

/**
 * Get detailed specification for a subtopic
 */
export function getSubtopicSpecification(
  subject: Subject,
  topicId: string,
  subtopic: string
): SubtopicSpecification | null {
  const specs = SUBTOPIC_SPECIFICATIONS[subject]?.[topicId]?.[subtopic];
  return specs || null;
}

/**
 * Validate if generated content matches the topic
 */
export function validateTopicAdherence(
  content: string,
  topic: TopicForPrompt,
  subtopic: string,
  subject: Subject
): { isValid: boolean; score: number; issues: string[] } {
  const spec = getSubtopicSpecification(subject, topic.id, subtopic);
  const issues: string[] = [];
  let score = 100;
  
  if (!spec) {
    // Basic validation
    const subtopicMentioned = content.toLowerCase().includes(subtopic.toLowerCase());
    if (!subtopicMentioned) {
      issues.push(`Subtopic "${subtopic}" not clearly referenced`);
      score -= 50;
    }
    return { isValid: score >= 50, score, issues };
  }
  
  // Check for required concepts
  const hasRequiredConcept = spec.requiredConcepts.some(concept => 
    content.toLowerCase().includes(concept.toLowerCase())
  );
  if (!hasRequiredConcept) {
    issues.push('Missing required concepts');
    score -= 40;
  }
  
  // Check for forbidden concepts
  spec.forbiddenConcepts.forEach(forbidden => {
    if (content.toLowerCase().includes(forbidden.toLowerCase())) {
      issues.push(`Contains forbidden concept: ${forbidden}`);
      score -= 30;
    }
  });
  
  // Check for keyword patterns
  const hasKeywordMatch = spec.keywordPatterns.some(pattern => 
    pattern.test(content)
  );
  if (!hasKeywordMatch && spec.keywordPatterns.length > 0) {
    issues.push('Missing expected keyword patterns');
    score -= 20;
  }
  
  return {
    isValid: score >= 60,
    score: Math.max(0, score),
    issues
  };
}

/**
 * Detailed specifications for common subtopics
 * This will be expanded over time
 */
const SUBTOPIC_SPECIFICATIONS: Record<string, Record<string, Record<string, SubtopicSpecification>>> = {
  maths: {
    'algebra': {
      'Expanding brackets': {
        name: 'Expanding brackets',
        requiredConcepts: ['expand', 'brackets', 'multiply', 'simplify'],
        optionalConcepts: ['collect like terms', 'binomial', 'FOIL'],
        forbiddenConcepts: ['factorising', 'solving equations', 'quadratic formula'],
        adjacentTopicsToAvoid: ['Factorising', 'Solving equations'],
        contexts: ['area problems', 'algebraic manipulation', 'expression simplification'],
        keywordPatterns: [/expand/i, /bracket/i, /\([^)]+\)\s*\([^)]+\)/]
      },
      'Factorising': {
        name: 'Factorising',
        requiredConcepts: ['factorise', 'factor', 'common factor', 'brackets'],
        optionalConcepts: ['highest common factor', 'difference of squares', 'quadratic'],
        forbiddenConcepts: ['expanding', 'solving using formula', 'completing square'],
        adjacentTopicsToAvoid: ['Expanding brackets', 'Quadratic formula'],
        contexts: ['simplifying expressions', 'solving by factorising', 'algebraic fractions'],
        keywordPatterns: [/factori[sz]e/i, /factor/i, /common\s+factor/i]
      },
      'Solving linear equations': {
        name: 'Solving linear equations',
        requiredConcepts: ['solve', 'equation', 'linear', 'unknown', '='],
        optionalConcepts: ['inverse operations', 'balance', 'substitute'],
        forbiddenConcepts: ['quadratic', 'x²', 'simultaneous', 'inequality'],
        adjacentTopicsToAvoid: ['Quadratic equations', 'Simultaneous equations', 'Inequalities'],
        contexts: ['finding unknown values', 'word problems', 'perimeter problems'],
        keywordPatterns: [/solve/i, /find\s+(the\s+)?value/i, /equation/i]
      },
      'Quadratic equations': {
        name: 'Quadratic equations',
        requiredConcepts: ['quadratic', 'x²', 'solve', 'equation'],
        optionalConcepts: ['factorising', 'formula', 'completing square', 'roots'],
        forbiddenConcepts: ['linear only', 'cubic', 'simultaneous'],
        adjacentTopicsToAvoid: ['Linear equations', 'Cubic equations', 'Simultaneous equations'],
        contexts: ['projectile motion', 'area optimization', 'profit maximization'],
        keywordPatterns: [/x²|x\^2/i, /quadratic/i, /roots?/i]
      }
    },
    'number': {
      'Fractions': {
        name: 'Fractions',
        requiredConcepts: ['fraction', 'numerator', 'denominator', 'simplify'],
        optionalConcepts: ['mixed number', 'improper', 'equivalent', 'lowest terms'],
        forbiddenConcepts: ['decimal', 'percentage', 'ratio'],
        adjacentTopicsToAvoid: ['Decimals', 'Percentages', 'Ratio'],
        contexts: ['sharing', 'parts of whole', 'recipe scaling'],
        keywordPatterns: [/\d+\/\d+/, /fraction/i, /(?:numerator|denominator)/i]
      },
      'Percentages': {
        name: 'Percentages',
        requiredConcepts: ['percent', '%', 'percentage', 'out of 100'],
        optionalConcepts: ['increase', 'decrease', 'original', 'multiplier'],
        forbiddenConcepts: ['fraction only', 'ratio', 'probability'],
        adjacentTopicsToAvoid: ['Fractions', 'Ratio', 'Probability'],
        contexts: ['sales', 'discounts', 'interest', 'growth', 'tax'],
        keywordPatterns: [/%/, /percent/i, /percentage/i]
      },
      'Standard form': {
        name: 'Standard form',
        requiredConcepts: ['standard form', '× 10', 'power of 10', 'scientific notation'],
        optionalConcepts: ['significant figures', 'ordinary number', 'convert'],
        forbiddenConcepts: ['indices rules', 'surds', 'logarithms'],
        adjacentTopicsToAvoid: ['Indices', 'Surds', 'Logarithms'],
        contexts: ['very large numbers', 'very small numbers', 'astronomical distances', 'microscopic measurements'],
        keywordPatterns: [/\d+(\.\d+)?\s*×\s*10\^[+-]?\d+/, /standard\s+form/i, /scientific\s+notation/i]
      }
    }
  },
  physics: {
    'forces': {
      'Balanced and unbalanced forces': {
        name: 'Balanced and unbalanced forces',
        requiredConcepts: ['balanced', 'unbalanced', 'resultant', 'equilibrium', 'forces'],
        optionalConcepts: ['Newton', 'acceleration', 'constant velocity', 'stationary'],
        forbiddenConcepts: ['momentum', 'energy', 'power', 'waves'],
        adjacentTopicsToAvoid: ['Momentum', 'Energy transfers', 'Work done'],
        contexts: ['objects at rest', 'constant speed motion', 'tug of war', 'floating objects'],
        keywordPatterns: [/balanced/i, /unbalanced/i, /resultant\s+force/i, /equilibrium/i]
      },
      'Newton\'s laws': {
        name: 'Newton\'s laws',
        requiredConcepts: ['Newton', 'law', 'F=ma', 'action', 'reaction', 'inertia'],
        optionalConcepts: ['mass', 'acceleration', 'force pairs', 'motion'],
        forbiddenConcepts: ['energy', 'momentum', 'power', 'waves'],
        adjacentTopicsToAvoid: ['Energy', 'Momentum', 'Power'],
        contexts: ['car acceleration', 'rocket propulsion', 'sports', 'collisions'],
        keywordPatterns: [/Newton's?\s+\w+\s+law/i, /F\s*=\s*ma/i, /action.*reaction/i]
      }
    },
    'electricity': {
      'Current and charge': {
        name: 'Current and charge',
        requiredConcepts: ['current', 'charge', 'ampere', 'coulomb', 'flow'],
        optionalConcepts: ['electrons', 'conventional current', 'ammeter', 'Q=It'],
        forbiddenConcepts: ['voltage', 'resistance', 'power', 'magnetic'],
        adjacentTopicsToAvoid: ['Voltage', 'Resistance', 'Power'],
        contexts: ['circuit measurements', 'charge flow', 'battery discharge', 'lightning'],
        keywordPatterns: [/current/i, /charge/i, /amp(ere)?s?/i, /coulomb/i, /Q\s*=\s*It/i]
      },
      'Resistance': {
        name: 'Resistance',
        requiredConcepts: ['resistance', 'ohm', 'resistor', 'oppose', 'current'],
        optionalConcepts: ['variable resistor', 'factors affecting', 'temperature', 'length'],
        forbiddenConcepts: ['capacitor', 'inductor', 'transformer', 'magnetic'],
        adjacentTopicsToAvoid: ['Capacitance', 'Inductance', 'Transformers'],
        contexts: ['circuit components', 'wire properties', 'heating elements', 'dimmer switches'],
        keywordPatterns: [/resistance/i, /ohm/i, /resistor/i, /V\s*=\s*IR/i]
      }
    }
  },
  chemistry: {
    'atomic-structure': {
      'Atoms and elements': {
        name: 'Atoms and elements',
        requiredConcepts: ['atom', 'element', 'proton', 'neutron', 'electron'],
        optionalConcepts: ['nucleus', 'atomic number', 'mass number', 'periodic table'],
        forbiddenConcepts: ['compound', 'molecule', 'ion', 'bonding'],
        adjacentTopicsToAvoid: ['Compounds', 'Ions', 'Bonding'],
        contexts: ['element identification', 'atomic structure', 'subatomic particles'],
        keywordPatterns: [/atom/i, /element/i, /proton/i, /electron/i]
      },
      'Ions': {
        name: 'Ions',
        requiredConcepts: ['ion', 'charge', 'electron loss', 'electron gain', 'charged'],
        optionalConcepts: ['cation', 'anion', 'ionic', 'metal ions'],
        forbiddenConcepts: ['covalent', 'metallic bonding', 'molecules'],
        adjacentTopicsToAvoid: ['Covalent bonding', 'Metallic bonding'],
        contexts: ['ion formation', 'charged particles', 'salt formation', 'electrolysis'],
        keywordPatterns: [/ion/i, /cat(ion)?/i, /an(ion)?/i, /charged?\s+(?:atom|particle)/i]
      }
    },
    'reactions': {
      'Acids and alkalis': {
        name: 'Acids and alkalis',
        requiredConcepts: ['acid', 'alkali', 'pH', 'neutralisation', 'base'],
        optionalConcepts: ['indicator', 'litmus', 'universal indicator', 'hydrogen ions'],
        forbiddenConcepts: ['redox', 'oxidation', 'organic', 'polymerisation'],
        adjacentTopicsToAvoid: ['Redox', 'Organic chemistry', 'Polymers'],
        contexts: ['pH testing', 'neutralisation reactions', 'acid rain', 'indigestion remedies'],
        keywordPatterns: [/acid/i, /alka(li|line)/i, /pH/i, /neutrali[sz]/i]
      }
    }
  },
  biology: {
    'cells': {
      'Animal cells': {
        name: 'Animal cells',
        requiredConcepts: ['animal cell', 'nucleus', 'cytoplasm', 'cell membrane', 'mitochondria'],
        optionalConcepts: ['ribosomes', 'organelles', 'respiration', 'specialized cells'],
        forbiddenConcepts: ['cell wall', 'chloroplast', 'vacuole', 'photosynthesis'],
        adjacentTopicsToAvoid: ['Plant cells', 'Bacterial cells', 'Photosynthesis'],
        contexts: ['cell structure', 'microscopy', 'cell function', 'human cells'],
        keywordPatterns: [/animal\s+cell/i, /nucleus/i, /mitochondri/i]
      },
      'Plant cells': {
        name: 'Plant cells',
        requiredConcepts: ['plant cell', 'cell wall', 'chloroplast', 'vacuole', 'cellulose'],
        optionalConcepts: ['photosynthesis', 'chlorophyll', 'permanent vacuole', 'specialized cells'],
        forbiddenConcepts: ['animal only', 'bacterial', 'virus'],
        adjacentTopicsToAvoid: ['Animal cells', 'Bacterial cells', 'Viruses'],
        contexts: ['cell structure', 'microscopy', 'photosynthesis location', 'plant tissues'],
        keywordPatterns: [/plant\s+cell/i, /cell\s+wall/i, /chloroplast/i, /vacuole/i]
      }
    }
  }
};

/**
 * Get a list of adjacent topics to avoid for better topic isolation
 */
export function getAdjacentTopicsToAvoid(
  subject: Subject,
  topicId: string,
  subtopic: string
): string[] {
  const spec = getSubtopicSpecification(subject, topicId, subtopic);
  return spec?.adjacentTopicsToAvoid || [];
}

/**
 * Generate topic reinforcement for the end of prompts
 */
export function getTopicReinforcement(
  topic: TopicForPrompt,
  subtopic: string
): string {
  return `

FINAL TOPIC CHECK:
==================
Before submitting your response, verify:
✓ The question is SPECIFICALLY about "${subtopic}"
✓ A student studying ONLY "${subtopic}" could answer this
✓ The question would fit perfectly in a worksheet titled "${subtopic} Practice"
✓ You haven't accidentally drifted to related topics

If any of these checks fail, regenerate the question to focus solely on "${subtopic}".
`;
}