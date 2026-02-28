"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const SOCIAL_ITEMS = [
  {
    platform: "instagram",
    type:     "photo",
    caption:  "Morning ritual — the first light deserves your full attention. ☀️ #slowliving #dailysunrise",
    likes:    "2.4k",
    image:    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
    url:      "https://instagram.com/dailysunrise",
  },
  {
    platform: "tiktok",
    type:     "video",
    caption:  "Why I wake up before sunrise every day — and how it changed my life 🌅",
    views:    "84k",
    image:    "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=600&q=80",
    url:      "https://tiktok.com/@dailysunrise",
  },
  {
    platform: "instagram",
    type:     "photo",
    caption:  "There's medicine in the quiet. In the stillness before the day begins. 🌿",
    likes:    "1.8k",
    image:    "https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&q=80",
    url:      "https://instagram.com/dailysunrise",
  },
  {
    platform: "tiktok",
    type:     "video",
    caption:  "The supplement industry doesn't want you to know this about your body ✨",
    views:    "210k",
    image:    "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80",
    url:      "https://tiktok.com/@dailysunrise",
  },
];

const PlatformIcon = ({ platform }: { platform: string }) => {
  if (platform === "instagram") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
      <path
        d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.87a8.26 8.26 0 004.83 1.54V7a4.85 4.85 0 01-1.06-.31z"
        stroke="currentColor" strokeWidth="1.2" fill="none"
      />
    </svg>
  );
};

export default function SocialPreview() {
  return (
    <section
      className="section-pad"
      style={{ background: "linear-gradient(180deg, #FDFCF8 0%, #EFF8FF 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-sans text-xs font-medium tracking-[0.25em] text-sky-500 uppercase mb-3"
          >
            Follow the journey
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl font-bold text-warm-dark"
          >
            Living it in<br />
            <span className="text-sky-500 italic">real time</span>
          </motion.h2>
        </div>

        {/* Masonry social grid */}
        <div className="masonry-grid mb-10">
          {SOCIAL_ITEMS.map((item, i) => (
            <motion.div
              key={i}
              className="masonry-item"
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="relative overflow-hidden rounded-2xl bg-warm-cream border border-warm-sand hover:border-sky-300 transition-all duration-500 hover:shadow-xl hover:shadow-sky-100">
                  {/* Image */}
                  <div className="relative overflow-hidden h-56">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.image}
                      alt={item.caption}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Video play overlay */}
                    {item.type === "video" && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                        <div className="w-12 h-12 rounded-full bg-warm-white/90 flex items-center justify-center">
                          <svg viewBox="0 0 16 16" className="w-5 h-5 text-warm-dark ml-0.5">
                            <polygon points="4,2 14,8 4,14" fill="currentColor"/>
                          </svg>
                        </div>
                      </div>
                    )}
                    {/* Platform badge */}
                    <div className="absolute top-3 right-3 px-2.5 py-1.5 rounded-full bg-warm-white/90 backdrop-blur-sm text-warm-dark flex items-center gap-1.5">
                      <PlatformIcon platform={item.platform} />
                      <span className="font-sans text-xs font-medium capitalize">{item.platform}</span>
                    </div>
                  </div>

                  {/* Caption + stats */}
                  <div className="p-4">
                    <p className="font-sans text-sm text-warm-dark leading-relaxed mb-3 line-clamp-2">
                      {item.caption}
                    </p>
                    <div className="flex items-center gap-4 text-warm-muted">
                      {item.likes && (
                        <span className="flex items-center gap-1.5 text-xs">
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 16 16">
                            <path d="M8 14S2 10.5 2 6a3 3 0 016 0 3 3 0 016 0c0 4.5-6 8-6 8z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          {item.likes}
                        </span>
                      )}
                      {item.views && (
                        <span className="flex items-center gap-1.5 text-xs">
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 16 16">
                            <path d="M1 8s3-5 7-5 7 5 7 5-3 5-7 5-7-5-7-5z" stroke="currentColor" strokeWidth="1.3"/>
                            <circle cx="8" cy="8" r="2" stroke="currentColor" strokeWidth="1.3"/>
                          </svg>
                          {item.views}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/social"
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-sky-400 text-warm-dark text-sm font-medium hover:bg-sky-300 transition-all duration-300 hover:shadow-xl hover:shadow-sky-200"
          >
            See All Content
            <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
