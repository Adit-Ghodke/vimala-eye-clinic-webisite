import React from 'react';
import { motion } from 'framer-motion';

const GuideCard = ({ title, content, image, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1, duration: 0.8 }}
    viewport={{ once: true }}
    className="bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-xl shadow-slate-100/50 flex flex-col group hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
  >
    {/* Image Section */}
    <div className="h-64 overflow-hidden relative">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent" />
    </div>

    {/* Content Section */}
    <div className="p-8 md:p-10 flex flex-col flex-grow">
      <h3 className="text-2xl md:text-3xl font-bold text-[#0f172a] mb-4 tracking-tight group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-[#0f172a]/80 text-lg leading-relaxed font-normal">
        {content}
      </p>
    </div>
  </motion.div>
);

export default function Contact() {
  const guideData = [
    {
      title: "How the Eye Works",
      content: "Your eyes are like cameras. Light enters through the cornea (clear front), passes through the pupil, gets focused by the lens, and hits the retina at the back. The retina sends signals to your brain. That's how you see.",
      image: "/guide/how-it-works.jpeg"
    },
    {
      title: "Common Eye Conditions",
      content: "Most vision problems are fixable with glasses or contacts. Nearsightedness (myopia) = seeing close things clearly but far things blurry. Farsightedness (hyperopia) = opposite. Astigmatism = blurry at all distances. Presbyopia = trouble focusing close up after age 40. Cataracts = cloudy lens with age.",
      image: "/guide/conditions.jpeg"
    },
    {
      title: "Eye Care Tips",
      content: "Wear sunglasses that block 99% UV rays when outside. Follow 20-20-20 rule: every 20 minutes, look 20 feet away for 20 seconds when on screens. Eat dark leafy greens and fish for eye health. Get sleep and stay hydrated. Wash hands before touching contact lenses.",
      image: "/guide/tips.jpeg"
    },
    {
      title: "When to Visit an Eye Doctor",
      content: "Eye exams are important even when vision feels fine. Under 40 with no problems = every 2 years. Age 40+ = every 1-2 years. Wearing glasses/contacts = every year. See doctor immediately if: sudden blurry vision, eye pain, flashing lights, new floaters, or eye redness.",
      image: "/guide/visit-doctor.jpeg"
    }

  ];

  return (
    <div className="min-h-screen bg-white selection:bg-primary selection:text-white pb-32">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <header className="pt-20 mb-20 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl font-extrabold text-[#0f172a] mb-6 tracking-tight"
          >
            Eye Health <span className="text-primary">Guide</span>
          </motion.h1>
          <motion.div 
             initial={{ scaleX: 0 }}
             animate={{ scaleX: 1 }}
             className="w-32 h-2 bg-primary mx-auto rounded-full origin-center"
          />
        </header>

        {/* 2x2 Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {guideData.map((card, index) => (
            <GuideCard 
              key={index}
              index={index}
              title={card.title}
              content={card.content}
              image={card.image}
            />
          ))}
        </div>

      </div>
    </div>
  );
}
