"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import BlogCard from "@/components/BlogCard";
import { BLOG_POSTS } from "@/lib/blog-data";

const CATEGORIES = ["All", "Slow Living", "Rituals", "Inner Health", "Nature", "Mindfulness", "Nourishment"];

export default function BlogPage() {
  const [active, setActive] = useState("All");

  const filtered = active === "All"
    ? BLOG_POSTS
    : BLOG_POSTS.filter((p) => p.category === active);

  return (
    <>
      {/* ── Header ──────────────────────────────────────────── */}
      <section
        className="relative pt-32 pb-20 overflow-hidden"
        style={{ backgroundColor: "#FFFDF6" }}
      >
        {/* Warm top glow */}
        <div
          aria-hidden
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] pointer-events-none"
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
            The Blog
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="font-serif font-bold leading-tight mb-6"
            style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", color: "#1A1610" }}
          >
            Stories that slow<br />
            <span style={{ color: "#C98A18", fontStyle: "italic" }}>you down.</span>
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.8 }}
            className="w-12 h-px mx-auto mb-6"
            style={{ background: "rgba(196,145,26,0.45)", transformOrigin: "center" }}
          />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="font-sans leading-relaxed"
            style={{ fontSize: "1rem", color: "#7A6B52", maxWidth: "440px", margin: "0 auto" }}
          >
            Essays, reflections, and quiet provocations about living fully in the present.
          </motion.p>
        </div>
      </section>

      {/* ── Category filter ─────────────────────────────────── */}
      <div
        className="sticky top-[72px] z-30 border-b"
        style={{ backgroundColor: "#FFF8EE", borderColor: "rgba(201,138,24,0.15)" }}
      >
        <div className="content-wide py-4 flex gap-2 overflow-x-auto scrollbar-hide">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className="px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 font-sans"
              style={{
                backgroundColor: active === cat ? "#1A1610" : "transparent",
                color: active === cat ? "#FFFDF6" : "#7A6B52",
                border: active === cat ? "1px solid #1A1610" : "1px solid rgba(201,138,24,0.20)",
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ── Grid ────────────────────────────────────────────── */}
      <section className="section-pad" style={{ backgroundColor: "#FFF8EE" }}>
        <div className="content-wide">
          <div className="masonry-grid">
            {filtered.map((post, i) => (
              <BlogCard key={post.slug} post={post} index={i} />
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="text-center font-serif italic py-20" style={{ color: "#A89070" }}>
              Nothing here yet — come back soon.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
