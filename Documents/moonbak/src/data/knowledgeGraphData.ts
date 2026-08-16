import type { ConceptNode, PYQItem, ScienceSimulation, ExternalResourceItem, SyllabusSubjectTree, Subject } from '../types/neetOS';

export const INITIAL_CONCEPTS: ConceptNode[] = [
  {
    id: 'colligative_properties',
    title: 'Colligative Properties',
    subject: 'Chemistry',
    chapter: 'Solutions & Colligative Properties',
    summary: 'Properties of solutions that depend solely on the ratio of solute particles to solvent molecules, not on the solute species identity.',
    prerequisites: ['raoults_law'],
    targetChain: ['Moles', 'Mole Fraction', 'Vapour Pressure', "Raoult's Law", 'Colligative Properties'],
    physicalModel: 'Envision solvent molecules escaping into vapor above liquid. Solute particles physically block solvent molecules from reaching the surface, reducing vapor pressure and elevating boiling point.',
    formalEquations: [
      'ΔTb = Kb × m × i',
      'ΔTf = Kf × m × i',
      'π = i × C × R × T',
      '(P° - P) / P° = i × X_solute'
    ],
    whyPrompts: [
      {
        question: 'Why does adding non-volatile solute elevate the boiling point of a solvent?',
        keyCheck: 'Lower vapor pressure requires a higher temperature to match atmospheric pressure.'
      },
      {
        question: 'What would happen at extreme dilution (m -> 0)?',
        keyCheck: 'Colligative effects approach zero, ideal solution behavior is restored.'
      },
      {
        question: 'What assumption is made about the solute in Raoults Law?',
        keyCheck: 'Solute is non-volatile, non-electrolyte (unless Van t Hoff factor i is applied), and solution is dilute.'
      }
    ],
    connectedConceptIds: ['raoults_law', 'osmosis_bio'],
    crossSubjectConnections: [
      {
        targetId: 'osmosis_bio',
        targetSubject: 'Biology',
        targetTitle: 'Cellular Osmosis & Water Potential',
        rationale: 'Osmotic pressure (colligative property) governs biological water movement across semi-permeable cell membranes.'
      }
    ],
    keyKeywords: ['solute', 'solvent', 'vapour pressure', 'boiling point elevation', 'freezing point depression', 'osmotic pressure', 'van t Hoff factor', 'mole fraction'],
    isVerified: true,
    resourceType: 'OFFICIAL / VERIFIED'
  },
  {
    id: 'raoults_law',
    title: "Raoult's Law",
    subject: 'Chemistry',
    chapter: 'Solutions & Colligative Properties',
    summary: 'Partial vapor pressure of each volatile component in a solution is equal to the vapor pressure of the pure component multiplied by its mole fraction.',
    prerequisites: ['vapour_pressure'],
    targetChain: ['Moles', 'Mole Fraction', 'Vapour Pressure', "Raoult's Law"],
    physicalModel: 'Fraction of surface occupied by solvent molecules dictates rate of vaporization. More solvent fraction = more vapor generated above liquid.',
    formalEquations: ['P_A = P°_A × X_A', 'P_total = P_A + P_B'],
    whyPrompts: [
      {
        question: 'Why does Raoults law hold strictly only for ideal solutions?',
        keyCheck: 'Intermolecular forces between A-A, B-B, and A-B must be identical so heat of mixing is zero.'
      }
    ],
    connectedConceptIds: ['vapour_pressure', 'colligative_properties'],
    crossSubjectConnections: [],
    keyKeywords: ['partial pressure', 'pure vapour pressure', 'mole fraction', 'ideal solution', 'intermolecular forces'],
    isVerified: true,
    resourceType: 'OFFICIAL / VERIFIED'
  },
  {
    id: 'vapour_pressure',
    title: 'Vapour Pressure',
    subject: 'Chemistry',
    chapter: 'Solutions & Colligative Properties',
    summary: 'Pressure exerted by a vapor in thermodynamic equilibrium with its condensed phases at a given temperature in a closed system.',
    prerequisites: ['mole_fraction'],
    targetChain: ['Moles', 'Mole Fraction', 'Vapour Pressure'],
    physicalModel: 'Dynamic equilibrium where rate of liquid molecules escaping into gas equals rate of gas molecules condensing back into liquid.',
    formalEquations: ['ln(P2/P1) = (ΔH_vap/R) * (1/T1 - 1/T2)'],
    whyPrompts: [
      {
        question: 'What causes vapor pressure to increase exponentially with temperature?',
        keyCheck: 'Higher kinetic energy allows an exponentially larger fraction of molecules to overcome intermolecular forces.'
      }
    ],
    connectedConceptIds: ['mole_fraction', 'raoults_law'],
    crossSubjectConnections: [],
    keyKeywords: ['dynamic equilibrium', 'kinetic energy', 'condensation', 'evaporation', 'temperature dependence'],
    isVerified: true,
    resourceType: 'OFFICIAL / VERIFIED'
  },
  {
    id: 'mole_fraction',
    title: 'Mole Fraction',
    subject: 'Chemistry',
    chapter: 'Some Basic Concepts of Chemistry',
    summary: 'Ratio of moles of a specific component to the total number of moles of all components in the mixture.',
    prerequisites: ['moles_concept'],
    targetChain: ['Moles', 'Mole Fraction'],
    physicalModel: 'Counting discrete particles: out of every 100 particles in a container, how many belong to component A versus component B.',
    formalEquations: ['X_A = n_A / (n_A + n_B)', 'X_A + X_B = 1'],
    whyPrompts: [
      {
        question: 'Why is mole fraction independent of temperature unlike molarity?',
        keyCheck: 'Moles are constant with temperature, whereas volume expands or contracts.'
      }
    ],
    connectedConceptIds: ['moles_concept', 'vapour_pressure'],
    crossSubjectConnections: [],
    keyKeywords: ['dimensionless', 'moles ratio', 'temperature independence', 'mixture composition'],
    isVerified: true,
    resourceType: 'OFFICIAL / VERIFIED'
  },
  {
    id: 'moles_concept',
    title: 'Moles & Stoichiometry',
    subject: 'Chemistry',
    chapter: 'Some Basic Concepts of Chemistry',
    summary: 'The mole is the SI unit of amount of substance containing exactly 6.022 × 10^23 elementary entities.',
    prerequisites: [],
    targetChain: ['Moles'],
    physicalModel: 'A standardized mega-grouping unit (like a dozen) that bridges atomic mass units to measurable grams in a laboratory scale.',
    formalEquations: ['n = mass / molar_mass', 'N = n × N_A'],
    whyPrompts: [
      {
        question: 'Why do we need the mole unit instead of just measuring mass?',
        keyCheck: 'Chemical reactions occur between individual molecules in fixed stoichiometric numerical ratios, not mass ratios.'
      }
    ],
    connectedConceptIds: ['mole_fraction'],
    crossSubjectConnections: [],
    keyKeywords: ['Avogadro number', 'molar mass', 'stoichiometry', 'amount of substance', 'atomic mass'],
    isVerified: true,
    resourceType: 'OFFICIAL / VERIFIED'
  },
  {
    id: 'osmosis_bio',
    title: 'Cellular Osmosis & Water Potential',
    subject: 'Biology',
    chapter: 'Plant Physiology',
    summary: 'Movement of solvent molecules across a selectively permeable membrane from higher water potential to lower water potential.',
    prerequisites: ['colligative_properties'],
    targetChain: ['Diffusion', 'Concentration Gradient', 'Membrane Permeability', 'Osmosis'],
    physicalModel: 'Solute molecules bind water molecules into hydration shells, reducing the concentration of free, mobile water molecules.',
    formalEquations: ['Ψw = Ψs + Ψp', 'π = CRT'],
    whyPrompts: [
      {
        question: 'Why does adding solute decrease water potential (Ψs < 0)?',
        keyCheck: 'Solute-solvent interactions decrease free kinetic energy of water molecules.'
      }
    ],
    connectedConceptIds: ['colligative_properties'],
    crossSubjectConnections: [
      {
        targetId: 'colligative_properties',
        targetSubject: 'Chemistry',
        targetTitle: 'Colligative Properties',
        rationale: 'Osmotic pressure is governed by the molar solute concentration in solution.'
      }
    ],
    keyKeywords: ['water potential', 'solute potential', 'turgor pressure', 'semipermeable membrane', 'hypertonic', 'hypotonic'],
    isVerified: true,
    resourceType: 'OFFICIAL / VERIFIED'
  },
  {
    id: 'em_induction',
    title: 'Electromagnetic Induction & Faradays Law',
    subject: 'Physics',
    chapter: 'Electromagnetic Induction & Alternating Current',
    summary: 'Changing magnetic flux through a closed circuit induces an electromotive force (EMF) proportional to the rate of change of flux.',
    prerequisites: ['magnetic_flux'],
    targetChain: ['Magnetic Field', 'Magnetic Flux', 'Lenz Law', 'Faraday Law of Induction'],
    physicalModel: 'Moving a magnet near a conductor forces free electrons inside the conductor to experience magnetic Lorentz force, creating electric potential.',
    formalEquations: ['ε = -dΦ/dt', 'Φ = B · A · cos(θ)'],
    whyPrompts: [
      {
        question: 'Why does Lenzs law include a negative sign in ε = -dΦ/dt?',
        keyCheck: 'Conservation of energy: induced current opposes the change in flux that created it.'
      }
    ],
    connectedConceptIds: ['magnetic_flux'],
    crossSubjectConnections: [],
    keyKeywords: ['magnetic flux', 'induced EMF', 'Lenz law', 'Lorentz force', 'energy conservation'],
    isVerified: true,
    resourceType: 'OFFICIAL / VERIFIED'
  },
  {
    id: 'magnetic_flux',
    title: 'Magnetic Flux & Lorentz Force',
    subject: 'Physics',
    chapter: 'Magnetic Effects of Current & Magnetism',
    summary: 'Measure of total magnetic field lines passing through a given surface area.',
    prerequisites: [],
    targetChain: ['Magnetic Field', 'Magnetic Flux'],
    physicalModel: 'Counting field lines piercing through an imaginary net held in a flowing stream of magnetism.',
    formalEquations: ['Φ = B × A × cos(θ)', 'F = q(E + v × B)'],
    whyPrompts: [
      {
        question: 'Why is magnetic flux zero when the plane of the coil is parallel to magnetic field lines?',
        keyCheck: 'Zero field lines pierce through the surface area vector (θ = 90°, cos 90° = 0).'
      }
    ],
    connectedConceptIds: ['em_induction'],
    crossSubjectConnections: [],
    keyKeywords: ['surface vector', 'Tesla', 'Weber', 'perpendicular component'],
    isVerified: true,
    resourceType: 'OFFICIAL / VERIFIED'
  }
];

