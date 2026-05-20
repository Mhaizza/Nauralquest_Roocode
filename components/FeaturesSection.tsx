const FEATURES = [
  {
    icon: "⚔️",
    title: "Mission-Based Learning",
    description:
      "Complete cyberpunk quests that teach real AI skills — from prompts to neural networks.",
    accent: "#00f5ff",
  },
  {
    icon: "🧙",
    title: "Choose Your Hero",
    description:
      "Pick a class aligned with your goals. Each hero unlocks a unique learning path.",
    accent: "#bf00ff",
  },
  {
    icon: "📈",
    title: "Track Your Progress",
    description:
      "Earn XP, level skills, and visualize growth with a game-style player profile.",
    accent: "#00ff88",
  },
  {
    icon: "🎮",
    title: "Free to Start",
    description:
      "Jump in without friction. Core missions and heroes are available at no cost.",
    accent: "#ff0080",
  },
];

export default function FeaturesSection() {
  return (
    <section className="landing-section" aria-labelledby="features-heading">
      <div className="landing-container">
        <header className="landing-section-header">
          <p className="landing-eyebrow" style={{ color: "#00f5ff" }}>
            Why NeuralQuest
          </p>
          <h2 id="features-heading" className="landing-heading">
            Learn AI the <span className="text-cyan-400">fun way</span>
          </h2>
          <p className="landing-subheading">
            A premium learning experience wrapped in a cyberpunk RPG — structured,
            interactive, and built for beginners.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4 max-w-4xl mx-auto">
          {FEATURES.map((feature) => (
            <article
              key={feature.title}
              className="landing-card group p-6 sm:p-7 flex gap-4"
            >
              <div
                className="w-12 h-12 shrink-0 rounded-xl flex items-center justify-center text-2xl transition-transform duration-300 group-hover:scale-105"
                style={{
                  background: `${feature.accent}12`,
                  border: `1px solid ${feature.accent}30`,
                  boxShadow: `0 0 20px ${feature.accent}15`,
                }}
              >
                {feature.icon}
              </div>
              <div className="min-w-0">
                <h3
                  className="text-base font-bold text-white mb-2 tracking-wide"
                  style={{ fontFamily: "var(--font-orbitron)" }}
                >
                  {feature.title}
                </h3>
                <p className="text-sm text-white/55 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
