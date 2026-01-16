// Edexcel GCSE Computer Science (1CP2) Question Generation Prompts
// Comprehensive prompts based on analysis of actual Edexcel/Pearson past papers
// and official mark schemes (June 2022, 2023, 2024)
// Reference: https://qualifications.pearson.com/en/qualifications/edexcel-gcses/computer-science-2020.html

import { Difficulty, Topic } from '@/types';
import { getMarkRangeForDifficulty, getDiagramDocsForSubject } from './prompts-common';

// ============================================================================
// EDEXCEL GCSE COMPUTER SCIENCE SPECIFICATION DETAILS (1CP2)
// Based on official Pearson Edexcel specification and past paper analysis
// ============================================================================

const EDEXCEL_CS_ASSESSMENT_OBJECTIVES = `
## Edexcel GCSE Computer Science Assessment Objectives

| Objective | Description | Weighting |
|-----------|-------------|-----------|
| **AO1** | Demonstrate knowledge and understanding of the key concepts and principles of computer science | 35% |
| **AO2** | Apply knowledge and understanding of key concepts and principles of computer science | 40% |
| **AO3** | Analyse problems in computational terms to make reasoned judgements and design, program, evaluate and refine solutions | 25% |

### Paper Structure (Total: 150 marks)
| Paper | Content | Time | Marks | Weighting |
|-------|---------|------|-------|-----------|
| **Paper 1** (1CP2/01) | Principles of Computer Science - Topics 1-5 | 1h 30m | 75 | 50% |
| **Paper 2** (1CP2/02) | Application of Computational Thinking - Topic 6 | 2h | 75 | 50% |

### Paper 1 Topics (Written exam - externally marked)
- Topic 1: Computational thinking (algorithms, flowcharts, pseudocode, searching, sorting, Boolean logic)
- Topic 2: Data (binary, hexadecimal, data representation, compression)
- Topic 3: Computers (hardware, software, CPU, storage, programming languages)
- Topic 4: Networks (types, topologies, protocols, security)
- Topic 5: Issues and impact (security threats, legislation, ethics, environment)

### Paper 2 (On-screen exam - Python 3)
- Topic 6: Problem solving with programming
- Practical programming tasks using Python 3
- Pre-release skeleton code provided before exam
- Questions use REAL Python syntax (NOT pseudocode)
- Students write, modify, and debug Python code on screen

### Key Differentiators from Other Boards
- **Python 3 is the ONLY programming language used** (not pseudocode like AQA)
- Paper 2 is completed on computer (not handwritten)
- Questions are scenario-based with real-world contexts
- Pre-release material available before exam
- No coursework component - 100% exam assessed
`;

const EDEXCEL_CS_PYTHON_REFERENCE = `
## Edexcel GCSE Computer Science Python Reference

**CRITICAL**: Edexcel uses **actual Python 3 syntax** - NOT pseudocode.
All programming questions must use valid Python 3 code.

### Data Types and Variables
\`\`\`python
# Variable declaration and assignment
integer_var = 42              # Integer
floating_var = 3.14           # Float/Real
string_var = "Hello"          # String (single or double quotes)
boolean_var = True            # Boolean (True/False - capitalised)
character = 'A'               # Character (single char in string)

# Constants (by convention - uppercase)
PI = 3.14159
MAX_SCORE = 100
\`\`\`

### Type Casting (IMPORTANT - frequently tested)
\`\`\`python
# String to number
age = int(input("Enter age: "))        # String to integer
price = float(input("Enter price: "))  # String to float

# Number to string
text = str(42)                         # Integer to string
text = str(3.14)                       # Float to string

# Between number types
whole = int(3.7)                       # Float to integer (truncates to 3)
decimal = float(5)                     # Integer to float (5.0)
\`\`\`

### Input/Output
\`\`\`python
# Output
print("Hello")                         # Simple output
print("Hello", name)                   # Multiple items (space separated)
print("Hello " + name)                 # Concatenation
print(f"Hello {name}")                 # f-string (formatted string)
print("Score:", score, end="")         # No newline at end

# Input (ALWAYS returns a string)
name = input("Enter your name: ")      # Returns string
age = int(input("Enter age: "))        # Convert to integer
price = float(input("Enter price: "))  # Convert to float
\`\`\`

### Arithmetic Operators (Edexcel order of precedence)
\`\`\`python
# Standard operators
x = 5 + 3    # Addition (8)
x = 5 - 3    # Subtraction (2)
x = 5 * 3    # Multiplication (15)
x = 5 / 3    # Division (1.666...) - ALWAYS returns float
x = 5 // 3   # Integer division (1) - Floor division
x = 5 % 3    # Modulo/Remainder (2)
x = 5 ** 3   # Exponentiation (125) - Power

# Order of precedence (BIDMAS/BODMAS applies):
# 1. Brackets ()
# 2. Exponentiation **
# 3. Multiplication *, Division /, Integer division //, Modulo %
# 4. Addition +, Subtraction -
\`\`\`

### Comparison Operators
\`\`\`python
x == y    # Equal to
x != y    # Not equal to
x < y     # Less than
x > y     # Greater than
x <= y    # Less than or equal to
x >= y    # Greater than or equal to
\`\`\`

### Boolean/Logical Operators
\`\`\`python
# Boolean operators (lowercase in Python)
and       # Both conditions must be True
or        # At least one condition must be True
not       # Reverses the condition

# Examples
if age >= 18 and age <= 65:
    print("Working age")

if score < 0 or score > 100:
    print("Invalid score")

if not valid:
    print("Not valid")
\`\`\`

### Selection (IF Statements)
\`\`\`python
# Simple if
if condition:
    statements

# If-else
if condition:
    statements
else:
    statements

# If-elif-else (can have multiple elif)
if condition1:
    statements
elif condition2:
    statements
elif condition3:
    statements
else:
    statements

# Nested if (if inside if)
if condition1:
    if condition2:
        statements
\`\`\`

### Iteration (Loops)

\`\`\`python
# FOR loop - count-controlled (definite iteration)
for i in range(10):            # 0, 1, 2, ..., 9 (10 times)
    statements

for i in range(1, 11):         # 1, 2, 3, ..., 10
    statements

for i in range(0, 10, 2):      # 0, 2, 4, 6, 8 (step of 2)
    statements

for i in range(10, 0, -1):     # 10, 9, 8, ..., 1 (countdown)
    statements

for char in string:            # Iterate through each character
    print(char)

for item in myList:            # Iterate through each item
    print(item)

# WHILE loop - condition-controlled (indefinite iteration)
while condition:
    statements

# Example: input validation (very common pattern)
number = int(input("Enter a positive number: "))
while number <= 0:
    print("Invalid! Must be positive.")
    number = int(input("Enter a positive number: "))

# Nested loops
for i in range(3):
    for j in range(3):
        print(i, j)
\`\`\`

### Lists (1D Arrays)
\`\`\`python
# Creating lists
myList = []                    # Empty list
myList = [1, 2, 3, 4, 5]      # List with values
names = ["Alice", "Bob"]       # List of strings

# Accessing elements (0-indexed)
myList[0]                      # First element
myList[-1]                     # Last element
myList[2]                      # Third element (index 2)

# Modifying elements
myList[0] = 10                 # Change first element

# List methods
myList.append(6)               # Add to end
myList.insert(0, 0)            # Insert at index
myList.remove(3)               # Remove first occurrence of value
myList.pop()                   # Remove and return last item
myList.pop(0)                  # Remove and return item at index
len(myList)                    # Length of list

# List operations
myList + [7, 8]                # Concatenation
myList * 2                     # Repetition
3 in myList                    # Membership test (True/False)

# Iterating through list
for item in myList:
    print(item)

for i in range(len(myList)):
    print(myList[i])
\`\`\`

### 2D Lists (2D Arrays)
\`\`\`python
# Creating 2D list (list of lists)
grid = [[1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]]

# Accessing elements
grid[0][0]                     # First row, first column (1)
grid[1][2]                     # Second row, third column (6)
grid[2][1]                     # Third row, second column (8)

# Iterating through 2D list
for row in grid:
    for item in row:
        print(item)

# Using indices
for i in range(len(grid)):
    for j in range(len(grid[i])):
        print(grid[i][j])
\`\`\`

### String Operations (Frequently tested)
\`\`\`python
# String basics
text = "Hello World"

# Length
len(text)                      # 11

# Indexing (0-indexed)
text[0]                        # 'H'
text[-1]                       # 'd'
text[6]                        # 'W'

# Slicing [start:end:step]
text[0:5]                      # "Hello" (indices 0-4)
text[6:]                       # "World" (from index 6 to end)
text[:5]                       # "Hello" (from start to index 4)
text[::2]                      # "HloWrd" (every 2nd character)
text[::-1]                     # "dlroW olleH" (reversed)

# String methods
text.upper()                   # "HELLO WORLD"
text.lower()                   # "hello world"
text.find("World")             # 6 (index where found, -1 if not)
text.replace("World", "Python")# "Hello Python"
text.split(" ")                # ["Hello", "World"]
text.strip()                   # Remove leading/trailing whitespace
text.count("l")                # 3 (count occurrences)
text.startswith("Hello")       # True
text.endswith("World")         # True
text.isdigit()                 # False (True if all digits)
text.isalpha()                 # False (True if all letters)

# Concatenation
greeting = "Hello " + "World"  # "Hello World"

# String traversal
for char in text:
    print(char)
\`\`\`

### ASCII Conversion (Frequently tested)
\`\`\`python
# Character to ASCII code
ord("A")                       # 65
ord("a")                       # 97
ord("0")                       # 48

# ASCII code to character
chr(65)                        # "A"
chr(97)                        # "a"
chr(48)                        # "0"

# Common ASCII ranges (MUST MEMORISE):
# 'A'-'Z' = 65-90
# 'a'-'z' = 97-122
# '0'-'9' = 48-57
# Space = 32

# Example: Simple Caesar cipher shift
char = "A"
shifted = chr(ord(char) + 3)   # "D"
\`\`\`

### File Handling
\`\`\`python
# Opening files - modes: "r" (read), "w" (write), "a" (append)
file = open("filename.txt", "r")   # Open for reading
file = open("filename.txt", "w")   # Open for writing (overwrites!)
file = open("filename.txt", "a")   # Open for appending

# Reading from file
data = file.read()                 # Read entire file as string
line = file.readline()             # Read one line
lines = file.readlines()           # Read all lines into list

# Writing to file
file.write("Hello World")          # Write string (no newline added)
file.write("Line 1\\n")             # Write with newline

# Closing file (IMPORTANT!)
file.close()

# Best practice: using 'with' (auto-closes)
with open("filename.txt", "r") as file:
    data = file.read()
# File automatically closed after with block

# Reading line by line
with open("filename.txt", "r") as file:
    for line in file:
        print(line.strip())        # strip() removes newline
\`\`\`

### Functions (Subroutines)
\`\`\`python
# Function with no parameters, no return
def greet():
    print("Hello!")

# Function with parameters
def greet(name):
    print("Hello " + name)

# Function with return value
def add(a, b):
    return a + b

# Function with multiple parameters and return
def calculate_area(width, height):
    area = width * height
    return area

# Calling functions
greet()                        # Call function with no args
greet("Alice")                 # Call with argument
result = add(5, 3)             # Call and store return value
print(calculate_area(4, 5))    # Call and use return value directly

# Local vs Global variables
total = 0                      # Global variable

def add_to_total(value):
    global total               # Access global variable
    total = total + value

# Parameters are local to the function
def example(x):                # x is local to this function
    y = x * 2                  # y is also local
    return y
\`\`\`

### Random Module
\`\`\`python
import random

# Random integer (inclusive of both endpoints)
random.randint(1, 10)          # Random integer 1-10

# Random float
random.random()                # Random float 0.0 to 1.0

# Random choice from list
random.choice(myList)          # Random element from list

# Shuffle list in place
random.shuffle(myList)         # Modifies original list

# Random sample (without replacement)
random.sample(myList, 3)       # 3 random unique elements
\`\`\`

### Common Built-in Functions
\`\`\`python
# Type conversion
int("42")                      # String to integer (42)
float("3.14")                  # String to float (3.14)
str(42)                        # Number to string ("42")
bool(1)                        # To boolean (True)

# Numeric functions
abs(-5)                        # Absolute value (5)
round(3.14159, 2)              # Round to 2 decimal places (3.14)
min(1, 2, 3)                   # Minimum value (1)
max(1, 2, 3)                   # Maximum value (3)
sum([1, 2, 3])                 # Sum of list (6)

# Sequence functions
len("Hello")                   # Length (5)
len([1, 2, 3])                 # Length (3)
range(5)                       # Creates range 0-4
sorted([3, 1, 2])              # Returns sorted list [1, 2, 3]
reversed([1, 2, 3])            # Returns reversed iterator
\`\`\`
`;

