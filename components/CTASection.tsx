import Link from "next/link";

export default function CTASection() {
  return (
    <section className="landing-section pb-24" aria-labelledby="cta-heading">
      <div className="landing-container">
        <div
          className="relative rounded-3xl overflow-hidden text-center px-6 py-12 sm:px-12 sm:py-16"
          style={{
            background:
              "linear-gradient(135deg, rgba(0,245,255,0.08) 0%, rgba(5,5,16,0.95) 45%, rgba(255,0,128,0.06) 100%)",
            border: "1px solid rgba(0, 245, 255, 0.22)",
            boxShadow: "0 0 48px rgba(0, 245, 255, 0.08)",
          }}
        >
          <div className="absolute inset-0 cyber-grid opacity-[0.12] pointer-events-none" />

          <div className="relative z-10 max-w-xl mx-auto space-y-6">
            <p className="landing-eyebrow" style={{ color: "#ff0080" }}>
              Ready to begin
            </p>
            <h2 id="cta-heading" className="landing-heading text-3xl sm:text-4xl">
              Start your <span className="neon-text-cyan-subtle">neural journey</span>
            </h2>
            <p className="text-white/60 text-sm sm:text-base leading-relaxed">
              Enter the dashboard, pick a hero, and complete your first mission in
              minutes. No install required.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 pt-2">
              <Link href="/dashboard" className="btn-primary-cta">
                ▶ Start Playing
              </Link>
              <Link href="/heroes" className="btn-secondary-cta">
                Choose Hero
              </Link>
            </div>

            <p
              className="text-xs text-white/40 pt-2"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Questions?{" "}
              <a
                href="mailto:support@mptanalytics.com"
                className="text-cyan-400 hover:text-pink-400 transition-colors underline underline-offset-4"
              >
                support@mptanalytics.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
