"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Script from "next/script";

/*
 * SocialFeed — Live posts from Daily Sunrise TikTok + Instagram
 *
 * TikTok: uses the official TikTok embed.js creator widget (shows latest videos).
 * Instagram: uses official Instagram embed.js for individual posts.
 *
 * ─── HOW TO ADD YOUR INSTAGRAM POSTS ──────────────────────────────────────
 * 1. Go to any post on instagram.com/@dailysunrise
 * 2. Click the three dots → "Embed"
 * 3. Copy just the shortcode from the URL: instagram.com/p/SHORTCODE/
 * 4. Add it to the INSTAGRAM_POSTS array below.
 * ───────────────────────────────────────────────────────────────────────────
 */

const TIKTOK_HANDLE    = "dailysunrise";  /* ← update if handle is different */
const INSTAGRAM_HANDLE = "dailysunrise";  /* ← update if handle is different */

/* Add your real Instagram post shortcodes here */
const INSTAGRAM_POSTS: string[] = [
  /* e.g. "C1abc123XYZ", "C2def456ABC" */
];

/* ── Instagram embed loader ── */
declare global {
  interface Window {
    instgrm?: { Embeds?: { process?: () => void } };
  }
}

function InstagramPost({ shortcode }: { shortcode: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.instgrm?.Embeds?.process) {
      window.instgrm.Embeds.process();
    }
  }, [shortcode]);

  return (
    <div ref={ref} className="w-full">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={`https://www.instagram.com/p/${shortcode}/`}
        data-instgrm-version="14"
        style={{
          background: "#FFF",
          border: "0",
          borderRadius: "3px",
          boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
          margin: "1px",
          maxWidth: "540px",
          minWidth: "326px",
          padding: "0",
          width: "calc(100% - 2px)",
        }}
      >
        <div style={{ padding: "16px" }}>
          <a
            href={`https://www.instagram.com/p/${shortcode}/`}
            style={{ background: "#FFFFFF", lineHeight: 0, padding: "0 0", textAlign: "center", textDecoration: "none", width: "100%" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            View post
          </a>
        </div>
      </blockquote>
    </div>
  );
}

/* ── Platform badge ── */
function Badge({ platform, icon }: { platform: string; icon: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border"
      style={{ borderColor: "rgba(201,138,24,0.25)", backgroundColor: "rgba(255,248,232,0.6)" }}>
      {icon}
      <span className="font-sans text-xs font-medium tracking-wide" style={{ color: "#7A6B52" }}>
        @{platform}
      </span>
    </div>
  );
}

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" style={{ color: "#1A1610" }}>
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.87a8.26 8.26 0 004.83 1.54V7a4.85 4.85 0 01-1.06-.31z" stroke="currentColor" strokeWidth="1.3" fill="none"/>
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" style={{ color: "#1A1610" }}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
  </svg>
);

export default function SocialFeed() {
  const hasPosts = INSTAGRAM_POSTS.length > 0;

  return (
    <section
      className="section-pad overflow-hidden"
      style={{ backgroundColor: "#FFFDF6" }}
    >
      {/* Section header */}
      <div className="content-mid text-center mb-16">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-sans text-xs font-medium tracking-[0.32em] uppercase mb-4"
          style={{ color: "#C98A18" }}
        >
          Follow the journey
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-serif font-bold leading-tight"
          style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", color: "#1A1610" }}
        >
          Lived in real time
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="hr-gold mt-6 max-w-[120px] mx-auto"
          style={{ transformOrigin: "center" }}
        />
      </div>

      <div className="content-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* ── TikTok live feed ─────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-5"
          >
            <div className="flex items-center justify-between">
              <Badge platform={TIKTOK_HANDLE} icon={<TikTokIcon />} />
              <a
                href={`https://tiktok.com/@${TIKTOK_HANDLE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-xs tracking-wide transition-colors duration-200"
                style={{ color: "#A89070" }}
              >
                Open TikTok →
              </a>
            </div>

            {/* TikTok creator widget — shows latest videos automatically */}
            <div
              className="rounded-2xl overflow-hidden border"
              style={{ borderColor: "rgba(201,138,24,0.15)" }}
            >
              <blockquote
                className="tiktok-embed"
                cite={`https://www.tiktok.com/@${TIKTOK_HANDLE}`}
                data-unique-id={TIKTOK_HANDLE}
                data-embed-type="creator"
                style={{ maxWidth: "780px", minWidth: "288px" }}
              >
                <section>
                  {/* Fallback while TikTok embed loads */}
                  <a
                    href={`https://www.tiktok.com/@${TIKTOK_HANDLE}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 p-8 rounded-2xl"
                    style={{ backgroundColor: "#FFF8E8" }}
                  >
                    <TikTokIcon />
                    <span className="font-sans text-sm font-medium" style={{ color: "#3D3424" }}>
                      @{TIKTOK_HANDLE} on TikTok
                    </span>
                  </a>
                </section>
              </blockquote>
            </div>

            <Script
              src="https://www.tiktok.com/embed.js"
              strategy="lazyOnload"
            />
          </motion.div>

          {/* ── Instagram feed ───────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-col gap-5"
          >
            <div className="flex items-center justify-between">
              <Badge platform={INSTAGRAM_HANDLE} icon={<InstagramIcon />} />
              <a
                href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-xs tracking-wide transition-colors duration-200"
                style={{ color: "#A89070" }}
              >
                Open Instagram →
              </a>
            </div>

            {hasPosts ? (
              /* Individual post embeds — add shortcodes to INSTAGRAM_POSTS above */
              <div className="grid grid-cols-1 gap-4">
                {INSTAGRAM_POSTS.map((code) => (
                  <InstagramPost key={code} shortcode={code} />
                ))}
              </div>
            ) : (
              /* Beautiful CTA card until post shortcodes are added */
              <motion.a
                href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
                className="block rounded-2xl overflow-hidden border"
                style={{ borderColor: "rgba(201,138,24,0.18)" }}
              >
                {/* Gradient background */}
                <div
                  className="relative flex flex-col items-center justify-center gap-6 p-12 text-center"
                  style={{
                    background: "linear-gradient(135deg, #FFF8E8 0%, #FEF2CC 50%, #FDEAB8 100%)",
                    minHeight: "280px",
                  }}
                >
                  {/* Decorative tree icon */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/treeoflife-icon.png"
                    alt=""
                    aria-hidden
                    className="w-24 h-24 object-contain opacity-70"
                    style={{ mixBlendMode: "multiply" }}
                  />
                  <div>
                    <p className="font-serif text-xl font-semibold mb-2" style={{ color: "#1A1610" }}>
                      @{INSTAGRAM_HANDLE}
                    </p>
                    <p className="font-sans text-sm leading-relaxed max-w-xs mx-auto" style={{ color: "#7A6B52" }}>
                      Follow Daily Sunrise on Instagram for daily sunrise moments, slow living tips and behind-the-scenes.
                    </p>
                  </div>
                  <div
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium"
                    style={{ background: "#1A1610", color: "#FFFDF6" }}
                  >
                    <InstagramIcon />
                    Follow on Instagram
                  </div>
                </div>
              </motion.a>
            )}

            {/* Load Instagram embed.js if posts are present */}
            {hasPosts && (
              <Script
                src="//www.instagram.com/embed.js"
                strategy="lazyOnload"
              />
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
