"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

/* ── Wobble text helper ── */
function WobbleText({ text, className }: { text: string; className?: string }) {
  return (
    <span className={className}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          className="wobble-char inline-block"
          whileHover={{
            y: [0, -6, 3, -2, 0],
            color: "#F5B800",
            transition: { duration: 0.5 },
          }}
          style={{ display: char === " " ? "inline" : "inline-block" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

/* ── Text reveal line ── */
function RevealLine({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  return (
    <div ref={ref} className="text-reveal-container">
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={inView ? { y: "0%", opacity: 1 } : {}}
        transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}

/* ── Animated sun ── */
function AnimatedSun() {
  return (
    <div className="relative w-80 h-80 md:w-[460px] md:h-[460px] flex items-center justify-center">
      {/* Outermost glow */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(255,217,107,0.25) 0%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Middle ring */}
      <motion.div
        className="absolute w-56 h-56 md:w-72 md:h-72 rounded-full border-2 border-sunrise-200/50"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      {/* Rays ring */}
      <motion.svg
        viewBox="0 0 300 300"
        className="absolute w-64 h-64 md:w-80 md:h-80"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        {Array.from({ length: 16 }, (_, i) => {
          const angle = (i / 16) * 360;
          const rad   = (angle * Math.PI) / 180;
          const x1    = 150 + Math.cos(rad) * 90;
          const y1    = 150 + Math.sin(rad) * 90;
          const x2    = 150 + Math.cos(rad) * 120;
          const y2    = 150 + Math.sin(rad) * 120;
          return (
            <motion.line
              key={i}
              x1={x1} y1={y1} x2={x2} y2={y2}
              stroke="#FFD96B"
              strokeWidth={i % 2 === 0 ? 2.5 : 1.5}
              strokeLinecap="round"
              initial={{ opacity: 0.3 }}
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, delay: i * 0.1, repeat: Infinity }}
            />
          );
        })}
      </motion.svg>
      {/* Core sun */}
      <motion.div
        className="relative w-36 h-36 md:w-48 md:h-48 rounded-full flex items-center justify-center"
        style={{
          background: "radial-gradient(circle at 40% 40%, #FFF5D6, #FFD96B 50%, #FFC93A)",
          boxShadow: "0 0 60px rgba(255, 201, 58, 0.4), 0 0 120px rgba(255, 217, 107, 0.2)",
        }}
        animate={{
          scale:     [1, 1.04, 1],
          boxShadow: [
            "0 0 60px rgba(255,201,58,0.4), 0 0 120px rgba(255,217,107,0.2)",
            "0 0 80px rgba(255,201,58,0.6), 0 0 160px rgba(255,217,107,0.35)",
            "0 0 60px rgba(255,201,58,0.4), 0 0 120px rgba(255,217,107,0.2)",
          ],
        }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <p className="font-display text-2xl md:text-3xl text-warm-dark/70 italic font-light text-center leading-tight px-4">
          rise<br />& shine
        </p>
      </motion.div>

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => {
        const angle  = (i / 8) * 360;
        const radius = 155 + (i % 2) * 20;
        const x      = Math.cos((angle * Math.PI) / 180) * radius;
        const y      = Math.sin((angle * Math.PI) / 180) * radius;
        return (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-sunrise-300"
            style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)` }}
            animate={{ scale: [0.5, 1.5, 0.5], opacity: [0.3, 0.9, 0.3] }}
            transition={{ duration: 2.5, delay: i * 0.3, repeat: Infinity }}
          />
        );
      })}
    </div>
  );
}

/* ── Main Hero ── */
export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const y       = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(180deg, #FFF8E7 0%, #E0F2FE 60%, #FDFCF8 100%)" }}
    >
      {/* Horizon gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-warm-white to-transparent pointer-events-none" />

      {/* Background texture dots */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #2C2A26 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24 max-w-7xl mx-auto px-6 pt-24"
      >
        {/* Left: text */}
        <div className="flex-1 text-center lg:text-left max-w-xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-sans text-sm font-medium tracking-[0.2em] text-sunrise-600 uppercase mb-6"
          >
            Every dawn, a new beginning
          </motion.p>

          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-warm-dark leading-[1.05] mb-6">
            <RevealLine delay={0.4}>
              <WobbleText text="The Same Life" />
            </RevealLine>
            <RevealLine delay={0.55}>
              <span className="text-sunrise-500 italic font-medium">a different</span>
            </RevealLine>
            <RevealLine delay={0.7}>
              <WobbleText text="perspective." />
            </RevealLine>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.9 }}
            className="font-sans text-base md:text-lg text-warm-muted leading-relaxed mb-10 max-w-md mx-auto lg:mx-0"
          >
            Real health lives inside you — not in a product, not in a trend.
            Slow down. Breathe. Notice the details of this exact moment.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.1 }}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
          >
            <a
              href="/blog"
              className="px-8 py-3.5 rounded-full bg-warm-dark text-warm-white text-sm font-medium hover:bg-sunrise-500 hover:text-warm-dark transition-all duration-400 hover:shadow-xl hover:shadow-sunrise-300/30"
            >
              Start Reading
            </a>
            <a
              href="/about"
              className="px-8 py-3.5 rounded-full border border-warm-dark/20 text-warm-dark text-sm font-medium hover:border-sunrise-400 hover:text-sunrise-600 transition-all duration-300"
            >
              My Story
            </a>
          </motion.div>
        </div>

        {/* Right: sun */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex-shrink-0"
        >
          <AnimatedSun />
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-sans text-xs tracking-[0.2em] text-warm-muted uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-sunrise-400 to-transparent"
        />
      </motion.div>
    </section>
  );
}
