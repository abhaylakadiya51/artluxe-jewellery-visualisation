"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { Sparkles, Droplets, Flame, Flower2, Heart, Sun } from "lucide-react";

const treatments = [
  {
    title: "Holistic Massage",
    description: "Release tension and restore harmony with our signature full-body treatment.",
    icon: Flower2,
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Aromatherapy",
    description: "Sensory journey utilizing bespoke essential oil blends to calm the mind.",
    icon: Droplets,
    image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Thermal Stone",
    description: "Deep, penetrating heat to melt away chronic muscular tension and stress.",
    icon: Flame,
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Rejuvenating Facial",
    description: "Restore your skin's natural glow with organic, nutrient-rich botanicals.",
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Mindful Meditation",
    description: "Guided sessions to cultivate inner peace and quiet the daily noise.",
    icon: Sun,
    image: "https://images.unsplash.com/photo-1528319725582-ddc096101511?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Reflexology",
    description: "Targeted pressure points to stimulate energy flow and promote healing.",
    icon: Heart,
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800",
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.8,
      ease: "easeOut"
    }
  })
};

export default function Treatments() {
  return (
    <section id="treatments" className="py-32 bg-background relative z-10 border-t border-border">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-24 flex flex-col items-start"
        >
          <span className="text-primary tracking-[0.2em] text-xs uppercase mb-4 font-light">Curated Wellness</span>
          <h2 className="text-4xl md:text-6xl font-heading text-foreground mb-6 font-normal">
            Signature Treatments
          </h2>
          <p className="text-muted-foreground font-light tracking-wide max-w-lg">
            Experience profound relaxation. Our therapies are designed to nurture your body, mind, and spirit.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {treatments.map((treatment, index) => {
            const Icon = treatment.icon;
            // Staggered layout: middle column pushed down slightly on large screens
            const isMiddleColumn = index % 3 === 1;
            
            return (
              <motion.div 
                key={treatment.title}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className={`group relative flex flex-col gap-6 ${isMiddleColumn ? 'lg:mt-16' : ''}`}
              >
                <div className="h-[450px] w-full overflow-hidden relative glass-panel shadow-sm rounded-sm">
                  <Image 
                    src={treatment.image} 
                    alt={treatment.title}
                    fill
                    className="object-cover scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                
                <div className="flex flex-col gap-3 px-2">
                  <div className="flex items-center gap-3 text-primary">
                    <Icon className="w-5 h-5 font-light stroke-[1.5]" />
                    <span className="text-xs tracking-[0.1em] uppercase font-light text-muted-foreground">0{index + 1}</span>
                  </div>
                  <h3 className="text-2xl font-heading font-medium text-foreground tracking-wide mt-1">
                    {treatment.title}
                  </h3>
                  <div className="h-px w-12 bg-primary/30 group-hover:w-full transition-all duration-700 ease-out mt-1" />
                  <p className="text-muted-foreground text-sm leading-relaxed font-light mt-2">
                    {treatment.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