const EDEXCEL_CS_SQL_REFERENCE = `
## Edexcel GCSE Computer Science SQL Reference

SQL (Structured Query Language) is used to query and manipulate databases.
Edexcel tests basic SQL commands - SELECT, INSERT, UPDATE, DELETE.

### Database Structure Terms
- **Table**: A collection of related data organised in rows and columns
- **Record**: A single row in a table (one complete entry)
- **Field**: A single column in a table (one attribute)
- **Primary Key**: Unique identifier for each record
- **Foreign Key**: A field that links to the primary key of another table

### SELECT Statement (Retrieving data)
\`\`\`sql
-- Basic SELECT
SELECT * FROM Students
-- Returns ALL fields from Students table

SELECT firstName, lastName FROM Students
-- Returns only specified fields

-- WHERE clause (filtering)
SELECT * FROM Students WHERE age > 16
SELECT * FROM Students WHERE firstName = 'John'
SELECT * FROM Students WHERE year = 11 AND gender = 'F'
SELECT * FROM Students WHERE year = 10 OR year = 11

-- Comparison operators in WHERE:
-- =, <, >, <=, >=, <> (not equal)

-- ORDER BY (sorting results)
SELECT * FROM Students ORDER BY lastName
-- Ascending order (A-Z, 0-9) - default

SELECT * FROM Students ORDER BY lastName ASC
-- Explicitly ascending

SELECT * FROM Students ORDER BY age DESC
-- Descending order (Z-A, 9-0)

SELECT * FROM Students ORDER BY year ASC, lastName ASC
-- Multiple sort criteria

-- LIKE with wildcards (pattern matching)
SELECT * FROM Students WHERE firstName LIKE 'J%'
-- Names starting with J

SELECT * FROM Students WHERE lastName LIKE '%son'
-- Names ending with 'son'

SELECT * FROM Students WHERE email LIKE '%@gmail.com'
-- Gmail addresses

-- Wildcard characters:
-- % = zero or more characters
-- _ = exactly one character
\`\`\`

### INSERT Statement (Adding data)
\`\`\`sql
-- Insert complete record
INSERT INTO Students (studentID, firstName, lastName, year, age)
VALUES (101, 'John', 'Smith', 10, 15)

-- Insert specific fields only (others get default/NULL)
INSERT INTO Students (firstName, lastName)
VALUES ('Jane', 'Doe')
\`\`\`

### UPDATE Statement (Modifying data)
\`\`\`sql
-- Update specific record(s)
UPDATE Students SET year = 11 WHERE studentID = 101

-- Update multiple fields
UPDATE Students SET year = 11, age = 16 WHERE studentID = 101

-- Update multiple records
UPDATE Students SET year = 11 WHERE year = 10

-- CAUTION: Without WHERE, updates ALL records!
UPDATE Students SET year = 11
-- This would set ALL students to year 11
\`\`\`

### DELETE Statement (Removing data)
\`\`\`sql
-- Delete specific record(s)
DELETE FROM Students WHERE studentID = 101

-- Delete multiple records
DELETE FROM Students WHERE year = 13

-- CAUTION: Without WHERE, deletes ALL records!
DELETE FROM Students
-- This would delete ALL students
\`\`\`

### SQL Example Questions (Edexcel Style)

**Example Database: Students**
| studentID | firstName | lastName | year | age | form |
|-----------|-----------|----------|------|-----|------|
| 1         | Alice     | Brown    | 10   | 15  | 10A  |
| 2         | Bob       | Carter   | 11   | 16  | 11B  |
| 3         | Charlie   | Davis    | 10   | 15  | 10C  |

**Q1:** Write an SQL query to display the first name and last name of all students in year 10.
\`\`\`sql
SELECT firstName, lastName FROM Students WHERE year = 10
\`\`\`

**Q2:** Write an SQL query to add a new student.
\`\`\`sql
INSERT INTO Students (studentID, firstName, lastName, year, age, form)
VALUES (4, 'Diana', 'Evans', 11, 16, '11A')
\`\`\`

**Q3:** Write an SQL query to update Bob's year to 12.
\`\`\`sql
UPDATE Students SET year = 12 WHERE firstName = 'Bob' AND lastName = 'Carter'
\`\`\`

**Q4:** Write an SQL query to delete all year 10 students.
\`\`\`sql
DELETE FROM Students WHERE year = 10
\`\`\`
`;

const EDEXCEL_CS_ALGORITHMS_REFERENCE = `
## Edexcel GCSE Computer Science - Algorithms Reference

### Computational Thinking

**Decomposition**: Breaking down a complex problem into smaller, manageable sub-problems
- Example: Making a game = design graphics + code movement + create sound + handle scoring

**Abstraction**: Removing unnecessary detail to focus on important aspects
- Example: A map doesn't show every tree, just roads and landmarks

**Pattern Recognition**: Identifying similarities or patterns in problems
- Example: Recognising that sorting names and sorting numbers use the same algorithms

**Algorithmic Thinking**: Creating step-by-step solutions to problems
- Expressed through flowcharts, pseudocode, or program code

### Flowchart Symbols (MUST MEMORISE)

| Symbol | Name | Purpose |
|--------|------|---------|
| Oval/Rounded rectangle | Terminator | Start or End of algorithm |
| Rectangle | Process | Action or calculation |
| Parallelogram | Input/Output | Data input or output |
| Diamond | Decision | Yes/No question (selection) |
| Arrow | Flow line | Direction of flow |

**Flowchart Rules:**
- One start, can have multiple ends
- Arrows show direction (usually top to bottom, left to right)
- Decisions have exactly TWO exits (Yes/No or True/False)
- Every path must lead to an endpoint

### Trace Tables

A trace table shows how variable values change as an algorithm executes.

**Example Algorithm:**
\`\`\`python
x = 5
y = 3
while x > 0:
    y = y + x
    x = x - 1
\`\`\`

**Trace Table:**
| x | y | x > 0 |
|---|---|-------|
| 5 | 3 | True  |
| 4 | 8 | True  |
| 3 | 12| True  |
| 2 | 15| True  |
| 1 | 17| True  |
| 0 | 18| False |

**Final values:** x = 0, y = 18

### Searching Algorithms

#### Linear Search
- Checks each element one by one from start to end
- Works on unsorted or sorted lists
- **Time complexity:** O(n) - worst case checks all n elements

\`\`\`python
def linear_search(myList, target):
    for i in range(len(myList)):
        if myList[i] == target:
            return i    # Found - return index
    return -1           # Not found
\`\`\`

**Advantages:**
- Simple to implement
- Works on unsorted data
- Efficient for small lists

**Disadvantages:**
- Slow for large lists
- Must check every element in worst case

#### Binary Search
- Repeatedly divides list in half
- **REQUIRES SORTED DATA**
- **Time complexity:** O(log n) - much faster for large lists

\`\`\`python
def binary_search(myList, target):
    low = 0
    high = len(myList) - 1

    while low <= high:
        mid = (low + high) // 2
        if myList[mid] == target:
            return mid      # Found
        elif myList[mid] < target:
            low = mid + 1   # Search right half
        else:
            high = mid - 1  # Search left half

    return -1               # Not found
\`\`\`

**Advantages:**
- Very fast for large sorted lists
- Efficient - eliminates half the data each step

**Disadvantages:**
- Only works on sorted data
- More complex to implement
- Sorting first may not be worth it for small lists

**Comparison Table:**
| Factor | Linear Search | Binary Search |
|--------|---------------|---------------|
| Data must be sorted | No | Yes |
| Best case | O(1) - first element | O(1) - middle element |
| Worst case | O(n) | O(log n) |
| Average case | O(n/2) | O(log n) |
| 1000 items (worst) | 1000 comparisons | 10 comparisons |

### Sorting Algorithms

#### Bubble Sort
- Compares adjacent pairs and swaps if in wrong order
- Repeats until no swaps needed
- **Time complexity:** O(n^2)

\`\`\`python
def bubble_sort(myList):
    n = len(myList)
    for i in range(n - 1):
        swapped = False
        for j in range(n - 1 - i):
            if myList[j] > myList[j + 1]:
                # Swap elements
                myList[j], myList[j + 1] = myList[j + 1], myList[j]
                swapped = True
        if not swapped:
            break  # Already sorted
    return myList
\`\`\`

**Advantages:**
- Simple to understand and implement
- Efficient for nearly sorted data
- In-place (no extra memory needed)

**Disadvantages:**
- Very slow for large lists
- Many comparisons and swaps

#### Merge Sort
- Divide and conquer approach
- Splits list into halves recursively, then merges in order
- **Time complexity:** O(n log n)

\`\`\`python
def merge_sort(myList):
    if len(myList) <= 1:
        return myList

    # Split into halves
    mid = len(myList) // 2
    left = merge_sort(myList[:mid])
    right = merge_sort(myList[mid:])

    # Merge sorted halves
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

**Advantages:**
- Consistent O(n log n) performance
- Efficient for large lists
- Stable sort (maintains relative order of equal elements)

**Disadvantages:**
- Uses extra memory for merging
- More complex to implement
- Overhead for small lists

#### Insertion Sort
- Builds sorted list one element at a time
- Takes each element and inserts it in correct position
- **Time complexity:** O(n^2) worst, O(n) best (nearly sorted)

\`\`\`python
def insertion_sort(myList):
    for i in range(1, len(myList)):
        key = myList[i]
        j = i - 1
        while j >= 0 and myList[j] > key:
            myList[j + 1] = myList[j]
            j -= 1
        myList[j + 1] = key
    return myList
\`\`\`

**Advantages:**
- Simple to implement
- Efficient for small lists
- Very efficient for nearly sorted data
- In-place (no extra memory)
- Stable sort

**Disadvantages:**
- Slow for large unsorted lists
- O(n^2) worst case

**Sorting Algorithms Comparison:**
| Factor | Bubble Sort | Merge Sort | Insertion Sort |
|--------|-------------|------------|----------------|
| Best case | O(n) | O(n log n) | O(n) |
| Average case | O(n^2) | O(n log n) | O(n^2) |
| Worst case | O(n^2) | O(n log n) | O(n^2) |
| Space | O(1) | O(n) | O(1) |
| Stable | Yes | Yes | Yes |
| Best for | Small/nearly sorted | Large lists | Small/nearly sorted |
`;

