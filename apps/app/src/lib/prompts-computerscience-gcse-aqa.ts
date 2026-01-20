// AQA GCSE Computer Science (8525) Question Generation Prompts
// Based on analysis of actual AQA past papers (June 2022, 2023, 2024)
// and official mark schemes
// Comprehensive version with detailed topic knowledge and worked examples

import { Difficulty, Topic } from '@/types';
import { getDiagramDocsForSubject } from './prompts-common';

// GCSE Computer Science mark ranges based on AQA specification
function getMarkRangeForDifficulty(difficulty: Difficulty): { min: number; max: number } {
  switch (difficulty) {
    case 'easy':
      return { min: 1, max: 3 };    // Short answer/recall questions
    case 'medium':
      return { min: 4, max: 6 };    // Application and explanation questions
    case 'hard':
      return { min: 6, max: 8 };    // Extended response and programming questions
  }
}

// ============================================================================
// AQA GCSE COMPUTER SCIENCE SPECIFICATION DETAILS (8525)
// Based on official AQA specification and past paper analysis
// ============================================================================

const AQA_CS_ASSESSMENT_OBJECTIVES = `
## AQA GCSE Computer Science Assessment Objectives

| Objective | Description | Weighting |
|-----------|-------------|-----------|
| **AO1** | Demonstrate knowledge and understanding of the key concepts and principles of computer science | 30% |
| **AO2** | Apply knowledge and understanding of key concepts and principles of computer science | 40% |
| **AO3** | Analyse problems in computational terms: make reasoned judgements; design, program, evaluate and refine solutions | 30% |

### Paper Structure (Total: 160 marks)
| Paper | Content | Time | Marks | Weighting |
|-------|---------|------|-------|-----------|
| **Paper 1** | Computational thinking and programming skills | 2h | 80 | 50% |
| **Paper 2** | Computing concepts | 1h 45m | 80 | 50% |

### Paper 1 - On-screen Examination
- Three variants: Python (1B), C# (1A), VB.NET (1C)
- Programming questions with pre-release material
- Trace tables and algorithm analysis
- Code completion and debugging
- Questions require writing actual program code
- Assess understanding of programming constructs and problem-solving

### Paper 2 - Written Examination
- Theoretical knowledge examination
- Data representation (binary, hex, ASCII, images, sound)
- Computer systems and architecture
- Networks and protocols
- Cyber security threats and prevention
- Databases and SQL
- Ethical, legal and environmental issues
`;

const AQA_CS_PSEUDOCODE_REFERENCE = `
## AQA Pseudocode Reference (Official Syntax)

### Variable Assignment
\`\`\`
variable ← value
name ← "Alice"
count ← 0
isValid ← True
\`\`\`

### Arithmetic Operators
| Operator | Meaning | Example | Result |
|----------|---------|---------|--------|
| + | Addition | x ← 5 + 3 | 8 |
| - | Subtraction | x ← 5 - 3 | 2 |
| * | Multiplication | x ← 5 * 3 | 15 |
| / | Real division | x ← 5 / 3 | 1.666... |
| DIV | Integer division | x ← 5 DIV 3 | 1 |
| MOD | Modulo (remainder) | x ← 5 MOD 3 | 2 |
| ^ | Exponentiation | x ← 2 ^ 3 | 8 |

### Comparison Operators
| Operator | Meaning | Example |
|----------|---------|---------|
| = | Equal to | IF x = 5 THEN |
| ≠ or <> | Not equal to | IF x ≠ 5 THEN |
| < | Less than | IF x < 10 THEN |
| > | Greater than | IF x > 0 THEN |
| ≤ or <= | Less than or equal to | IF x ≤ 100 THEN |
| ≥ or >= | Greater than or equal to | IF x >= 0 THEN |

### Boolean Operators
| Operator | Meaning | Example |
|----------|---------|---------|
| AND | Both conditions must be true | IF x > 0 AND x < 10 THEN |
| OR | At least one condition must be true | IF x = 0 OR y = 0 THEN |
| NOT | Reverses the condition | IF NOT found THEN |

### Selection (IF statements)
\`\`\`
IF condition THEN
    statements
ENDIF

IF condition THEN
    statements
ELSE
    statements
ENDIF

IF condition THEN
    statements
ELSE IF condition THEN
    statements
ELSE
    statements
ENDIF
\`\`\`

### Iteration (Loops)
\`\`\`
# Count-controlled loop (FOR)
FOR i ← 1 TO 10
    statements
ENDFOR

FOR i ← 10 TO 1 STEP -1
    statements
ENDFOR

# Condition-controlled loop (WHILE - pre-condition)
WHILE condition
    statements
ENDWHILE

# Condition-controlled loop (REPEAT - post-condition)
REPEAT
    statements
UNTIL condition
\`\`\`

### Arrays (0-indexed in AQA)
\`\`\`
# 1D Array declaration and access
array[index]
names[0] ← "Alice"
names[1] ← "Bob"

# Iterating through array
FOR i ← 0 TO LEN(array) - 1
    OUTPUT array[i]
ENDFOR

# 2D Array access
matrix[row][column]
grid[0][2] ← 5
\`\`\`

### Subroutines
\`\`\`
# Procedure (no return value)
SUBROUTINE procedureName(parameter1, parameter2)
    statements
ENDSUBROUTINE

# Function (returns a value)
SUBROUTINE functionName(parameters)
    statements
    RETURN value
ENDSUBROUTINE

# Calling a subroutine
procedureName(argument1, argument2)
result ← functionName(arguments)
\`\`\`

### String Functions
| Function | Description | Example | Result |
|----------|-------------|---------|--------|
| LEN(string) | Returns length of string | LEN("Hello") | 5 |
| SUBSTRING(start, end, string) | Extracts characters from start to end | SUBSTRING(0, 3, "Hello") | "Hel" |
| POSITION(string, char) | Returns index of character in string | POSITION("Hello", "e") | 1 |
| STRING_TO_INT(string) | Converts string to integer | STRING_TO_INT("42") | 42 |
| STRING_TO_REAL(string) | Converts string to real | STRING_TO_REAL("3.14") | 3.14 |
| INT_TO_STRING(int) | Converts integer to string | INT_TO_STRING(42) | "42" |
| CHAR_TO_CODE(char) | Returns ASCII value of character | CHAR_TO_CODE("A") | 65 |
| CODE_TO_CHAR(int) | Returns character from ASCII value | CODE_TO_CHAR(65) | "A" |

### Input/Output
\`\`\`
OUTPUT "message"
OUTPUT variable
INPUT variable
\`\`\`

### File Handling
\`\`\`
# Reading from file
myFile ← OPEN("filename.txt")
line ← myFile.READLINE()
myFile.CLOSE()

# Writing to file
myFile ← OPEN("filename.txt")
myFile.WRITELINE("text")
myFile.CLOSE()

# Check for end of file
WHILE NOT myFile.ENDOFFILE()
    line ← myFile.READLINE()
ENDWHILE
\`\`\`
`;

const AQA_CS_MARK_SCHEME_CONVENTIONS = `
## AQA Mark Scheme Conventions (From Official Mark Schemes)

### Code Marking Rules
**CRITICAL**: In the real world minor syntax errors are often identified and flagged by the development environment. To reflect this:
- All responses assess the candidate's ability to create an answer using precise programming commands/instructions
- BUT avoid penalising for minor syntax errors that don't affect logic flow
- **Case of program code is IGNORED for marking purposes**
- Alternative correct solutions are always acceptable
- Variable names may differ if logic is correct
- Indentation is not marked but affects readability

### Acceptable Alternatives (Examples from mark schemes)
- "Write" in place of "WriteLine" is acceptable
- Different quote styles (single/double) accepted
- Indentation variations accepted if logic clear
- print() and OUTPUT interchangeable for pseudocode
- Different but logically equivalent conditions accepted

### SQL Marking
- Table names in front of field names acceptable if correct
- Missing ASC in ORDER BY clause ignored
- Case and spacing ignored
- Semicolons optional
- Aliases acceptable where appropriate

### Trace Table Marking
- Each correctly completed row typically = 1 mark
- All variable changes must be shown
- OUTPUT column required when program outputs values
- "You may not need to use all the rows in the table"
- Values must be in correct row to gain mark
- Accept equivalent representations (e.g., True/true/TRUE)

### Extended Response (Levels of Response)
**Level 3 (5-6 marks):**
- Clear and detailed response
- Technically accurate throughout
- Well-structured with logical flow
- Uses correct terminology throughout
- Comprehensive coverage of relevant points

**Level 2 (3-4 marks):**
- Good understanding demonstrated
- Mostly accurate, some minor errors
- Reasonable structure
- Generally uses correct terminology
- Covers main points with some detail

**Level 1 (1-2 marks):**
- Basic points made
- Some inaccuracies or misconceptions
- Limited structure
- Limited use of terminology
- Superficial coverage

**Level 0 (0 marks):**
- Nothing creditworthy

### Definition Questions (1-2 marks)
- Must include key technical terms
- One clear, accurate statement per mark
- Accept equivalent wording (owtte)
`;

