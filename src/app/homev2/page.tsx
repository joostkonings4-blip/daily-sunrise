"use client";

/* ═══════════════════════════════════════════════════════════════
   DAILY SUNRISE — V2 HOMEPAGE
   A complete marketing & storytelling experience.
   ONE STORY. From the first breath to the invitation.

   Structure:
   1. ARRIVAL     — full-screen tree, no noise, no rush
   2. THE TRUTH   — one line. the mirror.
   3. THE MOMENT  — the sunrise story
   4. THE SHIFT   — what changes when you slow down
   5. THE TREE    — interactive zones (reused component)
   6. THE LETTER  — what you receive every morning
   7. THE PROOF   — three reader voices
   8. THE VOICE   — the founder, human and honest
   9. THE CALL    — join. one email. three minutes.
═══════════════════════════════════════════════════════════════ */

import { useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link";
import TreeScrollStory from "@/components/TreeScrollStory";

/* ──────────────────────────────────────────────────────────────
   REUSABLE PRIMITIVES
────────────────────────────────────────────────────────────── */

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="font-sans text-xs font-semibold tracking-[0.38em] uppercase mb-6"
      style={{ color: "#C98A18" }}
    >
      {children}
    </p>
  );
}

function GoldRule() {
  return <div className="w-10 h-px my-8" style={{ background: "rgba(196,145,26,0.50)" }} />;
}

function RevealText({ children, delay = 0, className = "", style = {} }: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });
  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
        className={className}
        style={style}
      >
        {children}
      </motion.div>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────
   SECTION 1 — ARRIVAL
   Full screen, the tree, silence.
────────────────────────────────────────────────────────────── */

type ZoneId = "roots" | "trunk" | "branches" | "leaves" | "crown";

const ZONE_LABELS: Record<ZoneId, { title: string; desc: string }> = {
  roots:    { title: "The Roots",    desc: "Inner development. Health. Silence. Everything begins here." },
  trunk:    { title: "The Trunk",    desc: "Your backbone. Your values. Who you are when it gets hard." },
  branches: { title: "The Branches", desc: "Every choice strengthens them. Growth comes through movement." },
  leaves:   { title: "The Leaves",   desc: "Some beliefs fall away. New energy grows in their place." },
  crown:    { title: "The Crown",    desc: "Slowly, a full crown emerges. The tree becomes a sunrise." },
};

