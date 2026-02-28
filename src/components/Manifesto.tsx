"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "@/context/LanguageContext";

export default function Manifesto() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-12%" });

  const nonEmptyLines = t.manifest.lines.filter((l) => l !== "");
  const allLines = t.manifest.lines;

  return (
    <section className="relative section-pad bg-deep-900 overflow-hidden">
      {/* Ambient center glow */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        aria-hidden
      >
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.04, 0.08, 0.04] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="w-[700px] h-[700px] rounded-full"
          style={{
            background: "radial-gradient(circle, #D4A820 0%, transparent 65%)",
          }}
        />
      </div>

      {/* Grain */}
      <div className="grain-overlay absolute inset-0 pointer-events-none" />

      <div ref={ref} className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-sans text-xs font-medium tracking-[0.3em] text-gold-warm uppercase mb-16"
        >
          {t.manifest.eyebrow}
        </motion.p>

        {/* Manifest lines */}
        <div className="space-y-5 mb-16">
          {allLines.map((line, i) => (
            line === "" ? (
              <div key={i} className="h-3" />
            ) : (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1 + i * 0.1 }}
                className="font-display text-2xl md:text-3xl lg:text-4xl text-cream-100 font-light leading-snug italic"
              >
                {line}
              </motion.p>
            )
          ))}
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.2, delay: allLines.length * 0.1 }}
          className="hr-gold mb-10 max-w-[200px] mx-auto"
          style={{ transformOrigin: "center" }}
        />

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: allLines.length * 0.1 + 0.3 }}
          className="font-sans text-sm font-medium tracking-[0.3em] text-gold-warm uppercase"
        >
          {t.manifest.tagline}
        </motion.p>
      </div>
    </section>
  );
}
