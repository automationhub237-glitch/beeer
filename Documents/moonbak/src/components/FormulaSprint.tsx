import React, { useState, useEffect } from 'react';
import { useOS } from '../context/OSContext';
import {
  Zap,
  Clock,
  CheckCircle2,
  AlertTriangle,
  Eye,
  EyeOff,
  BookOpen,
  Award,
  Sparkles,
  RotateCcw,
  HelpCircle
} from 'lucide-react';
import type { QuestionDifficulty } from '../types/neetOS';

export const FormulaSprint: React.FC = () => {
  const {
    sprintBlocks,
    questionBank,
    mistakeBank,
    addMistakeBankEntry,
    recordQuestionAttempt,
    gamification,
    addXP
  } = useOS();

  const [mode, setMode] = useState<'sprint' | 'attack' | 'mistake_practice'>('sprint');
  const [selectedBlockSubject, setSelectedBlockSubject] = useState<'Physics' | 'Chemistry' | 'Biology'>('Physics');
  const [currentBlockIndex, setCurrentBlockIndex] = useState<number>(0);
  const [isAnswerRevealed, setIsAnswerRevealed] = useState<boolean>(false);

  // Timer state
  const [timeLeft, setTimeLeft] = useState<number>(600); // 10 minutes = 600s
  const [timerRunning, setTimerRunning] = useState<boolean>(false);

  // Attack mode state
  const [attackQuestions, setAttackQuestions] = useState(questionBank);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [userSelectedOption, setUserSelectedOption] = useState<number | null>(null);
  const [isOptionSubmitted, setIsOptionSubmitted] = useState<boolean>(false);
  const [attackScore, setAttackScore] = useState<number>(0);
  const [attackCompleted, setAttackCompleted] = useState<boolean>(false);

  // Filtered Sprint Blocks for active subject
  const activeSubjectBlocks = sprintBlocks.filter(b => b.blockType === selectedBlockSubject);
  const currentBlock = activeSubjectBlocks[currentBlockIndex] || activeSubjectBlocks[0] || sprintBlocks[0];

  // Timer Effect
  useEffect(() => {
    let timer: ReturnType<typeof setInterval>;
    if (timerRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timerRunning && timeLeft === 0) {
      setTimerRunning(false);
      if (mode === 'sprint') {
        // Auto transition to Attack Mode when 10 min sprint finishes
        setMode('attack');
        setTimeLeft(600);
      } else if (mode === 'attack') {
        setAttackCompleted(true);
      }
    }
    return () => clearInterval(timer);
  }, [timerRunning, timeLeft, mode]);

  const handleStartTimer = () => {
    setTimerRunning(true);
  };

  const handleResetTimer = () => {
    setTimerRunning(false);
    setTimeLeft(600);
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  // Attack question logic
  const currentQuestion = attackQuestions[currentQuestionIndex] || questionBank[0];

  const handleOptionSelect = (index: number) => {
    if (isOptionSubmitted) return;
    setUserSelectedOption(index);
  };

  const handleSubmitAnswer = () => {
    if (userSelectedOption === null || isOptionSubmitted) return;
    setIsOptionSubmitted(true);
    const isCorrect = userSelectedOption === currentQuestion.correctOptionIndex;

    recordQuestionAttempt(currentQuestion.topic, isCorrect, currentQuestion.difficulty);

    if (isCorrect) {
      setAttackScore(prev => prev + 1);
      addXP(20);
    } else {
      addMistakeBankEntry(currentQuestion, userSelectedOption);
    }
  };

  const handleNextQuestion = () => {
    setUserSelectedOption(null);
    setIsOptionSubmitted(false);

    if (currentQuestionIndex + 1 < attackQuestions.length) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setAttackCompleted(true);
      setTimerRunning(false);
    }
  };

  const getDifficultyBadge = (diff: QuestionDifficulty) => {
    switch (diff) {
      case '0-20':
        return <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded text-[10px] font-mono">LEVEL 0–20 (EASY)</span>;
      case '20-50':
        return <span className="px-2 py-0.5 bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded text-[10px] font-mono">LEVEL 20–50 (MEDIUM)</span>;
      case '50+':
      case 'CYQ':
        return <span className="px-2 py-0.5 bg-rose-500/20 text-rose-300 border border-rose-500/30 rounded text-[10px] font-mono">LEVEL 50+ / CYQ (HARD)</span>;
      default:
        return null;
    }
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-slate-100 shadow-xl space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-semibold rounded-full uppercase tracking-wider mb-2">
            <Zap className="w-3.5 h-3.5" />
            11. RESTRUCTURED 10-MIN SPRINT & GRADUATED ATTACK
          </div>
          <h2 className="text-2xl font-bold text-white">Physics First → Chemistry → Biology Revision Blocks</h2>
          <p className="text-sm text-slate-400 mt-1">
            Active recall sprint blocks followed by a 0 → 20 → 50 → CYQ → PYQ graduated difficulty attack ladder.
          </p>
        </div>

        {/* Gamification Stats Badge */}
        <div className="flex items-center gap-3 bg-slate-950 px-3 py-2 rounded-xl border border-slate-800 text-xs font-mono">
          <div className="flex items-center gap-1.5 text-amber-400">
            <Sparkles className="w-4 h-4" />
            <span>{gamification.xp} XP</span>
          </div>
          <div className="h-4 w-px bg-slate-800" />
          <div className="flex items-center gap-1.5 text-cyan-400">
            <Award className="w-4 h-4" />
            <span>Streak: {gamification.streakDays}d</span>
          </div>
        </div>
      </div>

      {/* Mode Selector Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-950 p-2 rounded-xl border border-slate-800">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => {
              setMode('sprint');
              handleResetTimer();
            }}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
              mode === 'sprint'
                ? 'bg-rose-600 text-white shadow-lg shadow-rose-950/40'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            1. 10-MIN SPRINT (ACTIVE RECALL)
          </button>
          <button
            onClick={() => {
              setMode('attack');
              handleResetTimer();
              setAttackQuestions(questionBank);
              setCurrentQuestionIndex(0);
              setAttackCompleted(false);
              setAttackScore(0);
            }}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
              mode === 'attack'
                ? 'bg-amber-600 text-slate-950 shadow-lg shadow-amber-950/40'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            2. 10-MIN ATTACK (GRADUATED 0→50→PYQ)
          </button>
          <button
            onClick={() => {
              setMode('mistake_practice');
            }}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
              mode === 'mistake_practice'
                ? 'bg-purple-600 text-white shadow-lg shadow-purple-950/40'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            3. PRACTICE MY MISTAKES ({mistakeBank.length})
          </button>
        </div>

        {/* Timer Bar */}
        <div className="flex items-center gap-2">
          <div className="p-2 bg-slate-900 border border-slate-800 text-rose-400 font-mono text-lg font-bold rounded-lg flex items-center gap-2">
            <Clock className="w-4 h-4 text-rose-500 animate-pulse" />
            <span>{formatTime(timeLeft)}</span>
          </div>

          {!timerRunning ? (
            <button
              onClick={handleStartTimer}
              className="px-3 py-2 bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs uppercase rounded-lg shadow-md"
            >
              Start Timer
            </button>
          ) : (
            <button
              onClick={handleResetTimer}
              className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg"
              title="Reset Timer"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* MODE 1: ACTIVE RECALL SPRINT */}
      {mode === 'sprint' && (
        <div className="space-y-5">
          {/* Block Subject Selector: Block A (Physics), Block B (Chemistry), Block C (Biology) */}
          <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
            <span className="text-xs font-mono text-slate-400 uppercase mr-2">Sequence:</span>
            <button
              onClick={() => {
                setSelectedBlockSubject('Physics');
                setCurrentBlockIndex(0);
                setIsAnswerRevealed(false);
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                selectedBlockSubject === 'Physics'
                  ? 'bg-cyan-600 text-slate-950'
                  : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              BLOCK A: ALL PHYSICS FIRST
            </button>
            <button
              onClick={() => {
                setSelectedBlockSubject('Chemistry');
                setCurrentBlockIndex(0);
                setIsAnswerRevealed(false);
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                selectedBlockSubject === 'Chemistry'
                  ? 'bg-emerald-600 text-slate-950'
                  : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              BLOCK B: ALL CHEMISTRY NEXT
            </button>
            <button
              onClick={() => {
                setSelectedBlockSubject('Biology');
                setCurrentBlockIndex(0);
                setIsAnswerRevealed(false);
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                selectedBlockSubject === 'Biology'
                  ? 'bg-purple-600 text-white'
                  : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              BLOCK C: ALL BIOLOGY (NCERT)
            </button>
          </div>

          {/* Active Sprint Card */}
          {currentBlock ? (
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-6 space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
                <div>
                  <span className="text-xs text-rose-400 font-mono uppercase">
                    10-MIN SPRINT BLOCK • {currentBlock.subject.toUpperCase()} • {currentBlock.chapter}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-0.5">{currentBlock.title}</h3>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-400 font-mono">
                    Module {currentBlockIndex + 1} of {activeSubjectBlocks.length}
                  </span>
                  <button
                    onClick={() => {
                      setCurrentBlockIndex((prev) => (prev + 1) % activeSubjectBlocks.length);
                      setIsAnswerRevealed(false);
                    }}
                    className="px-3 py-1.5 bg-slate-900 border border-slate-800 hover:bg-slate-800 text-cyan-400 font-semibold text-xs rounded-lg"
                  >
                    Next Block →
                  </button>
                </div>
              </div>

              {/* Active Recall Prompt Box */}
              <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-3">
                <span className="text-xs font-bold text-rose-400 uppercase tracking-wider block flex items-center gap-1.5">
                  <HelpCircle className="w-4 h-4" /> ACTIVE RECALL PROMPT (PAUSE & THINK FIRST)
                </span>
                <p className="text-base font-semibold text-white">
                  {currentBlock.prompt}
                </p>
                <p className="text-xs text-slate-400 italic">
                  Attempt to mentally reconstruct formulas, SI units, limiting cases, or mechanism flows before clicking reveal.
                </p>
              </div>

              {/* Reveal Button */}
              {!isAnswerRevealed ? (
                <button
                  onClick={() => setIsAnswerRevealed(true)}
                  className="w-full py-3.5 bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg flex items-center justify-center gap-2"
                >
                  <Eye className="w-4 h-4" /> REVEAL FORMULA / FACT EXPLANATION
                </button>
              ) : (
                <div className="space-y-4 animate-fadeIn">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4" /> REVEALED HIGH-YIELD REVISION BREAKDOWN
                    </span>
                    <button
                      onClick={() => setIsAnswerRevealed(false)}
                      className="text-xs text-slate-400 hover:text-white flex items-center gap-1"
                    >
                      <EyeOff className="w-3.5 h-3.5" /> Hide
                    </button>
                  </div>

                  <p className="text-sm text-slate-200">{currentBlock.revealedAnswer.summary}</p>

                  {/* Formulas or Key Facts List */}
                  <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-2">
                    <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block">
                      Core Equations / NCERT Facts
                    </span>
                    <ul className="space-y-1.5 font-mono text-xs text-cyan-300">
                      {currentBlock.revealedAnswer.formulasOrKeyFacts.map((fact, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-cyan-500">•</span>
                          <span>{fact}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* OpenStax Visual Model (if present for Organic Chemistry) */}
                  {currentBlock.revealedAnswer.visualMechanismModel && (
                    <div className="p-4 bg-emerald-950/50 border border-emerald-500/30 rounded-xl space-y-2">
                      <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block flex items-center gap-1.5">
                        <BookOpen className="w-4 h-4" /> OPENSTAX ORGANIC VISUAL MECHANISM FLOW
                      </span>
                      <p className="text-xs font-mono text-emerald-300 bg-slate-950 p-3 rounded border border-emerald-900">
                        {currentBlock.revealedAnswer.visualMechanismModel}
                      </p>
                    </div>
                  )}

                  {/* SI Units / Operational Conditions */}
                  {currentBlock.revealedAnswer.operationalConditionsOrExceptions && (
                    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-1">
                      <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                        Validity Conditions & Exceptions
                      </span>
                      <ul className="text-xs text-amber-200 space-y-1">
                        {currentBlock.revealedAnswer.operationalConditionsOrExceptions.map((cond, idx) => (
                          <li key={idx}>• {cond}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* High Yield Formula Traps */}
                  {currentBlock.revealedAnswer.highYieldTraps && (
                    <div className="p-4 bg-rose-950/40 border border-rose-500/30 rounded-xl space-y-1">
                      <span className="text-xs font-bold text-rose-400 uppercase tracking-wider block flex items-center gap-1.5">
                        <AlertTriangle className="w-4 h-4" /> HIGH-YIELD FORMULA TRAPS
                      </span>
                      <ul className="text-xs text-rose-300 space-y-1 font-mono">
                        {currentBlock.revealedAnswer.highYieldTraps.map((trap, idx) => (
                          <li key={idx}>• {trap}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          ) : (
            <div className="p-8 text-center text-slate-500">Content not added yet for this subject block.</div>
          )}
        </div>
      )}

      {/* MODE 2: GRADUATED DIFFICULTY ATTACK SPRINT */}
      {mode === 'attack' && (
        <div className="space-y-5">
          {!attackCompleted ? (
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-6 space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs text-amber-400 font-mono uppercase">
                      RAPID ATTACK • QUESTION {currentQuestionIndex + 1} OF {attackQuestions.length}
                    </span>
                    {getDifficultyBadge(currentQuestion.difficulty)}
                    {currentQuestion.isOfficialPYQ ? (
                      <span className="px-2 py-0.5 bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 rounded text-[10px] font-mono">
                        OFFICIAL PYQ ({currentQuestion.year})
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 bg-slate-900 text-slate-400 border border-slate-800 rounded text-[10px] font-mono">
                        GENERATED PRACTICE
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-white">{currentQuestion.topic} ({currentQuestion.subject})</h3>
                </div>

                <div className="text-xs text-slate-400 font-mono">
                  Score: <strong className="text-amber-400">{attackScore}</strong>
                </div>
              </div>

              {/* Question Text */}
              <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-2">
                <p className="text-sm font-semibold text-white whitespace-pre-line">
                  {currentQuestion.questionText}
                </p>
              </div>

              {/* Options Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {currentQuestion.options.map((option, idx) => {
                  let optionClass = "bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700";
                  if (userSelectedOption === idx) {
                    optionClass = "bg-amber-950/60 border-amber-500 text-amber-200 ring-2 ring-amber-500/30";
                  }

                  if (isOptionSubmitted) {
                    if (idx === currentQuestion.correctOptionIndex) {
                      optionClass = "bg-emerald-950/80 border-emerald-500 text-emerald-200 font-bold";
                    } else if (userSelectedOption === idx && idx !== currentQuestion.correctOptionIndex) {
                      optionClass = "bg-rose-950/80 border-rose-500 text-rose-200";
                    }
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleOptionSelect(idx)}
                      disabled={isOptionSubmitted}
                      className={`p-4 rounded-xl border text-left text-xs font-semibold transition-all ${optionClass}`}
                    >
                      <span className="font-mono text-slate-400 mr-2">{String.fromCharCode(65 + idx)}.</span>
                      <span>{option}</span>
                    </button>
                  );
                })}
              </div>

              {/* Submit / Next Button */}
              {!isOptionSubmitted ? (
                <button
                  onClick={handleSubmitAnswer}
                  disabled={userSelectedOption === null}
                  className="w-full py-3 bg-amber-600 hover:bg-amber-500 disabled:opacity-50 text-slate-950 font-bold text-xs uppercase rounded-xl shadow-lg"
                >
                  Submit Answer
                </button>
              ) : (
                <div className="space-y-4 animate-fadeIn">
                  {/* Feedback Banner */}
                  <div
                    className={`p-4 rounded-xl border flex items-center justify-between text-xs ${
                      userSelectedOption === currentQuestion.correctOptionIndex
                        ? 'bg-emerald-950/80 border-emerald-500/50 text-emerald-300'
                        : 'bg-rose-950/80 border-rose-500/50 text-rose-300'
                    }`}
                  >
                    <div className="flex items-center gap-2 font-bold">
                      {userSelectedOption === currentQuestion.correctOptionIndex ? (
                        <>
                          <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                          <span>CORRECT! +20 XP</span>
                        </>
                      ) : (
                        <>
                          <AlertTriangle className="w-5 h-5 text-rose-400" />
                          <span>INCORRECT — ADDED TO MISTAKE BANK</span>
                        </>
                      )}
                    </div>

                    <button
                      onClick={handleNextQuestion}
                      className="px-4 py-2 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-bold text-xs uppercase rounded-lg"
                    >
                      Next Question →
                    </button>
                  </div>

                  {/* Explanation Box */}
                  <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-2">
                    <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block">Explanation</span>
                    <p className="text-xs text-slate-300">{currentQuestion.explanation}</p>
                    <div className="pt-2 border-t border-slate-800 flex flex-wrap gap-4 text-[11px] text-slate-400">
                      <span>Concept: {currentQuestion.conceptTested}</span>
                      <span>Trap: {currentQuestion.commonMistakeTrap}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* Attack Score Summary */
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-8 text-center space-y-5">
              <Award className="w-12 h-12 text-amber-400 mx-auto" />
              <h3 className="text-2xl font-bold text-white">10-Min Attack Sprint Complete!</h3>
              <p className="text-sm text-slate-300">
                You scored <strong className="text-amber-400">{attackScore}</strong> out of <strong className="text-white">{attackQuestions.length}</strong>.
              </p>
              <div className="flex justify-center gap-3">
                <button
                  onClick={() => {
                    setCurrentQuestionIndex(0);
                    setAttackCompleted(false);
                    setAttackScore(0);
                    setUserSelectedOption(null);
                    setIsOptionSubmitted(false);
                  }}
                  className="px-6 py-2.5 bg-amber-600 hover:bg-amber-500 text-slate-950 font-bold text-xs uppercase rounded-lg shadow-lg"
                >
                  Restart Attack Sprint
                </button>
                <button
                  onClick={() => setMode('sprint')}
                  className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-bold text-xs uppercase rounded-lg"
                >
                  Return to Active Recall
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* MODE 3: PRACTICE MY MISTAKES */}
      {mode === 'mistake_practice' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <RotateCcw className="w-5 h-5 text-purple-400" />
              Dedicated Mistake Bank Practice ({mistakeBank.length} items)
            </h3>
          </div>

          {mistakeBank.length === 0 ? (
            <div className="p-8 text-center text-slate-500 bg-slate-950 rounded-xl border border-slate-800">
              No flagged mistakes in your Mistake Bank yet! Excellent performance.
            </div>
          ) : (
            <div className="space-y-4">
              {mistakeBank.map(entry => (
                <div key={entry.id} className="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-purple-400 font-bold">{entry.subject} • {entry.topic}</span>
                    <span className="text-rose-400 bg-rose-950/60 px-2 py-0.5 rounded border border-rose-900">
                      Error Count: {entry.errorCount}
                    </span>
                  </div>

                  <p className="text-sm font-semibold text-white">{entry.questionText}</p>

                  <div className="p-3 bg-slate-900 border border-slate-800 rounded-lg text-xs space-y-1">
                    <span className="text-emerald-400 font-bold block">Correct Option: {entry.options[entry.correctOptionIndex]}</span>
                    <p className="text-slate-300">{entry.explanation}</p>
                    <span className="text-amber-400 block pt-1">Trap to avoid: {entry.commonMistakeTrap}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
