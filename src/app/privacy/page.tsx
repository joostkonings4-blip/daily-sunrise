import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Daily Sunrise collects, uses, and protects your personal data. We believe your privacy is sacred.",
};

// ─── Section component ──────────────────────────────────────────────────────
function PolicySection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        borderTop: "1px solid rgba(184,117,14,0.14)",
        paddingTop: "2.5rem",
        marginBottom: "2.5rem",
      }}
    >
      <h2
        className="font-serif"
        style={{
          fontSize: "clamp(1.2rem, 2vw, 1.55rem)",
          color: "#1A1610",
          fontWeight: 400,
          lineHeight: 1.3,
          marginBottom: "1.1rem",
        }}
      >
        {title}
      </h2>
      <div
        className="font-sans"
        style={{
          color: "#7A6B52",
          fontSize: "0.97rem",
          lineHeight: "1.92",
        }}
      >
        {children}
      </div>
    </div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────
export default function PrivacyPage() {
  const effectiveDate = "March 1, 2026";

  return (
    <div style={{ backgroundColor: "#FFFDF6", minHeight: "100vh" }}>

      {/* ── Hero ── */}
      <section
        className="section-pad"
        style={{ backgroundColor: "#FFF8E8", borderBottom: "1px solid rgba(184,117,14,0.10)" }}
      >
        <div className="content-mid text-center">
          <p
            className="font-sans font-semibold tracking-[0.36em] uppercase"
            style={{ fontSize: "0.72rem", color: "#C4911A", marginBottom: "1.2rem" }}
          >
            Legal
          </p>

          <h1
            className="font-serif"
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "#1A1610",
              fontWeight: 400,
              lineHeight: 1.2,
              marginBottom: "1.2rem",
            }}
          >
            Privacy Policy
          </h1>

          {/* Gold hairline */}
          <div
            className="mx-auto"
            style={{
              width: "40px",
              height: "1px",
              background: "rgba(184,117,14,0.40)",
              marginBottom: "1.4rem",
            }}
          />

          <p
            className="font-sans"
            style={{ color: "#7A6B52", fontSize: "0.95rem", lineHeight: 1.8 }}
          >
            Your privacy matters to us. We collect as little data as possible and
            treat it with care. This policy explains what we collect, why, and
            how you can exercise your rights.
          </p>

          <p
            className="font-sans"
            style={{
              color: "rgba(122,107,82,0.60)",
              fontSize: "0.82rem",
              marginTop: "1.4rem",
            }}
          >
            Effective date: {effectiveDate}
          </p>
        </div>
      </section>

      {/* ── Body ── */}
      <section className="section-pad">
        <div className="content-mid">

          <PolicySection title="Who We Are">
            <p>
              Daily Sunrise is an online slow living journal and newsletter operated by
              Daily Sunrise (www.dailysunrise.com). Our mission is to help you slow down,
              reconnect with yourself, and find perspective in the present moment.
            </p>
            <p style={{ marginTop: "0.85rem" }}>
              If you have any questions about this privacy policy or how we handle your
              data, please contact us at{" "}
              <a
                href="mailto:hello@dailysunrise.com"
                style={{ color: "#C4911A", textDecoration: "underline" }}
              >
                hello@dailysunrise.com
              </a>
              .
            </p>
          </PolicySection>

          <PolicySection title="What Data We Collect">
            <p>
              We keep data collection minimal by design. The only personal data we
              collect is:
            </p>
            <ul
              style={{ marginTop: "0.85rem", paddingLeft: "1.4rem", listStyleType: "disc" }}
            >
              <li style={{ marginBottom: "0.5rem" }}>
                <strong style={{ color: "#3D3424" }}>Email address</strong> — when you
                voluntarily subscribe to our morning newsletter. This is the only form of
                personal data we store.
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                <strong style={{ color: "#3D3424" }}>Basic analytics</strong> — anonymised
                page visit counts via our hosting provider (Vercel). No personally
                identifiable information is captured.
              </li>
            </ul>
            <p style={{ marginTop: "0.85rem" }}>
              We do <em>not</em> collect names, phone numbers, payment details, location
              data, or any sensitive personal information.
            </p>
          </PolicySection>

          <PolicySection title="How We Use Your Data">
            <p>Your email address is used solely to:</p>
            <ul
              style={{ marginTop: "0.85rem", paddingLeft: "1.4rem", listStyleType: "disc" }}
            >
              <li style={{ marginBottom: "0.5rem" }}>Send you the Daily Sunrise morning newsletter.</li>
              <li style={{ marginBottom: "0.5rem" }}>
                Occasionally notify you of new content, rituals, or announcements that
                are relevant to the slow living community.
              </li>
            </ul>
            <p style={{ marginTop: "0.85rem" }}>
              We will never sell, rent, or share your email address with any third party
              for marketing purposes.
            </p>
          </PolicySection>

          <PolicySection title="Cookies">
            <p>
              Daily Sunrise does not use tracking cookies or advertising cookies. We do
              not install any third-party analytics cookies on your device.
            </p>
            <p style={{ marginTop: "0.85rem" }}>
              Our hosting provider (Vercel) may set essential session cookies for
              performance and security purposes. These are technical necessities and
              contain no personal identifiers.
            </p>
          </PolicySection>

          <PolicySection title="Third-Party Services">
            <p>
              To operate the website and newsletter, we work with the following
              trusted service providers:
            </p>
            <ul
              style={{ marginTop: "0.85rem", paddingLeft: "1.4rem", listStyleType: "disc" }}
            >
              <li style={{ marginBottom: "0.5rem" }}>
                <strong style={{ color: "#3D3424" }}>Vercel</strong> — our hosting
                provider. Vercel may process anonymised request logs for infrastructure
                and security purposes. See{" "}
                <a
                  href="https://vercel.com/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#C4911A" }}
                >
                  Vercel Privacy Policy
                </a>
                .
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                <strong style={{ color: "#3D3424" }}>Email service provider</strong> —
                we use a transactional email service to deliver newsletters. Your email
                address is stored with this provider under a data processing agreement.
                You can request removal at any time.
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                <strong style={{ color: "#3D3424" }}>Google Fonts &amp; Unsplash</strong>{" "}
                — used for typography and imagery. These providers may log your IP
                address when assets are fetched.
              </li>
            </ul>
          </PolicySection>

          <PolicySection title="Your Rights Under GDPR">
            <p>
              If you are located in the European Union or European Economic Area, you have
              the following rights regarding your personal data:
            </p>
            <ul
              style={{ marginTop: "0.85rem", paddingLeft: "1.4rem", listStyleType: "disc" }}
            >
              <li style={{ marginBottom: "0.5rem" }}>
                <strong style={{ color: "#3D3424" }}>Right of access</strong> — you can
                request a copy of the data we hold about you.
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                <strong style={{ color: "#3D3424" }}>Right to rectification</strong> —
                you can ask us to correct inaccurate data.
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                <strong style={{ color: "#3D3424" }}>Right to erasure</strong> — you can
                ask us to delete your personal data at any time.
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                <strong style={{ color: "#3D3424" }}>Right to object</strong> — you can
                object to the processing of your data.
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                <strong style={{ color: "#3D3424" }}>Right to withdraw consent</strong> —
                you can unsubscribe from our newsletter at any time using the unsubscribe
                link in any email we send.
              </li>
            </ul>
            <p style={{ marginTop: "0.85rem" }}>
              To exercise any of these rights, contact us at{" "}
              <a
                href="mailto:hello@dailysunrise.com"
                style={{ color: "#C4911A", textDecoration: "underline" }}
              >
                hello@dailysunrise.com
              </a>
              . We will respond within 30 days.
            </p>
          </PolicySection>

          <PolicySection title="Data Retention">
            <p>
              We retain your email address for as long as you remain subscribed to the
              newsletter. If you unsubscribe, your email address is removed from our
              active list within 30 days. You may also request immediate deletion by
              emailing us.
            </p>
          </PolicySection>

          <PolicySection title="Children's Privacy">
            <p>
              Daily Sunrise is not directed at children under the age of 16. We do not
              knowingly collect personal data from children. If you believe a child has
              provided us with personal data, please contact us and we will delete it
              promptly.
            </p>
          </PolicySection>

          <PolicySection title="Changes to This Policy">
            <p>
              We may update this privacy policy from time to time. When we do, we will
              update the effective date at the top of this page. Continued use of the
              website after changes constitutes acceptance of the revised policy. For
              significant changes, we will notify newsletter subscribers by email.
            </p>
          </PolicySection>

          <PolicySection title="Contact">
            <p>
              Questions, concerns, or requests about your privacy can be sent to:
            </p>
            <p style={{ marginTop: "0.85rem" }}>
              <strong style={{ color: "#3D3424" }}>Daily Sunrise</strong>
              <br />
              <a
                href="mailto:hello@dailysunrise.com"
                style={{ color: "#C4911A", textDecoration: "underline" }}
              >
                hello@dailysunrise.com
              </a>
              <br />
              www.dailysunrise.com
            </p>
          </PolicySection>

          {/* Back link */}
          <div style={{ borderTop: "1px solid rgba(184,117,14,0.14)", paddingTop: "2.5rem" }}>
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
          </div>

        </div>
      </section>

      {/* ── Slogan footer note ── */}
      <div
        className="section-pad text-center"
        style={{ backgroundColor: "#FFF8E8", borderTop: "1px solid rgba(184,117,14,0.10)" }}
      >
        <p
          className="font-sans"
          style={{
            fontSize: "0.76rem",
            letterSpacing: "0.26em",
            textTransform: "uppercase",
            color: "rgba(122,107,82,0.45)",
          }}
        >
          The Same Life — a different perspective
        </p>
      </div>

    </div>
  );
}
