"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { usePathname } from "next/navigation";

export default function CustomCursor() {
  const cursorRingRef = useRef<HTMLDivElement>(null);
  const cursorTextRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const cursorRing = cursorRingRef.current;
    const cursorText = cursorTextRef.current;
    
    if (!cursorRing || !cursorText) return;

    // Set initial position
    gsap.set(cursorRing, { xPercent: -50, yPercent: -50 });
    gsap.set(cursorText, { xPercent: -50, yPercent: -50 });

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursorRing, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.15,
        ease: "power2.out"
      });
      gsap.to(cursorText, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.15,
        ease: "power2.out"
      });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if hovering over an image or specific element
      if (target.closest('img') || target.closest('.hover-discover') || target.closest('video')) {
        gsap.to(cursorRing, {
          width: 90,
          height: 90,
          backgroundColor: "rgba(0, 0, 0, 0.4)", 
          backdropFilter: "blur(4px)",
          borderColor: "rgba(212, 175, 55, 0.5)",
          duration: 0.4,
          ease: "back.out(1.5)"
        });
        gsap.to(cursorText, {
          opacity: 1,
          scale: 1,
          duration: 0.3,
          delay: 0.1
        });
      } else if (target.closest('a') || target.closest('button')) {
        // Standard hover state for links/buttons
        gsap.to(cursorRing, {
          width: 40,
          height: 40,
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          duration: 0.3,
        });
        gsap.to(cursorText, {
          opacity: 0,
          scale: 0.5,
          duration: 0.2,
        });
      } else {
        gsap.to(cursorRing, {
          width: 24,
          height: 24,
          backgroundColor: "transparent",
          backdropFilter: "blur(0px)",
          borderColor: "rgba(255, 255, 255, 0.3)",
          duration: 0.3,
        });
        gsap.to(cursorText, {
          opacity: 0,
          scale: 0.5,
          duration: 0.2,
        });
      }
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [pathname]);

  return (
    <>
      <div 
        ref={cursorRingRef}
        className="fixed top-0 left-0 w-6 h-6 border border-white/30 rounded-full pointer-events-none z-[100] transition-colors"
      />
      <div 
        ref={cursorTextRef}
        className="fixed top-0 left-0 pointer-events-none z-[101] opacity-0 scale-50 flex items-center justify-center text-primary text-xl"
        style={{ fontFamily: 'var(--font-pinyon)' }}
      >
        Discover
      </div>
    </>
  );
}
