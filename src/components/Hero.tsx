"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black z-10" />
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" 
          alt="Abstract 3D digital art" 
          className="w-full h-full object-cover opacity-80"
        />
      </div>

      <div className="container relative z-20 mx-auto px-4 flex flex-col items-center text-center mt-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="overflow-hidden mb-6"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading text-white font-normal tracking-tight uppercase">
            Aura Gallery
          </h1>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="text-sm md:text-base text-white/80 max-w-2xl mx-auto mb-12 font-light uppercase tracking-[0.3em] leading-relaxed"
        >
          Curated 3D Jewellery & Digital Art Exhibitions.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href="#collections"
            className="px-8 py-3 bg-white text-black uppercase text-xs tracking-[0.2em] hover:bg-white/90 transition-all duration-300 font-medium"
          >
            Explore Collections
          </a>
          <a
            href="#mint"
            className="px-8 py-3 border border-white/30 text-white uppercase text-xs tracking-[0.2em] hover:bg-white/10 transition-all duration-300"
          >
            Live Mint
          </a>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 z-20 flex flex-col items-center text-white/50"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] mb-3 font-light">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4 stroke-[1]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
