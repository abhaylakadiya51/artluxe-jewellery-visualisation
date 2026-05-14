"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Hand } from "lucide-react";

export default function InteractiveSpin() {
  const [frame, setFrame] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const totalFrames = 36;
  const containerRef = useRef<HTMLDivElement>(null);

  // Since we don't have 36 real frames of a ring, we'll use a single image 
  // and apply a rotation transform to simulate the 3D effect for demonstration.
  // In a real scenario, we'd swap the image src based on the frame index.
  const dummyImage = "https://images.unsplash.com/photo-1605100804763-247f66128665?auto=format&fit=crop&q=80&w=800";

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    startX.current = e.clientX;
    if (containerRef.current) {
      containerRef.current.setPointerCapture(e.pointerId);
    }
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    
    const deltaX = e.clientX - startX.current;
    // Every 10px of drag changes 1 frame
    if (Math.abs(deltaX) > 10) {
      const direction = deltaX > 0 ? 1 : -1;
      setFrame((prev) => {
        let next = prev + direction;
        if (next >= totalFrames) next = 0;
        if (next < 0) next = totalFrames - 1;
        return next;
      });
      startX.current = e.clientX;
    }
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    if (containerRef.current) {
      containerRef.current.releasePointerCapture(e.pointerId);
    }
  };

  return (
    <section id="interactive" className="py-32 bg-card relative">
      <div className="container mx-auto px-4 md:px-8 flex flex-col items-center">
        <div className="text-center max-w-2xl mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">Interactive 360° Spin</h2>
          <p className="text-muted-foreground text-lg">
            Experience the craftsmanship from every angle. Drag left or right to rotate the piece.
          </p>
        </div>

        <div 
          ref={containerRef}
          className="relative w-full max-w-xl aspect-square bg-background rounded-3xl border border-border overflow-hidden cursor-grab active:cursor-grabbing shadow-2xl flex items-center justify-center"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          style={{ touchAction: "none" }}
        >
          {/* We simulate 360 by rotating the image. In reality, src would change. */}
          <div 
            className="w-3/4 h-3/4 relative select-none transition-transform duration-75"
            style={{ transform: `rotateY(${(frame / totalFrames) * 360}deg)` }}
          >
            <Image 
              src={dummyImage} 
              alt="Interactive Ring"
              fill
              className="object-contain pointer-events-none mix-blend-screen"
              draggable={false}
            />
          </div>
          
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-background/80 backdrop-blur-md px-6 py-3 rounded-full border border-border shadow-lg pointer-events-none text-sm font-medium text-foreground">
            <Hand className="w-4 h-4 animate-pulse" />
            Drag to rotate
          </div>
          
          <div className="absolute top-8 right-8 bg-background/80 backdrop-blur-md px-3 py-1 rounded-full border border-border text-xs font-mono text-muted-foreground pointer-events-none">
            Frame: {frame + 1}/{totalFrames}
          </div>
        </div>
      </div>
    </section>
  );
}
