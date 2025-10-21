import { motion } from "framer-motion";

export default function ScrollReveal({ as: Tag = "div", children, delay = 0, y = 12, className = "", ...rest }) {
  return (
    <motion.div
      as={Tag}
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.35, delay }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
