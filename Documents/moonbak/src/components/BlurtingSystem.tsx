import React, { useState, useEffect } from 'react';
import { useOS } from '../context/OSContext';
import { Clock, EyeOff, Brain, RotateCcw, AlertTriangle, CheckCircle2 } from 'lucide-react';

export const BlurtingSystem: React.FC<{ onNavigateBackwards?: (conceptId: string) => void }> = ({ onNavigateBackwards }) => {
  const { concepts, saveBlurtingSession } = useOS();
  const [selectedConceptId, setSelectedConceptId] = useState<string>(concepts[0]?.id || 'colligative_properties');
  const [isActive, setIsActive] = useState<boolean>(false);
  const [timeLeft, setTimeLeft] = useState<number>(120); // 2 minutes
  const [userInput, setUserInput] = useState<string>('');
  const [evaluation, setEvaluation] = useState<{
    remembered: string[];
    missing: string[];
    score: number;
  } | null>(null);

  const concept = concepts.find(c => c.id === selectedConceptId) || concepts[0];

  useEffect(() => {
    let timer: ReturnType<typeof setInterval>;
    if (isActive && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (isActive && timeLeft === 0) {
      handleCompleteBlurting();
    }
    return () => clearInterval(timer);
  }, [isActive, timeLeft]);

  const handleStart = () => {
    setIsActive(true);
    setTimeLeft(120);
    setUserInput('');
    setEvaluation(null);
  };

  const handleCompleteBlurting = () => {
    setIsActive(false);
    
    // Perform automated structural comparison against concept keyKeywords
    const textLower = userInput.toLowerCase();
    const keywords = concept.keyKeywords || [];
    const remembered: string[] = [];
    const missing: string[] = [];

    keywords.forEach(kw => {
      if (textLower.includes(kw.toLowerCase())) {
        remembered.push(kw);
      } else {
        missing.push(kw);
      }
    });

    const score = keywords.length > 0 ? Math.round((remembered.length / keywords.length) * 100) : 100;
    
    const evalResult = { remembered, missing, score };
    setEvaluation(evalResult);

    saveBlurtingSession({
      id: 'blurt_' + Date.now(),
      conceptId: concept.id,
      conceptTitle: concept.title,
      timestamp: new Date().toISOString(),
      userInput,
      remembered,
      partial: [],
      missing,
      score
    });
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-slate-100 shadow-xl space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-semibold rounded-full uppercase tracking-wider mb-2">
            <EyeOff className="w-3.5 h-3.5" />
            6. BLURTING SYSTEM (BLANK SCREEN RETRIEVAL)
          </div>
          <h2 className="text-2xl font-bold text-white">Timed Active Retrieval Engine</h2>
          <p className="text-sm text-slate-400 mt-1">
            No notes, no hints, no options. Complete screen black-out. Write everything you know in 2 minutes.
          </p>
        </div>

        {/* Concept Picker */}
        <select
          value={selectedConceptId}
          disabled={isActive}
          onChange={(e) => {
            setSelectedConceptId(e.target.value);
            setEvaluation(null);
          }}
          className="bg-slate-800 border border-slate-700 text-purple-300 text-sm rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:outline-none"
        >
          {concepts.map(c => (
            <option key={c.id} value={c.id}>
              [{c.subject}] {c.title}
            </option>
          ))}
        </select>
      </div>

      {/* Screen Overlay Active State */}
      {isActive ? (
        <div className="fixed inset-0 bg-slate-950 z-50 p-6 flex flex-col justify-between animate-fadeIn">
          {/* Top Bar */}
          <div className="flex items-center justify-between border-b border-slate-800 pb-4 max-w-4xl mx-auto w-full">
            <div className="flex items-center gap-3">
              <EyeOff className="w-6 h-6 text-purple-400 animate-pulse" />
              <div>
                <span className="text-xs text-purple-400 font-mono uppercase">BLANK SCREEN BLURTING MODE</span>
                <h3 className="text-lg font-bold text-white">{concept.title}</h3>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-purple-950/80 border border-purple-500/40 text-purple-200 rounded-xl font-mono text-xl font-bold">
                <Clock className="w-5 h-5 text-purple-400" />
                <span>{formatTime(timeLeft)}</span>
              </div>

              <button
                onClick={handleCompleteBlurting}
                className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase rounded-lg transition-colors"
              >
                Submit Blurting
              </button>
            </div>
          </div>

          {/* Active Canvas / Textarea */}
          <div className="max-w-4xl mx-auto w-full flex-1 my-6 flex flex-col">
            <textarea
              autoFocus
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="WRITE EVERYTHING YOU UNDERSTAND. Formulas, mechanisms, definitions, conditions, edge cases, diagrams in words..."
              className="w-full flex-1 bg-slate-900/90 border border-slate-800 rounded-xl p-6 text-base text-slate-100 placeholder-slate-700 focus:outline-none font-mono leading-relaxed resize-none"
            />
          </div>

          <div className="text-center text-xs text-slate-500 max-w-4xl mx-auto w-full">
            No reference materials visible. This forces deep active retrieval from neural storage.
          </div>
        </div>
      ) : (
        /* Idle / Results Screen */
        <div className="space-y-6">
          {!evaluation ? (
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-8 text-center space-y-4">
              <Brain className="w-12 h-12 text-purple-400 mx-auto" />
              <div>
                <h3 className="text-xl font-bold text-white">Ready for 2-Minute Blurting?</h3>
                <p className="text-sm text-slate-400 mt-1 max-w-md mx-auto">
                  When you click start, all references will be hidden. You will have 120 seconds to dump all knowledge regarding <strong className="text-purple-300">{concept.title}</strong>.
                </p>
              </div>

              <button
                onClick={handleStart}
                className="px-8 py-3.5 bg-purple-600 hover:bg-purple-500 text-white font-bold text-sm uppercase tracking-wider rounded-xl transition-all shadow-xl shadow-purple-950/50"
              >
                Start Blank Screen Blurting
              </button>
            </div>
          ) : (
            /* Results & Diagnostic Mapping */
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-6 space-y-6 animate-fadeIn">
              <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-slate-800 pb-4 gap-4">
                <div>
                  <span className="text-xs text-purple-400 font-semibold uppercase">Blurting Retrieval Diagnostic</span>
                  <h3 className="text-2xl font-bold text-white">{concept.title}</h3>
                </div>

                <div className="flex items-center gap-3">
                  <div className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-center">
                    <span className="text-2xl font-bold text-purple-400">{evaluation.score}%</span>
                    <span className="text-[10px] text-slate-500 block">Retrieval Match</span>
                  </div>
                  <button
                    onClick={handleStart}
                    className="p-3 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl transition-colors"
                    title="Retry Blurting"
                  >
                    <RotateCcw className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Structural Concept Comparison */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Remembered */}
                <div className="bg-slate-900/80 border border-emerald-500/30 p-4 rounded-xl space-y-2">
                  <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    Remembered Core Structural Concepts ({evaluation.remembered.length})
                  </h4>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {evaluation.remembered.map((kw, i) => (
                      <span key={i} className="px-2.5 py-1 bg-emerald-950/60 border border-emerald-600/40 text-emerald-300 text-xs font-mono rounded-md">
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Missing */}
                <div className="bg-slate-900/80 border border-rose-500/30 p-4 rounded-xl space-y-2">
                  <h4 className="text-xs font-bold text-rose-400 uppercase tracking-wider flex items-center gap-1.5">
                    <AlertTriangle className="w-4 h-4" />
                    Missing Structural Concepts ({evaluation.missing.length})
                  </h4>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {evaluation.missing.map((kw, i) => (
                      <span key={i} className="px-2.5 py-1 bg-rose-950/60 border border-rose-600/40 text-rose-300 text-xs font-mono rounded-md">
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Banner to send missing back into Learn Backwards */}
              {evaluation.missing.length > 0 && onNavigateBackwards && (
                <div className="p-4 bg-amber-950/30 border border-amber-500/30 rounded-xl flex items-center justify-between gap-4">
                  <div className="text-xs text-amber-200">
                    <strong>System Routing:</strong> Missing {evaluation.missing.length} core concepts. Route this concept into <strong>Learn Backwards</strong> to rebuild missing prerequisites?
                  </div>
                  <button
                    onClick={() => onNavigateBackwards(concept.id)}
                    className="px-4 py-2 bg-amber-600 hover:bg-amber-500 text-slate-950 text-xs font-bold uppercase rounded-lg shrink-0 transition-colors"
                  >
                    Send to Learn Backwards →
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
