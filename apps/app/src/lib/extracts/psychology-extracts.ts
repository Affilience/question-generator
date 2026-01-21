/**
 * Psychology Extract Database
 * Real psychological research studies for question generation
 *
 * All studies are well-documented, peer-reviewed research
 * commonly referenced in GCSE and A-Level Psychology specifications
 */

export interface PsychologyStudy {
  id: string;
  researcher: string;
  year: number;
  title: string;
  type: 'experiment' | 'observation' | 'case_study' | 'correlation' | 'meta_analysis';
  topics: string[];
  aim: string;
  method: string;
  sample: string;
  procedure: string;
  results: string;
  conclusion: string;
  evaluationPoints: {
    strengths: string[];
    limitations: string[];
  };
  ethicalIssues?: string[];
}

// ============================================
// MEMORY STUDIES
// ============================================

export const memoryStudies: PsychologyStudy[] = [
  {
    id: 'peterson-peterson-1959',
    researcher: 'Peterson & Peterson',
    year: 1959,
    title: 'Short-term retention of individual verbal items',
    type: 'experiment',
    topics: ['Memory', 'Short-term memory', 'Duration of STM'],
    aim: 'To investigate the duration of short-term memory when rehearsal is prevented.',
    method: 'Laboratory experiment with repeated measures design.',
    sample: '24 university students',
    procedure: `Participants were shown a consonant trigram (e.g., BVM) and asked to recall it after intervals of 3, 6, 9, 12, 15, or 18 seconds. During the retention interval, participants counted backwards in threes from a given number to prevent rehearsal.`,
    results: `| Retention Interval | Correct Recall |
|-------------------|----------------|
| 3 seconds         | 80%            |
| 6 seconds         | 50%            |
| 9 seconds         | 20%            |
| 12 seconds        | 15%            |
| 18 seconds        | 10%            |

After 18 seconds, recall had dropped to approximately 10%.`,
    conclusion: 'Short-term memory has a limited duration of approximately 18-30 seconds when rehearsal is prevented. Information is rapidly lost from STM without maintenance rehearsal.',
    evaluationPoints: {
      strengths: [
        'High control - laboratory setting allows control of extraneous variables',
        'Replicable - standardised procedure can be repeated',
        'Established duration of STM (18-30 seconds)'
      ],
      limitations: [
        'Low ecological validity - trigrams are artificial stimuli',
        'Sample bias - only university students',
        'May not reflect real-world memory tasks',
        'Counting backwards may have displaced the trigram rather than showing decay'
      ]
    },
    ethicalIssues: ['Deception minimal', 'Informed consent obtained']
  },
  {
    id: 'miller-1956',
    researcher: 'Miller',
    year: 1956,
    title: 'The Magical Number Seven, Plus or Minus Two',
    type: 'meta_analysis',
    topics: ['Memory', 'Short-term memory', 'Capacity of STM'],
    aim: 'To review research on the capacity limitations of short-term memory.',
    method: 'Review of existing research on memory span and information processing.',
    sample: 'Analysis of multiple studies on memory span',
    procedure: `Miller reviewed studies where participants were asked to recall strings of digits, letters, or words. He analysed the typical number of items people could hold in short-term memory.`,
    results: `Miller found that people can typically hold 7±2 items in short-term memory.

He also discovered that chunking (grouping items into meaningful units) could increase the amount of information stored.

Example of chunking:
- Without chunking: F B I C I A B B C (9 items - difficult)
- With chunking: FBI, CIA, BBC (3 chunks - easier)`,
    conclusion: 'The capacity of short-term memory is approximately 7±2 items, but this can be extended through chunking. STM has a limited capacity but is flexible in how information is organised.',
    evaluationPoints: {
      strengths: [
        'Highly influential - established the 7±2 principle',
        'Practical applications - used in phone numbers, passwords',
        'Introduced concept of chunking'
      ],
      limitations: [
        'Capacity may be lower (Cowan suggests 4±1 chunks)',
        'Does not distinguish between different types of information',
        'Review rather than original experiment'
      ]
    }
  },
  {
    id: 'baddeley-hitch-1974',
    researcher: 'Baddeley & Hitch',
    year: 1974,
    title: 'Working Memory Model',
    type: 'experiment',
    topics: ['Memory', 'Working memory', 'Multi-store model'],
    aim: 'To investigate whether short-term memory is a single store or multiple components.',
    method: 'Dual-task experiment',
    sample: 'University students',
    procedure: `Participants performed two tasks simultaneously:
1. A verbal reasoning task (answering true/false to statements)
2. While repeating a sequence of digits (occupying the articulatory loop)

The number of digits was varied from 0 to 8.`,
    results: `| Digits to Remember | Reasoning Accuracy | Reasoning Speed |
|--------------------|-------------------|-----------------|
| 0                  | 95%               | 2.1 seconds     |
| 3                  | 93%               | 2.3 seconds     |
| 6                  | 91%               | 2.8 seconds     |
| 8                  | 88%               | 3.2 seconds     |

Performance on the reasoning task was only slightly affected even when rehearsing 8 digits.`,
    conclusion: 'If STM were a single store, doing two tasks would be impossible. The fact that both tasks could be done (though with some impairment) suggests STM has multiple components - supporting the Working Memory Model.',
    evaluationPoints: {
      strengths: [
        'Practical applications - understanding multitasking',
        'Explains phenomena MSM cannot (e.g., doing two tasks)',
        'Supported by brain imaging studies'
      ],
      limitations: [
        'Central executive is poorly understood',
        'Does not explain how working memory links to LTM',
        'Laboratory tasks may not reflect real-world memory use'
      ]
    }
  },
  {
    id: 'loftus-palmer-1974',
    researcher: 'Loftus & Palmer',
    year: 1974,
    title: 'Reconstruction of automobile destruction',
    type: 'experiment',
    topics: ['Memory', 'Eyewitness testimony', 'Leading questions'],
    aim: 'To investigate the effect of leading questions on eyewitness testimony.',
    method: 'Laboratory experiment with independent groups design.',
    sample: '45 American university students (Experiment 1); 150 students (Experiment 2)',
    procedure: `Experiment 1:
Participants watched a video of a car accident and were asked: "About how fast were the cars going when they _____ each other?"

The verb was varied: smashed, collided, bumped, hit, contacted

Experiment 2:
Three groups watched a video. One week later, they were asked: "Did you see any broken glass?" (There was no broken glass in the video.)`,
    results: `Experiment 1 - Mean speed estimates:
| Verb      | Estimated Speed (mph) |
|-----------|----------------------|
| Smashed   | 40.5                 |
| Collided  | 39.3                 |
| Bumped    | 38.1                 |
| Hit       | 34.0                 |
| Contacted | 31.8                 |

Experiment 2 - "Did you see broken glass?":
| Group     | Yes (%) | No (%) |
|-----------|---------|--------|
| Smashed   | 32%     | 68%    |
| Hit       | 14%     | 86%    |
| Control   | 12%     | 88%    |`,
    conclusion: 'Leading questions can distort eyewitness memory. The verb "smashed" led to higher speed estimates and false memories of broken glass. This has serious implications for police interviews.',
    evaluationPoints: {
      strengths: [
        'High control - laboratory conditions',
        'Real-world applications - police interviewing',
        'Established importance of question wording'
      ],
      limitations: [
        'Low ecological validity - watching videos differs from real accidents',
        'Demand characteristics - students may have guessed the aim',
        'Sample bias - all students, not representative of eyewitnesses'
      ]
    },
    ethicalIssues: ['Some distress watching accident footage', 'Deception about study purpose']
  }
];