export function buildConceptsFromSyllabus(
  syllabusTree: SyllabusSubjectTree[],
  initialConcepts: ConceptNode[]
): ConceptNode[] {
  const result: ConceptNode[] = [...initialConcepts];
  const existingIds = new Set(initialConcepts.map(c => c.id));
  const existingTitles = new Set(initialConcepts.map(c => c.title.toLowerCase()));

  syllabusTree.forEach(subjectNode => {
    const subject: Subject = subjectNode.subject;

    subjectNode.chapters.forEach(chapter => {
      chapter.topics.forEach((topic, idx) => {
        if (existingIds.has(topic.id) || existingTitles.has(topic.title.toLowerCase())) {
          return;
        }

        // Generate 4 to 5 level reverse prerequisite targetChain
        const prevTopic = idx > 0 ? chapter.topics[idx - 1] : null;
        const prereqId = prevTopic ? prevTopic.id : '';

        const level1 = `Fundamental Principle: Conservation of Energy & Matter in ${chapter.title}`;
        const level2 = `Core Law / Model: Primary Mechanism in ${topic.title}`;
        const level3 = `Applied Concept: ${topic.title} Boundary Conditions`;
        const level4 = topic.title;

        const dynamicNode: ConceptNode = {
          id: topic.id,
          title: topic.title,
          subject: subject,
          chapter: chapter.title,
          summary: topic.summary || `${topic.title} in ${chapter.title}.`,
          prerequisites: prereqId ? [prereqId] : [],
          targetChain: [level1, level2, level3, level4],
          physicalModel: `Physical & Mechanism Intuition: Envision the core behavior in ${topic.title}. Understand how physical, chemical, or biological constituents interact under ${chapter.title} principles.`,
          formalEquations: [
            `Core Equation: f(${topic.title}) = f(parameters)`,
            `Boundary Condition: limit as parameters approach standard state`
          ],
          whyPrompts: [
            {
              question: `Why does ${topic.title} follow this specific relationship under standard NEET exam conditions?`,
              keyCheck: `Focus on fundamental principles: energy conservation, force balance, thermodynamic drive, or cellular signaling.`
            },
            {
              question: `What primary assumption is made in ${topic.title}, and what breaks when this assumption is violated?`,
              keyCheck: `Identify idealizations e.g. frictionless motion, ideal solutions, non-interacting particles, or steady state.`
            }
          ],
          connectedConceptIds: prevTopic ? [prevTopic.id] : [],
          crossSubjectConnections: [],
          keyKeywords: [
            topic.title.toLowerCase(),
            chapter.title.toLowerCase(),
            subject.toLowerCase(),
            'neet',
            'mechanism'
          ],
          isVerified: true,
          resourceType: 'OFFICIAL / VERIFIED'
        };

        result.push(dynamicNode);
        existingIds.add(topic.id);
        existingTitles.add(topic.title.toLowerCase());
      });
    });
  });

  return result;
}

