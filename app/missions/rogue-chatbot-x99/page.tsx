"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import {
  BOSS_NAME,
  BOSS_DESCRIPTION,
  BOSS_ATTACKS,
  BossPhase,
  BossAttack,
  BossState,
  initialBossState,
  evaluateResponse,
  calculateDamage,
  generateAttackQueue,
  PHASE_CONFIG,
} from "@/lib/boss-fight";
import { useGameStore } from "@/store/gameStore";

type GamePhase = "briefing" | "battle" | "victory" | "defeat";

// ─── NPC Dialogue ──────────────────────────────────────────────────────────────

const NPC_DIALOGUE = [
  {
    speaker: "NEXUS",
    mood: "🤖",
    text: "AGENT_001 — เราตรวจพบการรบกวนในเครือข่ายประสาทเทียม!",
    sub: "ANOMALY DETECTED IN AI NETWORK...",
  },
  {
    speaker: "SYSTEM ALERT",
    mood: "⚠️",
    text: "ROGUE CHATBOT X-99 กำลังแพร่กระจายข้อมูลเท็จและทำให้ระบบเสียหาย",
    sub: "MISSION: NEUTRALIZE THE CORRUPTED AI",
  },
  {
    speaker: "COMMAND",
    mood: "🛡️",
    text: "ภารกิจของคุณ: ป้องกันการโจมตีของบอสด้วยการตอบโต้ข้อมูลเท็จอย่างถูกต้อง",
    sub: "DEFEND THE NETWORK — IDENTIFY MISINFORMATION",
  },
];

// ─── UI Components ────────────────────────────────────────────────────────────

function HealthBar({ value, max, label, color }: { value: number; max: number; label: string; color: string }) {
  const percent = Math.max(0, (value / max) * 100);
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="font-mono text-cyan-300">{label}</span>
        <span className="font-mono">{value} / {max}</span>
      </div>
      <div className="h-4 bg-gray-900/50 rounded-full overflow-hidden border border-gray-700">
        <div
          className="h-full rounded-full transition-all duration-300"
          style={{ width: `${percent}%`, backgroundColor: color }}
        />
      </div>
    </div>
  );
}

function CorruptionMeter({ value }: { value: number }) {
  const segments = 10;
  const activeSegments = Math.floor((value / 100) * segments);
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="font-mono text-pink-300">CORRUPTION METER</span>
        <span className="font-mono">{value}%</span>
      </div>
      <div className="flex gap-1">
        {Array.from({ length: segments }).map((_, i) => (
          <div
            key={i}
            className={`h-3 flex-1 rounded ${i < activeSegments ? "bg-gradient-to-r from-pink-500 to-purple-500" : "bg-gray-800"}`}
          />
        ))}
      </div>
      <div className="text-xs text-gray-400">
        {value >= 80 ? "⚠️ CRITICAL: System integrity at risk!" :
         value >= 50 ? "⚠️ WARNING: Corruption spreading" :
         value >= 20 ? "⚠️ CAUTION: Minor anomalies detected" :
         "✅ System stable"}
      </div>
    </div>
  );
}

