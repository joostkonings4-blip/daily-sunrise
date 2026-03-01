"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// ─── Helpers ───────────────────────────────────────────────────────────────────
function useFade(margin = "-60px") {
  const ref = useRef(null);
  const visible = useInView(ref, { once: true, margin } as Parameters<typeof useInView>[1]);
  return { ref, visible };
}

// ─── 1. HERO ──────────────────────────────────────────────────────────────────
function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const textO = useTransform(scrollYProgress, [0, 0.45], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, 40]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen overflow-hidden flex items-center justify-center"
      style={{ backgroundColor: "#0C0906" }}
    >
      {/* Parallax image */}
      <motion.div style={{ y: imgY }} className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=1920&q=88&fit=crop"
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(12,9,6,0.55) 0%, rgba(8,6,3,0.28) 40%, rgba(12,9,6,0.78) 100%)",
          }}
        />
      </motion.div>

      {/* Centered content */}
      <motion.div
        style={{ opacity: textO, y: textY }}
        className="relative z-10 flex flex-col items-center text-center px-6"
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.82 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10"
        >
          <Image
            src="/logo dailysunrise.png"
            alt="Daily Sunrise"
            width={120}
            height={120}
            className="object-contain"
            priority
          />
        </motion.div>

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="font-sans text-xs font-semibold tracking-[0.38em] uppercase mb-7"
          style={{ color: "#C4911A" }}
        >
          The founder
        </motion.p>

        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif font-light"
          style={{
            fontSize: "clamp(2.2rem, 5vw, 4.2rem)",
            color: "#FFFDF6",
            letterSpacing: "0.01em",
            lineHeight: 1.18,
          }}
        >
          Hi, I&apos;m Joost.
          <br />
          <em style={{ color: "#C4911A" }}>The face behind Daily Sunrise.</em>
        </motion.h1>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4 }}
          className="absolute bottom-10 flex flex-col items-center gap-2"
        >
          <span
            className="font-sans text-[10px] tracking-[0.28em] uppercase"
            style={{ color: "rgba(255,253,246,0.40)" }}
          >
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 9, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-9"
            style={{
              background: "linear-gradient(to bottom, rgba(196,145,26,0.55), transparent)",
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

// ─── 2. STORY ─────────────────────────────────────────────────────────────────
function Story() {
  const { ref, visible } = useFade("-40px");

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      style={{ backgroundColor: "#FFFDF6" }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[88vh]">

        {/* Photo — left */}
        <div className="relative min-h-[52vh] lg:min-h-auto overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=88&fit=crop"
            alt="Mountain landscape at dawn"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: "rgba(26,22,16,0.06)" }}
          />
        </div>

        {/* Text — right */}
        <div className="flex items-center px-10 py-24 lg:px-16 xl:px-20">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <p
              className="font-sans text-xs font-semibold tracking-[0.36em] uppercase mb-7"
              style={{ color: "#C4911A" }}
            >
              My story
            </p>

            <h2
              className="font-serif mb-6"
              style={{
                fontSize: "clamp(1.8rem, 3.2vw, 2.7rem)",
                color: "#1A1610",
                lineHeight: 1.22,
                fontWeight: 400,
              }}
            >
              A different perspective
              <br />
              on the same life.
            </h2>

            {/* Gold hairline */}
            <div className="w-10 h-px mb-8" style={{ background: "rgba(196,145,26,0.45)" }} />

            <p
              className="font-sans leading-[1.92] mb-5"
              style={{ color: "#7A6B52", fontSize: "0.97rem" }}
            >
              I used to believe that health was something you achieved — a goal to reach, a
              protocol to follow, a supplement to take. I chased it hard. And the more I
              chased, the further away I felt from myself.
            </p>

            <p
              className="font-sans leading-[1.92] mb-5"
              style={{ color: "#7A6B52", fontSize: "0.97rem" }}
            >
              Then one morning — very early, very quiet — I watched the sun come up over the
              horizon. Not because I planned to. Just because I was there. And something
              shifted.
            </p>

            <p
              className="font-sans leading-[1.92] mb-8"
              style={{ color: "#7A6B52", fontSize: "0.97rem" }}
            >
              The light was the same light as always. The day was the same day. But I was
              different in that moment — present, soft, awake. That is the feeling Daily
              Sunrise is built around.
            </p>

            {/* Blockquote */}
            <blockquote
              className="border-l-2 pl-6 py-1"
              style={{ borderColor: "#C4911A" }}
            >
              <p
                className="font-serif italic font-light leading-snug"
                style={{
                  fontSize: "clamp(1.05rem, 1.8vw, 1.22rem)",
                  color: "#3D3424",
                }}
              >
                &ldquo;Real health is not something you buy.
                <br />
                It is something you come home to.&rdquo;
              </p>
            </blockquote>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

// ─── 3. VALUES ────────────────────────────────────────────────────────────────
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

function Values() {
  const { ref, visible } = useFade();

  return (
    <section
      className="section-pad relative overflow-hidden"
      style={{ backgroundColor: "#1A1610" }}
    >
      {/* Ambient top glow */}
      <div
        aria-hidden
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-64 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 50% 0%, rgba(201,138,24,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="content-wide relative z-10">

        {/* Header */}
        <motion.div
          ref={ref}
          className="text-center mb-20"
          initial={{ opacity: 0, y: 24 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p
            className="font-sans text-xs font-semibold tracking-[0.36em] uppercase mb-5"
            style={{ color: "#C4911A" }}
          >
            What I live by
          </p>
          <h2
            className="font-serif font-light"
            style={{
              fontSize: "clamp(1.9rem, 3.8vw, 3.1rem)",
              color: "#FFFDF6",
              lineHeight: 1.2,
            }}
          >
            Real people.{" "}
            <em style={{ color: "#C4911A" }}>Real values.</em>
          </h2>
        </motion.div>

        {/* 4-column grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t"
          style={{ borderColor: "rgba(201,138,24,0.14)" }}
        >
          {VALUES.map((v, i) => (
            <motion.div
              key={v.number}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.75, delay: i * 0.13, ease: [0.22, 1, 0.36, 1] }}
              className="pt-10 pb-8"
              style={{
                paddingRight: i < 3 ? "2rem" : "0",
                paddingLeft: i > 0 ? "2rem" : "0",
                borderRight: i < 3 ? "1px solid rgba(201,138,24,0.10)" : "none",
              }}
            >
              <span
                className="font-sans text-xs font-semibold tracking-[0.3em] uppercase block mb-5"
                style={{ color: "#C4911A" }}
              >
                {v.number}
              </span>

              <h3
                className="font-serif font-light mb-4"
                style={{
                  fontSize: "clamp(1.15rem, 1.7vw, 1.38rem)",
                  color: "#FFFDF6",
                  lineHeight: 1.3,
                }}
              >
                {v.title}
              </h3>

              {/* Gold hairline */}
              <div className="mb-5 w-6 h-px" style={{ background: "rgba(196,145,26,0.40)" }} />

              <p
                className="font-sans leading-relaxed"
                style={{ fontSize: "0.91rem", color: "rgba(255,253,246,0.80)" }}
              >
                {v.body}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

// ─── 4. CTA ───────────────────────────────────────────────────────────────────
function CTA() {
  const { ref, visible } = useFade("-20px");

  return (
    <section
      className="section-pad"
      style={{ backgroundColor: "#FFF8EE" }}
    >
      <motion.div
        ref={ref}
        className="content-text text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={visible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.85 }}
      >
        {/* Gold hairline above */}
        <div
          className="mx-auto mb-12 w-10 h-px"
          style={{ background: "rgba(196,145,26,0.38)" }}
        />

        <p
          className="font-sans text-xs font-semibold tracking-[0.36em] uppercase mb-7"
          style={{ color: "#C4911A" }}
        >
          The journey continues
        </p>

        <p
          className="font-serif italic font-light mb-10"
          style={{
            fontSize: "clamp(1.5rem, 3vw, 2rem)",
            color: "#3D3424",
            lineHeight: 1.45,
          }}
        >
          Want to follow the journey?
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/blog"
            className="px-8 py-3.5 rounded-full text-sm font-medium font-sans transition-opacity hover:opacity-80"
            style={{ backgroundColor: "#1A1610", color: "#FFFDF6" }}
          >
            Read the Blog
          </Link>
          <Link
            href="/social"
            className="px-8 py-3.5 rounded-full text-sm font-medium font-sans transition-opacity hover:opacity-70"
            style={{
              border: "1px solid rgba(26,22,16,0.22)",
              color: "#1A1610",
              backgroundColor: "transparent",
            }}
          >
            Follow on Social
          </Link>
        </div>

        {/* Slogan */}
        <p
          className="font-sans text-xs tracking-[0.22em] uppercase mt-14"
          style={{ color: "rgba(122,107,82,0.48)" }}
        >
          The Same Life — a different perspective
        </p>
      </motion.div>
    </section>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────
export default function AboutPage() {
  return (
    <>
      <Hero />
      <Story />
      <Values />
      <CTA />
    </>
  );
}
