import type { Metadata } from "next";
import { Orbitron, Share_Tech_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const shareTechMono = Share_Tech_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: "400",
});

export const metadata: Metadata = {
  title: "NEURAL QUEST — Learn AI Through Gaming",
  description:
    "A cyberpunk AI learning platform. Complete missions, earn XP, and evolve your AI knowledge.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${orbitron.variable} ${shareTechMono.variable} antialiased`}
      >
        {children}
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
              <a
                href="/terms"
                className="text-xs text-gray-500 hover:text-cyan-400 transition-colors tracking-widest uppercase"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Terms of Service
              </a>
              <a
                href="/privacy"
                className="text-xs text-gray-500 hover:text-cyan-400 transition-colors tracking-widest uppercase"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Privacy Policy
              </a>
              <a
                href="mailto:support@mptanalytics.com"
                className="text-xs text-gray-500 hover:text-cyan-400 transition-colors tracking-widest uppercase"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Contact
              </a>
            </div>
            
            <div className="flex flex-col items-center md:items-end gap-1">
              <p className="text-xs text-gray-500">© 2026 NeuralQuest</p>
            </div>
          </div>
        </footer>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
