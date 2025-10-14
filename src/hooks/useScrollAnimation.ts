import { useInView } from "motion/react";
import { useRef } from "react";

export function useScrollAnimation(options = {}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    margin: "-100px",
    ...options 
  });

  return { ref, isInView };
}
