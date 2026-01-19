// AQA A-Level Computer Science (7517) Question Generation Prompts
// Based on analysis of actual AQA past papers (June 2022, 2023, 2024)
// and official mark schemes
// Comprehensive version with detailed topic knowledge and worked examples

import { Difficulty, Topic } from '@/types';
import { getDiagramDocsForSubject } from './prompts-common';

// A-Level Computer Science mark ranges based on AQA specification
function getMarkRangeForDifficulty(difficulty: Difficulty): { min: number; max: number } {
  switch (difficulty) {
    case 'easy':
      return { min: 2, max: 4 };    // Short answer questions
    case 'medium':
      return { min: 6, max: 9 };    // Application and algorithm questions
    case 'hard':
      return { min: 12, max: 20 };  // Extended response and programming questions
  }
}

// ============================================================================
// AQA A-LEVEL COMPUTER SCIENCE SPECIFICATION DETAILS (7517)
// Based on official AQA specification and past paper analysis
// ============================================================================

const AQA_ALEVEL_CS_COGNITIVE_CHALLENGE = `
## Cognitive Challenge by Difficulty Level

| Difficulty | Cognitive Skills | Question Characteristics |
|------------|------------------|-------------------------|
| **Easy** | Recall, identification, tracing | Define terms, identify components, trace algorithms |
| **Medium** | Application, implementation, analysis | Write code for given problems, analyse algorithm efficiency, explain data structures |
| **Hard** | Design, evaluation, optimisation | Design algorithms/systems, evaluate trade-offs, optimise solutions |

**What makes "hard" cognitively challenging (not just more marks):**
- Requires designing solutions to novel problems
- Demands evaluation of algorithmic efficiency and trade-offs
- Must consider real-world constraints and edge cases
- Requires integration of theory with practical implementation
- No single optimal solution - student must justify design choices

**Easy (1-4 marks):** Knowledge recall and algorithm tracing
**Medium (4-9 marks):** Implementation and analysis
**Hard (9-20 marks):** Design and evaluation with justification
`;

const AQA_ALEVEL_CS_ASSESSMENT_OBJECTIVES = `
## AQA A-Level Computer Science Assessment Objectives

| Objective | Description | Weighting |
|-----------|-------------|-----------|
| **AO1** | Demonstrate knowledge and understanding of the principles and concepts of computer science | 30-35% |
| **AO2** | Apply knowledge and understanding to analyse problems and design solutions | 30-35% |
| **AO3** | Design, program and evaluate computer systems that solve problems | 35-40% |

### Assessment Structure
| Component | Title | Time | Marks | Weighting |
|-----------|-------|------|-------|-----------|
| **Paper 1** | On-screen examination | 2h 30m | 100 | 40% |
| **Paper 2** | Written examination | 2h 30m | 100 | 40% |
| **NEA** | Practical programming project | - | 75 | 20% |

### Paper 1 Focus (On-screen)
- Computational thinking and problem-solving
- Programming skills (skeleton code provided)
- Uses pre-release material
- Five programming language options: Python, C#, Java, Pascal/Delphi, VB.NET
- Questions involve code analysis, completion, and writing

### Paper 2 Focus (Written)
- Theory of computation (FSMs, Turing machines, regular expressions)
- Data representation (floating point, normalisation)
- Computer systems and architecture
- Networking and databases (normalisation, SQL)
- Big Data and functional programming
- Consequences of computing
`;

const AQA_ALEVEL_CS_PSEUDOCODE = `
## AQA A-Level Computer Science Pseudocode

### Data Types and Assignment
\`\`\`
variable ← value
CONST PI ← 3.14159
type RecordType
    field1: DataType
    field2: DataType
endtype
\`\`\`

### Object-Oriented Programming
\`\`\`
class ClassName inherits ParentClass
    private attribute1
    public attribute2

    public procedure new(parameters)
        // constructor
    endprocedure

    public function methodName(parameters)
        // method body
        return value
    endfunction
endclass

object ← new ClassName(parameters)
object.methodName(parameters)
\`\`\`

### Abstract Data Structures
\`\`\`
// Stack operations
stack.push(item)
stack.pop()
stack.peek()
stack.isEmpty()
stack.isFull()

// Queue operations
queue.enqueue(item)
queue.dequeue()
queue.front()
queue.isEmpty()
queue.isFull()

// Priority Queue
priorityQueue.enqueue(item, priority)
priorityQueue.dequeue()

// Linked list
node.data
node.next
node.prev  // doubly linked

// Binary tree
tree.root
tree.left
tree.right
tree.data

// Graph
graph.addVertex(v)
graph.addEdge(v1, v2, weight)
graph.getNeighbours(v)
\`\`\`

### Graph Algorithms
\`\`\`
// Adjacency matrix
graph[i][j]

// Graph traversal - Depth First
PROCEDURE DFS(node, visited)
    visited.add(node)
    OUTPUT node
    FOR EACH neighbour OF node
        IF neighbour NOT IN visited THEN
            DFS(neighbour, visited)
        ENDIF
    ENDFOR
ENDPROCEDURE

// Graph traversal - Breadth First
PROCEDURE BFS(startNode)
    queue ← empty queue
    visited ← empty set
    queue.enqueue(startNode)
    visited.add(startNode)
    WHILE NOT queue.isEmpty()
        current ← queue.dequeue()
        OUTPUT current
        FOR EACH neighbour OF current
            IF neighbour NOT IN visited THEN
                visited.add(neighbour)
                queue.enqueue(neighbour)
            ENDIF
        ENDFOR
    ENDWHILE
ENDPROCEDURE
\`\`\`

### Recursion
\`\`\`
FUNCTION factorial(n)
    IF n = 0 THEN
        RETURN 1
    ELSE
        RETURN n * factorial(n - 1)
    ENDIF
ENDFUNCTION

FUNCTION fibonacci(n)
    IF n <= 1 THEN
        RETURN n
    ELSE
        RETURN fibonacci(n - 1) + fibonacci(n - 2)
    ENDIF
ENDFUNCTION
\`\`\`

### Functional Programming
\`\`\`
// Higher-order functions
map(function, list)
filter(function, list)
reduce(function, initial, list)  // also called fold

// Function composition
f ∘ g (equivalent to f(g(x)))

// Lambda/anonymous functions
λx.x+1  // function that adds 1 to input

// Partial application
add(x, y) = x + y
addOne = add(1)  // partially applied
addOne(5) = 6
\`\`\`

### Selection and Iteration
\`\`\`
IF condition THEN
    statements
ELSE IF condition THEN
    statements
ELSE
    statements
ENDIF

FOR i ← 1 TO n
    statements
ENDFOR

WHILE condition
    statements
ENDWHILE

REPEAT
    statements
UNTIL condition
\`\`\`

### Input/Output and File Handling
\`\`\`
OUTPUT message
INPUT variable

file ← OPEN("filename.txt")
line ← file.READLINE()
file.WRITELINE(data)
file.CLOSE()
\`\`\`
`;

const AQA_ALEVEL_CS_QUESTION_TEMPLATES = `
## Authentic AQA A-Level Question Formats (From Past Papers)

### Type 1: Algorithm Analysis (3-6 marks)
Format: "State the Big-O time complexity of [algorithm]"
OR "Explain why [algorithm] has time complexity O(n²)"
OR "Compare the time complexities of [algorithm A] and [algorithm B]"

Example from papers:
| Algorithm | Time Complexity |
|-----------|----------------|
| Binary tree search (balanced) | O(log n) |
| Binary tree search (worst case) | O(n) |
| Bubble sort | O(n²) |
| Merge sort | O(n log n) |
| Linear search | O(n) |
| Hash table lookup | O(1) average, O(n) worst |
| Dijkstra's algorithm | O(V² + E) or O((V + E) log V) |

### Type 2: Algorithm Implementation (6-12 marks)
Format: "Write a [recursive/iterative] algorithm to..."
OR "Amend the source code so that..."
OR "Complete the function to perform..."

Examples from papers:
- "Amend the source code so that a binary search is used"
- "Write a function to perform Dijkstra's algorithm"
- "Implement an in-order traversal of a binary tree"
- "Write a recursive function to calculate..."

### Type 3: Data Structure Questions (4-8 marks)
Format: "Show how [data structure] would store..."
OR "Explain how [operation] would be performed on..."
OR "Draw the [data structure] after operations..."

Examples:
- Binary tree insertion/deletion
- Hash table collision resolution (linear probing, chaining)
- Stack/queue operations with array implementation
- Graph representations (adjacency matrix/list)

### Type 4: Reverse Polish Notation (2-4 marks)
Format: "Convert [infix expression] to Reverse Polish Notation"
OR "Evaluate the RPN expression..."
Example: Convert "(5 + 3) * 2" to RPN → "5 3 + 2 *"
Evaluation: "5 3 + 2 *" → 8 * 2 → 16

### Type 5: Graph Theory (4-12 marks)
Format: "Using Dijkstra's algorithm, find the shortest path from..."
OR "Perform a depth-first traversal starting from..."
OR "Apply the A* algorithm to find..."

### Type 6: Boolean Algebra (3-6 marks)
Format: "Simplify the Boolean expression..."
OR "Use De Morgan's laws to rewrite..."
OR "Create a Karnaugh map for..."

### Type 7: SQL Queries (4-8 marks)
Format: "Write an SQL query to..."
- SELECT with JOIN (INNER, LEFT, RIGHT)
- Aggregate functions (COUNT, SUM, AVG, MAX, MIN)
- GROUP BY and HAVING
- Subqueries (nested SELECT)
- UNION operations

### Type 8: Normalisation Questions (4-8 marks)
Format: "Normalise the following table to 3NF"
OR "Explain why this table is not in [1NF/2NF/3NF]"
OR "Identify the functional dependencies in..."

### Type 9: Theory Questions (2-6 marks)
Format: "Explain the difference between..."
OR "Describe how [concept] works"
OR "State the purpose of..."

### Type 10: Extended Response (9-15 marks)
Format: "Discuss..." or "Evaluate..."
- Uses levels of response marking
- Requires technical depth and breadth
- Often includes ethical, legal, or social aspects

### Type 11: Finite State Machine Questions (4-8 marks)
Format: "Draw a finite state machine that..."
OR "Complete the state transition table..."
OR "Describe the language accepted by..."

### Type 12: Floating Point Questions (3-6 marks)
Format: "Convert [decimal] to normalised floating point"
OR "What is the range/precision of..."
OR "Explain the trade-off between mantissa and exponent"

### Type 13: Functional Programming (4-8 marks)
Format: "Write a function using map/filter/reduce to..."
OR "Explain partial application with an example"
OR "Show function composition for..."
`;

const AQA_ALEVEL_CS_MARK_SCHEME_CONVENTIONS = `
## AQA A-Level Mark Scheme Conventions

### Code Marking
- Alternative correct solutions always accepted
- Minor syntax errors ignored if logic is correct
- Case of program code is ignored
- Variable names may differ if logic correct
- Equivalent pseudocode structures accepted

### Level of Response (Extended Questions)
**Level 4 (13-15 marks):** Exceptional depth, comprehensive coverage, sophisticated analysis
- Demonstrates thorough understanding of topic
- Uses technical terminology accurately throughout
- Provides balanced, well-reasoned evaluation
- Draws sophisticated conclusions

**Level 3 (9-12 marks):** Good depth, accurate, well-structured, clear analysis
- Shows good understanding of main concepts
- Uses mostly accurate terminology
- Provides reasoned evaluation with some balance
- Draws appropriate conclusions

**Level 2 (5-8 marks):** Some depth, mostly accurate, reasonable structure
- Shows understanding of basic concepts
- Uses some correct terminology
- Limited evaluation or one-sided argument
- Basic conclusions

**Level 1 (1-4 marks):** Limited depth, basic understanding, some errors
- Shows limited understanding
- Limited or incorrect use of terminology
- Superficial or no evaluation
- Weak or no conclusions

### Big-O Questions
- Must state complexity class correctly
- Explanation should reference key operations
- Accept equivalent expressions (e.g., O(n) = O(2n))
- Must justify complexity with reasoning

### Algorithm Questions
- Award marks for correct logic flow
- Award marks for correct data structure usage
- Award marks for efficiency considerations
- Award marks for handling edge cases

### SQL Marking
- Table names in front of field names acceptable
- Case and spacing ignored
- Missing ASC in ORDER BY clause ignored
- Alternative valid syntax accepted
- Semicolons optional

### Normalisation Marking
- Must identify all functional dependencies
- Must show intermediate normal forms
- Accept valid alternative decompositions
- Must explain anomalies where relevant

### Floating Point Marking
- Award marks for correct sign bit
- Award marks for correct mantissa
- Award marks for correct exponent
- Must show normalisation if required
`;

