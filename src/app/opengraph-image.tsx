import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const alt = "Daily Sunrise — The Same Life, a different perspective";

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          backgroundColor: "#FFFDF6",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          fontFamily: "Georgia, serif",
        }}
      >
        {/* Subtle warm gradient background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(201,138,24,0.08) 0%, transparent 70%)",
          }}
        />

        {/* Gold border frame */}
        <div
          style={{
            position: "absolute",
            inset: "28px",
            border: "1px solid rgba(184,117,14,0.30)",
            borderRadius: "4px",
          }}
        />

        {/* Inner accent line */}
        <div
          style={{
            position: "absolute",
            inset: "36px",
            border: "1px solid rgba(184,117,14,0.12)",
            borderRadius: "2px",
          }}
        />

        {/* Top ambient glow */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "600px",
            height: "160px",
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(201,138,24,0.14) 0%, transparent 70%)",
          }}
        />

        {/* Sun icon — simple circle */}
        <div
          style={{
            width: "56px",
            height: "56px",
            borderRadius: "50%",
            background: "radial-gradient(circle, #E8A82A 0%, #B8750E 100%)",
            marginBottom: "32px",
            boxShadow: "0 0 40px rgba(201,138,24,0.35)",
          }}
        />

        {/* Brand name */}
        <div
          style={{
            fontSize: "72px",
            fontWeight: "400",
            color: "#1A1610",
            letterSpacing: "0.04em",
            lineHeight: 1.1,
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          Daily Sunrise
        </div>

        {/* Gold hairline */}
        <div
          style={{
            width: "80px",
            height: "1px",
            background: "rgba(184,117,14,0.50)",
            marginBottom: "24px",
          }}
        />

        {/* Tagline */}
        <div
          style={{
            fontSize: "26px",
            fontWeight: "400",
            color: "#C4911A",
            letterSpacing: "0.06em",
            textAlign: "center",
            fontStyle: "italic",
          }}
        >
          The Same Life — a different perspective
        </div>

        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: "56px",
            fontSize: "14px",
            letterSpacing: "0.22em",
            color: "rgba(122,107,82,0.55)",
            textTransform: "uppercase",
            fontFamily: "system-ui, sans-serif",
            fontWeight: "400",
          }}
        >
          www.dailysunrise.com
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
