// src/components/DoctorCard.jsx
import { memo } from "react";
import { motion } from "framer-motion";

const DoctorCard = memo(({ doctor, isHero = false }) => {
  return (
    <motion.div
      className={`glass-card rounded-[3rem] overflow-hidden group ${
        isHero ? "max-w-6xl mx-auto flex flex-col md:flex-row items-center" : "max-w-md w-full text-center flex flex-col h-full"
      }`}
      whileHover={{ y: -5 }}
    >
      {/* Photo Section */}
      <div className={`relative ${isHero ? "md:w-2/5 w-full h-[600px]" : "h-[450px] w-full"} bg-slate-50`}>
        {doctor.photo ? (
          <>
            <img 
              src={doctor.photo} 
              alt={doctor.name}
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
              onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800"; }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-slate-100/50">
            <div className="w-20 h-1 bg-[#0f172a]/10 rounded-full" />
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className={`p-10 ${isHero ? "md:w-3/5 w-full text-left" : "flex-grow flex flex-col items-center justify-center"}`}>
        <h2 className={`${isHero ? "text-5xl" : "text-3xl"} font-bold text-slate-navy mb-2 tracking-tight`}>
          {doctor.name}
        </h2>
        
        {/* Role/Consultant tag - only if present */}
        {doctor.role && (
          <div className="inline-block px-4 py-1 bg-primary/10 text-primary text-[10px] font-black rounded-full mb-4 uppercase tracking-widest border border-primary/20">
            {doctor.role}
          </div>
        )}

        <div className="text-primary font-bold mb-4 uppercase tracking-wider text-sm">
          {doctor.qualifications}
        </div>
        
        {/* Bio - only if present */}
        {doctor.bio && (
          <p className={`${isHero ? "text-lg" : "text-base"} text-slate-600 leading-relaxed whitespace-pre-line`}>
            {doctor.bio}
          </p>
        )}
      </div>
    </motion.div>
  );
});

export default DoctorCard;