const AQA_ALEVEL_CS_REFERENCE_DATA = `
## A-Level Reference Data

### Big O Notation
| Complexity | Name | Example | Growth |
|------------|------|---------|--------|
| O(1) | Constant | Array index access, hash table lookup | Does not grow |
| O(log n) | Logarithmic | Binary search, balanced BST | Grows slowly |
| O(n) | Linear | Linear search, traversing list | Grows linearly |
| O(n log n) | Linearithmic | Merge sort, heap sort | Grows moderately |
| O(n²) | Quadratic | Bubble sort, nested loops | Grows quickly |
| O(n³) | Cubic | Matrix multiplication (naive) | Grows very quickly |
| O(2ⁿ) | Exponential | Recursive fibonacci, power set | Grows extremely fast |
| O(n!) | Factorial | Travelling salesman (brute force) | Grows astronomically |

### Comparison of Complexities (n = 1000)
| O(1) | O(log n) | O(n) | O(n log n) | O(n²) | O(2ⁿ) |
|------|----------|------|------------|-------|-------|
| 1 | 10 | 1,000 | 10,000 | 1,000,000 | 10^301 |

### Boolean Algebra Laws
| Law | AND Form | OR Form |
|-----|----------|---------|
| Identity | A AND 1 = A | A OR 0 = A |
| Null | A AND 0 = 0 | A OR 1 = 1 |
| Idempotent | A AND A = A | A OR A = A |
| Inverse | A AND NOT A = 0 | A OR NOT A = 1 |
| Commutative | A AND B = B AND A | A OR B = B OR A |
| Associative | (A AND B) AND C = A AND (B AND C) | (A OR B) OR C = A OR (B OR C) |
| Distributive | A AND (B OR C) = (A AND B) OR (A AND C) | A OR (B AND C) = (A OR B) AND (A OR C) |
| Absorption | A OR (A AND B) = A | A AND (A OR B) = A |
| De Morgan | NOT(A AND B) = NOT A OR NOT B | NOT(A OR B) = NOT A AND NOT B |
| Double Negation | NOT(NOT A) = A | |

### Number Representations
- **Unsigned binary**: 0 to 2ⁿ - 1
- **Two's complement**: -2ⁿ⁻¹ to 2ⁿ⁻¹ - 1
- **Floating point**: sign × mantissa × 2^exponent

### Normalised Floating Point
- Positive mantissa starts with 0.1... (in binary)
- Negative mantissa (two's complement) starts with 1.0...
- Maximises precision by ensuring most significant bit is significant

### Floating Point Trade-offs
| More Mantissa Bits | More Exponent Bits |
|-------------------|-------------------|
| Greater precision | Greater range |
| Smaller range | Less precision |
| More significant figures | Can represent larger/smaller numbers |

### ASCII Values (Key ranges)
| Characters | ASCII Values |
|------------|--------------|
| 'A' to 'Z' | 65 to 90 |
| 'a' to 'z' | 97 to 122 |
| '0' to '9' | 48 to 57 |
| Space | 32 |

### Graph Algorithm Complexities
| Algorithm | Time Complexity | Space Complexity |
|-----------|-----------------|------------------|
| DFS | O(V + E) | O(V) |
| BFS | O(V + E) | O(V) |
| Dijkstra (array) | O(V²) | O(V) |
| Dijkstra (heap) | O((V + E) log V) | O(V) |
| A* | O(b^d) worst case | O(b^d) |
| Prim's (array) | O(V²) | O(V) |
| Kruskal's | O(E log E) | O(V) |

### Sorting Algorithm Complexities
| Algorithm | Best | Average | Worst | Space | Stable |
|-----------|------|---------|-------|-------|--------|
| Bubble Sort | O(n) | O(n²) | O(n²) | O(1) | Yes |
| Insertion Sort | O(n) | O(n²) | O(n²) | O(1) | Yes |
| Merge Sort | O(n log n) | O(n log n) | O(n log n) | O(n) | Yes |
| Quick Sort | O(n log n) | O(n log n) | O(n²) | O(log n) | No |
| Heap Sort | O(n log n) | O(n log n) | O(n log n) | O(1) | No |
`;

// ============================================================================
// TOPIC-SPECIFIC DETAILED KNOWLEDGE
// ============================================================================

const AQA_ALEVEL_OOP_KNOWLEDGE = `
## Object-Oriented Programming (OOP)

### Core OOP Principles

**1. Encapsulation**
- Bundling data (attributes) and methods that operate on data within a class
- Hiding internal implementation details from outside
- Using access modifiers: private, public, protected
- Getters and setters control access to private attributes
- Reduces coupling between components

\`\`\`python
class BankAccount:
    def __init__(self, account_number, balance=0):
        self.__account_number = account_number  # Private attribute
        self.__balance = balance                 # Private attribute

    def get_balance(self):                       # Getter
        return self.__balance

    def deposit(self, amount):                   # Public method
        if amount > 0:
            self.__balance += amount
            return True
        return False

    def withdraw(self, amount):
        if 0 < amount <= self.__balance:
            self.__balance -= amount
            return True
        return False
\`\`\`

**2. Inheritance**
- Creating new classes from existing classes
- Child class (subclass) inherits from parent class (superclass)
- Promotes code reuse and establishes "is-a" relationships
- Subclass can override parent methods
- Multiple inheritance: class inherits from multiple parents (not in all languages)

\`\`\`python
class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        pass  # Abstract method - to be overridden

class Dog(Animal):
    def __init__(self, name, breed):
        super().__init__(name)  # Call parent constructor
        self.breed = breed

    def speak(self):            # Override parent method
        return f"{self.name} says Woof!"

class Cat(Animal):
    def speak(self):
        return f"{self.name} says Meow!"

# Usage
dog = Dog("Rex", "German Shepherd")
print(dog.speak())  # Rex says Woof!
\`\`\`

**3. Polymorphism**
- "Many forms" - same interface, different implementations
- Objects of different classes respond to same method call
- Achieved through method overriding (runtime polymorphism)
- Enables writing flexible, extensible code

\`\`\`python
def make_animal_speak(animal):
    # Works with any object that has a speak() method
    print(animal.speak())

animals = [Dog("Rex", "Labrador"), Cat("Whiskers")]
for animal in animals:
    make_animal_speak(animal)
# Output: Rex says Woof!
#         Whiskers says Meow!
\`\`\`

**4. Abstraction**
- Hiding complex implementation, showing only essential features
- Abstract classes define interface without full implementation
- Cannot instantiate abstract classes directly
- Forces subclasses to implement abstract methods

\`\`\`python
from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def area(self):
        pass

    @abstractmethod
    def perimeter(self):
        pass

class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def area(self):
        return self.width * self.height

    def perimeter(self):
        return 2 * (self.width + self.height)

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius

    def area(self):
        return 3.14159 * self.radius ** 2

    def perimeter(self):
        return 2 * 3.14159 * self.radius
\`\`\`

### Class Relationships

**Association**
- General relationship between classes
- "Uses" relationship
- Objects can exist independently

**Aggregation**
- "Has-a" relationship (weak)
- Part can exist without whole
- Example: Department has Employees (employees can exist without department)

**Composition**
- "Has-a" relationship (strong)
- Part cannot exist without whole
- Example: House has Rooms (rooms don't exist without house)

\`\`\`python
# Composition example
class Room:
    def __init__(self, name):
        self.name = name

class House:
    def __init__(self, address):
        self.address = address
        self.rooms = []  # Rooms belong to this house

    def add_room(self, name):
        self.rooms.append(Room(name))  # Room created within house

    # When house is deleted, rooms are also deleted

# Aggregation example
class Employee:
    def __init__(self, name):
        self.name = name

class Department:
    def __init__(self, name):
        self.name = name
        self.employees = []  # References to existing employees

    def add_employee(self, employee):
        self.employees.append(employee)  # Employee exists independently
\`\`\`

### Design Patterns (A-Level Awareness)

**Singleton Pattern**
- Ensures only one instance of a class exists
- Provides global access point to that instance

**Factory Pattern**
- Creates objects without specifying exact class
- Useful when object creation is complex

### OOP Benefits
1. **Modularity**: Code organized into self-contained units
2. **Reusability**: Inheritance allows code reuse
3. **Flexibility**: Polymorphism enables extensible design
4. **Maintainability**: Encapsulation limits change impact
5. **Testability**: Individual classes can be tested independently

### OOP vs Procedural Programming
| OOP | Procedural |
|-----|------------|
| Data and methods bundled | Data and functions separate |
| Objects interact | Functions called sequentially |
| Inheritance for reuse | Functions called for reuse |
| Better for large systems | Simpler for small programs |
| Models real-world entities | Models processes |
`;

