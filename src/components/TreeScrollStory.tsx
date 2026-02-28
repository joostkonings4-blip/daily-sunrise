"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence, useMotionValueEvent, MotionValue } from "framer-motion";
import { useTranslation } from "@/context/LanguageContext";

type ZoneId = "roots" | "trunk" | "branches" | "leaves" | "crown";
const ZONES: ZoneId[] = ["roots", "trunk", "branches", "leaves", "crown"];

/* ─── Tree SVG (driven by activeZone prop) ─── */
function TreeSVG({ activeZone }: { activeZone: ZoneId }) {
  const active  = 0.85;
  const dimmed  = 0.05;

  function o(zone: ZoneId) {
    return activeZone === zone ? active : dimmed;
  }
  const trunkO  = activeZone === "trunk"  ? active : dimmed;
  const circleO = activeZone === "crown"  ? 0.55   : 0.08;

  return (
    <svg
      viewBox="0 0 500 580"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      style={{ color: "#D4A820" }}
    >
      {/* Sacred circle */}
      <motion.circle
        cx="250" cy="280" r="225"
        stroke="currentColor" strokeWidth="1.2"
        animate={{ opacity: circleO }}
        transition={{ duration: 0.7 }}
      />
      <motion.circle
        cx="250" cy="280" r="218"
        stroke="currentColor" strokeWidth="0.5"
        animate={{ opacity: circleO * 0.6 }}
        transition={{ duration: 0.7 }}
      />

      {/* ROOTS */}
      <motion.g animate={{ opacity: o("roots") }} transition={{ duration: 0.6 }}>
        <path d="M250 490 C250 510 250 525 250 542" stroke="currentColor" strokeWidth="6" strokeLinecap="round"/>
        <path d="M246 480 C232 496 214 510 194 520" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
        <path d="M243 492 C222 510 196 524 168 532" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <path d="M240 502 C214 520 184 534 152 542" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M254 480 C268 496 286 510 306 520" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
        <path d="M257 492 C278 510 304 524 332 532" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <path d="M260 502 C286 520 316 534 348 542" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M194 520 C184 528 172 534 160 538" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M194 520 C192 530 190 538 188 544" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M168 532 C156 540 144 546 130 550" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M306 520 C316 528 328 534 340 538" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M306 520 C308 530 310 538 312 544" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M332 532 C344 540 356 546 370 550" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="250" cy="542" r="3" fill="currentColor"/>
        <circle cx="160" cy="538" r="2.5" fill="currentColor"/>
        <circle cx="188" cy="544" r="2" fill="currentColor"/>
        <circle cx="130" cy="550" r="2" fill="currentColor"/>
        <circle cx="340" cy="538" r="2.5" fill="currentColor"/>
        <circle cx="312" cy="544" r="2" fill="currentColor"/>
        <circle cx="370" cy="550" r="2" fill="currentColor"/>
      </motion.g>

      {/* TRUNK */}
      <motion.g animate={{ opacity: trunkO }} transition={{ duration: 0.6 }}>
        <path d="M247 490 C244 460 242 430 242 400 C242 370 243 350 245 330 C247 310 248 295 249 280 C249 265 249 250 249 235 C249 220 249 210 250 200"
              stroke="currentColor" strokeWidth="11" strokeLinecap="round"/>
        <path d="M251 490 C251 460 252 430 252 400 C252 370 251 350 250 330 C250 310 250 295 250 280 C250 265 250 250 250 235"
              stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeOpacity="0.35"/>
        <path d="M245 455 C228 440 206 428 180 420" stroke="currentColor" strokeWidth="7" strokeLinecap="round"/>
        <path d="M255 455 C272 440 294 428 320 420" stroke="currentColor" strokeWidth="7" strokeLinecap="round"/>
        <path d="M208 432 C194 422 178 414 162 410" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round"/>
        <path d="M180 420 C168 410 156 402 144 398" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M180 420 C172 432 162 440 150 444" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M292 432 C306 422 322 414 338 410" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round"/>
        <path d="M320 420 C332 410 344 402 356 398" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M320 420 C328 432 338 440 350 444" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="144" cy="398" r="3.5" fill="currentColor"/>
        <circle cx="150" cy="444" r="3" fill="currentColor"/>
        <circle cx="356" cy="398" r="3.5" fill="currentColor"/>
        <circle cx="350" cy="444" r="3" fill="currentColor"/>
      </motion.g>

      {/* BRANCHES */}
      <motion.g animate={{ opacity: o("branches") }} transition={{ duration: 0.6 }}>
        <path d="M244 402 C222 382 194 368 162 358" stroke="currentColor" strokeWidth="6" strokeLinecap="round"/>
        <path d="M256 402 C278 382 306 368 338 358" stroke="currentColor" strokeWidth="6" strokeLinecap="round"/>
        <path d="M196 372 C178 358 160 348 140 342" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <path d="M162 358 C148 346 134 336 120 330" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M162 358 C154 372 144 382 132 388" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M304 372 C322 358 340 348 360 342" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <path d="M338 358 C352 346 366 336 380 330" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M338 358 C346 372 356 382 368 388" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M244 362 C218 338 186 320 150 308" stroke="currentColor" strokeWidth="5" strokeLinecap="round"/>
        <path d="M256 362 C282 338 314 320 350 308" stroke="currentColor" strokeWidth="5" strokeLinecap="round"/>
        <path d="M190 324 C170 308 150 296 128 288" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M150 308 C134 294 118 282 102 276" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M150 308 C140 322 128 332 114 338" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M310 324 C330 308 350 296 372 288" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M350 308 C366 294 382 282 398 276" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M350 308 C360 322 372 332 386 338" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="120" cy="330" r="3.5" fill="currentColor"/>
        <circle cx="132" cy="388" r="3" fill="currentColor"/>
        <circle cx="102" cy="276" r="3" fill="currentColor"/>
        <circle cx="114" cy="338" r="3" fill="currentColor"/>
        <circle cx="380" cy="330" r="3.5" fill="currentColor"/>
        <circle cx="368" cy="388" r="3" fill="currentColor"/>
        <circle cx="398" cy="276" r="3" fill="currentColor"/>
        <circle cx="386" cy="338" r="3" fill="currentColor"/>
      </motion.g>

      {/* LEAVES */}
      <motion.g animate={{ opacity: o("leaves") }} transition={{ duration: 0.6 }}>
        <path d="M245 318 C222 294 194 276 162 264" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
        <path d="M255 318 C278 294 306 276 338 264" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
        <path d="M196 280 C178 264 158 252 136 246" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M162 264 C148 250 132 240 116 234" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M162 264 C154 278 144 288 132 294" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M304 280 C322 264 342 252 364 246" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M338 264 C352 250 368 240 384 234" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M338 264 C346 278 356 288 368 294" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="116" cy="234" r="3.5" fill="currentColor"/>
        <circle cx="132" cy="294" r="3" fill="currentColor"/>
        <circle cx="136" cy="246" r="2.5" fill="currentColor"/>
        <circle cx="384" cy="234" r="3.5" fill="currentColor"/>
        <circle cx="368" cy="294" r="3" fill="currentColor"/>
        <circle cx="364" cy="246" r="2.5" fill="currentColor"/>
      </motion.g>

      {/* CROWN */}
      <motion.g animate={{ opacity: o("crown") }} transition={{ duration: 0.6 }}>
        <path d="M246 278 C228 256 206 240 180 228" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <path d="M254 278 C272 256 294 240 320 228" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <path d="M208 244 C194 230 178 220 160 214" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M180 228 C166 216 152 206 136 200" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M180 228 C172 242 162 252 150 258" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M292 244 C306 230 322 220 340 214" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M320 228 C334 216 348 206 364 200" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M320 228 C328 242 338 252 350 258" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M249 240 C248 218 247 196 246 174" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <path d="M246 210 C236 196 224 186 210 180" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M246 210 C256 196 268 186 282 180" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M246 174 C236 162 224 152 210 146" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M246 174 C256 162 268 152 282 146" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="136" cy="200" r="3" fill="currentColor"/>
        <circle cx="150" cy="258" r="3" fill="currentColor"/>
        <circle cx="210" cy="146" r="4" fill="currentColor"/>
        <circle cx="282" cy="146" r="4" fill="currentColor"/>
        <circle cx="246" cy="174" r="5" fill="currentColor"/>
        <circle cx="210" cy="180" r="2.5" fill="currentColor"/>
        <circle cx="282" cy="180" r="2.5" fill="currentColor"/>
        <circle cx="364" cy="200" r="3" fill="currentColor"/>
        <circle cx="350" cy="258" r="3" fill="currentColor"/>
        {/* Crown halo */}
        <circle cx="246" cy="174" r="12" fill="none" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.6"/>
      </motion.g>
    </svg>
  );
}

