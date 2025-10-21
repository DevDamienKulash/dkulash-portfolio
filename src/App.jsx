import { MotionConfig } from "framer-motion";
import Cursor from "./components/Cursor.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
     <MotionConfig reducedMotion="user" transition={{ duration: 0.35, ease: "easeOut" }}>
      <Cursor />
    <main className="min-h-screen bg-base text-text">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
    </MotionConfig>
  );
}

