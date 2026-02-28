"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useTranslation } from "@/context/LanguageContext";

type ZoneId = "roots" | "trunk" | "branches" | "leaves" | "crown";

/* ─────────────────────────────────────────────────────────────────────────────
   Levensboom (Tree of Life) SVG
   Living, warm amber tree — fully alive at base state.
   5 interactive hover zones that illuminate.
───────────────────────────────────────────────────────────────────────────── */
function LevensBoom({ activeZone, onZoneEnter, onZoneLeave }: {
  activeZone: ZoneId | null;
  onZoneEnter: (z: ZoneId) => void;
  onZoneLeave: () => void;
}) {
  const T      = "#C4911A"; // warm living amber-gold
  const base   = 0.82;
  const active = 1.0;
  const dimmed = 0.18;

  function o(zone: ZoneId) {
    if (activeZone === null) return base;
    return activeZone === zone ? active : dimmed;
  }
  const circleO = activeZone === "crown" ? 0.80 : activeZone === null ? 0.45 : 0.08;
  const trunkO  = activeZone === "trunk" ? active : activeZone === null ? base : dimmed;

  return (
    <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">

      {/* ══ GOLDEN DISC — matches logo sun background ══ */}
      <circle cx="250" cy="250" r="218" fill="#C4911A" fillOpacity="0.08" />
      <circle cx="250" cy="250" r="196" fill="#C4911A" fillOpacity="0.05" />

      {/* ══ CROWN: circle frame + top branches ══ */}
      <motion.g animate={{ opacity: circleO }} transition={{ duration: 0.6 }}
        onMouseEnter={() => onZoneEnter("crown")} onMouseLeave={onZoneLeave} style={{ cursor: "pointer" }}>
        <rect x="60" y="38" width="380" height="200" fill="transparent" />
        <circle cx="250" cy="250" r="230" stroke={T} strokeWidth="2.5" />
        <circle cx="250" cy="250" r="221" stroke={T} strokeWidth="0.8" strokeOpacity="0.5" />
        <path d="M 250 180 C 250 162 249 142 248 116" stroke={T} strokeWidth="4" strokeLinecap="round"/>
        <path d="M 249 152 C 230 136 210 124 192 118" stroke={T} strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M 249 152 C 268 136 290 124 308 118" stroke={T} strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M 249 132 C 232 118 215 108 198 102" stroke={T} strokeWidth="2" strokeLinecap="round"/>
        <path d="M 249 132 C 266 118 283 108 300 102" stroke={T} strokeWidth="2" strokeLinecap="round"/>
        <path d="M 192 118 C 180 113 170 111 161 113" stroke={T} strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M 308 118 C 320 113 330 111 339 113" stroke={T} strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="248" cy="116" r="6" fill={T} />
        <circle cx="192" cy="118" r="4.5" fill={T} />
        <circle cx="308" cy="118" r="4.5" fill={T} />
        <circle cx="198" cy="102" r="3.5" fill={T} />
        <circle cx="300" cy="102" r="3.5" fill={T} />
        <circle cx="161" cy="113" r="3" fill={T} />
        <circle cx="339" cy="113" r="3" fill={T} />
        <circle cx="248" cy="112" r="14" stroke={T} strokeWidth="1.2" strokeOpacity="0.35" />
        <circle cx="248" cy="112" r="22" stroke={T} strokeWidth="0.6" strokeOpacity="0.18" />
      </motion.g>

      {/* ══ LEAVES: upper canopy branches ══ */}
      <motion.g animate={{ opacity: o("leaves") }} transition={{ duration: 0.6 }}
        onMouseEnter={() => onZoneEnter("leaves")} onMouseLeave={onZoneLeave} style={{ cursor: "pointer" }}>
        <rect x="55" y="155" width="185" height="110" fill="transparent" />
        <rect x="260" y="155" width="185" height="110" fill="transparent" />
        <path d="M 247 198 C 222 182 196 172 170 166" stroke={T} strokeWidth="3" strokeLinecap="round"/>
        <path d="M 253 198 C 278 182 304 172 330 166" stroke={T} strokeWidth="3" strokeLinecap="round"/>
        <path d="M 170 166 C 157 162 146 160 137 163" stroke={T} strokeWidth="2" strokeLinecap="round"/>
        <path d="M 330 166 C 343 162 354 160 363 163" stroke={T} strokeWidth="2" strokeLinecap="round"/>
        <path d="M 170 166 C 162 155 152 147 140 143" stroke={T} strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M 330 166 C 338 155 348 147 360 143" stroke={T} strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M 170 166 C 165 178 158 187 148 192" stroke={T} strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M 330 166 C 335 178 342 187 352 192" stroke={T} strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M 246 220 C 216 203 183 191 153 185" stroke={T} strokeWidth="3.5" strokeLinecap="round"/>
        <path d="M 254 220 C 284 203 317 191 347 185" stroke={T} strokeWidth="3.5" strokeLinecap="round"/>
        <path d="M 153 185 C 139 181 128 180 118 183" stroke={T} strokeWidth="2" strokeLinecap="round"/>
        <path d="M 347 185 C 361 181 372 180 382 183" stroke={T} strokeWidth="2" strokeLinecap="round"/>
        <path d="M 153 185 C 144 174 133 166 120 162" stroke={T} strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M 347 185 C 356 174 367 166 380 162" stroke={T} strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="137" cy="163" r="4.5" fill={T} />
        <circle cx="363" cy="163" r="4.5" fill={T} />
        <circle cx="140" cy="143" r="3.5" fill={T} />
        <circle cx="360" cy="143" r="3.5" fill={T} />
        <circle cx="148" cy="192" r="3" fill={T} />
        <circle cx="352" cy="192" r="3" fill={T} />
        <circle cx="118" cy="183" r="4.5" fill={T} />
        <circle cx="382" cy="183" r="4.5" fill={T} />
        <circle cx="120" cy="162" r="3.5" fill={T} />
        <circle cx="380" cy="162" r="3.5" fill={T} />
      </motion.g>

      {/* ══ BRANCHES: main lateral structure ══ */}
      <motion.g animate={{ opacity: o("branches") }} transition={{ duration: 0.6 }}
        onMouseEnter={() => onZoneEnter("branches")} onMouseLeave={onZoneLeave} style={{ cursor: "pointer" }}>
        <rect x="50" y="250" width="185" height="115" fill="transparent" />
        <rect x="265" y="250" width="185" height="115" fill="transparent" />
        <path d="M 244 326 C 198 302 148 282 104 272" stroke={T} strokeWidth="7" strokeLinecap="round"/>
        <path d="M 256 326 C 302 302 352 282 396 272" stroke={T} strokeWidth="7" strokeLinecap="round"/>
        <path d="M 104 272 C 84 267 68 264 54 267" stroke={T} strokeWidth="4.5" strokeLinecap="round"/>
        <path d="M 396 272 C 416 267 432 264 446 267" stroke={T} strokeWidth="4.5" strokeLinecap="round"/>
        <path d="M 104 272 C 90 260 76 250 62 246" stroke={T} strokeWidth="3" strokeLinecap="round"/>
        <path d="M 104 272 C 96 287 86 298 74 303" stroke={T} strokeWidth="3" strokeLinecap="round"/>
        <path d="M 396 272 C 410 260 424 250 438 246" stroke={T} strokeWidth="3" strokeLinecap="round"/>
        <path d="M 396 272 C 404 287 414 298 426 303" stroke={T} strokeWidth="3" strokeLinecap="round"/>
        <path d="M 244 298 C 200 276 154 260 112 252" stroke={T} strokeWidth="6" strokeLinecap="round"/>
        <path d="M 256 298 C 300 276 346 260 388 252" stroke={T} strokeWidth="6" strokeLinecap="round"/>
        <path d="M 112 252 C 94 248 80 246 68 249" stroke={T} strokeWidth="3.5" strokeLinecap="round"/>
        <path d="M 388 252 C 406 248 420 246 432 249" stroke={T} strokeWidth="3.5" strokeLinecap="round"/>
        <path d="M 112 252 C 100 240 86 230 72 225" stroke={T} strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M 388 252 C 400 240 414 230 428 225" stroke={T} strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M 244 272 C 205 252 163 237 124 229" stroke={T} strokeWidth="5.5" strokeLinecap="round"/>
        <path d="M 256 272 C 295 252 337 237 376 229" stroke={T} strokeWidth="5.5" strokeLinecap="round"/>
        <path d="M 124 229 C 106 225 92 223 80 226" stroke={T} strokeWidth="3" strokeLinecap="round"/>
        <path d="M 376 229 C 394 225 408 223 420 226" stroke={T} strokeWidth="3" strokeLinecap="round"/>
        <path d="M 124 229 C 113 217 100 209 86 204" stroke={T} strokeWidth="2" strokeLinecap="round"/>
        <path d="M 376 229 C 387 217 400 209 414 204" stroke={T} strokeWidth="2" strokeLinecap="round"/>
        <path d="M 245 248 C 210 230 172 216 136 208" stroke={T} strokeWidth="5" strokeLinecap="round"/>
        <path d="M 255 248 C 290 230 328 216 364 208" stroke={T} strokeWidth="5" strokeLinecap="round"/>
        <path d="M 136 208 C 120 204 108 202 98 205" stroke={T} strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M 364 208 C 380 204 392 202 402 205" stroke={T} strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="54" cy="267" r="5.5" fill={T} />
        <circle cx="446" cy="267" r="5.5" fill={T} />
        <circle cx="62" cy="246" r="4.5" fill={T} />
        <circle cx="438" cy="246" r="4.5" fill={T} />
        <circle cx="74" cy="303" r="4" fill={T} />
        <circle cx="426" cy="303" r="4" fill={T} />
        <circle cx="68" cy="249" r="4.5" fill={T} />
        <circle cx="432" cy="249" r="4.5" fill={T} />
        <circle cx="72" cy="225" r="3.5" fill={T} />
        <circle cx="428" cy="225" r="3.5" fill={T} />
        <circle cx="80" cy="226" r="4" fill={T} />
        <circle cx="420" cy="226" r="4" fill={T} />
        <circle cx="86" cy="204" r="3.5" fill={T} />
        <circle cx="414" cy="204" r="3.5" fill={T} />
        <circle cx="98" cy="205" r="4" fill={T} />
        <circle cx="402" cy="205" r="4" fill={T} />
      </motion.g>

      {/* ══ TRUNK: the spine ══ */}
      <motion.g animate={{ opacity: trunkO }} transition={{ duration: 0.6 }}
        onMouseEnter={() => onZoneEnter("trunk")} onMouseLeave={onZoneLeave} style={{ cursor: "pointer" }}>
        <rect x="230" y="180" width="40" height="195" fill="transparent" />
        <path
          d="M 243 368 C 241 338 240 306 241 274 C 242 250 244 230 247 210 L 248 194 C 249 188 250 184 250 181 C 250 184 251 188 252 194 L 253 210 C 256 230 258 250 259 274 C 260 306 259 338 257 368 Z"
          fill={T} fillOpacity="0.92"
        />
        <path d="M 250 362 C 250 336 250 308 250 282 C 250 256 250 228 250 206 C 250 196 250 188 250 183"
          stroke="#FFFDF6" strokeWidth="1.5" strokeOpacity="0.25" strokeLinecap="round"/>
        <path d="M 244 350 C 222 338 196 328 170 322" stroke={T} strokeWidth="9" strokeLinecap="round"/>
        <path d="M 256 350 C 278 338 304 328 330 322" stroke={T} strokeWidth="9" strokeLinecap="round"/>
        <path d="M 170 322 C 150 317 132 314 116 316" stroke={T} strokeWidth="5.5" strokeLinecap="round"/>
        <path d="M 330 322 C 350 317 368 314 384 316" stroke={T} strokeWidth="5.5" strokeLinecap="round"/>
        <path d="M 170 322 C 154 310 136 300 118 295" stroke={T} strokeWidth="4" strokeLinecap="round"/>
        <path d="M 330 322 C 346 310 364 300 382 295" stroke={T} strokeWidth="4" strokeLinecap="round"/>
        <path d="M 116 316 C 100 312 86 310 74 313" stroke={T} strokeWidth="3.5" strokeLinecap="round"/>
        <path d="M 384 316 C 400 312 414 310 426 313" stroke={T} strokeWidth="3.5" strokeLinecap="round"/>
        <circle cx="74" cy="313" r="5" fill={T} />
        <circle cx="426" cy="313" r="5" fill={T} />
        <circle cx="118" cy="295" r="4.5" fill={T} />
        <circle cx="382" cy="295" r="4.5" fill={T} />
      </motion.g>

      {/* ══ ROOTS: the foundation ══ */}
      <motion.g animate={{ opacity: o("roots") }} transition={{ duration: 0.6 }}
        onMouseEnter={() => onZoneEnter("roots")} onMouseLeave={onZoneLeave} style={{ cursor: "pointer" }}>
        <rect x="60" y="365" width="380" height="115" fill="transparent" />
        <path d="M 250 368 C 250 390 250 412 250 432" stroke={T} strokeWidth="11" strokeLinecap="round"/>
        <path d="M 244 380 C 198 402 148 422 104 433" stroke={T} strokeWidth="7" strokeLinecap="round"/>
        <path d="M 256 380 C 302 402 352 422 396 433" stroke={T} strokeWidth="7" strokeLinecap="round"/>
        <path d="M 104 433 C 84 438 68 440 54 437" stroke={T} strokeWidth="4.5" strokeLinecap="round"/>
        <path d="M 396 433 C 416 438 432 440 446 437" stroke={T} strokeWidth="4.5" strokeLinecap="round"/>
        <path d="M 104 433 C 90 445 75 454 60 458" stroke={T} strokeWidth="3" strokeLinecap="round"/>
        <path d="M 104 433 C 97 418 88 407 76 402" stroke={T} strokeWidth="3" strokeLinecap="round"/>
        <path d="M 396 433 C 410 445 425 454 440 458" stroke={T} strokeWidth="3" strokeLinecap="round"/>
        <path d="M 396 433 C 403 418 412 407 424 402" stroke={T} strokeWidth="3" strokeLinecap="round"/>
        <path d="M 244 398 C 202 420 158 440 116 450" stroke={T} strokeWidth="6" strokeLinecap="round"/>
        <path d="M 256 398 C 298 420 342 440 384 450" stroke={T} strokeWidth="6" strokeLinecap="round"/>
        <path d="M 116 450 C 98 455 84 457 72 454" stroke={T} strokeWidth="3.5" strokeLinecap="round"/>
        <path d="M 384 450 C 402 455 416 457 428 454" stroke={T} strokeWidth="3.5" strokeLinecap="round"/>
        <path d="M 245 415 C 210 434 174 450 140 459" stroke={T} strokeWidth="5" strokeLinecap="round"/>
        <path d="M 255 415 C 290 434 326 450 360 459" stroke={T} strokeWidth="5" strokeLinecap="round"/>
        <path d="M 140 459 C 124 463 112 465 102 462" stroke={T} strokeWidth="3" strokeLinecap="round"/>
        <path d="M 360 459 C 376 463 388 465 398 462" stroke={T} strokeWidth="3" strokeLinecap="round"/>
        <path d="M 250 432 C 234 448 218 460 202 466" stroke={T} strokeWidth="5.5" strokeLinecap="round"/>
        <path d="M 250 432 C 266 448 282 460 298 466" stroke={T} strokeWidth="5.5" strokeLinecap="round"/>
        <path d="M 202 466 C 192 470 183 472 175 470" stroke={T} strokeWidth="3" strokeLinecap="round"/>
        <path d="M 298 466 C 308 470 317 472 325 470" stroke={T} strokeWidth="3" strokeLinecap="round"/>
        <circle cx="54" cy="437" r="5.5" fill={T} />
        <circle cx="446" cy="437" r="5.5" fill={T} />
        <circle cx="60" cy="458" r="4.5" fill={T} />
        <circle cx="440" cy="458" r="4.5" fill={T} />
        <circle cx="76" cy="402" r="4" fill={T} />
        <circle cx="424" cy="402" r="4" fill={T} />
        <circle cx="72" cy="454" r="4.5" fill={T} />
        <circle cx="428" cy="454" r="4.5" fill={T} />
        <circle cx="102" cy="462" r="4" fill={T} />
        <circle cx="398" cy="462" r="4" fill={T} />
        <circle cx="175" cy="470" r="3.5" fill={T} />
        <circle cx="325" cy="470" r="3.5" fill={T} />
        <circle cx="250" cy="432" r="4.5" fill={T} />
      </motion.g>
    </svg>
  );
}