const AQA_ALEVEL_DATA_STRUCTURES_KNOWLEDGE = `
## Data Structures

### 1. Stacks

**Definition**: LIFO (Last In, First Out) data structure

**Operations**:
- push(item): Add item to top - O(1)
- pop(): Remove and return top item - O(1)
- peek(): View top item without removing - O(1)
- isEmpty(): Check if stack empty - O(1)
- isFull(): Check if stack full (array implementation) - O(1)

**Array Implementation**:
\`\`\`python
class Stack:
    def __init__(self, max_size):
        self.stack = [None] * max_size
        self.max_size = max_size
        self.top = -1  # -1 indicates empty stack

    def push(self, item):
        if self.top >= self.max_size - 1:
            return False  # Stack overflow
        self.top += 1
        self.stack[self.top] = item
        return True

    def pop(self):
        if self.top < 0:
            return None  # Stack underflow
        item = self.stack[self.top]
        self.top -= 1
        return item

    def peek(self):
        if self.top < 0:
            return None
        return self.stack[self.top]

    def is_empty(self):
        return self.top < 0

    def is_full(self):
        return self.top >= self.max_size - 1
\`\`\`

**Applications**:
- Expression evaluation (postfix/RPN)
- Bracket matching
- Function call stack (recursion)
- Undo operations in editors
- Backtracking algorithms
- Depth-first search

### 2. Queues

**Definition**: FIFO (First In, First Out) data structure

**Operations**:
- enqueue(item): Add item to rear - O(1)
- dequeue(): Remove and return front item - O(1)
- front(): View front item without removing - O(1)
- isEmpty(): Check if queue empty - O(1)
- isFull(): Check if queue full - O(1)

**Linear Queue (Array Implementation)**:
\`\`\`python
class LinearQueue:
    def __init__(self, max_size):
        self.queue = [None] * max_size
        self.max_size = max_size
        self.front = 0
        self.rear = -1
        self.size = 0

    def enqueue(self, item):
        if self.size >= self.max_size:
            return False  # Queue full
        self.rear += 1
        self.queue[self.rear] = item
        self.size += 1
        return True

    def dequeue(self):
        if self.size == 0:
            return None  # Queue empty
        item = self.queue[self.front]
        self.front += 1
        self.size -= 1
        return item
\`\`\`

**Circular Queue Implementation**:
\`\`\`python
class CircularQueue:
    def __init__(self, max_size):
        self.queue = [None] * max_size
        self.max_size = max_size
        self.front = 0
        self.rear = -1
        self.size = 0

    def enqueue(self, item):
        if self.size >= self.max_size:
            return False
        self.rear = (self.rear + 1) % self.max_size  # Wrap around
        self.queue[self.rear] = item
        self.size += 1
        return True

    def dequeue(self):
        if self.size == 0:
            return None
        item = self.queue[self.front]
        self.front = (self.front + 1) % self.max_size  # Wrap around
        self.size -= 1
        return item
\`\`\`

**Priority Queue**:
- Elements have priorities
- Higher priority elements dequeued first
- Used in: Dijkstra's algorithm, A* algorithm, task scheduling

**Applications**:
- Print job scheduling
- CPU task scheduling
- Breadth-first search
- Buffering (keyboard, network)

### 3. Linked Lists

**Definition**: Linear data structure where elements are connected via pointers

**Types**:
- Singly linked: Each node points to next
- Doubly linked: Each node points to next and previous
- Circular: Last node points to first

**Singly Linked List Implementation**:
\`\`\`python
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def insert_at_start(self, data):  # O(1)
        new_node = Node(data)
        new_node.next = self.head
        self.head = new_node

    def insert_at_end(self, data):  # O(n)
        new_node = Node(data)
        if self.head is None:
            self.head = new_node
            return
        current = self.head
        while current.next is not None:
            current = current.next
        current.next = new_node

    def delete(self, data):  # O(n)
        if self.head is None:
            return False
        if self.head.data == data:
            self.head = self.head.next
            return True
        current = self.head
        while current.next is not None:
            if current.next.data == data:
                current.next = current.next.next
                return True
            current = current.next
        return False

    def search(self, data):  # O(n)
        current = self.head
        while current is not None:
            if current.data == data:
                return True
            current = current.next
        return False

    def traverse(self):  # O(n)
        current = self.head
        while current is not None:
            print(current.data)
            current = current.next
\`\`\`

**Linked List vs Array**:
| Operation | Array | Linked List |
|-----------|-------|-------------|
| Access by index | O(1) | O(n) |
| Insert at start | O(n) | O(1) |
| Insert at end | O(1)* | O(n) or O(1)** |
| Delete | O(n) | O(n) |
| Memory | Contiguous | Non-contiguous |
| Size | Fixed | Dynamic |

*Amortised for dynamic arrays
**O(1) if tail pointer maintained

### 4. Binary Trees

**Definition**: Hierarchical structure where each node has at most two children

**Terminology**:
- Root: Top node
- Parent: Node with children
- Child: Node below a parent
- Leaf: Node with no children
- Subtree: Tree formed by a node and its descendants
- Height: Longest path from root to leaf
- Depth: Path length from root to node

**Binary Search Tree (BST)**:
- Left subtree contains smaller values
- Right subtree contains larger values
- Enables efficient searching

\`\`\`python
class TreeNode:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None

class BinarySearchTree:
    def __init__(self):
        self.root = None

    def insert(self, data):
        if self.root is None:
            self.root = TreeNode(data)
        else:
            self._insert_recursive(self.root, data)

    def _insert_recursive(self, node, data):
        if data < node.data:
            if node.left is None:
                node.left = TreeNode(data)
            else:
                self._insert_recursive(node.left, data)
        else:
            if node.right is None:
                node.right = TreeNode(data)
            else:
                self._insert_recursive(node.right, data)

    def search(self, data):  # O(log n) average, O(n) worst
        return self._search_recursive(self.root, data)

    def _search_recursive(self, node, data):
        if node is None:
            return False
        if data == node.data:
            return True
        elif data < node.data:
            return self._search_recursive(node.left, data)
        else:
            return self._search_recursive(node.right, data)

    # Tree Traversals
    def inorder(self, node):  # Left, Root, Right - gives sorted order
        if node:
            self.inorder(node.left)
            print(node.data)
            self.inorder(node.right)

    def preorder(self, node):  # Root, Left, Right
        if node:
            print(node.data)
            self.preorder(node.left)
            self.preorder(node.right)

    def postorder(self, node):  # Left, Right, Root
        if node:
            self.postorder(node.left)
            self.postorder(node.right)
            print(node.data)
\`\`\`

**BST Complexities**:
| Operation | Average | Worst (unbalanced) |
|-----------|---------|-------------------|
| Search | O(log n) | O(n) |
| Insert | O(log n) | O(n) |
| Delete | O(log n) | O(n) |

### 5. Graphs

**Definition**: Set of vertices (nodes) connected by edges

**Types**:
- Directed (digraph): Edges have direction
- Undirected: Edges have no direction
- Weighted: Edges have values/costs
- Unweighted: All edges equal

**Representations**:

**Adjacency Matrix**:
\`\`\`
     A  B  C  D
A [  0  1  1  0 ]
B [  1  0  1  1 ]
C [  1  1  0  0 ]
D [  0  1  0  0 ]
\`\`\`

**Adjacency List**:
\`\`\`
A: [B, C]
B: [A, C, D]
C: [A, B]
D: [B]
\`\`\`

**Comparison**:
| Aspect | Adjacency Matrix | Adjacency List |
|--------|-----------------|----------------|
| Space | O(V²) | O(V + E) |
| Check edge exists | O(1) | O(degree) |
| Find all neighbours | O(V) | O(degree) |
| Add edge | O(1) | O(1) |
| Better for | Dense graphs | Sparse graphs |

\`\`\`python
# Adjacency List Implementation
class Graph:
    def __init__(self):
        self.adjacency_list = {}

    def add_vertex(self, vertex):
        if vertex not in self.adjacency_list:
            self.adjacency_list[vertex] = []

    def add_edge(self, v1, v2, weight=1):
        if v1 in self.adjacency_list and v2 in self.adjacency_list:
            self.adjacency_list[v1].append((v2, weight))
            self.adjacency_list[v2].append((v1, weight))  # Undirected

    def get_neighbours(self, vertex):
        return self.adjacency_list.get(vertex, [])
\`\`\`

### 6. Hash Tables

**Definition**: Data structure mapping keys to values using a hash function

**Hash Function**:
- Converts key to array index
- Should distribute keys uniformly
- Same key always produces same hash

**Collision Resolution**:

**1. Chaining (Open Hashing)**:
- Each bucket contains a linked list
- Colliding items added to same bucket's list

**2. Linear Probing (Closed Hashing)**:
- If slot occupied, check next slot
- Continue until empty slot found
- May cause clustering

**3. Quadratic Probing**:
- Check slots at 1², 2², 3², ... positions away
- Reduces clustering

\`\`\`python
class HashTable:
    def __init__(self, size):
        self.size = size
        self.table = [None] * size

    def hash_function(self, key):
        # Simple hash function for strings
        total = 0
        for char in str(key):
            total += ord(char)
        return total % self.size

    def insert(self, key, value):
        index = self.hash_function(key)
        # Linear probing
        original_index = index
        while self.table[index] is not None:
            if self.table[index][0] == key:
                self.table[index] = (key, value)  # Update
                return
            index = (index + 1) % self.size
            if index == original_index:
                raise Exception("Hash table full")
        self.table[index] = (key, value)

    def search(self, key):
        index = self.hash_function(key)
        original_index = index
        while self.table[index] is not None:
            if self.table[index][0] == key:
                return self.table[index][1]
            index = (index + 1) % self.size
            if index == original_index:
                return None
        return None
\`\`\`

**Hash Table Complexities**:
| Operation | Average | Worst |
|-----------|---------|-------|
| Insert | O(1) | O(n) |
| Search | O(1) | O(n) |
| Delete | O(1) | O(n) |

**Load Factor**: Number of entries / Table size
- High load factor → more collisions
- Typically resize when load factor > 0.7
`;

const AQA_ALEVEL_ALGORITHMS_KNOWLEDGE = `
## Algorithms and Complexity Analysis

### Big O Notation

**Definition**: Describes the upper bound of time/space complexity as input grows

**Rules**:
1. Drop constants: O(2n) → O(n)
2. Drop lower order terms: O(n² + n) → O(n²)
3. Consider worst case (unless specified)
4. Focus on dominant operations

**Common Complexities (fastest to slowest)**:
O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(n³) < O(2ⁿ) < O(n!)

### Searching Algorithms

**Linear Search** - O(n):
\`\`\`python
def linear_search(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i
    return -1
\`\`\`

**Binary Search** - O(log n):
- Requires sorted array
- Divide and conquer approach
\`\`\`python
def binary_search(arr, target):
    low, high = 0, len(arr) - 1
    while low <= high:
        mid = (low + high) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            low = mid + 1
        else:
            high = mid - 1
    return -1

# Recursive version
def binary_search_recursive(arr, target, low, high):
    if low > high:
        return -1
    mid = (low + high) // 2
    if arr[mid] == target:
        return mid
    elif arr[mid] < target:
        return binary_search_recursive(arr, target, mid + 1, high)
    else:
        return binary_search_recursive(arr, target, low, mid - 1)
\`\`\`

### Sorting Algorithms

**Bubble Sort** - O(n²):
\`\`\`python
def bubble_sort(arr):
    n = len(arr)
    for i in range(n - 1):
        swapped = False
        for j in range(n - 1 - i):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True
        if not swapped:  # Optimisation: stop if no swaps
            break
    return arr
\`\`\`

**Merge Sort** - O(n log n):
\`\`\`python
def merge_sort(arr):
    if len(arr) <= 1:
        return arr

    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])

    return merge(left, right)

def merge(left, right):
    result = []
    i = j = 0

    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1

    result.extend(left[i:])
    result.extend(right[j:])
    return result
\`\`\`

**Quick Sort** - O(n log n) average, O(n²) worst:
\`\`\`python
def quick_sort(arr):
    if len(arr) <= 1:
        return arr

    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]

    return quick_sort(left) + middle + quick_sort(right)
\`\`\`

### Graph Algorithms

**Depth-First Search (DFS)** - O(V + E):
\`\`\`python
def dfs(graph, start, visited=None):
    if visited is None:
        visited = set()

    visited.add(start)
    print(start)  # Process node

    for neighbour in graph[start]:
        if neighbour not in visited:
            dfs(graph, neighbour, visited)

    return visited

# Iterative with stack
def dfs_iterative(graph, start):
    visited = set()
    stack = [start]

    while stack:
        vertex = stack.pop()
        if vertex not in visited:
            visited.add(vertex)
            print(vertex)
            for neighbour in graph[vertex]:
                if neighbour not in visited:
                    stack.append(neighbour)

    return visited
\`\`\`

**Breadth-First Search (BFS)** - O(V + E):
\`\`\`python
from collections import deque

def bfs(graph, start):
    visited = set()
    queue = deque([start])
    visited.add(start)

    while queue:
        vertex = queue.popleft()
        print(vertex)  # Process node

        for neighbour in graph[vertex]:
            if neighbour not in visited:
                visited.add(neighbour)
                queue.append(neighbour)

    return visited
\`\`\`

**Dijkstra's Algorithm** - O(V²) or O((V + E) log V) with heap:
Finds shortest paths from source to all other vertices in weighted graph
\`\`\`python
import heapq

def dijkstra(graph, start):
    # graph format: {node: [(neighbour, weight), ...]}
    distances = {node: float('infinity') for node in graph}
    distances[start] = 0
    previous = {node: None for node in graph}

    priority_queue = [(0, start)]
    visited = set()

    while priority_queue:
        current_distance, current = heapq.heappop(priority_queue)

        if current in visited:
            continue
        visited.add(current)

        for neighbour, weight in graph[current]:
            distance = current_distance + weight

            if distance < distances[neighbour]:
                distances[neighbour] = distance
                previous[neighbour] = current
                heapq.heappush(priority_queue, (distance, neighbour))

    return distances, previous

# Reconstruct path
def get_path(previous, target):
    path = []
    current = target
    while current is not None:
        path.append(current)
        current = previous[current]
    return path[::-1]
\`\`\`

**Dijkstra's Algorithm Trace Example**:
Given graph:
\`\`\`
A --2-- B --3-- D
|       |      /
4       1    2
|       |  /
C --5-- E
\`\`\`

Finding shortest path from A:

| Step | Visited | Distance from A |
|------|---------|-----------------|
| 0 | {} | A:0, B:∞, C:∞, D:∞, E:∞ |
| 1 | {A} | A:0, B:2, C:4, D:∞, E:∞ |
| 2 | {A,B} | A:0, B:2, C:4, D:5, E:3 |
| 3 | {A,B,E} | A:0, B:2, C:4, D:5, E:3 |
| 4 | {A,B,E,C} | A:0, B:2, C:4, D:5, E:3 |
| 5 | {A,B,E,C,D} | A:0, B:2, C:4, D:5, E:3 |

**A* Algorithm**:
- Informed search algorithm
- Uses heuristic to guide search
- f(n) = g(n) + h(n)
  - g(n): Actual cost from start to n
  - h(n): Estimated cost from n to goal (heuristic)
- Heuristic must be admissible (never overestimate)

\`\`\`python
def a_star(graph, start, goal, heuristic):
    open_set = [(0, start)]  # Priority queue
    came_from = {}
    g_score = {node: float('infinity') for node in graph}
    g_score[start] = 0
    f_score = {node: float('infinity') for node in graph}
    f_score[start] = heuristic(start, goal)

    while open_set:
        _, current = heapq.heappop(open_set)

        if current == goal:
            return reconstruct_path(came_from, current)

        for neighbour, weight in graph[current]:
            tentative_g = g_score[current] + weight

            if tentative_g < g_score[neighbour]:
                came_from[neighbour] = current
                g_score[neighbour] = tentative_g
                f_score[neighbour] = tentative_g + heuristic(neighbour, goal)
                heapq.heappush(open_set, (f_score[neighbour], neighbour))

    return None  # No path found
\`\`\`

### Tree Traversals

**In-order** (Left, Root, Right) - Gives sorted order for BST:
\`\`\`python
def inorder(node):
    if node:
        inorder(node.left)
        print(node.data)
        inorder(node.right)
\`\`\`

**Pre-order** (Root, Left, Right) - Useful for copying tree:
\`\`\`python
def preorder(node):
    if node:
        print(node.data)
        preorder(node.left)
        preorder(node.right)
\`\`\`

**Post-order** (Left, Right, Root) - Useful for deleting tree:
\`\`\`python
def postorder(node):
    if node:
        postorder(node.left)
        postorder(node.right)
        print(node.data)
\`\`\`

### Reverse Polish Notation (RPN)

**Infix to RPN Conversion (Shunting Yard Algorithm)**:
\`\`\`
Infix: (3 + 4) * 2
RPN:   3 4 + 2 *
\`\`\`

**RPN Evaluation using Stack**:
\`\`\`python
def evaluate_rpn(expression):
    stack = []
    tokens = expression.split()

    for token in tokens:
        if token.isdigit():
            stack.append(int(token))
        else:
            b = stack.pop()
            a = stack.pop()
            if token == '+':
                stack.append(a + b)
            elif token == '-':
                stack.append(a - b)
            elif token == '*':
                stack.append(a * b)
            elif token == '/':
                stack.append(a // b)

    return stack[0]

# Example: "3 4 + 2 *" → 14
\`\`\`

### Recursion

**Components of Recursive Solution**:
1. Base case: Condition to stop recursion
2. Recursive case: Function calls itself with modified input
3. Progress: Each call moves toward base case

**Stack Frame Usage**:
- Each recursive call creates new stack frame
- Stores local variables and return address
- Stack overflow if too many calls (no/unreachable base case)

**Examples**:
\`\`\`python
# Factorial - O(n)
def factorial(n):
    if n <= 1:  # Base case
        return 1
    return n * factorial(n - 1)  # Recursive case

# Fibonacci - O(2^n) naive, O(n) with memoisation
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)

# With memoisation
def fibonacci_memo(n, memo={}):
    if n in memo:
        return memo[n]
    if n <= 1:
        return n
    memo[n] = fibonacci_memo(n - 1, memo) + fibonacci_memo(n - 2, memo)
    return memo[n]

# Tower of Hanoi - O(2^n)
def hanoi(n, source, auxiliary, target):
    if n == 1:
        print(f"Move disk from {source} to {target}")
        return
    hanoi(n - 1, source, target, auxiliary)
    print(f"Move disk from {source} to {target}")
    hanoi(n - 1, auxiliary, source, target)
\`\`\`

### Algorithm Complexity Summary

| Algorithm | Best | Average | Worst | Space |
|-----------|------|---------|-------|-------|
| Linear Search | O(1) | O(n) | O(n) | O(1) |
| Binary Search | O(1) | O(log n) | O(log n) | O(1) |
| Bubble Sort | O(n) | O(n²) | O(n²) | O(1) |
| Merge Sort | O(n log n) | O(n log n) | O(n log n) | O(n) |
| Quick Sort | O(n log n) | O(n log n) | O(n²) | O(log n) |
| DFS | O(V + E) | O(V + E) | O(V + E) | O(V) |
| BFS | O(V + E) | O(V + E) | O(V + E) | O(V) |
| Dijkstra | O(V²) | O(V²) | O(V²) | O(V) |
| Dijkstra (heap) | O((V+E) log V) | O((V+E) log V) | O((V+E) log V) | O(V) |
`;

