"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type Platform = "all" | "instagram" | "tiktok";

// Placeholder content — replace with real posts when available
const SOCIAL_CONTENT = [
  {
    platform: "instagram" as const,
    type:     "photo",
    caption:  "Morning ritual — the first light deserves your full attention.",
    likes:    "2.4k",
    comments: "48",
    image:    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
    url:      "https://instagram.com/dailysunrise",
    date:     "28 feb",
  },
  {
    platform: "tiktok" as const,
    type:     "video",
    caption:  "Why I wake up before sunrise every day — and how it changed everything.",
    views:    "84k",
    likes:    "6.2k",
    image:    "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=600&q=80",
    url:      "https://tiktok.com/@dailysunrise",
    date:     "25 feb",
  },
  {
    platform: "instagram" as const,
    type:     "photo",
    caption:  "There is medicine in the quiet. In the stillness before the day begins.",
    likes:    "1.8k",
    comments: "32",
    image:    "https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&q=80",
    url:      "https://instagram.com/dailysunrise",
    date:     "22 feb",
  },
  {
    platform: "tiktok" as const,
    type:     "video",
    caption:  "What your body is actually asking for — and why we keep missing it.",
    views:    "210k",
    likes:    "18.4k",
    image:    "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80",
    url:      "https://tiktok.com/@dailysunrise",
    date:     "20 feb",
  },
  {
    platform: "instagram" as const,
    type:     "photo",
    caption:  "You don't need a retreat. You need a window.",
    likes:    "3.1k",
    comments: "74",
    image:    "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=600&q=80",
    url:      "https://instagram.com/dailysunrise",
    date:     "18 feb",
  },
  {
    platform: "tiktok" as const,
    type:     "video",
    caption:  "Morning light and your nervous system — what changes when you slow down.",
    views:    "46k",
    likes:    "4.1k",
    image:    "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&q=80",
    url:      "https://tiktok.com/@dailysunrise",
    date:     "15 feb",
  },
];

const PLATFORMS = [
  { id: "all" as Platform,       label: "All" },
  { id: "instagram" as Platform, label: "Instagram" },
  { id: "tiktok" as Platform,    label: "TikTok" },
];

