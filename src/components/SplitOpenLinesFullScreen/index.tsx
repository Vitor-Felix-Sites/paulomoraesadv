import { motion } from "framer-motion";
import { useState } from "react";

export default function SplitOpenLinesFullScreen() {
  const [hidden, setHidden] = useState(false);

  if (hidden) return null;

  return (
    <div className="fixed w-full h-screen z-[1000] overflow-hidden pointer-events-none">
      {/* Parte de cima (amarela) */}
      <motion.div
        className="fixed top-0 left-0 right-0 v-bg-highlight"
        initial={{ height: "50vh" }}
        animate={{ height: "0vh" }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.3 }}
      />

      <motion.div
        className="fixed bottom-0 left-0 right-0 v-bg-highlight"
        initial={{ height: "50vh" }}
        animate={{ height: "0vh" }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.3 }}
        onAnimationComplete={() => setHidden(true)}
      />

      <motion.div
        className="fixed left-0 right-0 h-1  top-1/2"
        initial={{ y: 0 }}
        animate={{ y: "-50vh" }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.3 }}
      />

      <motion.div
        className="fixed left-0 right-0 h-1  top-1/2"
        initial={{ y: 0 }}
        animate={{ y: "50vh" }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.3 }}
      />
    </div>
  );
}
