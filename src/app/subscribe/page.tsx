"use client";

import { useState } from "react";
import Link from "next/link";

// ─── Types ────────────────────────────────────────────────────────────────────
type FormStatus = "idle" | "loading" | "success" | "error";

// ─── Testimonial data ────────────────────────────────────────────────────────
const TESTIMONIALS = [
  {
    quote:
      "The first email I actually look forward to. It arrives before the chaos starts, and it resets me.",
    name: "Sarah M.",
    detail: "Designer, Amsterdam",
  },
  {
    quote:
      "Three lines that somehow make the whole day feel different. I cannot explain it — but it works.",
    name: "Thomas K.",
    detail: "Writer, London",
  },
  {
    quote:
      "It is the only newsletter I have never unsubscribed from. And I subscribe to a lot.",
    name: "Lena R.",
    detail: "Founder, Berlin",
  },
];

// ─── EmailPreviewCard ─────────────────────────────────────────────────────────
function EmailPreviewCard() {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "480px",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 4px 40px rgba(26,22,16,0.12), 0 1px 8px rgba(26,22,16,0.06)",
        border: "1px solid rgba(184,117,14,0.20)",
      }}
    >
      {/* Email client chrome bar */}
      <div
        style={{
          backgroundColor: "#1A1610",
          padding: "14px 20px",
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <div style={{ display: "flex", gap: "6px" }}>
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                backgroundColor: "rgba(255,255,255,0.15)",
              }}
            />
          ))}
        </div>
        <div style={{ flex: 1, textAlign: "center" }}>
          <span
            className="font-sans"
            style={{
              fontSize: "0.75rem",
              color: "rgba(255,253,246,0.45)",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
            }}
          >
            The Morning Letter
          </span>
        </div>
        <div
          style={{
            width: "18px",
            height: "18px",
            borderRadius: "50%",
            background: "radial-gradient(circle, #E8A82A 0%, #B8750E 100%)",
            boxShadow: "0 0 8px rgba(201,138,24,0.40)",
          }}
        />
      </div>

      {/* Email body */}
      <div style={{ backgroundColor: "#FFFDF6", padding: "28px 28px 32px" }}>
        <p
          className="font-sans"
          style={{
            fontSize: "0.72rem",
            color: "rgba(122,107,82,0.55)",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            marginBottom: "10px",
          }}
        >
          Today&apos;s letter &middot; Monday
        </p>

        <h3
          className="font-serif"
          style={{
            fontSize: "1.35rem",
            color: "#1A1610",
            fontWeight: 400,
            lineHeight: 1.3,
            marginBottom: "14px",
          }}
        >
          The morning before the noise.
        </h3>

        <div
          style={{
            width: "32px",
            height: "1px",
            background: "rgba(184,117,14,0.38)",
            marginBottom: "14px",
          }}
        />

        <p
          className="font-sans"
          style={{
            fontSize: "0.90rem",
            color: "#7A6B52",
            lineHeight: "1.85",
            marginBottom: "12px",
          }}
        >
          There is a window — usually between five and seven — where the world has
          not yet made its demands. The light is low. The air is still. And for a brief
          moment, you belong entirely to yourself.
        </p>

        <p
          className="font-sans"
          style={{
            fontSize: "0.90rem",
            color: "#7A6B52",
            lineHeight: "1.85",
            marginBottom: "18px",
          }}
        >
          Today&apos;s question:{" "}
          <em style={{ color: "#3D3424" }}>
            What is one thing you could release this week?
          </em>
        </p>

        <p
          className="font-serif"
          style={{
            fontSize: "0.92rem",
            color: "#3D3424",
            fontStyle: "italic",
            borderTop: "1px solid rgba(184,117,14,0.14)",
            paddingTop: "14px",
          }}
        >
          — Joost
        </p>

        <p
          className="font-sans"
          style={{
            fontSize: "0.72rem",
            color: "rgba(122,107,82,0.40)",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            marginTop: "16px",
          }}
        >
          Daily Sunrise &middot; The Same Life, a different perspective
        </p>
      </div>
    </div>
  );
}

