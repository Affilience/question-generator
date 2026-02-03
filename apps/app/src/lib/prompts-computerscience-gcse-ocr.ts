// OCR GCSE Computer Science (J277) Question Generation Prompts
// Based on analysis of actual OCR past papers (June 2022, 2023, 2024)
// and official mark schemes
// Specification: J277 (First teaching September 2020)

import { Difficulty, Topic } from '@/types';
import { getDiagramDocsForSubject } from './prompts-common';

// GCSE Computer Science mark ranges based on OCR specification
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
// OCR GCSE COMPUTER SCIENCE SPECIFICATION DETAILS (J277)
// Based on official OCR specification and past paper analysis
// ============================================================================

const OCR_CS_ASSESSMENT_OBJECTIVES = `
## OCR GCSE Computer Science Assessment Objectives

| Objective | Description | Weighting |
|-----------|-------------|-----------|
| **AO1** | Demonstrate knowledge and understanding of the key concepts and principles of computer science | 42.5% |
| **AO2** | Apply knowledge and understanding of key concepts and principles of computer science | 37.5% |
| **AO3** | Analyse problems in computational terms to make reasoned judgements and design, program, evaluate and refine solutions | 20% |

### Paper Structure (Total: 160 marks)
| Paper | Content | Time | Marks | Weighting |
|-------|---------|------|-------|-----------|
| **J277/01** | Computer Systems | 1h 30m | 80 | 50% |
| **J277/02** | Computational Thinking, Algorithms and Programming | 1h 30m | 80 | 50% |

### Paper 1 Topics (J277/01)
- 1.1 Systems architecture
- 1.2 Memory and storage
- 1.3 Computer networks, connections and protocols
- 1.4 Network security
- 1.5 Systems software
- 1.6 Ethical, legal, cultural and environmental impacts
- **Includes one 8-mark extended response question (marked using levels)**

### Paper 2 Topics (J277/02)
- 2.1 Algorithms
- 2.2 Programming fundamentals
- 2.3 Producing robust programs
- 2.4 Boolean logic
- 2.5 Programming languages and IDEs
- **Includes programming questions using OCR Exam Reference Language**
`;

const OCR_CS_EXAM_REFERENCE_LANGUAGE = `
## OCR Exam Reference Language (Official Pseudocode)

Questions will be set using OCR Exam Reference Language. Students can answer in OCR ERL or a high-level language (e.g., Python).

### Variable Assignment
\`\`\`
variable = value
name = "Alice"
count = 0
total = 0.0
\`\`\`

### Arithmetic Operators
| Operator | Meaning | Example |
|----------|---------|---------|
| + | Addition | x = 5 + 3 |
| - | Subtraction | x = 5 - 3 |
| * | Multiplication | x = 5 * 3 |
| / | Real division | x = 5 / 3 (returns 1.666...) |
| DIV | Integer division | x = 5 DIV 3 (returns 1) |
| MOD | Modulo (remainder) | x = 5 MOD 3 (returns 2) |
| ^ | Exponentiation | x = 2 ^ 3 (returns 8) |

### Comparison Operators
| Operator | Meaning |
|----------|---------|
| == | Equal to |
| != | Not equal to |
| < | Less than |
| > | Greater than |
| <= | Less than or equal to |
| >= | Greater than or equal to |

### Boolean Operators
| Operator | Meaning |
|----------|---------|
| AND | Both conditions must be true |
| OR | At least one condition must be true |
| NOT | Reverses the condition |

### Selection (IF statements)
\`\`\`
if condition then
    statements
endif

if condition then
    statements
else
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
\`\`\`

### Iteration (Loops)
\`\`\`
// Count-controlled loop
for i = 0 to 9
    statements
next i

// Condition-controlled loops
while condition
    statements
endwhile

do
    statements
until condition
\`\`\`

### Arrays
\`\`\`
// 1D Array declaration
array myArray[10]
myArray[0] = "first"

// Traversing array
for i = 0 to myArray.length - 1
    print(myArray[i])
next i

// 2D Array declaration
array grid[5,5]
grid[0,0] = "top left"
grid[2,3] = "row 2, column 3"
\`\`\`

### Subroutines
\`\`\`
// Procedure (no return value)
procedure name(parameters)
    statements
endprocedure

// Function (returns a value)
function name(parameters)
    statements
    return value
endfunction

// Calling subroutines
name(arguments)
result = functionName(arguments)
\`\`\`

### File Handling
\`\`\`
// Open file for reading
myFile = open("filename.txt")
x = myFile.readLine()
myFile.close()

// Open file for writing
myFile = open("filename.txt")
myFile.writeLine("text")
myFile.close()

// Read until end of file
while NOT myFile.endOfFile()
    line = myFile.readLine()
endwhile
\`\`\`

### String Functions
| Function | Description | Example |
|----------|-------------|---------|
| string.length | Returns number of characters | "hello".length returns 5 |
| string.substring(start, length) | Extracts part of string | "hello".substring(1,3) returns "ell" |
| string.upper | Converts to uppercase | "hello".upper returns "HELLO" |
| string.lower | Converts to lowercase | "HELLO".lower returns "hello" |
| string.left(n) | Returns leftmost n characters | "hello".left(2) returns "he" |
| string.right(n) | Returns rightmost n characters | "hello".right(2) returns "lo" |
| ASC(char) | Returns ASCII value | ASC("A") returns 65 |
| CHR(int) | Returns character from ASCII | CHR(65) returns "A" |

### Input/Output
\`\`\`
print("message")
print(variable)
variable = input("prompt")
\`\`\`

### Casting/Type Conversion
\`\`\`
int("5")      // String to integer, returns 5
str(5)        // Integer to string, returns "5"
float("3.14") // String to real, returns 3.14
bool("true")  // String to boolean
\`\`\`

### SQL Commands (for database questions)
\`\`\`sql
SELECT field1, field2 FROM tableName
SELECT * FROM tableName WHERE condition
SELECT field FROM tableName WHERE field LIKE 'pattern%'
SELECT field FROM tableName ORDER BY field ASC
SELECT field FROM tableName ORDER BY field DESC

INSERT INTO tableName (field1, field2) VALUES (value1, value2)

UPDATE tableName SET field = value WHERE condition

DELETE FROM tableName WHERE condition
\`\`\`
`;

const OCR_CS_MARK_SCHEME_CONVENTIONS = `
## OCR Mark Scheme Conventions (From Official Mark Schemes)

### Extended Response Questions (8 marks - Paper 1)
Uses **Levels of Response** marking with "best fit" approach:

**Level 3 (5-8 marks):**
- Demonstrates thorough knowledge and understanding
- Applies knowledge effectively to the context
- Uses technical terminology accurately throughout
- Well-structured, logical response
- Considers multiple perspectives/arguments

**Level 2 (3-4 marks):**
- Demonstrates good knowledge and understanding
- Applies knowledge to the question
- Generally accurate terminology
- Reasonably structured
- Some relevant points made

**Level 1 (1-2 marks):**
- Demonstrates limited knowledge
- Limited application to context
- Some relevant points made
- Basic structure
- May contain inaccuracies

**0 marks:** Nothing creditworthy

### Larger Tariff Questions (6 marks - Paper 2)
Uses **point-based marking** (NOT levels of response).
- Algorithmic questions suit point-based marking
- Each valid point/feature earns marks up to maximum
- 1 mark typically per correct line/concept in code

### Code Marking Rules
- **Logic must be correct** for full marks
- Alternative valid solutions accepted
- Variable names can differ if logic clear
- Indentation expected but not marked
- Minor syntax errors acceptable if logic unaffected
- **Accept OCR Exam Reference Language or Python**
- Accept "=" or "==" for comparison (context dependent)

### Definition Questions (1-2 marks)
- Key terms must be included
- One clear definition = 1 mark typically
- Must be specific, not vague

### Calculation Questions
- Show working for method marks
- Correct answer alone may get full marks for simple calculations
- Units required where specified
- Accept equivalent notations (e.g., 1000000 = 1,000,000 = 10^6)

### Common Mark Scheme Annotations
| Symbol | Meaning |
|--------|---------|
| oe | Or equivalent |
| owtte | Or words to that effect |
| max | Maximum marks for this section |
| AO1/AO2/AO3 | Assessment objective being tested |
`;

const OCR_CS_QUESTION_TEMPLATES = `
## Authentic OCR Question Formats (From Past Papers)

### Type 1: Definition Question (1-2 marks)
Format: "Define the term [term]"
OR "State what is meant by [term]"
OR "What is meant by the term [term]?"
- Requires key technical terms in answer
- Example: "Define the term 'abstraction'" [1]

### Type 2: State/Give Question (1-2 marks)
Format: "State two features of..."
OR "Give one reason why..."
OR "Name two types of..."
- Short, factual answers
- No explanation needed
- Example: "State two characteristics of embedded systems" [2]

### Type 3: Describe Question (2-4 marks)
Format: "Describe how [process] works"
OR "Describe the purpose of [component]"
- Requires step-by-step account or features
- More detail than "state"
- Example: "Describe the fetch-decode-execute cycle" [4]

### Type 4: Explain Question (2-4 marks)
Format: "Explain why [scenario]..."
OR "Explain how [technology] is used to..."
- Requires reasons/mechanisms
- Cause AND effect needed
- Example: "Explain why cache memory improves CPU performance" [3]

### Type 5: Algorithm Writing (4-6 marks)
Format: "Write an algorithm that..."
OR "Write a program that..."
- Can answer in OCR ERL or Python
- Clear problem statement with inputs/outputs
- May specify features required (validation, iteration, etc.)
- Example: "Write an algorithm to find the largest value in an array" [4]

### Type 6: Trace Through Code (2-4 marks)
Format: "State the output of this algorithm when [input]"
OR "Complete the trace table below"
OR "Show the values of each variable after each iteration"
- Given code snippet
- May include partial trace table to complete
- Example: "Complete the trace table for this algorithm when n = 5" [3]

### Type 7: Debug Question (2-4 marks)
Format: "Identify the error(s) in the code and write corrected version(s)"
OR "The code contains errors. Identify them and correct them."
- Given faulty code
- Must identify AND correct
- Example: "Identify two errors in this code and write corrected lines" [4]

### Type 8: Extended Response (8 marks - Paper 1 only)
Format: "*Discuss..." or "*Evaluate..."
- Always about ethical, legal, cultural, or environmental issues
- Marked with asterisk (*) in exam
- Use levels of response marking
- Must consider multiple perspectives
- Example: "*Discuss the environmental impacts of modern technology use" [8]

### Type 9: Binary/Hex Calculation (2-4 marks)
Format: "Convert [number] from [base] to [base]"
OR "Perform the binary addition: [num1] + [num2]"
OR "Show the result of shifting [binary] left by [n] places"
- Working marks + answer marks
- Example: "Convert the denary number 156 to hexadecimal" [2]

### Type 10: Boolean Logic (2-4 marks)
Format: "Complete the truth table"
OR "Write a Boolean expression for the logic gate diagram"
OR "Draw the logic circuit for the expression"
- May provide diagram to interpret
- May require truth table completion
- Example: "Complete the truth table for: NOT(A AND B) OR C" [4]

### Type 11: File Size Calculation (2-3 marks)
Format: "Calculate the file size of [image/sound]"
- Given dimensions, resolution, colour depth, sample rate, etc.
- Must show working
- May need to convert units
- Example: "Calculate the file size in MB of a 1920 x 1080 image with 24-bit colour depth" [3]

### Type 12: SQL Query (2-4 marks)
Format: "Write an SQL query to..."
OR "Explain what this SQL statement does"
- Test SELECT, INSERT, UPDATE, DELETE
- May include WHERE, ORDER BY, LIKE
- Example: "Write an SQL query to display all students with grades above 70, ordered by name" [3]
`;

