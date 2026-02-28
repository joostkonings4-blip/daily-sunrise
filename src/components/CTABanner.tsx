"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const WORDS = ["Slow", "down.", "You're", "already", "home."];

export default function CTABanner() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden section-pad flex items-center justify-center text-center"
      style={{
        background: "linear-gradient(135deg, #2C2A26 0%, #3D3A34 50%, #2C2A26 100%)",
      }}
    >
      {/* Sun glow in centre */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        aria-hidden
      >
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, #FFD96B 0%, transparent 65%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Large animated words */}
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-10">
          {WORDS.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
              animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{ duration: 0.9, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-5xl md:text-7xl font-bold text-warm-white leading-tight"
            >
              {word}
            </motion.span>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: WORDS.length * 0.15 + 0.1 }}
          className="font-sans text-warm-white/60 text-base md:text-lg leading-relaxed mb-10 max-w-lg mx-auto"
        >
          Join a community of people choosing presence over hustle. Weekly sunrise notes, real talk, and slow living inspiration — straight to your inbox.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: WORDS.length * 0.15 + 0.3 }}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            placeholder="your@email.com"
            className="flex-1 px-5 py-3.5 rounded-full bg-warm-white/10 border border-warm-white/20 text-warm-white placeholder:text-warm-white/30 text-sm focus:outline-none focus:border-sunrise-400 transition-colors"
          />
          <button className="px-6 py-3.5 rounded-full bg-sunrise-400 text-warm-dark text-sm font-semibold hover:bg-sunrise-300 transition-all duration-300 hover:shadow-xl hover:shadow-sunrise-400/30 whitespace-nowrap">
            Rise with me ☀️
          </button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: WORDS.length * 0.15 + 0.6 }}
          className="mt-4 font-sans text-xs text-warm-white/30"
        >
          No spam. Just light. Unsubscribe anytime.
        </motion.p>
      </div>
    </section>
  );
}
