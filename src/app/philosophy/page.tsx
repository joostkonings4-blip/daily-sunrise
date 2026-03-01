"use client";

/* ═══════════════════════════════════════════════════════════════
   DAILY SUNRISE — PHILOSOPHY PAGE
   "Your health is the medicine."
   Joost Konings' personal philosophy — lived, not theorised.

   Structure:
   1. HERO          — full-screen nature photo, centered manifesto
   2. CORE MESSAGE  — 50/50 split, the belief
   3. THREE PILLARS — warm cream, how we see it
   4. NATURE BREAK  — full-width photo + centered quote
   5. FOUNDER       — dark section, Joost's personal story
   6. CTA           — email signup, begin your morning practice
═══════════════════════════════════════════════════════════════ */

import { useState, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

/* ──────────────────────────────────────────────────────────────
   REUSABLE PRIMITIVES
────────────────────────────────────────────────────────────── */

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className="font-sans text-xs font-semibold tracking-[0.38em] uppercase mb-6"
      style={{ color: "#C4911A" }}
    >
      {children}
    </p>
  );
}

function GoldRule({ center = false }: { center?: boolean }) {
  return (
    <div
      className="w-10 h-px my-8"
      style={{
        background: "rgba(196,145,26,0.50)",
        margin: center ? "2rem auto" : "2rem 0",
      }}
    />
  );
}

