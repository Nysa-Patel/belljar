import { useRef } from "react";
import { useScroll, useTransform, useSpring } from "framer-motion";

/**
 * Drives the home-page hero: as the visitor scrolls through the tall
 * hero section (ref'd below), the jar lifts and the page's fog clears.
 * `progress` is a smoothed 0->1 MotionValue other elements can read.
 */
export function useHeroJarScroll() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.5 });

  const lift = useTransform(progress, [0, 1], [0, -260]);
  const fog = useTransform(progress, [0, 1], [0.5, 0]);
  const blur = useTransform(progress, [0, 1], [4, 0]);
  const saturate = useTransform(progress, [0, 1], [0.7, 1]);

  return { ref, lift, fog, blur, saturate, progress };
}
