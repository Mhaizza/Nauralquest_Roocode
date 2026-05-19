// ─── Game State Types ──────────────────────────────────────────────────────────

export interface PlayerState {
  xp: number;
  level: number;
  credits: number;
  energy: number;
  lastEnergyAt: number;
  completed: string[];
  streak: number;
  heroKey: string;
  agentName: string;
}

export interface Hero {
  key: string;
  name: string;
  description: string;
  ability: string;
  color: string;
  unlockedAt: number; // level required
}

export interface Mission {
  id: string;
  title: string;
  description: string;
  difficulty: "easy" | "medium" | "hard" | "boss";
  energyCost: number;
  xpReward: number;
  creditReward: number;
  unlockedAt: number;
  world: number;
}

export interface World {
  id: number;
  name: string;
  description: string;
  theme: string;
  unlockedAt: number;
  missions: string[]; // mission IDs
}