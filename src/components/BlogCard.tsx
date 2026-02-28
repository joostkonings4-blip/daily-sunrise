"use client";

import { motion } from "framer-motion";
import Image from "next/image";
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
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="masonry-item group"
    >
      <Link href={`/blog/${post.slug}`} className="block">
        <div
          className={`relative overflow-hidden rounded-2xl bg-warm-cream border border-warm-sand hover:border-sunrise-300 transition-all duration-500 hover:shadow-xl hover:shadow-sunrise-100 ${
            large ? "md:flex gap-0" : ""
          }`}
        >
          {/* Image */}
          <div
            className={`relative overflow-hidden ${
              large ? "md:w-1/2 h-56 md:h-auto" : "h-52"
            }`}
          >
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Category chip */}
            <div className="absolute top-3 left-3">
              <span className="px-3 py-1 rounded-full bg-warm-white/90 backdrop-blur-sm text-xs font-medium text-warm-dark font-sans">
                {post.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className={`p-6 ${large ? "md:w-1/2 flex flex-col justify-center" : ""}`}>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-sans text-xs text-warm-muted">{post.date}</span>
              <span className="w-1 h-1 rounded-full bg-sunrise-300" />
              <span className="font-sans text-xs text-warm-muted">{post.readTime} read</span>
            </div>
            <h3
              className={`font-serif font-semibold text-warm-dark mb-2 group-hover:text-sunrise-600 transition-colors duration-300 leading-snug ${
                large ? "text-2xl md:text-3xl" : "text-xl"
              }`}
            >
              {post.title}
            </h3>
            <p className="font-sans text-sm text-warm-muted leading-relaxed line-clamp-3">
              {post.excerpt}
            </p>

            <div className="mt-4 flex items-center gap-2 text-sunrise-500 group-hover:gap-3 transition-all duration-300">
              <span className="font-sans text-sm font-medium">Read more</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
