import React, { useState } from 'react';
import { Menu, X, Snowflake, Phone } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-brand p-2 rounded-lg group-hover:rotate-12 transition-transform">
                <Snowflake className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-black tracking-tighter text-slate-900 uppercase">
                The Panel Guys
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-semibold transition-colors hover:text-brand",
                  location === link.href ? "text-brand" : "text-slate-600"
                )}
              >
                {link.name}
              </Link>
            ))}
            <a 
              href="tel:1800123456" 
              className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-full text-sm font-bold hover:bg-slate-800 transition-colors"
            >
              <Phone className="w-4 h-4" />
              1800 123 456
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-brand p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 animate-in slide-in-from-top duration-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-3 py-4 text-base font-medium rounded-md",
                  location === link.href ? "text-brand bg-brand/5" : "text-slate-600 hover:text-brand hover:bg-slate-50"
                )}
              >
                {link.name}
              </Link>
            ))}
            <a 
              href="tel:1800123456" 
              className="flex items-center gap-3 px-3 py-4 text-brand font-bold"
            >
              <Phone className="w-5 h-5" />
              1800 123 456
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
