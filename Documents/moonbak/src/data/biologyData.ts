import type {
  SyllabusChapterNode,
  SprintBlockItem,
  TopicResourceData,
  GraduatedQuestionItem
} from '../types/neetOS';

export const BIOLOGY_CHAPTERS: SyllabusChapterNode[] = [
  {
    id: 'bio_ch1',
    title: 'Diversity in Living World & Biological Classification',
    classLevel: '11',
    category: 'Botany',
    topics: [
      { id: 'bio_taxonomy', title: 'Taxonomic Hierarchy & Five Kingdom Classification', summary: 'Binomial nomenclature, Whittaker 5 kingdoms, Monera, Protista, Fungi characteristics.' }
    ]
  },
  {
    id: 'bio_ch2',
    title: 'Plant Kingdom & Animal Kingdom',
    classLevel: '11',
    category: 'Botany',
    topics: [
      { id: 'bio_plant_kingdom', title: 'Algae, Bryophytes, Pteridophytes, Gymnosperms & Angiosperms', summary: 'Alternation of generations, double fertilization in angiosperms, seed habit origin.' },
      { id: 'bio_animal_phyla', title: 'Non-Chordates & Chordates Phyla Classification', summary: 'Coelom, symmetry, germ layers, key diagnostic features from Porifera to Mammalia.' }
    ]
  },
  {
    id: 'bio_ch3',
    title: 'Cell: Structure & Functions & Biomolecules',
    classLevel: '11',
    category: 'Zoology',
    topics: [
      { id: 'bio_cell_organelles', title: 'Prokaryotic vs Eukaryotic Cell Organelles', summary: 'Endomembrane system, mitochondria, plastids, ribosome 70S vs 80S, cytoskeleton.' },
      { id: 'bio_cell_cycle', title: 'Mitosis, Meiosis & Cell Cycle Phases', summary: 'G1, S, G2 phases, crossing over in Pachytene, homologous chromosome segregation.' },
      { id: 'bio_biomolecules', title: 'Proteins, Carbohydrates, Lipids & Enzymes', summary: 'Peptide and glycosidic bonds, enzyme activation energy, competitive inhibition.' }
    ]
  },
  {
    id: 'bio_ch4',
    title: 'Plant Physiology',
    classLevel: '11',
    category: 'Botany',
    topics: [
      { id: 'bio_photosynthesis', title: 'Photosynthesis: Light Reactions & Calvin Cycle (C3/C4)', summary: 'NCERT diagram labels: Z-scheme, RuBisCO dual activity, Kranz anatomy in C4 plants.' },
      { id: 'bio_respiration_plant', title: 'Glycolysis, Krebs Cycle & Electron Transport System', summary: 'ATP yield, amphibolic pathway, respiratory quotient (RQ) values for substrates.' },
      { id: 'bio_plant_growth', title: 'Plant Growth Regulators & Photoperiodism', summary: 'Auxins, Gibberellins, Cytokinins, ABA, Ethylene, Vernalization.' }
    ]
  },
  {
    id: 'bio_ch5',
    title: 'Human Physiology',
    classLevel: '11',
    category: 'Zoology',
    topics: [
      { id: 'bio_digestion_breathing', title: 'Breathing, Respiration & Gas Transport', summary: 'Inspiration/expiration mechanism, oxygen dissociation curve, Haldane & Bohr effects.' },
      { id: 'bio_circulation_excretion', title: 'Circulatory System, Cardiac Cycle & Excretion', summary: 'ECG waves, counter-current mechanism in Henle loop, renin-angiotensin system (RAAS).' },
      { id: 'bio_neural_endocrine', title: 'Neural Control & Endocrine Regulation', summary: 'Action potential generation, impulse conduction across synapse, hormone feedback mechanisms.' }
    ]
  },
  {
    id: 'bio_ch6',
    title: 'Reproduction in Organisms & Humans',
    classLevel: '12',
    category: 'Zoology',
    topics: [
      { id: 'bio_flower_repro', title: 'Sexual Reproduction in Flowering Plants', summary: 'Microsporogenesis, megasporogenesis, embryo sac development, apomixis.' },
      { id: 'bio_human_repro', title: 'Gametogenesis, Menstrual Cycle & Embryonic Development', summary: 'Spermatogenesis vs Oogenesis, LH surge, implantation, placenta hormones.' }
    ]
  },
  {
    id: 'bio_ch7',
    title: 'Genetics & Molecular Basis of Inheritance',
    classLevel: '12',
    category: 'Zoology',
    topics: [
      { id: 'bio_mendelian', title: 'Mendelian Genetics & Inheritance Patterns', summary: 'Monohybrid (3:1), Dihybrid (9:3:3:1), incomplete dominance, codominance, pedigree analysis.' },
      { id: 'bio_molecular_inheritance', title: 'DNA Structure, Replication, Transcription & Operon', summary: 'Hershey-Chase experiment, semi-conservative replication, Lac Operon regulation.' }
    ]
  },
  {
    id: 'bio_ch8',
    title: 'Evolution & Human Health',
    classLevel: '12',
    category: 'Zoology',
    topics: [
      { id: 'bio_evolution', title: 'Darwinism, Homology/Analogy & Hardy-Weinberg', summary: 'Adaptive radiation, homologous vs analogous organs, p^2 + 2pq + q^2 = 1.' },
      { id: 'bio_human_health', title: 'Immunity, Common Pathogens & Cancer/AIDS', summary: 'Active vs passive immunity, humoral vs cell-mediated immunity, life cycle of Plasmodium.' }
    ]
  },
  {
    id: 'bio_ch9',
    title: 'Biotechnology: Principles & Applications',
    classLevel: '12',
    category: 'Botany',
    topics: [
      { id: 'bio_biotech_principles', title: 'Restriction Enzymes, Recombinant DNA & PCR', summary: 'EcoRI recognition site GAATTC, agarose gel electrophoresis, PCR denaturation/annealing/extension.' },
      { id: 'bio_biotech_apps', title: 'Bt Cotton, RNA Interference & Gene Therapy', summary: 'Cry proteins, meloidogyne incognita silencing via RNAi, ADA deficiency treatment.' }
    ]
  },
  {
    id: 'bio_ch10',
    title: 'Ecology & Environment',
    classLevel: '12',
    category: 'Botany',
    topics: [
      { id: 'bio_population_ecology', title: 'Organisms & Population Growth Curves', summary: 'Exponential growth (dN/dt = rN), Logistic growth (dN/dt = rN((K-N)/K)), age pyramids.' },
      { id: 'bio_ecosystem_biodiversity', title: 'Ecosystem Pyramids & Biodiversity Conservation', summary: 'Energy flow 10% law, ecological pyramids, in-situ vs ex-situ conservation.' }
    ]
  }
];