const AQA_CS_QUESTION_TEMPLATES = `
## Authentic AQA Question Formats (From Past Papers)

### Type 1: Trace Table Question (3-5 marks)
Format: "Complete the trace table for the algorithm shown in Figure X. You may not need to use all the rows in the table."
- Provide code snippet with clear loop/iteration
- Provide partially completed trace table with headers
- Variables listed as columns, rows for iterations
- Include OUTPUT column if code outputs values

### Type 2: Code Writing Question (4-8 marks)
Format: "Write a program/algorithm that..."
- Clear problem statement with specific requirements
- Specific inputs and outputs required
- May include validation requirements
- May specify: "Your answer must be written in [pseudocode/Python]"

### Type 3: Code Analysis Question (2-4 marks)
Format: "State the output of the algorithm when X = [value]"
OR "What is the purpose of this algorithm?"
OR "Explain what happens when the condition is met"

### Type 4: Definition Question (1-2 marks)
Format: "Define what is meant by [term]"
OR "State what is meant by [term]"
OR "What is [term]?"

### Type 5: Explain Question (2-4 marks)
Format: "Explain how [concept] works"
OR "Explain why [scenario] would cause [outcome]"
OR "Explain the purpose of [component]"

### Type 6: Binary/Hex Calculation (2-4 marks)
Format: "Convert [number] from [base] to [base]. Show your working."
OR "Perform the following binary arithmetic..."
- Working marks + answer marks
- Clear space for working required

### Type 7: Extended Response (6-8 marks)
Format: "Discuss the [ethical/social/legal] implications of [technology/scenario]"
OR "Evaluate [two approaches] for [problem]"
OR "Compare [technology A] and [technology B] for [scenario]"
- Uses level of response marking
- Requires balanced argument or comprehensive evaluation

### Type 8: Debug Question (2-4 marks)
Format: "The code contains [number] errors. Identify each error and write the corrected line of code."
- Must identify line with error
- Must provide corrected version
- May include logic errors as well as syntax errors

### Type 9: Comparison Question (3-4 marks)
Format: "Compare [A] and [B]. Give one similarity and one difference."
OR "State two differences between [A] and [B]"
OR "Explain one advantage and one disadvantage of [approach]"

### Type 10: SQL Query Question (3-5 marks)
Format: "Write an SQL query to..."
- Clear description of required output
- May specify which operations needed (SELECT, INSERT, UPDATE, DELETE)
- May require multiple conditions (AND/OR)
- May require sorting (ORDER BY)
`;

const AQA_CS_REFERENCE_DATA = `
## Key Reference Data

### Binary/Hexadecimal Conversion
| Decimal | Binary | Hexadecimal |
|---------|--------|-------------|
| 0 | 0000 | 0 |
| 1 | 0001 | 1 |
| 2 | 0010 | 2 |
| 3 | 0011 | 3 |
| 4 | 0100 | 4 |
| 5 | 0101 | 5 |
| 6 | 0110 | 6 |
| 7 | 0111 | 7 |
| 8 | 1000 | 8 |
| 9 | 1001 | 9 |
| 10 | 1010 | A |
| 11 | 1011 | B |
| 12 | 1100 | C |
| 13 | 1101 | D |
| 14 | 1110 | E |
| 15 | 1111 | F |

### 8-bit Place Values
| 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |
|-----|----|----|----|----|---|---|---|

### Data Units (SI prefixes as per AQA specification)
| Unit | Bytes | Bits |
|------|-------|------|
| 1 Bit | - | 1 |
| 1 Nibble | - | 4 |
| 1 Byte | 1 | 8 |
| 1 KB (Kilobyte) | 1,000 | 8,000 |
| 1 MB (Megabyte) | 1,000,000 | 8,000,000 |
| 1 GB (Gigabyte) | 1,000,000,000 | 8,000,000,000 |
| 1 TB (Terabyte) | 1,000,000,000,000 | 8,000,000,000,000 |
| 1 PB (Petabyte) | 1,000,000,000,000,000 | 8,000,000,000,000,000 |

### Image File Size Calculation
File size (bits) = width × height × colour depth
File size (bytes) = (width × height × colour depth) / 8

Example: 1920 × 1080 image with 24-bit colour depth
= 1920 × 1080 × 24 bits = 49,766,400 bits = 6,220,800 bytes ≈ 6.22 MB

### Sound File Size Calculation
File size (bits) = sample rate × bit depth × duration (seconds) × number of channels
File size (bytes) = (sample rate × bit depth × duration × channels) / 8

Example: 3-minute stereo audio at 44,100 Hz sample rate, 16-bit depth
= 44,100 × 16 × 180 × 2 bits = 254,016,000 bits = 31,752,000 bytes ≈ 31.75 MB

### ASCII Values (Key ranges)
| Characters | ASCII Values |
|------------|--------------|
| 'A' to 'Z' | 65 to 90 |
| 'a' to 'z' | 97 to 122 |
| '0' to '9' | 48 to 57 |
| Space | 32 |
| Newline | 10 |

### Algorithm Complexities
| Algorithm | Time Complexity | Space Complexity |
|-----------|-----------------|------------------|
| Linear Search | O(n) | O(1) |
| Binary Search | O(log n) | O(1) |
| Bubble Sort | O(n²) | O(1) |
| Merge Sort | O(n log n) | O(n) |
| Insertion Sort | O(n²) | O(1) |

### Boolean Logic Truth Tables
**AND Gate:**
| A | B | A AND B |
|---|---|---------|
| 0 | 0 | 0 |
| 0 | 1 | 0 |
| 1 | 0 | 0 |
| 1 | 1 | 1 |

**OR Gate:**
| A | B | A OR B |
|---|---|--------|
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 1 |

**NOT Gate:**
| A | NOT A |
|---|-------|
| 0 | 1 |
| 1 | 0 |
`;

// ============================================================================
// TOPIC-SPECIFIC DETAILED KNOWLEDGE
// ============================================================================

const AQA_CS_ALGORITHMS_KNOWLEDGE = `
## Topic 3.1: Fundamentals of Algorithms

### 3.1.1 Computational Thinking

**Abstraction:**
- Removing unnecessary detail to focus on the essential elements
- Focuses on WHAT needs to be done, not HOW
- Example: A map abstracts real-world geography to show only roads and landmarks
- Example: In programming, using a function name abstracts the implementation details

**Decomposition:**
- Breaking down a complex problem into smaller, manageable sub-problems
- Each sub-problem can be solved independently
- Sub-solutions are combined to solve the overall problem
- Example: Building a game might decompose into: user input, game logic, graphics, sound

**Algorithmic Thinking:**
- Creating a step-by-step solution (algorithm) to solve a problem
- Algorithms must be:
  - Precise (unambiguous)
  - Finite (must eventually stop)
  - Effective (each step must be doable)

### 3.1.2 Representing Algorithms

**Pseudocode:**
- Structured English that describes an algorithm
- Not tied to a specific programming language
- Uses keywords like IF, THEN, ELSE, WHILE, FOR, OUTPUT, INPUT

**Flowcharts:**
| Symbol | Name | Purpose |
|--------|------|---------|
| Oval/Rounded rectangle | Terminal | Start/End of algorithm |
| Rectangle | Process | Instruction or calculation |
| Diamond | Decision | Yes/No question (condition) |
| Parallelogram | Input/Output | Data input or output |
| Arrow | Flow line | Direction of flow |

**Trace Tables:**
- Used to track variable values through algorithm execution
- Columns for each variable and OUTPUT
- Rows for each step/iteration
- Useful for debugging and understanding algorithm behaviour

### 3.1.3 Searching Algorithms

**Linear Search:**
- Checks each element in sequence from start to end
- Works on unsorted and sorted data
- Time complexity: O(n) - worst case checks all n items
- Pseudocode:
\`\`\`
SUBROUTINE linearSearch(array, target)
    FOR i ← 0 TO LEN(array) - 1
        IF array[i] = target THEN
            RETURN i
        ENDIF
    ENDFOR
    RETURN -1
ENDSUBROUTINE
\`\`\`

**Binary Search:**
- Divide and conquer approach
- REQUIRES DATA TO BE SORTED
- Halves the search space with each comparison
- Time complexity: O(log n)
- Pseudocode:
\`\`\`
SUBROUTINE binarySearch(array, target)
    low ← 0
    high ← LEN(array) - 1
    WHILE low <= high
        mid ← (low + high) DIV 2
        IF array[mid] = target THEN
            RETURN mid
        ELSE IF array[mid] < target THEN
            low ← mid + 1
        ELSE
            high ← mid - 1
        ENDIF
    ENDWHILE
    RETURN -1
ENDSUBROUTINE
\`\`\`

**Comparison:**
| Aspect | Linear Search | Binary Search |
|--------|---------------|---------------|
| Time complexity | O(n) | O(log n) |
| Data requirement | Any order | Must be sorted |
| Best for | Small/unsorted data | Large sorted data |
| Efficiency | Less efficient for large data | Very efficient for large data |

### 3.1.4 Sorting Algorithms

**Bubble Sort:**
- Compares adjacent pairs and swaps if in wrong order
- Repeats passes until no swaps needed
- Time complexity: O(n²)
- Simple but inefficient for large datasets
\`\`\`
SUBROUTINE bubbleSort(array)
    n ← LEN(array)
    FOR i ← 0 TO n - 2
        FOR j ← 0 TO n - 2 - i
            IF array[j] > array[j + 1] THEN
                temp ← array[j]
                array[j] ← array[j + 1]
                array[j + 1] ← temp
            ENDIF
        ENDFOR
    ENDFOR
ENDSUBROUTINE
\`\`\`

**Bubble Sort Trace Example:**
Array: [5, 3, 8, 1]
Pass 1: [3, 5, 1, 8] (3 swaps)
Pass 2: [3, 1, 5, 8] (1 swap)
Pass 3: [1, 3, 5, 8] (1 swap)
Pass 4: [1, 3, 5, 8] (0 swaps - sorted)

**Merge Sort:**
- Divide and conquer algorithm
- Divides array in half repeatedly until single elements
- Merges sorted halves back together
- Time complexity: O(n log n)
- More efficient but uses more memory
\`\`\`
SUBROUTINE mergeSort(array)
    IF LEN(array) <= 1 THEN
        RETURN array
    ENDIF
    mid ← LEN(array) DIV 2
    left ← mergeSort(array[0:mid])
    right ← mergeSort(array[mid:])
    RETURN merge(left, right)
ENDSUBROUTINE

SUBROUTINE merge(left, right)
    result ← []
    WHILE LEN(left) > 0 AND LEN(right) > 0
        IF left[0] <= right[0] THEN
            APPEND left[0] TO result
            REMOVE left[0]
        ELSE
            APPEND right[0] TO result
            REMOVE right[0]
        ENDIF
    ENDWHILE
    RETURN result + left + right
ENDSUBROUTINE
\`\`\`

**Insertion Sort:**
- Builds sorted array one element at a time
- Takes each element and inserts it in correct position
- Time complexity: O(n²)
- Efficient for small or nearly sorted data
\`\`\`
SUBROUTINE insertionSort(array)
    FOR i ← 1 TO LEN(array) - 1
        current ← array[i]
        j ← i - 1
        WHILE j >= 0 AND array[j] > current
            array[j + 1] ← array[j]
            j ← j - 1
        ENDWHILE
        array[j + 1] ← current
    ENDFOR
ENDSUBROUTINE
\`\`\`

**Sorting Algorithm Comparison:**
| Aspect | Bubble Sort | Merge Sort | Insertion Sort |
|--------|-------------|------------|----------------|
| Time complexity | O(n²) | O(n log n) | O(n²) |
| Space complexity | O(1) | O(n) | O(1) |
| Best for | Educational, small data | Large data | Small/nearly sorted |
| Stability | Stable | Stable | Stable |
`;

