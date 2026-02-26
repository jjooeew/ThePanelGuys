import React from 'react';
import { Snowflake, Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-brand p-2 rounded-lg">
                <Snowflake className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-black tracking-tighter text-white uppercase">
                Arctic<span className="text-brand">Pro</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Premium commercial refrigeration solutions for businesses that demand reliability and efficiency.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-brand transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-slate-400 hover:text-brand transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-slate-400 hover:text-brand transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><Link href="/" className="hover:text-brand transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-brand transition-colors">About Us</Link></li>
              <li><Link href="/projects" className="hover:text-brand transition-colors">Our Projects</Link></li>
              <li><Link href="/contact" className="hover:text-brand transition-colors">Request a Quote</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li>Custom Cool Rooms</li>
              <li>Walk-in Freezers</li>
              <li>Commercial Maintenance</li>
              <li>Emergency Repairs</li>
              <li>Energy Audits</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand" />
                1800 123 456
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand" />
                info@arcticpro.com.au
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-brand" />
                123 Industrial Way, Melbourne
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© 2024 ArcticPro Refrigeration. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
