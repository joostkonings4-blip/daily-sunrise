"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "@/context/LanguageContext";

export default function AttentionSection() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-12%" });

  return (
    <section
      className="relative section-pad overflow-hidden"
      style={{ backgroundColor: "#FFF8EE" }}
    >
      {/* Warm morning light — soft amber glow from above */}
      <div
        aria-hidden
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 80% at 50% 0%, rgba(201,138,24,0.10) 0%, transparent 70%)",
        }}
      />

      {/* Thin vertical amber line — like a thread of light */}
      <div
        aria-hidden
        className="absolute top-0 left-1/2 -translate-x-px w-px h-full pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(196,145,26,0.0) 0%, rgba(196,145,26,0.12) 30%, rgba(196,145,26,0.12) 70%, rgba(196,145,26,0.0) 100%)",
        }}
      />

      <div className="relative z-10 content-mid text-center" ref={ref}>

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-sans text-xs font-semibold tracking-[0.36em] uppercase mb-6"
          style={{ color: "#C98A18" }}
        >
          {t.attention.eyebrow}
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="font-serif font-bold leading-tight mb-14"
          style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            color: "#1A1610",
          }}
        >
          {t.attention.heading}
        </motion.h2>

        {/* Questions — each on its own line with warm separator */}
        <div className="space-y-0 text-left max-w-2xl mx-auto">
          {t.attention.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.13, ease: [0.22, 1, 0.36, 1] }}
              className="group"
            >
              <div
                className="py-6 border-b flex items-center gap-5"
                style={{ borderColor: "rgba(201,138,24,0.18)" }}
              >
                {/* Warm dot */}
                <motion.div
                  animate={inView ? { scale: [0, 1.3, 1] } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.13 }}
                  className="flex-shrink-0 w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: "#C98A18" }}
                />
                <p
                  className="font-serif italic leading-snug transition-colors duration-300"
                  style={{
                    fontSize: "clamp(1.1rem, 2.2vw, 1.4rem)",
                    color: "#3D3424",
                  }}
                >
                  {item}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer insight */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.85 }}
          className="mt-14 font-sans leading-relaxed max-w-xl mx-auto"
          style={{
            fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)",
            color: "#7A6B52",
          }}
        >
          {t.attention.footer}
        </motion.p>
      </div>
    </section>
  );
}
