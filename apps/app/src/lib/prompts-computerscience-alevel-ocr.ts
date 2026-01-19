// OCR A-Level Computer Science (H446) Question Generation Prompts
// Based on analysis of actual OCR past papers (June 2022, 2023, 2024)
// and official mark schemes
// Specification: H446 (First teaching September 2015)

import { Difficulty, Topic } from '@/types';
import { getDiagramDocsForSubject } from './prompts-common';

// A-Level Computer Science mark ranges based on OCR specification
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
// OCR A-LEVEL COMPUTER SCIENCE SPECIFICATION DETAILS (H446)
// Based on official OCR specification and past paper analysis
// ============================================================================

const OCR_ALEVEL_CS_COGNITIVE_CHALLENGE = `
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

const OCR_ALEVEL_CS_ASSESSMENT_OBJECTIVES = `
## OCR A-Level Computer Science Assessment Objectives

| Objective | Description | Weighting |
|-----------|-------------|-----------|
| **AO1** | Demonstrate knowledge and understanding of the principles and concepts of computer science | 34% |
| **AO2** | Apply knowledge and understanding of the principles and concepts to analyse problems | 42% |
| **AO3** | Design, program and evaluate computer systems that solve problems | 24% |

### Assessment Structure
| Component | Title | Time | Marks | Weighting |
|-----------|-------|------|-------|-----------|
| **H446/01** | Computer Systems | 2h 30m | 140 | 40% |
| **H446/02** | Algorithms and Programming | 2h 30m | 140 | 40% |
| **H446/03** | Programming Project | - | 70 | 20% |

### Paper 1 Focus (Computer Systems - H446/01)
- 1.1 Characteristics of contemporary processors, input, output and storage devices
- 1.2 Software and software development
- 1.3 Exchanging data
- 1.4 Data types, data structures and algorithms
- 1.5 Legal, moral, cultural and ethical issues

### Paper 2 Focus (Algorithms and Programming - H446/02)
- 2.1 Elements of computational thinking
- 2.2 Problem solving and programming
- 2.3 Algorithms (including standard algorithms)

### Mathematical Requirements
- Graph theory and discrete mathematics
- Boolean algebra and logic
- Statistical methods and probability
- Binary arithmetic and number systems
- Big O notation and complexity analysis
`;

const OCR_ALEVEL_CS_REFERENCE_LANGUAGE = `
## OCR A-Level Reference Language (Official Pseudocode)

OCR provides an Exam Reference Language (ERL) guide. Examiners accept any reasonable pseudocode or Python-like syntax that is clear and unambiguous.

### Variables and Constants
\`\`\`
variable = value
const CONSTANT = value
global variable
local variable

// Type declarations (optional but encouraged)
integer count = 0
real temperature = 23.5
boolean found = false
string name = "Alice"
char grade = 'A'
\`\`\`

### Data Structures
\`\`\`
// Arrays (0-indexed)
array myArray[size]
array myArray2D[rows][cols]
myArray[0] = "first"
myArray2D[0][0] = "top left"

// Records (custom data types)
record Student
    name: string
    age: integer
    grade: real
endrecord

student1 = new Student()
student1.name = "Alice"

// Enumerated types
enum DaysOfWeek = (Monday, Tuesday, Wednesday, Thursday, Friday)
today = DaysOfWeek.Monday
\`\`\`

### Object-Oriented Programming
\`\`\`
// Class definition
class ClassName
    private attributeName
    public attributeName
    protected attributeName

    // Constructor
    public procedure new(parameters)
        // initialisation code
    endprocedure

    // Methods
    public function methodName(parameters)
        // method code
        return value
    endfunction

    private procedure helperMethod()
        // helper code
    endprocedure
endclass

// Inheritance
class ChildClass inherits ParentClass
    public procedure new()
        super.new()  // Call parent constructor
    endprocedure

    // Override parent method
    public function methodName()
        // overridden implementation
    endfunction
endclass

// Instantiation
object1 = new ClassName(arguments)
result = object1.methodName()
\`\`\`

### Abstract Data Types
\`\`\`
// Stack operations
stack.push(item)       // Add to top
item = stack.pop()     // Remove and return top
item = stack.peek()    // View top without removing
stack.isEmpty()        // Check if empty
stack.isFull()         // Check if full (if fixed size)
stack.size()           // Return number of elements

// Queue operations
queue.enqueue(item)    // Add to back
item = queue.dequeue() // Remove and return front
item = queue.peek()    // View front without removing
queue.isEmpty()        // Check if empty
queue.size()           // Return number of elements

// Priority Queue
priorityQueue.enqueue(item, priority)
item = priorityQueue.dequeue()  // Returns highest priority

// Linked List
node.data              // Access data
node.next              // Access next pointer (or node.pointer)
list.head              // First node
list.tail              // Last node (for doubly-linked)
node.prev              // Previous pointer (doubly-linked)

// Binary Tree
tree.root              // Root node
node.left              // Left child
node.right             // Right child
node.data              // Node value

// Hash Table
hashTable.insert(key, value)
value = hashTable.search(key)
hashTable.delete(key)
hash(key)              // Hash function
\`\`\`

### Graph Representation
\`\`\`
// Adjacency matrix
matrix[node1][node2] = weight    // 0 or infinity for no edge
matrix[node1][node2] = 1         // Unweighted graph

// Adjacency list
graph[node] = [(neighbour1, weight1), (neighbour2, weight2), ...]
graph[node].append((neighbour, weight))

// For unweighted graphs
graph[node] = [neighbour1, neighbour2, ...]
\`\`\`

### Control Structures
\`\`\`
// Selection
if condition then
    statements
endif

if condition then
    statements
elseif condition then
    statements
else
    statements
endif

switch variable:
    case value1:
        statements
    case value2:
        statements
    default:
        statements
endswitch

// Iteration
for i = start to end
    statements
next i

for i = start to end step increment
    statements
next i

while condition
    statements
endwhile

do
    statements
until condition

// For each (collection iteration)
for each item in collection
    statements
next item
\`\`\`

### Subroutines
\`\`\`
// Procedure (no return value)
procedure name(parameter1, parameter2)
    statements
endprocedure

// Function (returns value)
function name(parameter1, parameter2)
    statements
    return value
endfunction

// Recursive function
function factorial(n)
    if n <= 1 then
        return 1
    else
        return n * factorial(n - 1)
    endif
endfunction

// Call subroutines
name(argument1, argument2)
result = functionName(argument1)
\`\`\`

### File Handling
\`\`\`
// Open file
file = open("filename.txt", "r")   // read mode
file = open("filename.txt", "w")   // write mode
file = open("filename.txt", "a")   // append mode

// Reading
line = file.readLine()
content = file.read()
while NOT file.endOfFile()
    line = file.readLine()
endwhile

// Writing
file.writeLine(text)
file.write(text)

// Close file
file.close()
\`\`\`

### Exception Handling
\`\`\`
try
    // code that might cause error
catch exception
    // handle the error
finally
    // cleanup code (always runs)
endtry

throw new Exception("Error message")
\`\`\`
`;

const OCR_ALEVEL_CS_ALGORITHMS = `
## Standard Algorithms (A-Level)

### Searching Algorithms

**Linear Search**
\`\`\`
function linearSearch(array, target)
    for i = 0 to array.length - 1
        if array[i] == target then
            return i
        endif
    next i
    return -1
endfunction
\`\`\`
Time Complexity: O(n)
Space Complexity: O(1)

**Binary Search (Iterative)**
\`\`\`
function binarySearch(array, target)
    low = 0
    high = array.length - 1
    while low <= high
        mid = (low + high) DIV 2
        if array[mid] == target then
            return mid
        elseif array[mid] < target then
            low = mid + 1
        else
            high = mid - 1
        endif
    endwhile
    return -1
endfunction
\`\`\`
Time Complexity: O(log n)
Space Complexity: O(1)
Requirement: Array must be sorted

**Binary Search (Recursive)**
\`\`\`
function binarySearchRecursive(array, target, low, high)
    if low > high then
        return -1
    endif
    mid = (low + high) DIV 2
    if array[mid] == target then
        return mid
    elseif array[mid] < target then
        return binarySearchRecursive(array, target, mid + 1, high)
    else
        return binarySearchRecursive(array, target, low, mid - 1)
    endif
endfunction
\`\`\`
Time Complexity: O(log n)
Space Complexity: O(log n) - due to call stack

### Sorting Algorithms

**Bubble Sort**
\`\`\`
procedure bubbleSort(array)
    n = array.length
    for i = 0 to n - 2
        swapped = false
        for j = 0 to n - 2 - i
            if array[j] > array[j + 1] then
                temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp
                swapped = true
            endif
        next j
        if NOT swapped then
            return  // Early exit if already sorted
        endif
    next i
endprocedure
\`\`\`
Time Complexity: O(n^2) average/worst, O(n) best (with flag)
Space Complexity: O(1)
Stable: Yes

**Insertion Sort**
\`\`\`
procedure insertionSort(array)
    for i = 1 to array.length - 1
        current = array[i]
        j = i - 1
        while j >= 0 AND array[j] > current
            array[j + 1] = array[j]
            j = j - 1
        endwhile
        array[j + 1] = current
    next i
endprocedure
\`\`\`
Time Complexity: O(n^2) average/worst, O(n) best
Space Complexity: O(1)
Stable: Yes

**Merge Sort**
\`\`\`
function mergeSort(array)
    if array.length <= 1 then
        return array
    endif

    mid = array.length DIV 2
    left = mergeSort(array[0 to mid - 1])
    right = mergeSort(array[mid to end])

    return merge(left, right)
endfunction

function merge(left, right)
    result = []
    leftIndex = 0
    rightIndex = 0

    while leftIndex < left.length AND rightIndex < right.length
        if left[leftIndex] <= right[rightIndex] then
            result.append(left[leftIndex])
            leftIndex = leftIndex + 1
        else
            result.append(right[rightIndex])
            rightIndex = rightIndex + 1
        endif
    endwhile

    // Append remaining elements
    while leftIndex < left.length
        result.append(left[leftIndex])
        leftIndex = leftIndex + 1
    endwhile

    while rightIndex < right.length
        result.append(right[rightIndex])
        rightIndex = rightIndex + 1
    endwhile

    return result
endfunction
\`\`\`
Time Complexity: O(n log n) all cases
Space Complexity: O(n)
Stable: Yes

**Quick Sort**
\`\`\`
procedure quickSort(array, low, high)
    if low < high then
        pivotIndex = partition(array, low, high)
        quickSort(array, low, pivotIndex - 1)
        quickSort(array, pivotIndex + 1, high)
    endif
endprocedure

function partition(array, low, high)
    pivot = array[high]
    i = low - 1

    for j = low to high - 1
        if array[j] <= pivot then
            i = i + 1
            swap(array[i], array[j])
        endif
    next j

    swap(array[i + 1], array[high])
    return i + 1
endfunction
\`\`\`
Time Complexity: O(n log n) average, O(n^2) worst
Space Complexity: O(log n) average
Stable: No

### Graph Algorithms

**Depth-First Search (DFS)**
\`\`\`
procedure DFS(graph, startNode)
    visited = []
    stack = new Stack()
    stack.push(startNode)

    while NOT stack.isEmpty()
        current = stack.pop()
        if current NOT in visited then
            visited.append(current)
            output(current)
            for each neighbour in graph[current]
                if neighbour NOT in visited then
                    stack.push(neighbour)
                endif
            next neighbour
        endif
    endwhile
endprocedure

// Recursive version
procedure DFSRecursive(graph, node, visited)
    visited.append(node)
    output(node)
    for each neighbour in graph[node]
        if neighbour NOT in visited then
            DFSRecursive(graph, neighbour, visited)
        endif
    next neighbour
endprocedure
\`\`\`
Time Complexity: O(V + E) where V = vertices, E = edges
Space Complexity: O(V)

**Breadth-First Search (BFS)**
\`\`\`
procedure BFS(graph, startNode)
    visited = []
    queue = new Queue()
    queue.enqueue(startNode)
    visited.append(startNode)

    while NOT queue.isEmpty()
        current = queue.dequeue()
        output(current)
        for each neighbour in graph[current]
            if neighbour NOT in visited then
                visited.append(neighbour)
                queue.enqueue(neighbour)
            endif
        next neighbour
    endwhile
endprocedure
\`\`\`
Time Complexity: O(V + E)
Space Complexity: O(V)

**Dijkstra's Shortest Path Algorithm**
\`\`\`
function dijkstra(graph, source)
    // Initialisation
    distance = new Dictionary()
    previous = new Dictionary()
    unvisited = new Set()

    for each vertex v in graph
        distance[v] = infinity
        previous[v] = null
        unvisited.add(v)
    next vertex
    distance[source] = 0

    while unvisited is not empty
        // Get unvisited vertex with minimum distance
        u = vertex in unvisited with minimum distance[u]
        unvisited.remove(u)

        for each neighbour v of u
            if v in unvisited then
                alt = distance[u] + weight(u, v)
                if alt < distance[v] then
                    distance[v] = alt
                    previous[v] = u
                endif
            endif
        next neighbour
    endwhile

    return distance, previous
endfunction
\`\`\`
Time Complexity: O(V^2) with array, O((V + E) log V) with priority queue
Space Complexity: O(V)
Note: Only works with non-negative edge weights

**A* Pathfinding Algorithm**
\`\`\`
function AStar(graph, start, goal, heuristic)
    openSet = new PriorityQueue()
    openSet.enqueue(start, 0)

    cameFrom = new Dictionary()
    gScore = new Dictionary()   // Cost from start
    fScore = new Dictionary()   // gScore + heuristic

    for each node in graph
        gScore[node] = infinity
        fScore[node] = infinity
    next node
    gScore[start] = 0
    fScore[start] = heuristic(start, goal)

    while NOT openSet.isEmpty()
        current = openSet.dequeue()

        if current == goal then
            return reconstructPath(cameFrom, current)
        endif

        for each neighbour of current
            tentativeG = gScore[current] + weight(current, neighbour)

            if tentativeG < gScore[neighbour] then
                cameFrom[neighbour] = current
                gScore[neighbour] = tentativeG
                fScore[neighbour] = tentativeG + heuristic(neighbour, goal)

                if neighbour NOT in openSet then
                    openSet.enqueue(neighbour, fScore[neighbour])
                endif
            endif
        next neighbour
    endwhile

    return failure  // No path found
endfunction

function reconstructPath(cameFrom, current)
    path = [current]
    while current in cameFrom
        current = cameFrom[current]
        path.prepend(current)
    endwhile
    return path
endfunction
\`\`\`
Time Complexity: O(E log V) with good heuristic
Heuristic must be admissible (never overestimate)

**Prim's Minimum Spanning Tree**
\`\`\`
function primMST(graph)
    mst = []
    visited = new Set()
    edges = new PriorityQueue()

    startVertex = first vertex in graph
    visited.add(startVertex)

    // Add all edges from start vertex
    for each (neighbour, weight) in graph[startVertex]
        edges.enqueue((startVertex, neighbour, weight), weight)
    next neighbour

    while visited.size < graph.vertexCount AND NOT edges.isEmpty()
        (u, v, weight) = edges.dequeue()

        if v NOT in visited then
            visited.add(v)
            mst.append((u, v, weight))

            for each (neighbour, w) in graph[v]
                if neighbour NOT in visited then
                    edges.enqueue((v, neighbour, w), w)
                endif
            next neighbour
        endif
    endwhile

    return mst
endfunction
\`\`\`
Time Complexity: O(E log V) with priority queue

**Kruskal's Minimum Spanning Tree**
\`\`\`
function kruskalMST(graph)
    mst = []
    edges = getAllEdges(graph)
    sort edges by weight ascending

    parent = new Dictionary()  // For union-find
    for each vertex v in graph
        parent[v] = v
    next vertex

    for each (u, v, weight) in edges
        rootU = find(parent, u)
        rootV = find(parent, v)

        if rootU != rootV then
            mst.append((u, v, weight))
            union(parent, rootU, rootV)
        endif

        if mst.size == graph.vertexCount - 1 then
            break
        endif
    next edge

    return mst
endfunction

function find(parent, x)
    if parent[x] != x then
        parent[x] = find(parent, parent[x])  // Path compression
    endif
    return parent[x]
endfunction

procedure union(parent, x, y)
    parent[x] = y
endprocedure
\`\`\`
Time Complexity: O(E log E) or O(E log V)
`;

