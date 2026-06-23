"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Buttery, slow smooth-scroll — the single biggest "premium feel" upgrade.
 * Tuned soft and unhurried to match the brand (Aman / Kinfolk / Calm).
 * Respects prefers-reduced-motion: bails out entirely.
 */
export default function SmoothScroll() {
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.25,
      // gentle ease-out — deliberate, never snappy
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.4,
    });

    let frame = 0;
    function raf(time: number) {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    }
    frame = requestAnimationFrame(raf);

    // Make in-page anchor links (e.g. /#signup) glide instead of jump
    const onClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest('a[href*="#"]');
      if (!target) return;
      const href = target.getAttribute("href") || "";
      const hash = href.includes("#") ? href.slice(href.indexOf("#")) : "";
      if (hash.length > 1 && document.querySelector(hash)) {
        const sameRoute =
          href.startsWith("#") || href.startsWith(window.location.pathname);
        if (sameRoute) {
          e.preventDefault();
          lenis.scrollTo(hash, { offset: -20 });
        }
      }
    };
    document.addEventListener("click", onClick);

    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("click", onClick);
      lenis.destroy();
    };
  }, []);

  return null;
}
