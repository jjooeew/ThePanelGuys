import { Snowflake, Instagram, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-matte-black border-t border-white/5 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div className="md:col-span-2">
          <Link href="/" className="flex items-center gap-2 mb-6">
            <Snowflake className="w-6 h-6 text-ice-blue" />
            <span className="font-display font-bold text-xl tracking-tighter uppercase">
              Cryos<span className="text-ice-blue">.</span>
            </span>
          </Link>
          <p className="text-cool-white/40 max-w-sm text-sm leading-relaxed">
            Architectural cooling solutions for the most demanding environments. 
            Precision engineered, custom built, and designed to last a lifetime.
          </p>
        </div>
        
        <div>
          <h4 className="text-xs uppercase tracking-widest font-bold mb-6 text-ice-blue">Navigation</h4>
          <ul className="flex flex-col gap-4">
            <li><Link href="/" className="text-sm text-cool-white/60 hover:text-cool-white transition-colors">Home</Link></li>
            <li><Link href="/projects" className="text-sm text-cool-white/60 hover:text-cool-white transition-colors">Projects</Link></li>
            <li><Link href="/about" className="text-sm text-cool-white/60 hover:text-cool-white transition-colors">About</Link></li>
            <li><Link href="/contact" className="text-sm text-cool-white/60 hover:text-cool-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest font-bold mb-6 text-ice-blue">Connect</h4>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors">
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[10px] uppercase tracking-widest text-cool-white/30">
          © {new Date().getFullYear()} Cryos Precision Engineering. All rights reserved.
        </p>
        <p className="text-[10px] uppercase tracking-widest text-cool-white/30">
          Designed for Performance.
        </p>
      </div>
    </footer>
  );
}
