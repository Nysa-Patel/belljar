import { motion, useReducedMotion } from "framer-motion";

/**
 * Wraps a block so it fades and rises into place the first time it enters
 * the viewport. Purely a presentation layer — renders its children as-is
 * (no extra text) and does nothing under prefers-reduced-motion.
 */
export default function Reveal({ children, as: Component = "div", delay = 0, className, ...rest }) {
  const reduced = useReducedMotion();

  if (reduced) {
    const Plain = Component;
    return (
      <Plain className={className} {...rest}>
        {children}
      </Plain>
    );
  }

  const MotionComponent = motion[Component] || motion.div;

  return (
    <MotionComponent
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
      {...rest}
    >
      {children}
    </MotionComponent>
  );
}
