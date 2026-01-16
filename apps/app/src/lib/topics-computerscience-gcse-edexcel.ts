// Edexcel GCSE Computer Science (1CP2) Topics
// Based on the official Pearson Edexcel specification
// Reference: https://qualifications.pearson.com/en/qualifications/edexcel-gcses/computer-science-2020.html
// Paper 1: Principles of Computer Science (50%) - Topics 1-5
// Paper 2: Application of Computational Thinking (50%) - Topic 6

import { Topic } from '@/types';

export const edexcelComputerScienceTopics: Topic[] = [
  // ============================================================================
  // TOPIC 1: COMPUTATIONAL THINKING
  // ============================================================================
  {
    id: 'edexcel-gcse-cs-computational-thinking',
    examBoard: 'edexcel',
    name: 'Computational Thinking',
    description: 'Algorithms, flowcharts, pseudocode, searching and sorting',
    icon: '🧠',
    color: 'bg-blue-500',
    paperRestriction: 'Paper 1',
    subtopics: [
      // 1.1 Algorithms
      'What is an algorithm',
      'Computational thinking',
      'Decomposition',
      'Abstraction',
      'Pattern recognition',
      'Algorithm design',
      // 1.2 Representing algorithms
      'Flowcharts',
      'Flowchart symbols',
      'Pseudocode',
      'Pseudocode conventions',
      'Trace tables',
      'Dry running algorithms',
      // 1.3 Searching algorithms
      'Linear search',
      'Linear search efficiency',
      'Binary search',
      'Binary search efficiency',
      'Comparing search algorithms',
      // 1.4 Sorting algorithms
      'Bubble sort',
      'Bubble sort efficiency',
      'Merge sort',
      'Merge sort efficiency',
      'Insertion sort',
      'Insertion sort efficiency',
      'Comparing sorting algorithms',
      // 1.5 Boolean logic
      'AND operator',
      'OR operator',
      'NOT operator',
      'XOR operator',
      'Truth tables',
      'Logic gates',
      'AND gate',
      'OR gate',
      'NOT gate',
      'XOR gate',
      'Combining logic gates',
      'Logic circuits',
    ],
  },

  // ============================================================================
  // TOPIC 2: DATA
  // ============================================================================
  {
    id: 'edexcel-gcse-cs-data',
    examBoard: 'edexcel',
    name: 'Data',
    description: 'Binary, hexadecimal, data representation, and compression',
    icon: '📊',
    color: 'bg-purple-500',
    paperRestriction: 'Paper 1',
    subtopics: [
      // 2.1 Data representation
      'Binary (base 2)',
      'Denary (base 10)',
      'Hexadecimal (base 16)',
      'Converting binary to denary',
      'Converting denary to binary',
      'Converting binary to hexadecimal',
      'Converting hexadecimal to binary',
      'Converting denary to hexadecimal',
      'Converting hexadecimal to denary',
      // 2.2 Binary arithmetic
      'Binary addition',
      'Overflow',
      'Binary shifts',
      'Left shift (multiply by 2)',
      'Right shift (divide by 2)',
      // 2.3 Units
      'Bit',
      'Nibble',
      'Byte',
      'Kilobyte',
      'Megabyte',
      'Gigabyte',
      'Terabyte',
      'Petabyte',
      // 2.4 Character encoding
      'ASCII',
      'Extended ASCII',
      'Unicode',
      'Character sets',
      // 2.5 Representing images
      'Pixels',
      'Resolution',
      'Colour depth',
      'Image file size calculation',
      'Bitmap images',
      'Metadata',
      // 2.6 Representing sound
      'Analogue vs digital',
      'Sampling',
      'Sample rate',
      'Bit depth',
      'Sound file size calculation',
      // 2.7 Compression
      'Need for compression',
      'Lossy compression',
      'Lossless compression',
      'Run-length encoding (RLE)',
      'Dictionary compression',
      'Huffman coding',
    ],
  },

  // ============================================================================
  // TOPIC 3: COMPUTERS
  // ============================================================================
  {
    id: 'edexcel-gcse-cs-computers',
    examBoard: 'edexcel',
    name: 'Computers',
    description: 'Hardware, software, CPU architecture, and storage',
    icon: '🖥️',
    color: 'bg-green-500',
    paperRestriction: 'Paper 1',
    subtopics: [
      // 3.1 Hardware and software
      'Hardware definition',
      'Software definition',
      'Application software',
      'System software',
      'Operating systems',
      'Utility software',
      // 3.2 The CPU
      'Purpose of the CPU',
      'Von Neumann architecture',
      'ALU (Arithmetic Logic Unit)',
      'Control Unit (CU)',
      'Cache',
      'Registers',
      'Program Counter (PC)',
      'Memory Address Register (MAR)',
      'Memory Data Register (MDR)',
      'Accumulator',
      'Fetch-Decode-Execute cycle',
      // 3.3 CPU performance
      'Clock speed',
      'Number of cores',
      'Cache size',
      // 3.4 Primary storage
      'RAM (Random Access Memory)',
      'ROM (Read Only Memory)',
      'Difference between RAM and ROM',
      'Volatile vs non-volatile',
      'Virtual memory',
      // 3.5 Secondary storage
      'Need for secondary storage',
      'Magnetic storage',
      'Hard disk drives (HDD)',
      'Magnetic tape',
      'Optical storage',
      'CD, DVD, Blu-ray',
      'Solid state storage',
      'SSD (Solid State Drive)',
      'Flash memory',
      'USB drives',
      'Storage comparison',
      'Capacity',
      'Speed',
      'Portability',
      'Durability',
      'Reliability',
      'Cost',
      // 3.6 Embedded systems
      'What is an embedded system',
      'Examples of embedded systems',
      'Characteristics of embedded systems',
      // 3.7 Programming languages
      'High-level languages',
      'Low-level languages',
      'Machine code',
      'Assembly language',
      // 3.8 Translators
      'Compilers',
      'Interpreters',
      'Assemblers',
      'Compiler vs interpreter',
    ],
  },

  // ============================================================================
  // TOPIC 4: NETWORKS
  // ============================================================================
  {
    id: 'edexcel-gcse-cs-networks',
    examBoard: 'edexcel',
    name: 'Networks',
    description: 'Network types, topologies, protocols, and the internet',
    icon: '🌐',
    color: 'bg-cyan-500',
    paperRestriction: 'Paper 1',
    subtopics: [
      // 4.1 Network types
      'LAN (Local Area Network)',
      'WAN (Wide Area Network)',
      'PAN (Personal Area Network)',
      // 4.2 Network models
      'Client-server network',
      'Peer-to-peer network',
      'Advantages and disadvantages',
      // 4.3 Network hardware
      'Network Interface Card (NIC)',
      'Switch',
      'Router',
      'Wireless Access Point (WAP)',
      'Transmission media',
      'Cables (copper, fibre optic)',
      'Wireless',
      // 4.4 Network topologies
      'Star topology',
      'Mesh topology',
      'Advantages and disadvantages of topologies',
      // 4.5 Internet
      'What is the Internet',
      'Internet vs World Wide Web',
      'DNS (Domain Name System)',
      'Web hosting',
      'The Cloud',
      // 4.6 Protocols
      'What is a protocol',
      'TCP/IP',
      'HTTP and HTTPS',
      'FTP',
      'SMTP',
      'POP and IMAP',
      // 4.7 Network layers
      'Application layer',
      'Transport layer',
      'Network layer',
      'Data link layer',
      'Why use layers',
      // 4.8 Packet switching
      'Data packets',
      'Packet headers',
      'IP addresses',
      'Packet switching process',
      'Packet reassembly',
    ],
  },

  // ============================================================================
  // TOPIC 5: ISSUES AND IMPACT
  // ============================================================================
  {
    id: 'edexcel-gcse-cs-issues-impact',
    examBoard: 'edexcel',
    name: 'Issues and Impact',
    description: 'Security threats, ethics, legislation, and environmental impact',
    icon: '⚖️',
    color: 'bg-orange-500',
    paperRestriction: 'Paper 1',
    subtopics: [
      // 5.1 Security threats
      'Malware',
      'Viruses',
      'Worms',
      'Trojans',
      'Spyware',
      'Ransomware',
      'Adware',
      'Social engineering',
      'Phishing',
      'Blagging',
      'Shouldering',
      'Pharming',
      'Brute force attacks',
      'Denial of service (DoS)',
      'SQL injection',
      'Data interception',
      // 5.2 Preventing threats
      'Anti-malware software',
      'Firewalls',
      'User access levels',
      'Passwords',
      'Strong password policies',
      'Biometric authentication',
      'Two-factor authentication',
      'Encryption',
      'Physical security',
      'Penetration testing',
      'Network forensics',
      // 5.3 Legislation
      'Data Protection Act 2018',
      'GDPR',
      'Computer Misuse Act 1990',
      'Copyright, Designs and Patents Act',
      'Freedom of Information Act',
      'Software licensing',
      'Open source software',
      'Proprietary software',
      // 5.4 Ethical and cultural issues
      'Privacy concerns',
      'Data collection',
      'Surveillance',
      'Digital footprint',
      'Digital divide',
      'Impact on employment',
      'Automation',
      'AI ethics',
      // 5.5 Environmental impact
      'Energy consumption',
      'E-waste',
      'Recycling',
      'Sustainable technology',
      'Carbon footprint',
    ],
  },

  // ============================================================================
  // TOPIC 6: PROBLEM SOLVING WITH PROGRAMMING
  // ============================================================================
  {
    id: 'edexcel-gcse-cs-programming',
    examBoard: 'edexcel',
    name: 'Problem Solving with Programming',
    description: 'Programming constructs, data types, and techniques',
    icon: '💻',
    color: 'bg-red-500',
    paperRestriction: 'Paper 2',
    subtopics: [
      // 6.1 Programming concepts
      'Variables',
      'Constants',
      'Assignment',
      'Inputs',
      'Outputs',
      // 6.2 Data types
      'Integer',
      'Real/Float',
      'Boolean',
      'Character',
      'String',
      'Casting',
      // 6.3 Operators
      'Arithmetic operators',
      'Addition',
      'Subtraction',
      'Multiplication',
      'Division',
      'Integer division (DIV)',
      'Modulo (MOD)',
      'Exponentiation',
      'Comparison operators',
      'Equal to',
      'Not equal to',
      'Less than',
      'Greater than',
      'Less than or equal',
      'Greater than or equal',
      'Boolean operators',
      'AND',
      'OR',
      'NOT',
      // 6.4 Selection
      'If statements',
      'If-else statements',
      'Nested selection',
      'Case/Switch statements',
      // 6.5 Iteration
      'For loops',
      'While loops',
      'Do-while loops',
      'Nested loops',
      // 6.6 Data structures
      'Arrays (1D)',
      'Arrays (2D)',
      'Records',
      // 6.7 String handling
      'String length',
      'Substrings',
      'Concatenation',
      'ASCII conversion',
      'String traversal',
      // 6.8 File handling
      'Opening files',
      'Reading from files',
      'Writing to files',
      'Closing files',
      'Appending to files',
      // 6.9 Subroutines
      'Procedures',
      'Functions',
      'Parameters',
      'Return values',
      'Local variables',
      'Global variables',
      'Scope',
      // 6.10 Random numbers
      'Random number generation',
      // 6.11 SQL
      'SELECT statements',
      'FROM clause',
      'WHERE clause',
      'AND/OR in SQL',
      'Wildcards',
      'ORDER BY',
      'INSERT INTO',
      'UPDATE',
      'DELETE',
      // 6.12 Defensive design
      'Input validation',
      'Range checks',
      'Presence checks',
      'Format checks',
      'Type checks',
      'Length checks',
      'Authentication',
      'Maintainability',
      'Comments',
      'Indentation',
      'Naming conventions',
      // 6.13 Testing
      'Purpose of testing',
      'Normal test data',
      'Boundary test data',
      'Erroneous test data',
      'Iterative testing',
      'Final testing',
      // 6.14 Errors
      'Syntax errors',
      'Logic errors',
      'Runtime errors',
      'Debugging',
      'Trace tables',
    ],
  },
];

export function getEdexcelComputerScienceTopicById(id: string): Topic | undefined {
  return edexcelComputerScienceTopics.find((topic) => topic.id === id);
}

export function getEdexcelComputerScienceTopicsByPaper(paper: 1 | 2): Topic[] {
  const paperName = `Paper ${paper}`;
  return edexcelComputerScienceTopics.filter((topic) => topic.paperRestriction === paperName);
}

export function countEdexcelComputerScienceSubtopics(): number {
  return edexcelComputerScienceTopics.reduce((total, topic) => total + topic.subtopics.length, 0);
}