export const BIOLOGY_SPRINT_BLOCKS: SprintBlockItem[] = [
  {
    id: 'sprint_bio_1',
    subject: 'Biology',
    chapter: 'Cell: Structure & Functions & Biomolecules',
    topic: 'Mitosis, Meiosis & Cell Cycle Phases',
    topicId: 'bio_cell_cycle',
    title: 'Meiosis Sub-Stages & Crossing Over Mechanics',
    blockType: 'Biology',
    prompt: 'Name the 5 sub-stages of Prophase I in Meiosis and specify when synapsis, crossing over, and chiasmata dissolution occur.',
    revealedAnswer: {
      summary: 'Prophase I of Meiosis is divided into 5 sequential sub-stages based on chromosomal behavior.',
      formulasOrKeyFacts: [
        '1. Leptotene: Chromosomes become gradually visible under light microscope.',
        '2. Zygotene: Homologous chromosomes pair up (SYNAPSIS) forming synaptonemal complex.',
        '3. Pachytene: CROSSING OVER occurs between non-sister chromatids, mediated by RECOMBINASE enzyme.',
        '4. Diplotene: Dissolution of synaptonemal complex; Chiasmata (X-shaped structures) become visible.',
        '5. Diakinesis: Terminalisation of chiasmata; nucleolus disappears and nuclear envelope breaks down.'
      ],
      operationalConditionsOrExceptions: [
        'In oocytes of some vertebrates, Diplotene can last for months or years (Dictyotene stage).'
      ],
      highYieldTraps: [
        'TRAP: Crossing over occurs between NON-SISTER chromatids of HOMOLOGOUS chromosomes (NOT sister chromatids).'
      ]
    }
  },
  {
    id: 'sprint_bio_2',
    subject: 'Biology',
    chapter: 'Plant Physiology',
    topic: 'Photosynthesis: Light Reactions & Calvin Cycle (C3/C4)',
    topicId: 'bio_photosynthesis',
    title: 'C3 vs C4 Photosynthetic Pathways Comparison',
    blockType: 'Biology',
    prompt: 'Compare C3 vs C4 plants regarding primary CO2 acceptor, first stable product, and Kranz anatomy.',
    revealedAnswer: {
      summary: 'C4 plants have evolved Kranz anatomy to avoid photorespiration under high light and temperature.',
      formulasOrKeyFacts: [
        'C3 Plants: Primary acceptor = RuBP (5-C); First product = 3-PGA (3-C); Primary enzyme = RuBisCO.',
        'C4 Plants: Primary acceptor in Mesophyll = PEP (3-C); First product = OAA (4-C); Primary enzyme = PEPcase.',
        'Kranz Anatomy: Present in C4 plants. Large bundle sheath cells surrounding vascular bundles with large Agranal Chloroplasts.',
        'Photorespiration (C2 Cycle): Occurs in C3 plants when RuBisCO binds O2 instead of CO2, wasting ATP.'
      ],
      operationalConditionsOrExceptions: [
        'C4 plants lack photorespiration and show higher temperature optimum and greater water use efficiency.'
      ],
      highYieldTraps: [
        'TRAP: Mesophyll cells of C4 plants LACK RuBisCO! RuBisCO is localized ONLY in Bundle Sheath cells of C4 plants.'
      ]
    }
  }
];

