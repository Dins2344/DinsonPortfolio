//framer motion
import { motion } from "framer-motion";

// translate-only wipe: panel starts covering the screen and slides off to the left
const transitionVariants = {
  initial: { x: "0%" },
  animate: { x: "-100%" },
  exit: { x: ["0%", "-100%"] },
};

const panels = [
  { color: "bg-[#2e2257]", z: "z-30", delay: 0.2 },
  { color: "bg-[#3b2d71]", z: "z-20", delay: 0.4 },
  { color: "bg-[#4b3792]", z: "z-10", delay: 0.6 },
];

const Transition = () => {
  return (
    <>
      {panels.map(({ color, z, delay }) => (
        <motion.div
          key={color}
          className={`fixed inset-0 w-screen h-screen ${z} ${color} will-change-transform`}
          variants={transitionVariants}
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
