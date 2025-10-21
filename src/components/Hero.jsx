import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import heroBg from "../assets/hero-bg.jpg";
import profile from "../assets/profile.png";

const subtitles = ["Web Developer", "Graphic Designer", "Game Developer"];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % subtitles.length), 2500);
    return () => clearInterval(id);
  }, []);

  return (
    <header
  id="hero"
  className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden"
>
  {/* Background image */}
  <motion.div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: `url(${heroBg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
    initial={{ scale: 1.1, opacity: 0 }}
    animate={{ scale: 1, opacity: 0.8 }}   // bump opacity so you can see it
    transition={{ duration: 1.2, ease: "easeOut" }}
  />

  {/* Dark overlay (reduce strength so BG shows) */}
  <motion.div
    className="absolute inset-0 z-0 bg-gradient-to-b from-base/40 via-base/60 to-base/80"
    animate={{ y: [0, -20, 0] }}
    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
  />

  {/* Content on top */}
  <motion.img
    src={profile}
    alt="Damien Kulash portrait"
    className="z-10 w-40 sm:w-52 rounded-2xl border border-accent/30 shadow-lg mb-6"
    initial={{ opacity: 0, x: -40 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, delay: 0.2 }}
  />

  <motion.h1 className="z-10 text-5xl sm:text-6xl font-bold tracking-wide"
    initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
    Damien Kulash
  </motion.h1>

  <AnimatePresence mode="wait">
    <motion.p
      key={subtitles[index]}
      className="z-10 mt-4 text-accent text-xl sm:text-2xl"
      initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4 }}
    >
      {subtitles[index]}
    </motion.p>
  </AnimatePresence>

  <motion.div
    className="z-10 absolute bottom-10 text-sm text-white/60"
    animate={{ opacity: [0.4, 0.8, 0.4] }}
    transition={{ duration: 2, repeat: Infinity }}
  >
    Scroll to explore ↓
  </motion.div>
</header>

  );
}