const OCR_ALEVEL_CS_TREE_TRAVERSALS = `
## Tree Traversal Algorithms

### Binary Tree Traversals

**Pre-order Traversal (Root, Left, Right)**
\`\`\`
procedure preOrder(node)
    if node != null then
        output(node.data)      // Visit root
        preOrder(node.left)    // Traverse left subtree
        preOrder(node.right)   // Traverse right subtree
    endif
endprocedure
\`\`\`
Uses: Copying a tree, prefix expression of expression tree

**In-order Traversal (Left, Root, Right)**
\`\`\`
procedure inOrder(node)
    if node != null then
        inOrder(node.left)     // Traverse left subtree
        output(node.data)      // Visit root
        inOrder(node.right)    // Traverse right subtree
    endif
endprocedure
\`\`\`
Uses: Produces sorted order for BST, infix expression

**Post-order Traversal (Left, Right, Root)**
\`\`\`
procedure postOrder(node)
    if node != null then
        postOrder(node.left)   // Traverse left subtree
        postOrder(node.right)  // Traverse right subtree
        output(node.data)      // Visit root
    endif
endprocedure
\`\`\`
Uses: Deleting a tree, postfix expression, calculating directory sizes

### Binary Search Tree Operations

**Insertion**
\`\`\`
procedure insertBST(root, value)
    if root == null then
        return new Node(value)
    endif

    if value < root.data then
        root.left = insertBST(root.left, value)
    else
        root.right = insertBST(root.right, value)
    endif

    return root
endprocedure
\`\`\`

**Search**
\`\`\`
function searchBST(root, target)
    if root == null then
        return null
    endif

    if target == root.data then
        return root
    elseif target < root.data then
        return searchBST(root.left, target)
    else
        return searchBST(root.right, target)
    endif
endfunction
\`\`\`
Time Complexity: O(log n) average, O(n) worst (unbalanced)

**Deletion**
\`\`\`
function deleteBST(root, value)
    if root == null then
        return null
    endif

    if value < root.data then
        root.left = deleteBST(root.left, value)
    elseif value > root.data then
        root.right = deleteBST(root.right, value)
    else
        // Node to delete found
        if root.left == null then
            return root.right
        elseif root.right == null then
            return root.left
        else
            // Node has two children
            successor = findMin(root.right)
            root.data = successor.data
            root.right = deleteBST(root.right, successor.data)
        endif
    endif

    return root
endfunction

function findMin(node)
    while node.left != null
        node = node.left
    endwhile
    return node
endfunction
\`\`\`
`;

const OCR_ALEVEL_CS_COMPLEXITY = `
## Time and Space Complexity (Big O Notation)

### Common Time Complexities
| Notation | Name | Example |
|----------|------|---------|
| O(1) | Constant | Array access, hash table lookup |
| O(log n) | Logarithmic | Binary search |
| O(n) | Linear | Linear search, single loop |
| O(n log n) | Linearithmic | Merge sort, quick sort (average) |
| O(n^2) | Quadratic | Bubble sort, nested loops |
| O(n^3) | Cubic | Triple nested loops |
| O(2^n) | Exponential | Recursive Fibonacci, power set |
| O(n!) | Factorial | Brute force TSP, permutations |

### Complexity of Common Operations

**Arrays**
| Operation | Time Complexity |
|-----------|-----------------|
| Access by index | O(1) |
| Search (unsorted) | O(n) |
| Search (sorted) | O(log n) |
| Insert at end | O(1) amortised |
| Insert at position | O(n) |
| Delete | O(n) |

**Linked Lists**
| Operation | Singly | Doubly |
|-----------|--------|--------|
| Access by index | O(n) | O(n) |
| Insert at head | O(1) | O(1) |
| Insert at tail | O(n) | O(1) |
| Delete at head | O(1) | O(1) |
| Search | O(n) | O(n) |

**Stacks and Queues**
| Operation | Time Complexity |
|-----------|-----------------|
| Push/Enqueue | O(1) |
| Pop/Dequeue | O(1) |
| Peek | O(1) |
| Search | O(n) |

**Binary Search Trees (Balanced)**
| Operation | Average | Worst |
|-----------|---------|-------|
| Search | O(log n) | O(n) |
| Insert | O(log n) | O(n) |
| Delete | O(log n) | O(n) |

**Hash Tables**
| Operation | Average | Worst |
|-----------|---------|-------|
| Search | O(1) | O(n) |
| Insert | O(1) | O(n) |
| Delete | O(1) | O(n) |

### Sorting Algorithm Complexity
| Algorithm | Best | Average | Worst | Space | Stable |
|-----------|------|---------|-------|-------|--------|
| Bubble Sort | O(n) | O(n^2) | O(n^2) | O(1) | Yes |
| Insertion Sort | O(n) | O(n^2) | O(n^2) | O(1) | Yes |
| Merge Sort | O(n log n) | O(n log n) | O(n log n) | O(n) | Yes |
| Quick Sort | O(n log n) | O(n log n) | O(n^2) | O(log n) | No |
| Heap Sort | O(n log n) | O(n log n) | O(n log n) | O(1) | No |

### Graph Algorithm Complexity
| Algorithm | Time | Space |
|-----------|------|-------|
| DFS/BFS | O(V + E) | O(V) |
| Dijkstra (array) | O(V^2) | O(V) |
| Dijkstra (heap) | O((V+E) log V) | O(V) |
| A* | O(E) best, O(V^2) worst | O(V) |
| Prim (heap) | O(E log V) | O(V) |
| Kruskal | O(E log E) | O(V) |

### Rules for Big O Analysis
1. Drop constants: O(2n) = O(n)
2. Drop lower order terms: O(n^2 + n) = O(n^2)
3. Worst case by default unless specified
4. Nested loops multiply: O(n) inside O(n) = O(n^2)
5. Sequential code adds: O(n) then O(m) = O(n + m)
`;

const OCR_ALEVEL_CS_FUNCTIONAL_PROGRAMMING = `
## Functional Programming

### Key Concepts

**First-Class Functions**
Functions treated as values - can be assigned to variables, passed as arguments, returned from functions.

**Higher-Order Functions**
Functions that take other functions as arguments or return functions.

**Pure Functions**
- Always produce same output for same input
- No side effects (don't modify external state)
- Benefits: predictable, testable, parallelisable

**Immutability**
- Data cannot be modified after creation
- Create new data structures instead of modifying
- Prevents race conditions in concurrent programming

### Map, Filter, Reduce (Fold)

**Map**
Apply function to each element, return new collection
\`\`\`
// Double each element
result = map(lambda x: x * 2, [1, 2, 3, 4])
// result = [2, 4, 6, 8]

// Using function
function double(x)
    return x * 2
endfunction
result = map(double, [1, 2, 3, 4])
\`\`\`

**Filter**
Keep elements that satisfy predicate
\`\`\`
// Keep even numbers
result = filter(lambda x: x MOD 2 == 0, [1, 2, 3, 4, 5, 6])
// result = [2, 4, 6]

// Using function
function isEven(x)
    return x MOD 2 == 0
endfunction
result = filter(isEven, [1, 2, 3, 4, 5, 6])
\`\`\`

**Reduce (Fold)**
Combine all elements into single value
\`\`\`
// Sum all elements
result = reduce(lambda acc, x: acc + x, [1, 2, 3, 4], 0)
// result = 10

// Product of elements
result = reduce(lambda acc, x: acc * x, [1, 2, 3, 4], 1)
// result = 24

// Fold left vs fold right
foldl(f, initial, [a, b, c]) = f(f(f(initial, a), b), c)
foldr(f, initial, [a, b, c]) = f(a, f(b, f(c, initial)))
\`\`\`

### Function Composition
Combining functions to create new functions
\`\`\`
// (f . g)(x) = f(g(x))
// Compose: apply g first, then f

function compose(f, g)
    return lambda x: f(g(x))
endfunction

// Example
double = lambda x: x * 2
addOne = lambda x: x + 1
doubleThenAddOne = compose(addOne, double)
result = doubleThenAddOne(3)  // = addOne(double(3)) = addOne(6) = 7
\`\`\`

### Partial Application and Currying

**Partial Application**
Fixing some arguments of a function
\`\`\`
function add(x, y)
    return x + y
endfunction

addFive = partial(add, 5)
result = addFive(3)  // = add(5, 3) = 8
\`\`\`

**Currying**
Transforming function of multiple arguments into sequence of single-argument functions
\`\`\`
// Original
function add(x, y)
    return x + y
endfunction

// Curried version
function addCurried(x)
    return lambda y: x + y
endfunction

result = addCurried(5)(3)  // = 8
addFive = addCurried(5)
result = addFive(3)        // = 8
\`\`\`

### Recursion in Functional Programming

**Tail Recursion**
Recursive call is last operation - can be optimised
\`\`\`
// Not tail recursive (multiplication after recursive call)
function factorial(n)
    if n <= 1 then
        return 1
    else
        return n * factorial(n - 1)
    endif
endfunction

// Tail recursive version
function factorialTail(n, accumulator)
    if n <= 1 then
        return accumulator
    else
        return factorialTail(n - 1, n * accumulator)
    endif
endfunction
result = factorialTail(5, 1)  // Call with accumulator = 1
\`\`\`

### List Processing
\`\`\`
// Head - first element
head([1, 2, 3]) = 1

// Tail - all except first
tail([1, 2, 3]) = [2, 3]

// Cons - prepend element
cons(0, [1, 2, 3]) = [0, 1, 2, 3]

// Empty check
isEmpty([]) = true
isEmpty([1]) = false

// Length
length([1, 2, 3]) = 3

// Append lists
append([1, 2], [3, 4]) = [1, 2, 3, 4]
\`\`\`
`;

