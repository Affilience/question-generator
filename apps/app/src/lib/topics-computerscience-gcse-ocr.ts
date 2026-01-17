// OCR GCSE Computer Science (J277) Topics
// Based on the official OCR Gateway specification
// Reference: https://www.ocr.org.uk/qualifications/gcse/computer-science-j277-from-2020/
// Paper 1: Computer Systems (50%) - J277/01
// Paper 2: Computational Thinking, Algorithms and Programming (50%) - J277/02

import { Topic } from '@/types';

export const ocrComputerScienceTopics: Topic[] = [
  // ============================================================================
  // PAPER 1: COMPUTER SYSTEMS
  // ============================================================================

  // 1.1 SYSTEMS ARCHITECTURE
  {
    id: 'systems-architecture',
    examBoard: 'ocr',
    name: 'Systems Architecture',
    description: 'CPU architecture, fetch-execute cycle, and embedded systems',
    icon: '🔧',
    color: 'bg-blue-500',
    paperRestriction: 'Paper 1',
    subtopics: [
      // 1.1.1 Architecture of the CPU
      'CPU purpose and function',
      'Von Neumann architecture',
      'ALU (Arithmetic Logic Unit)',
      'CU (Control Unit)',
      'Cache',
      'Registers',
      'MAR (Memory Address Register)',
      'MDR (Memory Data Register)',
      'Program Counter',
      'Accumulator',
      // 1.1.2 CPU performance
      'Clock speed',
      'Cache size',
      'Number of cores',
      // 1.1.3 Embedded systems
      'Embedded systems definition',
      'Examples of embedded systems',
      'Characteristics of embedded systems',
    ],
  },

  // 1.2 MEMORY AND STORAGE
  {
    id: 'memory-storage',
    examBoard: 'ocr',
    name: 'Memory and Storage',
    description: 'Primary and secondary storage, data storage units',
    icon: '💾',
    color: 'bg-purple-500',
    paperRestriction: 'Paper 1',
    subtopics: [
      // 1.2.1 Primary storage
      'RAM (Random Access Memory)',
      'ROM (Read Only Memory)',
      'Difference between RAM and ROM',
      'Volatile vs non-volatile memory',
      'Virtual memory',
      // 1.2.2 Secondary storage
      'Need for secondary storage',
      'Optical storage (CD, DVD, Blu-ray)',
      'Magnetic storage (HDD, tape)',
      'Solid state storage (SSD, flash)',
      'Comparing storage types',
      'Capacity',
      'Speed',
      'Portability',
      'Durability',
      'Reliability',
      'Cost',
      // 1.2.3 Units
      'Bit',
      'Nibble',
      'Byte',
      'Kilobyte (KB)',
      'Megabyte (MB)',
      'Gigabyte (GB)',
      'Terabyte (TB)',
      'Petabyte (PB)',
      'Data capacity calculations',
      // 1.2.4 Data storage
      'Binary number system',
      'Converting binary to denary',
      'Converting denary to binary',
      'Binary addition',
      'Overflow errors',
      'Hexadecimal',
      'Converting between hex and binary',
      'Converting between hex and denary',
      'Binary shifts',
      'Check digits',
      // 1.2.5 Characters
      'ASCII',
      'Extended ASCII',
      'Unicode',
      'Character encoding',
      // 1.2.6 Images
      'Pixels',
      'Resolution',
      'Colour depth',
      'Image file size calculation',
      'Metadata',
      // 1.2.7 Sound
      'Sample rate',
      'Bit depth',
      'Sound file size calculation',
      // 1.2.8 Compression
      'Need for compression',
      'Lossy compression',
      'Lossless compression',
      'Run-length encoding',
      'Huffman coding',
    ],
  },

  // 1.3 COMPUTER NETWORKS, CONNECTIONS AND PROTOCOLS
  {
    id: 'networks',
    examBoard: 'ocr',
    name: 'Computer Networks, Connections and Protocols',
    description: 'Network types, topologies, protocols, and the internet',
    icon: '🌐',
    color: 'bg-green-500',
    paperRestriction: 'Paper 1',
    subtopics: [
      // 1.3.1 Networks and topologies
      'Types of networks (LAN, WAN)',
      'Factors affecting network performance',
      'Client-server networks',
      'Peer-to-peer networks',
      'Network hardware',
      'Network interface card (NIC)',
      'Switch',
      'Router',
      'Wireless access point (WAP)',
      'Transmission media',
      'Ethernet cables',
      'Fibre optic cables',
      'Wireless (Wi-Fi)',
      'Star topology',
      'Mesh topology',
      // 1.3.2 Wired and wireless networks
      'Advantages of wired',
      'Disadvantages of wired',
      'Advantages of wireless',
      'Disadvantages of wireless',
      'Encryption',
      // 1.3.3 Protocols and layers
      'What is a protocol',
      'TCP/IP',
      'HTTP and HTTPS',
      'FTP',
      'POP and IMAP',
      'SMTP',
      'Layers',
      'Application layer',
      'Transport layer',
      'Internet layer',
      'Network interface layer',
      // 1.3.4 Packet switching
      'Data packets',
      'Packet structure',
      'Packet headers',
      'Packet switching process',
      'Packet reassembly',
    ],
  },

  // 1.4 NETWORK SECURITY
  {
    id: 'network-security',
    examBoard: 'ocr',
    name: 'Network Security',
    description: 'Threats to networks and prevention methods',
    icon: '🔒',
    color: 'bg-red-500',
    paperRestriction: 'Paper 1',
    subtopics: [
      // 1.4.1 Threats to computer systems and networks
      'Forms of attack',
      'Malware',
      'Viruses',
      'Worms',
      'Trojans',
      'Spyware',
      'Ransomware',
      'Social engineering',
      'Phishing',
      'Blagging',
      'Pharming',
      'Shouldering',
      'Brute force attacks',
      'Denial of service attacks',
      'Data interception and theft',
      'SQL injection',
      // 1.4.2 Identifying and preventing vulnerabilities
      'Penetration testing',
      'Network forensics',
      'Network policies',
      'Anti-malware software',
      'Firewalls',
      'User access levels',
      'Passwords',
      'Physical security',
      'Encryption',
    ],
  },

  // 1.5 SYSTEMS SOFTWARE
  {
    id: 'systems-software',
    examBoard: 'ocr',
    name: 'Systems Software',
    description: 'Operating systems and utility software',
    icon: '⚙️',
    color: 'bg-orange-500',
    paperRestriction: 'Paper 1',
    subtopics: [
      // 1.5.1 Operating systems
      'Purpose of operating system',
      'User interface',
      'Memory management',
      'Paging',
      'Multitasking',
      'Peripheral management',
      'Device drivers',
      'User management',
      'File management',
      // 1.5.2 Utility software
      'Utility software purpose',
      'Encryption software',
      'Defragmentation',
      'Data compression',
      'Backup software',
      'Anti-malware',
    ],
  },

  // 1.6 ETHICAL, LEGAL, CULTURAL AND ENVIRONMENTAL IMPACTS
  {
    id: 'impacts',
    examBoard: 'ocr',
    name: 'Ethical, Legal, Cultural and Environmental Impacts',
    description: 'Impact of digital technology on society',
    icon: '⚖️',
    color: 'bg-cyan-500',
    paperRestriction: 'Paper 1',
    subtopics: [
      // 1.6.1 Ethical, legal, cultural and environmental impact
      'Privacy issues',
      'Surveillance',
      'Digital footprint',
      'Cyberbullying',
      'Online identity',
      'Technology and health',
      'Screen time',
      // Legislation
      'Data Protection Act 2018',
      'GDPR',
      'Computer Misuse Act 1990',
      'Copyright, Designs and Patents Act 1988',
      'Freedom of Information Act 2000',
      'Creative Commons licensing',
      'Open source software',
      'Proprietary software',
      // Cultural and environmental
      'Digital divide',
      'Impact on employment',
      'Automation',
      'E-waste',
      'Energy consumption',
      'Carbon footprint',
      'Sustainable technology',
    ],
  },

  // ============================================================================
  // PAPER 2: COMPUTATIONAL THINKING, ALGORITHMS AND PROGRAMMING
  // ============================================================================

  // 2.1 ALGORITHMS
  {
    id: 'algorithms',
    examBoard: 'ocr',
    name: 'Algorithms',
    description: 'Computational thinking, algorithm design, searching and sorting',
    icon: '🔄',
    color: 'bg-indigo-500',
    paperRestriction: 'Paper 2',
    subtopics: [
      // 2.1.1 Computational thinking
      'Abstraction',
      'Decomposition',
      'Algorithmic thinking',
      'Pattern recognition',
      // 2.1.2 Designing, creating and refining algorithms
      'Pseudocode',
      'Flowcharts',
      'Trace tables',
      'Identifying inputs, processes, outputs',
      'Structure diagrams',
      'Identifying common errors',
      // 2.1.3 Searching algorithms
      'Linear search',
      'Linear search implementation',
      'Binary search',
      'Binary search implementation',
      'Comparing search algorithms',
      // 2.1.4 Sorting algorithms
      'Bubble sort',
      'Bubble sort implementation',
      'Merge sort',
      'Merge sort implementation',
      'Insertion sort',
      'Insertion sort implementation',
      'Comparing sorting algorithms',
    ],
  },

  // 2.2 PROGRAMMING FUNDAMENTALS
  {
    id: 'programming-fundamentals',
    examBoard: 'ocr',
    name: 'Programming Fundamentals',
    description: 'Programming concepts, data types, and constructs',
    icon: '💻',
    color: 'bg-pink-500',
    paperRestriction: 'Paper 2',
    subtopics: [
      // 2.2.1 Programming fundamentals
      'Variable declaration',
      'Constants',
      'Operators',
      'Inputs',
      'Outputs',
      'Assignment',
      // 2.2.2 Data types
      'Integer',
      'Real',
      'Boolean',
      'Character',
      'String',
      'Casting',
      // 2.2.3 Additional programming techniques
      'String manipulation',
      'String length',
      'Substrings',
      'Concatenation',
      'ASCII conversion',
      'File handling',
      'Opening files',
      'Reading files',
      'Writing to files',
      'Closing files',
      'Records',
      'SQL within programming',
      'SELECT statements',
      'INSERT statements',
      'UPDATE statements',
      'DELETE statements',
      'Arrays (1D)',
      'Arrays (2D)',
      'Subprograms',
      'Functions',
      'Procedures',
      'Parameters',
      'Return values',
      'Local variables',
      'Global variables',
      'Random number generation',
    ],
  },

  // 2.3 PRODUCING ROBUST PROGRAMS
  {
    id: 'robust-programs',
    examBoard: 'ocr',
    name: 'Producing Robust Programs',
    description: 'Defensive design, testing, and maintainability',
    icon: '🛡️',
    color: 'bg-emerald-500',
    paperRestriction: 'Paper 2',
    subtopics: [
      // 2.3.1 Defensive design
      'Input validation',
      'Range checks',
      'Presence checks',
      'Format checks',
      'Length checks',
      'Type checks',
      'Authentication',
      'Usernames',
      'Passwords',
      'Maintainability',
      'Commenting code',
      'Indentation',
      'Meaningful variable names',
      'Subroutines',
      // 2.3.2 Testing
      'Purpose of testing',
      'Types of testing',
      'Iterative testing',
      'Final/Terminal testing',
      'Test data types',
      'Normal test data',
      'Boundary test data',
      'Invalid/Erroneous test data',
      // 2.3.3 Identifying and fixing errors
      'Syntax errors',
      'Logic errors',
      'Runtime errors',
      'Debugging techniques',
      'Trace tables for debugging',
    ],
  },

  // 2.4 BOOLEAN LOGIC
  {
    id: 'boolean-logic',
    examBoard: 'ocr',
    name: 'Boolean Logic',
    description: 'Logic gates and truth tables',
    icon: '🔣',
    color: 'bg-yellow-500',
    paperRestriction: 'Paper 2',
    subtopics: [
      // 2.4.1 Boolean logic
      'AND gate',
      'OR gate',
      'NOT gate',
      'XOR gate',
      'NAND gate',
      'NOR gate',
      'Truth tables',
      'Creating truth tables',
      'Logic diagrams',
      'Combining logic gates',
      'Boolean expressions',
      'Simplifying Boolean expressions',
    ],
  },

  // 2.5 PROGRAMMING LANGUAGES AND INTEGRATED DEVELOPMENT ENVIRONMENTS
  {
    id: 'languages-ide',
    examBoard: 'ocr',
    name: 'Programming Languages and IDEs',
    description: 'High/low-level languages, translators, and development environments',
    icon: '🛠️',
    color: 'bg-slate-500',
    paperRestriction: 'Paper 2',
    subtopics: [
      // 2.5.1 Languages
      'High-level languages',
      'Characteristics of high-level',
      'Low-level languages',
      'Machine code',
      'Assembly language',
      'Characteristics of low-level',
      'When to use each type',
      // 2.5.2 Translators
      'Purpose of translators',
      'Compiler',
      'Interpreter',
      'Assembler',
      'Compiler vs interpreter',
      // 2.5.3 Integrated Development Environment (IDE)
      'Purpose of an IDE',
      'Editor features',
      'Error diagnostics',
      'Runtime environment',
      'Translators in IDE',
      'Debugging tools',
      'Breakpoints',
      'Variable watch',
      'Step-through execution',
    ],
  },
];

export function getOCRComputerScienceTopicById(id: string): Topic | undefined {
  return ocrComputerScienceTopics.find((topic) => topic.id === id);
}

export function getOCRComputerScienceTopicsByPaper(paper: 1 | 2): Topic[] {
  const paperName = `Paper ${paper}`;
  return ocrComputerScienceTopics.filter((topic) => topic.paperRestriction === paperName);
}

export function countOCRComputerScienceSubtopics(): number {
  return ocrComputerScienceTopics.reduce((total, topic) => total + topic.subtopics.length, 0);
}
