"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useTranslation } from "@/context/LanguageContext";

type ZoneId = "roots" | "trunk" | "branches" | "leaves" | "crown";
const ZONES: ZoneId[] = ["roots", "trunk", "branches", "leaves", "crown"];

export default function TreeScrollStory() {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  /*
   * Pan through the image: roots (bottom of tree) → crown (top of tree)
   * The image is scaled to 1.55× so we have enough room to pan ±15% safely.
   * At scale 1.55, edge margin = (155 - 100) / 2 = 27.5%, well above 15%.
   */
  const imageY     = useTransform(scrollYProgress, [0, 1], ["15%", "-15%"]);
  const imageScale = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [1.6, 1.45, 1.4, 1.45, 1.6],
  );

  /* Warm amber glow that intensifies in the middle (sun zone) */
  const glowOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5, 0.7, 1],
    [0.08, 0.24, 0.40, 0.24, 0.08],
  );

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const i = Math.min(Math.floor(v * ZONES.length), ZONES.length - 1);
    setActiveIdx(i);
  });

  const zone      = ZONES[activeIdx];
  const zoneData  = t.hero.zone[zone];
  const zoneNum   = String(activeIdx + 1).padStart(2, "0");

  return (
    <div ref={containerRef} style={{ height: `${ZONES.length * 100}vh` }}>

      {/* ── STICKY FULLSCREEN VIEWPORT ─────────────────────────────────── */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">

        {/* The real tree image — pans from roots to crown */}
        <motion.img
          src="/tree-journey.jpg"
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
          style={{ y: imageY, scale: imageScale, transformOrigin: "center center" }}
        />

        {/* Warm sun glow through the trunk (peaks at zone 2–3) */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: glowOpacity,
            background: "radial-gradient(ellipse 60% 40% at 50% 60%, rgba(255,180,40,0.45) 0%, transparent 70%)",
          }}
        />

        {/* Bottom gradient — warm amber overlay for readability */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(to top, rgba(26,16,8,0.78) 0%, rgba(26,16,8,0.42) 28%, rgba(26,16,8,0.10) 58%, transparent 78%)",
          }}
        />

        {/* Top edge — soft warm fade */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, rgba(20,12,4,0.22) 0%, transparent 18%)" }}
        />

        {/* ── TEXT OVERLAY ─────────────────────────────── */}
        <div className="relative z-10 h-full flex flex-col justify-end pb-14 md:pb-20 px-8 md:px-16 lg:px-24">

          <AnimatePresence mode="wait">
            <motion.div
              key={zone}
              initial={{ opacity: 0, y: 44, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0,  filter: "blur(0px)" }}
              exit={{    opacity: 0, y: -24, filter: "blur(4px)" }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-xl"
            >
              {/* Zone number + gold hairline */}
              <div className="flex items-center gap-4 mb-5">
                <span
                  className="font-sans text-xs font-semibold tracking-[0.38em] uppercase"
                  style={{ color: "#D4A820" }}
                >
                  {zoneNum}
                </span>
                <div
                  className="h-px flex-1 max-w-[64px]"
                  style={{ background: "linear-gradient(90deg, rgba(212,168,32,0.7), transparent)" }}
                />
              </div>

              {/* Zone title — big, warm white */}
              <h2
                className="font-serif font-bold leading-none mb-5"
                style={{
                  fontSize: "clamp(3.2rem, 9vw, 6.5rem)",
                  color: "#FFFDF6",
                  textShadow: "0 2px 48px rgba(0,0,0,0.6)",
                }}
              >
                {zoneData.title}
              </h2>

              {/* Thin gold divider */}
              <div
                className="mb-5 w-14 h-px"
                style={{ background: "rgba(212,168,32,0.65)" }}
              />

              {/* Description */}
              <p
                className="font-sans leading-relaxed"
                style={{
                  fontSize: "clamp(1rem, 1.8vw, 1.2rem)",
                  color: "#D4C5B0",
                  maxWidth: "480px",
                  textShadow: "0 1px 12px rgba(0,0,0,0.5)",
                }}
              >
                {zoneData.desc}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Progress — horizontal dashes */}
          <div className="flex items-center gap-2.5 mt-8">
            {ZONES.map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  width:   i === activeIdx ? 36 : 10,
                  opacity: i === activeIdx ? 1  : 0.30,
                }}
                style={{ backgroundColor: i === activeIdx ? "#D4A820" : "#FFFDF6" }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="h-[2px] rounded-full"
              />
            ))}
            <span
              className="ml-2 font-sans text-[11px] tracking-[0.25em] uppercase"
              style={{ color: "rgba(255,253,246,0.4)" }}
            >
              {activeIdx + 1} / {ZONES.length}
            </span>
          </div>
        </div>

        {/* Scroll hint — fades after first movement */}
        <motion.div
          className="absolute bottom-6 right-8 md:right-16 z-20 flex flex-col items-center gap-1.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: activeIdx === 0 ? 1 : 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <span
            className="font-sans text-[10px] tracking-[0.3em] uppercase"
            style={{ color: "rgba(255,253,246,0.45)" }}
          >
            scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-8"
            style={{ background: "linear-gradient(to bottom, rgba(212,168,32,0.5), transparent)" }}
          />
        </motion.div>
      </div>
    </div>
  );
}
