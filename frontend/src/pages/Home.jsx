import EyeScrollBackground from "../components/EyeScrollBackground";
import { motion } from "framer-motion";
import { Eye, Play, Target, Compass, Heart, Star, MapPin } from "lucide-react";

// Reusable Section Wrapper
const TransSection = ({ children, className = "" }) => (
  <motion.section
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.2, ease: "easeOut" }}
    viewport={{ margin: "-10% 0px -10% 0px" }}
    className={`min-h-screen flex items-center justify-center px-6 pt-64 pb-24 bg-transparent !important ${className}`}
  >
    <div className="max-w-7xl mx-auto w-full">
      {children}
    </div>
  </motion.section>
);

// Updated Glass Card with light frosted look
const GlassCard = ({ children, className = "" }) => (
  <div className={`bg-white/30 backdrop-blur-lg p-10 md:p-16 rounded-[3.5rem] shadow-2xl border border-white/20 ${className}`}>
    {children}
  </div>
);

export default function Home() {
  return (
    <div className="relative bg-transparent font-outfit min-h-screen selection:bg-primary selection:text-white">
      {/* 1. THE IMMERSIVE CANVAS BACKGROUND */}
      <EyeScrollBackground />

      {/* 2. THE CONTENT SECTIONS */}
      <div className="relative z-10">

        {/* Section 1: Clearly the Best */}
        <TransSection>
          <div className="text-center max-w-2xl mx-auto">
            <GlassCard className="p-8 md:p-12 !rounded-[2.5rem]">
              <h1 className="text-4xl md:text-6xl font-bold text-[#0f172a] mb-6 tracking-tight">
                Clearly the Best
              </h1>
              <p className="text-base md:text-lg text-[#0f172a] leading-relaxed mb-10">
                At Vimala Eye Hospital, we understand the critical role your eyes play in your life,
                and we're dedicated to helping you protect and preserve your sight. Vimala Eye
                Hospital offers you complete eye care from a team of highly skilled eye care professionals.
              </p>

              <div className="relative inline-block group mb-10">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/40 transition-all duration-700" />
                <div className="relative flex items-center justify-center">
                  <Eye size={120} strokeWidth={0.5} className="text-[#0f172a]/20" />
                  <div className="absolute flex items-center justify-center w-14 h-14 bg-primary rounded-full shadow-2xl shadow-primary/50 group-hover:scale-110 transition-transform">
                    <Play size={20} className="text-white fill-current ml-1" />
                  </div>
                </div>
              </div>

              <div className="text-3xl md:text-4xl font-extrabold text-[#0f172a] tracking-tight">
                12000+ Surgeries Done
              </div>
            </GlassCard>
          </div>
        </TransSection>

        {/* Section 2: Welcome (Restored Original Content) */}
        <TransSection>
          <GlassCard>
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="flex-1 text-left space-y-6">
                <h2 className="text-5xl md:text-6xl font-bold text-[#0f172a] tracking-tight leading-tight">
                  Welcome to <br />
                  <span className="text-primary underline decoration-primary/30 underline-offset-8">
                    Vimala Eye Hospital!
                  </span>
                </h2>

                <div className="space-y-6 text-[#0f172a] text-lg leading-relaxed font-normal">
                  <p>
                    Vimala Eye Hospital is one of the finest eye hospitals in Bhiwandi and Wada, offering the best treatment and care to the patients nearby. It was founded by Dr. Anoop Mishra in 2020. It is a modern hospital offering the best care to patients who have eye problems. The hospital has a wide range of services including cataract surgery, laser eye surgery, eye tests, and much more. The hospital has a state-of-the-art facility with advanced equipment, which makes it the best hospital in Wada.
                  </p>
                  <p>
                    The eye is an important body part that is also sensitive. But still, sometimes you may injure yourself and look for an eye doctor. Therefore for such situations, Eye Clinic is of essential importance. The hospital ensures quality total eye care for all the patients.
                  </p>
                  <p>
                    We have the best doctors in bhiwandi and wada. You won’t find any other eye hospital in bhiwandi whole. We are proud of the quality results we achieved in various surgeries and diagnostic tests.
                  </p>
                  <p>
                    We aim to improve our services and continue to be a leading eye care facility. Vimala Eye Hospital provides comprehensive eye care to everyone using state-of-the-art equipment. Backed by the specialist, doctors are dedicated to enhancing, sustaining, and restoring your Eye Health.
                  </p>
                </div>
              </div>

              <div className="flex-1 w-full relative">
                <div className="aspect-[4/5] rounded-[3rem] overflow-hidden border border-[#0f172a]/20 shadow-2xl relative bg-white/10 backdrop-blur-md mb-6">
                  <iframe
                    title="Vimala Eye Hospital Bhiwandi Location"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    style={{ border: 0, filter: "grayscale(0.2) contrast(1.1)" }}
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15063.498064694402!2d73.0348936!3d19.2878224!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bded94302991%3A0x2c11fa1cfbcd276b!2sVimala%20Eye%20Hospital%20Bhiwandi%20%7C%20Dr.%20Anoop%20Mishra!5e0!3m2!1sen!2sin!4v1777549525781!5m2!1sen!2sin"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>

                <a
                  href="https://maps.app.goo.gl/X7rSZ8nRSpavbLSj7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full py-5 bg-primary text-white font-bold rounded-[2rem] shadow-xl shadow-primary/20 hover:bg-blue-800 hover:scale-[1.02] transition-all duration-300 group"
                >
                  <MapPin className="w-6 h-6 mr-3 group-hover:animate-bounce" />
                  Get Directions on Google Maps
                </a>
              </div>

            </div>
          </GlassCard>
        </TransSection>

        {/* Section 3: Established (Whimsy Refactor) */}
        <TransSection>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-white/30 backdrop-blur-lg shadow-2xl border border-white/20 rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-20 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16 group"
          >
            <div className="flex-1 space-y-6 md:space-y-8">
              <h3 className="text-5xl md:text-8xl font-black text-[#0f172a] leading-tight">
                Est. <br />2020
              </h3>
              <p className="text-lg md:text-2xl text-[#0f172a] leading-relaxed font-medium">
                Vimala Eye Hospital has been a beacon of clarity for the Bhiwandi & Wada communities,
                merging traditional compassion with elite surgical precision.
              </p>
            </div>
            <div className="flex-1 relative w-full text-center">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full group-hover:bg-primary/40 transition-all duration-700" />
              <img
                src="/logo.png"
                alt="Hospital Emblem"
                className="relative z-10 w-48 md:w-full max-w-md mx-auto transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </motion.div>
        </TransSection>

        {/* Section 4: Mission, Vision, Values (Whimsy Refactor) */}
        <TransSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: "Mission", content: "To provide world-class, affordable eye care services to every individual, leveraging the latest clinical advancements.", icon: <Target size={32} />, gradient: "bg-white/30 backdrop-blur-lg border border-white/20", text: "text-slate-navy" },
              { title: "Vision", content: "To be the region's leading center for ophthalmological excellence, recognized for setting the gold standard.", icon: <Compass size={32} />, gradient: "bg-white/30 backdrop-blur-lg border border-white/20", text: "text-slate-navy" },
              { title: "Values", content: "Commitment to excellence, ethical practice, and continuous innovation using cutting-edge technology.", icon: <Heart size={32} />, gradient: "bg-white/30 backdrop-blur-lg border border-white/20", text: "text-slate-navy" }
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.2, type: "spring", stiffness: 100 }}
                viewport={{ once: true }}
                className={`${item.gradient} ${item.text} shadow-2xl p-12 rounded-[3.5rem] space-y-6 hover:scale-[1.05] transition-all duration-500 cursor-default`}
              >
                <div className={`w-16 h-16 ${item.text === "text-white" ? "bg-white/20" : "bg-white/40"} rounded-2xl flex items-center justify-center mb-8`}>
                  {item.icon}
                </div>
                <h4 className="text-3xl font-bold mb-4">{item.title}</h4>
                <p className="text-lg leading-relaxed opacity-90">{item.content}</p>
              </motion.div>
            ))}
          </div>
        </TransSection>

        {/* Section 5: Testimonial (Whimsy Refactor) */}
        <TransSection className="!min-h-[70vh]">
          <motion.div
            initial={{ opacity: 0, filter: "blur(20px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1 }}
            className="bg-white/30 backdrop-blur-lg shadow-2xl border border-white/20 p-10 md:p-20 max-w-4xl mx-auto text-center space-y-12 rounded-[3.5rem]"
          >
            <div className="flex justify-center gap-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-8 h-8 text-yellow-500 fill-yellow-500 animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
              ))}
            </div>

            <blockquote className="text-3xl md:text-4xl font-medium text-slate-navy italic leading-snug">
              "I did my Mom's Eye surgery from Vimala eye Hospital and i would like to suggest others as well...very good team,..supportive doctor...Loved their treatment."
            </blockquote>

            <div className="flex flex-col items-center space-y-4">
              <motion.div
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="w-20 h-20 rounded-full border-4 border-white overflow-hidden shadow-xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
                  alt="PRITI GUPTA"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div>
                <cite className="text-2xl font-bold text-slate-navy not-italic">PRITI GUPTA</cite>
                <p className="text-slate-500 font-medium uppercase tracking-widest text-sm mt-1">Patient</p>
              </div>
            </div>
          </motion.div>
        </TransSection>





        {/* Final Spacer */}

        <div className="h-[20vh] w-full" />
      </div>
    </div>
  );
}
