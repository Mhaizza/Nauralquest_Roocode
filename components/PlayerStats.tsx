"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Bot, Flame, Gem, Trophy, Wand2, Zap } from "lucide-react";

const ACTIVE_HERO = {
  Icon: Wand2,
  name: "Prompt Mage",
  title: "Weaver of Words",
  color: "#00e5ff",
  faction: "Free AI Collective",
};

const SKILLS = [
  { name: "Prompt Engineering", level: 4, max: 5, color: "#00e5ff" },
  { name: "Machine Learning", level: 3, max: 5, color: "#e040fb" },
  { name: "Data Science", level: 2, max: 5, color: "#00ff88" },
  { name: "Neural Networks", level: 1, max: 5, color: "#ff0080" },
];

const ACHIEVEMENTS = [
  { Icon: Trophy, value: "12", label: "Missions done" },
  { Icon: Flame, value: "6", label: "Day streak" },
  { Icon: Gem, value: "340", label: "Credits" },
];

function SectionLabel({ text }: { text: string }) {
  return (
    <div className="text-xs font-semibold tracking-wide mb-3 flex items-center gap-2 text-[var(--nq-muted)] font-mono-label">
      <span className="inline-block w-4 h-px bg-[var(--nq-cyan)]/40" />
      {text}
      <span className="flex-1 h-px bg-white/10" />
    </div>
  );
}

function ProgressBar({
  value,
  max,
  color,
  delay = 0,
}: {
  value: number;
  max: number;
  color: string;
  delay?: number;
}) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth((value / max) * 100);
    }, delay);
    return () => clearTimeout(timer);
  }, [value, max, delay]);

  return (
    <div className="nq-progress-track">
      <div
        className="nq-progress-fill"
        style={{
          width: `${width}%`,
          background: `linear-gradient(90deg, ${color}88, ${color})`,
          boxShadow: `0 0 6px ${color}44`,
        }}
      />
    </div>
  );
}

function SkillRow({
  name,
  level,
  max,
  color,
  delay,
}: {
  name: string;
  level: number;
  max: number;
  color: string;
  delay: number;
}) {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between gap-3 text-xs">
        <span className="font-medium" style={{ color }}>
          {name}
        </span>
        <span className="text-[var(--nq-muted)] font-mono-label">
          {level}/{max}
        </span>
      </div>
      <ProgressBar value={level} max={max} color={color} delay={delay} />
    </div>
  );
}

