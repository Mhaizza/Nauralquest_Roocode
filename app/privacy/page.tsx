"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#050510] cyber-grid flex flex-col">
      <Navbar />

      <main className="flex-grow pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <div className="text-xs text-cyan-500 tracking-[0.3em] font-bold mb-2 uppercase" style={{ fontFamily: "var(--font-mono)" }}>
              // PRIVACY_PROTOCOL_01
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4" style={{ fontFamily: "var(--font-orbitron)" }}>
              PRIVACY <span className="neon-text-pink">POLICY</span>
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-full mb-6"></div>
            <p className="text-gray-500 text-sm tracking-widest uppercase" style={{ fontFamily: "var(--font-mono)" }}>
              Last Updated: May 2026
            </p>
          </div>

          {/* Content */}
          <div className="glass-card rounded-3xl p-8 md:p-12 border border-cyan-500/10 space-y-12">
            <section>
              <p className="text-gray-300 leading-relaxed">
                NeuralQuest (“we”, “our”, “us”) respects your privacy and is committed to protecting your information.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                This Privacy Policy explains how we collect, use, and protect your data when you use the NeuralQuest platform.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-3" style={{ fontFamily: "var(--font-orbitron)" }}>
                <span className="text-cyan-500">01.</span> INFORMATION WE COLLECT
              </h2>
              <div className="text-gray-400 leading-relaxed space-y-6">
                <div>
                  <h3 className="text-white font-bold mb-2 uppercase text-xs tracking-[0.2em]" style={{ fontFamily: "var(--font-mono)" }}>Account Information</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>email address</li>
                    <li>username</li>
                    <li>profile information</li>
                    <li>authentication provider information</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-white font-bold mb-2 uppercase text-xs tracking-[0.2em]" style={{ fontFamily: "var(--font-mono)" }}>Gameplay Data</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>XP</li>
                    <li>levels</li>
                    <li>mission progress</li>
                    <li>achievements</li>
                    <li>rewards</li>
                    <li>session activity</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-white font-bold mb-2 uppercase text-xs tracking-[0.2em]" style={{ fontFamily: "var(--font-mono)" }}>Technical Information</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>browser type</li>
                    <li>device information</li>
                    <li>IP address</li>
                    <li>pages visited</li>
                    <li>crash logs</li>
                    <li>analytics events</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-white font-bold mb-2 uppercase text-xs tracking-[0.2em]" style={{ fontFamily: "var(--font-mono)" }}>AI Interaction Data</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>prompts submitted</li>
                    <li>mission responses</li>
                    <li>AI-generated outputs</li>
                    <li>gameplay interactions</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-3" style={{ fontFamily: "var(--font-orbitron)" }}>
                <span className="text-cyan-500">02.</span> HOW WE USE YOUR INFORMATION
              </h2>
              <div className="text-gray-400 leading-relaxed">
                <p className="mb-4">We use collected data to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>operate the platform</li>
                  <li>save player progress</li>
                  <li>improve gameplay systems</li>
                  <li>enhance AI responses</li>
                  <li>prevent abuse and fraud</li>
                  <li>analyze platform performance</li>
                  <li>provide support</li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-3" style={{ fontFamily: "var(--font-orbitron)" }}>
                <span className="text-cyan-500">03.</span> ANALYTICS AND COOKIES
              </h2>
              <div className="text-gray-400 leading-relaxed">
                <p className="mb-4">We may use:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>analytics tools</li>
                  <li>cookies</li>
                  <li>local storage</li>
                  <li>session identifiers</li>
                </ul>
                <p className="mt-4">to improve user experience and monitor platform health.</p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-3" style={{ fontFamily: "var(--font-orbitron)" }}>
                <span className="text-cyan-500">04.</span> THIRD-PARTY SERVICES
              </h2>
              <div className="text-gray-400 leading-relaxed">
                <p className="mb-4">We may use third-party services including:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Vercel</li>
                  <li>Supabase</li>
                  <li>OpenAI-compatible providers</li>
                  <li>analytics providers</li>
                  <li>authentication providers</li>
                </ul>
                <p className="mt-4">These services may process limited data necessary for functionality.</p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-3" style={{ fontFamily: "var(--font-orbitron)" }}>
                <span className="text-cyan-500">05.</span> DATA STORAGE
              </h2>
              <div className="text-gray-400 leading-relaxed">
                <p>Data may be stored securely using cloud infrastructure providers.</p>
                <p className="mt-4">We implement reasonable safeguards to protect user information, but no system can guarantee absolute security.</p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-3" style={{ fontFamily: "var(--font-orbitron)" }}>
                <span className="text-cyan-500">06.</span> AI CONTENT
              </h2>
              <div className="text-gray-400 leading-relaxed">
                <p className="mb-4">AI-generated content may be processed temporarily to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>evaluate gameplay</li>
                  <li>generate responses</li>
                  <li>improve systems</li>
                  <li>moderate abuse</li>
                </ul>
                <p className="mt-4 font-bold text-pink-400 italic">Do not submit sensitive personal information into AI prompts.</p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-3" style={{ fontFamily: "var(--font-orbitron)" }}>
                <span className="text-cyan-500">07.</span> USER RIGHTS
              </h2>
              <div className="text-gray-400 leading-relaxed">
                <p className="mb-4">Depending on your jurisdiction, you may request:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>access to your data</li>
                  <li>correction of your data</li>
                  <li>deletion of your account</li>
                  <li>export of your information</li>
                </ul>
                <p className="mt-4">Requests can be sent to:</p>
                <a href="mailto:support@mptanalytics.com" className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4 transition-colors" style={{ fontFamily: "var(--font-mono)" }}>
                  support@mptanalytics.com
                </a>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-3" style={{ fontFamily: "var(--font-orbitron)" }}>
                <span className="text-cyan-500">08.</span> CHILDREN’S PRIVACY
              </h2>
              <div className="text-gray-400 leading-relaxed">
                <p>NeuralQuest is not intended for children under 13.</p>
                <p className="mt-4">We do not knowingly collect personal information from children under applicable legal age requirements.</p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-3" style={{ fontFamily: "var(--font-orbitron)" }}>
                <span className="text-cyan-500">09.</span> CHANGES TO THIS POLICY
              </h2>
              <div className="text-gray-400 leading-relaxed">
                <p>We may update this Privacy Policy periodically.</p>
                <p className="mt-4">Continued use of the platform after updates means you accept the revised policy.</p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-3" style={{ fontFamily: "var(--font-orbitron)" }}>
                <span className="text-cyan-500">10.</span> CONTACT
              </h2>
              <p className="text-gray-400 leading-relaxed">
                For privacy-related inquiries:
              </p>
              <a href="mailto:support@mptanalytics.com" className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4 transition-colors" style={{ fontFamily: "var(--font-mono)" }}>
                support@mptanalytics.com
              </a>
            </section>
          </div>

          <div className="mt-12 text-center">
            <button 
              onClick={() => window.history.back()}
              className="btn-neon-cyan px-8 py-3 text-xs font-bold tracking-widest rounded-xl"
              style={{ fontFamily: "var(--font-orbitron)" }}
            >
              ← RETURN TO PREVIOUS PAGE
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
