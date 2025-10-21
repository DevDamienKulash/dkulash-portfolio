import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data/projects";

export default function Projects() {
  const [active, setActive] = useState(null);

  return (
    <section id="projects" className="py-24">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl mb-8 tracking-wide">My Projects</h2>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.button
              key={i}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => !p.placeholder && setActive(p)}
              className={`rounded-2xl p-3 border text-left transition
                         ${p.placeholder ? "border-white/10 text-white/40" : "border-white/15 hover:border-accent/60"}`}
            >
              <div
                className={`aspect-video rounded-xl bg-white/5 overflow-hidden relative`}
              >
                {!p.placeholder && (
                  <img
                    src={p.img}
                    alt={p.title}
                    className="absolute inset-0 h-full w-full object-cover opacity-80"
                  />
                )}
              </div>
              <div className="mt-3 font-semibold">{p.title}</div>
              {!p.placeholder && (
                <div className="mt-1 text-sm text-white/70 line-clamp-2">
                  {p.blurb}
                </div>
              )}
            </motion.button>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {active && (
            <motion.div
              className="fixed inset-0 z-50 grid place-items-center bg-black/70 backdrop-blur-sm p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActive(null)}
            >
              <motion.div
                onClick={(e) => e.stopPropagation()}
                className="max-w-3xl w-full rounded-2xl bg-base border border-white/15 p-4"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.97, opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                <div className="aspect-video rounded-xl overflow-hidden bg-white/5">
                  <img
                    src={active.img}
                    alt={active.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="mt-4 text-xl font-semibold">{active.title}</h3>
                <p className="mt-2 text-white/80">{active.blurb}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {active.tags?.map((t) => (
                    <span key={t} className="rounded-xl border border-accent/30 px-3 py-1 text-sm/6">
                      #{t}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex gap-3">
                  <a className="inline-flex items-center gap-2 rounded-2xl border border-accent/50 px-4 py-2 hover:drop-shadow-glow transition"
                     href={active.demo} target="_blank" rel="noreferrer">
                    Live Demo
                  </a>
                  <a className="inline-flex items-center gap-2 rounded-2xl border border-accent/50 px-4 py-2 hover:drop-shadow-glow transition"
                     href={active.repo} target="_blank" rel="noreferrer">
                    Repository
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
