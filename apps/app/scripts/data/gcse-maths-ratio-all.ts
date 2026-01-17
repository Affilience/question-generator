import { SubtopicData } from '../bulk-seo-insert';

export const gcseMathsRatioAll: SubtopicData[] = [
  {
    content: {
      level: 'gcse',
      subject: 'maths',
      exam_board: 'aqa',
      topic_slug: 'ratio',
      subtopic_slug: 'ratio',
      title: 'Ratio | GCSE Maths',
      meta_description: 'Learn how to simplify, share and use ratios for GCSE Maths. Master ratio problems with step-by-step examples and practice questions.',
      introduction: `A ratio compares two or more quantities of the same kind. It shows the relative sizes of the quantities and can be written as a:b or a/b. Understanding ratios is essential for GCSE Maths and everyday situations like cooking, scaling, and finance.

Ratios can be simplified like fractions by dividing all parts by their highest common factor (HCF). For example, 12:8 simplifies to 3:2 by dividing both parts by 4. Always express ratios in their simplest form.

To share an amount in a given ratio, first find the total number of parts by adding the ratio numbers together. Then divide the total amount by the total number of parts to find the value of one part. Finally, multiply by each ratio number.

For example, to share £40 in the ratio 3:5: total parts = 3 + 5 = 8, value of one part = £40 ÷ 8 = £5. So the shares are £15 and £25.

Ratios can be converted to fractions of the total. In the ratio 3:5, the first quantity is 3/8 of the total and the second is 5/8 of the total. This is useful for calculating percentage splits.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'Simplify the ratio 24:36.',
        solution: 'Find the HCF of 24 and 36, which is 12 (1 mark). 24÷12 : 36÷12 = 2:3 (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 3,
        content: 'Share £120 in the ratio 2:3:5.',
        solution: 'Total parts = 2 + 3 + 5 = 10 (1 mark). One part = £120 ÷ 10 = £12 (1 mark). Shares are: £24, £36, £60 (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 4,
        content: 'The ratio of boys to girls in a class is 3:4. There are 6 more girls than boys. How many students are in the class?',
        solution: 'The difference in ratio parts is 4 - 3 = 1 part (1 mark). 1 part represents 6 students (1 mark). Total parts = 3 + 4 = 7, so total students = 7 × 6 = 42 (1 mark). Check: 18 boys, 24 girls, difference is 6 ✓ (1 mark).',
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'maths',
      exam_board: 'aqa',
      topic_slug: 'ratio',
      subtopic_slug: 'direct-proportion',
      title: 'Direct Proportion | GCSE Maths',
      meta_description: 'Master direct proportion including graphical representation and algebraic methods for GCSE Maths exam success.',
      introduction: `Two quantities are in direct proportion when they increase or decrease at the same rate. If one quantity doubles, the other doubles too. If one halves, the other halves.

The relationship can be written as y ∝ x (y is proportional to x) or y = kx, where k is the constant of proportionality. The value of k can be found by dividing y by x for any pair of values.

Graphs of directly proportional quantities are straight lines through the origin. The gradient equals the constant of proportionality k. If a straight line doesn't pass through the origin, the quantities are not directly proportional.

Common examples include: cost and number of items (at a fixed price), distance and time (at constant speed), weight and volume (for uniform materials).

To solve direct proportion problems: identify the constant relationship, set up the proportion equation, and solve. For example, if 5 items cost £20, then k = 20/5 = 4, so cost = 4 × number of items.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'y is directly proportional to x. When x = 4, y = 12. Find y when x = 7.',
        solution: 'k = y/x = 12/4 = 3 (1 mark). When x = 7: y = 3 × 7 = 21 (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 3,
        content: 'The cost of printing leaflets is directly proportional to the number printed. 500 leaflets cost £45. Find the cost of 350 leaflets.',
        solution: 'k = cost/number = 45/500 = 0.09 (or £9 per 100) (1 mark). Cost for 350 = 0.09 × 350 = £31.50 (1 mark). Alternative method using ratio: 350/500 × £45 = £31.50 (1 mark for working).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 4,
        content: 'y is directly proportional to x². When x = 2, y = 20. Find x when y = 125.',
        solution: 'y = kx², so k = y/x² = 20/4 = 5 (1 mark). Equation is y = 5x² (1 mark). When y = 125: 125 = 5x², so x² = 25 (1 mark). x = 5 (taking positive value) (1 mark).',
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'maths',
      exam_board: 'aqa',
      topic_slug: 'ratio',
      subtopic_slug: 'inverse-proportion',
      title: 'Inverse Proportion | GCSE Maths',
      meta_description: 'Learn inverse proportion including the formula y = k/x and problem-solving techniques for GCSE Maths.',
      introduction: `Two quantities are inversely proportional when one increases as the other decreases by the same factor. If one quantity doubles, the other halves. The product of the two quantities stays constant.

The relationship can be written as y ∝ 1/x or y = k/x, where k is the constant of proportionality. Alternatively, xy = k (the product is always the same constant).

Graphs of inversely proportional quantities are hyperbolas - curved lines that approach but never touch the axes. As x gets very large, y gets very small (and vice versa).

Common examples include: speed and time for a fixed distance (faster speed means less time), number of workers and time to complete a job (more workers means less time), pressure and volume of a gas at constant temperature.

To solve inverse proportion problems: find k by multiplying corresponding values, then use y = k/x. For example, if 4 workers take 6 days, k = 4 × 6 = 24, so workers × days = 24 always.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'y is inversely proportional to x. When x = 5, y = 8. Find y when x = 10.',
        solution: 'k = xy = 5 × 8 = 40 (1 mark). When x = 10: y = 40/10 = 4 (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 3,
        content: '6 workers can build a wall in 10 days. How many days would it take 15 workers?',
        solution: 'k = workers × days = 6 × 10 = 60 (1 mark). For 15 workers: days = 60/15 = 4 days (1 mark). Check: more workers means less time ✓ (1 mark for validation).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 4,
        content: 'y is inversely proportional to x². When x = 2, y = 8. Find x when y = 0.5.',
        solution: 'y = k/x², so k = yx² = 8 × 4 = 32 (1 mark). Equation is y = 32/x² (1 mark). When y = 0.5: 0.5 = 32/x², so x² = 64 (1 mark). x = 8 (taking positive value) (1 mark).',
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'maths',
      exam_board: 'aqa',
      topic_slug: 'ratio',
      subtopic_slug: 'speed-distance-time',
      title: 'Speed, Distance and Time | GCSE Maths',
      meta_description: 'Master speed, distance, time calculations using the formula triangle for GCSE Maths with worked examples.',
      introduction: `Speed, distance and time are connected by the formula: Speed = Distance ÷ Time, or using the formula triangle: Distance = Speed × Time, Time = Distance ÷ Speed.

Speed measures how fast something is travelling. Common units include metres per second (m/s), kilometres per hour (km/h), and miles per hour (mph). Always check units match or convert them.

To convert between units: km/h to m/s, divide by 3.6 (or multiply by 1000 and divide by 3600). m/s to km/h, multiply by 3.6.

Average speed = total distance ÷ total time. This is different from the average of two speeds. For example, if you travel at 30 mph for 1 hour and 60 mph for 1 hour, the average speed is (30 + 60)/2 = 45 mph. But if you travel 60 miles at 30 mph then 60 miles at 60 mph, total time = 2 + 1 = 3 hours, average speed = 120/3 = 40 mph.

Distance-time graphs show journeys visually. The gradient represents speed - steeper means faster. A horizontal line means stationary. A negative gradient means returning to the start.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'A car travels 150 km in 2.5 hours. Calculate the average speed.',
        solution: 'Speed = Distance ÷ Time (1 mark). Speed = 150 ÷ 2.5 = 60 km/h (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 3,
        content: 'A cyclist travels at 12 m/s for 45 minutes. How far does she travel in kilometres?',
        solution: '45 minutes = 45 × 60 = 2700 seconds (1 mark). Distance = Speed × Time = 12 × 2700 = 32400 m (1 mark). 32400 m = 32.4 km (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 4,
        content: 'Sam drives 90 km at 60 km/h, then 60 km at 40 km/h. Calculate his average speed for the whole journey.',
        solution: 'Time for first part = 90/60 = 1.5 hours (1 mark). Time for second part = 60/40 = 1.5 hours (1 mark). Total distance = 150 km, total time = 3 hours (1 mark). Average speed = 150/3 = 50 km/h (1 mark).',
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'maths',
      exam_board: 'aqa',
      topic_slug: 'ratio',
      subtopic_slug: 'density',
      title: 'Density | GCSE Maths',
      meta_description: 'Learn density calculations using mass, volume and density for GCSE Maths with practice questions.',
      introduction: `Density measures how much mass is packed into a given volume. The formula is: Density = Mass ÷ Volume, with rearrangements: Mass = Density × Volume, Volume = Mass ÷ Density.

The unit of density depends on the units of mass and volume. Common units include g/cm³ (grams per cubic centimetre), kg/m³ (kilograms per cubic metre), and g/ml (grams per millilitre). Note that 1 ml = 1 cm³.

Water has a density of 1 g/cm³ or 1000 kg/m³. Objects with density greater than 1 g/cm³ sink in water; objects with density less than 1 g/cm³ float.

Different materials have different densities: gold ≈ 19.3 g/cm³, aluminium ≈ 2.7 g/cm³, wood ≈ 0.5-1.0 g/cm³. Density doesn't depend on the amount of material - a small piece of iron has the same density as a large piece.

Density problems often require calculating volume from dimensions first. For a cuboid: Volume = length × width × height. For a cylinder: Volume = πr²h. Remember to convert all measurements to consistent units.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'A block has mass 270 g and volume 100 cm³. Calculate the density.',
        solution: 'Density = Mass ÷ Volume (1 mark). Density = 270 ÷ 100 = 2.7 g/cm³ (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 3,
        content: 'A metal cylinder has density 8.9 g/cm³, radius 2 cm and height 5 cm. Calculate the mass.',
        solution: 'Volume = πr²h = π × 4 × 5 = 20π cm³ (1 mark). Mass = Density × Volume = 8.9 × 20π (1 mark). Mass = 559.2 g (to 1 d.p.) (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 4,
        content: 'A solid metal cuboid weighs 1.08 kg. The cuboid is 6 cm by 5 cm by 4 cm. Is it made of aluminium (density 2.7 g/cm³) or zinc (density 7.1 g/cm³)?',
        solution: 'Volume = 6 × 5 × 4 = 120 cm³ (1 mark). Mass = 1.08 kg = 1080 g (1 mark). Density = 1080 ÷ 120 = 9 g/cm³ (1 mark). This is closer to 7.1 than 2.7, but actually matches neither exactly. Could be zinc with experimental error, definitely not aluminium (1 mark).',
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'maths',
      exam_board: 'aqa',
      topic_slug: 'ratio',
      subtopic_slug: 'pressure',
      title: 'Pressure | GCSE Maths',
      meta_description: 'Master pressure calculations using force and area for GCSE Maths with step-by-step examples.',
      introduction: `Pressure measures the force applied per unit area. The formula is: Pressure = Force ÷ Area, with rearrangements: Force = Pressure × Area, Area = Force ÷ Pressure.

The SI unit of pressure is the pascal (Pa), where 1 Pa = 1 N/m². Other common units include N/cm² and bar. 1 bar = 100,000 Pa.

For the same force, a smaller area produces greater pressure. This explains why: drawing pins have sharp points (small area, high pressure to penetrate), snowshoes spread weight over a large area (reduces pressure on snow), knife edges are thin (small area, high pressure to cut).

When calculating pressure, ensure force and area units are compatible. If pressure is in N/cm², use force in N and area in cm². If pressure is in Pa (N/m²), convert area to m² first.

Pressure in liquids increases with depth. At depth h in a liquid of density ρ: Pressure = ρgh, where g is gravitational field strength (10 N/kg). This is called hydrostatic pressure.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'A force of 80 N acts on an area of 0.2 m². Calculate the pressure.',
        solution: 'Pressure = Force ÷ Area (1 mark). Pressure = 80 ÷ 0.2 = 400 Pa (or N/m²) (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 3,
        content: 'A box weighs 450 N and exerts a pressure of 3000 Pa on the ground. Calculate the area of the base of the box.',
        solution: 'Area = Force ÷ Pressure (1 mark). Area = 450 ÷ 3000 (1 mark). Area = 0.15 m² (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 4,
        content: 'A rectangular crate has base dimensions 0.8 m by 0.5 m. The pressure on the ground is 2500 Pa when the crate stands on this base. Calculate the weight of the crate and the pressure if it is stood on its end (base 0.5 m by 0.4 m).',
        solution: 'Base area = 0.8 × 0.5 = 0.4 m² (1 mark). Weight = Pressure × Area = 2500 × 0.4 = 1000 N (1 mark). New base area = 0.5 × 0.4 = 0.2 m² (1 mark). New pressure = 1000 ÷ 0.2 = 5000 Pa (1 mark).',
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'maths',
      exam_board: 'aqa',
      topic_slug: 'ratio',
      subtopic_slug: 'proportion-graphs',
      title: 'Proportion Graphs | GCSE Maths',
      meta_description: 'Learn to recognise and interpret direct and inverse proportion graphs for GCSE Maths examination success.',
      introduction: `Graphs can show proportional relationships visually. Recognising the shape helps identify the type of proportion and write the equation.

Direct proportion (y ∝ x, y = kx): Straight line through the origin. The gradient equals k. The steeper the line, the larger the value of k.

Direct proportion to a power (y ∝ x², y = kx²): Parabola through the origin. y ∝ x³ gives a steeper curve. y ∝ √x gives a curve that levels off.

Inverse proportion (y ∝ 1/x, y = k/x): Hyperbola - curves approaching both axes but never touching them. As x increases, y decreases. The curves are in quadrants 1 and 3.

To identify proportion from a graph: if it's a straight line through origin, it's y ∝ x; if it's a curve through origin that gets steeper, try y ∝ x²; if it's a hyperbola, try y ∝ 1/x.

To find the equation from a graph, substitute coordinates of a point to find k. For y = kx, pick any point (x, y) and calculate k = y/x.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'A straight line graph passes through the origin and the point (4, 12). Write the equation connecting y and x.',
        solution: 'Since it passes through origin, y ∝ x, so y = kx (1 mark). At (4, 12): 12 = k × 4, so k = 3. Equation is y = 3x (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 3,
        content: 'A graph shows y plotted against x. The curve passes through (2, 5) and (4, 20). Determine whether y ∝ x or y ∝ x² and find the equation.',
        solution: 'Test y ∝ x: k = 5/2 = 2.5 and k = 20/4 = 5. These are different, so not y ∝ x (1 mark). Test y ∝ x²: k = 5/4 = 1.25 and k = 20/16 = 1.25. These are equal ✓ (1 mark). Equation is y = 1.25x² (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 4,
        content: 'A graph shows a hyperbola passing through the points (2, 6) and (3, 4). Verify this is inverse proportion and write the equation. Find the value of x when y = 1.5.',
        solution: 'For inverse proportion, xy should be constant. 2 × 6 = 12 and 3 × 4 = 12 ✓ (1 mark). So y ∝ 1/x with k = 12. Equation is y = 12/x (1 mark). When y = 1.5: 1.5 = 12/x (1 mark). x = 12/1.5 = 8 (1 mark).',
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'maths',
      exam_board: 'aqa',
      topic_slug: 'ratio',
      subtopic_slug: 'best-buy',
      title: 'Best Buy Problems | GCSE Maths',
      meta_description: 'Learn to compare prices and find the best value using ratio and proportion for GCSE Maths.',
      introduction: `Best buy problems require comparing prices to find which option gives the best value for money. This typically means finding the lowest price per unit or the most product per pound.

Two methods work: find the price per unit for each option and compare (lower is better), or find the amount per penny/pound and compare (higher is better). Both methods should give the same answer.

When items come in different sizes or quantities, calculate comparable values. For example, to compare 400g for £1.80 vs 750g for £3.00: per gram prices are 0.45p and 0.40p, so 750g is better value.

Watch out for special offers like "3 for 2" or "buy one get one half price". Calculate the effective price per item including the offer.

Real-world applications include: supermarket shopping, comparing energy tariffs, choosing phone contracts, and any situation where different quantities have different prices.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'Which is better value: 6 oranges for £1.50 or 10 oranges for £2.20?',
        solution: '6 oranges: £1.50 ÷ 6 = 25p per orange. 10 oranges: £2.20 ÷ 10 = 22p per orange (1 mark). 10 oranges for £2.20 is better value (lower price per orange) (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 3,
        content: 'Coffee is sold in two sizes: 200g for £2.40 and 350g for £3.85. Which is better value?',
        solution: '200g: £2.40 ÷ 200 = 1.2p per gram (1 mark). 350g: £3.85 ÷ 350 = 1.1p per gram (1 mark). 350g jar is better value as it costs less per gram (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 4,
        content: 'Shop A sells chocolate bars at 85p each or 3 for £2. Shop B offers buy 2 get 1 free at 90p each. Which is the best way to buy 6 chocolate bars?',
        solution: 'Shop A normal: 6 × 85p = £5.10. Shop A offer: 2 × £2 = £4.00 for 6 (1 mark). Shop B: Buy 4 to get 2 free = 6 bars. Cost = 4 × 90p = £3.60 (1 mark). But need to check: 2 lots of "buy 2 get 1 free" = 4 paid + 2 free = 6 bars for £3.60 (1 mark). Shop B is cheapest at £3.60 (1 mark).',
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'maths',
      exam_board: 'aqa',
      topic_slug: 'ratio',
      subtopic_slug: 'exchange-rates',
      title: 'Exchange Rates | GCSE Maths',
      meta_description: 'Master currency exchange calculations including converting between pounds, euros, and dollars for GCSE Maths.',
      introduction: `Exchange rates tell you how much of one currency you get for another. For example, £1 = €1.15 means you get 1.15 euros for every pound.

To convert pounds to a foreign currency: multiply by the exchange rate. £50 at a rate of €1.15 per pound gives 50 × 1.15 = €57.50.

To convert foreign currency back to pounds: divide by the exchange rate. €57.50 at €1.15 per pound gives 57.50 ÷ 1.15 = £50.

Be careful with how exchange rates are quoted. "£1 = $1.25" means multiply pounds by 1.25 to get dollars. But "$1 = £0.80" means multiply dollars by 0.80 to get pounds (or divide pounds by 0.80 to get dollars).

Real exchange offices often have different buy and sell rates, and may charge commission. The "buy" rate is usually worse for you when buying foreign currency.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'The exchange rate is £1 = €1.12. Convert £250 to euros.',
        solution: 'Euros = Pounds × Exchange rate (1 mark). €250 × 1.12 = €280 (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 3,
        content: 'The exchange rate is £1 = $1.28. Amy has $160. How many pounds is this?',
        solution: 'To convert dollars to pounds, divide by exchange rate (1 mark). £ = $160 ÷ 1.28 (1 mark). £ = £125 (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 4,
        content: 'Tom buys €550 at an exchange rate of £1 = €1.10. He spends €385 on holiday and converts the rest back at a rate of £1 = €1.05. How much does he get back in pounds?',
        solution: 'Cost of €550: £550 ÷ 1.10 = £500 (1 mark). Euros left: €550 - €385 = €165 (1 mark). Converting back: £165 ÷ 1.05 (1 mark). = £157.14 (to nearest penny) (1 mark).',
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'maths',
      exam_board: 'aqa',
      topic_slug: 'ratio',
      subtopic_slug: 'unit-conversions',
      title: 'Unit Conversions | GCSE Maths',
      meta_description: 'Learn metric and imperial unit conversions for length, mass, and volume for GCSE Maths examinations.',
      introduction: `Converting between units is essential for problem-solving. Metric conversions use powers of 10, while imperial-metric conversions use approximate equivalents.

Metric length: 1 km = 1000 m, 1 m = 100 cm, 1 cm = 10 mm. So 1 m = 1000 mm and 1 km = 100,000 cm.

Metric mass: 1 tonne = 1000 kg, 1 kg = 1000 g, 1 g = 1000 mg.

Metric volume: 1 litre = 1000 ml = 1000 cm³. For larger volumes, 1 m³ = 1,000,000 cm³ = 1000 litres.

Imperial-metric conversions (approximate): 1 inch ≈ 2.5 cm, 1 foot ≈ 30 cm, 1 mile ≈ 1.6 km, 1 kg ≈ 2.2 pounds, 1 gallon ≈ 4.5 litres.

When converting: to go from larger to smaller units, multiply; to go from smaller to larger units, divide. Think about whether your answer should be bigger or smaller to check you've done it the right way.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'Convert 3.5 km to metres.',
        solution: '1 km = 1000 m (1 mark). 3.5 km = 3.5 × 1000 = 3500 m (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 3,
        content: 'A car travels at 72 km/h. Convert this speed to m/s.',
        solution: '72 km = 72 × 1000 = 72000 m (1 mark). 1 hour = 60 × 60 = 3600 seconds (1 mark). Speed = 72000 ÷ 3600 = 20 m/s (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 4,
        content: 'A swimming pool is 25 m long, 10 m wide and 1.8 m deep. How many litres of water does it hold?',
        solution: 'Volume = 25 × 10 × 1.8 = 450 m³ (1 mark). 1 m³ = 100 cm × 100 cm × 100 cm = 1,000,000 cm³ (1 mark). 1 litre = 1000 cm³, so 1 m³ = 1000 litres (1 mark). 450 m³ = 450 × 1000 = 450,000 litres (1 mark).',
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'maths',
      exam_board: 'aqa',
      topic_slug: 'ratio',
      subtopic_slug: 'scale-factors',
      title: 'Scale Factors | GCSE Maths',
      meta_description: 'Master scale factors for enlargements and similar shapes for GCSE Maths with detailed examples.',
      introduction: `A scale factor describes how many times larger (or smaller) one shape is compared to another. It is the ratio of corresponding lengths in similar shapes.

Scale factor = new length ÷ original length. A scale factor greater than 1 means enlargement; less than 1 means reduction; equal to 1 means same size.

For similar shapes, all corresponding lengths have the same scale factor. If the scale factor of lengths is k, then: the scale factor of areas is k², the scale factor of volumes is k³.

Map scales can be written as ratios like 1:50000, meaning 1 cm on the map represents 50000 cm (500 m) in real life. Or as "1 cm represents 2 km".

To find actual distance from a map: measure the map distance and multiply by the scale. To find map distance from actual: divide the actual distance by the scale.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'A shape is enlarged by scale factor 3. If the original length is 4 cm, what is the new length?',
        solution: 'New length = Original length × Scale factor (1 mark). New length = 4 × 3 = 12 cm (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 3,
        content: 'Two similar triangles have corresponding sides 5 cm and 8 cm. The area of the smaller triangle is 15 cm². Find the area of the larger triangle.',
        solution: 'Scale factor of lengths = 8/5 = 1.6 (1 mark). Scale factor of areas = 1.6² = 2.56 (1 mark). Larger area = 15 × 2.56 = 38.4 cm² (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 4,
        content: 'Two similar cylinders have volumes in the ratio 8:27. The height of the smaller cylinder is 4 cm. Find the height of the larger cylinder.',
        solution: 'Volume ratio = 8:27 (1 mark). Scale factor of volumes = 27/8. Scale factor of lengths = ∛(27/8) = 3/2 = 1.5 (1 mark). Height of larger = 4 × 1.5 = 6 cm (1 mark). Check: Volume ratio = 1.5³ = 3.375 = 27/8 ✓ (1 mark).',
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'maths',
      exam_board: 'aqa',
      topic_slug: 'ratio',
      subtopic_slug: 'similar-shapes-ratio',
      title: 'Similar Shapes and Ratio | GCSE Maths',
      meta_description: 'Learn about similar shapes, corresponding sides and calculating missing lengths for GCSE Maths.',
      introduction: `Similar shapes have the same shape but different sizes. All corresponding angles are equal and all corresponding sides are in the same ratio.

To show two shapes are similar, prove that either: all corresponding angles are equal, or all corresponding sides are in the same ratio.

For similar triangles, if two pairs of corresponding angles are equal, the triangles are similar (AA similarity). This is because the third angles must also be equal (angles in a triangle sum to 180°).

To find missing lengths in similar shapes: identify corresponding sides, find the scale factor from a pair of known corresponding lengths, then use the scale factor to find the missing length.

Setting up ratios: If triangles ABC and PQR are similar with A corresponding to P, then AB/PQ = AC/PR = BC/QR. Cross-multiply to solve for unknowns.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'Two similar rectangles have lengths 6 cm and 9 cm. The width of the smaller rectangle is 4 cm. Find the width of the larger rectangle.',
        solution: 'Scale factor = 9/6 = 1.5 (1 mark). Width of larger = 4 × 1.5 = 6 cm (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 3,
        content: 'Triangles ABC and DEF are similar. AB = 8 cm, BC = 6 cm, DE = 12 cm. Find EF.',
        solution: 'Scale factor = DE/AB = 12/8 = 1.5 (1 mark). EF corresponds to BC (1 mark). EF = BC × 1.5 = 6 × 1.5 = 9 cm (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 4,
        content: 'In the diagram, triangles ADE and ABC are similar. AD = 4 cm, DB = 6 cm, DE = 5 cm. Find BC.',
        solution: 'AD/AB = DE/BC (corresponding sides in similar triangles) (1 mark). AB = AD + DB = 4 + 6 = 10 cm (1 mark). 4/10 = 5/BC (1 mark). BC = 5 × 10/4 = 12.5 cm (1 mark).',
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'maths',
      exam_board: 'aqa',
      topic_slug: 'ratio',
      subtopic_slug: 'compound-measures',
      title: 'Compound Measures | GCSE Maths',
      meta_description: 'Master compound measures including speed, density, pressure, and population density for GCSE Maths.',
      introduction: `Compound measures are quantities that involve more than one unit, created by combining other measures through multiplication or division. Examples include speed (distance/time), density (mass/volume), and pressure (force/area).

Understanding compound measures requires knowing how the components relate. Speed = distance ÷ time, so the unit is distance unit per time unit (e.g., km/h, m/s, mph).

Other compound measures include: population density (people per km²), fuel consumption (miles per gallon or litres per 100 km), flow rate (litres per minute), and wage rate (£ per hour).

To solve problems, use the formula triangle or cross-multiplication. Ensure units are consistent throughout your calculation. Convert if necessary before substituting.

For harder problems, you may need to combine compound measures. For example, calculating fuel cost for a journey requires: distance × fuel consumption × fuel price.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'A car uses 8 litres of fuel to travel 100 km. Calculate the fuel consumption in litres per km.',
        solution: 'Fuel consumption = litres ÷ km (1 mark). = 8 ÷ 100 = 0.08 litres per km (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 3,
        content: 'A region has area 450 km² and population 27000. Calculate the population density. Another region has the same area but population density of 80 people per km². How many more people live in the second region?',
        solution: 'Population density = 27000 ÷ 450 = 60 people per km² (1 mark). Second region population = 80 × 450 = 36000 (1 mark). Difference = 36000 - 27000 = 9000 more people (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 4,
        content: 'Water flows into a tank at 25 litres per minute. The tank is a cuboid measuring 2m × 1.5m × 0.8m. How long will it take to fill the tank from empty?',
        solution: 'Volume of tank = 2 × 1.5 × 0.8 = 2.4 m³ (1 mark). 1 m³ = 1000 litres, so volume = 2400 litres (1 mark). Time = volume ÷ rate = 2400 ÷ 25 (1 mark). = 96 minutes = 1 hour 36 minutes (1 mark).',
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'maths',
      exam_board: 'aqa',
      topic_slug: 'ratio',
      subtopic_slug: 'growth-and-decay',
      title: 'Growth and Decay | GCSE Maths',
      meta_description: 'Learn exponential growth and decay including compound interest and depreciation for GCSE Maths.',
      introduction: `Growth and decay describe how quantities change over time. Exponential growth means increasing by a fixed percentage; exponential decay means decreasing by a fixed percentage.

For percentage increase: Final = Original × (1 + r)ⁿ, where r is the rate as a decimal and n is the number of time periods. For 5% growth, the multiplier is 1.05.

For percentage decrease (decay): Final = Original × (1 - r)ⁿ. For 5% decay, the multiplier is 0.95.

Compound interest is growth applied repeatedly. £1000 at 3% per year for 5 years: Amount = 1000 × 1.03⁵ = £1159.27.

Depreciation is decay applied repeatedly. A car worth £15000 losing 20% per year for 3 years: Value = 15000 × 0.80³ = £7680.

Population growth, bacterial growth, and radioactive decay all follow these patterns. The key is identifying the percentage change and number of time periods.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: '£500 is invested at 4% compound interest per year. Calculate the amount after 2 years.',
        solution: 'Amount = 500 × 1.04² (1 mark). = 500 × 1.0816 = £540.80 (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 3,
        content: 'A car is bought for £12000. It depreciates by 15% each year. What is it worth after 3 years?',
        solution: 'Multiplier for 15% decrease = 0.85 (1 mark). Value = 12000 × 0.85³ (1 mark). = 12000 × 0.614125 = £7369.50 (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 4,
        content: 'A population of bacteria doubles every 30 minutes. Initially there are 200 bacteria. How many will there be after 3 hours?',
        solution: '3 hours = 6 periods of 30 minutes (1 mark). Doubling means multiplying by 2 each period (1 mark). Population = 200 × 2⁶ (1 mark). = 200 × 64 = 12,800 bacteria (1 mark).',
        display_order: 3
      }
    ]
  }
];

export default gcseMathsRatioAll;
