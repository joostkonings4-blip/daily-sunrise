"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useTranslation } from "@/context/LanguageContext";

export default function StorySection() {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const inView = useInView(textRef, { once: true, margin: "-15%" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden section-pad bg-deep-900"
    >
      {/* Grain texture */}
      <div className="grain-overlay absolute inset-0 pointer-events-none" />

      {/* Ambient glow */}
      <motion.div
        style={{
          y: bgY,
          background: "radial-gradient(circle, rgba(196,145,26,0.05) 0%, transparent 65%)",
        }}
        className="absolute -right-32 top-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        aria-hidden
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Layout: label left + content right */}
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-20">

          {/* Left: eyebrow + decorative */}
          <div className="flex flex-col gap-6">
            <motion.p
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="font-sans text-xs font-medium tracking-[0.3em] text-gold-warm uppercase"
            >
              {t.story.eyebrow}
            </motion.p>

            {/* Vertical decorative line */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="hidden lg:block w-px bg-gradient-to-b from-gold-rich/50 via-gold-rich/20 to-transparent"
              style={{ height: "200px", transformOrigin: "top" }}
            />
          </div>

          {/* Right: story content */}
          <div ref={textRef} className="space-y-8">
            <motion.h2
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-cream-100 leading-[1.05]"
            >
              {t.story.heading}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="font-sans text-base md:text-lg text-cream-muted leading-relaxed"
            >
              {t.story.body1}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.25 }}
              className="font-sans text-base md:text-lg text-cream-muted leading-relaxed"
            >
              {t.story.body2}
            </motion.p>

            {/* Pull quote */}
            <motion.blockquote
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="border-l-2 border-gold-rich pl-6 py-2"
            >
              <p className="font-display text-xl md:text-2xl text-cream-100 italic font-light leading-snug">
                {t.story.pull}
              </p>
            </motion.blockquote>

            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="font-sans text-sm font-medium tracking-[0.2em] text-gold-warm uppercase"
            >
              {t.story.footer}
            </motion.p>
          </div>
        </div>
      </div>

      {/* Bottom fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-deep-800 to-transparent pointer-events-none" />
    </section>
  );
}
