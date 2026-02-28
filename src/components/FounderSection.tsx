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
    <section className="relative section-pad bg-deep-800 overflow-hidden">
      {/* Grain */}
      <div className="grain-overlay absolute inset-0 pointer-events-none" />

      {/* Left glow */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(196,145,26,0.05) 0%, transparent 65%)",
        }}
      />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: large decorative number + visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex items-center justify-center"
          >
            {/* Giant background letter */}
            <span
              className="font-serif font-bold select-none pointer-events-none"
              style={{
                fontSize: "clamp(180px, 25vw, 320px)",
                lineHeight: 1,
                color: "rgba(196,145,26,0.04)",
                position: "absolute",
              }}
            >
              JK
            </span>

            {/* Decorative sunrise circle */}
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <svg viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                {/* Outer ring */}
                <circle cx="160" cy="160" r="155" stroke="#D4A820" strokeWidth="0.8" strokeOpacity="0.18" />
                <circle cx="160" cy="160" r="140" stroke="#D4A820" strokeWidth="0.4" strokeOpacity="0.10" />
                {/* Sun rays */}
                {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg, i) => (
                  <line
                    key={i}
                    x1="160" y1="14"
                    x2="160" y2="30"
                    stroke="#D4A820"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeOpacity="0.35"
                    transform={`rotate(${deg} 160 160)`}
                  />
                ))}
                {/* Inner sun */}
                <circle cx="160" cy="160" r="52" fill="none" stroke="#D4A820" strokeWidth="1.2" strokeOpacity="0.22" />
                <circle cx="160" cy="160" r="38" fill="#C4911A" fillOpacity="0.08" />
                {/* Initials */}
                <text
                  x="160" y="172"
                  textAnchor="middle"
                  fill="#D4A820"
                  fillOpacity="0.7"
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
              className="font-sans text-xs font-medium tracking-[0.3em] text-gold-warm uppercase"
            >
              {t.founder.eyebrow}
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="font-serif text-3xl md:text-5xl font-bold text-cream-100 leading-tight"
            >
              {t.founder.heading}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-sans text-base md:text-lg text-cream-muted leading-relaxed"
            >
              {t.founder.body1}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-sans text-base md:text-lg text-cream-muted leading-relaxed"
            >
              {t.founder.body2}
            </motion.p>

            {/* Pull quote */}
            <motion.blockquote
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.45 }}
              className="border-l-2 border-gold-rich pl-6 py-2"
            >
              <p className="font-display text-lg md:text-xl text-cream-100 italic font-light leading-snug">
                {t.founder.quote}
              </p>
              <p className="mt-3 font-sans text-xs tracking-[0.2em] text-gold-warm uppercase">
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
                className="inline-flex items-center gap-3 font-sans text-sm font-medium text-gold-bright hover:text-gold-warm transition-colors duration-300 group"
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