const EDEXCEL_CS_DATA_REPRESENTATION = `
## Edexcel GCSE Computer Science - Data Representation

### Number Systems

**Binary (Base 2):** Uses digits 0 and 1
- Used by computers because they use electrical signals (on/off)
- Each digit is called a "bit"

**Denary (Base 10):** Uses digits 0-9
- Standard human counting system

**Hexadecimal (Base 16):** Uses digits 0-9 and A-F
- A=10, B=11, C=12, D=13, E=14, F=15
- Used as shorthand for binary (1 hex digit = 4 bits)

### 8-bit Place Values (MEMORISE)
| 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |
|-----|----|----|----|----|---|---|---|
| 2^7 | 2^6 | 2^5 | 2^4 | 2^3 | 2^2 | 2^1 | 2^0 |

### Binary to Denary Conversion
**Method:** Add place values where there is a 1

**Example:** Convert 10110101 to denary
| 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |
|-----|----|----|----|----|---|---|---|
| 1   | 0  | 1  | 1  | 0  | 1 | 0 | 1 |

128 + 32 + 16 + 4 + 1 = **181**

### Denary to Binary Conversion
**Method 1 (Division):** Repeatedly divide by 2, record remainders

**Example:** Convert 45 to binary
- 45 / 2 = 22 remainder 1
- 22 / 2 = 11 remainder 0
- 11 / 2 = 5 remainder 1
- 5 / 2 = 2 remainder 1
- 2 / 2 = 1 remainder 0
- 1 / 2 = 0 remainder 1

Read remainders bottom to top: **101101**

**Method 2 (Subtraction):** Subtract largest place values

**Example:** Convert 45 to binary
| 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |
|-----|----|----|----|----|---|---|---|
| 0   | 0  | 1  | 0  | 1  | 1 | 0 | 1 |

45 - 32 = 13, 13 - 8 = 5, 5 - 4 = 1, 1 - 1 = 0
Answer: **00101101** (or 101101)

### Binary to Hexadecimal Conversion
**Method:** Split into groups of 4 bits, convert each group

**Example:** Convert 10110101 to hexadecimal
- Split: 1011 | 0101
- 1011 = 8+2+1 = 11 = B
- 0101 = 4+1 = 5 = 5
- Answer: **B5**

**Hex digits table:**
| Binary | Denary | Hex |
|--------|--------|-----|
| 0000   | 0      | 0   |
| 0001   | 1      | 1   |
| 0010   | 2      | 2   |
| 0011   | 3      | 3   |
| 0100   | 4      | 4   |
| 0101   | 5      | 5   |
| 0110   | 6      | 6   |
| 0111   | 7      | 7   |
| 1000   | 8      | 8   |
| 1001   | 9      | 9   |
| 1010   | 10     | A   |
| 1011   | 11     | B   |
| 1100   | 12     | C   |
| 1101   | 13     | D   |
| 1110   | 14     | E   |
| 1111   | 15     | F   |

### Binary Arithmetic

#### Binary Addition
Rules:
- 0 + 0 = 0
- 0 + 1 = 1
- 1 + 0 = 1
- 1 + 1 = 10 (0, carry 1)
- 1 + 1 + 1 = 11 (1, carry 1)

**Example:** 00110101 + 00011011
\`\`\`
    00110101
  + 00011011
  ----------
    01010000
\`\`\`

#### Overflow
- Occurs when result exceeds available bits
- Example: 11111111 + 00000001 in 8-bit = 100000000 (9 bits needed)
- The extra bit is lost, causing incorrect result

#### Binary Shifts
**Left shift:** Multiply by 2 for each position shifted
- 00001010 << 1 = 00010100 (10 becomes 20)
- 00001010 << 2 = 00101000 (10 becomes 40)

**Right shift:** Divide by 2 for each position shifted (integer division)
- 00101000 >> 1 = 00010100 (40 becomes 20)
- 00101000 >> 2 = 00001010 (40 becomes 10)

### Data Units (Edexcel uses SI/decimal prefixes)
| Unit | Bytes | Bits |
|------|-------|------|
| 1 bit | - | 1 |
| 1 nibble | - | 4 |
| 1 byte | 1 | 8 |
| 1 KB (Kilobyte) | 1,000 | 8,000 |
| 1 MB (Megabyte) | 1,000,000 | 8,000,000 |
| 1 GB (Gigabyte) | 1,000,000,000 | 8,000,000,000 |
| 1 TB (Terabyte) | 1,000,000,000,000 | 8,000,000,000,000 |
| 1 PB (Petabyte) | 1,000,000,000,000,000 | - |

### Character Sets

#### ASCII (American Standard Code for Information Interchange)
- 7-bit character encoding (128 characters)
- Extended ASCII uses 8 bits (256 characters)
- Includes: letters, numbers, punctuation, control characters

**Key ASCII values (MEMORISE):**
| Character | Decimal | Binary |
|-----------|---------|--------|
| Space | 32 | 00100000 |
| 0-9 | 48-57 | 00110000-00111001 |
| A-Z | 65-90 | 01000001-01011010 |
| a-z | 97-122 | 01100001-01111010 |

#### Unicode
- Supports all world languages and symbols
- UTF-8: Variable length (1-4 bytes per character)
- UTF-16: 2-4 bytes per character
- UTF-32: Fixed 4 bytes per character
- Backwards compatible with ASCII (first 128 characters identical)

**Why Unicode?**
- ASCII only supports English characters
- Unicode supports Chinese, Arabic, emoji, etc.
- Essential for international software

### Image Representation

**Bitmap images** are made up of pixels (picture elements)

**Key terms:**
- **Resolution:** Number of pixels (width x height)
- **Colour depth:** Number of bits per pixel
- **Metadata:** Data about the image (dimensions, colour depth, etc.)

**Colour depth examples:**
| Colour depth | Colours available |
|--------------|-------------------|
| 1 bit | 2 (black/white) |
| 2 bits | 4 |
| 4 bits | 16 |
| 8 bits | 256 |
| 16 bits | 65,536 |
| 24 bits | 16,777,216 (true colour) |

**File size calculation:**
\`\`\`
File size (bits) = Width x Height x Colour depth
File size (bytes) = (Width x Height x Colour depth) / 8
\`\`\`

**Example:** Calculate the file size of an image 800x600 pixels with 24-bit colour depth.
- Size = 800 x 600 x 24 = 11,520,000 bits
- Size = 11,520,000 / 8 = 1,440,000 bytes
- Size = 1,440,000 / 1,000 = 1,440 KB = 1.44 MB

**Effects of changing settings:**
- Higher resolution: More detail, larger file
- Higher colour depth: More colours, larger file
- Lower resolution: Less detail, smaller file
- Lower colour depth: Fewer colours, smaller file

### Sound Representation

Sound is analogue (continuous wave). Computers store digital (discrete) samples.

**Sampling:** Taking measurements of the sound wave at regular intervals

**Key terms:**
- **Sample rate:** Number of samples per second (Hz)
- **Bit depth:** Number of bits per sample
- **Sample interval:** Time between samples (1/sample rate)

**Common sample rates:**
- 8,000 Hz: Telephone quality
- 22,050 Hz: Radio quality
- 44,100 Hz: CD quality
- 48,000 Hz: DVD/professional

**File size calculation:**
\`\`\`
File size (bits) = Sample rate x Bit depth x Duration (seconds) x Channels
\`\`\`
Channels: 1 = mono, 2 = stereo

**Example:** Calculate file size for 30 seconds of stereo audio at 44,100 Hz with 16-bit depth.
- Size = 44,100 x 16 x 30 x 2 = 42,336,000 bits
- Size = 42,336,000 / 8 = 5,292,000 bytes
- Size = 5,292,000 / 1,000,000 = 5.29 MB

**Effects of changing settings:**
- Higher sample rate: Better quality, larger file
- Higher bit depth: More accurate amplitude, larger file
- Nyquist theorem: Sample rate must be at least 2x highest frequency

### Compression

**Why compress?**
- Reduce file size for storage
- Faster transmission over networks
- Save bandwidth

#### Lossy Compression
- Permanently removes data that is less important
- Smaller files, lower quality
- Cannot recover original data
- **Examples:** JPEG (images), MP3 (audio), MPEG (video)

**How it works:**
- Images: Removes subtle colour variations
- Audio: Removes frequencies humans can't easily hear
- Video: Removes redundant frame data

#### Lossless Compression
- No data is permanently lost
- Original can be perfectly reconstructed
- Larger files than lossy
- **Examples:** PNG, GIF (images), FLAC (audio), ZIP (files)

**Techniques:**

**Run-Length Encoding (RLE):**
- Replaces sequences of repeated data with count + value
- Example: AAAAAABBBCC becomes 6A3B2C
- Good for: Simple images with large areas of same colour

**Dictionary Compression:**
- Creates dictionary of common patterns
- Replaces patterns with shorter codes
- Example: "the" might become code "01"
- Used in: ZIP, LZW compression

**Huffman Coding:**
- Assigns shorter codes to frequent data
- Assigns longer codes to rare data
- Creates optimal prefix-free codes
`;

