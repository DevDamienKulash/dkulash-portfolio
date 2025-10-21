import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2
          className="text-2xl mb-4 tracking-wide"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.35 }}
        >
          About Me<span className="animate-pulse">_</span>
        </motion.h2>

        <motion.p
          style={{textAlign: 'center'}}
          className="max-w-3xl leading-relaxed text-white/90"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4, delay: 0.05 }}
        >
          Hi, I’m a full-stack web and game developer who loves turning ideas into interactive experiences.
          I work with JavaScript, TypeScript, C#, Python, and more to build both stylish and practical projects.
          My passion for development comes from a love of creation — the joy of bringing something new into
          existence through art and code.
        </motion.p>
      </div>
    </section>
  );
}
