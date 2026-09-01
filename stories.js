/**
 * BDS Case Story Book – North Central Region
 * stories.js – Central data store for all case stories
 *
 * To add a new story, append a new object to the STORIES array below.
 * Intervention names must match a key in INTERVENTIONS.
 */

/* ─── Intervention Catalogue ────────────────────────────────────────────── */
const INTERVENTIONS = {
  "Assistive Devices":        "Providing assistive devices to PWDs",
  "Capacity Building":        "Capacity building training/awareness sessions",
  "CSO Support":              "Financial support for CSO/Youth club actions",
  "Health Infrastructure":    "Health infrastructure development",
  "Business Development":     "Providing business development services to family-based livelihoods",
  "Livelihood Support":       "Material support for family-based livelihood development",
  "Livelihood Infrastructure":"Livelihood infrastructure development",
  "MenCare":                  "MenCare",
  "Mobile Camps":             "Mobile camps",
  "Water Connections":        "Financial support for obtaining NWSDB water connections",
  "House Renovation":         "Renovation of houses",
  "New House Construction":   "Construction of new houses",
  "School Infrastructure":    "Support school infrastructure development",
  "Toilet Construction":      "Construction of toilets",
  "Youth Skills Development": "Vocational/professional/soft skill development of youth",
  "Water Project Renovation": "Renovation of water projects",
  "Youth Enterprise Support": "Material support for youth enterprise development",
};

/* ─── Officer Profiles ───────────────────────────────────────────────────── */
const OFFICERS = [
  { id: "chandima",  name: "Chandima",  fullName: "Chandima Hettiarachchi", photo: "https://i.imgur.com/pLWRRxN.jpeg" },
  { id: "achala",    name: "Achala",    fullName: "Achala Weerasinghe",      photo: "https://i.imgur.com/2cvm5OS.jpeg"  },
  { id: "pasindu",   name: "Pasindu",   fullName: "Pasindu Dilshan",         photo: "https://i.imgur.com/lO33bSP.jpeg" },
  { id: "fayas",     name: "Fayas",     fullName: "Mohamed Fayas",           photo: "https://i.imgur.com/JKgcPDh.jpeg"   },
  { id: "priyanka",  name: "Priyanka",  fullName: "Jayakumar Priyanka",      photo: "https://i.imgur.com/imxbxu0.jpeg"},
  { id: "chathurya", name: "Chathurya", fullName: "Chathurya Thathsarani",   photo: "https://i.imgur.com/UTSl7oA.jpeg"},
];

