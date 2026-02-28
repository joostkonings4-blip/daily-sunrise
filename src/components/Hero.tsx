"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useTranslation } from "@/context/LanguageContext";

/* ── Tree zone definitions ── */
type ZoneId = "roots" | "trunk" | "branches" | "leaves" | "crown";

/* ── Tree of Life SVG with 5 interactive zones ── */
function TreeOfLife({ activeZone, onZoneEnter, onZoneLeave }: {
  activeZone: ZoneId | null;
  onZoneEnter: (z: ZoneId) => void;
  onZoneLeave: () => void;
}) {
  const baseOpacity    = 0.22;
  const activeOpacity  = 0.80;
  const dimmedOpacity  = 0.07;

  function opacity(zone: ZoneId) {
    if (activeZone === null) return baseOpacity;
    return activeZone === zone ? activeOpacity : dimmedOpacity;
  }

  const trunkOpacity = activeZone === null ? baseOpacity :
    activeZone === "trunk" ? activeOpacity : dimmedOpacity;

  const circleOpacity = activeZone === null ? 0.18 :
    activeZone === "crown" ? 0.5 : 0.06;

  return (
    <svg
      viewBox="0 0 500 580"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full drop-shadow-none"
      style={{ color: "#D4A820" }}
    >
      {/* Sacred circle — Crown zone visual */}
      <motion.circle
        cx="250" cy="280" r="225"
        stroke="currentColor" strokeWidth="1.2"
        animate={{ opacity: circleOpacity }}
        transition={{ duration: 0.6 }}
        style={{ cursor: "pointer" }}
        onMouseEnter={() => onZoneEnter("crown")}
        onMouseLeave={onZoneLeave}
      />
      <motion.circle
        cx="250" cy="280" r="218"
        stroke="currentColor" strokeWidth="0.5"
        animate={{ opacity: circleOpacity * 0.6 }}
        transition={{ duration: 0.6 }}
      />

      {/* ═══ ROOTS zone ═══ */}
      <motion.g
        animate={{ opacity: opacity("roots") }}
        transition={{ duration: 0.5 }}
        onMouseEnter={() => onZoneEnter("roots")}
        onMouseLeave={onZoneLeave}
        style={{ cursor: "pointer" }}
      >
        {/* Invisible hit area */}
        <rect x="80" y="470" width="340" height="110" fill="transparent" />
        {/* Root paths */}
        <path d="M250 490 C250 510 250 525 250 542" stroke="currentColor" strokeWidth="6" strokeLinecap="round"/>
        <path d="M246 480 C232 496 214 510 194 520" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
        <path d="M243 492 C222 510 196 524 168 532" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <path d="M240 502 C214 520 184 534 152 542" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M254 480 C268 496 286 510 306 520" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
        <path d="M257 492 C278 510 304 524 332 532" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <path d="M260 502 C286 520 316 534 348 542" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        {/* Sub-roots */}
        <path d="M194 520 C184 528 172 534 160 538" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M194 520 C192 530 190 538 188 544" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M168 532 C156 540 144 546 130 550" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M306 520 C316 528 328 534 340 538" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M306 520 C308 530 310 538 312 544" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M332 532 C344 540 356 546 370 550" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        {/* Root tips */}
        <circle cx="250" cy="542" r="3" fill="currentColor"/>
        <circle cx="160" cy="538" r="2.5" fill="currentColor"/>
        <circle cx="188" cy="544" r="2" fill="currentColor"/>
        <circle cx="130" cy="550" r="2" fill="currentColor"/>
        <circle cx="340" cy="538" r="2.5" fill="currentColor"/>
        <circle cx="312" cy="544" r="2" fill="currentColor"/>
        <circle cx="370" cy="550" r="2" fill="currentColor"/>
      </motion.g>

      {/* ═══ TRUNK zone ═══ */}
      <motion.g
        animate={{ opacity: trunkOpacity }}
        transition={{ duration: 0.5 }}
        onMouseEnter={() => onZoneEnter("trunk")}
        onMouseLeave={onZoneLeave}
        style={{ cursor: "pointer" }}
      >
        {/* Invisible hit area */}
        <rect x="230" y="310" width="40" height="185" fill="transparent" />
        {/* Main trunk */}
        <path d="M247 490 C244 460 242 430 242 400 C242 370 243 350 245 330 C247 310 248 295 249 280 C249 265 249 250 249 235 C249 220 249 210 250 200"
              stroke="currentColor" strokeWidth="11" strokeLinecap="round"/>
        {/* Inner trunk highlight */}
        <path d="M251 490 C251 460 252 430 252 400 C252 370 251 350 250 330 C250 310 250 295 250 280 C250 265 250 250 250 235"
              stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeOpacity="0.35"/>
        {/* Lowest branches — also part of trunk zone */}
        <path d="M245 455 C228 440 206 428 180 420" stroke="currentColor" strokeWidth="7" strokeLinecap="round"/>
        <path d="M255 455 C272 440 294 428 320 420" stroke="currentColor" strokeWidth="7" strokeLinecap="round"/>
        <path d="M208 432 C194 422 178 414 162 410" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round"/>
        <path d="M180 420 C168 410 156 402 144 398" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M180 420 C172 432 162 440 150 444" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M292 432 C306 422 322 414 338 410" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round"/>
        <path d="M320 420 C332 410 344 402 356 398" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M320 420 C328 432 338 440 350 444" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        {/* Tip circles */}
        <circle cx="144" cy="398" r="3.5" fill="currentColor"/>
        <circle cx="150" cy="444" r="3" fill="currentColor"/>
        <circle cx="356" cy="398" r="3.5" fill="currentColor"/>
        <circle cx="350" cy="444" r="3" fill="currentColor"/>
        <circle cx="162" cy="410" r="2.5" fill="currentColor"/>
        <circle cx="338" cy="410" r="2.5" fill="currentColor"/>
      </motion.g>

      {/* ═══ BRANCHES zone ═══ */}
      <motion.g
        animate={{ opacity: opacity("branches") }}
        transition={{ duration: 0.5 }}
        onMouseEnter={() => onZoneEnter("branches")}
        onMouseLeave={onZoneLeave}
        style={{ cursor: "pointer" }}
      >
        {/* Hit areas */}
        <rect x="60" y="340" width="180" height="80" fill="transparent" />
        <rect x="260" y="340" width="180" height="80" fill="transparent" />
        {/* Mid-low branches */}
        <path d="M244 402 C222 382 194 368 162 358" stroke="currentColor" strokeWidth="6" strokeLinecap="round"/>
        <path d="M256 402 C278 382 306 368 338 358" stroke="currentColor" strokeWidth="6" strokeLinecap="round"/>
        <path d="M196 372 C178 358 160 348 140 342" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <path d="M162 358 C148 346 134 336 120 330" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M162 358 C154 372 144 382 132 388" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M304 372 C322 358 340 348 360 342" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <path d="M338 358 C352 346 366 336 380 330" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M338 358 C346 372 356 382 368 388" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        {/* Middle branches */}
        <path d="M244 362 C218 338 186 320 150 308" stroke="currentColor" strokeWidth="5" strokeLinecap="round"/>
        <path d="M256 362 C282 338 314 320 350 308" stroke="currentColor" strokeWidth="5" strokeLinecap="round"/>
        <path d="M190 324 C170 308 150 296 128 288" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M150 308 C134 294 118 282 102 276" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M150 308 C140 322 128 332 114 338" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M310 324 C330 308 350 296 372 288" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M350 308 C366 294 382 282 398 276" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M350 308 C360 322 372 332 386 338" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        {/* Tip circles */}
        <circle cx="120" cy="330" r="3.5" fill="currentColor"/>
        <circle cx="132" cy="388" r="3" fill="currentColor"/>
        <circle cx="102" cy="276" r="3" fill="currentColor"/>
        <circle cx="114" cy="338" r="3" fill="currentColor"/>
        <circle cx="128" cy="288" r="2.5" fill="currentColor"/>
        <circle cx="140" cy="342" r="2.5" fill="currentColor"/>
        <circle cx="380" cy="330" r="3.5" fill="currentColor"/>
        <circle cx="368" cy="388" r="3" fill="currentColor"/>
        <circle cx="398" cy="276" r="3" fill="currentColor"/>
        <circle cx="386" cy="338" r="3" fill="currentColor"/>
        <circle cx="372" cy="288" r="2.5" fill="currentColor"/>
        <circle cx="360" cy="342" r="2.5" fill="currentColor"/>
      </motion.g>

      {/* ═══ LEAVES zone ═══ */}
      <motion.g
        animate={{ opacity: opacity("leaves") }}
        transition={{ duration: 0.5 }}
        onMouseEnter={() => onZoneEnter("leaves")}
        onMouseLeave={onZoneLeave}
        style={{ cursor: "pointer" }}
      >
        {/* Hit areas */}
        <rect x="60" y="240" width="180" height="100" fill="transparent" />
        <rect x="260" y="240" width="180" height="100" fill="transparent" />
        {/* Upper branches */}
        <path d="M245 318 C222 294 194 276 162 264" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
        <path d="M255 318 C278 294 306 276 338 264" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
        <path d="M196 280 C178 264 158 252 136 246" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M162 264 C148 250 132 240 116 234" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M162 264 C154 278 144 288 132 294" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M304 280 C322 264 342 252 364 246" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M338 264 C352 250 368 240 384 234" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M338 264 C346 278 356 288 368 294" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        {/* Tip circles */}
        <circle cx="116" cy="234" r="3.5" fill="currentColor"/>
        <circle cx="132" cy="294" r="3" fill="currentColor"/>
        <circle cx="136" cy="246" r="2.5" fill="currentColor"/>
        <circle cx="384" cy="234" r="3.5" fill="currentColor"/>
        <circle cx="368" cy="294" r="3" fill="currentColor"/>
        <circle cx="364" cy="246" r="2.5" fill="currentColor"/>
      </motion.g>

      {/* ═══ CROWN zone ═══ */}
      <motion.g
        animate={{ opacity: opacity("crown") }}
        transition={{ duration: 0.5 }}
        onMouseEnter={() => onZoneEnter("crown")}
        onMouseLeave={onZoneLeave}
        style={{ cursor: "pointer" }}
      >
        {/* Hit area */}
        <rect x="100" y="130" width="300" height="155" fill="transparent" />
        {/* Top pair branches */}
        <path d="M246 278 C228 256 206 240 180 228" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <path d="M254 278 C272 256 294 240 320 228" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <path d="M208 244 C194 230 178 220 160 214" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M180 228 C166 216 152 206 136 200" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M180 228 C172 242 162 252 150 258" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M292 244 C306 230 322 220 340 214" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M320 228 C334 216 348 206 364 200" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M320 228 C328 242 338 252 350 258" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        {/* Center top */}
        <path d="M249 240 C248 218 247 196 246 174" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <path d="M246 210 C236 196 224 186 210 180" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M246 210 C256 196 268 186 282 180" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M246 174 C236 162 224 152 210 146" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M246 174 C256 162 268 152 282 146" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        {/* Crown tips */}
        <circle cx="136" cy="200" r="3" fill="currentColor"/>
        <circle cx="150" cy="258" r="3" fill="currentColor"/>
        <circle cx="160" cy="214" r="2.5" fill="currentColor"/>
        <circle cx="210" cy="146" r="4" fill="currentColor"/>
        <circle cx="282" cy="146" r="4" fill="currentColor"/>
        <circle cx="246" cy="174" r="5" fill="currentColor"/>
        <circle cx="210" cy="180" r="2.5" fill="currentColor"/>
        <circle cx="282" cy="180" r="2.5" fill="currentColor"/>
        <circle cx="340" cy="214" r="2.5" fill="currentColor"/>
        <circle cx="364" cy="200" r="3" fill="currentColor"/>
        <circle cx="350" cy="258" r="3" fill="currentColor"/>
        {/* Crown halo */}
        <circle cx="246" cy="174" r="12" fill="none" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.5"/>
      </motion.g>
    </svg>
  );
}

