import React, { useState } from 'react';
import { useOS } from '../context/OSContext';
import { HelpCircle, ChevronRight, BrainCircuit } from 'lucide-react';

interface WhyEngineProps {
  initialConceptId?: string;
  onNavigateBackwards?: () => void;
}

export const WhyEngine: React.FC<WhyEngineProps> = ({ initialConceptId, onNavigateBackwards }) => {
  const { concepts } = useOS();
  const [selectedConceptId, setSelectedConceptId] = useState<string>(initialConceptId || concepts[0]?.id || 'colligative_properties');
  const [currentPromptIndex, setCurrentPromptIndex] = useState<number>(0);
  const [userResponse, setUserResponse] = useState<string>('');
  const [showKeyCheck, setShowKeyCheck] = useState<boolean>(false);
  const [satisfaction, setSatisfaction] = useState<'solid' | 'partial' | 'weak' | null>(null);

  const concept = concepts.find(c => c.id === selectedConceptId) || concepts[0];
  const dynamicQuestions = [
    ...(concept.whyPrompts || []),
    {
      question: `What would happen at the physical extreme (e.g. infinite dilution, zero temperature, maximum field limit)?`,
      keyCheck: `Evaluate boundary condition behavior and non-physical mathematical singularities.`
    },
    {
      question: `Can you explain the causal mechanism behind ${concept.title} without using any formulas or technical jargon?`,
      keyCheck: `Focus on particle interactions, forces, energy transfers, or cellular mechanics.`
    },
    {
      question: `What primary assumption is being made here? What breaks if that assumption is removed?`,
      keyCheck: `Identify idealizations e.g. non-interacting particles, rigid bodies, reversible processes.`
    }
  ];

  const currentQuestion = dynamicQuestions[currentPromptIndex] || dynamicQuestions[0];

  const handleNextQuestion = () => {
    setShowKeyCheck(false);
    setUserResponse('');
    setSatisfaction(null);
    if (currentPromptIndex < dynamicQuestions.length - 1) {
      setCurrentPromptIndex(prev => prev + 1);
    } else {
      setCurrentPromptIndex(0);
    }
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-slate-100 shadow-xl space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold rounded-full uppercase tracking-wider mb-2">
            <HelpCircle className="w-3.5 h-3.5" />
            3. THE "WHY IS THIS TRUE?" ENGINE
          </div>
          <h2 className="text-2xl font-bold text-white">Dynamic Causal Questioning</h2>
          <p className="text-sm text-slate-400 mt-1">
            Rejects shallow memorization. Forces continuous deep questioning until true physical cause is demonstrated.
          </p>
        </div>

        {/* Concept Selector */}
        <select
          value={selectedConceptId}
          onChange={(e) => {
            setSelectedConceptId(e.target.value);
            setCurrentPromptIndex(0);
            setUserResponse('');
            setShowKeyCheck(false);
            setSatisfaction(null);
          }}
          className="bg-slate-800 border border-slate-700 text-amber-300 text-sm rounded-lg px-3 py-2 focus:ring-2 focus:ring-amber-500 focus:outline-none"
        >
          {concepts.map(c => (
            <option key={c.id} value={c.id}>
              [{c.subject}] {c.title}
            </option>
          ))}
        </select>
      </div>

      {/* Question Card */}
      <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-4 shadow-inner">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-wide">
            Causal Probe {currentPromptIndex + 1} of {dynamicQuestions.length}
          </span>
          <span className="text-xs text-slate-500 font-mono">Concept: {concept.title}</span>
        </div>

        <h3 className="text-xl font-bold text-white leading-snug">
          "{currentQuestion.question}"
        </h3>

        {/* User Causal Explanation Input */}
        <textarea
          value={userResponse}
          onChange={(e) => setUserResponse(e.target.value)}
          placeholder="Type your deep physical / biological explanation here..."
          rows={4}
          className="w-full bg-slate-900 border border-slate-800 rounded-lg p-3.5 text-sm text-slate-200 placeholder-slate-600 focus:ring-2 focus:ring-amber-500 focus:outline-none"
        />

        {/* Submit & Reveal Benchmark */}
        {!showKeyCheck ? (
          <button
            disabled={!userResponse.trim()}
            onClick={() => setShowKeyCheck(true)}
            className="w-full py-3 bg-amber-600 hover:bg-amber-500 disabled:opacity-40 disabled:hover:bg-amber-600 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-lg transition-all shadow-lg shadow-amber-950/40"
          >
            Check Causal Benchmark Answer
          </button>
        ) : (
          <div className="space-y-4 pt-2 border-t border-slate-800 animate-fadeIn">
            <div className="p-4 bg-amber-950/30 border border-amber-500/30 rounded-lg space-y-2">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wide flex items-center gap-1.5">
                <BrainCircuit className="w-4 h-4" />
                Benchmark Causal Key Point
              </span>
              <p className="text-sm text-amber-200 font-sans leading-relaxed">
                {currentQuestion.keyCheck}
              </p>
            </div>

            {/* Self Evaluation Buttons */}
            <div className="space-y-2">
              <span className="text-xs font-semibold text-slate-400 block">Rate your explanation's causal depth:</span>
              <div className="grid grid-cols-3 gap-3">
                <button
                  onClick={() => setSatisfaction('solid')}
                  className={`py-2 px-3 rounded-lg text-xs font-semibold border transition-all ${
                    satisfaction === 'solid'
                      ? 'bg-emerald-600 border-emerald-400 text-white'
                      : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-emerald-500/50'
                  }`}
                >
                  Solid Causal Model
                </button>
                <button
                  onClick={() => setSatisfaction('partial')}
                  className={`py-2 px-3 rounded-lg text-xs font-semibold border transition-all ${
                    satisfaction === 'partial'
                      ? 'bg-amber-600 border-amber-400 text-slate-950 font-bold'
                      : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-amber-500/50'
                  }`}
                >
                  Partial / Missed Cause
                </button>
                <button
                  onClick={() => {
                    setSatisfaction('weak');
                    if (onNavigateBackwards) onNavigateBackwards();
                  }}
                  className={`py-2 px-3 rounded-lg text-xs font-semibold border transition-all ${
                    satisfaction === 'weak'
                      ? 'bg-rose-600 border-rose-400 text-white'
                      : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-rose-500/50'
                  }`}
                >
                  Shallow (Send to Backwards)
                </button>
              </div>
            </div>

            {/* Advance Button */}
            <button
              onClick={handleNextQuestion}
              className="w-full py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <span>Next Causal Probe</span>
              <ChevronRight className="w-4 h-4 text-amber-400" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
