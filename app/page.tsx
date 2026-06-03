import Navbar from "@/components/Navbar";
import PlatformBanner from "@/components/PlatformBanner";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import PlayerStats from "@/components/PlayerStats";
import DigitalServiceBlock from "@/components/DigitalServiceBlock";
import AboutSection from "@/components/AboutSection";
import MissionsSection from "@/components/MissionsSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--nq-bg)] bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(0,229,255,0.05),transparent),radial-gradient(ellipse_60%_40%_at_80%_100%,rgba(224,64,251,0.04),transparent)]">
      <Navbar />

      <div className="pt-24 sm:pt-28">
        <PlatformBanner />
        <HeroSection />
        <div className="landing-section--alt">
          <FeaturesSection />
        </div>
        <PlayerStats />
        <DigitalServiceBlock />
        <div className="landing-section--alt">
          <AboutSection />
        </div>
        <MissionsSection />
        <CTASection />
      </div>
    </main>
  );
}
