import { Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = usePathname();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link href="/design-b" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-navy-900 flex items-center justify-center rounded">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <div className="flex flex-col">
              <span className="text-navy-900 font-bold text-lg leading-tight uppercase tracking-wider">Arctic Precision</span>
              <span className="text-slate-500 text-xs uppercase tracking-widest font-medium">Cool Rooms</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`text-sm font-semibold uppercase tracking-wide transition-colors ${
                  location === link.path ? 'text-navy-900' : 'text-slate-500 hover:text-navy-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="tel:0400000000"
              className="flex items-center space-x-2 bg-navy-900 text-white px-5 py-2.5 rounded font-bold text-sm hover:bg-navy-800 transition-all shadow-sm"
            >
              <Phone size={16} />
              <span>0400 000 000</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-navy-900 p-2">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
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
            className="md:hidden bg-white border-b border-slate-200 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block text-lg font-bold text-navy-900 uppercase tracking-wide"
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="tel:0400000000"
                className="flex items-center justify-center space-x-2 bg-navy-900 text-white px-5 py-4 rounded font-bold text-lg"
              >
                <Phone size={20} />
                <span>Call Now</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
