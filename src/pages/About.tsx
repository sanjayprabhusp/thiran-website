import { motion } from "motion/react";
import { CheckCircle, Cloud, Server, Award } from "lucide-react";

export default function About() {
  const stats = [
    { label: "Projects Completed", value: "60+" },
    { label: "Tie-ups", value: "40+" },
    { label: "Team Members", value: "48+" },
    { label: "Years Experience", value: "5+" },
  ];

  const tieUps = [
    { provider: "AWS", level: "Advanced Technology Partner", icon: Cloud },
    { provider: "Microsoft Azure", level: "Cloud Solution Provider", icon: Server },
    { provider: "Oracle", level: "Gold Level Partner", icon: Award },
  ];

  return (
    <div className="min-h-screen bg-about-blur py-24">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <motion.h1 
            className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            A Global Software Powerhouse Where Innovation Meets Excellence
          </motion.h1>
        </div>

        <motion.div 
          className="w-full h-64 md:h-96 rounded-3xl overflow-hidden mb-24 border border-white/10 shadow-[0_0_40px_rgba(136,96,208,0.3)] relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-brand-900/40 z-10 mix-blend-overlay"></div>
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" alt="Our Team" className="w-full h-full object-cover" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-3xl font-display text-brand-800 mb-4 font-bold">Our Story</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">About Thiran</h3>
                  <p className="text-white/60 leading-relaxed">
                    The name ‘Thiran’ symbolizes talent and ability—qualities that define our team and shape the way we approach every project with creativity and precision.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">360 Approach</h3>
                  <p className="text-white/60 leading-relaxed">
                    ‘360’ represents our all-encompassing approach to development—one that considers every angle and delivers holistic solutions.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Artificial Intelligence</h3>
                  <p className="text-white/60 leading-relaxed">
                    ‘AI’ reflects our commitment to harnessing artificial intelligence to create forward-thinking, transformative experiences.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12 bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10"
          >
            <div>
              <h2 className="text-3xl font-display text-brand-800 mb-6 font-bold">Our Values</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Our Vision</h3>
                  <p className="text-white/60 leading-relaxed">
                    To become a global leader in intelligent digital transformation—empowering industries through AI, design, and innovation.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Our Mission</h3>
                  <p className="text-white/60 leading-relaxed">
                    To craft future-ready experiences by blending creativity, technology, and strategy—driven by purpose, fueled by passion.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Innovation</h3>
                  <p className="text-white/60 leading-relaxed">
                    We constantly push boundaries, harnessing emerging technologies to shape intelligent solutions.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mb-24">
          <h2 className="text-center text-3xl font-display font-bold text-white mb-12">By The Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center p-6 border border-white/10 rounded-2xl bg-white/[0.02]"
              >
                <div className="text-4xl md:text-5xl font-display font-extrabold text-brand-200 mb-2">{stat.value}</div>
                <div className="text-sm uppercase tracking-widest text-white/60 font-semibold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-center text-3xl font-display font-bold text-white mb-12">Our Tie-ups</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tieUps.map((partner, idx) => {
              const Icon = partner.icon;
              return (
                <div key={idx} className="flex items-center gap-6 p-6 rounded-2xl border border-white/10 bg-gradient-to-r from-white/5 to-transparent">
                  <div className="p-4 rounded-xl bg-brand-800/20 text-brand-800">
                    <Icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{partner.provider}</h3>
                    <p className="text-sm text-white/50">{partner.level}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
      </div>
    </div>
  );
}
