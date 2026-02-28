"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const PILLARS = [
  {
    number: "01",
    title:  "Slow Down",
    body:   "Speed is the enemy of depth. When you slow down, you start to see what was always there — the beauty in an ordinary morning.",
    icon:   "🌿",
  },
  {
    number: "02",
    title:  "Look Inward",
    body:   "Real health isn't found in a supplement or a routine. It lives in your breath, your body, your awareness of this exact moment.",
    icon:   "☀️",
  },
  {
    number: "03",
    title:  "Live Present",
    body:   "The past is memory. The future is imagination. Right now — this breath, this light, this feeling — that's where life actually happens.",
    icon:   "🌅",
  },
];

function PillarCard({
  number,
  title,
  body,
  icon,
  index,
}: (typeof PILLARS)[0] & { index: number }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="group relative bg-warm-white border border-warm-sand rounded-2xl p-8 hover:border-sunrise-300 transition-all duration-500 hover:shadow-xl hover:shadow-sunrise-100"
    >
      <div className="flex items-start gap-4 mb-5">
        <span className="font-sans text-xs font-medium tracking-[0.2em] text-sunrise-400 mt-1">
          {number}
        </span>
        <span className="text-3xl">{icon}</span>
      </div>
      <h3 className="font-serif text-2xl font-semibold text-warm-dark mb-3 group-hover:text-sunrise-600 transition-colors duration-300">
        {title}
      </h3>
      <p className="font-sans text-warm-muted leading-relaxed text-[15px]">{body}</p>

      {/* Bottom accent */}
      <motion.div
        className="absolute bottom-0 left-8 right-8 h-px bg-sunrise-300"
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.6, delay: index * 0.15 + 0.4 }}
        style={{ transformOrigin: "left" }}
      />
    </motion.div>
  );
}

function BigQuote() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  const words = "Every sunrise is a reminder that you have been given one more day to live, love, and grow.".split(" ");

  return (
    <div ref={ref} className="text-center max-w-4xl mx-auto">
      <p className="font-display text-3xl md:text-5xl font-light text-warm-dark leading-[1.3] italic">
        {words.map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.6, delay: i * 0.05, ease: "easeOut" }}
            className="inline-block mr-[0.25em]"
          >
            {word}
          </motion.span>
        ))}
      </p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: words.length * 0.05 + 0.2 }}
        className="mt-6 font-sans text-sm tracking-[0.2em] text-sunrise-500 uppercase"
      >
        — Daily Sunrise philosophy
      </motion.p>
    </div>
  );
}

export default function Manifesto() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section
      ref={sectionRef}
      className="relative section-pad overflow-hidden"
      style={{ background: "linear-gradient(180deg, #FDFCF8 0%, #FFF8E7 50%, #FDFCF8 100%)" }}
    >
      {/* Subtle parallax bg element */}
      <motion.div
        style={{ y: bgY }}
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-20 pointer-events-none"
        aria-hidden
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            background: "radial-gradient(circle, #FFD96B 0%, transparent 70%)",
          }}
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 space-y-24">
        {/* Intro */}
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-sans text-xs font-medium tracking-[0.25em] text-sunrise-500 uppercase mb-4"
          >
            The Philosophy
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl font-bold text-warm-dark"
          >
            Slow Living is a <em className="text-sunrise-500 not-italic">superpower</em>
          </motion.h2>
        </div>

        {/* Three pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PILLARS.map((p, i) => (
            <PillarCard key={p.number} {...p} index={i} />
          ))}
        </div>

        {/* Big quote */}
        <BigQuote />

        {/* Horizontal divider with sun */}
        <div className="flex items-center gap-6">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-sunrise-200" />
          <div className="w-8 h-8 rounded-full bg-sunrise-300 flex items-center justify-center">
            <svg viewBox="0 0 20 20" className="w-5 h-5">
              <circle cx="10" cy="10" r="4" fill="#2C2A26" />
              {[0, 60, 120, 180, 240, 300].map((deg, i) => (
                <line
                  key={i}
                  x1="10" y1="1" x2="10" y2="3.5"
                  stroke="#2C2A26"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  transform={`rotate(${deg} 10 10)`}
                />
              ))}
            </svg>
          </div>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-sunrise-200" />
        </div>
      </div>
    </section>
  );
}
