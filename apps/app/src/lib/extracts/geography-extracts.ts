/**
 * Geography Extract Database
 * Real geographical data, case studies, and statistics
 *
 * Data sources: ONS, World Bank, UN, Met Office, Environment Agency
 */

export interface GeographyExtract {
  id: string;
  type: 'data_table' | 'case_study' | 'map_data' | 'statistics' | 'fieldwork';
  title: string;
  source: string;
  year: number;
  content: string;
  topics: string[];
  concepts: string[];
  skills?: string[];
  analysisPoints?: string[];
}

// ============================================
// PHYSICAL GEOGRAPHY - HAZARDS
// ============================================

export const hazardsData: GeographyExtract[] = [
  {
    id: 'haiti-earthquake-2010',
    type: 'case_study',
    title: 'Haiti Earthquake 2010 - LIC Tectonic Hazard',
    source: 'USGS / UN OCHA',
    year: 2010,
    content: `Haiti Earthquake Case Study - 12 January 2010

Physical Characteristics:
| Feature          | Details                    |
|------------------|----------------------------|
| Magnitude        | 7.0 Mw                     |
| Depth            | 13 km (shallow)            |
| Location         | 25 km W of Port-au-Prince  |
| Plate boundary   | Conservative (transform)   |
| Cause            | Caribbean/North American plate boundary |

Impacts:
| Category          | Primary Effects                | Secondary Effects              |
|-------------------|-------------------------------|--------------------------------|
| Deaths            | 316,000                       | Disease outbreaks (cholera)    |
| Injured           | 300,000                       | 8,000+ cholera deaths          |
| Displaced         | 1.5 million                   | Long-term homelessness         |
| Buildings destroyed| 250,000 homes, 30,000 commercial | Economic collapse            |
| Economic cost     | $14 billion (120% of GDP)    | Lost tourism, agriculture      |

Why effects were so severe:
- Poorest country in Western Hemisphere (GDP per capita: $660)
- No building codes - poor construction
- Dense urban population in Port-au-Prince
- Corrupt government - poor emergency planning
- Limited healthcare infrastructure`,
    topics: ['Tectonic hazards', 'Earthquakes', 'Development', 'Vulnerability'],
    concepts: ['Plate tectonics', 'Vulnerability', 'Capacity to cope', 'Primary/secondary effects'],
    skills: ['Data interpretation', 'Case study comparison', 'Extended writing'],
    analysisPoints: [
      'Link between development and vulnerability',
      'Comparison with similar magnitude events in HICs',
      'Short-term vs long-term responses',
      'Role of international aid'
    ]
  },
  {
    id: 'japan-earthquake-2011',
    type: 'case_study',
    title: 'Japan Earthquake and Tsunami 2011 - HIC Tectonic Hazard',
    source: 'Japan Meteorological Agency / World Bank',
    year: 2011,
    content: `Tōhoku Earthquake and Tsunami - 11 March 2011

Physical Characteristics:
| Feature          | Details                    |
|------------------|----------------------------|
| Magnitude        | 9.1 Mw (4th largest recorded) |
| Depth            | 32 km                      |
| Location         | 70 km E of Tōhoku coast    |
| Plate boundary   | Destructive (subduction)   |
| Tsunami height   | Up to 40 metres            |

Impacts:
| Category          | Details                           |
|-------------------|-----------------------------------|
| Deaths            | 19,759 (mainly from tsunami)      |
| Missing           | 2,553                             |
| Displaced         | 470,000 at peak                   |
| Buildings destroyed| 127,000 totally collapsed         |
| Economic cost     | $235 billion (most expensive ever)|
| Fukushima         | Level 7 nuclear meltdown          |

Japan's Preparedness:
- Strict building codes (earthquake-resistant design)
- Early warning system (1 minute before tsunami)
- Regular earthquake drills in schools
- Sea walls (though some were overtopped)
- Emergency supplies stored in public buildings`,
    topics: ['Tectonic hazards', 'Earthquakes', 'Tsunamis', 'Hazard management'],
    concepts: ['Prediction', 'Protection', 'Preparation', 'Subduction zones'],
    skills: ['Comparison', 'Evaluation of responses', 'Cost-benefit analysis'],
    analysisPoints: [
      'Effectiveness of preparation in reducing deaths',
      'Limitations of protection (sea walls)',
      'Secondary hazard - nuclear disaster',
      'Comparison with Haiti (development contrast)'
    ]
  },
  {
    id: 'uk-flooding-2023',
    type: 'case_study',
    title: 'Storm Babet - UK Flooding October 2023',
    source: 'Met Office / Environment Agency',
    year: 2023,
    content: `Storm Babet - UK Flooding Case Study

Meteorological Data:
| Feature              | Details                |
|----------------------|------------------------|
| Date                 | 18-21 October 2023     |
| Named by             | Met Office             |
| Peak rainfall        | 227mm in 48 hours      |
| Affected areas       | Scotland, E England    |
| Warning level        | Red (danger to life)   |

Impacts:
| Category          | Details                           |
|-------------------|-----------------------------------|
| Deaths            | 7 (UK and Ireland)                |
| Homes flooded     | 2,000+                            |
| People evacuated  | 1,200+                            |
| Transport         | East Coast Main Line closed 3 days|
| Agriculture       | Thousands of hectares flooded     |
| Insurance claims  | £500+ million estimated           |

Locations severely affected:
- Brechin, Scotland - River South Esk burst banks
- Catcliffe, South Yorkshire - 600 homes flooded
- Horncastle, Lincolnshire - town centre underwater

Causes:
- Slow-moving low pressure system
- Ground already saturated from previous rain
- High tides coinciding with river peaks
- Some flood defences overwhelmed`,
    topics: ['Weather hazards', 'Flooding', 'UK climate', 'Hazard management'],
    concepts: ['River flooding', 'Coastal flooding', 'Hard/soft engineering', 'Flood risk management'],
    skills: ['Describing patterns', 'Analysing causes', 'Evaluating responses'],
    analysisPoints: [
      'Climate change increasing flood risk',
      'Effectiveness of flood defences',
      'Social impacts on communities',
      'Role of early warning systems'
    ]
  }
];

