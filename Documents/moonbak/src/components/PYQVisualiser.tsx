import React, { useState, useEffect } from 'react';
import { useOS } from '../context/OSContext';
import { FAILURE_LAYER_DESCRIPTIONS } from '../types/neetOS';
import type { FailureLayer } from '../types/neetOS';
import { Timer, CheckCircle2, Brain } from 'lucide-react';

export const PYQVisualiser: React.FC = () => {
  const { pyqs, addMistakeLog } = useOS();
  const [selectedPyqId, setSelectedPyqId] = useState<string>(pyqs[0]?.id || 'pyq_sol_1');
  const [timeLeft, setTimeLeft] = useState<number>(180); // 3 minutes = 180s
  const [timerRunning, setTimerRunning] = useState<boolean>(false);
  const [showSolution, setShowSolution] = useState<boolean>(false);
  const [userApproach, setUserApproach] = useState({
    visualisation: '',
    principle: '',
    formula: '',
    plan: ''
  });
  const [failureLayer, setFailureLayer] = useState<FailureLayer | null>(null);

  const pyq = pyqs.find(p => p.id === selectedPyqId) || pyqs[0];

  useEffect(() => {
    let timer: ReturnType<typeof setInterval>;
    if (timerRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timerRunning && timeLeft === 0) {
      setTimerRunning(false);
      setShowSolution(true);
    }
    return () => clearInterval(timer);
  }, [timerRunning, timeLeft]);

  const handleStartTimer = () => {
    setTimerRunning(true);
    setTimeLeft(180);
    setShowSolution(false);
    setUserApproach({ visualisation: '', principle: '', formula: '', plan: '' });
    setFailureLayer(null);
  };

  const handleRevealSolution = () => {
    setTimerRunning(false);
    setShowSolution(true);
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const handleSaveLayerDiagnostic = (layer: FailureLayer) => {
    setFailureLayer(layer);
    addMistakeLog({
      questionId: pyq.id,
      questionTitle: pyq.title,
      subject: pyq.subject,
      conceptId: pyq.keyConceptId,
      failedLayer: layer,
      userNotes: userApproach.visualisation || '3-Minute PYQ Visualiser Analysis'
    });
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-slate-100 shadow-xl space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold rounded-full uppercase tracking-wider mb-2">
            <Timer className="w-3.5 h-3.5" />
            10. 3-MINUTE PYQ VISUALISATION
          </div>
          <h2 className="text-2xl font-bold text-white">First 3 Minutes Thinking Mandate</h2>
          <p className="text-sm text-slate-400 mt-1">
            First 3 minutes: NO solution. VISUALISE → IDENTIFY → CHOOSE PRINCIPLE → CHOOSE FORMULA → PLAN.
          </p>
        </div>

        {/* PYQ Selector */}
        <select
          value={selectedPyqId}
          onChange={(e) => {
            setSelectedPyqId(e.target.value);
            setTimerRunning(false);
            setTimeLeft(180);
            setShowSolution(false);
            setFailureLayer(null);
          }}
          className="bg-slate-800 border border-slate-700 text-amber-300 text-sm rounded-lg px-3 py-2 focus:ring-2 focus:ring-amber-500 focus:outline-none"
        >
          {pyqs.map(p => (
            <option key={p.id} value={p.id}>
              [{p.subject}] {p.title}
            </option>
          ))}
        </select>
      </div>

      {/* Timer Bar & Controls */}
      <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-amber-950/80 border border-amber-500/40 text-amber-300 rounded-xl font-mono text-2xl font-bold flex items-center gap-2">
            <Timer className="w-6 h-6 text-amber-400 animate-pulse" />
            <span>{formatTime(timeLeft)}</span>
          </div>
          <span className="text-xs text-slate-400">
            {timerRunning ? 'Timer active. Plan your approach!' : '3-Minute Visualisation Window'}
          </span>
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto">
          {!timerRunning ? (
            <button
              onClick={handleStartTimer}
              className="flex-1 md:flex-none px-6 py-2.5 bg-amber-600 hover:bg-amber-500 text-slate-950 font-bold text-xs uppercase rounded-lg shadow-lg shadow-amber-950/40"
            >
              Start 3-Min Timer
            </button>
          ) : (
            <button
              onClick={handleRevealSolution}
              className="flex-1 md:flex-none px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs uppercase rounded-lg border border-slate-700"
            >
              Reveal Expert Solution Early
            </button>
          )}
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-4">
        <div className="text-xs font-mono text-amber-400 font-bold">{pyq.title} ({pyq.year || 'NEET PYQ'})</div>
        <p className="text-base text-white leading-relaxed font-sans">{pyq.questionText}</p>

        {/* 4-Step Mandatory Visual Approach Input */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
          <div>
            <label className="text-xs font-semibold text-slate-400 block mb-1">Visualise Physical Setup:</label>
            <input
              type="text"
              value={userApproach.visualisation}
              onChange={(e) => setUserApproach({ ...userApproach, visualisation: e.target.value })}
              placeholder="e.g. Sweep of area in magnetic field..."
              className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2.5 text-xs text-slate-200 placeholder-slate-600"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-400 block mb-1">Choose Core Principle:</label>
            <input
              type="text"
              value={userApproach.principle}
              onChange={(e) => setUserApproach({ ...userApproach, principle: e.target.value })}
              placeholder="e.g. Faradays Law of Induction..."
              className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2.5 text-xs text-slate-200 placeholder-slate-600"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-400 block mb-1">Choose Formula:</label>
            <input
              type="text"
              value={userApproach.formula}
              onChange={(e) => setUserApproach({ ...userApproach, formula: e.target.value })}
              placeholder="e.g. EMF = 1/2 B w L^2..."
              className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2.5 text-xs text-slate-200 placeholder-slate-600"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-400 block mb-1">Execution Plan:</label>
            <input
              type="text"
              value={userApproach.plan}
              onChange={(e) => setUserApproach({ ...userApproach, plan: e.target.value })}
              placeholder="e.g. Substitute parameters and verify units..."
              className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2.5 text-xs text-slate-200 placeholder-slate-600"
            />
          </div>
        </div>
      </div>

      {/* Solution Comparison Section */}
      {showSolution && (
        <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-5 animate-fadeIn">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" /> Compare Your Approach vs Expert Approach
            </span>
            <span className="text-xs font-mono text-emerald-300 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30">
              Solution Unlocked
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* User Approach */}
            <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Your Planned Approach</span>
              <ul className="text-xs text-slate-300 space-y-1">
                <li>• <strong>Visualisation:</strong> {userApproach.visualisation || 'N/A'}</li>
                <li>• <strong>Principle:</strong> {userApproach.principle || 'N/A'}</li>
                <li>• <strong>Formula:</strong> {userApproach.formula || 'N/A'}</li>
                <li>• <strong>Plan:</strong> {userApproach.plan || 'N/A'}</li>
              </ul>
            </div>

            {/* Expert Approach */}
            <div className="p-4 bg-slate-900 border border-emerald-500/30 rounded-xl space-y-2">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">Expert Approach</span>
              <p className="text-xs text-slate-200 font-sans leading-relaxed">{pyq.expertApproach}</p>
              <div className="pt-2 font-mono text-xs text-emerald-300 font-bold">
                Formula: {pyq.requiredFormula}
              </div>
            </div>
          </div>

          {/* Layer Failure Diagnostic */}
          <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-3">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block flex items-center gap-1.5">
              <Brain className="w-4 h-4" /> Identify Problem Failure Layer (1 - 6)
            </span>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {(Object.keys(FAILURE_LAYER_DESCRIPTIONS) as unknown as FailureLayer[]).map(layer => (
                <button
                  key={layer}
                  onClick={() => handleSaveLayerDiagnostic(layer)}
                  className={`p-2.5 rounded-lg text-left border text-xs font-semibold transition-all ${
                    failureLayer === layer
                      ? 'bg-rose-950/80 border-rose-500 text-rose-200 ring-2 ring-rose-500/30'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <div className="text-white">Layer {layer}</div>
                  <div className="text-[10px] text-slate-500 truncate">{FAILURE_LAYER_DESCRIPTIONS[layer].name}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
