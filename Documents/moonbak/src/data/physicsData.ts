import type {
  SyllabusSubjectTree,
  SprintBlockItem,
  GraduatedQuestionItem,
  TopicResourceData
} from '../types/neetOS';

export const physicsTree: SyllabusSubjectTree = {
  subject: 'Physics',
  chapters: [
    {
      id: 'phy_ch1',
      title: 'Physical World & Measurement',
      classLevel: '11',
      category: 'General',
      topics: [
        {
          id: 'phy_units_dims',
          title: 'Units, Dimensions & Error Analysis',
          summary: 'SI base units, dimensional formulae, principle of homogeneity, error propagation.',
          status: 'AVAILABLE',
          subtopics: [
            { id: 'phy_sub_si_units', title: 'SI Fundamental & Derived Units', status: 'AVAILABLE' },
            { id: 'phy_sub_dimensions', title: 'Dimensional Formulae & Homogeneity Principle', status: 'AVAILABLE' },
            { id: 'phy_sub_errors', title: 'Absolute, Relative & Percentage Errors in Measurements', status: 'AVAILABLE' }
          ]
        },
        {
          id: 'phy_instruments',
          title: 'Measuring Instruments (Vernier & Screw Gauge)',
          summary: 'Least count, zero error correction, vernier calipers, screw gauge.',
          status: 'AVAILABLE',
          subtopics: [
            { id: 'phy_sub_vernier', title: 'Vernier Calipers & Least Count Calculation', status: 'AVAILABLE' },
            { id: 'phy_sub_screwgauge', title: 'Screw Gauge Pitch & Zero Error Correction', status: 'AVAILABLE' }
          ]
        }
      ]
    },
    {
      id: 'phy_ch2',
      title: 'Kinematics',
      classLevel: '11',
      category: 'General',
      topics: [
        {
          id: 'phy_1d_motion',
          title: 'Motion in a Straight Line',
          summary: 'Distance vs displacement, instantaneous velocity, uniform acceleration equations.',
          status: 'AVAILABLE',
          subtopics: [
            { id: 'phy_sub_kinematic_eqs', title: 'Uniform Acceleration Kinematic Equations', status: 'AVAILABLE' },
            { id: 'phy_sub_vt_graphs', title: 'Position-Time & Velocity-Time Graph Analysis', status: 'AVAILABLE' },
            { id: 'phy_sub_freefall', title: 'Motion Under Gravity & Freefall Dynamics', status: 'AVAILABLE' }
          ]
        },
        {
          id: 'phy_projectile',
          title: 'Projectile Motion',
          summary: 'Trajectory equation, time of flight, horizontal range, maximum height.',
          status: 'AVAILABLE',
          subtopics: [
            { id: 'phy_sub_ground_proj', title: 'Ground-to-Ground Projectile Motion', status: 'AVAILABLE' },
            { id: 'phy_sub_inclined_proj', title: 'Horizontal & Inclined Plane Projectiles', status: 'AVAILABLE' }
          ]
        },
        {
          id: 'phy_relative_motion',
          title: 'Relative Motion & Vectors',
          summary: 'Vector addition, dot and cross products, relative velocity in 2D.',
          status: 'AVAILABLE',
          subtopics: [
            { id: 'phy_sub_vector_algebra', title: 'Vector Algebra (Dot Product & Cross Product)', status: 'AVAILABLE' },
            { id: 'phy_sub_rain_river', title: 'Relative Velocity, River-Swimmer & Rain-Man Problems', status: 'AVAILABLE' }
          ]
        }
      ]
    },
    {
      id: 'phy_ch3',
      title: 'Laws of Motion',
      classLevel: '11',
      category: 'General',
      topics: [
        {
          id: 'phy_newton_laws',
          title: 'Newton Laws & Free Body Diagrams',
          summary: 'Inertia, momentum, F=ma, action-reaction, tension and normal force.',
          status: 'AVAILABLE',
          subtopics: [
            { id: 'phy_sub_fbd', title: 'Equilibrium & Free Body Diagram Analysis', status: 'AVAILABLE' },
            { id: 'phy_sub_pulley_block', title: 'Connected Bodies & Pulley System Accelerations', status: 'AVAILABLE' }
          ]
        },
        {
          id: 'phy_friction',
          title: 'Friction & Circular Motion Dynamics',
          summary: 'Static vs kinetic friction, angle of repose, banking of roads, centripetal force.',
          status: 'AVAILABLE',
          subtopics: [
            { id: 'phy_sub_friction_types', title: 'Static, Kinetic & Rolling Friction Laws', status: 'AVAILABLE' },
            { id: 'phy_sub_banking_road', title: 'Centripetal Force & Banking of Circular Roads', status: 'AVAILABLE' }
          ]
        }
      ]
    },
    {
      id: 'phy_ch4',
      title: 'Work, Energy & Power',
      classLevel: '11',
      category: 'General',
      topics: [
        {
          id: 'phy_work_energy_thm',
          title: 'Work-Energy Theorem & Conservative Forces',
          summary: 'Work done by variable force, potential energy, mechanical energy conservation.',
          status: 'AVAILABLE',
          subtopics: [
            { id: 'phy_sub_work_done', title: 'Work Done by Constant & Variable Forces', status: 'AVAILABLE' },
            { id: 'phy_sub_energy_cons', title: 'Conservative vs Non-Conservative Forces & Potential Energy Curves', status: 'AVAILABLE' }
          ]
        },
        {
          id: 'phy_collisions',
          title: 'Collisions & Power',
          summary: 'Elastic and inelastic collisions in 1D and 2D, coefficient of restitution, instantaneous power.',
          status: 'AVAILABLE',
          subtopics: [
            { id: 'phy_sub_collision_types', title: 'Elastic & Inelastic Collisions in 1D & 2D', status: 'AVAILABLE' },
            { id: 'phy_sub_power_calc', title: 'Instantaneous & Average Power Calculations', status: 'AVAILABLE' }
          ]
        }
      ]
    },
    {
      id: 'phy_ch5',
      title: 'System of Particles & Rigid Body',
      classLevel: '11',
      category: 'General',
      topics: [
        {
          id: 'phy_center_of_mass',
          title: 'Center of Mass & Linear Momentum',
          summary: 'COM calculation for discrete and continuous systems, conservation of momentum.',
          status: 'AVAILABLE',
          subtopics: [
            { id: 'phy_sub_com_calc', title: 'Center of Mass of Symmetric & Continuous Bodies', status: 'AVAILABLE' },
            { id: 'phy_sub_com_motion', title: 'Motion & Conservation of Linear Momentum of COM', status: 'AVAILABLE' }
          ]
        },
        {
          id: 'phy_rotational_motion',
          title: 'Torque, Angular Momentum & Moment of Inertia',
          summary: 'Moment of inertia theorems, torque τ=Iα, angular momentum conservation, rolling motion.',
          status: 'AVAILABLE',
          subtopics: [
            { id: 'phy_sub_moi_theorems', title: 'Parallel & Perpendicular Axis Theorems of MOI', status: 'AVAILABLE' },
            { id: 'phy_sub_angular_momentum', title: 'Torque, Angular Momentum Conservation & Pure Rolling', status: 'AVAILABLE' }
          ]
        }
      ]
    },
    {
      id: 'phy_ch6',
      title: 'Gravitation',
      classLevel: '11',
      category: 'General',
      topics: [
        {
          id: 'phy_kepler_laws',
          title: 'Kepler Laws & Universal Gravitation',
          summary: 'Newton law of gravitation, gravitational field intensity, Kepler laws of planetary motion.',
          status: 'AVAILABLE',
          subtopics: [
            { id: 'phy_sub_grav_law', title: 'Newton Law of Gravitation & Gravitational Field', status: 'AVAILABLE' },
            { id: 'phy_sub_kepler', title: 'Kepler Laws of Planetary Motion', status: 'AVAILABLE' }
          ]
        },
        {
          id: 'phy_grav_potential',
          title: 'Gravitational Potential Energy & Satellites',
          summary: 'Escape velocity, orbital velocity, geostationary satellites, variation of g with altitude/depth.',
          status: 'AVAILABLE',
          subtopics: [
            { id: 'phy_sub_g_variation', title: 'Variation of g with Altitude, Depth & Rotation', status: 'AVAILABLE' },
            { id: 'phy_sub_escape_orbital', title: 'Escape Velocity, Orbital Speed & Satellite Binding Energy', status: 'AVAILABLE' }
          ]
        }
      ]
    },
    {
      id: 'phy_ch7',
      title: 'Properties of Bulk Matter & Fluids',
      classLevel: '11',
      category: 'General',
      topics: [
        {
          id: 'phy_elasticity',
          title: 'Elasticity & Hooke Law',
          summary: 'Young, Shear, and Bulk moduli, stress-strain curve, elastic potential energy.',
          status: 'AVAILABLE',
          subtopics: [
            { id: 'phy_sub_stress_strain', title: 'Stress-Strain Curve & Moduli of Elasticity', status: 'AVAILABLE' },
            { id: 'phy_sub_elastic_energy', title: 'Elastic Potential Energy Stretched Wire Formula', status: 'AVAILABLE' }
          ]
        },
        {
          id: 'phy_fluid_statics_dynamics',
          title: 'Pascal Law, Bernoulli Theorem & Viscosity',
          summary: 'Pressure variation, buoyancy, continuity equation, Bernoulli theorem, Stokes law, terminal velocity.',
          status: 'AVAILABLE',
          subtopics: [
            { id: 'phy_sub_pascal_buoyancy', title: 'Pascal Law, Hydraulic Lift & Archimedes Buoyancy', status: 'AVAILABLE' },
            { id: 'phy_sub_bernoulli', title: 'Continuity Equation & Bernoulli Principle Applications', status: 'AVAILABLE' },
            { id: 'phy_sub_viscosity', title: 'Viscosity, Stokes Law & Terminal Velocity', status: 'AVAILABLE' }
          ]
        },
        {
          id: 'phy_surface_tension',
          title: 'Surface Tension & Capillarity',
          summary: 'Surface energy, excess pressure inside bubble/drop, capillary rise formula.',
          status: 'AVAILABLE',
          subtopics: [
            { id: 'phy_sub_surface_energy', title: 'Surface Energy & Work Done in Expanding Droplet', status: 'AVAILABLE' },
            { id: 'phy_sub_capillary_rise', title: 'Excess Pressure in Bubble & Capillary Ascent Formula', status: 'AVAILABLE' }
          ]
        }
      ]
    },
    {
      id: 'phy_ch8',
      title: 'Thermodynamics & Kinetic Theory',
      classLevel: '11',
      category: 'General',
      topics: [
        {
          id: 'phy_thermo_laws',
          title: 'Thermodynamic Laws & Processes',
          summary: 'Zeroth, First and Second laws, isothermal, adiabatic, isobaric, isochoric processes.',
          status: 'AVAILABLE',
          subtopics: [
            { id: 'phy_sub_first_law_thermo', title: 'First Law ΔQ = ΔU + ΔW & Process PV Work', status: 'AVAILABLE' },
            { id: 'phy_sub_adiabatic_iso', title: 'Isothermal & Adiabatic Process Equations & Work Formulas', status: 'AVAILABLE' }
          ]
        },
        {
          id: 'phy_heat_engines',
          title: 'Heat Engines & Carnot Cycle',
          summary: 'Carnot engine efficiency, refrigerator COP, reversible/irreversible processes.',
          status: 'AVAILABLE',
          subtopics: [
            { id: 'phy_sub_carnot_cycle', title: 'Carnot Engine Efficiency η = 1 - T2/T1', status: 'AVAILABLE' },
            { id: 'phy_sub_refrigerator_cop', title: 'Refrigerator Coefficient of Performance (COP)', status: 'AVAILABLE' }
          ]
        },
        {
          id: 'phy_ktg',
          title: 'Kinetic Theory of Gases & Degrees of Freedom',
          summary: 'RMS velocity, law of equipartition of energy, molar heat capacities Cv and Cp.',
          status: 'AVAILABLE',
          subtopics: [
            { id: 'phy_sub_gas_velocities', title: 'RMS, Most Probable & Average Gas Velocities', status: 'AVAILABLE' },
            { id: 'phy_sub_degrees_freedom', title: 'Degrees of Freedom & Molar Heat Capacities Cp/Cv Ratio', status: 'AVAILABLE' }
          ]
        }
      ]
    },
    {
      id: 'phy_ch9',
      title: 'Oscillations & Waves',
      classLevel: '11',
      category: 'General',
      topics: [
        {
          id: 'phy_shm',
          title: 'Simple Harmonic Motion (SHM)',
          summary: 'Displacement, velocity, acceleration, simple pendulum, spring-mass system energy.',
          status: 'AVAILABLE',
          subtopics: [
            { id: 'phy_sub_shm_kinematics', title: 'SHM Kinematic Differential Equations x(t), v(t), a(t)', status: 'AVAILABLE' },
            { id: 'phy_sub_pendulum_spring', title: 'Simple Pendulum & Spring System Time Periods', status: 'AVAILABLE' },
            { id: 'phy_sub_shm_energy', title: 'Kinetic & Potential Energy Exchange in SHM', status: 'AVAILABLE' }
          ]
        },
        {
          id: 'phy_wave_motion',
          title: 'Wave Motion, Organ Pipes & Doppler Effect',
          summary: 'Transverse and longitudinal waves, standing waves in strings/pipes, Doppler effect.',
          status: 'AVAILABLE',
          subtopics: [
            { id: 'phy_sub_standing_waves', title: 'Standing Waves in Stretched Strings & Organ Pipes', status: 'AVAILABLE' },
            { id: 'phy_sub_doppler_effect', title: 'Doppler Shift Frequency Formula in Sound', status: 'AVAILABLE' }
          ]
        }
      ]
    },
    {
      id: 'phy_ch10',
      title: 'Electrostatics',
      classLevel: '12',
      category: 'General',
      topics: [
        {
          id: 'phy_coulomb_gauss',
          title: 'Coulomb Law & Gauss Theorem',
          summary: 'Electric field, flux, Gauss law applications for spheres, sheets, cylinders.',
          status: 'AVAILABLE',
          subtopics: [
            { id: 'phy_sub_coulomb_law', title: 'Coulomb Law & Vector Electric Field Strength', status: 'AVAILABLE' },
            { id: 'phy_sub_gauss_law', title: 'Gauss Law Flux & Electric Field of Symmetric Charge Distributions', status: 'AVAILABLE' }
          ]
        },
        {
          id: 'phy_potential_cap',
          title: 'Electric Potential & Capacitance',
          summary: 'Potential energy, equipotential surfaces, parallel plate capacitor with dielectric.',
          status: 'AVAILABLE',
          subtopics: [
            { id: 'phy_sub_electric_potential', title: 'Electric Potential & Potential Energy of Charge Systems', status: 'AVAILABLE' },
            { id: 'phy_sub_capacitance_dielectric', title: 'Parallel Plate Capacitor with Dielectric Slabs & Combination Rules', status: 'AVAILABLE' }
          ]
        }
      ]
    },
    {
      id: 'phy_ch11',
      title: 'Current Electricity',
      classLevel: '12',
      category: 'General',
      topics: [
        {
          id: 'phy_ohm_drift',
          title: 'Ohm Law, Drift Velocity & Resistance',
          summary: 'Drift velocity formula, mobility, temperature dependence of resistivity.',
          status: 'AVAILABLE',
          subtopics: [
            { id: 'phy_sub_drift_velocity', title: 'Drift Velocity Microscopic Conduction Expression', status: 'AVAILABLE' },
            { id: 'phy_sub_resistance_temp', title: 'Resistivity Temperature Dependence α Formula', status: 'AVAILABLE' }
          ]
        },
        {
          id: 'phy_kirchhoff_bridges',
          title: 'Kirchhoff Laws, Wheatstone Bridge & Meter Bridge',
          summary: 'KCL, KVL, internal resistance, EMF, cells in series/parallel, potentiometer principle.',
          status: 'AVAILABLE',
          subtopics: [
            { id: 'phy_sub_kirchhoff_rules', title: 'Kirchhoff Junction (KCL) & Loop (KVL) Rules', status: 'AVAILABLE' },
            { id: 'phy_sub_wheatstone_meter', title: 'Balanced Wheatstone Bridge & Meter Bridge Experiment', status: 'AVAILABLE' },
            { id: 'phy_sub_potentiometer', title: 'Potentiometer Cell Comparison & Internal Resistance Determination', status: 'AVAILABLE' }
          ]
        }
      ]
    },
    {
      id: 'phy_ch12',
      title: 'Magnetic Effects of Current & Magnetism',
      classLevel: '12',
      category: 'General',
      topics: [
        {
          id: 'phy_biot_savart',
          title: 'Biot-Savart & Ampere Circuital Law',
          summary: 'Magnetic field due to current-carrying wire, circular loop, solenoid, toroid.',
          status: 'AVAILABLE',
          subtopics: [
            { id: 'phy_sub_biot_savart_app', title: 'Biot-Savart Law for Straight Wire & Circular Coil Center/Axis', status: 'AVAILABLE' },
            { id: 'phy_sub_ampere_law', title: 'Ampere Law for Long Wire, Solenoid & Toroid', status: 'AVAILABLE' }
          ]
        },
        {
          id: 'phy_lorentz_force',
          title: 'Lorentz Force, Cyclotron & Magnetic Dipole',
          summary: 'Force on moving charge, force between parallel wires, torque on magnetic dipole.',
          status: 'AVAILABLE',
          subtopics: [
            { id: 'phy_sub_lorentz_force_charge', title: 'Magnetic Lorentz Force F = q(v x B) & Cyclotron Radius', status: 'AVAILABLE' },
            { id: 'phy_sub_parallel_wires', title: 'Force Per Unit Length Between Parallel Current Wires', status: 'AVAILABLE' },
            { id: 'phy_sub_magnetic_dipole', title: 'Torque on Current Loop & Terrestrial Magnetism Elements', status: 'AVAILABLE' }
          ]
        }
      ]
    },
    {
      id: 'phy_ch13',
      title: 'Electromagnetic Induction & Alternating Current',
      classLevel: '12',
      category: 'General',
      topics: [
        {
          id: 'phy_faraday_lenz',
          title: 'Faraday Law, Lenz Law & Inductance',
          summary: 'Induced EMF, self and mutual inductance, motional EMF.',
          status: 'AVAILABLE',
          subtopics: [
            { id: 'phy_sub_faraday_induced_emf', title: 'Faraday Law & Lenz Law Direction Opposition', status: 'AVAILABLE' },
            { id: 'phy_sub_motional_emf', title: 'Motional EMF & Self/Mutual Inductance Coefficient', status: 'AVAILABLE' }
          ]
        },
        {
          id: 'phy_ac_circuits',
          title: 'AC Circuits, Resonance & Transformers',
          summary: 'RMS values, LCR series circuit resonance, power factor, transformer efficiency.',
          status: 'AVAILABLE',
          subtopics: [
            { id: 'phy_sub_rms_ac', title: 'RMS Voltage & Current Values in AC Circuits', status: 'AVAILABLE' },
            { id: 'phy_sub_lcr_resonance', title: 'Series LCR Resonance Frequency & Q-Factor', status: 'AVAILABLE' },
            { id: 'phy_sub_transformer', title: 'Ideal Transformer Ratio & Power Losses', status: 'AVAILABLE' }
          ]
        }
      ]
    },
    {
      id: 'phy_ch14',
      title: 'EM Waves & Optics (Ray & Wave)',
      classLevel: '12',
      category: 'General',
      topics: [
        {
          id: 'phy_em_waves',
          title: 'Electromagnetic Waves & Spectrum',
          summary: 'Displacement current, EM wave properties, transverse nature, EM spectrum.',
          status: 'AVAILABLE',
          subtopics: [
            { id: 'phy_sub_em_spectrum', title: 'Electromagnetic Spectrum Frequency & Wavelength Bands', status: 'AVAILABLE' }
          ]
        },
        {
          id: 'phy_ray_optics',
          title: 'Reflection, Refraction, Lenses & Prisms',
          summary: 'Total internal reflection, lens maker formula, prism deviation, microscope, telescope.',
          status: 'AVAILABLE',
          subtopics: [
            { id: 'phy_sub_refraction_tir', title: 'Snell Law, Total Internal Reflection & Critical Angle', status: 'AVAILABLE' },
            { id: 'phy_sub_lens_maker', title: 'Lens Maker Formula & Combination of Lenses in Contact', status: 'AVAILABLE' },
            { id: 'phy_sub_prism_instruments', title: 'Prism Minimum Deviation & Compound Microscope / Telescope', status: 'AVAILABLE' }
          ]
        },
        {
          id: 'phy_wave_optics',
          title: 'Huygens Principle, Interference & Diffraction',
          summary: 'Young double slit experiment fringe width, single slit diffraction pattern, polarization.',
          status: 'AVAILABLE',
          subtopics: [
            { id: 'phy_sub_ydse', title: 'Young Double Slit Experiment Fringe Width β Formula', status: 'AVAILABLE' },
            { id: 'phy_sub_diffraction_single_slit', title: 'Single Slit Diffraction Central Maxima Width', status: 'AVAILABLE' },
            { id: 'phy_sub_polarization', title: 'Brewster Law & Malus Law in Polarization', status: 'AVAILABLE' }
          ]
        }
      ]
    },
    {
      id: 'phy_ch15',
      title: 'Modern Physics & Semiconductors',
      classLevel: '12',
      category: 'General',
      topics: [
        {
          id: 'phy_photoelectric',
          title: 'Photoelectric Effect & Matter Waves',
          summary: 'Einstein photoelectric equation, stopping potential, de Broglie wavelength.',
          status: 'AVAILABLE',
          subtopics: [
            { id: 'phy_sub_photoelectric_eq', title: 'Einstein Photoelectric Work Function & Stopping Potential Graph', status: 'AVAILABLE' },
            { id: 'phy_sub_de_broglie', title: 'de Broglie Wavelength of Electron λ = h / sqrt(2meV)', status: 'AVAILABLE' }
          ]
        },
        {
          id: 'phy_bohr_atom',
          title: 'Bohr Model of Atom & Hydrogen Spectrum',
          summary: 'Bohr postulates, radius, energy levels, Rydberg constant, spectral series.',
          status: 'AVAILABLE',
          subtopics: [
            { id: 'phy_sub_bohr_radii_energy', title: 'Bohr Radius & Energy Level En = -13.6 Z^2 / n^2 eV', status: 'AVAILABLE' },
            { id: 'phy_sub_hydrogen_series', title: 'Hydrogen Spectral Series (Lyman, Balmer, Paschen, Brackett, Pfund)', status: 'AVAILABLE' }
          ]
        },
        {
          id: 'phy_nuclei',
          title: 'Nuclear Physics & Radioactivity',
          summary: 'Mass defect, binding energy curve, fission and fusion.',
          status: 'AVAILABLE',
          subtopics: [
            { id: 'phy_sub_binding_energy', title: 'Mass Defect Δm & Binding Energy Per Nucleon Curve', status: 'AVAILABLE' },
            { id: 'phy_sub_nuclear_reactions', title: 'Nuclear Fission & Fusion Energy Yields', status: 'AVAILABLE' }
          ]
        },
        {
          id: 'phy_semiconductors',
          title: 'Semiconductor Electronics & P-N Junction',
          summary: 'Intrinsic/extrinsic semiconductors, diode rectifiers, Zener diode, logic gates.',
          status: 'AVAILABLE',
          subtopics: [
            { id: 'phy_sub_pn_diode', title: 'P-N Junction Forward & Reverse Bias V-I Curve', status: 'AVAILABLE' },
            { id: 'phy_sub_rectifiers_zener', title: 'Half-Wave & Full-Wave Diode Rectifiers & Zener Voltage Regulator', status: 'AVAILABLE' },
            { id: 'phy_sub_logic_gates', title: 'AND, OR, NOT, NAND, NOR Logic Gates Truth Tables', status: 'AVAILABLE' }
          ]
        }
      ]
    }
  ]
};

