"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const HERO_PREVIEWS = [
  { avatar: "🧙‍♂️", name: "Prompt Mage", color: "#00f5ff" },
  { avatar: "🎯", name: "Data Hunter", color: "#ff6b00" },
  { avatar: "⚙️", name: "Auto Engineer", color: "#00ff88" },
  { avatar: "🗡️", name: "Neural Assassin", color: "#ff0080" },
  { avatar: "✨", name: "Creator Idol", color: "#bf00ff" },
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
    <section className="relative overflow-hidden border-b border-cyan-500/10">
      {/* Ambient background — subtle */}
      <div className="absolute inset-0 cyber-grid opacity-[0.14] pointer-events-none" />
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[min(100%,520px)] h-64 rounded-full blur-3xl pointer-events-none opacity-30 transition-colors duration-700"
        style={{ background: hero.color }}
      />

      <div className="landing-container relative z-10 py-14 sm:py-20 lg:py-24">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-3.5 py-1.5 rounded-full border border-cyan-500/25 bg-cyan-500/5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-glow-pulse" />
            <span
              className="text-[10px] sm:text-xs tracking-[0.2em] text-cyan-400/90 font-bold uppercase"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Beta access open
            </span>
          </div>

          {/* Title */}
          <h1
            className="text-4xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-wide mb-4"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            <span className="neon-text-cyan-subtle">NEURAL</span>
            <br />
            <span className="neon-text-pink-subtle">QUEST</span>
          </h1>

          {/* Rotating tagline */}
          <p
            key={lineIndex}
            className="text-sm sm:text-base text-white/55 mb-8 h-6 transition-opacity duration-500"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            {ROTATING_LINES[lineIndex]}
          </p>

          {/* Hero preview strip */}
          <div className="flex justify-center items-end gap-2 mb-8">
            {HERO_PREVIEWS.map((h, i) => {
              const isActive = i === activeHero;
              return (
                <button
                  key={h.name}
                  type="button"
                  onClick={() => setActiveHero(i)}
                  aria-label={`Preview ${h.name}`}
                  className="rounded-xl overflow-hidden transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60"
                  style={{
                    width: isActive ? 56 : 40,
                    height: isActive ? 68 : 48,
                    transform: isActive ? "translateY(-6px)" : "none",
                    background: `linear-gradient(160deg, ${h.color}18, #0a0a18)`,
                    border: isActive
                      ? `1px solid ${h.color}55`
                      : "1px solid rgba(255,255,255,0.08)",
                    boxShadow: isActive ? `0 0 20px ${h.color}33` : "none",
                  }}
                >
                  <span
                    className="flex items-center justify-center h-full text-xl sm:text-2xl select-none"
                    style={{
                      filter: isActive ? `drop-shadow(0 0 6px ${h.color})` : "none",
                    }}
                  >
                    {h.avatar}
                  </span>
                </button>
              );
            })}
          </div>
          <p
            className="text-[10px] sm:text-xs font-bold tracking-[0.2em] mb-8 transition-colors duration-300"
            style={{ color: hero.color, fontFamily: "var(--font-mono)" }}
          >
            {hero.name.toUpperCase()}
          </p>

          {/* Value prop */}
          <p className="text-white/50 text-sm sm:text-base max-w-md mx-auto mb-10 leading-relaxed">
            Cyberpunk RPG-style AI learning — choose a hero, complete missions, and
            level up your skills.
          </p>

          {/* CTAs — primary dominates */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 mb-12">
            <Link href="/dashboard" className="btn-primary-cta sm:min-w-[220px]">
              ▶ Start Playing
            </Link>
            <Link href="/heroes" className="btn-secondary-cta sm:min-w-[180px]">
              Choose Hero
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-sm mx-auto pt-6 border-t border-white/8">
            {[
              { value: "5", label: "Heroes" },
              { value: "6+", label: "Missions" },
              { value: "Free", label: "To play" },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <div
                  className="text-xl sm:text-2xl font-black text-white mb-0.5"
                  style={{ color: hero.color }}
                >
                  {value}
                </div>
                <div
                  className="text-[10px] text-white/35 tracking-widest uppercase"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
