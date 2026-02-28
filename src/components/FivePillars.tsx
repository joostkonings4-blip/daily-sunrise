"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "@/context/LanguageContext";

function PillarCard({
  pillar,
  index,
}: {
  pillar: { number: string; title: string; icon: string; body: string };
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-12%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 48 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative card-premium rounded-2xl p-8 overflow-hidden"
    >
      {/* Number watermark */}
      <span
        className="absolute -top-2 -right-2 font-serif font-bold text-[80px] leading-none select-none pointer-events-none"
        style={{ color: "rgba(196,145,26,0.06)" }}
      >
        {pillar.number}
      </span>

      <div className="relative z-10">
        {/* Icon + number */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-2xl">{pillar.icon}</span>
          <span className="font-sans text-xs font-medium tracking-[0.2em] text-gold-warm">
            {pillar.number}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-serif text-2xl font-bold text-cream-100 mb-4 group-hover:text-gold-bright transition-colors duration-400">
          {pillar.title}
        </h3>

        {/* Body */}
        <p className="font-sans text-sm text-cream-muted leading-relaxed">
          {pillar.body}
        </p>

        {/* Bottom accent bar */}
        <motion.div
          className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-gold-rich to-transparent"
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.7, delay: index * 0.1 + 0.4 }}
          style={{ transformOrigin: "left", width: "100%" }}
        />
      </div>
    </motion.div>
  );
}

export default function FivePillars() {
  const { t } = useTranslation();
  const headerRef = useRef(null);
  const inView = useInView(headerRef, { once: true, margin: "-10%" });

  const headingLines = t.pillars.heading.split("\n");

  return (
    <section className="relative section-pad bg-deep-800 overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #D4A820 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Ambient glow center */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(196,145,26,0.04) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-sans text-xs font-medium tracking-[0.3em] text-gold-warm uppercase mb-5"
          >
            {t.pillars.eyebrow}
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-serif text-4xl md:text-6xl font-bold text-cream-100 leading-tight"
          >
            {headingLines.map((line, i) => (
              <span key={i} className={i === 1 ? "text-gold-bright italic" : "block"}>
                {i === 1 ? <><br /><em>{line}</em></> : line}
              </span>
            ))}
          </motion.h2>
        </div>

        {/* 5-pillar grid: 3 top + 2 bottom centered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
          {t.pillars.items.slice(0, 3).map((pillar, i) => (
            <PillarCard key={pillar.number} pillar={pillar} index={i} />
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:max-w-[66%] mx-auto">
          {t.pillars.items.slice(3).map((pillar, i) => (
            <PillarCard key={pillar.number} pillar={pillar} index={i + 3} />
          ))}
        </div>

        {/* Big quote */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-20 text-center"
        >
          <hr className="hr-gold mb-12 max-w-[200px] mx-auto" />
          <p className="font-display text-2xl md:text-4xl italic text-cream-100 font-light leading-[1.35] max-w-3xl mx-auto">
            {t.pillars.quote}
          </p>
          <p className="mt-5 font-sans text-xs tracking-[0.25em] text-gold-warm uppercase">
            {t.pillars.quoteAttr}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
