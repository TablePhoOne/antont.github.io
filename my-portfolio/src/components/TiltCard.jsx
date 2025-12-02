import { motion } from "framer-motion";
import { useState } from "react";
import "../styles/tilt.css";

export default function TiltCard({ children }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const tilt = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 20;
    const y = -(e.clientY - rect.top - rect.height / 2) / 20;
    setPos({ x, y });
  };

  return (
    <motion.div
      className="tilt-card"
      onMouseMove={tilt}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={{ rotateX: pos.y, rotateY: pos.x }}
      transition={{ type: "spring", stiffness: 120, damping: 10 }}
    >
      {children}
    </motion.div>
  );
}
