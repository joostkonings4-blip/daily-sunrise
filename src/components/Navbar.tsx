"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const links = [
  { href: "/",       label: "Home" },
  { href: "/about",  label: "About" },
  { href: "/blog",   label: "Blog" },
  { href: "/social", label: "Social" },
];

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0,   opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-warm-white/90 backdrop-blur-md shadow-sm border-b border-sunrise-100"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <SunLogo />
            <span className="font-serif font-semibold text-xl text-warm-dark tracking-tight">
              Daily Sunrise
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="font-sans text-sm font-medium text-warm-muted hover:text-sunrise-500 transition-colors duration-300 relative group"
              >
                {l.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-sunrise-400 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Link
              href="/blog"
              className="px-5 py-2.5 rounded-full bg-sunrise-300 text-warm-dark text-sm font-medium hover:bg-sunrise-400 transition-all duration-300 hover:shadow-lg hover:shadow-sunrise-200"
            >
              Read the Blog
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-1"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="block w-6 h-px bg-warm-dark"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-px bg-warm-dark"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="block w-6 h-px bg-warm-dark"
            />
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
            className="fixed inset-0 z-40 bg-warm-white flex flex-col items-center justify-center gap-8"
          >
            {links.map((l, i) => (
              <motion.div
                key={l.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 + 0.1 }}
              >
                <Link
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-serif text-4xl font-medium text-warm-dark hover:text-sunrise-500 transition-colors"
                >
                  {l.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function SunLogo() {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="w-9 h-9"
    >
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="8" fill="#FFD96B" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
          <line
            key={i}
            x1="20" y1="4" x2="20" y2="9"
            stroke="#FFC93A"
            strokeWidth="2"
            strokeLinecap="round"
            transform={`rotate(${deg} 20 20)`}
          />
        ))}
      </svg>
    </motion.div>
  );
}