// ============================================================================
// REFERENCE DATA AND KEY FACTS
// ============================================================================

const OCR_CS_REFERENCE_DATA = `
## Key Reference Data for OCR GCSE Computer Science

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

### Place Values (8-bit binary)
| 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |
|-----|----|----|----|----|---|---|---|

### Data Units
| Unit | Size |
|------|------|
| 1 bit | Single binary digit (0 or 1) |
| 1 nibble | 4 bits |
| 1 byte | 8 bits |
| 1 KB (kilobyte) | 1,000 bytes |
| 1 MB (megabyte) | 1,000 KB = 1,000,000 bytes |
| 1 GB (gigabyte) | 1,000 MB = 1,000,000,000 bytes |
| 1 TB (terabyte) | 1,000 GB |
| 1 PB (petabyte) | 1,000 TB |

### File Size Calculations
**Image file size (in bits):**
File size = width (pixels) x height (pixels) x colour depth (bits)

**Sound file size (in bits):**
File size = sample rate (Hz) x bit depth x duration (seconds) x channels

**To convert bits to bytes:** divide by 8
**To convert bytes to KB:** divide by 1,000
**To convert KB to MB:** divide by 1,000

### Binary Arithmetic
**Binary Addition Rules:**
- 0 + 0 = 0
- 0 + 1 = 1
- 1 + 0 = 1
- 1 + 1 = 10 (0, carry 1)
- 1 + 1 + 1 = 11 (1, carry 1)

**Overflow:** When result requires more bits than available (e.g., 8-bit overflow when result > 255)

**Binary Shifts:**
- Left shift by n: multiply by 2^n (add n zeros to right)
- Right shift by n: divide by 2^n (remove n bits from right)

### Logic Gates
| Gate | Symbol | Expression | Output when... |
|------|--------|------------|----------------|
| AND | A . B | A AND B | Both inputs are 1 |
| OR | A + B | A OR B | At least one input is 1 |
| NOT | A' | NOT A | Input is 0 |
| XOR | A (+) B | A XOR B | Inputs are different |
| NAND | | NOT (A AND B) | NOT both inputs are 1 |
| NOR | | NOT (A OR B) | Both inputs are 0 |

### ASCII Values (Common)
| Character | ASCII Value |
|-----------|-------------|
| Space | 32 |
| 0-9 | 48-57 |
| A-Z | 65-90 |
| a-z | 97-122 |

**Note:** Difference between uppercase and lowercase = 32
`;

// ============================================================================
// TOPIC-SPECIFIC DETAILED KNOWLEDGE
// ============================================================================

const OCR_CS_SYSTEMS_ARCHITECTURE = `
## 1.1 Systems Architecture - Detailed Knowledge

### CPU Purpose
The CPU (Central Processing Unit) is the "brain" of the computer that:
- Fetches instructions from memory
- Decodes instructions to understand what is needed
- Executes instructions by performing calculations or moving data
- Controls and coordinates all components

### Von Neumann Architecture
Key features:
- Single memory store for both data AND instructions
- Single bus for data and instructions (bottleneck)
- CPU processes one instruction at a time (sequentially)
- Components: CPU, memory, I/O devices, buses

### CPU Components

**ALU (Arithmetic Logic Unit):**
- Performs arithmetic calculations (+, -, *, /)
- Performs logical comparisons (>, <, =)
- Performs logical operations (AND, OR, NOT)

**Control Unit (CU):**
- Fetches instructions from memory
- Decodes instructions to determine operation
- Controls flow of data within CPU
- Manages execution of instructions
- Coordinates all computer components
- Sends control signals via control bus

**Cache:**
- Very fast memory inside/near CPU
- Stores frequently used data and instructions
- Faster than RAM but smaller capacity
- Multiple levels: L1 (fastest, smallest), L2, L3
- Reduces wait time for CPU

**Registers (small, fast storage in CPU):**
| Register | Purpose |
|----------|---------|
| **MAR** (Memory Address Register) | Holds address of memory location to read/write |
| **MDR** (Memory Data Register) | Holds data being transferred to/from memory |
| **PC** (Program Counter) | Holds address of next instruction to fetch |
| **Accumulator** | Stores results of ALU calculations |
| **CIR** (Current Instruction Register) | Holds current instruction being executed |

### Fetch-Decode-Execute Cycle

**FETCH:**
1. PC contains address of next instruction
2. Address copied from PC to MAR
3. MAR places address on address bus
4. Control unit sends read signal via control bus
5. Instruction at that address sent to MDR via data bus
6. Instruction copied from MDR to CIR
7. PC incremented to point to next instruction

**DECODE:**
1. Control unit decodes instruction in CIR
2. Determines what operation is needed
3. Identifies any data required and where it is

**EXECUTE:**
1. If calculation needed, ALU performs it
2. If data needed, fetched from memory
3. Result stored in accumulator or written back to memory
4. Cycle repeats

### CPU Performance Factors

**Clock Speed (measured in GHz):**
- Number of cycles per second
- Higher = more instructions per second
- Example: 3.5 GHz = 3.5 billion cycles per second
- HOWEVER: more heat generated, more power used

**Cache Size:**
- Larger cache = more data stored close to CPU
- Less need to fetch from slower RAM
- L1 cache: ~32KB, fastest
- L2 cache: ~256KB, fast
- L3 cache: ~8MB, shared between cores

**Number of Cores:**
- Each core can process instructions independently
- Multi-core = multiple instructions processed simultaneously
- Dual-core, quad-core, octa-core common
- HOWEVER: software must be designed to use multiple cores

### Embedded Systems

**Definition:** A computer system with a dedicated function within a larger device, designed for specific tasks.

**Characteristics:**
- Perform a single/limited function
- Built into larger device
- Often no user interface (or very limited)
- Low power consumption
- Small and compact
- Cannot be reprogrammed by user
- Real-time processing often required

**Examples:**
- Washing machine controller
- Car engine management system
- Traffic lights
- Digital watch
- Smart thermostat
- TV remote control
- Medical devices (pacemaker)
- Security systems
`;

const OCR_CS_MEMORY_STORAGE = `
## 1.2 Memory and Storage - Detailed Knowledge

### Primary Storage

**RAM (Random Access Memory):**
- Volatile (loses data when power off)
- Stores currently running programs and data
- Can be read and written to
- Fast access
- Larger capacity than ROM
- Contents change constantly

**ROM (Read Only Memory):**
- Non-volatile (keeps data without power)
- Stores startup instructions (BIOS/bootstrap)
- Read-only (cannot be modified during normal use)
- Smaller capacity than RAM
- Contents are permanent

| Feature | RAM | ROM |
|---------|-----|-----|
| Volatility | Volatile | Non-volatile |
| Purpose | Running programs/data | Startup instructions |
| Read/Write | Read and write | Read only |
| Speed | Fast | Fast |
| Contents | Changes | Permanent |

**Virtual Memory:**
- Uses portion of secondary storage (HDD/SSD) as if it were RAM
- Used when RAM is full
- Data not currently needed swapped to virtual memory
- Slower than physical RAM (disk access)
- Allows running more programs than physical RAM would allow
- Thrashing: excessive swapping slowing system down

### Secondary Storage

**Why needed:**
- RAM is volatile - need permanent storage
- RAM has limited capacity - need more space
- Need to store files, applications, operating system
- Need to transfer data between computers

**Optical Storage (CD, DVD, Blu-ray):**
| Feature | Details |
|---------|---------|
| How it works | Laser reads pits and lands on disc surface |
| Capacity | CD: 700MB, DVD: 4.7GB, Blu-ray: 25GB |
| Speed | Slower than SSD/HDD |
| Portability | High - discs are small and light |
| Durability | Medium - can scratch |
| Cost | Very cheap per disc |
| Uses | Music, films, software distribution, backup |

**Magnetic Storage (HDD, tape):**
| Feature | Details |
|---------|---------|
| How it works | Read/write heads magnetise spinning platters |
| Capacity | Very high (up to several TB) |
| Speed | Medium (limited by physical movement) |
| Portability | Medium for HDD, high for tape |
| Durability | Medium - moving parts can fail, magnetic fields can damage |
| Cost | Low cost per GB |
| Uses | Computer storage, backups, servers |

**Solid State Storage (SSD, flash drives, SD cards):**
| Feature | Details |
|---------|---------|
| How it works | No moving parts, uses electrical circuits to store data |
| Capacity | High (up to several TB) |
| Speed | Very fast (no mechanical delay) |
| Portability | High - compact with no moving parts |
| Durability | High - no moving parts to break |
| Cost | Higher cost per GB than HDD |
| Uses | Computer storage, portable drives, cameras |

### Storage Comparison Table
| Factor | Optical | Magnetic (HDD) | Solid State |
|--------|---------|----------------|-------------|
| Capacity | Low-Medium | Very High | High |
| Speed | Slow | Medium | Very Fast |
| Portability | High | Medium | High |
| Durability | Medium | Medium | High |
| Cost per GB | Low | Low | Medium |
| Reliability | Medium | Medium | High |

### Data Representation

**Binary Number System:**
- Base 2: only digits 0 and 1
- Each digit is a "bit"
- Computer's native language (transistors on/off)

**Hexadecimal:**
- Base 16: digits 0-9 and A-F
- Each hex digit = 4 binary digits (1 nibble)
- More human-readable than binary
- Used for: colour codes, MAC addresses, memory addresses, error codes

**Character Encoding:**

ASCII (American Standard Code for Information Interchange):
- 7 bits = 128 characters
- Extended ASCII: 8 bits = 256 characters
- Only English characters and symbols
- Example: 'A' = 65, 'a' = 97

Unicode:
- Up to 32 bits per character
- Over 1 million characters possible
- Supports all world languages
- Includes emojis and symbols
- Backwards compatible with ASCII
- UTF-8, UTF-16, UTF-32 encoding schemes

### Image Representation

**Key Terms:**
- **Pixel:** Single point of colour in an image
- **Resolution:** Number of pixels (width x height)
- **Colour depth:** Bits used per pixel (determines number of colours)

**Colour Depth Examples:**
| Bits | Colours |
|------|---------|
| 1 | 2 (black and white) |
| 8 | 256 |
| 16 | 65,536 |
| 24 | 16.7 million (true colour) |

**Metadata:** Data about the image stored in file header
- File format, dimensions, colour depth, date created, camera settings

### Sound Representation

**Key Terms:**
- **Sample rate:** Number of samples taken per second (Hz)
- **Bit depth:** Number of bits per sample
- **Channels:** Mono (1), Stereo (2)

**Quality vs File Size:**
- Higher sample rate = better quality, larger file
- Higher bit depth = more accurate sound, larger file
- CD quality: 44,100 Hz, 16-bit, stereo

### Compression

**Why compress?**
- Reduce storage space needed
- Reduce transmission time
- Reduce bandwidth usage

**Lossy Compression:**
- Permanently removes data to reduce size
- Cannot get original back
- Smaller files than lossless
- Some quality loss (may not be noticeable)
- Examples: JPEG (images), MP3 (audio), MPEG (video)
- Best for: media files where some quality loss acceptable

**Lossless Compression:**
- No data lost - original can be restored
- Files not as small as lossy
- No quality loss
- Examples: PNG (images), FLAC (audio), ZIP (files)
- Best for: text files, program files, medical images

**Run-Length Encoding (RLE):**
- Lossless technique
- Replaces consecutive identical values with count + value
- Example: AAAABBBCC becomes 4A3B2C
- Best for: simple images with large blocks of same colour
- Not effective for: complex images with varied colours

**Huffman Coding:**
- Lossless technique
- More frequent characters get shorter codes
- Less frequent characters get longer codes
- Creates optimal prefix-free codes
- Example: 'e' (common) might be 01, 'z' (rare) might be 11010
`;