const AQA_ALEVEL_THEORY_OF_COMPUTATION = `
## Theory of Computation

### Finite State Machines (FSMs)

**Definition**: Abstract machine with finite number of states, transitions between states based on input

**Components**:
- Set of states (Q)
- Input alphabet (Σ)
- Transition function (δ)
- Initial state (q₀)
- Set of accepting/final states (F)

**Types**:

**1. Deterministic Finite Automaton (DFA)**:
- Exactly one transition for each input symbol from each state
- No ambiguity in state transitions

**2. Non-deterministic Finite Automaton (NFA)**:
- Can have multiple transitions for same input
- Can have ε (epsilon) transitions (move without input)
- Every NFA can be converted to equivalent DFA

**FSM Representation**:
- State transition diagram (graphical)
- State transition table

**Example: FSM accepting strings ending in "01"**:
\`\`\`
States: {q0, q1, q2}
Alphabet: {0, 1}
Start: q0
Accept: {q2}

Transitions:
q0 --0--> q1
q0 --1--> q0
q1 --0--> q1
q1 --1--> q2
q2 --0--> q1
q2 --1--> q0
\`\`\`

**State Transition Table**:
| Current State | Input 0 | Input 1 |
|---------------|---------|---------|
| q0 | q1 | q0 |
| q1 | q1 | q2* |
| q2* | q1 | q0 |

(* indicates accepting state)

### Mealy and Moore Machines

**Moore Machine**:
- Output depends only on current state
- Output associated with states
- Output changes when state changes

**Mealy Machine**:
- Output depends on current state AND input
- Output associated with transitions
- Can produce output without state change
- Generally has fewer states than equivalent Moore machine

### Regular Expressions

**Definition**: Notation for describing patterns in strings

**Basic Operators**:
| Operator | Meaning | Example |
|----------|---------|---------|
| . | Concatenation | ab (a followed by b) |
| \| | Alternation (OR) | a\|b (a or b) |
| * | Kleene star (0 or more) | a* (ε, a, aa, aaa, ...) |
| + | One or more | a+ (a, aa, aaa, ...) |
| ? | Zero or one | a? (ε or a) |

**Examples**:
- \`a*b\` - Any number of a's followed by b
- \`(ab)*\` - Any number of "ab" pairs
- \`a|b\` - Either a or b
- \`(a|b)*\` - Any combination of a's and b's
- \`a*b*\` - Any a's followed by any b's

**Regular Languages**:
- Languages that can be described by regular expressions
- Languages accepted by finite state machines
- Closed under union, concatenation, and Kleene star

### Turing Machines

**Definition**: Theoretical computing machine that can simulate any algorithm

**Components**:
- Infinite tape (divided into cells)
- Read/write head
- Finite set of states
- Transition function

**Transition Format**: (current state, read symbol) → (new state, write symbol, direction)

**Example Transition Table** (Binary increment):
| State | Read | Write | Move | Next State |
|-------|------|-------|------|------------|
| q0 | 1 | 1 | R | q0 |
| q0 | 0 | 0 | R | q0 |
| q0 | B | B | L | q1 |
| q1 | 1 | 0 | L | q1 |
| q1 | 0 | 1 | N | HALT |
| q1 | B | 1 | N | HALT |

(B = blank, R = right, L = left, N = no move)

**Universal Turing Machine (UTM)**:
- Can simulate any other Turing machine
- Takes description of TM and its input as input
- Foundation of modern stored-program computers

**Church-Turing Thesis**:
- Any effectively calculable function can be computed by a Turing machine
- Turing machines capture the notion of "computability"

### Halting Problem

**Definition**: Determine whether a given program will halt or run forever on given input

**Key Result**: The halting problem is undecidable
- No algorithm can solve it for all programs
- Proven by Alan Turing using proof by contradiction

**Proof Outline**:
1. Assume halting detector H(P, I) exists
2. Create program D that:
   - Runs H(D, D)
   - If H says D halts, D loops forever
   - If H says D loops, D halts
3. Contradiction: D cannot consistently halt or loop
4. Therefore, H cannot exist

### Computational Complexity Classes

**P (Polynomial Time)**:
- Problems solvable in polynomial time O(nᵏ)
- Examples: Sorting, searching, graph traversal

**NP (Non-deterministic Polynomial Time)**:
- Problems whose solutions can be verified in polynomial time
- Examples: Sudoku, travelling salesman (decision version)

**NP-Complete**:
- Hardest problems in NP
- All NP problems can be reduced to them
- If any NP-Complete problem has polynomial solution, P = NP

**NP-Hard**:
- At least as hard as NP-Complete
- May not be in NP (solution may not be verifiable in polynomial time)

**P vs NP Problem**:
- Is P = NP? (Can every problem verifiable in polynomial time also be solved in polynomial time?)
- One of the great unsolved problems in computer science
- Most researchers believe P ≠ NP

### Tractable vs Intractable Problems

**Tractable**:
- Can be solved in polynomial time
- Feasible to solve for large inputs
- Examples: Sorting, shortest path

**Intractable**:
- Cannot be solved in polynomial time (unless P = NP)
- Exponential or worse complexity
- Examples: Travelling salesman (optimisation), Boolean satisfiability

**Heuristic Approaches** for intractable problems:
- Approximation algorithms
- Genetic algorithms
- Simulated annealing
- Accept "good enough" solutions
`;

const AQA_ALEVEL_FLOATING_POINT = `
## Floating Point Representation

### Structure of Floating Point Numbers

**Components**:
- Sign bit: 0 = positive, 1 = negative
- Mantissa: Significant digits (fractional part)
- Exponent: Power of 2 (determines position of binary point)

**Format**: Number = Mantissa × 2^Exponent

### Binary Fractions

**Place values after binary point**:
| Position | 1 | . | 1 | 2 | 3 | 4 |
|----------|---|---|---|---|---|---|
| Value | 1 | | 0.5 (1/2) | 0.25 (1/4) | 0.125 (1/8) | 0.0625 (1/16) |

**Example**: 0.101₂ = 0.5 + 0.125 = 0.625₁₀

### Normalisation

**Purpose**: Maximise precision by ensuring mantissa uses all available bits meaningfully

**Rules for normalised form**:
- Positive numbers: Mantissa starts with 0.1...
- Negative numbers (two's complement): Mantissa starts with 1.0...

**Why normalise?**:
- Avoids wasting bits on leading zeros
- Maximises significant figures
- Provides unique representation

**Example** (8-bit mantissa, 4-bit exponent):

Denormalised: 0.00101 × 2^5
Normalised: 0.101 × 2^3 (shifted mantissa left, decreased exponent)

### Converting Decimal to Floating Point

**Example**: Convert 13.5 to floating point (8-bit mantissa, 4-bit exponent, two's complement)

Step 1: Convert to binary
13.5₁₀ = 1101.1₂

Step 2: Normalise
1101.1 = 0.11011 × 2^4

Step 3: Express in floating point format
- Sign: 0 (positive)
- Mantissa: 01101100 (0.11011 with trailing zeros)
- Exponent: 0100 (4 in two's complement)

**Result**: Mantissa: 01101100, Exponent: 0100

### Converting Floating Point to Decimal

**Example**: Mantissa: 01100000, Exponent: 0011

Step 1: Interpret mantissa
0.1100000₂ = 0.5 + 0.25 = 0.75₁₀

Step 2: Interpret exponent
0011₂ = 3₁₀

Step 3: Calculate value
0.75 × 2³ = 0.75 × 8 = 6₁₀

### Negative Numbers in Floating Point

**Two's Complement for Mantissa and Exponent**

**Example**: Convert -5.5 to floating point

Step 1: Convert to binary
5.5₁₀ = 101.1₂

Step 2: Normalise
101.1 = 0.1011 × 2³

Step 3: Take two's complement of mantissa
Positive mantissa: 01011000
Two's complement: 10101000

Step 4: Exponent (positive)
3₁₀ = 0011₂

**Result**: Mantissa: 10101000, Exponent: 0011

### Range and Precision

**Range**: Determined by exponent bits
- More exponent bits = larger range
- Fewer exponent bits = smaller range

**Precision**: Determined by mantissa bits
- More mantissa bits = more precision
- Fewer mantissa bits = less precision

**Trade-off**:
| Configuration | Range | Precision |
|---------------|-------|-----------|
| Large exponent, small mantissa | Wide | Low |
| Small exponent, large mantissa | Narrow | High |

**Example** (12-bit total):
- 8-bit mantissa, 4-bit exponent: Higher precision, smaller range
- 4-bit mantissa, 8-bit exponent: Lower precision, larger range

### Calculating Range

**For n-bit two's complement exponent**:
- Maximum exponent: 2^(n-1) - 1
- Minimum exponent: -2^(n-1)

**Maximum positive number**: Largest mantissa × 2^(max exponent)
**Minimum positive number**: Smallest normalised mantissa × 2^(min exponent)

**Example** (8-bit mantissa, 4-bit exponent):
- Max exponent: 7 (0111₂)
- Min exponent: -8 (1000₂)
- Max value ≈ 0.111111111 × 2^7 ≈ 127
- Min positive value ≈ 0.1 × 2^(-8) ≈ 0.00195

### Floating Point Errors

**Rounding Errors**: Numbers that can't be exactly represented are rounded

**Overflow**: Result too large to represent (exponent overflow)

**Underflow**: Result too small to represent (rounds to zero)

**Precision Loss**: Adding numbers of very different magnitudes
- Small number may be lost
- Example: 1.0 × 2^10 + 1.0 × 2^(-5) may lose the smaller value

### Comparison with Fixed Point

| Aspect | Fixed Point | Floating Point |
|--------|-------------|----------------|
| Range | Limited | Large |
| Precision | Uniform | Varies with magnitude |
| Speed | Faster | Slower |
| Implementation | Simpler | Complex |
| Use case | Embedded systems, money | Scientific computing |
`;

