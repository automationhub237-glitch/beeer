import type {
  SyllabusSubjectTree,
  SprintBlockItem,
  TopicResourceData,
  GraduatedQuestionItem
} from '../types/neetOS';

import {
  PHYSICS_CHAPTERS,
  PHYSICS_SPRINT_BLOCKS,
  PHYSICS_RESOURCE_DATA,
  PHYSICS_QUESTION_BANK
} from './physicsData';

import {
  CHEMISTRY_CHAPTERS,
  CHEMISTRY_SPRINT_BLOCKS,
  CHEMISTRY_RESOURCE_DATA,
  CHEMISTRY_QUESTION_BANK
} from './chemistryData';

import {
  BIOLOGY_CHAPTERS,
  BIOLOGY_SPRINT_BLOCKS,
  BIOLOGY_RESOURCE_DATA,
  BIOLOGY_QUESTION_BANK
} from './biologyData';

export const MASTER_SYLLABUS_TREE: SyllabusSubjectTree[] = [
  {
    subject: 'Physics',
    chapters: PHYSICS_CHAPTERS
  },
  {
    subject: 'Chemistry',
    chapters: CHEMISTRY_CHAPTERS
  },
  {
    subject: 'Biology',
    chapters: BIOLOGY_CHAPTERS
  }
];

export const MASTER_SPRINT_BLOCKS: SprintBlockItem[] = [
  ...PHYSICS_SPRINT_BLOCKS,
  ...CHEMISTRY_SPRINT_BLOCKS,
  ...BIOLOGY_SPRINT_BLOCKS
];

export const MASTER_TOPIC_RESOURCES: TopicResourceData[] = [
  ...PHYSICS_RESOURCE_DATA,
  ...CHEMISTRY_RESOURCE_DATA,
  ...BIOLOGY_RESOURCE_DATA
];

export const MASTER_QUESTION_BANK: GraduatedQuestionItem[] = [
  ...PHYSICS_QUESTION_BANK,
  ...CHEMISTRY_QUESTION_BANK,
  ...BIOLOGY_QUESTION_BANK
];