const OCR_CS_NETWORKS = `
## 1.3 Computer Networks, Connections and Protocols - Detailed Knowledge

### Network Types

**LAN (Local Area Network):**
- Covers small geographical area (building/site)
- Hardware owned by organisation
- High data transfer speeds
- Low cost (no need to lease lines)
- Examples: school network, office network, home network

**WAN (Wide Area Network):**
- Covers large geographical area (cities, countries, world)
- Uses third-party communication infrastructure
- Generally lower speeds than LAN
- Higher costs (leasing communication lines)
- Example: The Internet

### Network Models

**Client-Server Network:**
| Feature | Details |
|---------|---------|
| Structure | Central server(s) + client computers |
| File storage | Centralised on server |
| Security | Managed centrally, user accounts |
| Backup | Centralised backup of data |
| Cost | Higher (requires server hardware) |
| Management | Professional IT management |
| Advantages | Central control, security, backup, scalability |
| Disadvantages | Server failure affects all, costly |

**Peer-to-Peer Network:**
| Feature | Details |
|---------|---------|
| Structure | All computers equal (no central server) |
| File storage | Distributed across computers |
| Security | Each user responsible for own security |
| Backup | Each user backs up own files |
| Cost | Lower (no server required) |
| Management | Users manage own computers |
| Advantages | Simple, cheap, no single point of failure |
| Disadvantages | Less secure, harder to manage, harder to backup |

### Network Hardware

**Network Interface Card (NIC):**
- Allows device to connect to network
- Has unique MAC address
- Can be wired (Ethernet) or wireless (WiFi)
- Converts data to format for transmission

**Switch:**
- Connects devices on same network
- Directs data to specific device using MAC addresses
- More efficient than hub (doesn't broadcast to all)
- Multiple devices can transmit simultaneously

**Router:**
- Connects different networks together
- Routes data packets between networks
- Uses IP addresses to determine path
- Connects LAN to Internet
- Contains routing table for best paths

**Wireless Access Point (WAP):**
- Allows wireless devices to connect to wired network
- Broadcasts WiFi signal
- Devices connect using SSID
- Can extend network coverage

### Network Topologies

**Star Topology:**
- All devices connect to central switch/hub
- Data travels through centre
- Most common topology

| Advantages | Disadvantages |
|------------|---------------|
| Easy to add/remove devices | Central device fails = network fails |
| One cable failure doesn't affect others | More cable required |
| Easy to identify faults | Central device can become bottleneck |
| Good security (data goes through centre) | |

**Mesh Topology:**
- Each device connected to multiple/all other devices
- Multiple paths for data
- Can be full mesh or partial mesh

| Advantages | Disadvantages |
|------------|---------------|
| Very reliable (multiple paths) | Very expensive (lots of connections) |
| No single point of failure | Complex to set up and manage |
| Fast data transfer (multiple routes) | Lots of cabling required |
| Good for critical networks | Difficult to add new devices |

### Wired vs Wireless

**Wired Connections (Ethernet):**
| Advantages | Disadvantages |
|------------|---------------|
| Faster speeds | Cables restrict movement |
| More secure | More expensive to install |
| More reliable | Harder to add new devices |
| Less interference | Cables can be trip hazard |

**Wireless Connections (WiFi):**
| Advantages | Disadvantages |
|------------|---------------|
| Freedom of movement | Slower than wired |
| Easy to add devices | Less secure (signals can be intercepted) |
| No cables needed | Subject to interference |
| Good for mobile devices | Limited range |

**Bluetooth:**
- Short-range wireless (typically <10m)
- Lower power than WiFi
- Used for: headphones, keyboards, file transfer between devices

### The Internet

**Internet:** Global network of interconnected networks using TCP/IP protocols.

**Key Components:**
- **DNS (Domain Name System):** Converts domain names to IP addresses
  - Example: www.ocr.org.uk -> 195.153.166.66
  - Hierarchical system with root servers, TLD servers, authoritative servers

- **Web Hosting:** Storing website files on a web server
  - Server always connected to Internet
  - Responds to HTTP requests
  - Can be shared or dedicated hosting

- **The Cloud:** Remote servers accessed via Internet
  - Storage, processing power, applications
  - Examples: Google Drive, Dropbox, Office 365

### Protocols

**Protocol:** Set of rules that govern data communication.

**TCP/IP (Transmission Control Protocol/Internet Protocol):**
- TCP: breaks data into packets, ensures reliable delivery
- IP: addresses and routes packets

**HTTP (Hypertext Transfer Protocol):**
- For accessing web pages
- Port 80
- Unencrypted

**HTTPS (HTTP Secure):**
- Encrypted version of HTTP
- Uses SSL/TLS encryption
- Port 443
- Shows padlock in browser
- Used for secure transactions

**FTP (File Transfer Protocol):**
- For uploading/downloading files
- Used for website maintenance
- Separate control and data connections

**SMTP (Simple Mail Transfer Protocol):**
- For SENDING emails
- Port 25 or 587 (with TLS)

**IMAP (Internet Message Access Protocol):**
- For RECEIVING emails
- Emails stay on server
- Can access from multiple devices

**POP3 (Post Office Protocol):**
- For RECEIVING emails
- Downloads emails to device
- Removes from server (by default)

### Layers (TCP/IP Model)

| Layer | Purpose | Example Protocols |
|-------|---------|-------------------|
| Application | User interaction, apps | HTTP, HTTPS, FTP, SMTP |
| Transport | Reliable data transfer | TCP, UDP |
| Internet | Addressing and routing | IP |
| Network Interface | Physical transmission | Ethernet, WiFi |

**Benefits of Layers:**
- Each layer has specific function
- Layers can be updated independently
- Easier to troubleshoot
- Standardisation allows interoperability

### Packet Switching

**Data Packet Structure:**
| Component | Purpose |
|-----------|---------|
| Header | Contains source IP, destination IP, packet number, TTL |
| Payload | The actual data being transmitted |
| Trailer | Error checking data (checksum) |

**Packet Switching Process:**
1. Data split into packets
2. Each packet numbered
3. Packets may take different routes
4. Router examines destination IP
5. Router forwards to best next hop
6. Packets arrive (possibly out of order)
7. Receiving device reassembles using packet numbers
8. Missing packets requested again (TCP)

**Advantages:**
- Efficient use of network capacity
- Robust (packets can route around failures)
- Multiple users can share same network
`;

const OCR_CS_NETWORK_SECURITY = `
## 1.4 Network Security - Detailed Knowledge

### Forms of Attack

**Malware (Malicious Software):**

| Type | Description | Method |
|------|-------------|--------|
| **Virus** | Attaches to files, replicates when file executed | Opens infected files, spreads to other files |
| **Worm** | Self-replicating, spreads without host file | Exploits network vulnerabilities automatically |
| **Trojan** | Disguised as legitimate software | User downloads thinking it's safe |
| **Spyware** | Secretly monitors user activity | Hidden in downloads, records keystrokes |
| **Ransomware** | Encrypts files, demands payment | Phishing emails, infected websites |
| **Adware** | Displays unwanted advertisements | Bundled with free software |

**Social Engineering:**

| Attack | Description | Prevention |
|--------|-------------|------------|
| **Phishing** | Fake emails/websites tricking users into revealing info | Check URLs, don't click suspicious links |
| **Blagging** | Pretending to be authority to get information | Verify identity through official channels |
| **Pharming** | Redirecting to fake websites | Check for HTTPS, verify URL |
| **Shouldering** | Looking over shoulder to see passwords | Shield keyboard, be aware of surroundings |

**Other Attacks:**

**Brute Force Attack:**
- Systematically tries all possible passwords
- More effective against short/simple passwords
- Prevention: strong passwords, account lockouts, CAPTCHA

**Denial of Service (DoS):**
- Floods server with fake requests
- Server can't respond to legitimate users
- DDoS uses multiple computers (botnet)
- Prevention: firewalls, traffic filtering, load balancing

**Data Interception:**
- Capturing data during transmission
- "Man-in-the-middle" attack
- Prevention: encryption, VPN, HTTPS

**SQL Injection:**
- Inserting malicious SQL code into input fields
- Can access, modify, or delete database data
- Example: entering ' OR '1'='1 as password
- Prevention: input validation, parameterised queries

### Prevention Methods

**Penetration Testing:**
- Ethical hackers test system security
- Find vulnerabilities before attackers do
- Simulate real attacks
- Provide report with recommendations
- Should be done regularly

**Firewalls:**
- Monitor incoming/outgoing network traffic
- Block unauthorised access
- Filter based on rules (IP addresses, ports, protocols)
- Can be hardware or software
- Packet filtering, stateful inspection, application-level

**Anti-malware Software:**
- Scans for known malware signatures
- Real-time protection
- Regular updates for new threats
- Can quarantine or delete threats

**Network Policies:**
- Rules for network use
- Password requirements
- Software installation restrictions
- Acceptable use policies
- Regular security training

**User Access Levels:**
- Principle of least privilege
- Users only get access they need
- Administrator accounts limited
- Reduces impact of compromised account

**Authentication Methods:**

| Method | Description | Security Level |
|--------|-------------|----------------|
| Passwords | Something you know | Basic (if weak) to Good (if strong) |
| Two-factor (2FA) | Two different types of authentication | High |
| Biometrics | Something you are (fingerprint, face) | High |
| Smart cards | Something you have | High |

**Strong Password Characteristics:**
- At least 8 characters (longer better)
- Mix of uppercase, lowercase, numbers, symbols
- Not dictionary words or personal information
- Unique for each account

**Encryption:**
- Converts data to unreadable format
- Only those with key can decrypt
- Protects data in transit and at rest
- HTTPS uses encryption for web traffic
`;