/* ── Zone tooltip ── */
function ZoneLabel({ zone, zoneData }: { zone: ZoneId; zoneData: { title: string; desc: string } }) {
  const positions: Record<ZoneId, string> = {
    roots:    "bottom-[8%]  left-1/2 -translate-x-1/2",
    trunk:    "bottom-[30%] right-[2%]",
    branches: "top-[50%]   left-[0%]",
    leaves:   "top-[26%]   right-[2%]",
    crown:    "top-[5%]    left-1/2 -translate-x-1/2",
  };

  return (
    <motion.div
      key={zone}
      initial={{ opacity: 0, y: 8, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -4 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className={`absolute ${positions[zone]} max-w-[200px] z-20 pointer-events-none`}
    >
      <div className="rounded-xl px-4 py-3.5" style={{
        background: "#FFFDF6",
        border: "1px solid rgba(196,145,26,0.28)",
        boxShadow: "0 4px 24px rgba(180,120,20,0.12)"
      }}>
        <p className="font-serif text-sm font-semibold mb-1.5 leading-tight" style={{ color: "#B8750E" }}>
          {zoneData.title}
        </p>
        <p className="font-sans text-xs leading-relaxed" style={{ color: "#7A6B52" }}>
          {zoneData.desc}
        </p>
      </div>
    </motion.div>
  );
}

/* ── Animated sunrise background element ── */
function SunriseGlow() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {/* Primary warm glow — bottom center */}
      <motion.div
        className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full"
        style={{ background: "radial-gradient(ellipse at 50% 100%, rgba(201,138,24,0.13) 0%, rgba(201,138,24,0.04) 55%, transparent 78%)" }}
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Secondary top-right warmth */}
      <div
        className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full"
        style={{ background: "radial-gradient(circle at 100% 0%, rgba(254,242,204,0.45) 0%, transparent 65%)" }}
      />
    </div>
  );
}