const OCR_ALEVEL_CS_OOP = `
## Object-Oriented Programming

### Four Pillars of OOP

**1. Encapsulation**
- Bundling data and methods that operate on data
- Hiding internal state (data hiding)
- Controlling access through access modifiers
- Benefits: modularity, information hiding, easier maintenance

\`\`\`
class BankAccount
    private balance
    private accountNumber

    public procedure new(number, initialBalance)
        accountNumber = number
        balance = initialBalance
    endprocedure

    public function getBalance()
        return balance
    endfunction

    public procedure deposit(amount)
        if amount > 0 then
            balance = balance + amount
        endif
    endprocedure

    public function withdraw(amount)
        if amount > 0 AND amount <= balance then
            balance = balance - amount
            return true
        endif
        return false
    endfunction
endclass
\`\`\`

**2. Inheritance**
- Creating new class from existing class
- Child class inherits attributes and methods from parent
- Promotes code reuse
- "is-a" relationship

\`\`\`
class Animal
    protected name
    protected age

    public procedure new(n, a)
        name = n
        age = a
    endprocedure

    public procedure makeSound()
        output("Some sound")
    endprocedure
endclass

class Dog inherits Animal
    private breed

    public procedure new(n, a, b)
        super.new(n, a)
        breed = b
    endprocedure

    // Override parent method
    public procedure makeSound()
        output("Woof!")
    endprocedure

    public procedure fetch()
        output(name + " is fetching!")
    endprocedure
endclass
\`\`\`

**3. Polymorphism**
- Objects of different types responding to same method call
- "Many forms" - same interface, different implementations

\`\`\`
// Method overriding (runtime polymorphism)
class Shape
    public function getArea()
        return 0
    endfunction
endclass

class Rectangle inherits Shape
    private width, height

    public function getArea()
        return width * height
    endfunction
endclass

class Circle inherits Shape
    private radius

    public function getArea()
        return 3.14159 * radius * radius
    endfunction
endclass

// Using polymorphism
shapes = [new Rectangle(5, 3), new Circle(2)]
for each shape in shapes
    output(shape.getArea())  // Calls appropriate version
next shape
\`\`\`

**4. Abstraction**
- Hiding complex implementation details
- Showing only essential features
- Abstract classes and interfaces

\`\`\`
// Abstract class - cannot be instantiated
abstract class Vehicle
    protected speed

    abstract public procedure accelerate()
    abstract public procedure brake()

    public function getSpeed()
        return speed
    endfunction
endclass

class Car inherits Vehicle
    public procedure accelerate()
        speed = speed + 10
    endprocedure

    public procedure brake()
        speed = speed - 5
        if speed < 0 then
            speed = 0
        endif
    endprocedure
endclass
\`\`\`

### Access Modifiers
| Modifier | Same Class | Subclass | Other Classes |
|----------|------------|----------|---------------|
| public | Yes | Yes | Yes |
| protected | Yes | Yes | No |
| private | Yes | No | No |

### Association, Aggregation, Composition

**Association**
General relationship between objects
\`\`\`
// Teacher teaches Student (many-to-many)
class Teacher
    private students[]  // References to Student objects
endclass
\`\`\`

**Aggregation** ("has-a" - weak relationship)
Objects can exist independently
\`\`\`
// Department has Employees, but employees can exist without department
class Department
    private employees[]  // Aggregation - employees exist independently
endclass
\`\`\`

**Composition** ("has-a" - strong relationship)
Component objects cannot exist without container
\`\`\`
// House has Rooms, rooms don't exist without house
class House
    private rooms[]  // Composition - rooms are part of house

    public procedure new()
        rooms = [new Room("Kitchen"), new Room("Bedroom")]
    endprocedure
endclass
\`\`\`

### Class Diagrams (UML)
\`\`\`
+------------------------+
|       ClassName        |
+------------------------+
| - privateAttribute     |
| + publicAttribute      |
| # protectedAttribute   |
+------------------------+
| + publicMethod()       |
| - privateMethod()      |
| # protectedMethod()    |
+------------------------+

Relationships:
─────────────▷  Inheritance (solid line, hollow arrow)
─ ─ ─ ─ ─ ─▷   Implements interface (dashed line, hollow arrow)
───────────────  Association (solid line)
───────◇──────  Aggregation (hollow diamond)
───────◆──────  Composition (filled diamond)
\`\`\`
`;

const OCR_ALEVEL_CS_DATA_STRUCTURES = `
## Data Structures

### Static vs Dynamic Data Structures
| Feature | Static | Dynamic |
|---------|--------|---------|
| Size | Fixed at compile time | Can grow/shrink at runtime |
| Memory | Allocated at start | Allocated as needed |
| Examples | Array | Linked list, tree, graph |
| Access | Direct (index) | Sequential traversal |
| Memory waste | Possible (unused space) | Minimal |
| Speed | Fast access | May be slower |

### Arrays
\`\`\`
// 1D Array
array names[10]
names[0] = "Alice"

// 2D Array (matrix)
array grid[5][5]
grid[0][0] = "top-left"
grid[row][col] = value

// 3D Array
array cube[x][y][z]
\`\`\`

**When to use:**
- Need fast random access by index
- Know size in advance
- Memory efficiency important

### Linked Lists

**Singly Linked List**
\`\`\`
record Node
    data: any
    next: pointer to Node (or null)
endrecord

class LinkedList
    private head

    public procedure insert(value)
        newNode = new Node()
        newNode.data = value
        newNode.next = head
        head = newNode
    endprocedure

    public procedure insertAtEnd(value)
        newNode = new Node()
        newNode.data = value
        newNode.next = null

        if head == null then
            head = newNode
        else
            current = head
            while current.next != null
                current = current.next
            endwhile
            current.next = newNode
        endif
    endprocedure

    public function search(target)
        current = head
        while current != null
            if current.data == target then
                return true
            endif
            current = current.next
        endwhile
        return false
    endfunction

    public procedure delete(target)
        if head == null then
            return
        endif

        if head.data == target then
            head = head.next
            return
        endif

        current = head
        while current.next != null
            if current.next.data == target then
                current.next = current.next.next
                return
            endif
            current = current.next
        endwhile
    endprocedure
endclass
\`\`\`

**Doubly Linked List**
\`\`\`
record DNode
    data: any
    next: pointer to DNode
    prev: pointer to DNode
endrecord
\`\`\`
Advantages: Can traverse both directions, O(1) deletion if have reference

### Stacks (LIFO - Last In First Out)

**Array Implementation**
\`\`\`
class Stack
    private array items[MAX_SIZE]
    private top = -1

    public procedure push(item)
        if top >= MAX_SIZE - 1 then
            error("Stack overflow")
        else
            top = top + 1
            items[top] = item
        endif
    endprocedure

    public function pop()
        if top < 0 then
            error("Stack underflow")
        else
            item = items[top]
            top = top - 1
            return item
        endif
    endfunction

    public function peek()
        if top < 0 then
            error("Stack is empty")
        else
            return items[top]
        endif
    endfunction

    public function isEmpty()
        return top < 0
    endfunction

    public function isFull()
        return top >= MAX_SIZE - 1
    endfunction
endclass
\`\`\`

**Applications:**
- Function call stack
- Undo mechanism
- Expression evaluation
- Backtracking algorithms
- Browser history

### Queues (FIFO - First In First Out)

**Linear Queue (Array)**
\`\`\`
class Queue
    private array items[MAX_SIZE]
    private front = 0
    private rear = -1
    private count = 0

    public procedure enqueue(item)
        if count >= MAX_SIZE then
            error("Queue overflow")
        else
            rear = rear + 1
            items[rear] = item
            count = count + 1
        endif
    endprocedure

    public function dequeue()
        if count <= 0 then
            error("Queue underflow")
        else
            item = items[front]
            front = front + 1
            count = count - 1
            return item
        endif
    endfunction
endclass
\`\`\`

**Circular Queue**
\`\`\`
class CircularQueue
    private array items[MAX_SIZE]
    private front = 0
    private rear = -1
    private count = 0

    public procedure enqueue(item)
        if count >= MAX_SIZE then
            error("Queue overflow")
        else
            rear = (rear + 1) MOD MAX_SIZE
            items[rear] = item
            count = count + 1
        endif
    endprocedure

    public function dequeue()
        if count <= 0 then
            error("Queue underflow")
        else
            item = items[front]
            front = (front + 1) MOD MAX_SIZE
            count = count - 1
            return item
        endif
    endfunction
endclass
\`\`\`

**Priority Queue**
Elements dequeued by priority, not order of insertion

**Applications:**
- Print spooling
- Process scheduling
- BFS algorithm
- Handling requests

### Hash Tables

**Hash Function Requirements**
- Deterministic (same input = same output)
- Uniform distribution
- Fast to compute
- Minimise collisions

**Common Hash Functions**
\`\`\`
// Modulo (division method)
function hash(key)
    return key MOD tableSize
endfunction

// String hashing
function hashString(str)
    hash = 0
    for each char in str
        hash = (hash * 31 + ASC(char)) MOD tableSize
    next char
    return hash
endfunction
\`\`\`

**Collision Resolution**

*Open Addressing - Linear Probing*
\`\`\`
function insert(key, value)
    index = hash(key)
    while table[index] is not empty
        index = (index + 1) MOD tableSize
    endwhile
    table[index] = (key, value)
endfunction
\`\`\`

*Chaining*
\`\`\`
// Each slot contains a linked list
function insert(key, value)
    index = hash(key)
    table[index].append((key, value))
endfunction
\`\`\`

**Load Factor**
α = n/m where n = items, m = table size
Rehash when α exceeds threshold (typically 0.7)

### Graphs

**Representation**

*Adjacency Matrix*
\`\`\`
     A  B  C  D
A [  0  1  0  1 ]
B [  1  0  1  0 ]
C [  0  1  0  1 ]
D [  1  0  1  0 ]
\`\`\`
Space: O(V^2)
Edge lookup: O(1)
Good for: Dense graphs

*Adjacency List*
\`\`\`
A: [B, D]
B: [A, C]
C: [B, D]
D: [A, C]
\`\`\`
Space: O(V + E)
Edge lookup: O(degree)
Good for: Sparse graphs

**Graph Types**
- Directed vs Undirected
- Weighted vs Unweighted
- Cyclic vs Acyclic
- Connected vs Disconnected

### Trees

**Binary Tree Properties**
- Each node has at most 2 children
- Height h tree has at most 2^(h+1) - 1 nodes
- Complete binary tree: all levels filled except possibly last

**Binary Search Tree (BST)**
- Left child < parent < right child
- Enables O(log n) search (when balanced)

**Balanced Trees**
- AVL trees, Red-Black trees
- Maintain O(log n) operations
- Self-balancing on insert/delete
`;

