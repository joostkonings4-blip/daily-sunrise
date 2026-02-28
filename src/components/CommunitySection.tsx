"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "@/context/LanguageContext";

export default function CommunitySection() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-12%" });

  return (
    <section className="relative section-pad bg-deep-950 overflow-hidden">
      {/* Radial sunrise glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, rgba(196,145,26,0.09) 0%, rgba(196,145,26,0.03) 50%, transparent 75%)",
        }}
      />

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-sans text-xs font-medium tracking-[0.3em] text-gold-warm uppercase mb-6"
        >
          {t.community.eyebrow}
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="font-serif text-4xl md:text-6xl font-bold text-cream-100 leading-tight mb-2"
        >
          {t.community.heading}
        </motion.h2>

        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="font-serif text-4xl md:text-6xl font-bold text-gold-bright italic leading-tight mb-8"
        >
          {t.community.subheading}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="font-sans text-lg text-cream-muted leading-relaxed mb-14 max-w-2xl mx-auto"
        >
          {t.community.body}
        </motion.p>

        {/* Type tags */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-14">
          {t.community.types.map((type, i) => (
            <motion.span
              key={type}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
              className="px-5 py-2 rounded-full border border-gold-rich/30 bg-gold-rich/5 font-sans text-sm font-medium text-cream-200 hover:border-gold-warm hover:text-gold-bright transition-all duration-300"
            >
              {type}
            </motion.span>
          ))}
        </div>

        {/* Footer line */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <hr className="hr-gold mb-8 max-w-[120px] mx-auto" />
          <p className="font-display text-xl md:text-2xl italic text-cream-100 font-light leading-snug max-w-2xl mx-auto">
            {t.community.footer}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
