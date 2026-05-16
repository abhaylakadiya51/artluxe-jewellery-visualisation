"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function MintingInterface() {
  const [quantity, setQuantity] = useState(1);

  return (
    <section id="mint" className="py-32 bg-[#0a0a0a] border-t border-white/5 relative z-10">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="aspect-square bg-white/5 relative overflow-hidden"
          >
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-cover opacity-60 mix-blend-screen"
            >
              <source src="https://cdn.pixabay.com/video/2021/08/11/84687-587848698_large.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <span className="text-white/40 text-xs tracking-[0.3em] uppercase block mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /> Live Mint
            </span>
            <h2 className="text-3xl md:text-5xl font-heading text-white uppercase tracking-tight mb-4">
              The Genesis Key
            </h2>
            <p className="text-white/50 font-light mb-8 text-sm leading-relaxed tracking-wide">
              Secure your access to future Aura exhibitions and exclusive 3D jewellery drops. 
              Only 500 keys will ever exist.
            </p>

            <div className="bg-white/5 border border-white/10 p-6 mb-8">
              <div className="flex justify-between items-center mb-6 pb-6 border-b border-white/10">
                <span className="text-white/60 text-xs uppercase tracking-widest">Price</span>
                <span className="text-white text-lg font-medium">0.15 ETH</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/60 text-xs uppercase tracking-widest">Quantity</span>
                <div className="flex items-center gap-4 bg-black border border-white/20 px-4 py-2">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="text-white/50 hover:text-white hover-mint transition-colors"
                  >
                    -
                  </button>
                  <span className="text-white text-sm w-4 text-center">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(Math.min(5, quantity + 1))}
                    className="text-white/50 hover:text-white hover-mint transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <button className="w-full py-4 bg-white text-black uppercase text-xs font-medium tracking-[0.3em] hover:bg-white/90 transition-colors hover-mint group relative overflow-hidden">
              <span className="relative z-10 flex items-center justify-center gap-3">
                Connect Wallet
              </span>
              <div className="absolute inset-0 bg-white scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out z-0" />
            </button>
            
            <div className="mt-6 flex justify-between items-center text-[10px] text-white/30 uppercase tracking-widest">
              <span>Max 5 per wallet</span>
              <span>142 / 500 Minted</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