/* ─── Progress dots ─── */
function ProgressDots({ active }: { active: number }) {
  return (
    <div className="flex flex-col gap-3">
      {ZONES.map((_, i) => (
        <motion.div
          key={i}
          animate={{
            width:   i === active ? 24 : 4,
            opacity: i === active ? 1  : 0.25,
          }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="h-px bg-gold-warm rounded-full"
        />
      ))}
    </div>
  );
}

/* ─── Sub-components that read scroll value ─── */
function ScrollTree({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  const [zone, setZone] = useState<ZoneId>("roots");

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(Math.floor(v * ZONES.length), ZONES.length - 1);
    setZone(ZONES[idx]);
  });

  return (
    <div className="relative flex items-center justify-center">
      <motion.div
        animate={{ opacity: [0.04, 0.09, 0.04] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(212,168,32,0.12) 0%, transparent 65%)",
        }}
      />
      <div className="w-full max-w-[440px] aspect-[500/580]">
        <TreeSVG activeZone={zone} />
      </div>
    </div>
  );
}

function ScrollContent({
  scrollYProgress,
  t,
}: {
  scrollYProgress: MotionValue<number>;
  t: ReturnType<typeof useTranslation>["t"];
}) {
  const [idx, setIdx] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const i = Math.min(Math.floor(v * ZONES.length), ZONES.length - 1);
    setIdx(i);
  });

  const zone     = ZONES[idx];
  const zoneData = t.hero.zone[zone];
  const number   = String(idx + 1).padStart(2, "0");

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={zone}
        initial={{ opacity: 0, y: 32, filter: "blur(4px)" }}
        animate={{ opacity: 1, y: 0,  filter: "blur(0px)" }}
        exit={{    opacity: 0, y: -20, filter: "blur(4px)" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="space-y-7"
      >
        {/* Number */}
        <div className="flex items-center gap-4">
          <span className="font-sans text-xs font-medium tracking-[0.3em] text-gold-warm">
            {number}
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-gold-rich/40 to-transparent" />
        </div>

        {/* Title */}
        <h2 className="font-serif text-5xl md:text-6xl font-bold leading-tight" style={{ color: "#FFFDF6" }}>
          {zoneData.title}
        </h2>

        {/* Divider */}
        <hr className="hr-gold max-w-[100px]" />

        {/* Body */}
        <p className="font-sans text-lg leading-relaxed max-w-md" style={{ color: "#C8B49A" }}>
          {zoneData.desc}
        </p>

        {/* Step indicator */}
        <p className="font-sans text-xs tracking-[0.25em] uppercase" style={{ color: "#7A6B52" }}>
          {idx + 1} / {ZONES.length}
        </p>
      </motion.div>
    </AnimatePresence>
  );
}

function ScrollDots({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  const [idx, setIdx] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const i = Math.min(Math.floor(v * ZONES.length), ZONES.length - 1);
    setIdx(i);
  });

  return <ProgressDots active={idx} />;
}

/* ─── Main component ─── */
export default function TreeScrollStory() {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div
      ref={containerRef}
      className="relative"
      style={{ height: `${ZONES.length * 100}vh` }}
    >
      {/* ─── Sticky viewport ─── */}
      <div
        className="sticky top-0 h-screen overflow-hidden flex items-center"
        style={{ backgroundColor: "#1A1610" }}
      >
        {/* Grain */}
        <div className="grain-overlay absolute inset-0 pointer-events-none" />

        {/* Ambient glow */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          aria-hidden
        >
          <div
            className="w-[600px] h-[600px] rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(196,145,26,0.05) 0%, transparent 65%)",
            }}
          />
        </div>

        {/* Content grid */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT — Tree */}
          <ScrollTree scrollYProgress={scrollYProgress} />
          {/* RIGHT — Story text */}
          <ScrollContent scrollYProgress={scrollYProgress} t={t} />
        </div>

        {/* Progress dots — right edge */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 z-20">
          <ScrollDots scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </div>
  );
}
