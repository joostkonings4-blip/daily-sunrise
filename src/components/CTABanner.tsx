"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "@/context/LanguageContext";

export default function CTABanner() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email) setDone(true);
  }

  return (
    <section
      id="signup"
      ref={ref}
      className="relative section-pad overflow-hidden flex items-center justify-center text-center"
      style={{
        background: "linear-gradient(160deg, #FFF8E8 0%, #FEF0C8 40%, #FDEAA8 80%, #FDE28E 100%)",
      }}
    >
      {/* Warm sunrise glow — pulsing center light */}
      <div
        aria-hidden
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <motion.div
          animate={{ scale: [1, 1.22, 1], opacity: [0.18, 0.32, 0.18] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(201,138,24,0.25) 0%, transparent 65%)",
          }}
        />
      </div>

      {/* Subtle top sun rays — decorative */}
      <div aria-hidden className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none">
        <svg width="600" height="200" viewBox="0 0 600 200" fill="none" opacity="0.12">
          {[-60, -40, -20, 0, 20, 40, 60].map((angle, i) => (
            <line
              key={i}
              x1="300" y1="0"
              x2={300 + Math.sin((angle * Math.PI) / 180) * 300}
              y2={200}
              stroke="#B8750E"
              strokeWidth="1"
            />
          ))}
        </svg>
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-6">

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-sans text-xs font-semibold tracking-[0.36em] uppercase mb-6"
          style={{ color: "#B8750E" }}
        >
          {t.cta.eyebrow}
        </motion.p>

        {/* Main heading */}
        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif font-bold leading-tight mb-4"
          style={{
            fontSize: "clamp(2.4rem, 6vw, 4rem)",
            color: "#1A1610",
          }}
        >
          {t.cta.heading}
        </motion.h2>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-serif italic font-light mb-4"
          style={{
            fontSize: "clamp(1.1rem, 2.2vw, 1.4rem)",
            color: "#5C4A2E",
          }}
        >
          {t.cta.sub}
        </motion.p>

        {/* Social proof */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="font-sans text-xs font-medium tracking-wide mb-8"
          style={{ color: "#B8750E" }}
        >
          ◎ {t.cta.proof}
        </motion.p>

        {/* Body */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-sans leading-relaxed mb-10 max-w-lg mx-auto"
          style={{
            fontSize: "clamp(0.95rem, 1.5vw, 1.05rem)",
            color: "#7A6B52",
          }}
        >
          {t.cta.body}
        </motion.p>

        {/* Form */}
        {!done ? (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t.cta.placeholder}
              className="flex-1 px-5 py-3.5 rounded-full text-sm focus:outline-none transition-all duration-200"
              style={{
                backgroundColor: "rgba(255,255,255,0.75)",
                border: "1px solid rgba(184,117,14,0.30)",
                color: "#1A1610",
              }}
            />
            <button
              type="submit"
              className="px-7 py-3.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-300"
              style={{
                backgroundColor: "#1A1610",
                color: "#FFFDF6",
              }}
            >
              {t.cta.button}
            </button>
          </motion.form>
        ) : (
          <motion.p
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="font-serif italic"
            style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)", color: "#3D2A0A" }}
          >
            {t.cta.welcome}
          </motion.p>
        )}

        {/* Privacy note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-5 font-sans text-xs"
          style={{ color: "#A89070" }}
        >
          {t.cta.note}
        </motion.p>
      </div>
    </section>
  );
}
