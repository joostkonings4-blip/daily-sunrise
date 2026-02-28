"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef   = useRef<HTMLDivElement>(null);
  const pos       = useRef({ x: 0, y: 0 });
  const ringPos   = useRef({ x: 0, y: 0 });
  const rafRef    = useRef<number | null>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top  = `${e.clientY}px`;
      }
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const animateRing = () => {
      ringPos.current.x = lerp(ringPos.current.x, pos.current.x, 0.12);
      ringPos.current.y = lerp(ringPos.current.y, pos.current.y, 0.12);
      if (ringRef.current) {
        ringRef.current.style.left = `${ringPos.current.x}px`;
        ringRef.current.style.top  = `${ringPos.current.y}px`;
      }
      rafRef.current = requestAnimationFrame(animateRing);
    };

    const onEnterLink = () => {
      cursorRef.current?.classList.add("scale-150");
      ringRef.current?.classList.add("scale-150", "opacity-0");
    };
    const onLeaveLink = () => {
      cursorRef.current?.classList.remove("scale-150");
      ringRef.current?.classList.remove("scale-150", "opacity-0");
    };

    document.addEventListener("mousemove", onMove);
    document
      .querySelectorAll("a, button, [data-cursor-grow]")
      .forEach((el) => {
        el.addEventListener("mouseenter", onEnterLink);
        el.addEventListener("mouseleave", onLeaveLink);
      });

    rafRef.current = requestAnimationFrame(animateRing);

    return () => {
      document.removeEventListener("mousemove", onMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="custom-cursor transition-transform duration-150"
      />
      <div
        ref={ringRef}
        className="custom-cursor-ring transition-transform duration-200"
      />
    </>
  );
}
