import { motion } from "framer-motion";
import "../styles/sections.css";

export default function Home() {
  return (
    <motion.section
      className="page-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1
        className="title neon-text"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        Welcome to My Portfolio
      </motion.h1>

      <p className="subtitle">
        A sleek, modern experience with animations and neon edge UI.
      </p>
    </motion.section>
  );
}
