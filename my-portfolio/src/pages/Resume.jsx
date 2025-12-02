import { motion } from "framer-motion";
import "../styles/sections.css";

export default function Resume() {
  return (
    <motion.section
      className="page-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="title neon-text">Resume</h1>
      <p className="body-text">Resume download and preview coming soon.</p>
    </motion.section>
  );
}