// ============================================
// HUMAN GEOGRAPHY - URBAN
// ============================================

export const urbanData: GeographyExtract[] = [
  {
    id: 'london-population',
    type: 'data_table',
    title: 'London Population Change',
    source: 'ONS / GLA',
    year: 2023,
    content: `Figure 1: Greater London Population Statistics

| Year | Population (millions) | Change from previous | Density (per km²) |
|------|----------------------|---------------------|-------------------|
| 1991 | 6.83                 | -                   | 4,326             |
| 2001 | 7.17                 | +5.0%               | 4,542             |
| 2011 | 8.17                 | +14.0%              | 5,177             |
| 2021 | 8.80                 | +7.7%               | 5,576             |
| 2023 | 8.87                 | +0.8%               | 5,620             |

Population Characteristics (2021 Census):
| Metric                    | London    | England Average |
|---------------------------|-----------|-----------------|
| Median age                | 35.1      | 40.3            |
| Born outside UK           | 40.6%     | 17.4%           |
| Black/Asian/Mixed ethnicity| 46.2%    | 19.5%           |
| Owner-occupied housing    | 47.2%     | 62.3%           |
| Average house price       | £525,000  | £296,000        |

London's population fell by 300,000 during COVID-19 pandemic but has since recovered.`,
    topics: ['Urban issues', 'Population change', 'Migration', 'UK cities'],
    concepts: ['Urbanisation', 'Counter-urbanisation', 'Ethnic diversity', 'Housing affordability'],
    skills: ['Calculating change', 'Comparing data', 'Describing trends'],
    analysisPoints: [
      'Causes of population growth',
      'Impact on housing demand',
      'Cultural diversity benefits and challenges',
      'Pandemic effects on urban areas'
    ]
  },
  {
    id: 'mumbai-growth',
    type: 'case_study',
    title: 'Mumbai - Megacity Growth',
    source: 'UN Habitat / Census of India',
    year: 2023,
    content: `Mumbai Urban Growth Case Study

Population Growth:
| Year | Population (millions) | Growth Rate | Urban Density |
|------|----------------------|-------------|---------------|
| 1950 | 3.0                  | -           | 15,000/km²    |
| 1980 | 8.7                  | +190%       | 22,000/km²    |
| 2000 | 16.4                 | +89%        | 29,000/km²    |
| 2020 | 20.7                 | +26%        | 32,000/km²    |
| 2030 | 24.6 (projected)     | +19%        | 38,000/km²    |

Push and Pull Factors:
| Push (from rural areas)     | Pull (to Mumbai)           |
|-----------------------------|----------------------------|
| Agricultural mechanisation  | Better job opportunities   |
| Monsoon crop failures       | Higher wages               |
| Lack of services            | Access to healthcare       |
| Rural poverty               | Education opportunities    |
| Caste discrimination        | Entertainment/lifestyle    |

Dharavi Slum Statistics:
- Population: ~1 million in 2.1 km²
- Density: 470,000 people per km²
- Annual economic output: $1 billion
- 85% of residents employed
- Industries: recycling, pottery, textiles, leather`,
    topics: ['Urban growth', 'Megacities', 'NEE development', 'Migration'],
    concepts: ['Push-pull factors', 'Rural-urban migration', 'Informal settlements', 'Squatter settlements'],
    skills: ['Trend analysis', 'Cause and effect', 'Evaluation'],
    analysisPoints: [
      'Rapid urbanisation challenges',
      'Informal economy importance',
      'Dharavi as "slum of hope"',
      'Sustainable urban development'
    ]
  },
  {
    id: 'birmingham-regeneration',
    type: 'case_study',
    title: 'Birmingham Urban Regeneration',
    source: 'Birmingham City Council',
    year: 2023,
    content: `Birmingham Urban Regeneration Case Study

Key Regeneration Projects:

1. Bullring Shopping Centre (2003)
| Feature              | Details                |
|----------------------|------------------------|
| Cost                 | £530 million           |
| Jobs created         | 8,000                  |
| Annual visitors      | 39 million             |
| Retail space         | 110,000 m²             |

2. Birmingham Smithfield (ongoing)
| Feature              | Details                |
|----------------------|------------------------|
| Former use           | Wholesale markets      |
| Size                 | 17 hectares            |
| New homes planned    | 3,000                  |
| Investment           | £1.9 billion           |
| Completion           | 2037                   |

3. HS2 Curzon Street Station
| Feature              | Details                |
|----------------------|------------------------|
| Cost                 | £570 million           |
| Jobs during build    | 1,000                  |
| Opening              | 2033 (planned)         |
| Journey to London    | 49 minutes             |

Overall Impacts 2010-2023:
- 70,000 new jobs created
- £6 billion private investment attracted
- 25,000 new homes built
- 30% reduction in unemployment`,
    topics: ['Urban regeneration', 'UK cities', 'Economic change'],
    concepts: ['Regeneration', 'Gentrification', 'Brownfield sites', 'Sustainable communities'],
    skills: ['Evaluating success', 'Comparing changes', 'Stakeholder analysis'],
    analysisPoints: [
      'Economic multiplier effects',
      'Social impacts - gentrification concerns',
      'Environmental improvements',
      'Transport connectivity importance'
    ]
  }
];

