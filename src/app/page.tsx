"use client";

import { useState, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// ─── Helpers ───────────────────────────────────────────────────────────────────
function useFade(margin = "-60px") {
  const ref = useRef(null);
  const visible = useInView(ref, { once: true, margin } as Parameters<typeof useInView>[1]);
  return { ref, visible };
}

// ─── 1. OPENING ───────────────────────────────────────────────────────────────
function Opening() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, 40]);
  const textO = useTransform(scrollYProgress, [0, 0.45], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen overflow-hidden flex items-center justify-center"
      style={{ backgroundColor: "#0C0906" }}
    >
      <motion.div style={{ y: imgY }} className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=1920&q=88&fit=crop"
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(12,9,6,0.52) 0%, rgba(8,6,3,0.32) 40%, rgba(12,9,6,0.72) 100%)",
          }}
        />
      </motion.div>

      <motion.div
        style={{ opacity: textO, y: textY }}
        className="relative z-10 flex flex-col items-center text-center px-6"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.82 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <Image
            src="/logo dailysunrise.png"
            alt="Daily Sunrise"
            width={150}
            height={150}
            className="object-contain"
            priority
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif font-light"
          style={{
            fontSize: "clamp(2rem, 4.2vw, 3.8rem)",
            color: "#FFFDF6",
            letterSpacing: "0.01em",
            lineHeight: 1.15,
          }}
        >
          The same life.
          <br />
          <em style={{ color: "#C4911A" }}>A different perspective.</em>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
          className="absolute bottom-10 flex flex-col items-center gap-2"
        >
          <span
            className="font-sans text-[10px] tracking-[0.28em] uppercase"
            style={{ color: "rgba(255,253,246,0.45)" }}
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

