import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import React, { useCallback } from "react";

const options = {
  fullScreen: { enable: false },
  background: { color: { value: "" } },
  fpsLimit: 60,
  interactivity: {
    events: {
      onHover: { enable: true, mode: "repulse" },
      resize: true,
    },
    modes: {
      repulse: { distance: 200, duration: 0.4 },
    },
  },
  particles: {
    color: { value: "#e68e2e" },
    links: {
      color: "#f5d393",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: { default: "bounce" },
      random: false,
      speed: 1,
      straight: false,
    },
    number: {
      density: { enable: true, area: 800 },
      value: 50,
    },
    opacity: { value: 0.5 },
    shape: { type: "circle" },
    size: { value: { min: 1, max: 5 } },
  },
  detectRetina: true,
};

const ParticlesContainer = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      className="absolute inset-0 w-full h-full translate-z-0"
      id="tsParticles"
      init={particlesInit}
      options={options}
    />
  );
};

export default ParticlesContainer;
