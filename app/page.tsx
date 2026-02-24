"use client";

import { motion } from "motion/react";
import {
  ArrowRight,
  ShieldCheck,
  Clock,
  Hammer,
  Star,
  Quote,
} from "lucide-react";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  const services = [
    {
      title: "Custom Walk-in Cool Rooms",
      description:
        "Tailored refrigeration solutions built to your exact specifications and space requirements.",
      icon: <Hammer className="text-navy-900" size={24} />,
    },
    {
      title: "Commercial Freezers",
      description:
        "High-performance freezer rooms designed for reliability and energy efficiency.",
      icon: <ShieldCheck className="text-navy-900" size={24} />,
    },
    {
      title: "Maintenance & Repairs",
      description:
        "Fast, local service to keep your business running smoothly without downtime.",
      icon: <Clock className="text-navy-900" size={24} />,
    },
  ];

  const projects = [
    {
      id: 1,
      title: "The Local Butcher",
      category: "Full Fit-out",
      image: "https://picsum.photos/seed/refrig1/800/600",
    },
    {
      id: 2,
      title: "Coastal Seafood Market",
      category: "Freezer Room",
      image: "https://picsum.photos/seed/refrig2/800/600",
    },
    {
      id: 3,
      title: "Central Hotel Kitchen",
      category: "Cool Room Upgrade",
      image: "https://picsum.photos/seed/refrig3/800/600",
    },
  ];

  const testimonials = [
    {
      name: "David Miller",
      business: "Miller's Fine Meats",
      text: "Arctic Precision built our new walk-in freezer last year. The quality is top-notch and the team was professional from start to finish. Highly recommended.",
    },
    {
      name: "Sarah Jenkins",
      business: "The Green Grocer",
      text: "Honest advice and a fair price. They understood exactly what we needed for our small shop space. Great local service.",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="flex flex-col">
        {/* Hero Section */}
        <section className="relative h-[85vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="https://picsum.photos/seed/tradesman/1920/1080?brightness=0.6"
              alt="Owner working on-site"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-navy-900/40"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Custom Cool Rooms <br />
                <span className="text-white/90">Built Right.</span>
              </h1>
              <p className="text-xl text-white/90 mb-10 leading-relaxed font-medium">
                Reliable, high-performance refrigeration solutions for local
                businesses. Built by hand, built to last.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-white text-navy-900 px-8 py-4 rounded font-bold text-lg flex items-center justify-center hover:bg-slate-100 transition-all shadow-lg"
                >
                  Request a Quote
                  <ArrowRight className="ml-2" size={20} />
                </Link>
                <Link
                  href="/projects"
                  className="bg-navy-900/30 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded font-bold text-lg flex items-center justify-center hover:bg-white/10 transition-all"
                >
                  View Our Work
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 bg-muted-grey">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4 uppercase tracking-tight">
                Our Services
              </h2>
              <div className="w-20 h-1 bg-navy-900 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-white p-10 rounded-lg shadow-sm border border-slate-100"
                >
                  <div className="w-14 h-14 bg-slate-50 flex items-center justify-center rounded mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Projects Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4 uppercase tracking-tight">
                  Recent Projects
                </h2>
                <p className="text-slate-600 max-w-xl">
                  Take a look at some of our recent installations across the
                  region.
                </p>
              </div>
              <Link
                href="/projects"
                className="text-navy-900 font-bold flex items-center hover:underline uppercase tracking-widest text-sm"
              >
                View All Projects <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  className="group relative overflow-hidden rounded-lg aspect-[4/3]"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                    <span className="text-white/70 text-xs uppercase tracking-widest font-bold mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-white text-xl font-bold">
                      {project.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About the Owner Section */}
        <section className="py-24 bg-navy-900 text-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-white/20"></div>
                <img
                  src="https://picsum.photos/seed/owner/800/1000"
                  alt="Owner of Arctic Precision"
                  className="rounded-lg shadow-2xl relative z-10"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-white/20"></div>
              </div>
              <div>
                <span className="text-slate-400 font-bold uppercase tracking-widest text-sm mb-4 block">
                  About the Owner
                </span>
                <h2 className="text-4xl font-bold mb-8 leading-tight">
                  Decades of Experience in <br /> Commercial Refrigeration
                </h2>
                <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
                  <p>
                    My name is Mark, and I've spent the last 20 years building
                    and maintaining cool rooms for businesses just like yours. I
                    started Arctic Precision with a simple goal: to provide
                    honest, reliable service that local businesses can count on.
                  </p>
                  <p>
                    We don't cut corners. Every project we take on is built with
                    the best materials and a focus on long-term performance.
                    When you call us, you're talking to the person who will be
                    on-site doing the work.
                  </p>
                </div>
                <div className="mt-10 flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <Star className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-white">Mark Thompson</p>
                    <p className="text-slate-400 text-sm">
                      Founder & Lead Technician
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 bg-muted-grey">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-16 uppercase tracking-tight">
              What Our Clients Say
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="bg-white p-12 rounded-xl shadow-sm relative text-left"
                >
                  <Quote
                    className="absolute top-8 right-8 text-slate-100"
                    size={60}
                  />
                  <div className="flex mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="text-navy-900 fill-navy-900 mr-1"
                      />
                    ))}
                  </div>
                  <p className="text-slate-700 text-lg italic mb-8 leading-relaxed">
                    "{t.text}"
                  </p>
                  <div>
                    <p className="font-bold text-navy-900">{t.name}</p>
                    <p className="text-slate-500 text-sm uppercase tracking-widest">
                      {t.business}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white border-t border-slate-100">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-navy-900 mb-6">
              Ready to start your project?
            </h2>
            <p className="text-xl text-slate-600 mb-10">
              Contact us today for a free, no-obligation quote on your custom
              cool room or refrigeration needs.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center bg-navy-900 text-white px-10 py-5 rounded font-bold text-xl hover:bg-navy-800 transition-all shadow-xl"
            >
              Request a Quote Now
              <ArrowRight className="ml-3" size={24} />
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
