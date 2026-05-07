import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState, useRef } from "react";

export default function EntryAnimation({ onComplete }: { onComplete: () => void }) {
  const [stage, setStage] = useState(0); 
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Suppress autoplay/load errors to keep console clean
      });
    }

    // Show video and name for 4.5 seconds, then fade out
    const timer1 = setTimeout(() => setStage(1), 4500); 
    const timer2 = setTimeout(onComplete, 5500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {stage === 0 && (
        <motion.div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Responsive video background to fit phone and tablet perfectly */}
          <video 
            ref={videoRef}
            muted 
            playsInline
            loop
            className="absolute inset-0 w-full h-full object-cover opacity-70 pointer-events-none"
            poster="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000"
            // Using a reliable AI/Technology video
            src="https://assets.mixkit.co/videos/preview/mixkit-technology-and-numbers-loop-20164-large.mp4" 
          />
          
          <motion.div 
             className="absolute flex flex-col items-center gap-6 z-10 p-4 w-full text-center"
             initial={{ scale: 0.9, opacity: 0 }}
             animate={{ scale: 1, opacity: 1 }}
             transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
           >
             <div className="flex flex-col items-center gap-2">
               <div className="flex items-center justify-center flex-wrap font-display font-extrabold tracking-tighter text-6xl md:text-8xl drop-shadow-[0_0_30px_rgba(255,255,255,0.4)]">
                 <span className="text-white">THiR</span>
                 <span className="text-brand-200">A</span>
                 <span className="text-white">N</span>
                 <span className="text-brand-400">360</span>
                 <span className="text-brand-800">A</span>
                 <span className="text-white">i</span>
               </div>
               <motion.p 
                 className="text-brand-200 uppercase tracking-[0.2em] md:tracking-[0.4em] font-medium mt-4 text-xs sm:text-sm md:text-base drop-shadow-md"
                 initial={{ opacity: 0, y: 10 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 1.5 }}
               >
                 Innovate With Intelligence
               </motion.p>
             </div>
           </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
