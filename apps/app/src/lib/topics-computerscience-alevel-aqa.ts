// AQA A-Level Computer Science (7517) Topics
// Based on the official AQA specification
// Reference: https://www.aqa.org.uk/subjects/computer-science/a-level/computer-science-7517/specification
// Paper 1: On-screen examination (40%)
// Paper 2: Written examination (40%)
// NEA: Non-exam assessment - Practical project (20%)

import { Topic } from '@/types';

export const aqaALevelComputerScienceTopics: Topic[] = [
  // ============================================================================
  // 4.1 FUNDAMENTALS OF PROGRAMMING
  // ============================================================================
  {
    id: 'aqa-alevel-cs-programming',
    examBoard: 'aqa',
    name: 'Fundamentals of Programming',
    description: 'Programming paradigms, constructs, and advanced techniques',
    icon: '💻',
    color: 'bg-blue-500',
    paperRestriction: 'Paper 1',
    subtopics: [
      // 4.1.1 Programming
      'Data types',
      'Integer',
      'Real/Float',
      'Boolean',
      'Character',
      'String',
      'Date/Time',
      'Pointer/Reference',
      'Records',
      'Arrays',
      'User-defined data types',
      // Programming concepts
      'Variable declaration',
      'Constant declaration',
      'Assignment',
      'Iteration',
      'Selection',
      'Subroutine (procedure/function)',
      // Arithmetic operations
      'Addition',
      'Subtraction',
      'Multiplication',
      'Real division',
      'Integer division',
      'Modulo',
      'Exponentiation',
      'Rounding',
      'Truncation',
      // Relational operations
      'Equal to',
      'Not equal to',
      'Less than',
      'Greater than',
      'Less than or equal to',
      'Greater than or equal to',
      // Boolean operations
      'NOT',
      'AND',
      'OR',
      'XOR',
      // Constants and variables
      'Local variables',
      'Global variables',
      'Constants',
      'Scope',
      // String handling
      'Length',
      'Position',
      'Substring',
      'Concatenation',
      'Character to code',
      'Code to character',
      'String conversion',
      // Random number generation
      'Random number generation',
      // Exception handling
      'Try-catch blocks',
      'Exception handling',
      'Throwing exceptions',
      // Subroutines
      'Parameters',
      'By value',
      'By reference',
      'Return values',
      // Recursion
      'Recursion',
      'Base case',
      'Recursive case',
      'Call stack',
      'Stack overflow',
      // Object-oriented programming
      'Classes',
      'Objects',
      'Methods',
      'Attributes',
      'Instantiation',
      'Encapsulation',
      'Inheritance',
      'Polymorphism',
      'Overriding',
      'Aggregation',
      'Composition',
      'Class diagrams',
      'Public, private, protected',
      'Getters and setters',
      'Constructors',
    ],
  },

  // ============================================================================
  // 4.2 FUNDAMENTALS OF DATA STRUCTURES
  // ============================================================================
  {
    id: 'aqa-alevel-cs-data-structures',
    examBoard: 'aqa',
    name: 'Fundamentals of Data Structures',
    description: 'Abstract data types, queues, stacks, graphs, trees, and hash tables',
    icon: '🗃️',
    color: 'bg-purple-500',
    paperRestriction: 'Paper 1',
    subtopics: [
      // 4.2.1 Data structures and abstract data types
      'Data structures',
      'Abstract data types',
      'Single vs multi-dimensional arrays',
      // Static and dynamic structures
      'Static data structures',
      'Dynamic data structures',
      'Heap memory',
      'Stack memory',
      // Queues
      'Queue operations',
      'Enqueue',
      'Dequeue',
      'Front',
      'Rear',
      'IsEmpty',
      'IsFull',
      'Linear queue',
      'Circular queue',
      'Priority queue',
      // Stacks
      'Stack operations',
      'Push',
      'Pop',
      'Peek',
      'IsEmpty',
      'IsFull',
      'Call stack',
      // Graphs
      'Graphs',
      'Vertices (nodes)',
      'Edges (arcs)',
      'Directed graphs',
      'Undirected graphs',
      'Weighted graphs',
      'Adjacency matrix',
      'Adjacency list',
      // Trees
      'Trees',
      'Root',
      'Parent',
      'Child',
      'Leaf nodes',
      'Binary trees',
      'Binary search trees',
      'Tree traversal',
      'Pre-order traversal',
      'In-order traversal',
      'Post-order traversal',
      // Hash tables
      'Hash tables',
      'Hash functions',
      'Collisions',
      'Collision resolution',
      'Linear probing',
      'Chaining',
      // Dictionaries
      'Dictionaries',
      'Key-value pairs',
      // Vectors
      'Vectors',
      'Vector representation',
      'Vector addition',
      'Scalar-vector multiplication',
      'Dot product',
      'Convex combination',
    ],
  },

  // ============================================================================
  // 4.3 FUNDAMENTALS OF ALGORITHMS
  // ============================================================================
  {
    id: 'aqa-alevel-cs-algorithms',
    examBoard: 'aqa',
    name: 'Fundamentals of Algorithms',
    description: 'Graph traversal, tree traversal, searching, sorting, and optimisation',
    icon: '🔄',
    color: 'bg-green-500',
    paperRestriction: 'Paper 1',
    subtopics: [
      // 4.3.1 Graph traversal
      'Depth-first search',
      'Breadth-first search',
      'DFS implementation',
      'BFS implementation',
      'Applications of graph traversal',
      // 4.3.2 Tree traversal
      'Pre-order traversal',
      'In-order traversal',
      'Post-order traversal',
      'Traversal algorithms',
      // 4.3.3 Reverse Polish notation
      'Reverse Polish notation',
      'Infix to RPN conversion',
      'Evaluating RPN expressions',
      'Using a stack for RPN',
      // 4.3.4 Searching algorithms
      'Linear search',
      'Binary search',
      'Binary tree search',
      'Comparing search algorithms',
      // 4.3.5 Sorting algorithms
      'Bubble sort',
      'Insertion sort',
      'Merge sort',
      'Quick sort',
      'Comparing sorting algorithms',
      'Time complexity of sorts',
      // 4.3.6 Optimisation algorithms
      'Dijkstra\'s shortest path algorithm',
      'A* algorithm',
    ],
  },

  // ============================================================================
  // 4.4 THEORY OF COMPUTATION
  // ============================================================================
  {
    id: 'aqa-alevel-cs-theory-computation',
    examBoard: 'aqa',
    name: 'Theory of Computation',
    description: 'Abstraction, automata, regular expressions, BNF, and computability',
    icon: '🧮',
    color: 'bg-red-500',
    paperRestriction: 'Paper 2',
    subtopics: [
      // 4.4.1 Abstraction and automation
      'Problem solving',
      'Abstraction',
      'Information hiding',
      'Procedural abstraction',
      'Functional abstraction',
      'Data abstraction',
      'Decomposition',
      'Composition',
      'Automation',
      // 4.4.2 Regular languages
      'Finite state machines',
      'Mealy machines',
      'Moore machines',
      'State transition diagrams',
      'State transition tables',
      'Sets',
      'Set notation',
      'Set comprehension',
      'Cartesian product',
      'Subsets',
      'Union',
      'Intersection',
      'Difference',
      'Regular expressions',
      'Regular expression symbols',
      'Pattern matching',
      'Regular languages',
      // 4.4.3 Context-free languages
      'Backus-Naur Form (BNF)',
      'Syntax diagrams',
      'Context-free grammars',
      'Parse trees',
      // 4.4.4 Classification of algorithms
      'Big O notation',
      'Time complexity',
      'Space complexity',
      'O(1) - constant',
      'O(log n) - logarithmic',
      'O(n) - linear',
      'O(n log n) - linearithmic',
      'O(n²) - polynomial',
      'O(2^n) - exponential',
      'Tractable problems',
      'Intractable problems',
      'Heuristic approaches',
      // 4.4.5 Model of computation
      'Turing machines',
      'Universal Turing machine',
      'Halting problem',
      'Computability',
      'Computable problems',
      'Non-computable problems',
    ],
  },

  // ============================================================================
  // 4.5 FUNDAMENTALS OF DATA REPRESENTATION
  // ============================================================================
  {
    id: 'aqa-alevel-cs-data-representation',
    examBoard: 'aqa',
    name: 'Fundamentals of Data Representation',
    description: 'Number systems, floating point, information coding, and encryption',
    icon: '📊',
    color: 'bg-orange-500',
    paperRestriction: 'Paper 2',
    subtopics: [
      // 4.5.1 Number systems
      'Natural numbers',
      'Integer numbers',
      'Rational numbers',
      'Irrational numbers',
      'Real numbers',
      'Ordinal numbers',
      // 4.5.2 Number bases
      'Binary (base 2)',
      'Denary (base 10)',
      'Hexadecimal (base 16)',
      'Base conversions',
      // 4.5.3 Units of information
      'Bits',
      'Bytes',
      'Kilobytes (KB)',
      'Megabytes (MB)',
      'Gigabytes (GB)',
      'Terabytes (TB)',
      // 4.5.4 Binary number system
      'Unsigned binary',
      'Unsigned binary range',
      'Signed binary',
      'Two\'s complement',
      'Sign and magnitude',
      'Binary arithmetic',
      'Binary addition',
      'Binary subtraction',
      'Overflow',
      // 4.5.5 Information coding systems
      'Character encoding',
      'ASCII',
      'Unicode',
      'Error detection',
      'Parity bits',
      'Majority voting',
      'Check digits',
      'Error correction',
      'Hamming code',
      // 4.5.6 Representing images, sound
      'Bitmap images',
      'Pixels',
      'Resolution',
      'Colour depth',
      'Image file size',
      'Metadata',
      'Vector graphics',
      'Sound representation',
      'Sampling',
      'Sample rate',
      'Sample resolution',
      'Nyquist theorem',
      'MIDI',
      'Sound file size',
      // 4.5.7 Data compression
      'Lossy compression',
      'Lossless compression',
      'Run-length encoding',
      'Dictionary coding',
      // 4.5.8 Encryption
      'Symmetric encryption',
      'Asymmetric encryption',
      'Public key',
      'Private key',
      'Digital signatures',
      'Digital certificates',
    ],
  },

  // ============================================================================
  // 4.6 FUNDAMENTALS OF COMPUTER SYSTEMS
  // ============================================================================
  {
    id: 'aqa-alevel-cs-computer-systems',
    examBoard: 'aqa',
    name: 'Fundamentals of Computer Systems',
    description: 'Hardware, software, classification, and Boolean algebra',
    icon: '🖥️',
    color: 'bg-cyan-500',
    paperRestriction: 'Paper 2',
    subtopics: [
      // 4.6.1 Hardware and software
      'Hardware vs software',
      'System software',
      'Application software',
      'Relationship between hardware and software',
      // 4.6.2 Classification of programming languages
      'Low-level languages',
      'Machine code',
      'Assembly language',
      'High-level languages',
      // 4.6.3 Types of program translators
      'Assembler',
      'Compiler',
      'Interpreter',
      'Bytecode',
      'Advantages and disadvantages',
      // 4.6.4 Logic gates
      'NOT gate',
      'AND gate',
      'OR gate',
      'XOR gate',
      'NAND gate',
      'NOR gate',
      'Truth tables',
      // 4.6.5 Boolean algebra
      'Boolean expressions',
      'Boolean identities',
      'De Morgan\'s laws',
      'Simplifying Boolean expressions',
      'Karnaugh maps',
      'Half adder',
      'Full adder',
      'D-type flip-flops',
    ],
  },

  // ============================================================================
  // 4.7 FUNDAMENTALS OF COMPUTER ORGANISATION AND ARCHITECTURE
  // ============================================================================
  {
    id: 'aqa-alevel-cs-organisation-architecture',
    examBoard: 'aqa',
    name: 'Fundamentals of Computer Organisation and Architecture',
    description: 'CPU architecture, instruction sets, and I/O devices',
    icon: '🔧',
    color: 'bg-indigo-500',
    paperRestriction: 'Paper 2',
    subtopics: [
      // 4.7.1 Internal hardware components
      'Internal components',
      'Processor',
      'Main memory',
      'I/O controllers',
      'Buses',
      'Address bus',
      'Data bus',
      'Control bus',
      'I/O ports',
      // 4.7.2 Stored program concept
      'Von Neumann architecture',
      'Harvard architecture',
      'Stored program concept',
      'Fetch-execute cycle',
      // 4.7.3 Structure and role of processor
      'ALU',
      'Control unit',
      'Registers',
      'Program counter',
      'Current instruction register',
      'Memory address register',
      'Memory buffer register',
      'Status register',
      'System clock',
      'General purpose registers',
      // 4.7.4 External hardware devices
      'Input devices',
      'Output devices',
      'Storage devices',
      'Barcode readers',
      'Digital cameras',
      'Scanners',
      'RFID',
      'Printers',
      'Actuators',
      // 4.7.5 Processor instruction set
      'Machine code operations',
      'Load',
      'Store',
      'Add',
      'Subtract',
      'Multiply',
      'Divide',
      'Branch',
      'Compare',
      'Logical operations',
      'Halt',
      'Addressing modes',
      'Immediate addressing',
      'Direct addressing',
      'Indirect addressing',
      'Indexed addressing',
      // 4.7.6 Assembly language
      'Assembly language features',
      'Mnemonics',
      'Opcodes',
      'Operands',
      'Labels',
      'Directives',
      // 4.7.7 Interrupt handling
      'Interrupts',
      'Interrupt service routines',
      'Interrupt priorities',
      'Interrupt vector table',
      // 4.7.8 Processors
      'CISC vs RISC',
      'Multi-core processors',
      'Parallel processing',
      'Pipelining',
      'GPU processing',
      'Co-processors',
    ],
  },

  // ============================================================================
  // 4.8 CONSEQUENCES OF USES OF COMPUTING
  // ============================================================================
  {
    id: 'aqa-alevel-cs-consequences',
    examBoard: 'aqa',
    name: 'Consequences of Uses of Computing',
    description: 'Ethical, legal, and moral issues in computing',
    icon: '⚖️',
    color: 'bg-pink-500',
    paperRestriction: 'Paper 2',
    subtopics: [
      // 4.8.1 Individual, social, legal, ethical
      'Moral issues',
      'Ethical issues',
      'Legal issues',
      'Cultural issues',
      'Privacy',
      'Surveillance',
      'Censorship',
      'Data ownership',
      'Digital footprint',
      'Copyright',
      'Patents',
      'Data Protection Act',
      'Computer Misuse Act',
      'Freedom of Information Act',
      'GDPR',
      'Environmental impact',
      'E-waste',
      'Energy consumption',
      'Impact on employment',
      'Automation',
      'AI ethics',
      'Autonomous vehicles',
      'Digital divide',
    ],
  },

  // ============================================================================
  // 4.9 FUNDAMENTALS OF COMMUNICATION AND NETWORKING
  // ============================================================================
  {
    id: 'aqa-alevel-cs-networking',
    examBoard: 'aqa',
    name: 'Fundamentals of Communication and Networking',
    description: 'Network protocols, topologies, client-server, and web technologies',
    icon: '🌐',
    color: 'bg-teal-500',
    paperRestriction: 'Paper 2',
    subtopics: [
      // 4.9.1 Communication
      'Serial transmission',
      'Parallel transmission',
      'Synchronous transmission',
      'Asynchronous transmission',
      'Bit rate',
      'Baud rate',
      'Bandwidth',
      'Latency',
      // 4.9.2 Networking
      'Protocol definition',
      'TCP/IP protocol stack',
      'Application layer',
      'Transport layer',
      'Network layer',
      'Data link layer',
      'Physical layer',
      'MAC addresses',
      'IP addresses',
      'IPv4',
      'IPv6',
      'Subnetting',
      'Subnet masks',
      'Public vs private IP',
      'NAT',
      'Port forwarding',
      'Sockets',
      // 4.9.3 The Internet
      'Internet structure',
      'Packet switching',
      'Circuit switching',
      'Routers',
      'Gateways',
      'DNS',
      'Domain names',
      // 4.9.4 Internet security
      'Firewalls',
      'Proxy servers',
      'Encryption',
      'Symmetric encryption',
      'Asymmetric encryption',
      'SSL/TLS',
      'Digital certificates',
      'Certificate authorities',
      'Malware',
      'Worms',
      'Trojans',
      'Viruses',
      // 4.9.5 Client-server and peer-to-peer
      'Client-server model',
      'Peer-to-peer model',
      'API',
      'REST',
      'Web sockets',
      'Cloud computing',
      'Thin vs thick clients',
    ],
  },

  // ============================================================================
  // 4.10 FUNDAMENTALS OF DATABASES
  // ============================================================================
  {
    id: 'aqa-alevel-cs-databases',
    examBoard: 'aqa',
    name: 'Fundamentals of Databases',
    description: 'Relational databases, normalisation, SQL, and transactions',
    icon: '🗄️',
    color: 'bg-emerald-500',
    paperRestriction: 'Paper 2',
    subtopics: [
      // 4.10.1 Conceptual data modelling
      'Entity-relationship modelling',
      'Entities',
      'Attributes',
      'Relationships',
      'Entity-relationship diagrams',
      'Cardinality',
      'One-to-one',
      'One-to-many',
      'Many-to-many',
      // 4.10.2 Relational databases
      'Relational database concepts',
      'Tables',
      'Records',
      'Fields',
      'Primary key',
      'Foreign key',
      'Composite key',
      'Secondary key',
      'Referential integrity',
      // 4.10.3 Normalisation
      'Purpose of normalisation',
      'First normal form (1NF)',
      'Second normal form (2NF)',
      'Third normal form (3NF)',
      'Eliminating redundancy',
      'Data integrity',
      // 4.10.4 SQL
      'Data definition language (DDL)',
      'CREATE TABLE',
      'ALTER TABLE',
      'DROP TABLE',
      'Data manipulation language (DML)',
      'SELECT',
      'INSERT',
      'UPDATE',
      'DELETE',
      'WHERE clause',
      'ORDER BY',
      'GROUP BY',
      'HAVING',
      'JOIN operations',
      'INNER JOIN',
      'LEFT JOIN',
      'RIGHT JOIN',
      'Aggregate functions',
      'COUNT',
      'SUM',
      'AVG',
      'MIN',
      'MAX',
      // 4.10.5 Client-server databases
      'Client-server architecture',
      'Concurrent access',
      'Record locking',
      'Serialisation',
      'Timestamp ordering',
      'Commitment ordering',
      'ACID properties',
      'Atomicity',
      'Consistency',
      'Isolation',
      'Durability',
    ],
  },

  // ============================================================================
  // 4.11 BIG DATA
  // ============================================================================
  {
    id: 'aqa-alevel-cs-big-data',
    examBoard: 'aqa',
    name: 'Big Data',
    description: 'Big data concepts, machine learning, and distributed computing',
    icon: '📈',
    color: 'bg-yellow-500',
    paperRestriction: 'Paper 2',
    subtopics: [
      // 4.11.1 Big Data
      'Big Data definition',
      'Volume',
      'Velocity',
      'Variety',
      'Veracity',
      'Value',
      'Structured data',
      'Unstructured data',
      'Data sources',
      'Data warehouses',
      'Data mining',
      'Predictive analytics',
      // Machine learning concepts
      'Machine learning',
      'Supervised learning',
      'Unsupervised learning',
      'Neural networks',
      'Deep learning',
      // Distributed computing
      'Distributed computing',
      'MapReduce',
      'Hadoop',
      'Graph and relationship models',
      'NoSQL databases',
      'Document databases',
      'Graph databases',
    ],
  },

  // ============================================================================
  // 4.12 FUNDAMENTALS OF FUNCTIONAL PROGRAMMING
  // ============================================================================
  {
    id: 'aqa-alevel-cs-functional-programming',
    examBoard: 'aqa',
    name: 'Fundamentals of Functional Programming',
    description: 'Functional programming concepts and techniques',
    icon: 'λ',
    color: 'bg-slate-500',
    paperRestriction: 'Paper 1',
    subtopics: [
      // 4.12.1 Functional programming paradigm
      'Function as first-class object',
      'Higher-order functions',
      'Function application',
      'Function composition',
      'Partial function application',
      'Currying',
      // 4.12.2 Writing functional programs
      'Immutable data structures',
      'Pure functions',
      'Side effects',
      'Referential transparency',
      'Recursion in functional programming',
      'List processing',
      'Head of list',
      'Tail of list',
      'Empty list',
      'List operations',
      'Map function',
      'Filter function',
      'Reduce/fold function',
    ],
  },

  // ============================================================================
  // 4.13 SYSTEMATIC APPROACH TO PROBLEM SOLVING
  // ============================================================================
  {
    id: 'aqa-alevel-cs-problem-solving',
    examBoard: 'aqa',
    name: 'Systematic Approach to Problem Solving',
    description: 'Analysis, design, implementation, testing, and evaluation',
    icon: '🎯',
    color: 'bg-rose-500',
    paperRestriction: 'Paper 1',
    subtopics: [
      // 4.13.1 Aspects of software development
      'Analysis',
      'Requirements gathering',
      'Stakeholder identification',
      'Problem identification',
      'Design',
      'Top-down design',
      'Modular design',
      'Pseudo-code',
      'Structure diagrams',
      'Data flow diagrams',
      'System flowcharts',
      'Implementation',
      'Coding',
      'Version control',
      'Testing',
      'Test strategies',
      'Test plans',
      'White box testing',
      'Black box testing',
      'Alpha testing',
      'Beta testing',
      'Acceptance testing',
      'Evaluation',
      'Criteria for evaluation',
      'Documentation',
    ],
  },
];

export function getAQAALevelComputerScienceTopicById(id: string): Topic | undefined {
  return aqaALevelComputerScienceTopics.find((topic) => topic.id === id);
}

export function getAQAALevelComputerScienceTopicsByPaper(paper: 1 | 2): Topic[] {
  const paperName = `Paper ${paper}`;
  return aqaALevelComputerScienceTopics.filter((topic) => topic.paperRestriction === paperName);
}

export function countAQAALevelComputerScienceSubtopics(): number {
  return aqaALevelComputerScienceTopics.reduce((total, topic) => total + topic.subtopics.length, 0);
}