function V2Tree({ activeZone, onZoneEnter, onZoneLeave }: {
  activeZone: ZoneId | null;
  onZoneEnter: (z: ZoneId) => void;
  onZoneLeave: () => void;
}) {
  const T = "#C4911A";
  function o(zone: ZoneId) {
    if (activeZone === null) return 0.85;
    return activeZone === zone ? 1.0 : 0.15;
  }
  const circleO = activeZone === "crown" ? 0.85 : activeZone === null ? 0.50 : 0.08;
  const trunkO  = activeZone === "trunk" ? 1.0 : activeZone === null ? 0.85 : 0.15;

  return (
    <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Golden disc background */}
      <circle cx="250" cy="250" r="220" fill="#C4911A" fillOpacity="0.07" />
      <circle cx="250" cy="250" r="198" fill="#C4911A" fillOpacity="0.04" />

      {/* Crown + circle frame */}
      <motion.g animate={{ opacity: circleO }} transition={{ duration: 0.6 }}
        onMouseEnter={() => onZoneEnter("crown")} onMouseLeave={onZoneLeave} style={{ cursor: "pointer" }}>
        <rect x="60" y="38" width="380" height="200" fill="transparent" />
        <circle cx="250" cy="250" r="230" stroke={T} strokeWidth="2.5" />
        <circle cx="250" cy="250" r="221" stroke={T} strokeWidth="0.8" strokeOpacity="0.5" />
        <path d="M 250 180 C 250 162 249 142 248 116" stroke={T} strokeWidth="4" strokeLinecap="round"/>
        <path d="M 249 152 C 230 136 210 124 192 118" stroke={T} strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M 249 152 C 268 136 290 124 308 118" stroke={T} strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M 249 132 C 232 118 215 108 198 102" stroke={T} strokeWidth="2" strokeLinecap="round"/>
        <path d="M 249 132 C 266 118 283 108 300 102" stroke={T} strokeWidth="2" strokeLinecap="round"/>
        <path d="M 192 118 C 180 113 170 111 161 113" stroke={T} strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M 308 118 C 320 113 330 111 339 113" stroke={T} strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="248" cy="116" r="6" fill={T} />
        <circle cx="192" cy="118" r="4.5" fill={T} />
        <circle cx="308" cy="118" r="4.5" fill={T} />
        <circle cx="198" cy="102" r="3.5" fill={T} />
        <circle cx="300" cy="102" r="3.5" fill={T} />
        <circle cx="161" cy="113" r="3" fill={T} />
        <circle cx="339" cy="113" r="3" fill={T} />
      </motion.g>

      {/* Leaves */}
      <motion.g animate={{ opacity: o("leaves") }} transition={{ duration: 0.6 }}
        onMouseEnter={() => onZoneEnter("leaves")} onMouseLeave={onZoneLeave} style={{ cursor: "pointer" }}>
        <rect x="55" y="155" width="185" height="110" fill="transparent" />
        <rect x="260" y="155" width="185" height="110" fill="transparent" />
        <path d="M 247 198 C 222 182 196 172 170 166" stroke={T} strokeWidth="3" strokeLinecap="round"/>
        <path d="M 253 198 C 278 182 304 172 330 166" stroke={T} strokeWidth="3" strokeLinecap="round"/>
        <path d="M 170 166 C 157 162 146 160 137 163" stroke={T} strokeWidth="2" strokeLinecap="round"/>
        <path d="M 330 166 C 343 162 354 160 363 163" stroke={T} strokeWidth="2" strokeLinecap="round"/>
        <path d="M 170 166 C 162 155 152 147 140 143" stroke={T} strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M 330 166 C 338 155 348 147 360 143" stroke={T} strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M 246 220 C 216 203 183 191 153 185" stroke={T} strokeWidth="3.5" strokeLinecap="round"/>
        <path d="M 254 220 C 284 203 317 191 347 185" stroke={T} strokeWidth="3.5" strokeLinecap="round"/>
        <path d="M 153 185 C 139 181 128 180 118 183" stroke={T} strokeWidth="2" strokeLinecap="round"/>
        <path d="M 347 185 C 361 181 372 180 382 183" stroke={T} strokeWidth="2" strokeLinecap="round"/>
        <circle cx="137" cy="163" r="4.5" fill={T} />
        <circle cx="363" cy="163" r="4.5" fill={T} />
        <circle cx="140" cy="143" r="3.5" fill={T} />
        <circle cx="360" cy="143" r="3.5" fill={T} />
        <circle cx="118" cy="183" r="4.5" fill={T} />
        <circle cx="382" cy="183" r="4.5" fill={T} />
      </motion.g>

      {/* Branches */}
      <motion.g animate={{ opacity: o("branches") }} transition={{ duration: 0.6 }}
        onMouseEnter={() => onZoneEnter("branches")} onMouseLeave={onZoneLeave} style={{ cursor: "pointer" }}>
        <rect x="50" y="250" width="185" height="115" fill="transparent" />
        <rect x="265" y="250" width="185" height="115" fill="transparent" />
        <path d="M 244 326 C 198 302 148 282 104 272" stroke={T} strokeWidth="7" strokeLinecap="round"/>
        <path d="M 256 326 C 302 302 352 282 396 272" stroke={T} strokeWidth="7" strokeLinecap="round"/>
        <path d="M 104 272 C 84 267 68 264 54 267" stroke={T} strokeWidth="4.5" strokeLinecap="round"/>
        <path d="M 396 272 C 416 267 432 264 446 267" stroke={T} strokeWidth="4.5" strokeLinecap="round"/>
        <path d="M 244 298 C 200 276 154 260 112 252" stroke={T} strokeWidth="6" strokeLinecap="round"/>
        <path d="M 256 298 C 300 276 346 260 388 252" stroke={T} strokeWidth="6" strokeLinecap="round"/>
        <path d="M 245 248 C 210 230 172 216 136 208" stroke={T} strokeWidth="5" strokeLinecap="round"/>
        <path d="M 255 248 C 290 230 328 216 364 208" stroke={T} strokeWidth="5" strokeLinecap="round"/>
        <circle cx="54" cy="267" r="5.5" fill={T} />
        <circle cx="446" cy="267" r="5.5" fill={T} />
        <circle cx="72" cy="225" r="3.5" fill={T} />
        <circle cx="428" cy="225" r="3.5" fill={T} />
      </motion.g>

      {/* Trunk */}
      <motion.g animate={{ opacity: trunkO }} transition={{ duration: 0.6 }}
        onMouseEnter={() => onZoneEnter("trunk")} onMouseLeave={onZoneLeave} style={{ cursor: "pointer" }}>
        <rect x="230" y="180" width="40" height="195" fill="transparent" />
        <path d="M 243 368 C 241 338 240 306 241 274 C 242 250 244 230 247 210 L 248 194 C 249 188 250 184 250 181 C 250 184 251 188 252 194 L 253 210 C 256 230 258 250 259 274 C 260 306 259 338 257 368 Z"
          fill={T} fillOpacity="0.92"/>
        <path d="M 244 350 C 222 338 196 328 170 322" stroke={T} strokeWidth="9" strokeLinecap="round"/>
        <path d="M 256 350 C 278 338 304 328 330 322" stroke={T} strokeWidth="9" strokeLinecap="round"/>
        <circle cx="74" cy="313" r="5" fill={T} />
        <circle cx="426" cy="313" r="5" fill={T} />
      </motion.g>

      {/* Roots */}
      <motion.g animate={{ opacity: o("roots") }} transition={{ duration: 0.6 }}
        onMouseEnter={() => onZoneEnter("roots")} onMouseLeave={onZoneLeave} style={{ cursor: "pointer" }}>
        <rect x="60" y="365" width="380" height="115" fill="transparent" />
        <path d="M 250 368 C 250 390 250 412 250 432" stroke={T} strokeWidth="11" strokeLinecap="round"/>
        <path d="M 244 380 C 198 402 148 422 104 433" stroke={T} strokeWidth="7" strokeLinecap="round"/>
        <path d="M 256 380 C 302 402 352 422 396 433" stroke={T} strokeWidth="7" strokeLinecap="round"/>
        <path d="M 104 433 C 84 438 68 440 54 437" stroke={T} strokeWidth="4.5" strokeLinecap="round"/>
        <path d="M 396 433 C 416 438 432 440 446 437" stroke={T} strokeWidth="4.5" strokeLinecap="round"/>
        <path d="M 250 432 C 234 448 218 460 202 466" stroke={T} strokeWidth="5.5" strokeLinecap="round"/>
        <path d="M 250 432 C 266 448 282 460 298 466" stroke={T} strokeWidth="5.5" strokeLinecap="round"/>
        <circle cx="54" cy="437" r="5.5" fill={T} />
        <circle cx="446" cy="437" r="5.5" fill={T} />
        <circle cx="175" cy="470" r="3.5" fill={T} />
        <circle cx="325" cy="470" r="3.5" fill={T} />
      </motion.g>
    </svg>
  );
}

