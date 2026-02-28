"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import BlogCard from "./BlogCard";
import { BLOG_POSTS } from "@/lib/blog-data";

export default function BlogPreview() {
  const featured = BLOG_POSTS.filter((p) => p.featured).slice(0, 2);
  const recent   = BLOG_POSTS.filter((p) => !p.featured).slice(0, 3);

  return (
    <section className="section-pad bg-warm-cream">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-14">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-sans text-xs font-medium tracking-[0.25em] text-sunrise-500 uppercase mb-3"
            >
              From the blog
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl font-bold text-warm-dark"
            >
              Stories worth<br />
              <span className="text-sunrise-500 italic">slowing down for</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 font-sans text-sm font-medium text-warm-dark border border-warm-dark/20 px-5 py-2.5 rounded-full hover:border-sunrise-400 hover:text-sunrise-600 transition-all duration-300"
            >
              All Articles
              <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </motion.div>
        </div>

        {/* Featured — large */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {featured.map((post, i) => (
            <BlogCard key={post.slug} post={post} index={i} />
          ))}
        </div>

        {/* Recent — masonry */}
        <div className="masonry-grid">
          {recent.map((post, i) => (
            <BlogCard key={post.slug} post={post} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