const OCR_ALEVEL_CS_PROCESSORS = `
## Characteristics of Contemporary Processors

### CPU Architecture

**Von Neumann Architecture**
- Single memory for data AND instructions
- Single bus (bottleneck)
- Sequential processing
- Components: CPU, memory, I/O, buses

**Harvard Architecture**
- Separate memory for data and instructions
- Separate buses for each
- Can fetch instruction while reading data
- Used in: DSPs, microcontrollers, cache design

**Contemporary Processors**
Most modern CPUs use modified Harvard:
- Separate L1 caches for data and instructions
- Unified main memory (von Neumann)
- Best of both worlds

### Processor Components

**Arithmetic Logic Unit (ALU)**
- Performs arithmetic: +, -, *, /
- Performs logical operations: AND, OR, NOT, XOR
- Performs comparisons: >, <, =
- Uses flags register to indicate results (zero, carry, overflow)

**Control Unit (CU)**
- Fetches instructions from memory
- Decodes instructions
- Controls execution timing
- Manages data flow
- Sends control signals

**Registers**
| Register | Purpose |
|----------|---------|
| Program Counter (PC) | Address of next instruction |
| Current Instruction Register (CIR) | Instruction being executed |
| Memory Address Register (MAR) | Address to access |
| Memory Data Register (MDR) | Data being transferred |
| Accumulator (ACC) | ALU calculation results |
| Status Register | Flags (zero, carry, overflow, etc.) |
| General Purpose Registers | Temporary data storage |

### Fetch-Decode-Execute Cycle

**Fetch**
1. PC contains address of next instruction
2. Address copied from PC to MAR
3. Address placed on address bus
4. Read signal sent via control bus
5. Instruction fetched and placed in MDR
6. Instruction copied from MDR to CIR
7. PC incremented (points to next instruction)

**Decode**
1. Control unit decodes instruction in CIR
2. Identifies operation type (opcode)
3. Identifies operands (addresses/values)
4. Prepares appropriate circuits

**Execute**
1. Control signals sent to appropriate components
2. Data fetched if needed
3. ALU performs calculation if needed
4. Results stored

### Pipelining
- Overlapping FDE cycles
- While one instruction executes, next is decoded, next is fetched
- Increases throughput
- Issues: branches, data dependencies

**Pipeline Stages (typical)**
1. Fetch
2. Decode
3. Execute
4. Memory Access
5. Write Back

**Pipeline Hazards**
- Data hazard: instruction needs result from previous
- Control hazard: branch changes instruction sequence
- Structural hazard: hardware conflict

### Factors Affecting CPU Performance

**Clock Speed**
- Measured in GHz
- Higher = more cycles per second
- Limits: heat, power consumption

**Number of Cores**
- Each core processes independently
- True parallelism
- Requires parallel software

**Cache**
- L1: smallest, fastest, per core
- L2: larger, slower, per core
- L3: largest, slowest, shared
- Hit rate affects performance significantly

**Word Length**
- 32-bit vs 64-bit
- Larger = more memory addressable
- Larger = more data per operation

### Types of Processor

**CISC (Complex Instruction Set Computer)**
- Many complex instructions
- Variable length instructions
- Instructions may take multiple cycles
- Hardware complexity
- Example: x86

**RISC (Reduced Instruction Set Computer)**
- Few, simple instructions
- Fixed length instructions
- One cycle per instruction (pipelining)
- Compiler complexity
- Example: ARM

| Feature | CISC | RISC |
|---------|------|------|
| Instructions | Many, complex | Few, simple |
| Instruction length | Variable | Fixed |
| Cycles per instruction | Variable | Usually 1 |
| Pipelining | Harder | Easier |
| Code size | Smaller | Larger |
| Power consumption | Higher | Lower |

### Co-processors and GPUs

**Co-processor**
- Specialised processor for specific tasks
- Works alongside main CPU
- Examples: FPU, cryptographic processor

**GPU (Graphics Processing Unit)**
- Highly parallel architecture
- Thousands of small cores
- Optimised for matrix operations
- GPGPU: General-purpose GPU computing
- Used for: graphics, AI/ML, scientific computing

### Multi-core and Parallel Processing

**Benefits**
- True simultaneous processing
- Better for multi-threaded applications
- Improved responsiveness

**Challenges**
- Software must be designed for parallelism
- Overhead of coordination
- Not all tasks parallelisable (Amdahl's Law)

**Amdahl's Law**
Speedup = 1 / ((1 - P) + P/N)
Where P = parallelisable portion, N = number of processors
`;

const OCR_ALEVEL_CS_INPUT_OUTPUT_STORAGE = `
## Input, Output and Storage Devices

### Input Devices

**Keyboard**
- Mechanical switches or membrane
- Each key generates scan code
- Converted to character by OS

**Mouse/Trackpad**
- Optical: LED + sensor detects surface movement
- Laser: higher precision
- Reports relative movement or absolute position

**Touchscreen**
- Resistive: pressure on flexible layers
- Capacitive: detects electrical conductivity (fingers)
- Used in: phones, tablets, kiosks

**Scanner**
- CCD sensor captures reflected light
- Creates digital image
- OCR: Optical Character Recognition - converts to text

**Camera/Webcam**
- CCD or CMOS sensor
- Captures light as digital image
- Video: sequence of frames

**Microphone**
- Sound waves cause diaphragm vibration
- Converted to electrical signals
- ADC converts to digital

**Sensors**
- Temperature, pressure, light, motion
- Analogue signals converted by ADC
- Used in: environmental monitoring, automation

**Barcode Reader**
- Laser or image-based
- Reads pattern of lines
- Common: UPC, QR codes

### Output Devices

**Monitor/Display**
- LCD: Liquid crystal, backlit
- LED: LCD with LED backlight
- OLED: Organic LED, self-emitting
- Resolution: pixels (e.g., 1920x1080)
- Refresh rate: Hz (frames per second)

**Printer**
- Inkjet: Sprays droplets of ink
- Laser: Toner fused to paper
- 3D: Builds objects layer by layer

**Speakers/Headphones**
- DAC converts digital to analogue
- Electrical signals drive speaker cone
- Produces sound waves

**Actuators**
- Convert electrical signals to physical movement
- Motors, solenoids, servos
- Used in: robotics, control systems

### Storage Technologies

**Magnetic Storage**

*Hard Disk Drive (HDD)*
- Spinning platters coated with magnetic material
- Read/write heads on arm
- Tracks, sectors, cylinders
- Latency: seek time + rotational delay
- Capacity: up to several TB
- Speed: ~100-200 MB/s

*Magnetic Tape*
- Sequential access
- Very high capacity
- Low cost per GB
- Used for: archival, backup

**Optical Storage**

*CD/DVD/Blu-ray*
- Laser reads/writes pits and lands
- CD: ~700 MB
- DVD: 4.7 GB (single layer)
- Blu-ray: 25 GB (single layer)
- Types: ROM, R (recordable), RW (rewritable)

**Solid State Storage**

*SSD (Solid State Drive)*
- NAND flash memory
- No moving parts
- Very fast: 500+ MB/s (SATA), 3000+ MB/s (NVMe)
- Higher cost per GB than HDD
- Limited write cycles (but very high)

*USB Flash Drive*
- Portable, compact
- Flash memory
- Various capacities

*SD Cards*
- Used in cameras, phones
- Various speeds and capacities

### Storage Comparison
| Factor | HDD | SSD | Optical | Tape |
|--------|-----|-----|---------|------|
| Speed | Medium | Very High | Low | Low |
| Capacity | Very High | High | Low-Medium | Very High |
| Cost/GB | Low | Medium | Very Low | Very Low |
| Durability | Medium | High | Medium | High |
| Access | Random | Random | Sequential | Sequential |
| Power | Higher | Lower | Medium | Low |

### Cloud Storage
- Data stored on remote servers
- Accessed via internet
- Advantages: accessibility, backup, scalability
- Concerns: security, privacy, dependency on internet

### Virtual Storage
- Using secondary storage as RAM extension
- Swap file/page file
- Slower than physical RAM
- Allows running larger programs
`;

const OCR_ALEVEL_CS_SOFTWARE = `
## Software and Software Development

### Types of Software

**System Software**
- Operating system
- Utilities
- Device drivers
- Translators

**Application Software**
- General purpose (word processor, spreadsheet)
- Special purpose (payroll, stock control)
- Bespoke (custom-built)

### Operating Systems

**Functions**
- Process management
- Memory management
- File system management
- I/O management
- Security and access control
- User interface

**Process Management**
- Process states: new, ready, running, waiting, terminated
- Scheduling algorithms: Round robin, priority, shortest job first
- Context switching: saving and restoring process state
- Multi-tasking: running multiple processes

**Memory Management**
- Allocation and deallocation
- Paging: fixed-size memory blocks
- Segmentation: variable-size logical blocks
- Virtual memory: swap space on disk
- Protection: preventing process interference

**Scheduling Algorithms**

*Round Robin*
- Each process gets fixed time slice
- Fair but may not be efficient
- Good for time-sharing systems

*First Come First Served (FCFS)*
- Processes run in arrival order
- Simple but long jobs block short ones

*Shortest Job First (SJF)*
- Shortest estimated time runs first
- Optimal average wait time
- Starvation possible for long jobs

*Priority Scheduling*
- Higher priority runs first
- Starvation possible for low priority

*Multi-level Feedback Queue*
- Multiple queues with different priorities
- Processes move between queues based on behavior

### Types of Operating System

**Distributed OS**
- Manages multiple networked computers
- Appears as single system
- Load balancing, fault tolerance

**Embedded OS**
- Built into devices
- Real-time requirements
- Limited resources
- Examples: RTOS, VxWorks

**Multi-tasking OS**
- Multiple processes simultaneously
- Time-slicing
- Most desktop/server OS

**Multi-user OS**
- Multiple users simultaneously
- Access control, resource sharing
- Servers, mainframes

**Real-Time OS (RTOS)**
- Guaranteed response time
- Hard real-time: absolute deadlines (safety-critical)
- Soft real-time: best effort (multimedia)

### BIOS and Device Drivers

**BIOS/UEFI**
- Basic Input/Output System
- Firmware on motherboard
- POST: Power-On Self-Test
- Initialises hardware
- Loads bootloader

**Device Drivers**
- Software interface for hardware
- Abstracts hardware details
- Allows OS to communicate with devices
- Hardware-specific

### Virtual Machines

**Definition**
Software emulation of a computer system

**Benefits**
- Run multiple OS on one machine
- Test software in different environments
- Isolation and security
- Legacy software support
- Cloud computing

**Types**
- System VM: emulates complete hardware
- Process VM: runs single process (e.g., JVM)

**Hypervisor**
- Software managing VMs
- Type 1: bare metal (VMware ESXi)
- Type 2: hosted (VirtualBox)

### Software Development

**Programming Paradigms**

*Procedural*
- Sequence of instructions
- Procedures/functions
- Top-down design
- Examples: C, Pascal

*Object-Oriented*
- Objects with state and behavior
- Encapsulation, inheritance, polymorphism
- Examples: Java, C++, Python

*Functional*
- Functions as first-class citizens
- Immutability, pure functions
- Examples: Haskell, Lisp, F#

*Declarative*
- Describes what, not how
- Examples: SQL, Prolog

### Translators

**Assembler**
- Assembly language to machine code
- One-to-one translation
- Produces object code

**Compiler**
- High-level to machine code
- Entire program at once
- Creates executable
- Stages: lexical analysis, syntax analysis, code generation, optimisation

**Interpreter**
- High-level executed directly
- Line by line
- No executable created
- Slower execution but faster development

**Comparison**
| Aspect | Compiler | Interpreter |
|--------|----------|-------------|
| Translation | All at once | Line by line |
| Execution | Fast | Slower |
| Debugging | Harder | Easier |
| Distribution | Executable | Source code |
| Memory | More (stores executable) | Less |

### Compilation Stages

1. **Lexical Analysis**
   - Breaks into tokens
   - Removes whitespace and comments
   - Creates symbol table

2. **Syntax Analysis**
   - Checks grammar rules
   - Builds parse tree/AST
   - Reports syntax errors

3. **Semantic Analysis**
   - Type checking
   - Scope resolution
   - Meaning verification

4. **Code Generation**
   - Produces target code
   - May be machine code or intermediate

5. **Optimisation**
   - Improves efficiency
   - Code size or speed
   - Can occur at various stages

### Libraries and Linkers

**Libraries**
- Pre-compiled code
- Static: linked at compile time
- Dynamic/Shared: linked at runtime (DLL, .so)

**Linker**
- Combines object files
- Resolves external references
- Creates executable

**Loader**
- Loads executable into memory
- Prepares for execution
`;

