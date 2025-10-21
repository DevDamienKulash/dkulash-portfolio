import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LANGS = ["JavaScript", "TypeScript", "Python", "C#", "HTML", "CSS"];
const TOOLS = ["React", "Node.js", "Express", "TailwindCSS", "Framer Motion", ".NET 8 / WPF", "Mapbox GL JS", "Git / GitHub"];

export default function Skills() {
  const [tab, setTab] = useState("langs");
  const list = tab === "langs" ? LANGS : TOOLS;

  return (
    <section id="skills" className="py-24">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl mb-6 tracking-wide">Skills</h2>

        {/* Tabs */}
        <div className="mb-6 flex flex-wrap gap-2">
          <button
            className={`inline-flex items-center gap-2 rounded-2xl border px-4 py-2 transition
                        ${tab === "langs" ? "border-accent/70 text-accent" : "border-white/15 text-white/80"}`}
            onClick={() => setTab("langs")}
          >
            Languages I know
          </button>
          <button
            className={`inline-flex items-center gap-2 rounded-2xl border px-4 py-2 transition
                        ${tab === "tools" ? "border-accent/70 text-accent" : "border-white/15 text-white/80"}`}
            onClick={() => setTab("tools")}
          >
            Frameworks / Tools I use
          </button>
        </div>

        {/* Tag list with crossfade */}
        <AnimatePresence mode="wait">
          <motion.ul
            key={tab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3"
          >
            {list.map((item) => (
              <li
                key={item}
                className="rounded-xl border border-accent/30 px-3 py-1 text-sm/6
                           hover:-translate-y-0.5 transition will-change-transform"
              >
                {item}
              </li>
            ))}
          </motion.ul>
        </AnimatePresence>
      </div>
    </section>
  );
}
