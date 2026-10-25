import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";

export function SteelBackdrop() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const progress = useSpring(scrollYProgress, { stiffness: 65, damping: 28 });
  const textureY = useTransform(progress, [0, 1], [-12, 12]);
  const lightY = useTransform(progress, [0, 1], [24, -24]);
  const lightX = useTransform(progress, [0, 1], [-18, 18]);
  return (
    <div ref={ref} aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="steel absolute inset-0" />
      <motion.div className="steel-brush absolute -inset-8" style={reduced ? undefined : { y: textureY }} />
      <motion.div className="steel-light absolute -inset-10" style={reduced ? undefined : { y: lightY, x: lightX }} />
      <div className="steel-sheen absolute inset-0 overflow-hidden" />
      <div className="steel-vig absolute inset-0" />
    </div>
  );
}