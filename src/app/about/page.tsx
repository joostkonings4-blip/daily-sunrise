"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

function RevealLine({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  return (
    <div ref={ref} style={{ overflow: "hidden" }}>
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

const VALUES = [
  { icon: "🌅", title: "Presence",   body: "Every morning is a gift. I try to start mine with intention — no phone, no rush. Just light." },
  { icon: "🌿", title: "Nature",     body: "Walking barefoot. Watching the sky change. Nature has a way of reminding us what matters." },
  { icon: "☀️", title: "Simplicity", body: "Less, but better. I believe simplicity is the most radical act of self-care available to us." },
  { icon: "💛", title: "Community",  body: "This journey is better together. Your story matters and this space was made for you too." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-[70vh] flex items-end pb-0 overflow-hidden pt-24"
        style={{ background: "linear-gradient(180deg, #FFF8E7 0%, #FDFCF8 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-6 w-full pb-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
            {/* Text */}
            <div className="pb-16">
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="font-sans text-xs font-medium tracking-[0.25em] text-sunrise-500 uppercase mb-6"
              >
                The founder
              </motion.p>
              <h1 className="font-serif text-5xl md:text-7xl font-bold text-warm-dark leading-tight mb-6">
                <RevealLine delay={0.3}>Hi, I'm the</RevealLine>
                <RevealLine delay={0.45}>
                  <span className="text-sunrise-500 italic">face behind</span>
                </RevealLine>
                <RevealLine delay={0.6}>Daily Sunrise.</RevealLine>
              </h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.85 }}
                className="font-sans text-warm-muted text-lg leading-relaxed max-w-lg"
              >
                I started Daily Sunrise because I was living fast and feeling empty. This space is
                my answer — and maybe yours too.
              </motion.p>
            </div>

            {/* Portrait placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative h-[500px] lg:h-[600px] rounded-t-[160px] overflow-hidden"
              style={{ background: "linear-gradient(180deg, #FFD96B20 0%, #BAE6FD40 100%)" }}
            >
              {/* Replace src with your actual portrait */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div
                    className="w-48 h-48 rounded-full mx-auto"
                    style={{
                      background: "radial-gradient(circle at 40% 35%, #FFF5D6, #FFD96B 55%, #FFC93A)",
                      boxShadow: "0 0 80px rgba(255,201,58,0.3)",
                    }}
                  />
                  <p className="font-sans text-xs tracking-[0.2em] text-warm-muted uppercase">
                    Add your photo here
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-pad bg-warm-cream">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-warm-dark">
              My story
            </h2>
            <div className="w-12 h-px bg-sunrise-400" />
            <p className="font-sans text-warm-muted text-base leading-8">
              I used to believe that health was something you achieved — a goal to reach, a
              protocol to follow, a supplement to take. I chased it hard. And the more I chased,
              the further away I felt from myself.
            </p>
            <p className="font-sans text-warm-muted text-base leading-8">
              Then one morning — very early, very quiet — I watched the sun come up over the
              horizon. Not because I planned to. Just because I was there. And something shifted.
            </p>
            <p className="font-sans text-warm-muted text-base leading-8">
              The light was the same light as always. The day was the same day. But I was
              different in that moment — present, soft, awake. That is the feeling Daily Sunrise
              is built around.
            </p>
            <p className="font-display text-2xl italic text-warm-dark leading-snug border-l-4 border-sunrise-400 pl-5">
              "Real health is not something you buy. It is something you come home to."
            </p>
            <p className="font-sans text-warm-muted text-base leading-8">
              This blog, this community, this platform — it is all a love letter to the practice
              of slowing down. I share what I live. I hope it resonates with you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-4xl font-bold text-warm-dark"
            >
              What I live by
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="group p-6 rounded-2xl bg-warm-cream border border-warm-sand hover:border-sunrise-300 hover:shadow-lg hover:shadow-sunrise-100 transition-all duration-400"
              >
                <span className="text-4xl mb-4 block">{v.icon}</span>
                <h3 className="font-serif text-xl font-semibold text-warm-dark mb-2 group-hover:text-sunrise-600 transition-colors">
                  {v.title}
                </h3>
                <p className="font-sans text-sm text-warm-muted leading-relaxed">{v.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-sunrise-50 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-lg mx-auto px-6"
        >
          <p className="font-display text-3xl italic text-warm-dark mb-6">
            Want to follow the journey?
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/blog"
              className="px-7 py-3.5 rounded-full bg-warm-dark text-warm-white text-sm font-medium hover:bg-sunrise-500 hover:text-warm-dark transition-all duration-300"
            >
              Read the Blog
            </Link>
            <Link
              href="/social"
              className="px-7 py-3.5 rounded-full border border-warm-dark/20 text-warm-dark text-sm font-medium hover:border-sunrise-400 hover:text-sunrise-600 transition-all duration-300"
            >
              Follow on Social
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
}
