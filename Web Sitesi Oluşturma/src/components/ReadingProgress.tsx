import { useEffect, useState } from "react";
import { motion } from "motion/react";

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      const trackLength = documentHeight - windowHeight;
      const percentScrolled = (scrollTop / trackLength) * 100;
      
      setProgress(Math.min(percentScrolled, 100));
    };

    window.addEventListener("scroll", updateProgress);
    updateProgress();

    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <motion.div
      className="fixed top-16 left-0 right-0 h-1 bg-primary/20 z-40"
      initial={{ scaleX: 0 }}
      style={{ transformOrigin: "left" }}
    >
      <motion.div
        className="h-full bg-primary"
        style={{
          scaleX: progress / 100,
          transformOrigin: "left",
        }}
      />
    </motion.div>
  );
}
