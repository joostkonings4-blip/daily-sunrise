"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const SOCIALS = [
  {
    name: "Instagram",
    href: "https://instagram.com/dailysunrise",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
      </svg>
    ),
  },
  {
    name: "TikTok",
    href: "https://tiktok.com/@dailysunrise",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path
          d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.87a8.26 8.26 0 004.83 1.54V7a4.85 4.85 0 01-1.06-.31z"
          stroke="currentColor"
          strokeWidth="1.2"
          fill="none"
        />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@dailysunrise",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path
          d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.4a2.78 2.78 0 001.95-1.97A29 29 0 0023 12a29 29 0 00-.46-5.58z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <polygon points="9.75,15.02 15.5,12 9.75,8.98 9.75,15.02" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

const LINKS = [
  { label: "Home",   href: "/" },
  { label: "About",  href: "/about" },
  { label: "Blog",   href: "/blog" },
  { label: "Social", href: "/social" },
];

export default function Footer() {
  return (
    <footer className="bg-warm-dark text-warm-white/80">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div
                className="w-9 h-9 rounded-full"
                style={{
                  background: "radial-gradient(circle at 40% 40%, #FFF5D6, #FFD96B 60%, #FFC93A)",
                }}
              />
              <span className="font-serif text-xl font-semibold text-warm-white">
                Daily Sunrise
              </span>
            </div>
            <p className="font-sans text-sm text-warm-white/50 leading-relaxed max-w-xs">
              The same life — a different perspective. Slowing down to find the health that already lives inside you.
            </p>
            <p className="font-display text-lg italic text-sunrise-300">
              #slowliving
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-sunrise-400 mb-4">
              Navigate
            </p>
            <div className="space-y-3">
              {LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="block font-sans text-sm text-warm-white/60 hover:text-sunrise-300 transition-colors duration-200"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Socials + newsletter */}
          <div>
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-sunrise-400 mb-4">
              Follow the Journey
            </p>
            <div className="flex gap-4 mb-8">
              {SOCIALS.map((s) => (
                <motion.a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  whileHover={{ y: -3, color: "#FFD96B" }}
                  className="text-warm-white/50 hover:text-sunrise-300 transition-colors"
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>

            <p className="font-sans text-xs tracking-[0.2em] uppercase text-sunrise-400 mb-3">
              Weekly sunrise notes
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-2.5 rounded-full bg-warm-white/10 border border-warm-white/20 text-sm text-warm-white placeholder:text-warm-white/30 focus:outline-none focus:border-sunrise-400 transition-colors"
              />
              <button className="px-4 py-2.5 rounded-full bg-sunrise-400 text-warm-dark text-sm font-medium hover:bg-sunrise-300 transition-colors">
                →
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-warm-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-sans text-xs text-warm-white/30">
            © {new Date().getFullYear()} Daily Sunrise. All rights reserved.
          </p>
          <p className="font-sans text-xs text-warm-white/30">
            www.dailysunrise.com
          </p>
        </div>
      </div>
    </footer>
  );
}