// ============================================
// PHYSICAL GEOGRAPHY - COASTS/RIVERS
// ============================================

export const physicalProcessesData: GeographyExtract[] = [
  {
    id: 'holderness-coast',
    type: 'case_study',
    title: 'Holderness Coast Erosion',
    source: 'Environment Agency / BGS',
    year: 2023,
    content: `Holderness Coast - UK Coastal Erosion Case Study

Location: East Yorkshire, from Flamborough Head to Spurn Head

Erosion Statistics:
| Metric                    | Value                 |
|---------------------------|----------------------|
| Coastline length          | 61 km                |
| Average erosion rate      | 1.8 metres/year      |
| Maximum erosion rate      | 10 metres/year       |
| Land lost since Roman times| 4 km inland         |
| Villages lost             | 29 since Roman times |
| Current cliff height      | Up to 30 metres      |

Why Erosion is Rapid:
1. Boulder clay cliffs - soft and easily eroded
2. Destructive waves - long fetch from North Sea
3. Narrow beaches - little wave energy absorption
4. Slumping - clay becomes saturated and unstable
5. Longshore drift - removes protective beach material

Coastal Management:
| Location    | Strategy        | Cost        | Effectiveness |
|-------------|-----------------|-------------|---------------|
| Hornsea     | Sea wall        | £6.3m       | Protected town|
| Mappleton   | Rock armour     | £2m (1991)  | Protected but accelerated erosion elsewhere |
| Withernsea  | Groynes         | £6.1m       | Beach building|
| Skipsea     | No protection   | -           | Managed retreat |`,
    topics: ['Coasts', 'Coastal erosion', 'Coastal management', 'UK landscapes'],
    concepts: ['Erosion processes', 'Longshore drift', 'Hard/soft engineering', 'Managed retreat'],
    skills: ['Map interpretation', 'Evaluating strategies', 'Cost-benefit analysis'],
    analysisPoints: [
      'Conflict between protection and natural processes',
      'Downstream effects of defences',
      'Economic vs environmental priorities',
      'Climate change impacts'
    ]
  },
  {
    id: 'river-tees-flood',
    type: 'data_table',
    title: 'River Tees Flood Management',
    source: 'Environment Agency',
    year: 2023,
    content: `River Tees Flood Management Case Study

River Statistics:
| Feature              | Details                |
|----------------------|------------------------|
| Length               | 137 km                 |
| Source               | Cross Fell, Pennines   |
| Mouth                | Teesmouth, North Sea   |
| Catchment area       | 1,930 km²              |
| Main tributaries     | Skerne, Leven, Greta   |

Flood Risk Data:
| Location         | Properties at Risk | Protection Standard |
|------------------|-------------------|---------------------|
| Yarm             | 200               | 1 in 100 year       |
| Stockton         | 500               | 1 in 100 year       |
| Middlesbrough    | 350               | 1 in 200 year       |

Flood Management Strategies:
| Strategy              | Location      | Cost      | Description                |
|-----------------------|---------------|-----------|----------------------------|
| Cow Green Reservoir   | Upper Tees    | £5m (1970)| Stores water upstream      |
| Flood walls           | Yarm          | £2.1m     | Protects historic town     |
| Tees Barrage          | Stockton      | £54m      | Controls tidal flooding    |
| Washlands             | Ingleby       | £1.2m     | Natural flood storage      |
| Channel straightening | Various       | -         | Increases flow velocity    |

Upstream Changes:
- Moorland drainage increases runoff
- Deforestation reduces interception
- Urbanisation increases impermeable surfaces`,
    topics: ['Rivers', 'Flooding', 'River management', 'UK rivers'],
    concepts: ['Hydrograph', 'Flood management', 'Hard/soft engineering', 'Catchment management'],
    skills: ['Graph interpretation', 'Evaluating strategies', 'Fieldwork techniques'],
    analysisPoints: [
      'Balance of hard and soft engineering',
      'Upstream vs downstream conflicts',
      'Cost-effectiveness of strategies',
      'Climate change adaptation'
    ]
  }
];

