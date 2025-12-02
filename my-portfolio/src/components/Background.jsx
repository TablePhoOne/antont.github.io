import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../styles/background.css";

export default function Background() {
  const blob1 = useRef(null);
  const blob2 = useRef(null);

  useEffect(() => {
    gsap.to(blob1.current, {
      x: 200,
      y: -150,
      duration: 10,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
    gsap.to(blob2.current, {
      x: -200,
      y: 150,
      duration: 12,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <div className="bg-wrapper">
      <div ref={blob1} className="blob purple-blob"></div>
      <div ref={blob2} className="blob blue-blob"></div>
    </div>
  );
}