function ArrivalSection() {
  const containerRef = useRef<HTMLElement>(null);
  const [activeZone, setActiveZone] = useState<ZoneId | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const y       = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const zoneData = activeZone ? ZONE_LABELS[activeZone] : null;

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(175deg, #FFFDF6 0%, #FFF8E8 60%, #FEF2CC 100%)" }}
    >
      {/* Subtle grain */}
      <div className="grain-overlay absolute inset-0 pointer-events-none" />

      {/* Ambient glow — bottom center */}
      <motion.div
        className="absolute bottom-[-5%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 100%, rgba(201,138,24,0.12) 0%, transparent 70%)" }}
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 w-full flex flex-col items-center"
      >
        {/* Tree — centered, large */}
        <div className="relative w-[min(70vw,480px)] aspect-square mb-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-full h-full"
          >
            <V2Tree
              activeZone={activeZone}
              onZoneEnter={setActiveZone}
              onZoneLeave={() => setActiveZone(null)}
            />
          </motion.div>

          <AnimatePresence>
            {activeZone && zoneData && (
              <motion.div
                key={activeZone}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                className="absolute bottom-[-4rem] left-1/2 -translate-x-1/2 z-20 pointer-events-none whitespace-nowrap"
              >
                <div
                  className="px-5 py-3 rounded-xl"
                  style={{
                    background: "#FFFDF6",
                    border: "1px solid rgba(196,145,26,0.25)",
                    boxShadow: "0 4px 20px rgba(180,120,20,0.10)",
                  }}
                >
                  <p className="font-serif text-sm font-semibold mb-1" style={{ color: "#B8750E" }}>{zoneData.title}</p>
                  <p className="font-sans text-xs" style={{ color: "#7A6B52", maxWidth: "220px" }}>{zoneData.desc}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* The tagline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif font-bold text-center leading-tight px-6"
          style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)", color: "#1A1610" }}
        >
          The same life.{" "}
          <span style={{ color: "#C4911A", fontStyle: "italic" }}>A different perspective.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="font-serif italic mt-4 text-center"
          style={{ fontSize: "clamp(1rem, 1.6vw, 1.15rem)", color: "#A89070" }}
        >
          Every day, the sun rises.
        </motion.p>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="font-sans text-[9px] tracking-[0.35em] uppercase" style={{ color: "#A89070" }}>Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8"
          style={{ background: "linear-gradient(to bottom, rgba(201,138,24,0.5), transparent)" }}
        />
      </motion.div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────────
   SECTION 2 — THE TRUTH
   One line. The mirror.
────────────────────────────────────────────────────────────── */
function TruthSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <section
      className="section-pad overflow-hidden"
      style={{ backgroundColor: "#FFFDF6" }}
    >
      <div ref={ref} className="content-mid text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-sans text-xs font-semibold tracking-[0.38em] uppercase mb-12"
          style={{ color: "#C98A18" }}
        >
          The reality
        </motion.p>

        {/* Big statement */}
        <motion.p
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif font-bold leading-tight mb-8"
          style={{ fontSize: "clamp(2rem, 5vw, 3.8rem)", color: "#1A1610" }}
        >
          You are alive.<br />
          <span style={{ color: "#C98A18" }}>But are you choosing?</span>
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="w-12 h-px mx-auto mb-12"
          style={{ background: "rgba(196,145,26,0.45)", transformOrigin: "center" }}
        />

        {/* Three truths */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-3xl mx-auto">
          {[
            { stat: "73%", label: "of people check their phone within 5 minutes of waking up." },
            { stat: "4.7h", label: "the average time spent in digital stimulation before noon." },
            { stat: "1", label: "the number of mornings you get today. What will you do with it?" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.5 + i * 0.15 }}
              className="border-t pt-6"
              style={{ borderColor: "rgba(201,138,24,0.18)" }}
            >
              <p className="font-serif font-bold mb-2" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#C4911A" }}>
                {item.stat}
              </p>
              <p className="font-sans leading-relaxed" style={{ fontSize: "0.875rem", color: "#7A6B52" }}>
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────────
   SECTION 3 — THE MOMENT
   The sunrise story. Editorial, cinematic.
────────────────────────────────────────────────────────────── */
function MomentSection() {
  return (
    <section
      className="section-pad"
      style={{ backgroundColor: "#FFF8EE" }}
    >
      {/* Ambient glow */}
      <div
        aria-hidden
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 80% at 50% 0%, rgba(201,138,24,0.09) 0%, transparent 70%)",
        }}
      />

      <div className="content-text relative z-10">
        <RevealText>
          <Eyebrow>The beginning</Eyebrow>
        </RevealText>

        <RevealText delay={0.1}>
          <h2
            className="font-serif font-bold leading-tight mb-8"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "#1A1610" }}
          >
            One morning, very early,<br />
            <span style={{ color: "#C98A18", fontStyle: "italic" }}>something shifted.</span>
          </h2>
        </RevealText>

        <GoldRule />

        <RevealText delay={0.2}>
          <p className="font-sans leading-[1.95] mb-6" style={{ fontSize: "1.05rem", color: "#7A6B52" }}>
            I had been chasing health for years. Protocols, supplements, optimizations.
            More input. More data. More discipline. And the more I chased, the more
            fragmented I felt — like I was living in the future while my actual life
            was passing by in the present.
          </p>
        </RevealText>

        <RevealText delay={0.3}>
          <p className="font-sans leading-[1.95] mb-8" style={{ fontSize: "1.05rem", color: "#7A6B52" }}>
            Then one morning — I was standing in the kitchen, coffee in hand, before
            anyone else was awake. The sun was beginning to rise. And instead of
            reaching for my phone, I just stood there. Watched the light change.
            Breathed. Was present for the first time in months.
          </p>
        </RevealText>

        <RevealText delay={0.4}>
          <blockquote
            className="border-l-2 pl-6 py-1"
            style={{ borderColor: "#C98A18" }}
          >
            <p
              className="font-serif italic font-light leading-snug"
              style={{ fontSize: "clamp(1.1rem, 2vw, 1.35rem)", color: "#3D3424" }}
            >
              "The light was the same light as always. The day was the same day.
              But I was different in that moment — present, soft, awake."
            </p>
          </blockquote>
        </RevealText>

        <RevealText delay={0.5}>
          <p className="font-sans leading-[1.95] mt-8" style={{ fontSize: "1.05rem", color: "#7A6B52" }}>
            That is the feeling Daily Sunrise is built around. Not a method. Not
            a protocol. A moment of return — every single morning, before the world
            gets loud.
          </p>
        </RevealText>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────────
   SECTION 4 — THE SHIFT
   What Daily Sunrise is.