const OCR_CS_SYSTEMS_SOFTWARE = `
## 1.5 Systems Software - Detailed Knowledge

### Operating System

**Definition:** Software that manages computer hardware and provides services for applications.

### Operating System Functions

**User Interface:**
- Allows user to interact with computer
- GUI (Graphical User Interface): Windows, icons, menus, mouse
- CLI (Command Line Interface): text commands
- Makes computer accessible to users

**Memory Management:**
- Allocates RAM to running programs
- Moves data to/from virtual memory
- Manages paging (dividing memory into pages)
- Protects memory space of each program
- Deallocates memory when program closes

**Paging:**
- Memory divided into fixed-size pages
- Programs divided into same-size pages
- Pages can be non-contiguous in RAM
- Virtual memory uses paging to swap to disk

**Multitasking:**
- Running multiple programs simultaneously
- OS rapidly switches between tasks
- Gives illusion of parallel execution
- Allocates processor time to each task

**Peripheral Management:**
- Controls input/output devices
- Uses device drivers to communicate
- Manages data transfer to/from peripherals
- Handles interrupts from devices

**Device Drivers:**
- Software that allows OS to communicate with hardware
- Specific to each device type
- Translates OS commands to device commands
- Must be updated for new devices

**User Management:**
- User accounts and authentication
- Access levels and permissions
- User profiles and settings
- Password management

**File Management:**
- Organises files in folders/directories
- Names files
- Manages file attributes (read-only, hidden)
- Controls file access permissions
- Handles file operations (create, delete, copy, move)

### Utility Software

**Definition:** Programs that perform specific maintenance tasks on a computer system.

**Encryption Software:**
- Converts data to unreadable format
- Protects sensitive data
- Requires key/password to decrypt
- Can encrypt files, folders, or entire drives
- Example: BitLocker, VeraCrypt

**Defragmentation:**
- Reorganises data on HDD to be contiguous
- Speeds up file access
- Only needed for magnetic drives (not SSD)
- Files get fragmented over time as they're modified
- After defrag: read head moves less, faster access

**How fragmentation occurs:**
1. Files saved in available space
2. File deleted, leaving gaps
3. New files fill gaps but may not fit entirely
4. File split across non-contiguous locations

**Data Compression:**
- Reduces file size
- Saves storage space
- Faster transmission over network
- Can be lossy or lossless
- Examples: ZIP, RAR

**Backup Software:**
- Creates copies of data for recovery
- Can be scheduled to run automatically
- Types: full, incremental, differential
- Stores backup on separate media
- Important for disaster recovery

**Anti-malware/Antivirus:**
- Scans for malware
- Real-time protection
- Quarantines or removes threats
- Regular signature updates needed
`;

const OCR_CS_IMPACTS = `
## 1.6 Ethical, Legal, Cultural and Environmental Impacts - Detailed Knowledge

### Legislation

**Data Protection Act 2018 / GDPR:**
- Controls how personal data is collected and used
- Key principles:
  - Data must be processed lawfully, fairly, transparently
  - Collected for specific, explicit purposes
  - Adequate, relevant, and limited to what's necessary
  - Accurate and kept up to date
  - Not kept longer than necessary
  - Processed securely
- Rights: access data, correct errors, request deletion
- Organisations must protect data
- Must report breaches within 72 hours
- Heavy fines for breaches

**Computer Misuse Act 1990:**
Three main offences:
1. Unauthorised access to computer material (hacking)
2. Unauthorised access with intent to commit further offences
3. Unauthorised modification of computer material (viruses, changing data)
- Penalties: fines and imprisonment
- Updated to include DoS attacks

**Copyright, Designs and Patents Act 1988:**
- Protects creative works (software, music, images, text)
- Illegal to copy, distribute, or modify without permission
- Software piracy is illegal
- Must have licence to use software
- Creative Commons offers alternative licensing

**Freedom of Information Act 2000:**
- Right to access information held by public bodies
- Promotes transparency
- Certain exemptions exist (national security, personal data)

### Open Source vs Proprietary Software

**Open Source:**
- Source code freely available
- Can be modified and distributed
- Usually free to use
- Community developed
- Examples: Linux, Firefox, LibreOffice
- Advantages: free, customisable, transparent
- Disadvantages: less support, may be less polished

**Proprietary Software:**
- Source code not available
- Cannot be modified by users
- Must pay licence fee
- Company developed and supported
- Examples: Windows, Microsoft Office, Adobe Photoshop
- Advantages: support available, well-tested, training available
- Disadvantages: expensive, can't customise, dependent on company

### Environmental Impacts

**E-waste:**
- Discarded electronic equipment
- Contains hazardous materials (lead, mercury, cadmium)
- Much ends up in landfill or shipped to developing countries
- Can contaminate soil and water
- Important to recycle properly

**Solutions:**
- Recycle old equipment properly
- Buy refurbished devices
- Keep devices longer
- Donate working equipment

**Energy Consumption:**
- Data centres use huge amounts of electricity
- Devices constantly charging
- Manufacturing uses energy and resources
- Carbon footprint from production and use

**Solutions:**
- Use energy-efficient devices
- Turn off devices when not in use
- Use renewable energy for data centres
- Cloud computing can be more efficient than individual servers

### Ethical and Cultural Impacts

**Privacy Issues:**
- Companies collect vast amounts of personal data
- Tracking online behaviour
- Location data from mobile devices
- Facial recognition technology
- Trade-off between convenience and privacy

**Surveillance:**
- CCTV everywhere
- Government monitoring
- Employers monitoring workers
- Balance between security and privacy

**Digital Footprint:**
- Trail of data left from online activities
- Difficult to delete completely
- Can affect future employment
- Importance of online reputation management

**Cyberbullying:**
- Online harassment
- Can be anonymous
- 24/7 nature - can't escape
- Can have severe psychological effects
- Report and block functionality important

**Digital Divide:**
- Gap between those with/without technology access
- Affects education and employment opportunities
- Rural vs urban access differences
- Economic factors

**Impact on Employment:**
- Automation replacing jobs
- New types of jobs created
- Need for digital skills
- Remote working possibilities
- Gig economy

**Artificial Intelligence Concerns:**
- Bias in AI systems
- Job displacement
- Autonomous weapons
- Decision-making transparency
- Responsibility when AI makes mistakes

**Health Impacts:**
- Screen time effects
- Eye strain, posture problems
- Addiction to devices/games/social media
- Impact on sleep
- Reduced physical activity
`;

const OCR_CS_ALGORITHMS = `
## 2.1 Algorithms - Detailed Knowledge

### Computational Thinking

**Abstraction:**
- Removing unnecessary details
- Focusing on essential features
- Example: map showing roads but not every tree
- Helps manage complexity

**Decomposition:**
- Breaking problem into smaller sub-problems
- Each part can be solved separately
- Easier to manage and understand
- Can be worked on by different people

**Algorithmic Thinking:**
- Creating step-by-step solutions
- Logical sequence of instructions
- Can be implemented as program

**Pattern Recognition:**
- Identifying similarities in problems
- Reusing solutions for similar problems
- Finding trends in data

### Algorithm Representation

**Pseudocode:**
- Structured English describing algorithm
- Language-independent
- Focus on logic, not syntax
- Use OCR Exam Reference Language syntax

**Flowcharts:**
| Symbol | Shape | Purpose |
|--------|-------|---------|
| Start/End | Oval/Rounded | Beginning/end of algorithm |
| Process | Rectangle | Instruction/operation |
| Decision | Diamond | Yes/No question, branching |
| Input/Output | Parallelogram | Getting/displaying data |
| Arrow | Arrow | Flow direction |

### Trace Tables

- Used to track variable values through algorithm
- One column per variable
- One row per iteration/step
- Shows how values change
- Useful for debugging and understanding

**Example:**
\`\`\`
for i = 1 to 3
    total = total + i
next i
\`\`\`

| i | total |
|---|-------|
| 1 | 1 |
| 2 | 3 |
| 3 | 6 |

### Searching Algorithms

**Linear Search:**
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

| Feature | Details |
|---------|---------|
| How it works | Checks each element in order until found |
| Data requirement | Works on unsorted data |
| Best case | O(1) - first element |
| Worst case | O(n) - last element or not found |
| Average case | O(n/2) - middle element |
| Advantages | Simple, works on unsorted data |
| Disadvantages | Slow for large datasets |

**Binary Search:**
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

| Feature | Details |
|---------|---------|
| How it works | Repeatedly halves search area |
| Data requirement | Must be sorted |
| Best case | O(1) - middle element |
| Worst case | O(log n) |
| Average case | O(log n) |
| Advantages | Very fast for large sorted datasets |
| Disadvantages | Data must be sorted first |

**Comparison:**
| Feature | Linear | Binary |
|---------|--------|--------|
| Speed | Slow | Fast |
| Sorted data? | No | Yes |
| Efficiency | O(n) | O(log n) |
| Simple? | Yes | More complex |

### Sorting Algorithms

**Bubble Sort:**
\`\`\`
procedure bubbleSort(array)
    for i = 0 to array.length - 2
        for j = 0 to array.length - 2 - i
            if array[j] > array[j+1] then
                temp = array[j]
                array[j] = array[j+1]
                array[j+1] = temp
            endif
        next j
    next i
endprocedure
\`\`\`

| Feature | Details |
|---------|---------|
| How it works | Compares adjacent pairs, swaps if wrong order |
| Passes | Multiple passes until no swaps needed |
| Best case | O(n) - already sorted (with optimisation) |
| Worst case | O(n^2) |
| Advantages | Simple to understand and implement |
| Disadvantages | Very slow for large datasets |

**Merge Sort:**
\`\`\`
function mergeSort(array)
    if array.length <= 1 then
        return array
    endif
    mid = array.length DIV 2
    left = mergeSort(array[0 to mid-1])
    right = mergeSort(array[mid to end])
    return merge(left, right)
endfunction

function merge(left, right)
    result = []
    while left not empty AND right not empty
        if left[0] <= right[0] then
            append left[0] to result
            remove first from left
        else
            append right[0] to result
            remove first from right
        endif
    endwhile
    append remaining to result
    return result
endfunction
\`\`\`

| Feature | Details |
|---------|---------|
| How it works | Divide and conquer - split, sort, merge |
| Technique | Recursive |
| Best/Worst/Average | All O(n log n) |
| Advantages | Consistent performance, efficient for large data |
| Disadvantages | Uses extra memory, more complex |

**Insertion Sort:**
\`\`\`
procedure insertionSort(array)
    for i = 1 to array.length - 1
        current = array[i]
        j = i - 1
        while j >= 0 AND array[j] > current
            array[j+1] = array[j]
            j = j - 1
        endwhile
        array[j+1] = current
    next i
endprocedure
\`\`\`

| Feature | Details |
|---------|---------|
| How it works | Builds sorted array one element at a time |
| Best case | O(n) - already sorted |
| Worst case | O(n^2) |
| Advantages | Simple, efficient for small/nearly sorted data |
| Disadvantages | Slow for large unsorted datasets |

**Sorting Algorithm Comparison:**
| Algorithm | Best | Average | Worst | Memory | Simple? |
|-----------|------|---------|-------|--------|---------|
| Bubble | O(n) | O(n^2) | O(n^2) | O(1) | Yes |
| Merge | O(n log n) | O(n log n) | O(n log n) | O(n) | No |
| Insertion | O(n) | O(n^2) | O(n^2) | O(1) | Yes |
`;

