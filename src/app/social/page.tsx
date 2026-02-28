"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type Platform = "all" | "instagram" | "tiktok";

const SOCIAL_CONTENT = [
  {
    platform: "instagram" as const,
    type:     "photo",
    caption:  "Morning ritual — the first light deserves your full attention. ☀️ #slowliving #dailysunrise",
    likes:    "2.4k",
    comments: "48",
    image:    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
    url:      "https://instagram.com/dailysunrise",
    date:     "Feb 28, 2026",
  },
  {
    platform: "tiktok" as const,
    type:     "video",
    caption:  "Why I wake up before sunrise every day — and how it changed my life 🌅",
    views:    "84k",
    likes:    "6.2k",
    image:    "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=600&q=80",
    url:      "https://tiktok.com/@dailysunrise",
    date:     "Feb 25, 2026",
  },
  {
    platform: "instagram" as const,
    type:     "photo",
    caption:  "There's medicine in the quiet. In the stillness before the day begins. 🌿",
    likes:    "1.8k",
    comments: "32",
    image:    "https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&q=80",
    url:      "https://instagram.com/dailysunrise",
    date:     "Feb 22, 2026",
  },
  {
    platform: "tiktok" as const,
    type:     "video",
    caption:  "The supplement industry doesn't want you to know this about your body ✨",
    views:    "210k",
    likes:    "18.4k",
    image:    "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80",
    url:      "https://tiktok.com/@dailysunrise",
    date:     "Feb 20, 2026",
  },
  {
    platform: "instagram" as const,
    type:     "photo",
    caption:  "You don't need a retreat. You need a window. ☀️",
    likes:    "3.1k",
    comments: "74",
    image:    "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=600&q=80",
    url:      "https://instagram.com/dailysunrise",
    date:     "Feb 18, 2026",
  },
  {
    platform: "tiktok" as const,
    type:     "video",
    caption:  "Morning light and your nervous system: what nobody tells you 🧠☀️",
    views:    "46k",
    likes:    "4.1k",
    image:    "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&q=80",
    url:      "https://tiktok.com/@dailysunrise",
    date:     "Feb 15, 2026",
  },
];

const PLATFORMS = [
  { id: "all",       label: "All Content" },
  { id: "instagram", label: "Instagram" },
  { id: "tiktok",    label: "TikTok" },
];

const SOCIAL_LINKS = [
  {
    platform: "instagram",
    handle:   "@dailysunrise",
    url:      "https://instagram.com/dailysunrise",
    color:    "from-pink-400 to-orange-400",
    bg:       "bg-gradient-to-br from-pink-50 to-orange-50",
    border:   "border-pink-200",
    stats:    { followers: "12.4k", posts: "184" },
  },
  {
    platform: "tiktok",
    handle:   "@dailysunrise",
    url:      "https://tiktok.com/@dailysunrise",
    color:    "from-gray-900 to-gray-700",
    bg:       "bg-gradient-to-br from-gray-50 to-gray-100",
    border:   "border-gray-200",
    stats:    { followers: "38.2k", views: "2.1M" },
  },
];

