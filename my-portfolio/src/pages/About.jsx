import { motion } from "framer-motion";
import TiltCard from "../components/TiltCard";
import "../styles/sections.css";

export default function About() {
  return (
    <motion.section
      className="page-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="title neon-text">About Me</h1>

      <TiltCard>
        <p className="body-text">
          I’m a developer obsessed with animations, neon UI, and immersive visual
          design. This portfolio now includes particles, 3D tilt cards, glowing
          backgrounds, and animated blobs — all built in React.
        </p>
      </TiltCard>
    </motion.section>
  );
}