────────────────────────────────────────────────────────────── */
function ShiftSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section className="section-pad" style={{ backgroundColor: "#FFFDF6" }}>
      <div ref={ref} className="content-wide">

        {/* Statement */}
        <div className="max-w-4xl mb-20">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <Eyebrow>What this is</Eyebrow>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif font-bold leading-snug mb-4"
            style={{ fontSize: "clamp(1.4rem, 2.8vw, 2.2rem)", color: "#B8A88A" }}
          >
            Not a blog. Not a coach. Not a program.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="font-serif font-bold leading-tight mb-8"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.4rem)", color: "#1A1610" }}
          >
            A daily transition from chaos to intention.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="font-sans leading-relaxed"
            style={{ fontSize: "1.05rem", color: "#7A6B52", maxWidth: "520px" }}
          >
            For ambitious people who want to live consciously — without losing their ambition.
            For those who want to feel more, rush less, and wake up with a reason.
          </motion.p>
        </div>

        {/* 3 pillars */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 border-t"
          style={{ borderColor: "rgba(201,138,24,0.18)" }}
        >
          {[
            { number: "01", label: "Daily reset",              body: "Begin again each morning. Regardless of yesterday. The slate is clean. You choose what goes on it." },
            { number: "02", label: "Choose your focus",        body: "Attention is your most valuable asset. Most people give it away for free. You decide where yours goes." },
            { number: "03", label: "Discipline without stress", body: "Not hustle. Not optimization. Rituals that strengthen. Rest that recharges. Ambition that lasts." },
          ].map((p, i) => (
            <motion.div
              key={p.number}
              initial={{ opacity: 0, y: 36 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.45 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="pt-10 pb-4"
              style={{
                paddingRight: i < 2 ? "2.5rem" : "0",
                paddingLeft: i > 0 ? "2.5rem" : "0",
                borderRight: i < 2 ? "1px solid rgba(201,138,24,0.12)" : "none",
              }}
            >
              <span className="font-sans text-xs font-semibold tracking-[0.3em] uppercase block mb-5" style={{ color: "#C98A18" }}>
                {p.number}
              </span>
              <h3 className="font-serif font-bold leading-snug mb-4" style={{ fontSize: "clamp(1.2rem, 2vw, 1.55rem)", color: "#1A1610" }}>
                {p.label}
              </h3>
              <div className="mb-4 w-7 h-px" style={{ background: "rgba(201,138,24,0.4)" }} />
              <p className="font-sans leading-relaxed" style={{ fontSize: "0.92rem", color: "#7A6B52" }}>
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────────
   SECTION 5 — THE TREE (reused)
────────────────────────────────────────────────────────────── */

/* ──────────────────────────────────────────────────────────────
   SECTION 6 — THE LETTER
   What you receive every morning.
────────────────────────────────────────────────────────────── */
function LetterSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section className="section-pad" style={{ backgroundColor: "#FFFDF6" }}>
      <div ref={ref} className="content-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Letter card — the product */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="rounded-3xl p-8 relative overflow-hidden"
              style={{
                background: "linear-gradient(145deg, #FFF8E8 0%, #FEF0C8 100%)",
                border: "1px solid rgba(201,138,24,0.22)",
                boxShadow: "0 12px 48px rgba(180,120,20,0.10)",
              }}
            >
              {/* Letter header */}
              <div className="flex items-center justify-between mb-6 pb-4" style={{ borderBottom: "1px solid rgba(201,138,24,0.15)" }}>
                <div>
                  <p className="font-sans text-xs font-semibold tracking-[0.3em] uppercase" style={{ color: "#C98A18" }}>Daily Sunrise</p>
                  <p className="font-sans text-xs mt-0.5" style={{ color: "#A89070" }}>Every morning, 06:30</p>
                </div>
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "rgba(196,145,26,0.12)" }}
                >
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                    <circle cx="12" cy="12" r="4" fill="#C98A18" />
                    <line x1="12" y1="2" x2="12" y2="5" stroke="#C98A18" strokeWidth="2" strokeLinecap="round"/>
                    <line x1="12" y1="19" x2="12" y2="22" stroke="#C98A18" strokeWidth="2" strokeLinecap="round"/>
                    <line x1="2" y1="12" x2="5" y2="12" stroke="#C98A18" strokeWidth="2" strokeLinecap="round"/>
                    <line x1="19" y1="12" x2="22" y2="12" stroke="#C98A18" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>

              {/* Subject */}
              <p className="font-serif font-semibold mb-4" style={{ fontSize: "1.05rem", color: "#1A1610" }}>
                On the art of beginning again
              </p>

              {/* Body preview */}
              <p className="font-sans leading-relaxed mb-4" style={{ fontSize: "0.875rem", color: "#7A6B52" }}>
                There is a moment — just before the world remembers you exist — when the day is
                still yours. Before the notifications. Before the obligations. Before the roles
                you play for everyone else...
              </p>

              <p className="font-sans leading-relaxed" style={{ fontSize: "0.875rem", color: "#A89070" }}>
                Today&apos;s reflection takes 3 minutes. It will follow you all day.
              </p>

              {/* Footer */}
              <div className="mt-6 pt-4 flex items-center gap-2" style={{ borderTop: "1px solid rgba(201,138,24,0.12)" }}>
                <div className="w-6 h-6 rounded-full" style={{ background: "rgba(196,145,26,0.15)" }} />
                <span className="font-sans text-xs" style={{ color: "#A89070" }}>JK — Daily Sunrise</span>
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <div className="space-y-7">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <Eyebrow>The morning letter</Eyebrow>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="font-serif font-bold leading-tight"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "#1A1610" }}
            >
              Not a newsletter.<br />
              <span style={{ color: "#C98A18", fontStyle: "italic" }}>A conversation.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-sans leading-relaxed"
              style={{ fontSize: "1rem", color: "#7A6B52" }}
            >
              Every morning, one email arrives. Written by the founder. For the person
              who wants to start the day with intention, not reaction.
            </motion.p>

            {/* What you get */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-4"
            >
              {[
                "One reflection — 3 minutes to read, all day to feel",
                "A ritual suggestion — something small, something real",
                "A perspective shift — the same life, seen differently",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div
                    className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2"
                    style={{ backgroundColor: "#C98A18" }}
                  />
                  <p className="font-sans leading-relaxed" style={{ fontSize: "0.92rem", color: "#7A6B52" }}>
                    {item}
                  </p>
                </div>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="font-sans text-xs tracking-wide"
              style={{ color: "#B8750E" }}
            >
              ◎ Read by 4,800+ people. Every morning.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────────
   SECTION 7 — THE PROOF
   Real voices from real readers.
────────────────────────────────────────────────────────────── */
function ProofSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  const TESTIMONIALS = [
    {
      quote: "I didn't expect a daily email to change how I start my morning. But three weeks in, I noticed I was quieter. More deliberate. Less reactive. It's subtle — and that's the point.",
      name: "M.V., Amsterdam",
      sub: "Reader since 3 months",
    },
    {
      quote: "There are no hacks here. No 5-step routines. Just a voice that reminds you — gently, daily — that how you begin matters. That's rarer than I thought.",
      name: "T.B., Berlin",
      sub: "Reader since 6 months",
    },
    {
      quote: "I've tried other newsletters. They feel like products. This one feels like a letter from a friend who has figured something out — and wants to share it before the world gets loud.",
      name: "L.H., Rotterdam",
      sub: "Reader since 2 months",
    },
  ];

  return (
    <section className="section-pad" style={{ backgroundColor: "#FFF8EE" }}>
      <div ref={ref} className="content-wide">

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Eyebrow>What readers say</Eyebrow>
          <h2
            className="font-serif font-bold"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", color: "#1A1610" }}
          >
            The quiet effect.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 36 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col"
            >
              {/* Quote mark */}
              <p className="font-serif mb-5" style={{ fontSize: "3rem", color: "rgba(196,145,26,0.25)", lineHeight: 1 }}>&ldquo;</p>

              <blockquote
                className="font-serif italic font-light leading-relaxed flex-1 mb-6"
                style={{ fontSize: "clamp(0.95rem, 1.6vw, 1.05rem)", color: "#3D3424" }}
              >
                {t.quote}
              </blockquote>

              <div className="border-t pt-5" style={{ borderColor: "rgba(201,138,24,0.15)" }}>
                <p className="font-sans text-sm font-medium" style={{ color: "#1A1610" }}>{t.name}</p>
                <p className="font-sans text-xs mt-0.5" style={{ color: "#A89070" }}>{t.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────────
   SECTION 8 — THE VOICE
   The founder. Human. Honest.
────────────────────────────────────────────────────────────── */
function VoiceSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section className="section-pad" style={{ backgroundColor: "#FFFDF6" }}>
      <div ref={ref} className="content-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* JK portrait */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex items-center justify-center"
          >
            <span
              aria-hidden
              className="font-serif font-bold select-none pointer-events-none absolute"
              style={{ fontSize: "clamp(140px, 22vw, 260px)", lineHeight: 1, color: "rgba(201,138,24,0.05)" }}
            >
              JK
            </span>

            <div className="relative w-56 h-56 md:w-72 md:h-72">
              <svg viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <circle cx="160" cy="160" r="148" fill="#C4911A" fillOpacity="0.07" />
                <circle cx="160" cy="160" r="135" fill="#C4911A" fillOpacity="0.04" />
                <circle cx="160" cy="160" r="155" stroke="#B8750E" strokeWidth="0.8" strokeOpacity="0.22" />
                <circle cx="160" cy="160" r="140" stroke="#B8750E" strokeWidth="0.4" strokeOpacity="0.12" />
                {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg, i) => (
                  <line key={i} x1="160" y1="14" x2="160" y2="32"
                    stroke="#C98A18" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.40"
                    transform={`rotate(${deg} 160 160)`} />
                ))}
                <circle cx="160" cy="160" r="52" fill="none" stroke="#C98A18" strokeWidth="1.2" strokeOpacity="0.25" />
                <circle cx="160" cy="160" r="38" fill="#C4911A" fillOpacity="0.10" />
                <text x="160" y="172" textAnchor="middle" fill="#B8750E" fillOpacity="0.75"
                  fontFamily="serif" fontSize="36" fontWeight="700">JK</text>
              </svg>
            </div>
          </motion.div>

          {/* Text */}
          <div className="space-y-7">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <Eyebrow>The founder</Eyebrow>
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="font-serif font-bold leading-tight"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "#1A1610" }}
            >
              I am not a guru.<br />
              <span style={{ color: "#C98A18", fontStyle: "italic" }}>I am a searcher.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-sans leading-relaxed"
              style={{ fontSize: "1rem", color: "#7A6B52" }}
            >
              Daily Sunrise was born from a search for energy. Balance. Health. And direction.
              Not from theory — but from the life I was actually living. The mistakes I made.
              The mornings that changed things.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-sans leading-relaxed"
              style={{ fontSize: "1rem", color: "#7A6B52" }}
            >
              I write every morning letter myself. I share what I live.
              I don&apos;t have all the answers. But I know what it feels like to slow down —
              and what it gives you when you do.
            </motion.p>

            <motion.blockquote
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.45 }}
              className="border-l-2 pl-6 py-2"
              style={{ borderColor: "#C98A18" }}
            >
              <p className="font-serif italic font-light leading-snug" style={{ fontSize: "clamp(1rem, 1.8vw, 1.15rem)", color: "#3D3424" }}>
                &ldquo;I bought this domain for €5,000. Not because it was cheap — but because something
                in me would not let me not do it.&rdquo;
              </p>
              <p className="mt-3 font-sans text-xs tracking-[0.2em] uppercase" style={{ color: "#C98A18" }}>
                — JK, founder
              </p>
            </motion.blockquote>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link
                href="/about"
                className="inline-flex items-center gap-3 font-sans text-sm font-medium group transition-colors duration-300"
                style={{ color: "#B8750E" }}
              >
                Read the full story
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────────
   SECTION 9 — THE CALL
   The invitation. Join.
────────────────────────────────────────────────────────────── */
function CallSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });
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
    } catch { /* silent */ }
    setDone(true);
  }

  return (
    <section
      id="join"
      className="relative section-pad overflow-hidden flex items-center justify-center text-center"
      style={{ background: "linear-gradient(160deg, #FFF8E8 0%, #FEF0C8 40%, #FDEAA8 80%, #FDE28E 100%)" }}
    >
      {/* Pulsing center glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden>
        <motion.div
          animate={{ scale: [1, 1.22, 1], opacity: [0.18, 0.32, 0.18] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(201,138,24,0.25) 0%, transparent 65%)" }}
        />
      </div>

      <div ref={ref} className="relative z-10 max-w-2xl mx-auto px-6">

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-sans text-xs font-semibold tracking-[0.36em] uppercase mb-6"
          style={{ color: "#B8750E" }}
        >
          Join the morning
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif font-bold leading-tight mb-4"
          style={{ fontSize: "clamp(2.2rem, 5.5vw, 3.8rem)", color: "#1A1610" }}
        >
          Start your morning ritual.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-serif italic font-light mb-3"
          style={{ fontSize: "clamp(1.05rem, 2vw, 1.3rem)", color: "#5C4A2E" }}
        >
          One idea. Every morning. Three minutes.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="font-sans text-xs font-medium tracking-wide mb-10"
          style={{ color: "#B8750E" }}
        >
          ◎ 4,800+ people wake up with Daily Sunrise
        </motion.p>

        {!done ? (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-5"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 px-5 py-3.5 rounded-full text-sm focus:outline-none transition-all duration-200 font-sans"
              style={{
                backgroundColor: "rgba(255,255,255,0.78)",
                border: "1px solid rgba(184,117,14,0.30)",
                color: "#1A1610",
              }}
            />
            <button
              type="submit"
              className="px-7 py-3.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-300 font-sans hover:opacity-80"
              style={{ backgroundColor: "#1A1610", color: "#FFFDF6" }}
            >
              Start my morning
            </button>
          </motion.form>
        ) : (
          <motion.p
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="font-serif italic mb-10"
            style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)", color: "#3D2A0A" }}
          >
            Welcome to The Daily Sunrise.
          </motion.p>
        )}

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-sans text-xs"
          style={{ color: "#A89070" }}
        >
          Private. No spam. Always free. Cancel anytime.
        </motion.p>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────────
   PAGE ASSEMBLY
────────────────────────────────────────────────────────────── */
export default function HomeV2() {
  return (
    <>
      {/* Chapter 1 */}
      <ArrivalSection />

      {/* Chapter 2 */}
      <TruthSection />

      {/* Chapter 3 */}
      <MomentSection />

      {/* Chapter 4 */}
      <ShiftSection />

      {/* Chapter 5 — tree scroll journey */}
      <TreeScrollStory />

      {/* Chapter 6 */}
      <LetterSection />

      {/* Chapter 7 */}
      <ProofSection />

      {/* Chapter 8 */}
      <VoiceSection />

      {/* Chapter 9 */}
      <CallSection />
    </>
  );
}
