"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { useTranslation } from "@/context/LanguageContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { data: session } = useSession();
  const { t } = useTranslation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "/",       label: t.nav.home },
    { href: "/about",  label: t.nav.about },
    { href: "/blog",   label: t.nav.blog },
    { href: "/social", label: t.nav.social },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-deep-900/95 backdrop-blur-md border-b border-gold-rich/10 shadow-[0_1px_30px_rgba(0,0,0,0.4)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
            {/* Logo image — place 'logo dailysunrise.png' in /public */}
            <div className="h-9 w-auto relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo dailysunrise.png"
                alt="Daily Sunrise"
                className="h-9 w-auto object-contain"
                onError={(e) => {
                  // Fallback to inline SVG sun if image not found
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                  const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = "block";
                }}
              />
              {/* Fallback sun SVG — hidden by default */}
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

          {/* CTA + Auth */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="#signup"
              className="px-5 py-2 rounded-full bg-gold-rich text-deep-950 text-sm font-medium hover:bg-gold-bright transition-all duration-300 hover:shadow-[0_0_20px_rgba(196,145,26,0.3)]"
            >
              {t.nav.join}
            </Link>
            {session ? (
              <div className="flex items-center gap-2">
                {session.user?.image && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={session.user.image}
                    alt={session.user.name ?? "User"}
                    className="w-8 h-8 rounded-full border-2 border-gold-rich/40"
                  />
                )}
                <button
                  onClick={() => signOut()}
                  className="text-xs font-sans text-cream-dim hover:text-cream-100 transition-colors"
                >
                  {t.nav.signOut}
                </button>
              </div>
            ) : (
              <button
                onClick={() => signIn("google")}
                className="px-4 py-2 rounded-full border border-cream-muted/20 text-cream-muted text-sm font-medium hover:border-gold-warm hover:text-gold-bright transition-all duration-300 flex items-center gap-2"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                {t.nav.signIn}
              </button>
            )}
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
            className="fixed inset-0 z-40 bg-deep-950/98 backdrop-blur-sm flex flex-col items-center justify-center gap-8"
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
                  className="font-serif text-4xl font-medium text-cream-100 hover:text-gold-bright transition-colors"
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
                href="#signup"
                onClick={() => setMenuOpen(false)}
                className="mt-4 inline-flex px-8 py-3 rounded-full bg-gold-rich text-deep-950 font-medium text-lg"
              >
                {t.nav.join}
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
