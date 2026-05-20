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
    <main className="min-h-screen bg-[#050510]">
      <Navbar />

      <div className="pt-16">
        <PlatformBanner />
        <HeroSection />
        <FeaturesSection />
        <PlayerStats />
        <DigitalServiceBlock />
        <AboutSection />
        <MissionsSection />
        <CTASection />
      </div>
    </main>
  );
}