// ─── SignupForm ───────────────────────────────────────────────────────────────
function SignupForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || status === "loading") return;
    setStatus("loading");
    // Replace with your real newsletter service API endpoint
    await new Promise((r) => setTimeout(r, 900));
    setStatus(email.includes("@") ? "success" : "error");
  }

  if (status === "success") {
    return (
      <div
        style={{
          textAlign: "center",
          padding: "3rem 2rem",
          borderRadius: "12px",
          background: "rgba(201,138,24,0.07)",
          border: "1px solid rgba(184,117,14,0.22)",
        }}
      >
        <div
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            background: "radial-gradient(circle, #E8A82A 0%, #B8750E 100%)",
            boxShadow: "0 0 32px rgba(201,138,24,0.35)",
            margin: "0 auto 20px",
          }}
        />
        <h3
          className="font-serif"
          style={{
            fontSize: "clamp(1.3rem, 2.5vw, 1.7rem)",
            color: "#1A1610",
            fontWeight: 400,
            marginBottom: "10px",
            lineHeight: 1.3,
          }}
        >
          Welcome to the morning.
        </h3>
        <p
          className="font-sans"
          style={{ color: "#7A6B52", fontSize: "0.95rem", lineHeight: 1.75 }}
        >
          Your first letter is on its way. Check your inbox — and if it does not
          arrive within a few minutes, check your spam folder.
        </p>
        <p
          className="font-sans"
          style={{
            color: "rgba(122,107,82,0.55)",
            fontSize: "0.80rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            marginTop: "1.4rem",
          }}
        >
          The Same Life — a different perspective
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate id="subscribe">
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <label
          htmlFor="subscribe-email"
          className="font-sans"
          style={{
            fontSize: "0.76rem",
            letterSpacing: "0.26em",
            textTransform: "uppercase",
            color: "#7A6B52",
          }}
        >
          Your email address
        </label>

        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <input
            id="subscribe-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
            className="font-sans"
            style={{
              flex: "1 1 220px",
              padding: "14px 18px",
              fontSize: "0.97rem",
              color: "#1A1610",
              backgroundColor: "#FFFDF6",
              border: "1px solid rgba(184,117,14,0.28)",
              borderRadius: "8px",
              outline: "none",
              transition: "border-color 0.25s",
            }}
            onFocus={(e) => {
              (e.target as HTMLInputElement).style.borderColor = "rgba(184,117,14,0.70)";
            }}
            onBlur={(e) => {
              (e.target as HTMLInputElement).style.borderColor = "rgba(184,117,14,0.28)";
            }}
          />

          <button
            type="submit"
            disabled={status === "loading"}
            className="font-sans"
            style={{
              flex: "0 0 auto",
              padding: "14px 28px",
              fontSize: "0.90rem",
              fontWeight: 500,
              letterSpacing: "0.04em",
              color: "#FFFDF6",
              backgroundColor: status === "loading" ? "rgba(26,22,16,0.55)" : "#1A1610",
              border: "none",
              borderRadius: "8px",
              cursor: status === "loading" ? "wait" : "pointer",
              transition: "background-color 0.25s, opacity 0.25s",
              whiteSpace: "nowrap",
            }}
          >
            {status === "loading" ? "Joining..." : "Join the morning"}
          </button>
        </div>

        {status === "error" && (
          <p className="font-sans" style={{ fontSize: "0.84rem", color: "#B05A2A" }}>
            Please enter a valid email address and try again.
          </p>
        )}
      </div>
    </form>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function SubscribePage() {
  return (
    <div style={{ backgroundColor: "#FFFDF6", minHeight: "100vh" }}>

      {/* ── 1. HERO ── */}
      <section
        className="section-pad"
        style={{ backgroundColor: "#FFF8E8", borderBottom: "1px solid rgba(184,117,14,0.10)" }}
      >
        <div className="content-text text-center">
          <div
            style={{
              width: "52px",
              height: "52px",
              borderRadius: "50%",
              background: "radial-gradient(circle, #E8A82A 0%, #B8750E 100%)",
              boxShadow: "0 0 40px rgba(201,138,24,0.30)",
              margin: "0 auto 28px",
            }}
          />

          <p
            className="font-sans font-semibold tracking-[0.38em] uppercase"
            style={{ fontSize: "0.72rem", color: "#C4911A", marginBottom: "1.2rem" }}
          >
            The morning letter
          </p>

          <h1
            className="font-serif"
            style={{
              fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
              color: "#1A1610",
              fontWeight: 400,
              lineHeight: 1.18,
              marginBottom: "1.4rem",
              letterSpacing: "0.01em",
            }}
          >
            Start each morning
            <br />
            <em style={{ color: "#C4911A" }}>with intention.</em>
          </h1>

          <div
            style={{
              width: "40px",
              height: "1px",
              background: "rgba(184,117,14,0.40)",
              margin: "0 auto 1.4rem",
            }}
          />

          <p
            className="font-sans"
            style={{
              fontSize: "1.05rem",
              color: "#7A6B52",
              lineHeight: "1.85",
              marginBottom: "0.75rem",
            }}
          >
            Every morning, a single letter arrives in your inbox. A reflection, a ritual,
            a question worth sitting with. Written slowly, for people who choose to live
            the same way.
          </p>

          <p
            className="font-sans"
            style={{ fontSize: "0.95rem", color: "#A89070", lineHeight: 1.75 }}
          >
            Free forever. No algorithms. Just you, the light, and a moment of quiet.
          </p>
        </div>
      </section>

      {/* ── 2. EMAIL PREVIEW ── */}
      <section className="section-pad" style={{ backgroundColor: "#FFFDF6" }}>
        <div className="content-mid">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "2rem",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <p
                className="font-sans font-semibold tracking-[0.36em] uppercase"
                style={{ fontSize: "0.72rem", color: "#C4911A", marginBottom: "0.8rem" }}
              >
                A sample letter
              </p>
              <h2
                className="font-serif"
                style={{
                  fontSize: "clamp(1.4rem, 2.8vw, 2rem)",
                  color: "#1A1610",
                  fontWeight: 400,
                  lineHeight: 1.3,
                }}
              >
                This is what lands in your inbox.
              </h2>
            </div>

            <EmailPreviewCard />

            <p
              className="font-sans"
              style={{
                fontSize: "0.85rem",
                color: "rgba(122,107,82,0.55)",
                letterSpacing: "0.10em",
                textAlign: "center",
              }}
            >
              Delivered fresh. Every morning.
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. SOCIAL PROOF ── */}
      <section
        className="section-pad"
        style={{ backgroundColor: "#FFF8E8", borderTop: "1px solid rgba(184,117,14,0.08)" }}
      >
        <div className="content-wide">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p
              className="font-sans font-semibold tracking-[0.36em] uppercase"
              style={{ fontSize: "0.72rem", color: "#C4911A", marginBottom: "0.8rem" }}
            >
              The community
            </p>
            <h2
              className="font-serif"
              style={{
                fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                color: "#1A1610",
                fontWeight: 400,
                lineHeight: 1.25,
              }}
            >
              Join{" "}
              <span style={{ color: "#C4911A" }}>4,800+</span>{" "}
              readers finding their morning.
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: "#FFFDF6",
                  border: "1px solid rgba(184,117,14,0.16)",
                  borderRadius: "10px",
                  padding: "2rem 1.8rem",
                }}
              >
                <div style={{ display: "flex", gap: "3px", marginBottom: "1.1rem" }}>
                  {[0, 1, 2, 3, 4].map((s) => (
                    <span key={s} style={{ color: "#C4911A", fontSize: "0.85rem" }}>
                      ★
                    </span>
                  ))}
                </div>

                <p
                  className="font-serif italic"
                  style={{
                    fontSize: "1rem",
                    color: "#3D3424",
                    lineHeight: 1.65,
                    fontWeight: 400,
                    marginBottom: "1.4rem",
                  }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div
                  style={{ borderTop: "1px solid rgba(184,117,14,0.12)", paddingTop: "1rem" }}
                >
                  <p
                    className="font-sans"
                    style={{ fontSize: "0.88rem", color: "#1A1610", fontWeight: 500 }}
                  >
                    {t.name}
                  </p>
                  <p
                    className="font-sans"
                    style={{ fontSize: "0.80rem", color: "#A89070" }}
                  >
                    {t.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. SIGNUP FORM ── */}
      <section className="section-pad" style={{ backgroundColor: "#FFFDF6" }}>
        <div className="content-text">
          <div style={{ textAlign: "center", marginBottom: "2.8rem" }}>
            <p
              className="font-sans font-semibold tracking-[0.36em] uppercase"
              style={{ fontSize: "0.72rem", color: "#C4911A", marginBottom: "0.8rem" }}
            >
              Subscribe
            </p>
            <h2
              className="font-serif"
              style={{
                fontSize: "clamp(1.7rem, 3.2vw, 2.6rem)",
                color: "#1A1610",
                fontWeight: 400,
                lineHeight: 1.25,
                marginBottom: "1rem",
              }}
            >
              Reserve your morning moment.
            </h2>
            <p
              className="font-sans"
              style={{ color: "#7A6B52", fontSize: "0.97rem", lineHeight: 1.8 }}
            >
              Enter your email and receive your first letter tomorrow morning.
            </p>
          </div>

          <SignupForm />

          <p
            className="font-sans"
            style={{
              marginTop: "1.4rem",
              fontSize: "0.82rem",
              color: "rgba(122,107,82,0.55)",
              textAlign: "center",
              letterSpacing: "0.06em",
            }}
          >
            Free forever. No spam. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* ── 5. WHAT YOU GET ── */}
      <section
        className="section-pad"
        style={{ backgroundColor: "#FFF8E8", borderTop: "1px solid rgba(184,117,14,0.08)" }}
      >
        <div className="content-mid">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p
              className="font-sans font-semibold tracking-[0.36em] uppercase"
              style={{ fontSize: "0.72rem", color: "#C4911A", marginBottom: "0.8rem" }}
            >
              Inside every letter
            </p>
            <h2
              className="font-serif"
              style={{
                fontSize: "clamp(1.5rem, 2.8vw, 2.2rem)",
                color: "#1A1610",
                fontWeight: 400,
                lineHeight: 1.3,
              }}
            >
              Three things, delivered daily.
            </h2>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.6rem",
              maxWidth: "560px",
              margin: "0 auto",
            }}
          >
            {[
              {
                number: "01",
                title: "A daily reflection",
                body: "A short piece of writing — a thought, an observation, a reminder — to open the day with awareness and intention.",
              },
              {
                number: "02",
                title: "Morning rituals",
                body: "Simple practices rooted in nature, slow movement, and presence. Nothing complicated. Just things that work.",
              },
              {
                number: "03",
                title: "A community of presence",
                body: "You are not reading alone. Thousands of people across the world open this letter each morning. Something connects us all.",
              },
            ].map((item) => (
              <div
                key={item.number}
                style={{
                  display: "flex",
                  gap: "1.4rem",
                  alignItems: "flex-start",
                  padding: "1.4rem 1.6rem",
                  backgroundColor: "#FFFDF6",
                  border: "1px solid rgba(184,117,14,0.14)",
                  borderRadius: "10px",
                }}
              >
                <span
                  className="font-sans"
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: 600,
                    letterSpacing: "0.22em",
                    color: "#C4911A",
                    flexShrink: 0,
                    paddingTop: "3px",
                  }}
                >
                  {item.number}
                </span>
                <div>
                  <h3
                    className="font-serif"
                    style={{
                      fontSize: "1.05rem",
                      color: "#1A1610",
                      fontWeight: 400,
                      marginBottom: "0.5rem",
                      lineHeight: 1.35,
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="font-sans"
                    style={{ fontSize: "0.90rem", color: "#7A6B52", lineHeight: "1.78" }}
                  >
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. BOTTOM CTA ── */}
      <section
        className="section-pad"
        style={{ backgroundColor: "#FFFDF6", borderTop: "1px solid rgba(184,117,14,0.08)" }}
      >
        <div className="content-text text-center">
          <p
            className="font-serif italic"
            style={{
              fontSize: "clamp(1.1rem, 2.2vw, 1.4rem)",
              color: "#3D3424",
              lineHeight: 1.65,
              marginBottom: "2.2rem",
            }}
          >
            &ldquo;The morning is the only time of day
            <br />
            that belongs completely to you.&rdquo;
          </p>

          <a
            href="#subscribe"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("subscribe")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="font-sans"
            style={{
              display: "inline-block",
              padding: "14px 32px",
              backgroundColor: "#1A1610",
              color: "#FFFDF6",
              borderRadius: "100px",
              fontSize: "0.90rem",
              fontWeight: 500,
              letterSpacing: "0.05em",
              textDecoration: "none",
            }}
          >
            Start your mornings with Daily Sunrise
          </a>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "1.6rem",
              marginTop: "2.8rem",
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/privacy"
              className="font-sans"
              style={{ fontSize: "0.80rem", color: "#A89070", textDecoration: "none" }}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="font-sans"
              style={{ fontSize: "0.80rem", color: "#A89070", textDecoration: "none" }}
            >
              Terms of Service
            </Link>
            <Link
              href="/"
              className="font-sans"
              style={{ fontSize: "0.80rem", color: "#A89070", textDecoration: "none" }}
            >
              dailysunrise.com
            </Link>
          </div>

          <p
            className="font-sans"
            style={{
              fontSize: "0.74rem",
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              color: "rgba(122,107,82,0.38)",
              marginTop: "2rem",
            }}
          >
            The Same Life — a different perspective
          </p>
        </div>
      </section>

    </div>
  );
}
