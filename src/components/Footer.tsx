import { Link } from "react-router-dom";
import { Bot, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <Link to="/" className="flex items-center gap-2 mb-4 group">
            <div className="flex items-center font-display font-extrabold tracking-tighter text-2xl transition-transform group-hover:scale-105">
              <span className="text-blue-500">THiR</span>
              <span className="text-sky-400">A</span>
              <span className="text-blue-500">N</span>
              <span className="text-violet-400">360</span>
              <span className="text-sky-300">A</span>
              <span className="text-violet-500">i</span>
            </div>
          </Link>
          <p className="text-white/60 mb-6 max-w-sm">
            A Global Software Powerhouse. Crafting innovative technology solutions that transform businesses and elevate user experiences.
          </p>
          <div className="flex flex-col gap-2 text-white/60 text-sm">
            <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-brand-800" /> CFW3+WVR, Kullampalayam, Gobichettipalayam, Tamil Nadu 638476</span>
            <span className="flex items-center gap-2"><Mail className="w-4 h-4 text-brand-800" /> info@thiran360ai.com</span>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Socials</h4>
          <ul className="flex flex-col gap-2 text-white/70">
             <li><a href="https://www.instagram.com/thiran_360_ai?igsh=MWFmZGN6d3dmbmM0NQ==" target="_blank" rel="noreferrer" className="hover:text-brand-400 transition-colors">Instagram</a></li>
             <li><a href="https://linkedin.com/in/manickavasagarg" target="_blank" rel="noreferrer" className="hover:text-brand-400 transition-colors">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/10 text-center text-white/40 text-sm">
        &copy; {new Date().getFullYear()} Thiran360AI. All rights reserved.
      </div>
    </footer>
  );
}
