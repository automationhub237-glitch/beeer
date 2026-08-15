import React, { useState } from 'react';
import { useOS } from '../context/OSContext';
import { BookOpen, CheckCircle2, ArrowRight } from 'lucide-react';

export const SQ3RSystem: React.FC = () => {
  const { concepts, saveSQ3RSession } = useOS();
  const [selectedConceptId, setSelectedConceptId] = useState<string>(concepts[0]?.id || 'colligative_properties');
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [questions, setQuestions] = useState<string[]>(['']);
  const [reciteNotes, setReciteNotes] = useState<string>('');

  const concept = concepts.find(c => c.id === selectedConceptId) || concepts[0];

  const handleAddQuestion = () => {
    setQuestions(prev => [...prev, '']);
  };

  const handleQuestionChange = (index: number, val: string) => {
    const next = [...questions];
    next[index] = val;
    setQuestions(next);
  };

  const handleSaveSession = () => {
    saveSQ3RSession({
      id: 'sq3r_' + Date.now(),
      conceptId: concept.id,
      surveyQuestions: questions.filter(q => q.trim().length > 0),
      reciteNotes,
      connectedNodes: concept.connectedConceptIds || [],
      completedAt: new Date().toISOString()
    });
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-slate-100 shadow-xl space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold rounded-full uppercase tracking-wider mb-2">
            <BookOpen className="w-3.5 h-3.5" />
            22. SQ3R — INTERACTIVE ACTIVE READING SYSTEM
          </div>
          <h2 className="text-2xl font-bold text-white">SQ3R Active Reading Pipeline</h2>
          <p className="text-sm text-slate-400 mt-1">
            SURVEY → GENERATE QUESTIONS → LEARN → CLOSE MATERIAL → RECITE → CONNECT → REVIEW.
          </p>
        </div>

        {/* Concept Picker */}
        <select
          value={selectedConceptId}
          onChange={(e) => {
            setSelectedConceptId(e.target.value);
            setStep(1);
            setQuestions(['']);
            setReciteNotes('');
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

      {/* Stepper Pipeline */}
      <div className="grid grid-cols-4 gap-2 text-center text-[11px] font-bold uppercase tracking-wider">
        <div className={`p-2.5 rounded-lg border ${step === 1 ? 'bg-amber-950 border-amber-500 text-amber-300' : 'bg-slate-950 border-slate-800 text-slate-500'}`}>
          1. SURVEY & QUESTION
        </div>
        <div className={`p-2.5 rounded-lg border ${step === 2 ? 'bg-amber-950 border-amber-500 text-amber-300' : 'bg-slate-950 border-slate-800 text-slate-500'}`}>
          2. READ & LEARN
        </div>
        <div className={`p-2.5 rounded-lg border ${step === 3 ? 'bg-amber-950 border-amber-500 text-amber-300' : 'bg-slate-950 border-slate-800 text-slate-500'}`}>
          3. CLOSE & RECITE
        </div>
        <div className={`p-2.5 rounded-lg border ${step === 4 ? 'bg-amber-950 border-amber-500 text-amber-300' : 'bg-slate-950 border-slate-800 text-slate-500'}`}>
          4. CONNECT & REVIEW
        </div>
      </div>

      {/* Step Content */}
      <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-4">
        {step === 1 && (
          <div className="space-y-3 animate-fadeIn">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
              1. SURVEY TITLE & GENERATE QUESTIONS:
            </span>
            <h3 className="text-xl font-bold text-white">{concept.title} ({concept.chapter})</h3>
            <p className="text-xs text-slate-400">
              Before reading the text, write 2-3 questions you expect this concept to answer:
            </p>

            {questions.map((q, idx) => (
              <input
                key={idx}
                type="text"
                value={q}
                onChange={(e) => handleQuestionChange(idx, e.target.value)}
                placeholder={`Question ${idx + 1}: e.g. Why does this physical quantity increase with temperature?`}
                className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2.5 text-xs text-slate-200"
              />
            ))}

            <button
              onClick={handleAddQuestion}
              className="text-xs text-amber-400 hover:underline font-semibold block"
            >
              + Add Another Question
            </button>

            <button
              onClick={() => setStep(2)}
              className="w-full py-2.5 bg-amber-600 hover:bg-amber-500 text-slate-950 font-bold text-xs uppercase rounded-lg shadow-lg flex items-center justify-center gap-2"
            >
              <span>Advance to Active Reading</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-3 animate-fadeIn">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
              2. READ MATERIAL TO ANSWER YOUR QUESTIONS:
            </span>

            <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-2">
              <h4 className="text-base font-bold text-white">{concept.title}</h4>
              <p className="text-sm text-slate-200 leading-relaxed font-sans">{concept.summary}</p>
            </div>

            <button
              onClick={() => setStep(3)}
              className="w-full py-2.5 bg-amber-600 hover:bg-amber-500 text-slate-950 font-bold text-xs uppercase rounded-lg shadow-lg flex items-center justify-center gap-2"
            >
              <span>Close Material → Proceed to Recite</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-3 animate-fadeIn">
            <span className="text-xs font-bold text-purple-400 uppercase tracking-wider block">
              3. CLOSE MATERIAL & RECITE FROM MEMORY:
            </span>
            <p className="text-xs text-slate-400">
              Material is now closed. Answer your survey questions from memory without looking:
            </p>

            <textarea
              value={reciteNotes}
              onChange={(e) => setReciteNotes(e.target.value)}
              placeholder="Recite answers to your generated questions here..."
              rows={4}
              className="w-full bg-slate-900 border border-slate-800 rounded-lg p-3 text-sm text-slate-200"
            />

            <button
              onClick={() => setStep(4)}
              className="w-full py-2.5 bg-amber-600 hover:bg-amber-500 text-slate-950 font-bold text-xs uppercase rounded-lg shadow-lg flex items-center justify-center gap-2"
            >
              <span>Advance to Connect & Review</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-4 animate-fadeIn">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">
              4. CONNECT & REVIEW SESSION SUMMARY:
            </span>

            <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-2 text-xs text-slate-300">
              <span className="font-bold text-white block">Connected Concept Nodes:</span>
              <div className="flex flex-wrap gap-1">
                {concept.connectedConceptIds.map((id, i) => (
                  <span key={i} className="px-2 py-0.5 bg-slate-950 border border-slate-800 rounded font-mono text-cyan-300">
                    {id}
                  </span>
                ))}
              </div>
            </div>

            <button
              onClick={handleSaveSession}
              className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase rounded-lg shadow-lg flex items-center justify-center gap-2"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Save Complete SQ3R Active Session</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
