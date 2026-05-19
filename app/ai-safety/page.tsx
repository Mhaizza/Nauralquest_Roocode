import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AISafetyPolicy() {
  return (
    <div className="min-h-screen bg-[#050510] cyber-grid flex flex-col">
      <Navbar />

      <main className="flex-grow pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <div className="text-xs text-cyan-500 tracking-[0.3em] font-bold mb-2 uppercase" style={{ fontFamily: "var(--font-mono)" }}>
              // AI_SAFETY_PROTOCOL_01
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4" style={{ fontFamily: "var(--font-orbitron)" }}>
              AI SAFETY <span className="neon-text-pink">POLICY</span>
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-full mb-6"></div>
            <p className="text-gray-500 text-sm tracking-widest uppercase" style={{ fontFamily: "var(--font-mono)" }}>
              Last Updated: May 2026
            </p>
          </div>

          {/* Content */}
          <div className="glass-card rounded-3xl p-8 md:p-12 border border-cyan-500/10 space-y-8">
            <section>
              <p className="text-gray-300 leading-relaxed">
                NeuralQuest integrates AI systems into gameplay and educational experiences.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                We are committed to responsible AI usage and transparent disclosure of AI capabilities and limitations.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-3" style={{ fontFamily: "var(--font-orbitron)" }}>
                <span className="text-cyan-500">01.</span> SAFETY PRINCIPLES
              </h2>
              <div className="text-gray-400 leading-relaxed space-y-3">
                <p>Our AI systems are designed to:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>encourage educational learning about AI</li>
                  <li>reduce harmful and abusive behavior</li>
                  <li>avoid generating dangerous or illegal content</li>
                  <li>promote ethical AI exploration</li>
                  <li>maintain user safety and privacy</li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-3" style={{ fontFamily: "var(--font-orbitron)" }}>
                <span className="text-cyan-500">02.</span> AI LIMITATIONS
              </h2>
              <div className="text-gray-400 leading-relaxed space-y-3">
                <p>AI systems are probabilistic and imperfect. Outputs may occasionally:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>be inaccurate or outdated</li>
                  <li>be incomplete or vague</li>
                  <li>contain biases</li>
                  <li>fail unexpectedly</li>
                  <li>hallucinate false information</li>
                </ul>
                <p className="mt-4">Users should verify AI-generated content and use critical thinking when engaging with gameplay and educational content.</p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-3" style={{ fontFamily: "var(--font-orbitron)" }}>
                <span className="text-cyan-500">03.</span> RESTRICTED CONTENT
              </h2>
              <div className="text-gray-400 leading-relaxed space-y-3">
                <p>AI systems on NeuralQuest may refuse to generate, assist with, or process:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>illegal instructions or activities</li>
                  <li>instructions for weapons or explosives</li>
                  <li>malware, exploits, or hacking techniques</li>
                  <li>violent extremism or radicalization</li>
                  <li>explicit sexual or adult content</li>
                  <li>harassment, bullying, or abuse</li>
                  <li>privacy violations or doxxing</li>
                  <li>fraud, scams, or deception</li>
                  <li>non-consensual intimate imagery</li>
                  <li>defamation or hate speech</li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-3" style={{ fontFamily: "var(--font-orbitron)" }}>
                <span className="text-cyan-500">04.</span> HUMAN OVERSIGHT
              </h2>
              <div className="text-gray-400 leading-relaxed space-y-3">
                <p>While AI powers NeuralQuest gameplay, human review and judgment remain important for:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>validating AI content accuracy</li>
                  <li>reviewing educational quality</li>
                  <li>moderating user behavior</li>
                  <li>addressing safety incidents</li>
                  <li>improving AI systems over time</li>
                </ul>
                <p className="mt-4">We do not rely solely on AI for decision-making in critical areas like content moderation or account termination.</p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-3" style={{ fontFamily: "var(--font-orbitron)" }}>
                <span className="text-cyan-500">05.</span> ABUSE PREVENTION
              </h2>
              <div className="text-gray-400 leading-relaxed space-y-3">
                <p>We may implement measures to prevent misuse:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>monitor abuse patterns and attempts</li>
                  <li>rate limit suspicious behavior</li>
                  <li>restrict harmful or malicious accounts</li>
                  <li>log safety-related incidents</li>
                  <li>analyze usage data for security threats</li>
                  <li>coordinate with law enforcement when necessary</li>
                </ul>
                <p className="mt-4">to protect the platform, users, and society.</p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-3" style={{ fontFamily: "var(--font-orbitron)" }}>
                <span className="text-cyan-500">06.</span> TRANSPARENCY
              </h2>
              <div className="text-gray-400 leading-relaxed space-y-3">
                <p>We are transparent about AI usage in NeuralQuest:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>players are informed when AI generates content</li>
                  <li>limitations and risks are disclosed</li>
                  <li>data collection for AI improvement is documented</li>
                  <li>safety practices are regularly reviewed</li>
                </ul>
                <p className="mt-4">If you encounter concerning AI behavior, please report it immediately.</p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-3" style={{ fontFamily: "var(--font-orbitron)" }}>
                <span className="text-cyan-500">07.</span> CONTINUOUS IMPROVEMENT
              </h2>
              <div className="text-gray-400 leading-relaxed space-y-3">
                <p>Safety systems evolve as the platform grows:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>policies and moderation systems are updated</li>
                  <li>new threats and risks are addressed</li>
                  <li>user feedback informs safety improvements</li>
                  <li>research into AI safety is prioritized</li>
                </ul>
                <p className="mt-4">Updates may occur without advance notice, but we will communicate major changes.</p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-3" style={{ fontFamily: "var(--font-orbitron)" }}>
                <span className="text-cyan-500">08.</span> BIAS AND FAIRNESS
              </h2>
              <div className="text-gray-400 leading-relaxed space-y-3">
                <p>We acknowledge that AI systems can reflect societal biases:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>we work to minimize biases in AI outputs</li>
                  <li>users should report unfair or discriminatory content</li>
                  <li>we regularly audit AI performance across demographics</li>
                  <li>continuous refinement is ongoing</li>
                </ul>
                <p className="mt-4">We do not tolerate AI-generated discriminatory content.</p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-3" style={{ fontFamily: "var(--font-orbitron)" }}>
                <span className="text-cyan-500">09.</span> REPORTING SAFETY CONCERNS
              </h2>
              <div className="text-gray-400 leading-relaxed space-y-3">
                <p>If you encounter AI-generated content that violates this policy or poses safety risks:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>report the content directly through the platform</li>
                  <li>provide context and specific details</li>
                  <li>avoid engaging with harmful content</li>
                  <li>contact support immediately if urgent</li>
                </ul>
                <p className="mt-4 text-cyan-400 font-mono">support@mptanalytics.com</p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-3" style={{ fontFamily: "var(--font-orbitron)" }}>
                <span className="text-cyan-500">10.</span> CONTACT
              </h2>
              <div className="text-gray-400 leading-relaxed space-y-3">
                <p>For questions about AI safety or this policy:</p>
                <p className="text-cyan-400 font-mono">support@mptanalytics.com</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
