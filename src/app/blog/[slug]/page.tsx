"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { getPost, BLOG_POSTS } from "@/lib/blog-data";

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = getPost(slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24">
        <div className="text-center">
          <p className="font-serif text-3xl text-warm-dark mb-4">Post not found 🌅</p>
          <Link href="/blog" className="font-sans text-sunrise-500 hover:text-sunrise-600">
            ← Back to blog
          </Link>
        </div>
      </div>
    );
  }

  const related = BLOG_POSTS.filter(
    (p) => p.slug !== slug && p.category === post.category
  ).slice(0, 2);

  return (
    <>
      {/* Header */}
      <section
        className="pt-32 pb-12"
        style={{ background: "linear-gradient(180deg, #FFF8E7 0%, #FDFCF8 100%)" }}
      >
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 font-sans text-sm text-warm-muted hover:text-warm-dark mb-8 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
                <path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Back to Blog
            </Link>

            <p className="font-sans text-xs tracking-[0.2em] text-sunrise-500 uppercase mb-4">
              {post.category}
            </p>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-warm-dark leading-tight mb-6">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-warm-muted mb-8">
              <span className="font-sans text-sm">{post.date}</span>
              <span className="w-1 h-1 rounded-full bg-sunrise-300" />
              <span className="font-sans text-sm">{post.readTime} read</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hero image */}
      <div className="max-w-5xl mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-80 md:h-[500px] rounded-3xl overflow-hidden"
        >
          <Image src={post.image} alt={post.title} fill className="object-cover" />
        </motion.div>
      </div>

      {/* Body */}
      <article className="max-w-3xl mx-auto px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="prose-styles"
        >
          <p className="font-display text-2xl text-warm-dark italic leading-relaxed mb-8 border-l-4 border-sunrise-400 pl-5">
            {post.excerpt}
          </p>
          {post.body ? (
            <div className="space-y-5">
              {post.body.split("\n\n").map((para, i) => (
                <p key={i} className="font-sans text-warm-muted text-base leading-8">
                  {para.replace(/\*([^*]+)\*/g, "$1")}
                </p>
              ))}
            </div>
          ) : (
            <div className="space-y-5">
              <p className="font-sans text-warm-muted text-base leading-8">
                This essay is coming soon. In the meantime, take a slow breath and look out the window.
              </p>
              <p className="font-sans text-warm-muted text-base leading-8">
                Notice the light. Notice how you feel. That's the practice.
              </p>
            </div>
          )}
        </motion.div>
      </article>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="section-pad bg-warm-cream border-t border-warm-sand">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="font-serif text-2xl font-bold text-warm-dark mb-8">
              Keep reading
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {related.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="group block">
                  <div className="flex gap-4 p-4 rounded-2xl border border-warm-sand hover:border-sunrise-300 transition-all duration-300 hover:shadow-md">
                    <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                      <Image src={p.image} alt={p.title} fill className="object-cover" />
                    </div>
                    <div>
                      <p className="font-sans text-xs text-sunrise-500 mb-1">{p.category}</p>
                      <h3 className="font-serif text-base font-semibold text-warm-dark group-hover:text-sunrise-600 transition-colors leading-snug">
                        {p.title}
                      </h3>
                      <p className="font-sans text-xs text-warm-muted mt-1">{p.readTime} read</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
