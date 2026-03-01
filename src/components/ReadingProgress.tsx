"use client";

import { useEffect, useState } from "react";
import { useScroll, motion } from "framer-motion";

export default function ReadingProgress() {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      setVisible(v > 0.05);
    });
    return unsubscribe;
  }, [scrollYProgress]);

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50"
      style={{ height: hovered ? "3px" : "2px", transition: "height 0.2s ease" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        style={{
          scaleX: scrollYProgress,
          transformOrigin: "0%",
          height: "100%",
          backgroundColor: "#C4911A",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      />
    </div>
  );
}
