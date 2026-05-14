"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Leaf } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Retreat", href: "#retreat" },
    { name: "Treatments", href: "#treatments" },
    { name: "Wellness", href: "#wellness" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500",
        scrolled ? "bg-background/90 backdrop-blur-md py-4 border-b border-border/50 shadow-sm" : "bg-transparent py-8"
      )}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <Leaf className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-500 font-light stroke-[1.5]" />
          <span className="text-2xl font-heading tracking-widest uppercase text-foreground">Aura</span>
        </Link>
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="gap-8">
            {navLinks.map((link) => (
              <NavigationMenuItem key={link.name}>
                <Link href={link.href} legacyBehavior passHref>
                  <NavigationMenuLink className="text-xs uppercase tracking-widest font-light text-muted-foreground hover:text-foreground transition-colors">
                    {link.name}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <Link
          href="#book"
          className="px-6 py-2 border border-foreground text-foreground uppercase text-xs tracking-widest font-light hover:bg-foreground hover:text-background transition-all duration-300"
        >
          Book a Retreat
        </Link>
      </div>
    </header>
  );
}