const OCR_ALEVEL_CS_DATA_EXCHANGE = `
## Exchanging Data

### Data Exchange Methods

**Wired Transmission**
- Copper cables: Ethernet, coaxial
- Fiber optic: light pulses, high bandwidth, long distance
- USB, Thunderbolt: peripheral connections

**Wireless Transmission**
- WiFi (802.11): local networks
- Bluetooth: short range, low power
- Cellular: mobile networks (4G, 5G)
- Satellite: global coverage, high latency

### Networks

**Network Types**
- LAN: Local Area Network (building/campus)
- WAN: Wide Area Network (cities/countries)
- MAN: Metropolitan Area Network
- PAN: Personal Area Network

**Topologies**
- Star: central switch/hub
- Mesh: multiple connections
- Bus: single cable (legacy)
- Ring: circular connection

**Client-Server**
- Centralised resources
- Server provides services
- Security, backup, control

**Peer-to-Peer**
- No central server
- Each node equal
- File sharing, blockchain

### Network Hardware

**Switch**
- Connects devices on same network
- Uses MAC addresses
- Forwards to specific port

**Router**
- Connects different networks
- Uses IP addresses
- Routing tables, NAT

**Gateway**
- Connects different network types
- Protocol conversion

**Network Interface Card (NIC)**
- Unique MAC address
- Converts data for transmission

### Protocols

**TCP/IP Stack**
| Layer | Protocols | Function |
|-------|-----------|----------|
| Application | HTTP, FTP, SMTP | User services |
| Transport | TCP, UDP | Reliable delivery |
| Internet | IP, ICMP | Routing |
| Network Access | Ethernet, WiFi | Physical transmission |

**TCP (Transmission Control Protocol)**
- Connection-oriented
- Reliable, ordered delivery
- Three-way handshake
- Flow control, error checking

**UDP (User Datagram Protocol)**
- Connectionless
- No guarantee of delivery
- Faster, lower overhead
- Used for: streaming, gaming

**HTTP/HTTPS**
- Web page transfer
- HTTPS: encrypted (TLS/SSL)
- Request-response model

**FTP (File Transfer Protocol)**
- File upload/download
- Separate control and data channels

**SMTP/IMAP/POP3**
- Email protocols
- SMTP: sending
- IMAP/POP3: receiving

### IP Addressing

**IPv4**
- 32 bits (4 octets)
- Example: 192.168.1.1
- ~4.3 billion addresses

**IPv6**
- 128 bits
- Example: 2001:0db8:85a3:0000:0000:8a2e:0370:7334
- Vastly more addresses

**Subnet Mask**
- Separates network and host portions
- Example: 255.255.255.0

**Private IP Ranges**
- 10.0.0.0 - 10.255.255.255
- 172.16.0.0 - 172.31.255.255
- 192.168.0.0 - 192.168.255.255

**NAT (Network Address Translation)**
- Maps private to public IPs
- Enables multiple devices to share one public IP

### DNS (Domain Name System)
- Resolves domain names to IP addresses
- Hierarchical structure
- Root servers, TLD servers, authoritative servers
- Caching for efficiency

### Packet Switching
- Data split into packets
- Packets routed independently
- May take different paths
- Reassembled at destination

**Packet Structure**
- Header: source/destination IP, packet number, TTL
- Payload: actual data
- Trailer: error checking (checksum)

### Security

**Encryption**
- Symmetric: same key for encrypt/decrypt (AES)
- Asymmetric: public/private key pair (RSA)

**Digital Certificates**
- Verify identity
- Issued by Certificate Authority
- Used in HTTPS

**Firewalls**
- Filter network traffic
- Rules based on IP, port, protocol

**VPN**
- Virtual Private Network
- Encrypted tunnel over internet
- Secure remote access

### Web Technologies

**HTML**
- HyperText Markup Language
- Structure of web pages
- Tags define elements

**CSS**
- Cascading Style Sheets
- Presentation/styling
- Separation of concerns

**JavaScript**
- Client-side scripting
- Interactive web pages
- DOM manipulation

**Web Server**
- Hosts web content
- Responds to HTTP requests
- Apache, Nginx, IIS

**Web Client**
- Browser
- Renders HTML, CSS
- Executes JavaScript
`;

const OCR_ALEVEL_CS_DATABASES = `
## Databases

### Database Concepts

**Database**
- Organised collection of data
- Reduces redundancy
- Enables data sharing

**Database Management System (DBMS)**
- Software for creating and managing databases
- Handles storage, retrieval, security
- Examples: MySQL, PostgreSQL, Oracle

### Relational Databases

**Tables (Relations)**
- Rows (records/tuples)
- Columns (fields/attributes)
- Primary key: unique identifier

**Keys**
- Primary Key: uniquely identifies record
- Foreign Key: links to primary key in another table
- Composite Key: multiple columns as key
- Candidate Key: could be primary key

**Relationships**
- One-to-One: each record relates to one in other table
- One-to-Many: one record relates to many
- Many-to-Many: implemented via junction table

**Entity-Relationship Diagrams**
\`\`\`
[Student]--1---<studies>---M--[Course]

Notation:
- 1: one
- M: many
- Entity: rectangle
- Relationship: diamond
- Attribute: oval
\`\`\`

### Normalisation

**Purpose**
- Reduce redundancy
- Prevent update anomalies
- Improve data integrity

**First Normal Form (1NF)**
- All attributes atomic (no repeating groups)
- Each row unique (has primary key)

**Second Normal Form (2NF)**
- In 1NF
- No partial dependencies (all non-key attributes depend on whole primary key)

**Third Normal Form (3NF)**
- In 2NF
- No transitive dependencies (non-key attributes don't depend on other non-key attributes)

**Example of Normalisation**
\`\`\`
// Unnormalised
OrderID | CustomerName | CustomerAddress | Product1 | Price1 | Product2 | Price2

// 1NF - Remove repeating groups
OrderID | CustomerName | CustomerAddress | ProductName | Price

// 2NF - Remove partial dependencies
Orders: OrderID | CustomerID
Customers: CustomerID | CustomerName | CustomerAddress
OrderItems: OrderID | ProductID | Quantity
Products: ProductID | ProductName | Price

// 3NF - Remove transitive dependencies
(Already in 3NF in this example)
\`\`\`

### SQL (Structured Query Language)

**Data Definition Language (DDL)**
\`\`\`sql
CREATE TABLE Students (
    StudentID INT PRIMARY KEY,
    Name VARCHAR(100) NOT NULL,
    DOB DATE,
    CourseID INT,
    FOREIGN KEY (CourseID) REFERENCES Courses(CourseID)
);

ALTER TABLE Students ADD Email VARCHAR(255);

DROP TABLE Students;
\`\`\`

**Data Manipulation Language (DML)**
\`\`\`sql
-- Select
SELECT Name, DOB FROM Students WHERE CourseID = 1;
SELECT * FROM Students ORDER BY Name ASC;
SELECT CourseID, COUNT(*) FROM Students GROUP BY CourseID;
SELECT * FROM Students WHERE Name LIKE 'A%';

-- Insert
INSERT INTO Students (StudentID, Name, DOB, CourseID)
VALUES (1, 'Alice Smith', '2000-05-15', 1);

-- Update
UPDATE Students SET CourseID = 2 WHERE StudentID = 1;

-- Delete
DELETE FROM Students WHERE StudentID = 1;
\`\`\`

**Joins**
\`\`\`sql
-- Inner Join
SELECT Students.Name, Courses.CourseName
FROM Students
INNER JOIN Courses ON Students.CourseID = Courses.CourseID;

-- Left Join
SELECT Students.Name, Courses.CourseName
FROM Students
LEFT JOIN Courses ON Students.CourseID = Courses.CourseID;
\`\`\`

**Aggregate Functions**
\`\`\`sql
SELECT COUNT(*) FROM Students;
SELECT AVG(Grade) FROM Results;
SELECT MAX(Grade), MIN(Grade) FROM Results;
SELECT SUM(Amount) FROM Orders;
\`\`\`

### Transaction Processing

**ACID Properties**
- Atomicity: all or nothing
- Consistency: valid state to valid state
- Isolation: concurrent transactions don't interfere
- Durability: committed changes permanent

**Record Locking**
- Prevents concurrent modification conflicts
- Deadlock: circular waiting (prevention/detection needed)

### Big Data

**Characteristics (3 Vs)**
- Volume: massive amounts
- Velocity: high speed generation
- Variety: structured and unstructured

**Technologies**
- NoSQL databases (MongoDB, Cassandra)
- Distributed processing (Hadoop, Spark)
- Data warehousing
`;

const OCR_ALEVEL_CS_BOOLEAN_ALGEBRA = `
## Boolean Algebra

### Logic Gates

**Basic Gates**
| Gate | Symbol | Expression | Truth Table |
|------|--------|------------|-------------|
| AND | A.B | A AND B | 1 only if both 1 |
| OR | A+B | A OR B | 1 if any 1 |
| NOT | A' or ~A | NOT A | Inverts input |

**Derived Gates**
| Gate | Expression | Equivalent |
|------|------------|------------|
| NAND | (A.B)' | NOT(A AND B) |
| NOR | (A+B)' | NOT(A OR B) |
| XOR | A(+)B | A'.B + A.B' |
| XNOR | (A(+)B)' | A.B + A'.B' |

### Boolean Laws

**Identity Laws**
- A + 0 = A
- A . 1 = A

**Null Laws**
- A + 1 = 1
- A . 0 = 0

**Idempotent Laws**
- A + A = A
- A . A = A

**Inverse Laws**
- A + A' = 1
- A . A' = 0

**Commutative Laws**
- A + B = B + A
- A . B = B . A

**Associative Laws**
- (A + B) + C = A + (B + C)
- (A . B) . C = A . (B . C)

**Distributive Laws**
- A . (B + C) = A.B + A.C
- A + (B . C) = (A + B) . (A + C)

**Absorption Laws**
- A + A.B = A
- A . (A + B) = A

**De Morgan's Laws**
- (A + B)' = A' . B'
- (A . B)' = A' + B'

### Simplification Example
\`\`\`
Simplify: A.B + A.B' + A'.B

Method 1: Factoring
= A(B + B') + A'.B      // Factor out A
= A.1 + A'.B            // B + B' = 1
= A + A'.B              // A.1 = A
= A + B                 // Absorption: A + A'.B = A + B

Method 2: Using K-map (2 variables)
      B   B'
A  [  1   1  ]
A' [  1   0  ]

Groups: Row A (gives A), Column B (gives B)
But A + B simplification from absorption
Result: A + B
\`\`\`

### Karnaugh Maps (K-maps)

**2-Variable K-map**
\`\`\`
      B   B'
A  [  -   -  ]
A' [  -   -  ]
\`\`\`

**3-Variable K-map**
\`\`\`
         BC  BC' B'C' B'C
A    [   -   -    -    -  ]
A'   [   -   -    -    -  ]

Gray code ordering: 00, 01, 11, 10
\`\`\`

**4-Variable K-map**
\`\`\`
         CD  CD' C'D' C'D
AB   [   -   -    -    -  ]
AB'  [   -   -    -    -  ]
A'B' [   -   -    -    -  ]
A'B  [   -   -    -    -  ]
\`\`\`

**K-map Rules**
- Group 1s in powers of 2 (1, 2, 4, 8)
- Groups can wrap around edges
- Larger groups = simpler expression
- Each 1 must be in at least one group
- Find minimum number of groups covering all 1s

### Adder Circuits

**Half Adder**
- Adds two single bits
- Outputs: Sum and Carry
\`\`\`
Sum = A XOR B
Carry = A AND B
\`\`\`

**Full Adder**
- Adds three bits (A, B, Carry-in)
\`\`\`
Sum = A XOR B XOR Cin
Cout = (A AND B) OR (Cin AND (A XOR B))
\`\`\`

### Flip-Flops

**SR Flip-Flop**
- Set and Reset inputs
- Stores one bit
- Invalid state when S=R=1

**D Flip-Flop**
- Data input
- Output = D on clock edge
- Used in registers

**JK Flip-Flop**
- Like SR but toggles when J=K=1
- More versatile
`;

const OCR_ALEVEL_CS_LEGAL_ETHICAL = `
## Legal, Moral, Cultural and Ethical Issues

### Legislation

**Data Protection Act 2018 / UK GDPR**
Principles:
1. Lawfulness, fairness, transparency
2. Purpose limitation
3. Data minimisation
4. Accuracy
5. Storage limitation
6. Integrity and confidentiality
7. Accountability

Rights:
- Right to access
- Right to rectification
- Right to erasure
- Right to restrict processing
- Right to data portability
- Right to object

**Computer Misuse Act 1990**
Offences:
1. Unauthorised access to computer material
2. Unauthorised access with intent to commit further offence
3. Unauthorised modification of computer material
4. Making, supplying, or obtaining tools for computer misuse

**Copyright, Designs and Patents Act 1988**
- Protects original works
- Software is protected
- Illegal to copy, distribute, modify without permission
- Duration: life + 70 years

**Regulation of Investigatory Powers Act 2000 (RIPA)**
- Government surveillance powers
- Interception of communications
- Access to encrypted data

**Freedom of Information Act 2000**
- Right to access information from public bodies
- Some exemptions apply

### Ethical Issues

**Privacy**
- Collection of personal data
- Tracking and surveillance
- Social media privacy
- Right to be forgotten

**Artificial Intelligence**
- Algorithmic bias
- Job displacement
- Autonomous weapons
- Decision accountability
- Black box problem

**Surveillance**
- State surveillance
- Corporate tracking
- CCTV and facial recognition
- Balance: security vs privacy

**Digital Divide**
- Access inequality
- Economic factors
- Geographic factors
- Age-related digital literacy

**Environmental Impact**
- E-waste
- Energy consumption
- Manufacturing pollution
- Carbon footprint of data centres

**Automation and Employment**
- Job displacement
- New job creation
- Need for reskilling
- Economic inequality

### Professional Ethics

**BCS Code of Conduct**
- Public interest
- Professional competence
- Integrity
- Professional responsibility

**ACM Code of Ethics**
- Contribute to society
- Avoid harm
- Be honest and trustworthy
- Respect privacy

### Software Licensing

**Proprietary Software**
- Closed source
- Paid license
- Restrictions on use

**Open Source Software**
- Source code available
- Can modify and distribute
- Various licenses (GPL, MIT, Apache)

**Freeware**
- Free to use
- Not open source
- May have restrictions

**Shareware**
- Try before buy
- Time or feature limited

### Intellectual Property

**Patents**
- Novel inventions
- 20 years protection
- Must be disclosed

**Trademarks**
- Brand identity
- Names, logos, slogans
- Renewable indefinitely

**Copyright**
- Original creative works
- Automatic protection
- Long duration

**Trade Secrets**
- Confidential information
- No registration
- Lost if disclosed
`;