export const physicsSprintBlocks: SprintBlockItem[] = [
  {
    id: 'sprint_phy_1',
    subject: 'Physics',
    chapter: 'Kinematics',
    topic: 'Motion in a Straight Line',
    title: 'Kinematics Equations & Variable Definitions',
    blockType: 'Physics',
    prompt: 'What are the 3 uniform acceleration kinematic equations and their strict validity conditions?',
    revealedAnswer: {
      summary: 'Kinematic equations relate displacement (s), initial velocity (u), final velocity (v), acceleration (a), and time (t).',
      formulasOrKeyFacts: [
        'v = u + a * t',
        's = u * t + 0.5 * a * t^2',
        'v^2 = u^2 + 2 * a * s',
        's_nth = u + 0.5 * a * (2n - 1)'
      ],
      siUnitsOrConstants: [
        's (m), u & v (m/s), a (m/s^2), t (s)',
        'g ≈ 9.8 m/s^2 (or 10 m/s^2 for NEET calculations)'
      ],
      operationalConditionsOrExceptions: [
        'STRICT CONDITION: Acceleration (a) MUST be CONSTANT in direction and magnitude.',
        'Cannot be used if acceleration varies with time (a(t)) or position (a(x)). For variable a, use integration: v = ∫a dt, s = ∫v dt.'
      ],
      highYieldTraps: [
        'TRAP: For motion under gravity during upward journey, a = -g when taking upward direction as positive.',
        'TRAP: Distance is not always equal to displacement if the particle reverses direction (v passes through zero).'
      ]
    }
  },
  {
    id: 'sprint_phy_2',
    subject: 'Physics',
    chapter: 'Kinematics',
    topic: 'Projectile Motion',
    title: 'Projectile Trajectory & Key Formulae',
    blockType: 'Physics',
    prompt: 'State the Horizontal Range, Maximum Height, Time of Flight, and Trajectory Equation for a projectile fired at angle θ.',
    revealedAnswer: {
      summary: '2D motion under constant vertical downward acceleration g with zero horizontal acceleration.',
      formulasOrKeyFacts: [
        'Time of Flight T = (2 * u * sinθ) / g',
        'Maximum Height H_max = (u^2 * sin^2 θ) / (2 * g)',
        'Horizontal Range R = (u^2 * sin(2θ)) / g',
        'Trajectory Equation: y = x * tanθ - (g * x^2) / (2 * u^2 * cos^2 θ)'
      ],
      siUnitsOrConstants: [
        'Angle θ measured with respect to horizontal',
        'Maximum range R_max occurs at θ = 45° (R_max = u^2 / g)'
      ],
      operationalConditionsOrExceptions: [
        'Assumes negligible air resistance and constant g throughout trajectory.',
        'Complementary angles θ and (90° - θ) yield the SAME horizontal range R for same initial speed u.'
      ],
      highYieldTraps: [
        'TRAP: Velocity at highest point is NOT zero! It is equal to u * cosθ directed horizontally.'
      ]
    }
  },
  {
    id: 'sprint_phy_3',
    subject: 'Physics',
    chapter: 'Electrostatics',
    topic: 'Coulomb Law & Gauss Theorem',
    title: 'Electric Field & Gauss Flux Formulae',
    blockType: 'Physics',
    prompt: 'State Coulomb Law force, Electric Field of a point charge, and Gauss Law flux expression.',
    revealedAnswer: {
      summary: 'Electrostatic forces and flux calculation across closed Gaussian surfaces.',
      formulasOrKeyFacts: [
        'Coulomb Force F = (1 / (4 * π * ε0)) * (q1 * q2 / r^2)',
        'Electric Field E = F / q = (1 / (4 * π * ε0)) * (q / r^2)',
        'Gauss Law Flux Φ = ∮ E · dA = q_enclosed / ε0',
        'Field of Conducting Sphere (r < R): E_inside = 0; Field outside (r ≥ R): E_outside = k * q / r^2'
      ],
      siUnitsOrConstants: [
        'Permittivity of free space ε0 ≈ 8.854 × 10^-12 C^2/(N·m^2)',
        'k = 1 / (4*π*ε0) ≈ 9 × 10^9 N·m^2/C^2'
      ],
      operationalConditionsOrExceptions: [
        'Coulomb Law holds strictly for stationary point charges in vacuum or dielectric medium (where F_medium = F_vacuum / K).',
        'Gauss Law is valid for any closed surface, but useful for calculating E field only when high symmetry exists.'
      ],
      highYieldTraps: [
        'TRAP: Inside a hollow or solid CONDUCTING sphere in electrostatic equilibrium, E is strictly ZERO.'
      ]
    }
  },
  {
    id: 'sprint_phy_4',
    subject: 'Physics',
    chapter: 'Current Electricity',
    topic: 'Ohm Law, Drift Velocity & Resistance',
    title: 'Drift Velocity & Microscopic Ohm Law',
    blockType: 'Physics',
    prompt: 'Write the formula for drift velocity vd in terms of electric field E and relaxation time τ, and current density J.',
    revealedAnswer: {
      summary: 'Microscopic electrical conduction in conductors.',
      formulasOrKeyFacts: [
        'Drift Velocity vd = (e * E * τ) / m',
        'Current I = n * e * A * vd',
        'Current Density J = I / A = n * e * vd = σ * E',
        'Resistivity ρ = m / (n * e^2 * τ)'
      ],
      siUnitsOrConstants: [
        'Drift velocity vd ~ 10^-4 m/s (very small!)',
        'Conductivity σ = 1 / ρ'
      ],
      operationalConditionsOrExceptions: [
        'As temperature increases in conductors, lattice vibrations increase → relaxation time τ decreases → resistivity ρ increases.',
        'In semiconductors, as T increases, charge carrier density n increases exponentially → resistivity ρ decreases.'
      ],
      highYieldTraps: [
        'TRAP: Drift velocity is proportional to electric field E, NOT proportional to length L directly.'
      ]
    }
  }
];

export const physicsQuestions: GraduatedQuestionItem[] = [
  // EASY LEVEL (0 - 20)
  {
    id: 'q_phy_easy_1',
    questionText: 'What is the dimension formula for Universal Gravitational Constant G?',
    options: ['[M^-1 L^3 T^-2]', '[M^1 L^2 T^-2]', '[M^-2 L^3 T^-1]', '[M^-1 L^2 T^-2]'],
    correctOptionIndex: 0,
    explanation: 'From F = G * m1 * m2 / r^2, G = F * r^2 / (m1 * m2) = [M L T^-2] * [L^2] / [M^2] = [M^-1 L^3 T^-2].',
    solverAlgorithm: {
      textbookMethod: '1. Rearrange F = G*m1*m2/r^2 to G = F*r^2/(m1*m2).\n2. Substitute dimensions: F=[MLT^-2], r=[L], m=[M].\n3. G = [MLT^-2][L^2] / [M^2] = [M^-1 L^3 T^-2].',
      topperFastTrack: 'Dimensional check: Force times distance squared over mass squared gives M^-1 L^3 T^-2 directly.',
      commonTrapWarning: 'Forgetting that mass appears in denominator yielding negative power M^-1.'
    },
    topperTrick: 'Recall G always has M^-1 because force per mass squared.',
    commonTrap: 'Forgetting negative exponent on M.',
    difficultyScore: 10,
    category: 'EASY',
    ncertPageRef: 'NCERT Class 11 Physics Vol 1, Page 32',
    subject: 'Physics',
    chapter: 'Physical World & Measurement',
    topic: 'Units, Dimensions & Error Analysis',
    difficulty: '0-20',
    questionType: 'MCQ',
    source: 'NCERT',
    isOfficialPYQ: false,
    conceptTested: 'Dimensional derivation from physical law formula',
    commonMistakeTrap: 'Forgetting that mass appears in denominator yielding negative power M^-1.'
  },
  {
    id: 'q_phy_easy_2',
    questionText: 'A particle starts from rest and moves with uniform acceleration a = 4 m/s^2. What is the distance travelled in the 3rd second?',
    options: ['10 m', '18 m', '12 m', '8 m'],
    correctOptionIndex: 0,
    explanation: 'Using s_nth = u + 0.5 * a * (2n - 1) with u = 0, a = 4, n = 3: s_3rd = 0 + 0.5 * 4 * (2(3) - 1) = 2 * 5 = 10 m.',
    solverAlgorithm: {
      textbookMethod: '1. Use nth second formula: s_nth = u + 0.5*a*(2n-1).\n2. Substitute u=0, a=4, n=3.\n3. s_3rd = 2*(5) = 10 m.',
      topperFastTrack: 'For u=0, distances in 1st, 2nd, 3rd seconds are in ratio 1:3:5. Distance in 1st sec = 0.5*4*1 = 2m. 3rd sec = 2 * 5 = 10m.',
      commonTrapWarning: 'Do not calculate total distance in 3 seconds (s = 0.5*4*9 = 18m); the question asks specifically for the 3rd second.'
    },
    topperTrick: 'Ratios for uniform acceleration from rest: 1 : 3 : 5 : 7. 3rd term is 5 times 1st sec distance.',
    commonTrap: 'Calculating total distance covered in 3s (18m) instead of distance during the 3rd second (10m).',
    difficultyScore: 15,
    category: 'EASY',
    ncertPageRef: 'NCERT Class 11 Physics Vol 1, Page 48',
    subject: 'Physics',
    chapter: 'Kinematics',
    topic: 'Motion in a Straight Line',
    difficulty: '0-20',
    questionType: 'MCQ',
    source: 'NCERT',
    isOfficialPYQ: false,
    conceptTested: 'Distance covered in nth second formula under constant acceleration',
    commonMistakeTrap: 'Calculating total distance covered in 3s (18m) instead of distance during 3rd second.'
  },

  // MEDIUM LEVEL (20 - 50)
  {
    id: 'q_phy_med_1',
    questionText: 'An ideal transformer has 500 primary turns and 50 secondary turns. If primary voltage is 220V and primary current is 0.5A, find secondary voltage and secondary current.',
    options: ['22V and 5A', '2200V and 0.05A', '22V and 0.5A', '110V and 1A'],
    correctOptionIndex: 0,
    explanation: 'Vs / Vp = Ns / Np => Vs = 220 * (50/500) = 22V. For 100% ideal efficiency, Ip * Vp = Is * Vs => 0.5 * 220 = Is * 22 => Is = 5A.',
    solverAlgorithm: {
      textbookMethod: '1. Use transformer turns ratio: Vs / Vp = Ns / Np.\n2. Vs = 220 * (50 / 500) = 22 V.\n3. Conserve power for ideal transformer: Ip * Vp = Is * Vs => 0.5 * 220 = Is * 22 => Is = 5 A.',
      topperFastTrack: 'Turns ratio is 10:1 step-down. Voltage reduces 10x (220V -> 22V), current increases 10x (0.5A -> 5A).',
      commonTrapWarning: 'Never multiply current by turns ratio directly; current is inversely proportional to turns ratio in step-down transformers.'
    },
    topperTrick: 'Turns ratio 10:1 step-down means V decreases by 10x, I increases by 10x.',
    commonTrap: 'Decreasing current along with voltage.',
    difficultyScore: 35,
    category: 'MEDIUM',
    ncertPageRef: 'NCERT Class 12 Physics Vol 1, Page 260',
    subject: 'Physics',
    chapter: 'Electromagnetic Induction & Alternating Current',
    topic: 'AC Circuits, Resonance & Transformers',
    difficulty: '20-50',
    questionType: 'MCQ',
    source: 'NCERT',
    isOfficialPYQ: false,
    conceptTested: 'Step-down transformer voltage and current transformation ratio',
    commonMistakeTrap: 'Directly multiplying current instead of recognizing inverse current relationship for step-down voltage.'
  },
  {
    id: 'q_phy_med_2',
    questionText: 'A projectile is launched from ground level with speed u at angle θ to horizontal. What is its kinetic energy at the apex (highest point) of its trajectory if initial KE is E?',
    options: ['E cos^2 θ', 'E sin^2 θ', 'E / 2', 'Zero'],
    correctOptionIndex: 0,
    explanation: 'At apex, vertical velocity component vy = 0 and horizontal velocity component vx = u cosθ. Apex KE = 0.5 * m * (u cosθ)^2 = (0.5 * m * u^2) * cos^2 θ = E cos^2 θ.',
    solverAlgorithm: {
      textbookMethod: '1. Initial KE = 0.5 * m * u^2 = E.\n2. Velocity vector at highest point: v_apex = u * cosθ i^.\n3. KE_apex = 0.5 * m * (u cosθ)^2 = E cos^2 θ.',
      topperFastTrack: 'Horizontal velocity is constant (u cosθ). Since KE ∝ v^2, KE at top = E * cos^2 θ in 1 second.',
      commonTrapWarning: 'Do not assume velocity at highest point is zero; only vertical component vy is zero.'
    },
    topperTrick: 'KE ∝ v^2, v_apex = u cosθ => KE_apex = E cos^2 θ.',
    commonTrap: 'Setting KE = 0 at highest point.',
    difficultyScore: 40,
    category: 'MEDIUM',
    ncertPageRef: 'NCERT Class 11 Physics Vol 1, Page 78',
    subject: 'Physics',
    chapter: 'Kinematics',
    topic: 'Projectile Motion',
    difficulty: '20-50',
    questionType: 'MCQ',
    source: 'NCERT',
    isOfficialPYQ: false,
    conceptTested: 'Kinetic energy conservation and velocity components in projectile motion',
    commonMistakeTrap: 'Assuming velocity at highest point is zero.'
  },

  // CYQ / HARD LEVEL (50+)
  {
    id: 'q_phy_hard_1',
    questionText: 'Assertion (A): On doubling the absolute temperature of an ideal gas at constant volume, the root-mean-square speed (v_rms) of gas molecules doubles.\nReason (R): v_rms is directly proportional to the square root of absolute temperature (T).',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      '(A) is false but (R) is true',
      'Both (A) and (R) are true but (R) is NOT the correct explanation',
      '(A) is true but (R) is false'
    ],
    correctOptionIndex: 1,
    explanation: 'v_rms = sqrt(3RT/M). Since v_rms ∝ sqrt(T), if T doubles, v_rms increases by a factor of sqrt(2) ≈ 1.414, NOT 2. Thus Assertion (A) is false, but Reason (R) is true.',
    solverAlgorithm: {
      textbookMethod: '1. Formula: v_rms = sqrt(3RT/M).\n2. Proportionality: v_rms ∝ T^(1/2).\n3. If T -> 2T, v_rms -> sqrt(2) * v_rms ≈ 1.414 v_rms.\n4. Assertion claims v_rms doubles (false). Reason correctly states v_rms ∝ sqrt(T) (true).',
      topperFastTrack: 'Square root relationship means doubling T multiplies speed by 1.414, not 2. Assertion is immediately false.',
      commonTrapWarning: 'Do not confuse linear relationship with square root relationship.'
    },
    topperTrick: 'Square root factor: 2T -> sqrt(2) * v_rms.',
    commonTrap: 'Overlooking square root sign in v_rms formula.',
    difficultyScore: 65,
    category: 'CYQ',
    ncertPageRef: 'NCERT Class 11 Physics Vol 2, Page 325',
    subject: 'Physics',
    chapter: 'Thermodynamics & Kinetic Theory',
    topic: 'Kinetic Theory of Gases & Degrees of Freedom',
    difficulty: 'CYQ',
    questionType: 'Assertion-Reason',
    source: 'NCERT',
    isOfficialPYQ: false,
    conceptTested: 'Square root temperature dependence of RMS gas velocity',
    commonMistakeTrap: 'Assuming linear dependence on temperature for RMS speed.'
  },

  // PREDICTED PYQ
  {
    id: 'q_phy_pred_1',
    questionText: 'NTA Trend Predicted 2025: A parallel plate capacitor with air between plates has capacitance C. If a dielectric slab of dielectric constant K = 4 and thickness equal to half the plate separation d/2 is inserted, what is the new capacitance?',
    options: ['(8/5) C', '2 C', '(4/5) C', '4 C'],
    correctOptionIndex: 0,
    explanation: 'The system acts as two capacitors in series: C1 with air of thickness d/2 (C1 = ε0 A / (d/2) = 2C) and C2 with dielectric of thickness d/2 (C2 = K ε0 A / (d/2) = 2KC = 8C). Equivalent capacitance C_eq = (C1 * C2) / (C1 + C2) = (2C * 8C) / (2C + 8C) = 16 C^2 / 10 C = (8/5) C.',
    solverAlgorithm: {
      textbookMethod: '1. Capacitor with partial dielectric formula: C_new = ε0 A / (d - t + t/K).\n2. Here t = d/2 and K = 4.\n3. C_new = ε0 A / (d - d/2 + d/(2*4)) = ε0 A / (d/2 + d/8) = ε0 A / (5d/8) = (8/5) (ε0 A / d) = (8/5) C.',
      topperFastTrack: 'Direct formula: C_new = C / [1 - (t/d)(1 - 1/K)] = C / [1 - 0.5(1 - 1/4)] = C / [1 - 0.5(3/4)] = C / [1 - 3/8] = C / (5/8) = 8/5 C.',
      commonTrapWarning: 'Do not simply take average of K or multiply total C by K.'
    },
    topperTrick: 'Formula C / (1 - (t/d)(1 - 1/K)) gives answer in 10 seconds.',
    commonTrap: 'Applying C_new = K*C without accounting for slab thickness.',
    difficultyScore: 55,
    category: 'PREDICTED_PYQ',
    ncertPageRef: 'NCERT Class 12 Physics Vol 1, Page 76',
    subject: 'Physics',
    chapter: 'Electrostatics',
    topic: 'Electric Potential & Capacitance',
    difficulty: '20-50',
    questionType: 'MCQ',
    source: 'Generated Practice',
    isOfficialPYQ: false,
    conceptTested: 'Capacitance of parallel plate capacitor with partial dielectric slab',
    commonMistakeTrap: 'Treating the capacitor as purely dielectric filled.'
  },

  // ACTUAL PYQ
  {
    id: 'q_phy_actual_1',
    questionText: 'NEET 2024 Official PYQ: A wheel of moment of inertia 2 kg m^2 is rotating at 50 rad/s. Find the constant torque required to stop it in 10 seconds.',
    options: ['10 N m', '20 N m', '5 N m', '2.5 N m'],
    correctOptionIndex: 0,
    explanation: 'Angular acceleration α = (ω_f - ω_i) / t = (0 - 50) / 10 = -5 rad/s^2. Magnitude of stopping torque τ = I * |α| = 2 * 5 = 10 N m.',
    solverAlgorithm: {
      textbookMethod: '1. Use rotational kinematics: ω_f = ω_i + α * t.\n2. 0 = 50 + α * 10 => α = -5 rad/s^2.\n3. Torque τ = I * α = 2 * 5 = 10 N m.',
      topperFastTrack: 'τ = ΔL / Δt = (I * ω) / t = (2 * 50) / 10 = 100 / 10 = 10 N m.',
      commonTrapWarning: 'Check units carefully; ensure moment of inertia is in kg m^2 and angular velocity in rad/s.'
    },
    topperTrick: 'Torque = Angular momentum change / time = (2 * 50) / 10 = 10 N m.',
    commonTrap: 'Arithmetic mistake when dividing angular momentum by time.',
    difficultyScore: 30,
    category: 'ACTUAL_PYQ',
    pyqYear: 'NEET 2024',
    ncertPageRef: 'NCERT Class 11 Physics Vol 1, Page 168',
    subject: 'Physics',
    chapter: 'System of Particles & Rigid Body',
    topic: 'Torque, Angular Momentum & Moment of Inertia',
    difficulty: '20-50',
    questionType: 'MCQ',
    source: 'Official PYQ',
    year: 2024,
    isOfficialPYQ: true,
    conceptTested: 'Rotational dynamics relation between torque, moment of inertia, and angular acceleration',
    commonMistakeTrap: 'Arithmetic mistake when dividing angular momentum by time.'
  }
];