export default function PlayerStats() {
  const HeroIcon = ACTIVE_HERO.Icon;

  return (
    <section className="landing-section">
      <div className="landing-container">
        <header className="landing-section-header">
          <p className="landing-eyebrow">// player_profile.sys</p>
          <h2 className="landing-heading font-display">
            Your <span className="text-[var(--nq-cyan)]">stats</span>
          </h2>
          <p className="landing-subheading">
            ติดตามความก้าวหน้า สะสม XP และอัปเลเวลทักษะ AI ของคุณ
          </p>
        </header>

        <div className="nq-card overflow-hidden relative max-w-4xl mx-auto">
          <div className="absolute top-0 left-0 w-8 h-8 pointer-events-none border-t-2 border-l-2 border-[var(--nq-cyan)]/30 rounded-tl-2xl" />
          <div className="absolute bottom-0 right-0 w-8 h-8 pointer-events-none border-b-2 border-r-2 border-[var(--nq-cyan)]/30 rounded-br-2xl" />

          <div className="p-5 sm:p-7">
            {/* Active hero row */}
            <div
              className="flex items-center gap-4 p-4 rounded-xl mb-6"
              style={{
                background: `${ACTIVE_HERO.color}08`,
                border: `1px solid ${ACTIVE_HERO.color}22`,
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                style={{
                  background: `${ACTIVE_HERO.color}12`,
                  border: `1px solid ${ACTIVE_HERO.color}33`,
                }}
              >
                <HeroIcon className="w-6 h-6" style={{ color: ACTIVE_HERO.color }} aria-hidden />
              </div>

              <div className="flex-1 min-w-0">
                <div className="text-xs text-[var(--nq-muted)] mb-0.5">
                  Active hero · {ACTIVE_HERO.faction}
                </div>
                <div className="text-base font-bold text-white">{ACTIVE_HERO.name}</div>
                <div className="text-xs text-[var(--nq-muted)] italic">
                  &ldquo;{ACTIVE_HERO.title}&rdquo;
                </div>
              </div>

              <Link
                href="/heroes"
                className="shrink-0 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors duration-200 cursor-pointer focus-ring"
                style={{
                  background: `${ACTIVE_HERO.color}12`,
                  border: `1px solid ${ACTIVE_HERO.color}33`,
                  color: ACTIVE_HERO.color,
                }}
              >
                Change
              </Link>
            </div>

            {/* 2-column grid on desktop */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-6 lg:gap-8">
              {/* Left: profile + energy */}
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="relative shrink-0">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center"
                      style={{
                        background: "linear-gradient(135deg, rgba(0,229,255,0.12), rgba(224,64,251,0.08))",
                        border: "1px solid var(--nq-border)",
                      }}
                    >
                      <Bot className="w-7 h-7 text-[var(--nq-cyan)]" aria-hidden />
                    </div>
                    <div
                      className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                      style={{
                        background: "var(--nq-bg)",
                        border: "2px solid var(--nq-cyan)",
                        color: "var(--nq-cyan)",
                      }}
                    >
                      7
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="text-lg font-bold text-white font-display">AGENT_001</span>
                      <span
                        className="text-[10px] px-2 py-0.5 rounded-full border font-semibold"
                        style={{
                          color: "#ff0080",
                          borderColor: "rgba(255,0,128,0.3)",
                          background: "rgba(255,0,128,0.1)",
                        }}
                      >
                        Hacker
                      </span>
                    </div>
                    <div className="text-xs text-[var(--nq-muted)] mb-3">
                      Level 7 — Neural Initiate
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex justify-between text-xs">
                        <span className="text-[var(--nq-muted)]">XP progress</span>
                        <span className="text-[var(--nq-cyan)] font-mono-label">2,450 / 5,000</span>
                      </div>
                      <ProgressBar value={2450} max={5000} color="#00e5ff" delay={200} />
                      <div className="text-[10px] text-[var(--nq-muted)] text-right">
                        550 XP to level 8
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="flex items-center gap-3 p-4 rounded-xl"
                  style={{
                    background: "rgba(250,204,21,0.06)",
                    border: "1px solid rgba(250,204,21,0.2)",
                  }}
                >
                  <Zap className="w-5 h-5 text-yellow-400 shrink-0" aria-hidden />
                  <div>
                    <div className="text-xl font-black text-yellow-400 font-display">4/5</div>
                    <div className="text-xs text-[var(--nq-muted)]">Energy</div>
                  </div>
                </div>
              </div>

              {/* Right: skill tree */}
              <div>
                <SectionLabel text="Skill tree" />
                <div className="space-y-4">
                  {SKILLS.map((skill, i) => (
                    <SkillRow key={skill.name} {...skill} delay={300 + i * 100} />
                  ))}
                </div>
              </div>
            </div>

            <div className="my-6 border-t border-[var(--nq-border)]" />

            <div>
              <SectionLabel text="Achievements" />
              <div className="grid grid-cols-3 gap-3">
                {ACHIEVEMENTS.map(({ Icon, value, label }) => (
                  <div
                    key={label}
                    className="text-center py-4 px-2 rounded-xl bg-white/[0.03] border border-white/[0.07]"
                  >
                    <Icon className="w-5 h-5 mx-auto mb-2 text-[var(--nq-cyan)]" aria-hidden />
                    <div className="text-lg font-bold text-white font-display">{value}</div>
                    <div className="text-[10px] text-[var(--nq-muted)] mt-0.5">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
