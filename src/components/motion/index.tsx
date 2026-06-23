"use client";

import {
  motion,
  useInView,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  animate,
  type MotionValue,
} from "framer-motion";
import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type CSSProperties,
} from "react";

// Shared cinematic easing — slow, deliberate, premium.
export const EASE = [0.22, 1, 0.36, 1] as const;

// ─── Reveal ──────────────────────────────────────────────────────────────────
// Scroll-triggered reveal with a soft blur-up. The blur is what reads as
// "expensive" — content resolves into focus rather than just sliding.
type RevealProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  delay?: number;
  duration?: number;
  y?: number;
  x?: number;
  blur?: number;
  once?: boolean;
  margin?: string;
  as?: "div" | "span" | "li" | "section" | "p" | "h2" | "h3";
};

export function Reveal({
  children,
  className,
  style,
  delay = 0,
  duration = 1,
  y = 28,
  x = 0,
  blur = 8,
  once = true,
  margin = "-80px",
  as = "div",
}: RevealProps) {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once,
    margin,
  } as Parameters<typeof useInView>[1]);
  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      ref={ref}
      className={className}
      style={style}
      initial={{ opacity: 0, y, x, filter: `blur(${blur}px)` }}
      animate={
        inView
          ? { opacity: 1, y: 0, x: 0, filter: "blur(0px)" }
          : { opacity: 0, y, x, filter: `blur(${blur}px)` }
      }
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </MotionTag>
  );
}

// ─── Stagger container + child ────────────────────────────────────────────────
export function Stagger({
  children,
  className,
  style,
  stagger = 0.12,
  delay = 0,
  once = true,
  margin = "-80px",
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  stagger?: number;
  delay?: number;
  once?: boolean;
  margin?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once,
    margin,
  } as Parameters<typeof useInView>[1]);
  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  style,
  y = 30,
  blur = 8,
  duration = 0.9,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  y?: number;
  blur?: number;
  duration?: number;
}) {
  return (
    <motion.div
      className={className}
      style={style}
      variants={{
        hidden: { opacity: 0, y, filter: `blur(${blur}px)` },
        show: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { duration, ease: EASE },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

// ─── WordReveal ───────────────────────────────────────────────────────────────
// Headline words rise + un-blur one after another. The hallmark of editorial,
// "designed" sites. Keep stagger small so it stays calm, not theatrical.
export function WordReveal({
  text,
  className,
  style,
  delay = 0,
  stagger = 0.055,
  duration = 0.95,
  once = true,
  margin = "-60px",
}: {
  text: string;
  className?: string;
  style?: CSSProperties;
  delay?: number;
  stagger?: number;
  duration?: number;
  once?: boolean;
  margin?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once,
    margin,
  } as Parameters<typeof useInView>[1]);
  const words = text.split(" ");

  return (
    <span ref={ref} className={className} style={{ ...style, display: "inline" }}>
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          style={{ display: "inline-block", overflow: "hidden", verticalAlign: "top" }}
        >
          <motion.span
            style={{ display: "inline-block", willChange: "transform" }}
            initial={{ y: "110%", opacity: 0 }}
            animate={inView ? { y: "0%", opacity: 1 } : { y: "110%", opacity: 0 }}
            transition={{
              duration,
              delay: delay + i * stagger,
              ease: EASE,
            }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </span>
  );
}

// ─── CountUp ──────────────────────────────────────────────────────────────────
// Animates a numeric value into view. Preserves prefixes/suffixes like
// "73%", "4.7h", "4,800+". Static stats are the #1 amateur tell.
export function CountUp({
  value,
  className,
  style,
  duration = 1.8,
}: {
  value: string;
  className?: string;
  style?: CSSProperties;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  // Parse: leading non-digits (prefix), number, trailing (suffix)
  const match = value.match(/^([^\d-]*)([\d.,]+)(.*)$/);
  const prefix = match ? match[1] : "";
  const numStr = match ? match[2] : value;
  const suffix = match ? match[3] : "";
  const hasComma = numStr.includes(",");
  const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;
  const target = parseFloat(numStr.replace(/,/g, "")) || 0;

  const [display, setDisplay] = useState(prefix + (match ? "0" : value) + suffix);

  useEffect(() => {
    if (!inView || !match) return;
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setDisplay(value);
      return;
    }
    const controls = animate(0, target, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(v) {
        let formatted =
          decimals > 0 ? v.toFixed(decimals) : Math.round(v).toString();
        if (hasComma) {
          const [int, dec] = formatted.split(".");
          formatted =
            int.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (dec ? "." + dec : "");
        }
        setDisplay(prefix + formatted + suffix);
      },
    });
    return () => controls.stop();
  }, [inView]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <span ref={ref} className={className} style={style}>
      {display}
    </span>
  );
}

// ─── Parallax ─────────────────────────────────────────────────────────────────
export function useParallax(
  range: [number, number] = [-60, 60],
  offset: [string, string] = ["start end", "end start"]
): { ref: React.RefObject<HTMLDivElement | null>; y: MotionValue<number> } {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offset as never,
  });
  const raw = useTransform(scrollYProgress, [0, 1], range);
  const y = useSpring(raw, { stiffness: 90, damping: 30, mass: 0.4 });
  return { ref, y };
}

// ─── MagneticButton ───────────────────────────────────────────────────────────
// Subtle pull toward the cursor + lift. Premium tactility on the one CTA
// that matters most.
export function Magnetic({
  children,
  className,
  strength = 0.35,
  style,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 180, damping: 18, mass: 0.3 });
  const sy = useSpring(y, { stiffness: 180, damping: 18, mass: 0.3 });

  function onMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const mx = e.clientX - (rect.left + rect.width / 2);
    const my = e.clientY - (rect.top + rect.height / 2);
    x.set(mx * strength);
    y.set(my * strength);
  }
  function onLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ ...style, x: sx, y: sy, display: "inline-block" }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </motion.div>
  );
}
