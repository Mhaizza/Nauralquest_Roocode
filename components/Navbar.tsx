"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Heroes", href: "/heroes" },
  { label: "Dashboard", href: "/dashboard" },
  { label: "Missions", href: "/#missions" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed z-50 nav-floating">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14">
          <Link href="/" className="flex items-center gap-2.5 cursor-pointer focus-ring rounded-lg">
            <div className="w-7 h-7 relative shrink-0">
              <div className="absolute inset-0 bg-[var(--nq-cyan)] rounded-sm rotate-45 opacity-70" />
              <div className="absolute inset-1 bg-[var(--nq-bg)] rounded-sm rotate-45" />
              <div className="absolute inset-2 bg-[var(--nq-cyan)] rounded-sm rotate-45 opacity-50" />
            </div>
            <div>
              <span className="text-base font-black tracking-wide font-display neon-text-cyan">
                NEURAL<span className="neon-text-pink">QUEST</span>
              </span>
              <div className="text-[9px] tracking-[0.2em] text-[var(--nq-muted)] font-mono-label leading-none -mt-0.5">
                by MPT Analytics
              </div>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map(({ label, href }) => {
              const isActive =
                href === "/"
                  ? pathname === "/"
                  : href.startsWith("/#")
                    ? pathname === "/"
                    : pathname === href || pathname.startsWith(`${href}/`);

              return (
                <Link
                  key={label}
                  href={href}
                  className={`text-sm font-medium transition-colors duration-200 cursor-pointer focus-ring rounded px-1 py-0.5 ${
                    isActive
                      ? "text-[var(--nq-cyan)]"
                      : "text-[var(--nq-muted)] hover:text-[var(--nq-cyan)]"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <span className="text-xs text-[var(--nq-muted)] font-mono-label">v0.1.0-beta</span>
            <Link
              href="/dashboard"
              className="btn-neon-cyan px-4 py-2 text-xs font-bold tracking-wide rounded-lg cursor-pointer focus-ring"
            >
              Play now
            </Link>
          </div>

          <button
            type="button"
            className="md:hidden text-[var(--nq-cyan)] p-2 cursor-pointer focus-ring rounded-lg"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <div className="w-5 space-y-1">
              <span
                className={`block h-0.5 bg-current transition-transform duration-200 ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`}
              />
              <span
                className={`block h-0.5 bg-current transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 bg-current transition-transform duration-200 ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
              />
            </div>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-[var(--nq-border)] px-4 py-4 space-y-2">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="block text-sm font-medium py-2 text-[var(--nq-muted)] hover:text-[var(--nq-cyan)] transition-colors duration-200 cursor-pointer"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/dashboard"
            className="btn-neon-cyan block w-full py-2.5 text-xs font-bold tracking-wide rounded-lg mt-2 text-center cursor-pointer"
            onClick={() => setMenuOpen(false)}
          >
            Play now
          </Link>
        </div>
      )}
    </nav>
  );
}