const AQA_CS_PROGRAMMING_KNOWLEDGE = `
## Topic 3.2: Programming

### 3.2.1 Data Types

| Data Type | Description | Example |
|-----------|-------------|---------|
| Integer | Whole number | 42, -7, 0 |
| Real/Float | Decimal number | 3.14, -2.5 |
| Boolean | True or False | True, False |
| Character | Single character | 'A', '7', '!' |
| String | Sequence of characters | "Hello World" |

**Casting (Type Conversion):**
- Converting between data types
- STRING_TO_INT("42") → 42
- INT_TO_STRING(42) → "42"
- STRING_TO_REAL("3.14") → 3.14

### 3.2.2 Programming Constructs

**Sequence:**
- Instructions executed in order, one after another
- Default flow of a program

**Selection:**
- Choosing which code to execute based on a condition
- IF...THEN...ENDIF
- IF...THEN...ELSE...ENDIF
- IF...THEN...ELSE IF...ELSE...ENDIF
- Nested selection (IF statements inside IF statements)

**Iteration:**
- Repeating code multiple times
- Count-controlled (FOR loop): Known number of repetitions
- Condition-controlled (WHILE/REPEAT): Unknown number, based on condition
- WHILE: Checks condition before loop (may not execute at all)
- REPEAT...UNTIL: Checks condition after loop (always executes at least once)

### 3.2.3 Variables and Constants

**Variables:**
- Named storage location that can change during program execution
- Should have meaningful names (camelCase convention)
- Must be declared before use

**Constants:**
- Named storage location that cannot change
- Value set once at declaration
- Used for values that should not be modified
- Example: CONST PI ← 3.14159

### 3.2.4 Operators

**Arithmetic Operators:**
| Operator | Operation | Example |
|----------|-----------|---------|
| + | Addition | 5 + 3 = 8 |
| - | Subtraction | 5 - 3 = 2 |
| * | Multiplication | 5 * 3 = 15 |
| / | Division (real) | 5 / 3 = 1.666... |
| DIV | Integer division | 5 DIV 3 = 1 |
| MOD | Modulo (remainder) | 5 MOD 3 = 2 |
| ^ | Exponentiation | 2 ^ 3 = 8 |

**Common uses of MOD:**
- Check if number is even/odd: num MOD 2 = 0 (even)
- Extract last digit: num MOD 10
- Wrap around values: index MOD arrayLength

**Common uses of DIV:**
- Remove decimal part: 17 DIV 5 = 3
- Calculate number of complete items: seconds DIV 60 = minutes

### 3.2.5 Data Structures

**1D Arrays:**
- Collection of elements of the same data type
- Elements accessed by index (0-based in AQA)
- Fixed size once created
\`\`\`
scores[0] ← 85
scores[1] ← 92
scores[2] ← 78
\`\`\`

**2D Arrays:**
- Array of arrays (grid/table structure)
- Accessed using two indices: array[row][column]
\`\`\`
grid[0][0] ← 1
grid[0][1] ← 2
grid[1][0] ← 3
grid[1][1] ← 4

# Iterating through 2D array
FOR row ← 0 TO 2
    FOR col ← 0 TO 3
        OUTPUT grid[row][col]
    ENDFOR
ENDFOR
\`\`\`

**Records:**
- Collection of related fields of different data types
- Like a row in a database table
\`\`\`
TYPE Student
    name: String
    age: Integer
    grade: Character
ENDTYPE

student1 ← Student("Alice", 16, 'A')
OUTPUT student1.name
\`\`\`

### 3.2.6 String Handling

| Operation | AQA Syntax | Example | Result |
|-----------|------------|---------|--------|
| Length | LEN(s) | LEN("Hello") | 5 |
| Substring | SUBSTRING(start, end, s) | SUBSTRING(0, 3, "Hello") | "Hel" |
| Position | POSITION(s, char) | POSITION("Hello", "l") | 2 |
| Concatenation | s1 + s2 | "Hello" + " World" | "Hello World" |
| To ASCII | CHAR_TO_CODE(c) | CHAR_TO_CODE("A") | 65 |
| From ASCII | CODE_TO_CHAR(n) | CODE_TO_CHAR(65) | "A" |

### 3.2.7 Subroutines

**Procedures:**
- Named block of code that performs a task
- Does NOT return a value
- Called by name with any required arguments
\`\`\`
SUBROUTINE greet(name)
    OUTPUT "Hello, " + name
ENDSUBROUTINE

greet("Alice")  # Outputs: Hello, Alice
\`\`\`

**Functions:**
- Named block of code that performs a task
- RETURNS a value
- Called and result stored or used
\`\`\`
SUBROUTINE calculateArea(length, width)
    area ← length * width
    RETURN area
ENDSUBROUTINE

roomArea ← calculateArea(5, 3)  # roomArea = 15
\`\`\`

**Parameters:**
- Variables passed into subroutines
- Allow subroutines to work with different data
- Act as local variables within the subroutine

**Local vs Global Variables:**
| Local | Global |
|-------|--------|
| Declared inside subroutine | Declared outside all subroutines |
| Only accessible within that subroutine | Accessible from anywhere |
| Created when subroutine called | Exists for entire program |
| Destroyed when subroutine ends | Can be modified by any code |
| Preferred for encapsulation | Should be minimised |

**Benefits of Subroutines:**
- Code reusability
- Easier to test and debug
- Makes code more readable
- Enables team development
- Reduces code duplication

### 3.2.8 Robust and Secure Programming

**Defensive Design:**
- Anticipating user errors and misuse
- Input validation
- Authentication
- Planning for all possible scenarios

**Input Validation Techniques:**
- Range check: Is value within acceptable range?
- Presence check: Has data been entered?
- Type check: Is it the correct data type?
- Length check: Is it the correct length?
- Format check: Is it in the correct format?

**Example Validation:**
\`\`\`
REPEAT
    OUTPUT "Enter age (0-120): "
    INPUT age
    IF age < 0 OR age > 120 THEN
        OUTPUT "Invalid age. Please try again."
    ENDIF
UNTIL age >= 0 AND age <= 120
\`\`\`

**Testing:**
| Test Data Type | Description | Example |
|----------------|-------------|---------|
| Normal | Typical expected input | Age: 25 |
| Boundary | Edge of valid range | Age: 0, 120 |
| Erroneous | Invalid input | Age: -5, "abc" |

**Error Types:**
| Error Type | Description | Example |
|------------|-------------|---------|
| Syntax Error | Breaks language rules | Missing bracket, misspelled keyword |
| Logic Error | Program runs but wrong output | Using + instead of - |
| Runtime Error | Crashes during execution | Division by zero |
`;

