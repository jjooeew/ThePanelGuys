'use client'

import { motion } from 'motion/react';
import { ArrowRight, Shield, Zap, Settings } from 'lucide-react';
import Link from 'next/link';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const projects = [
  {
    title: "The Glass Vault",
    category: "Luxury Residential",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1200",
  },
  {
    title: "Industrial Core",
    category: "Commercial Logistics",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200",
  },
  {
    title: "Precision Lab",
    category: "Medical Research",
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=1200",
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-matte-black text-cool-white selection:bg-ice-blue/30 selection:text-ice-blue overflow-hidden">
      <Navbar />
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=2000" 
            alt="Stainless Steel Cool Room" 
            className="w-full h-full object-cover opacity-40 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-matte-black/60 via-matte-black/20 to-matte-black" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="font-display text-5xl md:text-8xl font-bold tracking-tighter mb-6 uppercase leading-none">
              Cooling Solutions.<br />
              <span className="text-ice-blue">Engineered to Perform.</span>
            </h1>
            <p className="text-sm md:text-base uppercase tracking-[0.3em] text-cool-white/60 mb-10 font-medium">
              Professionally built cool rooms for commercial & luxury residential.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center gap-4 bg-cool-white text-matte-black px-10 py-5 text-sm uppercase tracking-widest font-bold hover:bg-ice-blue transition-all group"
            >
              Start Your Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
           <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-ice-blue to-transparent animate-pulse" />
           <span className="text-[10px] uppercase tracking-[0.5em] text-cool-white/20">Scroll</span>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 px-6 bg-matte-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <motion.div 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              className="flex flex-col gap-6"
            >
              <Settings className="w-10 h-10 text-ice-blue" />
              <h3 className="text-xl font-display font-bold uppercase tracking-tight">Custom Builds</h3>
              <p className="text-cool-white/40 text-sm leading-relaxed">
                Tailored to your exact architectural specifications. No compromise on design or functionality.
              </p>
            </motion.div>
            
            <motion.div 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-col gap-6"
            >
              <Shield className="w-10 h-10 text-ice-blue" />
              <h3 className="text-xl font-display font-bold uppercase tracking-tight">Commercial Installations</h3>
              <p className="text-cool-white/40 text-sm leading-relaxed">
                Heavy-duty systems engineered for high-traffic environments and maximum reliability.
              </p>
            </motion.div>

            <motion.div 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col gap-6"
            >
              <Zap className="w-10 h-10 text-ice-blue" />
              <h3 className="text-xl font-display font-bold uppercase tracking-tight">Energy Efficient</h3>
              <p className="text-cool-white/40 text-sm leading-relaxed">
                Advanced insulation and smart cooling technology to minimize environmental impact and costs.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Showcase */}
      <section className="bg-matte-black">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="relative aspect-[4/5] overflow-hidden group cursor-pointer"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-matte-black/40 group-hover:bg-matte-black/20 transition-colors" />
              <div className="absolute bottom-0 left-0 p-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-[10px] uppercase tracking-widest text-ice-blue font-bold mb-2 block">{project.category}</span>
                <h4 className="text-3xl font-display font-bold uppercase tracking-tighter">{project.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-28 px-6 bg-matte-black border-y border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-2xl md:text-3xl font-display italic text-cool-white/80 leading-relaxed mb-12">
              "The level of craftsmanship and attention to detail Cryos brought to our facility was unprecedented. It's not just a cool room; it's a piece of engineering art."
            </p>
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-ice-blue">Marcus Thorne</span>
              <span className="text-[10px] uppercase tracking-widest text-cool-white/30">Director, Thorne Logistics</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 bg-matte-black relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-ice-blue/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h2 className="text-6xl md:text-9xl font-display font-bold uppercase tracking-tighter mb-12 leading-none">
            Ready to <br />
            <span className="text-ice-blue">Begin?</span>
          </h2>
          <Link 
            href="/contact"
            className="inline-flex items-center gap-4 border border-white/20 px-12 py-6 text-sm uppercase tracking-widest font-bold hover:bg-cool-white hover:text-matte-black transition-all group"
          >
            Request a Consultation
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
