import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms and conditions for using Daily Sunrise. Simple, fair, and transparent.",
};

function TermsSection({
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

export default function TermsPage() {
  const effectiveDate = "March 1, 2026";

  return (
    <div style={{ backgroundColor: "#FFFDF6", minHeight: "100vh" }}>
      {/* Hero */}
      <section
        className="section-pad"
        style={{
          backgroundColor: "#FFF8E8",
          borderBottom: "1px solid rgba(184,117,14,0.10)",
        }}
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
            Terms of Service
          </h1>

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
            By using Daily Sunrise you agree to these simple, fair terms. We
            believe in transparency — no legalese, no hidden clauses.
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

      {/* Body */}
      <section className="section-pad">
        <div className="content-mid">
          <TermsSection title="Agreement to Terms">
            <p>
              By accessing and using the Daily Sunrise website
              (www.dailysunrise.com), you accept and agree to be bound by these
              Terms of Service. If you do not agree, please discontinue use of
              the website.
            </p>
          </TermsSection>

          <TermsSection title="What We Offer">
            <p>
              Daily Sunrise is a free online slow living journal and newsletter.
              We provide editorial content including articles, photography,
              philosophy, and a morning newsletter — all designed to help you
              slow down and find perspective.
            </p>
            <p style={{ marginTop: "0.85rem" }}>
              Content is provided for informational and inspirational purposes
              only. It does not constitute medical, psychological, or
              professional health advice.
            </p>
          </TermsSection>

          <TermsSection title="Newsletter Subscription">
            <p>
              When you subscribe to our newsletter, you agree to receive
              periodic emails from Daily Sunrise. You can unsubscribe at any
              time using the link in any email we send. After unsubscribing,
              your email address will be removed from our active list within 30
              days.
            </p>
          </TermsSection>

          <TermsSection title="Intellectual Property">
            <p>
              All content on Daily Sunrise — including text, photography,
              illustrations, design, and branding — is owned by Daily Sunrise
              or used with permission. You may not reproduce, distribute, or
              create derivative works without our written consent.
            </p>
            <p style={{ marginTop: "0.85rem" }}>
              You are welcome to share links to our content and quote brief
              excerpts with proper attribution.
            </p>
          </TermsSection>

          <TermsSection title="User Conduct">
            <p>When using Daily Sunrise, you agree not to:</p>
            <ul
              style={{
                marginTop: "0.85rem",
                paddingLeft: "1.4rem",
                listStyleType: "disc",
              }}
            >
              <li style={{ marginBottom: "0.5rem" }}>
                Use the website for any unlawful purpose.
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                Attempt to interfere with or disrupt the website&apos;s
                infrastructure.
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                Scrape, crawl, or extract content in bulk without permission.
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                Submit false information through any form on the website.
              </li>
            </ul>
          </TermsSection>

          <TermsSection title="Disclaimer">
            <p>
              Daily Sunrise is provided &ldquo;as is&rdquo; without warranties
              of any kind. While we strive to keep content accurate and
              up-to-date, we make no guarantees about completeness, reliability,
              or suitability for any particular purpose.
            </p>
            <p style={{ marginTop: "0.85rem" }}>
              Our content about health, mindfulness, and slow living reflects
              personal philosophy and experience. It is not a substitute for
              professional medical or therapeutic advice.
            </p>
          </TermsSection>

          <TermsSection title="Limitation of Liability">
            <p>
              To the fullest extent permitted by law, Daily Sunrise shall not be
              liable for any indirect, incidental, or consequential damages
              arising from your use of the website or newsletter.
            </p>
          </TermsSection>

          <TermsSection title="External Links">
            <p>
              Our website may contain links to third-party websites (including
              social media platforms). We are not responsible for the content,
              privacy practices, or terms of service of these external sites.
            </p>
          </TermsSection>

          <TermsSection title="Changes to These Terms">
            <p>
              We may update these terms from time to time. When we do, we will
              update the effective date above. Continued use of the website
              after changes constitutes acceptance of the revised terms.
            </p>
          </TermsSection>

          <TermsSection title="Governing Law">
            <p>
              These terms are governed by and construed in accordance with the
              laws of the Netherlands. Any disputes shall be resolved in the
              courts of the Netherlands.
            </p>
          </TermsSection>

          <TermsSection title="Contact">
            <p>
              If you have questions about these terms, please contact us:
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
          </TermsSection>

          {/* Back link */}
          <div
            style={{
              borderTop: "1px solid rgba(184,117,14,0.14)",
              paddingTop: "2.5rem",
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
          </div>
        </div>
      </section>

      {/* Slogan footer note */}
      <div
        className="section-pad text-center"
        style={{
          backgroundColor: "#FFF8E8",
          borderTop: "1px solid rgba(184,117,14,0.10)",
        }}
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
