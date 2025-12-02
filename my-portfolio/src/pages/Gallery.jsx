import { motion } from "framer-motion";
import TiltCard from "../components/TiltCard";
import "../styles/sections.css";

export default function Gallery() {
  return (
    <motion.section
      className="page-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="title neon-text">Gallery</h1>

      <div className="gallery-grid">
        <TiltCard><div className="placeholder-card">Image 1</div></TiltCard>
        <TiltCard><div className="placeholder-card">Image 2</div></TiltCard>
        <TiltCard><div className="placeholder-card">Image 3</div></TiltCard>
      </div>
    </motion.section>
  );
}
