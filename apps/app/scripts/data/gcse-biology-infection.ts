import { SubtopicData } from '../bulk-seo-insert';

export const gcseBiologyInfection: SubtopicData[] = [
  {
    content: {
      level: 'gcse',
      subject: 'biology',
      exam_board: 'aqa',
      topic_slug: 'infection-and-response',
      subtopic_slug: 'pathogens',
      title: 'Pathogens | GCSE Biology',
      meta_description: 'Master pathogens including bacteria, viruses and transmission methods. GCSE Biology practice questions with solutions.',
      introduction: `Pathogens are microorganisms that cause disease. The four main types are bacteria, viruses, protists, and fungi. Each type has different characteristics and causes disease in different ways. Understanding pathogens is crucial for preventing and treating infectious diseases.

Bacteria are single-celled prokaryotic organisms that can reproduce rapidly by binary fission, potentially doubling every 20 minutes in ideal conditions. Pathogenic bacteria cause disease by producing toxins that damage cells and tissues, or by directly invading and destroying body cells. Examples include Salmonella (food poisoning), E. coli, and the bacteria causing tuberculosis and cholera.

Viruses are much smaller than bacteria and are not truly alive - they cannot reproduce on their own. Instead, they invade host cells and hijack the cell's machinery to make copies of themselves. The new viruses burst out of the cell, destroying it, and go on to infect more cells. Viral diseases include influenza, HIV, measles, and COVID-19.

Pathogens can spread in various ways. Airborne transmission occurs when infected people cough or sneeze, releasing droplets containing pathogens. Direct contact spreads pathogens through touching. Contaminated food and water can transmit diseases like cholera and Salmonella. Some pathogens are spread by vectors - organisms like mosquitoes that carry the pathogen from one host to another without being affected themselves.

Preventing the spread of pathogens involves hygiene measures (handwashing, proper food preparation), vaccination programmes, isolation of infected individuals, vector control (such as mosquito nets and insecticides), and in some cases, treating water supplies. Public health measures have dramatically reduced the impact of many infectious diseases.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'Name the four main types of pathogen and give one example disease caused by bacteria.',
        solution: `**Four main types of pathogen:**
1. Bacteria [1 mark]
2. Viruses
3. Protists
4. Fungi [1 mark]

**Example bacterial disease:**
Any one of: [1 mark]
- Salmonella (food poisoning)
- Tuberculosis (TB)
- Cholera
- Gonorrhoea
- E. coli infections`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Compare how bacteria and viruses cause disease in the body.',
        solution: `**How bacteria cause disease:**
- Bacteria are living cells that reproduce rapidly inside the body [1 mark]
- They produce toxins (poisons) that damage cells and tissues [1 mark]
- Some bacteria directly invade and destroy body cells
- The immune system responds to bacterial toxins and cell debris

**How viruses cause disease:**
- Viruses are not living - they cannot reproduce on their own
- They invade host cells and take over the cell's machinery [1 mark]
- The cell is forced to make many copies of the virus
- New viruses burst out of the cell, destroying it
- They then go on to infect more cells [1 mark]

**Key difference:** Bacteria produce toxins; viruses destroy cells by replication`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'Describe the different ways pathogens can be transmitted and explain measures that can be taken to reduce transmission for each method.',
        solution: `**Methods of pathogen transmission and prevention:**

1. **Airborne/Droplet transmission** [1 mark]
- Pathogens spread through coughs and sneezes
- Prevention: wearing masks, good ventilation, isolation of infected people

2. **Direct contact** [1 mark]
- Spread by touching infected people or surfaces
- Prevention: regular handwashing with soap, avoiding touching face, cleaning surfaces

3. **Contaminated food/water** [1 mark]
- Ingesting pathogens in food or drink
- Prevention: proper cooking of food, safe water treatment, food hygiene practices, pasteurisation of milk

4. **Sexual transmission**
- Exchange of body fluids during sexual contact
- Prevention: use of condoms, limiting sexual partners, screening and treatment

5. **Vector transmission** [1 mark]
- Pathogens carried by organisms like mosquitoes
- Prevention: insecticides, mosquito nets, draining standing water, screens on windows [1 mark]

**Overall public health measures:** vaccination programmes, education, surveillance and rapid response to outbreaks, international cooperation`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'biology',
      exam_board: 'aqa',
      topic_slug: 'infection-and-response',
      subtopic_slug: 'viral-diseases',
      title: 'Viral Diseases | GCSE Biology',
      meta_description: 'Master viral diseases including measles, HIV and tobacco mosaic virus. GCSE Biology practice questions with solutions.',
      introduction: `Viral diseases are caused by viruses - tiny particles consisting of genetic material (DNA or RNA) surrounded by a protein coat. Viruses are not considered truly living because they cannot reproduce independently; they must invade living cells to replicate. Once inside a host cell, viruses hijack the cell's machinery to produce many copies of themselves.

Measles is a highly contagious viral disease spread by airborne droplets when infected people cough or sneeze. Symptoms include fever, red skin rash, and small white spots in the mouth. Measles can lead to serious complications including pneumonia and brain damage, particularly in young children and those with weakened immune systems. Vaccination with the MMR vaccine has dramatically reduced measles cases.

HIV (Human Immunodeficiency Virus) attacks the immune system, specifically the T-helper lymphocytes (white blood cells) that coordinate the immune response. HIV is transmitted through exchange of body fluids, including sexual contact, sharing needles, and from mother to baby. If untreated, HIV can develop into AIDS (Acquired Immune Deficiency Syndrome), where the immune system is so weakened that the person becomes susceptible to other infections.

Tobacco Mosaic Virus (TMV) is a plant virus that affects many species including tobacco, tomatoes, and peppers. The virus causes a distinctive mosaic pattern of discolouration on leaves, reducing the plant's ability to photosynthesise. This decreases crop yields and can cause significant economic damage. TMV spreads through direct contact between plants and can persist in soil for years.

Controlling viral diseases is challenging because antibiotics don't work against viruses. Prevention through vaccination and hygiene measures is often the most effective approach. Antiviral drugs exist for some viruses but typically only reduce symptoms rather than eliminating the infection.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'Describe how measles is spread and state two symptoms of the disease.',
        solution: `**How measles is spread:**
- By airborne droplets (droplet infection) [1 mark]
- When infected people cough or sneeze
- Very contagious - can spread through air in a room

**Two symptoms of measles:**
Any two of: [1 mark each]
- Fever / high temperature
- Red skin rash
- Small white spots in the mouth (Koplik's spots)
- Cough
- Runny nose
- Sore, red eyes`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Explain how HIV affects the immune system and why this makes the infected person susceptible to other diseases.',
        solution: `**How HIV affects the immune system:**
- HIV is a virus that attacks the immune system [1 mark]
- Specifically, it infects T-helper lymphocytes (a type of white blood cell) [1 mark]
- T-helper cells coordinate the immune response against infections
- HIV replicates inside these cells and destroys them

**Why this causes susceptibility to other diseases:**
- As T-helper cell numbers decrease, the immune system weakens [1 mark]
- The body becomes less able to fight off infections
- When immune system is severely weakened, condition is called AIDS
- Person becomes vulnerable to opportunistic infections and cancers that healthy immune systems would normally control [1 mark]`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'Tobacco Mosaic Virus (TMV) causes disease in plants. Describe the symptoms of TMV infection, explain how it affects the plant, and discuss how it can be controlled.',
        solution: `**Symptoms of TMV infection:**
- Mosaic pattern of discolouration on leaves [1 mark]
- Light and dark green patches on leaves
- Leaves may become curled or wrinkled
- Stunted plant growth

**How TMV affects the plant:**
- The virus damages chloroplasts in affected cells [1 mark]
- Discoloured areas have less chlorophyll
- This reduces the rate of photosynthesis [1 mark]
- Less glucose is produced for growth
- Plant grows more slowly and produces lower yields

**How TMV can be controlled:**
1. **Remove and destroy infected plants** - prevents spread to healthy plants
2. **Use resistant varieties** - some plants have been bred for TMV resistance [1 mark]
3. **Good hygiene** - wash hands and tools to prevent mechanical transmission
4. **Avoid smoking near plants** - TMV can be present in tobacco products
5. **Control aphids** - some spread can occur through insect vectors
6. **Use certified disease-free seeds** [1 mark]

Note: There is no chemical treatment for TMV - prevention is key`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'biology',
      exam_board: 'aqa',
      topic_slug: 'infection-and-response',
      subtopic_slug: 'bacterial-diseases',
      title: 'Bacterial Diseases | GCSE Biology',
      meta_description: 'Master bacterial diseases including Salmonella and gonorrhoea. GCSE Biology practice questions with solutions.',
      introduction: `Bacterial diseases are caused by pathogenic bacteria that enter the body and either produce harmful toxins or directly damage tissues. Unlike viruses, bacteria are living organisms that can reproduce independently by binary fission, potentially doubling their population every 20 minutes under ideal conditions.

Salmonella is a bacterium that causes food poisoning. It is commonly found in raw meat, eggs, and poultry. Salmonella bacteria produce toxins that cause symptoms including fever, abdominal cramps, vomiting, and diarrhoea. These symptoms typically appear 12-72 hours after infection and usually resolve within a week, though they can be more serious in young children, elderly people, and those with weakened immune systems.

In the UK, poultry are vaccinated against Salmonella to reduce the bacteria in eggs and meat. Good food hygiene practices are essential: cooking food thoroughly (especially chicken), washing hands before handling food, keeping raw and cooked foods separate, and storing food at correct temperatures all help prevent Salmonella infections.

Gonorrhoea is a sexually transmitted infection (STI) caused by bacteria. It spreads through sexual contact and causes symptoms including pain when urinating and a thick green or yellow discharge. Many infected people, especially women, may have no symptoms, making it easy to spread unknowingly. Gonorrhoea can cause serious complications including infertility if left untreated.

Gonorrhoea was originally easily treated with the antibiotic penicillin, but antibiotic-resistant strains have emerged, making treatment more difficult. Prevention involves using barrier contraception (condoms), limiting sexual partners, and regular testing for those at risk. The emergence of resistant gonorrhoea highlights the growing problem of antibiotic resistance.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'Describe how Salmonella bacteria cause disease and state two ways food poisoning from Salmonella can be prevented.',
        solution: `**How Salmonella causes disease:**
- Salmonella bacteria are ingested in contaminated food
- The bacteria produce toxins in the gut [1 mark]
- These toxins cause fever, vomiting, diarrhoea, and abdominal cramps

**Two ways to prevent Salmonella food poisoning:**
Any two of: [1 mark each]
- Cook food thoroughly, especially chicken and eggs
- Wash hands before preparing food and after handling raw meat
- Keep raw and cooked foods separate
- Store food at correct temperatures (refrigerate)
- Vaccinate poultry against Salmonella`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Describe how gonorrhoea is transmitted, its symptoms, and how it can be treated and prevented.',
        solution: `**Transmission:**
- Gonorrhoea is a sexually transmitted infection (STI) [1 mark]
- Spread through unprotected sexual contact
- Can also be passed from mother to baby during birth

**Symptoms:**
- Pain when urinating
- Thick green or yellow discharge from genitals [1 mark]
- Note: many people (especially women) may have no symptoms

**Treatment:**
- Treated with antibiotics [1 mark]
- Originally penicillin was effective
- Now antibiotic-resistant strains exist, making treatment harder

**Prevention:**
- Using barrier contraception (condoms) [1 mark]
- Limiting number of sexual partners
- Regular testing for those at risk
- Contact tracing to identify and treat partners`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'Explain why antibiotic-resistant strains of gonorrhoea have developed and discuss why this is a significant public health concern.',
        solution: `**How antibiotic resistance develops:**
- Random mutations occur in bacterial DNA [1 mark]
- Some mutations give resistance to antibiotics
- When antibiotics are used, non-resistant bacteria are killed
- Resistant bacteria survive and reproduce [1 mark]
- Natural selection favours resistant bacteria
- Over time, resistant strains become more common

**Factors contributing to resistance:**
- Overuse of antibiotics (prescribing when not needed)
- Not completing courses of antibiotics
- Use of antibiotics in agriculture [1 mark]
- Inappropriate antibiotic choice

**Why this is a public health concern:**

1. **Harder to treat infections** [1 mark]
- Standard antibiotics no longer work
- Need stronger, more expensive antibiotics
- Some strains may become untreatable

2. **Increased spread**
- Untreated infections continue to spread
- More people become infected

3. **Serious complications**
- Untreated gonorrhoea can cause infertility
- Can spread to other parts of body

4. **Sets a precedent** [1 mark]
- If gonorrhoea becomes untreatable, other infections might too
- We may return to a pre-antibiotic era
- "Superbug" infections could become common`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'biology',
      exam_board: 'aqa',
      topic_slug: 'infection-and-response',
      subtopic_slug: 'immune-system',
      title: 'The Immune System | GCSE Biology',
      meta_description: 'Master the immune system including white blood cells and antibodies. GCSE Biology practice questions with solutions.',
      introduction: `The immune system is the body's defence against pathogens. It involves multiple mechanisms that work together to prevent infection, recognise foreign invaders, and destroy them. The immune system can distinguish between the body's own cells (self) and foreign cells or molecules (non-self).

The first line of defence consists of physical and chemical barriers that prevent pathogens from entering the body. The skin forms a waterproof barrier. The respiratory system has mucus that traps pathogens and cilia that sweep them away. The stomach produces hydrochloric acid that kills many ingested pathogens. These defences are non-specific - they work against all pathogens equally.

If pathogens get past these barriers, white blood cells (leukocytes) mount a response. Phagocytes engulf and digest pathogens through a process called phagocytosis. They recognise pathogens by detecting chemicals they release or by recognising foreign antigens on their surface. After engulfing a pathogen, enzymes inside the phagocyte break it down.

Lymphocytes provide a more targeted immune response. B-lymphocytes produce antibodies - proteins that are specific to particular antigens on pathogens. Antibodies bind to antigens, marking pathogens for destruction or neutralising them directly. T-lymphocytes can directly destroy infected cells and help coordinate the immune response. After an infection, some lymphocytes remain as memory cells, ready to respond quickly if the same pathogen is encountered again.

This immunological memory is why you typically only get diseases like chickenpox once - your immune system remembers the pathogen and responds so quickly to reinfection that you don't develop symptoms. This same principle underlies vaccination, where exposure to weakened or inactivated pathogens generates memory cells without causing disease.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'Describe three ways the body prevents pathogens from entering.',
        solution: `**Three barriers to pathogen entry:**

1. **Skin** [1 mark]
- Forms a physical barrier
- Waterproof layer prevents most pathogens entering

2. **Mucus and cilia in respiratory system** [1 mark]
- Mucus traps pathogens
- Cilia (tiny hairs) sweep mucus and trapped pathogens away from lungs

3. **Stomach acid** [1 mark]
- Hydrochloric acid in stomach kills many pathogens in food and drink
- Creates very acidic conditions (pH 1-2) that most bacteria cannot survive

(Other valid answers: tears contain lysozyme enzyme, blood clotting to seal wounds)`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Describe the role of white blood cells in defending against pathogens. You should include phagocytosis and antibody production.',
        solution: `**Phagocytosis:**
- Carried out by phagocytes (a type of white blood cell) [1 mark]
- Phagocyte recognises pathogen by its foreign antigens
- Phagocyte engulfs (surrounds and takes in) the pathogen [1 mark]
- Enzymes inside the phagocyte digest and destroy the pathogen

**Antibody production:**
- Carried out by lymphocytes (another type of white blood cell) [1 mark]
- Lymphocytes recognise specific antigens on pathogens
- They produce antibodies - proteins specific to that antigen
- Antibodies bind to antigens on the pathogen [1 mark]
- This marks pathogens for destruction by phagocytes
- Or antibodies can neutralise toxins/prevent pathogens entering cells`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'Explain why a person who has recovered from measles is unlikely to get measles again, and how this principle is used in vaccination.',
        solution: `**Why measles immunity develops:**

1. **First infection:**
- Measles virus enters body and is detected by immune system [1 mark]
- Lymphocytes produce antibodies specific to measles antigens
- Takes time for enough antibodies to be produced - person gets ill

2. **Memory cell formation:**
- After infection, some lymphocytes remain as memory cells [1 mark]
- These cells "remember" the measles antigens
- They remain in the body for many years, sometimes for life

3. **If exposed again:**
- Memory cells recognise measles virus immediately
- They rapidly produce large amounts of antibodies [1 mark]
- Response is faster and stronger than first time
- Virus is destroyed before symptoms develop

**How vaccination uses this principle:**

- Vaccines contain dead/inactive pathogens or parts of pathogens [1 mark]
- These stimulate antibody production and memory cell formation
- BUT don't cause the actual disease
- If person later encounters the real pathogen:
  - Memory cells respond quickly
  - Large quantities of antibodies produced rapidly
  - Pathogen destroyed before illness develops [1 mark]
- Person gains immunity without having to suffer the disease`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'biology',
      exam_board: 'aqa',
      topic_slug: 'infection-and-response',
      subtopic_slug: 'vaccination',
      title: 'Vaccination | GCSE Biology',
      meta_description: 'Master vaccination including herd immunity and vaccine development. GCSE Biology practice questions with solutions.',
      introduction: `Vaccination is one of the most effective ways to prevent infectious diseases. A vaccine contains a dead, weakened, or inactive form of a pathogen, or parts of a pathogen such as proteins from its surface. When injected, the vaccine stimulates the immune system to produce antibodies and memory cells without causing the disease.

The principle behind vaccination is that the immune system responds to antigens - molecules on the surface of pathogens that the body recognises as foreign. Vaccines present these antigens to the immune system, which responds by producing specific antibodies. Crucially, memory cells are also produced that remain in the body long-term.

If a vaccinated person is later exposed to the real pathogen, their immune system mounts a rapid secondary response. Memory cells recognise the antigens and quickly produce large quantities of antibodies. This response is so fast that the pathogen is destroyed before it can cause disease. The person is said to be immune.

Herd immunity occurs when a large proportion of a population is vaccinated. This protects unvaccinated individuals because the pathogen cannot spread easily when most people are immune. Herd immunity is particularly important for protecting people who cannot be vaccinated, such as babies too young for certain vaccines, people with certain medical conditions, or those with weakened immune systems.

Vaccines have eliminated smallpox and dramatically reduced many other diseases including polio, measles, and tetanus. However, vaccination programmes must maintain high coverage to be effective. When vaccination rates fall, herd immunity breaks down and outbreaks can occur, as seen with measles outbreaks in communities with low MMR vaccination rates.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'Describe what a vaccine contains and explain how it provides protection against disease.',
        solution: `**What a vaccine contains:**
- Dead, weakened, or inactive pathogens [1 mark]
- Or parts of pathogens (such as surface proteins/antigens)
- These cannot cause the disease

**How vaccines provide protection:**
- Antigens in the vaccine are recognised by the immune system [1 mark]
- White blood cells (lymphocytes) produce antibodies
- Memory cells are produced and remain in the body [1 mark]
- If exposed to the real pathogen later, memory cells quickly produce antibodies
- The pathogen is destroyed before it can cause disease`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Explain what is meant by herd immunity and why it is important for protecting vulnerable members of the population.',
        solution: `**What is herd immunity:**
- When a large proportion of a population is vaccinated [1 mark]
- The disease cannot spread easily because most people are immune
- Unvaccinated people are protected because they are unlikely to encounter the pathogen [1 mark]

**Why important for vulnerable people:**

Some people cannot be vaccinated:
- Babies too young for certain vaccines
- People with weakened immune systems (e.g., having chemotherapy)
- People with certain allergies to vaccine components [1 mark]

Herd immunity protects these people:
- If most people around them are immune, the pathogen cannot spread to them
- Creates a protective barrier of immune individuals [1 mark]
- Reduces risk of outbreaks that could harm vulnerable people`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'Discuss the advantages and potential concerns about vaccination programmes.',
        solution: `**Advantages of vaccination:**

1. **Individual protection**
- Prevents person getting the disease [1 mark]
- Avoids complications and potential death
- More effective than treating disease after infection

2. **Herd immunity**
- Protects those who cannot be vaccinated [1 mark]
- Reduces overall disease transmission
- Can eliminate diseases entirely (e.g., smallpox)

3. **Economic benefits**
- Reduces healthcare costs
- Less time off work/school due to illness
- Prevents long-term disability costs

**Potential concerns:**

1. **Side effects** [1 mark]
- Minor side effects are common (soreness, mild fever)
- Serious side effects are very rare
- Benefits greatly outweigh risks for most vaccines

2. **Misinformation**
- Some people have unfounded concerns based on discredited research
- Low vaccination rates can lead to outbreaks [1 mark]

3. **Development challenges**
- Some diseases are difficult to vaccinate against (HIV, malaria)
- Pathogens may evolve to escape vaccine immunity
- New vaccines need extensive testing to ensure safety [1 mark]

**Overall:** Scientific consensus strongly supports vaccination as one of the most effective public health interventions ever developed.`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'biology',
      exam_board: 'aqa',
      topic_slug: 'infection-and-response',
      subtopic_slug: 'antibiotics',
      title: 'Antibiotics | GCSE Biology',
      meta_description: 'Master antibiotics including antibiotic resistance and appropriate use. GCSE Biology practice questions with solutions.',
      introduction: `Antibiotics are medicines that kill or inhibit the growth of bacteria. Since their discovery in the early 20th century, antibiotics have saved countless lives by treating bacterial infections that were previously often fatal. However, antibiotics only work against bacteria - they have no effect on viruses.

Antibiotics work by targeting specific features of bacterial cells that are different from human cells. Some antibiotics, like penicillin, interfere with bacterial cell wall synthesis, causing the bacteria to burst. Others inhibit protein synthesis or DNA replication in bacteria. Because these targets are specific to bacteria, antibiotics generally don't harm human cells.

The development of antibiotic resistance is one of the greatest threats to global health. When bacteria are exposed to antibiotics, most are killed, but those with random mutations that provide resistance survive. These resistant bacteria reproduce, passing on their resistance to the next generation. Through natural selection, resistant strains become more common.

Several factors contribute to antibiotic resistance. Overuse and inappropriate prescribing (such as for viral infections) expose bacteria to antibiotics unnecessarily. Not completing a course of antibiotics allows some bacteria to survive. Use of antibiotics in agriculture (to promote animal growth or prevent infection in crowded conditions) also contributes. The more antibiotics are used, the more opportunities bacteria have to develop resistance.

To combat antibiotic resistance, we must use antibiotics responsibly. This means only taking antibiotics when prescribed for bacterial infections, completing the full course, and not sharing antibiotics. Doctors should prescribe antibiotics only when necessary and choose appropriate antibiotics for each infection. New antibiotics are being developed, but bacteria can develop resistance to these too, creating an ongoing challenge.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'State what antibiotics are used for and explain why they cannot be used to treat viral infections.',
        solution: `**What antibiotics are used for:**
- Treating bacterial infections [1 mark]
- Kill bacteria or stop them reproducing

**Why they don't work on viruses:**
- Antibiotics target specific features of bacterial cells (e.g., cell walls)
- Viruses don't have these features [1 mark]
- Viruses live inside host cells, so antibiotics cannot reach them
- Antibiotics are designed to attack bacteria, not viruses`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Explain how bacteria become resistant to antibiotics.',
        solution: `**How antibiotic resistance develops:**

1. **Genetic variation:**
- Bacteria reproduce rapidly by binary fission
- Random mutations occur in their DNA [1 mark]
- Some mutations may provide resistance to antibiotics

2. **Selection pressure:**
- When antibiotics are used, most bacteria are killed [1 mark]
- Bacteria with resistance mutations survive
- These resistant bacteria are not killed by the antibiotic

3. **Reproduction:**
- Resistant bacteria reproduce, passing on resistance genes [1 mark]
- Population increases rapidly (binary fission)

4. **Natural selection:**
- Over time, the proportion of resistant bacteria increases [1 mark]
- The antibiotic becomes less effective
- This is natural selection in action - the environment (antibiotic) selects for resistant individuals`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'Discuss the measures that can be taken to slow down the development of antibiotic resistance and explain why this is important.',
        solution: `**Measures to slow antibiotic resistance:**

1. **Prescribing practices:**
- Doctors should only prescribe antibiotics for bacterial infections [1 mark]
- Not for viral infections (colds, flu)
- Use correct antibiotic for each type of infection

2. **Patient compliance:**
- Complete the full course of antibiotics [1 mark]
- Even if feeling better, continue taking as prescribed
- This ensures all bacteria are killed, not just the weakest

3. **Agricultural practices:**
- Reduce use of antibiotics in farming
- Don't use antibiotics as growth promoters [1 mark]
- Only treat genuinely sick animals

4. **Hygiene and infection control:**
- Good hygiene reduces infections, reducing need for antibiotics
- Proper handwashing in hospitals and homes

5. **Research and development:**
- Develop new antibiotics
- Find alternative treatments [1 mark]

**Why this is important:**

- Antibiotic resistance is increasing worldwide
- Some infections are becoming untreatable
- "Superbugs" like MRSA are already difficult to treat
- Without effective antibiotics, common infections could become fatal
- Routine surgeries would become much more risky
- We could return to a pre-antibiotic era where minor infections kill
- Major threat to modern medicine and global health [1 mark]`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'biology',
      exam_board: 'aqa',
      topic_slug: 'infection-and-response',
      subtopic_slug: 'drug-development',
      title: 'Drug Development | GCSE Biology',
      meta_description: 'Master drug development including clinical trials and testing. GCSE Biology practice questions with solutions.',
      introduction: `Drug development is a long, expensive, and rigorous process designed to ensure that new medicines are safe and effective before they are made available to patients. On average, it takes 10-15 years and over £1 billion to develop a new drug from initial discovery to market approval.

The process begins with discovery and preclinical testing. Scientists identify potential drug compounds through various methods, including studying natural products, rational drug design, and high-throughput screening. Promising compounds are tested in laboratories (in vitro) and on animals (in vivo) to assess their effectiveness and identify potential safety issues.

Clinical trials in humans occur in three main phases. Phase 1 trials use a small number of healthy volunteers to test the drug's safety, determine safe dosages, and identify side effects. Phase 2 trials involve larger groups of patients with the target disease to assess effectiveness and further evaluate safety. Phase 3 trials are large-scale studies comparing the new drug to existing treatments or placebos.

Double-blind trials are used to eliminate bias. Neither the patients nor the doctors know who is receiving the real drug and who is receiving a placebo (inactive substance). This prevents expectations from influencing the results. Only after data collection is complete is the blind "broken" to analyse whether the drug was more effective than the placebo.

If clinical trials are successful, the drug company applies for regulatory approval. In the UK, the MHRA (Medicines and Healthcare products Regulatory Agency) reviews all the evidence before deciding whether to approve the drug. Even after approval, drugs continue to be monitored for rare side effects that might only appear when used by large populations over extended periods.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'Describe why new drugs must be tested before they can be used to treat patients.',
        solution: `**Why new drugs must be tested:**

1. **To check for safety** [1 mark]
- Identify harmful side effects
- Determine safe dosage levels
- Ensure the drug doesn't cause more harm than the disease

2. **To check for effectiveness** [1 mark]
- Prove the drug actually works to treat the disease
- Compare to existing treatments or placebos
- Determine which patients it works best for

3. **To determine dosage** [1 mark]
- Find the right dose that is effective but safe
- May vary for different patient groups (children, elderly, etc.)`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Describe the stages of clinical trials for testing a new drug.',
        solution: `**Stages of clinical trials:**

**Preclinical testing (before human trials):**
- Drug tested in laboratory (in vitro - on cells/tissues)
- Tested on animals (in vivo) for safety and effectiveness [1 mark]

**Phase 1:**
- Small number of healthy volunteers
- Tests for safety and side effects [1 mark]
- Determines safe dosage range

**Phase 2:**
- Larger group of patients with the disease
- Tests whether the drug works (effectiveness) [1 mark]
- Continues to monitor safety
- Identifies optimal dose

**Phase 3:**
- Large-scale trial with many patients
- Compares new drug to existing treatment or placebo [1 mark]
- Often uses double-blind method
- Provides evidence for regulatory approval`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'Explain what is meant by a double-blind trial using a placebo, and discuss why this method is considered the gold standard for testing new drugs.',
        solution: `**What is a double-blind trial with placebo:**

- **Placebo:** An inactive substance (sugar pill) that looks identical to the real drug [1 mark]
- Patients are randomly assigned to receive either the drug or placebo
- **Double-blind:** Neither the patients nor the doctors/researchers know who receives which [1 mark]
- The assignment is kept secret until all data is collected

**Why it's the gold standard:**

1. **Eliminates placebo effect:** [1 mark]
- Patients often improve just because they expect to
- If patients don't know if they have the real drug, this can be measured
- Any difference between groups must be due to the actual drug

2. **Eliminates researcher bias:** [1 mark]
- Doctors might treat patients differently if they knew who had the real drug
- Might interpret symptoms differently based on expectations
- Blinding prevents this unconscious bias

3. **Provides reliable evidence:**
- Results are objective and verifiable
- Statistical analysis can determine if differences are significant
- Gives confidence that the drug truly works [1 mark]

4. **Ethical considerations:**
- Control group still receives some treatment (placebo)
- If existing treatment exists, may use that as control instead of placebo
- Allows fair comparison while minimising harm to patients`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'biology',
      exam_board: 'aqa',
      topic_slug: 'infection-and-response',
      subtopic_slug: 'monoclonal-antibodies',
      title: 'Monoclonal Antibodies | GCSE Biology',
      meta_description: 'Master monoclonal antibodies including production and uses. GCSE Biology practice questions with solutions.',
      introduction: `Monoclonal antibodies are identical antibodies produced by clones of a single B-cell. Because they are all identical, they will only bind to one specific antigen. This specificity makes them extremely useful tools in medicine, research, and diagnostics.

The production of monoclonal antibodies begins by injecting an animal (usually a mouse) with the antigen you want to create antibodies against. The mouse's immune system produces B-lymphocytes that make antibodies against this antigen. These B-cells are then collected from the mouse's spleen.

The B-cells are fused with tumor cells (which can divide indefinitely) to create hybrid cells called hybridomas. These hybridomas combine the antibody-producing ability of B-cells with the immortal, rapidly dividing nature of cancer cells. The hybridomas that produce the desired antibody are selected and grown in large quantities, producing huge amounts of identical antibodies.

Monoclonal antibodies have many medical applications. In pregnancy tests, they detect the hormone HCG in urine. In disease diagnosis, they can identify specific pathogens or markers in blood samples. In cancer treatment, monoclonal antibodies can be designed to target cancer cells specifically, either marking them for destruction by the immune system or delivering toxic drugs directly to the tumor.

While monoclonal antibodies show great promise, they can cause side effects. Because they are typically produced from mouse cells, the human immune system may recognise them as foreign and mount an immune response against them. Scientists are working on producing "humanised" antibodies that are less likely to cause these problems.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'State what monoclonal antibodies are and give one use of monoclonal antibodies.',
        solution: `**What monoclonal antibodies are:**
- Identical antibodies produced from a single clone of cells [1 mark]
- They are all the same and bind to one specific antigen [1 mark]

**One use of monoclonal antibodies:**
Any one of: [1 mark]
- Pregnancy tests (detect HCG hormone)
- Diagnosis of diseases (identify specific pathogens)
- Cancer treatment (target cancer cells)
- Locating blood clots
- Research (identify specific molecules)`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Describe how monoclonal antibodies are produced.',
        solution: `**Production of monoclonal antibodies:**

1. **Stimulate antibody production:**
- A mouse is injected with the specific antigen [1 mark]
- The mouse's immune system produces B-lymphocytes making antibodies against this antigen

2. **Collect B-cells:**
- B-lymphocytes are collected from the mouse's spleen [1 mark]

3. **Create hybridomas:**
- B-cells are fused with tumor cells (myeloma cells)
- Creates hybrid cells called hybridomas [1 mark]
- Hybridomas can divide indefinitely like cancer cells
- But also produce antibodies like B-cells

4. **Select and grow:**
- Hybridomas producing the desired antibody are selected
- Grown in large quantities to produce lots of identical antibodies [1 mark]`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'Explain how monoclonal antibodies can be used in cancer treatment and discuss potential advantages and disadvantages of this approach.',
        solution: `**How monoclonal antibodies are used in cancer treatment:**

1. **Targeting cancer cells:**
- Cancer cells have specific antigens on their surface [1 mark]
- Monoclonal antibodies are designed to bind to these antigens
- This targets the cancer cells specifically, not healthy cells

2. **Mechanisms of action:**
- Antibodies may directly stop cancer cell growth
- May mark cancer cells for destruction by immune system
- Can carry drugs or radioactive substances directly to cancer [1 mark]
- Delivers treatment to tumor while minimising damage to healthy tissue

**Advantages:**

1. **Specificity:**
- Target cancer cells directly [1 mark]
- Reduces damage to healthy cells compared to chemotherapy
- Fewer side effects in some cases

2. **Can be combined with other treatments:**
- Used alongside chemotherapy or radiotherapy
- May make tumors more sensitive to treatment

**Disadvantages:**

1. **Side effects:**
- Can cause allergic reactions [1 mark]
- Fever, chills, and other immune responses
- Body may recognise mouse-derived antibodies as foreign

2. **Limitations:**
- Not effective against all cancers
- Cancer cells may develop resistance
- Expensive to produce
- May not reach solid tumors easily [1 mark]

3. **Development challenges:**
- Take time and money to develop
- Need to identify suitable target antigens`,
        display_order: 3
      }
    ]
  }
];
