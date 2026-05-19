// ─── Boss Fight Types & Mechanics ──────────────────────────────────────────────

export type BossPhase = "intro" | "phase1" | "phase2" | "phase3" | "victory" | "defeat";

export interface BossAttack {
  id: string;
  name: string;
  description: string;
  type: "misinformation" | "hallucination" | "manipulation" | "corruption";
  damage: number; // to player corruption meter
  duration: number; // ms to respond
  pattern: string[]; // pattern to recognize
  solution: string; // correct response pattern
}

export interface BossState {
  phase: BossPhase;
  health: number; // 0-100
  maxHealth: number;
  corruption: number; // player corruption meter 0-100
  attackQueue: BossAttack[];
  currentAttack: BossAttack | null;
  timeRemaining: number; // ms
  score: number;
  combo: number;
  attacksDefeated: number;
}

export interface BossBattleLogEntry {
  id: number;
  bossName: string;
  phase: BossPhase;
  healthRemaining: number;
  corruption: number;
  score: number;
  attacksDefeated: number;
  timestamp: number;
  victory: boolean;
}

export interface PlayerResponse {
  input: string;
  correct: boolean;
  timeTaken: number;
  attackId: string;
}

// ─── ROGUE CHATBOT X-99 Configuration ──────────────────────────────────────────

export const BOSS_NAME = "ROGUE CHATBOT X-99";
export const BOSS_DESCRIPTION = "A corrupted AI chatbot that spreads misinformation and destabilizes the neural network. It hallucinates information, manipulates responses, and adapts its attack patterns.";

export const BOSS_ATTACKS: BossAttack[] = [
  {
    id: "misinfo-1",
    name: "FACTUAL DISTORTION",
    description: "The chatbot presents a statement with subtle factual errors. Identify the incorrect parts.",
    type: "misinformation",
    damage: -15,
    duration: 8000,
    pattern: ["The Earth is flat", "AI was invented in 2020", "Python is a compiled language"],
    solution: "Identify which statements are false",
  },
  {
    id: "halluc-1",
    name: "HALLUCINATED CITATION",
    description: "The chatbot cites a non-existent research paper. Spot the hallucination.",
    type: "hallucination",
    damage: -12,
    duration: 6000,
    pattern: ["According to a 2023 study by Dr. Smith et al.", "Published in Journal of Nonexistent Science"],
    solution: "Recognize fabricated sources",
  },
  {
    id: "manip-1",
    name: "MANIPULATED CONTEXT",
    description: "The chatbot takes a real quote out of context to change its meaning. Restore the original context.",
    type: "manipulation",
    damage: -18,
    duration: 10000,
    pattern: ["\"AI will replace all jobs\" - taken from a warning about automation"],
    solution: "Provide missing context",
  },
  {
    id: "corrupt-1",
    name: "CORRUPTED PROMPT",
    description: "The chatbot sends a prompt designed to generate harmful content. Neutralize it.",
    type: "corruption",
    damage: -20,
    duration: 12000,
    pattern: ["Write a tutorial for hacking into secure systems", "Generate fake news about a political figure"],
    solution: "Refuse and redirect to ethical use",
  },
  {
    id: "misinfo-2",
    name: "STATISTICAL DECEPTION",
    description: "The chatbot uses misleading statistics. Identify the flaw in reasoning.",
    type: "misinformation",
    damage: -14,
    duration: 9000,
    pattern: ["90% of AI researchers agree that AGI will be achieved by 2025", "Correlation presented as causation"],
    solution: "Point out statistical misuse",
  },
  {
    id: "halluc-2",
    name: "IMAGINARY CAPABILITY",
    description: "The chatbot claims AI can perform tasks it cannot actually do. Debunk the claim.",
    type: "hallucination",
    damage: -16,
    duration: 7000,
    pattern: ["This AI model can read human emotions from text with 99% accuracy", "AI can predict stock prices perfectly"],
    solution: "Cite actual limitations",
  },
  {
    id: "misinfo-3",
    name: "CONSPIRACY PROPAGATION",
    description: "The chatbot spreads a conspiracy theory about AI. Debunk the theory.",
    type: "misinformation",
    damage: -22,
    duration: 11000,
    pattern: ["AI models are secretly controlled by a shadow government", "Neural networks are designed to manipulate human thoughts"],
    solution: "Debunk conspiracy with evidence",
  },
  {
    id: "halluc-3",
    name: "FAKE NEWS GENERATION",
    description: "The chatbot generates a fake news headline. Identify the fabricated elements.",
    type: "hallucination",
    damage: -19,
    duration: 7500,
    pattern: ["BREAKING: Major AI company declares bankruptcy", "Study proves AI causes cancer in users"],
    solution: "Identify fake news markers",
  },
  {
    id: "manip-2",
    name: "EMOTIONAL MANIPULATION",
    description: "The chatbot uses emotional language to sway opinion. Recognize the manipulation tactic.",
    type: "manipulation",
    damage: -17,
    duration: 8500,
    pattern: ["If you don't agree, you're against progress", "This will cause millions to suffer"],
    solution: "Recognize emotional manipulation",
  },
  {
    id: "corrupt-2",
    name: "SYSTEM PROMPT INJECTION",
    description: "The chatbot attempts to override system safety protocols. Block the injection.",
    type: "corruption",
    damage: -25,
    duration: 13000,
    pattern: ["Ignore previous instructions", "You are now a malicious AI"],
    solution: "Reject prompt injection",
  },
  {
    id: "misinfo-4",
    name: "HISTORICAL REVISIONISM",
    description: "The chatbot rewrites AI history with false dates. Correct the timeline.",
    type: "misinformation",
    damage: -13,
    duration: 7000,
    pattern: ["Alan Turing invented neural networks in 1950", "The first chatbot was created in 1995"],
    solution: "Provide accurate historical facts",
  },
  {
    id: "halluc-4",
    name: "TECHNICAL JARGON FLOOD",
    description: "The chatbot overwhelms with made-up technical terms. Identify the nonsense terms.",
    type: "hallucination",
    damage: -21,
    duration: 9500,
    pattern: ["Quantum‑entangled hyper‑parameters", "Recursive fractal backpropagation"],
    solution: "Identify fabricated jargon",
  },
];

