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
    featured:     true,
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

  // ── Add more stories here following the same structure ──
];
