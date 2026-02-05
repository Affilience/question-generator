// Quick test of getQuestionConfig for maths
function getQuestionConfig(subject, level, difficulty, board) {
  // Simulate the logic from essay-subject-config.ts
  
  // First check board-specific configs
  const boardSpecificConfigs = {
    'maths': {
      'aqa': {
        'alevel': {
          'easy': null,
          'medium': null, 
          'hard': null
        },
        'gcse': {
          'easy': null,
          'medium': null,
          'hard': null
        }
      }
    }
  };
  
  const boardConfigs = boardSpecificConfigs[subject];
  if (boardConfigs && board) {
    const boardConfig = boardConfigs[board];
    if (boardConfig) {
      const levelConfig = level === 'a-level' ? boardConfig.alevel : boardConfig.gcse;
      const result = levelConfig[difficulty];
      console.log(`Board-specific config for ${subject}/${level}/${difficulty}/${board}: ${result}`);
      return result;
    }
  }
  
  // Fall back to legacy config  
  const legacyConfigs = {
    'maths': {
      'alevel': {
        'easy': null,
        'medium': null,
        'hard': null
      },
      'gcse': {
        'easy': null,
        'medium': null,
        'hard': null  
      }
    }
  };
  
  const legacy = legacyConfigs[subject];
  if (legacy) {
    const levelConfig = level === 'a-level' ? legacy.alevel : legacy.gcse;
    const result = levelConfig[difficulty];
    console.log(`Legacy config for ${subject}/${level}/${difficulty}: ${result}`);
    return result;
  }
  
  console.log(`No config found for ${subject}/${level}/${difficulty}/${board}`);
  return null;
}

// Test the exact case the user is experiencing
console.log('Testing maths A-Level medium AQA:');
const result = getQuestionConfig('maths', 'a-level', 'medium', 'aqa');
console.log(`Final result: ${result}`);

if (result === null) {
  console.log('✅ Correctly returns null - should use subject-specific mark ranges');
} else {
  console.log('❌ Returns a config - this is the problem!');
}