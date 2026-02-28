"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const GOLD = "#C4911A";

// ─── Ambient glow ──────────────────────────────────────────────────────────────
function SunriseGlow() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      <motion.div
        className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, rgba(201,138,24,0.13) 0%, rgba(201,138,24,0.04) 55%, transparent 78%)",
        }}
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <div
        className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full"
        style={{
          background:
            "radial-gradient(circle at 100% 0%, rgba(254,242,204,0.45) 0%, transparent 65%)",
        }}
      />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
//  GOD MODE — Animated Tree of Life
//  Spec: 7.2 s phased draw → breathing loop
//  Three-zone proportions: Crown 45% | Trunk 20% | Roots 35%
//  Mono-line vector — strokeLinecap round, no fills except leaf buds
// ─────────────────────────────────────────────────────────────────────────────
function TreeOfLife() {
  const [hovered, setHovered] = useState(false);
  const [breatheOn, setBreatheOn] = useState(false);

  // Start breathing loop after 7.2 s intro
  useEffect(() => {
    const t = setTimeout(() => setBreatheOn(true), 7200);
    return () => clearTimeout(t);
  }, []);

  // ── Phase timing ──────────────────────────────────────────────────────────
  const PH_CIRCLE   = 0.0;
  const PH_ROOTS_A  = 0.6;   // main roots
  const PH_ROOTS_B  = 1.3;   // secondary roots
  const PH_ROOTS_C  = 2.0;   // hair roots
  const PH_TRUNK    = 2.6;
  const PH_BR_MAIN  = 3.4;   // main branches
  const PH_BR_DET   = 4.2;   // detail branches
  const PH_TWIGS    = 4.9;
  const PH_BUDS     = 5.4;
  const PH_HALO     = 6.2;

  // ── Helper: draw animation props ─────────────────────────────────────────
  function dp(delay: number, dur: number, sw = 1.5, offset = 0) {
    const d = delay + offset;
    return {
      stroke: GOLD,
      strokeWidth: sw,
      strokeLinecap: "round" as const,
      strokeLinejoin: "round" as const,
      fill: "none",
      initial: { pathLength: 0, opacity: 0 },
      animate: { pathLength: 1, opacity: 1 },
      transition: {
        pathLength: { delay: d, duration: dur, ease: "easeInOut" as const },
        opacity:    { delay: d, duration: 0.25 },
      },
    };
  }

  // ── Leaf bud positions (branch tips in crown) ─────────────────────────────
  const BUDS = [
    { cx: 250, cy: 30 },   // very top
    { cx: 215, cy: 46 },   { cx: 285, cy: 46 },
    { cx: 174, cy: 64 },   { cx: 326, cy: 64 },
    { cx: 100, cy: 96 },   { cx: 400, cy: 96 },
    { cx: 52,  cy: 118 },  { cx: 448, cy: 118 },
    { cx: 44,  cy: 84 },   { cx: 456, cy: 84 },
    { cx: 132, cy: 56 },   { cx: 368, cy: 56 },
    { cx: 30,  cy: 148 },  { cx: 470, cy: 148 },
  ];

  return (
    <motion.div
      className="relative w-full h-full select-none"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      // Breathing — starts after intro
      animate={breatheOn ? { scale: [1, 1.008, 1] } : { scale: 1 }}
      transition={
        breatheOn
          ? { duration: 8, repeat: Infinity, ease: "easeInOut" }
          : { duration: 0 }
      }
    >
      {/* Crown halo — Phase F */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          top: "4%",
          left: "8%",
          right: "8%",
          height: "52%",
          background:
            "radial-gradient(ellipse at 50% 52%, rgba(201,138,24,0.18) 0%, transparent 68%)",
          borderRadius: "50%",
        }}
        initial={{ opacity: 0 }}
        animate={{
          opacity: hovered
            ? 0.28
            : breatheOn
            ? [0.13, 0.20, 0.13]
            : 0,
        }}
        transition={
          hovered
            ? { duration: 0.6 }
            : breatheOn
            ? { duration: 6, repeat: Infinity, ease: "easeInOut" }
            : { delay: PH_HALO, duration: 1.0 }
        }
      />

      <svg
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Clip tree to circle */}
        <defs>
          <clipPath id="tree-circle">
            <circle cx="250" cy="250" r="224" />
          </clipPath>
        </defs>

        {/* ═══ PHASE A — Circle (0.0 s) ══════════════════════════════════ */}
        <motion.circle
          cx="250" cy="250" r="228"
          stroke={GOLD}
          strokeWidth={1.5}
          fill="none"
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered ? 0.40 : 0.22 }}
          transition={{ delay: PH_CIRCLE + 0.1, duration: 0.6 }}
        />

        <g clipPath="url(#tree-circle)">

          {/* ═══ PHASE B — Roots (0.6 s – 2.6 s) ══════════════════════════ */}

          {/* B1 — main sweeping roots */}
          {/* Left main */}
          <motion.path
            d="M 250,322 C 225,336 188,355 148,374 C 115,390 80,398 52,392"
            {...dp(PH_ROOTS_A, 1.4, 1.8)}
          />
          {/* Right main */}
          <motion.path
            d="M 250,322 C 275,336 312,355 352,374 C 385,390 420,398 448,392"
            {...dp(PH_ROOTS_A, 1.4, 1.8, 0.05)}
          />
          {/* Center root down */}
          <motion.path
            d="M 250,322 C 250,344 250,366 252,392"
            {...dp(PH_ROOTS_A, 0.9, 1.6, 0.08)}
          />

          {/* B2 — secondary roots */}
          <motion.path
            d="M 200,358 C 180,368 160,376 140,378"
            {...dp(PH_ROOTS_B, 0.8, 1.0)}
          />
          <motion.path
            d="M 300,358 C 320,368 340,376 360,378"
            {...dp(PH_ROOTS_B, 0.8, 1.0, 0.06)}
          />
          <motion.path
            d="M 148,374 C 132,382 116,388 100,388"
            {...dp(PH_ROOTS_B, 0.7, 0.9, 0.15)}
          />
          <motion.path
            d="M 352,374 C 368,382 384,388 400,388"
            {...dp(PH_ROOTS_B, 0.7, 0.9, 0.20)}
          />

          {/* B3 — hair roots */}
          <motion.path
            d="M 52,392 C 36,396 22,396 10,392"
            {...dp(PH_ROOTS_C, 0.55, 0.8)}
          />
          <motion.path
            d="M 448,392 C 464,396 478,396 490,392"
            {...dp(PH_ROOTS_C, 0.55, 0.8, 0.06)}
          />
          <motion.path
            d="M 100,388 C 84,392 68,392 56,388"
            {...dp(PH_ROOTS_C, 0.5, 0.75, 0.12)}
          />
          <motion.path
            d="M 400,388 C 416,392 432,392 444,388"
            {...dp(PH_ROOTS_C, 0.5, 0.75, 0.18)}
          />

          {/* ═══ PHASE C — Trunk (2.6 s – 3.4 s) ══════════════════════════ */}
          <motion.path
            d="M 250,322 C 249,295 249,266 250,232"
            {...dp(PH_TRUNK, 0.82, 3.2)}
          />

          {/* ═══ PHASE D — Branches (3.4 s – 5.4 s) ════════════════════════ */}

          {/* D1 — far sweeping main branches */}
          <motion.path
            d="M 250,232 C 226,213 186,184 140,154 C 104,128 68,108 42,98"
            {...dp(PH_BR_MAIN, 1.35, 2.0)}
          />
          <motion.path
            d="M 250,232 C 274,213 314,184 360,154 C 396,128 432,108 458,98"
            {...dp(PH_BR_MAIN, 1.35, 2.0, 0.05)}
          />
          {/* Center upward */}
          <motion.path
            d="M 250,232 C 250,206 250,178 250,150 C 250,128 250,106 250,84"
            {...dp(PH_BR_MAIN, 1.05, 1.6, 0.12)}
          />

          {/* D2 — secondary crown branches */}
          <motion.path
            d="M 195,192 C 172,168 142,140 110,118 C 82,100 56,88 36,82"
            {...dp(PH_BR_DET, 1.0, 1.45)}
          />
          <motion.path
            d="M 305,192 C 328,168 358,140 390,118 C 418,100 444,88 464,82"
            {...dp(PH_BR_DET, 1.0, 1.45, 0.05)}
          />
          <motion.path
            d="M 140,154 C 120,132 98,108 78,90"
            {...dp(PH_BR_DET, 0.8, 1.2, 0.15)}
          />
          <motion.path
            d="M 360,154 C 380,132 402,108 422,90"
            {...dp(PH_BR_DET, 0.8, 1.2, 0.20)}
          />

          {/* Crown arc branches */}
          <motion.path
            d="M 250,150 C 228,126 198,100 166,78 C 142,62 118,48 98,42"
            {...dp(PH_BR_DET, 0.9, 1.3, 0.28)}
          />
          <motion.path
            d="M 250,150 C 272,126 302,100 334,78 C 358,62 382,48 402,42"
            {...dp(PH_BR_DET, 0.9, 1.3, 0.33)}
          />

          {/* D3 — fine twigs */}
          <motion.path
            d="M 42,98 C 28,84 18,70 12,56"
            {...dp(PH_TWIGS, 0.5, 0.9)}
          />
          <motion.path
            d="M 458,98 C 472,84 482,70 488,56"
            {...dp(PH_TWIGS, 0.5, 0.9, 0.05)}
          />
          <motion.path
            d="M 36,82 C 22,66 14,50 10,36"
            {...dp(PH_TWIGS, 0.45, 0.8, 0.10)}
          />
          <motion.path
            d="M 464,82 C 478,66 486,50 490,36"
            {...dp(PH_TWIGS, 0.45, 0.8, 0.15)}
          />
          <motion.path
            d="M 250,84 C 236,66 220,50 205,38"
            {...dp(PH_TWIGS, 0.55, 0.9, 0.18)}
          />
          <motion.path
            d="M 250,84 C 264,66 280,50 295,38"
            {...dp(PH_TWIGS, 0.55, 0.9, 0.22)}
          />
          <motion.path
            d="M 98,42 C 84,32 70,24 56,20"
            {...dp(PH_TWIGS, 0.5, 0.85, 0.25)}
          />
          <motion.path
            d="M 402,42 C 416,32 430,24 444,20"
            {...dp(PH_TWIGS, 0.5, 0.85, 0.30)}
          />
          <motion.path
            d="M 78,90 C 62,76 48,64 36,58"
            {...dp(PH_TWIGS, 0.45, 0.8, 0.35)}
          />
          <motion.path
            d="M 422,90 C 438,76 452,64 464,58"
            {...dp(PH_TWIGS, 0.45, 0.8, 0.40)}
          />

          {/* ═══ PHASE E — Leaf buds (5.4 s – 6.2 s) ═══════════════════════ */}
          {BUDS.map((b, i) => (
            <motion.ellipse
              key={i}
              cx={b.cx}
              cy={b.cy}
              rx="4"
              ry="6.5"
              fill={GOLD}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: PH_BUDS + i * 0.053,
                duration: 0.55,
                ease: "easeOut",
              }}
            />
          ))}
        </g>
      </svg>
    </motion.div>
  );
}