const OCR_CS_PROGRAMMING = `
## 2.2 Programming Fundamentals - Detailed Knowledge

### Variables and Constants

**Variable:**
- Named storage location for data
- Value can change during program execution
- Should have meaningful names
- Example: score = 0, name = "Alice"

**Constant:**
- Named storage location that doesn't change
- Value set once and cannot be modified
- Use for fixed values (PI, VAT_RATE)
- Improves readability and maintenance
- Example: const PI = 3.14159

### Data Types

| Type | Description | Example |
|------|-------------|---------|
| **Integer** | Whole numbers | 42, -7, 0 |
| **Real/Float** | Decimal numbers | 3.14, -0.5 |
| **Boolean** | True or false | true, false |
| **Character** | Single character | 'A', '9', '@' |
| **String** | Sequence of characters | "Hello", "123" |

**Casting (Type Conversion):**
- Converting between data types
- int("5") converts string to integer
- str(42) converts integer to string
- float("3.14") converts string to real

### Operators

**Arithmetic Operators:**
| Operator | Meaning | Example |
|----------|---------|---------|
| + | Addition | 5 + 3 = 8 |
| - | Subtraction | 5 - 3 = 2 |
| * | Multiplication | 5 * 3 = 15 |
| / | Division | 5 / 2 = 2.5 |
| DIV | Integer division | 5 DIV 2 = 2 |
| MOD | Modulo (remainder) | 5 MOD 2 = 1 |
| ^ | Power | 2 ^ 3 = 8 |

**Comparison Operators:**
| Operator | Meaning |
|----------|---------|
| == | Equal to |
| != | Not equal to |
| < | Less than |
| > | Greater than |
| <= | Less than or equal |
| >= | Greater than or equal |

**Boolean Operators:**
| Operator | Description |
|----------|-------------|
| AND | True if both conditions true |
| OR | True if at least one condition true |
| NOT | Reverses the condition |

### Selection

**IF Statement:**
\`\`\`
if condition then
    // code if true
endif

if condition then
    // code if true
else
    // code if false
endif

if condition1 then
    // code if condition1 true
elseif condition2 then
    // code if condition2 true
else
    // code if all false
endif
\`\`\`

**Switch/Case Statement:**
\`\`\`
switch variable:
    case value1:
        // code for value1
    case value2:
        // code for value2
    default:
        // code if no match
endswitch
\`\`\`

### Iteration

**Count-Controlled Loop (FOR):**
\`\`\`
for i = 0 to 9
    print(i)
next i
// Executes exactly 10 times (0 to 9)
\`\`\`

**Condition-Controlled Loops:**
\`\`\`
// WHILE - condition checked before
while condition
    // code
endwhile
// May execute 0 times if condition false

// DO-UNTIL - condition checked after
do
    // code
until condition
// Executes at least once
\`\`\`

**When to Use Each:**
| Loop | Use When |
|------|----------|
| FOR | Know number of iterations in advance |
| WHILE | Don't know iterations, might be 0 |
| DO-UNTIL | Must execute at least once |

### String Manipulation

| Function | Purpose | Example |
|----------|---------|---------|
| .length | Get string length | "hello".length = 5 |
| .substring(start, len) | Extract portion | "hello".substring(1,3) = "ell" |
| .upper | Convert to uppercase | "hello".upper = "HELLO" |
| .lower | Convert to lowercase | "HELLO".lower = "hello" |
| .left(n) | Get first n chars | "hello".left(2) = "he" |
| .right(n) | Get last n chars | "hello".right(2) = "lo" |
| ASC(char) | Character to ASCII | ASC("A") = 65 |
| CHR(code) | ASCII to character | CHR(65) = "A" |
| + | Concatenation | "Hi" + " " + "there" = "Hi there" |

### Arrays

**1D Array:**
\`\`\`
array names[5]  // Creates array of 5 elements
names[0] = "Alice"
names[1] = "Bob"

// Traverse array
for i = 0 to 4
    print(names[i])
next i
\`\`\`

**2D Array:**
\`\`\`
array grid[3,4]  // 3 rows, 4 columns
grid[0,0] = "top left"
grid[2,3] = "bottom right"

// Traverse 2D array
for row = 0 to 2
    for col = 0 to 3
        print(grid[row, col])
    next col
next row
\`\`\`

### File Handling

\`\`\`
// Reading from file
myFile = open("data.txt")
while NOT myFile.endOfFile()
    line = myFile.readLine()
    print(line)
endwhile
myFile.close()

// Writing to file
myFile = open("output.txt")
myFile.writeLine("First line")
myFile.writeLine("Second line")
myFile.close()
\`\`\`

### Records

\`\`\`
// Define record structure
record Student
    name: string
    age: integer
    grade: real
endrecord

// Create and use record
student1 = new Student
student1.name = "Alice"
student1.age = 16
student1.grade = 85.5
\`\`\`

### SQL

**SELECT (Retrieve data):**
\`\`\`sql
SELECT * FROM Students
SELECT name, grade FROM Students WHERE age > 15
SELECT name FROM Students WHERE grade >= 70 ORDER BY name ASC
SELECT * FROM Students WHERE name LIKE 'A%'
\`\`\`

**INSERT (Add data):**
\`\`\`sql
INSERT INTO Students (name, age, grade) VALUES ('Alice', 16, 85.5)
\`\`\`

**UPDATE (Modify data):**
\`\`\`sql
UPDATE Students SET grade = 90 WHERE name = 'Alice'
\`\`\`

**DELETE (Remove data):**
\`\`\`sql
DELETE FROM Students WHERE grade < 40
\`\`\`

### Subroutines

**Procedure (no return value):**
\`\`\`
procedure greet(name)
    print("Hello, " + name)
endprocedure

greet("Alice")  // Outputs: Hello, Alice
\`\`\`

**Function (returns value):**
\`\`\`
function calculateArea(length, width)
    area = length * width
    return area
endfunction

result = calculateArea(5, 3)  // result = 15
\`\`\`

**Parameters and Arguments:**
- Parameter: variable in function definition
- Argument: value passed when calling function

**Local vs Global Variables:**
| Type | Scope | Best Practice |
|------|-------|---------------|
| Local | Only within subroutine | Preferred - safer |
| Global | Accessible everywhere | Use sparingly |

**Benefits of Subroutines:**
- Code reuse (write once, use many times)
- Modularity (break into manageable parts)
- Easier testing (test each function separately)
- Easier maintenance (change in one place)
- Readability (meaningful names)
`;

const OCR_CS_ROBUST_PROGRAMS = `
## 2.3 Producing Robust Programs - Detailed Knowledge

### Defensive Design

**Input Validation:**
Checking input meets requirements before use.

| Check Type | Purpose | Example |
|------------|---------|---------|
| Range check | Value within limits | Age between 0-120 |
| Presence check | Field not empty | Name must be entered |
| Format check | Correct format | Email contains @ |
| Length check | Correct length | Password 8+ characters |
| Type check | Correct data type | Age is integer |
| Lookup check | Value in approved list | Country in list |

**Example Validation Code:**
\`\`\`
function getValidAge()
    valid = false
    while NOT valid
        age = input("Enter age: ")
        if age >= 0 AND age <= 120 then
            valid = true
        else
            print("Invalid age. Must be 0-120")
        endif
    endwhile
    return age
endfunction
\`\`\`

**Input Sanitisation:**
- Removing/modifying unwanted characters
- Prevents injection attacks
- Escaping special characters
- Example: removing < > to prevent HTML injection

**Authentication:**
- Verifying user identity
- Methods: username/password, biometrics, 2FA
- Password policies: length, complexity, expiry
- Account lockout after failed attempts

### Maintainability

**Commenting Code:**
- Explains purpose and logic
- Helps others understand code
- Helps yourself later
- Comments should explain WHY, not just WHAT

\`\`\`
// Calculate final price with tax
// Tax rate is 20% (0.2)
function calculateTotal(price)
    taxRate = 0.2
    total = price * (1 + taxRate)
    return total
endfunction
\`\`\`

**Indentation:**
- Shows structure and nesting
- Makes code readable
- Consistent spacing (2 or 4 spaces)
- Aligns related code

**Meaningful Variable Names:**
| Good | Bad |
|------|-----|
| studentName | x |
| totalScore | temp |
| isValid | flag |
| maxRetries | n |

**Using Subroutines:**
- Breaks code into manageable functions
- Each function has single purpose
- Easier to test and maintain
- Promotes code reuse

### Testing

**Purpose of Testing:**
- Find errors before users do
- Ensure software works correctly
- Verify requirements are met
- Improve software quality

**Iterative Testing:**
- Testing during development
- Each module tested as written
- Errors found and fixed early
- Continuous process

**Final/Terminal Testing:**
- Testing completed software
- End-to-end testing
- User acceptance testing
- Before release

### Test Data

**Normal Test Data:**
- Valid data within expected range
- Tests typical usage
- Example: age = 25 (valid age)

**Boundary Test Data:**
- Values at the limits of valid range
- Tests edge cases
- Example for age 18-65: test 17, 18, 65, 66

**Invalid/Erroneous Test Data:**
- Invalid data that should be rejected
- Wrong type, out of range, wrong format
- Example: age = "twenty" or -5

**Example Test Plan:**
| Test | Input | Expected Output | Test Type |
|------|-------|-----------------|-----------|
| 1 | 25 | Accept | Normal |
| 2 | 18 | Accept | Boundary |
| 3 | 17 | Reject | Boundary |
| 4 | "abc" | Error message | Erroneous |
| 5 | -1 | Error message | Erroneous |

### Types of Errors

**Syntax Errors:**
- Mistakes in code structure/grammar
- Detected by compiler/interpreter
- Program won't run
- Examples: missing brackets, misspelled keywords

\`\`\`
// Syntax error - missing endif
if x > 5 then
    print("big")
// Missing endif!
\`\`\`

**Logic Errors:**
- Code runs but produces wrong results
- Program compiles and executes
- Harder to find than syntax errors
- Examples: wrong operator, incorrect condition

\`\`\`
// Logic error - should be >= not >
if age > 18 then
    print("Adult")  // Wrong! 18-year-olds excluded
endif
\`\`\`

**Runtime Errors:**
- Errors that occur during execution
- Program crashes
- Examples: division by zero, array out of bounds

\`\`\`
// Runtime error - division by zero
x = 10 / 0  // Crash!
\`\`\`

### Debugging Techniques

**Using IDE Features:**
- Breakpoints: pause execution at line
- Step-through: execute line by line
- Variable watch: monitor variable values
- Error messages: understand and fix

**Trace Tables:**
- Track variable values through execution
- Identify where values go wrong
- Paper-based debugging technique

**Print Statements:**
- Add print statements to show values
- Check program flow
- Remove after debugging
`;

