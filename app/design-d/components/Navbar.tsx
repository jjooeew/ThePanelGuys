import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Snowflake } from 'lucide-react';
import { ROUTES, CONTACT_INFO } from '../constants';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/design-d' },
    { name: 'About', path: ROUTES.ABOUT },
    { name: 'Projects', path: '/design-d/projects' },
    { name: 'Contact', path: '/design-d/contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md py-3 shadow-md border-b border-gray-200' 
          : 'bg-transparent py-6'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="bg-steel-blue p-1.5 rounded-lg group-hover:bg-steel-blue-dark transition-colors">
              <Snowflake className="w-6 h-6 text-white" />
            </div>
            <span className={cn(
              "text-2xl font-display font-bold tracking-tighter transition-colors",
              isScrolled ? "text-charcoal" : "text-white"
            )}>
              PANEL<span className="text-steel-blue">GUYS</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={cn(
                  "text-sm font-semibold uppercase tracking-widest transition-colors hover:text-steel-blue",
                  location === link.path 
                    ? "text-steel-blue" 
                    : isScrolled ? "text-charcoal" : "text-white"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href={ROUTES.CONTACT}
              className="bg-steel-blue hover:bg-steel-blue-dark text-white px-6 py-2.5 rounded-lg text-sm font-bold uppercase tracking-widest transition-all shadow-lg hover:shadow-steel-blue/20"
            >
              Request Quote
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "p-2 rounded-md transition-colors",
                isScrolled ? "text-charcoal" : "text-white"
              )}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-200 overflow-hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block px-3 py-4 text-base font-bold uppercase tracking-widest border-b border-gray-50",
                    location === link.path ? "text-steel-blue" : "text-charcoal"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4">
                <Link
                  href={ROUTES.CONTACT}
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center bg-steel-blue text-white px-6 py-4 rounded-lg font-bold uppercase tracking-widest"
                >
                  Request Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