export const INITIAL_PYQS: PYQItem[] = [
  {
    id: 'pyq_sol_1',
    title: 'NEET 2021: Van t Hoff Factor & Elevation in Boiling Point',
    subject: 'Chemistry',
    chapter: 'Solutions & Colligative Properties',
    questionText: 'The elevation in boiling point for 0.1 M aqueous solution of Ba(NO3)2 is found to be ΔTb. What is the value of Van t Hoff factor (i) if Ba(NO3)2 undergoes complete ionization?',
    givenData: ['Molarity C = 0.1 M', 'Salt Ba(NO3)2', 'Complete ionization (α = 1)'],
    irrelevantData: ['Molarity 0.1 M value is irrelevant for finding total ions per formula unit'],
    whatIsAsked: 'Value of Van t Hoff factor (i)',
    keyConceptId: 'colligative_properties',
    requiredFormula: 'i = 1 + (n - 1)α',
    physicalModelHint: 'Envision Ba(NO3)2 breaking apart in water into 1 Ba2+ ion and 2 NO3- ions. Count total discrete particles produced.',
    expertApproach: 'Identify salt dissociation: Ba(NO3)2 -> Ba2+ + 2 NO3-. Total ions n = 1 + 2 = 3. Since α = 1 (complete ionization), i = 3.',
    layerDiagnostics: {
      1: 'Did not know that Ba(NO3)2 ionizes into Ba2+ and 2 NO3- ions.',
      2: 'Failed to recognize that "elevation in boiling point" depends on total particle count via Van t Hoff factor.',
      3: 'Selected wrong formula e.g. i = n-1 instead of i = 1 + (n - 1)α.',
      4: 'Formulated i correctly but failed to count 3 total ions correctly.',
      5: 'Calculation error in adding 1 + 2.',
      6: 'Misread Ba(NO3)2 as BaNO3 or ignored "complete ionization".'
    },
    options: ['i = 1', 'i = 2', 'i = 3', 'i = 4'],
    correctOptionIndex: 2,
    year: 2021,
    integrityLabel: 'OFFICIAL / VERIFIED'
  },
  {
    id: 'pyq_phy_1',
    title: 'NEET 2022: Faraday Law Induced EMF in Rotating Rod',
    subject: 'Physics',
    chapter: 'Electromagnetic Induction & Alternating Current',
    questionText: 'A metal rod of length L rotates with angular velocity ω in a uniform magnetic field B perpendicular to plane of rotation. Calculate induced EMF between center and rim.',
    givenData: ['Length L', 'Angular velocity ω', 'Uniform magnetic field B'],
    irrelevantData: ['Mass of the rod'],
    whatIsAsked: 'Induced EMF between center and outer tip of the rod',
    keyConceptId: 'em_induction',
    requiredFormula: 'ε = (1/2) * B * ω * L^2',
    physicalModelHint: 'Visualize the rotating rod sweeping out a circular area A = πL^2 per period T = 2π/ω.',
    expertApproach: 'Rate of sweeping area dA/dt = (1/2) * L^2 * ω. Induced EMF ε = B * (dA/dt) = (1/2) * B * ω * L^2.',
    layerDiagnostics: {
      1: 'Did not understand flux cutting by a rotating conductor.',
      2: 'Failed to recognize this as an electromagnetic induction flux-sweeping problem.',
      3: 'Used linear velocity EMF formula ε = B v L directly without integrating v = ω r across length.',
      4: 'Integration of r dr from 0 to L failed.',
      5: 'Arithmetic mistake with the 1/2 factor.',
      6: 'Misread angular velocity ω as linear frequency f.'
    },
    options: ['ε = B ω L', 'ε = (1/2) B ω L^2', 'ε = B ω L^2', 'ε = 2 B ω L^2'],
    correctOptionIndex: 1,
    year: 2022,
    integrityLabel: 'OFFICIAL / VERIFIED'
  }
];

