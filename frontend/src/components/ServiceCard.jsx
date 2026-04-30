// src/components/ServiceCard.jsx
import { motion } from "framer-motion";
import { Eye, Zap, Activity, Baby, Scan, Scissors, Accessibility, ShieldCheck } from "lucide-react";

const icons = {
  phaco: Eye,
  glaucoma: Activity,
  lasik: Zap,
  oculoplastic: Scissors,
  retina: Scan,
  pediatric: Baby,
  "low-vision": Accessibility,
  prosthesis: ShieldCheck,
};

export default function ServiceCard({ service }) {
  const Icon = icons[service.icon] || Eye;

  return (
    <motion.div
      className="bg-white/20 backdrop-blur-2xl rounded-[2.5rem] shadow-2xl border border-white/30 max-w-lg w-full text-center group h-full flex flex-col overflow-hidden"
      whileHover={{ y: -10, backgroundColor: "rgba(255, 255, 255, 0.3)" }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* Service Image Section */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={service.image} 
          alt={service.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          onError={(e) => {
            e.target.src = "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800"; // Medical placeholder if image missing
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* Content Section */}
      <div className="p-8 flex-grow flex flex-col justify-center">
        <h2 className="text-2xl font-bold text-slate-800 mb-4 tracking-tight leading-tight">

          {service.name}
        </h2>
        <p className="text-base text-slate-600 leading-relaxed">
          {service.description}
        </p>
      </div>
    </motion.div>
  );
}
