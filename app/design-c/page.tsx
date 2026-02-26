'use client'

import React from 'react';
import { Phone, FileText, CheckCircle2, ShieldCheck, Clock, Award } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Navbar />
      {/* Hero Section */}
      <section className="relative pt-5 pb-20 lg:py-10 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 text-brand text-xs font-bold uppercase tracking-wider mb-6">
                <ShieldCheck className="w-4 h-4" />
                Certified Commercial Refrigeration Specialists
              </div>
              <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1] mb-6 tracking-tight">
                Custom Walk-In <br />
                <span className="text-brand">Cool Rooms</span> & Refrigeration Solutions
              </h1>
              <p className="text-xl text-slate-600 mb-10 max-w-xl leading-relaxed">
                Serving the Greater Auckland Area for over 15 years. We design, build, and maintain high-performance cool rooms tailored to your business needs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:1800123456" className="btn-primary group">
                  <Phone className="w-5 h-5 group-hover:animate-bounce" />
                  Call Now
                </a>
                <Link href="/contact" className="btn-secondary">
                  <FileText className="w-5 h-5" />
                  Request a Quote
                </Link>
              </div>

              <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-6 border-t border-slate-100 pt-8">
                <div className="flex flex-col">
                  <span className="text-3xl font-black text-slate-900">15+</span>
                  <span className="text-sm text-slate-500 font-medium">Years Experience</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-black text-slate-900">500+</span>
                  <span className="text-sm text-slate-500 font-medium">Projects Completed</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-black text-slate-900">24/7</span>
                  <span className="text-sm text-slate-500 font-medium">Emergency Support</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src="https://picsum.photos/seed/coolroom/800/800" 
                  alt="Commercial Cool Room Installation" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-4 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-[200px]">
                <div className="flex items-center gap-2 text-brand mb-2">
                  <Award className="w-6 h-6" />
                  <span className="font-bold">Top Rated</span>
                </div>
                <p className="text-xs text-slate-500 font-medium">
                  Voted #1 for reliability in commercial refrigeration 2024.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-4">Why Choose The Panel Guys?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">We don't just build boxes; we build precision-engineered environments that protect your inventory and your bottom line.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Energy Efficient",
                desc: "Our rooms use the latest insulation technology to reduce power consumption by up to 30%.",
                icon: <CheckCircle2 className="w-8 h-8 text-brand" />
              },
              {
                title: "Custom Design",
                desc: "Every space is unique. We provide bespoke layouts that maximize your available footprint.",
                icon: <CheckCircle2 className="w-8 h-8 text-brand" />
              },
              {
                title: "Rapid Installation",
                desc: "Minimize downtime with our streamlined build process. Most rooms ready in under 7 days.",
                icon: <CheckCircle2 className="w-8 h-8 text-brand" />
              },
              {
                title: "Compliance Ready",
                desc: "Full HACCP and health safety compliance guaranteed for all food storage installations.",
                icon: <CheckCircle2 className="w-8 h-8 text-brand" />
              },
              {
                title: "Smart Monitoring",
                desc: "Integrated digital temperature logging and remote alert systems for peace of mind.",
                icon: <CheckCircle2 className="w-8 h-8 text-brand" />
              },
              {
                title: "Premium Materials",
                desc: "We use only high-grade stainless steel and food-safe panels for maximum longevity.",
                icon: <CheckCircle2 className="w-8 h-8 text-brand" />
              }
            ].map((benefit, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
              >
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-4">Our Recent Projects</h2>
              <p className="text-slate-600">Take a look at how we've helped local businesses optimize their storage.</p>
            </div>
            <Link href="/projects" className="text-brand font-bold hover:underline flex items-center gap-2">
              View All Projects
              <span className="text-xl">→</span>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((id) => (
              <div key={id} className="group relative overflow-hidden rounded-2xl aspect-[4/3]">
                <img 
                  src={`https://picsum.photos/seed/project${id}/600/450`} 
                  alt="Project" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex flex-col justify-end p-6">
                  <span className="text-white font-bold text-lg">Commercial Kitchen {id}</span>
                  <span className="text-white/70 text-sm">Custom Walk-in Installation</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-black mb-4">Trusted by Industry Leaders</h2>
            <p className="text-slate-400">See what our clients have to say about their The Panel Guys experience.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote: "The Panel Guys delivered our cool room ahead of schedule and the quality is exceptional. Our energy bills have actually dropped since the upgrade.",
                author: "James Wilson",
                role: "Owner, The Fresh Market"
              },
              {
                quote: "The team was professional from start to finish. They understood our specific requirements for medical-grade storage and delivered perfectly.",
                author: "Sarah Chen",
                role: "Operations Manager, City Health"
              }
            ].map((t, i) => (
              <div key={i} className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map(s => <span key={s} className="text-brand">★</span>)}
                </div>
                <p className="text-lg italic mb-6 text-slate-200 leading-relaxed">"{t.quote}"</p>
                <div>
                  <p className="font-bold text-white">{t.author}</p>
                  <p className="text-sm text-slate-400">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-brand relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-black text-black mb-6">Ready to Start Your Project?</h2>
          <p className="text-black/90 text-xl mb-10">Get a free, no-obligation quote for your custom refrigeration solution today.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:1800123456" className="bg-white text-brand px-10 py-5 rounded-xl font-black text-xl shadow-xl hover:bg-slate-50 transition-all flex items-center justify-center gap-3">
              <Phone className="w-6 h-6" />
              1800 123 456
            </a>
            <Link href="/contact" className="bg-slate-900 text-white px-10 py-5 rounded-xl font-black text-xl shadow-xl hover:bg-slate-800 transition-all flex items-center justify-center gap-3">
              <FileText className="w-6 h-6" />
              Get My Quote
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