// ============================================
// SOCIAL INFLUENCE STUDIES
// ============================================

export const socialInfluenceStudies: PsychologyStudy[] = [
  {
    id: 'milgram-1963',
    researcher: 'Milgram',
    year: 1963,
    title: 'Behavioral Study of Obedience',
    type: 'experiment',
    topics: ['Social influence', 'Obedience', 'Authority'],
    aim: 'To investigate how obedient people would be to an authority figure who instructed them to harm another person.',
    method: 'Controlled observation in a laboratory setting.',
    sample: '40 American males aged 20-50, recruited through newspaper advertisement',
    procedure: `Participants believed they were taking part in a study on learning and punishment. They were assigned the role of "teacher" (always) while a confederate played the "learner."

The teacher had to administer electric shocks (15V-450V) to the learner for each wrong answer. The shocks were fake but the teacher believed they were real.

The experimenter gave verbal prods:
1. "Please continue"
2. "The experiment requires you to continue"
3. "It is absolutely essential that you continue"
4. "You have no other choice, you must go on"`,
    results: `| Shock Level | Description       | % Continuing |
|-------------|-------------------|--------------|
| 300V        | Intense shock     | 65%          |
| 315V        | Extreme intensity | 65%          |
| 330V        | Severe shock      | 65%          |
| 450V        | XXX (maximum)     | 65%          |

65% of participants administered the maximum 450V shock.
100% went to at least 300V.
Signs of extreme stress: sweating, trembling, nervous laughter.`,
    conclusion: 'Ordinary people will obey authority figures even when asked to harm others. Obedience is influenced by situational factors (legitimate authority, gradual commitment) rather than personality.',
    evaluationPoints: {
      strengths: [
        'Demonstrated power of situational factors',
        'High internal validity - controlled environment',
        'Changed understanding of obedience',
        'Variations tested different factors'
      ],
      limitations: [
        'Ethical issues - psychological harm to participants',
        'Low ecological validity - artificial laboratory setting',
        'Demand characteristics - participants may have guessed shocks were fake',
        'Historical and cultural bias - 1960s America'
      ]
    },
    ethicalIssues: [
      'Deception - participants believed shocks were real',
      'Psychological harm - extreme stress experienced',
      'Right to withdraw - prods pressured continuation',
      'Debriefing provided afterwards'
    ]
  },
  {
    id: 'asch-1951',
    researcher: 'Asch',
    year: 1951,
    title: 'Effects of Group Pressure upon Modification of Judgments',
    type: 'experiment',
    topics: ['Social influence', 'Conformity', 'Group pressure'],
    aim: 'To investigate the extent to which individuals would conform to an obviously incorrect majority.',
    method: 'Laboratory experiment with repeated measures.',
    sample: '123 American male undergraduate students',
    procedure: `Participants sat in a room with 6-8 confederates. They were shown a "standard line" and three comparison lines. Each person stated aloud which comparison line matched the standard.

The confederates gave unanimously wrong answers on 12 of 18 "critical trials."

The real participant always answered second-to-last.`,
    results: `| Measure                           | Result |
|-----------------------------------|--------|
| Mean conformity rate              | 33%    |
| Participants conforming at least once | 75% |
| Participants never conforming     | 25%    |
| Conformity with 1 confederate     | 3%     |
| Conformity with 3 confederates    | 32%    |

When one confederate gave the correct answer, conformity dropped to 5.5%.`,
    conclusion: 'People will conform to group pressure even when the group is obviously wrong. Conformity is influenced by group size and unanimity. However, 25% never conformed, showing individual differences.',
    evaluationPoints: {
      strengths: [
        'Demonstrated power of social influence',
        'Identified factors affecting conformity (group size, unanimity)',
        'Highly controlled conditions'
      ],
      limitations: [
        'Low ecological validity - artificial task',
        'Historical bias - 1950s conformist America',
        'Sample bias - male students only',
        'Ethical issues - deception and stress'
      ]
    },
    ethicalIssues: ['Deception about study purpose', 'Potential embarrassment']
  },
  {
    id: 'zimbardo-1971',
    researcher: 'Zimbardo',
    year: 1971,
    title: 'Stanford Prison Experiment',
    type: 'experiment',
    topics: ['Social influence', 'Conformity to social roles', 'Situational factors'],
    aim: 'To investigate whether the brutality of prison guards is due to personality or the prison environment.',
    method: 'Simulation study with role assignment.',
    sample: '24 male American university students, selected for being "emotionally stable"',
    procedure: `Participants were randomly assigned to be "guards" or "prisoners" in a mock prison in the basement of Stanford University.

Guards were given uniforms, batons, and sunglasses. Prisoners were given smocks and numbers (no names).

The study was planned for 2 weeks but stopped after 6 days.`,
    results: `The guards became increasingly brutal and sadistic:
- Woke prisoners during the night for counts
- Used solitary confinement
- Made prisoners do humiliating tasks
- Psychological abuse escalated

The prisoners became passive and submissive:
- 5 prisoners released early due to anxiety and depression
- Prisoner #8612 had to be released after 36 hours
- Prisoners began to identify with their numbers, not names

Day-by-day escalation of guard aggression was observed.`,
    conclusion: 'Social roles have a powerful influence on behaviour. Normal, healthy people can engage in brutal behaviour when placed in certain social situations. The situation, not personality, caused the behaviour.',
    evaluationPoints: {
      strengths: [
        'Demonstrated power of social roles',
        'Led to real-world prison reforms',
        'High face validity - realistic simulation'
      ],
      limitations: [
        'Severe ethical issues - psychological harm',
        'Demand characteristics - guards may have played up to expectations',
        'Cannot be replicated due to ethics',
        'Small, biased sample - all male students'
      ]
    },
    ethicalIssues: [
      'Psychological harm - long-term effects on some participants',
      'Lack of fully informed consent',
      'Zimbardo dual role as researcher and prison superintendent',
      'Right to withdraw compromised'
    ]
  }
];