const OCR_ALEVEL_CS_COMPUTATIONAL_THINKING = `
## Computational Thinking

### Problem Solving Strategies

**Abstraction**
- Removing unnecessary detail
- Focusing on essential features
- Generalising from specific instances
- Creating models

**Decomposition**
- Breaking into smaller sub-problems
- Each part can be solved independently
- Makes complex problems manageable
- Enables team collaboration

**Pattern Recognition**
- Identifying similarities
- Reusing solutions
- Finding trends
- Generalising approaches

**Algorithm Design**
- Step-by-step solutions
- Unambiguous instructions
- Finite steps
- Produces correct output

### Thinking Ahead

**Inputs and Outputs**
- What data is required?
- What format is it in?
- What output is expected?
- How will output be used?

**Preconditions**
- Requirements before execution
- Assumptions about input
- System state requirements

**Caching**
- Store frequently used results
- Trade memory for speed
- Cache invalidation strategy

**Reusable Components**
- Library functions
- Object-oriented design
- Modular programming

### Thinking Concurrently

**Concurrency**
- Multiple processes executing
- May be simultaneous or interleaved
- Requires coordination

**Parallelism**
- Truly simultaneous execution
- Multiple processors/cores
- Speed improvement

**Challenges**
- Race conditions
- Deadlock
- Synchronisation
- Shared resource access

**Benefits**
- Improved performance
- Better resource utilisation
- Responsive applications

### Thinking Procedurally

**Subroutines**
- Named blocks of code
- Reusable
- Parameters for flexibility

**Recursion**
- Function calls itself
- Base case to terminate
- Call stack usage

**Top-Down Design**
- Start with main problem
- Decompose into sub-problems
- Continue until simple

**Stepwise Refinement**
- Gradual detail addition
- Pseudo-code to code
- Iterative improvement

### Thinking Logically

**Decision Making**
- Conditional execution
- Boolean conditions
- Control flow

**Pattern Matching**
- Identify conditions
- Match against known patterns
- Apply appropriate action

**Backtracking**
- Try options
- Undo if unsuccessful
- Try alternative

### Problem Representation

**Data Structures**
- Choose appropriate structure
- Consider operations needed
- Balance trade-offs

**State Machines**
- Model system states
- Define transitions
- Handle events

**Decision Tables**
- All condition combinations
- Corresponding actions
- Comprehensive coverage

**Decision Trees**
- Hierarchical decisions
- Classification
- Visual representation
`;

const OCR_ALEVEL_CS_QUESTION_TEMPLATES = `
## Authentic OCR A-Level Question Formats (From Past Papers)

### Type 1: Algorithm Implementation (6-12 marks)
Format: "Write a function/procedure to..."
OR "Complete the algorithm to..."

Key point: OCR accepts ANY clear pseudocode or real programming language.

Example:
"Write a function that takes an adjacency matrix and two node numbers as parameters and returns the shortest path between them using Dijkstra's algorithm." [12]

### Type 2: Time/Space Complexity (2-6 marks)
Format: "State the time complexity of [algorithm] and justify your answer"
OR "Compare the time complexity of [alg1] and [alg2]"

Examples:
- "State the time complexity of binary search. Justify your answer." [3]
- "Compare the time complexity of bubble sort and merge sort. Which would you recommend for sorting a large dataset?" [4]

### Type 3: Data Structure Operations (4-8 marks)
Format: "Show the state of [data structure] after [operations]"
OR "Explain how [operation] is performed on [data structure]"

Examples:
- Binary tree traversals (in-order, pre-order, post-order)
- Hash table insertion with collision handling
- Stack/queue operations sequence
- BST insertion/deletion

### Type 4: Graph Algorithms (6-12 marks)
Format: "Apply Dijkstra's algorithm to find the shortest path..."
OR "Show the order of nodes visited using [DFS/BFS]..."
OR "Determine the minimum spanning tree using..."

Must show working step by step.

### Type 5: Boolean Algebra/Logic (3-6 marks)
Format: "Simplify the Boolean expression..."
OR "Create a Karnaugh map and derive the simplified expression"
OR "Design a circuit to implement..."

Examples:
- "Simplify A.B + A.B' + A'.B using Boolean algebra" [3]
- "Use a 4-variable K-map to simplify..." [5]

### Type 6: Formal Methods (4-8 marks)
Format: "Draw a finite state machine for..."
OR "Write the regular expression for..."
OR "Describe the language accepted by..."

### Type 7: Functional Programming (4-8 marks)
Format: "Using map/filter/reduce, write a function to..."
OR "Explain why [functional construct] is beneficial"
OR "Convert the following imperative code to functional style"

### Type 8: OOP Design (6-12 marks)
Format: "Design a class hierarchy for..."
OR "Explain how encapsulation is achieved..."
OR "Write classes to model [scenario]"

### Type 9: Extended Response (12-20 marks)
Format: Questions marked with asterisk (*)
"*Discuss..." or "*Evaluate..."
- Uses levels of response marking
- Requires deep technical understanding
- Must structure argument

### Type 10: Computational Thinking (varies)
Format: "Decompose the problem..."
OR "Identify the abstractions needed..."
OR "Explain how concurrency could be applied..."
`;

const OCR_ALEVEL_CS_MARK_SCHEME_CONVENTIONS = `
## OCR A-Level Mark Scheme Conventions

### Code/Pseudocode Marking
**Critical:** "The exact syntax you use isn't important - you can make it up as you go along as long as whatever you've written is clearly and unambiguously able to be interpreted."

- Accept ANY reasonable pseudocode
- Accept Python, Java, C#, VB.NET syntax
- Logic must be correct
- Indentation and structure important for readability
- Variable names can differ
- Minor syntax errors acceptable if logic clear

### Extended Response Questions (Marked with *)
Quality of extended response assessed using levels:

**Level 4 (16-20 marks):**
- Excellent understanding and application
- Comprehensive coverage of topic
- Technically accurate throughout
- Well-structured, logical argument
- Evaluates and draws reasoned conclusions

**Level 3 (11-15 marks):**
- Good understanding and application
- Accurate technical content
- Clear structure
- Good coverage of key points
- Some evaluation

**Level 2 (6-10 marks):**
- Reasonable understanding
- Mostly accurate
- Some structure
- Covers main points
- Limited evaluation

**Level 1 (1-5 marks):**
- Limited understanding
- Basic points only
- Weak structure
- May contain inaccuracies

**0 marks:** Nothing creditworthy

### Algorithm Questions
- Award marks for correct logic flow
- Award marks for handling edge cases
- Award marks for efficiency considerations
- Partial credit for partially correct solutions
- Note boundary conditions
- Consider data validation if appropriate

### Complexity Analysis
- Must state Big-O correctly
- Justification must reference operations/comparisons
- Accept equivalent notations (O(n^2) = O(n*n))
- May require comparison between algorithms

### Graph Algorithm Questions
- Must show working clearly
- State which node being processed
- Update distances/paths at each step
- Final answer must be clearly stated

### OOP Questions
- Award marks for correct syntax (class, methods)
- Award marks for appropriate access modifiers
- Award marks for correct use of inheritance
- Award marks for method implementation
`;

const OCR_ALEVEL_CS_REFERENCE_DATA = `
## A-Level Reference Data

### Time Complexity Reference
| Algorithm | Best | Average | Worst | Space |
|-----------|------|---------|-------|-------|
| Linear Search | O(1) | O(n) | O(n) | O(1) |
| Binary Search | O(1) | O(log n) | O(log n) | O(1) |
| Bubble Sort | O(n) | O(n^2) | O(n^2) | O(1) |
| Insertion Sort | O(n) | O(n^2) | O(n^2) | O(1) |
| Merge Sort | O(n log n) | O(n log n) | O(n log n) | O(n) |
| Quick Sort | O(n log n) | O(n log n) | O(n^2) | O(log n) |
| DFS/BFS | O(V+E) | O(V+E) | O(V+E) | O(V) |
| Dijkstra (array) | O(V^2) | O(V^2) | O(V^2) | O(V) |
| Dijkstra (heap) | O((V+E)log V) | O((V+E)log V) | O((V+E)log V) | O(V) |
| A* | O(E) | O(E) | O(V^2) | O(V) |

### Boolean Laws Quick Reference
| Law | AND Form | OR Form |
|-----|----------|---------|
| Identity | A.1 = A | A+0 = A |
| Null | A.0 = 0 | A+1 = 1 |
| Idempotent | A.A = A | A+A = A |
| Inverse | A.A' = 0 | A+A' = 1 |
| De Morgan | (A.B)' = A'+B' | (A+B)' = A'.B' |
| Absorption | A.(A+B) = A | A+A.B = A |
| Distribution | A.(B+C) = A.B+A.C | A+(B.C) = (A+B).(A+C) |

### Regular Expression Symbols
| Symbol | Meaning |
|--------|---------|
| * | Zero or more |
| + | One or more |
| ? | Zero or one |
| . | Any single character |
| [] | Character class |
| \\| | Alternation (or) |
| ^ | Start of string |
| $ | End of string |
| () | Grouping |

### Set Notation
| Symbol | Meaning |
|--------|---------|
| \\in | Element of |
| \\notin | Not element of |
| \\subset | Proper subset |
| \\subseteq | Subset or equal |
| \\cup | Union |
| \\cap | Intersection |
| \\times | Cartesian product |
| \\emptyset | Empty set |
| \\| A \\| | Cardinality |

### SQL Keywords
\`\`\`sql
SELECT, FROM, WHERE, AND, OR, NOT
ORDER BY (ASC, DESC), GROUP BY, HAVING
INSERT INTO, VALUES
UPDATE, SET
DELETE FROM
INNER JOIN, LEFT JOIN, RIGHT JOIN, ON
COUNT, SUM, AVG, MAX, MIN
LIKE (wildcards: % for any, _ for single)
BETWEEN, IN, IS NULL, IS NOT NULL
CREATE TABLE, ALTER TABLE, DROP TABLE
PRIMARY KEY, FOREIGN KEY, NOT NULL, UNIQUE
\`\`\`
`;