// ─── Hero ──────────────────────────────────────────────────────────────────────
export default function Hero() {
  return (
    <section
      className="relative min-h-screen overflow-hidden flex items-center"
      style={{
        background: "linear-gradient(175deg, #FFFDF6 0%, #FFF8E8 55%, #FEF2CC 100%)",
      }}
    >
      <div className="grain-overlay absolute inset-0 pointer-events-none" />
      <SunriseGlow />

      {/* No scroll parallax — content is stable */}
      <div className="relative z-10 w-full content-wide pt-28 pb-24 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

        {/* ── Left: Copy ─────────────────────────────────────────────────── */}
        <div className="flex-1 lg:max-w-[52%] text-center lg:text-left">

          {/* H1 — always English */}
          <motion.h1
            className="font-serif font-bold leading-[1.05] mb-8"
            style={{ fontSize: "clamp(2rem, 3.8vw, 3.4rem)", color: "#1A1610" }}
          >
            {"The same life.".split("").map((char, i) => (
              <span key={i} className="overflow-hidden inline-block">
                <motion.span
                  className="inline-block"
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.9,
                    delay: 0.2 + i * 0.018,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              </span>
            ))}
            <br />
            {"A different perspective.".split("").map((char, i) => (
              <span key={i} className="overflow-hidden inline-block">
                <motion.span
                  className="inline-block"
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.9,
                    delay: 0.55 + i * 0.018,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{ color: i < 2 ? "#1A1610" : "#C4911A" }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              </span>
            ))}
          </motion.h1>

          {/* Gold hairline */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.9, delay: 1.1 }}
            className="mb-7 h-px max-w-[100px] mx-auto lg:mx-0"
            style={{ background: "rgba(196,145,26,0.45)", transformOrigin: "left" }}
          />

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="font-serif italic font-light leading-snug mb-3"
            style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)", color: "#7A6B52" }}
          >
            Your morning shapes your life.
          </motion.p>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.35 }}
            className="font-sans mb-10"
            style={{ fontSize: "clamp(0.9rem, 1.4vw, 1rem)", color: "#A89070" }}
          >
            What if the first hour of your day changed everything?
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <a
              href="#signup"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-medium transition-all duration-300 hover:opacity-80"
              style={{ background: "#1A1610", color: "#FFFDF6" }}
            >
              Begin your morning
            </a>
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-medium transition-all duration-300"
              style={{ border: "1.5px solid rgba(196,145,26,0.40)", color: "#B8750E" }}
            >
              Our story
            </Link>
          </motion.div>
        </div>

        {/* ── Right: GOD MODE Tree ───────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex-1 w-full max-w-[440px] lg:max-w-[480px] aspect-square"
        >
          <TreeOfLife />
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span
          className="font-sans text-[10px] tracking-[0.3em] uppercase"
          style={{ color: "#A89070" }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10"
          style={{
            background: "linear-gradient(to bottom, rgba(201,138,24,0.5), transparent)",
          }}
        />
      </motion.div>
    </section>
  );
}