const AQA_CS_DATA_REPRESENTATION_KNOWLEDGE = `
## Topic 3.3: Fundamentals of Data Representation

### 3.3.1 Number Bases

**Binary (Base 2):**
- Uses digits 0 and 1
- Each position represents a power of 2
- Used internally by all digital computers

**Denary (Base 10):**
- Uses digits 0-9
- Each position represents a power of 10
- Standard human number system

**Hexadecimal (Base 16):**
- Uses digits 0-9 and letters A-F
- Each hex digit represents 4 binary digits
- Used for memory addresses, colour codes, MAC addresses

### 3.3.2 Number Conversions

**Binary to Denary:**
Add the place values where there is a 1.
Example: 10110110₂
= 128 + 32 + 16 + 4 + 2 = 182₁₀

**Denary to Binary:**
Repeatedly divide by 2, record remainders.
Example: 75₁₀
75 ÷ 2 = 37 r1
37 ÷ 2 = 18 r1
18 ÷ 2 = 9 r0
9 ÷ 2 = 4 r1
4 ÷ 2 = 2 r0
2 ÷ 2 = 1 r0
1 ÷ 2 = 0 r1
Read from bottom: 1001011₂

**Binary to Hexadecimal:**
Split into groups of 4 bits (from right), convert each group.
Example: 10110110₂
= 1011 0110 = B6₁₆

**Hexadecimal to Binary:**
Convert each hex digit to 4 binary digits.
Example: A3₁₆
A = 1010, 3 = 0011
= 10100011₂

**Hexadecimal to Denary:**
Multiply each digit by power of 16 and add.
Example: 2F₁₆
= (2 × 16) + (15 × 1) = 32 + 15 = 47₁₀

**Denary to Hexadecimal:**
Convert to binary first, then to hex.
OR divide by 16 repeatedly.

### 3.3.3 Binary Arithmetic

**Binary Addition:**
Rules: 0+0=0, 0+1=1, 1+0=1, 1+1=10 (carry 1)

Example: 1011 + 0111
\`\`\`
    1011
  + 0111
  ------
   10010
\`\`\`
(11 + 7 = 18)

**Overflow:**
- Occurs when result is too large for available bits
- 8-bit max value is 11111111 (255)
- Adding to max causes overflow

**Binary Shifts:**
| Shift | Operation | Effect |
|-------|-----------|--------|
| Left shift | Move bits left, fill with 0s | Multiply by 2 for each shift |
| Right shift | Move bits right, lose rightmost | Divide by 2 for each shift |

Example: 00001100 (12)
Left shift 2: 00110000 (48) [12 × 4]
Right shift 1: 00000110 (6) [12 ÷ 2]

### 3.3.4 Character Encoding

**ASCII (7-bit, 128 characters):**
- Standard character encoding
- 'A' = 65, 'a' = 97, '0' = 48
- Includes control characters, letters, numbers, symbols

**Extended ASCII (8-bit, 256 characters):**
- Additional characters for symbols and accented letters
- Still limited to Latin-based alphabets

**Unicode:**
- International standard for all world characters
- Can represent over 1 million characters
- UTF-8: Variable length (1-4 bytes)
- UTF-16: 2 or 4 bytes
- Includes emoji, mathematical symbols, etc.

**Character Set Comparison:**
| Feature | ASCII | Unicode |
|---------|-------|---------|
| Bits per character | 7 (8 with extended) | Variable (8-32) |
| Total characters | 128 (256 extended) | 143,000+ |
| Languages supported | English mainly | All world languages |
| File size | Smaller | Larger |

### 3.3.5 Representing Images

**Bitmap Images:**
- Made up of pixels (picture elements)
- Each pixel stores colour data
- Resolution × colour depth = file size

**Key Terms:**
| Term | Definition |
|------|------------|
| Pixel | Smallest element of an image |
| Resolution | Number of pixels (width × height) |
| Colour depth | Bits per pixel (determines colours available) |
| Metadata | Data about the image (dimensions, date, etc.) |

**Colour Depth Examples:**
| Colour Depth | Colours Available |
|--------------|-------------------|
| 1-bit | 2 (black and white) |
| 8-bit | 256 |
| 24-bit | 16,777,216 (True colour) |

**File Size Calculation:**
File size (bits) = width × height × colour depth

Example: 800 × 600 image, 24-bit colour
= 800 × 600 × 24 = 11,520,000 bits
= 11,520,000 ÷ 8 = 1,440,000 bytes
≈ 1.44 MB (uncompressed)

**Effect of Changes:**
| Change | Effect on File Size | Effect on Quality |
|--------|--------------------|--------------------|
| Increase resolution | Increases | Better detail |
| Increase colour depth | Increases | More colours |
| Decrease resolution | Decreases | Less detail |
| Decrease colour depth | Decreases | Fewer colours |

### 3.3.6 Representing Sound

**Sound Digitisation:**
- Continuous sound wave sampled at regular intervals
- Each sample recorded as binary number

**Key Terms:**
| Term | Definition |
|------|------------|
| Sample rate | Number of samples per second (Hz) |
| Bit depth | Bits per sample (determines accuracy) |
| Duration | Length of audio in seconds |

**Common Sample Rates:**
- CD quality: 44,100 Hz (44.1 kHz)
- DVD quality: 48,000 Hz (48 kHz)
- Telephone: 8,000 Hz (8 kHz)

**File Size Calculation:**
File size (bits) = sample rate × bit depth × duration × channels

Example: 3-minute stereo at 44.1 kHz, 16-bit
= 44,100 × 16 × 180 × 2
= 254,016,000 bits
= 31,752,000 bytes ≈ 31.75 MB

**Effect of Changes:**
| Change | Effect on File Size | Effect on Quality |
|--------|--------------------|--------------------|
| Higher sample rate | Increases | Better frequency reproduction |
| Higher bit depth | Increases | More accurate amplitude |
| Mono instead of stereo | Decreases (halved) | Loss of stereo effect |

### 3.3.7 Data Compression

**Why Compress?**
- Reduce file size
- Faster transmission
- Less storage needed
- Reduce bandwidth costs

**Lossy Compression:**
- Permanently removes data
- Cannot recover original
- Smaller file sizes
- Examples: JPEG, MP3, MP4
- Best for: media files where some quality loss acceptable

**Lossless Compression:**
- No data lost
- Original can be recovered
- Larger than lossy
- Examples: PNG, FLAC, ZIP
- Best for: text, data files, when quality critical

**Run-Length Encoding (RLE):**
- Lossless compression
- Counts consecutive identical values
- Format: (count, value)
- Example: AAAABBBCC → 4A3B2C
- Works well for: simple images, data with repetition

**Huffman Coding:**
- Lossless compression
- Uses variable-length codes
- Frequent characters: shorter codes
- Rare characters: longer codes
- Based on frequency analysis
`;

const AQA_CS_COMPUTER_SYSTEMS_KNOWLEDGE = `
## Topic 3.4: Computer Systems

### 3.4.1 Hardware and Software

**Hardware:**
- Physical components of a computer
- Tangible parts you can touch
- Examples: CPU, RAM, hard drive, keyboard, monitor

**Software:**
- Programs and instructions
- Not tangible
- Two types: System software and Application software

**System Software:**
- Operates and controls the computer
- Manages hardware resources
- Examples: Operating systems, utilities, drivers

**Application Software:**
- Performs specific tasks for users
- Examples: Word processors, games, browsers

### 3.4.2 CPU Architecture

**CPU Components:**
| Component | Function |
|-----------|----------|
| ALU (Arithmetic Logic Unit) | Performs calculations and logical operations |
| CU (Control Unit) | Coordinates all activities, fetches and decodes instructions |
| Cache | Fast memory close to CPU for frequently used data |
| Registers | Tiny, ultra-fast storage within CPU |

**Key Registers:**
| Register | Purpose |
|----------|---------|
| Program Counter (PC) | Holds address of next instruction |
| Memory Address Register (MAR) | Holds address being accessed |
| Memory Data Register (MDR) | Holds data being transferred |
| Accumulator (ACC) | Stores results of calculations |

**Fetch-Decode-Execute Cycle:**
1. **FETCH:**
   - PC holds address of next instruction
   - Address copied to MAR
   - Instruction fetched from memory to MDR
   - PC incremented
2. **DECODE:**
   - CU decodes the instruction
   - Determines what operation to perform
3. **EXECUTE:**
   - Instruction carried out
   - May involve ALU calculations
   - Result stored in accumulator

**Von Neumann Architecture:**
- Single memory for both instructions and data
- Instructions fetched and executed sequentially
- Components connected by buses
- Bottleneck: CPU speed limited by memory access speed

**Factors Affecting CPU Performance:**
| Factor | Effect |
|--------|--------|
| Clock speed (GHz) | Higher = more cycles per second = faster |
| Number of cores | More cores = more parallel processing |
| Cache size | Larger cache = less waiting for data from RAM |
| Cache levels | L1 fastest (smallest), L2, L3 larger but slower |

### 3.4.3 Secondary Storage

**Why Secondary Storage Needed:**
- RAM is volatile (loses data when power off)
- Need permanent storage for files and programs
- Store operating system for boot-up

**Types of Secondary Storage:**
| Type | Examples | Advantages | Disadvantages |
|------|----------|------------|---------------|
| Magnetic | HDD, tape | Cheap per GB, high capacity | Moving parts, slower, fragile |
| Optical | CD, DVD, Blu-ray | Portable, cheap, archival | Limited capacity, slow, scratches |
| Solid State | SSD, USB, SD card | Fast, no moving parts, durable | More expensive per GB |

**Comparison:**
| Feature | HDD | SSD | Optical |
|---------|-----|-----|---------|
| Speed | Medium | Fast | Slow |
| Capacity | High | Medium-High | Low |
| Cost per GB | Low | Medium | Very low |
| Durability | Low (moving parts) | High | Medium |
| Portability | Low | High | High |

### 3.4.4 Boolean Logic

**Logic Gates:**

**AND Gate:**
- Output 1 only if ALL inputs are 1
- Written: A AND B or A ∧ B

**OR Gate:**
- Output 1 if ANY input is 1
- Written: A OR B or A ∨ B

**NOT Gate:**
- Reverses the input
- Written: NOT A or ¬A or A̅

**Combined Logic Circuits:**
Example: (A AND B) OR (NOT C)
- First evaluate AND
- Then evaluate NOT
- Finally evaluate OR

**Truth Table Construction:**
For expression: A AND (B OR C)

| A | B | C | B OR C | A AND (B OR C) |
|---|---|---|--------|----------------|
| 0 | 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 1 | 0 |
| 0 | 1 | 0 | 1 | 0 |
| 0 | 1 | 1 | 1 | 0 |
| 1 | 0 | 0 | 0 | 0 |
| 1 | 0 | 1 | 1 | 1 |
| 1 | 1 | 0 | 1 | 1 |
| 1 | 1 | 1 | 1 | 1 |

### 3.4.5 Software Classification

**Operating System Functions:**
1. **User Interface** - GUI/CLI for user interaction
2. **Memory Management** - Allocates RAM to programs
3. **Peripheral Management** - Controls input/output devices
4. **Multitasking** - Runs multiple programs simultaneously
5. **File Management** - Organises files and folders
6. **Security** - User accounts, permissions, authentication
7. **Device Drivers** - Software to communicate with hardware

**Utility Software:**
| Utility | Purpose |
|---------|---------|
| Antivirus | Detects and removes malware |
| Disk defragmenter | Reorganises files for faster access (HDD only) |
| Backup software | Creates copies of files for recovery |
| File compression | Reduces file size |
| Encryption | Protects data by encoding it |

### 3.4.6 Programming Languages

**High-Level Languages:**
- Close to human language
- Easier to read and write
- Portable across different systems
- Need translation (compiler/interpreter)
- Examples: Python, Java, C++

**Low-Level Languages:**
| Type | Description | Use Cases |
|------|-------------|-----------|
| Assembly | Mnemonics for machine operations | Device drivers, embedded systems |
| Machine Code | Binary instructions CPU executes | Direct hardware control |

**Translators:**
| Translator | Function | Advantages | Disadvantages |
|------------|----------|------------|---------------|
| Compiler | Translates entire program at once | Fast execution, optimised code | Must recompile after changes |
| Interpreter | Translates line by line during execution | Easy debugging, no recompilation | Slower execution |
| Assembler | Converts assembly to machine code | Direct hardware access | Platform specific |

**Comparison:**
| Feature | Compiler | Interpreter |
|---------|----------|-------------|
| Translation | All at once before running | Line by line during running |
| Execution speed | Fast | Slow |
| Debugging | Harder | Easier (stops at error) |
| Distribution | Executable file | Needs source + interpreter |
| Error detection | After compilation | During runtime |
`;