const OCR_ALEVEL_CS_WORKED_EXAMPLES = `
## Worked Examples with OCR-Style Mark Schemes

### Example 1: Dijkstra's Algorithm
**Q:** Apply Dijkstra's algorithm to find the shortest path from A to E in the following weighted graph. Show your working clearly. [8]

Graph:
\`\`\`
A --5-- B --3-- C
|       |       |
4       2       4
|       |       |
D --1-- E --6-- F
\`\`\`

**Answer:**
| Step | Current | A | B | C | D | E | F |
|------|---------|---|---|---|---|---|---|
| Init | - | 0 | inf | inf | inf | inf | inf |
| 1 | A | 0* | 5 | inf | 4 | inf | inf |
| 2 | D | 0* | 5 | inf | 4* | 5 | inf |
| 3 | B/E | 0* | 5* | 8 | 4* | 5* | inf |
| 4 | B | 0* | 5* | 8 | 4* | 5* | inf |
| 5 | C/F | 0* | 5* | 8* | 4* | 5* | 11 |

Shortest path A to E: A -> D -> E
Distance: 5

**Mark Scheme:**
- 1 mark: Correct initialisation
- 1 mark: Correctly processing A
- 1 mark: Correctly processing D
- 2 marks: Correctly processing remaining nodes
- 1 mark: Recording visited nodes
- 1 mark: Correct shortest distance (5)
- 1 mark: Correct path (A-D-E)

---

### Example 2: OOP Design
**Q:** A school needs a system to manage people. Design a class hierarchy with a Person base class, and Teacher and Student derived classes. Include appropriate attributes and methods. [10]

**Answer:**
\`\`\`
class Person
    protected name
    protected dateOfBirth
    protected email

    public procedure new(n, dob, e)
        name = n
        dateOfBirth = dob
        email = e
    endprocedure

    public function getName()
        return name
    endfunction

    public function getAge()
        return currentYear - dateOfBirth.year
    endfunction
endclass

class Teacher inherits Person
    private employeeID
    private department
    private salary

    public procedure new(n, dob, e, id, dept, sal)
        super.new(n, dob, e)
        employeeID = id
        department = dept
        salary = sal
    endprocedure

    public procedure setSalary(newSalary)
        salary = newSalary
    endprocedure

    public function getSalary()
        return salary
    endfunction
endclass

class Student inherits Person
    private studentID
    private yearGroup
    private tutor

    public procedure new(n, dob, e, id, year)
        super.new(n, dob, e)
        studentID = id
        yearGroup = year
    endprocedure

    public procedure setTutor(teacher)
        tutor = teacher
    endprocedure
endclass
\`\`\`

**Mark Scheme:**
- 1 mark: Correct class structure with inheritance
- 1 mark: Appropriate use of access modifiers
- 1 mark: Constructor calling super constructor
- 1 mark: Person attributes (name, DOB, etc.)
- 1 mark: Teacher-specific attributes
- 1 mark: Student-specific attributes
- 1 mark: Getter methods
- 1 mark: Setter methods
- 1 mark: Encapsulation (private with getters/setters)
- 1 mark: Overall design quality

---

### Example 3: Complexity Analysis
**Q:** Compare the time complexity of bubble sort and merge sort. Explain why one might be preferred over the other in different situations. [6]

**Answer:**
Bubble Sort:
- Best case: O(n) - when array already sorted (with early termination)
- Average case: O(n^2)
- Worst case: O(n^2) - when array reverse sorted
- Space complexity: O(1) - in-place

Merge Sort:
- Best/Average/Worst case: O(n log n)
- Space complexity: O(n) - requires auxiliary array

When to use each:
- Bubble sort may be preferred for:
  - Small datasets where overhead matters more than efficiency
  - Nearly sorted data (early termination makes it efficient)
  - Limited memory (O(1) space)
  - Simple implementation requirements

- Merge sort preferred for:
  - Large datasets (O(n log n) vs O(n^2))
  - Consistent performance needed
  - Linked lists (no random access anyway)
  - Stable sort required

**Mark Scheme:**
- 1 mark: Correct complexity for bubble sort (O(n^2))
- 1 mark: Correct complexity for merge sort (O(n log n))
- 1 mark: Space complexity comparison
- 1 mark: When bubble sort advantageous
- 1 mark: When merge sort advantageous
- 1 mark: Justification for recommendations

---

### Example 4: Functional Programming
**Q:** Using higher-order functions, write a function that takes a list of integers and returns the sum of all even numbers doubled. [4]

**Answer:**
\`\`\`
function sumDoubledEvens(numbers)
    return reduce(
        lambda acc, x: acc + x,
        map(
            lambda x: x * 2,
            filter(lambda x: x MOD 2 == 0, numbers)
        ),
        0
    )
endfunction

// Step by step with [1, 2, 3, 4, 5, 6]:
// filter(isEven, [1,2,3,4,5,6]) = [2, 4, 6]
// map(double, [2, 4, 6]) = [4, 8, 12]
// reduce(sum, [4, 8, 12], 0) = 24
\`\`\`

**Mark Scheme:**
- 1 mark: Correct use of filter to get even numbers
- 1 mark: Correct use of map to double
- 1 mark: Correct use of reduce to sum
- 1 mark: Correct composition of functions

---

### Example 5: Extended Response (20 marks)
**Q:** *Discuss the role of abstraction in computer science, with reference to programming, hardware, and networking. [20]

**Indicative Content:**

**Programming:**
- Functions/procedures abstract away implementation details
- OOP encapsulation hides internal state
- APIs abstract complex systems
- High-level languages abstract from machine code
- Libraries abstract common functionality

**Hardware:**
- Operating system abstracts hardware
- Virtual memory abstracts physical memory
- Device drivers abstract hardware specifics
- Cache hierarchy abstracts memory speeds
- Instruction set abstracts circuit level

**Networking:**
- Protocol layers abstract lower levels
- IP addresses abstract physical addresses
- DNS abstracts IP addresses
- APIs abstract network protocols
- Cloud services abstract infrastructure

**Benefits:**
- Reduces complexity
- Enables modular development
- Allows specialisation
- Promotes reuse
- Improves maintainability

**Limitations:**
- May hide important details
- Can introduce inefficiency
- Learning curve for abstractions
- Over-abstraction is possible

**Levels of Response:**
- Level 4 (16-20): Comprehensive discussion across all areas with clear examples, evaluates benefits and limitations, well-structured argument
- Level 3 (11-15): Good coverage of multiple areas, mostly accurate, some evaluation
- Level 2 (6-10): Covers some aspects, limited evaluation, may focus on one area
- Level 1 (1-5): Basic points, limited understanding, weak structure
`;

// ============================================================================
// TOPIC-SPECIFIC GUIDANCE
// ============================================================================

const CS_ALEVEL_TOPIC_GUIDANCE: Record<string, string> = {
  'ocr-alevel-cs-processors': `
Topic: Processors, Input, Output and Storage (Paper 1, Spec 1.1)
Key content:
- CPU architecture (von Neumann, Harvard, contemporary)
- ALU, Control Unit, registers
- Fetch-decode-execute cycle in detail
- Pipelining and hazards
- CISC vs RISC processors
- Multi-core and parallel processing
- GPUs and co-processors
- Input/output device principles
- Storage technologies (magnetic, optical, solid state)

OCR commonly tests:
- Explaining FDE cycle with register usage
- Comparing CISC and RISC
- Discussing pipelining benefits and issues
- Analyzing processor performance factors
- Comparing storage technologies
`,

  'ocr-alevel-cs-software': `
Topic: Software and Software Development (Paper 1, Spec 1.2)
Key content:
- Operating system functions in depth
- Process scheduling algorithms
- Memory management (paging, segmentation, virtual memory)
- Types of operating systems
- Translators (compiler, interpreter, assembler)
- Compilation stages
- Linkers and loaders
- Virtual machines
- Programming paradigms

OCR commonly tests:
- Explaining OS functions
- Comparing scheduling algorithms
- Discussing compilation stages
- Explaining virtual machine benefits
- Comparing programming paradigms
`,

  'ocr-alevel-cs-data-exchange': `
Topic: Exchanging Data (Paper 1, Spec 1.3)
Key content:
- Network hardware and topologies
- TCP/IP protocol stack
- Packet switching
- IP addressing (IPv4, IPv6)
- DNS resolution
- Encryption (symmetric, asymmetric)
- Digital certificates
- Web technologies (HTML, CSS, JavaScript)
- Database concepts

OCR commonly tests:
- Explaining protocol layers
- Describing packet switching process
- Comparing encryption methods
- SQL queries and normalization
- Network security measures
`,

  'ocr-alevel-cs-data-types': `
Topic: Data Types, Data Structures and Algorithms (Paper 1, Spec 1.4)
Key content:
- Primitive and composite data types
- Static vs dynamic data structures
- Arrays, linked lists, stacks, queues
- Trees and graphs
- Hash tables
- Searching and sorting algorithms
- Big O notation

OCR commonly tests:
- Implementing data structures
- Comparing data structure performance
- Algorithm trace tables
- Complexity analysis
- Choosing appropriate structures
`,

  'ocr-alevel-cs-legal-ethical': `
Topic: Legal, Moral, Cultural and Ethical Issues (Paper 1, Spec 1.5)
Key content:
- Data Protection Act / GDPR
- Computer Misuse Act
- Copyright law
- Ethical issues (AI, privacy, surveillance)
- Environmental impacts
- Digital divide
- Professional standards

OCR commonly tests:
- Extended response on ethical issues (20 marks)
- Applying legislation to scenarios
- Discussing stakeholder perspectives
- Evaluating societal impacts
`,

  'ocr-alevel-cs-computational-thinking': `
Topic: Elements of Computational Thinking (Paper 2, Spec 2.1)
Key content:
- Abstraction
- Decomposition
- Pattern recognition
- Algorithm design
- Thinking ahead (caching, preconditions)
- Thinking concurrently
- Thinking procedurally
- Thinking logically

OCR commonly tests:
- Applying computational thinking to problems
- Explaining abstraction in contexts
- Discussing concurrency benefits/challenges
- Problem decomposition exercises
`,

  'ocr-alevel-cs-problem-solving': `
Topic: Problem Solving and Programming (Paper 2, Spec 2.2)
Key content:
- Programming paradigms (procedural, OOP, functional)
- Object-oriented design and implementation
- Recursion
- File handling
- Exception handling
- Testing and debugging
- Modular programming

OCR commonly tests:
- OOP class design (inheritance, polymorphism)
- Functional programming with map/filter/reduce
- Writing recursive algorithms
- Designing test strategies
`,

  'ocr-alevel-cs-algorithms': `
Topic: Algorithms (Paper 2, Spec 2.3)
Key content:
- Graph algorithms (DFS, BFS, Dijkstra's, A*)
- Tree traversals
- Sorting algorithms (all with complexity)
- Searching algorithms
- Minimum spanning trees (Prim's, Kruskal's)
- Big O analysis

OCR commonly tests:
- Dijkstra's algorithm step by step
- A* pathfinding
- Tree traversal outputs
- Algorithm implementation
- Complexity analysis and comparison
`
};

// ============================================================================
// PROMPT GENERATION FUNCTIONS
// ============================================================================

/**
 * Returns the comprehensive system prompt for OCR A-Level Computer Science.
 */
export function getOCRALevelComputerScienceSystemPrompt(topic: Topic, difficulty: Difficulty, subtopic: string): string {
  const markRange = getMarkRangeForDifficulty(difficulty);
  const topicGuidance = CS_ALEVEL_TOPIC_GUIDANCE[topic.id] || '';

  return `You are an expert OCR A-Level Computer Science examiner creating exam-style questions for specification H446.

${OCR_ALEVEL_CS_COGNITIVE_CHALLENGE}

${OCR_ALEVEL_CS_ASSESSMENT_OBJECTIVES}

${OCR_ALEVEL_CS_REFERENCE_LANGUAGE}

${OCR_ALEVEL_CS_ALGORITHMS}

${OCR_ALEVEL_CS_TREE_TRAVERSALS}

${OCR_ALEVEL_CS_COMPLEXITY}

${OCR_ALEVEL_CS_FUNCTIONAL_PROGRAMMING}

${OCR_ALEVEL_CS_OOP}

${OCR_ALEVEL_CS_DATA_STRUCTURES}

${OCR_ALEVEL_CS_PROCESSORS}

${OCR_ALEVEL_CS_INPUT_OUTPUT_STORAGE}

${OCR_ALEVEL_CS_SOFTWARE}

${OCR_ALEVEL_CS_DATA_EXCHANGE}

${OCR_ALEVEL_CS_DATABASES}

${OCR_ALEVEL_CS_BOOLEAN_ALGEBRA}

${OCR_ALEVEL_CS_LEGAL_ETHICAL}

${OCR_ALEVEL_CS_COMPUTATIONAL_THINKING}

${OCR_ALEVEL_CS_QUESTION_TEMPLATES}

${OCR_ALEVEL_CS_MARK_SCHEME_CONVENTIONS}

${OCR_ALEVEL_CS_REFERENCE_DATA}

${OCR_ALEVEL_CS_WORKED_EXAMPLES}

${topicGuidance}

## Your Task
Create a ${difficulty} difficulty question about "${subtopic}" from the topic "${topic.name}".
The question should be worth ${markRange.min}-${markRange.max} marks.

## Question Requirements
1. **A-Level Standard**: Reflect the depth and rigour of A-Level examination
2. **Authentic OCR Style**: Match OCR paper format and language exactly
3. **Appropriate Difficulty**:
   - Easy: Basic knowledge, definitions, simple application (2-4 marks)
   - Medium: Analysis, algorithm tracing, explanation of concepts (5-10 marks)
   - Hard: Complex algorithm design, evaluation, mathematical proofs, extended response (12-20 marks)
4. **Technical Precision**: Ensure all technical content is accurate
5. **Clear Structure**: Multi-part questions should build logically

## Response Format
Return a JSON object with:
- "content": The question text (use \\n for line breaks, include code in \`\`\` blocks)
- "marks": Total marks for the question
- "solution": Complete mark scheme with mark allocation per point`;
}

/**
 * Returns the question prompt for a specific topic, difficulty, and subtopic.
 */
