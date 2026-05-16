"use client";

import { motion } from "framer-motion";

export default function ExhibitionPreviews() {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-white/40 text-xs tracking-[0.3em] uppercase block mb-6"
          >
            Upcoming
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-heading text-white uppercase tracking-tight"
          >
            Virtual Exhibition
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative aspect-square md:aspect-[4/3] w-full"
          >
            <div className="absolute inset-0 border border-white/10 m-4 z-10" />
            <img 
              src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2000&auto=format&fit=crop" 
              alt="Exhibition preview" 
              className="w-full h-full object-cover hover-discover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="max-w-xl"
          >
            <h3 className="text-2xl md:text-3xl text-white font-heading mb-6 uppercase tracking-wider">
              "Geometry of Light"
            </h3>
            <p className="text-white/60 font-light leading-relaxed mb-8 tracking-wide">
              An immersive 3D experience exploring the intersection of raw minerals and mathematical precision. 
              Each piece in this exhibition is algorithmically generated and meticulously rendered, offering a unique perspective on digital ornamentation.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mb-10 border-t border-white/10 pt-8">
              <div>
                <span className="block text-xs text-white/40 uppercase tracking-[0.2em] mb-2">Opens</span>
                <span className="text-white tracking-widest">OCT 24, 2026</span>
              </div>
              <div>
                <span className="block text-xs text-white/40 uppercase tracking-[0.2em] mb-2">Platform</span>
                <span className="text-white tracking-widest">Aura Gallery VR</span>
              </div>
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-4 text-xs tracking-[0.2em] text-white uppercase hover:text-white/70 transition-colors"
            >
              <span className="w-8 h-[1px] bg-white/50" />
              RSVP to Preview
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
