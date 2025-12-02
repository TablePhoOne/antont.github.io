import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/navbar.css";

export default function Navbar() {
  return (
    <motion.nav
      className="nav-container"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <ul className="nav-links">
        {[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
          { name: "Gallery", path: "/gallery" },
          { name: "Resume", path: "/resume" },
        ].map((link) => (
          <motion.li key={link.name} whileHover={{ scale: 1.14 }}>
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                isActive ? "nav-button active" : "nav-button"
              }
            >
              {link.name}
            </NavLink>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
}
