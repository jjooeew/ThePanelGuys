import { Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-white flex items-center justify-center rounded">
                <span className="text-navy-900 font-bold text-lg">A</span>
              </div>
              <span className="font-bold text-lg uppercase tracking-wider">Arctic Precision</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Locally owned and operated, providing high-quality custom cool room solutions for businesses across the region.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-slate-300">Quick Links</h3>
            <ul className="space-y-4 text-sm">
              <li><Link href="/" className="hover:text-slate-300 transition-colors">Home</Link></li>
              <li><Link href="/projects" className="hover:text-slate-300 transition-colors">Recent Projects</Link></li>
              <li><Link href="/contact" className="hover:text-slate-300 transition-colors">Request a Quote</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-slate-300">Services</h3>
            <ul className="space-y-4 text-sm">
              <li className="text-slate-400">Walk-in Freezers</li>
              <li className="text-slate-400">Commercial Cool Rooms</li>
              <li className="text-slate-400">Maintenance & Repairs</li>
              <li className="text-slate-400">Custom Design</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-slate-300">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-slate-400 shrink-0" />
                <span>0400 000 000</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-slate-400 shrink-0" />
                <span>info@arcticprecision.com.au</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-slate-400 shrink-0" />
                <span>Serving the Greater Region & Surrounds</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs text-slate-500 uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Arctic Precision Cool Rooms. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white"><Facebook size={16} /></a>
            <a href="#" className="hover:text-white"><Instagram size={16} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
