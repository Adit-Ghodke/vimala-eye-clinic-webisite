import { useEffect, useState } from "react";
import ServiceCard from "../components/ServiceCard";
import servicesData from "../data/services.json";
import { motion } from "framer-motion";

export default function Services() {
  const [services] = useState(servicesData);
  
  useEffect(() => {
    // Ensure we are at the top when landing on this page
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <header className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl font-extrabold text-slate-900 mb-6"
          >
            Our Specialist <span className="text-primary">Services</span>
          </motion.h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            From routine checkups to complex surgeries, we provide the full spectrum of ocular care.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
