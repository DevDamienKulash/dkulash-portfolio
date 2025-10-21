import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const isTouch = () =>
  typeof window !== "undefined" &&
  ("ontouchstart" in window || navigator.maxTouchPoints > 0);

export default function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  // raw mouse position
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  // smooth follow for the outer ring
  const sx = useSpring(mx, { stiffness: 300, damping: 35, mass: 0.4 });
  const sy = useSpring(my, { stiffness: 300, damping: 35, mass: 0.4 });

  useEffect(() => {
    if (isTouch()) return;               // disable on touch
    setEnabled(true);

    const move = (e) => {
      mx.set(e.clientX);
      my.set(e.clientY);
      // detect interactive targets (links/buttons/cards with data-cursor)
      const el = e.target.closest("a, button, [data-cursor='hover']");
      setHovering(Boolean(el));
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mx, my]);

  if (!enabled) return null;

  return (
    <>
      {/* inner dot */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed z-[60] h-2 w-2 rounded-full bg-accent mix-blend-screen"
        style={{
          left: 0, top: 0,
          x: mx, y: my,
        }}
      />

      {/* outer ring */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed z-[60] rounded-full border border-accent/70"
        style={{
          left: 0, top: 0,
          x: sx, y: sy,
          width: hovering ? 44 : 28,
          height: hovering ? 44 : 28,
          marginLeft: (hovering ? -22 : -14),
          marginTop: (hovering ? -22 : -14),
          filter: hovering ? "drop-shadow(0 0 10px rgba(255,143,163,0.6))" : "none",
          opacity: 0.9,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 28 }}
      />
    </>
  );
}
