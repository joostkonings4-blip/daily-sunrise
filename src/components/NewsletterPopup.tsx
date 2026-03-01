"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const STORAGE_KEY = "ds_popup_seen";

export default function NewsletterPopup() {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Never show again if already seen this session
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    const handleScroll = () => {
      const scrolled = window.scrollY;
      const total =
        document.documentElement.scrollHeight - window.innerHeight;
      const depth = total > 0 ? scrolled / total : 0;

      if (depth >= 0.5) {
        setVisible(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function dismiss() {
    sessionStorage.setItem(STORAGE_KEY, "1");
    setVisible(false);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setLoading(true);
    try {
      await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
    } catch {
      // Fail silently — still show success state
    }
    setLoading(false);
    setSubmitted(true);
    sessionStorage.setItem(STORAGE_KEY, "1");
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="newsletter-popup"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: "fixed",
            bottom: "1.5rem",
            right: "1.5rem",
            zIndex: 50,
            maxWidth: "400px",
            width: "calc(100vw - 3rem)",
            backgroundColor: "#FFFDF6",
            border: "1px solid rgba(196,145,26,0.20)",
            borderRadius: "16px",
            boxShadow: "0 20px 60px rgba(26,22,16,0.15)",
            padding: "28px",
          }}
        >
          {/* Close button */}
          <CloseButton onClick={dismiss} />

          {submitted ? (
            <SuccessState />
          ) : (
            <FormState
              email={email}
              setEmail={setEmail}
              loading={loading}
              onSubmit={handleSubmit}
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ------------------------------------------------------------------ */
/* Sub-components                                                        */
/* ------------------------------------------------------------------ */

function CloseButton({ onClick }: { onClick: () => void }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label="Close"
      style={{
        position: "absolute",
        top: "14px",
        right: "16px",
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: "4px",
        lineHeight: 1,
        color: hovered ? "#1A1610" : "#7A6B52",
        transition: "color 0.2s ease",
        fontSize: "1.1rem",
      }}
    >
      &#x2715;
    </button>
  );
}

function FormState({
  email,
  setEmail,
  loading,
  onSubmit,
}: {
  email: string;
  setEmail: (v: string) => void;
  loading: boolean;
  onSubmit: (e: React.FormEvent) => void;
}) {
  const [inputFocused, setInputFocused] = useState(false);
  const [btnHovered, setBtnHovered] = useState(false);

  return (
    <>
      {/* Eyebrow */}
      <p
        style={{
          fontFamily: "var(--font-sans, sans-serif)",
          fontSize: "0.72rem",
          letterSpacing: "0.36em",
          textTransform: "uppercase",
          color: "#C4911A",
          margin: "0 0 12px 0",
        }}
      >
        The morning letter
      </p>

      {/* Heading */}
      <h3
        style={{
          fontFamily: "var(--font-serif, Georgia, serif)",
          fontSize: "clamp(1.1rem, 2vw, 1.35rem)",
          color: "#1A1610",
          fontWeight: 400,
          margin: "0 0 10px 0",
          lineHeight: 1.35,
        }}
      >
        Start each morning with intention.
      </h3>

      {/* Body */}
      <p
        style={{
          fontSize: "0.88rem",
          color: "#7A6B52",
          margin: "0 0 20px 0",
          lineHeight: 1.6,
        }}
      >
        Join 4,800+ people who chose a different kind of morning.
      </p>

      {/* Form */}
      <form onSubmit={onSubmit} style={{ display: "flex", gap: "8px" }}>
        <input
          type="email"
          required
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onFocus={() => setInputFocused(true)}
          onBlur={() => setInputFocused(false)}
          style={{
            flex: 1,
            padding: "10px 14px",
            backgroundColor: "#FFF8EE",
            border: inputFocused
              ? "1px solid #C4911A"
              : "1px solid rgba(196,145,26,0.35)",
            borderRadius: "8px",
            fontSize: "0.88rem",
            color: "#1A1610",
            outline: "none",
            transition: "border-color 0.2s ease",
            fontFamily: "inherit",
          }}
        />
        <button
          type="submit"
          disabled={loading}
          onMouseEnter={() => setBtnHovered(true)}
          onMouseLeave={() => setBtnHovered(false)}
          style={{
            padding: "10px 18px",
            backgroundColor: btnHovered ? "#2C2416" : "#1A1610",
            color: "#FFFDF6",
            border: "none",
            borderRadius: "8px",
            fontSize: "0.88rem",
            cursor: loading ? "wait" : "pointer",
            fontFamily: "inherit",
            letterSpacing: "0.04em",
            transition: "background-color 0.2s ease",
            whiteSpace: "nowrap",
          }}
        >
          {loading ? "..." : "Begin"}
        </button>
      </form>

      {/* Privacy note */}
      <p
        style={{
          fontSize: "0.74rem",
          color: "rgba(122,107,82,0.65)",
          margin: "12px 0 0 0",
        }}
      >
        Free. No spam. Unsubscribe anytime.
      </p>
    </>
  );
}

function SuccessState() {
  return (
    <p
      style={{
        fontFamily: "var(--font-serif, Georgia, serif)",
        fontStyle: "italic",
        fontSize: "1.15rem",
        color: "#C4911A",
        margin: "8px 0",
        lineHeight: 1.5,
      }}
    >
      Welcome to the sunrise.
    </p>
  );
}