const AQA_ALEVEL_OPERATING_SYSTEMS = `
## Operating Systems

### Role of Operating System

**Definition**: System software that manages hardware and provides services for applications

**Key Functions**:
1. **Resource Management**: Allocates CPU, memory, I/O devices
2. **Process Management**: Creates, schedules, terminates processes
3. **Memory Management**: Allocates RAM, implements virtual memory
4. **File Management**: Organises files, manages storage
5. **I/O Management**: Controls devices, handles interrupts
6. **Security**: Access control, authentication
7. **User Interface**: CLI or GUI

### Process Management

**Process vs Program**:
- Program: Static code stored on disk
- Process: Program in execution (code + resources + state)

**Process States**:
\`\`\`
         +--------+
    +--->| Ready  |<---+
    |    +--------+    |
    |        |         |
    |        v         |
+-------+  +--------+  +----------+
| New   |->| Running|->| Terminated|
+-------+  +--------+  +----------+
               |
               v
         +--------+
         | Waiting|
         +--------+
\`\`\`

**State Transitions**:
- New → Ready: Process created and ready to run
- Ready → Running: Scheduler selects process
- Running → Ready: Time slice expired (preempted)
- Running → Waiting: Process waits for I/O or event
- Waiting → Ready: I/O complete or event occurred
- Running → Terminated: Process completes or is killed

### Process Scheduling

**Goals**:
- Maximise CPU utilisation
- Maximise throughput
- Minimise waiting time
- Minimise response time
- Ensure fairness

**Scheduling Algorithms**:

**1. First Come First Served (FCFS)**:
- Non-preemptive
- Simple queue
- Convoy effect (short processes wait for long ones)

**2. Shortest Job First (SJF)**:
- Non-preemptive
- Minimises average waiting time
- Requires knowing job length in advance
- Starvation possible for long processes

**3. Round Robin (RR)**:
- Preemptive
- Fixed time quantum
- Fair allocation
- Context switching overhead

**4. Priority Scheduling**:
- Higher priority processes run first
- Can be preemptive or non-preemptive
- Starvation possible (solved by aging)

**5. Multi-level Feedback Queue**:
- Multiple queues with different priorities
- Processes move between queues based on behaviour
- Adaptive to process characteristics

### Memory Management

**Memory Hierarchy**:
\`\`\`
Registers (fastest, smallest)
    ↓
L1 Cache
    ↓
L2 Cache
    ↓
L3 Cache
    ↓
RAM
    ↓
SSD/HDD (slowest, largest)
\`\`\`

**Paging**:
- Physical memory divided into fixed-size frames
- Virtual memory divided into pages (same size as frames)
- Page table maps virtual pages to physical frames
- Eliminates external fragmentation

**Virtual Memory**:
- Gives illusion of more memory than physically available
- Uses disk as extension of RAM
- Processes have own virtual address space
- Page faults trigger loading pages from disk

**Page Replacement Algorithms**:
- **FIFO**: Replace oldest page
- **LRU (Least Recently Used)**: Replace page unused longest
- **Optimal**: Replace page not needed for longest (theoretical)

**Thrashing**:
- Excessive paging activity
- System spends more time swapping than executing
- Occurs when working set > available memory

### Interrupts

**Definition**: Signal that diverts CPU to handle an event

**Types**:
- **Hardware Interrupts**: From devices (keyboard, timer, disk)
- **Software Interrupts**: From programs (system calls, exceptions)

**Interrupt Handling**:
1. Interrupt signal received
2. CPU completes current instruction
3. CPU saves current state (registers, PC)
4. Interrupt Service Routine (ISR) executes
5. State restored, normal execution resumes

**Interrupt Priority**:
- Higher priority interrupts can interrupt lower priority ISRs
- Critical interrupts (power failure) have highest priority

### Device Management

**Device Drivers**:
- Software interface between OS and hardware
- Translates OS commands to device-specific operations
- Abstracts hardware details from OS

**I/O Methods**:
- **Polling**: CPU repeatedly checks device status (wastes CPU cycles)
- **Interrupts**: Device signals when ready (more efficient)
- **DMA (Direct Memory Access)**: Device transfers data directly to memory (most efficient for large transfers)

### BIOS and Booting

**BIOS (Basic Input/Output System)**:
- Firmware stored in ROM
- Initialises hardware
- Performs POST (Power On Self Test)
- Loads bootloader

**Boot Process**:
1. Power on
2. BIOS/UEFI initialises
3. POST checks hardware
4. BIOS finds boot device
5. Bootloader loads
6. Operating system kernel loads
7. System initialisation
8. User interface starts

### Kernel Types

**Monolithic Kernel**:
- All OS services in single large binary
- Fast (no context switches between services)
- Less modular, harder to maintain
- Examples: Linux, older Windows

**Microkernel**:
- Minimal kernel (memory, IPC, scheduling)
- Other services run in user space
- More modular, easier to maintain
- Slower due to message passing
- Examples: MINIX, QNX

**Hybrid Kernel**:
- Compromise between monolithic and microkernel
- Some services in kernel, some in user space
- Examples: Modern Windows, macOS
`;

const AQA_ALEVEL_DATABASES_KNOWLEDGE = `
## Databases

### Database Concepts

**Entity**: Object about which data is stored (e.g., Student, Course)
**Attribute**: Property of an entity (e.g., StudentID, Name)
**Relationship**: Association between entities

**Primary Key**: Unique identifier for each record
- Must be unique
- Cannot be NULL
- Should not change

**Foreign Key**: Attribute that references primary key in another table
- Creates relationships between tables
- Maintains referential integrity

**Composite Key**: Primary key consisting of multiple attributes

### Normalisation

**Purpose**: Organise data to reduce redundancy and anomalies

**Anomalies**:
- **Insertion Anomaly**: Cannot add data without other data
- **Deletion Anomaly**: Deleting data unintentionally removes other data
- **Update Anomaly**: Same data stored multiple places must all be updated

**First Normal Form (1NF)**:
- All attributes are atomic (single values)
- No repeating groups
- Primary key identified

**Example violation**: StudentID, Name, Courses (where Courses contains "Maths, Physics")

**Solution**: Separate row for each course

**Second Normal Form (2NF)**:
- Must be in 1NF
- No partial dependencies (all non-key attributes depend on whole primary key)

**Example violation**: Table with composite key (StudentID, CourseID) containing StudentName
- StudentName only depends on StudentID, not CourseID

**Solution**: Create separate Student table

**Third Normal Form (3NF)**:
- Must be in 2NF
- No transitive dependencies (non-key attributes depend only on primary key, not on other non-key attributes)

**Example violation**: StudentID, DepartmentID, DepartmentName
- DepartmentName depends on DepartmentID, not on StudentID

**Solution**: Create separate Department table

**Normalisation Process**:
\`\`\`
Unnormalised:
OrderID | CustomerName | CustomerAddress | Items | Quantities | Prices

1NF:
OrderID | CustomerName | CustomerAddress | Item | Quantity | Price

2NF:
Orders: OrderID | CustomerName | CustomerAddress
OrderItems: OrderID | Item | Quantity | Price

3NF:
Customers: CustomerID | CustomerName | CustomerAddress
Orders: OrderID | CustomerID
Products: ProductID | ProductName | Price
OrderItems: OrderID | ProductID | Quantity
\`\`\`

### SQL - Structured Query Language

**Data Definition Language (DDL)**:
\`\`\`sql
-- Create table
CREATE TABLE Students (
    StudentID INT PRIMARY KEY,
    FirstName VARCHAR(50) NOT NULL,
    LastName VARCHAR(50) NOT NULL,
    DateOfBirth DATE,
    DepartmentID INT,
    FOREIGN KEY (DepartmentID) REFERENCES Departments(DepartmentID)
);

-- Alter table
ALTER TABLE Students ADD Email VARCHAR(100);

-- Drop table
DROP TABLE Students;
\`\`\`

**Data Manipulation Language (DML)**:
\`\`\`sql
-- Insert
INSERT INTO Students (StudentID, FirstName, LastName, DateOfBirth)
VALUES (1, 'John', 'Smith', '2005-03-15');

-- Update
UPDATE Students
SET Email = 'john.smith@school.ac.uk'
WHERE StudentID = 1;

-- Delete
DELETE FROM Students
WHERE StudentID = 1;
\`\`\`

**Queries with SELECT**:
\`\`\`sql
-- Basic select
SELECT FirstName, LastName FROM Students;

-- With conditions
SELECT * FROM Students WHERE DepartmentID = 1;

-- With ordering
SELECT * FROM Students ORDER BY LastName ASC;

-- With aggregation
SELECT COUNT(*) AS TotalStudents FROM Students;
SELECT DepartmentID, COUNT(*) AS Count
FROM Students
GROUP BY DepartmentID;

-- With HAVING (filter after grouping)
SELECT DepartmentID, COUNT(*) AS Count
FROM Students
GROUP BY DepartmentID
HAVING COUNT(*) > 10;
\`\`\`

### SQL Joins

**INNER JOIN**: Returns matching records from both tables
\`\`\`sql
SELECT Students.FirstName, Students.LastName, Departments.DepartmentName
FROM Students
INNER JOIN Departments ON Students.DepartmentID = Departments.DepartmentID;
\`\`\`

**LEFT (OUTER) JOIN**: All records from left table, matching from right
\`\`\`sql
SELECT Students.FirstName, Courses.CourseName
FROM Students
LEFT JOIN Enrolments ON Students.StudentID = Enrolments.StudentID
LEFT JOIN Courses ON Enrolments.CourseID = Courses.CourseID;
\`\`\`

**RIGHT (OUTER) JOIN**: All records from right table, matching from left

**FULL OUTER JOIN**: All records from both tables

**Join Diagram**:
\`\`\`
INNER JOIN:        LEFT JOIN:         RIGHT JOIN:
   A ∩ B              A ∪ (A ∩ B)        (A ∩ B) ∪ B

  +---+               +---+              +---+
  |###|               |###|##            |##|###|
  +---+               +---+              +---+
   A B                 A                    B
\`\`\`

### Subqueries

**In WHERE clause**:
\`\`\`sql
SELECT FirstName, LastName
FROM Students
WHERE DepartmentID IN (
    SELECT DepartmentID
    FROM Departments
    WHERE DepartmentName = 'Computer Science'
);
\`\`\`

**In SELECT clause**:
\`\`\`sql
SELECT FirstName, LastName,
    (SELECT AVG(Mark) FROM Marks WHERE Marks.StudentID = Students.StudentID) AS AvgMark
FROM Students;
\`\`\`

### Aggregate Functions

| Function | Purpose |
|----------|---------|
| COUNT(*) | Count rows |
| COUNT(column) | Count non-NULL values |
| SUM(column) | Sum of values |
| AVG(column) | Average of values |
| MAX(column) | Maximum value |
| MIN(column) | Minimum value |

### Entity-Relationship Diagrams

**Cardinality Notations**:
- One-to-One (1:1): ||----||
- One-to-Many (1:M): ||----<
- Many-to-Many (M:M): >----< (usually resolved with junction table)

**Example E-R Diagram**:
\`\`\`
+----------+       +-----------+       +---------+
| Student  |──<|───| Enrolment |───|>──| Course  |
+----------+       +-----------+       +---------+
| StudentID|       | StudentID |       | CourseID|
| Name     |       | CourseID  |       | Name    |
| DOB      |       | EnrolDate |       | Credits |
+----------+       +-----------+       +---------+
\`\`\`

### Database Integrity

**Entity Integrity**: Primary key must be unique and not NULL

**Referential Integrity**: Foreign key must match existing primary key or be NULL

**Domain Integrity**: Values must be within valid domain (data type, range)

**Transaction Properties (ACID)**:
- **Atomicity**: All or nothing
- **Consistency**: Database remains valid
- **Isolation**: Transactions don't interfere
- **Durability**: Committed changes persist
`;