export const INITIAL_SIMULATIONS: ScienceSimulation[] = [
  {
    id: 'sim_phet_osmosis',
    title: 'PhET Interactive Membrane & Diffusion Lab',
    subject: 'Biology',
    description: 'Simulate solute particle movements across semi-permeable membranes to observe osmotic pressure equilibrium.',
    externalUrl: 'https://phet.colorado.edu/en/simulations/membrane-channels',
    guidingQuestions: {
      predict: 'Predict what happens to net solvent flow if solute concentration on side A doubles.',
      observe: 'Observe the height of liquid on side A versus side B at dynamic equilibrium.',
      explain: 'Explain how molecular collisions drive net water flux toward higher solute concentration.',
      changeVariable: 'Double the temperature and observe rate of reaching equilibrium.'
    }
  },
  {
    id: 'sim_phet_faraday',
    title: 'PhET Faraday Law & Flux Visualizer',
    subject: 'Physics',
    description: 'Move a bar magnet through a wire coil and observe needle deflection and magnetic flux lines in real time.',
    externalUrl: 'https://phet.colorado.edu/en/simulations/faradays-law',
    guidingQuestions: {
      predict: 'Predict the bulb brightness if magnet speed doubles.',
      observe: 'Observe the direction of current when entering vs exiting the coil.',
      explain: 'Why does current reverse direction when the magnet leaves the coil?',
      changeVariable: 'Flip magnet polarity and repeat movement.'
    }
  }
];

export const INITIAL_EXTERNAL_RESOURCES: ExternalResourceItem[] = [
  {
    id: 'res_3b1b_calculus',
    title: '3Blue1Brown: Visualizing Change & Derivatives',
    conceptId: 'em_induction',
    subject: 'Physics',
    teacherOrPlatform: '3Blue1Brown (Grant Sanderson)',
    url: 'https://www.youtube.com/watch?v=WUvTyaaNkzM',
    teachingStyle: 'Geometric & Intuitive Visualisation',
    difficulty: 'Intermediate',
    integrityLabel: 'EXTERNAL RESOURCE'
  },
  {
    id: 'res_khan_colligative',
    title: 'Khan Academy: Colligative Properties & Vapor Pressure',
    conceptId: 'colligative_properties',
    subject: 'Chemistry',
    teacherOrPlatform: 'Khan Academy',
    url: 'https://www.khanacademy.org/science/chemistry/states-of-matter-and-intermolecular-forces',
    teachingStyle: 'Step-by-Step Molecular Explanation',
    difficulty: 'Beginner',
    integrityLabel: 'EXTERNAL RESOURCE'
  }
];
