import React, { useState } from 'react';
import { useOS } from '../context/OSContext';
import { Globe, ExternalLink, Play, Lock, HelpCircle, ShieldAlert, CheckCircle2 } from 'lucide-react';

export const GlobalTeacherResource: React.FC = () => {
  const { externalResources, concepts } = useOS();
  const [selectedResourceId, setSelectedResourceId] = useState<string>(externalResources[0]?.id || 'res_3b1b_calculus');
  const [activeWorkflowStep, setActiveWorkflowStep] = useState<'watch' | 'close' | 'recall' | 'why' | 'apply' | 'defend'>('watch');
  const [userInput, setUserInput] = useState<string>('');

  const activeRes = externalResources.find(r => r.id === selectedResourceId) || externalResources[0];
  const linkedConcept = concepts.find(c => c.id === activeRes.conceptId) || concepts[0];

  const workflowSteps = ['watch', 'close', 'recall', 'why', 'apply', 'defend'] as const;

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-slate-100 shadow-xl space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold rounded-full uppercase tracking-wider mb-2">
            <Globe className="w-3.5 h-3.5" />
            19 & 20. LEARN FROM TEACHERS ANYWHERE (RESOURCE DISCOVERY LAB)
          </div>
          <h2 className="text-2xl font-bold text-white">Universal Science Explanations Engine</h2>
          <p className="text-sm text-slate-400 mt-1">
            Science principles are universal. Attach explanations from 3Blue1Brown, Khan Academy, or global researchers, then run the active NEET OS workflow around them.
          </p>
        </div>
      </div>

      {/* External Resource Selector Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {externalResources.map(res => {
          const isSelected = res.id === activeRes.id;
          return (
            <div
              key={res.id}
              onClick={() => {
                setSelectedResourceId(res.id);
                setActiveWorkflowStep('watch');
                setUserInput('');
              }}
              className={`p-4 rounded-xl border cursor-pointer transition-all ${
                isSelected
                  ? 'bg-cyan-950/60 border-cyan-500 text-white ring-2 ring-cyan-500/30'
                  : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between text-xs font-mono mb-1">
                <span className="text-cyan-400 font-bold">{res.teacherOrPlatform}</span>
                <span className="bg-slate-900 px-2 py-0.5 rounded border border-slate-800 text-[10px]">{res.integrityLabel}</span>
              </div>
              <div className="font-semibold text-sm text-white mt-1">{res.title}</div>
              <div className="text-xs text-slate-400 mt-2 flex items-center justify-between">
                <span>Concept: {linkedConcept.title}</span>
                <span className="text-[10px] px-1.5 py-0.5 bg-slate-900 rounded border border-slate-800">{res.difficulty}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Active NEET OS Active Workflow Wrapper around Resource */}
      <div className="bg-slate-950 border border-slate-800 rounded-xl p-6 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
          <div>
            <span className="text-xs text-cyan-400 font-mono uppercase">NEET OS Active Workflow Wrapper</span>
            <h3 className="text-xl font-bold text-white">{activeRes.title}</h3>
          </div>

          <a
            href={activeRes.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-bold text-xs uppercase rounded-lg shrink-0 shadow-lg"
          >
            <span>Open External Source</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Workflow Stepper Pills */}
        <div className="flex flex-wrap gap-2 text-xs font-bold uppercase tracking-wider">
          {workflowSteps.map((step, idx) => {
            const isActive = activeWorkflowStep === step;
            return (
              <button
                key={step}
                onClick={() => setActiveWorkflowStep(step)}
                className={`px-3 py-2 rounded-lg border transition-all ${
                  isActive
                    ? 'bg-cyan-600 text-slate-950 font-bold border-cyan-400 shadow-md'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                {idx + 1}. {step.toUpperCase()}
              </button>
            );
          })}
        </div>

        {/* Workflow Canvas */}
        <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 space-y-4">
          {activeWorkflowStep === 'watch' && (
            <div className="space-y-3">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block flex items-center gap-1.5">
                <Play className="w-4 h-4" /> STEP 1: WATCH / READ EXTERNAL INPUT
              </span>
              <p className="text-sm text-slate-200">
                Consume the explanation from <strong>{activeRes.teacherOrPlatform}</strong>. Focus on building non-symbolic mental images of particle/force mechanics.
              </p>
              <button
                onClick={() => setActiveWorkflowStep('close')}
                className="w-full py-2.5 bg-cyan-600 text-slate-950 font-bold text-xs uppercase rounded-lg"
              >
                Finished Watching? Proceed to Step 2: CLOSE MATERIAL →
              </button>
            </div>
          )}

          {activeWorkflowStep === 'close' && (
            <div className="space-y-3 text-center py-4">
              <Lock className="w-10 h-10 text-amber-400 mx-auto animate-bounce" />
              <h4 className="text-lg font-bold text-white">STEP 2: CLOSE EVERYTHING NOW!</h4>
              <p className="text-sm text-slate-400 max-w-md mx-auto">
                Do not leave the video or article open. Neural active retrieval cannot occur while looking at reference explanations.
              </p>
              <button
                onClick={() => setActiveWorkflowStep('recall')}
                className="px-6 py-2.5 bg-amber-600 text-slate-950 font-bold text-xs uppercase rounded-lg"
              >
                I Have Closed All Materials → Proceed to RECALL
              </button>
            </div>
          )}

          {activeWorkflowStep === 'recall' && (
            <div className="space-y-3">
              <span className="text-xs font-bold text-purple-400 uppercase tracking-wider block">
                STEP 3: ACTIVE RECALL (NO NOTES)
              </span>
              <textarea
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Write down the explanation in your own words right now..."
                rows={4}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-sm text-slate-200"
              />
              <button
                onClick={() => setActiveWorkflowStep('why')}
                className="w-full py-2.5 bg-purple-600 text-white font-bold text-xs uppercase rounded-lg"
              >
                Advance to Step 4: ASK WHY →
              </button>
            </div>
          )}

          {activeWorkflowStep === 'why' && (
            <div className="space-y-3">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block flex items-center gap-1.5">
                <HelpCircle className="w-4 h-4" /> STEP 4: CAUSAL PROBE
              </span>
              <p className="text-sm text-slate-200">
                Why is the explanation from {activeRes.teacherOrPlatform} scientifically true? What assumption does it rely on?
              </p>
              <button
                onClick={() => setActiveWorkflowStep('apply')}
                className="w-full py-2.5 bg-amber-600 text-slate-950 font-bold text-xs uppercase rounded-lg"
              >
                Advance to Step 5: APPLY TO NEET →
              </button>
            </div>
          )}

          {activeWorkflowStep === 'apply' && (
            <div className="space-y-3">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block">
                STEP 5: APPLY TO NEET PYQ / FORMULA
              </span>
              <p className="text-sm text-slate-200">
                How does this global explanation map to {linkedConcept.title} ({linkedConcept.formalEquations[0] || 'Formula'})?
              </p>
              <button
                onClick={() => setActiveWorkflowStep('defend')}
                className="w-full py-2.5 bg-cyan-600 text-slate-950 font-bold text-xs uppercase rounded-lg"
              >
                Advance to Step 6: DEFEND MODEL →
              </button>
            </div>
          )}

          {activeWorkflowStep === 'defend' && (
            <div className="space-y-3">
              <span className="text-xs font-bold text-rose-400 uppercase tracking-wider block flex items-center gap-1.5">
                <ShieldAlert className="w-4 h-4" /> STEP 6: CONCEPT DEFENCE
              </span>
              <p className="text-sm text-slate-200">
                Can you defend this external model under aggressive questioning? What breaks if temperature or field direction changes?
              </p>
              <div className="p-3 bg-emerald-950/80 border border-emerald-500/30 rounded-lg text-xs text-emerald-300 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>External Resource Active Learning Wrapper Complete!</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