/* ── Main Hero ── */
export default function Hero() {
  const { t } = useTranslation();
  const [activeZone, setActiveZone] = useState<ZoneId | null>(null);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const y       = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  const zoneData = activeZone ? t.hero.zone[activeZone] : null;

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen overflow-hidden flex items-center"
      style={{ background: "linear-gradient(175deg, #FFFDF6 0%, #FFF8E8 55%, #FEF2CC 100%)" }}
    >
      <div className="grain-overlay absolute inset-0 pointer-events-none" />
      <SunriseGlow />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 w-full content-wide pt-28 pb-24 flex flex-col lg:flex-row items-center gap-10 lg:gap-16"
      >
        {/* LEFT: Text */}
        <div className="flex-1 lg:max-w-[52%] text-center lg:text-left">

          {/* ── THE BRAND TAGLINE — MAIN H1 — ALWAYS ENGLISH ── */}
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
                  transition={{ duration: 0.9, delay: 0.2 + i * 0.018, ease: [0.22, 1, 0.36, 1] }}
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
                  transition={{ duration: 0.9, delay: 0.55 + i * 0.018, ease: [0.22, 1, 0.36, 1] }}
                  style={{ color: i < 2 ? "#1A1610" : "#C4911A" }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              </span>
            ))}
          </motion.h1>

          {/* Thin gold hairline */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.9, delay: 1.1 }}
            className="mb-7 h-px max-w-[100px] mx-auto lg:mx-0"
            style={{ background: "rgba(196,145,26,0.45)", transformOrigin: "left" }}
          />

          {/* Translated sub — the daily line */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="font-serif italic font-light leading-snug mb-3"
            style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)", color: "#7A6B52" }}
          >
            {t.hero.tagline}
          </motion.p>

          {/* Question */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.35 }}
            className="font-sans mb-10"
            style={{ fontSize: "clamp(0.9rem, 1.4vw, 1rem)", color: "#A89070" }}
          >
            {t.hero.sub1}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            {/* Primary — links to email signup */}
            <a
              href="#signup"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-medium transition-all duration-300 hover:opacity-80"
              style={{ background: "#1A1610", color: "#FFFDF6" }}
            >
              {t.hero.cta1}
            </a>
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-medium transition-all duration-300"
              style={{ border: "1.5px solid rgba(196,145,26,0.40)", color: "#B8750E" }}
            >
              {t.hero.cta2}
            </Link>
          </motion.div>
        </div>

        {/* RIGHT: Living Levensboom */}
        <motion.div
          initial={{ opacity: 0, scale: 0.90 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex-1 w-full max-w-[440px] lg:max-w-[480px] aspect-square"
        >
          {/* Ambient glow behind tree */}
          <motion.div
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(ellipse at 50% 55%, rgba(201,138,24,0.11) 0%, transparent 68%)" }}
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />

          <LevensBoom
            activeZone={activeZone}
            onZoneEnter={setActiveZone}
            onZoneLeave={() => setActiveZone(null)}
          />

          <AnimatePresence mode="wait">
            {activeZone && zoneData && (
              <ZoneLabel key={activeZone} zone={activeZone} zoneData={zoneData} />
            )}
          </AnimatePresence>

          <AnimatePresence>
            {!activeZone && (
              <motion.p
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                transition={{ delay: 3, duration: 1.2 }}
                className="absolute bottom-[-2.5rem] left-1/2 -translate-x-1/2 text-center font-sans text-xs tracking-[0.18em] uppercase whitespace-nowrap"
                style={{ color: "#A89070" }}
              >
                {t.hero.explore}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="font-sans text-[10px] tracking-[0.3em] uppercase" style={{ color: "#A89070" }}>
          {t.hero.scroll}
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10"
          style={{ background: "linear-gradient(to bottom, rgba(201,138,24,0.5), transparent)" }}
        />
      </motion.div>
    </section>
  );
}
