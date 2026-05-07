import { motion } from "motion/react";
import { Bot } from "lucide-react";
import React from "react";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full h-full min-h-screen">
      {/* Robot flying effect over the page */}
      <motion.div
        initial={{ opacity: 0, x: "-30vw", y: "20vh", scale: 0.5, rotate: -45 }}
        animate={{ 
          opacity: [0, 1, 1, 0], 
          x: ["-30vw", "0vw", "10vw", "40vw"], 
          y: ["20vh", "0vh", "-10vh", "-20vh"],
          rotate: [-45, 0, 15, 45],
          scale: [0.5, 1.5, 1.2, 0.5] 
        }}
        exit={{
          opacity: [0, 1, 1, 0], 
          x: ["40vw", "10vw", "0vw", "-30vw"], 
          y: ["-20vh", "-10vh", "0vh", "20vh"],
          rotate: [45, 15, 0, -45],
          scale: [0.5, 1.2, 1.5, 0.5] 
        }}
        transition={{ duration: 0.6, ease: "easeInOut", times: [0, 0.4, 0.7, 1] }}
        className="fixed top-1/2 left-1/2 -ml-12 -mt-12 z-50 pointer-events-none text-brand-800 drop-shadow-[0_0_30px_rgba(136,96,208,1)]"
      >
        <Bot className="w-24 h-24" />
      </motion.div>

      {/* Page sliding in/out */}
      <motion.div
        initial={{ opacity: 0, x: 50, scale: 0.95 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        exit={{ opacity: 0, x: -50, scale: 0.95 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="w-full h-full min-h-screen pt-16"
      >
        {children}
      </motion.div>
    </div>
  );
}