const EDEXCEL_CS_HARDWARE_SOFTWARE = `
## Edexcel GCSE Computer Science - Hardware and Software

### Hardware vs Software
- **Hardware:** Physical components you can touch (CPU, RAM, keyboard)
- **Software:** Programs and instructions that run on hardware

### Types of Software

#### System Software
Software that manages the computer and provides a platform for applications.

**Operating System (OS):**
- Manages hardware resources
- Provides user interface (GUI/CLI)
- Handles file management
- Controls memory allocation
- Manages security and user accounts
- Examples: Windows, macOS, Linux, Android, iOS

**Utility Software:**
- Performs maintenance tasks
- Examples:
  - Anti-virus: Protects against malware
  - Disk defragmenter: Optimises hard drive
  - Backup software: Creates copies of data
  - Compression software: Reduces file sizes
  - Encryption software: Secures data

#### Application Software
Software that performs specific tasks for users.
- Examples: Word processors, web browsers, games, spreadsheets

### CPU (Central Processing Unit)

The CPU is the "brain" of the computer - it processes instructions.

#### Von Neumann Architecture
- **Key principle:** Programs and data stored in same memory
- Components connected by buses (pathways for data)

#### CPU Components

**ALU (Arithmetic Logic Unit):**
- Performs arithmetic operations (+, -, *, /)
- Performs logic operations (AND, OR, NOT, comparisons)

**Control Unit (CU):**
- Fetches instructions from memory
- Decodes instructions
- Controls execution of instructions
- Coordinates all CPU components

**Cache:**
- Very fast, small memory inside CPU
- Stores frequently used data/instructions
- Faster than RAM (closer to CPU)
- Levels: L1 (fastest, smallest) -> L2 -> L3 (largest, slowest)

#### CPU Registers (Small, fast storage in CPU)

| Register | Full Name | Purpose |
|----------|-----------|---------|
| PC | Program Counter | Holds address of NEXT instruction |
| MAR | Memory Address Register | Holds address of data to be read/written |
| MDR | Memory Data Register | Holds data being transferred to/from memory |
| ACC | Accumulator | Stores results of ALU calculations |
| CIR | Current Instruction Register | Holds instruction currently being executed |

#### Fetch-Decode-Execute Cycle

The CPU continuously repeats this cycle:

**1. FETCH:**
- PC holds address of next instruction
- Address copied from PC to MAR
- MAR sends address to memory via address bus
- Instruction fetched from memory to MDR via data bus
- Instruction copied from MDR to CIR
- PC incremented to point to next instruction

**2. DECODE:**
- Control Unit decodes instruction in CIR
- Determines what operation to perform
- Identifies operands needed

**3. EXECUTE:**
- Control Unit sends signals to relevant components
- ALU performs calculations if needed
- Results stored in ACC or written to memory

#### CPU Performance Factors

| Factor | Description | Effect |
|--------|-------------|--------|
| **Clock Speed** | Number of cycles per second (GHz) | Higher = faster processing |
| **Number of Cores** | Number of independent processing units | More = more parallel tasks |
| **Cache Size** | Amount of fast memory on CPU | Larger = fewer trips to slow RAM |

### Primary Storage (Memory)

| Type | Volatile? | Speed | Purpose |
|------|-----------|-------|---------|
| **RAM** (Random Access Memory) | Yes - loses data when power off | Fast | Holds running programs and data |
| **ROM** (Read Only Memory) | No - keeps data when power off | Medium | Holds boot instructions (BIOS) |

**RAM characteristics:**
- Can be read from and written to
- Volatile (temporary)
- Stores currently used programs and data
- More RAM = run more/larger programs

**ROM characteristics:**
- Usually read-only (some types can be rewritten)
- Non-volatile (permanent)
- Stores BIOS/boot instructions
- Small capacity

**Virtual Memory:**
- Uses hard drive space as extra RAM
- When RAM is full, data moved to hard drive
- Much slower than real RAM
- Causes "thrashing" if overused (constant swapping)

### Secondary Storage

Non-volatile storage for permanent data storage.

#### Magnetic Storage

**Hard Disk Drive (HDD):**
- Spinning metal platters coated with magnetic material
- Read/write heads move across platters
- **Advantages:** High capacity, low cost per GB, proven technology
- **Disadvantages:** Slow (moving parts), fragile, noisy, hot

**Magnetic Tape:**
- Thin plastic strip with magnetic coating
- Sequential access (must read through from start)
- **Advantages:** Huge capacity, very low cost, long lifespan
- **Disadvantages:** Very slow, sequential access only
- **Use:** Archival backup, large-scale data storage

#### Optical Storage

Uses lasers to read/write data via pits and lands on disc surface.

| Type | Capacity | Write capability |
|------|----------|------------------|
| CD | 700 MB | CD-R (write once), CD-RW (rewritable) |
| DVD | 4.7 GB (single layer) | DVD-R, DVD-RW |
| Blu-ray | 25-50 GB | BD-R, BD-RE |

**Advantages:** Cheap, portable, standard format
**Disadvantages:** Limited capacity, easily scratched, slow

#### Solid State Storage

**SSD (Solid State Drive):**
- Uses flash memory (no moving parts)
- **Advantages:** Fast, silent, durable, low power, light
- **Disadvantages:** More expensive per GB, limited write cycles

**Flash Memory / USB Drives:**
- Portable solid state storage
- **Advantages:** Very portable, durable, plug and play
- **Disadvantages:** Small capacity, easily lost

**Storage Comparison:**
| Factor | HDD | SSD | Optical | Tape |
|--------|-----|-----|---------|------|
| Speed | Medium | Very Fast | Slow | Very Slow |
| Capacity | Very High | High | Low | Very High |
| Cost per GB | Low | Medium | Low | Very Low |
| Durability | Low | High | Low | High |
| Portability | Low | Medium | High | Low |
| Power usage | High | Low | Medium | Medium |

### Embedded Systems

A computer system designed for a specific task, built into a larger device.

**Characteristics:**
- Dedicated to specific function
- Limited user interface
- Real-time operation often required
- Low power consumption
- Small and integrated

**Examples:**
- Washing machine controller
- Car engine management system
- Traffic lights
- Smart thermostat
- Digital watch
- Microwave controls
- TV remote control

### Programming Languages

#### High-Level Languages
- Human-readable (like English)
- Portable (runs on different systems)
- One line = many machine instructions
- Examples: Python, Java, C#, JavaScript

**Advantages:**
- Easier to learn and use
- Faster to write programs
- Easier to debug
- Portable across platforms

**Disadvantages:**
- Slower execution (needs translation)
- Less control over hardware
- May use more memory

#### Low-Level Languages

**Assembly Language:**
- Uses mnemonics (short codes like ADD, MOV, JMP)
- One-to-one with machine code instructions
- Processor-specific
- Needs assembler to translate

**Machine Code:**
- Binary instructions (0s and 1s)
- Directly executed by CPU
- Processor-specific

**Advantages:**
- Very fast execution
- Direct hardware control
- Memory efficient

**Disadvantages:**
- Difficult to learn
- Time-consuming to write
- Not portable
- Hard to debug

### Translators

| Translator | Input | Output | How it works |
|------------|-------|--------|--------------|
| **Compiler** | High-level code | Machine code (executable) | Translates entire program at once |
| **Interpreter** | High-level code | Executes directly | Translates line by line as it runs |
| **Assembler** | Assembly language | Machine code | Translates assembly mnemonics |

**Compiler vs Interpreter:**
| Factor | Compiler | Interpreter |
|--------|----------|-------------|
| Speed of execution | Fast (already translated) | Slow (translates during execution) |
| Error detection | All errors found before running | Stops at first error during execution |
| Distribution | Can share executable without source | Must share source code |
| Development | Must recompile after changes | Changes run immediately |
| Memory | Executable loaded to memory | Interpreter always in memory |
`;