export const BIOLOGY_RESOURCE_DATA: TopicResourceData[] = [
  {
    topicId: 'bio_cell_cycle',
    topicTitle: 'Mitosis, Meiosis & Cell Cycle Phases',
    chapterTitle: 'Cell: Structure & Functions & Biomolecules',
    subject: 'Biology',
    detailedNCERTNotes: 'The cell cycle consists of Interphase (G1, S, G2 phases) and M-phase. DNA replication occurs exclusively during S-phase. Meiosis involves two rounds of division resulting in four haploid gametes. Recombination in Pachytene increases genetic diversity.',
    revisionShortNotes: '• G1 phase: Cell grows, protein synthesis.\n• S phase: DNA replication (amount doubles 2C -> 4C, chromosome number remains 2n).\n• G2 phase: Organelle duplication.\n• Prophase I sub-stages: Leptotene, Zygotene, Pachytene, Diplotene, Diakinesis.',
    conceptualWhyHowBreakdowns: 'NCERT Diagram Model: S-phase duplicates DNA content (2C -> 4C) but centriole duplicates in cytoplasm while chromosome number stays 2n. Crossing over in Pachytene swaps non-sister chromatid segments creating recombinant chromatids.',
    topperTricksShortcutBank: [
      'Mnemonic for Prophase I sub-stages: Lazy Zebras Paint Double Diamonds (Leptotene, Zygotene, Pachytene, Diplotene, Diakinesis).',
      'DNA Content vs Chromosome Count: S-phase doubles DNA (2C -> 4C) but chromosome count remains 2n.'
    ],
    detailedNotes: 'The cell cycle consists of Interphase (G1, S, G2) and M-phase.',
    shortNotes: 'G1 -> S (DNA doubles) -> G2 -> M phase.',
    formulaBank: [],
    ncertFacts: [
      'DNA replication occurs exclusively during S phase in the nucleus.',
      'Crossing over occurs in Pachytene mediated by recombinase.'
    ],
    commonMistakes: [
      'Assuming chromosome count doubles during S-phase (only DNA content 2C -> 4C doubles).'
    ],
    flashcards: [
      { id: 'fc_b1', question: 'In which sub-stage of Prophase I does synapsis occur?', answer: 'Zygotene (forming synaptonemal complex).' }
    ]
  }
];