const AQA_CS_NETWORKS_KNOWLEDGE = `
## Topic 3.5: Fundamentals of Computer Networks

### 3.5.1 Network Types

**LAN (Local Area Network):**
- Small geographical area (building, campus)
- Owned and maintained by organisation
- High-speed connections
- Examples: School network, office network

**WAN (Wide Area Network):**
- Large geographical area (cities, countries)
- Often uses third-party connections
- The Internet is the largest WAN
- Examples: Bank branch networks, multinational company networks

**Comparison:**
| Feature | LAN | WAN |
|---------|-----|-----|
| Area | Small (building) | Large (countries) |
| Speed | High (Gbps) | Lower (depends on connection) |
| Ownership | Single organisation | Multiple organisations |
| Cost | Lower ongoing costs | Higher connection costs |
| Security | Easier to control | More security challenges |

### 3.5.2 Network Topologies

**Star Topology:**
- All devices connect to central switch/hub
- Advantages:
  - Easy to add new devices
  - Failure of one device doesn't affect others
  - Easy to identify faults
- Disadvantages:
  - If central switch fails, entire network fails
  - More cable required
  - Switch can be expensive

**Bus Topology:**
- All devices connect to a single backbone cable
- Advantages:
  - Cheap to install
  - Good for small networks
  - Less cable than star
- Disadvantages:
  - If backbone fails, entire network fails
  - Poor security (all data visible)
  - Slow with many devices (collisions)

**Mesh Topology:**
- Every device connected to every other device
- Full mesh: all-to-all connections
- Partial mesh: some redundant connections
- Advantages:
  - Very reliable (multiple paths)
  - Data can take quickest route
  - No single point of failure
- Disadvantages:
  - Very expensive (lots of cable)
  - Complex to set up
  - Difficult to manage

### 3.5.3 Network Hardware

| Device | Function |
|--------|----------|
| **Router** | Routes packets between networks, connects LAN to Internet |
| **Switch** | Connects devices on a LAN, directs packets to specific device |
| **NIC** | Network Interface Card - enables device to connect to network |
| **WAP** | Wireless Access Point - provides Wi-Fi connectivity |
| **Hub** | Broadcasts data to all connected devices (outdated) |

**Wired vs Wireless:**
| Feature | Wired (Ethernet) | Wireless (Wi-Fi) |
|---------|------------------|------------------|
| Speed | Faster, more stable | Slower, can vary |
| Security | More secure | Easier to intercept |
| Mobility | None | Full mobility |
| Installation | More difficult, cables | Easier, no cables |
| Interference | None | Can be affected |

### 3.5.4 Network Protocols

**What is a Protocol?**
- Agreed set of rules for communication
- Ensures devices can communicate successfully
- Standardises data formats and exchange

**Common Protocols:**
| Protocol | Layer | Purpose |
|----------|-------|---------|
| TCP | Transport | Reliable, ordered data delivery |
| IP | Network | Addressing and routing packets |
| HTTP | Application | Web page requests (unencrypted) |
| HTTPS | Application | Secure web page requests (encrypted) |
| FTP | Application | File transfer |
| SMTP | Application | Sending email |
| POP | Application | Receiving email (downloads to device) |
| IMAP | Application | Receiving email (keeps on server) |

**TCP/IP Model Layers:**
| Layer | Function | Example Protocols |
|-------|----------|-------------------|
| Application | User-facing services | HTTP, FTP, SMTP |
| Transport | Reliable data transfer | TCP, UDP |
| Internet | Addressing and routing | IP |
| Network Access | Physical transmission | Ethernet, Wi-Fi |

**Benefits of Layered Protocols:**
- Modularity: change one layer without affecting others
- Standardisation: different manufacturers compatible
- Troubleshooting: isolate problems to specific layer
- Development: work on layers independently

### 3.5.5 The Internet and WWW

**Internet vs World Wide Web:**
| Internet | World Wide Web |
|----------|----------------|
| Global network of networks | Collection of web pages |
| Hardware/infrastructure | Content/information |
| Uses various protocols | Uses HTTP/HTTPS |
| Includes email, FTP, etc. | Subset of Internet |

**DNS (Domain Name System):**
- Translates domain names to IP addresses
- Human-readable: www.google.com
- Machine-readable: 142.250.187.206
- DNS servers distributed globally

**How DNS Works:**
1. User types URL in browser
2. Computer queries DNS server
3. DNS returns IP address
4. Browser connects to IP address
5. Web page loaded

**IP Addressing:**
| Version | Format | Example | Addresses |
|---------|--------|---------|-----------|
| IPv4 | 4 numbers (0-255) | 192.168.1.1 | ~4 billion |
| IPv6 | 8 groups of hex | 2001:0db8:85a3::8a2e | ~340 undecillion |

**Packet Switching:**
- Data split into packets
- Each packet takes own route
- Packets reassembled at destination
- Benefits:
  - Efficient use of network
  - Fault tolerant (can reroute)
  - Fair sharing of bandwidth

**Cloud Computing:**
- Services delivered over Internet
- No local installation needed
- Types:
  - IaaS: Infrastructure (virtual machines)
  - PaaS: Platform (development environments)
  - SaaS: Software (applications like Google Docs)
- Benefits: Accessibility, scalability, collaboration
- Drawbacks: Internet dependency, security concerns
`;

const AQA_CS_CYBERSECURITY_KNOWLEDGE = `
## Topic 3.6: Cyber Security

### 3.6.1 Social Engineering Attacks

**Definition:** Manipulating people into revealing confidential information or performing actions

**Phishing:**
- Fake emails/websites impersonating trusted organisations
- Tricks users into entering credentials
- Prevention: Check sender address, look for HTTPS, verify requests

**Blagging (Pretexting):**
- Creating a fabricated scenario to obtain information
- Attacker pretends to be someone with authority
- Example: Pretending to be IT support to get passwords

**Pharming:**
- Redirecting users to fake websites
- Manipulates DNS settings or hosts file
- User types correct URL but lands on fake site

**Shoulder Surfing:**
- Observing someone entering sensitive information
- Looking at screens or keypads
- Prevention: Privacy screens, awareness

### 3.6.2 Malware Types

| Type | Description | Spread Method |
|------|-------------|---------------|
| **Virus** | Attaches to programs, activates when run | File sharing, email attachments |
| **Worm** | Self-replicating, spreads across networks | Network connections, vulnerabilities |
| **Trojan** | Disguised as legitimate software | Downloads, email attachments |
| **Ransomware** | Encrypts files, demands payment | Phishing, downloads |
| **Spyware** | Secretly monitors user activity | Bundled software, downloads |
| **Adware** | Displays unwanted advertisements | Bundled with free software |

### 3.6.3 Prevention Methods

**Technical Measures:**
| Method | Description |
|--------|-------------|
| **Firewall** | Monitors and filters network traffic |
| **Anti-malware** | Detects and removes malicious software |
| **Encryption** | Converts data to unreadable format |
| **Authentication** | Verifies user identity |
| **Automatic updates** | Patches security vulnerabilities |
| **MAC address filtering** | Only allows known devices on network |

**Access Control:**
- User access levels (admin, standard, guest)
- Principle of least privilege
- Regular review of access rights

**Password Policies:**
- Minimum length (8+ characters)
- Mix of uppercase, lowercase, numbers, symbols
- Regular password changes
- No password reuse
- Two-factor authentication (2FA)

**Biometric Authentication:**
- Fingerprint recognition
- Facial recognition
- Iris scanning
- Advantages: Can't be forgotten or shared
- Disadvantages: Cannot be changed if compromised

**Two-Factor Authentication (2FA):**
- Combines two different authentication methods:
  - Something you know (password)
  - Something you have (phone/token)
  - Something you are (biometric)

### 3.6.4 Penetration Testing

**Definition:** Authorised attempt to breach system security to find vulnerabilities

**Types:**
- White box: Full knowledge of system
- Black box: No prior knowledge
- Grey box: Partial knowledge

**Benefits:**
- Identifies vulnerabilities before attackers
- Tests incident response procedures
- Validates security investments
- Compliance requirements

**Process:**
1. Planning and reconnaissance
2. Scanning and enumeration
3. Gaining access
4. Maintaining access
5. Analysis and reporting
`;

