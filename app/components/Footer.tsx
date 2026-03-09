import { Snowflake, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { ROUTES, CONTACT_INFO } from '../constants';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-2">
              <div className="bg-steel-blue p-1.5 rounded-lg">
                <Snowflake className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-display font-bold tracking-tighter">
                THE PANEL<span className="text-steel-blue"> GUYS</span>
              </span>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Premium commercial refrigeration and walk-in cool room solutions. Engineered for performance, built for reliability.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-steel-blue transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-steel-blue transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-steel-blue transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-steel-blue transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-display font-bold mb-6 uppercase tracking-widest text-steel-blue">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href={ROUTES.HOME} className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link href={ROUTES.ABOUT} className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href={ROUTES.PROJECTS} className="text-gray-400 hover:text-white transition-colors">Completed Projects</Link></li>
              <li><Link href={ROUTES.CONTACT} className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-display font-bold mb-6 uppercase tracking-widest text-steel-blue">Our Services</h4>
            <ul className="space-y-4">
              <li className="text-gray-400">Custom Cool Rooms</li>
              <li className="text-gray-400">Walk-In Freezers</li>
              <li className="text-gray-400">Repairs & Maintenance</li>
              <li className="text-gray-400">Compliance Audits</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-display font-bold mb-6 uppercase tracking-widest text-steel-blue">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-gray-400">
                <MapPin className="w-5 h-5 text-steel-blue shrink-0 mt-0.5" />
                <span>{CONTACT_INFO.ADDRESS}</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-5 h-5 text-steel-blue shrink-0" />
                <span>{CONTACT_INFO.PHONE}</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-5 h-5 text-steel-blue shrink-0" />
                <span>{CONTACT_INFO.EMAIL}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} The Panel Guys. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
