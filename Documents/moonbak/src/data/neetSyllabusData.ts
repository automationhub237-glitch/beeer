import type {
  SyllabusSubjectTree,
  SprintBlockItem,
  GraduatedQuestionItem,
  TopicResourceData
} from '../types/neetOS';

export const FULL_NEET_SYLLABUS: SyllabusSubjectTree[] = [
  {
    subject: 'Physics',
    chapters: [
      {
        id: 'phy_ch1',
        title: 'Physical World & Measurement',
        classLevel: '11',
        category: 'General',
        topics: [
          { id: 'phy_units_dims', title: 'Units, Dimensions & Error Analysis', summary: 'SI base units, dimensional formulae, principle of homogeneity, error propagation.' },
          { id: 'phy_instruments', title: 'Measuring Instruments (Vernier & Screw Gauge)', summary: 'Least count, zero error correction, vernier calipers, screw gauge.' }
        ]
      },
      {
        id: 'phy_ch2',
        title: 'Kinematics',
        classLevel: '11',
        category: 'General',
        topics: [
          { id: 'phy_1d_motion', title: 'Motion in a Straight Line', summary: 'Distance vs displacement, instantaneous velocity, uniform acceleration equations.' },
          { id: 'phy_projectile', title: 'Projectile Motion', summary: 'Trajectory equation, time of flight, horizontal range, maximum height.' },
          { id: 'phy_relative_motion', title: 'Relative Motion & Vectors', summary: 'Vector addition, dot and cross products, relative velocity in 2D.' }
        ]
      }
    ]
  }
];

export const FULL_SPRINT_BLOCKS: SprintBlockItem[] = [];

export const FULL_QUESTION_BANK: GraduatedQuestionItem[] = [
  {
    id: 'q_easy_1',
    questionText: 'What is the dimension formula for Universal Gravitational Constant G?',
    options: ['[M^-1 L^3 T^-2]', '[M^1 L^2 T^-2]', '[M^-2 L^3 T^-1]', '[M^-1 L^2 T^-2]'],
    correctOptionIndex: 0,
    explanation: 'From F = G * m1 * m2 / r^2, G = F * r^2 / (m1 * m2) = [M L T^-2] * [L^2] / [M^2] = [M^-1 L^3 T^-2].',
    subject: 'Physics',
    chapter: 'Physical World & Measurement',
    topic: 'Units, Dimensions & Error Analysis',
    difficultyScore: 15,
    category: 'EASY',
    difficulty: '0-20',
    questionType: 'MCQ',
    source: 'NCERT',
    isOfficialPYQ: false,
    conceptTested: 'Dimensional derivation from physical law formula',
    commonMistakeTrap: 'Forgetting that mass appears in denominator yielding negative power M^-1.'
  }
];

export const INITIAL_TOPIC_RESOURCES: TopicResourceData[] = [];
