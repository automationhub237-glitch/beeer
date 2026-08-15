import React, { useState } from 'react';
import { useOS } from '../context/OSContext';
import { Eye, ArrowRight, Sparkles } from 'lucide-react';

export const VisualiseFirst: React.FC = () => {
  const { concepts } = useOS();
  const [selectedConceptId, setSelectedConceptId] = useState<string>(concepts[0]?.id || 'colligative_properties');
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);
  const [userMentalModel, setUserMentalModel] = useState<string>('');

  const concept = concepts.find(c => c.id === selectedConceptId) || concepts[0];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-slate-100 shadow-xl space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold rounded-full uppercase tracking-wider mb-2">
            <Eye className="w-3.5 h-3.5" />
            8. NON-SYMBOLIC VISUALISATION ("VISUALISE FIRST")
          </div>
          <h2 className="text-2xl font-bold text-white">Physical Model Before Symbols Engine</h2>
          <p className="text-sm text-slate-400 mt-1">
            Never start with equations. Build the physical/real-world mental model first: what moves, what interacts, what stays constant.
          </p>
        </div>

        {/* Concept Selector */}
        <select
          value={selectedConceptId}
          onChange={(e) => {
            setSelectedConceptId(e.target.value);
            setCurrentStep(1);
            setUserMentalModel('');
          }}
          className="bg-slate-800 border border-slate-700 text-emerald-300 text-sm rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
        >
          {concepts.map(c => (
            <option key={c.id} value={c.id}>
              [{c.subject}] {c.title}
            </option>
          ))}
        </select>
      </div>

      {/* 3-Step Pipeline Visualizer */}
      <div className="grid grid-cols-3 gap-3 text-center text-xs font-bold uppercase tracking-wider">
        <div
          onClick={() => setCurrentStep(1)}
          className={`p-3 rounded-lg border cursor-pointer transition-all ${
            currentStep === 1
              ? 'bg-emerald-950/80 border-emerald-500 text-emerald-300 ring-2 ring-emerald-500/30'
              : 'bg-slate-950 border-slate-800 text-slate-500'
          }`}
        >
          STEP 1: PHYSICAL MODEL
        </div>
        <div
          onClick={() => setCurrentStep(2)}
          className={`p-3 rounded-lg border cursor-pointer transition-all ${
            currentStep === 2
              ? 'bg-emerald-950/80 border-emerald-500 text-emerald-300 ring-2 ring-emerald-500/30'
              : 'bg-slate-950 border-slate-800 text-slate-500'
          }`}
        >
          STEP 2: CORE CONCEPT
        </div>
        <div
          onClick={() => setCurrentStep(3)}
          className={`p-3 rounded-lg border cursor-pointer transition-all ${
            currentStep === 3
              ? 'bg-emerald-950/80 border-emerald-500 text-emerald-300 ring-2 ring-emerald-500/30'
              : 'bg-slate-950 border-slate-800 text-slate-500'
          }`}
        >
          STEP 3: FORMAL SYMBOLS
        </div>
      </div>

      {/* Main Step Canvas */}
      <div className="bg-slate-950 border border-slate-800 rounded-xl p-6 space-y-5">
        {currentStep === 1 && (
          <div className="space-y-4 animate-fadeIn">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Physical Intuition & Real Representation</span>
              <span className="text-xs text-slate-500 font-mono">No formulas allowed yet</span>
            </div>

            <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wide flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                Physical Mechanism Description
              </span>
              <p className="text-sm text-slate-200 font-sans leading-relaxed">
                {concept.physicalModel}
              </p>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-300 block">
                Describe what you mentally visualize in this physical scenario (e.g. particle trajectories, flux lines, cell membrane forces):
              </label>
              <textarea
                value={userMentalModel}
                onChange={(e) => setUserMentalModel(e.target.value)}
                placeholder="Write your non-symbolic mental image here..."
                rows={4}
                className="w-full bg-slate-900 border border-slate-800 rounded-xl p-3 text-sm text-slate-200 placeholder-slate-600 focus:ring-2 focus:ring-emerald-500 focus:outline-none font-sans"
              />
            </div>

            <button
              onClick={() => setCurrentStep(2)}
              className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-emerald-950/40 flex items-center justify-center gap-2"
            >
              <span>Advance to Core Concept</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {currentStep === 2 && (
          <div className="space-y-4 animate-fadeIn">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Core Scientific Concept</span>
            </div>

            <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-2">
              <h3 className="text-xl font-bold text-white">{concept.title}</h3>
              <p className="text-sm text-slate-300 leading-relaxed">{concept.summary}</p>
            </div>

            <div className="p-4 bg-slate-900/60 border border-slate-800 rounded-xl space-y-1 text-xs text-slate-400">
              <span className="font-bold text-emerald-400 uppercase tracking-wider block">Your Mental Model Input:</span>
              <p className="italic text-slate-300">"{userMentalModel || 'No mental model typed.'}"</p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setCurrentStep(1)}
                className="flex-1 py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs uppercase tracking-wider rounded-xl"
              >
                Back to Visual Model
              </button>
              <button
                onClick={() => setCurrentStep(3)}
                className="flex-1 py-3 bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-emerald-950/40 flex items-center justify-center gap-2"
              >
                <span>Unlock Formal Symbols</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="space-y-4 animate-fadeIn">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Formal Mathematical / Symbolic Representation</span>
            </div>

            <div className="p-5 bg-slate-900 border border-emerald-500/30 rounded-xl space-y-3">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">Formal Equations</span>
              <div className="space-y-2">
                {concept.formalEquations.map((eq, i) => (
                  <div key={i} className="p-3 bg-slate-950 border border-slate-800 rounded-lg text-emerald-300 font-mono text-base font-bold text-center">
                    {eq}
                  </div>
                ))}
              </div>
            </div>

            <p className="text-xs text-slate-400 text-center italic">
              Notice how equations are merely convenient shorthand representations of the underlying physical reality you visualized in Step 1.
            </p>

            <button
              onClick={() => {
                setCurrentStep(1);
                setUserMentalModel('');
              }}
              className="w-full py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs uppercase tracking-wider rounded-xl"
            >
              Restart Visualisation Flow
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
