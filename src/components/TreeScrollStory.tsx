"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "@/context/LanguageContext";

type ZoneId = "roots" | "trunk" | "branches" | "leaves" | "crown";
const ZONES: ZoneId[] = ["roots", "trunk", "branches", "leaves", "crown"];

/* ─────────────────────────────────────────────────────────────────────────────
   Zone color logic — tree fills from roots to crown as you scroll
   past   = warm amber (zone has been "lived through")
   active = bright gold (current focus)
   future = very faint (not yet reached)
───────────────────────────────────────────────────────────────────────────── */
const GOLD   = "#C4911A";
const WARM   = "rgba(196,145,26,0.42)";
const FAINT  = "rgba(196,145,26,0.10)";

function zoneOpacity(zoneIdx: number, active: number): string {
  if (zoneIdx < active)  return WARM;
  if (zoneIdx === active) return GOLD;
  return FAINT;
}
function zoneWidth(zoneIdx: number, active: number, base: number): number {
  return zoneIdx === active ? base * 1.45 : base;
}
function circleFill(zoneIdx: number, active: number): string {
  if (zoneIdx < active)  return WARM;
  if (zoneIdx === active) return GOLD;
  return FAINT;
}

/* ─────────────────────────────────────────────────────────────────────────────
   Tree SVG — same levensboom structure as Hero, zone-aware colouring
───────────────────────────────────────────────────────────────────────────── */
function ZoneTree({ active }: { active: number }) {
  const crowns   = zoneOpacity(4, active);
  const leavesC  = zoneOpacity(3, active);
  const branchC  = zoneOpacity(2, active);
  const trunkC   = zoneOpacity(1, active);
  const rootsC   = zoneOpacity(0, active);

  const crownW   = zoneWidth(4, active, 2.5);
  const leavesW  = zoneWidth(3, active, 3);
  const branchW  = zoneWidth(2, active, 7);
  const trunkW   = zoneWidth(1, active, 9);
  const rootsW   = zoneWidth(0, active, 7);

  const crownFill  = circleFill(4, active);
  const leavesFill = circleFill(3, active);
  const branchFill = circleFill(2, active);
  const trunkFill  = circleFill(1, active);
  const rootsFill  = circleFill(0, active);

  return (
    <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">

      {/* ══ CROWN (zone 4) ══ */}
      <g>
        {/* Sun glow when crown is active */}
        {active === 4 && (
          <motion.circle
            cx="250" cy="112" r="48"
            fill={GOLD}
            animate={{ opacity: [0.10, 0.24, 0.10], r: [44, 52, 44] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        )}
        <circle cx="250" cy="250" r="230" stroke={crowns} strokeWidth={crownW} />
        <circle cx="250" cy="250" r="221" stroke={crowns} strokeWidth="0.8" />
        <path d="M 250 180 C 250 162 249 142 248 116" stroke={crowns} strokeWidth="4" strokeLinecap="round"/>
        <path d="M 249 152 C 230 136 210 124 192 118" stroke={crowns} strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M 249 152 C 268 136 290 124 308 118" stroke={crowns} strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M 249 132 C 232 118 215 108 198 102" stroke={crowns} strokeWidth="2" strokeLinecap="round"/>
        <path d="M 249 132 C 266 118 283 108 300 102" stroke={crowns} strokeWidth="2" strokeLinecap="round"/>
        <path d="M 192 118 C 180 113 170 111 161 113" stroke={crowns} strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M 308 118 C 320 113 330 111 339 113" stroke={crowns} strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="248" cy="116" r="6"   fill={crownFill} />
        <circle cx="192" cy="118" r="4.5" fill={crownFill} />
        <circle cx="308" cy="118" r="4.5" fill={crownFill} />
        <circle cx="198" cy="102" r="3.5" fill={crownFill} />
        <circle cx="300" cy="102" r="3.5" fill={crownFill} />
        <circle cx="161" cy="113" r="3"   fill={crownFill} />
        <circle cx="339" cy="113" r="3"   fill={crownFill} />
        <circle cx="248" cy="112" r="14"  stroke={crowns} strokeWidth="1.2" />
        <circle cx="248" cy="112" r="22"  stroke={crowns} strokeWidth="0.6" />
      </g>

      {/* ══ LEAVES (zone 3) ══ */}
      <g>
        <path d="M 247 198 C 222 182 196 172 170 166" stroke={leavesC} strokeWidth={leavesW} strokeLinecap="round"/>
        <path d="M 253 198 C 278 182 304 172 330 166" stroke={leavesC} strokeWidth={leavesW} strokeLinecap="round"/>
        <path d="M 170 166 C 157 162 146 160 137 163" stroke={leavesC} strokeWidth="2" strokeLinecap="round"/>
        <path d="M 330 166 C 343 162 354 160 363 163" stroke={leavesC} strokeWidth="2" strokeLinecap="round"/>
        <path d="M 170 166 C 162 155 152 147 140 143" stroke={leavesC} strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M 330 166 C 338 155 348 147 360 143" stroke={leavesC} strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M 246 220 C 216 203 183 191 153 185" stroke={leavesC} strokeWidth="3.5" strokeLinecap="round"/>
        <path d="M 254 220 C 284 203 317 191 347 185" stroke={leavesC} strokeWidth="3.5" strokeLinecap="round"/>
        <path d="M 153 185 C 139 181 128 180 118 183" stroke={leavesC} strokeWidth="2" strokeLinecap="round"/>
        <path d="M 347 185 C 361 181 372 180 382 183" stroke={leavesC} strokeWidth="2" strokeLinecap="round"/>
        <path d="M 153 185 C 144 174 133 166 120 162" stroke={leavesC} strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M 347 185 C 356 174 367 166 380 162" stroke={leavesC} strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="137" cy="163" r="4.5" fill={leavesFill} />
        <circle cx="363" cy="163" r="4.5" fill={leavesFill} />
        <circle cx="140" cy="143" r="3.5" fill={leavesFill} />
        <circle cx="360" cy="143" r="3.5" fill={leavesFill} />
        <circle cx="118" cy="183" r="4.5" fill={leavesFill} />
        <circle cx="382" cy="183" r="4.5" fill={leavesFill} />
        <circle cx="120" cy="162" r="3.5" fill={leavesFill} />
        <circle cx="380" cy="162" r="3.5" fill={leavesFill} />
      </g>

      {/* ══ BRANCHES (zone 2) ══ */}
      <g>
        <path d="M 244 326 C 198 302 148 282 104 272" stroke={branchC} strokeWidth={branchW} strokeLinecap="round"/>
        <path d="M 256 326 C 302 302 352 282 396 272" stroke={branchC} strokeWidth={branchW} strokeLinecap="round"/>
        <path d="M 104 272 C 84 267 68 264 54 267"   stroke={branchC} strokeWidth="4.5" strokeLinecap="round"/>
        <path d="M 396 272 C 416 267 432 264 446 267" stroke={branchC} strokeWidth="4.5" strokeLinecap="round"/>
        <path d="M 104 272 C 90 260 76 250 62 246"   stroke={branchC} strokeWidth="3" strokeLinecap="round"/>
        <path d="M 104 272 C 96 287 86 298 74 303"   stroke={branchC} strokeWidth="3" strokeLinecap="round"/>
        <path d="M 396 272 C 410 260 424 250 438 246" stroke={branchC} strokeWidth="3" strokeLinecap="round"/>
        <path d="M 396 272 C 404 287 414 298 426 303" stroke={branchC} strokeWidth="3" strokeLinecap="round"/>
        <path d="M 244 298 C 200 276 154 260 112 252" stroke={branchC} strokeWidth="6" strokeLinecap="round"/>
        <path d="M 256 298 C 300 276 346 260 388 252" stroke={branchC} strokeWidth="6" strokeLinecap="round"/>
        <path d="M 244 272 C 205 252 163 237 124 229" stroke={branchC} strokeWidth="5.5" strokeLinecap="round"/>
        <path d="M 256 272 C 295 252 337 237 376 229" stroke={branchC} strokeWidth="5.5" strokeLinecap="round"/>
        <path d="M 245 248 C 210 230 172 216 136 208" stroke={branchC} strokeWidth="5" strokeLinecap="round"/>
        <path d="M 255 248 C 290 230 328 216 364 208" stroke={branchC} strokeWidth="5" strokeLinecap="round"/>
        <circle cx="54"  cy="267" r="5.5" fill={branchFill} />
        <circle cx="446" cy="267" r="5.5" fill={branchFill} />
        <circle cx="62"  cy="246" r="4.5" fill={branchFill} />
        <circle cx="438" cy="246" r="4.5" fill={branchFill} />
        <circle cx="74"  cy="303" r="4"   fill={branchFill} />
        <circle cx="426" cy="303" r="4"   fill={branchFill} />
        <circle cx="72"  cy="225" r="3.5" fill={branchFill} />
        <circle cx="428" cy="225" r="3.5" fill={branchFill} />
        <circle cx="86"  cy="204" r="3.5" fill={branchFill} />
        <circle cx="414" cy="204" r="3.5" fill={branchFill} />
        <circle cx="98"  cy="205" r="4"   fill={branchFill} />
        <circle cx="402" cy="205" r="4"   fill={branchFill} />
      </g>

      {/* ══ TRUNK (zone 1) ══ */}
      <g>
        {active === 1 && (
          <motion.rect
            x="235" y="180" width="30" height="190" rx="15"
            fill={GOLD}
            animate={{ opacity: [0.08, 0.20, 0.08] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />
        )}
        <path
          d="M 243 368 C 241 338 240 306 241 274 C 242 250 244 230 247 210 L 248 194 C 249 188 250 184 250 181 C 250 184 251 188 252 194 L 253 210 C 256 230 258 250 259 274 C 260 306 259 338 257 368 Z"
          fill={trunkC} fillOpacity="0.9"
        />
        <path d="M 244 350 C 222 338 196 328 170 322" stroke={trunkC} strokeWidth={trunkW} strokeLinecap="round"/>
        <path d="M 256 350 C 278 338 304 328 330 322" stroke={trunkC} strokeWidth={trunkW} strokeLinecap="round"/>
        <path d="M 170 322 C 150 317 132 314 116 316" stroke={trunkC} strokeWidth="5.5" strokeLinecap="round"/>
        <path d="M 330 322 C 350 317 368 314 384 316" stroke={trunkC} strokeWidth="5.5" strokeLinecap="round"/>
        <path d="M 170 322 C 154 310 136 300 118 295" stroke={trunkC} strokeWidth="4" strokeLinecap="round"/>
        <path d="M 330 322 C 346 310 364 300 382 295" stroke={trunkC} strokeWidth="4" strokeLinecap="round"/>
        <circle cx="74"  cy="313" r="5"   fill={trunkFill} />
        <circle cx="426" cy="313" r="5"   fill={trunkFill} />
        <circle cx="118" cy="295" r="4.5" fill={trunkFill} />
        <circle cx="382" cy="295" r="4.5" fill={trunkFill} />
      </g>

      {/* ══ ROOTS (zone 0) ══ */}
      <g>
        {active === 0 && (
          <motion.ellipse
            cx="250" cy="400" rx="90" ry="18"
            fill={GOLD}
            animate={{ opacity: [0.12, 0.28, 0.12] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        )}
        <path d="M 250 368 C 250 390 250 412 250 432"  stroke={rootsC} strokeWidth="11" strokeLinecap="round"/>
        <path d="M 244 380 C 198 402 148 422 104 433"  stroke={rootsC} strokeWidth={rootsW} strokeLinecap="round"/>
        <path d="M 256 380 C 302 402 352 422 396 433"  stroke={rootsC} strokeWidth={rootsW} strokeLinecap="round"/>
        <path d="M 104 433 C 84 438 68 440 54 437"     stroke={rootsC} strokeWidth="4.5" strokeLinecap="round"/>
        <path d="M 396 433 C 416 438 432 440 446 437"  stroke={rootsC} strokeWidth="4.5" strokeLinecap="round"/>
        <path d="M 104 433 C 90 445 75 454 60 458"     stroke={rootsC} strokeWidth="3" strokeLinecap="round"/>
        <path d="M 396 433 C 410 445 425 454 440 458"  stroke={rootsC} strokeWidth="3" strokeLinecap="round"/>
        <path d="M 244 398 C 202 420 158 440 116 450"  stroke={rootsC} strokeWidth="6" strokeLinecap="round"/>
        <path d="M 256 398 C 298 420 342 440 384 450"  stroke={rootsC} strokeWidth="6" strokeLinecap="round"/>
        <path d="M 245 415 C 210 434 174 450 140 459"  stroke={rootsC} strokeWidth="5" strokeLinecap="round"/>
        <path d="M 255 415 C 290 434 326 450 360 459"  stroke={rootsC} strokeWidth="5" strokeLinecap="round"/>
        <path d="M 250 432 C 234 448 218 460 202 466"  stroke={rootsC} strokeWidth="5.5" strokeLinecap="round"/>
        <path d="M 250 432 C 266 448 282 460 298 466"  stroke={rootsC} strokeWidth="5.5" strokeLinecap="round"/>
        <circle cx="54"  cy="437" r="5.5" fill={rootsFill} />
        <circle cx="446" cy="437" r="5.5" fill={rootsFill} />
        <circle cx="60"  cy="458" r="4.5" fill={rootsFill} />
        <circle cx="440" cy="458" r="4.5" fill={rootsFill} />
        <circle cx="76"  cy="402" r="4"   fill={rootsFill} />
        <circle cx="424" cy="402" r="4"   fill={rootsFill} />
        <circle cx="72"  cy="454" r="4.5" fill={rootsFill} />
        <circle cx="428" cy="454" r="4.5" fill={rootsFill} />
        <circle cx="175" cy="470" r="3.5" fill={rootsFill} />
        <circle cx="325" cy="470" r="3.5" fill={rootsFill} />
        <circle cx="250" cy="432" r="4.5" fill={rootsFill} />
      </g>
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   Main component — sticky scroll with SVG tree zone illumination
───────────────────────────────────────────────────────────────────────────── */
export default function TreeScrollStory() {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  /* Reliable scroll detection via window — avoids Framer Motion useScroll issues */
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onScroll = () => {
      const rect  = el.getBoundingClientRect();
      const scrolled = -rect.top;
      const total    = rect.height - window.innerHeight;
      if (total <= 0) return;
      const progress = Math.max(0, Math.min(1, scrolled / total));
      const i = Math.min(Math.floor(progress * ZONES.length), ZONES.length - 1);
      setActiveIdx(i);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // run once on mount
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const zone     = ZONES[activeIdx];
  const zoneData = t.hero.zone[zone];
  const zoneNum  = String(activeIdx + 1).padStart(2, "0");

  return (
    <div ref={containerRef} style={{ height: `${ZONES.length * 100}vh` }}>

      {/* ── STICKY VIEWPORT ───────────────────────────────────────────── */}
      <div
        className="sticky top-0 h-screen w-full overflow-hidden"
        style={{ backgroundColor: "#FFFDF6" }}
      >
        {/* Warm ambient glow — shifts per zone (roots=bottom, crown=top) */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{
            background: activeIdx <= 1
              ? "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(201,138,24,0.13) 0%, transparent 70%)"
              : activeIdx >= 4
              ? "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(201,138,24,0.18) 0%, transparent 70%)"
              : "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(201,138,24,0.11) 0%, transparent 70%)",
          }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />

        {/* Tree — centered, large */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="w-full max-w-[420px] md:max-w-[500px] lg:max-w-[560px] aspect-square px-8"
            animate={{ scale: [0.98, 1.0, 0.98] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          >
            <ZoneTree active={activeIdx} />
          </motion.div>
        </div>

        {/* ── TEXT OVERLAY — bottom left ────────────────────────────── */}
        <div className="absolute bottom-0 left-0 right-0 z-10 px-8 md:px-16 lg:px-24 pb-14 md:pb-20">

          <AnimatePresence mode="wait">
            <motion.div
              key={zone}
              initial={{ opacity: 0, y: 40, filter: "blur(5px)" }}
              animate={{ opacity: 1, y: 0,  filter: "blur(0px)" }}
              exit={{    opacity: 0, y: -20, filter: "blur(4px)" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-lg"
            >
              {/* Zone number + hairline */}
              <div className="flex items-center gap-4 mb-4">
                <span
                  className="font-sans text-xs font-semibold tracking-[0.38em] uppercase"
                  style={{ color: "#C4911A" }}
                >
                  {zoneNum}
                </span>
                <div
                  className="h-px flex-1 max-w-[56px]"
                  style={{ background: "linear-gradient(90deg, rgba(196,145,26,0.6), transparent)" }}
                />
              </div>

              {/* Title */}
              <h2
                className="font-serif font-bold leading-none mb-4"
                style={{
                  fontSize: "clamp(2.8rem, 8vw, 5.5rem)",
                  color: "#1A1610",
                }}
              >
                {zoneData.title}
              </h2>

              {/* Thin gold bar */}
              <div className="mb-4 w-12 h-px" style={{ background: "rgba(196,145,26,0.55)" }} />

              {/* Description */}
              <p
                className="font-sans leading-relaxed"
                style={{
                  fontSize: "clamp(0.9rem, 1.6vw, 1.1rem)",
                  color: "#7A6B52",
                  maxWidth: "440px",
                }}
              >
                {zoneData.desc}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Progress dashes */}
          <div className="flex items-center gap-2.5 mt-7">
            {ZONES.map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  width:   i === activeIdx ? 34 : 10,
                  opacity: i === activeIdx ? 1  : 0.28,
                }}
                style={{ backgroundColor: i === activeIdx ? "#C4911A" : "#1A1610" }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="h-[2px] rounded-full"
              />
            ))}
            <span
              className="ml-2 font-sans text-[11px] tracking-[0.22em] uppercase"
              style={{ color: "rgba(26,22,16,0.35)" }}
            >
              {activeIdx + 1} / {ZONES.length}
            </span>
          </div>
        </div>

        {/* Scroll hint — visible only on zone 0 */}
        <motion.div
          className="absolute bottom-6 right-8 md:right-16 z-20 flex flex-col items-center gap-1.5"
          animate={{ opacity: activeIdx === 0 ? 1 : 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <span
            className="font-sans text-[10px] tracking-[0.3em] uppercase"
            style={{ color: "rgba(26,22,16,0.38)" }}
          >
            {t.hero.scroll}
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-8"
            style={{ background: "linear-gradient(to bottom, rgba(196,145,26,0.45), transparent)" }}
          />
        </motion.div>
      </div>
    </div>
  );
}
