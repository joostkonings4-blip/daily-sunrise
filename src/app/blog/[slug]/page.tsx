"use client";

import { useRef } from "react";
import { useParams } from "next/navigation";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { getPost, BLOG_POSTS } from "@/lib/blog-data";

// ─── Helpers ───────────────────────────────────────────────────────────────────
function useFade(margin = "-60px") {
  const ref = useRef(null);
  const visible = useInView(ref, { once: true, margin } as Parameters<typeof useInView>[1]);
  return { ref, visible };
}

// ─── 404 State ─────────────────────────────────────────────────────────────────
function NotFound() {
  return (
    <section
      className="min-h-screen flex items-center justify-center"
      style={{ backgroundColor: "#FFFDF6" }}
    >
      <div className="text-center px-6">
        <p
          className="font-sans text-xs font-semibold tracking-[0.36em] uppercase mb-6"
          style={{ color: "#C4911A" }}
        >
          404
        </p>
        <h1
          className="font-serif font-light mb-6"
          style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#1A1610", lineHeight: 1.2 }}
        >
          Post not found.
        </h1>
        <div className="w-8 h-px mx-auto mb-8" style={{ background: "rgba(196,145,26,0.38)" }} />
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 font-sans text-sm font-medium transition-opacity hover:opacity-70"
          style={{ color: "#B8750E" }}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
            <path
              d="M13 8H3M7 4L3 8l4 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Back to Blog
        </Link>
      </div>
    </section>
  );
}

