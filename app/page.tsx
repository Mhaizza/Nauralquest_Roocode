import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PlayerStats from "@/components/PlayerStats";
import MissionsSection from "@/components/MissionsSection";
import DigitalServiceBlock from "@/components/DigitalServiceBlock";
import AboutSection from "@/components/AboutSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050510]">
      <Navbar />

      <div className="pt-16">
        {/* Above-fold: MPT Analytics description + contact — visible without scrolling */}
        <section
          className="px-4 py-6 border-b border-cyan-500/10 bg-[#050510]/95"
          aria-label="Platform description"
        >
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <p className="text-white/90 text-sm sm:text-base leading-relaxed">
              MPT Analytics is an online AI learning platform that teaches users
              how to use AI through interactive game-based lessons.
            </p>
            <p
              className="text-sm sm:text-base text-cyan-400 font-semibold"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Contact:{" "}
              <a
                href="mailto:support@mptanalytics.com"
                className="underline underline-offset-4 hover:text-pink-400 transition-colors"
              >
                support@mptanalytics.com
              </a>
            </p>
          </div>
        </section>

        <HeroSection />
        <PlayerStats />
        <DigitalServiceBlock />
        <AboutSection />
        <MissionsSection />
      </div>
    </main>
  );
}
