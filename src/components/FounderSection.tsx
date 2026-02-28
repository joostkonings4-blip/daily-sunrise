"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useTranslation } from "@/context/LanguageContext";

export default function FounderSection() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-12%" });

  return (
    <section
      className="relative section-pad overflow-hidden"
      style={{ backgroundColor: "#FFFDF6" }}
    >
      {/* Subtle warm left glow */}
      <div
        aria-hidden
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(201,138,24,0.07) 0%, transparent 65%)",
        }}
      />

      <div ref={ref} className="relative z-10 content-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: decorative sun / initials */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex items-center justify-center"
          >
            {/* Giant background letter — warm, subtle */}
            <span
              aria-hidden
              className="font-serif font-bold select-none pointer-events-none absolute"
              style={{
                fontSize: "clamp(180px, 25vw, 320px)",
                lineHeight: 1,
                color: "rgba(201,138,24,0.05)",
              }}
            >
              JK
            </span>

            {/* Decorative sunrise circle */}
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <svg viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                {/* Outer rings */}
                <circle cx="160" cy="160" r="155" stroke="#B8750E" strokeWidth="0.8" strokeOpacity="0.20" />
                <circle cx="160" cy="160" r="140" stroke="#B8750E" strokeWidth="0.4" strokeOpacity="0.12" />
                {/* Sun rays */}
                {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg, i) => (
                  <line
                    key={i}
                    x1="160" y1="14"
                    x2="160" y2="32"
                    stroke="#C98A18"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeOpacity="0.40"
                    transform={`rotate(${deg} 160 160)`}
                  />
                ))}
                {/* Inner sun */}
                <circle cx="160" cy="160" r="52" fill="none" stroke="#C98A18" strokeWidth="1.2" strokeOpacity="0.25" />
                <circle cx="160" cy="160" r="38" fill="#C4911A" fillOpacity="0.10" />
                {/* Initials */}
                <text
                  x="160" y="172"
                  textAnchor="middle"
                  fill="#B8750E"
                  fillOpacity="0.75"
                  fontFamily="serif"
                  fontSize="36"
                  fontWeight="700"
                >
                  JK
                </text>
              </svg>
            </div>
          </motion.div>

          {/* Right: text */}
          <div className="space-y-7">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="font-sans text-xs font-semibold tracking-[0.36em] uppercase"
              style={{ color: "#C98A18" }}
            >
              {t.founder.eyebrow}
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="font-serif font-bold leading-tight"
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                color: "#1A1610",
              }}
            >
              {t.founder.heading}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-sans leading-relaxed"
              style={{ fontSize: "1.05rem", color: "#7A6B52" }}
            >
              {t.founder.body1}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-sans leading-relaxed"
              style={{ fontSize: "1.05rem", color: "#7A6B52" }}
            >
              {t.founder.body2}
            </motion.p>

            {/* Pull quote */}
            <motion.blockquote
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.45 }}
              className="border-l-2 pl-6 py-2"
              style={{ borderColor: "#C98A18" }}
            >
              <p
                className="font-serif italic font-light leading-snug"
                style={{ fontSize: "clamp(1rem, 1.8vw, 1.2rem)", color: "#3D3424" }}
              >
                {t.founder.quote}
              </p>
              <p
                className="mt-3 font-sans text-xs tracking-[0.2em] uppercase"
                style={{ color: "#C98A18" }}
              >
                {t.founder.quoteAttr}
              </p>
            </motion.blockquote>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link
                href="/about"
                className="inline-flex items-center gap-3 font-sans text-sm font-medium group transition-colors duration-300"
                style={{ color: "#B8750E" }}
              >
                {t.founder.cta}
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