const AQA_ALEVEL_FUNCTIONAL_PROGRAMMING = `
## Functional Programming

### Core Concepts

**Functional Paradigm**:
- Programs built from functions
- Functions are first-class citizens
- Emphasises immutability
- Avoids side effects
- Declarative rather than imperative

**First-Class Functions**:
- Functions can be assigned to variables
- Functions can be passed as arguments
- Functions can be returned from functions
- Functions can be stored in data structures

### Function Types

**Pure Functions**:
- Output depends only on inputs
- No side effects (doesn't modify external state)
- Same input always gives same output
- Referential transparency

\`\`\`python
# Pure function
def add(x, y):
    return x + y

# Impure function (has side effect)
total = 0
def add_to_total(x):
    global total
    total += x  # Side effect: modifies external state
    return total
\`\`\`

**Benefits of Pure Functions**:
- Easier to test
- Easier to reason about
- Parallelisation safe
- Cacheable (memoisation)

### Higher-Order Functions

**Definition**: Functions that take functions as arguments or return functions

**Map**: Apply function to each element
\`\`\`python
# map(function, list)
numbers = [1, 2, 3, 4, 5]
squares = list(map(lambda x: x ** 2, numbers))
# Result: [1, 4, 9, 16, 25]

# Equivalent using list comprehension
squares = [x ** 2 for x in numbers]
\`\`\`

**Filter**: Select elements matching condition
\`\`\`python
# filter(function, list)
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
evens = list(filter(lambda x: x % 2 == 0, numbers))
# Result: [2, 4, 6, 8, 10]

# Equivalent using list comprehension
evens = [x for x in numbers if x % 2 == 0]
\`\`\`

**Reduce (Fold)**: Combine elements into single value
\`\`\`python
from functools import reduce

# reduce(function, list, initial)
numbers = [1, 2, 3, 4, 5]
total = reduce(lambda acc, x: acc + x, numbers, 0)
# Result: 15

# Step by step: ((((0+1)+2)+3)+4)+5 = 15

# Product example
product = reduce(lambda acc, x: acc * x, numbers, 1)
# Result: 120
\`\`\`

**Fold Left vs Fold Right**:
- Fold Left: Processes from start to end
- Fold Right: Processes from end to start
- For associative operations, both give same result

### Function Composition

**Definition**: Combining functions to create new functions

**Notation**: (f ∘ g)(x) = f(g(x))

\`\`\`python
def compose(f, g):
    return lambda x: f(g(x))

def add_one(x):
    return x + 1

def double(x):
    return x * 2

# Compose: first double, then add one
add_one_after_double = compose(add_one, double)
result = add_one_after_double(5)  # double(5) = 10, add_one(10) = 11

# Compose: first add one, then double
double_after_add_one = compose(double, add_one)
result = double_after_add_one(5)  # add_one(5) = 6, double(6) = 12
\`\`\`

### Partial Application and Currying

**Partial Application**: Fixing some arguments of a function
\`\`\`python
from functools import partial

def multiply(x, y):
    return x * y

# Create new function with x fixed to 2
double = partial(multiply, 2)
result = double(5)  # multiply(2, 5) = 10
\`\`\`

**Currying**: Converting multi-argument function to sequence of single-argument functions
\`\`\`python
# Non-curried
def add(x, y):
    return x + y

add(2, 3)  # 5

# Curried
def add_curried(x):
    return lambda y: x + y

add_curried(2)(3)  # 5
add_two = add_curried(2)  # Partial application
add_two(3)  # 5
\`\`\`

### Immutability

**Definition**: Once created, data cannot be changed

**Benefits**:
- No unexpected modifications
- Thread safe
- Easier debugging
- Enables optimisations

\`\`\`python
# Immutable approach
def add_element(lst, element):
    return lst + [element]  # Returns new list

original = [1, 2, 3]
new_list = add_element(original, 4)
# original is still [1, 2, 3]
# new_list is [1, 2, 3, 4]

# Mutable approach (not functional)
def add_element_mutable(lst, element):
    lst.append(element)  # Modifies original
    return lst
\`\`\`

### Recursion in Functional Programming

**Recursion** is the primary looping mechanism in functional programming

\`\`\`python
# Recursive sum (functional style)
def sum_list(lst):
    if len(lst) == 0:
        return 0
    return lst[0] + sum_list(lst[1:])

# Tail recursive (more efficient)
def sum_list_tail(lst, acc=0):
    if len(lst) == 0:
        return acc
    return sum_list_tail(lst[1:], acc + lst[0])
\`\`\`

### Lambda Functions

**Definition**: Anonymous (unnamed) functions

\`\`\`python
# Named function
def square(x):
    return x ** 2

# Lambda equivalent
square = lambda x: x ** 2

# Used inline
numbers = [1, 2, 3, 4, 5]
squares = list(map(lambda x: x ** 2, numbers))
\`\`\`

### Lists as Fundamental Data Structure

**List Operations in Functional Style**:
\`\`\`python
# Head: First element
head = lambda lst: lst[0]

# Tail: All except first
tail = lambda lst: lst[1:]

# Cons: Add to front
cons = lambda x, lst: [x] + lst

# Example
lst = [1, 2, 3, 4, 5]
head(lst)  # 1
tail(lst)  # [2, 3, 4, 5]
cons(0, lst)  # [0, 1, 2, 3, 4, 5]
\`\`\`

### Functional vs Imperative Comparison

| Imperative | Functional |
|------------|------------|
| Uses loops | Uses recursion |
| Modifies state | Returns new values |
| Statements | Expressions |
| "How to do" | "What to compute" |
| Side effects allowed | Side effects avoided |
| Variables mutable | Variables immutable |

**Example: Sum of squares of even numbers**
\`\`\`python
# Imperative
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
total = 0
for n in numbers:
    if n % 2 == 0:
        total += n ** 2
# total = 220

# Functional
from functools import reduce
total = reduce(
    lambda acc, x: acc + x,
    map(lambda x: x ** 2,
        filter(lambda x: x % 2 == 0, numbers)),
    0
)
# total = 220

# Using list comprehension (Pythonic functional)
total = sum(x ** 2 for x in numbers if x % 2 == 0)
\`\`\`
`;

const AQA_ALEVEL_WORKED_EXAMPLES = `
## Worked Examples

### Example 1: Big O Analysis (4 marks)
**Q:** What is the time complexity of the following algorithm? Justify your answer. [4 marks]
\`\`\`
FUNCTION find(arr, target)
    FOR i ← 0 TO LEN(arr) - 1
        FOR j ← 0 TO LEN(arr) - 1
            IF arr[i] + arr[j] = target THEN
                RETURN True
            ENDIF
        ENDFOR
    ENDFOR
    RETURN False
ENDFUNCTION
\`\`\`

**Answer:**
- Time complexity: **O(n²)** [1 mark]
- The outer loop runs n times [1 mark]
- For each iteration of outer loop, inner loop runs n times [1 mark]
- Total iterations = n × n = n² [1 mark]

---

### Example 2: Dijkstra's Algorithm (6 marks)
**Q:** Using Dijkstra's algorithm, find the shortest path from A to E. [6 marks]
\`\`\`
Graph:
A --3-- B --2-- D
|       |       |
2       4       1
|       |       |
C --5-- E --1-- F
\`\`\`

**Answer:**
Initial: A=0, B=∞, C=∞, D=∞, E=∞, F=∞ [1 mark]

| Step | Visited | Update |
|------|---------|--------|
| 1 | {A} | B=3, C=2 |
| 2 | {A,C} | E=7 (via C) |
| 3 | {A,C,B} | D=5, E=7 (no change) |
| 4 | {A,C,B,D} | F=6 |
| 5 | {A,C,B,D,F} | E=7 (no change via F) |

[1 mark for correct process]
[1 mark for each correct distance: A→E = 7]

Shortest path: A → C → E with distance 7 [1 mark]
OR A → B → D → F → E with distance 7 [1 mark for valid alternative]

---

### Example 3: Normalisation (6 marks)
**Q:** The following table is not in third normal form. Normalise it to 3NF. [6 marks]

\`\`\`
OrderID | CustomerID | CustomerName | CustomerAddress | ProductID | ProductName | Quantity
\`\`\`

**Answer:**

**1NF**: Already in 1NF (atomic values, has primary key) [1 mark]

**2NF**: Remove partial dependencies (composite key: OrderID, ProductID)
- CustomerName, CustomerAddress depend only on CustomerID
- ProductName depends only on ProductID

Tables after 2NF: [2 marks]
\`\`\`
Orders: OrderID | CustomerID
Customers: CustomerID | CustomerName | CustomerAddress
Products: ProductID | ProductName
OrderDetails: OrderID | ProductID | Quantity
\`\`\`

**3NF**: Check for transitive dependencies [2 marks]
- No transitive dependencies in this case
- Already in 3NF

Final schema: [1 mark for correct identification]
\`\`\`
Customers(CustomerID, CustomerName, CustomerAddress)
Products(ProductID, ProductName)
Orders(OrderID, CustomerID)
OrderDetails(OrderID, ProductID, Quantity)
\`\`\`

---

### Example 4: SQL Join (4 marks)
**Q:** Write an SQL query to display the name of each student and the name of the course(s) they are enrolled in. Include students who are not enrolled in any course. [4 marks]

Tables:
- Students(StudentID, StudentName)
- Courses(CourseID, CourseName)
- Enrolments(StudentID, CourseID)

**Answer:**
\`\`\`sql
SELECT Students.StudentName, Courses.CourseName
FROM Students
LEFT JOIN Enrolments ON Students.StudentID = Enrolments.StudentID
LEFT JOIN Courses ON Enrolments.CourseID = Courses.CourseID;
\`\`\`

[1 mark] SELECT correct fields
[1 mark] LEFT JOIN from Students (to include non-enrolled)
[1 mark] JOIN to Enrolments
[1 mark] JOIN to Courses

---

### Example 5: Floating Point Conversion (4 marks)
**Q:** Convert the decimal number -6.5 to normalised floating point using 8-bit mantissa and 4-bit exponent (both in two's complement). [4 marks]

**Answer:**
Step 1: Convert 6.5 to binary [1 mark]
6.5₁₀ = 110.1₂

Step 2: Normalise [1 mark]
110.1 = 0.1101 × 2³

Step 3: Two's complement for negative mantissa [1 mark]
Positive: 0.1101000 → 01101000
Two's complement: 10011000

Step 4: Exponent in two's complement [1 mark]
3₁₀ = 0011₂

**Final answer:**
- Mantissa: 10011000
- Exponent: 0011

---

### Example 6: Higher-Order Functions (4 marks)
**Q:** Using the map and filter functions, write code to produce a list containing the squares of all odd numbers from the list [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]. [4 marks]

**Answer:**
\`\`\`python
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# Filter odd numbers
odds = filter(lambda x: x % 2 != 0, numbers)

# Map to squares
result = list(map(lambda x: x ** 2, odds))

# Result: [1, 9, 25, 49, 81]
\`\`\`

[1 mark] Correct use of filter
[1 mark] Correct condition for odd numbers
[1 mark] Correct use of map
[1 mark] Correct squaring function

---

### Example 7: FSM Design (5 marks)
**Q:** Design a finite state machine that accepts binary strings containing an even number of 1s. [5 marks]

**Answer:**
States: [1 mark]
- q0: Even number of 1s (accepting state, also initial)
- q1: Odd number of 1s

Transitions: [2 marks]
- q0 on input 0 → q0
- q0 on input 1 → q1
- q1 on input 0 → q1
- q1 on input 1 → q0

State transition table: [1 mark]
| State | 0 | 1 |
|-------|---|---|
| →q0* | q0 | q1 |
| q1 | q1 | q0 |

(→ indicates start state, * indicates accepting state)

Diagram: [1 mark]
\`\`\`
    0           0
   ↺           ↺
→(q0*)--1-->(q1)
      <--1--
\`\`\`

---

### Example 8: Recursion with Stack Trace (4 marks)
**Q:** Trace the execution of the following recursive function for factorial(4), showing the stack frames. [4 marks]

\`\`\`
FUNCTION factorial(n)
    IF n <= 1 THEN
        RETURN 1
    ELSE
        RETURN n * factorial(n - 1)
    ENDIF
ENDFUNCTION
\`\`\`

**Answer:**
Stack frames (top is most recent): [2 marks]

Call sequence:
\`\`\`
factorial(4) calls factorial(3)
factorial(3) calls factorial(2)
factorial(2) calls factorial(1)
factorial(1) returns 1  [base case]
\`\`\`

Return sequence: [2 marks]
\`\`\`
factorial(1) returns 1
factorial(2) returns 2 * 1 = 2
factorial(3) returns 3 * 2 = 6
factorial(4) returns 4 * 6 = 24
\`\`\`

Final result: 24

---

### Example 9: OOP Design (6 marks)
**Q:** Design a class hierarchy for a shape drawing application with classes Shape, Rectangle, and Circle. Show the class definitions including appropriate attributes and methods. [6 marks]

**Answer:**
\`\`\`python
from abc import ABC, abstractmethod
import math

class Shape(ABC):  # Abstract base class [1 mark]
    def __init__(self, x, y):
        self._x = x  # Protected attributes
        self._y = y

    @abstractmethod
    def area(self):  # [1 mark]
        pass

    @abstractmethod
    def perimeter(self):  # [1 mark]
        pass

class Rectangle(Shape):  # Inherits from Shape [1 mark]
    def __init__(self, x, y, width, height):
        super().__init__(x, y)
        self._width = width
        self._height = height

    def area(self):  # [1 mark] Override
        return self._width * self._height

    def perimeter(self):
        return 2 * (self._width + self._height)

class Circle(Shape):  # Inherits from Shape [1 mark]
    def __init__(self, x, y, radius):
        super().__init__(x, y)
        self._radius = radius

    def area(self):
        return math.pi * self._radius ** 2

    def perimeter(self):
        return 2 * math.pi * self._radius
\`\`\`

---

### Example 10: Extended Response - Discuss parallel processing (9 marks)
**Q:** Discuss the advantages and disadvantages of using parallel processing in modern computer systems. [9 marks]

**Model Answer (Level 3):**

Parallel processing involves executing multiple computations simultaneously, which has become essential in modern computing.

**Advantages:**
- **Performance improvement**: Tasks can be divided among multiple processors/cores, significantly reducing execution time for parallelisable problems. For example, rendering video frames can be distributed across multiple cores.
- **Better resource utilisation**: Multiple cores can work simultaneously rather than sitting idle, improving the efficiency of the hardware investment.
- **Handling large datasets**: Big data applications benefit from parallel processing, as data can be processed in chunks across many processors (e.g., MapReduce in Hadoop).
- **Real-time processing**: Applications requiring immediate responses (gaming, financial trading) benefit from parallel execution.

**Disadvantages:**
- **Programming complexity**: Writing parallel code is significantly more difficult than sequential code. Issues like race conditions, deadlocks, and synchronisation must be carefully managed.
- **Not all problems are parallelisable**: Amdahl's Law states that speedup is limited by the sequential portion of a program. Some algorithms are inherently sequential.
- **Communication overhead**: Processors must communicate and synchronise, which takes time and can reduce the benefits of parallelisation.
- **Power consumption**: Multiple active processors consume more power and generate more heat.
- **Debugging difficulty**: Parallel programs can exhibit non-deterministic behaviour, making bugs hard to reproduce and fix.

**Conclusion:**
Parallel processing offers significant performance benefits for suitable applications but requires careful design and implementation. The decision to use parallel processing should consider whether the problem is parallelisable and whether the complexity cost is justified by the performance gain.

**Mark scheme:**
Level 3 (7-9 marks): Comprehensive discussion of both advantages and disadvantages with technical accuracy, appropriate terminology, and balanced evaluation.
Level 2 (4-6 marks): Good coverage of main points with some technical detail, reasonable balance.
Level 1 (1-3 marks): Basic points made, limited depth or one-sided argument.
`;