export const BIOLOGY_QUESTION_BANK: GraduatedQuestionItem[] = [
  {
    id: 'q_bio_e1',
    subject: 'Biology',
    chapter: 'Cell: Structure & Functions & Biomolecules',
    topic: 'Prokaryotic vs Eukaryotic Cell Organelles',
    topicId: 'bio_cell_organelles',
    questionText: 'Which organelle is known as the "Powerhouse of the Cell" and contains its own 70S ribosomes and circular DNA?',
    options: ['Lysosome', 'Mitochondria', 'Golgi Apparatus', 'Endoplasmic Reticulum'],
    correctOptionIndex: 1,
    explanation: 'Mitochondria produce ATP via oxidative phosphorylation and possess prokaryotic-like circular DNA and 70S ribosomes.',
    solverAlgorithm: {
      standardMethod: 'Identify semi-autonomous organelles containing circular DNA and 70S ribosomes: Mitochondria and Chloroplasts.',
      topperShortcut: 'Powerhouse + 70S Ribosomes + Circular DNA = Mitochondria.',
      commonTrapWarning: 'Do not confuse 70S organellar ribosomes with eukaryotic cytosolic 80S ribosomes.'
    },
    topperTrick: 'Semi-autonomous organelles = Mitochondria & Chloroplasts (70S + circular DNA).',
    commonTrap: 'Confusing 70S organellar ribosomes with cytosolic 80S ribosomes.',
    difficultyScore: 10,
    category: 'EASY',
    ncertPageRef: 'NCERT Class 11 Biology, Page 135',
    difficulty: '0-20',
    questionType: 'MCQ',
    source: 'NCERT'
  },
  {
    id: 'q_bio_cyq1',
    subject: 'Biology',
    chapter: 'Plant Physiology',
    topic: 'Photosynthesis: Light Reactions & Calvin Cycle (C3/C4)',
    topicId: 'bio_photosynthesis',
    questionText: 'Statement I: In C4 plants, mesophyll cells contain PEPcase but lack RuBisCO.\nStatement II: Bundle sheath cells of C4 plants contain RuBisCO and perform the Calvin cycle, producing glucose.',
    options: [
      'Both Statement I and Statement II are correct',
      'Both Statement I and Statement II are incorrect',
      'Statement I is correct but Statement II is incorrect',
      'Statement I is incorrect but Statement II is correct'
    ],
    correctOptionIndex: 0,
    explanation: 'In C4 plants, spatial separation occurs: initial CO2 fixation takes place in mesophyll cells via PEPcase (no RuBisCO), and final Calvin cycle occurs in bundle sheath cells via RuBisCO.',
    solverAlgorithm: {
      standardMethod: 'Check Statement I: Mesophyll cells fix CO2 via PEPcase and lack RuBisCO -> Correct. Check Statement II: Bundle sheath cells contain RuBisCO and carry out Calvin cycle -> Correct.',
      topperShortcut: 'C4 Spatial Division: Mesophyll = PEPcase (no RuBisCO). Bundle Sheath = RuBisCO + Calvin cycle. Both statements true!',
      commonTrapWarning: 'Do not assume RuBisCO is present in all photosynthetic mesophyll cells.'
    },
    topperTrick: 'Mesophyll = PEPcase. Bundle Sheath = RuBisCO + Calvin cycle.',
    commonTrap: 'Assuming RuBisCO is present in C4 mesophyll cells.',
    difficultyScore: 65,
    category: 'CYQ',
    ncertPageRef: 'NCERT Class 11 Biology, Page 218',
    difficulty: '50+',
    questionType: 'Statement-based',
    source: 'NCERT'
  }
];
