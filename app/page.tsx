import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PlayerStats from "@/components/PlayerStats";
import MissionsSection from "@/components/MissionsSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050510]">
      <Navbar />

      <div className="pt-16">
        <HeroSection />
        <PlayerStats />
        <MissionsSection />
      </div>

    </main>
  );
}
