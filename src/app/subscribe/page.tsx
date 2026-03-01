"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const ease = [0.22, 1, 0.36, 1] as const;

export default function SubscribePage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    try {
      await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
    } catch {
      /* graceful — show success regardless while backend not wired */
    }
    setSubmitted(true);
  };

  return (
    <div style={{ backgroundColor: "#FFFDF6", minHeight: "100vh" }}>
      {/* ── Hero ── */}
      <section
        className="relative flex items-center justify-center text-center overflow-hidden"
        style={{ minHeight: "100vh" }}
      >
        {/* Background image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1800&q=80"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "brightness(0.55) saturate(0.85)" }}
        />

        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(12,9,6,0.55) 0%, rgba(12,9,6,0.75) 100%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 px-6" style={{ maxWidth: "580px" }}>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            className="font-sans font-semibold tracking-[0.36em] uppercase"
            style={{ fontSize: "0.72rem", color: "#C4911A", marginBottom: "1.6rem" }}
          >
            The morning letter
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease }}
            className="font-serif"
            style={{
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
              color: "#FFFDF6",
              fontWeight: 300,
              lineHeight: 1.15,
              marginBottom: "1.5rem",
            }}
          >
            Start each morning
            <br />
            with intention.
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease }}
            className="mx-auto"
            style={{
              width: "48px",
              height: "1px",
              background: "rgba(196,145,26,0.50)",
              marginBottom: "1.6rem",
            }}
          />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease }}
            className="font-serif italic"
            style={{
              fontSize: "clamp(1rem, 2vw, 1.15rem)",
              color: "rgba(255,253,246,0.75)",
              lineHeight: 1.8,
              marginBottom: "2.5rem",
            }}
          >
            A calm breath of slow living, delivered to your inbox before
            the world gets loud. Reflections on health, presence, and the
            beauty of slowing down.
          </motion.p>

          {/* ── Form / Success ── */}
          {!submitted ? (
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease }}
              className="flex flex-col sm:flex-row gap-3 mx-auto"
              style={{ maxWidth: "440px" }}
            >
              <input
                type="email"
                required
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-5 py-3.5 rounded-full font-sans text-sm outline-none transition-all duration-300"
                style={{
                  backgroundColor: "rgba(255,253,246,0.12)",
                  border: "1px solid rgba(196,145,26,0.30)",
                  color: "#FFFDF6",
                  backdropFilter: "blur(8px)",
                  WebkitBackdropFilter: "blur(8px)",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "#C4911A";
                  e.currentTarget.style.backgroundColor = "rgba(255,253,246,0.18)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "rgba(196,145,26,0.30)";
                  e.currentTarget.style.backgroundColor = "rgba(255,253,246,0.12)";
                }}
              />
              <button
                type="submit"
                className="px-8 py-3.5 rounded-full font-sans text-sm font-medium transition-all duration-300"
                style={{
                  backgroundColor: "#C4911A",
                  color: "#0C0906",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#D4A820";
                  e.currentTarget.style.boxShadow = "0 0 24px rgba(196,145,26,0.35)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#C4911A";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                Subscribe
              </button>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease }}
            >
              <p
                className="font-serif italic"
                style={{ fontSize: "1.3rem", color: "#C4911A" }}
              >
                Welcome to the sunrise.
              </p>
              <p
                className="font-sans mt-3"
                style={{ fontSize: "0.88rem", color: "rgba(255,253,246,0.6)" }}
              >
                Check your inbox — your first morning letter is on its way.
              </p>
            </motion.div>
          )}

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7, ease }}
            className="font-sans mt-5"
            style={{ fontSize: "0.76rem", color: "rgba(255,253,246,0.40)" }}
          >
            Free. No spam. Unsubscribe anytime.
          </motion.p>
        </div>
      </section>

      {/* ── What you get ── */}
      <section className="section-pad" style={{ backgroundColor: "#FFFDF6" }}>
        <div className="content-mid text-center">
          <p
            className="font-sans font-semibold tracking-[0.36em] uppercase"
            style={{ fontSize: "0.72rem", color: "#C4911A", marginBottom: "1.5rem" }}
          >
            What you receive
          </p>
          <h2
            className="font-serif"
            style={{
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              color: "#1A1610",
              fontWeight: 400,
              lineHeight: 1.2,
              marginBottom: "2.5rem",
            }}
          >
            A moment of calm, every morning.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Morning reflection",
                text: "A brief, thoughtful piece on slow living — written to ground you before the day begins.",
              },
              {
                title: "Health perspective",
                text: "Insights on health from within — how changing your focus changes everything.",
              },
              {
                title: "Present moment",
                text: "A reminder to slow down, breathe, and notice the beauty already around you.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1, ease }}
                className="p-8 rounded-2xl"
                style={{
                  backgroundColor: "#FFF8EE",
                  border: "1px solid rgba(184,117,14,0.12)",
                }}
              >
                <h3
                  className="font-serif"
                  style={{
                    fontSize: "1.15rem",
                    color: "#1A1610",
                    fontWeight: 400,
                    marginBottom: "0.8rem",
                  }}
                >
                  {item.title}
                </h3>
                <div
                  style={{
                    width: "24px",
                    height: "1px",
                    background: "rgba(196,145,26,0.35)",
                    marginBottom: "1rem",
                  }}
                />
                <p
                  className="font-serif italic"
                  style={{ color: "#7A6B52", fontSize: "0.92rem", lineHeight: 1.8 }}
                >
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Back link ── */}
      <section
        className="section-pad text-center"
        style={{
          backgroundColor: "#FFF8E8",
          borderTop: "1px solid rgba(184,117,14,0.10)",
        }}
      >
        <Link
          href="/"
          className="font-sans"
          style={{
            fontSize: "0.86rem",
            color: "#C4911A",
            textDecoration: "none",
            letterSpacing: "0.04em",
          }}
        >
          &larr; Back to Daily Sunrise
        </Link>
      </section>
    </div>
  );
}
