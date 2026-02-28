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
      {/* Header */}
      <section
        className="pt-32 pb-16 text-center"
        style={{ background: "linear-gradient(180deg, #FFF8E7 0%, #FDFCF8 100%)" }}
      >
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-sans text-xs font-medium tracking-[0.25em] text-sunrise-500 uppercase mb-4"
        >
          The Blog
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="font-serif text-5xl md:text-7xl font-bold text-warm-dark mb-4"
        >
          Stories that slow<br />
          <span className="text-sunrise-500 italic">you down</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="font-sans text-warm-muted max-w-md mx-auto leading-relaxed"
        >
          Essays, reflections, and gentle provocations about living fully in the present.
        </motion.p>
      </section>

      {/* Category filter */}
      <section className="bg-warm-cream border-b border-warm-sand sticky top-[72px] z-30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex gap-2 overflow-x-auto scrollbar-hide">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                active === cat
                  ? "bg-sunrise-400 text-warm-dark"
                  : "bg-transparent text-warm-muted hover:text-warm-dark border border-warm-sand hover:border-sunrise-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="section-pad bg-warm-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="masonry-grid">
            {filtered.map((post, i) => (
              <BlogCard key={post.slug} post={post} index={i} />
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="text-center font-sans text-warm-muted py-20">
              No posts in this category yet — check back soon 🌅
            </p>
          )}
        </div>
      </section>
    </>
  );
}