export default function SocialPage() {
  const [filter, setFilter] = useState<Platform>("all");

  const filtered = filter === "all"
    ? SOCIAL_CONTENT
    : SOCIAL_CONTENT.filter((i) => i.platform === filter);

  return (
    <>
      {/* ── Header ──────────────────────────────────────────── */}
      <section
        className="relative pt-32 pb-20 overflow-hidden"
        style={{ backgroundColor: "#FFFDF6" }}
      >
        {/* Ambient top glow */}
        <div
          aria-hidden
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 80% at 50% 0%, rgba(201,138,24,0.09) 0%, transparent 70%)",
          }}
        />

        <div className="content-mid text-center relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-sans text-xs font-semibold tracking-[0.36em] uppercase mb-6"
            style={{ color: "#C98A18" }}
          >
            Follow the journey
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="font-serif font-bold leading-tight mb-6"
            style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", color: "#1A1610" }}
          >
            Life behind<br />
            <span style={{ color: "#C98A18", fontStyle: "italic" }}>the platform.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="font-sans leading-relaxed mb-12"
            style={{ fontSize: "1rem", color: "#7A6B52", maxWidth: "480px", margin: "0 auto 3rem" }}
          >
            Morning light, rituals, cooking, and stillness — shared as life is.
            Unfiltered. Present.
          </motion.p>

          {/* Platform links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="https://instagram.com/dailysunrise"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-6 px-6 py-5 rounded-2xl transition-all duration-300"
              style={{
                backgroundColor: "#FFF8EE",
                border: "1px solid rgba(201,138,24,0.18)",
              }}
            >
              <div className="text-left">
                <p className="font-sans text-xs font-semibold tracking-[0.25em] uppercase mb-1" style={{ color: "#C98A18" }}>Instagram</p>
                <p className="font-serif text-xl font-bold" style={{ color: "#1A1610" }}>12.4k</p>
                <p className="font-sans text-xs" style={{ color: "#A89070" }}>followers</p>
              </div>
              <span className="font-sans text-sm font-medium transition-transform duration-300 group-hover:translate-x-1" style={{ color: "#B8750E" }}>
                @dailysunrise →
              </span>
            </a>

            <a
              href="https://tiktok.com/@dailysunrise"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-6 px-6 py-5 rounded-2xl transition-all duration-300"
              style={{
                backgroundColor: "#FFF8EE",
                border: "1px solid rgba(201,138,24,0.18)",
              }}
            >
              <div className="text-left">
                <p className="font-sans text-xs font-semibold tracking-[0.25em] uppercase mb-1" style={{ color: "#C98A18" }}>TikTok</p>
                <p className="font-serif text-xl font-bold" style={{ color: "#1A1610" }}>38.2k</p>
                <p className="font-sans text-xs" style={{ color: "#A89070" }}>followers</p>
              </div>
              <span className="font-sans text-sm font-medium transition-transform duration-300 group-hover:translate-x-1" style={{ color: "#B8750E" }}>
                @dailysunrise →
              </span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── Filter ──────────────────────────────────────────── */}
      <div
        className="sticky top-[72px] z-30 border-b"
        style={{ backgroundColor: "#FFF8EE", borderColor: "rgba(201,138,24,0.15)" }}
      >
        <div className="content-wide py-4 flex gap-2">
          {PLATFORMS.map((p) => (
            <button
              key={p.id}
              onClick={() => setFilter(p.id)}
              className="px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 font-sans"
              style={{
                backgroundColor: filter === p.id ? "#1A1610" : "transparent",
                color: filter === p.id ? "#FFFDF6" : "#7A6B52",
                border: filter === p.id ? "1px solid #1A1610" : "1px solid rgba(201,138,24,0.20)",
              }}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── Content grid ────────────────────────────────────── */}
      <section className="section-pad" style={{ backgroundColor: "#FFF8EE" }}>
        <div className="content-wide">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
              >
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <div
                    className="overflow-hidden rounded-2xl transition-all duration-500"
                    style={{
                      backgroundColor: "#FFFDF6",
                      border: "1px solid rgba(201,138,24,0.15)",
                    }}
                  >
                    {/* Image */}
                    <div className="relative overflow-hidden h-64">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={item.image}
                        alt={item.caption}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      {item.type === "video" && (
                        <div className="absolute inset-0 flex items-center justify-center" style={{ backgroundColor: "rgba(26,22,16,0.20)" }}>
                          <div
                            className="w-12 h-12 rounded-full flex items-center justify-center"
                            style={{ backgroundColor: "rgba(255,253,246,0.92)" }}
                          >
                            <svg viewBox="0 0 16 16" className="w-4 h-4 ml-0.5" style={{ color: "#1A1610" }}>
                              <polygon points="4,2 14,8 4,14" fill="currentColor" />
                            </svg>
                          </div>
                        </div>
                      )}

                      {/* Platform badge */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                        <span
                          className="px-2.5 py-1 rounded-full text-xs font-medium font-sans backdrop-blur-sm capitalize"
                          style={{ backgroundColor: "rgba(255,253,246,0.90)", color: "#B8750E" }}
                        >
                          {item.platform}
                        </span>
                        <span
                          className="px-2.5 py-1 rounded-full text-xs font-sans backdrop-blur-sm"
                          style={{ backgroundColor: "rgba(255,253,246,0.90)", color: "#A89070" }}
                        >
                          {item.date}
                        </span>
                      </div>
                    </div>

                    {/* Caption + stats */}
                    <div className="p-5">
                      <p className="font-serif italic leading-snug mb-4 line-clamp-2" style={{ fontSize: "0.95rem", color: "#3D3424" }}>
                        {item.caption}
                      </p>
                      <div className="flex items-center gap-4 border-t pt-3" style={{ borderColor: "rgba(201,138,24,0.12)" }}>
                        {item.views && (
                          <span className="flex items-center gap-1.5 font-sans text-xs" style={{ color: "#A89070" }}>
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 16 16">
                              <path d="M1 8s3-5 7-5 7 5 7 5-3 5-7 5-7-5-7-5z" stroke="currentColor" strokeWidth="1.3"/>
                              <circle cx="8" cy="8" r="2" stroke="currentColor" strokeWidth="1.3"/>
                            </svg>
                            {item.views}
                          </span>
                        )}
                        {item.likes && (
                          <span className="flex items-center gap-1.5 font-sans text-xs" style={{ color: "#A89070" }}>
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 16 16">
                              <path d="M8 14S2 10.5 2 6a3 3 0 016 0 3 3 0 016 0c0 4.5-6 8-6 8z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            {item.likes}
                          </span>
                        )}
                        {item.comments && (
                          <span className="flex items-center gap-1.5 font-sans text-xs" style={{ color: "#A89070" }}>
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 16 16">
                              <path d="M14 8a6 6 0 01-6 6H3l-1 1V8a6 6 0 1112 0z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
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
        </div>
      </section>
    </>
  );
}
