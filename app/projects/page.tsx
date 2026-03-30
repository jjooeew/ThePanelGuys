'use client'

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Sawmill Brewery",
      description: "A complete custom refrigeration solution including a large walk-in freezer and a separate display cool room for a busy local butcher shop.",
      image: "/images/Sawmill-Brewery/5.jpg",
      category: "Full Fit-out"
    },
    {
      id: 2,
      title: "Manly Park Kitchen",
      description: "Installation of a high-capacity commercial freezer room designed to maintain consistent sub-zero temperatures for fresh seafood storage.",
      image: "/images/Manly-Park-Kitchen/13.jpg",
      category: "Freezer Room"
    },
    {
      id: 3,
      title: "Healthcare Logistics",
      description: "Modernization of existing cool room facilities with new energy-efficient panels and advanced digital temperature monitoring systems.",
      image: "/images/Healthcare-Logistics/21.jpg",
      category: "Cool Room Upgrade"
    },
    {
      id: 4,
      title: "Aroa Biosurgery",
      description: "Custom-sized cool room built to fit a unique corner space, providing optimal temperature control for dough proofing and ingredient storage.",
      image: "/images/Aroa-Biosurgery/28.jpg",
      category: "Custom Build"
    },
        {
      id: 5,
      title: "Primor Produce",
      description: "Custom-sized cool room built to fit a unique corner space, providing optimal temperature control for dough proofing and ingredient storage.",
      image: "/images/Primor-Produce/34.jpg",
      category: "Custom Build"
    },
    // {
    //   id: 5,
    //   title: "Regional Fruit & Veg Wholesaler",
    //   description: "Large-scale commercial cool room installation for a regional wholesaler, featuring heavy-duty sliding doors and high-airflow cooling units.",
    //   image: "images/freezer-rooms-sample-img2.jpg",
    //   category: "Commercial Installation"
    // }
  ];

  return (
    <div className="bg-white">
      <Navbar />
      {/* Header */}
      <section className="bg-navy-900 py-24">
        <div className="absolute inset-0 opacity-20 industrial-grid"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white my-15 uppercase tracking-tight"
          >
            Completed Projects
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-400 max-w-2xl "
          >
            A showcase of our custom refrigeration work for businesses across the region.
          </motion.p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {projects.map((project, index) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
              >
                <div className="w-full lg:w-3/5">
                  <div className="relative overflow-hidden rounded-xl shadow-2xl aspect-[3/2]">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-6 left-6 bg-navy-900 text-white px-4 py-2 rounded text-xs font-bold uppercase tracking-widest">
                      {project.category}
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-2/5">
                  <h2 className="text-3xl font-bold text-navy-900 mb-6 leading-tight">{project.title}</h2>
                  <p className="text-slate-600 text-lg leading-relaxed mb-8">
                    {project.description}
                  </p>
                  <div className="h-1 w-12 bg-navy-900 mb-8"></div>
                  <Link 
                    href="/contact" 
                    className="text-navy-900 font-bold flex items-center hover:underline uppercase tracking-widest text-sm"
                  >
                    Discuss a similar project <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-muted-grey border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-navy-900 mb-6">Need a custom solution for your business?</h2>
          <p className="text-lg text-slate-600 mb-10">
            Every project is unique. We work closely with you to design and build exactly what you need.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center bg-navy-900 text-white px-8 py-4 rounded font-bold text-lg hover:bg-navy-800 transition-all shadow-lg"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}
