import Link from "next/link";
import {
  Bot,
  Brain,
  Check,
  Cog,
  Link2,
  Lock,
  PenLine,
  Scale,
  Zap,
  type LucideIcon,
} from "lucide-react";

type Difficulty = "EASY" | "MEDIUM" | "HARD" | "BOSS";

interface Mission {
  id: string;
  code: string;
  title: string;
  description: string;
  xp: number;
  difficulty: Difficulty;
  tags: string[];
  locked: boolean;
  completed: boolean;
  Icon: LucideIcon;
  href?: string;
}

const MISSIONS: Mission[] = [
  {
    id: "m1",
    code: "M-001",
    title: "What is AI?",
    description: "ค้นพบโลกของ AI — เรียนรู้พื้นฐานและแนวคิดหลักที่จะเปลี่ยนโลก",
    xp: 100,
    difficulty: "EASY",
    tags: ["AI basics", "Intro"],
    locked: false,
    completed: true,
    Icon: Brain,
    href: "/missions/what-is-ai",
  },
  {
    id: "m2",
    code: "M-002",
    title: "Machine Learning 101",
    description: "เข้าใจวิธีที่ Machine Learning ทำงาน ผ่านตัวอย่างจริงที่เข้าใจได้ง่าย",
    xp: 200,
    difficulty: "EASY",
    tags: ["ML", "Training data"],
    locked: false,
    completed: false,
    Icon: Cog,
    href: "/missions/ml-101",
  },
  {
    id: "m3",
    code: "M-003",
    title: "Neural Network Basics",
    description: "สำรวจโครงสร้าง Neural Network และเข้าใจว่า AI 'เรียนรู้' ได้อย่างไร",
    xp: 350,
    difficulty: "MEDIUM",
    tags: ["Neural net", "Deep learning"],
    locked: false,
    completed: false,
    Icon: Link2,
    href: "/missions/neural-network",
  },
  {
    id: "m4",
    code: "M-004",
    title: "Social AI Agent",
    description: "เขียน prompt ให้ AI สร้างโพสต์โซเชียลมีเดีย — ภารกิจแรกที่เล่นได้!",
    xp: 500,
    difficulty: "MEDIUM",
    tags: ["LLM", "Prompts", "Playable"],
    locked: false,
    completed: false,
    Icon: PenLine,
    href: "/missions/social-post",
  },
  {
    id: "m5",
    code: "M-005",
    title: "AI Ethics Protocol",
    description: "ทำความเข้าใจจริยธรรม bias และความรับผิดชอบในยุค AI",
    xp: 400,
    difficulty: "HARD",
    tags: ["Ethics", "Bias", "Safety"],
    locked: true,
    completed: false,
    Icon: Scale,
  },
  {
    id: "m6",
    code: "BOSS-01",
    title: "AI BOSS: Build a Chatbot",
    description: "สร้าง AI Chatbot ของคุณเองตั้งแต่ต้น — การทดสอบขั้นสูงสุดของทักษะคุณ",
    xp: 1000,
    difficulty: "BOSS",
    tags: ["Project", "Chatbot", "Final"],
    locked: true,
    completed: false,
    Icon: Bot,
  },
];

const DIFF: Record<Difficulty, { color: string; glow: string; dim: string; label: string }> = {
  EASY: { color: "#4ade80", glow: "rgba(74,222,128,0.5)", dim: "rgba(74,222,128,0.07)", label: "Easy" },
  MEDIUM: { color: "#facc15", glow: "rgba(250,204,21,0.5)", dim: "rgba(250,204,21,0.07)", label: "Medium" },
  HARD: { color: "#fb923c", glow: "rgba(251,146,60,0.5)", dim: "rgba(251,146,60,0.07)", label: "Hard" },
  BOSS: { color: "#ff0080", glow: "rgba(255,0,128,0.6)", dim: "rgba(255,0,128,0.08)", label: "Boss" },
};

