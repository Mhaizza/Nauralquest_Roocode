// ─── Energy & Leveling System ──────────────────────────────────────────────────

export const ENERGY_MAX = 100;
export const ENERGY_REGEN_MS = 60_000; // 1 energy per minute

/**
 * Compute current energy based on lastEnergyAt timestamp.
 * @param currentEnergy last stored energy value
 * @param lastEnergyAt timestamp when energy was last updated
 * @returns updated energy and lastEnergyAt (clamped to max)
 */
export function computeEnergy(
  currentEnergy: number,
  lastEnergyAt: number
): { energy: number; lastEnergyAt: number } {
  const now = Date.now();
  const elapsed = now - lastEnergyAt;
  const gained = Math.floor(elapsed / ENERGY_REGEN_MS);
  const newEnergy = Math.min(ENERGY_MAX, currentEnergy + gained);
  const newLast = gained > 0 ? lastEnergyAt + gained * ENERGY_REGEN_MS : lastEnergyAt;
  return { energy: newEnergy, lastEnergyAt: newLast };
}

/**
 * XP required for each level (simple quadratic curve).
 */
const XP_PER_LEVEL = [
  0,    // level 1
  100,  // level 2
  250,  // level 3
  500,  // level 4
  850,  // level 5
  1300, // level 6
  1850, // level 7
  2500, // level 8
  3250, // level 9
  4100, // level 10
  5050, // level 11
  6100, // level 12
  7250, // level 13
  8500, // level 14
  9850, // level 15
  11300,// level 16
  12850,// level 17
  14500,// level 18
  16250,// level 19
  18100,// level 20
];

/**
 * Convert XP total to level.
 */
export function levelForXp(xp: number): number {
  for (let i = XP_PER_LEVEL.length - 1; i >= 1; i--) {
    if (xp >= XP_PER_LEVEL[i]) return i;
  }
  return 1;
}

/**
 * XP needed to reach next level.
 */
export function xpToNextLevel(xp: number): number {
  const level = levelForXp(xp);
  const nextLevel = level + 1;
  if (nextLevel >= XP_PER_LEVEL.length) return 0; // max level
  return XP_PER_LEVEL[nextLevel] - xp;
}

/**
 * Progress percentage to next level (0‑100).
 */
export function levelProgress(xp: number): number {
  const level = levelForXp(xp);
  const nextLevel = level + 1;
  if (nextLevel >= XP_PER_LEVEL.length) return 100;
  const currentLevelXp = XP_PER_LEVEL[level];
  const nextLevelXp = XP_PER_LEVEL[nextLevel];
  const range = nextLevelXp - currentLevelXp;
  const progress = xp - currentLevelXp;
  return Math.min(100, Math.max(0, (progress / range) * 100));
}