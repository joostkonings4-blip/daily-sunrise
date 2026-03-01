"use client";

import { useState } from "react";

interface ShareButtonsProps {
  title: string;
  slug: string;
}

const ICON_COLOR = "#7A6B52";
const HOVER_COLOR = "#C4911A";
const BORDER_COLOR = "rgba(196,145,26,0.20)";
const BG_COLOR = "#FFFDF6";

function CircleButton({
  label,
  onClick,
  href,
  children,
}: {
  label: string;
  onClick?: () => void;
  href?: string;
  children: React.ReactNode;
}) {
  const [hovered, setHovered] = useState(false);

  const sharedStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "36px",
    height: "36px",
    borderRadius: "50%",
    border: `1px solid ${BORDER_COLOR}`,
    backgroundColor: BG_COLOR,
    cursor: "pointer",
    color: hovered ? HOVER_COLOR : ICON_COLOR,
    transition: "color 0.18s ease, border-color 0.18s ease",
    borderColor: hovered ? "rgba(196,145,26,0.55)" : BORDER_COLOR,
    textDecoration: "none",
    flexShrink: 0,
  };

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        style={sharedStyle}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      style={sharedStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </button>
  );
}

export default function ShareButtons({ title, slug }: ShareButtonsProps) {
  const shareUrl = `https://www.dailysunrise.com/blog/${slug}`;
  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(title);

  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(shareUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        flexWrap: "wrap",
      }}
    >
      {/* Label */}
      <span
        style={{
          fontFamily: "var(--font-sans, sans-serif)",
          fontSize: "0.72rem",
          fontWeight: 600,
          letterSpacing: "0.28em",
          textTransform: "uppercase",
          color: "#7A6B52",
          marginRight: "4px",
        }}
      >
        Share
      </span>

      {/* X / Twitter */}
      <CircleButton
        label="Share on X"
        href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
      >
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.26 5.632 5.904-5.632Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
        </svg>
      </CircleButton>

      {/* Pinterest */}
      <CircleButton
        label="Share on Pinterest"
        href={`https://pinterest.com/pin/create/button/?url=${encodedUrl}&description=${encodedTitle}`}
      >
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0Z" />
        </svg>
      </CircleButton>

      {/* Facebook */}
      <CircleButton
        label="Share on Facebook"
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
      >
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.268h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073Z" />
        </svg>
      </CircleButton>

      {/* Copy Link */}
      <div style={{ position: "relative" }}>
        <CircleButton label="Copy link" onClick={handleCopy}>
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
          </svg>
        </CircleButton>

        {/* Tooltip */}
        {copied && (
          <div
            style={{
              position: "absolute",
              bottom: "calc(100% + 8px)",
              left: "50%",
              transform: "translateX(-50%)",
              backgroundColor: "#1A1610",
              color: "#FFFDF6",
              fontFamily: "var(--font-sans, sans-serif)",
              fontSize: "0.7rem",
              fontWeight: 500,
              letterSpacing: "0.04em",
              padding: "4px 9px",
              borderRadius: "4px",
              whiteSpace: "nowrap",
              pointerEvents: "none",
            }}
          >
            Copied!
          </div>
        )}
      </div>
    </div>
  );
}