// ─── Hero Header ───────────────────────────────────────────────────────────────
function PostHero({
  image,
  category,
  title,
  date,
  readTime,
}: {
  image: string;
  category: string;
  title: string;
  date: string;
  readTime: string;
}) {
  return (
    <section className="relative overflow-hidden" style={{ height: "60vh", minHeight: "420px" }}>
      {/* Background image */}
      <Image src={image} alt={title} fill className="object-cover" priority />

      {/* Dark vignette overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(12,9,6,0.44) 0%, rgba(8,6,3,0.28) 40%, rgba(12,9,6,0.80) 100%)",
        }}
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-between px-8 md:px-16 py-8 md:py-12 max-w-5xl mx-auto w-full left-1/2 -translate-x-1/2">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-sans text-sm font-medium transition-opacity hover:opacity-75"
            style={{ color: "rgba(255,253,246,0.82)" }}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
              <path
                d="M13 8H3M7 4L3 8l4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back to Blog
          </Link>
        </motion.div>

        {/* Title block */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18, duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
        >
          <p
            className="font-sans text-xs font-semibold tracking-[0.32em] uppercase mb-4"
            style={{ color: "#C4911A" }}
          >
            {category}
          </p>
          <h1
            className="font-serif font-light mb-5"
            style={{
              fontSize: "clamp(1.8rem, 4.2vw, 3.6rem)",
              color: "#FFFDF6",
              lineHeight: 1.15,
              maxWidth: "680px",
              textShadow: "0 1px 18px rgba(0,0,0,0.28)",
            }}
          >
            {title}
          </h1>
          <div
            className="flex items-center gap-3 font-sans text-sm"
            style={{ color: "rgba(255,253,246,0.52)" }}
          >
            <span>{date}</span>
            <span
              className="inline-block w-1 h-1 rounded-full"
              style={{ background: "rgba(196,145,26,0.55)" }}
            />
            <span>{readTime} read</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Article Body ──────────────────────────────────────────────────────────────
function ArticleBody({ excerpt, body }: { excerpt: string; body?: string }) {
  const { ref, visible } = useFade("-40px");

  return (
    <section
      ref={ref}
      className="relative py-20 md:py-28"
      style={{ backgroundColor: "#FFFDF6" }}
    >
      <div className="px-6 mx-auto" style={{ maxWidth: "768px" }}>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Lead quote */}
          <p
            className="font-serif italic leading-[1.72] mb-8 pl-6"
            style={{
              fontSize: "clamp(1.15rem, 2vw, 1.35rem)",
              color: "#1A1610",
              borderLeft: "3px solid #C4911A",
            }}
          >
            {excerpt}
          </p>

          {/* Gold hairline divider */}
          <div
            className="mb-10"
            style={{ height: "1px", background: "rgba(196,145,26,0.22)" }}
          />

          {/* Body paragraphs */}
          {body ? (
            <div className="space-y-6">
              {body.split("\n\n").map((para, i) => (
                <p
                  key={i}
                  className="font-sans leading-[1.92]"
                  style={{ color: "#7A6B52", fontSize: "1rem" }}
                >
                  {para.replace(/\*([^*]+)\*/g, "$1")}
                </p>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              <p
                className="font-sans leading-[1.92]"
                style={{ color: "#7A6B52", fontSize: "1rem" }}
              >
                This essay is coming soon. In the meantime, take a slow breath and look out the
                window.
              </p>
              <p
                className="font-sans leading-[1.92]"
                style={{ color: "#7A6B52", fontSize: "1rem" }}
              >
                Notice the light. Notice how you feel. That&apos;s the practice.
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Related Posts ─────────────────────────────────────────────────────────────
function RelatedPosts({
  posts,
}: {
  posts: ReturnType<typeof BLOG_POSTS.filter>;
}) {
  const { ref, visible } = useFade();

  if (posts.length === 0) return null;

  return (
    <section
      ref={ref}
      className="relative py-24 md:py-32"
      style={{ backgroundColor: "#1A1610" }}
    >
      {/* Ambient glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-56 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 50% 0%, rgba(201,138,24,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="px-6 mx-auto relative z-10" style={{ maxWidth: "1100px" }}>
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 24 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p
            className="font-sans text-xs font-semibold tracking-[0.36em] uppercase mb-5"
            style={{ color: "#C4911A" }}
          >
            Continue reading
          </p>
          <h2
            className="font-serif font-light"
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              color: "#FFFDF6",
              lineHeight: 1.2,
            }}
          >
            Keep reading
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {posts.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 32 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.14, duration: 0.85 }}
            >
              <Link href={`/blog/${p.slug}`} className="group block h-full">
                <div
                  className="flex gap-5 p-5 rounded-2xl h-full transition-all duration-300"
                  style={{
                    border: "1px solid rgba(196,145,26,0.14)",
                    backgroundColor: "rgba(255,253,246,0.03)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor =
                      "rgba(196,145,26,0.35)";
                    (e.currentTarget as HTMLDivElement).style.backgroundColor =
                      "rgba(255,253,246,0.05)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor =
                      "rgba(196,145,26,0.14)";
                    (e.currentTarget as HTMLDivElement).style.backgroundColor =
                      "rgba(255,253,246,0.03)";
                  }}
                >
                  {/* Thumbnail */}
                  <div
                    className="relative flex-shrink-0 rounded-xl overflow-hidden"
                    style={{ width: "88px", height: "88px" }}
                  >
                    <Image src={p.image} alt={p.title} fill className="object-cover" />
                  </div>

                  {/* Text */}
                  <div className="flex flex-col justify-center">
                    <p
                      className="font-sans text-xs font-semibold tracking-[0.22em] uppercase mb-2"
                      style={{ color: "#C4911A" }}
                    >
                      {p.category}
                    </p>
                    <h3
                      className="font-serif mb-2 transition-colors duration-200 group-hover:opacity-80"
                      style={{
                        fontSize: "1.05rem",
                        color: "#FFFDF6",
                        lineHeight: 1.35,
                        fontWeight: 400,
                      }}
                    >
                      {p.title}
                    </h3>
                    <p
                      className="font-sans text-xs"
                      style={{ color: "rgba(255,253,246,0.32)" }}
                    >
                      {p.readTime} read
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Back to all posts */}
        <motion.div
          className="mt-14 text-center"
          initial={{ opacity: 0 }}
          animate={visible ? { opacity: 1 } : {}}
          transition={{ delay: 0.45, duration: 0.8 }}
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-sans text-sm font-medium transition-opacity hover:opacity-70"
            style={{ color: "rgba(255,253,246,0.45)" }}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
              <path
                d="M13 8H3M7 4L3 8l4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            All posts
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────
export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = getPost(slug);

  if (!post) return <NotFound />;

  const related = BLOG_POSTS.filter(
    (p) => p.slug !== slug && p.category === post.category
  ).slice(0, 2);

  return (
    <>
      <PostHero
        image={post.image}
        category={post.category}
        title={post.title}
        date={post.date}
        readTime={post.readTime}
      />
      <ArticleBody excerpt={post.excerpt} body={post.body} />
      <RelatedPosts posts={related} />
    </>
  );
}
