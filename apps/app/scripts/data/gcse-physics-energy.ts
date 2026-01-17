import { SubtopicData } from '../bulk-seo-insert';

export const data: SubtopicData[] = [
  {
    content: {
      level: 'gcse',
      subject: 'physics',
      exam_board: 'aqa',
      topic_slug: 'energy',
      subtopic_slug: 'energy-transfers',
      title: 'GCSE Physics: Energy Transfers Practice Questions',
      meta_description: 'Master energy transfers with GCSE Physics practice. Learn about energy stores and pathways.',
      introduction: `Energy is transferred between stores through different pathways. The main energy stores are: kinetic, gravitational potential, elastic potential, chemical, thermal, nuclear, magnetic, and electrostatic. Energy can be transferred by heating, radiation, electrical work, or mechanical work.

Energy is never created or destroyed - it's conserved. It just moves between stores. In most real processes, some energy is transferred to thermal stores (dissipated), making it less useful. This is why efficiency is never 100%.

When describing energy transfers, identify the initial store, the pathway of transfer, and the final store(s). For example: chemical (in fuel) → thermal (burning) → kinetic (engine movement).`
    },
    questions: [
      { difficulty: 'easy', marks: 2, content: 'A ball is dropped from a height. Describe the energy transfer as it falls.', solution: '**Energy transfer:**\n\nGravitational potential energy store → Kinetic energy store\n\nAs the ball falls:\n- Height decreases, so GPE decreases\n- Speed increases, so KE increases\n- Energy is transferred mechanically (by the force of gravity doing work)\n\n**GPE → KE** ✓', display_order: 1 },
      { difficulty: 'medium', marks: 3, content: 'Describe the energy transfers that occur when a battery powers an electric motor to lift a weight.', solution: '**Energy transfers:**\n\n1. **Chemical energy store** (in battery) →\n   *transferred electrically* →\n   \n2. **Kinetic energy store** (in motor) →\n   *transferred mechanically* →\n   \n3. **Gravitational potential energy store** (in lifted weight)\n\n**Also:**\nSome energy is transferred to **thermal energy stores** in the motor and wires (dissipated) due to friction and resistance. ✓', display_order: 2 },
      { difficulty: 'hard', marks: 4, content: 'A spring-powered toy car is wound up and released on a flat surface. It moves forward and eventually stops.\n\nDescribe and explain all the energy transfers that occur, from winding up to stopping.', solution: '**Winding up:**\nChemical energy (in person\'s muscles) → Elastic potential energy (in spring)\n*Transferred by mechanical work (force × distance)*\n\n**Release and movement:**\nElastic potential energy (spring) → Kinetic energy (car)\n*Transferred mechanically as spring unwinds*\n\n**Car slowing down:**\nKinetic energy (car) → Thermal energy (wheels, axles, air, ground)\n*Transferred by heating due to friction*\n\n**Why it stops:**\nAll useful energy is eventually dissipated to thermal stores in the surroundings. This energy is spread out and cannot be usefully recovered.\n\nTotal energy is conserved throughout - it\'s just transferred to less useful forms. ✓', display_order: 3 }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'physics',
      exam_board: 'aqa',
      topic_slug: 'energy',
      subtopic_slug: 'specific-heat-capacity',
      title: 'GCSE Physics: Specific Heat Capacity Practice Questions',
      meta_description: 'Master specific heat capacity with GCSE Physics practice. Calculate energy for temperature changes.',
      introduction: `Specific heat capacity (c) is the energy needed to raise the temperature of 1 kg of a substance by 1°C. The formula is: E = mcΔθ, where E is energy (J), m is mass (kg), c is specific heat capacity (J/kg°C), and Δθ is temperature change (°C).

Water has a high specific heat capacity (4200 J/kg°C), meaning it takes a lot of energy to heat up and releases a lot when cooling. This is why water is used in central heating systems and why coastal areas have milder climates.

Different materials have different specific heat capacities. Metals generally have low values (around 400-900 J/kg°C), while water and other liquids are higher.`
    },
    questions: [
      { difficulty: 'easy', marks: 2, content: 'Calculate the energy needed to heat 2 kg of water from 20°C to 80°C.\n\nSpecific heat capacity of water = 4200 J/kg°C', solution: '**Use E = mcΔθ**\n\nm = 2 kg\nc = 4200 J/kg°C\nΔθ = 80 - 20 = 60°C\n\nE = 2 × 4200 × 60\nE = 504000 J = 504 kJ\n\n**Energy = 504000 J (or 504 kJ)** ✓', display_order: 1 },
      { difficulty: 'medium', marks: 3, content: 'A 0.5 kg metal block is heated with 11500 J of energy. Its temperature rises from 25°C to 75°C.\n\nCalculate the specific heat capacity of the metal.', solution: '**Rearrange E = mcΔθ to find c:**\nc = E / (mΔθ)\n\nE = 11500 J\nm = 0.5 kg\nΔθ = 75 - 25 = 50°C\n\nc = 11500 / (0.5 × 50)\nc = 11500 / 25\nc = 460 J/kg°C\n\n**Specific heat capacity = 460 J/kg°C** ✓\n\n(This is close to iron/steel at ~450 J/kg°C)', display_order: 2 },
      { difficulty: 'hard', marks: 4, content: 'A 3 kW electric heater heats 10 kg of water.\n\n(a) How long will it take to raise the water temperature by 30°C?\n(b) In practice, why might it take longer?\n\nSpecific heat capacity of water = 4200 J/kg°C', solution: '**(a) Calculate time:**\n\n**Energy needed:**\nE = mcΔθ = 10 × 4200 × 30 = 1,260,000 J\n\n**Power = Energy / Time, so Time = Energy / Power**\n\nPower = 3 kW = 3000 W = 3000 J/s\n\nTime = 1,260,000 / 3000 = 420 s = 7 minutes\n\n**Time = 420 seconds (7 minutes)** ✓\n\n**(b) Why it might take longer:**\n\n- Heat is lost to the surroundings (container, air)\n- Not all electrical energy is converted to thermal energy in the water\n- Energy heats the container as well as the water\n- Evaporation removes some thermal energy\n\nThese losses mean more energy (and therefore more time) is needed. ✓', display_order: 3 }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'physics',
      exam_board: 'aqa',
      topic_slug: 'energy',
      subtopic_slug: 'kinetic-energy',
      title: 'GCSE Physics: Kinetic Energy Practice Questions',
      meta_description: 'Master kinetic energy with GCSE Physics practice. Learn the KE=½mv² formula and calculations.',
      introduction: `Kinetic energy is the energy an object has due to its motion. The formula is KE = ½mv², where KE is kinetic energy (J), m is mass (kg), and v is velocity (m/s). Notice that KE depends on the square of velocity - double the speed means four times the KE.

This v² relationship explains why stopping distance increases dramatically with speed. A car going twice as fast has four times the kinetic energy to dissipate, so needs four times the braking distance.

Kinetic energy is always positive (v² is always positive) and is a scalar quantity (no direction). When an object slows down, its kinetic energy decreases - the energy is transferred to other stores.`
    },
    questions: [
      { difficulty: 'easy', marks: 2, content: 'A car of mass 1200 kg travels at 15 m/s.\n\nCalculate its kinetic energy.', solution: '**Use KE = ½mv²**\n\nKE = ½ × 1200 × 15²\nKE = ½ × 1200 × 225\nKE = 135000 J = 135 kJ\n\n**Kinetic energy = 135000 J (or 135 kJ)** ✓', display_order: 1 },
      { difficulty: 'medium', marks: 3, content: 'A ball of mass 0.2 kg has kinetic energy of 10 J.\n\nCalculate the velocity of the ball.', solution: '**Rearrange KE = ½mv² to find v:**\n\nKE = ½mv²\n10 = ½ × 0.2 × v²\n10 = 0.1 × v²\nv² = 10 / 0.1\nv² = 100\nv = √100 = 10 m/s\n\n**Velocity = 10 m/s** ✓', display_order: 2 },
      { difficulty: 'hard', marks: 4, content: 'A cyclist of total mass 80 kg accelerates from 5 m/s to 10 m/s.\n\n(a) Calculate the increase in kinetic energy.\n(b) Explain why doubling the speed doesn\'t double the kinetic energy.', solution: '**(a) Calculate increase in KE:**\n\n**Initial KE:**\nKE₁ = ½ × 80 × 5² = ½ × 80 × 25 = 1000 J\n\n**Final KE:**\nKE₂ = ½ × 80 × 10² = ½ × 80 × 100 = 4000 J\n\n**Increase:**\nΔKE = 4000 - 1000 = 3000 J\n\n**Increase in KE = 3000 J** ✓\n\n**(b) Why doubling speed doesn\'t double KE:**\n\nKinetic energy depends on velocity **squared** (v²).\n\nWhen speed doubles (×2), v² increases by factor of 2² = 4.\n\nSo kinetic energy increases by a factor of 4, not 2.\n\nIn this example: speed doubled (5→10) but KE quadrupled (1000→4000 J). ✓', display_order: 3 }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'physics',
      exam_board: 'aqa',
      topic_slug: 'energy',
      subtopic_slug: 'gravitational-potential-energy',
      title: 'GCSE Physics: Gravitational Potential Energy Practice Questions',
      meta_description: 'Master GPE calculations with GCSE Physics practice. Learn Ep=mgh and energy conservation.',
      introduction: `Gravitational potential energy (GPE) is the energy stored in an object due to its height above the ground. The formula is Ep = mgh, where Ep is GPE (J), m is mass (kg), g is gravitational field strength (N/kg), and h is height (m).

On Earth, g ≈ 10 N/kg (or 9.8 N/kg for more precision). GPE depends on height relative to a reference point (usually ground level). If an object is lifted higher, its GPE increases; if it falls, GPE decreases.

When an object falls freely, GPE converts to kinetic energy. At any point: total mechanical energy = GPE + KE = constant (ignoring air resistance).`
    },
    questions: [
      { difficulty: 'easy', marks: 2, content: 'A book of mass 2 kg is on a shelf 1.5 m above the ground.\n\nCalculate its gravitational potential energy. (g = 10 N/kg)', solution: '**Use Ep = mgh**\n\nEp = 2 × 10 × 1.5\nEp = 30 J\n\n**GPE = 30 J** ✓', display_order: 1 },
      { difficulty: 'medium', marks: 3, content: 'A 0.5 kg ball is thrown upwards with kinetic energy of 40 J.\n\nIgnoring air resistance, calculate the maximum height reached. (g = 10 N/kg)', solution: '**At maximum height, all KE has converted to GPE:**\n\nGPE at top = Initial KE = 40 J\n\n**Use Ep = mgh, rearranged for h:**\nh = Ep / (mg)\nh = 40 / (0.5 × 10)\nh = 40 / 5\nh = 8 m\n\n**Maximum height = 8 m** ✓', display_order: 2 },
      { difficulty: 'hard', marks: 4, content: 'A roller coaster car of mass 500 kg starts from rest at the top of a 40 m drop. At the bottom, it is travelling at 25 m/s.\n\n(a) Calculate the GPE lost.\n(b) Calculate the KE at the bottom.\n(c) Account for any difference between (a) and (b).\n\n(g = 10 N/kg)', solution: '**(a) GPE lost:**\nΔEp = mgh = 500 × 10 × 40 = 200000 J\n\n**GPE lost = 200000 J** ✓\n\n**(b) KE at bottom:**\nKE = ½mv² = ½ × 500 × 25²\nKE = ½ × 500 × 625 = 156250 J\n\n**KE at bottom = 156250 J** ✓\n\n**(c) Account for difference:**\n\nDifference = 200000 - 156250 = 43750 J\n\nThis energy has been **transferred to thermal energy** stores due to:\n- Friction between wheels and track\n- Air resistance (drag)\n- Sound energy\n\nThis energy is dissipated to the surroundings and cannot be recovered for useful work. ✓', display_order: 3 }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'physics',
      exam_board: 'aqa',
      topic_slug: 'energy',
      subtopic_slug: 'power-and-efficiency',
      title: 'GCSE Physics: Power and Efficiency Practice Questions',
      meta_description: 'Master power and efficiency with GCSE Physics practice. Learn P=E/t and efficiency calculations.',
      introduction: `Power is the rate of energy transfer (or work done). The formula is P = E/t, where P is power (Watts), E is energy transferred (J), and t is time (s). One Watt equals one Joule per second.

Efficiency measures how much input energy is usefully transferred: Efficiency = (useful output / total input) × 100%. No device is 100% efficient - some energy is always wasted, usually as heat.

Power can also be calculated from force and velocity: P = Fv. This is useful for moving objects like cars, where F is the driving force and v is velocity.`
    },
    questions: [
      { difficulty: 'easy', marks: 2, content: 'A motor transfers 6000 J of energy in 30 seconds.\n\nCalculate the power of the motor.', solution: '**Use P = E/t**\n\nP = 6000 / 30\nP = 200 W\n\n**Power = 200 W** ✓', display_order: 1 },
      { difficulty: 'medium', marks: 3, content: 'A light bulb uses 60 W of electrical power. Only 12 W is transferred as light energy.\n\n(a) Calculate the efficiency of the light bulb.\n(b) What happens to the rest of the energy?', solution: '**(a) Calculate efficiency:**\n\nEfficiency = (useful output / total input) × 100%\nEfficiency = (12 / 60) × 100%\nEfficiency = 0.2 × 100% = 20%\n\n**Efficiency = 20%** ✓\n\n**(b) What happens to the rest:**\n\nThe remaining 80% (48 W) is transferred to **thermal energy** (heat).\n\nThis warms up the bulb and surroundings. This energy is not useful for lighting, so it is considered wasted. ✓', display_order: 2 },
      { difficulty: 'hard', marks: 4, content: 'A crane lifts a 2000 kg load through a height of 15 m in 20 seconds.\nThe crane motor has an efficiency of 40%.\n\n(a) Calculate the useful energy transferred.\n(b) Calculate the input power needed.\n\n(g = 10 N/kg)', solution: '**(a) Useful energy (GPE gained):**\n\nUseful energy = mgh\n= 2000 × 10 × 15\n= 300000 J\n\n**Useful energy = 300000 J** ✓\n\n**(b) Input power:**\n\n**First find input energy:**\nEfficiency = useful / input\n0.4 = 300000 / input\nInput energy = 300000 / 0.4 = 750000 J\n\n**Then find power:**\nP = E / t = 750000 / 20 = 37500 W\n\n**Input power = 37500 W (or 37.5 kW)** ✓', display_order: 3 }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'physics',
      exam_board: 'aqa',
      topic_slug: 'energy',
      subtopic_slug: 'work-done',
      title: 'GCSE Physics: Work Done Practice Questions',
      meta_description: 'Master work done calculations with GCSE Physics practice. Learn W=Fs and energy transfer concepts.',
      introduction: `Work done is the energy transferred when a force moves an object. The formula is W = Fs, where W is work done (J), F is force (N), and s is distance moved in the direction of the force (m). Work done equals energy transferred.

If the force and movement are not in the same direction, only the component of force in the direction of movement does work. When a force acts perpendicular to movement (like normal reaction on a moving object), no work is done.

Work against friction transfers energy to thermal stores (heat). Work against gravity increases gravitational potential energy. Understanding work helps explain energy transfers in mechanical systems.`
    },
    questions: [
      { difficulty: 'easy', marks: 2, content: 'A person pushes a box with a force of 50 N for a distance of 8 m.\n\nCalculate the work done.', solution: '**Use W = Fs**\n\nW = 50 × 8\nW = 400 J\n\n**Work done = 400 J** ✓', display_order: 1 },
      { difficulty: 'medium', marks: 3, content: 'A crane does 45000 J of work lifting a crate. The crate rises 15 m.\n\nCalculate the weight of the crate.', solution: '**Rearrange W = Fs to find F:**\n\nF = W / s\nF = 45000 / 15\nF = 3000 N\n\nThe force needed equals the weight of the crate.\n\n**Weight = 3000 N** ✓', display_order: 2 },
      { difficulty: 'hard', marks: 4, content: 'A car of mass 1200 kg accelerates from rest to 20 m/s on a flat road.\n\n(a) Calculate the kinetic energy gained.\n(b) The car travels 100 m during this acceleration. Calculate the average driving force.\n(c) Explain why the actual driving force must be greater than this.', solution: '**(a) Kinetic energy gained:**\n\nKE = ½mv² = ½ × 1200 × 20²\n= ½ × 1200 × 400 = 240000 J\n\n**KE gained = 240000 J** ✓\n\n**(b) Average driving force:**\n\nWork done = Energy transferred = 240000 J\n\nW = Fs, so F = W/s\nF = 240000 / 100 = 2400 N\n\n**Average force = 2400 N** ✓\n\n**(c) Why actual force is greater:**\n\nThe 2400 N only accounts for the useful work (increasing KE).\n\nThe actual driving force must also overcome:\n- Air resistance (drag)\n- Rolling resistance (friction)\n\nWork is done against these forces, transferring energy to thermal stores, but this energy doesn\'t appear as KE.\n\nSo total driving force > 2400 N. ✓', display_order: 3 }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'physics',
      exam_board: 'aqa',
      topic_slug: 'energy',
      subtopic_slug: 'conservation-of-energy',
      title: 'GCSE Physics: Conservation of Energy Practice Questions',
      meta_description: 'Master energy conservation with GCSE Physics practice. Understand how energy is never created or destroyed.',
      introduction: `The principle of conservation of energy states that energy cannot be created or destroyed, only transferred from one store to another. The total energy in a closed system stays constant.

In any energy transfer, the total energy before equals the total energy after. If 1000 J of chemical energy is used, 1000 J will appear in other forms - perhaps 800 J of kinetic energy and 200 J of thermal energy.

"Lost" energy doesn't disappear - it's transferred to less useful forms, usually thermal energy in the surroundings. This dissipated energy is spread out and cannot be easily used again.`
    },
    questions: [
      { difficulty: 'easy', marks: 2, content: 'State the principle of conservation of energy.', solution: '**Principle of conservation of energy:**\n\nEnergy cannot be created or destroyed, only transferred from one store to another (or transformed from one form to another).\n\nThe total energy in a closed system remains constant. ✓', display_order: 1 },
      { difficulty: 'medium', marks: 3, content: 'A ball of mass 0.5 kg is dropped from a height of 10 m.\n\nIgnoring air resistance:\n(a) What is its GPE at the top?\n(b) What is its speed just before hitting the ground?\n\n(g = 10 N/kg)', solution: '**(a) GPE at top:**\n\nEp = mgh = 0.5 × 10 × 10 = 50 J\n\n**GPE = 50 J** ✓\n\n**(b) Speed at bottom:**\n\nBy conservation: GPE at top = KE at bottom\n50 = ½mv²\n50 = ½ × 0.5 × v²\n50 = 0.25v²\nv² = 200\nv = √200 = 14.1 m/s\n\n**Speed = 14.1 m/s** ✓', display_order: 2 },
      { difficulty: 'hard', marks: 4, content: 'A 100 g toy car rolls down a 0.8 m ramp and reaches the bottom travelling at 3 m/s.\n\n(a) Calculate the GPE lost.\n(b) Calculate the KE at the bottom.\n(c) Use your answers to calculate the energy transferred to thermal stores.\n(d) Explain where this thermal energy goes.\n\n(g = 10 N/kg)', solution: '**(a) GPE lost:**\nm = 100 g = 0.1 kg\nEp = mgh = 0.1 × 10 × 0.8 = 0.8 J\n\n**GPE lost = 0.8 J** ✓\n\n**(b) KE at bottom:**\nKE = ½mv² = ½ × 0.1 × 3² = 0.5 × 0.1 × 9 = 0.45 J\n\n**KE at bottom = 0.45 J** ✓\n\n**(c) Energy to thermal stores:**\nBy conservation: GPE = KE + Thermal\n0.8 = 0.45 + Thermal\nThermal = 0.8 - 0.45 = 0.35 J\n\n**Thermal energy = 0.35 J** ✓\n\n**(d) Where thermal energy goes:**\n- Friction between wheels and ramp heats both surfaces\n- Friction in axles heats the car\n- Air resistance heats the air and car\n\nThis energy is dissipated to the surroundings. ✓', display_order: 3 }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'physics',
      exam_board: 'aqa',
      topic_slug: 'energy',
      subtopic_slug: 'renewable-energy',
      title: 'GCSE Physics: Renewable Energy Practice Questions',
      meta_description: 'Understand renewable energy sources with GCSE Physics practice. Compare solar, wind, hydro, and more.',
      introduction: `Renewable energy sources are replenished naturally and won't run out. They include solar, wind, hydroelectric, tidal, wave, geothermal, and biomass. Unlike fossil fuels, they don't release carbon dioxide when generating electricity (though manufacturing equipment may).

Each renewable source has advantages and disadvantages. Solar and wind are weather-dependent and intermittent. Hydroelectric requires suitable geography and can damage ecosystems. Geothermal is only available in certain locations.

Renewable energy is essential for reducing carbon emissions and combating climate change, but currently provides only a fraction of global energy needs. Many countries are increasing renewable capacity.`
    },
    questions: [
      { difficulty: 'easy', marks: 2, content: 'Give two advantages of using wind power to generate electricity.', solution: '**Two advantages of wind power:**\n\n1. **Renewable** - Wind won\'t run out (unlike fossil fuels)\n\n2. **No carbon dioxide emissions** during operation - doesn\'t contribute to climate change\n\n*(Other valid answers: no air pollution, free fuel once built, can be built offshore)* ✓', display_order: 1 },
      { difficulty: 'medium', marks: 4, content: 'Compare the advantages and disadvantages of solar panels and hydroelectric power for generating electricity.', solution: '**Solar panels:**\n\n*Advantages:*\n- Can be installed on existing buildings (no new land needed)\n- No moving parts, low maintenance\n- Quiet, no noise pollution\n- Scalable (from small to large installations)\n\n*Disadvantages:*\n- Only works during daylight\n- Output varies with weather/seasons\n- Less effective in cloudy/northern regions\n- Large area needed for significant power\n\n**Hydroelectric:**\n\n*Advantages:*\n- Reliable, can generate 24/7\n- Can respond quickly to demand\n- Reservoirs can store energy\n- Very efficient (up to 90%)\n\n*Disadvantages:*\n- Requires specific geography (valleys, rivers)\n- High initial construction cost\n- Can flood large areas, displacing communities\n- Damages river ecosystems, affects fish migration ✓', display_order: 2 },
      { difficulty: 'hard', marks: 4, content: 'Explain why we cannot rely entirely on wind and solar power to meet all electricity demand, and suggest how this problem could be addressed.', solution: '**Problems with relying entirely on wind and solar:**\n\n**Intermittency:**\n- Wind doesn\'t always blow\n- Solar only works during daytime\n- Output is unpredictable and varies with weather\n\n**Mismatch with demand:**\n- Peak demand may not match peak generation\n- Winter has high demand but low solar output\n- Calm, cloudy weather = very low output\n\n**How to address these problems:**\n\n1. **Energy storage:**\n   - Large batteries to store excess energy\n   - Pumped hydro storage\n   - Hydrogen production when excess electricity available\n\n2. **Grid connections:**\n   - Connect to other regions/countries\n   - Wind may be blowing somewhere even if not locally\n\n3. **Mix of renewables:**\n   - Combine solar, wind, hydro, tidal, geothermal\n   - They have different patterns, providing some balance\n\n4. **Backup generation:**\n   - Keep some gas power stations for peak demand\n   - Nuclear provides reliable baseload power ✓', display_order: 3 }
    ]
  }
];

export default data;
