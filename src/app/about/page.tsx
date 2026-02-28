"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

// Premium coded portrait — sunrise composition, no photo needed
function FounderPortrait() {
  const RAYS = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330];

  return (
    <div className="absolute inset-0">
      {/* Warm amber gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, #FFF5D0 0%, #FDE9A8 50%, #FDDA90 100%)",
        }}
      />

      {/* Breathing ambient glow */}
      <div className="absolute inset-0 flex items-center justify-center" aria-hidden>
        <motion.div
          animate={{ scale: [1, 1.18, 1], opacity: [0.28, 0.48, 0.28] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="w-72 h-72 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(201,138,24,0.28) 0%, transparent 65%)",
          }}
        />
      </div>

      {/* SVG composition */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg
          viewBox="0 0 320 420"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[80%] max-w-[270px]"
        >
          {/* Outer decorative rings */}
          <circle cx="160" cy="178" r="112" stroke="#B8750E" strokeWidth="0.5" strokeOpacity="0.15" />
          <circle cx="160" cy="178" r="96"  stroke="#B8750E" strokeWidth="0.4" strokeOpacity="0.10" />
          <circle cx="160" cy="178" r="80"  stroke="#C98A18" strokeWidth="0.8" strokeOpacity="0.22" />

          {/* Sun rays — computed from center */}
          {RAYS.map((deg, i) => {
            const rad = (deg * Math.PI) / 180;
            const x1 = 160 + Math.sin(rad) * 66;
            const y1 = 178 - Math.cos(rad) * 66;
            const x2 = 160 + Math.sin(rad) * 78;
            const y2 = 178 - Math.cos(rad) * 78;
            return (
              <line
                key={i}
                x1={x1} y1={y1} x2={x2} y2={y2}
                stroke="#C98A18"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeOpacity="0.40"
              />
            );
          })}

          {/* Inner sun */}
          <circle
            cx="160" cy="178" r="56"
            fill="rgba(196,145,26,0.10)"
            stroke="#C98A18" strokeWidth="1" strokeOpacity="0.22"
          />

          {/* JK monogram */}
          <text
            x="160" y="195"
            textAnchor="middle"
            fill="#B8750E"
            fillOpacity="0.82"
            fontFamily="Georgia, serif"
            fontSize="42"
            fontWeight="700"
          >
            JK
          </text>

          {/* Horizon lines — ground / earth */}
          <line x1="16"  y1="338" x2="304" y2="338" stroke="#B8750E" strokeWidth="0.6" strokeOpacity="0.22" />
          <line x1="48"  y1="350" x2="272" y2="350" stroke="#B8750E" strokeWidth="0.5" strokeOpacity="0.14" />
          <line x1="80"  y1="360" x2="240" y2="360" stroke="#B8750E" strokeWidth="0.4" strokeOpacity="0.08" />
          <line x1="112" y1="369" x2="208" y2="369" stroke="#B8750E" strokeWidth="0.3" strokeOpacity="0.05" />

          {/* Wordmark */}
          <text
            x="160" y="405"
            textAnchor="middle"
            fill="#B8750E"
            fillOpacity="0.38"
            fontFamily="sans-serif"
            fontSize="8"
            letterSpacing="5"
          >
            DAILY SUNRISE
          </text>
        </svg>
      </div>
    </div>
  );
}

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
  {
    number: "01",
    title: "Presence",
    body: "Every morning is a gift. Start with intention — no phone, no rush. Just light, just breath, just now.",
  },
  {
    number: "02",
    title: "Nature",
    body: "Walk barefoot. Watch the sky change. Nature has a way of reminding us what truly matters.",
  },
  {
    number: "03",
    title: "Simplicity",
    body: "Less, but better. Simplicity is not a lack — it is the most radical act of self-awareness available to us.",
  },
  {
    number: "04",
    title: "Responsibility",
    body: "This journey begins alone, in quiet, before the world becomes loud. Then it becomes something worth sharing.",
  },
];

