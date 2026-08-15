import React, { useState } from 'react';
import { useOS } from '../context/OSContext';
import { FAILURE_LAYER_DESCRIPTIONS } from '../types/neetOS';
import type { FailureLayer } from '../types/neetOS';
import { Eye, Lock, CheckCircle2 } from 'lucide-react';

export const QuestionAnalyzer: React.FC = () => {
  const { pyqs, addMistakeLog } = useOS();
  const [selectedPyqId, setSelectedPyqId] = useState<string>(pyqs[0]?.id || 'pyq_sol_1');
  const [formulaUnlocked, setFormulaUnlocked] = useState<boolean>(false);
  const [userDiagnosis, setUserDiagnosis] = useState<FailureLayer | null>(null);

  const pyq = pyqs.find(p => p.id === selectedPyqId) || pyqs[0];

  const [answers, setAnswers] = useState({
    whatHappening: '',
    whatAsked: '',
    relevantData: '',
    irrelevantData: '',
    concept: '',
    visualisation: '',
    formulaChoice: '',
    whyAppropriate: ''
  });

  const handleInputChange = (field: keyof typeof answers, val: string) => {
    setAnswers(prev => ({ ...prev, [field]: val }));
  };

  const handleUnlockFormula = () => {
    setFormulaUnlocked(true);
  };

  const handleSaveDiagnostic = (layer: FailureLayer) => {
    setUserDiagnosis(layer);
    addMistakeLog({
      questionId: pyq.id,
      questionTitle: pyq.title,
      subject: pyq.subject,
      conceptId: pyq.keyConceptId,
      failedLayer: layer,
      userNotes: answers.whatHappening || 'Question deconstruction practice'
    });
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-slate-100 shadow-xl space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold rounded-full uppercase tracking-wider mb-2">
            <Eye className="w-3.5 h-3.5" />
            9. "SEE THE QUESTION BEFORE THE FORMULA"
          </div>
          <h2 className="text-2xl font-bold text-white">Question Deconstruction Engine</h2>
          <p className="text-sm text-slate-400 mt-1">
            Train recognition of physical structure before recalling equations. Unlock formulas only after complete analysis.
          </p>
        </div>

        {/* PYQ Selector */}
        <select
          value={selectedPyqId}
          onChange={(e) => {
            setSelectedPyqId(e.target.value);
            setFormulaUnlocked(false);
            setUserDiagnosis(null);
          }}
          className="bg-slate-800 border border-slate-700 text-cyan-300 text-sm rounded-lg px-3 py-2 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
        >
          {pyqs.map(p => (
            <option key={p.id} value={p.id}>
              [{p.subject}] {p.title}
            </option>
          ))}
        </select>
      </div>

      {/* Question Statement Box */}
      <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-3 shadow-inner">
        <div className="flex items-center justify-between text-xs font-mono text-cyan-400">
          <span>{pyq.subject} • {pyq.chapter}</span>
          <span className="bg-slate-900 px-2 py-0.5 rounded border border-slate-800">{pyq.integrityLabel}</span>
        </div>
        <h3 className="text-lg font-bold text-white leading-relaxed">{pyq.questionText}</h3>
      </div>

      {/* 8-Step Structural Analysis Form */}
      <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-4">
        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
          Deconstruct Structure Before Formula Selection
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-semibold text-slate-300 block mb-1">1. What is physically happening?</label>
            <textarea
              value={answers.whatHappening}
              onChange={(e) => handleInputChange('whatHappening', e.target.value)}
              placeholder="e.g. Rotating conductor sweeping area across magnetic flux lines..."
              rows={2}
              className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2.5 text-xs text-slate-200 placeholder-slate-600 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-300 block mb-1">2. What is being asked?</label>
            <textarea
              value={answers.whatAsked}
              onChange={(e) => handleInputChange('whatAsked', e.target.value)}
              placeholder="e.g. Total induced electromotive force (EMF)..."
              rows={2}
              className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2.5 text-xs text-slate-200 placeholder-slate-600 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-300 block mb-1">3. What information matters?</label>
            <input
              type="text"
              value={answers.relevantData}
              onChange={(e) => handleInputChange('relevantData', e.target.value)}
              placeholder="e.g. Length L, angular speed w, B field..."
              className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2.5 text-xs text-slate-200 placeholder-slate-600 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-300 block mb-1">4. What information is irrelevant / distractor?</label>
            <input
              type="text"
              value={answers.irrelevantData}
              onChange={(e) => handleInputChange('irrelevantData', e.target.value)}
              placeholder="e.g. Mass of the rod or molarity concentration..."
              className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2.5 text-xs text-slate-200 placeholder-slate-600 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Formula Unlock Gate */}
        {!formulaUnlocked ? (
          <button
            onClick={handleUnlockFormula}
            className="w-full py-3 bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-cyan-950/40 flex items-center justify-center gap-2"
          >
            <Lock className="w-4 h-4" />
            <span>Unlock Formula & Expert Principles</span>
          </button>
        ) : (
          <div className="space-y-4 pt-3 border-t border-slate-800 animate-fadeIn">
            {/* Required Formula Box */}
            <div className="p-4 bg-cyan-950/50 border border-cyan-500/40 rounded-xl space-y-2">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" /> Required Formula & Principle
              </span>
              <div className="text-lg font-mono font-bold text-white bg-slate-900 p-3 rounded-lg border border-slate-800 text-center">
                {pyq.requiredFormula}
              </div>
              <p className="text-xs text-cyan-200 italic mt-1 font-sans">
                "{pyq.expertApproach}"
              </p>
            </div>

            {/* Layer Failure Diagnosis */}
            <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 space-y-3">
              <span className="text-xs font-bold text-slate-300 block">
                If you struggled or failed this question, WHICH LAYER failed?
              </span>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {([1, 2, 3, 4, 5, 6] as FailureLayer[]).map(layer => {
                  const info = FAILURE_LAYER_DESCRIPTIONS[layer];
                  const isSelected = userDiagnosis === layer;
                  return (
                    <button
                      key={layer}
                      onClick={() => handleSaveDiagnostic(layer)}
                      className={`p-3 rounded-lg text-left border transition-all ${
                        isSelected
                          ? 'bg-rose-950/80 border-rose-500 text-rose-100 ring-2 ring-rose-500/30'
                          : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      <div className="font-bold text-xs text-white">{info.name}</div>
                      <div className="text-[11px] text-slate-400 mt-0.5">{info.description}</div>
                    </button>
                  );
                })}
              </div>

              {userDiagnosis && (
                <div className="p-3 bg-emerald-950/50 border border-emerald-500/30 rounded-lg text-xs text-emerald-300 font-medium">
                  Logged Layer {userDiagnosis} Failure. Action: {FAILURE_LAYER_DESCRIPTIONS[userDiagnosis].action}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