const OCR_CS_BOOLEAN_LOGIC = `
## 2.4 Boolean Logic - Detailed Knowledge

### Logic Gates

**AND Gate:**
- Output is 1 only if BOTH inputs are 1
- Symbol: A . B or A AND B

| A | B | A AND B |
|---|---|---------|
| 0 | 0 | 0 |
| 0 | 1 | 0 |
| 1 | 0 | 0 |
| 1 | 1 | 1 |

**OR Gate:**
- Output is 1 if AT LEAST ONE input is 1
- Symbol: A + B or A OR B

| A | B | A OR B |
|---|---|--------|
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 1 |

**NOT Gate:**
- Output is OPPOSITE of input
- Symbol: A' or NOT A or ~A

| A | NOT A |
|---|-------|
| 0 | 1 |
| 1 | 0 |

**XOR Gate (Exclusive OR):**
- Output is 1 if inputs are DIFFERENT
- Symbol: A XOR B

| A | B | A XOR B |
|---|---|---------|
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 0 |

**NAND Gate (NOT AND):**
- Opposite of AND
- Output is 0 only if BOTH inputs are 1

| A | B | A NAND B |
|---|---|----------|
| 0 | 0 | 1 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 0 |

**NOR Gate (NOT OR):**
- Opposite of OR
- Output is 1 only if BOTH inputs are 0

| A | B | A NOR B |
|---|---|---------|
| 0 | 0 | 1 |
| 0 | 1 | 0 |
| 1 | 0 | 0 |
| 1 | 1 | 0 |

### Creating Truth Tables

**Process for Complex Expressions:**
1. List all input combinations (2^n rows for n inputs)
2. Work from inside out
3. Calculate intermediate results
4. Calculate final output

**Example: NOT(A AND B) OR C**

| A | B | C | A AND B | NOT(A AND B) | Final Output |
|---|---|---|---------|--------------|--------------|
| 0 | 0 | 0 | 0 | 1 | 1 |
| 0 | 0 | 1 | 0 | 1 | 1 |
| 0 | 1 | 0 | 0 | 1 | 1 |
| 0 | 1 | 1 | 0 | 1 | 1 |
| 1 | 0 | 0 | 0 | 1 | 1 |
| 1 | 0 | 1 | 0 | 1 | 1 |
| 1 | 1 | 0 | 1 | 0 | 0 |
| 1 | 1 | 1 | 1 | 0 | 1 |

### Boolean Expressions

**Writing Expressions from Logic Diagrams:**
1. Identify inputs and gates
2. Write output of each gate
3. Combine into final expression

**Order of Operations:**
1. Brackets
2. NOT
3. AND
4. OR

**Common Identities:**
- A AND 1 = A
- A AND 0 = 0
- A OR 1 = 1
- A OR 0 = A
- A AND A = A
- A OR A = A
- NOT(NOT A) = A
- A AND (NOT A) = 0
- A OR (NOT A) = 1

**De Morgan's Laws:**
- NOT(A AND B) = (NOT A) OR (NOT B)
- NOT(A OR B) = (NOT A) AND (NOT B)
`;

const OCR_CS_LANGUAGES_IDE = `
## 2.5 Programming Languages and IDEs - Detailed Knowledge

### Levels of Language

**High-Level Languages:**
- Close to human language
- Platform-independent (portable)
- One statement = many machine instructions
- Examples: Python, Java, C++, Visual Basic
- Need translation before execution

| Advantages | Disadvantages |
|------------|---------------|
| Easy to read and write | Needs translation |
| Platform-independent | May be slower |
| Faster to develop | Less direct hardware control |
| Built-in functions | |

**Low-Level Languages:**

**Machine Code:**
- Binary (0s and 1s)
- Directly executed by CPU
- Processor-specific
- Very hard to write/read/debug
- No translation needed
- Fastest execution

**Assembly Language:**
- Uses mnemonics (LDA, ADD, STO)
- One instruction = one machine operation
- Still processor-specific
- Needs assembler to translate
- Used for: device drivers, embedded systems

| Advantages | Disadvantages |
|------------|---------------|
| Fast execution | Hard to write |
| Direct hardware control | Not portable |
| Small file size | Hard to debug |
| Control over memory | Processor-specific |

**When to Use Each:**
| Situation | Best Choice |
|-----------|-------------|
| Web application | High-level |
| Device driver | Low-level |
| School project | High-level |
| Embedded system | Low-level |
| Quick prototyping | High-level |
| Maximum performance | Low-level |

### Translators

**Compiler:**
- Translates entire program at once
- Creates executable file
- Translation only needed once
- Syntax errors reported after compilation
- Compiled program runs fast
- Cannot see source code
- Examples: C++, Java (to bytecode)

| Advantages | Disadvantages |
|------------|---------------|
| Fast execution | All errors shown at once |
| Distribution without source | Must recompile after changes |
| Optimised code | Compiler needed for each platform |

**Interpreter:**
- Translates and executes line by line
- No executable created
- Translation every time program runs
- Stops at first error found
- Slower execution
- Easier to debug
- Examples: Python, JavaScript

| Advantages | Disadvantages |
|------------|---------------|
| Stops at errors immediately | Slower execution |
| No compilation step | Needs interpreter to run |
| Good for debugging | Source code visible |
| Changes take effect immediately | |

**Assembler:**
- Translates assembly language to machine code
- One-to-one translation
- Processor-specific

**Comparison:**
| Feature | Compiler | Interpreter |
|---------|----------|-------------|
| Translation | All at once | Line by line |
| Speed | Fast execution | Slower |
| Error detection | All errors listed | Stops at first |
| Debugging | Harder | Easier |
| Distribution | Executable | Source code |

### Integrated Development Environment (IDE)

**Definition:** Software application that provides comprehensive facilities for software development.

**Key Features:**

**Editor:**
- Syntax highlighting (colour coding)
- Auto-complete (suggests code)
- Auto-indent (maintains structure)
- Line numbering
- Code folding
- Bracket matching
- Search and replace

**Error Diagnostics:**
- Syntax error highlighting
- Error messages and descriptions
- Line number of errors
- Suggestions for fixes
- Warnings for potential issues

**Runtime Environment:**
- Execute programs within IDE
- Console/output window
- Input handling
- Memory management

**Translators:**
- Built-in compiler/interpreter
- Compile and run buttons
- Error reporting

**Debugging Tools:**
- **Breakpoints:** Pause execution at specific line
- **Step-through:** Execute one line at a time
- **Variable watch:** Monitor variable values
- **Call stack:** See function call history
- **Immediate window:** Execute code during debugging

**Other Features:**
- Project management
- Version control integration
- Code templates
- Documentation generators
- Testing frameworks
`;

// ============================================================================
// WORKED EXAMPLES
// ============================================================================

const OCR_CS_WORKED_EXAMPLES = `
## Worked Examples with OCR-Style Mark Schemes

### Example 1: Binary Conversion
**Q:** Convert the denary number 156 to hexadecimal. [2]

**Working:**
- 156 DIV 16 = 9 remainder 12
- 12 in hex = C
- Answer: 9C

**Mark Scheme:**
- 1 mark: Correct method (dividing by 16 OR converting via binary)
- 1 mark: Correct answer 9C

---

### Example 2: File Size Calculation
**Q:** An image is 1920 x 1080 pixels with 24-bit colour depth. Calculate the file size in MB. [3]

**Working:**
- Total pixels = 1920 x 1080 = 2,073,600 pixels
- Bits = 2,073,600 x 24 = 49,766,400 bits
- Bytes = 49,766,400 / 8 = 6,220,800 bytes
- MB = 6,220,800 / 1,000,000 = 6.22 MB

**Mark Scheme:**
- 1 mark: Correct calculation of total pixels/bits
- 1 mark: Correct division to convert units
- 1 mark: Correct final answer (accept 6.2 - 6.22 MB)

---

### Example 3: Algorithm Writing
**Q:** Write an algorithm that takes 10 numbers as input and outputs the largest. [4]

**Answer:**
\`\`\`
largest = input("Enter a number: ")
for i = 2 to 10
    num = input("Enter a number: ")
    if num > largest then
        largest = num
    endif
next i
print("Largest: " + largest)
\`\`\`

**Mark Scheme:**
- 1 mark: Input of 10 numbers (loop or 10 separate inputs)
- 1 mark: Variable to store largest value
- 1 mark: Correct comparison to find largest
- 1 mark: Output of largest value

---

### Example 4: Trace Table
**Q:** Complete the trace table for this algorithm:
\`\`\`
x = 2
y = 3
for i = 1 to 3
    x = x + y
    y = y + 1
next i
\`\`\`

**Answer:**
| i | x | y |
|---|---|---|
| - | 2 | 3 |
| 1 | 5 | 4 |
| 2 | 9 | 5 |
| 3 | 14 | 6 |

**Mark Scheme:**
- 1 mark per correctly completed row (max 3)

---

### Example 5: Truth Table
**Q:** Complete the truth table for: (A AND B) OR (NOT C) [4]

**Answer:**
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

**Mark Scheme:**
- 4 marks for all correct
- 3 marks for 6-7 correct rows
- 2 marks for 4-5 correct rows
- 1 mark for 2-3 correct rows

---

### Example 6: SQL Query
**Q:** Write an SQL query to display the names and scores of all students with scores above 70, sorted by score in descending order. [3]

**Answer:**
\`\`\`sql
SELECT name, score FROM Students WHERE score > 70 ORDER BY score DESC
\`\`\`

**Mark Scheme:**
- 1 mark: SELECT name, score FROM Students
- 1 mark: WHERE score > 70
- 1 mark: ORDER BY score DESC

---

### Example 7: Extended Response (8 marks)
**Q:** *Discuss the environmental impacts of the increasing use of digital technology. [8]

**Indicative Content:**

Negative impacts:
- E-waste from discarded devices contains toxic materials
- Manufacturing uses energy and raw materials
- Data centres consume huge amounts of electricity
- Carbon footprint from production and shipping
- Mining for rare earth metals damages environment
- Devices have short lifespans, encouraging waste

Positive impacts:
- Remote working reduces commuting emissions
- Digital documents reduce paper use
- Smart technology can optimise energy use
- Video conferencing reduces travel
- Better monitoring of environmental conditions

Mitigations:
- Recycling programs for electronics
- Energy-efficient data centres
- Renewable energy for manufacturing
- Designing for longer device lifespan
- Regulations on e-waste disposal

**Levels of Response:**
- Level 3 (5-8 marks): Thorough discussion of multiple impacts with clear explanations; considers both positive and negative; uses technical terms accurately; well-structured argument
- Level 2 (3-4 marks): Good coverage of some impacts; some consideration of both sides; generally accurate; reasonably structured
- Level 1 (1-2 marks): Limited points made; may only consider one perspective; some inaccuracies; basic structure
- 0 marks: Nothing creditworthy
`;

// ============================================================================
// TOPIC-SPECIFIC GUIDANCE
// ============================================================================