function MissionCard({ mission }: { mission: Mission }) {
  const d = DIFF[mission.difficulty];
  const isBoss = mission.difficulty === "BOSS";
  const MissionIcon = mission.Icon;

  return (
    <div
      className={`relative rounded-xl overflow-hidden transition-all duration-200 group nq-card ${
        mission.locked ? "opacity-50 cursor-not-allowed" : "cursor-pointer hover:border-[var(--nq-cyan)]/35"
      }`}
      style={{
        background: mission.locked
          ? undefined
          : `linear-gradient(140deg, ${d.dim} 0%, rgba(18,24,40,0.97) 60%)`,
        borderColor: mission.locked ? undefined : `${d.color}30`,
        boxShadow: mission.completed ? "0 0 12px rgba(74,222,128,0.08)" : undefined,
      }}
    >
      <div className="p-4 sm:p-5">
        <div className="flex items-start gap-4">
          <div
            className="w-11 h-11 shrink-0 rounded-xl flex items-center justify-center"
            style={{
              background: mission.completed ? "rgba(74,222,128,0.12)" : d.dim,
              border: `1px solid ${mission.completed ? "rgba(74,222,128,0.3)" : `${d.color}30`}`,
            }}
          >
            {mission.locked ? (
              <Lock className="w-5 h-5 text-[var(--nq-muted)]" aria-hidden />
            ) : (
              <MissionIcon className="w-5 h-5" style={{ color: d.color }} aria-hidden />
            )}
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1.5 flex-wrap">
              <span className="text-[10px] text-[var(--nq-muted)] font-mono-label">{mission.code}</span>
              <span
                className="text-[10px] px-2 py-0.5 rounded-full border font-semibold"
                style={{
                  color: d.color,
                  borderColor: `${d.color}40`,
                  background: `${d.color}12`,
                }}
              >
                {d.label}
              </span>
              {mission.completed && (
                <span className="text-[10px] px-2 py-0.5 rounded-full border font-semibold text-green-400 border-green-400/30 bg-green-400/10 inline-flex items-center gap-1">
                  <Check className="w-3 h-3" aria-hidden />
                  Done
                </span>
              )}
            </div>

            <h3
              className={`font-bold text-sm sm:text-base mb-1.5 tracking-wide ${
                mission.completed ? "text-white/40 line-through" : isBoss ? "" : "text-white"
              }`}
              style={isBoss && !mission.locked ? { color: d.color } : undefined}
            >
              {mission.title}
            </h3>

            <p className="text-xs text-[var(--nq-muted)] mb-3 leading-relaxed">{mission.description}</p>

            <div className="flex flex-wrap gap-1.5 mb-3">
              {mission.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-[var(--nq-muted)]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-yellow-400">
                <Zap className="w-4 h-4" aria-hidden />
                <span className="text-xs font-bold">+{mission.xp} XP</span>
              </div>

              {!mission.locked && !mission.completed && mission.href && (
                <Link
                  href={mission.href}
                  className="text-xs px-3 py-1.5 rounded-lg border font-semibold transition-colors duration-200 cursor-pointer focus-ring"
                  style={{
                    color: d.color,
                    borderColor: `${d.color}40`,
                    background: `${d.color}10`,
                  }}
                >
                  Start
                </Link>
              )}

              {!mission.locked && !mission.completed && !mission.href && (
                <span className="text-xs px-3 py-1.5 rounded-lg border border-white/10 text-[var(--nq-muted)]">
                  Coming soon
                </span>
              )}

              {mission.completed && mission.href && (
                <Link
                  href={mission.href}
                  className="text-xs px-3 py-1.5 rounded-lg border font-semibold text-green-400 border-green-400/30 bg-green-400/10 transition-colors duration-200 cursor-pointer focus-ring"
                >
                  Replay
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MissionsSection() {
  const available = MISSIONS.filter((m) => !m.locked).length;
  const completed = MISSIONS.filter((m) => m.completed).length;
  const locked = MISSIONS.length - available;

  return (
    <section id="missions" className="landing-section scroll-mt-28">
      <div className="landing-container">
        <header className="landing-section-header">
          <p className="landing-eyebrow">// mission_board.sys</p>
          <h2 className="landing-heading font-display">
            Active <span style={{ color: "#ff0080" }}>missions</span>
          </h2>
          <p className="landing-subheading mb-4">
            เลือกภารกิจ เรียนรู้ทักษะ AI และสะสม XP เพื่ออัปเลเวล
          </p>

          <div className="flex items-center justify-center gap-3 flex-wrap">
            <span className="text-xs px-3 py-1 rounded-full font-semibold text-[var(--nq-cyan)] bg-[var(--nq-cyan)]/10 border border-[var(--nq-border)]">
              {available} available
            </span>
            <span className="text-xs px-3 py-1 rounded-full font-semibold text-green-400 bg-green-400/10 border border-green-400/25">
              {completed} completed
            </span>
            <span className="text-xs px-3 py-1 rounded-full font-semibold text-[var(--nq-muted)] bg-white/[0.04] border border-white/[0.08]">
              {locked} locked
            </span>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {MISSIONS.map((mission) => (
            <MissionCard key={mission.id} mission={mission} />
          ))}
        </div>
      </div>
    </section>
  );
}
