import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-cyan-500/10 py-8 px-4 mt-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div
          className="text-sm font-black tracking-widest"
          style={{ fontFamily: "var(--font-orbitron)" }}
        >
          <span className="neon-text-cyan">NEURAL</span>
          <span className="neon-text-pink">QUEST</span>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6">
          <Link 
            href="/terms" 
            className="text-xs text-gray-500 hover:text-cyan-400 transition-colors tracking-widest uppercase"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Terms of Service
          </Link>
          <Link 
            href="/privacy" 
            className="text-xs text-gray-500 hover:text-cyan-400 transition-colors tracking-widest uppercase"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Privacy Policy
          </Link>
          <a 
            href="mailto:support@mptanalytics.com" 
            className="text-xs text-gray-500 hover:text-cyan-400 transition-colors tracking-widest uppercase"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Contact
          </a>
        </div>

        <div className="flex flex-col items-center md:items-end gap-1">
          <p
            className="text-[10px] text-gray-600 tracking-widest text-center md:text-right"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            © 2077 NEURALQUEST SYSTEMS — ALL RIGHTS RESERVED
          </p>
          <div
            className="text-[10px] text-gray-700 tracking-widest"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            v0.1.0-BETA
          </div>
        </div>
      </div>
    </footer>
  );
}