export default function SocialPage() {
  const [filter, setFilter] = useState<Platform>("all");

  const filtered = filter === "all"
    ? SOCIAL_CONTENT
    : SOCIAL_CONTENT.filter((i) => i.platform === filter);

  return (
    <>
      {/* Header */}
      <section
        className="pt-32 pb-16 text-center"
        style={{ background: "linear-gradient(180deg, #E0F2FE 0%, #FDFCF8 100%)" }}
      >
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-sans text-xs font-medium tracking-[0.25em] text-sky-500 uppercase mb-4"
        >
          Social Media
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="font-serif text-5xl md:text-7xl font-bold text-warm-dark mb-4"
        >
          Living in<br />
          <span className="text-sky-500 italic">real time</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="font-sans text-warm-muted max-w-md mx-auto leading-relaxed mb-10"
        >
          All my content in one place — follow along on Instagram and TikTok for daily doses of slow living.
        </motion.p>

        {/* Platform CTA cards */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto px-6">
          {SOCIAL_LINKS.map((s, i) => (
            <motion.a
              key={s.platform}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.1 }}
              className={`flex-1 p-5 rounded-2xl border ${s.border} ${s.bg} text-left hover:shadow-lg transition-all duration-300`}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="font-sans text-sm font-semibold text-warm-dark capitalize">
                  {s.platform}
                </span>
              </div>
              <p className="font-sans text-xs text-warm-muted mb-2">{s.handle}</p>
              <div className="flex gap-4">
                {Object.entries(s.stats).map(([k, v]) => (
                  <div key={k}>
                    <p className="font-serif text-lg font-bold text-warm-dark">{v}</p>
                    <p className="font-sans text-xs text-warm-muted capitalize">{k}</p>
                  </div>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Filter */}
      <section className="bg-warm-cream border-b border-warm-sand sticky top-[72px] z-30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex gap-2">
          {PLATFORMS.map((p) => (
            <button
              key={p.id}
              onClick={() => setFilter(p.id as Platform)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                filter === p.id
                  ? "bg-sky-400 text-warm-dark"
                  : "text-warm-muted border border-warm-sand hover:border-sky-300 hover:text-warm-dark"
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>
      </section>

      {/* Masonry content grid */}
      <section className="section-pad bg-warm-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="masonry-grid">
            {filtered.map((item, i) => (
              <motion.div
                key={i}
                className="masonry-item"
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
                  <div className="relative overflow-hidden rounded-2xl bg-warm-white border border-warm-sand hover:border-sky-300 transition-all duration-500 hover:shadow-xl hover:shadow-sky-100">
                    {/* Image */}
                    <div className="relative overflow-hidden h-64">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={item.image}
                        alt={item.caption}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {item.type === "video" && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/25 group-hover:bg-black/35 transition-colors">
                          <div className="w-14 h-14 rounded-full bg-warm-white/90 flex items-center justify-center shadow-lg">
                            <svg viewBox="0 0 16 16" className="w-5 h-5 text-warm-dark ml-1">
                              <polygon points="4,2 14,8 4,14" fill="currentColor"/>
                            </svg>
                          </div>
                        </div>
                      )}
                      {/* Platform + date */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                        <span className="px-2.5 py-1 rounded-full bg-warm-white/90 backdrop-blur-sm text-xs font-medium text-warm-dark capitalize">
                          {item.platform}
                        </span>
                        <span className="px-2.5 py-1 rounded-full bg-warm-white/90 backdrop-blur-sm text-xs text-warm-muted">
                          {item.date}
                        </span>
                      </div>
                    </div>

                    {/* Caption + stats */}
                    <div className="p-4">
                      <p className="font-sans text-sm text-warm-dark leading-relaxed mb-3 line-clamp-2">
                        {item.caption}
                      </p>
                      <div className="flex items-center gap-4">
                        {item.views && (
                          <span className="flex items-center gap-1.5 text-xs text-warm-muted">
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 16 16">
                              <path d="M1 8s3-5 7-5 7 5 7 5-3 5-7 5-7-5-7-5z" stroke="currentColor" strokeWidth="1.3"/>
                              <circle cx="8" cy="8" r="2" stroke="currentColor" strokeWidth="1.3"/>
                            </svg>
                            {item.views}
                          </span>
                        )}
                        {item.likes && (
                          <span className="flex items-center gap-1.5 text-xs text-warm-muted">
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 16 16">
                              <path d="M8 14S2 10.5 2 6a3 3 0 016 0 3 3 0 016 0c0 4.5-6 8-6 8z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            {item.likes}
                          </span>
                        )}
                        {item.comments && (
                          <span className="flex items-center gap-1.5 text-xs text-warm-muted">
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