/* ─── Stories Array ──────────────────────────────────────────────────────── */
const STORIES = [
  {
    id:           "CS001",
    title:        "A Safer Home for a Vulnerable Family",
    officer:      "Chandima",
    district:     "Kegalle",
    dsDivision:   "Dehiowita",
    gnDivision:   "Maniyangama",
    intervention: "House Renovation",
    beneficiary:  "Y.H. Vinitha Mallika",
    projectCost:  "LKR 725,000.00",          
    startDate:    "12/09/2025",          
    endDate:      "25/05/2026",          
    featured:     false,
    coverImage:   "assets/images/chandima_2.jpg",
    beforeImage:  "assets/images/chandima_1.jpg",
    afterImage:   "assets/images/chandima_2.jpg",

    summary: `Y.H. Vinitha Mallika lives in Maniyangama GN Division in Dehiowita DS Division of Kegalle District with her family. The household consists of four members, including her husband W. Jinadasa, their adult son, and their school-going daughter. The family faces multiple social and economic challenges, including low educational attainment, health and psychosocial difficulties, and limited engagement with the wider community.

The family had been living in a severely deteriorated two-room house. One room functioned as a kitchen while the entire family shared the remaining space for daily living and sleeping. The lack of adequate living space posed particular challenges for the safety, privacy, and wellbeing of their teenage daughter. Due to financial hardship and the advanced age of the household head, the family was unable to complete the unfinished sections of their house or undertake essential repairs.

Recognizing the family's vulnerability, Berendina Development Services provided support through a house renovation initiative. The intervention included the construction of a new living area and the renovation of the existing rooms, creating a safer, healthier, and more dignified living environment for all family members.`,

    outcomes: [
      "Improved safety and privacy for family members.",
      "Better living conditions and household wellbeing.",
      "Increased dignity and social inclusion.",
      "Enhanced protection for the school-going daughter.",
      "Improved housing resilience and sustainability.",
    ],

    timeline: [
      { phase: "Needs Assessment - 01.08.2025",      description: "Ms. Chandima (CDC) and Mr. Supun (RM) conducted a household assessment and identified the family's housing vulnerability." },
      { phase: "Project Approval - 05.09.2025",      description: "The case was reviewed and approved by BDS management for a house renovation intervention." },
      { phase: "Construction Begins - 12.09.2025",   description: "Construction of the new living area and renovation of existing rooms commenced." },
      { phase: "Completion & Handover - 26.05.2026", description: "The renovated house was handed over to the family, providing a safer and more dignified living space." },
    ],
  },

{
  id:           "CS002",
  title:        "A New Beginning Through Safe Housing",
  officer:      "Priyanka",
  district:     "Anuradhapura",
  dsDivision:   "Gambirigaswewa",
  gnDivision:   "Palugollewa",
  intervention: "New House Construction",
  beneficiary:  "A.N. Nalaka Aberathana",
  projectCost:  "LKR 1,137,400.00",
  bdsContribution: "LKR 815,250.92",
  startDate:    "07/12/2025",
  endDate:      "26/05/2026",
  featured:     false,

  coverImage:   "assets/images/priyanka_2.jpeg",
  beforeImage:  "assets/images/priyanka_1.jpeg",
  afterImage:   "assets/images/priyanka_2.jpeg",

  summary: `Mr. Aberathnage Nalaka Aberathana, aged 31, resides in Palugollewa Village of Gambirigaswewa Divisional Secretariat Division in Anuradhapura District together with his wife, Mrs. Liyana Arachchige Dona Nishadi Sandamali, aged 23, and their four-year-old daughter, Nethuli Wimansha Sathsarani.

The family faced significant economic and social challenges. Nalaka depended on irregular daily wage labor for income, while Nishadi worked in a garment factory despite experiencing health-related difficulties in order to support the family's basic needs. Their limited income was insufficient to improve their living conditions or invest in permanent housing.

Prior to the intervention, the family lived in a small clay-walled house consisting of only a single room. The structure had deteriorated significantly over time, with one wall partially collapsed and the roof leaking during rainy periods. During heavy rains, water entered the house, creating unsafe and unhealthy living conditions for the family, particularly for their young daughter. The family lacked the financial capacity to construct a new house or undertake major repairs.

Recognizing the family's vulnerability, Berendina Development Services supported the construction of a new permanent house under its housing assistance programme. The project was initially identified by Ms. Menaka Dissanayake, former Community Development Coordinator of Manupa DSD, and subsequently implemented with the support of BDS and the active participation of the beneficiary family.

The newly constructed house has provided the family with a safe, secure, and dignified living environment. The intervention has significantly improved their quality of life and created a stronger foundation for the wellbeing and future development of their child.`,

  outcomes: [
    "A safe and permanent house was constructed for the family.",
    "Housing-related risks caused by structural damage and roof leakages were eliminated.",
    "The family now enjoys improved safety, privacy, and dignity.",
    "The young child benefits from a healthier and more secure living environment.",
    "Reduced stress and anxiety associated with poor housing conditions.",
    "Improved resilience and long-term stability for the household.",
    "Enhanced family wellbeing and social inclusion within the community."
  ],

  timeline: [
    {
      phase: "Project Identification - 01.11.2025",
      description: "The family's housing need was identified by Menaka Dissanayake, former Community Development Coordinator of Manupa DSD, following a household assessment."
    },
    {
      phase: "Project Approval - 26.11.2025",
      description: "The proposed housing intervention was reviewed and approved by BDS management."
    },
    {
      phase: "Construction Commenced - 07.12.2025",
      description: "Construction of the new permanent house began with contributions from both BDS and the beneficiary family."
    },
    {
      phase: "Completion & Handover - 26.05.2026",
      description: "The completed house was formally handed over to the beneficiary family, providing a safe and secure home."
    }
  ],

  gallery: [
    "assets/images/priyanka_1.jpeg",
    "assets/images/priyanka_2.jpeg"
  ],
},

{
  id:           "CS003",
  title:        "A Concrete Path to Opportunity",
  officer:      "Achala",
  district:     "Kegalle",
  dsDivision:   "Bulathkohupitiya",
  gnDivision:   "Kendawa",
  intervention: "Livelihood Infrastructure",
  beneficiary:  "Kendawa Awamangalyadara Samithiya (Community Organization)",
  projectCost:  "LKR 997,603.53",
  bdsContribution: "LKR 748,103.53",
  startDate:    "01/04/2026",
  endDate:      "07/05/2026",
  featured:     false,

  coverImage:   "assets/images/kendawa_after.jpg",
  beforeImage:  "assets/images/kendawa_before.jpg",
  afterImage:   "assets/images/kendawa_after.jpg",

  summary: `The Kendawa Grama Niladhari Division in Bulathkohupitiya Divisional Secretariat Division, Kegalle District, is home to a close-knit farming community connected to the outside world by a single vital artery: the Pahala Kendawa Road. This rural access road links residents to the Bulathkohupitiya–Dedugala Main Road, serving roughly 35 households directly and more than 150 daily users, with over 200 additional people from neighboring villages such as Narangala, Maussawa, and Kendawa relying on it to reach schools, workplaces, hospitals, and markets.

For years, heavy vehicle traffic and the absence of proper maintenance had left the road badly deteriorated. Villagers faced difficult and unsafe daily travel, farmers transporting tea, rubber, coconut, and pepper struggled to reach the market in time, and an ornamental fish farm operating along the route saw its supply chain disrupted. School children faced unsafe journeys and frequent absenteeism during the rainy season, slippery and uneven surfaces caused repeated accidents, and emergency medical access was often delayed when it mattered most.

Recognizing both the urgency and the community's willingness to act, Berendina Development Services partnered with the Kendawa Awamangalyadara Samithiya to construct approximately 300 feet of reinforced concrete road, 8 feet wide, replacing the most severely damaged section. The project was built on a community-driven cost-sharing model: BDS contributed 75% of the total cost, while the community contributed the remaining 25% through skilled and unskilled labour, construction materials, and voluntary participation. Construction was overseen throughout by a BDS-appointed Technical Officer to ensure the work met technical standards and the agreed Bill of Quantities.

The result is a road transformed — smooth, durable, and accessible in every season. It withstands heavy rainfall without erosion, carries agricultural produce to market more reliably, and gives school children, elderly residents, and emergency vehicles safer, faster passage. Beyond the physical improvement, the project has strengthened the community's sense of ownership and collective capability, standing today as a model of what shared investment between an NGO and a determined community can achieve.`,

  outcomes: [
    "Safe, all-weather road access for approximately 35 households and 150+ daily users.",
    "Reduced transportation costs and travel time for over 200 residents from surrounding villages.",
    "Improved market access for tea, rubber, coconut, and pepper farmers, and the local ornamental fish farm.",
    "Safer daily travel for school children, reducing rainy-season absenteeism.",
    "Faster, more reliable access for emergency medical transport.",
    "Fewer accidents from slippery, uneven road surfaces.",
    "Strengthened community ownership through direct labour and resource contribution alongside BDS funding.",
  ],

  timeline: [
    { phase: "Needs Assessment - 08/01/2026",       description: "The deteriorated condition of Pahala Kendawa Road and its impact on the community was identified in partnership with the Kendawa Awamangalyadara Samithiya." },
    { phase: "Project Approval - 20/03/2026",       description: "The road development proposal, including the community cost-sharing plan, was reviewed and approved by BDS management." },
    { phase: "Construction Begins - 01/04/2026",    description: "Construction of the 300-foot reinforced concrete road commenced, with the community contributing labour and materials alongside BDS funding." },
    { phase: "Completion & Handover - 19/05/2026",  description: "The completed concrete road was handed over to the community, providing safe, all-weather access for residents, farmers, and students." },
  ],

  gallery: [
    "assets/images/kendawa_before.jpg",
    "assets/images/kendawa_after.jpg"
  ],
},

{
  id:           "CS004",
  title:        "A Safe Crossing for Mithragama",
  officer:      "Chandima",
  district:     "Kegalle",
  dsDivision:   "Dehiowita",
  gnDivision:   "Pannila",
  intervention: "Livelihood Infrastructure",
  beneficiary:  "Pannila Dharmagunawardhana Rural Development Society",
  projectCost:  "LKR 298,540.15",
  bdsContribution: "LKR 236,040.15",
  startDate:    "15/03/2026",
  endDate:      "02/06/2026",
  featured:     false,

  coverImage:   "assets/images/mithragama_bridge_after.jpg",
  beforeImage:  "assets/images/mithragama_bridge_before.jpg",
  afterImage:   "assets/images/mithragama_bridge_after.jpg",

  summary: `Mithragama is a small village within the Pannila Grama Niladhari Division of Dehiowita Divisional Secretariat, Kegalle District, roughly 26 kilometres from Dehiowita town. For years, the only way to cross the canal on a side road here was a footbridge built from Kithul planks — a structure that had been quietly rotting under the weight of daily use, with villagers replacing broken planks again and again just to keep it passable.

The bridge sits more than 15 feet above the canal below, and the danger was not hypothetical: one villager had already fallen through when the aging planks gave way. Around 8 families, close to 30 people, depend on this crossing every day, including 9 school children who cross it on their way to class. Tea pickers, landowners, daily wage workers, and residents attending to everyday needs all rely on the same fragile planks, and the risk only worsens in the rain, when the wood turns slick and unstable.

The community did not wait passively for help. The Pannila Dharmagunawardhana Rural Development Society — a trusted local group with a track record of building roads, bridges, and other welfare infrastructure in the area, and a long-standing training partner of Berendina Development Services — came forward on behalf of the villagers to request financial support for a permanent footbridge.

Berendina Development Services partnered with the Society to fund the construction of a safe, durable footbridge, with BDS covering the majority of the estimated cost and the community contributing the remainder. The new bridge means Mithragama's residents, especially its schoolchildren, can now cross the canal without fear, and farmers can carry their harvests to market without the danger and delay the old crossing once forced upon them.`,

  outcomes: [
    "Safe, reliable daily crossing for approximately 8 families and 30 residents.",
    "Removal of fall risk from a crossing point more than 15 feet above the canal.",
    "Safer daily travel for 9 school children on their way to and from class.",
    "Uninterrupted transport of harvested crops, including tea, to market.",
    "Reduced travel disruption during rainy weather.",
    "Strengthened trust and partnership between BDS and the Pannila Dharmagunawardhana Rural Development Society.",
    "A durable structure replacing a temporary, repeatedly-repaired plank bridge.",
  ],

  timeline: [
    { phase: "Needs Assessment - 23/06/2025",       description: "The unsafe condition of the Kithul-plank footbridge and its risk to villagers was identified following a request from the Pannila Dharmagunawardhana Rural Development Society." },
    { phase: "Project Approval - 03/05/2026",       description: "The footbridge construction proposal, including the community's financial contribution, was reviewed and approved by BDS management." },
    { phase: "Construction Begins - 15/03/2026",    description: "Construction of the permanent footbridge began, led by the Rural Development Society with BDS financial support." },
    { phase: "Completion & Handover - 02/06/2026",  description: "The completed footbridge was handed over to the Mithragama community, providing safe passage across the canal for residents, farmers, and schoolchildren." },
  ],

  gallery: [
    "assets/images/mithragama_bridge_before.jpg",
    "assets/images/mithragama_bridge_after.jpg"
  ],
},

{
  id:           "CS005",
  title:        "A Safe Bridge to Opportunity and Essential Services",
  officer:      "Achala",
  district:     "Kegalle",
  dsDivision:   "Bulathkohupitiya",
  gnDivision:   "Neluwakkana (131)",
  intervention: "Livelihood Infrastructure",
  beneficiary:  "Neluwakkana South Death Donation Society (Community Organization)",
  projectCost:  "LKR 592,046.17",
  bdsContribution: "LKR 436,046.17",
  startDate:    "01/04/2026",
  endDate:      "19/06/2026",
  featured:     false,

  coverImage:   "https://i.imgur.com/6zx7Iza.jpeg",
  beforeImage:  "https://i.imgur.com/KUThquq.jpeg",
  afterImage:   "https://i.imgur.com/6zx7Iza.jpeg",

  summary: `The Neluwakkana Grama Niladhari Division (131) in Bulathkohupitiya DS Division, Kegalle District, is a rural community of around 148 families, close to 650 people, whose daily lives depend on a single bridge crossing the Ritigaha Oya. The bridge offers a vital short route into the village, particularly during the rainy season when the main road is frequently cut off by flooding, making it an essential link for school children, farmers, government officials, and the wider community.

During the previous rainy season, a section of the bridge gave way. Villagers made do with a temporary repair, patching the broken section with wooden planks, but the structure continued to deteriorate. Its handrail was in poor condition throughout and entirely missing across the damaged section, creating serious safety risks, especially for the roughly 45 school children and 35 farmers who rely on the crossing during the rainy months.

The damage reached well beyond physical safety. Farmers transporting tea, pepper, cinnamon, coffee, and other produce struggled to reach market, while residents faced higher transport costs during bad weather just to reach schools, healthcare facilities, and government offices. Most critically, the bridge is the village's only route for emergency relief during floods, so its disrepair put the community's access to urgent assistance at risk in exactly the moments it was needed most.

Recognizing the importance of restoring this vital connection, Berendina Development Services partnered with the Neluwakkana South Death Donation Society to reconstruct the damaged bridge. The project followed a community-driven cost-sharing model, with the community contributing 26% of the cost through skilled and unskilled labour and construction materials, and BDS providing the remaining 74%. Construction quality and progress were supervised throughout by a BDS-appointed Technical Officer.

The reconstructed bridge, complete with durable handrails, now gives Neluwakkana's residents safe, reliable access throughout the year. It supports children's journeys to school, helps farmers move their harvests safely to market, restores access to essential services, and keeps the village connected to emergency relief during floods. The project stands as a clear example of what community participation and shared responsibility can achieve when paired with committed technical support.`,

  outcomes: [
    "Safe and reliable year-round access to the village for approximately 148 families.",
    "Improved safety for around 45 school children who cross the bridge during the rainy season.",
    "Better market access for farmers transporting tea, pepper, cinnamon, coffee, and other produce.",
    "Reduced transportation difficulties and costs during adverse weather.",
    "Improved access to schools, healthcare facilities, and government offices.",
    "A structurally safer crossing with durable, previously-missing handrails.",
    "Continued village access during floods, supporting the delivery of emergency relief.",
    "Strengthened community ownership through skilled and unskilled labour contributions.",
  ],

  timeline: [
    { phase: "Needs Assessment - 08/01/2026",       description: "The damaged condition of the bridge across the Neluwakkana Ritigaha Oya and its impact on the community was identified, and the project proposal was submitted to BDS." },
    { phase: "Project Approval - 20/03/2026",       description: "A technical assessment was obtained through the Divisional Secretariat and the reconstruction proposal, including the community's cost-sharing contribution, was reviewed and approved by BDS management." },
    { phase: "Construction Begins - 01/04/2026",    description: "Reconstruction of the bridge commenced, with the community contributing labour and materials through Shramadhana activities alongside BDS funding and technical supervision." },
    { phase: "Completion & Handover - 23/06/2026",  description: "The reconstructed bridge was completed and handed over to the community, with continued maintenance and follow-up by the CBO and BDS." },
  ],

  gallery: [
    "https://i.imgur.com/KUThquq.jpeg",
    "https://i.imgur.com/6zx7Iza.jpeg"
  ],
},


{
    id:           "CS006",
    title:        "From Mud Tracks to Market: Paving the Way for Honalagala",
    officer:      "Chandima",     
    district:     "Kegalle",
    dsDivision:   "Dehiowita",
    gnDivision:   "Imbulpitiya",
    intervention: "Livelihood Infrastructure",
    beneficiary:  "Honalagala Arabekkanda Anyonyadara Society",
    projectCost:  "LKR 2,241,320.10",
    startDate:    "15/12/2024",
    endDate:      "26/02/2026",
    featured:     true,
    coverImage:   "https://i.imgur.com/BlOwtHz.jpeg",   
    beforeImage:  "https://i.imgur.com/viHIqFy.jpeg", 
    afterImage:   "https://i.imgur.com/BlOwtHz.jpeg", 
 
    summary: `Honalagala is a quiet farming village tucked within Imbulpitiya Grama Niladhari Division, one of the targeted areas for BDS project implementation in Dehiowita Divisional Secretariat, Kegalle District. Around 350 people from 75 families call it home — families who grow tea, rubber, cinnamon, and other crops, and whose children walk to school each morning along the same road that connects the village to the outside world.
 
That road — a 4-kilometre stretch linking Honalagala to the Manikkanda bus halt on the Imbulpitiya–Parakaduwa main road — had long been the community's single lifeline and its greatest burden. Shared by residents of Honalagala and Arabekkanda, as well as neighboring villagers who travel through for daily wage work, temple visits, and plantation activities, the road carried far more traffic than its condition could sustain. Heavy use without proper maintenance had left much of it deeply rutted and unstable. Vehicles that risked the route charged premium transport rates to offset the wear on their tyres and suspensions, and many simply refused to enter at all.
 
The consequences reached into every corner of daily life. Farmers who grow tea — the village's primary source of income — faced the indignity of carrying their harvests on their heads to meet collection vehicles at the road's edge, because the tea leaves lorries could barely navigate even the passable sections. Rubber tappers, cinnamon growers, and other crop farmers shared the same struggle. For the nearly 40 school children who walked this road each day, it was not just an inconvenience — uneven, waterlogged surfaces made the journey genuinely unsafe, with the risk rising sharply during the rainy season. Patients needing emergency transport and residents attending to everyday needs faced similar dangers. Despite repeated appeals to relevant government institutions, no meaningful intervention had followed.
 
It was the Honalagala Arabekkanda Anyonyadara Society — the community's own organized body — that took the next step, formally requesting support from Berendina Development Services to address what no institution had been willing to tackle. BDS responded by funding the concreting of the road's most damaged sections, working in two phases to ensure the work met the community's most critical needs.
 
The first phase, completed between December 2024 and January 2025, concreted a 390-foot stretch, 8 feet wide, from the area near the Cinnamon Gate to Wathuragala, at a total project cost of LKR 1,241,500.00 — of which BDS contributed LKR 936,500.00 and the community contributed LKR 305,000.00. The second phase, completed between December 2025 and February 2026, extended the work by a further 246 feet from Wathuragala onwards, at a project cost of LKR 999,820.10, with BDS contributing LKR 735,720.10 and the community contributing LKR 264,100.00. Together, the two phases transformed the road's most critical bottlenecks into smooth, durable concrete surfaces that hold firm in all seasons.
 
Where mud and uncertainty once marked the daily commute, Honalagala's residents now walk and drive on solid ground — and the difference is felt in every bag of tea that reaches the collection vehicle on time, in every school child who arrives safely, and in every family that no longer fears what the next rainy season will bring.`,
 
    outcomes: [
      "Safe, all-weather road access for approximately 350 residents across 75 families, including neighboring village users.",
      "Reduced transportation costs and travel time for over 400 people who rely on the road daily.",
      "Improved market access for tea, rubber, cinnamon, and other crop farmers — with harvests now reachable by collection vehicles.",
      "Safer daily travel for nearly 40 school children, significantly reducing rainy-season risk.",
      "Reliable access for patients and emergency transport during adverse weather.",
      "Reduced vehicle reluctance, leading to improved transport availability and fairer pricing.",
      "Strengthened community agency through formal advocacy and active cost-sharing with BDS.",
    ],
 
    timeline: [
      {
        phase:       "Stage 1 – Project Identified: 01/08/2024",
        description: "The community's road development need was formally identified. The Honalagala Arabekkanda Anyonyadara Society submitted a request to BDS to concrete the most severely damaged sections of the Honalagala road, from the Cinnamon Gate area to Wathuragala.",
      },
      {
        phase:       "Stage 1 – Project Approved: 24/11/2024",
        description: "BDS management reviewed and approved the first-phase proposal. Total estimated project cost: LKR 1,241,500.00 | Community contribution: LKR 305,000.00 | BDS contribution: LKR 936,500.00.",
      },
      {
        phase:       "Stage 1 – Construction: 15/12/2024 – 16/01/2025",
        description: "Concreting of the first section commenced and was completed — 390 feet in length and 8 feet in width, from near the Cinnamon Gate to Wathuragala — providing an immediate improvement to the road's most critical stretch.",
      },
      {
        phase:       "Stage 2 – Project Identified: 10/11/2025",
        description: "Building on the success of the first phase, the community and BDS identified the next most-damaged section — from Wathuragala onwards — for a second round of road development.",
      },
      {
        phase:       "Stage 2 – Project Approved: 26/11/2025",
        description: "The second-phase proposal was reviewed and approved by BDS management. Total estimated project cost: LKR 999,820.10 | Community contribution: LKR 264,100.00 | BDS contribution: LKR 735,720.10.",
      },
      {
        phase:       "Stage 2 – Construction: 01/12/2025 – 26/02/2026",
        description: "The second phase of concreting was carried out and completed — 246 feet in length and 8 feet in width, extending the improved road from Wathuragala onwards — bringing the total concreted distance to 636 feet across both phases.",
      },
    ],
 
    gallery: [
      "https://i.imgur.com/viHIqFy.jpeg",   // Replace with actual images
      "https://i.imgur.com/BlOwtHz.jpeg",
    ],
  },
  
]
//Add here
;
