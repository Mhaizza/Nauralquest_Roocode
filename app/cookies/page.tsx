"use client";

import Navbar from "@/components/Navbar";

export default function CookiesPolicy() {
  return (
    <div className="min-h-screen bg-[#050510] cyber-grid flex flex-col">
      <Navbar />

      <main className="flex-grow pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-3xl p-8 md:p-12 border border-cyan-500/10 space-y-8">
            <section>
              <p className="text-gray-300 leading-relaxed">
                NeuralQuest uses cookies and similar technologies to improve platform functionality and user experience.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-3" style={{ fontFamily: "var(--font-orbitron)" }}>
                <span className="text-cyan-500">01.</span> WHAT ARE COOKIES?
              </h2>
              <div className="text-gray-400 leading-relaxed space-y-3">
                <p>Cookies are small text files stored on your device that help websites remember information between visits.</p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-3" style={{ fontFamily: "var(--font-orbitron)" }}>
                <span className="text-cyan-500">02.</span> HOW WE USE COOKIES
              </h2>
              <div className="text-gray-400 leading-relaxed space-y-3">
                <p>We may use cookies to:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>keep users signed in</li>
                  <li>remember preferences</li>
                  <li>save gameplay sessions</li>
                  <li>improve platform performance</li>
                  <li>analyze traffic and usage</li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-3" style={{ fontFamily: "var(--font-orbitron)" }}>
                <span className="text-cyan-500">03.</span> TYPES OF COOKIES WE USE
              </h2>
              <div className="text-gray-400 leading-relaxed space-y-4">
                <div>
                  <h3 className="text-white font-bold mb-2 uppercase text-xs tracking-[0.2em]" style={{ fontFamily: "var(--font-mono)" }}>Essential Cookies</h3>
                  <p>Required for core platform functionality such as authentication, security, and basic navigation.</p>
                </div>
                <div>
                  <h3 className="text-white font-bold mb-2 uppercase text-xs tracking-[0.2em]" style={{ fontFamily: "var(--font-mono)" }}>Analytics Cookies</h3>
                  <p>Help us understand how users interact with the platform and identify usage patterns to improve services.</p>
                </div>
                <div>
                  <h3 className="text-white font-bold mb-2 uppercase text-xs tracking-[0.2em]" style={{ fontFamily: "var(--font-mono)" }}>Preference Cookies</h3>
                  <p>Store settings such as theme, language, or gameplay preferences to personalize your experience.</p>
                </div>
                <div>
                  <h3 className="text-white font-bold mb-2 uppercase text-xs tracking-[0.2em]" style={{ fontFamily: "var(--font-mono)" }}>Performance Cookies</h3>
                  <p>Monitor platform performance, load times, and stability to optimize the user experience.</p>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-3" style={{ fontFamily: "var(--font-orbitron)" }}>
                <span className="text-cyan-500">04.</span> MANAGING COOKIES
              </h2>
              <div className="text-gray-400 leading-relaxed space-y-3">
                <p>You can disable cookies in your browser settings. However, some features of NeuralQuest may not function properly if cookies are disabled.</p>
                <p className="text-white font-bold">Most browsers allow you to:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>view cookies stored on your device</li>
                  <li>delete specific cookies</li>
                  <li>block new cookies</li>
                  <li>clear all cookies on exit</li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-3" style={{ fontFamily: "var(--font-orbitron)" }}>
                <span className="text-cyan-500">05.</span> THIRD-PARTY COOKIES
              </h2>
              <div className="text-gray-400 leading-relaxed space-y-3">
                <p>Some third-party services integrated into NeuralQuest may use their own cookies for analytics, advertising, or functionality.</p>
                <p>We do not directly control third-party cookie behavior. We recommend reviewing their privacy policies for more information.</p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-3" style={{ fontFamily: "var(--font-orbitron)" }}>
                <span className="text-cyan-500">06.</span> LOCAL STORAGE AND SIMILAR TECHNOLOGIES
              </h2>
              <div className="text-gray-400 leading-relaxed space-y-3">
                <p>We may also use local storage, session storage, and other similar technologies to store data on your device for improved functionality.</p>
                <p>These technologies work similar to cookies and can be managed through your browser settings.</p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-3" style={{ fontFamily: "var(--font-orbitron)" }}>
                <span className="text-cyan-500">07.</span> COOKIE RETENTION
              </h2>
              <div className="text-gray-400 leading-relaxed space-y-3">
                <p>Some cookies expire after a session ends, while others may persist for extended periods to maintain your preferences and login status.</p>
                <p>You can clear cookies at any time through your browser settings, which may log you out and reset personalized settings.</p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-3" style={{ fontFamily: "var(--font-orbitron)" }}>
                <span className="text-cyan-500">08.</span> UPDATES TO THIS POLICY
              </h2>
              <div className="text-gray-400 leading-relaxed space-y-3">
                <p>We may update this Cookie Policy periodically to reflect changes in our practices or technology.</p>
                <p>Continued use of the Platform constitutes acceptance of any updates to this policy.</p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-3" style={{ fontFamily: "var(--font-orbitron)" }}>
                <span className="text-cyan-500">09.</span> CONTACT
              </h2>
              <div className="text-gray-400 leading-relaxed space-y-3">
                <p>For questions about cookies or this policy, contact:</p>
                <p className="text-cyan-400 font-mono">support@mptanalytics.com</p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
