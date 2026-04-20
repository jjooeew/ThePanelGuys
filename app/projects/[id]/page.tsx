'use client';

import { motion } from 'motion/react';
import { PROJECTS } from '../../constants';
import { ArrowLeft, Clock, User, Tag, CheckCircle2, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React from 'react';
import Navbar from '@/app/components/Navbar';

export default function ProjectDetail() {


  const params = useParams();
  const id = params?.id;
  const project = PROJECTS.find(p => p.id.toString() === id);

  if (!project) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-navy-900 mb-4">Project Not Found</h2>
        <Link href="/projects" className="text-navy-900 font-bold flex items-center hover:underline">
          <ArrowLeft className="mr-2" size={20} /> Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* <Navbar /> */}

      <div className="bg-slate-50 border-b border-slate-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm text-slate-500 uppercase tracking-widest font-bold">
            <Link href="/" className="hover:text-navy-900 transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link href="/projects" className="hover:text-navy-900 transition-colors">Projects</Link>
            <ChevronRight size={14} />
            <span className="text-navy-900">{project.title}</span>
          </nav>
        </div>
      </div>

      {/* Hero Image */}
      <section className="relative h-[50vh] md:h-[60vh]">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-navy-900/20"></div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Left Column: Details */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <span className="text-navy-900 font-bold uppercase tracking-widest text-sm mb-4 block">Project Discovery</span>
                <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-8 leading-tight">
                  {project.title}
                </h1>
                
                <div className="prose prose-lg text-slate-600 max-w-none space-y-6">
                  <p className="text-xl font-medium text-slate-800 leading-relaxed italic border-l-4 border-navy-900 pl-6 mb-8">
                    {project.description}
                  </p>
                  {/* <p className="leading-relaxed">
                    {project.fullDescription}
                  </p> */}
                </div>

                {/* Gallery */}
                {project.gallery.length > 0 && (
                  <div className="mt-16">
                    <h3 className="text-2xl font-bold text-navy-900 mb-8">Project Gallery</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {project.gallery.map((img, idx) => (
                        <div key={idx} className="overflow-hidden rounded-lg aspect-video shadow-md">
                          <img 
                            src={img} 
                            alt={`${project.title} gallery ${idx + 1}`} 
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </div>

            {/* Right Column: Sidebar Meta */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-muted-grey p-8 rounded-xl border border-slate-200 sticky top-28"
              >
                <h3 className="text-xl font-bold text-navy-900 mb-8 pb-4 border-b border-slate-200 uppercase tracking-tight">Project Summary</h3>
                
                <div className="space-y-6 mb-10">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-white rounded flex items-center justify-center shadow-sm">
                      <User className="text-navy-900" size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Client</p>
                      <p className="font-bold text-navy-900">{project.title}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-white rounded flex items-center justify-center shadow-sm">
                      <Tag className="text-navy-900" size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Category</p>
                      <p className="font-bold text-navy-900">{project.category}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-white rounded flex items-center justify-center shadow-sm">
                      <Clock className="text-navy-900" size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Project Duration</p>
                      <p className="font-bold text-navy-900">{project.duration}</p>
                    </div>
                  </div>
                </div>

                {/* <h4 className="text-sm font-bold text-navy-900 mb-4 uppercase tracking-widest">Key Deliverables</h4>
                <ul className="space-y-3 mb-10">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-slate-600 text-sm">
                      <CheckCircle2 className="text-navy-700 shrink-0 mt-0.5" size={16} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul> */}

                <Link 
                  href="/contact" 
                  className="block w-full bg-navy-900 text-white text-center py-4 rounded font-bold hover:bg-navy-800 transition-all shadow-md"
                >
                  Inquire About This Service
                </Link>
                
                <Link 
                  href="/projects" 
                  className="flex items-center justify-center mt-6 text-sm font-bold text-slate-500 hover:text-navy-900 transition-colors uppercase tracking-widest"
                >
                  <ArrowLeft className="mr-2" size={16} /> All Projects
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
