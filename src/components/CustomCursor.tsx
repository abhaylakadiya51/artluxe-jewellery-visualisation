"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { usePathname } from "next/navigation";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorTextRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    const cursorText = cursorTextRef.current;
    
    if (!cursor || !cursorDot || !cursorText) return;

    // Set initial position
    gsap.set(cursor, { xPercent: -50, yPercent: -50 });
    gsap.set(cursorDot, { xPercent: -50, yPercent: -50 });
    gsap.set(cursorText, { xPercent: -50, yPercent: -50 });

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    const moveCursor = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      gsap.to(cursorDot, {
        x: mouseX,
        y: mouseY,
        duration: 0.1,
        ease: "power2.out"
      });
      
      gsap.to(cursorText, {
        x: mouseX,
        y: mouseY,
        duration: 0.1,
        ease: "power2.out"
      });
    };

    // Smooth trailing effect for the ring
    const render = () => {
      cursorX += (mouseX - cursorX) * 0.15;
      cursorY += (mouseY - cursorY) * 0.15;
      
      gsap.set(cursor, {
        x: cursorX,
        y: cursorY,
      });
      
      requestAnimationFrame(render);
    };
    
    requestAnimationFrame(render);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      if (target.closest('.hover-discover') || target.closest('img')) {
        gsap.to(cursor, {
          width: 80,
          height: 80,
          backgroundColor: "rgba(255, 255, 255, 0.05)",
          backdropFilter: "blur(2px)",
          borderColor: "rgba(255, 255, 255, 0.4)",
          duration: 0.4,
          ease: "expo.out"
        });
        gsap.to(cursorDot, {
          scale: 0,
          duration: 0.3,
        });
        gsap.to(cursorText, {
          opacity: 1,
          scale: 1,
          duration: 0.3,
          delay: 0.1
        });
        if (cursorText) cursorText.innerText = "VIEW";
      } else if (target.closest('.hover-mint')) {
        gsap.to(cursor, {
          width: 80,
          height: 80,
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          borderColor: "transparent",
          mixBlendMode: "difference",
          duration: 0.4,
          ease: "expo.out"
        });
        gsap.to(cursorDot, {
          scale: 0,
          duration: 0.3,
        });
        gsap.to(cursorText, {
          opacity: 1,
          scale: 1,
          color: "#000",
          duration: 0.3,
          delay: 0.1
        });
        if (cursorText) cursorText.innerText = "MINT";
      } else if (target.closest('a') || target.closest('button')) {
        gsap.to(cursor, {
          width: 48,
          height: 48,
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          borderColor: "rgba(255, 255, 255, 0.8)",
          duration: 0.3,
          ease: "back.out(2)"
        });
        gsap.to(cursorDot, {
          scale: 0,
          duration: 0.3,
        });
        gsap.to(cursorText, {
          opacity: 0,
          scale: 0.5,
          duration: 0.2,
        });
      } else {
        gsap.to(cursor, {
          width: 32,
          height: 32,
          backgroundColor: "transparent",
          backdropFilter: "blur(0px)",
          borderColor: "rgba(255, 255, 255, 0.2)",
          mixBlendMode: "normal",
          duration: 0.3,
        });
        gsap.to(cursorDot, {
          scale: 1,
          duration: 0.3,
        });
        gsap.to(cursorText, {
          opacity: 0,
          scale: 0.5,
          color: "#fff",
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
      {/* Outer Ring */}
      <div 
        ref={cursorRef}
        className="fixed top-0 left-0 w-8 h-8 border border-white/20 rounded-full pointer-events-none z-[100] transition-colors mix-blend-difference"
      />
      {/* Inner Dot */}
      <div 
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full pointer-events-none z-[100] mix-blend-difference"
      />
      {/* Text Label */}
      <div 
        ref={cursorTextRef}
        className="fixed top-0 left-0 pointer-events-none z-[101] opacity-0 scale-50 flex items-center justify-center text-xs font-medium tracking-[0.2em]"
      >
        VIEW
      </div>
    </>
  );
}
