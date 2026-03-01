"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

/* ─────────────────────────────────────────────
   PRIMITIVES
───────────────────────────────────────────── */

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className="font-sans text-xs font-semibold tracking-[0.38em] uppercase mb-5"
      style={{ color: light ? "rgba(196,145,26,0.85)" : "#C4911A" }}
    >
      {children}
    </p>
  );
}

function RevealSection({ children, delay = 0, className = "", style = {} }: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-12%" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   CONTENT DATA
───────────────────────────────────────────── */

type Platform = "all" | "instagram" | "tiktok";

const SOCIAL_CONTENT = [
  {
    platform: "instagram" as const,
    type:     "photo",
    caption:  "Morning ritual — the first light deserves your full attention.",
    likes:    "2.4k",
    comments: "48",
    views:    undefined as string | undefined,
    image:    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
    url:      "https://instagram.com/dailysunrise",
    date:     "28 feb",
  },
  {
    platform: "tiktok" as const,
    type:     "video",
    caption:  "Why I wake up before sunrise every day — and how it changed everything.",
    views:    "84k" as string | undefined,
    likes:    "6.2k",
    comments: undefined as string | undefined,
    image:    "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=600&q=80",
    url:      "https://tiktok.com/@dailysunriseofficial",
    date:     "25 feb",
  },
  {
    platform: "instagram" as const,
    type:     "photo",
    caption:  "There is medicine in the quiet. In the stillness before the day begins.",
    likes:    "1.8k",
    comments: "32",
    views:    undefined as string | undefined,
    image:    "https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&q=80",
    url:      "https://instagram.com/dailysunrise",
    date:     "22 feb",
  },
  {
    platform: "tiktok" as const,
    type:     "video",
    caption:  "What your body is actually asking for — and why we keep missing it.",
    views:    "210k" as string | undefined,
    likes:    "18.4k",
    comments: undefined as string | undefined,
    image:    "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80",
    url:      "https://tiktok.com/@dailysunriseofficial",
    date:     "20 feb",
  },
  {
    platform: "instagram" as const,
    type:     "photo",
    caption:  "You don't need a retreat. You need a window.",
    likes:    "3.1k",
    comments: "74",
    views:    undefined as string | undefined,
    image:    "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=600&q=80",
    url:      "https://instagram.com/dailysunrise",
    date:     "18 feb",
  },
  {
    platform: "tiktok" as const,
    type:     "video",
    caption:  "Morning light and your nervous system — what changes when you slow down.",
    views:    "46k" as string | undefined,
    likes:    "4.1k",
    comments: undefined as string | undefined,
    image:    "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&q=80",
    url:      "https://tiktok.com/@dailysunriseofficial",
    date:     "15 feb",
  },
];

const PLATFORM_FILTERS = [
  { id: "all" as Platform,       label: "All" },
  { id: "instagram" as Platform, label: "Instagram" },
  { id: "tiktok" as Platform,    label: "TikTok" },
];

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */

export default function SocialPage() {
  const [filter, setFilter] = useState<Platform>("all");

  /* TikTok embed script */
  useEffect(() => {
    const existing = document.querySelector('script[src="https://www.tiktok.com/embed.js"]');
    if (!existing) {
      const script = document.createElement("script");
      script.src = "https://www.tiktok.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const filtered = filter === "all"
    ? SOCIAL_CONTENT
    : SOCIAL_CONTENT.filter((item) => item.platform === filter);

  return (
    <>
      {/* ══════════════════════════════════════════════════
          1. HERO — nature photo, 50 vh, dark vignette
      ══════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden flex items-center justify-center"
        style={{ height: "50vh", minHeight: "420px" }}
      >
        {/* Background photo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1504198453319-5ce911bafcde?w=1920&q=88&fit=crop"
          alt="Nature landscape at sunrise"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "center 40%" }}
        />

        {/* Dark vignette overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(15,12,8,0.55) 0%, rgba(15,12,8,0.42) 50%, rgba(15,12,8,0.72) 100%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 text-center px-6" style={{ maxWidth: "720px" }}>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-sans text-xs font-semibold tracking-[0.38em] uppercase mb-5"
            style={{ color: "rgba(196,145,26,0.90)" }}
          >
            Follow the journey
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif font-light leading-tight mb-5"
            style={{ fontSize: "clamp(2.4rem, 5vw, 3.8rem)", color: "#FFFDF6" }}
          >
            Life behind{" "}
            <em style={{ color: "#C4911A", fontStyle: "italic" }}>the platform.</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.56 }}
            className="font-sans leading-relaxed"
            style={{ fontSize: "1.05rem", color: "rgba(255,253,246,0.78)" }}
          >
            Morning light, rituals, and stillness — shared as life is.
            Unfiltered. Present.
          </motion.p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          2. PLATFORM CARDS — warm cream
      ══════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#FFF8EE", padding: "80px 24px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <RevealSection delay={0} style={{ textAlign: "center", marginBottom: "48px" }}>
            <Eyebrow>Connect</Eyebrow>
            <h2
              className="font-serif font-bold"
              style={{ fontSize: "clamp(1.7rem, 3.5vw, 2.6rem)", color: "#1A1610" }}
            >
              Find us where you are.
            </h2>
          </RevealSection>

          <div
            className="grid gap-6"
            style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}
          >
            {/* Instagram card */}
            <RevealSection delay={0.1}>
              <a
                href="https://instagram.com/dailysunrise"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-6 transition-all duration-300"
                style={{
                  backgroundColor: "#FFFDF6",
                  border: "1px solid rgba(196,145,26,0.22)",
                  borderRadius: "16px",
                  padding: "28px 28px",
                  display: "flex",
                  textDecoration: "none",
                }}
              >
                <div>
                  <p
                    className="font-sans font-semibold tracking-[0.28em] uppercase mb-2"
                    style={{ fontSize: "0.7rem", color: "#C4911A" }}
                  >
                    Instagram
                  </p>
                  <p
                    className="font-serif font-bold"
                    style={{ fontSize: "2rem", color: "#1A1610", lineHeight: 1.1 }}
                  >
                    12.4k
                  </p>
                  <p
                    className="font-sans"
                    style={{ fontSize: "0.78rem", color: "#A89070", marginTop: "2px" }}
                  >
                    followers
                  </p>
                </div>

                <span
                  className="font-sans font-medium transition-transform duration-300 group-hover:translate-x-1"
                  style={{ fontSize: "0.88rem", color: "#B8750E", display: "inline-block" }}
                >
                  @dailysunrise&nbsp;&rarr;
                </span>
              </a>
            </RevealSection>

            {/* TikTok card */}
            <RevealSection delay={0.18}>
              <a
                href="https://tiktok.com/@dailysunriseofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-6 transition-all duration-300"
                style={{
                  backgroundColor: "#FFFDF6",
                  border: "1px solid rgba(196,145,26,0.22)",
                  borderRadius: "16px",
                  padding: "28px 28px",
                  display: "flex",
                  textDecoration: "none",
                }}
              >
                <div>
                  <p
                    className="font-sans font-semibold tracking-[0.28em] uppercase mb-2"
                    style={{ fontSize: "0.7rem", color: "#C4911A" }}
                  >
                    TikTok
                  </p>
                  <p
                    className="font-serif font-bold"
                    style={{ fontSize: "2rem", color: "#1A1610", lineHeight: 1.1 }}
                  >
                    38.2k
                  </p>
                  <p
                    className="font-sans"
                    style={{ fontSize: "0.78rem", color: "#A89070", marginTop: "2px" }}
                  >
                    followers
                  </p>
                </div>

                <span
                  className="font-sans font-medium transition-transform duration-300 group-hover:translate-x-1"
                  style={{ fontSize: "0.88rem", color: "#B8750E", display: "inline-block" }}
                >
                  @dailysunriseofficial&nbsp;&rarr;
                </span>
              </a>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          3. TIKTOK EMBED — dark section
      ══════════════════════════════════════════════════ */}
      <section
        style={{
          backgroundColor: "#1A1610",
          padding: "96px 24px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle ambient glow */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "600px",
            height: "300px",
            background:
              "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(196,145,26,0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div style={{ maxWidth: "840px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <RevealSection delay={0} style={{ textAlign: "center", marginBottom: "56px" }}>
            <Eyebrow light>Latest videos</Eyebrow>
            <h2
              className="font-serif font-bold"
              style={{
                fontSize: "clamp(1.9rem, 4vw, 3rem)",
                color: "#FFFDF6",
                lineHeight: 1.18,
                marginBottom: "16px",
              }}
            >
              Watch on TikTok.
            </h2>
            <p
              className="font-sans"
              style={{ fontSize: "1rem", color: "rgba(255,253,246,0.58)", maxWidth: "460px", margin: "0 auto" }}
            >
              Short films about slow mornings, conscious living, and the beauty hidden in ordinary moments.
            </p>
          </RevealSection>

          {/* TikTok creator embed widget */}
          <RevealSection delay={0.15}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <blockquote
                className="tiktok-embed"
                cite="https://www.tiktok.com/@dailysunriseofficial"
                data-unique-id="dailysunriseofficial"
                data-embed-type="creator"
                style={{
                  maxWidth: "780px",
                  minWidth: "288px",
                  width: "100%",
                  borderRadius: "12px",
                  overflow: "hidden",
                }}
              >
                <section>
                  <a
                    target="_blank"
                    href="https://www.tiktok.com/@dailysunriseofficial"
                    rel="noopener noreferrer"
                    style={{ color: "#C4911A" }}
                  >
                    @dailysunriseofficial
                  </a>
                </section>
              </blockquote>
            </div>
          </RevealSection>

          {/* Follow button */}
          <RevealSection delay={0.25} style={{ textAlign: "center", marginTop: "48px" }}>
            <a
              href="https://tiktok.com/@dailysunriseofficial"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-sans font-semibold transition-all duration-300 hover:opacity-90 hover:scale-[1.02]"
              style={{
                backgroundColor: "#C4911A",
                color: "#1A1610",
                padding: "14px 36px",
                borderRadius: "9999px",
                fontSize: "0.92rem",
                letterSpacing: "0.04em",
                textDecoration: "none",
              }}
            >
              Follow on TikTok &rarr;
            </a>
          </RevealSection>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          4. CONTENT GRID — warm cream with sticky filter
      ══════════════════════════════════════════════════ */}

      {/* Sticky filter bar */}
      <div
        className="sticky top-[72px] z-30"
        style={{
          backgroundColor: "#1A1610",
          borderBottom: "1px solid rgba(196,145,26,0.14)",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "14px 24px",
            display: "flex",
            gap: "8px",
            alignItems: "center",
          }}
        >
          {PLATFORM_FILTERS.map((p) => (
            <button
              key={p.id}
              onClick={() => setFilter(p.id)}
              className="font-sans font-medium transition-all duration-200"
              style={{
                padding: "6px 20px",
                borderRadius: "9999px",
                fontSize: "0.82rem",
                letterSpacing: "0.03em",
                cursor: "pointer",
                border: filter === p.id
                  ? "1px solid #C4911A"
                  : "1px solid rgba(196,145,26,0.28)",
                backgroundColor: filter === p.id ? "#C4911A" : "transparent",
                color: filter === p.id ? "#1A1610" : "rgba(255,253,246,0.65)",
              }}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <section style={{ backgroundColor: "#FFF8EE", padding: "72px 24px 96px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div
            className="grid"
            style={{
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "24px",
            }}
          >
            {filtered.map((item, i) => (
              <motion.div
                key={`${item.platform}-${i}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8%" }}
                transition={{ duration: 0.72, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              >
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                  style={{ textDecoration: "none" }}
                >
                  <div
                    className="overflow-hidden transition-all duration-500"
                    style={{
                      backgroundColor: "#FFFDF6",
                      border: "1px solid rgba(196,145,26,0.18)",
                      borderRadius: "16px",
                    }}
                  >
                    {/* Image */}
                    <div className="relative overflow-hidden" style={{ height: "260px" }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={item.image}
                        alt={item.caption}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      {/* Video play overlay */}
                      {item.type === "video" && (
                        <div
                          className="absolute inset-0 flex items-center justify-center"
                          style={{ backgroundColor: "rgba(26,22,16,0.22)" }}
                        >
                          <div
                            className="flex items-center justify-center"
                            style={{
                              width: "48px",
                              height: "48px",
                              borderRadius: "9999px",
                              backgroundColor: "rgba(255,253,246,0.92)",
                            }}
                          >
                            <svg
                              viewBox="0 0 16 16"
                              style={{ width: "14px", height: "14px", color: "#1A1610", marginLeft: "2px" }}
                            >
                              <polygon points="4,2 14,8 4,14" fill="currentColor" />
                            </svg>
                          </div>
                        </div>
                      )}

                      {/* Platform + date badges */}
                      <div
                        className="absolute top-0 left-0 right-0 flex items-center justify-between"
                        style={{ padding: "12px 12px" }}
                      >
                        <span
                          className="font-sans font-medium capitalize"
                          style={{
                            fontSize: "0.72rem",
                            backgroundColor: "#1A1610",
                            color: "#C4911A",
                            padding: "4px 12px",
                            borderRadius: "9999px",
                            letterSpacing: "0.04em",
                          }}
                        >
                          {item.platform}
                        </span>
                        <span
                          className="font-sans"
                          style={{
                            fontSize: "0.72rem",
                            backgroundColor: "rgba(255,253,246,0.88)",
                            color: "#7A6B52",
                            padding: "4px 10px",
                            borderRadius: "9999px",
                            backdropFilter: "blur(4px)",
                          }}
                        >
                          {item.date}
                        </span>
                      </div>
                    </div>

                    {/* Caption + stats */}
                    <div style={{ padding: "20px 20px 18px" }}>
                      <p
                        className="font-serif italic leading-snug line-clamp-2"
                        style={{
                          fontSize: "0.94rem",
                          color: "#3D3424",
                          marginBottom: "14px",
                        }}
                      >
                        {item.caption}
                      </p>

                      <div
                        className="flex items-center gap-4"
                        style={{
                          borderTop: "1px solid rgba(196,145,26,0.12)",
                          paddingTop: "12px",
                        }}
                      >
                        {item.views && (
                          <span
                            className="flex items-center gap-1.5 font-sans"
                            style={{ fontSize: "0.75rem", color: "#A89070" }}
                          >
                            <svg width="14" height="14" fill="none" viewBox="0 0 16 16">
                              <path d="M1 8s3-5 7-5 7 5 7 5-3 5-7 5-7-5-7-5z" stroke="currentColor" strokeWidth="1.3" />
                              <circle cx="8" cy="8" r="2" stroke="currentColor" strokeWidth="1.3" />
                            </svg>
                            {item.views}
                          </span>
                        )}
                        {item.likes && (
                          <span
                            className="flex items-center gap-1.5 font-sans"
                            style={{ fontSize: "0.75rem", color: "#A89070" }}
                          >
                            <svg width="14" height="14" fill="none" viewBox="0 0 16 16">
                              <path d="M8 14S2 10.5 2 6a3 3 0 016 0 3 3 0 016 0c0 4.5-6 8-6 8z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            {item.likes}
                          </span>
                        )}
                        {item.comments && (
                          <span
                            className="flex items-center gap-1.5 font-sans"
                            style={{ fontSize: "0.75rem", color: "#A89070" }}
                          >
                            <svg width="14" height="14" fill="none" viewBox="0 0 16 16">
                              <path d="M14 8a6 6 0 01-6 6H3l-1 1V8a6 6 0 1112 0z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            {item.comments}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <div style={{ textAlign: "center", padding: "80px 0" }}>
              <p className="font-serif italic" style={{ color: "#A89070", fontSize: "1.1rem" }}>
                No posts found.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