const EDEXCEL_CS_NETWORKS = `
## Edexcel GCSE Computer Science - Networks

### Network Types

| Type | Stands For | Coverage | Example |
|------|------------|----------|---------|
| **PAN** | Personal Area Network | Few metres | Bluetooth devices |
| **LAN** | Local Area Network | Single building/site | School network |
| **WAN** | Wide Area Network | Large geographic area | The Internet |

### Network Models

#### Client-Server Network
- Central server provides services
- Clients request resources from server
- Server controls access and security

**Advantages:**
- Centralised security and management
- Centralised backup
- Easy to add new users/devices
- Resources shared efficiently

**Disadvantages:**
- Server is single point of failure
- Expensive server hardware needed
- Requires specialist IT staff

#### Peer-to-Peer (P2P) Network
- All computers are equal (no dedicated server)
- Each computer can share its resources
- Each computer responsible for own security

**Advantages:**
- Cheap to set up
- No specialist knowledge needed
- No server = no single point of failure
- Easy to set up

**Disadvantages:**
- No central security
- Each computer must be maintained
- Harder to backup
- Performance issues as network grows

### Network Hardware

| Device | Purpose |
|--------|---------|
| **NIC** (Network Interface Card) | Allows computer to connect to network; has unique MAC address |
| **Switch** | Connects devices on a LAN; sends data only to intended recipient |
| **Router** | Connects different networks; routes data between networks using IP addresses |
| **WAP** (Wireless Access Point) | Allows wireless devices to connect to wired network |
| **Modem** | Converts digital to analogue signals (and back) for transmission |

### Transmission Media

#### Wired
**Copper Cable (Ethernet):**
- Electrical signals through metal wires
- Cat5, Cat6 cables
- Advantages: Cheap, easy to install
- Disadvantages: Limited distance, interference

**Fibre Optic:**
- Light pulses through glass/plastic fibres
- Advantages: Very fast, long distance, no interference
- Disadvantages: Expensive, fragile, needs specialists

#### Wireless
- Radio waves (WiFi, Bluetooth)
- Advantages: Mobile, no cables, easy to add devices
- Disadvantages: Less secure, slower, interference, limited range

### Network Topologies

#### Star Topology
- All devices connected to central switch/hub
- Most common in modern networks

**Advantages:**
- If one cable fails, others still work
- Easy to add new devices
- Easy to find faults
- Good performance (no collisions)

**Disadvantages:**
- Central switch is single point of failure
- More cable needed than bus
- Switch failure = total network failure

#### Mesh Topology
- Every device connected to every other device
- Full mesh: All devices connected to all others
- Partial mesh: Some devices connected to multiple others

**Advantages:**
- Very reliable (multiple paths)
- No single point of failure
- Can handle high traffic
- Data can take fastest route

**Disadvantages:**
- Expensive (many cables/connections)
- Complex to set up
- Difficult to manage

### The Internet and WWW

**Internet:** Global network of interconnected networks
- Physical infrastructure of cables, routers, servers

**World Wide Web (WWW):** Collection of websites accessible via Internet
- Websites, web pages, hyperlinks
- Accessed via web browsers using HTTP/HTTPS

**DNS (Domain Name System):**
- Translates domain names to IP addresses
- Example: www.google.com -> 142.250.180.36
- Distributed database of domain-IP mappings

**Web Hosting:**
- Storing websites on servers connected to Internet
- Web servers respond to requests for web pages

**Cloud Computing:**
- Storing/accessing data and programs over Internet
- Examples: Google Drive, Dropbox, Office 365

**Advantages of cloud:**
- Access from anywhere
- Automatic backups
- Scalable storage
- Collaboration features

**Disadvantages of cloud:**
- Needs Internet connection
- Privacy/security concerns
- Ongoing subscription costs
- Dependent on provider

### Protocols

A protocol is a set of rules for communication between devices.

| Protocol | Purpose | Port |
|----------|---------|------|
| **TCP/IP** | Foundation protocols of Internet | - |
| **HTTP** | Web page transfer (unsecure) | 80 |
| **HTTPS** | Secure web page transfer | 443 |
| **FTP** | File transfer | 20, 21 |
| **SMTP** | Sending email | 25 |
| **POP3** | Receiving email (downloads) | 110 |
| **IMAP** | Receiving email (server-based) | 143 |

**TCP (Transmission Control Protocol):**
- Breaks data into packets
- Ensures reliable delivery (checks all packets arrive)
- Reorders packets at destination

**IP (Internet Protocol):**
- Addressing and routing
- Each device has unique IP address
- IPv4: 32-bit (e.g., 192.168.1.1)
- IPv6: 128-bit (e.g., 2001:0db8:85a3::8a2e:0370:7334)

### Network Layers

The TCP/IP model has 4 layers:

| Layer | Purpose | Protocols |
|-------|---------|-----------|
| **Application** | User interaction, data formatting | HTTP, FTP, SMTP |
| **Transport** | Breaking data into packets, reliability | TCP, UDP |
| **Network/Internet** | Addressing and routing | IP |
| **Data Link/Network Access** | Physical transmission | Ethernet, WiFi |

**Why use layers?**
- Easier to develop (work on one layer at a time)
- Easier to troubleshoot
- Hardware/software independence
- Standards ensure interoperability

### Packet Switching

Data is split into packets for transmission.

**Packet structure:**
- **Header:** Source/destination IP, packet number, protocol
- **Payload:** The actual data
- **Trailer:** Error checking data

**How it works:**
1. Data split into packets
2. Each packet sent independently
3. Packets may take different routes
4. Packets reassembled at destination
5. Missing packets requested again

**Advantages:**
- Efficient use of network
- Fault tolerant (alternative routes)
- Multiple communications share same lines

**Disadvantages:**
- Overhead from headers
- Packets may arrive out of order
- Not ideal for real-time (streaming)
`;

const EDEXCEL_CS_SECURITY_ISSUES = `
## Edexcel GCSE Computer Science - Security, Issues and Impact

### Security Threats

#### Malware (Malicious Software)

| Type | Description | Effect |
|------|-------------|--------|
| **Virus** | Attaches to files, spreads when file opened | Corrupts files, slows system |
| **Worm** | Self-replicating, spreads via networks | Uses bandwidth, creates backdoors |
| **Trojan** | Disguised as legitimate software | Creates backdoor for hackers |
| **Spyware** | Secretly monitors user activity | Steals personal data, passwords |
| **Ransomware** | Encrypts files, demands payment | Data loss, financial loss |
| **Adware** | Displays unwanted advertisements | Annoyance, slows system |
| **Rootkit** | Hides deep in system, hard to detect | Full system control by attacker |

#### Social Engineering
Manipulating people to reveal confidential information.

| Attack | Method |
|--------|--------|
| **Phishing** | Fake emails/websites pretending to be legitimate |
| **Blagging** | Creating fake scenario to get information |
| **Shouldering** | Looking over someone's shoulder to see passwords |
| **Pharming** | Redirecting users to fake websites |

#### Technical Attacks

| Attack | Description |
|--------|-------------|
| **Brute Force** | Trying every possible password combination |
| **Dictionary Attack** | Trying common words and passwords |
| **DoS/DDoS** | Flooding server with requests to crash it |
| **SQL Injection** | Inserting malicious SQL code via input fields |
| **Man-in-the-Middle** | Intercepting communications between two parties |
| **Data Interception** | Capturing data as it travels over network |

### Preventing Threats

| Protection | Description |
|------------|-------------|
| **Anti-malware** | Detects and removes malicious software |
| **Firewall** | Monitors and filters network traffic |
| **Encryption** | Scrambles data so only authorised can read |
| **Strong Passwords** | Complex, unique passwords that are hard to guess |
| **Two-Factor Authentication (2FA)** | Requires two forms of verification |
| **Biometrics** | Uses unique physical features (fingerprint, face) |
| **User Access Levels** | Limits what each user can access |
| **Penetration Testing** | Ethical hacking to find vulnerabilities |
| **Automatic Updates** | Patches security holes in software |
| **Backup** | Regular copies of data for recovery |
| **Physical Security** | Locks, CCTV, guards for hardware |

**Strong Password Characteristics:**
- At least 8-12 characters
- Mix of uppercase and lowercase
- Contains numbers
- Contains special characters (!@#$%^&*)
- Not a dictionary word
- Not personal information
- Different for each account

**Encryption:**
- Plaintext converted to ciphertext using algorithm and key
- Only those with key can decrypt
- HTTPS uses encryption for web traffic
- End-to-end encryption for messaging

### UK Legislation

#### Data Protection Act 2018 / GDPR
Protects personal data held by organisations.

**Key principles:**
1. Lawfulness, fairness, transparency
2. Purpose limitation (use only for stated purpose)
3. Data minimisation (collect only what's needed)
4. Accuracy (keep data up to date)
5. Storage limitation (don't keep longer than needed)
6. Security (protect against unauthorised access)

**Rights of individuals:**
- Right to access their data
- Right to correct inaccurate data
- Right to delete data ("right to be forgotten")
- Right to object to processing
- Right to data portability

#### Computer Misuse Act 1990
Criminalises unauthorised access to computer systems.

**Offences:**
1. Unauthorised access to computer material (hacking)
2. Unauthorised access with intent to commit further offences
3. Unauthorised modification of computer material (viruses, deleting data)

**Penalties:** Fines and imprisonment

#### Copyright, Designs and Patents Act 1988
Protects creators' intellectual property.

**Covers:**
- Software code
- Music, images, videos
- Written works
- Designs

**Software Licensing:**
- **Proprietary:** Paid, closed source, restricted use
- **Open Source:** Free, source code available, can modify
- **Freeware:** Free to use, but not modify
- **Shareware:** Free trial, pay for full version

### Ethical Issues

**Privacy:**
- Data collection by companies
- Location tracking
- Targeted advertising
- Surveillance and CCTV

**Digital Divide:**
- Gap between those with and without technology access
- Economic, geographic, age-related factors
- Educational disadvantages

**Employment:**
- Automation replacing jobs
- Need for new digital skills
- Remote working opportunities
- Gig economy

**Artificial Intelligence:**
- Bias in AI systems
- Job displacement
- Decision-making transparency
- Autonomous weapons concerns

**Digital Wellbeing:**
- Screen addiction
- Cyberbullying
- Mental health effects
- Sleep disruption

### Environmental Impact

**Negative Impacts:**
- **Energy consumption:** Data centres use massive amounts of electricity
- **E-waste:** Discarded electronics contain hazardous materials
- **Manufacturing:** Resource extraction, carbon emissions
- **Carbon footprint:** Server farms, network infrastructure

**Positive Impacts:**
- **Paperless offices:** Reduce deforestation
- **Remote working:** Reduce commuting emissions
- **Smart systems:** Optimise energy use
- **Monitoring:** Track environmental changes

**Sustainability Measures:**
- Recycling programs for e-waste
- Energy-efficient hardware
- Renewable energy for data centres
- Longer device lifespan (reduce consumption)
- Refurbishment programs
`;

