"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { BlogPost } from "@/lib/blog-data";

export default function BlogCard({
  post,
  index = 0,
  large = false,
}: {
  post: BlogPost;
  index?: number;
  large?: boolean;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ duration: 0.75, delay: index * 0.09, ease: [0.22, 1, 0.36, 1] }}
      className="masonry-item group"
    >
      <Link href={`/blog/${post.slug}`} className="block h-full">
        <motion.div
          whileHover={{ y: -3 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className={`relative overflow-hidden rounded-2xl h-full flex flex-col transition-shadow duration-500 group-hover:shadow-[0_16px_48px_rgba(196,145,26,0.12)]`}
          style={{
            backgroundColor: "#FFFDF6",
            border: "1px solid rgba(196,145,26,0.15)",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLDivElement).style.border = "1px solid rgba(196,145,26,0.38)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLDivElement).style.border = "1px solid rgba(196,145,26,0.15)";
          }}
        >
          {/* ── Image ──────────────────────────────────────────────────── */}
          <div
            className={`relative overflow-hidden flex-shrink-0 ${
              large ? "h-64 md:h-72" : "h-52"
            }`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${post.image}&fit=crop`}
              alt={post.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Dark vignette overlay */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(26,22,16,0.08) 0%, rgba(26,22,16,0.42) 100%)",
              }}
            />

            {/* Category chip */}
            <div className="absolute top-3 left-3">
              <span
                className="px-3 py-1 rounded-full font-sans text-xs font-semibold tracking-wide"
                style={{
                  backgroundColor: "rgba(26,22,16,0.72)",
                  color: "#C4911A",
                  backdropFilter: "blur(6px)",
                  WebkitBackdropFilter: "blur(6px)",
                }}
              >
                {post.category}
              </span>
            </div>
          </div>

          {/* ── Gold hairline divider ──────────────────────────────────── */}
          <div
            className="w-full flex-shrink-0"
            style={{ height: "1px", background: "rgba(196,145,26,0.12)" }}
          />

          {/* ── Content ────────────────────────────────────────────────── */}
          <div className={`flex flex-col flex-1 ${large ? "p-8" : "p-6"}`}>
            {/* Date + read time */}
            <div className="flex items-center gap-2.5 mb-4">
              <span
                className="font-sans text-xs"
                style={{ color: "rgba(122,107,82,0.60)", letterSpacing: "0.03em" }}
              >
                {post.date}
              </span>
              <span
                className="inline-block w-[3px] h-[3px] rounded-full flex-shrink-0"
                style={{ backgroundColor: "rgba(196,145,26,0.40)" }}
              />
              <span
                className="font-sans text-xs"
                style={{ color: "rgba(122,107,82,0.60)", letterSpacing: "0.03em" }}
              >
                {post.readTime} read
              </span>
            </div>

            {/* Title */}
            <h3
              className="font-serif leading-snug mb-3 transition-colors duration-300"
              style={{
                fontSize: large ? "clamp(1.35rem, 2.5vw, 1.7rem)" : "1.18rem",
                color: "#1A1610",
                fontWeight: 400,
              }}
            >
              {post.title}
            </h3>

            {/* Gold hairline under title */}
            <div
              className="mb-4 flex-shrink-0"
              style={{ width: "32px", height: "1px", background: "rgba(196,145,26,0.35)" }}
            />

            {/* Excerpt */}
            <p
              className="font-serif italic leading-relaxed line-clamp-3 flex-1"
              style={{
                color: "#7A6B52",
                fontSize: large ? "0.97rem" : "0.92rem",
                lineHeight: 1.78,
              }}
            >
              {post.excerpt}
            </p>

            {/* Read more */}
            <div
              className="mt-5 flex items-center gap-1.5 transition-all duration-300 group-hover:gap-2.5"
              style={{ color: "#B8750E" }}
            >
              <span className="font-sans text-sm font-medium">Read more</span>
              <span className="font-sans text-base leading-none" aria-hidden>
                →
              </span>
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.article>
  );
}
