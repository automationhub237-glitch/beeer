import type {
  SyllabusSubjectTree,
  SprintBlockItem,
  GraduatedQuestionItem,
  TopicResourceData
} from '../types/neetOS';

import { physicsTree, physicsSprintBlocks, physicsQuestions, physicsTopicResources } from './physicsData';
import { chemistryTree, chemistrySprintBlocks, chemistryQuestions, chemistryTopicResources } from './chemistryData';
import { biologyTree, biologySprintBlocks, biologyQuestions, biologyTopicResources } from './biologyData';

export const FULL_NEET_SYLLABUS: SyllabusSubjectTree[] = [
  physicsTree,
  chemistryTree,
  biologyTree
];

export const FULL_SPRINT_BLOCKS: SprintBlockItem[] = [
  ...physicsSprintBlocks,
  ...chemistrySprintBlocks,
  ...biologySprintBlocks
];

export const FULL_QUESTION_BANK: GraduatedQuestionItem[] = [
  ...physicsQuestions,
  ...chemistryQuestions,
  ...biologyQuestions
];

export const INITIAL_TOPIC_RESOURCES: TopicResourceData[] = [
  ...physicsTopicResources,
  ...chemistryTopicResources,
  ...biologyTopicResources
];