const AQA_CS_DATABASES_KNOWLEDGE = `
## Topic 3.7: Relational Databases and SQL

### 3.7.1 Database Concepts

**Flat File Database:**
- Single table containing all data
- Data stored in rows and columns
- Problems: Data redundancy, inconsistency, hard to maintain

**Relational Database:**
- Multiple related tables
- Tables linked through keys
- Reduces redundancy
- Better data integrity

**Key Terms:**
| Term | Definition | Example |
|------|------------|---------|
| **Table** | Collection of related records | Customers, Orders |
| **Record** | Single row of data | One customer's details |
| **Field** | Single item of data (column) | CustomerName, Email |
| **Primary Key** | Unique identifier for each record | CustomerID |
| **Foreign Key** | Field linking to another table's primary key | CustomerID in Orders |

### 3.7.2 Entity Relationships

**One-to-One (1:1):**
- One record in Table A relates to one record in Table B
- Example: Person - Passport

**One-to-Many (1:M):**
- One record in Table A relates to many in Table B
- Example: Customer - Orders
- Most common relationship type

**Many-to-Many (M:M):**
- Multiple records in A relate to multiple in B
- Requires junction/linking table
- Example: Students - Courses

### 3.7.3 SQL Commands

**SELECT - Retrieving Data:**
\`\`\`sql
-- Select all columns
SELECT * FROM Customers

-- Select specific columns
SELECT CustomerName, Email FROM Customers

-- With condition
SELECT * FROM Customers WHERE Age > 18

-- Multiple conditions
SELECT * FROM Customers WHERE Age > 18 AND Country = 'UK'

-- OR condition
SELECT * FROM Products WHERE Price < 10 OR Category = 'Sale'

-- Ordering results
SELECT * FROM Products ORDER BY Price ASC
SELECT * FROM Products ORDER BY Name DESC

-- Combined example
SELECT ProductName, Price
FROM Products
WHERE Category = 'Electronics' AND Price < 100
ORDER BY Price ASC
\`\`\`

**INSERT - Adding Records:**
\`\`\`sql
INSERT INTO Customers (CustomerID, Name, Email, Age)
VALUES (101, 'John Smith', 'john@email.com', 25)
\`\`\`

**UPDATE - Modifying Records:**
\`\`\`sql
UPDATE Customers
SET Email = 'newemail@email.com'
WHERE CustomerID = 101

-- Update multiple fields
UPDATE Products
SET Price = 19.99, Stock = 50
WHERE ProductID = 5
\`\`\`

**DELETE - Removing Records:**
\`\`\`sql
DELETE FROM Customers
WHERE CustomerID = 101

-- Delete with condition
DELETE FROM Orders
WHERE OrderDate < '2023-01-01'
\`\`\`

### 3.7.4 SQL Operators

**Comparison Operators:**
| Operator | Meaning |
|----------|---------|
| = | Equal to |
| <> or != | Not equal to |
| < | Less than |
| > | Greater than |
| <= | Less than or equal |
| >= | Greater than or equal |
| LIKE | Pattern matching |
| BETWEEN | Within range |
| IN | Matches list of values |

**Wildcard Characters:**
- % matches any number of characters
- _ matches single character

\`\`\`sql
-- Names starting with 'J'
SELECT * FROM Customers WHERE Name LIKE 'J%'

-- Names containing 'son'
SELECT * FROM Customers WHERE Name LIKE '%son%'

-- Names with exactly 4 characters
SELECT * FROM Customers WHERE Name LIKE '____'
\`\`\`
`;

const AQA_CS_ETHICS_KNOWLEDGE = `
## Topic 3.8: Ethical, Legal and Environmental Impacts

### 3.8.1 Legislation

**Data Protection Act 2018 / GDPR:**
Principles:
1. Lawful, fair and transparent processing
2. Purpose limitation (specific purpose only)
3. Data minimisation (only collect what's needed)
4. Accuracy (keep data accurate)
5. Storage limitation (don't keep longer than needed)
6. Security (protect against unauthorised access)
7. Accountability (organisation responsible)

Individual Rights:
- Right to access your data
- Right to rectification
- Right to erasure ("right to be forgotten")
- Right to data portability
- Right to object to processing

**Computer Misuse Act 1990:**
| Section | Offence | Maximum Penalty |
|---------|---------|-----------------|
| 1 | Unauthorised access to computer material | 2 years imprisonment |
| 2 | Unauthorised access with intent to commit further offences | 5 years imprisonment |
| 3 | Unauthorised modification of computer material | 10 years imprisonment |

**Copyright, Designs and Patents Act 1988:**
- Protects creative works (software, music, images)
- Illegal to copy without permission
- Illegal to distribute copyrighted material
- Software piracy is copyright infringement

**Freedom of Information Act 2000:**
- Right to request information from public bodies
- Some exemptions (national security, personal data)

### 3.8.2 Software Licensing

**Proprietary Software:**
- Owned by company
- Source code not available
- Pay for license
- Examples: Microsoft Office, Adobe Photoshop

**Open Source Software:**
- Source code freely available
- Can modify and distribute
- Community developed
- Examples: Linux, Firefox, VLC

**Comparison:**
| Feature | Proprietary | Open Source |
|---------|-------------|-------------|
| Cost | Usually paid | Usually free |
| Source code | Hidden | Available |
| Modification | Not allowed | Allowed |
| Support | Official support | Community support |
| Updates | Controlled by owner | Community driven |

### 3.8.3 Environmental Issues

**Negative Impacts:**
| Issue | Description |
|-------|-------------|
| **E-waste** | Discarded electronics containing toxic materials |
| **Energy consumption** | Data centres use massive amounts of electricity |
| **Resource depletion** | Mining for rare earth materials |
| **Carbon footprint** | Manufacturing and shipping devices |

**Positive Impacts:**
- Paperless offices reduce deforestation
- Video conferencing reduces travel
- Smart systems optimise energy use
- Remote working reduces commuting

**Mitigation Strategies:**
- Recycling electronics properly
- Energy-efficient data centres
- Renewable energy for tech companies
- Extending device lifespans
- Right to repair initiatives

### 3.8.4 Ethical Issues

**Privacy and Surveillance:**
- CCTV in public spaces
- Employee monitoring
- Social media data collection
- Location tracking

**Artificial Intelligence:**
- Job displacement through automation
- Algorithmic bias
- Autonomous weapons
- Decision-making transparency

**Digital Divide:**
- Gap between those with/without technology access
- Economic inequality
- Geographic inequality
- Age-related digital literacy

**Impact on Employment:**
- Automation replacing jobs
- New types of jobs created
- Remote working opportunities
- Gig economy growth

**Stakeholder Impacts:**
| Stakeholder | Potential Benefits | Potential Drawbacks |
|-------------|-------------------|---------------------|
| Users | Convenience, efficiency | Privacy concerns, dependence |
| Businesses | Reduced costs, new markets | Security risks, adaptation costs |
| Environment | Efficiency improvements | E-waste, energy use |
| Society | Access to information | Digital divide, job losses |
`;

// ============================================================================
// WORKED EXAMPLES
// ============================================================================

const AQA_CS_WORKED_EXAMPLES = `
## Worked Examples

### Example 1: Binary Conversion (2 marks)
**Q:** Convert the denary number 156 to binary. [2 marks]

**Working:**
| 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |
|-----|----|----|----|----|---|---|---|
| 1 | 0 | 0 | 1 | 1 | 1 | 0 | 0 |

156 = 128 + 16 + 8 + 4 = 156 ✓

**Answer:** 10011100 [2 marks]

---

### Example 2: Hexadecimal Conversion (2 marks)
**Q:** Convert the binary number 11010110 to hexadecimal. [2 marks]

**Working:**
Split into nibbles: 1101 0110
1101 = 13 = D
0110 = 6 = 6

**Answer:** D6 [2 marks]

---

### Example 3: Image File Size (3 marks)
**Q:** Calculate the file size in megabytes of an image with resolution 1024 × 768 pixels and 24-bit colour depth. Show your working. [3 marks]

**Working:**
File size = width × height × colour depth
= 1024 × 768 × 24 bits [1 mark for formula/substitution]
= 18,874,368 bits [1 mark for calculation]
= 18,874,368 ÷ 8 = 2,359,296 bytes
= 2,359,296 ÷ 1,000,000 = **2.36 MB** [1 mark for correct answer with units]

---

### Example 4: Sound File Size (3 marks)
**Q:** A piece of audio is 2 minutes long, recorded in stereo at 44,100 Hz with 16-bit depth. Calculate the file size in megabytes. [3 marks]

**Working:**
Duration = 2 × 60 = 120 seconds
File size = sample rate × bit depth × duration × channels
= 44,100 × 16 × 120 × 2 bits [1 mark]
= 169,344,000 bits [1 mark]
= 169,344,000 ÷ 8 = 21,168,000 bytes
= 21,168,000 ÷ 1,000,000 = **21.17 MB** [1 mark]

---

### Example 5: Trace Table (4 marks)
**Q:** Complete the trace table for the following algorithm. You may not need all rows.

\`\`\`
x ← 5
y ← 2
WHILE x > 0
    OUTPUT x
    x ← x - y
ENDWHILE
\`\`\`

**Answer:**
| x | y | OUTPUT |
|---|---|--------|
| 5 | 2 | |
| 5 | 2 | 5 |
| 3 | 2 | 3 |
| 1 | 2 | 1 |
| -1 | 2 | |

[1 mark per correct row, maximum 4 marks]

---

### Example 6: SQL Query (3 marks)
**Q:** Write an SQL statement to display the Name and Price of all products from the Products table where the Category is 'Electronics' and the Price is less than 50. Order the results by Price in ascending order. [3 marks]

**Answer:**
\`\`\`sql
SELECT Name, Price
FROM Products
WHERE Category = 'Electronics' AND Price < 50
ORDER BY Price ASC
\`\`\`

[1 mark for SELECT...FROM]
[1 mark for WHERE with both conditions]
[1 mark for ORDER BY]

---

### Example 7: Code Writing (4 marks)
**Q:** Write an algorithm that asks the user to enter numbers until they enter 0. The algorithm should then output the total of all numbers entered. [4 marks]

**Answer:**
\`\`\`
total ← 0                           [1 mark - initialise total]
INPUT number                        [1 mark - initial input]
WHILE number ≠ 0                    [1 mark - correct loop condition]
    total ← total + number
    INPUT number
ENDWHILE
OUTPUT total                        [1 mark - correct output]
\`\`\`

---

### Example 8: Extended Response (6 marks)
**Q:** Discuss the ethical implications of using artificial intelligence in recruitment. [6 marks]

**Model Answer (Level 3):**

Using AI in recruitment has both positive and negative ethical implications that need careful consideration.

**Benefits:**
AI can process applications quickly and consistently, removing human fatigue that might cause inconsistent decisions. It can potentially reduce some forms of human bias if trained correctly, giving all candidates equal consideration based on their qualifications. This efficiency also benefits applicants who receive faster responses.

**Concerns:**
However, AI systems can perpetuate or amplify existing biases if trained on historical data that reflects past discrimination. For example, if a company historically hired mostly men for technical roles, the AI might learn to favour male applicants. This creates serious ethical concerns about fairness and equal opportunity.

There are also privacy concerns about how much personal data AI systems analyse, and questions about transparency - candidates may not know they're being assessed by AI or understand how decisions are made.

**Conclusion:**
While AI can improve efficiency and potentially reduce some biases, organisations must ensure their AI systems are regularly audited for bias, are transparent about their use, and maintain human oversight of important decisions. The technology should augment human judgement rather than replace it entirely.

[Level 3: 5-6 marks - Clear, balanced discussion with multiple perspectives, appropriate terminology, well-structured argument]
`;

