"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "/",           label: "Home" },
    { href: "/about",      label: "About" },
    { href: "/philosophy", label: "Philosophy" },
    { href: "/blog",       label: "Blog" },
    { href: "/social",     label: "Social" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-deep-900/95 backdrop-blur-md border-b border-gold-rich/10 shadow-[0_2px_24px_rgba(180,120,20,0.07)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className="h-9 w-auto relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo dailysunrise.png"
                alt="Daily Sunrise"
                className="h-9 w-auto object-contain"
                style={{ mixBlendMode: "multiply" }}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                  const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = "block";
                }}
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="hidden h-9 w-9"
              >
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-9 w-9">
                  <circle cx="20" cy="20" r="8" fill="#C4911A" />
                  {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
                    <line key={i} x1="20" y1="4" x2="20" y2="9"
                      stroke="#D4A820" strokeWidth="2" strokeLinecap="round"
                      transform={`rotate(${deg} 20 20)`}
                    />
                  ))}
                </svg>
              </motion.div>
            </div>
            <span className="font-serif font-semibold text-lg text-cream-100 tracking-tight group-hover:text-gold-bright transition-colors duration-300 hidden sm:block">
              Daily Sunrise
            </span>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="font-sans text-sm font-medium text-cream-muted hover:text-gold-bright transition-colors duration-300 relative group"
              >
                {l.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gold-warm group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center">
            <Link
              href="/#signup"
              className="px-5 py-2 rounded-full bg-gold-rich text-deep-950 text-sm font-medium hover:bg-gold-bright transition-all duration-300 hover:shadow-[0_0_20px_rgba(196,145,26,0.3)]"
            >
              Join now
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-1"
            aria-label="Toggle menu"
          >
            <motion.span animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }} className="block w-6 h-px bg-cream-100" />
            <motion.span animate={menuOpen ? { opacity: 0 } : { opacity: 1 }} className="block w-6 h-px bg-cream-100" />
            <motion.span animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }} className="block w-6 h-px bg-cream-100" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 backdrop-blur-sm flex flex-col items-center justify-center gap-8"
            style={{ backgroundColor: "rgba(26,22,16,0.98)" }}
          >
            {links.map((l, i) => (
              <motion.div
                key={l.href}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 + 0.1 }}
              >
                <Link
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-serif text-4xl font-medium hover:text-gold-bright transition-colors"
                  style={{ color: "#FFFDF6" }}
                >
                  {l.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: links.length * 0.08 + 0.1 }}
            >
              <Link
                href="/#signup"
                onClick={() => setMenuOpen(false)}
                className="mt-4 inline-flex px-8 py-3 rounded-full bg-gold-rich text-deep-950 font-medium text-lg"
              >
                Join now
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