/* ── Zone label box ── */
function ZoneLabel({ zone, zoneData }: {
  zone: ZoneId;
  zoneData: { title: string; desc: string };
}) {
  const positions: Record<ZoneId, string> = {
    roots:    "bottom-[12%] left-1/2 -translate-x-1/2",
    trunk:    "bottom-[28%] right-[8%]",
    branches: "top-[52%] left-[5%]",
    leaves:   "top-[32%] right-[6%]",
    crown:    "top-[10%] left-1/2 -translate-x-1/2",
  };

  return (
    <motion.div
      key={zone}
      initial={{ opacity: 0, y: 8, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -4, scale: 0.98 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className={`absolute ${positions[zone]} max-w-[220px] z-20 pointer-events-none`}
    >
      <div className="card-premium rounded-xl px-5 py-4">
        <p className="font-serif text-base font-semibold text-gold-bright mb-1.5 leading-tight">
          {zoneData.title}
        </p>
        <p className="font-sans text-xs text-cream-muted leading-relaxed">
          {zoneData.desc}
        </p>
      </div>
    </motion.div>
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
  const y       = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const zoneData = activeZone ? t.hero.zone[activeZone] : null;

  /* Title words for staggered reveal */
  const titleWords = t.hero.tagline.split(" ");

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-deep-950 overflow-hidden flex items-center"
    >
      {/* Grain texture */}
      <div className="grain-overlay absolute inset-0 pointer-events-none" />

      {/* Ambient glow — bottom center (sunrise) */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 100%, rgba(196,145,26,0.10) 0%, rgba(196,145,26,0.04) 40%, transparent 70%)",
        }}
      />

      {/* Vignette edges */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 50%, transparent 30%, rgba(7,7,6,0.65) 100%)",
        }}
      />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pt-24 pb-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-8"
      >
        {/* ── LEFT: Text content ── */}
        <div className="flex-1 lg:max-w-[48%] text-center lg:text-left">

          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-xs font-medium tracking-[0.25em] text-gold-warm uppercase mb-8"
          >
            {t.hero.eyebrow}
          </motion.p>

          {/* Main title — word stagger */}
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-cream-100 leading-[1.02] mb-6">
            {titleWords.map((word, i) => (
              <span key={i} className="overflow-hidden inline-block mr-4">
                <motion.span
                  className="inline-block"
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.9,
                    delay: 0.4 + i * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          {/* Sub-lines */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="mb-4"
          >
            <p className="font-display text-xl md:text-2xl text-cream-muted italic font-light leading-snug">
              {t.hero.sub1}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            <hr className="hr-gold my-6 max-w-[160px] mx-auto lg:mx-0" />
            <p className="font-sans text-sm text-cream-muted tracking-wide">
              {t.hero.sub2}
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.3 }}
            className="flex flex-col sm:flex-row gap-4 mt-10 justify-center lg:justify-start"
          >
            <Link
              href="/blog"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-medium text-deep-950 bg-gold-warm hover:bg-gold-bright transition-all duration-300 hover:shadow-[0_0_24px_rgba(196,145,26,0.35)]"
            >
              {t.hero.cta1}
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-medium text-cream-200 border border-cream-muted/25 hover:border-gold-warm hover:text-gold-bright transition-all duration-300"
            >
              {t.hero.cta2}
            </Link>
          </motion.div>
        </div>

        {/* ── RIGHT: Interactive Tree ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex-1 w-full max-w-[480px] lg:max-w-[520px] aspect-[500/580]"
        >
          {/* Warm aura behind tree */}
          <div
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at 50% 60%, rgba(196,145,26,0.06) 0%, transparent 65%)",
            }}
          />

          <TreeOfLife
            activeZone={activeZone}
            onZoneEnter={setActiveZone}
            onZoneLeave={() => setActiveZone(null)}
          />

          {/* Zone label — appears on hover */}
          <AnimatePresence mode="wait">
            {activeZone && zoneData && (
              <ZoneLabel key={activeZone} zone={activeZone} zoneData={zoneData} />
            )}
          </AnimatePresence>

          {/* Hover hint — only when no zone active */}
          <AnimatePresence>
            {!activeZone && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-[-2rem] left-1/2 -translate-x-1/2 text-center font-sans text-xs text-cream-dim tracking-[0.18em] uppercase whitespace-nowrap"
              >
                {t.hero.explore}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="font-sans text-[10px] tracking-[0.3em] text-cream-dim uppercase">{t.hero.scroll}</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-gold-warm/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}