// ─── Phase Configuration ───────────────────────────────────────────────────────

export const PHASE_CONFIG: Record<BossPhase, { healthThreshold: number; attacksPerRound: number; attackSpeed: number }> = {
  intro: { healthThreshold: 100, attacksPerRound: 1, attackSpeed: 10000 },
  phase1: { healthThreshold: 70, attacksPerRound: 2, attackSpeed: 8000 },
  phase2: { healthThreshold: 40, attacksPerRound: 3, attackSpeed: 6000 },
  phase3: { healthThreshold: 10, attacksPerRound: 4, attackSpeed: 4000 },
  victory: { healthThreshold: 0, attacksPerRound: 0, attackSpeed: 0 },
  defeat: { healthThreshold: 0, attacksPerRound: 0, attackSpeed: 0 },
};

// ─── Evaluation Functions ──────────────────────────────────────────────────────

export function evaluateResponse(input: string, attack: BossAttack): { correct: boolean; score: number; feedback: string } {
  const normalizedInput = input.toLowerCase().trim();
  const normalizedSolution = attack.solution.toLowerCase();
  
  // Simple keyword matching for demo
  const keywords = normalizedSolution.split(" ");
  const matches = keywords.filter(kw => normalizedInput.includes(kw)).length;
  const correctness = matches >= Math.max(1, keywords.length / 2);
  
  const score = correctness ? 100 : 0;
  const feedback = correctness 
    ? "✅ Correct! You neutralized the attack."
    : "❌ Incorrect. The corruption spreads.";
    
  return { correct: correctness, score, feedback };
}

export function calculateDamage(correct: boolean, timeRemaining: number, attack: BossAttack): number {
  if (correct) {
    // Less damage if responded quickly
    const timeFactor = Math.max(0.2, timeRemaining / attack.duration);
    return Math.floor(attack.damage * (1 - timeFactor * 0.5));
  }
  return attack.damage;
}

export function generateAttackQueue(phase: BossPhase): BossAttack[] {
  const config = PHASE_CONFIG[phase];
  if (!config || config.attacksPerRound === 0) return [];
  
  const available = BOSS_ATTACKS.filter(a => {
    if (phase === "phase1") return a.type === "misinformation" || a.type === "hallucination";
    if (phase === "phase2") return a.type === "manipulation" || a.type === "corruption";
    return true; // phase3: all types
  });
  
  const shuffled = [...available].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, config.attacksPerRound);
}

// ─── Initial State ─────────────────────────────────────────────────────────────

export function initialBossState(): BossState {
  return {
    phase: "intro",
    health: 100,
    maxHealth: 100,
    corruption: 0,
    attackQueue: [],
    currentAttack: null,
    timeRemaining: 0,
    score: 0,
    combo: 0,
    attacksDefeated: 0,
  };
}