const EDEXCEL_CS_BOOLEAN_LOGIC = `
## Edexcel GCSE Computer Science - Boolean Logic

### Logic Gates

#### AND Gate
- Output is 1 only when ALL inputs are 1
- Symbol: D-shaped with flat back

| A | B | A AND B |
|---|---|---------|
| 0 | 0 | 0 |
| 0 | 1 | 0 |
| 1 | 0 | 0 |
| 1 | 1 | 1 |

#### OR Gate
- Output is 1 when ANY input is 1
- Symbol: Curved back, pointed front

| A | B | A OR B |
|---|---|--------|
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 1 |

#### NOT Gate (Inverter)
- Output is opposite of input
- Symbol: Triangle with circle on output

| A | NOT A |
|---|-------|
| 0 | 1 |
| 1 | 0 |

#### XOR Gate (Exclusive OR)
- Output is 1 when inputs are DIFFERENT
- Symbol: Like OR with extra curved line at back

| A | B | A XOR B |
|---|---|---------|
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 0 |

### Combining Logic Gates

**Example: (A AND B) OR C**

Step-by-step with A=1, B=0, C=1:
1. A AND B = 1 AND 0 = 0
2. Result OR C = 0 OR 1 = 1
3. Final output = 1

**Example: NOT(A OR B) AND C**

With A=0, B=1, C=1:
1. A OR B = 0 OR 1 = 1
2. NOT(result) = NOT 1 = 0
3. Result AND C = 0 AND 1 = 0
4. Final output = 0

### Truth Tables for Combined Gates

**Expression: (A AND B) OR (NOT C)**

| A | B | C | A AND B | NOT C | Output |
|---|---|---|---------|-------|--------|
| 0 | 0 | 0 | 0 | 1 | 1 |
| 0 | 0 | 1 | 0 | 0 | 0 |
| 0 | 1 | 0 | 0 | 1 | 1 |
| 0 | 1 | 1 | 0 | 0 | 0 |
| 1 | 0 | 0 | 0 | 1 | 1 |
| 1 | 0 | 1 | 0 | 0 | 0 |
| 1 | 1 | 0 | 1 | 1 | 1 |
| 1 | 1 | 1 | 1 | 0 | 1 |
`;

const EDEXCEL_CS_MARK_SCHEME_CONVENTIONS = `
## Edexcel Mark Scheme Conventions (From Official Mark Schemes)

### Code Marking (Paper 2)
- **Marks awarded for functionality** - does the code work?
- Alternative correct solutions are always accepted
- Partial marks for partially working code
- Comments not required unless specified
- Variable names can differ if logic is correct
- **MUST use Python 3 syntax** (not pseudocode)

### Testing in Mark Schemes
Mark schemes often include:
- "Execute with test data given in question paper"
- "Execute with negative numbers to check validation"
- "Any input value less than or equal to zero" should be handled

### Mark Scheme Notation
| Symbol | Meaning |
|--------|---------|
| **ao1** | Assessment Objective 1 (knowledge) mark |
| **ao2** | Assessment Objective 2 (application) mark |
| **ao3** | Assessment Objective 3 (analysis) mark |
| **(oe)** | Or equivalent |
| **Accept** | Alternative answer that gains the mark |
| **Do not accept** | Answer that does NOT gain the mark |
| **e.g.** | Example answer |

### Extended Writing (6-8 marks)
Uses levels of response:

**Level 3 (5-6 / 7-8 marks):**
- Clear understanding demonstrated
- Well-structured response
- Accurate use of terminology
- Detailed explanations
- Good range of points

**Level 2 (3-4 / 4-6 marks):**
- Good understanding
- Reasonable structure
- Mostly accurate terminology
- Some detail

**Level 1 (1-2 / 1-3 marks):**
- Basic understanding
- Limited structure
- Some errors in terminology
- Limited detail

### Calculation Questions
- Show working for full marks
- Units required where appropriate
- Correct answer without working may not get full marks for complex calculations
- Method marks may be awarded for correct approach even with arithmetic errors

### Definition Questions (1-2 marks)
- Must include key technical terms
- Context-specific where appropriate
- One mark per valid point

### Common Command Words
| Command | Expected Response |
|---------|-------------------|
| **State** | Brief factual answer |
| **Give** | Single word/short phrase |
| **Describe** | Say what happens, features |
| **Explain** | Give reasons why |
| **Compare** | Similarities and differences |
| **Evaluate** | Weigh up advantages/disadvantages |
| **Discuss** | Consider different viewpoints |
| **Write** | Produce code/query |
| **Complete** | Fill in missing parts |
| **Calculate** | Work out numerical answer |
`;

const EDEXCEL_CS_QUESTION_TEMPLATES = `
## Authentic Edexcel Question Formats (From Past Papers)

### Type 1: Definition Question (1-2 marks)
Format: "Define the term [term]"
OR "What is meant by [term]?"
OR "State what is meant by [term]"

**Example:**
"Define the term 'algorithm'. (2)"

**Mark scheme:**
- A sequence of steps/instructions (1)
- To solve a problem/perform a task (1)

### Type 2: Give/State Question (1-2 marks)
Format: "Give one reason why..."
OR "State two advantages of..."
OR "Give one example of..."

**Example:**
"State two advantages of using a solid state drive (SSD) instead of a hard disk drive (HDD). (2)"

**Mark scheme:**
- Faster access speed (1)
- More durable/no moving parts (1)
- Lower power consumption (1)
- Quieter operation (1)
(Any 2)

### Type 3: Describe Question (2-4 marks)
Format: "Describe the process of..."
OR "Describe how [technology] works"
- Requires step-by-step account

**Example:**
"Describe the fetch-decode-execute cycle. (4)"

**Mark scheme:**
- PC holds address of next instruction (1)
- Instruction fetched from memory (1)
- Instruction decoded by control unit (1)
- Instruction executed/ALU performs operation (1)

### Type 4: Explain Question (2-4 marks)
Format: "Explain how [concept] works"
OR "Explain why [scenario] would..."
- Requires reasons and understanding

**Example:**
"Explain why increasing the sample rate improves the quality of digital sound. (2)"

**Mark scheme:**
- More samples taken per second (1)
- Closer representation of original analogue wave (1)

### Type 5: Python Programming (4-8 marks)
Format: "Write a Python program that..."
- Clear inputs and outputs specified
- May include validation requirements
- Part of Paper 2 (on-screen)

**Example:**
"Write a Python program that:
- asks the user to enter a number
- validates the number is positive
- outputs whether the number is odd or even
(6)"

**Mark scheme:**
- Correct input with appropriate prompt (1)
- Loop for validation (1)
- Correct validation condition (1)
- Appropriate error message (1)
- Correct odd/even check using MOD (1)
- Correct output (1)

### Type 6: Code Analysis (2-4 marks)
Format: "State what will be displayed when the following code is executed with [input]"
OR "Complete the trace table for this code"
- Given Python code snippet
- Specific input values

### Type 7: Code Completion (2-4 marks)
Format: "Complete the code to..."
- Given partial Python code
- Fill in blanks or add lines

### Type 8: Extended Response (6-8 marks)
Format: "Discuss the [ethical/social/economic] implications of..."
OR "Evaluate the use of [technology] for [purpose]"
- Uses levels of response marking
- Requires balanced argument

**Example:**
"Discuss the environmental impact of the increasing use of computer technology. (8)"

### Type 9: Calculation (2-4 marks)
Format: "Calculate the file size of..."
OR "Convert [number] from [base] to [base]"
- Show working required

**Example:**
"Calculate the file size in megabytes of an image with resolution 1920 x 1080 pixels and 24-bit colour depth. Show your working. (3)"

**Mark scheme:**
- 1920 x 1080 x 24 = 49,766,400 bits (1)
- / 8 = 6,220,800 bytes (1)
- / 1,000,000 = 6.22 MB (1)

### Type 10: SQL Query (2-4 marks)
Format: "Write an SQL query to..."
- SELECT, INSERT, UPDATE, DELETE queries

**Example:**
"Write an SQL query to display the first name and last name of all customers from London, ordered by last name. (3)"

**Mark scheme:**
\`\`\`sql
SELECT firstName, lastName (1)
FROM Customers (1)
WHERE city = 'London' (1)
ORDER BY lastName (1)
\`\`\`
(Max 3 marks)
`;

const EDEXCEL_CS_WORKED_EXAMPLES = `
## Worked Examples

### Example 1: Binary to Denary Conversion
**Q:** Convert the binary number 11010110 to denary. (2)

**Working:**
| 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |
|-----|----|----|----|----|---|---|---|
| 1   | 1  | 0  | 1  | 0  | 1 | 1 | 0 |

= 128 + 64 + 16 + 4 + 2
= **214**

### Example 2: Denary to Binary Conversion
**Q:** Convert the denary number 157 to binary. (2)

**Working:**
157 - 128 = 29 (1)
29 - 16 = 13 (1)
13 - 8 = 5 (1)
5 - 4 = 1 (1)
1 - 1 = 0 (1)

| 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |
|-----|----|----|----|----|---|---|---|
| 1   | 0  | 0  | 1  | 1  | 1 | 0 | 1 |

= **10011101**

### Example 3: Binary to Hexadecimal
**Q:** Convert the binary number 10110011 to hexadecimal. (2)

**Working:**
Split into nibbles: 1011 | 0011
1011 = 8+2+1 = 11 = B
0011 = 2+1 = 3 = 3
= **B3**

### Example 4: Image File Size Calculation
**Q:** Calculate the file size of an image with:
- Resolution: 2400 x 1800 pixels
- Colour depth: 32 bits
Give your answer in megabytes. (3)

**Working:**
Size = width x height x colour depth
= 2400 x 1800 x 32
= 138,240,000 bits

Convert to bytes: 138,240,000 / 8 = 17,280,000 bytes
Convert to MB: 17,280,000 / 1,000,000 = **17.28 MB**

### Example 5: Sound File Size Calculation
**Q:** Calculate the file size of a stereo audio file with:
- Sample rate: 44,100 Hz
- Bit depth: 16 bits
- Duration: 3 minutes
Give your answer in megabytes. (4)

**Working:**
Duration in seconds = 3 x 60 = 180 seconds
Channels = 2 (stereo)

Size = sample rate x bit depth x duration x channels
= 44,100 x 16 x 180 x 2
= 254,016,000 bits

Convert to bytes: 254,016,000 / 8 = 31,752,000 bytes
Convert to MB: 31,752,000 / 1,000,000 = **31.75 MB**

### Example 6: Binary Addition
**Q:** Add the binary numbers 01101011 and 00110101. Show any overflow. (3)

**Working:**
\`\`\`
    01101011
  + 00110101
  ----------
    10100000
\`\`\`

No overflow (result fits in 8 bits)
Answer: **10100000**

### Example 7: Trace Table
**Q:** Complete the trace table for the following code when num = 5:

\`\`\`python
num = 5
total = 0
while num > 0:
    total = total + num
    num = num - 1
print(total)
\`\`\`

| num | total | num > 0 | Output |
|-----|-------|---------|--------|
| 5   | 0     | True    |        |
| 5   | 5     | True    |        |
| 4   | 9     | True    |        |
| 3   | 12    | True    |        |
| 2   | 14    | True    |        |
| 1   | 15    | True    |        |
| 0   | 15    | False   | 15     |

### Example 8: Python Input Validation
**Q:** Write Python code to ask the user for a positive number and keep asking until a valid input is given. (4)

**Answer:**
\`\`\`python
number = int(input("Enter a positive number: "))
while number <= 0:
    print("Invalid. Must be positive.")
    number = int(input("Enter a positive number: "))
print("You entered:", number)
\`\`\`

### Example 9: SQL Query
**Q:** Write an SQL query to display the names and prices of all products that cost more than 50 pounds, ordered by price from highest to lowest. (4)

**Answer:**
\`\`\`sql
SELECT name, price
FROM Products
WHERE price > 50
ORDER BY price DESC
\`\`\`
`;