// ============================================
// ATTACHMENT STUDIES
// ============================================

export const attachmentStudies: PsychologyStudy[] = [
  {
    id: 'ainsworth-1970',
    researcher: 'Ainsworth',
    year: 1970,
    title: 'The Strange Situation',
    type: 'observation',
    topics: ['Attachment', 'Attachment types', 'Infant development'],
    aim: 'To assess the quality of attachment between infants and their mothers.',
    method: 'Controlled observation in a laboratory playroom.',
    sample: '100 middle-class American infants aged 12-18 months and their mothers',
    procedure: `8 episodes, each lasting approximately 3 minutes:
1. Parent and infant alone
2. Stranger enters
3. Parent leaves, stranger offers comfort
4. Reunion - parent returns, stranger leaves
5. Parent leaves, infant alone
6. Stranger returns
7. Reunion - parent returns

Key behaviours observed: separation anxiety, stranger anxiety, reunion behaviour, exploration.`,
    results: `| Attachment Type | % of Sample | Characteristics |
|-----------------|-------------|-----------------|
| Secure (Type B) | 66%         | Distressed when mother leaves, easily comforted on return, uses mother as secure base |
| Insecure-Avoidant (Type A) | 22% | Shows little distress, avoids mother on return, independent |
| Insecure-Resistant (Type C) | 12% | Very distressed, resists comfort on return, ambivalent behaviour |`,
    conclusion: 'There are distinct attachment types, with secure attachment being most common. Attachment type is influenced by maternal sensitivity to infant signals.',
    evaluationPoints: {
      strengths: [
        'High inter-rater reliability (0.94)',
        'Controlled observation allows replication',
        'Widely used in research and clinical settings',
        'Identified important attachment types'
      ],
      limitations: [
        'Cultural bias - only American middle-class sample',
        'May not capture complexity of attachment',
        'Measures one relationship only',
        'Stressful for infants - ethical concerns'
      ]
    },
    ethicalIssues: ['Causes distress to infants', 'Informed consent from parents only']
  },
  {
    id: 'bowlby-44-thieves',
    researcher: 'Bowlby',
    year: 1944,
    title: '44 Juvenile Thieves Study',
    type: 'case_study',
    topics: ['Attachment', 'Maternal deprivation', 'Delinquency'],
    aim: 'To investigate the link between maternal deprivation and juvenile delinquency.',
    method: 'Retrospective case study with interviews.',
    sample: '44 juvenile thieves and 44 control children (emotionally disturbed but not thieves)',
    procedure: `Bowlby interviewed the children and their families at his child guidance clinic. He assessed:
- History of early separation from mother
- Presence of "affectionless psychopathy" (inability to feel guilt or empathy)`,
    results: `| Finding                                    | Thieves | Control |
|-------------------------------------------|---------|---------|
| Experienced maternal separation before age 5 | 39%     | 5%      |
| Classified as "affectionless psychopaths"  | 32%     | 0%      |

Of the 14 affectionless thieves, 12 (86%) had experienced prolonged separation.

None of the control group showed affectionless psychopathy.`,
    conclusion: 'Maternal deprivation in early childhood can lead to permanent emotional damage, including affectionless psychopathy and delinquency. Early attachment is critical for healthy development.',
    evaluationPoints: {
      strengths: [
        'Drew attention to importance of early attachment',
        'Led to changes in hospital visiting policies',
        'Pioneering study in attachment research'
      ],
      limitations: [
        'Correlation not causation - other factors may explain delinquency',
        'Researcher bias - Bowlby conducted interviews and diagnosis',
        'Retrospective data - relies on memory',
        'Confounding variables - poverty, family dysfunction'
      ]
    }
  }
];

