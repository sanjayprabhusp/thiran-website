import { motion } from "motion/react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-home-blur">
      {/* Full screen background image with slow zoom effect */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
      >
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop" 
          alt="Technology Network" 
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80" />
      </motion.div>

      {/* Tech Grid Background Animation */}
      <div className="absolute inset-0 pointer-events-none opacity-20 z-0 text-brand-400">
        <motion.div
           className="w-full h-full"
           style={{
             backgroundImage: "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
             backgroundSize: "4rem 4rem"
           }}
           animate={{
              backgroundPosition: ["0px 0px", "64px 64px"]
           }}
           transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col items-center justify-center pt-20 pb-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-7xl font-display font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-brand-200 to-white mb-6 drop-shadow-lg leading-tight">
            We Build Digital <br/>
            <span className="italic font-sans font-light text-brand-200">Experiences</span>
          </h1>
        </motion.div>

        <motion.p 
          className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 font-sans tracking-wide drop-shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Crafting innovative technology solutions that transform businesses and elevate user experiences.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.1 }}
        >
          <Link 
            to="/service" 
            className="inline-flex items-center justify-center px-8 py-4 bg-brand-800 text-white font-bold uppercase tracking-widest text-sm rounded-full transition-all duration-300 hover:bg-brand-600 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_4px_25px_rgba(136,96,208,0.6)] active:scale-95"
          >
            Explore Services
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
