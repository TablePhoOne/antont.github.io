import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticleLayer() {
  const init = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={init}
      options={{
        fullScreen: { enable: false },
        background: { color: "transparent" },
        particles: {
          number: { value: 30 },
          size: { value: 2 },
          move: { speed: 0.6 },
          opacity: { value: 0.4 },
          color: { value: "#a97aff" },
          links: {
            enable: true,
            color: "#8b54ff",
            opacity: 0.4,
            distance: 100,
          },
        },
      }}
      style={{
        position: "absolute",
        height: "100%",
        width: "100%",
        zIndex: -1,
        top: 0,
      }}
    />
  );
}