export default function AboutPage() {
  const valuesRef = useRef(null);
  const valuesInView = useInView(valuesRef, { once: true, margin: "-10%" });

  return (
    <>
      {/* ── Hero ────────────────────────────────────────────── */}
      <section
        className="relative min-h-[92vh] flex items-end overflow-hidden pt-24"
        style={{ backgroundColor: "#FFFDF6" }}
      >
        {/* Ambient top-right glow */}
        <div
          aria-hidden
          className="absolute top-0 right-0 w-[700px] h-[500px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 100% 0%, rgba(201,138,24,0.09) 0%, transparent 70%)",
          }}
        />

        <div className="content-wide w-full pb-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">

            {/* Text */}
            <div className="pb-20">
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="font-sans text-xs font-semibold tracking-[0.36em] uppercase mb-7"
                style={{ color: "#C98A18" }}
              >
                The founder
              </motion.p>

              <h1
                className="font-serif font-bold leading-tight mb-8"
                style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)", color: "#1A1610" }}
              >
                <RevealLine delay={0.3}>Hi, I&apos;m the</RevealLine>
                <RevealLine delay={0.45}>
                  <span style={{ color: "#C98A18", fontStyle: "italic" }}>face behind</span>
                </RevealLine>
                <RevealLine delay={0.6}>Daily Sunrise.</RevealLine>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.85 }}
                className="font-sans leading-relaxed max-w-lg"
                style={{ fontSize: "1.05rem", color: "#7A6B52" }}
              >
                I started Daily Sunrise because I was living fast and feeling empty.
                This space is my answer — and maybe yours too.
              </motion.p>
            </div>

            {/* Portrait — coded, no photo needed */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative h-[500px] lg:h-[640px] rounded-t-[140px] overflow-hidden"
            >
              <FounderPortrait />
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Story ───────────────────────────────────────────── */}
      <section className="section-pad" style={{ backgroundColor: "#FFF8EE" }}>
        {/* Thin vertical amber thread */}
        <div
          aria-hidden
          className="absolute left-1/2 -translate-x-px w-px h-full top-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, rgba(196,145,26,0.08) 30%, rgba(196,145,26,0.08) 70%, transparent 100%)",
          }}
        />
        <div className="content-text relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <p
              className="font-sans text-xs font-semibold tracking-[0.36em] uppercase"
              style={{ color: "#C98A18" }}
            >
              My story
            </p>

            <h2
              className="font-serif font-bold leading-tight"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", color: "#1A1610" }}
            >
              A different perspective on the same life.
            </h2>

            <div className="w-8 h-px" style={{ background: "rgba(201,138,24,0.5)" }} />

            <p className="font-sans leading-[1.95]" style={{ fontSize: "1rem", color: "#7A6B52" }}>
              I used to believe that health was something you achieved — a goal to reach, a
              protocol to follow, a supplement to take. I chased it hard. And the more I chased,
              the further away I felt from myself.
            </p>

            <p className="font-sans leading-[1.95]" style={{ fontSize: "1rem", color: "#7A6B52" }}>
              Then one morning — very early, very quiet — I watched the sun come up over the
              horizon. Not because I planned to. Just because I was there. And something shifted.
            </p>

            <p className="font-sans leading-[1.95]" style={{ fontSize: "1rem", color: "#7A6B52" }}>
              The light was the same light as always. The day was the same day. But I was
              different in that moment — present, soft, awake. That is the feeling Daily Sunrise
              is built around.
            </p>

            <blockquote
              className="border-l-2 pl-6 py-2"
              style={{ borderColor: "#C98A18" }}
            >
              <p
                className="font-serif italic font-light leading-snug"
                style={{ fontSize: "clamp(1.1rem, 2vw, 1.3rem)", color: "#3D3424" }}
              >
                "Real health is not something you buy. It is something you come home to."
              </p>
            </blockquote>

            <p className="font-sans leading-[1.95]" style={{ fontSize: "1rem", color: "#7A6B52" }}>
              This blog, this community, this platform — it is all a love letter to the practice
              of slowing down. I share what I live. I hope it resonates with you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Values ──────────────────────────────────────────── */}
      <section className="section-pad" style={{ backgroundColor: "#FFFDF6" }}>
        <div className="content-wide">

          {/* Eyebrow */}
          <div ref={valuesRef}>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="font-sans text-xs font-semibold tracking-[0.36em] uppercase mb-16"
              style={{ color: "#C98A18" }}
            >
              What I live by
            </motion.p>
          </div>

          {/* 4-column grid — same pattern as PhilosophySection */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t"
            style={{ borderColor: "rgba(201,138,24,0.18)" }}
          >
            {VALUES.map((v, i) => (
              <motion.div
                key={v.number}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.75, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="pt-10 pb-8"
                style={{
                  paddingRight: i < 3 ? "2rem" : "0",
                  paddingLeft: i > 0 ? "2rem" : "0",
                  borderRight: i < 3 ? "1px solid rgba(201,138,24,0.10)" : "none",
                }}
              >
                <span
                  className="font-sans text-xs font-semibold tracking-[0.3em] uppercase block mb-5"
                  style={{ color: "#C98A18" }}
                >
                  {v.number}
                </span>

                <h3
                  className="font-serif font-bold leading-snug mb-4"
                  style={{ fontSize: "clamp(1.2rem, 1.8vw, 1.45rem)", color: "#1A1610" }}
                >
                  {v.title}
                </h3>

                <div className="mb-4 w-6 h-px" style={{ background: "rgba(201,138,24,0.4)" }} />

                <p
                  className="font-sans leading-relaxed"
                  style={{ fontSize: "0.92rem", color: "#7A6B52" }}
                >
                  {v.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <section className="section-pad" style={{ backgroundColor: "#FFF8EE" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="content-text text-center"
        >
          <p
            className="font-serif italic font-light mb-8"
            style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)", color: "#3D3424" }}
          >
            Want to follow the journey?
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/blog"
              className="px-7 py-3.5 rounded-full text-sm font-medium transition-all duration-300 font-sans"
              style={{ backgroundColor: "#1A1610", color: "#FFFDF6" }}
            >
              Read the Blog
            </Link>
            <Link
              href="/social"
              className="px-7 py-3.5 rounded-full text-sm font-medium transition-all duration-300 font-sans"
              style={{ border: "1px solid rgba(26,22,16,0.20)", color: "#1A1610" }}
            >
              Follow on Social
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
}
