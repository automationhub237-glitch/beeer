import { INITIAL_CONCEPTS, INITIAL_PYQS } from '../data/knowledgeGraphData';
import { FAILURE_LAYER_DESCRIPTIONS } from '../types/neetOS';

export function runActiveLearningEngineTests() {
  console.log('--- RUNNING NEET OS ACTIVE LEARNING ENGINE TESTS ---');
  let passed = 0;
  let failed = 0;

  // Test 1: Learn Backwards Prerequisite Chain Resolution
  const colligative = INITIAL_CONCEPTS.find(c => c.id === 'colligative_properties');
  if (colligative && colligative.prerequisites.includes('raoults_law')) {
    console.log('✓ Test 1 Passed: Learn Backwards prerequisite link verified (Colligative -> Raoults Law)');
    passed++;
  } else {
    console.error('✗ Test 1 Failed: Missing prerequisite link');
    failed++;
  }

  // Test 2: Failure Layer Diagnostic Mapping
  const layer1Desc = FAILURE_LAYER_DESCRIPTIONS[1];
  if (layer1Desc && layer1Desc.name.includes('Concept Gap')) {
    console.log('✓ Test 2 Passed: Failure Layer 1 correctly mapped to Concept Gap');
    passed++;
  } else {
    console.error('✗ Test 2 Failed: Layer 1 mapping issue');
    failed++;
  }

  // Test 3: Blurting Keyword Structural Matching Algorithm
  const sampleInput = "Adding solute lowers vapour pressure and elevates boiling point by osmotic pressure";
  const keywords = colligative?.keyKeywords || [];
  const remembered = keywords.filter(kw => sampleInput.toLowerCase().includes(kw.toLowerCase()));
  if (remembered.length >= 2) {
    console.log(`✓ Test 3 Passed: Blurting structural keyword matcher extracted ${remembered.length} keywords`);
    passed++;
  } else {
    console.error('✗ Test 3 Failed: Keyword matcher error');
    failed++;
  }

  // Test 4: PYQ 6-Layer Diagnostic Completeness
  const pyq1 = INITIAL_PYQS[0];
  if (pyq1 && pyq1.layerDiagnostics[1] && pyq1.layerDiagnostics[6]) {
    console.log('✓ Test 4 Passed: PYQ item contains full 6-layer failure diagnostic descriptions');
    passed++;
  } else {
    console.error('✗ Test 4 Failed: PYQ missing layer diagnostic metadata');
    failed++;
  }

  console.log(`--- TEST RESULTS: ${passed} Passed, ${failed} Failed ---`);
  if (failed > 0) throw new Error('Active learning engine unit tests failed');
}

runActiveLearningEngineTests();