export const physicsTopicResources: TopicResourceData[] = [
  {
    "topicId": "phy_units_dims",
    "topicTitle": "Units, Dimensions & Error Analysis",
    "chapterTitle": "Physical World & Measurement",
    "subject": "Physics",
    "detailedNotes": "Units and dimensions form the foundation of physical measurement. SI units consist of 7 base units (m, kg, s, A, K, mol, cd) and 2 supplementary units (radian, steradian). Dimensional analysis uses base dimensions [M], [L], [T], [I], [\u03b8], [N], [J] to verify equation consistency and establish relationships between physical quantities.\n\nError Analysis: Absolute Error \u0394x = |x_true - x_measured|. Relative Error = \u0394x / x_mean. Percentage Error = (\u0394x / x_mean) * 100%.\nCombination of Errors: If Z = A^m * B^n / C^p, relative error \u0394Z/Z = m(\u0394A/A) + n(\u0394B/B) + p(\u0394C/C).",
    "shortNotes": "1. SI Base Units: 7 fundamental quantities.\n2. Homogeneity Principle: Dimensions on LHS = Dimensions on RHS.\n3. Quantities with no dimensions: Refractive index, strain, relative density, angle.\n4. Error Propagation: Z = A^m B^n / C^p => % Error in Z = m(%A) + n(%B) + p(%C).\n5. Absolute errors always add up in addition/subtraction.",
    "multiTierNotes": {
      "tier1DetailedNCERT": "NCERT Focus: Physical quantities Q = n*u. Standard SI base units are defined with atomic standards. Dimensional homogeneity dictates that terms added or subtracted must possess identical dimensions.",
      "tier2HighYieldShort": "\u2022 [Force] = M L T^-2, [Energy] = M L^2 T^-2, [Power] = M L^2 T^-3.\n\u2022 [Pressure] = [Young Modulus] = M L^-1 T^-2.\n\u2022 [Viscosity \u03b7] = M L^-1 T^-1, [Surface Tension T] = M L^0 T^-2.\n\u2022 Max fractional error: Sum weighted relative errors with positive signs.",
      "tier3ConceptualVisualMechanisms": "Dimensional Homogeneity Matrix: Terms in x + y = z must all have identical physical dimensions. Exponents and trigonometric arguments must be strictly dimensionless.",
      "tier4TopperTricksShortcuts": "Shortcut: To find dimensions of constants like G, h, 1/(4\u03c0\u03b50), write standard formulas: F = G m1 m2 / r^2 => [G] = M^-1 L^3 T^-2; E = h \u03bd => [h] = M L^2 T^-1."
    },
    "formulaBank": [
      "[Force] = [M L T^-2]",
      "[Energy / Work / Torque] = [M L^2 T^-2]",
      "[Pressure / Stress / Young Modulus] = [M L^-1 T^-2]",
      "[Planck Constant h] = [M L^2 T^-1]",
      "Relative Error (Z = A^m B^n / C^p): \u0394Z/Z = m(\u0394A/A) + n(\u0394B/B) + p(\u0394C/C)"
    ],
    "ncertFacts": [
      "Radian and Steradian have no dimensions, but they possess units.",
      "Dimensions of 1/\u221a(\u03bc0 \u03b50) are identical to the speed of light [L T^-1]."
    ],
    "commonMistakes": [
      "Subtracting errors when quantities are subtracted in Z = A - B (errors always add: \u0394Z = \u0394A + \u0394B).",
      "Forgetting that trigonometric functions sin(\u03b8), cos(\u03b8) and exponents e^(ax) must be dimensionless."
    ],
    "flashcards": [
      {
        "id": "fc_units_1",
        "question": "What are the dimensions of Planck constant h?",
        "answer": "[M L^2 T^-1] (Same as Angular Momentum)."
      },
      {
        "id": "fc_units_2",
        "question": "If X = A^3 B^(1/2) / C^2, what is max fractional error in X?",
        "answer": "\u0394X/X = 3(\u0394A/A) + 0.5(\u0394B/B) + 2(\u0394C/C)."
      }
    ]
  },
  {
    "topicId": "phy_instruments",
    "topicTitle": "Measuring Instruments (Vernier & Screw Gauge)",
    "chapterTitle": "Physical World & Measurement",
    "subject": "Physics",
    "detailedNotes": "Vernier Calipers: LC = 1 MSD - 1 VSD. If N VSD = (N-1) MSD, LC = 1 MSD / N.\nTotal Reading = MSR + (VSR \u00d7 LC) - (Zero Error).\nScrew Gauge: Pitch = Distance moved in 1 rotation. LC = Pitch / Total Circular Scale Divisions.\nTotal Reading = MSR + (CSD \u00d7 LC) - (Zero Error).",
    "shortNotes": "1. Vernier LC = 1 MSD - 1 VSD = 1 MSD / N.\n2. Screw Gauge LC = Pitch / Total CSD.\n3. Measured Value = Observed Reading - Zero Error.\n4. Positive Zero Error -> Zero ahead -> Subtract.\n5. Negative Zero Error -> Zero behind -> Add.",
    "multiTierNotes": {
      "tier1DetailedNCERT": "Vernier scale precision is derived from fractional discrepancy between Main Scale Divisions and Vernier Scale Divisions.",
      "tier2HighYieldShort": "\u2022 Vernier LC = 1 MSD / N.\n\u2022 Screw Gauge LC = Pitch / N_csd.\n\u2022 Backlash error in micrometer is prevented by advancing thread in one direction.",
      "tier3ConceptualVisualMechanisms": "Coincidence Matching: The specific division line on vernier scale that aligns with main scale gives the fractional addition.",
      "tier4TopperTricksShortcuts": "Shortcut: Standard Vernier LC = 0.1 mm = 0.01 cm. Screw Gauge with 0.5mm pitch and 50 divisions has LC = 0.5/50 = 0.01 mm."
    },
    "formulaBank": [
      "Vernier LC = 1 MSD - 1 VSD = 1 MSD / N",
      "Screw Gauge LC = Pitch / N_CSD",
      "Corrected Reading = Main Scale Reading + (Scale Coincidence * LC) - Zero Error"
    ],
    "ncertFacts": [
      "Zero error is subtracted algebraically from the observed reading.",
      "Backlash error occurs due to play between screw and nut."
    ],
    "commonMistakes": [
      "Adding positive zero error instead of subtracting it.",
      "Confusing pitch (distance per turn) with least count."
    ],
    "flashcards": [
      {
        "id": "fc_inst_1",
        "question": "Formula for Least Count of Screw Gauge?",
        "answer": "LC = Pitch / Total Circular Scale Divisions."
      },
      {
        "id": "fc_inst_2",
        "question": "How to apply zero error correction?",
        "answer": "True Reading = Observed Reading - (Zero Error with sign)."
      }
    ]
  },
  {
    "topicId": "phy_1d_motion",
    "topicTitle": "Motion in a Straight Line",
    "chapterTitle": "Kinematics",
    "subject": "Physics",
    "detailedNotes": "Kinematics deals with motion in 1D under uniform acceleration or variable acceleration.\nEquations for constant acceleration: v = u + at, s = ut + 0.5at^2, v^2 = u^2 + 2as, s_nth = u + 0.5a(2n-1).\nVariable acceleration: v = dx/dt, a = dv/dt = v dv/dx.",
    "shortNotes": "1. v = u + at, s = ut + 0.5at^2, v^2 = u^2 + 2as.\n2. s_nth = u + 0.5a(2n-1).\n3. Area under v-t graph = Displacement.\n4. Slope of x-t graph = Velocity, slope of v-t graph = Acceleration.\n5. Free fall: H_max = u^2 / 2g, t_ascent = u/g.",
    "multiTierNotes": {
      "tier1DetailedNCERT": "Instantaneous velocity v = dx/dt. Acceleration a = dv/dt. Integration yields kinematic equations for uniform acceleration.",
      "tier2HighYieldShort": "\u2022 Average speed = Total Distance / Total Time.\n\u2022 Distance in nth second: s_n = u + a/2(2n-1).\n\u2022 Free fall ratio of distances in successive equal times = 1 : 3 : 5 : 7 (Galileo Law).",
      "tier3ConceptualVisualMechanisms": "Area under v-t curve gives net integral \u222bv dt = displacement. Enclosed magnitude gives distance.",
      "tier4TopperTricksShortcuts": "Topper Trick: Particle stopping distance s \u221d u^2. Doubling speed quadruples stopping distance under uniform braking."
    },
    "formulaBank": [
      "v = u + a * t",
      "s = u * t + 0.5 * a * t^2",
      "v^2 = u^2 + 2 * a * s",
      "s_nth = u + 0.5 * a * (2n - 1)",
      "H_max = u^2 / (2g)"
    ],
    "ncertFacts": [
      "Displacement magnitude is <= distance traveled.",
      "Velocity can be zero while acceleration is non-zero (top of vertical throw)."
    ],
    "commonMistakes": [
      "Applying uniform acceleration formulas when acceleration depends on time or displacement.",
      "Confusing average velocity with average of initial and final velocity when acceleration is non-uniform."
    ],
    "flashcards": [
      {
        "id": "fc_1d_1",
        "question": "Galileo law of odd numbers for free fall?",
        "answer": "Distances in successive equal time intervals are in ratio 1 : 3 : 5 : 7..."
      },
      {
        "id": "fc_1d_2",
        "question": "What is acceleration when v = sqrt(150 - 20x)?",
        "answer": "v^2 = 150 - 20x => 2as = -20x => a = -10 m/s^2."
      }
    ]
  },
  {
    "topicId": "phy_projectile",
    "topicTitle": "Projectile Motion",
    "chapterTitle": "Kinematics",
    "subject": "Physics",
    "detailedNotes": "2D motion under constant downward acceleration g. Horizontal velocity u_x = u cos \u03b8 remains constant. Vertical velocity u_y = u sin \u03b8 decreases to zero at apex and reverses.\nTime of flight T = 2 u sin \u03b8 / g.\nMaximum Height H = u^2 sin^2 \u03b8 / (2g).\nHorizontal Range R = u^2 sin(2\u03b8) / g.\nTrajectory Equation: y = x tan \u03b8 - (g x^2) / (2 u^2 cos^2 \u03b8).",
    "shortNotes": "1. T = 2 u sin \u03b8 / g.\n2. H = u^2 sin^2 \u03b8 / (2g).\n3. R = u^2 sin 2\u03b8 / g.\n4. R is maximum when \u03b8 = 45\u00b0 (R_max = u^2 / g).\n5. Complementary angles \u03b8 and (90\u00b0 - \u03b8) give same horizontal range R.",
    "multiTierNotes": {
      "tier1DetailedNCERT": "Two-dimensional motion decomposed into independent 1D orthogonal motions: horizontal uniform motion and vertical accelerated motion.",
      "tier2HighYieldShort": "\u2022 Velocity at apex = u cos \u03b8 (horizontal component only).\n\u2022 Speed is minimum at top of trajectory.\n\u2022 R = 4 H cot \u03b8.\n\u2022 Change in velocity during full flight \u0394v = 2 u sin \u03b8 (downwards).",
      "tier3ConceptualVisualMechanisms": "Parabolic Trajectory: Gravity curves the straight inertial path downward continuously.",
      "tier4TopperTricksShortcuts": "Shortcut: R = 4 H / tan \u03b8. If Range = Max Height, then tan \u03b8 = 4 => \u03b8 \u2248 76\u00b0."
    },
    "formulaBank": [
      "T = (2 * u * sin \u03b8) / g",
      "H_max = (u^2 * sin^2 \u03b8) / (2 * g)",
      "R = (u^2 * sin 2\u03b8) / g",
      "y = x * tan \u03b8 - (g * x^2) / (2 * u^2 * cos^2 \u03b8)",
      "R = 4 * H * cot \u03b8"
    ],
    "ncertFacts": [
      "Horizontal velocity component u cos \u03b8 is constant throughout projectile flight (ignoring air resistance).",
      "Complementary angles of projection \u03b8 and (90\u00b0 - \u03b8) yield identical horizontal ranges."
    ],
    "commonMistakes": [
      "Taking velocity as zero at maximum height (only vertical component is zero, u cos \u03b8 remains!).",
      "Using angle with vertical in formulas designed for angle with horizontal."
    ],
    "flashcards": [
      {
        "id": "fc_proj_1",
        "question": "At what angle of projection is range equal to 4 times max height?",
        "answer": "\u03b8 = 45\u00b0 (since R = 4 H cot \u03b8 => cot 45\u00b0 = 1)."
      },
      {
        "id": "fc_proj_2",
        "question": "Velocity of projectile at highest point?",
        "answer": "v_top = u cos \u03b8 horizontally."
      }
    ]
  },
  {
    "topicId": "phy_relative_motion",
    "topicTitle": "Relative Motion & Vectors",
    "chapterTitle": "Kinematics",
    "subject": "Physics",
    "detailedNotes": "Relative Motion: v_AB = v_A - v_B, a_AB = a_A - a_B.\nRain-Man Problems: v_rm = v_r - v_m.\nRiver-Swimmer Problems: Minimum time t_min = d / v_swimmer (heading perpendicular to river flow). Zero drift sin \u03b8 = v_river / v_swimmer.",
    "shortNotes": "1. v_AB = v_A - v_B.\n2. Rain-Man: v_rm = v_r - v_m.\n3. River swimmer min time: t_min = d / v_br.\n4. River swimmer min drift: sin \u03b8 = v_r / v_br.\n5. Vector Dot Product A \u00b7 B = AB cos \u03b8, Cross Product |A \u00d7 B| = AB sin \u03b8.",
    "multiTierNotes": {
      "tier1DetailedNCERT": "Vector addition obeys triangle law and parallelogram law: R = \u221a(A^2 + B^2 + 2AB cos \u03b8).",
      "tier2HighYieldShort": "\u2022 River crossing min time: t_min = d / v_swimmer.\n\u2022 River crossing min drift: Heading angle sin \u03b1 = v_river / v_swimmer upstream.\n\u2022 Unit vector in direction of A = A / |A|.",
      "tier3ConceptualVisualMechanisms": "Reference Frame Shift: Freeze body B, subtract its velocity vector v_B from body A.",
      "tier4TopperTricksShortcuts": "Shortcut: For two projectiles fired simultaneously, relative acceleration a_rel = 0! Relative trajectory is a straight line."
    },
    "formulaBank": [
      "v_AB = v_A - v_B",
      "R = sqrt(A^2 + B^2 + 2 * A * B * cos \u03b8)",
      "tan \u03b1 = (B * sin \u03b8) / (A + B * cos \u03b8)",
      "River Minimum Time t_min = d / v_m",
      "River Zero Drift sin \u03b8 = v_river / v_swimmer"
    ],
    "ncertFacts": [
      "Relative acceleration of two free-falling bodies under gravity is zero.",
      "Vector cross product is anti-commutative: A \u00d7 B = -(B \u00d7 A)."
    ],
    "commonMistakes": [
      "Adding velocities scalar value without considering vector direction.",
      "Confusing swimmer velocity in still water with net velocity ground frame."
    ],
    "flashcards": [
      {
        "id": "fc_rel_1",
        "question": "Relative acceleration between two projectiles in air?",
        "answer": "Zero (both have acceleration g downwards)."
      },
      {
        "id": "fc_rel_2",
        "question": "Direction to hold umbrella in rain falling vertically when walking at v_m?",
        "answer": "Incline forward at angle tan \u03b8 = v_man / v_rain."
      }
    ]
  },
  {
    "topicId": "phy_newton_laws",
    "topicTitle": "Newton Laws & Free Body Diagrams",
    "chapterTitle": "Laws of Motion",
    "subject": "Physics",
    "detailedNotes": "First Law: Law of Inertia. Frame of reference: Inertial vs Non-Inertial (requires pseudo force F_p = -m a_frame).\nSecond Law: F_net = dp/dt = m a (for constant mass).\nThird Law: Action-reaction pair on DIFFERENT bodies.\nApparent Weight in Elevator: Ascending with acceleration a: N = m(g+a); Descending with acceleration a: N = m(g-a).",
    "shortNotes": "1. First Law: Inertia.\n2. Second Law: F = ma, Impulse J = \u222bF dt = \u0394p.\n3. Third Law: Action-Reaction on different bodies.\n4. Lift ascending accelerated: N = m(g + a).\n5. Lift descending accelerated: N = m(g - a).",
    "multiTierNotes": {
      "tier1DetailedNCERT": "Momentum p = mv. Force is rate of change of momentum F = dp/dt. Inertial frames move with constant velocity relative to fixed stars.",
      "tier2HighYieldShort": "\u2022 Pulley System (Atwood Machine): a = (m2 - m1)g / (m1 + m2), Tension T = 2 m1 m2 g / (m1 + m2).\n\u2022 Pseudo force = - m * a_frame (applied in non-inertial frame).",
      "tier3ConceptualVisualMechanisms": "Free Body Diagram (FBD): Isolate body, draw all contact forces (Normal, Friction, Tension) and field forces (Gravity).",
      "tier4TopperTricksShortcuts": "Shortcut for Connected Blocks: Common acceleration a = Total Pulling Force / Total Mass. Tension across boundary = Mass behind * acceleration."
    },
    "formulaBank": [
      "F = m * a = dp / dt",
      "Impulse J = Integral(F dt) = delta(p)",
      "Atwood Machine Acceleration a = (m2 - m1) * g / (m1 + m2)",
      "Atwood Machine Tension T = 2 * m1 * m2 * g / (m1 + m2)",
      "Apparent Weight N = m * (g +- a)"
    ],
    "ncertFacts": [
      "Action and reaction forces act simultaneously on different objects and never cancel each other on a single object.",
      "Inertial mass and gravitational mass are experimentally equivalent."
    ],
    "commonMistakes": [
      "Drawing pseudo force in an inertial frame of reference.",
      "Treating action-reaction forces as acting on the same free body diagram."
    ],
    "flashcards": [
      {
        "id": "fc_nlm_1",
        "question": "What is apparent weight of a person in a free falling elevator?",
        "answer": "Zero (Weightlessness, N = m(g - g) = 0)."
      },
      {
        "id": "fc_nlm_2",
        "question": "Acceleration of Atwood machine with masses 3kg and 1kg?",
        "answer": "a = (3-1)g / (3+1) = g/2 = 4.9 m/s^2."
      }
    ]
  },
  {
    "topicId": "phy_friction",
    "topicTitle": "Friction & Circular Motion Dynamics",
    "chapterTitle": "Laws of Motion",
    "subject": "Physics",
    "detailedNotes": "Static Friction f_s \u2264 \u03bc_s N. Kinetic Friction f_k = \u03bc_k N.\nAngle of Repose \u03b8_r = tan^-1(\u03bc_s).\nCircular Motion Dynamics: Centripetal force F_c = m v^2 / r = m \u03c9^2 r.\nBanking of Roads: Safe speed without friction v = \u221a(r g tan \u03b8). With friction: v_max = \u221a[ r g (\u03bc + tan \u03b8) / (1 - \u03bc tan \u03b8) ].",
    "shortNotes": "1. f_s_max = \u03bc_s N, f_k = \u03bc_k N.\n2. Angle of Repose \u03b8 = tan^-1(\u03bc_s).\n3. Centripetal Force F_c = m v^2 / r = m \u03c9^2 r.\n4. Unbanked road max speed v = \u221a(\u03bc g r).\n5. Banked road optimal speed v = \u221a(r g tan \u03b8).",
    "multiTierNotes": {
      "tier1DetailedNCERT": "Friction arises from microscopic irregularities and electromagnetic forces between surface contact points.",
      "tier2HighYieldShort": "\u2022 Motion on inclined plane (angle \u03b8): Sliding occurs if \u03b8 > Angle of Repose.\n\u2022 Acceleration down rough incline: a = g(sin \u03b8 - \u03bc cos \u03b8).\n\u2022 Minimum speed at top of vertical circle for string: v_top = \u221a(g r), v_bottom = \u221a(5 g r).",
      "tier3ConceptualVisualMechanisms": "Centripetal vs Centrifugal: Centripetal force is real net force toward center in inertial frame; Centrifugal force is pseudo force outwards in rotating frame.",
      "tier4TopperTricksShortcuts": "Topper Shortcut: Vertical Circle String Tension difference T_bottom - T_top = 6 mg always!"
    },
    "formulaBank": [
      "f_s_max = mu_s * N",
      "f_k = mu_k * N",
      "Angle of Repose theta_r = arctan(mu_s)",
      "Unbanked Max Speed v_max = sqrt(mu_s * g * r)",
      "Banked Optimum Speed v = sqrt(r * g * tan theta)",
      "Vertical Circle Minimum Speed v_bottom = sqrt(5 * g * r)"
    ],
    "ncertFacts": [
      "Friction is a non-conservative contact force that depends on relative motion.",
      "Rolling friction is significantly smaller than kinetic or static friction."
    ],
    "commonMistakes": [
      "Assuming static friction is always equal to \u03bc_s N (\u03bc_s N is only the MAXIMUM possible limit!).",
      "Misinterpreting centrifugal force as a real force in an inertial frame."
    ],
    "flashcards": [
      {
        "id": "fc_fric_1",
        "question": "Difference between bottom and top string tension in vertical circular motion?",
        "answer": "T_bottom - T_top = 6 mg."
      },
      {
        "id": "fc_fric_2",
        "question": "Safe speed on unbanked curve of radius 20m with \u03bc = 0.5?",
        "answer": "v_max = \u221a(0.5 * 10 * 20) = \u221a100 = 10 m/s."
      }
    ]
  },
  {
    "topicId": "phy_work_energy_thm",
    "topicTitle": "Work-Energy Theorem & Conservative Forces",
    "chapterTitle": "Work, Energy & Power",
    "subject": "Physics",
    "detailedNotes": "Work W = F \u00b7 s = F s cos \u03b8 = \u222b F dx.\nWork-Energy Theorem: W_net = \u0394K = K_final - K_initial.\nConservative Force: Work done in closed path is zero (W_roundtrip = 0). F = -dU/dx.\nPotential Energy U: Only defined for conservative forces. Mechanical Energy Conservation: E_mech = K + U = constant.",
    "shortNotes": "1. W = F \u00b7 s = \u222b F dx.\n2. W_net = \u0394K = K_f - K_i.\n3. Conservative Force: F = -dU/dx, W_closed = 0.\n4. Conservation of Mechanical Energy: K_i + U_i = K_f + U_f.\n5. Spring Work = 0.5 k (x_1^2 - x_2^2).",
    "multiTierNotes": {
      "tier1DetailedNCERT": "Work done by force vector F over displacement dr is dW = F \u00b7 dr. Integration gives total work.",
      "tier2HighYieldShort": "\u2022 Equilibrium Types: dU/dx = 0 at equilibrium.\n  - Stable: d^2U/dx^2 > 0 (U is minimum).\n  - Unstable: d^2U/dx^2 < 0 (U is maximum).\n  - Neutral: d^2U/dx^2 = 0 (U is constant).",
      "tier3ConceptualVisualMechanisms": "Potential Well Model: Particle oscillates at bottom of U-x curve in stable equilibrium.",
      "tier4TopperTricksShortcuts": "Shortcut: If momentum p increases by x%, K increases by (2x + x^2/100)%. For small x (<10%), \u0394K/K \u2248 2 \u0394p/p."
    },
    "formulaBank": [
      "Work W = F \u00b7 s = Integral(F dx)",
      "Work-Energy Theorem W_net = Delta(K)",
      "Conservative Force F = -dU / dx",
      "Spring Potential Energy U = 0.5 * k * x^2",
      "Kinetic Energy K = p^2 / (2 * m)"
    ],
    "ncertFacts": [
      "Work done by centripetal force in uniform circular motion is identically zero.",
      "Potential energy is defined only up to an arbitrary additive constant."
    ],
    "commonMistakes": [
      "Defining potential energy for non-conservative forces like friction.",
      "Forgetting sign of work when force and displacement are opposite (cos 180\u00b0 = -1)."
    ],
    "flashcards": [
      {
        "id": "fc_wep_1",
        "question": "Condition for stable equilibrium in terms of potential energy U?",
        "answer": "dU/dx = 0 and d^2U/dx^2 > 0 (U is local minimum)."
      },
      {
        "id": "fc_wep_2",
        "question": "Relation between momentum p and kinetic energy K?",
        "answer": "K = p^2 / (2m) or p = \u221a(2mK)."
      }
    ]
  },
  {
    "topicId": "phy_collisions",
    "topicTitle": "Collisions & Power",
    "chapterTitle": "Work, Energy & Power",
    "subject": "Physics",
    "detailedNotes": "Collisions: Linear momentum conserved in all isolated collisions.\nCoefficient of Restitution: e = (v2 - v1) / (u1 - u2).\n\u2022 Elastic Collision (e = 1): K is conserved.\n\u2022 Perfectly Inelastic Collision (e = 0): Bodies stick together, v_common = (m1 u1 + m2 u2) / (m1 + m2).\nPower P = dW/dt = F \u00b7 v.",
    "shortNotes": "1. Momentum conserved in ALL isolated collisions.\n2. e = relative velocity of separation / relative velocity of approach.\n3. Elastic e = 1, Inelastic 0 < e < 1, Perfectly Inelastic e = 0.\n4. Equal masses in 1D elastic collision exchange velocities!\n5. Power P = F \u00b7 v = F v cos \u03b8.",
    "multiTierNotes": {
      "tier1DetailedNCERT": "Momentum conservation follows directly from Newton Third Law during collision interaction time dt.",
      "tier2HighYieldShort": "\u2022 Equal Mass Elastic Collision: Bodies swap velocities (v1 = u2, v2 = u1).\n\u2022 Bouncing Ball Height after n rebounds: h_n = e^(2n) h_0.\n\u2022 Instantaneous Power P = F v cos \u03b8.",
      "tier3ConceptualVisualMechanisms": "Restitution Scale: e = 1 elastic spring bounce; e = 0 clay latching together.",
      "tier4TopperTricksShortcuts": "Topper Rule: Velocity exchange rule for identical masses in 1D head-on elastic collision solves MCQs in 2 seconds!"
    },
    "formulaBank": [
      "Coefficient of Restitution e = (v2 - v1) / (u1 - u2)",
      "Common Inelastic Velocity v_c = (m1*u1 + m2*u2) / (m1 + m2)",
      "Energy Loss in Inelastic Collision Delta(K) = 0.5 * [m1*m2/(m1+m2)] * (u1 - u2)^2",
      "Rebound Height after n bounces h_n = e^(2n) * h_0",
      "Power P = F \u00b7 v = dW / dt"
    ],
    "ncertFacts": [
      "In an inelastic collision, total mechanical energy is lost as heat, sound, or deformation energy.",
      "Center of mass velocity remains constant during an internal collision."
    ],
    "commonMistakes": [
      "Assuming kinetic energy is conserved in inelastic collisions.",
      "Confusing average power with instantaneous power."
    ],
    "flashcards": [
      {
        "id": "fc_coll_1",
        "question": "What happens when a 2kg ball elastically collides head-on with a stationary 2kg ball?",
        "answer": "First ball stops completely, second ball moves with initial velocity of first ball."
      },
      {
        "id": "fc_coll_2",
        "question": "Height reached after 2 bounces with e = 0.5 from h0 = 16m?",
        "answer": "h2 = e^4 * h0 = (1/16) * 16 = 1 meter."
      }
    ]
  },
  {
    "topicId": "phy_center_of_mass",
    "topicTitle": "Center of Mass & Linear Momentum",
    "chapterTitle": "System of Particles & Rigid Body",
    "subject": "Physics",
    "detailedNotes": "Center of Mass (COM): Mass-weighted average position.\nr_COM = \u03a3(m_i r_i) / \u03a3m_i.\nCOM Velocity: v_COM = \u03a3(m_i v_i) / M = P_total / M.\nCOM Acceleration: a_COM = F_external_net / M.\nIf F_external = 0, v_COM = constant. System linear momentum P_total is conserved.",
    "shortNotes": "1. r_COM = (m1 r1 + m2 r2) / (m1 + m2).\n2. Distance of COM from m1: x1 = [m2 / (m1 + m2)] d.\n3. v_COM = (m1 v1 + m2 v2) / (m1 + m2).\n4. If F_ext = 0, v_COM is constant and P_total conserved.\n5. Semicircular Wire COM = 2R/\u03c0; Solid Hemisphere COM = 3R/8.",
    "multiTierNotes": {
      "tier1DetailedNCERT": "System of particles can be represented as a single point mass located at center of mass subject to external forces.",
      "tier2HighYieldShort": "\u2022 Uniform Semicircular Ring COM: y_COM = 2R / \u03c0.\n\u2022 Uniform Semicircular Disc COM: y_COM = 4R / (3\u03c0).\n\u2022 Uniform Solid Cone COM: h / 4 from base.\n\u2022 Uniform Hollow Cone COM: h / 3 from base.",
      "tier3ConceptualVisualMechanisms": "Internal Explosion: Internal forces cancel in pairs; center of mass continues along unchanged original trajectory.",
      "tier4TopperTricksShortcuts": "Shortcut for Boat-Man Problem: If man walks x relative to boat of mass M, boat shifts by \u0394x_boat = [m / (m + M)] x backwards."
    },
    "formulaBank": [
      "r_COM = Sum(m_i * r_i) / Total Mass",
      "Two Body COM Distance x1 = m2 * d / (m1 + m2)",
      "v_COM = Sum(m_i * v_i) / Total Mass",
      "Shift in COM: Delta(x_COM) = Sum(m_i * Delta(x_i)) / Total Mass = 0 (if F_ext = 0)",
      "Semicircular Disc COM y_COM = 4 * R / (3 * pi)"
    ],
    "ncertFacts": [
      "Center of mass of a body need not lie inside the material of the body (e.g. ring, hollow sphere).",
      "Internal forces can change kinetic energy of a system, but cannot change velocity of center of mass."
    ],
    "commonMistakes": [
      "Assuming center of mass and center of gravity are always identical.",
      "Including internal friction/forces when calculating a_COM."
    ],
    "flashcards": [
      {
        "id": "fc_com_1",
        "question": "COM position for a uniform solid hemisphere of radius R?",
        "answer": "3R / 8 from flat circular base."
      },
      {
        "id": "fc_com_2",
        "question": "If a bomb exploding in mid-air splits, what path does its COM follow?",
        "answer": "The exact same original parabolic trajectory under gravity."
      }
    ]
  },
  {
    "topicId": "phy_rotational_motion",
    "topicTitle": "Torque, Angular Momentum & Moment of Inertia",
    "chapterTitle": "System of Particles & Rigid Body",
    "subject": "Physics",
    "detailedNotes": "Torque \u03c4 = r \u00d7 F = I \u03b1.\nAngular Momentum L = r \u00d7 p = I \u03c9.\nConservation of Angular Momentum: If \u03c4_ext = 0, L = I1 \u03c91 = I2 \u03c92 = constant.\nMoment of Inertia I = \u03a3 m_i r_i^2 = \u222b r^2 dm.\n\u2022 Parallel Axis Theorem: I = I_com + M d^2.\n\u2022 Perpendicular Axis Theorem (for planar lamina): I_z = I_x + I_y.\nRotational Kinetic Energy K_rot = 0.5 I \u03c9^2.\nRolling Motion without Slipping: v_com = R \u03c9, Total K = K_trans + K_rot = 0.5 M v^2 (1 + k^2/R^2).",
    "shortNotes": "1. \u03c4 = r \u00d7 F = I \u03b1.\n2. L = r \u00d7 p = I \u03c9.\n3. Conservation of Angular Momentum: I1 \u03c91 = I2 \u03c92.\n4. Parallel Axis Thm: I = I_cm + M d^2; Perpendicular Axis Thm: Iz = Ix + Iy.\n5. Rolling Total K = 0.5 M v^2 (1 + k^2 / R^2).",
    "multiTierNotes": {
      "tier1DetailedNCERT": "Rotational analog of mass is moment of inertia I. Rotational analog of force is torque \u03c4. Rotational analog of momentum is angular momentum L.",
      "tier2HighYieldShort": "\u2022 Ring I_center = M R^2.\n\u2022 Disc I_center = 0.5 M R^2.\n\u2022 Solid Sphere I_center = (2/5) M R^2.\n\u2022 Hollow Sphere I_center = (2/3) M R^2.\n\u2022 Acceleration on Incline without slipping: a = g sin \u03b8 / (1 + k^2/R^2).",
      "tier3ConceptualVisualMechanisms": "Figure Skater Effect: Pulling arms inward reduces I, causing \u03c9 to increase proportionally so L = I \u03c9 stays constant.",
      "tier4TopperTricksShortcuts": "Rolling Down Incline Race: Acceleration order is Sphere > Disc > Hollow Sphere > Ring! Solid sphere reaches bottom first."
    },
    "formulaBank": [
      "Torque tau = r x F = I * alpha",
      "Angular Momentum L = I * omega",
      "Parallel Axis Theorem I = I_com + M * d^2",
      "Perpendicular Axis Theorem I_z = I_x + I_y",
      "Rolling Acceleration on Incline a = (g * sin theta) / (1 + k^2 / R^2)"
    ],
    "ncertFacts": [
      "Perpendicular axis theorem is applicable ONLY to thin flat two-dimensional planar laminas.",
      "In pure rolling without slipping, instantaneous point of contact with ground is at rest (v_contact = 0)."
    ],
    "commonMistakes": [
      "Applying perpendicular axis theorem to 3D solid objects like spheres or cylinders.",
      "Assuming friction does work in pure rolling."
    ],
    "flashcards": [
      {
        "id": "fc_rot_1",
        "question": "Which body reaches bottom of inclined plane first in pure rolling race?",
        "answer": "Solid Sphere (lowest k^2/R^2 = 2/5 = 0.4, highest acceleration)."
      },
      {
        "id": "fc_rot_2",
        "question": "Moment of inertia of a uniform disc about its diameter?",
        "answer": "I_diameter = 0.25 M R^2 (using perpendicular axis theorem Iz = Ix + Iy)."
      }
    ]
  },
  {
    "topicId": "phy_kepler_laws",
    "topicTitle": "Kepler Laws & Universal Gravitation",
    "chapterTitle": "Gravitation",
    "subject": "Physics",
    "detailedNotes": "Newton Law of Gravitation: F = G m1 m2 / r^2.\nKepler First Law: Elliptical orbits with Sun at focus.\nKepler Second Law: Areal velocity dA/dt = L / (2m) = constant.\nKepler Third Law: T^2 \u221d a^3.",
    "shortNotes": "1. F = G m1 m2 / r^2.\n2. Kepler 1st: Elliptical orbits.\n3. Kepler 2nd: dA/dt = L / (2m) = constant.\n4. Kepler 3rd: T^2 \u221d r^3.\n5. Acceleration due to gravity g = G M / R^2.",
    "multiTierNotes": {
      "tier1DetailedNCERT": "Gravitational force is a conservative, central, universal attractive force obeying inverse-square law.",
      "tier2HighYieldShort": "\u2022 Variation of g with Altitude h: g_h = g (1 - 2h/R) for h << R.\n\u2022 Variation of g with Depth d: g_d = g (1 - d/R).\n\u2022 Variation of g with Latitude \u03bb: g_\u03bb = g - R \u03c9^2 cos^2 \u03bb.",
      "tier3ConceptualVisualMechanisms": "Central Force Mechanism: Gravitational force exerts zero torque, conserving angular momentum L.",
      "tier4TopperTricksShortcuts": "Shortcut: Weightlessness at equator occurs when g - R \u03c9^2 = 0 => \u03c9 = \u221a(g/R) \u2248 1.23 \u00d7 10^-3 rad/s."
    },
    "formulaBank": [
      "F = G * m1 * m2 / r^2",
      "Areal Velocity dA / dt = L / (2 * m)",
      "Kepler Third Law T^2 = (4 * pi^2 / (G * M)) * r^3",
      "g at height h: g_h = g / (1 + h/R)^2 approx g * (1 - 2h/R)",
      "g at depth d: g_d = g * (1 - d/R)",
      "g at latitude lambda: g_lambda = g - R * omega^2 * cos^2(lambda)"
    ],
    "ncertFacts": [
      "Kepler second law is a direct physical consequence of conservation of angular momentum.",
      "Acceleration due to gravity g is maximum at Earth poles and minimum at equator."
    ],
    "commonMistakes": [
      "Using linear approximation g_h = g(1 - 2h/R) when height h is comparable to Earth radius R.",
      "Confusing universal gravitational constant G with local acceleration due to gravity g."
    ],
    "flashcards": [
      {
        "id": "fc_grav_1",
        "question": "Value of g at depth d = R/2 below Earth surface?",
        "answer": "g_d = g (1 - (R/2)/R) = g / 2."
      },
      {
        "id": "fc_grav_2",
        "question": "Why is areal velocity of a planet constant in its orbit?",
        "answer": "Because central gravitational force exerts zero torque, conserving angular momentum L."
      }
    ]
  },
  {
    "topicId": "phy_grav_potential",
    "topicTitle": "Gravitational Potential Energy & Satellites",
    "chapterTitle": "Gravitation",
    "subject": "Physics",
    "detailedNotes": "Gravitational Potential Energy U = - G M m / r.\nGravitational Potential V = - G M / r.\nOrbital Velocity of Satellite: v_o = \u221a(G M / r).\nEscape Velocity: v_e = \u221a(2 G M / R) = \u221a(2 g R) \u2248 11.2 km/s.\nv_e = \u221a2 * v_o.\nGeostationary Satellite: Period T = 24 hours, height h \u2248 36,000 km.",
    "shortNotes": "1. U = - G M m / r, V = - G M / r.\n2. Escape Velocity v_e = \u221a(2 g R) \u2248 11.2 km/s.\n3. Orbital Velocity v_o = \u221a(g R) \u2248 7.9 km/s.\n4. v_e = \u221a2 v_o.\n5. Total Energy of Satellite E = - G M m / (2r) = - K = U / 2.",
    "multiTierNotes": {
      "tier1DetailedNCERT": "Gravitational potential energy is zero at infinity and negative everywhere in finite space due to attractive nature.",
      "tier2HighYieldShort": "\u2022 Satellite Kinetic Energy K = G M m / (2r).\n\u2022 Satellite Potential Energy U = - G M m / r.\n\u2022 Satellite Binding / Total Energy E = - G M m / (2r).\n\u2022 Relationship: E = - K = U / 2.",
      "tier3ConceptualVisualMechanisms": "Gravitational Well: Escape velocity provides sufficient kinetic energy to exit potential well.",
      "tier4TopperTricksShortcuts": "Binding Energy Shortcut: To eject a satellite of mass m from orbit radius r to infinity, supply energy \u0394E = G M m / (2r)."
    },
    "formulaBank": [
      "Gravitational Potential Energy U = - G * M * m / r",
      "Gravitational Potential V = - G * M / r",
      "Escape Velocity v_e = sqrt(2 * G * M / R) = sqrt(2 * g * R)",
      "Orbital Velocity v_o = sqrt(G * M / r)",
      "Satellite Total Energy E = - G * M * m / (2 * r)"
    ],
    "ncertFacts": [
      "Escape velocity is independent of mass and angle of projection of the body.",
      "Geostationary satellites must revolve in the equatorial plane from west to east."
    ],
    "commonMistakes": [
      "Thinking escape velocity depends on projection angle.",
      "Forgetting negative sign in gravitational potential and potential energy."
    ],
    "flashcards": [
      {
        "id": "fc_sat_1",
        "question": "Ratio of escape velocity to orbital velocity near Earth surface?",
        "answer": "v_e / v_o = \u221a2 \u2248 1.414."
      },
      {
        "id": "fc_sat_2",
        "question": "What is total mechanical energy of a satellite orbiting at radius r?",
        "answer": "E = - G M m / (2r) = - Kinetic Energy."
      }
    ]
  },
  {
    "topicId": "phy_elasticity",
    "topicTitle": "Elasticity & Hooke Law",
    "chapterTitle": "Properties of Bulk Matter & Fluids",
    "subject": "Physics",
    "detailedNotes": "Stress = F/A. Strain = \u0394L/L.\nHooke Law: Stress = Modulus of Elasticity \u00d7 Strain.\n1. Young Modulus Y = (F L) / (A \u0394L).\n2. Bulk Modulus B = - \u0394P / (\u0394V/V). Compressibility K = 1 / B.\n3. Shear Modulus \u03b7 = (F/A) / \u03b8.\nStrain Energy Density u = 0.5 \u00d7 Stress \u00d7 Strain.\nPoisson Ratio \u03c3 = Lateral Strain / Longitudinal Strain.",
    "shortNotes": "1. Hooke Law: Stress \u221d Strain.\n2. Young Modulus Y = (F L) / (A \u0394L).\n3. Bulk Modulus B = - V \u0394P / \u0394V, Compressibility K = 1/B.\n4. Strain Energy Density u = 0.5 \u00d7 Stress \u00d7 Strain.\n5. Steel is more elastic than rubber (higher Y!).",
    "multiTierNotes": {
      "tier1DetailedNCERT": "Stress-strain curve exhibits proportional limit, yield point, permanent set, ultimate tensile strength, and fracture point.",
      "tier2HighYieldShort": "\u2022 Work done in stretching wire W = 0.5 F \u0394L.\n\u2022 Energy Density u = W / Volume = 0.5 Y (\u0394L/L)^2.\n\u2022 Thermal Stress = Y \u03b1 \u0394T, Thermal Force = Y A \u03b1 \u0394T.",
      "tier3ConceptualVisualMechanisms": "Interatomic Potential Well: Steeper slope of force-distance curve at equilibrium corresponds to higher Young modulus.",
      "tier4TopperTricksShortcuts": "Shortcut: Steel vs Rubber: Y_steel > Y_rubber because for same stress, steel produces much smaller strain \u0394L."
    },
    "formulaBank": [
      "Young Modulus Y = (F * L) / (A * Delta_L)",
      "Bulk Modulus B = - V * Delta_P / Delta_V",
      "Compressibility K = 1 / B",
      "Energy Density u = 0.5 * Stress * Strain = 0.5 * Y * (Strain)^2",
      "Thermal Force F = Y * A * alpha * Delta_T"
    ],
    "ncertFacts": [
      "Steel is more elastic than rubber because Young modulus of steel is greater.",
      "Poisson ratio cannot theoretically exceed 0.5 for isotropic solids."
    ],
    "commonMistakes": [
      "Believing rubber is more elastic than steel because it stretches more.",
      "Forgetting factor of 0.5 in work done stretching a wire W = 0.5 F \u0394L."
    ],
    "flashcards": [
      {
        "id": "fc_elast_1",
        "question": "Formula for strain energy stored in a stretched wire of length L and extension x?",
        "answer": "W = 0.5 * F * x = 0.5 * (Y A / L) * x^2."
      },
      {
        "id": "fc_elast_2",
        "question": "Thermal stress in a rod clamped rigidly between two walls when heated by \u0394T?",
        "answer": "Stress = Y * \u03b1 * \u0394T."
      }
    ]
  },
  {
    "topicId": "phy_fluid_statics_dynamics",
    "topicTitle": "Pascal Law, Bernoulli Theorem & Viscosity",
    "chapterTitle": "Properties of Bulk Matter & Fluids",
    "subject": "Physics",
    "detailedNotes": "Pascal Law: Pressure in fluid at rest transmitted undiminished in all directions.\nHydrostatic Pressure P = P_0 + \u03c1 g h.\nArchimedes Principle: Upthrust = Weight of fluid displaced = V_submerged \u03c1_fluid g.\nContinuity Equation: A1 v1 = A2 v2.\nBernoulli Theorem: P + 0.5 \u03c1 v^2 + \u03c1 g h = Constant.\nTorricelli Law: v = \u221a(2 g h).\nTerminal Velocity v_t = 2 r^2 (\u03c1 - \u03c3) g / (9 \u03b7).",
    "shortNotes": "1. Hydrostatic Pressure P = P0 + \u03c1 g h.\n2. Continuity Eq: A1 v1 = A2 v2.\n3. Bernoulli Eq: P + 0.5 \u03c1 v^2 + \u03c1 g h = Constant.\n4. Efflux Velocity v = \u221a(2 g h).\n5. Terminal Velocity v_t \u221d r^2.",
    "multiTierNotes": {
      "tier1DetailedNCERT": "Ideal fluids are non-viscous, incompressible, streamline, and irrotational.",
      "tier2HighYieldShort": "\u2022 Venturimeter flow speed: v1 = A2 \u221a[ 2 g h / (A1^2 - A2^2) ].\n\u2022 Magnus Effect: Spinning ball creates velocity difference, producing dynamic lift.\n\u2022 Reynolds Number N_R = \u03c1 v d / \u03b7.",
      "tier3ConceptualVisualMechanisms": "Bernoulli Pressure Drop: High velocity region creates LOW static pressure region.",
      "tier4TopperTricksShortcuts": "Terminal Velocity Scaling: v_t \u221d r^2. If 8 identical small droplets merge into 1 big drop, R = 2r, so V_t = 4 v_t!"
    },
    "formulaBank": [
      "Pressure P = P0 + rho * g * h",
      "Continuity Equation A1 * v1 = A2 * v2",
      "Bernoulli Theorem P + 0.5 * rho * v^2 + rho * g * h = Constant",
      "Torricelli Speed of Efflux v = sqrt(2 * g * h)",
      "Stokes Law Viscous Drag F = 6 * pi * eta * r * v",
      "Terminal Velocity v_t = (2/9) * r^2 * (rho - sigma) * g / eta"
    ],
    "ncertFacts": [
      "Bernoulli principle represents conservation of energy for streamline flow of ideal fluids.",
      "Terminal velocity is directly proportional to square of sphere radius (v_t \u221d r^2)."
    ],
    "commonMistakes": [
      "Applying Bernoulli theorem to turbulent or viscous fluid flow.",
      "Assuming higher velocity fluid corresponds to higher static pressure."
    ],
    "flashcards": [
      {
        "id": "fc_fluid_1",
        "question": "Terminal velocity of small sphere in viscous fluid scales with radius r as?",
        "answer": "v_t \u221d r^2."
      },
      {
        "id": "fc_fluid_2",
        "question": "Efflux speed from small hole at depth h below open water surface?",
        "answer": "v = \u221a(2 g h) (Torricelli theorem)."
      }
    ]
  },
  {
    "topicId": "phy_surface_tension",
    "topicTitle": "Surface Tension & Capillarity",
    "chapterTitle": "Properties of Bulk Matter & Fluids",
    "subject": "Physics",
    "detailedNotes": "Surface Tension T = Force / Length = Surface Energy / Area.\nExcess Pressure:\n\u2022 Liquid Drop: \u0394P = 2T / R.\n\u2022 Soap Bubble (2 surfaces): \u0394P = 4T / R.\n\u2022 Air Bubble inside liquid: \u0394P = 2T / R.\nCapillary Rise: h = (2 T cos \u03b8) / (r \u03c1 g).\nAngle of Contact \u03b8: \u03b8 < 90\u00b0 for wetting liquids; \u03b8 > 90\u00b0 for non-wetting liquids.",
    "shortNotes": "1. Surface Tension T = F / L = W / \u0394A.\n2. Excess pressure liquid drop \u0394P = 2T/R.\n3. Excess pressure soap bubble \u0394P = 4T/R.\n4. Capillary rise h = (2 T cos \u03b8) / (r \u03c1 g).\n5. Water-glass \u03b8 \u2248 0\u00b0 (rises); Mercury-glass \u03b8 \u2248 138\u00b0 (depresses).",
    "multiTierNotes": {
      "tier1DetailedNCERT": "Surface tension arises from unbalanced inward cohesive molecular attractive forces acting on liquid surface molecules.",
      "tier2HighYieldShort": "\u2022 Work done spraying large drop of radius R into n small droplets: W = 4 \u03c0 R^2 T (n^(1/3) - 1).\n\u2022 Temperature effect: Surface tension decreases with increase in temperature.",
      "tier3ConceptualVisualMechanisms": "Stretched Elastic Membrane Analogy: Liquid surface behaves like a stretched elastic film seeking minimum surface area.",
      "tier4TopperTricksShortcuts": "Jurin Law Shortcut: Capillary height h \u221d 1/r. If tube radius is halved, capillary height doubles!"
    },
    "formulaBank": [
      "Surface Tension T = F / L = Surface Energy / Area",
      "Excess Pressure (Liquid Drop) Delta_P = 2 * T / R",
      "Excess Pressure (Soap Bubble) Delta_P = 4 * T / R",
      "Capillary Height h = (2 * T * cos theta) / (r * rho * g)",
      "Work in Blowing Soap Bubble W = 8 * pi * R^2 * T"
    ],
    "ncertFacts": [
      "Adding detergent or soap reduces surface tension of water, facilitating cleaning.",
      "Angle of contact is acute for wetting liquids and obtuse for non-wetting liquids."
    ],
    "commonMistakes": [
      "Using 2T/R for soap bubble instead of 4T/R.",
      "Forgetting that surface tension vanishes at the critical temperature."
    ],
    "flashcards": [
      {
        "id": "fc_surf_1",
        "question": "Excess pressure inside a soap bubble of radius R and surface tension T?",
        "answer": "\u0394P = 4T / R."
      },
      {
        "id": "fc_surf_2",
        "question": "What happens to capillary rise height if tube radius is halved?",
        "answer": "Capillary height doubles (h \u221d 1/r)."
      }
    ]
  },
  {
    "topicId": "phy_thermo_laws",
    "topicTitle": "Thermodynamic Laws & Processes",
    "chapterTitle": "Thermodynamics & Kinetic Theory",
    "subject": "Physics",
    "detailedNotes": "First Law of Thermodynamics: \u0394Q = \u0394U + W.\nInternal Energy U: f/2 n R T for ideal gas.\nProcesses:\n1. Isothermal (T = const): \u0394U = 0, Q = W = n R T ln(V2/V1).\n2. Isochoric (V = const): W = 0, Q = \u0394U = n C_v \u0394T.\n3. Isobaric (P = const): W = P \u0394V = n R \u0394T, Q = n C_p \u0394T.\n4. Adiabatic (Q = 0): P V^\u03b3 = const, W = n R (T1 - T2) / (\u03b3 - 1).",
    "shortNotes": "1. First Law: \u0394Q = \u0394U + W.\n2. Isothermal: T = const, \u0394U = 0, W = nRT ln(V2/V1).\n3. Adiabatic: Q = 0, P V^\u03b3 = const, W = nR(T1-T2)/(\u03b3-1).\n4. Isochoric: V = const, W = 0, Q = \u0394U = n C_v \u0394T.\n5. Slope of adiabatic curve on P-V diagram is \u03b3 times slope of isothermal curve!",
    "multiTierNotes": {
      "tier1DetailedNCERT": "Zeroth law defines temperature. First law expresses conservation of energy. Second law dictates direction of thermal process spontaneity.",
      "tier2HighYieldShort": "\u2022 Adiabatic Index \u03b3 = C_p / C_v = 1 + 2/f.\n\u2022 Monoatomic f=3, \u03b3=5/3; Diatomic f=5, \u03b3=7/5.\n\u2022 Work done in P-V diagram = Area enclosed by loop.",
      "tier3ConceptualVisualMechanisms": "P-V Slope Comparison: dp/dV_adiabatic = - \u03b3 (P/V), while dp/dV_isothermal = - (P/V). Adiabatic curve is steeper!",
      "tier4TopperTricksShortcuts": "Topper Shortcut: Cyclic Process Work W = Area inside curve. Clockwise loop = Positive Work; Counter-clockwise loop = Negative Work."
    },
    "formulaBank": [
      "First Law Delta_Q = Delta_U + W",
      "Isothermal Work W = n * R * T * ln(V2 / V1)",
      "Adiabatic Relation P * V^gamma = Constant",
      "Adiabatic Work W = (P1*V1 - P2*V2) / (gamma - 1) = n*R*(T1 - T2) / (gamma - 1)",
      "Internal Energy Delta_U = n * C_v * Delta_T = (f/2) * n * R * Delta_T"
    ],
    "ncertFacts": [
      "Internal energy of an ideal gas depends solely on its absolute temperature T.",
      "Work done in a thermodynamic cycle is given by the area enclosed by the cyclic loop on a P-V diagram."
    ],
    "commonMistakes": [
      "Thinking internal energy depends on volume or pressure for an ideal gas.",
      "Using C_p instead of C_v when calculating \u0394U in non-isobaric processes."
    ],
    "flashcards": [
      {
        "id": "fc_th_1",
        "question": "Work done during an isochoric thermodynamic process?",
        "answer": "Zero (since \u0394V = 0, W = \u222bP dV = 0)."
      },
      {
        "id": "fc_th_2",
        "question": "Ratio of adiabatic slope to isothermal slope on P-V diagram?",
        "answer": "Ratio = \u03b3 = C_p / C_v."
      }
    ]
  },
  {
    "topicId": "phy_heat_engines",
    "topicTitle": "Heat Engines & Carnot Cycle",
    "chapterTitle": "Thermodynamics & Kinetic Theory",
    "subject": "Physics",
    "detailedNotes": "Heat Engine: Absorbs Q1 at source T1, performs work W, rejects Q2 at sink T2.\nEfficiency \u03b7 = W / Q1 = 1 - Q2 / Q1.\nCarnot Efficiency \u03b7_carnot = 1 - T2 / T1 (T in Kelvin!).\nRefrigerator COP \u03b2 = Q2 / W = T2 / (T1 - T2).\nRelationship: \u03b2 = (1 - \u03b7) / \u03b7.",
    "shortNotes": "1. Heat Engine Efficiency \u03b7 = 1 - Q2/Q1.\n2. Carnot Efficiency \u03b7_carnot = 1 - T2/T1 (T in Kelvin!).\n3. Refrigerator COP \u03b2 = Q2 / W = T2 / (T1 - T2).\n4. Relation: \u03b2 = (1 - \u03b7) / \u03b7.\n5. Carnot efficiency depends ONLY on source and sink temperatures.",
    "multiTierNotes": {
      "tier1DetailedNCERT": "Carnot cycle is a theoretical thermodynamic reversible cycle providing maximum possible efficiency between two thermal reservoirs.",
      "tier2HighYieldShort": "\u2022 Carnot Cycle 4 Steps: 1. Isothermal Expansion -> 2. Adiabatic Expansion -> 3. Isothermal Compression -> 4. Adiabatic Compression.\n\u2022 Carnot Theorem: No real engine operating between two given temperatures can be more efficient than a Carnot engine.",
      "tier3ConceptualVisualMechanisms": "Thermal Reservoir Flow: Work extracted is difference between high-temp energy input and low-temp heat output.",
      "tier4TopperTricksShortcuts": "Shortcut: If Carnot engine efficiency is 50% with sink at 300K, source T1 = 600K (327\u00b0C)."
    },
    "formulaBank": [
      "Engine Efficiency eta = 1 - Q2 / Q1",
      "Carnot Efficiency eta_carnot = 1 - T2 / T1",
      "Refrigerator COP beta = Q2 / W = T2 / (T1 - T2)",
      "Relation beta = (1 - eta) / eta"
    ],
    "ncertFacts": [
      "Carnot engine efficiency can reach 100% ONLY if sink temperature T2 = 0 K.",
      "COP of a household refrigerator is typically around 2 to 6."
    ],
    "commonMistakes": [
      "Plugging temperatures in Celsius instead of Kelvin in Carnot efficiency formulas.",
      "Confusing Q1 with Q2."
    ],
    "flashcards": [
      {
        "id": "fc_eng_1",
        "question": "Efficiency of a Carnot engine operating between 127\u00b0C and 27\u00b0C?",
        "answer": "\u03b7 = 1 - (300 / 400) = 0.25 = 25%."
      },
      {
        "id": "fc_eng_2",
        "question": "Relation between Refrigerator COP \u03b2 and Carnot Efficiency \u03b7?",
        "answer": "\u03b2 = (1 - \u03b7) / \u03b7."
      }
    ]
  },
  {
    "topicId": "phy_ktg",
    "topicTitle": "Kinetic Theory of Gases & Degrees of Freedom",
    "chapterTitle": "Thermodynamics & Kinetic Theory",
    "subject": "Physics",
    "detailedNotes": "Ideal Gas Equation: P V = n R T = N k_B T.\nGas Speeds:\n1. v_rms = \u221a(3 R T / M).\n2. v_avg = \u221a(8 R T / (\u03c0 M)).\n3. v_mp = \u221a(2 R T / M).\nRatio v_mp : v_avg : v_rms = 1 : 1.128 : 1.225.\nEquipartition of Energy: Energy per degree of freedom = 0.5 k_B T.\nDegrees of Freedom f: Monoatomic f=3; Diatomic f=5.\nMean Free Path: \u03bb = 1 / (\u221a2 \u03c0 d^2 n_v).",
    "shortNotes": "1. P V = n R T.\n2. v_rms = \u221a(3RT/M), v_avg = \u221a(8RT/\u03c0M), v_mp = \u221a(2RT/M).\n3. v_rms > v_avg > v_mp (RAM rule).\n4. Energy per degree of freedom = 0.5 k_B T.\n5. Mean Free Path \u03bb \u221d T / P.",
    "multiTierNotes": {
      "tier1DetailedNCERT": "Ideal gas postulates: Point masses, negligible intermolecular forces except during elastic collisions.",
      "tier2HighYieldShort": "\u2022 Total Kinetic Energy of 1 mole ideal gas = 0.5 f R T.\n\u2022 C_v = (f/2) R, C_p = (f/2 + 1) R, \u03b3 = 1 + 2/f.\n\u2022 Mean free path \u03bb \u221d T / P.",
      "tier3ConceptualVisualMechanisms": "Maxwell-Boltzmann Speed Distribution Curve: As temperature T increases, peak shifts right and flattens out.",
      "tier4TopperTricksShortcuts": "RAM Shortcut for Gas Speeds: v_RMS > v_Average > v_MostProbable (Remember word RAM!)."
    },
    "formulaBank": [
      "Ideal Gas Equation P * V = n * R * T",
      "v_rms = sqrt(3 * R * T / M)",
      "v_avg = sqrt(8 * R * T / (pi * M))",
      "v_mp = sqrt(2 * R * T / M)",
      "Internal Energy U = (f/2) * n * R * T",
      "Mean Free Path lambda = 1 / (sqrt(2) * pi * d^2 * n_v)"
    ],
    "ncertFacts": [
      "At absolute zero temperature (0 K), molecular kinetic energy becomes zero.",
      "Internal energy of an ideal gas consists purely of kinetic energy."
    ],
    "commonMistakes": [
      "Using molar mass M in grams instead of kilograms in v_rms.",
      "Confusing total number of molecules N with number of moles n."
    ],
    "flashcards": [
      {
        "id": "fc_ktg_1",
        "question": "Ordering of v_rms, v_avg, and v_mp for gas molecules?",
        "answer": "v_rms > v_avg > v_mp (RAM Rule)."
      },
      {
        "id": "fc_ktg_2",
        "question": "Internal energy of 2 moles of monoatomic gas at temperature T?",
        "answer": "U = (3/2) * 2 * R * T = 3 R T."
      }
    ]
  },
  {
    "topicId": "phy_shm",
    "topicTitle": "Simple Harmonic Motion (SHM)",
    "chapterTitle": "Oscillations & Waves",
    "subject": "Physics",
    "detailedNotes": "SHM Differential Equation: d^2x/dt^2 + \u03c9^2 x = 0.\nRestoring Force: F = - k x = - m \u03c9^2 x.\nDisplacement: x(t) = A sin(\u03c9 t + \u03d5).\nVelocity: v = \u00b1 \u03c9 \u221a(A^2 - x^2).\nAcceleration: a = - \u03c9^2 x.\nEnergy in SHM:\n\u2022 K = 0.5 m \u03c9^2 (A^2 - x^2).\n\u2022 U = 0.5 m \u03c9^2 x^2.\n\u2022 E = K + U = 0.5 m \u03c9^2 A^2 = constant.\nTime Period:\n\u2022 Simple Pendulum: T = 2 \u03c0 \u221a(L / g).\n\u2022 Spring Mass System: T = 2 \u03c0 \u221a(m / k).",
    "shortNotes": "1. F = - k x => a = - \u03c9^2 x.\n2. x = A sin(\u03c9 t + \u03d5).\n3. v = \u00b1 \u03c9 \u221a(A^2 - x^2), v_max = A \u03c9.\n4. Total Energy E = 0.5 m \u03c9^2 A^2.\n5. Simple Pendulum T = 2 \u03c0 \u221a(L/g); Spring T = 2 \u03c0 \u221a(m/k).",
    "multiTierNotes": {
      "tier1DetailedNCERT": "SHM is projection of uniform circular motion on any diameter of the reference circle.",
      "tier2HighYieldShort": "\u2022 Position where K = U: x = \u00b1 A / \u221a2.\n\u2022 Average K over one cycle = Average U = 0.25 m \u03c9^2 A^2 = 0.5 E.\n\u2022 Combination of Springs:\n  - Series: 1/k_eq = 1/k1 + 1/k2.\n  - Parallel: k_eq = k1 + k2.",
      "tier3ConceptualVisualMechanisms": "Energy Oscillation Frequency: K and U oscillate with TWICE the frequency 2f of displacement!",
      "tier4TopperTricksShortcuts": "Shortcut: Simple pendulum time period on accelerating lift: T = 2 \u03c0 \u221a(L / g_eff)."
    },
    "formulaBank": [
      "SHM Equation a = - omega^2 * x",
      "Velocity v = +- omega * sqrt(A^2 - x^2)",
      "Total Energy E = 0.5 * m * omega^2 * A^2 = 0.5 * k * A^2",
      "Simple Pendulum Period T = 2 * pi * sqrt(L / g)",
      "Spring Mass Period T = 2 * pi * sqrt(m / k)"
    ],
    "ncertFacts": [
      "Frequency of kinetic energy and potential energy variation in SHM is twice the frequency of displacement oscillation (f_E = 2 f_SHM).",
      "Second pendulum has a time period of exactly 2.0 seconds."
    ],
    "commonMistakes": [
      "Confusing angular frequency \u03c9 = 2\u03c0/T with linear frequency f = 1/T.",
      "Assuming total energy varies with time."
    ],
    "flashcards": [
      {
        "id": "fc_shm_1",
        "question": "Displacement x where Kinetic Energy equals Potential Energy in SHM?",
        "answer": "x = \u00b1 A / \u221a2."
      },
      {
        "id": "fc_shm_2",
        "question": "Frequency of oscillation of kinetic energy if SHM frequency is 50 Hz?",
        "answer": "100 Hz."
      }
    ]
  },
  {
    "topicId": "phy_wave_motion",
    "topicTitle": "Wave Motion, Organ Pipes & Doppler Effect",
    "chapterTitle": "Oscillations & Waves",
    "subject": "Physics",
    "detailedNotes": "Wave Equation: y(x,t) = A sin(k x - \u03c9 t + \u03d5), where k = 2\u03c0/\u03bb, \u03c9 = 2\u03c0 f.\nWave Speed v = f \u03bb = \u03c9 / k.\nSpeed of Sound in Gas: Laplace formula v = \u221a(\u03b3 P / \u03c1) = \u221a(\u03b3 R T / M).\nOrgan Pipes:\n1. Open Organ Pipe: Fundamental f1 = v / (2L), all harmonics present fn = n f1 (n = 1, 2, 3...).\n2. Closed Organ Pipe: Fundamental f1 = v / (4L), only odd harmonics fn = (2n-1) f1 (1, 3, 5...).\nDoppler Effect: Apparent frequency f' = f [ (v \u00b1 v_observer) / (v \u2213 v_source) ].",
    "shortNotes": "1. y = A sin(k x - \u03c9 t), v = f \u03bb = \u03c9 / k.\n2. Speed of Sound in Gas v = \u221a(\u03b3 R T / M).\n3. Open Pipe: fn = n v / (2L) (all harmonics).\n4. Closed Pipe: fn = (2n-1) v / (4L) (odd harmonics only!).\n5. Doppler Effect: f' = f [ (v \u00b1 v_O) / (v \u2213 v_S) ].",
    "multiTierNotes": {
      "tier1DetailedNCERT": "Newton assumed sound propagation isothermal; Laplace corrected to adiabatic (v = \u221a(\u03b3 P/\u03c1) \u2248 332 m/s).",
      "tier2HighYieldShort": "\u2022 Beats: Frequency f_beat = |f1 - f2|.\n\u2022 Stretched String Tension v = \u221a(T / \u03bc), f1 = 0.5 \u221a(T / (\u03bc L^2)).\n\u2022 End Correction e in organ pipe: Open pipe L_eff = L + 2(0.6r); Closed pipe L_eff = L + 0.6r.",
      "tier3ConceptualVisualMechanisms": "Doppler Shift Mechanism: Motion toward source compresses wavefronts (shorter apparent wavelength).",
      "tier4TopperTricksShortcuts": "Dopper Sign Shortcut: Observer moving TOWARDS source -> (+ v_O). Source moving TOWARDS observer -> (- v_S)."
    },
    "formulaBank": [
      "Wave Speed v = f * lambda = omega / k",
      "Laplace Speed of Sound v = sqrt(gamma * R * T / M)",
      "Open Organ Pipe Frequency f_n = n * v / (2 * L)",
      "Closed Organ Pipe Frequency f_n = (2n - 1) * v / (4 * L)",
      "Beat Frequency f_beat = |f1 - f2|",
      "Doppler Formula f_app = f_0 * (v +- v_O) / (v -+ v_S)"
    ],
    "ncertFacts": [
      "Sound wave is a longitudinal mechanical wave requiring a material medium for propagation.",
      "Closed organ pipe produces ONLY odd harmonics."
    ],
    "commonMistakes": [
      "Confusing wave speed v = f \u03bb with particle velocity v_p = dy/dt.",
      "Applying wrong sign convention in Doppler formula."
    ],
    "flashcards": [
      {
        "id": "fc_wave_1",
        "question": "Fundamental frequency ratio of open pipe to closed pipe of same length L?",
        "answer": "f_open / f_closed = (v/2L) / (v/4L) = 2 : 1."
      },
      {
        "id": "fc_wave_2",
        "question": "Doppler apparent frequency when source moves toward stationary observer at speed v/5?",
        "answer": "f' = f [ v / (v - v/5) ] = f (5/4) = 1.25 f."
      }
    ]
  },
  {
    "topicId": "phy_coulomb_gauss",
    "topicTitle": "Coulomb Law & Gauss Theorem",
    "chapterTitle": "Electrostatics",
    "subject": "Physics",
    "detailedNotes": "Coulomb Law: F = (1 / (4\u03c0\u03b50)) * (q1 q2 / r^2), k = 9 \u00d7 10^9 N m^2 C^-2.\nElectric Field E = F / q = k q / r^2.\nElectric Dipole: Dipole moment p = q \u00d7 2a (directed from -q to +q).\n\u2022 Axial Field: E_axial = 2 k p / r^3.\n\u2022 Equatorial Field: E_equatorial = k p / r^3.\nGauss Law: Total Flux \u03a6 = \u222e E \u00b7 dA = Q_enclosed / \u03b50.\nApplications:\n1. Line Charge: E = \u03bb / (2 \u03c0 \u03b50 r).\n2. Plane Sheet: E = \u03c3 / (2 \u03b50).\n3. Spherical Shell: E_in = 0, E_out = k Q / r^2.",
    "shortNotes": "1. F = k q1 q2 / r^2, E = k q / r^2.\n2. Dipole moment p = q (2a) [-q to +q].\n3. E_axial = 2 k p / r^3 = 2 E_equatorial.\n4. Gauss Law: \u03a6 = \u222e E \u00b7 dA = Q_enc / \u03b50.\n5. Shell E_in = 0, Infinite Sheet E = \u03c3 / (2 \u03b50).",
    "multiTierNotes": {
      "tier1DetailedNCERT": "Electric field lines originate from positive charges, terminate on negative charges, and NEVER form closed loops.",
      "tier2HighYieldShort": "\u2022 Electrostatic force is conservative; work done in closed loop is zero.\n\u2022 Stable dipole orientation in uniform field: \u03b8 = 0\u00b0 (U_min = - p E).\n\u2022 Unstable dipole orientation: \u03b8 = 180\u00b0 (U_max = + p E).",
      "tier3ConceptualVisualMechanisms": "Gauss Surface Selection: Choose symmetric surface where E is perpendicular or parallel.",
      "tier4TopperTricksShortcuts": "Shortcut: Field of conducting sheet E = \u03c3 / \u03b50; non-conducting sheet E = \u03c3 / (2\u03b50)."
    },
    "formulaBank": [
      "Coulomb Law F = (1 / (4 * pi * epsilon_0)) * (q1 * q2 / r^2)",
      "Dipole Axial Field E_axial = (1 / (4 * pi * epsilon_0)) * (2 * p / r^3)",
      "Dipole Equatorial Field E_eq = (1 / (4 * pi * epsilon_0)) * (p / r^3)",
      "Gauss Law Phi = Integral(E \u00b7 dA) = Q_enclosed / epsilon_0",
      "Line Charge Field E = lambda / (2 * pi * epsilon_0 * r)",
      "Infinite Sheet Field E = sigma / (2 * epsilon_0)"
    ],
    "ncertFacts": [
      "Electric field lines never intersect each other.",
      "Electric field inside a hollow charged metallic conductor is identically zero."
    ],
    "commonMistakes": [
      "Confusing dipole field distance dependence (E \u221d 1/r^3) with point charge (E \u221d 1/r^2).",
      "Taking dipole direction from positive to negative."
    ],
    "flashcards": [
      {
        "id": "fc_elec_1",
        "question": "Ratio of axial electric field to equatorial electric field for a short dipole at distance r?",
        "answer": "E_axial / E_equatorial = 2 : 1."
      },
      {
        "id": "fc_elec_2",
        "question": "Electric field inside a uniformly charged conducting spherical shell of radius R?",
        "answer": "Zero everywhere inside."
      }
    ]
  },
  {
    "topicId": "phy_potential_cap",
    "topicTitle": "Electric Potential & Capacitance",
    "chapterTitle": "Electrostatics",
    "subject": "Physics",
    "detailedNotes": "Electric Potential V = k q / r. Relation: E = - dV/dr.\nEquipotential Surfaces: Work done moving charge along equipotential surface = 0.\nCapacitance C = Q / V.\nParallel Plate Capacitor: C_0 = \u03b50 A / d.\n\u2022 Fully Filled Dielectric: C = K C_0.\nEnergy Stored in Capacitor: U = 0.5 C V^2 = 0.5 Q V = Q^2 / (2C).\nCombination of Capacitors:\n\u2022 Series: 1/C_eq = 1/C1 + 1/C2, Q is same.\n\u2022 Parallel: C_eq = C1 + C2, V is same.",
    "shortNotes": "1. V = k q / r, E = - dV/dr.\n2. Parallel Plate C = \u03b50 A / d.\n3. Dielectric filled C = K C0.\n4. Energy U = 0.5 C V^2 = Q^2 / (2C).\n5. Battery Connected -> V constant; Battery Disconnected -> Q constant!",
    "multiTierNotes": {
      "tier1DetailedNCERT": "Potential is scalar field V(r) = - \u222b E \u00b7 dr. Dielectric insertion reduces electric field E = E0 / K.",
      "tier2HighYieldShort": "\u2022 Battery Disconnected -> Q const, C becomes K C0, V becomes V0/K, U becomes U0/K.\n\u2022 Battery Connected -> V const, C becomes K C0, Q becomes K Q0, U becomes K U0.\n\u2022 Common Potential: V_common = (C1 V1 + C2 V2) / (C1 + C2).\n\u2022 Energy Loss in sharing charge: \u0394U = 0.5 [ C1 C2 / (C1 + C2) ] (V1 - V2)^2.",
      "tier3ConceptualVisualMechanisms": "Dielectric Polarization: Bound surface charge density opposes external field.",
      "tier4TopperTricksShortcuts": "Topper Rule: Remember \"Q stays when isolated, V stays when powered\"!"
    },
    "formulaBank": [
      "Electric Potential V = (1 / (4 * pi * epsilon_0)) * (q / r)",
      "Parallel Plate Capacitance C = epsilon_0 * A / d",
      "Dielectric Capacitance C = K * C_0",
      "Capacitor Energy U = 0.5 * C * V^2 = Q^2 / (2 * C)",
      "Common Potential V_c = (C1*V1 + C2*V2) / (C1 + C2)",
      "Charge Sharing Energy Loss Delta_U = 0.5 * [C1*C2 / (C1 + C2)] * (V1 - V2)^2"
    ],
    "ncertFacts": [
      "Work done in moving a charge between any two points on an equipotential surface is zero.",
      "Dielectric constant K of a metal/conductor is infinity (K = \u221e)."
    ],
    "commonMistakes": [
      "Using U = 0.5 C V^2 when Q is constant instead of U = Q^2 / (2C).",
      "Forgetting that energy is lost as heat when two charged capacitors are connected."
    ],
    "flashcards": [
      {
        "id": "fc_cap_1",
        "question": "What happens to capacitance C and energy U when dielectric K is inserted with battery DISCONNECTED?",
        "answer": "C increases to K C0; Energy U decreases to U0 / K."
      },
      {
        "id": "fc_cap_2",
        "question": "Value of dielectric constant K for ideal conductor/metal?",
        "answer": "Infinity (K = \u221e)."
      }
    ]
  },
  {
    "topicId": "phy_ohm_drift",
    "topicTitle": "Ohm Law, Drift Velocity & Resistance",
    "chapterTitle": "Current Electricity",
    "subject": "Physics",
    "detailedNotes": "Electric Current I = dq/dt = n e A v_d.\nDrift Velocity v_d = e E \u03c4 / m = e V \u03c4 / (m L).\nMobility \u03bc = v_d / E = e \u03c4 / m.\nOhm Law: V = I R, where R = \u03c1 L / A.\nResistivity \u03c1 = m / (n e^2 \u03c4). Conductance G = 1/R, Conductivity \u03c3 = 1/\u03c1.\nVector Form of Ohm Law: J = \u03c3 E.\nTemperature Dependence: R(T) = R_0 (1 + \u03b1 \u0394T) (\u03b1 > 0 for metals, \u03b1 < 0 for semiconductors).",
    "shortNotes": "1. I = n e A v_d.\n2. Drift Velocity v_d = e E \u03c4 / m.\n3. R = \u03c1 L / A, J = \u03c3 E.\n4. Resistivity \u03c1 = m / (n e^2 \u03c4).\n5. Temperature Coeff \u03b1 > 0 for conductors, \u03b1 < 0 for semiconductors.",
    "multiTierNotes": {
      "tier1DetailedNCERT": "Drift velocity is average velocity acquired by free electrons in conductor under external electric field (~10^-4 m/s).",
      "tier2HighYieldShort": "\u2022 Relaxation time \u03c4 decreases as temperature T increases in metals, causing \u03c1 to increase.\n\u2022 Power dissipated P = V I = I^2 R = V^2 / R.\n\u2022 Combination of Resistors: Series R_eq = R1 + R2; Parallel 1/R_eq = 1/R1 + 1/R2.",
      "tier3ConceptualVisualMechanisms": "Random Thermal Velocity vs Drift: Thermal speed (~10^5 m/s) is random with zero average; drift speed (~10^-4 m/s) is directional migration.",
      "tier4TopperTricksShortcuts": "Stretching Wire Shortcut: If wire of length L is stretched to n times its length keeping volume constant, new resistance R' = n^2 R!"
    },
    "formulaBank": [
      "Current I = n * e * A * v_d",
      "Drift Velocity v_d = (e * E * tau) / m",
      "Resistance R = rho * L / A",
      "Vector Ohm Law J = sigma * E",
      "Resistivity rho = m / (n * e^2 * tau)",
      "Resistance Stretched Wire R' = n^2 * R"
    ],
    "ncertFacts": [
      "Current density J is a vector quantity, whereas electric current I is a scalar quantity.",
      "Drift speed of electrons in standard copper wires is extremely small (~1 mm/s)."
    ],
    "commonMistakes": [
      "Assuming R \u221d L when wire is stretched without accounting for cross-sectional area A shrinking (volume is constant, so R \u221d L^2!).",
      "Thinking drift velocity is equal to speed of electricity signal propagation."
    ],
    "flashcards": [
      {
        "id": "fc_curr_1",
        "question": "If a wire of resistance R is stretched to double its length, new resistance?",
        "answer": "R' = 2^2 * R = 4 R."
      },
      {
        "id": "fc_curr_2",
        "question": "Why does resistance of metallic conductor increase with temperature?",
        "answer": "Higher temperature increases thermal agitation, reducing relaxation time \u03c4."
      }
    ]
  },
  {
    "topicId": "phy_kirchhoff_bridges",
    "topicTitle": "Kirchhoff Laws, Wheatstone Bridge & Meter Bridge",
    "chapterTitle": "Current Electricity",
    "subject": "Physics",
    "detailedNotes": "Kirchhoff First Law (Junction Rule): \u03a3 I_in = \u03a3 I_out (Conservation of Charge).\nKirchhoff Second Law (Loop Rule): \u03a3 \u0394V = 0 in closed loop (Conservation of Energy).\nCell Combinations & Internal Resistance:\n\u2022 Terminal Voltage V = E - I r (discharging) or V = E + I r (charging).\n\u2022 Cells in Parallel: E_eq / r_eq = E1/r1 + E2/r2.\nWheatstone Bridge: Balanced when P / Q = R / S => Galvanometer current I_G = 0.\nMeter Bridge: Balanced condition R / S = l / (100 - l).\nPotentiometer: Null deflection method. E1 / E2 = l1 / l2; Internal resistance r = R [ (l1 - l2) / l2 ].",
    "shortNotes": "1. KCL: \u03a3 I = 0 (Charge conservation).\n2. KVL: \u03a3 V = 0 (Energy conservation).\n3. Terminal Voltage: Discharging V = E - Ir; Charging V = E + Ir.\n4. Wheatstone Bridge Balanced: P/Q = R/S.\n5. Potentiometer Internal Resistance r = R (l1/l2 - 1).",
    "multiTierNotes": {
      "tier1DetailedNCERT": "Potentiometer acts as an ideal voltmeter of infinite resistance because it reads potential difference at null point (zero drawn current).",
      "tier2HighYieldShort": "\u2022 Meter Bridge wire made of Manganin or Constantan due to low temperature coefficient of resistance \u03b1 and high resistivity.\n\u2022 Maximum power transfer theorem: P_max delivered to load R when R = r, P_max = E^2 / (4r).",
      "tier3ConceptualVisualMechanisms": "Potentiometer Potential Gradient: k = V / L. Lower k gives higher sensitivity.",
      "tier4TopperTricksShortcuts": "Potentiometer Sensitivity Shortcut: Sensitivity increases by increasing length L of potentiometer wire or decreasing primary circuit current I."
    },
    "formulaBank": [
      "Terminal Voltage V = E - I * r",
      "Parallel Cells EMF E_eq = (E1/r1 + E2/r2) / (1/r1 + 1/r2)",
      "Wheatstone Balanced Condition P / Q = R / S",
      "Meter Bridge Resistance R = S * [ l / (100 - l) ]",
      "Potentiometer EMF Ratio E1 / E2 = l1 / l2",
      "Potentiometer Internal Resistance r = R * (l1 / l2 - 1)"
    ],
    "ncertFacts": [
      "Kirchhoff junction law is based on conservation of electric charge, and loop law is based on conservation of energy.",
      "A potentiometer is preferred over a voltmeter for accurate EMF measurement because it draws NO current at null point."
    ],
    "commonMistakes": [
      "Forgetting internal resistance r when calculating cell current I = E / (R + r).",
      "Misidentifying end resistance errors in meter bridge experiments."
    ],
    "flashcards": [
      {
        "id": "fc_kirch_1",
        "question": "Kirchhoff First and Second Laws are based on conservation of which quantities?",
        "answer": "First Law: Conservation of Charge; Second Law: Conservation of Energy."
      },
      {
        "id": "fc_kirch_2",
        "question": "Condition for maximum power transfer from cell of internal resistance r to external load R?",
        "answer": "Load resistance R = r."
      }
    ]
  },
  {
    "topicId": "phy_biot_savart",
    "topicTitle": "Biot-Savart & Ampere Circuital Law",
    "chapterTitle": "Magnetic Effects of Current & Magnetism",
    "subject": "Physics",
    "detailedNotes": "Biot-Savart Law: dB = (\u03bc0 / 4\u03c0) * (I dl \u00d7 r) / r^3 = (\u03bc0 / 4\u03c0) * (I dl sin \u03b8) / r^2.\nApplications:\n1. Straight Current Wire: B = (\u03bc0 I / (4 \u03c0 d)) * (sin \u03b1 + sin \u03b2). Infinite wire: B = \u03bc0 I / (2 \u03c0 d).\n2. Circular Wire at Center: B = \u03bc0 I / (2 R).\n3. Circular Wire at Axis: B_axis = (\u03bc0 I R^2) / [ 2 (R^2 + x^2)^(3/2) ].\nAmpere Circuital Law: \u222e B \u00b7 dl = \u03bc0 I_enclosed.\nApplications:\n1. Long Straight Wire: B = \u03bc0 I / (2 \u03c0 r).\n2. Long Solenoid: B = \u03bc0 n I (inside uniform field, n = N/L).\n3. Toroid: B = \u03bc0 n I.",
    "shortNotes": "1. Biot-Savart Law: dB = (\u03bc0/4\u03c0) (I dl sin \u03b8 / r^2).\n2. Infinite Wire B = \u03bc0 I / (2 \u03c0 r).\n3. Circular Coil Center B = \u03bc0 I / (2 R).\n4. Solenoid B = \u03bc0 n I.\n5. Ampere Law \u222e B \u00b7 dl = \u03bc0 I_enc.",
    "multiTierNotes": {
      "tier1DetailedNCERT": "Magnetic field direction is determined by Right Hand Thumb Rule. Biot-Savart law is magnetostatics counterpart of Coulomb law.",
      "tier2HighYieldShort": "\u2022 Magnetic field at center of circular arc subtending angle \u03b8 at center: B = (\u03bc0 I / 4\u03c0 R) * \u03b8.\n\u2022 Field inside ideal long solenoid is uniform and parallel to axis; outside field is zero.\n\u2022 Force between two parallel current wires per unit length: F/L = \u03bc0 I1 I2 / (2 \u03c0 d).",
      "tier3ConceptualVisualMechanisms": "Ampere Loop Integration: Choose loop where B is either parallel to dl or perpendicular.",
      "tier4TopperTricksShortcuts": "Shortcut: Field at center of semicircular arc \u03b8 = \u03c0 is B = \u03bc0 I / (4 R); quarter arc \u03b8 = \u03c0/2 is B = \u03bc0 I / (8 R)."
    },
    "formulaBank": [
      "Biot-Savart Law dB = (mu_0 / 4*pi) * (I * dl * sin theta) / r^2",
      "Infinite Straight Wire B = mu_0 * I / (2 * pi * r)",
      "Circular Coil Center B = mu_0 * I / (2 * R)",
      "Circular Axis Field B = (mu_0 * I * R^2) / [ 2 * (R^2 + x^2)^(3/2) ]",
      "Solenoid Field B = mu_0 * n * I",
      "Force Between Parallel Wires F / L = mu_0 * I1 * I2 / (2 * pi * d)"
    ],
    "ncertFacts": [
      "Two parallel conductors carrying currents in the SAME direction ATTRACT each other.",
      "1 Ampere is defined as current flowing in two infinitely long parallel conductors 1m apart producing force 2\u00d710^-7 N/m."
    ],
    "commonMistakes": [
      "Thinking parallel currents repel each other (parallel currents ATTRACT; antiparallel REPEL!).",
      "Using diameter instead of radius R in circular coil formula."
    ],
    "flashcards": [
      {
        "id": "fc_mag_1",
        "question": "Force per unit length between two parallel wires 1m apart carrying 1A each?",
        "answer": "F/L = 2 \u00d7 10^-7 N/m (Definition of Ampere)."
      },
      {
        "id": "fc_mag_2",
        "question": "Do two parallel conductors carrying currents in same direction attract or repel?",
        "answer": "Attract each other."
      }
    ]
  },
  {
    "topicId": "phy_lorentz_force",
    "topicTitle": "Lorentz Force, Cyclotron & Magnetic Dipole",
    "chapterTitle": "Magnetic Effects of Current & Magnetism",
    "subject": "Physics",
    "detailedNotes": "Lorentz Force F = q (E + v \u00d7 B).\nMagnetic Force on Charged Particle F = q (v \u00d7 B) = q v B sin \u03b8.\n\u2022 Motion perpendicular to B (\u03b8 = 90\u00b0): Pure circular path. Radius r = m v / (q B) = p / (q B) = \u221a(2 m K) / (q B). Time Period T = 2 \u03c0 m / (q B) (independent of speed v!).\n\u2022 Motion at angle \u03b8 to B: Helical path. Pitch P = v_parallel \u00d7 T = (v cos \u03b8) * (2 \u03c0 m / (q B)).\nCyclotron Frequency f = q B / (2 \u03c0 m). Maximum Kinetic Energy K_max = q^2 B^2 R^2 / (2 m).\nMagnetic Dipole Moment of Loop: M = I A = N I A. Torque in B: \u03c4 = M \u00d7 B, Energy U = - M \u00b7 B.\nEarth Magnetism: Angle of dip \u03b4, Angle of declination \u03b8, Horizontal component B_H = B cos \u03b4, Vertical B_V = B sin \u03b4, tan \u03b4 = B_V / B_H.",
    "shortNotes": "1. Lorentz Force F = q (E + v \u00d7 B).\n2. Circular Radius r = m v / (q B) = \u221a(2 m K) / (q B).\n3. Cyclotron Period T = 2 \u03c0 m / (q B) (independent of v!).\n4. Magnetic Dipole M = N I A.\n5. Earth Dip: tan \u03b4 = B_V / B_H.",
    "multiTierNotes": {
      "tier1DetailedNCERT": "Magnetic force does NO work on a moving charged particle because F is always perpendicular to velocity v (W = F \u00b7 v dt = 0). Speed and K stay constant!",
      "tier2HighYieldShort": "\u2022 Cyclotron limitation: Cannot accelerate uncharged particles (neutrons) or electrons (relativistic mass increase).\n\u2022 Moving Coil Galvanometer: Current I = (C / (N A B)) \u03b8 = k \u03b8. Current sensitivity I_s = \u03b8 / I = N A B / C.\n\u2022 Conversion to Ammeter: Connect low resistance Shunt S in parallel: S = I_g R_g / (I - I_g).\n\u2022 Conversion to Voltmeter: Connect high resistance R in series: R = V / I_g - R_g.",
      "tier3ConceptualVisualMechanisms": "Helical Pitch Trajectory: Parallel velocity component v cos \u03b8 drives drift along field line, while perpendicular component v sin \u03b8 creates circular motion.",
      "tier4TopperTricksShortcuts": "Ammeter vs Voltmeter Conversion Rule: \"Ammeter Shunt PARALLEL (small S); Voltmeter Series HIGH (large R)\"!"
    },
    "formulaBank": [
      "Lorentz Force F = q * (E + v x B)",
      "Circular Radius in B r = m * v / (q * B)",
      "Cyclotron Frequency f = q * B / (2 * pi * m)",
      "Magnetic Dipole Moment M = N * I * A",
      "Ammeter Shunt Resistance S = I_g * R_g / (I - I_g)",
      "Voltmeter Series Resistance R = (V / I_g) - R_g"
    ],
    "ncertFacts": [
      "Magnetic force changes ONLY the direction of velocity of a charged particle, NEVER its speed or kinetic energy.",
      "At Earth magnetic poles, angle of dip \u03b4 = 90\u00b0 (B_H = 0); at equator, dip \u03b4 = 0\u00b0 (B_V = 0)."
    ],
    "commonMistakes": [
      "Believing magnetic force speeds up a particle (magnetic work is identically ZERO!).",
      "Connecting ammeter in parallel or voltmeter in series."
    ],
    "flashcards": [
      {
        "id": "fc_cyc_1",
        "question": "Does magnetic force do work on a moving charge?",
        "answer": "No, work done is zero because force is always perpendicular to velocity."
      },
      {
        "id": "fc_cyc_2",
        "question": "Value of Earth angle of dip \u03b4 at magnetic equator?",
        "answer": "\u03b4 = 0\u00b0 (horizontal field component B_H = B, vertical B_V = 0)."
      }
    ]
  },
  {
    "topicId": "phy_faraday_lenz",
    "topicTitle": "Faraday Law, Lenz Law & Inductance",
    "chapterTitle": "Electromagnetic Induction & Alternating Current",
    "subject": "Physics",
    "detailedNotes": "Magnetic Flux \u03a6 = B \u00b7 A = B A cos \u03b8.\nFaraday Law of EMI: Induced EMF \u03b5 = - d\u03a6 / dt = - N (d\u03a6/dt).\nLenz Law: Direction of induced EMF/current opposes the change in flux that produces it (Conservation of Energy).\nMotional EMF: Straight conductor moving perpendicular to B at speed v: \u03b5 = B L v.\nRotating Rod: \u03b5 = 0.5 B L^2 \u03c9.\nInductance:\n\u2022 Self Inductance: \u03a6 = L I => Induced \u03b5 = - L (dI/dt). Energy stored in inductor U = 0.5 L I^2.\n\u2022 Solenoid Self Inductance: L = \u03bc0 n^2 A L_solenoid = \u03bc0 N^2 A / L_solenoid.\n\u2022 Mutual Inductance: \u03a62 = M I1 => Induced \u03b52 = - M (dI1/dt).",
    "shortNotes": "1. Induced EMF \u03b5 = - d\u03a6/dt.\n2. Motional EMF \u03b5 = B L v.\n3. Rotating Rod EMF \u03b5 = 0.5 B L^2 \u03c9.\n4. Self Inductance \u03b5 = - L (dI/dt), Energy U = 0.5 L I^2.\n5. Lenz Law ensures conservation of energy.",
    "multiTierNotes": {
      "tier1DetailedNCERT": "Induced current flows in such a direction that its magnetic field opposes the change in original magnetic flux.",
      "tier2HighYieldShort": "\u2022 Charge flown during flux change: q = \u0394\u03a6 / R (independent of time duration!).\n\u2022 Eddy Currents: Circulating induced currents in bulk conductors reduced by using laminated iron cores.\n\u2022 Combination of Inductors: Series L_eq = L1 + L2; Parallel 1/L_eq = 1/L1 + 1/L2.",
      "tier3ConceptualVisualMechanisms": "Mechanical Work to Electrical Energy Conversion: Pulling loop out of B requires mechanical pulling force to overcome magnetic braking force F = B^2 L^2 v / R.",
      "tier4TopperTricksShortcuts": "Charge Flow Shortcut: Total charge q flowing through circuit of resistance R when flux changes from \u03a61 to \u03a62 is q = |\u03a62 - \u03a61| / R."
    },
    "formulaBank": [
      "Magnetic Flux Phi = B \u00b7 A = B * A * cos theta",
      "Faraday Law induced EMF epsilon = - dPhi / dt",
      "Motional EMF epsilon = B * L * v",
      "Rotating Rod EMF epsilon = 0.5 * B * L^2 * omega",
      "Inductor Energy U = 0.5 * L * I^2",
      "Solenoid Inductance L = mu_0 * N^2 * A / L_sol"
    ],
    "ncertFacts": [
      "Lenz law is a direct consequence of the law of conservation of energy.",
      "Total electric charge induced during electromagnetic induction depends ONLY on total flux change \u0394\u03a6 and resistance R, NOT on time taken."
    ],
    "commonMistakes": [
      "Forgetting negative sign in Faraday law \u03b5 = - d\u03a6/dt.",
      "Assuming induced charge depends on time rate of flux change."
    ],
    "flashcards": [
      {
        "id": "fc_emi_1",
        "question": "Lenz law is a statement of conservation of which fundamental quantity?",
        "answer": "Conservation of Energy."
      },
      {
        "id": "fc_emi_2",
        "question": "EMF induced in a rod of length L rotating with angular velocity \u03c9 in magnetic field B?",
        "answer": "\u03b5 = 0.5 * B * L^2 * \u03c9."
      }
    ]
  },
  {
    "topicId": "phy_ac_circuits",
    "topicTitle": "AC Circuits, Resonance & Transformers",
    "chapterTitle": "Electromagnetic Induction & Alternating Current",
    "subject": "Physics",
    "detailedNotes": "Alternating Voltage & Current: V = V_0 sin(\u03c9 t), I = I_0 sin(\u03c9 t - \u03d5).\nRMS Values: V_rms = V_0 / \u221a2 \u2248 0.707 V_0, I_rms = I_0 / \u221a2.\nReactance:\n\u2022 Inductive Reactance: X_L = \u03c9 L = 2 \u03c0 f L (X_L \u221d f).\n\u2022 Capacitive Reactance: X_C = 1 / (\u03c9 C) = 1 / (2 \u03c0 f C) (X_C \u221d 1/f).\nSeries LCR Circuit:\nImpedance Z = \u221a[ R^2 + (X_L - X_C)^2 ]. Phase angle tan \u03d5 = (X_L - X_C) / R.\nResonance in LCR Circuit: Occurs when X_L = X_C => Resonant frequency f_r = 1 / (2 \u03c0 \u221a(L C)).\nAt resonance: Z_min = R (purely resistive), I_max = V_rms / R, power factor cos \u03d5 = 1.\nQuality Factor Q = \u03c9_r L / R = (1/R) \u221a(L/C).\nPower in AC: Average Power P_avg = V_rms I_rms cos \u03d5 (where cos \u03d5 = R/Z is Power Factor).\nTransformer: V_p / V_s = N_p / N_s = I_s / I_p. Step-up: N_s > N_p (V_s > V_p, I_s < I_p).",
    "shortNotes": "1. V_rms = V0 / \u221a2, I_rms = I0 / \u221a2.\n2. X_L = \u03c9 L, X_C = 1 / (\u03c9 C).\n3. Impedance Z = \u221a[ R^2 + (X_L - X_C)^2 ].\n4. Resonance f_r = 1 / (2 \u03c0 \u221a(L C)), Z = R.\n5. Transformer V_s / V_p = N_s / N_p = I_p / I_s.",
    "multiTierNotes": {
      "tier1DetailedNCERT": "AC meters measure RMS values of voltage and current, not peak or average values.",
      "tier2HighYieldShort": "\u2022 Wattless Current: Component of current I_rms sin \u03d5 that does not consume average power (power factor cos 90\u00b0 = 0 in pure L or pure C circuit).\n\u2022 Average power over full cycle in pure L or pure C circuit is ZERO.\n\u2022 Transformer Losses: Copper loss (I^2 R), Iron loss (eddy currents + hysteresis), Flux leakage.",
      "tier3ConceptualVisualMechanisms": "Phasor Diagram Analysis: Resistor voltage V_R in phase with I; Inductor V_L leads I by 90\u00b0; Capacitor V_C lags I by 90\u00b0.",
      "tier4TopperTricksShortcuts": "Resonance Shortcut: At LCR resonance, Z = R, V_L and V_C cancel each other completely! Circuit behaves as purely resistive."
    },
    "formulaBank": [
      "V_rms = V_0 / sqrt(2)",
      "X_L = 2 * pi * f * L",
      "X_C = 1 / (2 * pi * f * C)",
      "Impedance Z = sqrt( R^2 + (X_L - X_C)^2 )",
      "Resonant Frequency f_r = 1 / (2 * pi * sqrt(L * C))",
      "Power Factor cos phi = R / Z",
      "Transformer Ratio V_s / V_p = N_s / N_p"
    ],
    "ncertFacts": [
      "Household AC voltage specified as 220 V is the RMS value (peak voltage V_0 = 220 \u00d7 \u221a2 \u2248 311 V).",
      "Transformers operate ONLY on alternating current (AC), NOT on direct current (DC)."
    ],
    "commonMistakes": [
      "Applying transformer formula to DC voltage (transformer requires changing flux d\u03a6/dt, so it does NOT work on DC!).",
      "Confusing RMS value with peak value V_0."
    ],
    "flashcards": [
      {
        "id": "fc_ac_1",
        "question": "What is the impedance Z of a series LCR circuit at resonance?",
        "answer": "Z = R (minimum possible impedance)."
      },
      {
        "id": "fc_ac_2",
        "question": "Peak voltage V_0 of standard 220V household AC supply?",
        "answer": "V_0 = 220 \u00d7 \u221a2 \u2248 311 Volts."
      }
    ]
  },
  {
    "topicId": "phy_em_waves",
    "topicTitle": "Electromagnetic Waves & Spectrum",
    "chapterTitle": "EM Waves & Optics (Ray & Wave)",
    "subject": "Physics",
    "detailedNotes": "Displacement Current (Maxwell): I_d = \u03b50 (d\u03a6_E / dt). Corrected Ampere-Maxwell Law: \u222e B \u00b7 dl = \u03bc0 (I_c + I_d).\nEM Waves Properties:\n\u2022 Transverse nature: E and B vectors oscillate mutually perpendicular to each other and to propagation direction (E \u00d7 B gives propagation direction).\n\u2022 Speed of Light in Vacuum: c = 1 / \u221a(\u03bc0 \u03b50) \u2248 3 \u00d7 10^8 m/s. In medium: v = 1 / \u221a(\u03bc \u03b5) = c / n.\n\u2022 Energy Density Ratio: u_E = 0.5 \u03b50 E^2, u_B = B^2 / (2 \u03bc0). Total u = \u03b50 E_rms^2 = B_rms^2 / \u03bc0 (Electric and magnetic energy densities are equal!).\n\u2022 Intensity I = u c = \u03b50 c E_rms^2.\n\u2022 Poynting Vector S = (1 / \u03bc0) (E \u00d7 B) (represents energy flux density).\nElectromagnetic Spectrum Order (Increasing Frequency / Decreasing Wavelength):\nRadio Waves > Microwaves > Infrared > Visible Light (VIBGYOR) > Ultraviolet > X-Rays > Gamma Rays.",
    "shortNotes": "1. Displacement Current I_d = \u03b50 (d\u03a6_E/dt).\n2. Speed of Light c = 1 / \u221a(\u03bc0 \u03b50) = E_0 / B_0 \u2248 3 \u00d7 10^8 m/s.\n3. E and B are in same phase and perpendicular to each other.\n4. Poynting Vector S = (1/\u03bc0) (E \u00d7 B).\n5. Spectrum order: Radio, Micro, IR, Visible, UV, X-Ray, Gamma.",
    "multiTierNotes": {
      "tier1DetailedNCERT": "Accelerated charges emit electromagnetic waves. Oscillating electric and magnetic fields sustain each other self-propagatively through space.",
      "tier2HighYieldShort": "\u2022 Radio Waves: Cellular phones, broadcasting (\u03bb > 0.1 m).\n\u2022 Microwaves: Radar, microwave ovens (\u03bb ~ 1 mm to 0.1 m).\n\u2022 Infrared: Heat radiation, night vision, remote controls.\n\u2022 Ultraviolet: Water purification, sterilization (causes sunburns).\n\u2022 X-Rays: Medical bone imaging, crystallographic study.\n\u2022 Gamma Rays: Nuclear reactions, cancer radiotherapy.",
      "tier3ConceptualVisualMechanisms": "Poynting Vector Flow: Direction of energy transport is along E \u00d7 B vector.",
      "tier4TopperTricksShortcuts": "EM Spectrum Mnemonic: \"Radio Men In Visible Light Use Extra Gamma\" (Radio, Microwave, IR, Visible, UV, X-ray, Gamma)."
    },
    "formulaBank": [
      "Displacement Current I_d = epsilon_0 * (dPhi_E / dt)",
      "Speed of Light c = 1 / sqrt(mu_0 * epsilon_0) = E_0 / B_0",
      "Poynting Vector S = (1 / mu_0) * (E x B)",
      "Intensity I = epsilon_0 * c * E_rms^2",
      "Energy Density u = 0.5 * epsilon_0 * E_rms^2 + B_rms^2 / (2 * mu_0)"
    ],
    "ncertFacts": [
      "Electric and magnetic energy densities in an electromagnetic wave are equal: u_E = u_B.",
      "Gamma rays have the highest frequency and shortest wavelength in the EM spectrum."
    ],
    "commonMistakes": [
      "Assuming E and B are out of phase (E and B oscillate IN PHASE, reaching peak values simultaneously!).",
      "Confusing wave speed c with particle speed."
    ],
    "flashcards": [
      {
        "id": "fc_em_1",
        "question": "Relation between electric field amplitude E_0 and magnetic field amplitude B_0 in vacuum?",
        "answer": "E_0 / B_0 = c (speed of light)."
      },
      {
        "id": "fc_em_2",
        "question": "Which electromagnetic waves are used in radar communication?",
        "answer": "Microwaves."
      }
    ]
  },
  {
    "topicId": "phy_ray_optics",
    "topicTitle": "Reflection, Refraction, Lenses & Prisms",
    "chapterTitle": "EM Waves & Optics (Ray & Wave)",
    "subject": "Physics",
    "detailedNotes": "Snell Law: n1 sin i = n2 sin r. Refractive Index n = c / v.\nTotal Internal Reflection (TIR): Occurs when light travels from denser to rarer medium at angle i > Critical Angle \u03b8_c. sin \u03b8_c = n_rarer / n_denser = 1/n.\nMirror Formula: 1/f = 1/v + 1/u. Magnification m = - v / u.\nLens Maker Formula: 1/f = (n - 1) [ 1/R1 - 1/R2 ].\nLens Formula: 1/f = 1/v - 1/u. Magnification m = v / u. Power P = 1 / f (in meters, dioptres D).\nPrism Refraction: Deviation \u03b4 = i + e - A. At minimum deviation \u03b4_min: i = e, r1 = r2 = A/2. Formula n = sin((A + \u03b4_min)/2) / sin(A/2).\nOptical Instruments:\n\u2022 Simple Microscope: M = 1 + D/f (near point) or M = D/f (normal adjustment).\n\u2022 Compound Microscope: M = (v_o / u_o) * (1 + D / f_e) \u2248 (L / f_o) * (D / f_e).\n\u2022 Astronomical Telescope: M = f_o / f_e, Length L = f_o + f_e.",
    "shortNotes": "1. Snell Law n1 sin i = n2 sin r.\n2. TIR sin \u03b8_c = 1/n.\n3. Mirror 1/f = 1/v + 1/u; Lens 1/f = 1/v - 1/u.\n4. Lens Maker 1/f = (n-1) (1/R1 - 1/R2).\n5. Telescope M = f_o / f_e, L = f_o + f_e.",
    "multiTierNotes": {
      "tier1DetailedNCERT": "Light rays follow Fermat principle of least time.",
      "tier2HighYieldShort": "\u2022 Apparent Depth: h' = h / n (viewed from rarer medium).\n\u2022 Combination of Lenses in contact: Equivalent Power P = P1 + P2, 1/F = 1/f1 + 1/f2.\n\u2022 Dispersive Power of Prism: \u03c9 = (n_v - n_r) / (n_y - 1).",
      "tier3ConceptualVisualMechanisms": "TIR Optical Fiber Core-Cladding Guide: Light undergoes continuous total internal reflections within high-index core.",
      "tier4TopperTricksShortcuts": "Shortcut: Telescope Magnifying Power M = f_o / f_e. Objective lens must have LARGE focal length f_o and LARGE aperture!"
    },
    "formulaBank": [
      "Snell Law n1 * sin i = n2 * sin r",
      "Critical Angle sin theta_c = 1 / n",
      "Lens Maker Formula 1 / f = (n - 1) * (1/R1 - 1/R2)",
      "Lens Formula 1 / f = 1 / v - 1 / u",
      "Prism Formula n = sin((A + delta_m) / 2) / sin(A / 2)",
      "Telescope Magnification M = f_o / f_e"
    ],
    "ncertFacts": [
      "Mirage and optical fiber working are based on Total Internal Reflection.",
      "A convex lens immersed in a liquid of higher refractive index than lens material behaves as a DIVERGING (concave) lens."
    ],
    "commonMistakes": [
      "Using wrong sign conventions for Cartesian u, v, f.",
      "Swapping objective and eyepiece focal lengths in compound microscope vs telescope."
    ],
    "flashcards": [
      {
        "id": "fc_ray_1",
        "question": "Condition for total internal reflection to occur?",
        "answer": "Light must travel from denser to rarer medium with incidence angle i > critical angle \u03b8_c."
      },
      {
        "id": "fc_ray_2",
        "question": "Magnifying power M and tube length L of astronomical telescope in normal adjustment?",
        "answer": "M = f_o / f_e; L = f_o + f_e."
      }
    ]
  },
  {
    "topicId": "phy_wave_optics",
    "topicTitle": "Huygens Principle, Interference & Diffraction",
    "chapterTitle": "EM Waves & Optics (Ray & Wave)",
    "subject": "Physics",
    "detailedNotes": "Huygens Principle: Every point on a wavefront acts as a secondary source of spherical wavelets.\nInterference of Light (Young Double Slit Experiment YDSE):\nResultant Intensity I = I1 + I2 + 2 \u221a(I1 I2) cos \u03d5. If I1 = I2 = I0 => I = 4 I0 cos^2(\u03d5/2).\n\u2022 Constructive Interference (Bright Fringes): Path difference \u0394x = n \u03bb (n = 0, 1, 2...), Phase diff \u03d5 = 2n\u03c0, y_n = n \u03bb D / d.\n\u2022 Destructive Interference (Dark Fringes): Path difference \u0394x = (2n-1) \u03bb / 2, y_n = (2n-1) \u03bb D / (2d).\n\u2022 Fringe Width \u03b2 = \u03bb D / d (equal spacing for bright and dark fringes!).\nDiffraction at Single Slit:\n\u2022 Minima (Dark): a sin \u03b8 = n \u03bb (n = 1, 2, 3...).\n\u2022 Central Maximum Width: W = 2 \u03bb D / a.\nPolarization & Brewster Law: \u03bc = tan i_p (reflected ray completely plane polarized perpendicular to refracted ray). Malus Law I = I0 cos^2 \u03b8.",
    "shortNotes": "1. YDSE Fringe Width \u03b2 = \u03bb D / d.\n2. Bright Fringe YDSE \u0394x = n \u03bb; Dark Fringe \u0394x = (2n-1) \u03bb / 2.\n3. Single Slit Diffraction Minima: a sin \u03b8 = n \u03bb.\n4. Central Max Width Diffraction = 2 \u03bb D / a.\n5. Brewster Law \u03bc = tan i_p; Malus Law I = I0 cos^2 \u03b8.",
    "multiTierNotes": {
      "tier1DetailedNCERT": "Interference is redistribution of light energy due to superposition of waves from two coherent sources.",
      "tier2HighYieldShort": "\u2022 Shift in YDSE pattern when thin slab (thickness t, index n) inserted in one path: \u0394y = (n - 1) t D / d.\n\u2022 Sustained interference requires coherent sources (constant phase difference).\n\u2022 Resolving Power of Microscope RP = 2 n sin \u03b8 / (1.22 \u03bb); Telescope RP = D / (1.22 \u03bb).",
      "tier3ConceptualVisualMechanisms": "Superposition Wave Vector: Vector sum of electric field amplitudes E = E1 + E2.",
      "tier4TopperTricksShortcuts": "YDSE Ratio Trick: I_max / I_min = [ (a1 + a2) / (a1 - a2) ]^2 = [ (\u221aI1 + \u221aI2) / (\u221aI1 - \u221aI2) ]^2."
    },
    "formulaBank": [
      "YDSE Fringe Width beta = lambda * D / d",
      "YDSE Bright Position y_n = n * lambda * D / d",
      "YDSE Max Intensity Ratio I_max / I_min = (sqrt(I1) + sqrt(I2))^2 / (sqrt(I1) - sqrt(I2))^2",
      "Diffraction Minima Condition a * sin theta = n * lambda",
      "Brewster Law mu = tan(i_p)",
      "Malus Law I = I_0 * cos^2(theta)"
    ],
    "ncertFacts": [
      "Interference fringes in YDSE are of equal width, whereas diffraction fringes decrease in width and intensity away from center.",
      "Polarization proves that light is a TRANSVERSE wave."
    ],
    "commonMistakes": [
      "Confusing YDSE maxima condition (d sin \u03b8 = n \u03bb) with single slit diffraction minima condition (a sin \u03b8 = n \u03bb!).",
      "Applying Brewster law when light travels from denser to rarer without adjusting refractive index."
    ],
    "flashcards": [
      {
        "id": "fc_wo_1",
        "question": "What optical phenomenon proves that light is a transverse wave?",
        "answer": "Polarization."
      },
      {
        "id": "fc_wo_2",
        "question": "Brewster angle i_p for glass of refractive index n = \u221a3?",
        "answer": "tan i_p = \u221a3 => i_p = 60\u00b0."
      }
    ]
  },
  {
    "topicId": "phy_photoelectric",
    "topicTitle": "Photoelectric Effect & Matter Waves",
    "chapterTitle": "Modern Physics & Semiconductors",
    "subject": "Physics",
    "detailedNotes": "Photon Energy E = h \u03bd = h c / \u03bb \u2248 1240 / \u03bb(in nm) eV. Photon Momentum p = h / \u03bb = E / c.\nEinstein Photoelectric Equation: E = h \u03bd = \u03d5_0 + K_max = h \u03bd_0 + e V_s (where \u03d5_0 is Work Function, \u03bd_0 is threshold frequency, V_s is stopping potential).\nKey Photoelectric Laws:\n1. Photoelectric current \u221d Intensity of light (at constant frequency above threshold).\n2. Max kinetic energy K_max and stopping potential V_s depend ONLY on frequency \u03bd, independent of intensity!\n3. Below threshold frequency \u03bd_0, no photoemission occurs regardless of intensity.\n4. Process is instantaneous (~10^-9 s).\nde Broglie Matter Waves: Wavelength \u03bb = h / p = h / (m v) = h / \u221a(2 m K).\nFor Electron accelerated through voltage V: \u03bb_e = h / \u221a(2 m e V) = 12.27 / \u221aV \u00c5 = 1.227 / \u221aV nm.",
    "shortNotes": "1. E = h \u03bd = \u03d5_0 + K_max.\n2. K_max = e V_s = h (\u03bd - \u03bd_0).\n3. Photoelectric Current \u221d Intensity.\n4. Stopping Potential V_s depends ONLY on Frequency \u03bd.\n5. Electron de Broglie \u03bb_e = 12.27 / \u221aV \u00c5.",
    "multiTierNotes": {
      "tier1DetailedNCERT": "Photoelectric effect demonstrated particle nature of light (photons).",
      "tier2HighYieldShort": "\u2022 Slope of V_s vs \u03bd graph = h / e (Universal constant!).\n\u2022 Work Function \u03d5_0 = h \u03bd_0 = h c / \u03bb_0.\n\u2022 de Broglie Wavelength of Gas Molecule at temperature T: \u03bb = h / \u221a(3 m k_B T).\n\u2022 Davisson-Germer Experiment confirmed wave nature of electrons through diffraction.",
      "tier3ConceptualVisualMechanisms": "Photon-Electron Collision: One-to-one instantaneous energy transfer between single photon and single bound electron.",
      "tier4TopperTricksShortcuts": "Shortcut: Stopping Potential Slope: Graph of V_s against frequency \u03bd is a straight line with slope h/e and x-intercept = threshold frequency \u03bd_0."
    },
    "formulaBank": [
      "Einstein Photoelectric Eq h * nu = phi_0 + K_max",
      "Stopping Potential e * V_s = K_max = h * (nu - nu_0)",
      "de Broglie Wavelength lambda = h / p = h / sqrt(2 * m * K)",
      "Electron de Broglie Wavelength lambda_e = 12.27 / sqrt(V) Angstroms",
      "Gas Molecule de Broglie lambda = h / sqrt(3 * m * k_B * T)"
    ],
    "ncertFacts": [
      "Slope of stopping potential V_s versus frequency \u03bd graph is h/e, independent of metal target material.",
      "Davisson-Germer experiment experimentally verified the wave nature of electrons."
    ],
    "commonMistakes": [
      "Believing increasing light intensity increases kinetic energy of emitted photoelectrons (intensity increases CURRENT/COUNT, NOT kinetic energy!).",
      "Using mass of proton in electron de Broglie formula."
    ],
    "flashcards": [
      {
        "id": "fc_pe_1",
        "question": "What does slope of stopping potential V_s versus frequency \u03bd graph represent?",
        "answer": "Universal constant ratio h / e."
      },
      {
        "id": "fc_pe_2",
        "question": "de Broglie wavelength of electron accelerated through 100 Volts?",
        "answer": "\u03bb_e = 12.27 / \u221a100 = 1.227 \u00c5 = 0.1227 nm."
      }
    ]
  },
  {
    "topicId": "phy_bohr_atom",
    "topicTitle": "Bohr Model of Atom & Hydrogen Spectrum",
    "chapterTitle": "Modern Physics & Semiconductors",
    "subject": "Physics",
    "detailedNotes": "Bohr Model Postulates (for hydrogen-like atoms with Z protons and 1 electron):\n1. Quantized Angular Momentum: L = m v r = n h / (2\u03c0) (n = 1, 2, 3...).\n2. Radius of nth Orbit: r_n = (0.529 \u00c5) * (n^2 / Z).\n3. Velocity in nth Orbit: v_n = (2.18 \u00d7 10^6 m/s) * (Z / n).\n4. Total Energy in nth Orbit: E_n = - (13.6 eV) * (Z^2 / n^2).\n   - Kinetic Energy K_n = - E_n = + 13.6 Z^2 / n^2 eV.\n   - Potential Energy U_n = 2 E_n = - 27.2 Z^2 / n^2 eV.\nHydrogen Spectral Series (1/\u03bb = R Z^2 [ 1/n1^2 - 1/n2^2 ]):\n\u2022 Lyman Series (n1 = 1, n2 = 2,3...): Ultraviolet region.\n\u2022 Balmer Series (n1 = 2, n2 = 3,4...): Visible region.\n\u2022 Paschen Series (n1 = 3, n2 = 4,5...): Infrared region.\n\u2022 Brackett Series (n1 = 4), Pfund Series (n1 = 5): Infrared region.\nNumber of Spectral Lines emitted from nth excited state to ground state: N = n (n - 1) / 2.",
    "shortNotes": "1. Bohr L = m v r = n h / (2\u03c0).\n2. Radius r_n = 0.529 (n^2 / Z) \u00c5.\n3. Energy E_n = - 13.6 (Z^2 / n^2) eV.\n4. K_n = - E_n, U_n = 2 E_n.\n5. Lyman -> UV; Balmer -> Visible; Paschen/Brackett/Pfund -> IR.",
    "multiTierNotes": {
      "tier1DetailedNCERT": "Rutherford planetary model failed due to electromagnetic classical instability (accelerating charge radiating energy continuously). Bohr introduced quantized stationary non-radiating orbits.",
      "tier2HighYieldShort": "\u2022 Ionization Energy of Hydrogen = + 13.6 eV.\n\u2022 Total spectral lines for electron transitioning from level n2 to n1: N = (n2 - n1)(n2 - n1 + 1) / 2.\n\u2022 Rydberg Constant R = 1.097 \u00d7 10^7 m^-1, 1/R \u2248 912 \u00c5.",
      "tier3ConceptualVisualMechanisms": "de Broglie Standing Wave Explanation of Bohr Postulate: Electron orbit circumference contains integral number of de Broglie wavelengths 2\u03c0 r = n \u03bb.",
      "tier4TopperTricksShortcuts": "Energy Ratio Trick: E1 : E2 : E3 : E4 = -13.6 : -3.4 : -1.51 : -0.85 eV. Energy gap \u0394E decreases rapidly as n increases."
    },
    "formulaBank": [
      "Bohr Angular Momentum m * v * r = n * h / (2 * pi)",
      "Bohr Radius r_n = 0.529 * (n^2 / Z) Angstroms",
      "Bohr Energy E_n = - 13.6 * (Z^2 / n^2) eV",
      "Rydberg Wave Number 1 / lambda = R * Z^2 * (1/n1^2 - 1/n2^2)",
      "Total Spectral Lines N = n * (n - 1) / 2"
    ],
    "ncertFacts": [
      "Balmer series is the ONLY spectral series of hydrogen atom lying in the visible region.",
      "Kinetic energy K = - E, and Potential energy U = 2 E for electron in Bohr orbit."
    ],
    "commonMistakes": [
      "Applying Bohr model formulas to multi-electron atoms (Bohr model applies ONLY to single-electron species like H, He+, Li2+!).",
      "Forgetting Z^2 factor when calculating energy of He+ or Li2+."
    ],
    "flashcards": [
      {
        "id": "fc_bohr_1",
        "question": "Which spectral series of hydrogen atom lies in the visible region?",
        "answer": "Balmer Series (n1 = 2)."
      },
      {
        "id": "fc_bohr_2",
        "question": "Total energy E and Potential energy U of electron in 1st Bohr orbit of Hydrogen?",
        "answer": "E = -13.6 eV, U = 2 E = -27.2 eV."
      }
    ]
  },
  {
    "topicId": "phy_nuclei",
    "topicTitle": "Nuclear Physics & Radioactivity",
    "chapterTitle": "Modern Physics & Semiconductors",
    "subject": "Physics",
    "detailedNotes": "Nuclear Radius R = R_0 A^(1/3) (where R_0 \u2248 1.2 fm = 1.2 \u00d7 10^-15 m).\nNuclear Density \u03c1 = Mass / Volume \u2248 2.3 \u00d7 10^17 kg/m^3 (CONSTANT for all nuclei, independent of mass number A!).\nMass Defect \u0394m = [ Z m_p + (A - Z) m_n ] - M_nucleus.\nBinding Energy BE = \u0394m c^2 = \u0394m (in amu) \u00d7 931.5 MeV.\nBinding Energy per Nucleon (BE/A): Peak at Fe-56 (~8.8 MeV/nucleon), decreases for heavy nuclei (fission) and light nuclei (fusion).\nRadioactive Decay Law: N(t) = N_0 e^(- \u03bb t), Activity A = - dN/dt = \u03bb N.\n\u2022 Half-Life T_1/2 = ln 2 / \u03bb = 0.693 / \u03bb.\n\u2022 Mean Life \u03c4 = 1 / \u03bb = 1.44 T_1/2.\n\u2022 Amount remaining after n half-lives: N = N_0 / 2^n.",
    "shortNotes": "1. R = R0 A^(1/3).\n2. Nuclear density \u03c1 \u2248 10^17 kg/m^3 (constant for all nuclei!).\n3. BE = \u0394m \u00d7 931.5 MeV.\n4. Radioactive Decay N(t) = N0 e^(-\u03bb t).\n5. Half-life T_1/2 = 0.693 / \u03bb, N = N0 / 2^n.",
    "multiTierNotes": {
      "tier1DetailedNCERT": "Nuclear force is short-range (~1-2 fm), extremely strong, charge-independent, and non-central.",
      "tier2HighYieldShort": "\u2022 Alpha Decay: Z decreases by 2, A decreases by 4.\n\u2022 Beta-minus Decay: n -> p + e^- + anti-neutrino (Z increases by 1, A unchanged).\n\u2022 Beta-plus Decay: p -> n + e^+ + neutrino (Z decreases by 1, A unchanged).\n\u2022 Gamma Decay: Excited nucleus relaxes to lower energy state emitting high-energy photon (Z, A unchanged).",
      "tier3ConceptualVisualMechanisms": "BE/A Curve Mechanism: Fission splits heavy unstable nucleus (A>200) into tighter bound fragments; Fusion combines light nuclei (A<20) to move toward Fe-56 peak.",
      "tier4TopperTricksShortcuts": "Nuclear Density Shortcut: Nuclear density ratio \u03c11 / \u03c12 = 1 : 1 for ANY two nuclei (e.g. Carbon vs Uranium density is identical!)."
    },
    "formulaBank": [
      "Nuclear Radius R = R_0 * A^(1/3)",
      "Binding Energy BE = Delta_m * 931.5 MeV",
      "Radioactive Decay N(t) = N_0 * e^(- lambda * t)",
      "Half Life T_1/2 = 0.693 / lambda",
      "Fraction Remaining N / N_0 = (1/2)^n = (1/2)^(t / T_1/2)"
    ],
    "ncertFacts": [
      "Nuclear density is independent of mass number A and is approximately 2.3 \u00d7 10^17 kg/m^3.",
      "Fe-56 nucleus has one of the highest binding energy per nucleon (~8.75 MeV/nucleon)."
    ],
    "commonMistakes": [
      "Thinking nuclear density increases with mass number A (volume V \u221d A and Mass \u221d A, so density \u03c1 = M/V is CONSTANT!).",
      "Confusing half-life T_1/2 with mean-life \u03c4 (\u03c4 = 1.44 T_1/2)."
    ],
    "flashcards": [
      {
        "id": "fc_nuc_1",
        "question": "Ratio of nuclear density of Aluminum-27 to Lead-208?",
        "answer": "1 : 1 (Nuclear density is constant for all nuclei)."
      },
      {
        "id": "fc_nuc_2",
        "question": "Fraction of radioactive sample remaining after 3 half-lives?",
        "answer": "N / N_0 = (1/2)^3 = 1/8 = 12.5%."
      }
    ]
  },
  {
    "topicId": "phy_semiconductors",
    "topicTitle": "Semiconductor Electronics & P-N Junction",
    "chapterTitle": "Modern Physics & Semiconductors",
    "subject": "Physics",
    "detailedNotes": "Energy Band Theory:\n\u2022 Insulators: Band gap E_g > 3 eV.\n\u2022 Semiconductors: Band gap E_g < 3 eV (Si E_g = 1.1 eV, Ge E_g = 0.7 eV).\n\u2022 Conductors: Valance and conduction bands overlap (E_g \u2248 0).\nIntrinsic Semiconductors: n_e = n_h = n_i. Mass Action Law: n_e \u00d7 n_h = n_i^2.\nExtrinsic Semiconductors:\n\u2022 N-type: Doped with Pentavalent impurities (P, As, Sb). Majority carriers = electrons (n_e >> n_h).\n\u2022 P-type: Doped with Trivalent impurities (B, Al, Ga, In). Majority carriers = holes (n_h >> n_e).\nP-N Junction Diode:\n\u2022 Forward Bias: Positive to P, Negative to N. Depletion width decreases, barrier height decreases, current flows easily.\n\u2022 Reverse Bias: Positive to N, Negative to P. Depletion width increases, barrier height increases, negligible reverse saturation current.\nDiode Rectifiers:\n\u2022 Half-Wave Rectifier: Efficiency \u03b7 = 40.6%, ripple frequency = f.\n\u2022 Full-Wave Rectifier: Efficiency \u03b7 = 81.2%, ripple frequency = 2 f.\nZener Diode: Heavily doped P-N junction operating in reverse breakdown region as constant voltage regulator.",
    "shortNotes": "1. Mass Action Law: n_e \u00d7 n_h = n_i^2.\n2. N-type -> Pentavalent (electrons majority); P-type -> Trivalent (holes majority).\n3. Forward Bias -> Depletion width DECREASES; Reverse Bias -> INCREASES.\n4. Full-Wave Rectifier Ripple Frequency = 2 f, max efficiency = 81.2%.\n5. Zener Diode operates in reverse breakdown as Voltage Regulator.",
    "multiTierNotes": {
      "tier1DetailedNCERT": "Depletion layer forms due to diffusion of electrons and holes across junction, leaving immobile ionized donor (+ve) and acceptor (-ve) ions creating built-in barrier potential V_b (~0.7V Si, ~0.3V Ge).",
      "tier2HighYieldShort": "\u2022 Solar Cell: Converts light energy directly to electrical energy without external biasing (operates in 4th quadrant of I-V curve).\n\u2022 LED (Light Emitting Diode): Heavy forward bias recombination emits photons (E_g = h \u03bd).\n\u2022 Photodiode: Operated in REVERSE bias to detect optical signals.",
      "tier3ConceptualVisualMechanisms": "Reverse Bias Photodiode Detection: Fractional change in minority carrier density under illumination is far greater than in majority carrier density.",
      "tier4TopperTricksShortcuts": "Rectifier Output Frequency Trick: Input AC frequency f = 50 Hz -> Half-wave output ripple = 50 Hz; Full-wave output ripple = 2 \u00d7 50 = 100 Hz!"
    },
    "formulaBank": [
      "Mass Action Law n_e * n_h = n_i^2",
      "Full Wave Ripple Frequency f_out = 2 * f_in",
      "Half Wave Max Efficiency eta_max = 40.6%",
      "Full Wave Max Efficiency eta_max = 81.2%",
      "Photon Energy for LED E_g = h * c / lambda"
    ],
    "ncertFacts": [
      "Photodiodes are intentionally operated in REVERSE bias to measure optical signal changes.",
      "Zener diode is used as a voltage regulator in reverse breakdown region."
    ],
    "commonMistakes": [
      "Thinking N-type semiconductor has net negative charge (N-type and P-type materials are electrically NEUTRAL overall!).",
      "Operating photodiode in forward bias."
    ],
    "flashcards": [
      {
        "id": "fc_semi_1",
        "question": "Is an N-type semiconductor positively charged, negatively charged, or electrically neutral?",
        "answer": "Electrically Neutral (donor ions balance electron charges)."
      },
      {
        "id": "fc_semi_2",
        "question": "Ripple frequency of full-wave rectifier for 50 Hz AC input?",
        "answer": "100 Hz (2 \u00d7 50 Hz)."
      }
    ]
  }
];