// ─── 2. THE PAUSE ─────────────────────────────────────────────────────────────
function ThePause() {
  const { ref, visible } = useFade();
  const stats = [
    { n: "73%",  label: "wake up already anxious" },
    { n: "4.7h", label: "of screen time before 9 AM" },
    { n: "1",    label: "intentional hour changes everything" },
  ];

  return (
    <section
      ref={ref}
      className="relative py-32 overflow-hidden"
      style={{ backgroundColor: "#1A1610" }}
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-56 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 40% at 50% 0%, rgba(201,138,24,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="content-wide relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 24 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p
            className="font-sans text-xs font-semibold tracking-[0.36em] uppercase mb-5"
            style={{ color: "#C4911A" }}
          >
            The truth
          </p>
          <h2
            className="font-serif font-light"
            style={{
              fontSize: "clamp(1.9rem, 3.8vw, 3.1rem)",
              color: "#FFFDF6",
              lineHeight: 1.2,
            }}
          >
            Most mornings are wasted.
            <br />
            <em style={{ color: "#C4911A" }}>Yours don&apos;t have to be.</em>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3">
          {stats.map((s, i) => (
            <motion.div
              key={s.n}
              className="text-center py-14 px-8"
              style={{
                borderLeft: i > 0 ? "1px solid rgba(201,138,24,0.10)" : "none",
              }}
              initial={{ opacity: 0, y: 32 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.14, duration: 0.8 }}
            >
              <p
                className="font-serif mb-3"
                style={{
                  fontSize: "clamp(3rem, 6vw, 5rem)",
                  color: "#C4911A",
                  lineHeight: 1,
                  fontWeight: 300,
                }}
              >
                {s.n}
              </p>
              <p
                className="font-sans text-sm leading-relaxed"
                style={{ color: "rgba(255,253,246,0.50)", letterSpacing: "0.02em" }}
              >
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 3. THE FEELING ───────────────────────────────────────────────────────────
function TheFeeling() {
  const { ref, visible } = useFade("-40px");

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      style={{ backgroundColor: "#FFFDF6" }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[88vh]">
        <div className="relative min-h-[52vh] lg:min-h-auto overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1448375240586-882707db888b?w=1200&q=88&fit=crop"
            alt="Morning forest"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: "rgba(201,138,24,0.04)" }}
          />
        </div>

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
              The moment
            </p>
            <h2
              className="font-serif mb-7"
              style={{
                fontSize: "clamp(1.8rem, 3.2vw, 2.7rem)",
                color: "#1A1610",
                lineHeight: 1.22,
                fontWeight: 400,
              }}
            >
              You know that feeling
              <br />
              at dawn — before the world
              <br />
              starts asking of you?
            </h2>
            <div className="w-10 h-px mb-7" style={{ background: "rgba(196,145,26,0.38)" }} />
            <p
              className="font-sans leading-[1.92] mb-5"
              style={{ color: "#7A6B52", fontSize: "0.97rem" }}
            >
              The light is different. The air is soft. Your mind is clear. You&apos;re just — here.
              Present. That&apos;s the feeling Daily Sunrise was built around.
            </p>
            <p
              className="font-sans leading-[1.92]"
              style={{ color: "#7A6B52", fontSize: "0.97rem" }}
            >
              Not a productivity hack. Not a rigid routine. A quiet revolution that begins the
              moment you open your eyes.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── 4. WHAT IT IS ────────────────────────────────────────────────────────────
function WhatItIs() {
  const { ref, visible } = useFade();
  const pillars = [
    {
      n: "01",
      title: "A daily letter",
      body: "Every morning, one email. One reflection. One intention. Written to begin your day with clarity — not noise.",
    },
    {
      n: "02",
      title: "A living practice",
      body: "Simple rituals rooted in nature, stillness, and the wisdom of slow living. Nothing to buy. Just something to become.",
    },
    {
      n: "03",
      title: "A community of presence",
      body: "4,800+ people who chose depth over speed. Who decided the morning belongs to them.",
    },
  ];

  return (
    <section
      ref={ref}
      className="section-pad"
      style={{ backgroundColor: "#FFF8EE" }}
    >
      <div className="content-wide">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 24 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p
            className="font-sans text-xs font-semibold tracking-[0.36em] uppercase mb-5"
            style={{ color: "#C4911A" }}
          >
            Daily Sunrise is
          </p>
          <h2
            className="font-serif"
            style={{
              fontSize: "clamp(2rem, 4vw, 3.3rem)",
              color: "#1A1610",
              lineHeight: 1.18,
              fontWeight: 400,
            }}
          >
            Not an app. Not a guru.
            <br />
            <em style={{ color: "#C4911A" }}>A morning companion.</em>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          {pillars.map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: 32 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.14, duration: 0.85 }}
            >
              <p
                className="font-sans text-xs tracking-[0.2em] mb-3"
                style={{ color: "rgba(196,145,26,0.55)" }}
              >
                {p.n}
              </p>
              <div className="w-8 h-px mb-5" style={{ background: "rgba(196,145,26,0.32)" }} />
              <h3
                className="font-serif mb-4"
                style={{ fontSize: "1.3rem", color: "#1A1610", fontWeight: 400 }}
              >
                {p.title}
              </h3>
              <p
                className="font-sans leading-[1.88]"
                style={{ color: "#7A6B52", fontSize: "0.94rem" }}
              >
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 5. NATURE BREAK ──────────────────────────────────────────────────────────
function NatureBreak() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section ref={ref} className="relative h-[58vh] overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-[-8%]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&q=88&fit=crop"
          alt=""
          aria-hidden
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255,253,246,0.18) 0%, transparent 30%, transparent 70%, rgba(255,248,238,0.35) 100%)",
          }}
        />
      </motion.div>

      <div className="absolute inset-0 flex items-center justify-center px-6">
        <p
          className="font-serif italic text-center"
          style={{
            fontSize: "clamp(1.35rem, 3.2vw, 2.3rem)",
            color: "#FFFDF6",
            textShadow: "0 1px 22px rgba(0,0,0,0.38)",
            maxWidth: "580px",
            lineHeight: 1.55,
          }}
        >
          &ldquo;The quieter you become,
          <br />
          the more you can hear.&rdquo;
        </p>
      </div>
    </section>
  );
}

// ─── 6. THE LETTER ────────────────────────────────────────────────────────────
function TheLetter() {
  const { ref, visible } = useFade();
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    try {
      await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
    } catch {
      // silent
    }
    setDone(true);
  }

  return (
    <section
      ref={ref}
      id="signup"
      className="section-pad"
      style={{ backgroundColor: "#FFFDF6" }}
    >
      <div className="content-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.85 }}
            className="rounded-2xl overflow-hidden shadow-lg"
            style={{ border: "1px solid rgba(196,145,26,0.15)" }}
          >
            <div
              className="px-6 py-4 flex items-center gap-3"
              style={{ backgroundColor: "#1A1610" }}
            >
              <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 bg-amber-700">
                <Image
                  src="/logo dailysunrise.png"
                  alt="DS"
                  width={32}
                  height={32}
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-sans text-xs" style={{ color: "rgba(255,253,246,0.45)" }}>
                  from Daily Sunrise
                </p>
                <p className="font-sans text-sm font-medium" style={{ color: "#FFFDF6" }}>
                  Your morning is waiting
                </p>
              </div>
            </div>
            <div className="px-8 py-8" style={{ backgroundColor: "#FFF8EE" }}>
              <p
                className="font-serif mb-4"
                style={{ fontSize: "1.08rem", color: "#1A1610", lineHeight: 1.65 }}
              >
                Before the noise begins —<br />
                one thought to carry into your day.
              </p>
              <div className="w-8 h-px mb-4" style={{ background: "rgba(196,145,26,0.32)" }} />
              <p
                className="font-sans text-sm leading-relaxed"
                style={{ color: "#7A6B52" }}
              >
                Today: The art of beginning slowly. Why the most present people protect their
                first hour — and how you can too.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.18, duration: 0.85 }}
          >
            <p
              className="font-sans text-xs font-semibold tracking-[0.36em] uppercase mb-5"
              style={{ color: "#C4911A" }}
            >
              Join 4,800+ people
            </p>
            <h2
              className="font-serif mb-6"
              style={{
                fontSize: "clamp(1.75rem, 3.5vw, 2.8rem)",
                color: "#1A1610",
                lineHeight: 1.2,
                fontWeight: 400,
              }}
            >
              Start your morning
              <br />
              <em style={{ color: "#C4911A" }}>with intention.</em>
            </h2>
            <p
              className="font-sans leading-[1.88] mb-8"
              style={{ color: "#7A6B52", fontSize: "0.95rem" }}
            >
              One email. Every morning. A reflection that pulls you out of autopilot and into the
              present — in under 3 minutes.
            </p>

            {done ? (
              <div
                className="py-6 px-8 rounded-xl text-center"
                style={{ backgroundColor: "#1A1610" }}
              >
                <p className="font-serif italic" style={{ color: "#C4911A", fontSize: "1.1rem" }}>
                  Welcome to the sunrise.
                </p>
                <p className="font-sans text-sm mt-2" style={{ color: "rgba(255,253,246,0.5)" }}>
                  Check your inbox tomorrow morning.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="flex-1 px-5 py-3.5 rounded-lg font-sans text-sm outline-none"
                  style={{
                    backgroundColor: "#FFF8EE",
                    border: "1px solid rgba(196,145,26,0.25)",
                    color: "#1A1610",
                  }}
                />
                <button
                  type="submit"
                  className="px-7 py-3.5 rounded-lg font-sans text-sm font-medium whitespace-nowrap transition-opacity hover:opacity-80"
                  style={{ backgroundColor: "#1A1610", color: "#FFFDF6" }}
                >
                  Begin
                </button>
              </form>
            )}
            <p className="font-sans text-xs mt-4" style={{ color: "rgba(122,107,82,0.55)" }}>
              Free. No spam. Unsubscribe anytime.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── 7. PROOF ─────────────────────────────────────────────────────────────────
