import { motion } from "motion/react";

export default function AmbientBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-[#050505]">
      {/* Morphing Blob 1 */}
      <motion.div
        className="absolute w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-brand-600/20 blur-[80px]"
        animate={{
          x: ["0%", "20%", "-10%", "0%"],
          y: ["0%", "-15%", "15%", "0%"],
          scale: [1, 1.2, 0.9, 1],
          borderRadius: ["40% 60% 70% 30%", "30% 70% 40% 60%", "60% 40% 30% 70%", "40% 60% 70% 30%"],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        style={{ top: '-10%', left: '-10%' }}
      />
      {/* Morphing Blob 2 */}
      <motion.div
        className="absolute w-[70vw] h-[70vw] max-w-[900px] max-h-[900px] bg-brand-800/15 blur-[80px]"
        animate={{
          x: ["0%", "-20%", "20%", "0%"],
          y: ["0%", "15%", "-15%", "0%"],
          scale: [1, 0.9, 1.1, 1],
          borderRadius: ["60% 40% 30% 70%", "70% 30% 60% 40%", "40% 60% 70% 30%", "60% 40% 30% 70%"],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        style={{ bottom: '-20%', right: '-20%' }}
      />
      {/* Morphing Blob 3 */}
      <motion.div
        className="absolute w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-brand-200/20 blur-[70px]"
        animate={{
          x: ["0%", "30%", "-20%", "0%"],
          y: ["0%", "20%", "-30%", "0%"],
          scale: [1, 1.3, 0.9, 1],
          borderRadius: ["30% 70% 70% 30%", "70% 30% 30% 70%", "50% 50% 60% 40%", "30% 70% 70% 30%"],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        style={{ top: '20%', left: '20%' }}
      />
    </div>
  );
}
