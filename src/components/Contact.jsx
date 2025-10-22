import { motion } from "framer-motion";
import ResumePDF from "../assets/Damien-Kulash-Resume.pdf";

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <motion.h2
          className="text-2xl mb-6 tracking-wide"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.35 }}
        >
          Where can you find me?
        </motion.h2>

        <motion.div
          className="flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4, delay: 0.05 }}
        >
          <a className="inline-flex items-center gap-2 rounded-2xl border border-accent/60 px-4 py-2 hover:drop-shadow-[0_0_8px_rgba(255,143,163,0.6)] transition"
             href="mailto:damienjkulash@gmail.com">
            damienjkulash@gmail.com
          </a>
          <a
            className="inline-flex items-center gap-2 rounded-2xl border border-accent/60 px-4 py-2 hover:drop-shadow-[0_0_8px_rgba(255,143,163,0.6)] transition"
            href={ResumePDF}
            target="_blank"
            rel="noreferrer"
        >
            Resume
          </a>
          <a className="inline-flex items-center gap-2 rounded-2xl border border-accent/60 px-4 py-2 hover:drop-shadow-[0_0_8px_rgba(255,143,163,0.6)] transition"
             href="https://github.com/DevDamienKulash" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="inline-flex items-center gap-2 rounded-2xl border border-accent/60 px-4 py-2 hover:drop-shadow-[0_0_8px_rgba(255,143,163,0.6)] transition"
             href="www.linkedin.com/in/damien-kulash-833636237" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className="inline-flex items-center gap-2 rounded-2xl border border-accent/60 px-4 py-2 hover:drop-shadow-[0_0_8px_rgba(255,143,163,0.6)] transition"
             href="https://profile.indeed.com/?hl=en_US&co=US&from=gnav-jobseeker-profile--profile-one-frontend" target="_blank" rel="noreferrer">
            Indeed
          </a>
        </motion.div>
      </div>
    </section>
  );
}
