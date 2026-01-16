// AQA GCSE Computer Science (8525) Topics
// Based on the official AQA specification
// Reference: https://www.aqa.org.uk/subjects/computer-science/gcse/computer-science-8525/specification
// Paper 1: Computational thinking and programming skills (50%)
// Paper 2: Computing concepts (50%)

import { Topic } from '@/types';

export const aqaComputerScienceTopics: Topic[] = [
  // ============================================================================
  // 3.1 FUNDAMENTALS OF ALGORITHMS
  // ============================================================================
  {
    id: 'aqa-gcse-cs-algorithms',
    examBoard: 'aqa',
    name: 'Fundamentals of Algorithms',
    description: 'Representing algorithms, efficiency, searching and sorting',
    icon: '🔄',
    color: 'bg-blue-500',
    paperRestriction: 'Paper 1',
    subtopics: [
      // 3.1.1 Representing algorithms
      'Computational thinking',
      'Abstraction',
      'Decomposition',
      'Algorithmic thinking',
      'Pseudocode',
      'Flowcharts',
      'Trace tables',
      'Identifying inputs and outputs',
      'Structure diagrams',
      // 3.1.2 Efficiency of algorithms
      'Algorithm efficiency',
      'Time complexity',
      'Comparing algorithms',
      // 3.1.3 Searching algorithms
      'Linear search',
      'Binary search',
      'Comparing searching algorithms',
      // 3.1.4 Sorting algorithms
      'Bubble sort',
      'Merge sort',
      'Insertion sort',
      'Comparing sorting algorithms',
    ],
  },

  // ============================================================================
  // 3.2 PROGRAMMING
  // ============================================================================
  {
    id: 'aqa-gcse-cs-programming',
    examBoard: 'aqa',
    name: 'Programming',
    description: 'Data types, programming constructs, operations, and data structures',
    icon: '💻',
    color: 'bg-purple-500',
    paperRestriction: 'Paper 1',
    subtopics: [
      // 3.2.1 Data types
      'Integer',
      'Real/Float',
      'Boolean',
      'Character',
      'String',
      'Casting',
      // 3.2.2 Programming concepts
      'Variable declaration',
      'Constant declaration',
      'Assignment',
      'Iteration (loops)',
      'Selection (if statements)',
      'Subroutines (procedures and functions)',
      // 3.2.3 Arithmetic operations
      'Addition',
      'Subtraction',
      'Multiplication',
      'Real division',
      'Integer division (DIV)',
      'Modulo (MOD)',
      'Exponentiation',
      // 3.2.4 Relational operations
      'Equal to',
      'Not equal to',
      'Less than',
      'Greater than',
      'Less than or equal to',
      'Greater than or equal to',
      // 3.2.5 Boolean operations
      'AND',
      'OR',
      'NOT',
      // 3.2.6 Data structures
      'Arrays (1D)',
      'Arrays (2D)',
      'Records',
      // 3.2.7 Input/output
      'Obtaining user input',
      'Outputting to screen',
      // 3.2.8 String handling
      'Length',
      'Position',
      'Substring',
      'Concatenation',
      'Character to character code',
      'Character code to character',
      'String conversion methods',
      // 3.2.9 Random number generation
      'Random number generation',
      // 3.2.10 Subroutines
      'Procedures',
      'Functions',
      'Parameters',
      'Return values',
      'Local variables',
      'Global variables',
      // 3.2.11 Structured programming
      'Advantages of subroutines',
      'Structured approach to programming',
      // 3.2.12 Robust and secure programming
      'Defensive design',
      'Input validation',
      'Authentication',
      'Testing',
      'Test data (normal, boundary, erroneous)',
      'Syntax errors',
      'Logic errors',
      'Debugging',
    ],
  },

  // ============================================================================
  // 3.3 FUNDAMENTALS OF DATA REPRESENTATION
  // ============================================================================
  {
    id: 'aqa-gcse-cs-data-representation',
    examBoard: 'aqa',
    name: 'Fundamentals of Data Representation',
    description: 'Number systems, character encoding, images, and sound',
    icon: '📊',
    color: 'bg-green-500',
    paperRestriction: 'Paper 2',
    subtopics: [
      // 3.3.1 Number bases
      'Binary (base 2)',
      'Denary (base 10)',
      'Hexadecimal (base 16)',
      'Converting binary to denary',
      'Converting denary to binary',
      'Converting binary to hexadecimal',
      'Converting hexadecimal to binary',
      'Converting denary to hexadecimal',
      'Converting hexadecimal to denary',
      // 3.3.2 Units of information
      'Bits',
      'Nibbles',
      'Bytes',
      'Kilobytes',
      'Megabytes',
      'Gigabytes',
      'Terabytes',
      'Petabytes',
      // 3.3.3 Binary arithmetic
      'Binary addition',
      'Overflow',
      'Binary shifts',
      'Left shift (multiply by 2)',
      'Right shift (divide by 2)',
      // 3.3.4 Character encoding
      'ASCII',
      'Extended ASCII',
      'Unicode',
      'Character sets',
      // 3.3.5 Representing images
      'Pixels',
      'Resolution',
      'Colour depth',
      'Calculating image file size',
      'Metadata',
      // 3.3.6 Representing sound
      'Sampling',
      'Sample rate',
      'Bit depth',
      'Calculating sound file size',
      // 3.3.7 Data compression
      'Need for compression',
      'Lossy compression',
      'Lossless compression',
      'Huffman coding',
      'Run-length encoding (RLE)',
    ],
  },

  // ============================================================================
  // 3.4 COMPUTER SYSTEMS
  // ============================================================================
  {
    id: 'aqa-gcse-cs-computer-systems',
    examBoard: 'aqa',
    name: 'Computer Systems',
    description: 'Hardware, software, boolean logic, and programming languages',
    icon: '🖥️',
    color: 'bg-red-500',
    paperRestriction: 'Paper 2',
    subtopics: [
      // 3.4.1 Hardware and software
      'Hardware definition',
      'Software definition',
      'Relationship between hardware and software',
      'Application software',
      'System software',
      'Operating systems',
      'Utility software',
      // 3.4.2 Boolean logic
      'Logic gates',
      'AND gate',
      'OR gate',
      'NOT gate',
      'Truth tables',
      'Combining logic gates',
      'Boolean expressions',
      // 3.4.3 Software classification
      'System software',
      'Application software',
      'Operating system functions',
      'User interface',
      'Memory management',
      'Peripheral management',
      'Multitasking',
      'Security',
      'Utility software examples',
      // 3.4.4 Programming languages
      'High-level languages',
      'Low-level languages',
      'Machine code',
      'Assembly language',
      'Translators',
      'Compilers',
      'Interpreters',
      'Assemblers',
    ],
  },

  // ============================================================================
  // 3.5 FUNDAMENTALS OF COMPUTER NETWORKS
  // ============================================================================
  {
    id: 'aqa-gcse-cs-networks',
    examBoard: 'aqa',
    name: 'Fundamentals of Computer Networks',
    description: 'Network types, topologies, protocols, and the internet',
    icon: '🌐',
    color: 'bg-cyan-500',
    paperRestriction: 'Paper 2',
    subtopics: [
      // 3.5.1 Network fundamentals
      'LAN (Local Area Network)',
      'WAN (Wide Area Network)',
      'Network hardware',
      'Routers',
      'Switches',
      'WAP (Wireless Access Point)',
      'NIC (Network Interface Card)',
      'Transmission media',
      'Wired vs wireless',
      // 3.5.2 Network topologies
      'Star topology',
      'Bus topology',
      'Mesh topology',
      'Advantages and disadvantages of topologies',
      // 3.5.3 Protocols
      'What is a protocol',
      'TCP/IP',
      'HTTP',
      'HTTPS',
      'FTP',
      'POP',
      'IMAP',
      'SMTP',
      'Layered protocols',
      'Protocol layers',
      // 3.5.4 Network security
      'Encryption',
      'Authentication',
      'Firewalls',
      'MAC address filtering',
      // 3.5.5 The Internet
      'The Internet vs World Wide Web',
      'DNS (Domain Name System)',
      'Hosting',
      'The Cloud',
      'Client-server model',
      'Peer-to-peer model',
      'IP addresses',
      'IPv4 vs IPv6',
      'Packet switching',
    ],
  },

  // ============================================================================
  // 3.6 CYBER SECURITY
  // ============================================================================
  {
    id: 'aqa-gcse-cs-cybersecurity',
    examBoard: 'aqa',
    name: 'Cyber Security',
    description: 'Threats, prevention methods, and social engineering',
    icon: '🔒',
    color: 'bg-orange-500',
    paperRestriction: 'Paper 2',
    subtopics: [
      // 3.6.1 Cyber security threats
      'Social engineering',
      'Phishing',
      'Blagging (pretexting)',
      'Shouldering (shoulder surfing)',
      'Pharming',
      'Malware',
      'Viruses',
      'Worms',
      'Trojans',
      'Spyware',
      'Ransomware',
      'Adware',
      // 3.6.2 Preventing vulnerabilities
      'Penetration testing',
      'Anti-malware software',
      'Firewalls',
      'User access levels',
      'Passwords',
      'Password policies',
      'Biometric authentication',
      'Two-factor authentication',
      'Automatic software updates',
      'Encryption',
    ],
  },

  // ============================================================================
  // 3.7 RELATIONAL DATABASES AND SQL
  // ============================================================================
  {
    id: 'aqa-gcse-cs-databases',
    examBoard: 'aqa',
    name: 'Relational Databases and SQL',
    description: 'Database concepts and structured query language',
    icon: '🗄️',
    color: 'bg-indigo-500',
    paperRestriction: 'Paper 2',
    subtopics: [
      // 3.7.1 Relational databases
      'Flat file databases',
      'Relational databases',
      'Tables',
      'Records',
      'Fields',
      'Primary key',
      'Foreign key',
      'Entity relationships',
      'One-to-one relationships',
      'One-to-many relationships',
      'Many-to-many relationships',
      // 3.7.2 SQL
      'SELECT',
      'FROM',
      'WHERE',
      'AND',
      'OR',
      'Wildcards (*)',
      'INSERT INTO',
      'UPDATE',
      'DELETE',
      'ORDER BY',
      'Comparison operators in SQL',
    ],
  },

  // ============================================================================
  // 3.8 ETHICAL, LEGAL AND ENVIRONMENTAL IMPACTS
  // ============================================================================
  {
    id: 'aqa-gcse-cs-ethics',
    examBoard: 'aqa',
    name: 'Ethical, Legal and Environmental Impacts',
    description: 'Privacy, legislation, and environmental considerations',
    icon: '⚖️',
    color: 'bg-emerald-500',
    paperRestriction: 'Paper 2',
    subtopics: [
      // 3.8.1 Ethical issues
      'Privacy concerns',
      'Data collection',
      'Surveillance',
      'Digital footprint',
      'Data ownership',
      'Censorship',
      'Artificial intelligence ethics',
      'Autonomous vehicles ethics',
      // 3.8.2 Legal issues
      'Data Protection Act',
      'Computer Misuse Act',
      'Copyright, Designs and Patents Act',
      'Freedom of Information Act',
      'Software licensing',
      'Open source software',
      'Proprietary software',
      // 3.8.3 Environmental impacts
      'Energy consumption',
      'E-waste',
      'Disposal of technology',
      'Recycling',
      'Sustainability',
      'Carbon footprint of technology',
      'Benefits of technology for environment',
      // 3.8.4 Cultural issues
      'Digital divide',
      'Access to technology',
      'Impact on employment',
      'Automation',
      'Working from home',
      'Social media impact',
    ],
  },
];

export function getAQAComputerScienceTopicById(id: string): Topic | undefined {
  return aqaComputerScienceTopics.find((topic) => topic.id === id);
}

export function getAQAComputerScienceTopicsByPaper(paper: 1 | 2): Topic[] {
  const paperName = `Paper ${paper}`;
  return aqaComputerScienceTopics.filter((topic) => topic.paperRestriction === paperName);
}

export function countAQAComputerScienceSubtopics(): number {
  return aqaComputerScienceTopics.reduce((total, topic) => total + topic.subtopics.length, 0);
}