// ============================================
// DEVELOPMENT AND GLOBALISATION
// ============================================

export const developmentData: GeographyExtract[] = [
  {
    id: 'development-indicators',
    type: 'data_table',
    title: 'Development Indicators Comparison 2023',
    source: 'World Bank / UN Development Programme',
    year: 2023,
    content: `Figure 1: Development Indicators by Country

| Country     | GNI per capita ($) | HDI   | Life Expectancy | Literacy Rate |
|-------------|-------------------|-------|-----------------|---------------|
| Norway      | 89,090            | 0.961 | 83.2            | 99%           |
| UK          | 46,510            | 0.929 | 81.2            | 99%           |
| China       | 12,850            | 0.768 | 78.2            | 97%           |
| India       | 2,380             | 0.633 | 67.7            | 74%           |
| Nigeria     | 2,140             | 0.539 | 52.7            | 62%           |
| Chad        | 690               | 0.394 | 52.5            | 22%           |

Additional Indicators:
| Country     | Infant Mortality | Access to Clean Water | Internet Users |
|-------------|------------------|----------------------|----------------|
| Norway      | 2 per 1,000      | 100%                 | 97%            |
| UK          | 4 per 1,000      | 100%                 | 95%            |
| China       | 6 per 1,000      | 95%                  | 73%            |
| India       | 27 per 1,000     | 93%                  | 46%            |
| Nigeria     | 72 per 1,000     | 77%                  | 36%            |
| Chad        | 69 per 1,000     | 48%                  | 11%            |

HDI Categories: Very High (0.8+), High (0.7-0.8), Medium (0.55-0.7), Low (<0.55)`,
    topics: ['Development', 'Globalisation', 'Quality of life'],
    concepts: ['Development indicators', 'HDI', 'Development gap', 'Uneven development'],
    skills: ['Data comparison', 'Correlation analysis', 'Evaluating indicators'],
    analysisPoints: [
      'Limitations of single indicators like GDP',
      'Composite measures (HDI) advantages',
      'Patterns in development',
      'Causes of uneven development'
    ]
  },
  {
    id: 'nigeria-development',
    type: 'case_study',
    title: 'Nigeria - NEE Development',
    source: 'World Bank / African Development Bank',
    year: 2023,
    content: `Nigeria - Newly Emerging Economy Case Study

Economic Overview:
| Indicator              | Value                |
|------------------------|----------------------|
| Population             | 223 million          |
| GDP                    | $477 billion         |
| GDP per capita         | $2,140               |
| GDP growth rate        | 3.1% (2023)          |
| Main exports           | Oil (90% of exports) |
| Largest city           | Lagos (15 million)   |

Industrial Structure Change:
| Sector        | % GDP 1990 | % GDP 2023 | Employment % |
|---------------|------------|------------|--------------|
| Agriculture   | 32%        | 24%        | 35%          |
| Industry      | 43%        | 26%        | 12%          |
| Services      | 25%        | 50%        | 53%          |

TNCs Operating in Nigeria:
- Shell (oil) - $15bn investment since 1937
- Unilever (consumer goods) - 5 factories, 1,500 employees
- MTN (telecommunications) - 76 million subscribers

Development Challenges:
| Challenge           | Statistics                    |
|--------------------|-------------------------------|
| Poverty rate       | 40% below poverty line        |
| Unemployment       | 33% (youth: 42%)              |
| Boko Haram conflict| 35,000+ deaths since 2009     |
| Oil dependency     | 90% of export earnings        |
| Corruption         | Ranked 150/180 globally       |`,
    topics: ['Development', 'NEE', 'Industry', 'Globalisation'],
    concepts: ['Economic development', 'TNCs', 'Oil dependency', 'Development challenges'],
    skills: ['Case study analysis', 'Evaluating development', 'Comparing strategies'],
    analysisPoints: [
      'Benefits and costs of TNC investment',
      'Problems of resource dependency',
      'Inequality within Nigeria',
      'Sustainable development challenges'
    ]
  }
];

// ============================================
// HELPER FUNCTIONS
// ============================================

export const allGeographyExtracts: GeographyExtract[] = [
  ...hazardsData,
  ...urbanData,
  ...physicalProcessesData,
  ...developmentData
];

/**
 * Find a random extract matching the given topic
 */
export function getRandomGeographyExtract(
  topicName: string,
  subtopic: string
): GeographyExtract | null {
  const keywords = [topicName, subtopic].map(k => k.toLowerCase());

  const matchingExtracts = allGeographyExtracts.filter(extract => {
    const allTags = [...extract.topics, ...extract.concepts].map(t => t.toLowerCase());
    return keywords.some(keyword =>
      allTags.some(tag => tag.includes(keyword) || keyword.includes(tag))
    );
  });

  if (matchingExtracts.length === 0) {
    const fallbackMatches = allGeographyExtracts.filter(extract => {
      const content = extract.content.toLowerCase();
      return keywords.some(k => content.includes(k));
    });

    if (fallbackMatches.length > 0) {
      return fallbackMatches[Math.floor(Math.random() * fallbackMatches.length)];
    }
    return null;
  }

  return matchingExtracts[Math.floor(Math.random() * matchingExtracts.length)];
}
