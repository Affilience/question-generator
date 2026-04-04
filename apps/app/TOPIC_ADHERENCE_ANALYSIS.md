# Topic and Subtopic Adherence Analysis

## Current System Investigation

### 1. How Topics and Subtopics are Currently Handled

#### Topic Definition Structure
- Topics are defined in individual files per subject/board/level combination
- Each topic has:
  - `id`: Unique identifier
  - `name`: Display name
  - `subtopics`: Array of subtopic strings
  - Additional metadata (icon, color, etc.)

#### Topic Retrieval
- Topics are retrieved using `getTopicByIdSubjectBoardAndLevel()`
- Falls back to generic `getTopicById()` if specific lookup fails
- Topics are passed to prompt generation functions

### 2. Current Problems Identified

#### Problem 1: Weak Topic/Subtopic Constraints in Prompts
**Issue:** Prompts only mention the topic/subtopic but don't enforce strict adherence

Example from current prompts:
```
Topic: ${topic.name}
Focus: ${focusArea}
```

**Problem:** This is just informational - the AI can drift to related topics without penalty.

#### Problem 2: No Validation of Generated Content
**Issue:** After generation, there's no check to verify the question actually matches the requested topic/subtopic

#### Problem 3: Subtopic Selection is Random When Not Specified
**Issue:** When subtopic isn't provided, system randomly selects one:
```typescript
const focusArea = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];
```

#### Problem 4: Generic Fallback Prompts
**Issue:** When topic lookup fails, system uses generic prompts that have even weaker topic adherence

#### Problem 5: No Topic-Specific Keywords or Concepts Enforcement
**Issue:** Prompts don't include must-have concepts or forbidden topics to prevent drift

### 3. Impact on User Experience

1. **Individual Question Generation:** 
   - Users click "Quadratic Equations" subtopic
   - May receive questions about linear equations or general algebra
   
2. **Paper Generation:**
   - Select specific topics for a paper
   - Questions drift to adjacent topics
   - Paper doesn't properly assess intended topics

### 4. Improvement Opportunities

#### Improvement 1: Stronger Topic Constraints in Prompts
Add explicit constraints:
```
CRITICAL TOPIC REQUIREMENTS:
- This question MUST be specifically about: ${subtopic}
- DO NOT include content from other topics
- Key concepts that MUST appear: [list specific concepts]
- Forbidden topics (DO NOT mention): [list adjacent topics to avoid]
```

#### Improvement 2: Topic Validation System
Create validation function to check if generated content matches topic:
- Check for required keywords/concepts
- Flag if forbidden topics appear
- Score topic relevance (0-100)
- Regenerate if score too low

#### Improvement 3: Subtopic Knowledge Base
Create detailed subtopic specifications:
```typescript
interface SubtopicSpec {
  name: string;
  requiredConcepts: string[];
  optionalConcepts: string[];
  forbiddenConcepts: string[];
  exampleQuestions: string[];
  commonMisconceptions: string[];
}
```

#### Improvement 4: Enhanced Topic Guidance
Add topic-specific guidance to each prompt:
```typescript
const TOPIC_GUIDANCE = {
  'quadratic-equations': {
    mustInclude: ['x²', 'quadratic formula', 'factorisation'],
    mayInclude: ['completing the square', 'discriminant'],
    mustNotInclude: ['linear equations', 'cubic equations'],
    contexts: ['projectile motion', 'area problems', 'optimization']
  }
}
```

#### Improvement 5: Post-Generation Validation
Implement validation after generation:
1. Extract key concepts from generated question
2. Compare against topic requirements
3. Calculate adherence score
4. Retry if score below threshold
5. Log drift patterns for improvement

### 5. Recommended Implementation Plan

#### Phase 1: Immediate Improvements (Quick Wins)
1. Add stronger constraint language to all prompts
2. Add "MUST be about" and "DO NOT include" sections
3. List specific required concepts per subtopic

#### Phase 2: Topic Knowledge Base
1. Create subtopic specification files
2. Define required/forbidden concepts per subtopic
3. Add example questions for each subtopic
4. Integrate into prompt generation

#### Phase 3: Validation System
1. Implement topic adherence scoring
2. Add post-generation validation
3. Automatic retry on low scores
4. Logging and monitoring of drift

#### Phase 4: Advanced Features
1. Machine learning model for topic classification
2. Automatic concept extraction
3. Dynamic prompt adjustment based on drift patterns
4. User feedback integration

### 6. Example Enhanced Prompt Structure

```typescript
function generateEnhancedPrompt(topic, subtopic) {
  const spec = getSubtopicSpec(subtopic);
  
  return `
STRICT TOPIC ADHERENCE REQUIREMENTS:
=====================================
TOPIC: ${topic.name}
SUBTOPIC: ${subtopic}

MANDATORY REQUIREMENTS:
- This question MUST be specifically about: ${subtopic}
- Required concepts that MUST appear: ${spec.requiredConcepts.join(', ')}
- The question context MUST relate to: ${spec.contexts.join(' OR ')}

FORBIDDEN CONTENT (AUTOMATIC REJECTION IF PRESENT):
- DO NOT include: ${spec.forbiddenConcepts.join(', ')}
- DO NOT drift to these related topics: ${spec.adjacentTopics.join(', ')}

VALIDATION CHECKLIST:
□ Question directly tests ${subtopic} knowledge
□ At least one required concept is central to the question
□ No forbidden concepts appear
□ Difficulty appropriate for ${difficulty} level
□ Context is realistic and engaging

[Rest of prompt...]
`;
}
```

### 7. Metrics for Success

1. **Topic Adherence Score:** Target 95%+ match rate
2. **User Complaints:** Reduce "wrong topic" complaints by 90%
3. **Retry Rate:** Keep regeneration due to drift under 5%
4. **Coverage:** Ensure all subtopics have specifications
5. **Performance:** Maintain generation speed within 10% of current

## Conclusion

The current system has weak topic enforcement, relying on the AI to interpret topic/subtopic mentions without strict constraints. This leads to question drift and user frustration. By implementing stronger constraints, validation systems, and topic-specific guidance, we can dramatically improve topic adherence while maintaining question quality and variety.