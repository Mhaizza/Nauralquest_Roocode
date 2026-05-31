import Link from "next/link";

const FOOTER_LINKS = {
  Legal: [
    { href: "/terms", label: "Terms of Service" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/refund", label: "Refund Policy" },
    { href: "/cookies", label: "Cookies" },
  ],
  About: [
    { href: "/community", label: "Community" },
    { href: "/ai-safety", label: "AI Safety" },
    { href: "/disclaimer", label: "Disclaimer" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-cyan-500/10 bg-[#050510] overflow-hidden">
      {/* Cyber grid background */}
      <div className="absolute inset-0 cyber-grid opacity-[0.06] pointer-events-none" />

      {/* Scan line animation */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/15 to-transparent" />
      </div>

      {/* Layer 1: Main Footer Content */}
      <div className="relative z-10 landing-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Column */}
          <div className="md:col-span-1 flex flex-col gap-4">
            {/* MPT ANALYTICS brand mark */}
            <div className="relative">
              <div
                className="text-xl font-black tracking-[0.15em]"
                style={{ fontFamily: "var(--font-orbitron)" }}
              >
                <span className="neon-text-cyan-subtle">MPT</span>
                <span className="neon-text-pink-subtle"> </span>
                <span className="text-white/80">ANALYTICS</span>
              </div>
              <div
                className="text-[9px] tracking-[0.3em] text-cyan-500/40 font-bold uppercase mt-0.5"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                NEURAL QUEST
              </div>
            </div>

            {/* Divider */}
            <div className="w-12 h-px bg-gradient-to-r from-cyan-500/50 to-transparent" />

            {/* Description */}
            <p
              className="text-[11px] text-gray-500 leading-relaxed"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              AI learning platform powered by gamification.
              Complete missions, earn XP, and evolve.
            </p>
          </div>

          {/* Link Columns */}
          {Object.entries(FOOTER_LINKS).map(([group, links]) => (
            <div key={group} className="flex flex-col gap-3">
              {/* Column Header */}
              <div
                className="text-[9px] tracking-[0.3em] font-bold uppercase text-cyan-500/50"
                style={{ fontFamily: "var(--font-orbitron)" }}
              >
                // {group}
              </div>
              <div className="flex flex-col gap-2">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-xs text-gray-500 hover:text-cyan-400 transition-all duration-200 hover:translate-x-1 tracking-wide"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          {/* Contact Column */}
          <div className="flex flex-col gap-3">
            <div
              className="text-[9px] tracking-[0.3em] font-bold uppercase text-cyan-500/50"
              style={{ fontFamily: "var(--font-orbitron)" }}
            >
              // Contact
            </div>
            <div className="flex flex-col gap-2">
              <a
                href="mailto:support@mptanalytics.com"
                className="text-xs text-gray-500 hover:text-pink-400 transition-all duration-200 hover:translate-x-1 tracking-wide"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                support@mptanalytics.com
              </a>
              <div
                className="text-[10px] text-gray-600 mt-1 tracking-widest"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {new Date().getFullYear()} MPT Analytics
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Layer 2: Bottom Bar */}
      <div className="relative z-10 border-t border-white/5">
        <div className="landing-container py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div
            className="text-[9px] text-gray-600 tracking-widest text-center sm:text-left"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            © {new Date().getFullYear()} MPT Analytics — All rights reserved
          </div>
          <div className="flex items-center gap-4">
            <div
              className="text-[8px] tracking-[0.2em] text-gray-700 uppercase"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Made with{" "}
              <span className="text-pink-500/40">❤️</span>{" "}
              for AI learners
            </div>
            <div className="w-1 h-1 rounded-full bg-cyan-500/30" />
            <div
              className="text-[8px] tracking-[0.2em] text-gray-700"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              v0.1.0-BETA
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
