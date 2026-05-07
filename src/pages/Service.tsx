import { motion } from "motion/react";
import { MonitorSmartphone, Smartphone, Cpu, Server, Megaphone } from "lucide-react";

const services = [
  {
    title: "Web Development",
    description: "Responsive and scalable web applications built using modern frameworks like React, Next.js, and Tailwind CSS.",
    icon: MonitorSmartphone,
  },
  {
    title: "Android and IOS Development",
    description: "Cross-platform Android and iOS apps built with Flutter and React Native for seamless mobile experiences.",
    icon: Smartphone,
  },
  {
    title: "IoT Solutions",
    description: "Smart systems including GPS tracking, home automation, and industrial control for connected operations.",
    icon: Cpu,
  },
  {
    title: "Backend & DevOps",
    description: "Comprehensive backend development with RESTful APIs, database integration, Docker, Kubernetes, and CI/CD pipelines for seamless deployment and scalability.",
    icon: Server,
  },
  {
    title: "Digital Marketing",
    description: "Data-driven digital marketing strategies including SEO, SEM, and social media campaigns for growth.",
    icon: Megaphone,
  }
];

export default function Service() {
  return (
    <div className="min-h-screen bg-service-blur py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">Our Services</h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto lg:mx-0 font-sans">
              We offer comprehensive technology solutions tailored to your business needs
            </p>
          </div>
          <motion.div 
            className="w-full lg:w-1/2 h-64 md:h-80 rounded-3xl overflow-hidden relative shadow-[0_0_40px_rgba(136,96,208,0.3)] border border-white/10"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-0 bg-brand-900/40 z-10 mix-blend-overlay"></div>
            <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" alt="Services and Servers" className="w-full h-full object-cover" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                className="relative p-8 rounded-3xl bg-black/40 border border-white/10 backdrop-blur-md overflow-hidden group"
                animate={{
                   scale: [1, 1.02, 1],
                   boxShadow: [
                     "0px 0px 0px rgba(136, 96, 208, 0)",
                     "0px 0px 20px rgba(136, 96, 208, 0.4)",
                     "0px 0px 0px rgba(136, 96, 208, 0)"
                   ]
                }}
                transition={{
                   duration: 4,
                   repeat: Infinity,
                   ease: "easeInOut",
                   delay: index * 0.4 // stagger the breath effect
                }}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-600 to-brand-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="mb-6 inline-flex p-4 rounded-full bg-brand-800/20 text-brand-400">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-display font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-white/70 leading-relaxed text-sm">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
