import { motion, useMotionTemplate } from "framer-motion";

/**
 * Fixed overlay whose blur/saturation track the hero scroll progress.
 * Only mounted on the home page while the hero is in view.
 */
export default function FogOverlay({ blur, saturate }) {
  const filter = useMotionTemplate`blur(${blur}px) saturate(${saturate})`;
  return (
    <motion.div
      className="fog-overlay"
      style={{ backdropFilter: filter, WebkitBackdropFilter: filter }}
      aria-hidden="true"
    />
  );
}
