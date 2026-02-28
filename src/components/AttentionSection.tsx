"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "@/context/LanguageContext";

export default function AttentionSection() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-12%" });

  return (
    <section className="relative section-pad bg-deep-900 overflow-hidden">
      {/* Ambient vertical light beam */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, rgba(196,145,26,0.08) 40%, rgba(196,145,26,0.08) 60%, transparent)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center" ref={ref}>
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-sans text-xs font-medium tracking-[0.3em] text-gold-warm uppercase mb-6"
        >
          {t.attention.eyebrow}
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="font-serif text-4xl md:text-5xl font-bold text-cream-100 leading-tight mb-14"
        >
          {t.attention.heading}
        </motion.h2>

        {/* Questions */}
        <div className="space-y-0">
          {t.attention.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -24 : 24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.12 }}
              className="group"
            >
              <div className="py-6 border-b border-deep-600/60 flex items-center gap-6">
                {/* Decorative dot */}
                <motion.div
                  animate={inView ? { scale: [0, 1.2, 1] } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.12 }}
                  className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gold-rich group-hover:bg-gold-bright transition-colors duration-300"
                />
                <p className="font-display text-lg md:text-2xl text-cream-200 italic font-light leading-snug group-hover:text-cream-100 transition-colors duration-300 text-left">
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
          transition={{ duration: 0.9, delay: 0.8 }}
          className="mt-14 font-sans text-base md:text-lg text-cream-muted leading-relaxed max-w-2xl mx-auto"
        >
          {t.attention.footer}
        </motion.p>
      </div>
    </section>
  );
}
