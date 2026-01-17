import { SubtopicData } from '../bulk-seo-insert';

export const gcseBiologyHomeostasis: SubtopicData[] = [
  {
    content: {
      level: 'gcse',
      subject: 'biology',
      exam_board: 'aqa',
      topic_slug: 'homeostasis',
      subtopic_slug: 'homeostasis',
      title: 'Homeostasis | GCSE Biology',
      meta_description: 'Master homeostasis including negative feedback and control systems. GCSE Biology practice questions with step-by-step solutions.',
      introduction: `Homeostasis is the maintenance of a constant internal environment despite changes in external conditions. This is essential for the proper functioning of enzymes and cells, which work best within narrow ranges of conditions such as temperature, pH, and water concentration.

The internal conditions that must be controlled include body temperature (around 37°C in humans), blood glucose concentration, water and ion content of the blood, and carbon dioxide levels. If any of these stray too far from their optimal values, cells cannot function properly, enzymes may denature, and organ systems can fail.

Homeostatic control systems involve receptors, coordination centres, and effectors. Receptors detect changes (stimuli) in the internal or external environment. The coordination centre (such as the brain or pancreas) processes this information and determines the appropriate response. Effectors (muscles or glands) carry out the response to bring conditions back to normal.

Most homeostatic mechanisms work through negative feedback. When a condition deviates from its set point, the response acts to return it to normal. For example, if body temperature rises, sweat glands become more active and blood vessels dilate to release heat. Once temperature returns to normal, these responses decrease. This creates a self-regulating system.

Negative feedback ensures that any change automatically triggers a response that counteracts that change. It's called 'negative' because the response opposes the original change. This maintains conditions within narrow limits around the set point, allowing the body to function effectively in varying environments.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'Define homeostasis and state why it is important for the body.',
        solution: `**Definition:**
Homeostasis is the regulation/maintenance of a constant internal environment [1 mark]

**Importance:**
- To maintain optimal conditions for enzyme activity [1 mark]
- Enzymes work best at specific temperatures and pH
- If conditions change too much, enzymes denature and cells cannot function properly
- Essential for survival of cells and organs`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Describe how negative feedback works in homeostasis, using temperature regulation as an example.',
        solution: `**How negative feedback works:**
A change in conditions triggers a response that opposes/reverses that change [1 mark]

**Temperature regulation example:**

**When body temperature rises above 37°C:**
- Receptors in the skin and hypothalamus detect the increase [1 mark]
- The hypothalamus (coordination centre) sends signals
- Effectors respond:
  - Sweat glands produce more sweat (evaporation cools skin)
  - Blood vessels dilate (vasodilation) to release heat [1 mark]
- Body temperature decreases back towards 37°C

**Self-regulating:**
- Once temperature returns to normal, the responses reduce [1 mark]
- This maintains temperature within narrow limits around the set point`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'A student exercises vigorously on a hot day. Explain how their body maintains homeostasis of both temperature and water balance, and describe any conflict between these two systems.',
        solution: `**Temperature regulation during exercise:**
- Body temperature rises due to respiration in muscles [1 mark]
- More sweat is produced for evaporative cooling
- Blood vessels in skin dilate (vasodilation) to radiate heat
- Breathing rate increases to expel heat [1 mark]

**Water balance challenges:**
- Sweating causes water loss from the body
- This could lead to dehydration
- Blood becomes more concentrated [1 mark]

**Conflict between systems:**
- Cooling requires sweating (water loss)
- But water balance requires conserving water
- The body must prioritise temperature regulation (overheating is immediately dangerous) [1 mark]

**How conflict is managed:**
- Kidneys produce less, more concentrated urine to conserve water
- Thirst sensation increases to encourage drinking
- If dehydration becomes severe, sweating may reduce to conserve water
- This is why exercise in extreme heat can be dangerous - neither system can work optimally [1 mark]

**ADH involvement:**
- Pituitary gland releases more ADH when blood is concentrated
- ADH causes kidneys to reabsorb more water`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'biology',
      exam_board: 'aqa',
      topic_slug: 'homeostasis',
      subtopic_slug: 'nervous-system',
      title: 'The Nervous System | GCSE Biology',
      meta_description: 'Master the nervous system including neurons and synapses. GCSE Biology practice questions with step-by-step solutions.',
      introduction: `The nervous system enables rapid communication throughout the body, allowing organisms to detect and respond to changes in their environment. It consists of the central nervous system (CNS) - the brain and spinal cord - and the peripheral nervous system (PNS) - the nerves connecting the CNS to the rest of the body.

Information travels through the nervous system as electrical impulses along neurons (nerve cells). There are three types of neurons: sensory neurons carry impulses from receptors to the CNS, relay neurons (interneurons) connect neurons within the CNS, and motor neurons carry impulses from the CNS to effectors (muscles and glands).

Neurons have specialized structures for rapid signal transmission. The cell body contains the nucleus and most organelles. Dendrites receive signals from other neurons or receptors. The axon is a long fiber that carries impulses away from the cell body, often covered in a myelin sheath that speeds up transmission by insulating the axon.

At synapses - the junctions between neurons - electrical impulses cannot jump directly across the gap. Instead, chemicals called neurotransmitters are released from vesicles in the presynaptic neuron, diffuse across the synaptic cleft, and bind to receptors on the postsynaptic neuron, triggering a new electrical impulse.

The nervous system allows rapid, short-lived, precise responses to stimuli. Unlike hormonal responses, nerve impulses travel quickly (up to 120 m/s in myelinated neurons) and target specific effectors. This makes the nervous system ideal for coordinating fast actions like catching a ball, withdrawing from pain, or maintaining balance.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'Name the three types of neurons and describe the function of each.',
        solution: `**Three types of neurons:**

1. **Sensory neurons** [1 mark]
- Carry impulses/electrical signals from receptors to the CNS (brain or spinal cord)
- Example: from touch receptors in skin to the brain

2. **Relay neurons (interneurons)** [1 mark]
- Found in the CNS (brain and spinal cord)
- Connect sensory neurons to motor neurons
- Process and relay information

3. **Motor neurons** [1 mark]
- Carry impulses from the CNS to effectors
- Effectors are muscles (which contract) or glands (which secrete hormones)`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Describe how a nerve impulse is transmitted across a synapse.',
        solution: `**Transmission across a synapse:**

1. **Impulse arrives** at the presynaptic neuron (the neuron before the synapse) [1 mark]

2. **Neurotransmitter release:**
- Vesicles containing neurotransmitter chemicals move to the membrane
- Neurotransmitters are released into the synaptic cleft (gap) [1 mark]

3. **Diffusion across gap:**
- Neurotransmitters diffuse across the synaptic cleft
- This is a very short distance (about 20nm)

4. **Binding to receptors:**
- Neurotransmitters bind to specific receptors on the postsynaptic membrane [1 mark]
- This triggers a new electrical impulse in the next neuron [1 mark]

5. **Neurotransmitter removal:**
- Neurotransmitters are broken down by enzymes or reabsorbed
- This prevents continuous stimulation`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'Compare and contrast nervous and hormonal control systems in the body.',
        solution: `**Comparison of nervous and hormonal control:**

| Feature | Nervous System | Hormonal System |
|---------|----------------|-----------------|
| **Speed** | Very fast (milliseconds) [1 mark] | Slower (seconds to minutes) |
| **Signal type** | Electrical impulses | Chemical (hormones in blood) [1 mark] |
| **Duration** | Short-lived response | Longer-lasting effects |
| **Pathway** | Along neurons (specific path) | Through bloodstream (throughout body) [1 mark] |
| **Target** | Specific effectors | Cells with specific receptors |

**When each is used:**
- Nervous: rapid, precise responses (reflexes, movement, immediate sensory responses) [1 mark]
- Hormonal: slower, widespread, longer-lasting responses (growth, metabolism, reproduction, blood glucose control) [1 mark]

**Working together:**
- Often work together to coordinate responses
- Example: Fight or flight involves both nervous (immediate) and hormonal (adrenaline) responses
- Nervous system can trigger hormone release (hypothalamus controlling pituitary)`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'biology',
      exam_board: 'aqa',
      topic_slug: 'homeostasis',
      subtopic_slug: 'reflex-arc',
      title: 'The Reflex Arc | GCSE Biology',
      meta_description: 'Master reflex arcs including receptors, neurons and effectors. GCSE Biology practice questions with solutions.',
      introduction: `Reflexes are rapid, automatic responses to stimuli that protect the body from harm. Unlike conscious responses, reflexes do not require thought or decision-making - they happen automatically. This makes them faster and ensures a protective response even before you consciously perceive danger.

The pathway for a reflex is called a reflex arc. It consists of five components: a receptor that detects the stimulus, a sensory neuron that carries impulses to the CNS, a relay neuron in the CNS (spinal cord for most reflexes), a motor neuron that carries impulses to the effector, and an effector (muscle or gland) that produces the response.

In a typical spinal reflex like the withdrawal reflex, the stimulus (touching something hot) is detected by pain receptors in the skin. The sensory neuron transmits this information to the spinal cord, where a relay neuron passes it to a motor neuron. The motor neuron stimulates muscles to contract, pulling the hand away from the heat source.

The key feature of spinal reflexes is that they don't involve the brain. The signal travels to the spinal cord and back, bypassing the brain entirely for the reflex response. Information is still sent to the brain, so you become aware of the pain, but this happens after the reflex has already begun.

Reflexes serve important protective functions. The pupil reflex protects the retina from bright light. The withdrawal reflex protects from burning or cutting. The knee-jerk reflex helps maintain posture and balance. The blinking reflex protects the eyes from objects approaching suddenly. All these responses happen without conscious thought.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'List the five components of a reflex arc in the correct order.',
        solution: `**Five components of a reflex arc (in order):**

1. **Receptor** - detects the stimulus [1 mark]

2. **Sensory neuron** - carries impulse from receptor to CNS

3. **Relay neuron** - in the spinal cord/CNS, passes signal to motor neuron [1 mark]

4. **Motor neuron** - carries impulse from CNS to effector

5. **Effector** - muscle or gland that produces the response [1 mark]

(The pathway: Stimulus → Receptor → Sensory neuron → Relay neuron → Motor neuron → Effector → Response)`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Describe the pathway of a reflex arc when a person touches a hot surface, from stimulus to response.',
        solution: `**Reflex arc when touching a hot surface:**

1. **Stimulus:** Hot surface (high temperature) [1 mark]

2. **Receptor:** Pain/temperature receptors in the skin detect the heat

3. **Sensory neuron:** Carries electrical impulses from the receptors to the spinal cord [1 mark]

4. **Relay neuron:** In the spinal cord, passes the impulse to the motor neuron (information also sent to brain)

5. **Motor neuron:** Carries impulse from spinal cord to muscles in the arm [1 mark]

6. **Effector:** Arm/hand muscles contract

7. **Response:** Hand is pulled away from the hot surface [1 mark]

This all happens automatically and very quickly (within milliseconds), protecting the hand from serious burns.`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'Explain why reflexes are beneficial for survival and why the brain is not directly involved in spinal reflexes.',
        solution: `**Benefits of reflexes for survival:**

1. **Speed** [1 mark]
- Reflexes are very fast (milliseconds)
- Faster than conscious responses which require thinking
- Quick response minimises harm (e.g., pulling away before serious burn)

2. **Automatic** [1 mark]
- No conscious thought required
- Response happens even if attention is elsewhere
- Works even when asleep or distracted

3. **Reliable**
- Same stimulus always produces same response
- Cannot be "overridden" by incorrect thinking
- Ensures consistent protective response

**Why brain is not directly involved:**

1. **Speed advantage** [1 mark]
- Going to the spinal cord and back is a shorter pathway
- Impulses don't have to travel all the way to the brain
- Saves precious milliseconds

2. **Freeing brain capacity** [1 mark]
- Brain can focus on complex tasks
- Simple protective responses handled automatically
- Brain still receives information and becomes aware of what happened

3. **Efficiency** [1 mark]
- Simple, pre-programmed response doesn't need "thinking"
- Pattern is innate (born with it) not learned
- Most efficient use of nervous system resources

Note: Brain IS informed and can override some reflexes consciously (e.g., holding a hot plate despite pain), but the initial reflex response begins before conscious awareness.`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'biology',
      exam_board: 'aqa',
      topic_slug: 'homeostasis',
      subtopic_slug: 'hormones',
      title: 'Hormones and the Endocrine System | GCSE Biology',
      meta_description: 'Master hormones and endocrine glands including insulin and adrenaline. GCSE Biology practice questions with solutions.',
      introduction: `The endocrine system consists of glands that produce hormones - chemical messengers that travel in the blood to target organs. Unlike the nervous system's rapid, short-lived responses, hormonal responses are slower to start but longer lasting, making them ideal for controlling processes like growth, metabolism, and reproduction.

Major endocrine glands include the pituitary gland (the 'master gland' that controls other glands), thyroid (metabolic rate), adrenal glands (adrenaline for fight-or-flight), pancreas (insulin and glucagon for blood glucose), and ovaries/testes (sex hormones). Each gland produces specific hormones that only affect cells with the correct receptors.

Hormones work through a lock-and-key mechanism. They travel throughout the body in the blood but only affect target cells that have specific receptors matching that hormone. When a hormone binds to its receptor, it triggers changes inside the cell - this might activate enzymes, alter gene expression, or change membrane permeability.

Adrenaline is produced by the adrenal glands in response to stress, fear, or excitement. It prepares the body for 'fight or flight' by increasing heart rate, dilating airways, redirecting blood to muscles, and releasing glucose from the liver. These effects happen within seconds and enable rapid physical response to danger.

The pituitary gland, located at the base of the brain, produces hormones that control many other glands. It releases thyroid-stimulating hormone (TSH) to control the thyroid, follicle-stimulating hormone (FSH) and luteinising hormone (LH) for reproduction, growth hormone for development, and antidiuretic hormone (ADH) for water balance.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'State what is meant by a hormone and describe how hormones are transported around the body.',
        solution: `**Definition of hormone:**
A hormone is a chemical messenger produced by endocrine glands [1 mark]

**Transport around the body:**
- Hormones are secreted directly into the blood [1 mark]
- They travel in the bloodstream to target organs/cells
- Only cells with specific receptors for that hormone are affected [1 mark]
- This allows hormones to reach all parts of the body while only affecting certain target cells`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Describe the effects of adrenaline on the body and explain why these effects are useful in a dangerous situation.',
        solution: `**Effects of adrenaline:**

1. **Heart rate increases** [1 mark]
- Pumps blood faster to muscles
- Delivers more oxygen and glucose for respiration

2. **Blood vessels to muscles dilate**
- More blood flows to muscles [1 mark]
- Muscles get more oxygen for aerobic respiration

3. **Airways (bronchioles) dilate**
- More air enters lungs
- More oxygen absorbed into blood

4. **Glycogen converted to glucose in liver** [1 mark]
- Provides extra glucose for respiration
- More energy available for muscles

**Why useful in dangerous situation:**
- Prepares body for 'fight or flight' [1 mark]
- Muscles can work harder and faster
- Can run away from danger or fight back
- Faster reactions and increased alertness
- Survival advantage when facing threats`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'The pituitary gland is often called the "master gland". Explain why this name is appropriate and describe how it controls the function of another endocrine gland.',
        solution: `**Why "master gland" is appropriate:**
- The pituitary gland produces hormones that control other endocrine glands [1 mark]
- It coordinates the activity of multiple glands in the body
- Located at the base of the brain, connected to hypothalamus
- Receives signals from nervous system and converts to hormonal signals [1 mark]

**Example: Control of thyroid gland**

1. **Pituitary releases TSH** (thyroid-stimulating hormone) [1 mark]
- TSH travels in blood to thyroid gland
- TSH stimulates thyroid to produce thyroxine

2. **Thyroid responds**
- Produces and releases thyroxine
- Thyroxine controls metabolic rate

3. **Negative feedback control** [1 mark]
- When thyroxine levels are high enough, pituitary detects this
- Pituitary reduces TSH production
- This reduces thyroid activity
- Maintains thyroxine at correct level

4. **Overall coordination** [1 mark]
- Pituitary responds to body's needs (temperature, growth, stress)
- Adjusts hormone production from other glands accordingly
- Ensures coordinated response throughout body

Other hormones controlled by pituitary: FSH/LH (reproduction), growth hormone, ADH (water balance), ACTH (adrenal glands)`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'biology',
      exam_board: 'aqa',
      topic_slug: 'homeostasis',
      subtopic_slug: 'blood-glucose-regulation',
      title: 'Blood Glucose Regulation | GCSE Biology',
      meta_description: 'Master blood glucose control including insulin and glucagon. GCSE Biology practice questions with step-by-step solutions.',
      introduction: `Blood glucose concentration must be carefully controlled to ensure cells have a steady supply of glucose for respiration while preventing damage from levels that are too high or too low. The pancreas monitors blood glucose levels and releases hormones to maintain them within the normal range (4-8 mmol/L).

When blood glucose rises (after eating carbohydrates), beta cells in the pancreas detect this increase and release insulin. Insulin is a hormone that causes cells, particularly in the liver and muscles, to take up glucose from the blood. In the liver, glucose is converted to glycogen for storage. This process reduces blood glucose back to normal levels.

When blood glucose falls (during exercise or between meals), alpha cells in the pancreas release glucagon. This hormone causes the liver to convert stored glycogen back into glucose, which is released into the bloodstream. This raises blood glucose levels back to normal.

This system is an excellent example of negative feedback with two hormones working antagonistically. Insulin and glucagon have opposite effects, allowing fine-tuned control of blood glucose. The response triggered depends on whether glucose is too high or too low, and each response works to return levels to normal.

Type 1 diabetes occurs when the immune system destroys the insulin-producing beta cells of the pancreas. Without insulin, blood glucose rises to dangerous levels after eating, while cells cannot access the glucose they need. Type 2 diabetes occurs when cells become resistant to insulin or the pancreas doesn't produce enough. Both conditions require careful management to prevent serious complications.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'State the names of the two hormones involved in blood glucose control and describe where they are produced.',
        solution: `**Two hormones:**

1. **Insulin** [1 mark]
- Produced by beta cells in the pancreas [1 mark]
- Released when blood glucose is too high
- Causes cells to take up glucose, liver to store glycogen

2. **Glucagon** [1 mark]
- Produced by alpha cells in the pancreas
- Released when blood glucose is too low
- Causes liver to release glucose (convert glycogen to glucose)`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Describe how the body responds to an increase in blood glucose concentration after eating a meal.',
        solution: `**Response to increased blood glucose:**

1. **Detection:**
- Blood glucose rises after eating carbohydrates
- Pancreas detects the increase in blood glucose concentration [1 mark]

2. **Hormone release:**
- Beta cells in the pancreas release insulin [1 mark]
- Insulin travels in the blood to target cells

3. **Effects of insulin:**
- Cells (especially muscle and liver) take up glucose from blood [1 mark]
- Liver converts glucose to glycogen for storage
- Cells use glucose for respiration

4. **Result:**
- Blood glucose concentration decreases back to normal [1 mark]
- When glucose returns to normal, insulin release reduces (negative feedback)`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'Explain how insulin and glucagon work together to maintain blood glucose within normal limits. Use the term negative feedback in your answer.',
        solution: `**Blood glucose regulation by insulin and glucagon:**

**When blood glucose is HIGH:**
- Pancreas detects elevated glucose [1 mark]
- Beta cells release insulin
- Insulin causes cells to absorb glucose from blood
- Liver converts glucose to glycogen (storage form)
- Blood glucose falls back to normal

**When blood glucose is LOW:**
- Pancreas detects low glucose [1 mark]
- Alpha cells release glucagon
- Glucagon causes liver to convert glycogen to glucose
- Glucose is released into blood
- Blood glucose rises back to normal

**Negative feedback:**
- A change from the normal level triggers a response that counteracts/opposes that change [1 mark]
- High glucose → insulin → glucose falls (opposes the rise)
- Low glucose → glucagon → glucose rises (opposes the fall)
- Once normal levels are restored, hormone release decreases [1 mark]

**Antagonistic action:**
- Insulin and glucagon have opposite effects
- This allows fine control of blood glucose [1 mark]
- Both hormones work together to maintain glucose within narrow limits (4-8 mmol/L)
- This is essential because too high or too low glucose can be dangerous`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'biology',
      exam_board: 'aqa',
      topic_slug: 'homeostasis',
      subtopic_slug: 'diabetes',
      title: 'Diabetes | GCSE Biology',
      meta_description: 'Master Type 1 and Type 2 diabetes including causes and treatments. GCSE Biology practice questions with solutions.',
      introduction: `Diabetes is a condition where the body cannot properly control blood glucose levels, leading to hyperglycaemia (high blood glucose). There are two main types: Type 1 diabetes, which is an autoimmune condition, and Type 2 diabetes, which is linked to lifestyle and insulin resistance.

Type 1 diabetes usually develops in childhood or early adulthood when the immune system mistakenly attacks and destroys the insulin-producing beta cells in the pancreas. Without insulin, cells cannot take up glucose from the blood, even when glucose levels are very high. People with Type 1 diabetes must inject insulin regularly and monitor their blood glucose levels carefully throughout their lives.

Type 2 diabetes is much more common and typically develops later in life, though it is increasingly seen in younger people. In Type 2 diabetes, the body's cells become resistant to insulin, meaning they don't respond properly to the hormone. The pancreas may also produce less insulin than needed. Risk factors include obesity, lack of physical activity, age, and genetic factors.

Type 2 diabetes can often be managed through lifestyle changes - eating a healthy diet low in simple sugars and high in fibre, increasing physical activity, and losing weight if overweight. Some people need medication to help control their blood glucose, and some eventually need insulin injections if other treatments aren't sufficient.

Uncontrolled diabetes can lead to serious complications. High blood glucose damages blood vessels, increasing the risk of heart disease and stroke. It can damage small blood vessels in the eyes (diabetic retinopathy), kidneys (nephropathy), and nerves (neuropathy). Poor circulation can lead to foot problems and, in severe cases, amputation. This is why managing blood glucose levels is so important.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'State the cause of Type 1 diabetes and describe how it is treated.',
        solution: `**Cause of Type 1 diabetes:**
- The immune system attacks and destroys the beta cells in the pancreas [1 mark]
- This means the pancreas cannot produce insulin
- Without insulin, blood glucose cannot be controlled

**Treatment:**
- Insulin injections (cannot be taken orally as it's a protein and would be digested) [1 mark]
- Regular monitoring of blood glucose levels [1 mark]
- Careful management of diet and exercise
- Insulin pumps may be used to deliver continuous insulin`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Compare the causes of Type 1 and Type 2 diabetes and explain why their treatments differ.',
        solution: `**Type 1 diabetes:**
- Cause: Autoimmune destruction of beta cells in pancreas [1 mark]
- Body produces no insulin
- Usually develops in childhood/early adulthood
- Cannot be prevented

**Type 2 diabetes:**
- Cause: Cells become resistant to insulin / pancreas produces insufficient insulin [1 mark]
- Often linked to obesity, lack of exercise, age
- Can develop gradually

**Why treatments differ:**

**Type 1 treatment - Insulin injections:**
- No insulin is produced, so must be provided externally [1 mark]
- Cannot use tablets as insulin would be digested

**Type 2 treatment - Lifestyle changes:**
- Body still produces some insulin
- Diet and exercise can reduce insulin resistance
- Weight loss can improve cell sensitivity to insulin [1 mark]
- May need medication or eventually insulin if lifestyle changes insufficient`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'Explain why obesity is a risk factor for Type 2 diabetes and describe the long-term health complications that can result from poorly controlled diabetes.',
        solution: `**Why obesity is a risk factor:**
- Fat cells, especially around the abdomen, release chemicals that reduce insulin sensitivity [1 mark]
- More cells in the body means more insulin is needed to move glucose
- Excess glucose is stored as fat, creating a cycle
- Physical inactivity (often associated with obesity) also reduces insulin sensitivity [1 mark]
- The pancreas eventually cannot produce enough insulin to overcome resistance

**Long-term complications of poorly controlled diabetes:**

1. **Cardiovascular disease:**
- High blood glucose damages blood vessel walls
- Increased risk of heart disease and stroke [1 mark]

2. **Eye problems (diabetic retinopathy):**
- Damage to small blood vessels in the retina
- Can lead to blindness if untreated

3. **Kidney disease (nephropathy):**
- Damage to blood vessels in kidneys [1 mark]
- Kidneys cannot filter blood properly
- Can lead to kidney failure

4. **Nerve damage (neuropathy):**
- High glucose damages nerves, especially in feet and hands
- Numbness, tingling, or pain
- Loss of sensation means injuries may go unnoticed

5. **Foot problems:**
- Poor circulation and nerve damage affect feet
- Wounds heal slowly and may become infected
- Severe cases may require amputation [1 mark]`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'biology',
      exam_board: 'aqa',
      topic_slug: 'homeostasis',
      subtopic_slug: 'kidney',
      title: 'The Kidney | GCSE Biology',
      meta_description: 'Master kidney function including filtration and selective reabsorption. GCSE Biology practice questions with solutions.',
      introduction: `The kidneys are vital organs that filter blood, removing waste products and excess substances while retaining useful materials. Each kidney contains about one million tiny filtering units called nephrons, which produce urine. The kidneys filter all the blood in the body about 40 times per day.

Urine formation involves three main processes. First, ultrafiltration occurs in the glomerulus, where high blood pressure forces small molecules (water, glucose, urea, ions) out of the blood and into the Bowman's capsule. Large molecules like proteins and blood cells are too big to pass through and remain in the blood.

The second process is selective reabsorption, which occurs in the tubules of the nephron. Useful substances that passed into the filtrate are reabsorbed back into the blood. All glucose is reabsorbed (normally none should appear in urine), along with varying amounts of water and ions depending on the body's needs.

The kidneys also play a crucial role in osmoregulation - controlling the water content of the body. The hormone ADH (antidiuretic hormone), released by the pituitary gland, controls how much water the kidneys reabsorb. When the body is dehydrated, more ADH is released, causing more water to be reabsorbed and producing concentrated urine. When water is plentiful, less ADH is released, producing dilute urine.

The kidneys excrete urea, a waste product of protein metabolism. When excess amino acids are broken down in the liver (deamination), the amino group is converted to ammonia, which is toxic. The liver combines ammonia with carbon dioxide to form urea, which is less toxic and can be safely transported in the blood to the kidneys for removal.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'Describe the role of the kidney in excretion and name the main waste product removed.',
        solution: `**Role of kidneys in excretion:**
- Filter the blood to remove waste products [1 mark]
- Remove excess water and ions to maintain balance
- Produce urine which is stored in the bladder

**Main waste product:**
- Urea [1 mark]
- Urea is produced in the liver from excess amino acids
- It is toxic if it builds up, so must be removed [1 mark]

(Other substances removed include: excess water, excess ions like sodium and chloride)`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Explain the processes of filtration and selective reabsorption in the kidney.',
        solution: `**Filtration (ultrafiltration):**
- Occurs in the glomerulus (ball of capillaries in Bowman's capsule) [1 mark]
- High blood pressure forces small molecules through the capillary walls
- Water, glucose, urea, and ions pass into the Bowman's capsule [1 mark]
- Large molecules (proteins) and blood cells are too big to pass through

**Selective reabsorption:**
- Occurs in the kidney tubules (proximal tubule mainly)
- Useful substances are reabsorbed back into the blood [1 mark]
- All glucose is reabsorbed (by active transport)
- Amount of water and ions reabsorbed depends on body's needs [1 mark]
- Substances not reabsorbed (urea, excess ions) remain in the tubule and form urine`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'Explain how the kidney maintains water balance in the body on a hot day when a person is sweating a lot.',
        solution: `**Maintaining water balance on a hot day:**

**Initial changes:**
- Sweating causes water loss from the body
- Blood becomes more concentrated [1 mark]

**Detection and response:**
- Receptors in the hypothalamus detect increased blood concentration [1 mark]
- Pituitary gland releases more ADH (antidiuretic hormone) into the blood

**Effect of ADH on kidneys:**
- ADH travels to the kidneys in the blood
- ADH makes the collecting ducts more permeable to water [1 mark]
- More water is reabsorbed from the collecting duct back into the blood
- By osmosis, water moves from the tubule into surrounding tissue [1 mark]

**Result:**
- Less water is lost in urine
- Urine becomes more concentrated (darker colour, smaller volume)
- Blood concentration returns towards normal
- This helps prevent dehydration [1 mark]

**Negative feedback:**
- When blood concentration returns to normal, ADH release decreases
- Kidney returns to normal water reabsorption
- Maintains water balance within narrow limits`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'biology',
      exam_board: 'aqa',
      topic_slug: 'homeostasis',
      subtopic_slug: 'eye',
      title: 'The Eye | GCSE Biology',
      meta_description: 'Master the structure and function of the eye including accommodation. GCSE Biology practice questions with solutions.',
      introduction: `The eye is a complex sense organ that detects light and enables vision. Light enters through the transparent cornea, passes through the pupil (the opening in the centre of the iris), and is focused by the lens onto the retina at the back of the eye. The retina contains light-sensitive receptor cells that convert light into electrical impulses.

The iris controls the amount of light entering the eye through the pupil reflex. In bright light, the circular muscles of the iris contract and radial muscles relax, making the pupil smaller and reducing light entry. In dim light, the radial muscles contract and circular muscles relax, dilating the pupil to allow more light in. This is an automatic reflex that protects the retina.

Accommodation is the process by which the eye changes focus to view objects at different distances. For distant objects, the ciliary muscles relax, the suspensory ligaments become taut, and the lens is pulled thin. For near objects, the ciliary muscles contract, the suspensory ligaments slacken, and the lens becomes more rounded due to its natural elasticity.

The retina contains two types of receptor cells. Rods are sensitive to dim light and detect shades of grey, allowing us to see in low light conditions. They are concentrated around the edges of the retina. Cones require brighter light and detect colour - there are three types sensitive to red, green, or blue light. Cones are concentrated in the fovea, the area of sharpest vision.

Common eye defects include short-sightedness (myopia), where the eyeball is too long or the lens too powerful, causing distant objects to appear blurry. Long-sightedness (hypermetropia) is the opposite - the eyeball is too short or the lens too weak. Both can be corrected with glasses, contact lenses, or laser surgery. As people age, the lens becomes less elastic, making it harder to focus on near objects (presbyopia).`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'Name three structures of the eye and describe the function of each.',
        solution: `**Three eye structures and their functions:**

1. **Cornea** [1 mark]
- Transparent layer at the front of the eye
- Refracts (bends) light rays entering the eye
- Protects the eye

2. **Iris** [1 mark]
- Coloured part of the eye
- Controls the size of the pupil
- Regulates how much light enters the eye

3. **Lens** [1 mark]
- Transparent, flexible structure
- Focuses light onto the retina
- Changes shape to focus on near or distant objects (accommodation)

(Other valid answers: retina - contains light receptors, optic nerve - carries impulses to brain, pupil - hole that lets light in)`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Describe how the iris controls the amount of light entering the eye in bright conditions.',
        solution: `**Pupil reflex in bright light:**

1. **Detection:**
- Photoreceptors in the retina detect bright light [1 mark]

2. **Response in iris:**
- The circular muscles in the iris contract [1 mark]
- The radial muscles in the iris relax [1 mark]

3. **Effect:**
- The pupil becomes smaller (constricts) [1 mark]
- Less light enters the eye
- This protects the sensitive retina from damage

**Note:** This is an automatic reflex - it happens without conscious control
The opposite happens in dim light (radial muscles contract, circular muscles relax, pupil dilates)`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'Explain how the eye focuses on a near object compared to a distant object. Include the role of the ciliary muscles and suspensory ligaments in your answer.',
        solution: `**Focusing on a DISTANT object:**
- Ciliary muscles relax (become longer and thinner) [1 mark]
- Suspensory ligaments become taut (tight/stretched) [1 mark]
- Lens is pulled thin and flat
- Light is refracted (bent) less
- Light from distant objects is focused on retina

**Focusing on a NEAR object:**
- Ciliary muscles contract (become shorter and fatter) [1 mark]
- This reduces tension on the suspensory ligaments
- Suspensory ligaments become slack (loose) [1 mark]
- Lens becomes thicker and more rounded due to its natural elasticity
- Light is refracted (bent) more
- Light from near objects is focused on retina [1 mark]

**Summary table:**
| | Distant object | Near object |
|--|---------------|-------------|
| Ciliary muscles | Relax | Contract |
| Suspensory ligaments | Taut | Slack |
| Lens shape | Thin/flat | Thick/rounded |
| Light refraction | Less | More |

This process of changing focus is called accommodation.`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'biology',
      exam_board: 'aqa',
      topic_slug: 'homeostasis',
      subtopic_slug: 'plant-hormones',
      title: 'Plant Hormones | GCSE Biology',
      meta_description: 'Master plant hormones including auxin and phototropism. GCSE Biology practice questions with step-by-step solutions.',
      introduction: `Plants respond to their environment using hormones (also called plant growth regulators) that coordinate growth and development. Unlike animal hormones that travel in blood, plant hormones move through the plant in various ways - through phloem, xylem, or by diffusion from cell to cell.

Auxin is a key plant hormone that controls cell elongation and is responsible for tropisms - directional growth responses to stimuli. In phototropism, shoots grow towards light. Auxin accumulates on the shaded side of the shoot, causing cells there to elongate more, which bends the shoot towards the light. This helps plants maximise photosynthesis.

Gravitropism (or geotropism) is the growth response to gravity. Roots show positive gravitropism - they grow downwards towards gravity. Auxin accumulates on the lower side of horizontal roots, but unlike in shoots, auxin inhibits elongation in roots. This causes the upper side to grow faster, bending the root downward.

Other plant hormones include gibberellins (promote stem elongation and seed germination), cytokinins (promote cell division), abscisic acid (promotes dormancy and closes stomata during drought), and ethylene (promotes fruit ripening). These hormones often work together, with their relative concentrations determining the plant's response.

Plant hormones have many commercial applications. Auxins are used in rooting powders to encourage cuttings to develop roots, and as weedkillers (high concentrations cause rapid, uncontrolled growth that kills the plant). Ethylene is used to ripen fruit during transport. Gibberellins are used in brewing to promote germination of barley seeds and in seedless grape production.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'State what is meant by phototropism and explain why it is beneficial for plants.',
        solution: `**Phototropism:**
Growth of a plant in response to light / towards or away from light [1 mark]
(Shoots show positive phototropism - grow towards light)

**Why beneficial:**
- Shoots grow towards light to maximise light absorption [1 mark]
- This increases the rate of photosynthesis
- More glucose produced for growth and energy
- Helps plant compete with other plants for light`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Explain how auxin causes a shoot to grow towards a light source.',
        solution: `**How auxin causes phototropism:**

1. **Light detection:**
- Light shines on one side of the shoot tip
- Auxin is produced in the tip [1 mark]

2. **Auxin redistribution:**
- Auxin moves to the shaded side of the shoot [1 mark]
- Higher concentration of auxin on the shaded side

3. **Cell elongation:**
- Auxin causes cells to elongate (grow longer)
- Cells on the shaded side elongate more than cells on the light side [1 mark]

4. **Result:**
- Unequal growth causes the shoot to bend
- Shoot bends towards the light source [1 mark]
- This continues until shoot is growing towards the light`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'Compare how auxin affects shoots and roots, and explain how this leads to opposite responses to gravity.',
        solution: `**Auxin effects comparison:**

**In shoots:**
- Auxin promotes cell elongation [1 mark]
- Higher auxin concentration = more growth
- Auxin accumulates on lower side of horizontal shoot
- Lower side grows more, bending shoot upward (negative gravitropism)

**In roots:**
- Auxin inhibits cell elongation [1 mark]
- Higher auxin concentration = less growth
- Auxin accumulates on lower side of horizontal root
- Lower side grows less, so upper side grows more
- Root bends downward (positive gravitropism) [1 mark]

**Explanation of opposite responses:**
- Same hormone, opposite effects in different tissues
- Root cells are more sensitive to auxin than shoot cells [1 mark]
- Concentration that promotes growth in shoots inhibits growth in roots
- This allows appropriate responses:
  - Shoots grow upward towards light
  - Roots grow downward towards water and anchorage [1 mark]

**Summary:**
| | Shoots | Roots |
|--|--------|-------|
| Auxin effect | Promotes elongation | Inhibits elongation |
| Gravitropism | Negative (upward) | Positive (downward) |`,
        display_order: 3
      }
    ]
  }
];