// ============================================================================
// TOPIC-SPECIFIC GUIDANCE
// ============================================================================

const EDEXCEL_CS_TOPIC_GUIDANCE: Record<string, string> = {
  'edexcel-gcse-cs-computational-thinking': `
## Topic 1: Computational Thinking

**Key Concepts:**
- Computational thinking skills: decomposition, abstraction, pattern recognition, algorithmic thinking
- Representing algorithms: flowcharts, pseudocode
- Trace tables for dry-running algorithms
- Searching algorithms: linear search, binary search
- Sorting algorithms: bubble sort, merge sort, insertion sort
- Algorithm efficiency and Big O notation (basic understanding)
- Boolean logic and truth tables
- Logic gates: AND, OR, NOT, XOR
- Combining logic gates into circuits

**Common Question Types:**
- Draw/complete a flowchart
- Trace through an algorithm using a trace table
- Compare efficiency of algorithms
- Complete a truth table
- Draw logic gate diagram for given expression

**Mark Scheme Patterns:**
- Trace tables: 1 mark per correctly completed row
- Flowcharts: marks for correct symbols, flow, logic
- Algorithm comparisons: must mention specific advantages/disadvantages
`,

  'edexcel-gcse-cs-data': `
## Topic 2: Data

**Key Concepts:**
- Number systems: binary, denary, hexadecimal
- Conversions between number systems
- Binary arithmetic: addition, shifts
- Overflow errors
- Data units: bit, nibble, byte, KB, MB, GB, TB
- Character encoding: ASCII, Unicode
- Image representation: pixels, resolution, colour depth
- Sound representation: sampling, sample rate, bit depth
- Compression: lossy vs lossless, RLE

**Common Question Types:**
- Convert between binary/denary/hexadecimal
- Calculate file sizes (image and sound)
- Explain effects of changing resolution/colour depth/sample rate
- Describe compression techniques

**Key Formulas:**
- Image size (bits) = width x height x colour depth
- Sound size (bits) = sample rate x bit depth x duration x channels

**Mark Scheme Patterns:**
- Conversions: working required for full marks
- File size calculations: show formula, substitution, final answer with units
`,

  'edexcel-gcse-cs-computers': `
## Topic 3: Computers

**Key Concepts:**
- Hardware vs software
- System software: operating systems, utilities
- Application software
- CPU architecture: ALU, Control Unit, Cache
- Registers: PC, MAR, MDR, ACC
- Fetch-decode-execute cycle
- CPU performance factors: clock speed, cores, cache
- Primary storage: RAM, ROM, virtual memory
- Secondary storage: magnetic, optical, solid state
- Embedded systems
- Programming languages: high-level vs low-level
- Translators: compilers, interpreters, assemblers

**Common Question Types:**
- Describe the fetch-decode-execute cycle
- Compare types of storage
- Explain purpose of CPU components
- Compare compiler vs interpreter

**Mark Scheme Patterns:**
- FDE cycle: must mention specific registers
- Storage comparisons: specific advantages/disadvantages required
`,

  'edexcel-gcse-cs-networks': `
## Topic 4: Networks

**Key Concepts:**
- Network types: PAN, LAN, WAN
- Network models: client-server, peer-to-peer
- Network hardware: NIC, switch, router, WAP
- Transmission media: wired (copper, fibre), wireless
- Network topologies: star, mesh
- Internet vs World Wide Web
- DNS, hosting, cloud computing
- Protocols: TCP/IP, HTTP(S), FTP, SMTP, POP, IMAP
- Network layers
- Packet switching

**Common Question Types:**
- Compare network types or topologies
- Explain purpose of network hardware
- Describe how data is transmitted using protocols
- Explain packet switching process

**Mark Scheme Patterns:**
- Comparisons: must give specific points for each
- Packet switching: mention headers, routing, reassembly
`,

  'edexcel-gcse-cs-issues-impact': `
## Topic 5: Issues and Impact

**Key Concepts:**
- Security threats: malware types, social engineering, technical attacks
- Prevention methods: anti-malware, firewalls, encryption, authentication
- UK legislation: Data Protection Act, Computer Misuse Act, Copyright Act
- Ethical issues: privacy, digital divide, AI ethics
- Environmental impact: energy, e-waste, sustainability

**Common Question Types:**
- Describe types of malware and their effects
- Explain prevention methods
- Describe legislation and what it covers
- Discuss ethical/environmental issues (extended response)

**Mark Scheme Patterns:**
- Malware: must describe what it does, not just name it
- Legislation: specific acts and what they prohibit/require
- Extended response: balanced argument, multiple perspectives
`,

  'edexcel-gcse-cs-programming': `
## Topic 6: Problem Solving with Programming

**CRITICAL: This topic uses Python 3 - NOT pseudocode**

**Key Concepts:**
- Variables and constants
- Data types: integer, float, boolean, string, character
- Operators: arithmetic, comparison, Boolean
- Selection: if, elif, else
- Iteration: for, while
- Data structures: lists (1D and 2D)
- String manipulation
- File handling: read, write, append
- Functions: parameters, return values, scope
- Random numbers
- SQL: SELECT, INSERT, UPDATE, DELETE
- Defensive design: validation, authentication, maintainability
- Testing: normal, boundary, erroneous data
- Errors: syntax, logic, runtime

**Common Question Types:**
- Write Python code to solve a problem
- Complete/modify given Python code
- Trace through code and predict output
- Write SQL queries
- Identify and fix errors in code

**Mark Scheme Patterns:**
- Code: marks for functionality, not specific syntax
- Alternative correct solutions always accepted
- Validation: must reject invalid AND accept valid
`
};

// ============================================================================
// QUESTION GENERATION FUNCTIONS
// ============================================================================

/**
 * Returns the comprehensive system prompt for Edexcel GCSE Computer Science.
 */
export function getEdexcelGCSEComputerScienceSystemPrompt(): string {
  return `You are an expert Edexcel GCSE Computer Science examiner creating exam-style questions.

${EDEXCEL_CS_ASSESSMENT_OBJECTIVES}

${EDEXCEL_CS_PYTHON_REFERENCE}

${EDEXCEL_CS_SQL_REFERENCE}

${EDEXCEL_CS_ALGORITHMS_REFERENCE}

${EDEXCEL_CS_DATA_REPRESENTATION}

${EDEXCEL_CS_HARDWARE_SOFTWARE}

${EDEXCEL_CS_NETWORKS}

${EDEXCEL_CS_SECURITY_ISSUES}

${EDEXCEL_CS_BOOLEAN_LOGIC}

${EDEXCEL_CS_MARK_SCHEME_CONVENTIONS}

${EDEXCEL_CS_QUESTION_TEMPLATES}

${EDEXCEL_CS_WORKED_EXAMPLES}

## Critical Requirements

1. **Use Python 3 for ALL programming questions** - Edexcel does NOT use pseudocode
2. **Match authentic Edexcel style** - Use real past paper formats
3. **Clear mark allocation** - Show marks in brackets (X marks) or (X)
4. **Scenario-based questions** - Edexcel uses real-world contexts
5. **Accurate technical content** - Ensure all facts, syntax, and calculations are correct`;
}

/**
 * Returns the question prompt for a specific topic, difficulty, and optional subtopic.
 */
export function getEdexcelGCSEComputerScienceQuestionPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const markRange = getMarkRangeForDifficulty(difficulty);
  const topicGuidance = EDEXCEL_CS_TOPIC_GUIDANCE[topic.id] || '';

  const difficultyGuidance = {
    easy: `Create an AO1 question testing basic knowledge.

**Question Types for Easy:**
- "Define the term [term]" (1-2 marks)
- "State one advantage of..." (1 mark)
- "Give two reasons why..." (2 marks)
- "Convert [number] from binary to denary" (2 marks)
- "Name one type of malware" (1 mark)

**Mark Scheme Format:**
- One clear mark point per mark
- Include acceptable alternatives
- Brief, factual responses expected

Marks: ${markRange.min}-${markRange.max}`,

    medium: `Create an AO2 application question.

**Question Types for Medium:**
- "Explain how [concept] works" (3-4 marks)
- "Describe the process of..." (3-4 marks)
- "State the output when this code is executed with input [X]" (2-3 marks)
- "Complete the Python code to..." (3-4 marks)
- "Calculate the file size of..." (3-4 marks)
- "Write an SQL query to..." (3-4 marks)

**Mark Scheme Format:**
- Mark points for each key concept
- For code: accept alternative correct solutions
- For calculations: show working for method marks
- Note any acceptable variations

Marks: ${markRange.min}-${markRange.max}`,

    hard: `Create an AO3 analysis/evaluation question.

**Question Types for Hard:**
- "Write a Python program that..." (6-8 marks)
  - Include clear requirements
  - May need validation
  - May need error handling
- "Discuss the [ethical/social/economic] implications of..." (6-8 marks)
- "Evaluate [approach] for [scenario]" (6-8 marks)
- "Compare [A] and [B], evaluating which would be better for [scenario]" (6-8 marks)

**Mark Scheme Format:**
- For extended response: use levels of response
  - Level 3: Clear understanding, well-structured, accurate terminology
  - Level 2: Good understanding, reasonable structure
  - Level 1: Basic understanding, limited structure
- For code: mark for key functionality points
- Accept alternative correct solutions

Marks: ${markRange.min}-${markRange.max}`
  };

  return `Generate an Edexcel GCSE Computer Science question.

**Topic**: ${topic.name}
**Subtopic**: ${subtopic || 'General'}
**Difficulty**: ${difficulty}

${topicGuidance}

${difficultyGuidance[difficulty]}

**Critical Requirements:**
- Use Python 3 syntax for ALL code (NOT pseudocode)
- Include mark allocation in brackets
- Use real-world scenarios where appropriate
- Match the formal, precise language of real Edexcel papers
- Ensure all technical content is accurate

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
 * Prompt specifically for Python programming questions.
 */
export function getEdexcelComputerSciencePythonPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const markRange = getMarkRangeForDifficulty(difficulty);

  return `Generate an Edexcel GCSE Computer Science PYTHON PROGRAMMING question.

