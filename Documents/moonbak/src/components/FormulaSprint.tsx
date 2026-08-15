import React, { useState, useEffect } from 'react';
import { useOS } from '../context/OSContext';
import { Zap, Clock, CheckCircle2, AlertTriangle } from 'lucide-react';

export const FormulaSprint: React.FC = () => {
  const { concepts } = useOS();
  const [mode, setMode] = useState<'memory' | 'attack'>('memory');
  const [timeLeft, setTimeLeft] = useState<number>(600); // 10 minutes = 600s
  const [timerRunning, setTimerRunning] = useState<boolean>(false);
  const [selectedConceptIndex, setSelectedConceptIndex] = useState<number>(0);
  const [userInputFormula, setUserInputFormula] = useState<string>('');
  const [attackAnswer, setAttackAnswer] = useState<string>('');
  const [unappliedFormulas, setUnappliedFormulas] = useState<string[]>([]);
  const [checkedResult, setCheckedResult] = useState<boolean | null>(null);

  const concept = concepts[selectedConceptIndex] || concepts[0];

  useEffect(() => {
    let timer: ReturnType<typeof setInterval>;
    if (timerRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timerRunning && timeLeft === 0) {
      setTimerRunning(false);
      if (mode === 'memory') {
        // Auto transition from Memory -> Attack mode after 10 min
        setMode('attack');
        setTimeLeft(600);
      }
    }
    return () => clearInterval(timer);
  }, [timerRunning, timeLeft, mode]);

  const handleStartTimer = () => {
    setTimerRunning(true);
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const handleCheckMemory = () => {
    const isMatched = concept.formalEquations.some(eq =>
      eq.toLowerCase().replace(/\s+/g, '') === userInputFormula.toLowerCase().replace(/\s+/g, '')
    );
    setCheckedResult(isMatched);
  };

  const handleFlagUnapplied = () => {
    setUnappliedFormulas(prev => [...prev, `${concept.title}: ${concept.formalEquations[0]}`]);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-slate-100 shadow-xl space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-semibold rounded-full uppercase tracking-wider mb-2">
            <Zap className="w-3.5 h-3.5" />
            11. FORMULA SPRINT — TWO DIFFERENT SKILLS
          </div>
          <h2 className="text-2xl font-bold text-white">10-Min Memory Sprint + 10-Min Attack Sprint</h2>
          <p className="text-sm text-slate-400 mt-1">
            Separate formula recall from rapid application recognition. Track formulas you know but cannot apply.
          </p>
        </div>

        {/* Mode Selector Pills */}
        <div className="flex items-center gap-2 bg-slate-950 p-1.5 rounded-xl border border-slate-800">
          <button
            onClick={() => {
              setMode('memory');
              setTimeLeft(600);
              setTimerRunning(false);
            }}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
              mode === 'memory'
                ? 'bg-rose-600 text-white shadow-lg shadow-rose-950/40'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            1. FORMULA MEMORY (10M)
          </button>
          <button
            onClick={() => {
              setMode('attack');
              setTimeLeft(600);
              setTimerRunning(false);
            }}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
              mode === 'attack'
                ? 'bg-amber-600 text-slate-950 shadow-lg shadow-amber-950/40'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            2. FORMULA ATTACK (10M)
          </button>
        </div>
      </div>

      {/* Timer Bar */}
      <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-slate-900 border border-slate-800 text-rose-400 font-mono text-2xl font-bold rounded-xl flex items-center gap-2">
            <Clock className="w-5 h-5 text-rose-500 animate-pulse" />
            <span>{formatTime(timeLeft)}</span>
          </div>
          <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
            Active Mode: {mode === 'memory' ? 'Formula Reproduction Recall' : 'Rapid Application Attack'}
          </span>
        </div>

        {!timerRunning && (
          <button
            onClick={handleStartTimer}
            className="px-5 py-2.5 bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs uppercase rounded-lg shadow-lg shadow-rose-950/40"
          >
            Start 10-Min Timer
          </button>
        )}
      </div>

      {/* Mode Specific Container */}
      {mode === 'memory' ? (
        /* Memory Reproduction Sprint */
        <div className="bg-slate-950 border border-slate-800 rounded-xl p-6 space-y-5">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div>
              <span className="text-xs text-rose-400 font-mono uppercase">FORMULA REPRODUCTION SPRINT</span>
              <h3 className="text-xl font-bold text-white">{concept.title} ({concept.subject})</h3>
            </div>
            <button
              onClick={() => setSelectedConceptIndex((prev) => (prev + 1) % concepts.length)}
              className="text-xs text-cyan-400 hover:underline font-semibold"
            >
              Next Concept →
            </button>
          </div>

          <p className="text-sm text-slate-300">
            Formulas are hidden. Reproduce the exact mathematical formula for <strong className="text-white">{concept.title}</strong> from memory:
          </p>

          <input
            type="text"
            value={userInputFormula}
            onChange={(e) => setUserInputFormula(e.target.value)}
            placeholder="e.g. dTb = Kb * m * i"
            className="w-full bg-slate-900 border border-slate-800 rounded-xl p-4 text-base font-mono text-cyan-300 placeholder-slate-600 focus:ring-2 focus:ring-rose-500 focus:outline-none"
          />

          <div className="flex items-center justify-between pt-2">
            <button
              onClick={handleCheckMemory}
              className="px-6 py-2.5 bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs uppercase rounded-lg shadow-lg"
            >
              Check Formula Accuracy
            </button>

            {checkedResult !== null && (
              <div className="text-xs font-semibold">
                {checkedResult ? (
                  <span className="text-emerald-400 flex items-center gap-1"><CheckCircle2 className="w-4 h-4" /> Perfect Match!</span>
                ) : (
                  <span className="text-rose-400 flex items-center gap-1"><AlertTriangle className="w-4 h-4" /> Mismatch. Target: {concept.formalEquations[0]}</span>
                )}
              </div>
            )}
          </div>
        </div>
      ) : (
        /* Attack Sprint */
        <div className="bg-slate-950 border border-slate-800 rounded-xl p-6 space-y-5">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div>
              <span className="text-xs text-amber-400 font-mono uppercase">RAPID APPLICATION ATTACK SPRINT</span>
              <h3 className="text-xl font-bold text-white">{concept.title}</h3>
            </div>
            <button
              onClick={() => setSelectedConceptIndex((prev) => (prev + 1) % concepts.length)}
              className="text-xs text-cyan-400 hover:underline font-semibold"
            >
              Next Application Probe →
            </button>
          </div>

          <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-2">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">Application Trigger Probe</span>
            <p className="text-sm text-slate-200">
              {concept.whyPrompts[0]?.question || "Under what physical conditions is this formula applicable?"}
            </p>
          </div>

          <textarea
            value={attackAnswer}
            onChange={(e) => setAttackAnswer(e.target.value)}
            placeholder="Type when & how to apply this formula rapidly..."
            rows={3}
            className="w-full bg-slate-900 border border-slate-800 rounded-xl p-3 text-sm text-slate-200 placeholder-slate-600 focus:ring-2 focus:ring-amber-500 focus:outline-none"
          />

          <div className="flex items-center justify-between pt-2">
            <button
              onClick={handleFlagUnapplied}
              className="px-4 py-2 bg-rose-950/80 border border-rose-600/50 hover:bg-rose-900/60 text-rose-300 font-bold text-xs uppercase rounded-lg"
            >
              Flag: I Know Formula But Cannot Apply
            </button>

            <button
              onClick={() => setSelectedConceptIndex((prev) => (prev + 1) % concepts.length)}
              className="px-6 py-2.5 bg-amber-600 hover:bg-amber-500 text-slate-950 font-bold text-xs uppercase rounded-lg shadow-lg"
            >
              Next Application
            </button>
          </div>

          {unappliedFormulas.length > 0 && (
            <div className="p-4 bg-slate-900 border border-rose-500/30 rounded-xl space-y-2">
              <span className="text-xs font-bold text-rose-400 uppercase tracking-wider block">
                Tracked "Known But Cannot Apply" Formulas ({unappliedFormulas.length})
              </span>
              <ul className="text-xs font-mono text-rose-300 space-y-1">
                {unappliedFormulas.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
