import Link from "next/link";
import { Leaf, Mail, Globe, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background pt-24 pb-12">
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between gap-16">
        <div className="max-w-sm">
          <Link href="/" className="flex items-center gap-3 mb-8 group">
            <Leaf className="w-6 h-6 text-primary stroke-[1.5]" />
            <span className="font-heading text-2xl uppercase tracking-[0.2em] font-normal">Aura</span>
          </Link>
          <p className="text-muted-foreground text-sm leading-relaxed mb-8 font-light tracking-wide">
            A sanctuary for the modern soul. Discover quiet luxury and holistic wellness designed to restore your natural balance.
          </p>
          <div className="flex gap-6 text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors"><Globe className="w-4 h-4 stroke-[1.5]" /></a>
            <a href="#" className="hover:text-foreground transition-colors"><Phone className="w-4 h-4 stroke-[1.5]" /></a>
            <a href="#" className="hover:text-foreground transition-colors"><Mail className="w-4 h-4 stroke-[1.5]" /></a>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-12 md:gap-24">
          <div>
            <h4 className="font-normal mb-6 text-foreground tracking-widest uppercase text-xs">Wellness</h4>
            <ul className="space-y-4 text-sm text-muted-foreground font-light">
              <li><Link href="#treatments" className="hover:text-primary transition-colors">Treatments</Link></li>
              <li><Link href="#retreat" className="hover:text-primary transition-colors">Retreats</Link></li>
              <li><Link href="#philosophy" className="hover:text-primary transition-colors">Philosophy</Link></li>
              <li><Link href="#book" className="hover:text-primary transition-colors">Book a Session</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-normal mb-6 text-foreground tracking-widest uppercase text-xs">Sanctuary</h4>
            <ul className="space-y-4 text-sm text-muted-foreground font-light">
              <li><Link href="#about" className="hover:text-primary transition-colors">Our Story</Link></li>
              <li><Link href="#journal" className="hover:text-primary transition-colors">Journal</Link></li>
              <li><Link href="#careers" className="hover:text-primary transition-colors">Careers</Link></li>
              <li><Link href="#contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-8 mt-24 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-muted-foreground uppercase tracking-[0.2em] font-light">
        <p>© {new Date().getFullYear()} Aura Urban Retreat. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="#" className="hover:text-foreground transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-foreground transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
