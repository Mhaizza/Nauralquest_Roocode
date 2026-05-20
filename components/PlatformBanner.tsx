export default function PlatformBanner() {
  return (
    <section
      className="border-b border-cyan-500/10 bg-[#050510]/98"
      aria-label="Platform description"
    >
      <div className="landing-container py-3 sm:py-4">
        <div className="flex flex-col items-center sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-5 text-center">
          <p className="text-white/85 text-sm sm:text-[15px] leading-relaxed max-w-2xl mx-auto sm:mx-0">
            <span className="font-semibold text-white">MPT Analytics</span> is an
            online AI learning platform that teaches users how to use AI through
            interactive game-based lessons.
          </p>
          <p
            className="text-sm text-cyan-400/95 font-semibold shrink-0"
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
      </div>
    </section>
  );
}
