import { SubtopicData } from '../bulk-seo-insert';

export const data: SubtopicData[] = [
  {
    content: {
      level: 'gcse',
      subject: 'physics',
      exam_board: 'aqa',
      topic_slug: 'forces',
      subtopic_slug: 'newtons-laws',
      title: 'GCSE Physics: Newton\'s Laws of Motion Practice Questions',
      meta_description: 'Master Newton\'s three laws of motion with GCSE Physics practice. Learn F=ma calculations and understand inertia.',
      introduction: `Newton's three laws describe how forces affect motion. The first law (inertia): objects stay still or move at constant velocity unless acted on by a resultant force. The second law: F = ma (force = mass × acceleration). The third law: every action has an equal and opposite reaction.

The first law explains why passengers lurch forward when a car brakes - their bodies want to keep moving. The second law lets us calculate forces and accelerations. The third law explains how rockets work - exhaust gases push down, the rocket pushes up.

For F = ma calculations, ensure force is in Newtons, mass in kilograms, and acceleration in m/s². Rearrange as needed: a = F/m or m = F/a.`
    },
    questions: [
      { difficulty: 'easy', marks: 2, content: 'A shopping trolley of mass 25 kg is pushed with a resultant force of 50 N.\n\nCalculate the acceleration of the trolley.', solution: '**Use F = ma, rearranged to a = F/m**\n\na = F ÷ m\na = 50 ÷ 25\na = 2 m/s²\n\n**Acceleration = 2 m/s²** ✓', display_order: 1 },
      { difficulty: 'medium', marks: 3, content: 'A car of mass 1200 kg accelerates from rest to 15 m/s in 10 seconds.\n\nCalculate the resultant force acting on the car.', solution: '**Step 1: Calculate acceleration**\na = (v - u) / t\na = (15 - 0) / 10\na = 1.5 m/s²\n\n**Step 2: Calculate force using F = ma**\nF = 1200 × 1.5\nF = 1800 N\n\n**Resultant force = 1800 N** ✓', display_order: 2 },
      { difficulty: 'hard', marks: 4, content: 'Explain, using Newton\'s laws, why a person feels pushed back into their seat when a car accelerates forward.\n\nUse the correct scientific terminology in your answer.', solution: '**Explanation using Newton\'s laws:**\n\nBefore acceleration, the person and car are both moving at constant velocity (or at rest). According to **Newton\'s first law**, the person\'s body will continue in this state unless acted upon by a force.\n\nWhen the car accelerates, the seat pushes forward on the person. According to **Newton\'s third law**, the person pushes back on the seat with an equal and opposite force.\n\nAccording to **Newton\'s second law** (F = ma), the forward force from the seat causes the person to accelerate with the car.\n\nThe sensation of being "pushed back" is actually the person\'s **inertia** - their body\'s resistance to the change in motion. The seat is pushing them forward, but it feels like being pushed back relative to the accelerating car. ✓', display_order: 3 }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'physics',
      exam_board: 'aqa',
      topic_slug: 'forces',
      subtopic_slug: 'momentum',
      title: 'GCSE Physics: Momentum Practice Questions',
      meta_description: 'Master momentum calculations with GCSE Physics practice. Learn p=mv and conservation of momentum.',
      introduction: `Momentum is a measure of how hard it is to stop a moving object. It depends on both mass and velocity: momentum (p) = mass (m) × velocity (v). The unit is kg m/s. Momentum is a vector quantity - it has direction.

In a closed system, total momentum before = total momentum after. This is the conservation of momentum. It applies to collisions and explosions. If objects stick together after colliding, it's an inelastic collision.

For collision problems, add the momenta before (considering direction) and set equal to total momentum after. Remember that velocity is a vector - assign positive and negative directions consistently.`
    },
    questions: [
      { difficulty: 'easy', marks: 2, content: 'A car of mass 1500 kg travels at 20 m/s.\n\nCalculate its momentum.', solution: '**Use p = mv**\n\np = 1500 × 20\np = 30000 kg m/s\n\n**Momentum = 30000 kg m/s** ✓', display_order: 1 },
      { difficulty: 'medium', marks: 3, content: 'A 2 kg ball moving at 5 m/s collides with a stationary 3 kg ball. After collision, they stick together.\n\nCalculate the velocity of the combined balls after collision.', solution: '**Conservation of momentum:**\nTotal momentum before = Total momentum after\n\n**Before:**\nBall 1: p = 2 × 5 = 10 kg m/s\nBall 2: p = 3 × 0 = 0 kg m/s\nTotal before = 10 kg m/s\n\n**After:**\nCombined mass = 2 + 3 = 5 kg\n5 × v = 10\nv = 10 ÷ 5 = 2 m/s\n\n**Velocity after collision = 2 m/s** ✓', display_order: 2 },
      { difficulty: 'hard', marks: 4, content: 'A 0.5 kg ball moving at 6 m/s to the right collides with a 0.3 kg ball moving at 4 m/s to the left. After collision, the 0.5 kg ball moves at 2 m/s to the right.\n\nCalculate the velocity of the 0.3 kg ball after collision.', solution: '**Take right as positive, left as negative**\n\n**Momentum before:**\n0.5 kg ball: 0.5 × 6 = 3 kg m/s\n0.3 kg ball: 0.3 × (-4) = -1.2 kg m/s\nTotal before = 3 - 1.2 = 1.8 kg m/s\n\n**Momentum after:**\n0.5 kg ball: 0.5 × 2 = 1 kg m/s\n0.3 kg ball: 0.3 × v = 0.3v kg m/s\nTotal after = 1 + 0.3v\n\n**Conservation:**\n1.8 = 1 + 0.3v\n0.8 = 0.3v\nv = 2.67 m/s\n\n**The 0.3 kg ball moves at 2.67 m/s to the right** ✓', display_order: 3 }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'physics',
      exam_board: 'aqa',
      topic_slug: 'forces',
      subtopic_slug: 'hookes-law',
      title: 'GCSE Physics: Hooke\'s Law Practice Questions',
      meta_description: 'Master Hooke\'s Law with GCSE Physics practice. Learn F=kx and understand spring constant calculations.',
      introduction: `Hooke's Law states that the extension of a spring is directly proportional to the force applied, up to the elastic limit. The formula is F = kx, where F is force (N), k is the spring constant (N/m), and x is extension (m).

The spring constant k measures stiffness - a higher value means a stiffer spring that needs more force to stretch by the same amount. Beyond the elastic limit, the spring deforms permanently and Hooke's Law no longer applies.

On a force-extension graph, the gradient in the linear region equals the spring constant. The elastic limit is where the line starts to curve. The area under the line represents elastic potential energy stored.`
    },
    questions: [
      { difficulty: 'easy', marks: 2, content: 'A spring has a spring constant of 40 N/m.\n\nCalculate the force needed to extend the spring by 0.2 m.', solution: '**Use F = kx**\n\nF = 40 × 0.2\nF = 8 N\n\n**Force = 8 N** ✓', display_order: 1 },
      { difficulty: 'medium', marks: 3, content: 'A spring extends by 5 cm when a force of 2 N is applied.\n\nCalculate the spring constant in N/m.', solution: '**Convert to SI units:**\nExtension = 5 cm = 0.05 m\n\n**Use F = kx, rearranged to k = F/x**\n\nk = F ÷ x\nk = 2 ÷ 0.05\nk = 40 N/m\n\n**Spring constant = 40 N/m** ✓', display_order: 2 },
      { difficulty: 'hard', marks: 4, content: 'A spring has natural length 15 cm. When a 3 N force is applied, it stretches to 21 cm.\n\n(a) Calculate the spring constant.\n(b) Calculate the elastic potential energy stored in the spring.\n\nUse the formula: Ep = ½kx²', solution: '**(a) Calculate spring constant:**\n\nExtension = 21 - 15 = 6 cm = 0.06 m\n\nk = F/x = 3/0.06 = 50 N/m\n\n**Spring constant = 50 N/m** ✓\n\n**(b) Calculate elastic potential energy:**\n\nEp = ½kx²\nEp = ½ × 50 × (0.06)²\nEp = ½ × 50 × 0.0036\nEp = 0.09 J\n\n**Elastic potential energy = 0.09 J** ✓', display_order: 3 }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'physics',
      exam_board: 'aqa',
      topic_slug: 'forces',
      subtopic_slug: 'weight-and-mass',
      title: 'GCSE Physics: Weight and Mass Practice Questions',
      meta_description: 'Understand the difference between weight and mass with GCSE Physics practice. Master W=mg calculations.',
      introduction: `Mass is the amount of matter in an object, measured in kilograms (kg). It stays the same wherever you go. Weight is the force of gravity acting on that mass, measured in Newtons (N). It depends on gravitational field strength.

The formula is W = mg, where W is weight (N), m is mass (kg), and g is gravitational field strength (N/kg). On Earth, g ≈ 10 N/kg (or 9.8 N/kg for more precision). On the Moon, g ≈ 1.6 N/kg.

An object with mass 60 kg weighs 600 N on Earth but only about 100 N on the Moon. Its mass is still 60 kg in both places.`
    },
    questions: [
      { difficulty: 'easy', marks: 2, content: 'An astronaut has a mass of 70 kg.\n\nCalculate their weight on Earth. (g = 10 N/kg)', solution: '**Use W = mg**\n\nW = 70 × 10\nW = 700 N\n\n**Weight on Earth = 700 N** ✓', display_order: 1 },
      { difficulty: 'medium', marks: 3, content: 'An object weighs 45 N on Earth where g = 10 N/kg.\n\n(a) Calculate its mass.\n(b) Calculate its weight on Mars where g = 3.7 N/kg.', solution: '**(a) Calculate mass:**\nW = mg, so m = W/g\nm = 45 ÷ 10 = 4.5 kg\n\n**Mass = 4.5 kg** ✓\n\n**(b) Weight on Mars:**\nW = mg\nW = 4.5 × 3.7 = 16.65 N\n\n**Weight on Mars = 16.65 N** ✓', display_order: 2 },
      { difficulty: 'hard', marks: 4, content: 'Explain why an astronaut would find it just as hard to push a heavy crate on the Moon as on Earth, even though the crate weighs much less on the Moon.', solution: '**Explanation:**\n\nPushing a crate horizontally requires overcoming its **inertia**, which depends on its **mass**, not its weight.\n\nThe mass of the crate is the same on the Moon as on Earth - it doesn\'t change with location.\n\nWeight only affects how hard it is to lift something (vertical motion against gravity). The lower gravity on the Moon makes the crate easier to **lift**.\n\nBut to **push** it horizontally (ignoring friction), you need to accelerate the mass. From F = ma, the force needed depends on mass, which is unchanged.\n\nSo even though the crate weighs about 1/6 as much on the Moon, it\'s just as hard to accelerate horizontally because the mass is the same. ✓', display_order: 3 }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'physics',
      exam_board: 'aqa',
      topic_slug: 'forces',
      subtopic_slug: 'terminal-velocity',
      title: 'GCSE Physics: Terminal Velocity Practice Questions',
      meta_description: 'Understand terminal velocity with GCSE Physics practice. Learn about balanced forces and falling objects.',
      introduction: `Terminal velocity is the maximum velocity an object reaches when falling through a fluid (like air). It occurs when the drag force equals the weight, so the resultant force is zero and acceleration stops.

When an object first falls, weight > drag, so it accelerates. As it speeds up, drag increases (drag depends on velocity). Eventually drag equals weight, resultant force = 0, and velocity stays constant. This is terminal velocity.

Different objects have different terminal velocities. A skydiver has higher terminal velocity than a feather because weight-to-drag ratio is higher. Opening a parachute increases drag dramatically, reducing terminal velocity.`
    },
    questions: [
      { difficulty: 'easy', marks: 2, content: 'Explain what is meant by terminal velocity.', solution: '**Definition:**\n\nTerminal velocity is the **maximum constant velocity** reached by a falling object when the **resistive force (drag)** acting upwards becomes **equal to the weight** acting downwards.\n\nAt this point, the resultant force is zero, so there is no acceleration and velocity remains constant. ✓', display_order: 1 },
      { difficulty: 'medium', marks: 4, content: 'Describe and explain what happens to the forces and velocity when a skydiver jumps from a plane until they reach terminal velocity.', solution: '**Sequence of events:**\n\n**1. Initially (just after jumping):**\n- Velocity is low\n- Weight acts downwards\n- Air resistance (drag) is very small (depends on velocity)\n- Resultant force = weight - drag ≈ weight (downwards)\n- Skydiver accelerates downwards\n\n**2. As falling continues:**\n- Velocity increases\n- Drag increases (proportional to velocity²)\n- Resultant force decreases (but still downward)\n- Acceleration decreases (but still falling faster)\n\n**3. At terminal velocity:**\n- Drag has increased to equal weight\n- Resultant force = 0\n- Acceleration = 0\n- Velocity stays constant at terminal velocity ✓', display_order: 2 },
      { difficulty: 'hard', marks: 4, content: 'A skydiver of mass 80 kg reaches terminal velocity.\n\n(a) What is the size of the drag force at terminal velocity? (g = 10 N/kg)\n(b) Explain why opening the parachute causes the skydiver to decelerate initially.', solution: '**(a) Drag force at terminal velocity:**\n\nAt terminal velocity:\nDrag force = Weight\nWeight = mg = 80 × 10 = 800 N\n\n**Drag force = 800 N** ✓\n\n**(b) Why parachute causes deceleration:**\n\nOpening the parachute **greatly increases the surface area** of the skydiver.\n\nThis causes an **immediate large increase in drag force** while velocity is still high.\n\nNow drag > weight, so there is a **resultant force upwards**.\n\nThis causes **deceleration** (negative acceleration), slowing the skydiver down.\n\nAs velocity decreases, drag decreases until a new, lower terminal velocity is reached. ✓', display_order: 3 }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'physics',
      exam_board: 'aqa',
      topic_slug: 'forces',
      subtopic_slug: 'acceleration',
      title: 'GCSE Physics: Acceleration Practice Questions',
      meta_description: 'Master acceleration calculations with GCSE Physics practice. Learn a=(v-u)/t and understand velocity changes.',
      introduction: `Acceleration is the rate of change of velocity. The formula is a = (v - u) / t, where a is acceleration (m/s²), v is final velocity, u is initial velocity, and t is time. Positive acceleration means speeding up; negative acceleration (deceleration) means slowing down.

Acceleration is a vector - it has direction. An object moving in a circle at constant speed is still accelerating because its direction (and therefore velocity) is constantly changing.

On a velocity-time graph, acceleration is the gradient. A steeper line means greater acceleration. A horizontal line means constant velocity (zero acceleration). A line sloping downward means deceleration.`
    },
    questions: [
      { difficulty: 'easy', marks: 2, content: 'A car accelerates from 10 m/s to 30 m/s in 5 seconds.\n\nCalculate the acceleration.', solution: '**Use a = (v - u) / t**\n\na = (30 - 10) / 5\na = 20 / 5\na = 4 m/s²\n\n**Acceleration = 4 m/s²** ✓', display_order: 1 },
      { difficulty: 'medium', marks: 3, content: 'A train travelling at 25 m/s decelerates at 2 m/s².\n\nHow long does it take to stop?', solution: '**Given:**\nu = 25 m/s (initial)\nv = 0 m/s (final - stopped)\na = -2 m/s² (deceleration is negative)\n\n**Use a = (v - u) / t, rearranged to t = (v - u) / a**\n\nt = (0 - 25) / (-2)\nt = -25 / -2\nt = 12.5 s\n\n**Time to stop = 12.5 seconds** ✓', display_order: 2 },
      { difficulty: 'hard', marks: 4, content: 'A ball is dropped from rest and falls freely under gravity.\n\n(a) Calculate its velocity after 3 seconds. (g = 10 m/s²)\n(b) Calculate the distance fallen in this time.\n\nUse s = ut + ½at²', solution: '**(a) Velocity after 3 seconds:**\n\nu = 0 (dropped from rest)\na = g = 10 m/s²\nt = 3 s\n\nv = u + at\nv = 0 + 10 × 3\nv = 30 m/s\n\n**Velocity = 30 m/s** ✓\n\n**(b) Distance fallen:**\n\ns = ut + ½at²\ns = 0 × 3 + ½ × 10 × 3²\ns = 0 + ½ × 10 × 9\ns = 45 m\n\n**Distance = 45 m** ✓', display_order: 3 }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'physics',
      exam_board: 'aqa',
      topic_slug: 'forces',
      subtopic_slug: 'stopping-distance',
      title: 'GCSE Physics: Stopping Distance Practice Questions',
      meta_description: 'Understand stopping distances with GCSE Physics practice. Learn about thinking distance and braking distance.',
      introduction: `Stopping distance = thinking distance + braking distance. Thinking distance is how far you travel during reaction time (before braking starts). Braking distance is how far you travel while the brakes are applied until you stop.

Thinking distance increases with: higher speed (you travel further in the same reaction time), tiredness, distractions, alcohol, drugs - anything that increases reaction time.

Braking distance increases with: higher speed (kinetic energy is proportional to v²), wet or icy roads (reduced friction), worn tyres or brakes, heavier vehicle, going downhill.`
    },
    questions: [
      { difficulty: 'easy', marks: 2, content: 'A driver\'s thinking distance is 12 m and braking distance is 24 m.\n\nCalculate the total stopping distance.', solution: '**Stopping distance = Thinking distance + Braking distance**\n\nStopping distance = 12 + 24 = 36 m\n\n**Stopping distance = 36 m** ✓', display_order: 1 },
      { difficulty: 'medium', marks: 3, content: 'A car travels at 20 m/s. The driver\'s reaction time is 0.5 s.\n\n(a) Calculate the thinking distance.\n(b) Suggest why tiredness increases thinking distance.', solution: '**(a) Thinking distance:**\n\nThinking distance = speed × reaction time\nThinking distance = 20 × 0.5 = 10 m\n\n**Thinking distance = 10 m** ✓\n\n**(b) Why tiredness increases thinking distance:**\n\nWhen tired, the driver\'s **reaction time is longer** because:\n- The brain processes information more slowly\n- Nerve impulses may be delayed\n- The driver may be less alert to hazards\n\nA longer reaction time means the car travels **further before braking begins**, increasing thinking distance. ✓', display_order: 2 },
      { difficulty: 'hard', marks: 4, content: 'Explain why doubling the speed of a car more than doubles the total stopping distance.\n\nRefer to both thinking distance and braking distance in your answer.', solution: '**Effect on thinking distance:**\n\nThinking distance = speed × reaction time\n\nIf speed doubles, thinking distance **doubles** (directly proportional to speed).\n\n**Effect on braking distance:**\n\nBraking distance depends on the kinetic energy that must be dissipated.\n\nKE = ½mv²\n\nIf speed doubles, kinetic energy increases by a factor of **4** (proportional to v²).\n\nSince the brakes do the same work per metre, braking distance **quadruples**.\n\n**Total effect:**\n\nThinking distance × 2 + Braking distance × 4 = more than double the original stopping distance.\n\nFor example, if thinking = 10 m, braking = 20 m at speed v:\n- Original total = 30 m\n- At 2v: thinking = 20 m, braking = 80 m, total = 100 m (more than ×3) ✓', display_order: 3 }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'physics',
      exam_board: 'aqa',
      topic_slug: 'forces',
      subtopic_slug: 'moments',
      title: 'GCSE Physics: Moments Practice Questions',
      meta_description: 'Master moments and turning forces with GCSE Physics practice. Learn M=Fd and the principle of moments.',
      introduction: `A moment is the turning effect of a force. It depends on the force and its distance from the pivot: Moment = Force × perpendicular distance from pivot. The unit is Nm (Newton-metres).

For an object to be balanced, the sum of clockwise moments must equal the sum of anticlockwise moments. This is the principle of moments. It applies to seesaws, levers, and any rotating system.

The perpendicular distance is important - if the force acts at an angle, you need the component perpendicular to the lever, or equivalently, the perpendicular distance from the pivot to the line of action of the force.`
    },
    questions: [
      { difficulty: 'easy', marks: 2, content: 'A force of 20 N acts at a distance of 0.4 m from a pivot.\n\nCalculate the moment.', solution: '**Use Moment = Force × Distance**\n\nMoment = 20 × 0.4\nMoment = 8 Nm\n\n**Moment = 8 Nm** ✓', display_order: 1 },
      { difficulty: 'medium', marks: 3, content: 'A uniform plank of length 4 m and weight 100 N rests on a pivot at its centre.\n\nA child of weight 250 N sits 1.5 m from the pivot.\n\nHow far from the pivot must a 300 N adult sit to balance the plank?', solution: '**Apply the principle of moments:**\n\nClockwise moment = Anticlockwise moment\n\n(The plank\'s weight acts at the centre, so produces no moment)\n\n**Child creates anticlockwise moment:**\n250 × 1.5 = 375 Nm\n\n**Adult creates clockwise moment:**\n300 × d = 375\nd = 375 ÷ 300\nd = 1.25 m\n\n**Adult sits 1.25 m from pivot** ✓', display_order: 2 },
      { difficulty: 'hard', marks: 4, content: 'A uniform beam of length 3 m and weight 60 N is supported by two stands: one at each end (A and B).\n\nA 100 N weight is placed 1 m from end A.\n\nCalculate the force exerted by each stand.', solution: '**Draw diagram and identify forces:**\n- FA at A (upward)\n- FB at B (upward)\n- 60 N beam weight at centre (1.5 m from A)\n- 100 N weight at 1 m from A\n\n**Take moments about A (eliminates FA):**\n\nClockwise: 60 × 1.5 + 100 × 1 = 90 + 100 = 190 Nm\nAnticlockwise: FB × 3\n\n190 = 3 × FB\nFB = 63.3 N\n\n**Use total force = total weight:**\n\nFA + FB = 60 + 100 = 160 N\nFA = 160 - 63.3 = 96.7 N\n\n**Force at A = 96.7 N, Force at B = 63.3 N** ✓', display_order: 3 }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'physics',
      exam_board: 'aqa',
      topic_slug: 'forces',
      subtopic_slug: 'resultant-forces',
      title: 'GCSE Physics: Resultant Forces Practice Questions',
      meta_description: 'Master resultant forces with GCSE Physics practice. Learn to combine forces and find net force.',
      introduction: `The resultant force is the single force that has the same effect as all the individual forces acting on an object combined. If forces act in the same direction, add them. If they act in opposite directions, subtract.

When the resultant force is zero, forces are balanced, and the object either stays still or moves at constant velocity (Newton's first law). When there's a non-zero resultant, the object accelerates in the direction of the resultant.

For forces at angles, you can use scale drawings or trigonometry. For perpendicular forces, use Pythagoras: resultant² = F₁² + F₂². The direction can be found using trigonometry.`
    },
    questions: [
      { difficulty: 'easy', marks: 2, content: 'A car experiences a driving force of 3000 N and friction of 1200 N.\n\nCalculate the resultant force on the car.', solution: '**Forces in opposite directions: subtract**\n\nResultant = Driving force - Friction\nResultant = 3000 - 1200\nResultant = 1800 N (forward)\n\n**Resultant force = 1800 N forward** ✓', display_order: 1 },
      { difficulty: 'medium', marks: 3, content: 'A box is pushed with a horizontal force of 40 N. Friction acts at 25 N in the opposite direction. The box weighs 80 N and the normal reaction force is 80 N.\n\nCalculate the resultant force on the box.', solution: '**Analyse horizontal and vertical separately:**\n\n**Vertical:**\nWeight = 80 N (down)\nNormal reaction = 80 N (up)\nResultant vertical = 80 - 80 = 0 N (balanced)\n\n**Horizontal:**\nPush = 40 N (forward)\nFriction = 25 N (backward)\nResultant horizontal = 40 - 25 = 15 N (forward)\n\n**Overall resultant = 15 N horizontally (forward)** ✓', display_order: 2 },
      { difficulty: 'hard', marks: 4, content: 'Two forces act on an object:\n- 30 N acting North\n- 40 N acting East\n\nCalculate:\n(a) The magnitude of the resultant force\n(b) The direction of the resultant force (as a bearing)', solution: '**(a) Magnitude (using Pythagoras):**\n\nThe forces are perpendicular, so:\nResultant² = 30² + 40²\nResultant² = 900 + 1600 = 2500\nResultant = √2500 = 50 N\n\n**Resultant = 50 N** ✓\n\n**(b) Direction:**\n\ntan θ = opposite/adjacent = 40/30 = 1.333\nθ = tan⁻¹(1.333) = 53.1°\n\nThis is 53.1° from North towards East.\n\n**Bearing = 053°** ✓\n\n(This forms a 3-4-5 triangle scaled by 10)', display_order: 3 }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'physics',
      exam_board: 'aqa',
      topic_slug: 'forces',
      subtopic_slug: 'conservation-of-momentum',
      title: 'GCSE Physics: Conservation of Momentum Practice Questions',
      meta_description: 'Master conservation of momentum with GCSE Physics practice. Solve collision and explosion problems.',
      introduction: `In a closed system (no external forces), total momentum before an event equals total momentum after. This applies to collisions (objects hitting each other) and explosions (objects moving apart).

For collisions: total momentum before = total momentum after. If objects stick together (inelastic collision), they move with a common velocity after. If they bounce apart (elastic collision), they move with different velocities.

For explosions, total momentum is zero before (if starting from rest). So total momentum after must also be zero: one object's momentum is equal and opposite to the other's.`
    },
    questions: [
      { difficulty: 'easy', marks: 2, content: 'Two ice skaters push apart from rest. Skater A (mass 60 kg) moves at 2 m/s to the left.\n\nSkater B has mass 40 kg. Calculate skater B\'s velocity.', solution: '**Momentum before = 0 (both at rest)**\n**Momentum after = 0 (conservation)**\n\nMomentum of A = 60 × (-2) = -120 kg m/s\nMomentum of B = 40 × v\n\n-120 + 40v = 0\n40v = 120\nv = 3 m/s (to the right)\n\n**Skater B moves at 3 m/s to the right** ✓', display_order: 1 },
      { difficulty: 'medium', marks: 3, content: 'A 1000 kg car travelling at 20 m/s collides with a stationary 500 kg car. After the collision, they move together.\n\nCalculate their common velocity.', solution: '**Conservation of momentum:**\nTotal before = Total after\n\n**Before:**\nCar 1: 1000 × 20 = 20000 kg m/s\nCar 2: 500 × 0 = 0 kg m/s\nTotal = 20000 kg m/s\n\n**After:**\nCombined mass = 1000 + 500 = 1500 kg\n1500 × v = 20000\nv = 20000 ÷ 1500\nv = 13.3 m/s\n\n**Common velocity = 13.3 m/s** ✓', display_order: 2 },
      { difficulty: 'hard', marks: 4, content: 'A gun of mass 2 kg fires a bullet of mass 0.01 kg at 400 m/s.\n\n(a) Calculate the recoil velocity of the gun.\n(b) Explain why the gun recoils much slower than the bullet despite having the same magnitude of momentum.', solution: '**(a) Calculate recoil velocity:**\n\nMomentum before = 0 (both at rest)\n\nMomentum of bullet = 0.01 × 400 = 4 kg m/s (forward)\nMomentum of gun = 2 × v (backward)\n\nBy conservation: 4 + 2v = 0 (taking forward as positive)\n2v = -4\nv = -2 m/s\n\n**Recoil velocity = 2 m/s (backward)** ✓\n\n**(b) Explanation:**\n\nMomentum = mass × velocity.\n\nBoth have the same magnitude of momentum (4 kg m/s) but:\n- Bullet: small mass (0.01 kg), so high velocity (400 m/s)\n- Gun: large mass (2 kg), so low velocity (2 m/s)\n\np = mv means v = p/m\n\nThe gun\'s mass is 200× the bullet\'s mass, so its velocity is 1/200 of the bullet\'s velocity. ✓', display_order: 3 }
    ]
  }
];

export default data;