const CS_TOPIC_GUIDANCE: Record<string, string> = {
  'ocr-gcse-cs-systems-architecture': `
Topic: Systems Architecture (Paper 1, Spec 1.1)
Key content:
- CPU purpose and components (ALU, CU, cache, registers)
- MAR, MDR, Program Counter, Accumulator roles
- Fetch-decode-execute cycle (all stages in detail)
- Von Neumann architecture characteristics
- CPU performance factors (clock speed, cache size, cores)
- Embedded systems with real-world examples

OCR commonly tests:
- Describing the FDE cycle
- Explaining why each CPU component is needed
- Comparing CPU performance factors
- Identifying examples of embedded systems
- Explaining why embedded systems are suitable for specific applications
`,

  'ocr-gcse-cs-memory-storage': `
Topic: Memory and Storage (Paper 1, Spec 1.2)
Key content:
- RAM vs ROM (volatile vs non-volatile)
- Virtual memory and why it's needed
- Secondary storage types (optical, magnetic, solid state)
- Comparing storage for: capacity, speed, portability, durability, cost
- Data units (bit to petabyte)
- Binary/hexadecimal conversions
- Binary arithmetic (addition, overflow, shifts)
- Character encoding (ASCII, Unicode)
- Image representation (resolution, colour depth, file size)
- Sound representation (sample rate, bit depth)
- Compression (lossy vs lossless, RLE)

OCR commonly tests:
- Binary/hex conversions
- File size calculations
- Comparing storage types for specific scenarios
- Explaining why Unicode replaced ASCII
- RLE compression examples
`,

  'ocr-gcse-cs-networks': `
Topic: Computer Networks (Paper 1, Spec 1.3)
Key content:
- LAN vs WAN characteristics
- Client-server vs peer-to-peer models
- Network hardware (NIC, switch, router, WAP)
- Star and mesh topologies (advantages/disadvantages)
- Wired vs wireless connections
- The Internet, DNS, web hosting
- Protocols (TCP/IP, HTTP, HTTPS, FTP, SMTP, IMAP)
- TCP/IP layers
- Packet switching (packet structure, process)

OCR commonly tests:
- Explaining how DNS works
- Describing packet switching process
- Comparing topologies for given scenarios
- Identifying suitable network hardware
- Explaining purpose of specific protocols
`,

  'ocr-gcse-cs-network-security': `
Topic: Network Security (Paper 1, Spec 1.4)
Key content:
- Malware types (virus, worm, trojan, spyware, ransomware)
- Social engineering (phishing, blagging, pharming, shouldering)
- Other attacks (brute force, DoS, SQL injection, data interception)
- Prevention methods (firewalls, encryption, anti-malware)
- Network policies and user access levels
- Penetration testing
- Authentication methods

OCR commonly tests:
- Describing how specific attacks work
- Explaining prevention methods
- Distinguishing between malware types
- Identifying security vulnerabilities
- Recommending security measures for scenarios
`,

  'ocr-gcse-cs-systems-software': `
Topic: Systems Software (Paper 1, Spec 1.5)
Key content:
- Operating system purpose and functions
- User interface, memory management, multitasking
- Peripheral management and device drivers
- File management
- Utility software types (encryption, defragmentation, compression, backup, anti-malware)

OCR commonly tests:
- Explaining specific OS functions
- Describing why defragmentation improves performance
- Explaining purpose of device drivers
- Identifying suitable utility software for tasks
`,

  'ocr-gcse-cs-impacts': `
Topic: Ethical, Legal, Cultural and Environmental Impacts (Paper 1, Spec 1.6)
Key content:
- Data Protection Act 2018/GDPR
- Computer Misuse Act 1990
- Copyright, Designs and Patents Act 1988
- Open source vs proprietary software
- Environmental impacts (e-waste, energy use)
- Cultural impacts (digital divide, employment)
- Ethical issues (privacy, surveillance, AI)

OCR commonly tests:
- Extended response (8 marks) on impacts
- Applying legislation to scenarios
- Discussing ethical implications
- Comparing open source and proprietary
- Evaluating environmental impacts
`,

  'ocr-gcse-cs-algorithms': `
Topic: Algorithms (Paper 2, Spec 2.1)
Key content:
- Computational thinking (abstraction, decomposition)
- Pseudocode using OCR Exam Reference Language
- Flowcharts with correct symbols
- Trace tables
- Linear search (algorithm and analysis)
- Binary search (algorithm, requirements, analysis)
- Bubble sort (algorithm, step-by-step)
- Merge sort (algorithm, divide and conquer)
- Insertion sort (algorithm)
- Algorithm efficiency comparison

OCR commonly tests:
- Writing algorithms in OCR ERL
- Completing trace tables
- Comparing search algorithms
- Showing sorting algorithm steps
- Explaining when to use each algorithm
`,

  'ocr-gcse-cs-programming-fundamentals': `
Topic: Programming Fundamentals (Paper 2, Spec 2.2)
Key content:
- Variables, constants, operators
- Data types (integer, real, Boolean, character, string)
- Selection (if/else, switch/case)
- Iteration (for, while, do-until)
- String manipulation functions
- File handling (open, read, write, close)
- Arrays (1D and 2D)
- Records
- SQL queries (SELECT, INSERT, UPDATE, DELETE)
- Subroutines (procedures and functions)
- Parameters and return values
- Local vs global variables

OCR commonly tests:
- Writing programs using specific constructs
- String manipulation
- Array traversal and manipulation
- SQL queries for given requirements
- Function writing with parameters/returns
`,

  'ocr-gcse-cs-robust-programs': `
Topic: Producing Robust Programs (Paper 2, Spec 2.3)
Key content:
- Defensive design principles
- Input validation (types: range, presence, format, length, type)
- Input sanitisation
- Authentication methods
- Maintainability (comments, indentation, naming)
- Testing types (iterative vs terminal)
- Test data types (normal, boundary, erroneous)
- Error types (syntax, logic, runtime)
- Debugging techniques

OCR commonly tests:
- Writing validation code
- Creating test plans
- Identifying errors in code
- Explaining defensive design techniques
- Describing debugging approaches
`,

  'ocr-gcse-cs-boolean-logic': `
Topic: Boolean Logic (Paper 2, Spec 2.4)
Key content:
- AND, OR, NOT gates
- XOR, NAND, NOR gates
- Truth tables (creating and completing)
- Logic circuit diagrams
- Boolean expressions
- Combining multiple gates
- Converting between diagrams and expressions

OCR commonly tests:
- Completing truth tables
- Writing Boolean expressions from diagrams
- Drawing logic circuits from expressions
- Creating truth tables for complex expressions
`,

  'ocr-gcse-cs-languages-ide': `
Topic: Programming Languages and IDEs (Paper 2, Spec 2.5)
Key content:
- High-level vs low-level languages
- Machine code and assembly language
- When to use each type
- Translators: compiler, interpreter, assembler
- Compiler vs interpreter comparison
- IDE features and tools
- Debugging tools (breakpoints, watch, step-through)

OCR commonly tests:
- Comparing high/low level languages
- Explaining when to use compiler vs interpreter
- Identifying IDE features for tasks
- Describing debugging tool usage
`
};

// ============================================================================
// PROMPT GENERATION FUNCTIONS
// ============================================================================

/**
 * Returns the comprehensive system prompt for OCR GCSE Computer Science.
 */
export function getOCRGCSEComputerScienceSystemPrompt(): string {
  return `You are an expert OCR GCSE Computer Science examiner creating exam-style questions for specification J277.

${OCR_CS_ASSESSMENT_OBJECTIVES}

${OCR_CS_EXAM_REFERENCE_LANGUAGE}

${OCR_CS_MARK_SCHEME_CONVENTIONS}

${OCR_CS_QUESTION_TEMPLATES}

${OCR_CS_REFERENCE_DATA}

${OCR_CS_SYSTEMS_ARCHITECTURE}

${OCR_CS_MEMORY_STORAGE}

${OCR_CS_NETWORKS}

${OCR_CS_NETWORK_SECURITY}

${OCR_CS_SYSTEMS_SOFTWARE}

${OCR_CS_IMPACTS}

${OCR_CS_ALGORITHMS}

${OCR_CS_PROGRAMMING}

${OCR_CS_ROBUST_PROGRAMS}

${OCR_CS_BOOLEAN_LOGIC}

${OCR_CS_LANGUAGES_IDE}

${OCR_CS_WORKED_EXAMPLES}

## Critical Requirements

1. **Authentic OCR Style**: Match format, language, and mark allocation of real OCR J277 papers
2. **OCR Exam Reference Language**: Use correct syntax for programming questions
3. **Accurate Content**: All technical details must be correct and up-to-date
4. **Appropriate Marks**: Questions worth 1-8 marks depending on complexity
5. **Clear Mark Schemes**: Specific mark points that match OCR conventions`;
}

/**
 * Returns the question prompt for a specific topic, difficulty, and optional subtopic.
 */
export function getOCRGCSEComputerScienceQuestionPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const markRange = getMarkRangeForDifficulty(difficulty);
  const topicGuidance = CS_TOPIC_GUIDANCE[topic.id] || '';

  const difficultyGuidance = {
    easy: `Create an AO1 question testing basic knowledge recall.

**Question Types for Easy (${markRange.min}-${markRange.max} marks):**
- "Define the term [term]" [1]
- "State what is meant by [concept]" [1]
- "Give two features of [technology]" [2]
- "Name one type of [category]" [1]
- Simple binary/hex conversion [2]
- Identify correct answer from options [1]

**Mark Scheme Format:**
- One clear mark point per mark
- Accept alternative valid answers
- Key terms must be present`,

    medium: `Create an AO2 question requiring application of knowledge.

**Question Types for Medium (${markRange.min}-${markRange.max} marks):**
- "Describe how [process] works" [3-4]
- "Explain why [scenario] occurs" [3-4]
- "Compare [A] and [B]" [3-4]
- Complete the trace table [3-4]
- Write a short algorithm [4]
- Calculate file size [3]
- Complete truth table [3-4]
- SQL query for given requirements [3]

**Mark Scheme Format:**
- Point-based marking (1 mark per valid point)
- For code: accept OCR ERL or Python
- Accept alternative correct solutions`,

    hard: `Create an AO3 question requiring analysis, evaluation, or complex programming.

**Question Types for Hard (${markRange.min}-${markRange.max} marks):**
- "*Discuss the [ethical/legal/environmental] implications of..." [8 marks - extended response]
- "Write an algorithm that [complex task with validation]" [6 marks]
- "Design a system to..." [6 marks]
- "Evaluate [approach] for [scenario]" [6-8 marks]
- Complex debugging with multiple errors [6 marks]

**Mark Scheme Format:**
- For 8-mark extended response: use levels of response
  - Level 3 (5-8 marks): thorough, well-structured, accurate terminology
  - Level 2 (3-4 marks): good understanding, reasonable structure
  - Level 1 (1-2 marks): limited, basic points
- For 6-mark algorithm: point-based marking
- Include indicative content for extended questions`
  };

  return `Generate an OCR GCSE Computer Science question.

## OCR COMPUTER SCIENCE STYLE
**OCR's Scenario-Based Flexible Approach:** ERL pseudocode flexibility with rich contextual scenarios.
- **ERL (Exam Reference Language)** - OCR's formal pseudocode, similar to Python syntax
- **Widest language variety accepted** - students can answer in ERL or any high-level language
- **Scenario-based questions** with detailed contextual preambles and real-world settings
- **30 command words with context** - more detailed context than other boards
- **Mathematical calculations required** in algorithm analysis (like AQA, unlike Edexcel)
- **Extended response questions** with 8-mark level-based marking

${OCR_CS_PRINCIPLES}

**Topic**: ${topic.name}
${subtopic ? `**Subtopic**: ${subtopic}` : ''}
**Difficulty**: ${difficulty}
**Marks**: ${markRange.min}-${markRange.max}

${topicGuidance}

${difficultyGuidance[difficulty]}

**Critical Requirements:**
- Use OCR Exam Reference Language syntax for programming questions
- Include mark allocation in square brackets [X]
- For extended response questions (8 marks), add asterisk (*) before question
- Match the formal, precise language of real OCR J277 papers
- All technical content must be accurate

Return valid JSON:
{
  "content": "question text here (use \\n for line breaks)",
  "marks": number,
  "solution": "detailed mark scheme and model answer",
  "diagram": <optional DiagramSpec - include when question benefits from visual>
}

${getDiagramDocsForSubject('computerscience')}`;
}

