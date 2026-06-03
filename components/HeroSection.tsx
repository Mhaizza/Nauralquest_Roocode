"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Cog,
  Play,
  Sparkles,
  Sword,
  Target,
  Wand2,
  Zap,
  type LucideIcon,
} from "lucide-react";

type HeroPreview = {
  Icon: LucideIcon;
  name: string;
  color: string;
};

const HERO_PREVIEWS: HeroPreview[] = [
  { Icon: Wand2, name: "Prompt Mage", color: "#00e5ff" },
  { Icon: Target, name: "Data Hunter", color: "#ff6b00" },
  { Icon: Cog, name: "Auto Engineer", color: "#00ff88" },
  { Icon: Sword, name: "Neural Assassin", color: "#ff0080" },
  { Icon: Sparkles, name: "Creator Idol", color: "#e040fb" },
];

const ROTATING_LINES = [
  "Learn AI through combat",
  "Complete missions. Gain XP.",
  "Evolve your AI knowledge",
];

export default function HeroSection() {
  const [lineIndex, setLineIndex] = useState(0);
  const [activeHero, setActiveHero] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setLineIndex((i) => (i + 1) % ROTATING_LINES.length);
    }, 3200);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t = setInterval(() => {
      setActiveHero((h) => (h + 1) % HERO_PREVIEWS.length);
    }, 2800);
    return () => clearInterval(t);
  }, []);

  const hero = HERO_PREVIEWS[activeHero];

  return (
    <section className="relative overflow-hidden border-b border-[var(--nq-border)]">
      <div className="absolute inset-0 cyber-grid opacity-[0.12] pointer-events-none" />
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[min(100%,480px)] h-48 rounded-full blur-3xl pointer-events-none opacity-15 transition-colors duration-700"
        style={{ background: hero.color }}
      />

      <div className="landing-container relative z-10 py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto text-center">
          {/* Layer 1: status badge */}
          <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full border border-[var(--nq-border)] bg-[var(--nq-cyan)]/5">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--nq-cyan)] animate-glow-pulse" />
            <span className="text-xs text-[var(--nq-cyan)] font-mono-label">
              System online — beta access open
            </span>
          </div>

          {/* Layer 2: title + tagline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-wide mb-4 font-display">
            <span className="neon-text-cyan-subtle">NEURAL</span>
            <br />
            <span className="neon-text-pink-subtle">QUEST</span>
          </h1>

          <p
            key={lineIndex}
            className="text-base sm:text-lg text-[var(--nq-muted)] mb-6 h-7 transition-opacity duration-500 font-mono-label"
          >
            {ROTATING_LINES[lineIndex]}
          </p>

          <p className="text-[var(--nq-muted)] text-sm sm:text-base max-w-lg mx-auto mb-8 leading-relaxed">
            แพลตฟอร์มเรียนรู้ AI สไตล์ Cyberpunk RPG — เลือกฮีโร่ ทำภารกิจ และอัปเลเวลทักษะ AI ของคุณ
          </p>

          {/* Layer 3: primary CTA */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 mb-10">
            <Link
              href="/heroes"
              className="btn-primary-cta sm:min-w-[240px] cursor-pointer focus-ring inline-flex items-center justify-center gap-2"
            >
              <Zap className="w-5 h-5" aria-hidden />
              Select your hero
            </Link>
            <Link
              href="/dashboard"
              className="btn-secondary-cta sm:min-w-[200px] cursor-pointer focus-ring inline-flex items-center justify-center gap-2"
            >
              <Play className="w-4 h-4" aria-hidden />
              Enter dashboard
            </Link>
          </div>

          {/* Secondary: hero preview strip */}
          <div className="mb-3">
            <p className="text-xs text-[var(--nq-muted)] mb-3 font-mono-label">Preview heroes</p>
            <div className="flex justify-center items-end gap-2">
              {HERO_PREVIEWS.map((h, i) => {
                const isActive = i === activeHero;
                const HeroIcon = h.Icon;
                return (
                  <button
                    key={h.name}
                    type="button"
                    onClick={() => setActiveHero(i)}
                    aria-label={`Preview ${h.name}`}
                    aria-pressed={isActive}
                    className={`rounded-xl overflow-hidden transition-all duration-200 cursor-pointer focus-ring ${
                      isActive ? "scale-105" : "opacity-80 hover:opacity-100"
                    }`}
                    style={{
                      width: isActive ? 52 : 44,
                      height: isActive ? 60 : 48,
                      background: `linear-gradient(160deg, ${h.color}14, var(--nq-surface))`,
                      border: isActive
                        ? `1px solid ${h.color}55`
                        : "1px solid rgba(255,255,255,0.08)",
                      boxShadow: isActive ? `0 0 16px ${h.color}22` : "none",
                    }}
                  >
                    <span className="flex items-center justify-center h-full">
                      <HeroIcon
                        className="w-5 h-5"
                        style={{ color: isActive ? h.color : "var(--nq-muted)" }}
                        aria-hidden
                      />
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <p
            className="text-xs font-semibold mb-8 transition-colors duration-300"
            style={{ color: hero.color }}
          >
            {hero.name}
          </p>

          {/* Stats — single row at bottom of hero */}
          <div className="grid grid-cols-3 gap-4 max-w-md mx-auto pt-6 border-t border-white/10">
            {[
              { value: "5", label: "Heroes" },
              { value: "6+", label: "Missions" },
              { value: "Free", label: "To play" },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <div
                  className="text-xl sm:text-2xl font-black mb-0.5 font-display"
                  style={{ color: hero.color }}
                >
                  {value}
                </div>
                <div className="text-xs text-[var(--nq-muted)]">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