function RevealText({
  children,
  delay = 0,
  className = "",
  style = {},
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

/* ──────────────────────────────────────────────────────────────
   SECTION 1 — HERO
   Full-screen nature photo. Dark vignette. Centered manifesto.
────────────────────────────────────────────────────────────── */

function HeroSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden"
      style={{ height: "100svh", minHeight: "600px" }}
    >
      {/* Parallax image */}
      <motion.div
        className="absolute inset-0 w-full"
        style={{ y: imageY, height: "130%", top: "-15%" }}
      >
        <Image
          src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=1920&q=88&fit=crop"
          alt="Sun breaking through forest trees"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          unoptimized
        />
      </motion.div>

      {/* Vignette layers */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.72) 100%)",
        }}
      />
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.10) 40%, rgba(0,0,0,0.55) 100%)",
        }}
      />

      {/* Centered content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6">
        {/* Logo mark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10"
        >
          <div
            className="w-14 h-14 rounded-full border flex items-center justify-center mx-auto mb-4"
            style={{ borderColor: "rgba(196,145,26,0.70)" }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="4" stroke="#C4911A" strokeWidth="1.5" />
              <line x1="12" y1="2" x2="12" y2="5" stroke="#C4911A" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="12" y1="19" x2="12" y2="22" stroke="#C4911A" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="2" y1="12" x2="5" y2="12" stroke="#C4911A" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="19" y1="12" x2="22" y2="12" stroke="#C4911A" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="4.93" y1="4.93" x2="7.05" y2="7.05" stroke="#C4911A" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="16.95" y1="16.95" x2="19.07" y2="19.07" stroke="#C4911A" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="19.07" y1="4.93" x2="16.95" y2="7.05" stroke="#C4911A" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="7.05" y1="16.95" x2="4.93" y2="19.07" stroke="#C4911A" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <Eyebrow>The philosophy</Eyebrow>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif font-light leading-[1.12]"
          style={{
            fontSize: "clamp(2.6rem, 6.5vw, 5.2rem)",
            color: "#FFFDF6",
            maxWidth: "820px",
            letterSpacing: "-0.01em",
          }}
        >
          Your health is{" "}
          <em style={{ color: "#C4911A", fontStyle: "italic" }}>the medicine.</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.0, delay: 0.55 }}
          className="font-sans mt-6"
          style={{
            color: "rgba(255,253,246,0.70)",
            fontSize: "clamp(0.9rem, 1.6vw, 1.05rem)",
            letterSpacing: "0.04em",
            maxWidth: "440px",
          }}
        >
          By slowing down, by changing your focus, you change your health.
        </motion.p>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-10 left-1/2 z-20 flex flex-col items-center gap-2"
        style={{ transform: "translateX(-50%)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
      >
        <p
          className="font-sans text-xs tracking-[0.28em] uppercase"
          style={{ color: "rgba(255,253,246,0.50)" }}
        >
          Read on
        </p>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path
              d="M9 3v12M4 10l5 5 5-5"
              stroke="rgba(255,253,246,0.45)"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────────
   SECTION 2 — CORE MESSAGE
   50/50 split: photo left, text right.
────────────────────────────────────────────────────────────── */

function CoreMessageSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="section-pad"
      style={{ backgroundColor: "#FFFDF6" }}
    >
      <div className="content-wide">
        <div
          className="grid gap-0"
          style={{
            gridTemplateColumns: "1fr 1fr",
            alignItems: "center",
          }}
        >
          {/* Left: nature photo */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden"
            style={{
              aspectRatio: "4/5",
              borderRadius: "2px",
            }}
          >
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=88&fit=crop"
              alt="Man in morning meditation in nature"
              fill
              className="object-cover"
              sizes="50vw"
              unoptimized
            />
            {/* Warm overlay */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, rgba(196,145,26,0.08) 0%, rgba(26,22,16,0.05) 100%)",
              }}
            />
          </motion.div>

          {/* Right: text */}
          <div
            className="flex flex-col justify-center"
            style={{ padding: "clamp(2.5rem, 5vw, 5rem) clamp(2rem, 4vw, 4.5rem)" }}
          >
            <RevealText delay={0.1}>
              <Eyebrow>The belief</Eyebrow>
            </RevealText>

            <RevealText delay={0.2}>
              <h2
                className="font-serif font-normal leading-[1.18]"
                style={{
                  fontSize: "clamp(1.8rem, 3.2vw, 2.8rem)",
                  color: "#1A1610",
                  marginBottom: "0",
                  letterSpacing: "-0.01em",
                }}
              >
                If you change your focus, it will change your health.
              </h2>
            </RevealText>

            <RevealText delay={0.3}>
              <GoldRule />
            </RevealText>

            <RevealText delay={0.35}>
              <p
                className="font-sans leading-relaxed mb-5"
                style={{
                  color: "#7A6B52",
                  fontSize: "clamp(0.95rem, 1.4vw, 1.05rem)",
                  lineHeight: "1.85",
                }}
              >
                We live in a world that tells us health is something to buy — a pill, a plan, a
                program. But real health begins in the quiet. In the moment you decide to slow down.
              </p>
            </RevealText>

            <RevealText delay={0.45}>
              <p
                className="font-sans leading-relaxed"
                style={{
                  color: "#7A6B52",
                  fontSize: "clamp(0.95rem, 1.4vw, 1.05rem)",
                  lineHeight: "1.85",
                }}
              >
                Daily Sunrise was born from this truth. Not from theory, but from lived experience.
                From a man who tried everything — and found that the answer was already inside.
              </p>
            </RevealText>
          </div>
        </div>
      </div>

      {/* Mobile stack override */}
      <style>{`
        @media (max-width: 768px) {
          .core-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────────
   SECTION 3 — THREE PILLARS
   Warm cream background, 3-column card grid.
────────────────────────────────────────────────────────────── */

const PILLARS = [
  {
    number: "01",
    title: "Slow down",
    body: "The fastest way to heal is to stop rushing. Your body knows what to do when you give it space.",
  },
  {
    number: "02",
    title: "Change your focus",
    body: "What you pay attention to grows. Shift from fear to presence. From noise to nature. From doing to being.",
  },
  {
    number: "03",
    title: "Trust the process",
    body: "Health is not a destination. It is a practice. Every sunrise is a chance to begin again.",
  },
];

function ThreePillarsSection() {
  return (
    <section className="section-pad" style={{ backgroundColor: "#FFF8EE" }}>
      <div className="content-wide">
        <div className="text-center mb-16">
          <RevealText>
            <Eyebrow>How we see it</Eyebrow>
          </RevealText>
          <RevealText delay={0.1}>
            <h2
              className="font-serif font-normal"
              style={{
                fontSize: "clamp(2rem, 3.8vw, 3.2rem)",
                color: "#1A1610",
                letterSpacing: "-0.015em",
                lineHeight: "1.2",
              }}
            >
              Not a cure. Not a hack.{" "}
              <em style={{ fontStyle: "italic" }}>A way of living.</em>
            </h2>
          </RevealText>
        </div>

        <div
          className="grid gap-px"
          style={{ gridTemplateColumns: "repeat(3, 1fr)" }}
        >
          {PILLARS.map((pillar, i) => (
            <RevealText key={pillar.number} delay={0.12 * i}>
              <div
                className="flex flex-col h-full"
                style={{
                  padding: "clamp(2rem, 3.5vw, 3.5rem)",
                  borderLeft: i === 0 ? "none" : "1px solid rgba(196,145,26,0.18)",
                }}
              >
                {/* Number */}
                <p
                  className="font-serif mb-6"
                  style={{
                    fontSize: "clamp(2.4rem, 4vw, 3.8rem)",
                    color: "rgba(196,145,26,0.28)",
                    lineHeight: 1,
                    fontWeight: 400,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {pillar.number}
                </p>

                <h3
                  className="font-serif font-normal mb-4"
                  style={{
                    fontSize: "clamp(1.3rem, 2vw, 1.75rem)",
                    color: "#1A1610",
                    letterSpacing: "-0.01em",
                    lineHeight: 1.25,
                  }}
                >
                  {pillar.title}
                </h3>

                <div className="w-8 h-px mb-5" style={{ background: "rgba(196,145,26,0.45)" }} />

                <p
                  className="font-sans leading-relaxed"
                  style={{
                    color: "#7A6B52",
                    fontSize: "clamp(0.9rem, 1.3vw, 1rem)",
                    lineHeight: "1.8",
                  }}
                >
                  {pillar.body}
                </p>
              </div>
            </RevealText>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .pillars-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────────
   SECTION 4 — NATURE BREAK
   Full-width photo (58vh) with parallax + centered italic quote.
────────────────────────────────────────────────────────────── */

function NatureBreakSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden flex items-center justify-center"
      style={{ height: "58vh", minHeight: "380px" }}
    >
      {/* Parallax image */}
      <motion.div
        className="absolute inset-0 w-full"
        style={{ y: imageY, height: "130%", top: "-15%" }}
      >
        <Image
          src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1920&q=88&fit=crop"
          alt="Foggy mountain landscape at dawn"
          fill
          className="object-cover"
          sizes="100vw"
          unoptimized
        />
      </motion.div>

      {/* Vignette */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0,0,0,0.30) 0%, rgba(0,0,0,0.68) 100%)",
        }}
      />

      {/* Quote */}
      <div className="relative z-20 text-center px-8" style={{ maxWidth: "720px" }}>
        <RevealText>
          <blockquote
            className="font-serif italic font-normal leading-[1.45]"
            style={{
              fontSize: "clamp(1.5rem, 3.5vw, 2.6rem)",
              color: "#FFFDF6",
              letterSpacing: "-0.01em",
            }}
          >
            "The body heals itself. You just have to get out of the way."
          </blockquote>
        </RevealText>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────────
   SECTION 5 — FOUNDER CONNECTION
   Dark section (#1A1610), Joost's personal story.
────────────────────────────────────────────────────────────── */

function FounderSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="section-pad"
      style={{ backgroundColor: "#1A1610" }}
    >
      <div className="content-text text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <Eyebrow>From the founder</Eyebrow>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.95, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif font-normal"
          style={{
            fontSize: "clamp(1.9rem, 3.5vw, 3rem)",
            color: "#FFFDF6",
            letterSpacing: "-0.015em",
            lineHeight: "1.2",
            marginBottom: "0",
          }}
        >
          This is what worked for me.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.25 }}
        >
          <div
            className="w-10 h-px mx-auto"
            style={{ background: "rgba(196,145,26,0.55)", margin: "2rem auto" }}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="font-sans leading-relaxed mb-10"
          style={{
            color: "rgba(255,253,246,0.62)",
            fontSize: "clamp(0.95rem, 1.4vw, 1.08rem)",
            lineHeight: "1.9",
          }}
        >
          I spent years chasing health from the outside — supplements, biohacking, optimization.
          None of it stuck. Then I started walking at sunrise. Breathing. Being still. And
          everything changed. Not because I found the right protocol. But because I finally stopped
          looking.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="font-serif italic"
          style={{
            color: "#C4911A",
            fontSize: "clamp(1rem, 1.6vw, 1.15rem)",
            letterSpacing: "0.01em",
          }}
        >
          — Joost Konings
        </motion.p>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────────
   SECTION 6 — CTA
   Warm cream, email signup. "Begin your morning practice."
────────────────────────────────────────────────────────────── */

function CTASection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  }

  return (
    <section
      ref={ref}
      className="section-pad"
      style={{ backgroundColor: "#FFFDF6" }}
    >
      <div className="content-text text-center">
        {/* Ambient glow */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{
            width: "600px",
            height: "300px",
            background:
              "radial-gradient(ellipse at center, rgba(196,145,26,0.07) 0%, transparent 70%)",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10"
        >
          <Eyebrow>Daily Sunrise</Eyebrow>

          <h2
            className="font-serif font-normal mb-4"
            style={{
              fontSize: "clamp(2rem, 4vw, 3.4rem)",
              color: "#1A1610",
              letterSpacing: "-0.015em",
              lineHeight: "1.2",
            }}
          >
            Begin your morning practice.
          </h2>

          <GoldRule center />

          <p
            className="font-sans mb-10"
            style={{
              color: "#7A6B52",
              fontSize: "clamp(0.95rem, 1.4vw, 1.05rem)",
              lineHeight: "1.8",
              maxWidth: "480px",
              margin: "0 auto 2.5rem auto",
            }}
          >
            One short email. Every morning. A small shift in perspective that stays with you
            through the day.
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center gap-3"
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mx-auto"
                style={{ background: "rgba(196,145,26,0.12)" }}
              >
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path
                    d="M4 11l5 5 9-9"
                    stroke="#C4911A"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p
                className="font-serif italic"
                style={{ color: "#1A1610", fontSize: "1.15rem" }}
              >
                Welcome. See you at sunrise.
              </p>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 items-center justify-center"
              style={{ maxWidth: "480px", margin: "0 auto" }}
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="font-sans flex-1 w-full outline-none"
                style={{
                  background: "transparent",
                  border: "none",
                  borderBottom: "1.5px solid rgba(196,145,26,0.55)",
                  padding: "0.75rem 0",
                  fontSize: "0.95rem",
                  color: "#1A1610",
                  letterSpacing: "0.01em",
                  minWidth: "0",
                }}
              />
              <button
                type="submit"
                className="font-sans text-xs font-semibold tracking-[0.22em] uppercase px-8 py-3 whitespace-nowrap"
                style={{
                  background: "#1A1610",
                  color: "#FFFDF6",
                  border: "none",
                  cursor: "pointer",
                  letterSpacing: "0.22em",
                  transition: "background 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLButtonElement).style.background = "#C4911A")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLButtonElement).style.background = "#1A1610")
                }
              >
                Begin
              </button>
            </form>
          )}

          <p
            className="font-sans mt-5 text-xs"
            style={{ color: "rgba(122,107,82,0.65)", letterSpacing: "0.02em" }}
          >
            Free. No spam. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────────
   PAGE EXPORT
────────────────────────────────────────────────────────────── */

export default function PhilosophyPage() {
  return (
    <main>
      <HeroSection />
      <CoreMessageSection />
      <ThreePillarsSection />
      <NatureBreakSection />
      <FounderSection />
      <CTASection />
    </main>
  );
}