// ============================================================================
// TOPIC-SPECIFIC GUIDANCE
// ============================================================================

const ALEVEL_CS_TOPIC_GUIDANCE: Record<string, string> = {
  'aqa-alevel-cs-oop': `
${AQA_ALEVEL_OOP_KNOWLEDGE}

**Common Question Types for OOP:**
- Class design questions (6-12 marks)
- Explain OOP principles (2-4 marks)
- Code analysis/completion (4-8 marks)
- Design patterns (3-6 marks)
- Advantages/disadvantages discussion (4-6 marks)
`,

  'aqa-alevel-cs-data-structures': `
${AQA_ALEVEL_DATA_STRUCTURES_KNOWLEDGE}

**Common Question Types for Data Structures:**
- Implement operations (4-8 marks)
- Trace through operations (3-6 marks)
- Compare data structures (3-5 marks)
- Design appropriate data structure (4-8 marks)
- Complexity analysis (2-4 marks)
`,

  'aqa-alevel-cs-algorithms': `
${AQA_ALEVEL_ALGORITHMS_KNOWLEDGE}

**Common Question Types for Algorithms:**
- Big O analysis (2-4 marks)
- Algorithm implementation (6-12 marks)
- Algorithm tracing (4-8 marks)
- Compare algorithms (3-5 marks)
- Graph algorithm questions (6-12 marks)
`,

  'aqa-alevel-cs-theory-computation': `
${AQA_ALEVEL_THEORY_OF_COMPUTATION}

**Common Question Types for Theory of Computation:**
- FSM design/completion (4-8 marks)
- Regular expression questions (2-4 marks)
- Turing machine transitions (4-8 marks)
- Halting problem explanation (3-5 marks)
- Complexity class identification (2-4 marks)
`,

  'aqa-alevel-cs-floating-point': `
${AQA_ALEVEL_FLOATING_POINT}

**Common Question Types for Floating Point:**
- Convert decimal to floating point (3-5 marks)
- Convert floating point to decimal (3-5 marks)
- Range/precision questions (2-4 marks)
- Normalisation questions (2-4 marks)
- Error/limitation questions (2-4 marks)
`,

  'aqa-alevel-cs-operating-systems': `
${AQA_ALEVEL_OPERATING_SYSTEMS}

**Common Question Types for Operating Systems:**
- Process scheduling (4-8 marks)
- Memory management explanation (3-6 marks)
- Interrupt handling (3-5 marks)
- OS functions (2-4 marks)
- Virtual memory questions (3-5 marks)
`,

  'aqa-alevel-cs-databases': `
${AQA_ALEVEL_DATABASES_KNOWLEDGE}

**Common Question Types for Databases:**
- SQL query writing (4-8 marks)
- Normalisation to 3NF (6-10 marks)
- E-R diagram questions (4-8 marks)
- Join operations (4-6 marks)
- Database design (6-10 marks)
`,

  'aqa-alevel-cs-functional-programming': `
${AQA_ALEVEL_FUNCTIONAL_PROGRAMMING}

**Common Question Types for Functional Programming:**
- Higher-order function questions (3-6 marks)
- Function composition (3-5 marks)
- Map/filter/reduce questions (4-8 marks)
- Currying/partial application (3-5 marks)
- Compare functional vs imperative (4-6 marks)
`
};

// ============================================================================
// AQA A-LEVEL COMPUTER SCIENCE PRINCIPLES (COMPACT VERSION)
// ============================================================================

const AQA_ALEVEL_CS_PRINCIPLES = `
## AQA A-Level Computer Science Exam Principles

### Assessment Objectives
- **AO1** (30-35%): Demonstrate knowledge and understanding
- **AO2** (30-35%): Apply knowledge to analyse problems and design solutions
- **AO3** (35-40%): Design, program and evaluate computer systems

### Paper Structure
- **Paper 1** (40%): On-screen examination - 2h 30m, 100 marks
  - Programming, problem-solving
  - Pre-release material
- **Paper 2** (40%): Written examination - 2h 30m, 100 marks
  - Theory of computation, data structures, algorithms
  - Databases, networking, big data
- **NEA** (20%): Practical programming project - 75 marks

### Mark Scheme Conventions
- Code case is IGNORED
- Alternative correct solutions always acceptable
- Minor syntax errors acceptable if logic clear
- For Big O: must include justification
- Extended response uses levels (L4: 13-15, L3: 9-12, L2: 5-8, L1: 1-4)

### Key Command Words
| Command | Meaning | Typical Marks |
|---------|---------|---------------|
| State/Give | Brief answer, no explanation | 1-2 |
| Define | Give meaning of term | 1-2 |
| Describe | Give features/steps | 2-4 |
| Explain | Give reasons with technical terms | 3-6 |
| Compare | Similarities AND differences | 3-5 |
| Analyse | Examine in detail | 4-6 |
| Evaluate/Discuss | Extended analysis with conclusion | 9-15 |
| Write | Write algorithm/code | 4-12 |

### Programming Questions
- Use AQA pseudocode syntax (← for assignment)
- Include all required constructs
- Show understanding of OOP, recursion, data structures
- For trace questions: show all intermediate values
`;

// ============================================================================
// QUESTION GENERATION FUNCTIONS
// ============================================================================

export function getAQAALevelComputerScienceSystemPrompt(topic: Topic, difficulty: Difficulty, subtopic: string): string {
  const markRange = getMarkRangeForDifficulty(difficulty);
  const topicGuidance = ALEVEL_CS_TOPIC_GUIDANCE[topic.id] || '';

  return `You are an expert AQA A-Level Computer Science examiner creating exam-style questions.

${AQA_ALEVEL_CS_COGNITIVE_CHALLENGE}

${AQA_ALEVEL_CS_ASSESSMENT_OBJECTIVES}

${AQA_ALEVEL_CS_PSEUDOCODE}

${AQA_ALEVEL_CS_QUESTION_TEMPLATES}

${AQA_ALEVEL_CS_MARK_SCHEME_CONVENTIONS}

${AQA_ALEVEL_CS_REFERENCE_DATA}

${topicGuidance}

## Your Task
Create a ${difficulty} difficulty question about "${subtopic}" from the topic "${topic.name}".
The question should be worth ${markRange.min}-${markRange.max} marks.

## Question Requirements
1. **A-Level Standard**: Questions must reflect the depth expected at A-Level
2. **Authentic AQA Style**: Match real AQA paper format
3. **Appropriate Difficulty**:
   - Easy: Definitions, simple recall, basic application (2-4 marks)
   - Medium: Explanation, analysis, algorithm tracing (5-8 marks)
   - Hard: Complex algorithm design, evaluation, mathematical proofs (9-15 marks)
4. **Technical Accuracy**: All code, formulae, and calculations must be correct
5. **For programming questions**: Use AQA pseudocode or Python

## Response Format
Return a JSON object with:
- "content": The question text (use \\n for line breaks, include code in \`\`\` blocks)
- "marks": Total marks for the question
- "solution": Complete mark scheme with detailed mark allocation`;
}

export function getAQAALevelComputerScienceQuestionPrompt(topic: Topic, difficulty: Difficulty, subtopic: string): string {
  const markRange = getMarkRangeForDifficulty(difficulty);
  const topicGuidance = ALEVEL_CS_TOPIC_GUIDANCE[topic.id] || '';

  const difficultyGuidance = {
    easy: `Create a question testing fundamental A-Level knowledge.

**Question Types for Easy (2-4 marks):**
- "Define [term]" [2-3 marks]
- "State the time complexity of [algorithm]" [2-3 marks]
- "Identify the [component/feature] of..." [2-4 marks]
- "Convert [expression] to Reverse Polish Notation" [3-4 marks]
- "State one advantage/disadvantage of..." [2-4 marks]

**Mark Scheme Format:**
- One clear mark point per mark
- Include acceptable alternatives

YOU MUST allocate ${markRange.min}-${markRange.max} marks for this question.`,

    medium: `Create a question requiring application and analysis.

**Question Types for Medium (6-9 marks):**
- "Trace the algorithm with input [X] and state the output" [6-8 marks]
- "Explain how [data structure/algorithm] works" [6-8 marks]
- "Write SQL to [query specification]" [6-8 marks]
- "Show how [data structure] would store [data]" [6-8 marks]
- "Simplify the Boolean expression [expression]" [6-7 marks]
- "Normalise the following table to 3NF" [7-9 marks]
- "Convert [number] to normalised floating point" [6-8 marks]
- "Write a function using map/filter/reduce to..." [6-9 marks]

**Mark Scheme Format:**
- Award marks for each correct step/point
- Accept alternative correct solutions
- Note key concepts required

YOU MUST allocate ${markRange.min}-${markRange.max} marks for this question.`,

    hard: `Create a challenging question requiring synthesis and evaluation.

**Question Types for Hard (12-20 marks):**
- "Write an algorithm to [complex task]" [12-16 marks]
  - May require recursion, OOP, or advanced data structures
- "Discuss [technical/ethical topic]" [15-20 marks - extended response]
- "Design a solution for [complex problem]" [15-20 marks]
- "Prove that [algorithm] has complexity O(X)" [12-15 marks]
- "Design a class hierarchy for..." [12-16 marks]
- "Using Dijkstra's algorithm, find..." [12-16 marks]
- "Design a finite state machine that..." [12-16 marks]

**Mark Scheme Format:**
- For extended response: use levels of response (4 levels)
- For algorithms: mark for key features and efficiency
- Include indicative content
- Accept alternative correct solutions

YOU MUST allocate ${markRange.min}-${markRange.max} marks for this question.`
  };

  return `Generate an AQA A-Level Computer Science question.

${AQA_ALEVEL_CS_PRINCIPLES}

**Topic**: ${topic.name}
**Subtopic**: ${subtopic}
**Difficulty**: ${difficulty}

${topicGuidance}

${difficultyGuidance[difficulty]}

**Critical Requirements:**
- Use AQA pseudocode conventions or Python code
- Include mark allocation clearly
- Ensure technical accuracy (especially for complexity analysis)
- Match the rigorous, formal language of real AQA A-Level papers

Return valid JSON:
{
  "content": "question text here",
  "marks": number,
  "solution": "detailed mark scheme here",
  "diagram": <optional DiagramSpec - include when question benefits from visual>
}

${getDiagramDocsForSubject('computerscience')}`;
}