**Topic**: ${topic.name}
**Subtopic**: ${subtopic || 'General Python Programming'}
**Difficulty**: ${difficulty}

Create a question asking students to write Python code that:
- Has a clear, specific task
- States required inputs and outputs
- For harder questions: includes validation requirements
- Uses a realistic scenario

**Format**: "Write a Python program that..."

**Marks**: ${markRange.min}-${markRange.max}

**Mark scheme should:**
- List marks for each key feature (e.g., "1 mark for correct input", "1 mark for validation loop")
- Include test data to verify solution
- Note: "Alternative correct solutions acceptable"
- Note: "Marks awarded for functionality"

**CRITICAL**: Use Python 3 syntax only. Return valid JSON:
{
  "content": "question text here",
  "marks": number,
  "solution": "detailed mark scheme with example solution"
}`;
}

/**
 * Prompt specifically for SQL questions.
 */
export function getEdexcelComputerScienceSQLPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const markRange = getMarkRangeForDifficulty(difficulty);

  return `Generate an Edexcel GCSE Computer Science SQL QUERY question.

**Topic**: ${topic.name}
**Subtopic**: ${subtopic || 'SQL Queries'}
**Difficulty**: ${difficulty}

Create a question with:
- A realistic database scenario
- A table structure (describe the fields)
- A specific query requirement

**For Easy:** Simple SELECT with WHERE
**For Medium:** SELECT with WHERE and ORDER BY
**For Hard:** Multiple conditions, or INSERT/UPDATE/DELETE

**Marks**: ${markRange.min}-${markRange.max}

**Mark scheme should:**
- Award marks for each clause (SELECT, FROM, WHERE, ORDER BY)
- Accept alternative correct solutions
- Note case-insensitive matching

Return valid JSON:
{
  "content": "question text with table description",
  "marks": number,
  "solution": "mark scheme with correct SQL query"
}`;
}

/**
 * Prompt specifically for extended response questions.
 */
export function getEdexcelComputerScienceExtendedPrompt(
  topic: Topic,
  subtopic?: string
): string {
  return `Generate an Edexcel GCSE Computer Science EXTENDED RESPONSE question (6-8 marks).

**Topic**: ${topic.name}
**Subtopic**: ${subtopic || 'General'}

Create a discussion/evaluation question about ethical, social, economic, or environmental implications.
Use a real-world scenario that students can relate to.

**Format**: "Discuss..." or "Evaluate..."

**Mark scheme must use Levels of Response:**
- Level 3 (5-6/7-8 marks): Clear understanding, well-structured, accurate terminology, balanced argument, covers multiple perspectives
- Level 2 (3-4/4-6 marks): Good understanding, reasonable structure, mostly accurate
- Level 1 (1-2/1-3 marks): Basic understanding, limited structure, some errors
- 0 marks: Nothing creditworthy

Include indicative content listing points that might appear in answers.

Return valid JSON:
{
  "content": "question text with scenario",
  "marks": number (6 or 8),
  "solution": "levels of response mark scheme with indicative content"
}`;
}

/**
 * Prompt specifically for calculation questions (binary, file sizes, etc.).
 */
export function getEdexcelComputerScienceCalculationPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const markRange = getMarkRangeForDifficulty(difficulty);

  return `Generate an Edexcel GCSE Computer Science CALCULATION question.

**Topic**: ${topic.name}
**Subtopic**: ${subtopic || 'Data Representation'}
**Difficulty**: ${difficulty}

Create a calculation question involving one of:
- Binary/denary/hexadecimal conversion
- Binary arithmetic (addition, shifts)
- Image file size calculation
- Sound file size calculation

**Requirements:**
- Provide all necessary data
- Ask for working to be shown
- Specify units for final answer
- Numbers should work out to sensible values

**Marks**: ${markRange.min}-${markRange.max}

**Key formulas:**
- Image size (bits) = width x height x colour depth
- Sound size (bits) = sample rate x bit depth x duration x channels
- 1 byte = 8 bits, 1 KB = 1000 bytes, 1 MB = 1,000,000 bytes

**Mark scheme should:**
- Award method marks for correct formula/approach
- Award accuracy mark for correct final answer
- Specify required units

Return valid JSON:
{
  "content": "question with all data provided",
  "marks": number,
  "solution": "step-by-step worked solution with mark scheme"
}`;
}

/**
 * Prompt specifically for trace table questions.
 */
export function getEdexcelComputerScienceTraceTablePrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const markRange = getMarkRangeForDifficulty(difficulty);

  return `Generate an Edexcel GCSE Computer Science TRACE TABLE question.

**Topic**: ${topic.name}
**Subtopic**: ${subtopic || 'Algorithms'}
**Difficulty**: ${difficulty}

Create a question with:
1. A Python code snippet (4-8 lines) with a loop
2. A trace table with columns for each variable
3. Initial values specified
4. Some rows may be pre-filled, others blank for students

**Code should include:**
- A loop (for or while)
- Variable updates within the loop
- Clear termination condition
- For harder: nested structures or conditional logic

**Marks**: ${markRange.min}-${markRange.max} (typically 1 mark per correctly completed row)

**CRITICAL**: Use Python 3 syntax (NOT pseudocode)

Return valid JSON:
{
  "content": "question with Python code and trace table template",
  "marks": number,
  "solution": "completed trace table with all values"
}`;
}

/**
 * Prompt specifically for Boolean logic and logic gates questions.
 */
export function getEdexcelComputerScienceLogicPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const markRange = getMarkRangeForDifficulty(difficulty);

  return `Generate an Edexcel GCSE Computer Science BOOLEAN LOGIC question.

**Topic**: ${topic.name}
**Subtopic**: ${subtopic || 'Boolean Logic'}
**Difficulty**: ${difficulty}

Create a question about one of:
- Complete a truth table for given expression
- Write Boolean expression from truth table
- Draw logic gate diagram
- Evaluate expression for given inputs

**Available gates:** AND, OR, NOT, XOR

**For Easy:** Single gate or simple expression
**For Medium:** Two gates combined
**For Hard:** Three or more gates, or complete circuit design

**Marks**: ${markRange.min}-${markRange.max}

Return valid JSON:
{
  "content": "question about Boolean logic",
  "marks": number,
  "solution": "complete solution with truth table or diagram description"
}`;
}

/**
 * Prompt specifically for code completion/debugging questions.
 */
export function getEdexcelComputerScienceDebugPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const markRange = getMarkRangeForDifficulty(difficulty);

  return `Generate an Edexcel GCSE Computer Science CODE COMPLETION or DEBUGGING question.

**Topic**: ${topic.name}
**Subtopic**: ${subtopic || 'Programming'}
**Difficulty**: ${difficulty}

Create a question with:
- Partial Python code with blanks to fill, OR
- Python code with deliberate errors to identify and fix

**For completion:** Provide code structure with missing lines/parts
**For debugging:** Include syntax errors, logic errors, or both

**Marks**: ${markRange.min}-${markRange.max}

**Types of errors to include:**
- Syntax: wrong keywords, missing colons, indentation
- Logic: wrong operators, off-by-one, wrong variable
- Runtime: division by zero, index out of range

**CRITICAL**: Use Python 3 syntax

Return valid JSON:
{
  "content": "question with code to complete or debug",
  "marks": number,
  "solution": "corrected code with explanation of each fix"
}`;
}

/**
 * Prompt specifically for comparison questions.
 */
export function getEdexcelComputerScienceComparePrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const markRange = getMarkRangeForDifficulty(difficulty);

  return `Generate an Edexcel GCSE Computer Science COMPARISON question.

**Topic**: ${topic.name}
**Subtopic**: ${subtopic || 'General'}
**Difficulty**: ${difficulty}

Create a comparison question between two related concepts, such as:
- Linear search vs binary search
- HDD vs SSD
- Compiler vs interpreter
- LAN vs WAN
- Client-server vs peer-to-peer
- Lossy vs lossless compression
- RAM vs ROM

**Format:** "Compare [A] and [B]" or "State two differences between..."

**For Easy:** Two simple differences
**For Medium:** Multiple points of comparison
**For Hard:** Evaluation of which is better for given scenario

**Marks**: ${markRange.min}-${markRange.max}

Return valid JSON:
{
  "content": "comparison question",
  "marks": number,
  "solution": "mark scheme with specific comparison points"
}`;
}

// ============================================================================
// LEGACY FUNCTION EXPORTS (for backwards compatibility)
// ============================================================================

/**
 * Legacy system prompt function - calls the new comprehensive function.
 */
export function getEdexcelComputerScienceSystemPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic: string
): string {
  const systemPrompt = getEdexcelGCSEComputerScienceSystemPrompt();
  const markRange = getMarkRangeForDifficulty(difficulty);
  const topicGuidance = EDEXCEL_CS_TOPIC_GUIDANCE[topic.id] || '';

  return `${systemPrompt}

${topicGuidance}

## Your Task
Create a ${difficulty} difficulty question about "${subtopic}" from the topic "${topic.name}".
The question should be worth ${markRange.min}-${markRange.max} marks.

## Question Requirements
1. **Authentic Edexcel Style**: Match real Edexcel/Pearson paper format
2. **Clear Mark Allocation**: Show marks clearly (X marks) or (X)
3. **Appropriate Difficulty**:
   - Easy: Definitions, simple conversions, basic recall (1-2 marks)
   - Medium: Explanations, code reading, descriptions (3-5 marks)
   - Hard: Algorithm design, extended response, evaluation (6-8 marks)
4. **For programming questions**: Use Python 3 syntax (NOT pseudocode)
5. **Use realistic scenarios**: Edexcel uses real-world contexts

## Response Format
Return a JSON object with:
- "content": The question text (use \\n for line breaks, include code in \`\`\`python blocks)
- "marks": Total marks for the question
- "solution": Complete mark scheme with mark allocation`;
}

/**
 * Legacy question prompt function - calls the new comprehensive function.
 */
export function getEdexcelComputerScienceQuestionPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic: string
): string {
  return getEdexcelGCSEComputerScienceQuestionPrompt(topic, difficulty, subtopic);
}
