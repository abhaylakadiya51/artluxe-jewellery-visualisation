"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const collections = [
  {
    id: 1,
    title: "Genesis Core",
    artist: "Aura Studio",
    image: "https://images.unsplash.com/photo-1599643478514-4a4e0a638ca1?q=80&w=2000&auto=format&fit=crop",
    items: 42,
  },
  {
    id: 2,
    title: "Ethereal Diamonds",
    artist: "Elena V.",
    image: "https://images.unsplash.com/photo-1605100804763-247f66126e28?q=80&w=2000&auto=format&fit=crop",
    items: 12,
  },
  {
    id: 3,
    title: "Liquid Gold",
    artist: "Marcus T.",
    image: "https://images.unsplash.com/photo-1574634534894-89d7576c8259?q=80&w=2000&auto=format&fit=crop",
    items: 24,
  }
];

export default function Collections() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="collections" className="py-32 bg-[#050505] relative z-10">
      <div className="container mx-auto px-4">
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8 gap-8">
          <div>
            <span className="text-white/40 text-xs tracking-[0.3em] uppercase block mb-4">Curated</span>
            <h2 className="text-4xl md:text-5xl font-heading text-white uppercase tracking-tight">
              Collections
            </h2>
          </div>
          <a href="#" className="text-xs tracking-[0.2em] text-white/60 hover:text-white uppercase transition-colors">
            View All Vaults →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((collection, i) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              onMouseEnter={() => setHovered(collection.id)}
              onMouseLeave={() => setHovered(null)}
              className="group cursor-none"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-white/5 mb-6 hover-discover">
                <motion.img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover opacity-80"
                  animate={{
                    scale: hovered === collection.id ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-medium text-white mb-1 tracking-wider uppercase">
                    {collection.title}
                  </h3>
                  <p className="text-sm text-white/50 tracking-widest uppercase">
                    By {collection.artist}
                  </p>
                </div>
                <span className="text-xs text-white/40 tracking-widest">
                  [{collection.items}]
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
