"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import BlogCard from "@/components/BlogCard";
import { BLOG_POSTS } from "@/lib/blog-data";

const CATEGORIES = [
  "All",
  "Slow Living",
  "Rituals",
  "Inner Health",
  "Nature",
  "Mindfulness",
  "Nourishment",
];

// ─── Hero ──────────────────────────────────────────────────────────────────────
function BlogHero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const textO = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.55], [0, 36]);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden flex items-center justify-center"
      style={{ height: "50vh", minHeight: "360px", backgroundColor: "#0C0906" }}
    >
      {/* Parallax photo */}
      <motion.div style={{ y: imgY }} className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1431794062232-2a99a5431c6b?w=1920&q=88&fit=crop"
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(12,9,6,0.48) 0%, rgba(8,6,3,0.28) 38%, rgba(12,9,6,0.68) 100%)",
          }}
        />
      </motion.div>

      {/* Centered text */}
      <motion.div
        style={{ opacity: textO, y: textY }}
        className="relative z-10 flex flex-col items-center text-center px-6"
      >
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="font-sans font-semibold tracking-[0.36em] uppercase mb-5"
          style={{ fontSize: "0.7rem", color: "#C4911A" }}
        >
          The Blog
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.42, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif font-light"
          style={{
            fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
            color: "#FFFDF6",
            lineHeight: 1.15,
            letterSpacing: "0.005em",
          }}
        >
          Stories that slow{" "}
          <em style={{ color: "#C4911A" }}>you down.</em>
        </motion.h1>

        {/* Gold hairline */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 0.72, duration: 0.9 }}
          className="mt-6 w-10"
          style={{
            height: "1px",
            background: "rgba(196,145,26,0.55)",
            transformOrigin: "center",
          }}
        />
      </motion.div>
    </section>
  );
}

// ─── Filter bar ────────────────────────────────────────────────────────────────
function FilterBar({
  active,
  onSelect,
}: {
  active: string;
  onSelect: (cat: string) => void;
}) {
  return (
    <div
      className="sticky z-30"
      style={{
        top: "72px",
        backgroundColor: "#1A1610",
        borderBottom: "1px solid rgba(196,145,26,0.12)",
      }}
    >
      {/* Top gold hairline accent */}
      <div
        className="absolute top-0 left-0 right-0"
        style={{ height: "1px", background: "rgba(196,145,26,0.20)" }}
      />

      <div
        className="content-wide py-4 flex gap-2 overflow-x-auto"
        style={{ scrollbarWidth: "none" }}
      >
        {CATEGORIES.map((cat) => {
          const isActive = active === cat;
          return (
            <button
              key={cat}
              onClick={() => onSelect(cat)}
              className="px-4 py-1.5 rounded-full font-sans text-sm font-medium whitespace-nowrap transition-all duration-200"
              style={{
                backgroundColor: isActive ? "#C4911A" : "transparent",
                color: isActive ? "#1A1610" : "rgba(255,253,246,0.50)",
                border: isActive
                  ? "1px solid #C4911A"
                  : "1px solid rgba(196,145,26,0.28)",
              }}
            >
              {cat}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────
export default function BlogPage() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? BLOG_POSTS
      : BLOG_POSTS.filter((p) => p.category === active);

  return (
    <>
      <BlogHero />

      <FilterBar active={active} onSelect={setActive} />

      {/* ── Grid section ──────────────────────────────────────────── */}
      <section
        className="section-pad"
        style={{ backgroundColor: "#FFF8EE" }}
      >
        {/* Ambient top glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 -translate-x-1/2"
          style={{
            top: 0,
            width: "720px",
            height: "220px",
            background:
              "radial-gradient(ellipse 60% 80% at 50% 0%, rgba(201,138,24,0.06) 0%, transparent 70%)",
          }}
        />

        <div className="content-wide relative z-10">
          {filtered.length > 0 ? (
            <div className="masonry-grid">
              {filtered.map((post, i) => (
                <BlogCard key={post.slug} post={post} index={i} />
              ))}
            </div>
          ) : (
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center font-serif italic py-24"
              style={{ color: "rgba(122,107,82,0.55)", fontSize: "1.05rem" }}
            >
              Nothing here yet — come back soon.
            </motion.p>
          )}
        </div>

        {/* Bottom gold hairline */}
        <div
          className="content-wide mt-20"
          style={{ height: "1px", background: "rgba(196,145,26,0.15)" }}
        />

        {/* Blog footer note */}
        <div className="content-wide mt-10 text-center">
          <p
            className="font-sans text-xs tracking-[0.22em] uppercase"
            style={{ color: "rgba(122,107,82,0.45)" }}
          >
            New essays every week — slow down with us
          </p>
        </div>
      </section>
    </>
  );
}
