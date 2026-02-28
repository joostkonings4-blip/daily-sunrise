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
      className="relative section-pad overflow-hidden bg-deep-950 flex items-center justify-center text-center"
    >
      {/* Pulsing sunrise glow */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        aria-hidden
      >
        <motion.div
          animate={{ scale: [1, 1.18, 1], opacity: [0.06, 0.14, 0.06] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="w-[700px] h-[700px] rounded-full"
          style={{
            background: "radial-gradient(circle, #D4A820 0%, transparent 65%)",
          }}
        />
      </div>

      {/* Grain */}
      <div className="grain-overlay absolute inset-0 pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-5xl md:text-7xl font-bold text-cream-100 leading-tight mb-4"
        >
          {t.cta.heading}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mb-2"
        >
          <span className="font-display text-2xl md:text-3xl text-gold-bright italic font-light">
            {t.cta.sub1}
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mb-10"
        >
          <span className="font-display text-2xl md:text-3xl text-gold-bright italic font-light">
            {t.cta.sub2}
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="font-sans text-base md:text-lg text-cream-muted leading-relaxed mb-10 max-w-xl mx-auto"
        >
          {t.cta.body}
        </motion.p>

        {/* Form */}
        {!done ? (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t.cta.placeholder}
              className="flex-1 px-5 py-3.5 rounded-full bg-deep-800 border border-gold-rich/25 text-cream-100 placeholder:text-cream-dim text-sm focus:outline-none focus:border-gold-warm transition-colors"
            />
            <button
              type="submit"
              className="px-7 py-3.5 rounded-full bg-gold-rich text-deep-950 text-sm font-semibold hover:bg-gold-bright transition-all duration-300 hover:shadow-[0_0_28px_rgba(196,145,26,0.4)] whitespace-nowrap"
            >
              {t.cta.button}
            </button>
          </motion.form>
        ) : (
          <motion.p
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="font-serif text-2xl text-gold-bright italic"
          >
            {t.cta.welcome}
          </motion.p>
        )}

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-5 font-sans text-xs text-cream-dim"
        >
          {t.cta.note}
        </motion.p>
      </div>
    </section>
  );
}
