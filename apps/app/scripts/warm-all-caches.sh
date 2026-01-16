#!/bin/bash

# Comprehensive cache warming script
# Warms ALL subtopics across ALL topics and difficulties

API_URL="http://localhost:3000/api/generate-question"
QUESTIONS_PER_SUBTOPIC=3

# All topics from topics.ts
declare -a TOPICS=("number" "algebra" "geometry" "statistics" "probability" "ratio")

# Difficulties
declare -a DIFFICULTIES=("easy" "medium" "hard")

# Subtopics for each topic (abbreviated list for key ones)
# Number subtopics
declare -a NUMBER_SUBTOPICS=(
  "Ordering integers, decimals and fractions"
  "Operations with negative numbers"
  "Order of operations (BIDMAS)"
  "Highest common factor (HCF)"
  "Lowest common multiple (LCM)"
  "Prime factorisation"
  "Squares and square roots"
  "Laws of indices"
  "Estimation and approximation"
  "Adding and subtracting fractions"
  "Multiplying and dividing fractions"
  "Fractions of amounts"
  "Converting between fractions and decimals"
  "Percentage of an amount"
  "Percentage increase and decrease"
  "Reverse percentages"
  "Compound interest"
  "Rounding to decimal places"
  "Rounding to significant figures"
  "Standard form"
)

# Algebra subtopics
declare -a ALGEBRA_SUBTOPICS=(
  "Collecting like terms"
  "Substitution into expressions"
  "Expanding single brackets"
  "Expanding double brackets"
  "Factorising single brackets"
  "Factorising quadratics"
  "Plotting linear graphs"
  "Gradient of a line"
  "Equation of a straight line (y = mx + c)"
  "Quadratic graphs"
  "Nth term of linear sequences"
  "Solving one-step equations"
  "Solving two-step equations"
  "Solving equations with unknowns on both sides"
  "Solving quadratics by factorising"
  "Solving simultaneous equations algebraically"
  "Solving linear inequalities"
  "Changing the subject of a formula"
)

# Geometry subtopics
declare -a GEOMETRY_SUBTOPICS=(
  "Angles at a point"
  "Angles in triangles"
  "Interior angles of polygons"
  "Properties of triangles"
  "Properties of quadrilaterals"
  "Parts of a circle"
  "Arc length"
  "Sector area"
  "Angles in parallel lines"
  "Similar shapes"
  "Perimeter of shapes"
  "Area of triangles"
  "Area of compound shapes"
  "Circumference of a circle"
  "Area of a circle"
  "Volume of cuboids"
  "Volume of prisms"
  "Pythagoras theorem"
  "Trigonometric ratios (SOHCAHTOA)"
  "Three-figure bearings"
  "Translations"
  "Reflections"
  "Rotations"
  "Enlargements"
)

# Statistics subtopics
declare -a STATISTICS_SUBTOPICS=(
  "Types of data"
  "Sampling methods"
  "Bar charts"
  "Pie charts"
  "Frequency tables"
  "Two-way tables"
  "Mean"
  "Median"
  "Mode"
  "Range"
  "Mean from frequency tables"
  "Scatter graphs"
  "Correlation"
  "Lines of best fit"
)

# Probability subtopics
declare -a PROBABILITY_SUBTOPICS=(
  "Probability of single events"
  "Calculating simple probability"
  "Mutually exclusive events"
  "Expected frequency"
  "Relative frequency"
  "Sample spaces"
  "Tree diagrams"
  "Independent events"
  "Combined probability"
  "Venn diagrams for probability"
)

# Ratio subtopics
declare -a RATIO_SUBTOPICS=(
  "Converting metric units"
  "Scale drawings"
  "Writing ratios"
  "Simplifying ratios"
  "Dividing in a ratio"
  "Sharing in a ratio given total"
  "Percentage increase"
  "Percentage decrease"
  "Direct proportion"
  "Inverse proportion"
  "Speed"
  "Distance, speed, time calculations"
  "Density"
  "Best buy problems"
)

generate_question() {
  local topic=$1
  local subtopic=$2
  local difficulty=$3

  curl -s -X POST "$API_URL" \
    -H "Content-Type: application/json" \
    -d "{\"topicId\": \"$topic\", \"difficulty\": \"$difficulty\", \"subtopic\": \"$subtopic\", \"skipCache\": false}" > /dev/null 2>&1
}

warm_topic() {
  local topic=$1
  shift
  local subtopics=("$@")

  echo "Warming $topic (${#subtopics[@]} subtopics)..."

  local count=0
  for subtopic in "${subtopics[@]}"; do
    for difficulty in "${DIFFICULTIES[@]}"; do
      for i in $(seq 1 $QUESTIONS_PER_SUBTOPIC); do
        generate_question "$topic" "$subtopic" "$difficulty"
        ((count++))
      done
    done
    echo "  - $subtopic (all difficulties)"
  done

  echo "  Total questions generated for $topic: $count"
}

echo "================================"
echo "Starting comprehensive cache warm"
echo "================================"
echo ""

# Warm each topic
warm_topic "number" "${NUMBER_SUBTOPICS[@]}"
echo ""

warm_topic "algebra" "${ALGEBRA_SUBTOPICS[@]}"
echo ""

warm_topic "geometry" "${GEOMETRY_SUBTOPICS[@]}"
echo ""

warm_topic "statistics" "${STATISTICS_SUBTOPICS[@]}"
echo ""

warm_topic "probability" "${PROBABILITY_SUBTOPICS[@]}"
echo ""

warm_topic "ratio" "${RATIO_SUBTOPICS[@]}"
echo ""

echo "================================"
echo "Cache warming complete!"
echo "================================"
