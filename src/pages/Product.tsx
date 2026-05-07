import { motion } from "motion/react";
import { Cpu, BriefcaseBusiness, Globe, Smartphone } from "lucide-react";

const products = [
  {
    title: "IOT - Smart Monitoring & Automation",
    icon: Cpu,
    items: [
      {
        subtitle: "Home and Industry Automation",
        desc: "Control lights, manage EB usage, and automate door locks."
      },
      {
         subtitle: "Smart Monitoring System",
         desc: "Combines real-time energy consumption tracking with secure door lock access for both home and industrial use."
      },
      {
         subtitle: "GPS Tracking",
         desc: "Location-based automation and monitoring for enhanced control."
      }
    ]
  },
  {
    title: "Corporate & Business Automation",
    icon: BriefcaseBusiness,
    items: [
      {
         subtitle: "Unified Ecosystem",
         desc: "Our Corporate & Business Automation solutions streamline operations across departments, ensuring seamless coordination and efficiency. The platform centralizes HR functions such as employee onboarding, attendance, leave, and performance tracking. Task and project management features enable real-time collaboration, deadlines monitoring, and workflow automation. Financial tools allow for accurate budgeting, invoicing, and expense tracking, while integrated modules for bookings and order management improve customer experience and reduce administrative load. This unified ecosystem fosters productivity, transparency, and smarter decision-making for modern businesses."
      }
    ]
  },
  {
    title: "Web Applications",
    icon: Globe,
    items: [
      { subtitle: "Capture360", desc: "Real-time site monitoring, resource tracking, and AI-driven insights." },
      { subtitle: "Libro360AI", desc: "Adaptive learning with intelligent recruitment and analytics." },
      { subtitle: "Property360", desc: "Automated digital suite for managing real estate listings, client engagement, and sales operations." }
    ]
  },
  {
    title: "Mobile Applications",
    icon: Smartphone,
    items: [
      { subtitle: "Ecom360", desc: "Real-time order tracking, route optimization, and delivery automation." },
      { subtitle: "Thiran Telematics", desc: "Fleet management with GPS, fuel efficiency, and maintenance alerts." },
      { subtitle: "Kovais", desc: "Automating customer management, order tracking, and service coordination." }
    ]
  }
];

export default function Product() {
  return (
    <div className="min-h-screen bg-product-blur py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
          <motion.div 
            className="w-full lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
             <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">Our Products</h1>
             <p className="text-xl text-white/80 max-w-2xl mx-auto lg:mx-0 font-sans">
               See how we’re reshaping industries with automation, AI, and innovation.
             </p>
          </motion.div>
          <motion.div 
            className="w-full lg:w-1/2 h-64 md:h-80 rounded-3xl overflow-hidden relative shadow-[0_0_40px_rgba(136,96,208,0.3)] border border-white/10"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-0 bg-brand-900/40 z-10 mix-blend-overlay"></div>
            <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop" alt="Technology Circuit" className="w-full h-full object-cover" />
          </motion.div>
        </div>

        <div className="space-y-16">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
               <motion.div 
                 key={index} 
                 className="relative p-1 md:p-px rounded-3xl bg-gradient-to-br from-white/20 to-white/0 overflow-hidden"
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true, margin: "-100px" }}
                 transition={{ duration: 0.6 }}
               >
                 <div className="bg-black/60 backdrop-blur-xl rounded-[23px] p-8 md:p-12 border border-white/5 h-full">
                   <div className="flex items-center gap-4 mb-8 border-b border-white/10 pb-6">
                     <div className="p-4 bg-brand-800/20 text-brand-800 rounded-2xl">
                       <Icon className="w-10 h-10" />
                     </div>
                     <h2 className="text-3xl md:text-4xl font-display font-bold text-white">{product.title}</h2>
                   </div>
                   
                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {product.items.map((item, idx) => (
                        <div key={idx} className={product.items.length === 1 ? "col-span-full md:col-span-full lg:col-span-full text-lg leading-relaxed text-white/70" : "flex flex-col gap-2"}>
                          <h3 className="text-xl font-bold text-brand-200 font-sans">{item.subtitle}</h3>
                          <p className="text-white/60 leading-relaxed text-sm">{item.desc}</p>
                        </div>
                      ))}
                   </div>
                 </div>
               </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