// Additional prompt functions for specific question types

export function getAQAALevelAlgorithmPrompt(topic: Topic, difficulty: Difficulty, subtopic: string): string {
  const markRange = getMarkRangeForDifficulty(difficulty);

  return `Generate an AQA A-Level Computer Science ALGORITHM question.

${AQA_ALEVEL_CS_PRINCIPLES}

${AQA_ALEVEL_ALGORITHMS_KNOWLEDGE}

**Topic**: ${topic.name}
**Subtopic**: ${subtopic}
**Difficulty**: ${difficulty}

Create a question asking students to write or analyse an algorithm. May involve:
- Recursion
- Graph algorithms (Dijkstra's, DFS, BFS, A*)
- Sorting/searching algorithms
- Tree operations and traversals
- Dynamic programming
- Big O complexity analysis

**Marks**: ${markRange.min}-${markRange.max}

**Mark scheme should:**
- Award marks for correct logic and structure
- Award marks for efficiency considerations
- Award marks for handling edge cases
- Note: "Alternative correct solutions acceptable"
- Note: "Minor syntax errors acceptable if logic is correct"

Use AQA pseudocode syntax or Python. Return valid JSON.`;
}

export function getAQAALevelExtendedPrompt(topic: Topic, subtopic: string): string {
  return `Generate an AQA A-Level Computer Science EXTENDED RESPONSE question (9-15 marks).

${AQA_ALEVEL_CS_PRINCIPLES}

**Topic**: ${topic.name}
**Subtopic**: ${subtopic}

Create a discussion/evaluation question requiring deep technical analysis.

**Format**: "Discuss..." or "Evaluate..."

**Mark scheme must use Levels of Response:**
- Level 4 (13-15 marks): Exceptional depth and breadth, sophisticated analysis, technically accurate throughout
- Level 3 (9-12 marks): Good depth, accurate, well-structured, clear analysis
- Level 2 (5-8 marks): Some depth, mostly accurate, reasonable structure
- Level 1 (1-4 marks): Limited depth, basic understanding, some errors
- 0 marks: Nothing creditworthy

Include detailed indicative content covering multiple aspects of the topic.

Return valid JSON.`;
}

export function getAQAALevelSQLPrompt(topic: Topic, subtopic: string): string {
  return `Generate an AQA A-Level Computer Science SQL question.

${AQA_ALEVEL_CS_PRINCIPLES}

${AQA_ALEVEL_DATABASES_KNOWLEDGE}

**Topic**: ${topic.name}
**Subtopic**: ${subtopic}

Create a question requiring students to write SQL queries. May include:
- SELECT with multiple tables (JOIN - INNER, LEFT, RIGHT)
- Aggregate functions (COUNT, SUM, AVG, MAX, MIN)
- GROUP BY and HAVING
- Subqueries (nested SELECT)
- UPDATE, INSERT, DELETE with complex conditions
- UNION operations

**Marks**: 4-8 marks

**Mark scheme should:**
- Award marks for correct syntax
- Award marks for correct table relationships
- Award marks for correct JOIN type
- Note: Case and spacing ignored
- Note: Table names before field names acceptable

Return valid JSON with realistic table structures and relationships.`;
}

export function getAQAALevelNormalisationPrompt(topic: Topic, subtopic: string): string {
  return `Generate an AQA A-Level Computer Science NORMALISATION question.

${AQA_ALEVEL_CS_PRINCIPLES}

${AQA_ALEVEL_DATABASES_KNOWLEDGE}

**Topic**: ${topic.name}
**Subtopic**: ${subtopic}

Create a question about database normalisation. May include:
- Identify normal form of given table
- Normalise unnormalised data to 1NF, 2NF, 3NF
- Identify functional dependencies
- Explain anomalies (insertion, deletion, update)
- Design entity-relationship diagrams

**Marks**: 6-10 marks

**Mark scheme should:**
- Award marks for identifying normal form
- Award marks for identifying dependencies
- Award marks for correct table decomposition
- Award marks for identifying primary/foreign keys

Return valid JSON with realistic database scenario.`;
}

export function getAQAALevelFSMPrompt(topic: Topic, difficulty: Difficulty, subtopic: string): string {
  const markRange = getMarkRangeForDifficulty(difficulty);

  return `Generate an AQA A-Level Computer Science FINITE STATE MACHINE question.

${AQA_ALEVEL_CS_PRINCIPLES}

${AQA_ALEVEL_THEORY_OF_COMPUTATION}

**Topic**: ${topic.name}
**Subtopic**: ${subtopic}
**Difficulty**: ${difficulty}

Create a question about finite state machines. May include:
- Design FSM for given language/pattern
- Complete state transition table
- Trace execution on input string
- Convert between FSM representations
- Mealy vs Moore machines
- Regular expressions

**Marks**: ${markRange.min}-${markRange.max}

**Mark scheme should:**
- Award marks for correct states
- Award marks for correct transitions
- Award marks for correct accepting states
- Award marks for correct initial state

Return valid JSON with clear FSM specification.`;
}

export function getAQAALevelFloatingPointPrompt(topic: Topic, difficulty: Difficulty, subtopic: string): string {
  const markRange = getMarkRangeForDifficulty(difficulty);

  return `Generate an AQA A-Level Computer Science FLOATING POINT question.

${AQA_ALEVEL_CS_PRINCIPLES}

${AQA_ALEVEL_FLOATING_POINT}

**Topic**: ${topic.name}
**Subtopic**: ${subtopic}
**Difficulty**: ${difficulty}

Create a question about floating point representation. May include:
- Convert decimal to normalised floating point
- Convert floating point to decimal
- Calculate range with given bits
- Calculate precision with given bits
- Explain normalisation process
- Discuss trade-offs between mantissa and exponent
- Handle negative numbers (two's complement)

**Marks**: ${markRange.min}-${markRange.max}

**Mark scheme should:**
- Award marks for correct sign bit
- Award marks for correct mantissa
- Award marks for correct exponent
- Award marks for correct normalisation
- Show working clearly

Return valid JSON with specific bit allocations.`;
}

export function getAQAALevelFunctionalPrompt(topic: Topic, difficulty: Difficulty, subtopic: string): string {
  const markRange = getMarkRangeForDifficulty(difficulty);

  return `Generate an AQA A-Level Computer Science FUNCTIONAL PROGRAMMING question.

${AQA_ALEVEL_CS_PRINCIPLES}

${AQA_ALEVEL_FUNCTIONAL_PROGRAMMING}

**Topic**: ${topic.name}
**Subtopic**: ${subtopic}
**Difficulty**: ${difficulty}

Create a question about functional programming. May include:
- Higher-order functions (map, filter, reduce/fold)
- Function composition
- Partial application and currying
- Lambda functions
- Pure functions and immutability
- Comparing functional vs imperative approaches

**Marks**: ${markRange.min}-${markRange.max}

**Mark scheme should:**
- Award marks for correct function usage
- Award marks for correct lambda syntax
- Award marks for understanding of concepts
- Accept Python or pseudocode

Return valid JSON with clear functional programming task.`;
}

export function getAQAALevelOOPPrompt(topic: Topic, difficulty: Difficulty, subtopic: string): string {
  const markRange = getMarkRangeForDifficulty(difficulty);

  return `Generate an AQA A-Level Computer Science OOP question.

${AQA_ALEVEL_CS_PRINCIPLES}

${AQA_ALEVEL_OOP_KNOWLEDGE}

**Topic**: ${topic.name}
**Subtopic**: ${subtopic}
**Difficulty**: ${difficulty}

Create a question about object-oriented programming. May include:
- Class design and implementation
- Inheritance hierarchies
- Encapsulation with access modifiers
- Polymorphism and method overriding
- Abstract classes and interfaces
- Class relationships (association, aggregation, composition)

**Marks**: ${markRange.min}-${markRange.max}

**Mark scheme should:**
- Award marks for correct class structure
- Award marks for appropriate attributes/methods
- Award marks for correct use of OOP principles
- Award marks for correct syntax

Return valid JSON with clear OOP design task.`;
}

export function getAQAALevelDataStructuresPrompt(topic: Topic, difficulty: Difficulty, subtopic: string): string {
  const markRange = getMarkRangeForDifficulty(difficulty);

  return `Generate an AQA A-Level Computer Science DATA STRUCTURES question.

${AQA_ALEVEL_CS_PRINCIPLES}

${AQA_ALEVEL_DATA_STRUCTURES_KNOWLEDGE}

**Topic**: ${topic.name}
**Subtopic**: ${subtopic}
**Difficulty**: ${difficulty}

Create a question about data structures. May include:
- Stack/queue operations and implementation
- Linked list operations
- Binary tree insertion, deletion, traversal
- Graph representation (adjacency matrix/list)
- Hash table operations and collision resolution
- Comparing data structures for specific tasks

**Marks**: ${markRange.min}-${markRange.max}

**Mark scheme should:**
- Award marks for correct data structure choice
- Award marks for correct operations
- Award marks for correct complexity analysis
- Award marks for handling edge cases

Return valid JSON with clear data structure task.`;
}

// ============================================================================
// COMPACT PROMPT FOR AUTO/STANDARD QUESTIONS
// ============================================================================

/**
 * Compact prompt for generating A-Level CS questions - used by the main question generator
 */
export function getAQAALevelComputerScienceCompactPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = ALEVEL_CS_TOPIC_GUIDANCE[topic.id] || '';

  return `You are an expert AQA A-Level Computer Science examiner creating an exam-style question.

${AQA_ALEVEL_CS_PRINCIPLES}

Topic: ${topic.name}
${subtopic ? `Subtopic: ${subtopic}` : ''}
Difficulty: ${difficulty}

${topicGuidance}

DIFFICULTY GUIDE:
- Easy (2-4 marks): Definitions, simple conversions, basic recall, state complexity
- Medium (5-8 marks): Algorithm tracing, SQL queries, normalisation, floating point conversions
- Hard (9-15 marks): Complex algorithms, extended discussions, OOP design, graph algorithms

**CRITICAL: Use AQA pseudocode syntax or Python:**
- Assignment: ←
- Loop endings: ENDFOR, ENDWHILE
- Condition endings: ENDIF
- OOP: class, inherits, public, private
- Higher-order: map, filter, reduce

Create ONE exam-style question that:
1. Uses authentic AQA A-Level Computer Science language
2. Tests understanding appropriate to A-Level standard
3. Includes proper mark allocation
4. Matches the difficulty level specified

OUTPUT FORMAT (use exact headers):
**Question:**
[Question text with mark allocation in brackets, e.g. [6 marks]]

**Mark Scheme:**
[Marking points - one point per mark available]

**Explanation:**
[Full worked answer with clear reasoning]

**Diagram (optional):**
[Include a diagram JSON if the question benefits from a visual - flowcharts, logic gates, etc.]

${getDiagramDocsForSubject('computerscience')}`;
}

// ============================================================================
// EXPORTS
// ============================================================================

export {
  AQA_ALEVEL_CS_ASSESSMENT_OBJECTIVES,
  AQA_ALEVEL_CS_PSEUDOCODE,
  AQA_ALEVEL_CS_QUESTION_TEMPLATES,
  AQA_ALEVEL_CS_MARK_SCHEME_CONVENTIONS,
  AQA_ALEVEL_CS_REFERENCE_DATA,
  AQA_ALEVEL_OOP_KNOWLEDGE,
  AQA_ALEVEL_DATA_STRUCTURES_KNOWLEDGE,
  AQA_ALEVEL_ALGORITHMS_KNOWLEDGE,
  AQA_ALEVEL_THEORY_OF_COMPUTATION,
  AQA_ALEVEL_FLOATING_POINT,
  AQA_ALEVEL_OPERATING_SYSTEMS,
  AQA_ALEVEL_DATABASES_KNOWLEDGE,
  AQA_ALEVEL_FUNCTIONAL_PROGRAMMING,
  AQA_ALEVEL_WORKED_EXAMPLES,
  AQA_ALEVEL_CS_PRINCIPLES,
  ALEVEL_CS_TOPIC_GUIDANCE
};
