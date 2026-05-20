import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-cyan-500/10 py-8 px-4 mt-8">
      <div className="max-w-7xl mx-auto flex flex-col gap-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div
            className="text-sm font-black tracking-widest"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            <span className="neon-text-cyan">MPT</span>
            <span className="neon-text-pink"> ANALYTICS</span>
          </div>

          <nav
            className="flex flex-wrap justify-center gap-6"
            aria-label="Legal and support links"
          >
            <Link
              href="/refund"
              className="text-xs text-gray-500 hover:text-cyan-400 transition-colors tracking-widest uppercase"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Refund
            </Link>
            <Link
              href="/terms"
              className="text-xs text-gray-500 hover:text-cyan-400 transition-colors tracking-widest uppercase"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className="text-xs text-gray-500 hover:text-cyan-400 transition-colors tracking-widest uppercase"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Privacy
            </Link>
          </nav>

          <p
            className="text-[10px] text-gray-600 tracking-widest text-center md:text-right"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            © {new Date().getFullYear()} MPT Analytics — All rights reserved
          </p>
        </div>

        <p
          className="text-center text-sm text-gray-400"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          Contact:{" "}
          <a
            href="mailto:support@mptanalytics.com"
            className="text-cyan-400 hover:text-pink-400 transition-colors underline underline-offset-4"
          >
            support@mptanalytics.com
          </a>
        </p>
      </div>
    </footer>
  );
}
