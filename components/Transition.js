//framer motion
import { motion } from "framer-motion";

// Sequence on every route change:
//   1. three translucent glass sheets sweep left -> right over the opaque cover
//   2. the opaque panels wipe right -> left to reveal the page
// Translate-only, so everything stays on the compositor.
const sheetVariants = {
  initial: { x: "-100%" },
  animate: { x: "100%" },
  exit: { x: ["-100%", "100%"] },
};

const panelVariants = {
  initial: { x: "0%" },
  animate: { x: "-100%" },
  exit: { x: ["0%", "-100%"] },
};

// ponytail: tinted sheets, no backdrop-filter - three full-screen blurs in motion would drop frames
// Soft light bands (feathered gradient, no hard edges) so the sweep reads as a glow, not a slab.
const sheets = [
  { tint: "via-white/[0.14]", delay: 0 },
  { tint: "via-white/[0.09]", delay: 0.1 },
  { tint: "via-white/[0.05]", delay: 0.2 },
];

const panels = [
  { color: "bg-[#2e2257]", z: "z-30", delay: 0.6 },
  { color: "bg-[#3b2d71]", z: "z-20", delay: 0.75 },
  { color: "bg-[#4b3792]", z: "z-10", delay: 0.9 },
];

const Transition = () => {
  return (
    <>
      {sheets.map(({ tint, delay }) => (
        <motion.div
          key={tint}
          className={`fixed inset-0 w-screen h-screen z-40 bg-gradient-to-r from-transparent ${tint} to-transparent will-change-transform`}
          variants={sheetVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ delay, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        />
      ))}
      {panels.map(({ color, z, delay }) => (
        <motion.div
          key={color}
          className={`fixed inset-0 w-screen h-screen ${z} ${color} will-change-transform`}
          variants={panelVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ delay, duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
        />
      ))}
    </>
  );
};

export default Transition;