function AttackDisplay({ attack, timeRemaining }: { attack: BossAttack | null; timeRemaining: number }) {
  if (!attack) return null;
  
  const percent = (timeRemaining / attack.duration) * 100;
  const color = attack.type === "misinformation" ? "bg-yellow-500" :
                attack.type === "hallucination" ? "bg-red-500" :
                attack.type === "manipulation" ? "bg-orange-500" : "bg-purple-500";
  
  return (
    <div className="glass-card rounded-2xl p-6 border border-cyan-500/20 space-y-4">
      <div className="flex justify-between items-center">
        <div>
          <div className="text-lg font-bold text-white">{attack.name}</div>
          <div className="text-sm text-gray-300">{attack.description}</div>
        </div>
        <div className={`px-3 py-1 rounded-full text-xs font-bold ${color.replace("bg-", "bg-")} text-white`}>
          {attack.type.toUpperCase()}
        </div>
      </div>
      
      <div className="space-y-2">
        <div className="text-sm font-mono text-cyan-300">ATTACK PATTERN</div>
        <div className="bg-black/50 p-3 rounded-lg border border-gray-700">
          {attack.pattern.map((line, i) => (
            <div key={i} className="text-gray-300 font-mono text-sm">› {line}</div>
          ))}
        </div>
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="font-mono">TIME REMAINING</span>
          <span className="font-mono">{(timeRemaining / 1000).toFixed(1)}s</span>
        </div>
        <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full ${color} transition-all duration-100`}
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>
      
      <div className="text-sm text-gray-400">
        <span className="text-cyan-300">SOLUTION:</span> {attack.solution}
      </div>
    </div>
  );
}

function ResponseInput({ onSubmit, disabled }: { onSubmit: (input: string) => void; disabled: boolean }) {
  const [input, setInput] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && !disabled) {
      onSubmit(input);
      setInput("");
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="text-sm font-mono text-cyan-300">YOUR RESPONSE</div>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your counter‑argument here..."
        className="w-full h-32 bg-black/50 border border-cyan-500/30 rounded-xl p-4 font-mono text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/70 resize-none"
        disabled={disabled}
      />
      <div className="flex justify-between items-center">
        <div className="text-xs text-gray-400">
          Press Enter to submit • Be concise and accurate
        </div>
        <button
          type="submit"
          disabled={disabled || !input.trim()}
          className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg font-bold text-white transition-all"
        >
          COUNTER ATTACK
        </button>
      </div>
    </form>
  );
}

function PhaseIndicator({ phase }: { phase: BossPhase }) {
  const phases: { key: BossPhase; label: string; color: string }[] = [
    { key: "intro", label: "INTRO", color: "bg-gray-600" },
    { key: "phase1", label: "PHASE 1", color: "bg-blue-600" },
    { key: "phase2", label: "PHASE 2", color: "bg-purple-600" },
    { key: "phase3", label: "PHASE 3", color: "bg-red-600" },
  ];
  
  const currentIndex = phases.findIndex(p => p.key === phase);
  
  return (
    <div className="space-y-2">
      <div className="text-sm font-mono text-cyan-300">BOSS PHASE</div>
      <div className="flex items-center">
        {phases.map((p, i) => (
          <div key={p.key} className="flex items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${p.color} ${i <= currentIndex ? "opacity-100" : "opacity-30"}`}>
              {i + 1}
            </div>
            <div className={`ml-2 text-sm font-mono ${i <= currentIndex ? "text-white" : "text-gray-500"}`}>
              {p.label}
            </div>
            {i < phases.length - 1 && (
              <div className={`w-12 h-1 mx-2 ${i < currentIndex ? "bg-cyan-500" : "bg-gray-700"}`} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────

export default function RogueChatbotBoss() {
  const [gamePhase, setGamePhase] = useState<GamePhase>("briefing");
  const [bossState, setBossState] = useState<BossState>(initialBossState());
  const [dialogueIndex, setDialogueIndex] = useState(0);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [combo, setCombo] = useState(0);
  
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const { rewardMission, pushBossBattleLog } = useGameStore();
  
  // Start next attack
  const startNextAttack = useCallback((state: BossState) => {
    if (state.attackQueue.length === 0) {
      // Generate new queue for current phase
      const newQueue = generateAttackQueue(state.phase);
      if (newQueue.length === 0) {
        // No attacks? move to next phase
        advancePhase(state);
        return;
      }
      state.attackQueue = newQueue;
    }
    
    const nextAttack = state.attackQueue[0];
    state.currentAttack = nextAttack;
    state.timeRemaining = nextAttack.duration;
    state.attackQueue = state.attackQueue.slice(1);
    
    setBossState({ ...state });
    
    // Start timer
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setBossState(prev => {
        if (prev.timeRemaining <= 100) {
          // Time's up - attack hits
          if (timerRef.current) clearInterval(timerRef.current);
          handleTimeExpired(prev);
          return prev;
        }
        return { ...prev, timeRemaining: prev.timeRemaining - 100 };
      });
    }, 100);
  }, []);
  
  // Handle time expired
  const handleTimeExpired = useCallback((state: BossState) => {
    if (!state.currentAttack) return;
    
    // Attack hits
    const newCorruption = Math.min(100, state.corruption + state.currentAttack.damage);
    const newState = { ...state, corruption: newCorruption, combo: 0 };
    setBossState(newState);
    setFeedback("⏰ TIME'S UP! The attack corrupted the system.");
    setCombo(0);
    
    // Check defeat
    if (newCorruption >= 100) {
      setGamePhase("defeat");
      pushBossBattleLog({
        bossName: BOSS_NAME,
        phase: state.phase,
        healthRemaining: state.health,
        corruption: newCorruption,
        score: state.score,
        attacksDefeated: state.attacksDefeated,
        timestamp: Date.now(),
        victory: false,
      });
      return;
    }
    
    // Next attack after delay
    setTimeout(() => {
      startNextAttack(newState);
      setFeedback(null);
    }, 2000);
  }, [pushBossBattleLog, startNextAttack]);
  
  // Advance to next phase
  const advancePhase = useCallback((state: BossState) => {
    const phases: BossPhase[] = ["phase1", "phase2", "phase3"];
    const currentIndex = phases.indexOf(state.phase);
    if (currentIndex < phases.length - 1) {
      const nextPhase = phases[currentIndex + 1];
      state.phase = nextPhase;
      state.attackQueue = generateAttackQueue(nextPhase);
      setBossState({ ...state });
      setFeedback(`⚡ BOSS ENRAGED! Entering ${nextPhase.toUpperCase()}!`);
      
      setTimeout(() => {
        startNextAttack(state);
        setFeedback(null);
      }, 3000);
    }
  }, [startNextAttack]);
  
  // Start battle
  const startBattle = useCallback(() => {
    setGamePhase("battle");
    const newState = initialBossState();
    newState.phase = "phase1";
    newState.attackQueue = generateAttackQueue("phase1");
    setBossState(newState);
    startNextAttack(newState);
  }, [startNextAttack]);
  
  // Handle player response
  const handleResponse = (input: string) => {
    if (!bossState.currentAttack) return;
    
    const { correct, score, feedback: evalFeedback } = evaluateResponse(input, bossState.currentAttack);
    const damage = calculateDamage(correct, bossState.timeRemaining, bossState.currentAttack);
    
    const newCombo = correct ? combo + 1 : 0;
    const newScore = bossState.score + (correct ? score : 0);
    const newHealth = Math.max(0, bossState.health - (correct ? damage : 0));
    const newCorruption = correct ? bossState.corruption : Math.min(100, bossState.corruption + bossState.currentAttack.damage);
    const newAttacksDefeated = bossState.attacksDefeated + (correct ? 1 : 0);
    
    const newState = {
      ...bossState,
      health: newHealth,
      corruption: newCorruption,
      score: newScore,
      combo: newCombo,
      attacksDefeated: newAttacksDefeated,
      currentAttack: null,
    };
    
    setBossState(newState);
    setFeedback(evalFeedback);
    setCombo(newCombo);
    
    if (timerRef.current) clearInterval(timerRef.current);
    
    // Check victory
    if (newHealth <= 0) {
      setGamePhase("victory");
      pushBossBattleLog({
        bossName: BOSS_NAME,
        phase: bossState.phase,
        healthRemaining: 0,
        corruption: newCorruption,
        score: newScore,
        attacksDefeated: newAttacksDefeated,
        timestamp: Date.now(),
        victory: true,
      });
      rewardMission(1000, 200, "rogue-chatbot-x99", "Defeated Rogue Chatbot X-99");
      return;
    }
    
    // Check defeat
    if (newCorruption >= 100) {
      setGamePhase("defeat");
      pushBossBattleLog({
        bossName: BOSS_NAME,
        phase: bossState.phase,
        healthRemaining: newHealth,
        corruption: newCorruption,
        score: newScore,
        attacksDefeated: newAttacksDefeated,
        timestamp: Date.now(),
        victory: false,
      });
      return;
    }
    
    // Advance phase if health threshold crossed
    if (newHealth <= PHASE_CONFIG[bossState.phase].healthThreshold && bossState.phase !== "phase3") {
      advancePhase(newState);
    } else {
      // Next attack after delay
      setTimeout(() => {
        startNextAttack(newState);
        setFeedback(null);
      }, 2000);
    }
  };
  
  // Dialogue navigation
  const handleNextDialogue = () => {
    if (dialogueIndex < NPC_DIALOGUE.length - 1) {
      setDialogueIndex(dialogueIndex + 1);
    } else {
      startBattle();
    }
  };
  
  // Cleanup timer
  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);
  
  // Render based on game phase
  return (
    <div className="min-h-screen bg-[#050510] cyber-grid">
      <Navbar />
      
      <main className="max-w-6xl mx-auto px-4 py-8 pt-24">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
            {BOSS_NAME}
          </h1>
          <p className="text-gray-400 mt-2 max-w-2xl mx-auto">{BOSS_DESCRIPTION}</p>
        </div>
        
        {/* Game Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Stats & Controls */}
          <div className="space-y-6">
            <div className="glass-card rounded-2xl p-6 border border-cyan-500/20">
              <h2 className="text-xl font-bold text-white mb-4">BATTLE STATS</h2>
              <div className="space-y-4">
                <HealthBar value={bossState.health} max={100} label="BOSS HEALTH" color="#ef4444" />
                <CorruptionMeter value={bossState.corruption} />
                <PhaseIndicator phase={bossState.phase} />
                
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-300">{bossState.score}</div>
                    <div className="text-xs text-gray-400">SCORE</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-pink-300">{combo}</div>
                    <div className="text-xs text-gray-400">COMBO</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-300">{bossState.attacksDefeated}</div>
                    <div className="text-xs text-gray-400">ATTACKS DEFEATED</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">
                      {PHASE_CONFIG[bossState.phase].attacksPerRound}
                    </div>
                    <div className="text-xs text-gray-400">ATTACKS/ROUND</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Quick Tips */}
            <div className="glass-card rounded-2xl p-6 border border-cyan-500/20">
              <h3 className="text-lg font-bold text-white mb-3">QUICK TIPS</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Read the attack pattern carefully</li>
                <li>• Identify the type of misinformation</li>
                <li>• Respond concisely with the solution</li>
                <li>• Faster responses reduce corruption</li>
                <li>• Combos increase score multiplier</li>
              </ul>
            </div>
          </div>
          
          {/* Center Column: Main Battle */}
          <div className="lg:col-span-2 space-y-6">
            {gamePhase === "briefing" ? (
              // Briefing Dialogue
              <div className="glass-card rounded-2xl p-8 border border-cyan-500/20">
                <div className="flex flex-col items-center gap-6">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border-2 border-cyan-400/40 flex items-center justify-center text-5xl">
                    {NPC_DIALOGUE[dialogueIndex].mood}
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-300">{NPC_DIALOGUE[dialogueIndex].speaker}</div>
                    <div className="text-gray-400 text-sm mt-1">{NPC_DIALOGUE[dialogueIndex].sub}</div>
                  </div>
                  <div className="text-lg text-gray-200 text-center leading-relaxed max-w-lg">
                    {NPC_DIALOGUE[dialogueIndex].text}
                  </div>
                  <button
                    onClick={handleNextDialogue}
                    className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-xl font-bold text-white transition-all"
                  >
                    {dialogueIndex < NPC_DIALOGUE.length - 1 ? "CONTINUE" : "ENGAGE BOSS"}
                  </button>
                </div>
              </div>
            ) : gamePhase === "battle" ? (
              // Battle Interface
              <>
                <AttackDisplay attack={bossState.currentAttack} timeRemaining={bossState.timeRemaining} />
                
                {feedback && (
                  <div className={`glass-card rounded-2xl p-4 border ${feedback.includes("✅") ? "border-green-500/40" : "border-red-500/40"}`}>
                    <div className="flex items-center gap-3">
                      <div className="text-2xl">{feedback.includes("✅") ? "✅" : "❌"}</div>
                      <div className="text-white">{feedback}</div>
                    </div>
                  </div>
                )}
                
                <ResponseInput onSubmit={handleResponse} disabled={!bossState.currentAttack} />
                
                {/* Attack Queue Preview */}
                {bossState.attackQueue.length > 0 && (
                  <div className="glass-card rounded-2xl p-4 border border-gray-700">
                    <div className="text-sm font-mono text-cyan-300 mb-2">UPCOMING ATTACKS</div>
                    <div className="flex gap-2">
                      {bossState.attackQueue.slice(0, 3).map((attack, i) => (
                        <div key={i} className="px-3 py-1 rounded-lg bg-gray-800/50 text-xs">
                          {attack.name}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </>
            ) : gamePhase === "victory" ? (
              // Victory Screen
              <div className="glass-card rounded-2xl p-8 border border-green-500/40 text-center">
                <div className="text-6xl mb-4">🏆</div>
                <h2 className="text-3xl font-bold text-green-300 mb-2">VICTORY!</h2>
                <p className="text-gray-300 mb-6">
                  You have neutralized {BOSS_NAME} and restored stability to the neural network.
                </p>
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-300">{bossState.score}</div>
                    <div className="text-sm text-gray-400">FINAL SCORE</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-pink-300">{bossState.attacksDefeated}</div>
                    <div className="text-sm text-gray-400">ATTACKS DEFEATED</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-300">1000 XP</div>
                    <div className="text-sm text-gray-400">REWARD</div>
                  </div>
                </div>
                <div className="flex gap-4 justify-center">
                  <Link
                    href="/dashboard"
                    className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-bold text-white"
                  >
                    RETURN TO DASHBOARD
                  </Link>
                  <button
                    onClick={() => window.location.reload()}
                    className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-xl font-bold text-white"
                  >
                    PLAY AGAIN
                  </button>
                </div>
              </div>
            ) : (
              // Defeat Screen
              <div className="glass-card rounded-2xl p-8 border border-red-500/40 text-center">
                <div className="text-6xl mb-4">💀</div>
                <h2 className="text-3xl font-bold text-red-300 mb-2">SYSTEM CORRUPTED</h2>
                <p className="text-gray-300 mb-6">
                  The rogue chatbot has overwhelmed the network. Corruption has reached critical levels.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-300">{bossState.score}</div>
                    <div className="text-sm text-gray-400">FINAL SCORE</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-pink-300">{bossState.corruption}%</div>
                    <div className="text-sm text-gray-400">CORRUPTION</div>
                  </div>
                </div>
                <div className="flex gap-4 justify-center">
                  <Link
                    href="/dashboard"
                    className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-bold text-white"
                  >
                    RETURN TO DASHBOARD
                  </Link>
                  <button
                    onClick={() => window.location.reload()}
                    className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-xl font-bold text-white"
                  >
                    TRY AGAIN
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Footer Note */}
        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>This is the first major boss fight of NEURAL QUEST. Defeat Rogue Chatbot X-99 to unlock World 2.</p>
        </div>
      </main>
    </div>
  );
}