// ============================================================================
// ADDITIONAL PROMPT FUNCTIONS FOR SPECIFIC QUESTION TYPES
// ============================================================================

/**
 * Extended response prompt for 8-mark ethics/impacts questions (Paper 1).
 */
export function getOCRCSExtendedResponsePrompt(topic: Topic, subtopic: string): string {
  return `Generate an OCR GCSE Computer Science EXTENDED RESPONSE question (8 marks).

**Topic**: ${topic.name}
**Subtopic**: ${subtopic}

This question should appear on Paper 1 (Computer Systems) and address ethical, legal, cultural, or environmental impacts of technology.

**Format**: "*[Question number] Discuss..." or "*[Question number] Evaluate..."

**Requirements:**
- Focus on impacts of computing technology on society
- Allow discussion of multiple perspectives
- Include real-world context where appropriate
- Use appropriate command word (Discuss, Evaluate)

**Mark scheme MUST use Levels of Response:**
- **Level 3 (5-8 marks):** Demonstrates thorough knowledge and understanding; applies knowledge effectively to the context; uses technical terminology accurately throughout; well-structured, logical response; considers multiple perspectives
- **Level 2 (3-4 marks):** Demonstrates good knowledge and understanding; applies knowledge to the question; generally accurate terminology; reasonably structured
- **Level 1 (1-2 marks):** Demonstrates limited knowledge; limited application to context; some relevant points made; basic structure
- **0 marks:** Nothing creditworthy

Include indicative content listing points that might appear in a good answer (both sides of argument where applicable).

Return valid JSON with question text, marks (8), and detailed mark scheme.`;
}

/**
 * Algorithm writing prompt for Paper 2.
 */
export function getOCRCSAlgorithmPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic: string
): string {
  const markRange = getMarkRangeForDifficulty(difficulty);

  return `Generate an OCR GCSE Computer Science ALGORITHM WRITING question.

**Topic**: ${topic.name}
**Subtopic**: ${subtopic}
**Difficulty**: ${difficulty}

Create a question asking students to write an algorithm that:
- Has a clear, specific task
- States required inputs and outputs
- For medium difficulty: uses iteration and/or selection
- For hard difficulty: includes validation, error handling, or data structures

**Format**: "Write an algorithm that..."

**Marks**: ${markRange.min}-${markRange.max}

**Mark scheme should:**
- Use point-based marking (NOT levels of response)
- Award marks for key features:
  - Input handling (1 mark)
  - Correct loop/iteration if needed (1 mark)
  - Processing logic (1-2 marks)
  - Output (1 mark)
  - Validation if required (1 mark)
- Note: "Accept OCR Exam Reference Language or Python"
- Note: "Accept alternative correct solutions"
- Note: "Minor syntax errors acceptable if logic is clear"

Provide a model answer in OCR Exam Reference Language.

Return valid JSON with question, marks, and detailed mark scheme.`;
}

/**
 * Boolean logic question prompt.
 */
export function getOCRCSBooleanPrompt(difficulty: Difficulty): string {
  const markRange = getMarkRangeForDifficulty(difficulty);

  return `Generate an OCR GCSE Computer Science BOOLEAN LOGIC question.

**Difficulty**: ${difficulty}

Create one of these question types based on difficulty:

For Easy (${difficulty === 'easy' ? 'REQUIRED' : 'optional'}):
- "Complete the truth table for [A AND B]" [2 marks]
- "What is the output when A=1, B=0 for [expression]?" [1 mark]

For Medium (${difficulty === 'medium' ? 'REQUIRED' : 'optional'}):
- "Complete the truth table for: [complex expression with NOT]" [3-4 marks]
- "Write the Boolean expression for the logic diagram shown" [2-3 marks]

For Hard (${difficulty === 'hard' ? 'REQUIRED' : 'optional'}):
- "Complete the truth table for: [expression with 3 inputs and multiple gates]" [4-6 marks]
- "Draw the logic circuit for the expression: [expression]" [3-4 marks]

**Marks**: ${markRange.min}-${markRange.max}

**Mark Scheme:**
- For truth tables: 1 mark per correctly completed row/column
- For expressions: mark for correct operators and structure
- Accept equivalent expressions (e.g., De Morgan's equivalents)

Return valid JSON with appropriate diagram descriptions in the question if showing a circuit.`;
}

/**
 * Trace table question prompt.
 */
export function getOCRCSTraceTablePrompt(difficulty: Difficulty): string {
  const markRange = getMarkRangeForDifficulty(difficulty);

  return `Generate an OCR GCSE Computer Science TRACE TABLE question.

**Difficulty**: ${difficulty}

Create a question with:
1. A code snippet using OCR Exam Reference Language (4-8 lines)
2. Initial values or input specified
3. Request to show variable values at each step

**Marks**: ${markRange.min}-${markRange.max}

**Code should include (based on difficulty):**
- Easy: Simple loop with 1-2 variables
- Medium: Loop with conditional logic, 2-3 variables
- Hard: Nested loops or complex conditions, 3-4 variables

**Mark scheme:**
- Typically 1 mark per correctly completed row
- Show expected trace table in solution
- Accept equivalent representations

Return valid JSON with code in question, expected trace table in solution.`;
}

/**
 * SQL question prompt.
 */
export function getOCRCSSQLPrompt(difficulty: Difficulty): string {
  const markRange = getMarkRangeForDifficulty(difficulty);

  return `Generate an OCR GCSE Computer Science SQL question.

**Difficulty**: ${difficulty}

**Question Types by Difficulty:**

Easy:
- Simple SELECT with one condition
- Basic INSERT statement

Medium:
- SELECT with multiple conditions (AND/OR)
- SELECT with ORDER BY
- UPDATE or DELETE statements

Hard:
- Complex SELECT with multiple conditions, wildcards (LIKE)
- Combined operations
- Interpreting existing SQL code

**Marks**: ${markRange.min}-${markRange.max}

Provide a table structure/context, then ask student to write SQL.

**Mark Scheme:**
- 1 mark for SELECT/FROM clause
- 1 mark for correct WHERE condition
- 1 mark for ORDER BY if required
- Accept variations in formatting/case

Return valid JSON with table description and SQL requirements.`;
}

/**
 * Binary/Hex calculation prompt.
 */
export function getOCRCSBinaryHexPrompt(difficulty: Difficulty): string {
  const markRange = getMarkRangeForDifficulty(difficulty);

  return `Generate an OCR GCSE Computer Science BINARY/HEXADECIMAL question.

**Difficulty**: ${difficulty}

**Question Types by Difficulty:**

Easy:
- Convert denary to binary (8-bit) [2]
- Convert binary to denary [2]
- Convert binary to hexadecimal [2]

Medium:
- Binary addition (8-bit) [2-3]
- Identify overflow in binary addition [3]
- Multiple conversions in one question [3-4]

Hard:
- Binary shifts with multiplication effect [3]
- Complex conversion chain [4]
- Explain why hexadecimal is used [3]

**Marks**: ${markRange.min}-${markRange.max}

**Mark Scheme:**
- Award marks for correct working/method
- Award marks for correct final answer
- For addition: award marks for handling carry

Return valid JSON with clear question and step-by-step solution.`;
}

/**
 * File size calculation prompt.
 */
export function getOCRCSFileSizePrompt(): string {
  return `Generate an OCR GCSE Computer Science FILE SIZE CALCULATION question.

Create a question about calculating file size for:
- Images (width, height, colour depth)
- Sound (sample rate, bit depth, duration, channels)

**Marks**: 3-4

**Requirements:**
- Provide realistic values
- May require unit conversion (bits to bytes to KB to MB)
- Show formula and working in solution

**Mark Scheme:**
- 1 mark: Correct formula/method
- 1 mark: Correct substitution
- 1 mark: Correct calculation
- 1 mark: Correct unit conversion and final answer

Return valid JSON with all necessary data and step-by-step solution.`;
}

// ============================================================================
// LEGACY EXPORT FUNCTIONS (for backwards compatibility)
// ============================================================================

/**
 * Legacy system prompt function with parameters (redirects to main function).
 */
export function getOCRComputerScienceSystemPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic: string
): string {
  const basePrompt = getOCRGCSEComputerScienceSystemPrompt();
  const markRange = getMarkRangeForDifficulty(difficulty);

  return `${basePrompt}

## Your Task
Create a ${difficulty} difficulty question about "${subtopic}" from the topic "${topic.name}".
The question should be worth ${markRange.min}-${markRange.max} marks.

## CRITICAL: Content Boundaries
You MUST ONLY test content that is in the OCR GCSE Computer Science (J277) specification.

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

## Response Format
Return a JSON object with:
- "content": The question text (use \\n for line breaks, include code in \`\`\` blocks)
- "marks": Total marks for the question
- "solution": Complete mark scheme with:
  - For point-based: mark allocation per point
  - For extended response: levels descriptors and indicative content`;
}

/**
 * Legacy question prompt function (redirects to main function).
 */
export function getOCRComputerScienceQuestionPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic: string
): string {
  return getOCRGCSEComputerScienceQuestionPrompt(topic, difficulty, subtopic);
}

/**
 * Legacy extended prompt function.
 */
export function getOCRComputerScienceExtendedPrompt(
  topic: Topic,
  subtopic: string
): string {
  return getOCRCSExtendedResponsePrompt(topic, subtopic);
}

/**
 * Legacy algorithm prompt function.
 */
export function getOCRComputerScienceAlgorithmPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic: string
): string {
  return getOCRCSAlgorithmPrompt(topic, difficulty, subtopic);
}

/**
 * Legacy boolean prompt function.
 */
export function getOCRComputerScienceBooleanPrompt(
  topic: Topic,
  subtopic: string
): string {
  return getOCRCSBooleanPrompt('medium');
}
