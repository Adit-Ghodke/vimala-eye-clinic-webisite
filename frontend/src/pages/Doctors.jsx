import { useEffect, useState } from "react";
import DoctorCard from "../components/DoctorCard";
import doctorsData from "../data/doctors.json";
import { motion } from "framer-motion";

export default function Doctors() {
  const [leadDoctor] = useState(doctorsData[0]);
  const [teamDoctors] = useState(doctorsData.slice(1));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white pb-32">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* SECTION 1: MEET THE DOCTOR */}
        <section className="pt-20 mb-32">
          <header className="text-center mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl font-extrabold text-slate-900 mb-4"
            >
              Meet The <span className="text-primary">Doctor</span>
            </motion.h1>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full" />
          </header>

          {leadDoctor && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <DoctorCard doctor={leadDoctor} isHero={true} />
            </motion.div>
          )}
        </section>

        {/* SECTION 2: MEET OUR TEAM */}
        <section>
          <header className="text-center mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl font-extrabold text-slate-900 mb-4"
            >
              Meet Our <span className="text-primary">Team</span>
            </motion.h1>
            <div className="w-20 h-1 bg-primary/30 mx-auto rounded-full" />
          </header>

          <motion.div 
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.1 }
              }
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
          >
            {teamDoctors.map((doctor) => (
              <motion.div
                key={doctor.id}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0 }
                }}
              >
                <DoctorCard doctor={doctor} />
              </motion.div>
            ))}
          </motion.div>
        </section>

      </div>
    </div>
  );
}