// ============================================================================
// TOPIC-SPECIFIC GUIDANCE
// ============================================================================

const CS_TOPIC_GUIDANCE: Record<string, string> = {
  'aqa-gcse-cs-algorithms': `
${AQA_CS_ALGORITHMS_KNOWLEDGE}

**Common Question Types for Algorithms:**
- Trace table completion (3-5 marks)
- Writing searching/sorting algorithms (4-6 marks)
- Comparing algorithm efficiency (2-4 marks)
- Identifying computational thinking techniques (2-3 marks)
- Creating flowcharts/pseudocode (3-5 marks)
`,

  'aqa-gcse-cs-programming': `
${AQA_CS_PROGRAMMING_KNOWLEDGE}

**Common Question Types for Programming:**
- Code writing with specific requirements (4-8 marks)
- Debugging code (2-4 marks)
- Trace tables (3-5 marks)
- Explaining programming concepts (2-4 marks)
- Identifying data types (1-2 marks)
- String manipulation questions (2-4 marks)
`,

  'aqa-gcse-cs-data-representation': `
${AQA_CS_DATA_REPRESENTATION_KNOWLEDGE}

**Common Question Types for Data Representation:**
- Binary/hex conversions (2-3 marks)
- Binary arithmetic (2-3 marks)
- File size calculations (3-4 marks)
- Explaining compression methods (3-4 marks)
- Comparing character encoding (2-3 marks)
`,

  'aqa-gcse-cs-computer-systems': `
${AQA_CS_COMPUTER_SYSTEMS_KNOWLEDGE}

**Common Question Types for Computer Systems:**
- Boolean logic and truth tables (3-4 marks)
- Explaining CPU components (2-4 marks)
- Comparing storage types (3-4 marks)
- Comparing compilers/interpreters (2-3 marks)
- Describing FDE cycle (3-4 marks)
`,

  'aqa-gcse-cs-networks': `
${AQA_CS_NETWORKS_KNOWLEDGE}

**Common Question Types for Networks:**
- Comparing network topologies (3-4 marks)
- Explaining protocols (2-3 marks)
- Describing network hardware functions (2-4 marks)
- LAN vs WAN comparison (2-3 marks)
- Explaining packet switching/DNS (3-4 marks)
`,

  'aqa-gcse-cs-cybersecurity': `
${AQA_CS_CYBERSECURITY_KNOWLEDGE}

**Common Question Types for Cyber Security:**
- Describing attack types (2-3 marks)
- Explaining prevention methods (2-4 marks)
- Scenario-based security questions (4-6 marks)
- Comparing authentication methods (2-3 marks)
`,

  'aqa-gcse-cs-databases': `
${AQA_CS_DATABASES_KNOWLEDGE}

**Common Question Types for Databases:**
- SQL query writing (3-5 marks)
- Identifying keys and relationships (2-3 marks)
- Explaining database concepts (2-3 marks)
- Designing simple database schemas (3-4 marks)
`,

  'aqa-gcse-cs-ethics': `
${AQA_CS_ETHICS_KNOWLEDGE}

**Common Question Types for Ethics/Legal:**
- Extended response discussions (6 marks)
- Explaining legislation (2-4 marks)
- Environmental impact questions (3-4 marks)
- Ethical scenario analysis (4-6 marks)
`
};

// ============================================================================
// AQA GCSE COMPUTER SCIENCE PRINCIPLES (COMPACT VERSION)
// ============================================================================

const AQA_CS_PRINCIPLES = `
## AQA GCSE Computer Science Exam Principles

### Assessment Objectives
- **AO1** (30%): Demonstrate knowledge and understanding
- **AO2** (40%): Apply knowledge and understanding
- **AO3** (30%): Analyse, evaluate, make reasoned judgements

### Paper Structure
- **Paper 1** (50%): Computational thinking and programming - 2 hours, 80 marks, on-screen
- **Paper 2** (50%): Computing concepts - 1h 45m, 80 marks, written

### Mark Scheme Conventions
- Code case is IGNORED (print = PRINT = Print)
- Alternative correct solutions always acceptable
- Minor syntax errors acceptable if logic clear
- For trace tables: 1 mark per correctly completed row
- Extended response uses levels (L3: 5-6, L2: 3-4, L1: 1-2)

### Key Command Words
| Command | Meaning | Marks |
|---------|---------|-------|
| State/Name/Give | Brief answer, no explanation | 1-2 |
| Define | Give meaning of term | 1-2 |
| Describe | Give features/steps | 2-3 |
| Explain | Give reasons using technical terms | 2-4 |
| Compare | Similarities AND differences | 2-4 |
| Discuss/Evaluate | Extended analysis with conclusion | 4-6 |
| Write | Write code or algorithm | 3-8 |

### Programming Questions
- Use AQA pseudocode syntax (← for assignment)
- Include all required constructs (IF/WHILE/FOR)
- Show understanding of validation and error handling
- For trace tables: include OUTPUT column when needed
`;

// ============================================================================
// QUESTION GENERATION FUNCTIONS
// ============================================================================

export function getAQAGCSEComputerScienceSystemPrompt(): string {
  return `You are an expert AQA GCSE Computer Science examiner creating authentic exam-style questions.

${AQA_CS_ASSESSMENT_OBJECTIVES}

${AQA_CS_PSEUDOCODE_REFERENCE}

${AQA_CS_MARK_SCHEME_CONVENTIONS}

${AQA_CS_QUESTION_TEMPLATES}

${AQA_CS_REFERENCE_DATA}

## Critical Requirements
1. Use EXACT AQA pseudocode syntax (← for assignment, ENDIF, ENDFOR, etc.)
2. Include clear mark allocation in square brackets
3. For trace tables, always include "You may not need to use all the rows"
4. Match the formal, precise language of real AQA papers
5. Ensure technical accuracy in all questions and solutions
6. For programming questions, provide model answers in pseudocode
7. For extended response, use levels of response marking`;
}

export function getAQAGCSEComputerScienceQuestionPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const markRange = getMarkRangeForDifficulty(difficulty);
  const topicGuidance = CS_TOPIC_GUIDANCE[topic.id] || '';

  const difficultyGuidance = {
    easy: `Create an AO1 question testing basic knowledge recall.

**Question Types for Easy (1-3 marks):**
- "Define what is meant by [term]" [1-2 marks]
- "State two features of [concept]" [2-3 marks]
- "Identify which of the following..." [1 mark]
- "Convert [number] from binary to denary" [2-3 marks]
- "Name the [component/process]" [1-2 marks]

**Mark Scheme Format:**
- One clear mark point per mark
- Include acceptable alternative answers
- Use (oe) for "or equivalent" wording`,

    medium: `Create an AO2 question requiring application of knowledge.

**Question Types for Medium (4-6 marks):**
- "Complete the trace table for the algorithm shown below" [4-5 marks]
  (Include: code snippet, trace table with headers, note about unused rows)
- "Explain how [process] works" [4-5 marks]
- "Write code to [task]" [4-6 marks]
- "State the output when the input is [value]" [4-5 marks]
- "Calculate the file size of..." [4 marks]
- "Write an SQL query to..." [4-5 marks]

**Mark Scheme Format:**
- For trace tables: 1 mark per correctly completed row
- For explanations: mark points for each key concept
- For code: accept alternative correct solutions
- For calculations: marks for method and answer`,

    hard: `Create an AO3 question requiring analysis, evaluation, or complex programming.

**Question Types for Hard (6-8 marks):**
- "Write a program that..." [6-8 marks]
  (Complex requirements with validation, loops, arrays)
- "The code contains errors. Identify and correct them" [6-8 marks]
- "Discuss the [ethical/legal/social] implications of..." [6 marks - extended response]
- "Evaluate [approach A] and [approach B] for [scenario]" [6-8 marks]
- "Design an algorithm to..." [6-8 marks]

**Mark Scheme Format:**
- For extended response: use levels of response (Level 1: 1-2, Level 2: 3-4, Level 3: 5-6)
- For code: mark for key features (validation, loop structure, correct output, etc.)
- Accept alternative correct solutions
- Consider both technical accuracy and completeness`
  };

  return `Generate an AQA GCSE Computer Science question.

${AQA_CS_PRINCIPLES}

**Topic**: ${topic.name}
**Subtopic**: ${subtopic || 'General'}
**Difficulty**: ${difficulty}
YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.

## CRITICAL: Content Boundaries
You MUST ONLY test content that is in the AQA GCSE Computer Science (8525) specification.

**DO NOT include pure Mathematics content such as:**
- Mathematical proofs or formal logic beyond basic Boolean algebra
- Abstract number theory not directly related to computing
- Statistical analysis or probability theory

**Focus on APPLIED computing concepts:**
- Binary/hexadecimal conversions as they apply to data representation
- Boolean logic for logic gates and programming conditions
- Basic algorithmic thinking without pure mathematical proofs

**DO NOT include A-Level content such as:**
- Big O notation or formal complexity analysis
- Advanced data structures (trees, graphs, hash tables)
- Object-oriented programming concepts beyond basic understanding
- Functional programming concepts

**For the topic "${topic.name}", test ONLY the GCSE-level computer science content in the specification.**

${topicGuidance}

${difficultyGuidance[difficulty]}

**Critical Requirements:**
- Use EXACT AQA pseudocode syntax (← for assignment, ENDIF, ENDFOR, etc.)
- Include mark allocation in square brackets
- For trace tables, always include "You may not need to use all the rows"
- Match the formal, precise language of real AQA papers
- Ensure all technical content is accurate

Return valid JSON:
{
  "content": "question text here",
  "marks": number,
  "solution": "detailed mark scheme and model answer here",
  "diagram": <optional DiagramSpec - include when question benefits from visual>
}

${getDiagramDocsForSubject('computerscience')}`;
}

// ============================================================================
// SPECIALISED QUESTION PROMPTS
// ============================================================================

/**
 * Generate a trace table question
 */