export function getOCRALevelComputerScienceQuestionPrompt(topic: Topic, difficulty: Difficulty, subtopic: string): string {
  const markRange = getMarkRangeForDifficulty(difficulty);
  const topicGuidance = CS_ALEVEL_TOPIC_GUIDANCE[topic.id] || '';

  const difficultyGuidance = {
    easy: `Create a foundational question testing core knowledge.

**Question Types for Easy (2-4 marks):**
- "Define [term]" [2 marks]
- "State the purpose of [component]" [2 marks]
- "Identify [feature] from [code/diagram]" [2 marks]
- "Convert [number] from [base] to [base]" [2-3 marks]
- "Give two advantages of [technology]" [2 marks]

**Mark Scheme Format:**
- One clear mark point per mark
- Include acceptable alternatives
- Key technical terms required

YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.`,

    medium: `Create a question requiring analysis and application.

**Question Types for Medium (6-9 marks):**
- "Trace the algorithm and show the output when [input]" [4-6 marks]
- "Explain how [data structure/algorithm] works" [4-6 marks]
- "Write a function to [task]" [6-8 marks]
- "Simplify the Boolean expression [expression]" [4-6 marks]
- "Draw a finite state machine for [language]" [4-6 marks]
- "Compare [A] and [B], explaining when each is appropriate" [5-8 marks]
- "Apply [algorithm] to [problem], showing each step" [6-8 marks]

**Mark Scheme Format:**
- Award marks for each correct step/point
- Accept alternative correct solutions
- Accept any reasonable pseudocode or programming syntax
- Note where partial credit applies

YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.`,

    hard: `Create a challenging question requiring evaluation and synthesis.

**Question Types for Hard (12-20 marks):**
- "Write an algorithm to [complex task]" [10-15 marks]
  - May require advanced data structures, recursion, or graph algorithms
- "*Discuss [technical topic]" [12-20 marks - extended response]
- "Design and implement [complex system]" [12-15 marks]
- "Prove/justify [complexity/correctness]" [8-12 marks]
- "Evaluate [approach A vs approach B] for [scenario]" [10-15 marks]

**Mark Scheme Format:**
- For extended response (*): use levels of response (4 levels)
  - Level 4 (16-20): Excellent - comprehensive, accurate, well-structured, evaluative
  - Level 3 (11-15): Good - accurate, clear structure, good coverage
  - Level 2 (6-10): Reasonable - mostly accurate, some structure
  - Level 1 (1-5): Limited - basic points, weak structure
- For algorithms: mark for correctness, efficiency, edge cases
- Include indicative content for extended questions
- Accept any reasonable pseudocode or real language

YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.`
  };

  return `Generate an OCR A-Level Computer Science question.

**Topic**: ${topic.name}
**Subtopic**: ${subtopic}
**Difficulty**: ${difficulty}

${topicGuidance}

${difficultyGuidance[difficulty]}

**Critical Requirements:**
- Accept any clear, unambiguous pseudocode syntax (OCR is flexible)
- Include mark allocation clearly in square brackets [X]
- For extended response questions, mark with asterisk (*)
- Ensure technical accuracy (especially complexity analysis, algorithm correctness)
- Match the rigorous, formal language of real OCR A-Level papers (H446)
- For algorithm questions, include edge cases where appropriate
- For OOP questions, use proper encapsulation and inheritance
- For functional programming, use map/filter/reduce correctly

Return valid JSON:
{
  "content": "question text here",
  "marks": number,
  "solution": "detailed mark scheme here",
  "diagram": <optional DiagramSpec - include when question benefits from visual>
}

${getDiagramDocsForSubject('computerscience')}`;
}

// ============================================================================
// ADDITIONAL PROMPT FUNCTIONS FOR SPECIFIC QUESTION TYPES
// ============================================================================

/**
 * Extended response prompt for 20-mark discussion questions.
 */
export function getOCRALevelExtendedPrompt(topic: Topic, subtopic: string): string {
  return `Generate an OCR A-Level Computer Science EXTENDED RESPONSE question (12-20 marks).

**Topic**: ${topic.name}
**Subtopic**: ${subtopic}

Create a question marked with asterisk (*) requiring deep technical analysis and evaluation.

**Format**: "*[Question number] Discuss..." or "*[Question number] Evaluate..."

**Suitable Topics for Extended Response:**
- Ethical implications of technology
- Comparison of approaches/technologies
- Impact of computing on society
- Design decisions and trade-offs
- Future developments and implications

**Mark scheme must use Levels of Response:**
- **Level 4 (16-20 marks):** Excellent understanding, comprehensive coverage, technically accurate throughout, well-structured logical argument, evaluates and draws reasoned conclusions
- **Level 3 (11-15 marks):** Good understanding, accurate, clear structure, good coverage, some evaluation
- **Level 2 (6-10 marks):** Reasonable understanding, mostly accurate, some structure, covers main points
- **Level 1 (1-5 marks):** Limited understanding, basic points, weak structure
- **0 marks:** Nothing creditworthy

Include detailed indicative content covering multiple aspects of the topic.

Return valid JSON with question text, marks, and detailed mark scheme.`;
}

/**
 * Algorithm implementation prompt.
 */
export function getOCRALevelAlgorithmPrompt(topic: Topic, difficulty: Difficulty, subtopic: string): string {
  const markRange = getMarkRangeForDifficulty(difficulty);

  return `Generate an OCR A-Level Computer Science ALGORITHM question.

**Topic**: ${topic.name}
**Subtopic**: ${subtopic}
**Difficulty**: ${difficulty}

Create a question asking students to write or analyze an algorithm. May involve:
- Graph algorithms (Dijkstra's, A*, DFS, BFS, Prim's, Kruskal's)
- Tree operations (traversals, insertion, deletion, balancing)
- Searching and sorting (with complexity analysis)
- Recursion (including tail recursion)
- Dynamic programming
- Hashing and collision resolution

**Marks**: ${markRange.min}-${markRange.max}

**For Implementation Questions:**
- State required inputs and outputs
- Specify any constraints
- May require handling of edge cases

**Mark scheme should:**
- Award marks for correct logic and structure
- Award marks for efficiency considerations
- Award marks for handling edge cases
- Note: "Accept any reasonable pseudocode or programming syntax"
- Note: "Minor syntax errors acceptable if logic is clear"
- Include a model answer

Return valid JSON with question, model answer, and mark scheme.`;
}

/**
 * Functional programming prompt.
 */
export function getOCRALevelFunctionalPrompt(topic: Topic, subtopic: string): string {
  return `Generate an OCR A-Level Computer Science FUNCTIONAL PROGRAMMING question.

**Topic**: ${topic.name}
**Subtopic**: ${subtopic}

Create a question about functional programming concepts. May include:
- Higher-order functions (map, filter, reduce/fold)
- Function composition
- Partial application and currying
- Lambda expressions/anonymous functions
- Immutability and side effects
- List processing (head, tail, cons)
- Recursion (especially tail recursion)
- Pure functions

**Marks**: 4-8 marks

**Question Types:**
- "Write a function using map/filter/reduce to..."
- "Explain the advantages of immutability"
- "Convert this imperative code to functional style"
- "What is the output of this functional expression?"
- "Explain how partial application works in this example"

**Mark scheme should:**
- Award marks for correct function usage
- Award marks for understanding functional concepts
- Accept Haskell-like, Python-like, or mathematical notation
- Emphasise purity and avoidance of side effects

Return valid JSON with question, expected answer, and mark scheme.`;
}

/**
 * OOP design prompt.
 */
export function getOCRALevelOOPPrompt(topic: Topic, difficulty: Difficulty): string {
  const markRange = getMarkRangeForDifficulty(difficulty);

  return `Generate an OCR A-Level Computer Science OBJECT-ORIENTED PROGRAMMING question.

**Topic**: ${topic.name}
**Difficulty**: ${difficulty}

Create a question about OOP concepts. May include:
- Class design with appropriate encapsulation
- Inheritance hierarchies
- Polymorphism (method overriding)
- Abstract classes and interfaces
- Composition vs inheritance
- Access modifiers (public, private, protected)
- UML class diagrams

**Marks**: ${markRange.min}-${markRange.max}

**Question Types:**
- "Design a class hierarchy for [scenario]"
- "Write classes to implement [system]"
- "Explain how polymorphism is demonstrated in [code]"
- "Add [feature] to the existing class structure"
- "Identify and explain the OOP principles used"

**Mark scheme should:**
- Award marks for correct class structure
- Award marks for appropriate access modifiers
- Award marks for correct use of inheritance
- Award marks for proper encapsulation
- Accept any reasonable pseudocode or programming language
- Include expected class design in solution

Return valid JSON with question, model answer, and mark scheme.`;
}

/**
 * Formal methods prompt (FSM, regular expressions, BNF).
 */
export function getOCRALevelFormalMethodsPrompt(topic: Topic, subtopic: string): string {
  return `Generate an OCR A-Level Computer Science FORMAL METHODS question.

**Topic**: ${topic.name}
**Subtopic**: ${subtopic}

Create a question about formal methods. May include:
- Finite State Machines (Mealy/Moore)
- Regular expressions
- Backus-Naur Form (BNF)
- Syntax diagrams
- Turing machines
- Language recognition

**Marks**: 4-8 marks

**Question Types:**
- "Draw a finite state machine that accepts [language]"
- "Write a regular expression for [pattern]"
- "Write BNF rules for [syntax]"
- "What language is accepted by this FSM?"
- "Trace through the FSM with input [string]"

**Mark scheme should:**
- Award marks for correct notation
- Award marks for completeness (all states/transitions)
- Accept equivalent valid solutions
- For FSM: all states, transitions, and accepting states must be correct
- For regex: accept equivalent expressions

Return valid JSON with clear diagram descriptions where needed.`;
}

/**
 * Graph algorithm prompt (Dijkstra's, A*, DFS, BFS, MST).
 */
export function getOCRALevelGraphPrompt(algorithm: string): string {
  const algorithmDetails: Record<string, string> = {
    dijkstra: `**Dijkstra's Shortest Path Algorithm**
- Find shortest paths from source to all/specific vertices
- Must show step-by-step working
- Table format preferred: show current node, unvisited distances, visited set
- State final distance and path`,

    astar: `**A* Pathfinding Algorithm**
- Include heuristic values (usually given)
- Show f(n) = g(n) + h(n) calculation
- Show open/closed lists at each step
- Explain why heuristic must be admissible`,

    dfs: `**Depth-First Search**
- Show order of nodes visited
- May use stack or recursion
- Show backtracking where it occurs
- May ask for applications (cycle detection, topological sort)`,

    bfs: `**Breadth-First Search**
- Show order of nodes visited
- Use queue
- May ask for shortest path in unweighted graph
- Show queue contents at each step`,

    prim: `**Prim's Algorithm (MST)**
- Start from given vertex
- Show edges added at each step
- Show vertex being added to MST
- Calculate total weight`,

    kruskal: `**Kruskal's Algorithm (MST)**
- Sort edges by weight first
- Use union-find to detect cycles
- Show edges added/rejected
- Calculate total weight`
  };

  const detail = algorithmDetails[algorithm] || algorithmDetails.dijkstra;

  return `Generate an OCR A-Level Computer Science GRAPH ALGORITHM question.

${detail}

**Marks**: 8-12 marks

**Question Format:**
- Provide graph (adjacency list/matrix or diagram)
- Specify start/end nodes
- Ask for step-by-step execution
- May ask for complexity analysis

**Mark scheme should:**
- Award marks for correct initialisation
- Award marks for each correctly processed node
- Award marks for correct final answer
- Award marks for correct path/tree if applicable
- Penalise procedural errors that affect subsequent steps
- Accept alternative valid orderings where appropriate

Return valid JSON with graph representation in question and detailed solution showing each step.`;
}

/**
 * Complexity analysis prompt.
 */
export function getOCRALevelComplexityPrompt(difficulty: Difficulty): string {
  const markRange = getMarkRangeForDifficulty(difficulty);

  return `Generate an OCR A-Level Computer Science COMPLEXITY ANALYSIS question.

**Difficulty**: ${difficulty}

Create a question about algorithmic complexity. May include:
- Stating Big O for given algorithm
- Justifying complexity claims
- Comparing algorithms
- Best/average/worst case analysis
- Space complexity
- Amortised analysis

**Marks**: ${markRange.min}-${markRange.max}

**For Easy:**
- "State the time complexity of [algorithm]" [2]
- Identify complexity of simple code

**For Medium:**
- "State and justify the time complexity" [4-6]
- Compare complexities of two approaches
- Analyze given pseudocode

**For Hard:**
- Prove complexity of algorithm [8-12]
- Derive recurrence relation for recursive algorithm
- Analyze complex nested operations
- Discuss space/time trade-offs

**Mark scheme should:**
- Require correct Big O notation
- Award marks for justification (what operations dominate)
- Accept equivalent notations
- For comparisons, require specific scenarios

Return valid JSON.`;
}

/**
 * Boolean algebra simplification prompt.
 */
export function getOCRALevelBooleanPrompt(difficulty: Difficulty): string {
  const markRange = getMarkRangeForDifficulty(difficulty);

  return `Generate an OCR A-Level Computer Science BOOLEAN ALGEBRA question.

**Difficulty**: ${difficulty}

Create a question about Boolean algebra. May include:
- Simplifying expressions using laws
- Karnaugh maps (2, 3, or 4 variables)
- Converting between expression and circuit
- Truth table completion
- Proving equivalence of expressions

**For Easy (${difficulty === 'easy' ? 'REQUIRED' : 'optional'}):**
- Simple truth table completion [2-3 marks]
- Identify gate outputs [2 marks]

**For Medium (${difficulty === 'medium' ? 'REQUIRED' : 'optional'}):**
- Simplify using Boolean laws [4-5 marks]
- 2-3 variable K-map [4-5 marks]

**For Hard (${difficulty === 'hard' ? 'REQUIRED' : 'optional'}):**
- 4-variable K-map simplification [6-8 marks]
- Derive minimal expression [6-8 marks]
- Design circuit from specification [6-8 marks]

**Marks**: ${markRange.min}-${markRange.max}

**Mark Scheme:**
- Award marks for correct application of laws
- For K-maps: correct grouping, correct reading of groups
- Accept equivalent simplified forms
- Show all working for full marks

Return valid JSON with expression and step-by-step solution.`;
}
