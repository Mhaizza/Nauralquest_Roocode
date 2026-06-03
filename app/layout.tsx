import type { Metadata } from "next";
import { Inter, Orbitron, Share_Tech_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

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
  title: {
    default: "NEURAL QUEST — Learn AI Through Gaming | MPT Analytics",
    template: "%s | NEURAL QUEST | MPT Analytics",
  },
  description:
    "MPT Analytics' NEURAL QUEST is a cyberpunk RPG-style AI learning platform. Complete missions, earn XP, level up heroes, and master AI skills through interactive gameplay.",
  keywords: [
    "AI learning", "gamified education", "MPT Analytics", "NEURAL QUEST",
    "learn AI", "machine learning", "cyberpunk", "RPG learning",
    "AI skills", "prompt engineering", "data science",
  ],
  openGraph: {
    title: "NEURAL QUEST — Learn AI Through Gaming | MPT Analytics",
    description:
      "Cyberpunk RPG-style AI learning — complete missions, earn XP, and evolve your AI knowledge.",
    url: "https://mptanalytics.com",
    siteName: "MPT Analytics",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NEURAL QUEST — Learn AI Through Gaming",
    description:
      "Choose a hero, complete missions, and level up your AI skills. By MPT Analytics.",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://mptanalytics.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${orbitron.variable} ${shareTechMono.variable} antialiased`}
      >
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
