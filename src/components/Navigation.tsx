import { Link, useLocation } from "react-router-dom";
import { cn } from "../lib/utils";
import { Bot, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const links = [
  { href: "/", label: "Home" },
  { href: "/service", label: "Services" },
  { href: "/product", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 w-full z-40 p-4">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-black/40 backdrop-blur-xl border border-brand-800/40 rounded-full shadow-[0_0_20px_rgba(136,96,208,0.5)] relative before:absolute before:inset-0 before:-z-10 before:rounded-full before:bg-gradient-to-r before:from-brand-600/30 before:via-transparent before:to-brand-800/30 before:blur-xl">
        <div className="flex items-center justify-between h-16 relative z-10">
          <Link to="/" className="flex items-center gap-3 group">
            <motion.div
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              className="text-brand-800 hover:text-brand-600"
            >
              <Bot className="w-8 h-8 drop-shadow-[0_0_15px_rgba(136,96,208,0.6)]" />
            </motion.div>
            <div className="flex items-center font-display font-extrabold tracking-tighter text-3xl transition-transform group-hover:scale-105">
              <span className="text-brand-600">THiR</span>
              <span className="text-brand-400">A</span>
              <span className="text-brand-600">N</span>
              <span className="text-brand-800">360</span>
              <span className="text-brand-200">A</span>
              <span className="text-brand-800">i</span>
            </div>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "text-sm uppercase tracking-wider font-semibold transition-colors",
                  location.pathname === link.href ? "text-brand-800" : "text-white/70 hover:text-white"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact" className="ml-4 px-6 py-2 bg-brand-800 text-white font-bold uppercase tracking-wide text-sm rounded-full hover:bg-brand-600 transition-colors">
              Get in touch
            </Link>
          </div>

          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="md:hidden absolute top-24 left-4 right-4 bg-black/80 backdrop-blur-xl border border-brand-800/40 rounded-2xl p-4 shadow-[0_0_30px_rgba(136,96,208,0.6)] z-30"
          >
            <div className="flex flex-col gap-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-lg font-semibold transition-colors px-4 py-2 rounded-lg hover:bg-white/5",
                    location.pathname === link.href ? "text-brand-400 bg-brand-800/20" : "text-white/70 hover:text-white"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
