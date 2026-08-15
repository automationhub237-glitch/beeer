import React, { useState } from 'react';
import { useOS } from '../context/OSContext';
import { TestTube, ExternalLink, ArrowRight, CheckCircle2 } from 'lucide-react';

export const ScienceSimulationLab: React.FC = () => {
  const { simulations } = useOS();
  const [selectedSimId, setSelectedSimId] = useState<string>(simulations[0]?.id || 'sim_phet_osmosis');
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [responses, setResponses] = useState({
    predict: '',
    observe: '',
    explain: '',
    changeVariable: ''
  });

  const activeSim = simulations.find(s => s.id === selectedSimId) || simulations[0];

  const handleNext = () => {
    if (step < 4) setStep(prev => (prev + 1) as any);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-slate-100 shadow-xl space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold rounded-full uppercase tracking-wider mb-2">
            <TestTube className="w-3.5 h-3.5" />
            18. SCIENCE SIMULATION LAB (ACTIVE EXPERIMENT WORKFLOW)
          </div>
          <h2 className="text-2xl font-bold text-white">Interactive Science Simulation Lab</h2>
          <p className="text-sm text-slate-400 mt-1">
            PREDICT → SIMULATE → OBSERVE → EXPLAIN → CHANGE A VARIABLE. Simulations are experiments, not toys.
          </p>
        </div>

        {/* Simulation Selector */}
        <select
          value={selectedSimId}
          onChange={(e) => {
            setSelectedSimId(e.target.value);
            setStep(1);
            setResponses({ predict: '', observe: '', explain: '', changeVariable: '' });
          }}
          className="bg-slate-800 border border-slate-700 text-cyan-300 text-sm rounded-lg px-3 py-2 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
        >
          {simulations.map(s => (
            <option key={s.id} value={s.id}>
              [{s.subject}] {s.title}
            </option>
          ))}
        </select>
      </div>

      {/* Main Simulation Container */}
      <div className="bg-slate-950 border border-slate-800 rounded-xl p-6 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-3">
          <div>
            <span className="text-xs text-cyan-400 font-mono uppercase">{activeSim.subject} SIMULATION</span>
            <h3 className="text-xl font-bold text-white">{activeSim.title}</h3>
            <p className="text-xs text-slate-400 mt-1">{activeSim.description}</p>
          </div>

          <a
            href={activeSim.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-bold text-xs uppercase rounded-lg transition-colors shrink-0 shadow-lg shadow-cyan-950/40"
          >
            <span>Launch Simulation Lab</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* 4-Step Stepper */}
        <div className="grid grid-cols-4 gap-2 text-center text-[11px] font-bold uppercase tracking-wider">
          <div className={`p-2.5 rounded-lg border ${step === 1 ? 'bg-cyan-950 border-cyan-500 text-cyan-300' : 'bg-slate-900 border-slate-800 text-slate-500'}`}>
            1. PREDICT
          </div>
          <div className={`p-2.5 rounded-lg border ${step === 2 ? 'bg-cyan-950 border-cyan-500 text-cyan-300' : 'bg-slate-900 border-slate-800 text-slate-500'}`}>
            2. OBSERVE
          </div>
          <div className={`p-2.5 rounded-lg border ${step === 3 ? 'bg-cyan-950 border-cyan-500 text-cyan-300' : 'bg-slate-900 border-slate-800 text-slate-500'}`}>
            3. EXPLAIN
          </div>
          <div className={`p-2.5 rounded-lg border ${step === 4 ? 'bg-cyan-950 border-cyan-500 text-cyan-300' : 'bg-slate-900 border-slate-800 text-slate-500'}`}>
            4. CHANGE VARIABLE
          </div>
        </div>

        {/* Step Workflow Canvas */}
        <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 space-y-4">
          {step === 1 && (
            <div className="space-y-3 animate-fadeIn">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block">
                PRE-SIMULATION HYPOTHESIS:
              </span>
              <p className="text-sm text-white font-medium">{activeSim.guidingQuestions.predict}</p>
              <textarea
                value={responses.predict}
                onChange={(e) => setResponses({ ...responses, predict: e.target.value })}
                placeholder="State your clear physical or biological prediction before launching the lab..."
                rows={3}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-sm text-slate-200"
              />
              <button
                onClick={handleNext}
                className="w-full py-2.5 bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-bold text-xs uppercase rounded-lg shadow-lg flex items-center justify-center gap-2"
              >
                <span>Save Prediction & Launch Lab</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-3 animate-fadeIn">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block">
                LAB OBSERVATION & MEASUREMENT:
              </span>
              <p className="text-sm text-white font-medium">{activeSim.guidingQuestions.observe}</p>
              <textarea
                value={responses.observe}
                onChange={(e) => setResponses({ ...responses, observe: e.target.value })}
                placeholder="Write exactly what physically happened in the simulation..."
                rows={3}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-sm text-slate-200"
              />
              <button
                onClick={handleNext}
                className="w-full py-2.5 bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-bold text-xs uppercase rounded-lg shadow-lg flex items-center justify-center gap-2"
              >
                <span>Advance to Cause Explanation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-3 animate-fadeIn">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block">
                CAUSAL MECHANISM EXPLANATION:
              </span>
              <p className="text-sm text-white font-medium">{activeSim.guidingQuestions.explain}</p>
              <textarea
                value={responses.explain}
                onChange={(e) => setResponses({ ...responses, explain: e.target.value })}
                placeholder="Explain WHY the simulation behaved the way it did based on underlying principles..."
                rows={3}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-sm text-slate-200"
              />
              <button
                onClick={handleNext}
                className="w-full py-2.5 bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-bold text-xs uppercase rounded-lg shadow-lg flex items-center justify-center gap-2"
              >
                <span>Advance to Variable Experiment</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-3 animate-fadeIn">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block">
                VARIABLE PERTURBATION EXPERIMENT:
              </span>
              <p className="text-sm text-white font-medium">{activeSim.guidingQuestions.changeVariable}</p>
              <textarea
                value={responses.changeVariable}
                onChange={(e) => setResponses({ ...responses, changeVariable: e.target.value })}
                placeholder="Observe and explain the new dynamic when this parameter is modified..."
                rows={3}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-sm text-slate-200"
              />
              <div className="p-3 bg-emerald-950/80 border border-emerald-500/40 rounded-lg text-xs text-emerald-300 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Simulation Experiment Complete! Your active reasoning model has been saved.</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
