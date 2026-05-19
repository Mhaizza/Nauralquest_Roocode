"use client";

import Navbar from "@/components/Navbar";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-[#050510] cyber-grid flex flex-col">
      <Navbar />

      <main className="flex-grow pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-3xl p-8 md:p-12 border border-cyan-500/10 space-y-8">
            <section>
              <p className="text-gray-300 leading-relaxed">
                Welcome to NeuralQuest.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                By accessing or using NeuralQuest ("the Platform"), you agree to these Terms of Service ("Terms"). If you do not agree, please do not use the Platform.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-3" style={{ fontFamily: "var(--font-orbitron)" }}>
                <span className="text-cyan-500">01.</span> ABOUT NEURALQUEST
              </h2>
              <div className="text-gray-400 leading-relaxed space-y-3">
                <p>NeuralQuest is an interactive AI learning and gamified educational platform designed to help users explore artificial intelligence concepts through missions, simulations, challenges, and gameplay systems.</p>
                <p>The Platform may evolve over time and features may change without prior notice.</p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-3" style={{ fontFamily: "var(--font-orbitron)" }}>
                <span className="text-cyan-500">02.</span> ELIGIBILITY
              </h2>
              <div className="text-gray-400 leading-relaxed space-y-3">
                <p>You must be at least 13 years old to use the Platform.</p>
                <p>If you are under the age required by your local laws to consent to online services, you must use the Platform under supervision of a parent or legal guardian.</p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-3" style={{ fontFamily: "var(--font-orbitron)" }}>
                <span className="text-cyan-500">03.</span> USER ACCOUNTS
              </h2>
              <div className="text-gray-400 leading-relaxed space-y-4">
                <div>
                  <p className="text-white font-bold mb-2 uppercase text-xs tracking-[0.2em]" style={{ fontFamily: "var(--font-mono)" }}>Your Responsibilities</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>maintaining the security of your account</li>
                    <li>protecting your login credentials</li>
                    <li>all activities performed under your account</li>
                  </ul>
                </div>
                <div>
                  <p className="text-white font-bold mb-2 uppercase text-xs tracking-[0.2em]" style={{ fontFamily: "var(--font-mono)" }}>Account Termination</p>
                  <p className="mb-2">We reserve the right to suspend or terminate accounts involved in:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>abuse</li>
                    <li>cheating</li>
                    <li>exploitation</li>
                    <li>fraud</li>
                    <li>malicious automation</li>
                    <li>harassment</li>
                    <li>illegal activity</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-3" style={{ fontFamily: "var(--font-orbitron)" }}>
                <span className="text-cyan-500">04.</span> ACCEPTABLE USE
              </h2>
              <div className="text-gray-400 leading-relaxed space-y-3">
                <p className="font-bold text-white">You agree NOT to:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>exploit bugs or vulnerabilities</li>
                  <li>attempt unauthorized access</li>
                  <li>disrupt servers or infrastructure</li>
                  <li>upload malicious code</li>
                  <li>reverse engineer protected systems</li>
                  <li>use the Platform for illegal purposes</li>
                  <li>harass or harm other users</li>
                  <li>generate unlawful or abusive AI content</li>
                </ul>
                <p className="mt-4">We may restrict or remove content that violates these Terms.</p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-3" style={{ fontFamily: "var(--font-orbitron)" }}>
                <span className="text-cyan-500">05.</span> AI-GENERATED CONTENT
              </h2>
              <div className="text-gray-400 leading-relaxed space-y-3">
                <p>NeuralQuest may provide AI-generated responses, suggestions, simulations, or educational feedback.</p>
                <p className="font-bold text-white">AI outputs:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>may contain inaccuracies</li>
                  <li>are provided for educational and entertainment purposes</li>
                  <li>should not be treated as professional, legal, medical, or financial advice</li>
                </ul>
                <p className="mt-4">Users remain responsible for how they use AI-generated content.</p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-3" style={{ fontFamily: "var(--font-orbitron)" }}>
                <span className="text-cyan-500">06.</span> USER CONTENT
              </h2>
              <div className="text-gray-400 leading-relaxed space-y-3">
                <p>You retain ownership of prompts, text, and content you submit.</p>
                <p>However, by using the Platform, you grant NeuralQuest a non-exclusive license to:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>store</li>
                  <li>process</li>
                  <li>display</li>
                  <li>analyze</li>
                </ul>
                <p className="mt-4">such content for platform functionality, moderation, analytics, and improvement purposes.</p>
                <p className="mt-4">We do not claim ownership of your original creations.</p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-3" style={{ fontFamily: "var(--font-orbitron)" }}>
                <span className="text-cyan-500">07.</span> VIRTUAL CURRENCY AND REWARDS
              </h2>
              <div className="text-gray-400 leading-relaxed space-y-3">
                <p>The Platform may include:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>XP</li>
                  <li>credits</li>
                  <li>ranks</li>
                  <li>unlockables</li>
                  <li>virtual rewards</li>
                </ul>
                <p className="mt-4 font-bold text-white">These items:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>have no real-world monetary value</li>
                  <li>are non-transferable</li>
                  <li>may be modified or removed at any time</li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-3" style={{ fontFamily: "var(--font-orbitron)" }}>
                <span className="text-cyan-500">08.</span> AVAILABILITY
              </h2>
              <div className="text-gray-400 leading-relaxed space-y-3">
                <p>We do not guarantee uninterrupted availability.</p>
                <p>Features may be:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>updated</li>
                  <li>modified</li>
                  <li>disabled</li>
                  <li>removed</li>
                </ul>
                <p className="mt-4">Temporary downtime, maintenance, or service interruptions may occur without notice.</p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-3" style={{ fontFamily: "var(--font-orbitron)" }}>
                <span className="text-cyan-500">09.</span> INTELLECTUAL PROPERTY
              </h2>
              <div className="text-gray-400 leading-relaxed space-y-3">
                <p>All platform branding, systems, visuals, UI, code, game mechanics, and original content belong to NeuralQuest unless otherwise stated.</p>
                <p>You may not:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>copy</li>
                  <li>redistribute</li>
                  <li>resell</li>
                  <li>commercially exploit</li>
                </ul>
                <p className="mt-4">any part of the Platform without permission.</p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-3" style={{ fontFamily: "var(--font-orbitron)" }}>
                <span className="text-cyan-500">10.</span> PRIVACY
              </h2>
              <div className="text-gray-400 leading-relaxed space-y-3">
                <p>Your use of the Platform is also governed by our <a href="/privacy" className="text-cyan-400 hover:text-pink-400 transition-colors">Privacy Policy</a>.</p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-3" style={{ fontFamily: "var(--font-orbitron)" }}>
                <span className="text-cyan-500">11.</span> LIMITATION OF LIABILITY
              </h2>
              <div className="text-gray-400 leading-relaxed space-y-3">
                <p>To the maximum extent permitted by law, NeuralQuest shall not be liable for:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>indirect damages</li>
                  <li>loss of data</li>
                  <li>service interruptions</li>
                  <li>loss of progress</li>
                  <li>business losses</li>
                  <li>AI inaccuracies</li>
                </ul>
                <p className="mt-4">Use of the Platform is at your own risk.</p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-3" style={{ fontFamily: "var(--font-orbitron)" }}>
                <span className="text-cyan-500">12.</span> TERMINATION
              </h2>
              <div className="text-gray-400 leading-relaxed space-y-3">
                <p>We reserve the right to suspend or terminate access to the Platform at any time for violations of these Terms or misuse of the service.</p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-3" style={{ fontFamily: "var(--font-orbitron)" }}>
                <span className="text-cyan-500">13.</span> CHANGES TO THESE TERMS
              </h2>
              <div className="text-gray-400 leading-relaxed space-y-3">
                <p>We may update these Terms periodically.</p>
                <p>Continued use of the Platform after updates constitutes acceptance of the revised Terms.</p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-3" style={{ fontFamily: "var(--font-orbitron)" }}>
                <span className="text-cyan-500">14.</span> CONTACT
              </h2>
              <div className="text-gray-400 leading-relaxed space-y-3">
                <p>For questions regarding these Terms, contact:</p>
                <p className="text-cyan-400 font-mono">support@mptanalytics.com</p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
