"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "@/context/LanguageContext";

export default function PhilosophySection() {
  const { t } = useTranslation();
  const p = t.philosophy;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      className="relative section-pad overflow-hidden"
      style={{ backgroundColor: "#FFFDF6" }}
    >
      {/* Subtle warm sunrise glow — top center */}
      <div
        aria-hidden
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 100% at 50% 0%, rgba(201,138,24,0.07) 0%, transparent 70%)",
        }}
      />

      <div ref={ref} className="content-wide relative z-10">

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-sans text-xs font-semibold tracking-[0.36em] uppercase mb-16"
          style={{ color: "#C98A18" }}
        >
          {p.eyebrow}
        </motion.p>

        {/* Statement block — two lines, editorial */}
        <div className="max-w-4xl mb-20">
          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif font-bold leading-snug mb-3"
            style={{
              fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
              color: "#B8A88A",
            }}
          >
            {p.notA}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="font-serif font-bold leading-tight mb-10"
            style={{
              fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
              color: "#1A1610",
            }}
          >
            {p.is}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="font-sans leading-relaxed"
            style={{
              fontSize: "clamp(1rem, 1.6vw, 1.15rem)",
              color: "#7A6B52",
              maxWidth: "540px",
            }}
          >
            {p.audience}
          </motion.p>
        </div>

        {/* 3 Pillars — horizontal, separated by a hairline */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 border-t"
          style={{ borderColor: "rgba(201,138,24,0.18)" }}
        >
          {p.pillars.map((pillar, i) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 36 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.45 + i * 0.13, ease: [0.22, 1, 0.36, 1] }}
              className="pt-10 pr-8 pb-4"
              style={{
                borderRight: i < 2 ? "1px solid rgba(201,138,24,0.12)" : "none",
                paddingRight: i < 2 ? "2.5rem" : "0",
                paddingLeft: i > 0 ? "2.5rem" : "0",
              }}
            >
              {/* Number */}
              <span
                className="font-sans text-xs font-semibold tracking-[0.3em] uppercase block mb-5"
                style={{ color: "#C98A18" }}
              >
                {pillar.number}
              </span>

              {/* Label */}
              <h3
                className="font-serif font-bold leading-snug mb-4"
                style={{
                  fontSize: "clamp(1.3rem, 2.2vw, 1.65rem)",
                  color: "#1A1610",
                }}
              >
                {pillar.label}
              </h3>

              {/* Thin gold rule */}
              <div
                className="mb-4 w-8 h-px"
                style={{ background: "rgba(201,138,24,0.4)" }}
              />

              {/* Body */}
              <p
                className="font-sans leading-relaxed"
                style={{ fontSize: "0.95rem", color: "#7A6B52" }}
              >
                {pillar.body}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