export function getAQACSTraceTablePrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  return `Generate an AQA GCSE Computer Science TRACE TABLE question.

${AQA_CS_PRINCIPLES}

**Topic**: ${topic.name}
**Subtopic**: ${subtopic || 'Trace tables'}

Create a question with:
1. A code snippet (4-10 lines) using AQA pseudocode syntax
2. A trace table with columns for each variable AND an OUTPUT column if needed
3. The instruction: "Complete the trace table for the algorithm shown below. You may not need to use all the rows in the table."

**Marks**: 3-5 marks (typically 1 mark per correctly completed row)

**Code should include:**
- A loop (FOR, WHILE, or REPEAT)
- Variable updates within the loop
- Clear termination condition
- Optionally: OUTPUT statements, IF conditions inside loop

**Example Structure:**
\`\`\`
x ← 10
y ← 3
WHILE x > 0
    OUTPUT x
    x ← x - y
ENDWHILE
\`\`\`

| x | y | OUTPUT |
|---|---|--------|
| 10 | 3 | |
| ... | ... | ... |

Return valid JSON with the question content (including code and table headers), marks, and solution showing the completed trace table.`;
}

/**
 * Generate a code writing question
 */
export function getAQACSCodeWritingPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const markRange = getMarkRangeForDifficulty(difficulty);

  return `Generate an AQA GCSE Computer Science CODE WRITING question.

${AQA_CS_PRINCIPLES}

${AQA_CS_PSEUDOCODE_REFERENCE}

**Topic**: ${topic.name}
**Subtopic**: ${subtopic || 'Programming'}
**Difficulty**: ${difficulty}
**Marks**: ${markRange.min}-${markRange.max}

Create a question asking students to write code/algorithm that:
- Has a clear, specific task
- States required inputs and outputs
- For harder questions: includes validation requirements
- Specifies any arrays or data structures needed

**Format**: "Write an algorithm/program that..."

**Mark scheme should:**
- List marks for each key feature:
  - Correct input handling (1 mark)
  - Correct loop/selection structure (1-2 marks)
  - Correct calculation/logic (1-2 marks)
  - Correct output (1 mark)
  - Validation if required (1-2 marks)
- Note: "Alternative correct solutions acceptable"
- Note: "Minor syntax errors acceptable if logic is clear"

Use AQA pseudocode syntax. Return valid JSON.`;
}

/**
 * Generate a SQL question
 */
export function getAQACSSQLPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const markRange = getMarkRangeForDifficulty(difficulty);

  return `Generate an AQA GCSE Computer Science SQL question.

${AQA_CS_PRINCIPLES}

${AQA_CS_DATABASES_KNOWLEDGE}

**Topic**: ${topic.name}
**Subtopic**: ${subtopic || 'SQL'}
**Difficulty**: ${difficulty}
**Marks**: ${markRange.min}-${markRange.max}

Create a question that:
1. Describes a database table with clear field names
2. Specifies what data needs to be retrieved/modified
3. May require multiple conditions (AND/OR)
4. May require sorting (ORDER BY)

**For Easy (SELECT only):**
- Simple SELECT with one or two fields
- Single WHERE condition

**For Medium (SELECT with multiple conditions):**
- SELECT with specific fields
- Multiple WHERE conditions (AND/OR)
- ORDER BY clause

**For Hard (INSERT/UPDATE/DELETE or complex SELECT):**
- INSERT INTO with values
- UPDATE with WHERE condition
- DELETE with WHERE condition
- Complex SELECT with wildcards

**Mark Scheme:**
- 1 mark for correct SELECT...FROM
- 1 mark for correct WHERE condition(s)
- 1 mark for correct ORDER BY (if required)
- 1 mark for correct values/syntax

Return valid JSON.`;
}

/**
 * Generate an extended response question
 */
export function getAQACSExtendedResponsePrompt(
  topic: Topic,
  subtopic?: string
): string {
  return `Generate an AQA GCSE Computer Science EXTENDED RESPONSE question (6 marks).

${AQA_CS_PRINCIPLES}

**Topic**: ${topic.name}
**Subtopic**: ${subtopic || 'Extended discussion'}

Create a discussion/evaluation question about:
- Ethical implications of technology
- Legal considerations
- Environmental impacts
- Social implications
- Comparison of technologies/approaches

**Format**: "Discuss..." or "Evaluate..." or "Compare..."

**Mark scheme MUST use Levels of Response:**

**Level 3 (5-6 marks):**
- Comprehensive, well-structured response
- Demonstrates thorough understanding
- Uses appropriate technical terminology throughout
- Considers multiple perspectives
- Draws reasoned conclusions

**Level 2 (3-4 marks):**
- Good response with some detail
- Demonstrates understanding
- Uses some technical terminology
- May lack balance or depth in places

**Level 1 (1-2 marks):**
- Basic response with limited detail
- Some relevant points
- Limited use of terminology
- May be one-sided or superficial

**Level 0 (0 marks):**
- Nothing creditworthy

Include indicative content listing specific points that might appear in answers.

Return valid JSON.`;
}

/**
 * Generate a conversion/calculation question
 */
export function getAQACSCalculationPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const markRange = getMarkRangeForDifficulty(difficulty);

  return `Generate an AQA GCSE Computer Science CALCULATION question.

${AQA_CS_PRINCIPLES}

${AQA_CS_REFERENCE_DATA}

**Topic**: ${topic.name}
**Subtopic**: ${subtopic || 'Calculations'}
**Difficulty**: ${difficulty}
**Marks**: ${markRange.min}-${markRange.max}

Create a question involving ONE of:
- Binary to denary conversion
- Denary to binary conversion
- Binary to hexadecimal conversion
- Hexadecimal to binary/denary conversion
- Binary addition
- Binary shifts
- Image file size calculation
- Sound file size calculation

**Requirements:**
- State "Show your working" for multi-mark questions
- Use realistic values that work out to sensible answers
- Include units in the answer where appropriate

**Mark Scheme Pattern:**
- 1 mark for method/formula
- 1 mark for correct calculation/working
- 1 mark for correct answer with units

**Example Mark Scheme:**
- [1] Correct formula/method shown
- [1] Correct substitution of values
- [1] Correct final answer with appropriate units

Return valid JSON with clear working in the solution.`;
}

/**
 * Generate a Boolean logic/truth table question
 */
export function getAQACSBooleanLogicPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const markRange = getMarkRangeForDifficulty(difficulty);

  return `Generate an AQA GCSE Computer Science BOOLEAN LOGIC question.

${AQA_CS_PRINCIPLES}

**Boolean Logic Reference:**
AND: Output 1 only if ALL inputs are 1
OR: Output 1 if ANY input is 1
NOT: Reverses the input (0→1, 1→0)

**Topic**: ${topic.name}
**Subtopic**: ${subtopic || 'Boolean logic'}
**Difficulty**: ${difficulty}
**Marks**: ${markRange.min}-${markRange.max}

Create a question involving ONE of:
- Complete a truth table for a given expression
- Write a Boolean expression from a truth table
- Draw a logic circuit for an expression
- Determine output for given inputs
- Simplify a Boolean expression

**For Easy:**
- Single gate (AND, OR, NOT)
- 2 inputs maximum
- Complete 2-4 rows of truth table

**For Medium:**
- Combined gates (e.g., A AND B OR C)
- 2-3 inputs
- Complete full truth table (4-8 rows)

**For Hard:**
- Complex expressions with multiple gates
- May include nested operations
- May require constructing expression from description

**Mark Scheme:**
- For truth tables: 1 mark per correctly completed row/column
- For expressions: marks for correct gates and combination

Return valid JSON.`;
}

// ============================================================================
// COMPACT PROMPT FOR AUTO/STANDARD QUESTIONS
// ============================================================================

/**
 * Compact prompt for generating CS questions - used by the main question generator
 */
export function getAQAComputerScienceCompactPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = CS_TOPIC_GUIDANCE[topic.id] || '';

  return `You are an expert AQA GCSE Computer Science examiner creating an exam-style question.

${AQA_CS_PRINCIPLES}

Topic: ${topic.name}
${subtopic ? `Subtopic: ${subtopic}` : ''}
Difficulty: ${difficulty}

${topicGuidance}

DIFFICULTY GUIDE:
- Easy (1-2 marks): Definitions, simple conversions, basic recall
- Medium (3-4 marks): Trace tables, simple code writing, explanations, SQL queries
- Hard (5-6+ marks): Complex programming, extended discussion, multi-step problems

**CRITICAL: Use AQA pseudocode syntax:**
- Assignment: ←
- Loop endings: ENDFOR, ENDWHILE
- Condition endings: ENDIF
- Comparison: =, ≠ (or <>), <, >, ≤, ≥
- Boolean: AND, OR, NOT

Create ONE exam-style question that:
1. Uses authentic AQA GCSE Computer Science language
2. Tests understanding appropriate to GCSE level
3. Includes proper mark allocation
4. Matches the difficulty level specified

OUTPUT FORMAT (use exact headers):
**Question:**
[Question text with mark allocation in brackets, e.g. [3 marks]]

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
  AQA_CS_ASSESSMENT_OBJECTIVES,
  AQA_CS_PSEUDOCODE_REFERENCE,
  AQA_CS_MARK_SCHEME_CONVENTIONS,
  AQA_CS_QUESTION_TEMPLATES,
  AQA_CS_REFERENCE_DATA,
  AQA_CS_ALGORITHMS_KNOWLEDGE,
  AQA_CS_PROGRAMMING_KNOWLEDGE,
  AQA_CS_DATA_REPRESENTATION_KNOWLEDGE,
  AQA_CS_COMPUTER_SYSTEMS_KNOWLEDGE,
  AQA_CS_NETWORKS_KNOWLEDGE,
  AQA_CS_CYBERSECURITY_KNOWLEDGE,
  AQA_CS_DATABASES_KNOWLEDGE,
  AQA_CS_ETHICS_KNOWLEDGE,
  AQA_CS_WORKED_EXAMPLES,
  AQA_CS_PRINCIPLES,
  CS_TOPIC_GUIDANCE
};
