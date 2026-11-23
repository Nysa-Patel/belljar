import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";

export default function ScrollProgress() {
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const smoothed = useSpring(scrollYProgress, { stiffness: 200, damping: 40, mass: 0.2 });

  if (reduced) return null;

  return (
    <motion.div
      className="scroll-progress-bar"
      style={{ scaleX: smoothed }}
      aria-hidden="true"
    />
  );
}