function Proof() {
  const { ref, visible } = useFade();
  const testimonials = [
    {
      q: "I never thought an email could change how I start my day. Six months in, I wake up earlier just to read it.",
      name: "Sarah M.",
      city: "Amsterdam",
    },
    {
      q: "The only newsletter I've never unsubscribed from. It feels like someone actually understands the pace I want to live at.",
      name: "Lena K.",
      city: "Berlin",
    },
    {
      q: "Daily Sunrise gave me back my mornings. Sounds dramatic. But it's true. I'm calmer, more focused, more present.",
      name: "Thomas V.",
      city: "Rotterdam",
    },
  ];

  return (
    <section ref={ref} className="section-pad" style={{ backgroundColor: "#1A1610" }}>
      <div className="content-wide">
        <motion.div
          className="text-center mb-18"
          initial={{ opacity: 0, y: 24 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p
            className="font-sans text-xs font-semibold tracking-[0.36em] uppercase mb-5"
            style={{ color: "#C4911A" }}
          >
            Real words
          </p>
          <h2
            className="font-serif font-light"
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              color: "#FFFDF6",
              lineHeight: 1.2,
            }}
          >
            Real people. Real mornings.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mt-16">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="px-8 py-10 rounded-2xl"
              style={{ border: "1px solid rgba(196,145,26,0.14)" }}
              initial={{ opacity: 0, y: 32 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.13, duration: 0.85 }}
            >
              <p
                className="font-serif italic leading-[1.78] mb-8"
                style={{ color: "rgba(255,253,246,0.80)", fontSize: "1.03rem" }}
              >
                &ldquo;{t.q}&rdquo;
              </p>
              <div className="w-6 h-px mb-4" style={{ background: "rgba(196,145,26,0.38)" }} />
              <p className="font-sans text-sm font-medium" style={{ color: "#C4911A" }}>
                {t.name}
              </p>
              <p className="font-sans text-xs" style={{ color: "rgba(255,253,246,0.32)" }}>
                {t.city}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 8. FOUNDER ───────────────────────────────────────────────────────────────
function Founder() {
  const { ref, visible } = useFade("-40px");

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      style={{ backgroundColor: "#FFF8EE" }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh]">
        <div className="relative min-h-[50vh] lg:min-h-auto overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1200&q=88&fit=crop"
            alt="Morning light"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-24 h-24 rounded-full flex items-center justify-center"
              style={{
                background: "rgba(201,138,24,0.14)",
                backdropFilter: "blur(3px)",
              }}
            >
              <Image
                src="/logo dailysunrise.png"
                alt="Daily Sunrise"
                width={68}
                height={68}
                className="object-contain"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center px-10 py-24 lg:px-16 xl:px-20">
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <p
              className="font-sans text-xs font-semibold tracking-[0.36em] uppercase mb-7"
              style={{ color: "#C4911A" }}
            >
              The founder
            </p>
            <h2
              className="font-serif mb-5"
              style={{
                fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                color: "#1A1610",
                lineHeight: 1.28,
                fontWeight: 400,
              }}
            >
              I built this from
              <br />a single morning.
            </h2>
            <div className="w-10 h-px mb-7" style={{ background: "rgba(196,145,26,0.38)" }} />
            <p
              className="font-sans leading-[1.92] mb-5"
              style={{ color: "#7A6B52", fontSize: "0.95rem" }}
            >
              Two years ago I walked outside before touching my phone. The sun was just starting.
              The world was still. I felt — for the first time in months — like I had time.
            </p>
            <p
              className="font-sans leading-[1.92] mb-8"
              style={{ color: "#7A6B52", fontSize: "0.95rem" }}
            >
              Daily Sunrise is my attempt to share that feeling. Every single day. With anyone
              willing to slow down enough to receive it.
            </p>
            <p className="font-sans text-sm" style={{ color: "#C4911A" }}>
              — Joost Konings, founder
            </p>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 mt-8 font-sans text-sm font-medium transition-opacity hover:opacity-70"
              style={{ color: "#B8750E" }}
            >
              Read the full story
              <span className="text-base leading-none">→</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── 9. FINAL CALL ────────────────────────────────────────────────────────────
function FinalCall() {
  const { ref, visible } = useFade("-20px");
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    try {
      await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
    } catch {
      // silent
    }
    setDone(true);
  }

  return (
    <section
      ref={ref}
      className="relative min-h-[80vh] flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#1A1610" }}
    >
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=1920&q=70&fit=crop"
          alt=""
          aria-hidden
          className="w-full h-full object-cover opacity-20"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 55% 55% at 50% 50%, rgba(196,145,26,0.07) 0%, transparent 70%)",
          }}
        />
      </div>

      <div
        className="relative z-10 text-center px-6"
        style={{ maxWidth: "540px", margin: "0 auto" }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={visible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.9 }}
          className="mb-10"
        >
          <Image
            src="/logo dailysunrise.png"
            alt="Daily Sunrise"
            width={72}
            height={72}
            className="object-contain mx-auto"
          />
        </motion.div>

        <motion.h2
          className="font-serif font-light mb-6"
          style={{
            fontSize: "clamp(2rem, 4.2vw, 3.4rem)",
            color: "#FFFDF6",
            lineHeight: 1.18,
          }}
          initial={{ opacity: 0, y: 32 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.18, duration: 0.85 }}
        >
          Tomorrow morning
          <br />
          starts{" "}
          <em style={{ color: "#C4911A" }}>tonight.</em>
        </motion.h2>

        <motion.p
          className="font-sans leading-relaxed mb-10"
          style={{ color: "rgba(255,253,246,0.52)", fontSize: "0.95rem" }}
          initial={{ opacity: 0 }}
          animate={visible ? { opacity: 1 } : {}}
          transition={{ delay: 0.32, duration: 0.8 }}
        >
          Join 4,800 people who chose a different kind of morning.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.48, duration: 0.85 }}
        >
          {done ? (
            <p className="font-serif italic" style={{ color: "#C4911A", fontSize: "1.2rem" }}>
              See you at sunrise.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 px-5 py-4 rounded-lg font-sans text-sm outline-none"
                style={{
                  backgroundColor: "rgba(255,253,246,0.07)",
                  border: "1px solid rgba(196,145,26,0.28)",
                  color: "#FFFDF6",
                }}
              />
              <button
                type="submit"
                className="px-8 py-4 rounded-lg font-sans text-sm font-medium whitespace-nowrap transition-opacity hover:opacity-85"
                style={{ backgroundColor: "#C4911A", color: "#1A1610" }}
              >
                Begin
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      <Opening />
      <ThePause />
      <TheFeeling />
      <WhatItIs />
      <NatureBreak />
      <TheLetter />
      <Proof />
      <Founder />
      <FinalCall />
    </>
  );
}
