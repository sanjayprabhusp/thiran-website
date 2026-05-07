import { motion } from "motion/react";
import { Mail, MapPin, Linkedin, Instagram, ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-contact-blur py-24 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Get In Touch</h1>
              <p className="text-white/70 text-lg mb-10 leading-relaxed font-sans">
                Have a project in mind? Let's discuss how we can help bring your vision to life.
              </p>

              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-brand-800/20 text-brand-800">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1 text-lg">Location</h3>
                    <p className="text-white/60">CFW3+WVR, Kullampalayam,<br/>Gobichettipalayam, Tamil Nadu 638476</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-brand-800/20 text-brand-800">
                     <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1 text-lg">Email</h3>
                    <a href="mailto:info@thiran360ai.com" className="text-white/60 hover:text-brand-800 transition-colors">info@thiran360ai.com</a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-white font-bold text-lg mb-4">Follow Us</h3>
              <p className="text-white/60 mb-4 text-sm">Stay connected with us for updates and opportunities.</p>
              <div className="flex items-center gap-4">
                <a href="https://www.instagram.com/thiran_360_ai?igsh=MWFmZGN6d3dmbmM0NQ==" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-brand-800 hover:text-white transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com/in/manickavasagarg" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-brand-800 hover:text-white transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 bg-black/60 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-3xl"
          >
            <h2 className="text-3xl font-display font-bold text-white mb-6">Send a Message</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-2">Your Name</label>
                  <input type="text" id="name" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-600 transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-2">Email Address</label>
                  <input type="email" id="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-600 transition-colors" placeholder="john@example.com" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-white/70 mb-2">Subject</label>
                <input type="text" id="subject" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-600 transition-colors" placeholder="How can we help?" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-2">Message</label>
                <textarea id="message" rows={5} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-600 transition-colors resize-none" placeholder="Write your message here..."></textarea>
              </div>
              <button className="w-full py-4 bg-brand-600 hover:bg-brand-400 text-white rounded-xl font-bold transition-colors uppercase tracking-wider text-sm flex items-center justify-center gap-2">
                Send Message <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col justify-center max-w-4xl mx-auto"
        >
           <div className="relative p-1 rounded-3xl bg-gradient-to-tr from-brand-600 to-brand-800 w-full">
             <div className="bg-black rounded-[23px] p-8 md:p-12 relative overflow-hidden text-center text-white flex flex-col md:flex-row items-center gap-8 text-left">
                <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                  <span className="text-9xl font-display font-bold">"</span>
                </div>
                
                <div className="md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mb-4 overflow-hidden border-2 border-brand-400 z-10 relative shadow-[0_0_20px_rgba(136,96,208,0.4)]">
                    <img 
  src="https://cdn.phototourl.com/free/2026-05-07-a3204f27-cf74-4771-8a55-11334c7c1606.jpg"
  alt="Maanickavasagar G" 
  className="w-full h-full object-cover"
/>
                  </div>
                  <h2 className="text-2xl font-display font-bold text-white mb-2 z-10 relative">Meet Our CEO</h2>
                  <h3 className="text-brand-200 font-bold text-xl mb-1 z-10 relative">Maanickavasagar G</h3>
                  <p className="text-white/50 text-sm uppercase tracking-widest z-10 relative">Chief Executive Officer & Founder</p>
                </div>

                <div className="md:w-2/3 border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-8 flex items-center justify-center">
                  <p className="text-lg md:text-2xl leading-relaxed italic text-white/90 z-10 relative">
                    "At Thiran, our vision is to empower innovation through intelligence — creating tech that doesn't just work, but inspires."
                  </p>
                </div>
             </div>
           </div>
        </motion.div>

        {/* Info & Details from Image */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6, delay: 0.6 }}
           className="mt-24 pt-16 border-t border-white/10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-8 bg-white rounded-full flex-shrink-0" />
              </div>
              <a href="mailto:info@thiran360ai.com" className="text-3xl md:text-4xl font-display font-medium text-white hover:text-brand-400 transition-colors">
                info@thiran360ai.com
              </a>
            </div>

            <div className="grid grid-cols-2 gap-8 lg:col-span-2 lg:ml-auto">
              <div className="flex flex-col gap-4">
                <h4 className="text-white/60 text-sm font-semibold tracking-wider uppercase mb-2">Products</h4>
                <a href="#" className="text-white hover:text-brand-400 text-sm transition-colors">Capture360</a>
                <a href="#" className="text-white hover:text-brand-400 text-sm transition-colors">Libro360AI</a>
                <a href="#" className="text-white hover:text-brand-400 text-sm transition-colors">Property360</a>
                <a href="#" className="text-white hover:text-brand-400 text-sm transition-colors">Ecom360</a>
                <a href="#" className="text-white hover:text-brand-400 text-sm transition-colors">Thiran Telematics</a>
              </div>

              <div className="flex flex-col gap-4">
                <h4 className="text-white/60 text-sm font-semibold tracking-wider uppercase mb-2">Social</h4>
                <a href="https://linkedin.com/in/manickavasagarg" target="_blank" rel="noreferrer" className="text-white hover:text-brand-400 text-sm transition-colors flex items-center gap-1">LinkedIn <ArrowRight className="w-3 h-3 -rotate-45" /></a>
                <a href="#" className="text-white hover:text-brand-400 text-sm transition-colors flex items-center gap-1">Twitter <ArrowRight className="w-3 h-3 -rotate-45" /></a>
                <a href="#" className="text-white hover:text-brand-400 text-sm transition-colors flex items-center gap-1">Facebook <ArrowRight className="w-3 h-3 -rotate-45" /></a>
              </div>
            </div>
          </div>

          <div className="mt-24 flex items-end justify-between">
            <div className="text-brand-400 font-display font-extrabold tracking-tighter text-6xl md:text-[8rem] leading-none mb-[-1rem]">
              Thiran360<sup className="text-2xl md:text-4xl">®</sup>
            </div>
            <div className="flex flex-col">
              <svg width="60" height="70" viewBox="0 0 60 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-brand-200">
                <path d="M30 0L60 17.32V51.96L30 69.28L0 51.96V17.32L30 0Z" fill="currentColor"/>
                <path d="M30 15L45 23.66V40.98L30 49.64L15 40.98V23.66L30 15Z" fill="#050505"/>
                <circle cx="55" cy="5" r="5" fill="currentColor"/>
              </svg>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