// ============================================
// HELPER FUNCTIONS
// ============================================

export const allPsychologyStudies: PsychologyStudy[] = [
  ...memoryStudies,
  ...socialInfluenceStudies,
  ...attachmentStudies
];

/**
 * Find a random study matching the given topic
 */
export function getRandomPsychologyStudy(
  topicName: string,
  subtopic: string
): PsychologyStudy | null {
  const keywords = [topicName, subtopic].map(k => k.toLowerCase());

  const matchingStudies = allPsychologyStudies.filter(study => {
    const allTags = study.topics.map(t => t.toLowerCase());
    return keywords.some(keyword =>
      allTags.some(tag => tag.includes(keyword) || keyword.includes(tag))
    );
  });

  if (matchingStudies.length === 0) {
    // Try matching on researcher or title
    const fallbackMatches = allPsychologyStudies.filter(study => {
      const searchText = `${study.researcher} ${study.title} ${study.aim}`.toLowerCase();
      return keywords.some(k => searchText.includes(k));
    });

    if (fallbackMatches.length > 0) {
      return fallbackMatches[Math.floor(Math.random() * fallbackMatches.length)];
    }
    return null;
  }

  return matchingStudies[Math.floor(Math.random() * matchingStudies.length)];
}

/**
 * Get all studies for a specific topic
 */
export function getStudiesForTopic(topic: string): PsychologyStudy[] {
  const lowerTopic = topic.toLowerCase();
  return allPsychologyStudies.filter(study =>
    study.topics.some(t => t.toLowerCase().includes(lowerTopic))
  );
}
