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
    topicId: 'phy_1d_motion',
    topicTitle: 'Motion in a Straight Line',
    chapterTitle: 'Kinematics',
    subject: 'Physics',
    detailedNotes: 'Kinematics deals with the motion of points, bodies, and systems of bodies without considering the forces that cause them to move. Key parameters include displacement (vector), velocity (vector), acceleration (vector), and time (scalar).',
    shortNotes: '1. v = u + at\n2. s = ut + 0.5at^2\n3. v^2 = u^2 + 2as\n4. s_nth = u + 0.5a(2n-1)\n5. Conditions: Constant acceleration only!',
    multiTierNotes: {
      tier1DetailedNCERT: 'NCERT Kinematics line-by-line derivation: Instantaneous velocity is defined as the limit of average velocity as time interval approaches zero: v = lim(Δt->0) Δx/Δt = dx/dt. Acceleration is the time derivative of velocity: a = dv/dt = d^2x/dt^2. For motion under constant acceleration, integrating dv = a dt yields v = u + at. Integrating dx = (u + at) dt yields x = x0 + ut + 0.5 at^2.',
      tier2HighYieldShort: '• Velocity-time graph area = Displacement.\n• Speed-time graph area = Distance.\n• Slope of position-time graph = Velocity.\n• Slope of velocity-time graph = Acceleration.\n• Under gravity: Maximum height H = u^2 / (2g), Time to top = u/g.',
      tier3ConceptualVisualMechanisms: 'Kinematic Parameter Model: Envision a particle moving along x-axis. If v and a have same sign, particle speeds up. If v and a have opposite signs, particle slows down (retardation). When v = 0, particle momentarily comes to rest and changes direction if a ≠ 0.',
      tier4TopperTricksShortcuts: 'Galileo Law Shortcut: For a particle dropped from rest under gravity, distances covered in successive 1-second intervals are in ratio 1 : 3 : 5 : 7 : ... (Galileo Law of Odd Numbers).'
    },
    formulaBank: [
      'v = u + a * t',
      's = u * t + 0.5 * a * t^2',
      'v^2 = u^2 + 2 * a * s',
      's_nth = u + 0.5 * a * (2n - 1)',
      'v_avg = Total Displacement / Total Time'
    ],
    ncertFacts: [
      'Magnitude of displacement can be equal to or less than distance, but never greater.',
      'An object can have zero velocity and non-zero acceleration simultaneously (e.g. at highest point of vertical throw).'
    ],
    commonMistakes: [
      'Applying uniform acceleration equations when acceleration varies with time or position.',
      'Confusing average speed with magnitude of average velocity when path reverses.'
    ],
    flashcards: [
      { id: 'fc_phy_1', question: 'When is distance equal to magnitude of displacement?', answer: 'When motion occurs along a straight line without reversing direction.' }
    ]
  }
];
